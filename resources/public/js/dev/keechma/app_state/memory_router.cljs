(ns keechma.app-state.memory-router
  (:require [keechma.app-state.core :as core :refer [IRouter]]
            [cljs.core.async :refer [put!]]
            [keechma.util :refer [index-of]]))

(def app-route-states-atom (atom {}))

(def supported-redirect-actions #{:push :replace :back})

(defn get-redirect-action [action]
  (if (contains? supported-redirect-actions action)
    action
    :push))

(defn default-route? [r]
  (and (vector? r) (= "" (first r))))

(defn get-default-route [routes]
  (let [default-route (or (last (first (filter default-route? routes))) {})]
    {:data default-route :stack [default-route]}))

(defn get-initial-route [app-name routes]
  (if-let [app-route-state (get @app-route-states-atom app-name)]
    app-route-state
    (get-default-route routes)))

(defn push-to-stack [current-stack params]
  (if-let [idx (index-of current-stack params)]
    (vec (take (inc idx) current-stack))
    (conj current-stack params)))

(defn limit-stack [stack]
  (vec (take-last 50 stack)))

(defn apply-route-change [action routes current-route params]
  (let [current-stack (:stack current-route)]
    (case action
      :push {:data params :stack (limit-stack (push-to-stack current-stack params))}
      :replace {:data params :stack (limit-stack (conj (vec (drop-last current-stack)) params))} 
      :back (let [new-stack (limit-stack (vec (drop-last current-stack)))
                  new-params (last new-stack)]
              (if new-params
                {:data new-params :stack new-stack}
                (get-default-route routes)))
      {:data {} :stack [{}]})))

(defrecord MemoryRouter [app-name routes routes-chan app-db]
  IRouter
  (start! [this]
    (let [routes (:routes this)
          initial-route (get-initial-route app-name routes)]
      (swap! app-db assoc :route initial-route)
      this))
  (stop! [this] this)
  (url [_ params] params)
  (redirect! [this params]
    (core/redirect! this params :push))
  (redirect! [this params action]
    (let [routes-chan     (:routes-chan this)
          routes          (:routes this)
          redirect-action (get-redirect-action action)
          app-db          (deref (:app-db this))
          current-route   (:route app-db)
          new-route       (apply-route-change redirect-action routes current-route params)
          app-name        (:app-name this)]
      (swap! app-route-states-atom assoc app-name new-route)
      (put! routes-chan new-route)))
  (wrap-component [_] nil)
  (linkable? [_] false))

(defn constructor [routes routes-chan state]
  (let [[app-name _] (:name state)]
    (core/start! (->MemoryRouter app-name routes routes-chan (:app-db state)))))
