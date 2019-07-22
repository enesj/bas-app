(ns basapp.datascript
  (:require [keechma.app-state.core :refer [reg-on-start reg-on-stop]]
            [datascript.core :as d]
            [reagent.core :as r]
            [keechma.toolbox.pipeline.core :as pipeline]
            [keechma.controller :as c]
            [keechma.toolbox.ui :refer [sub>]]))

(defn start-datascript [config]
  (let [datomic-cursor (r/cursor (:app-db config) [:datascript])
        conn (get-in config [:context :datascript])]
    (d/listen! conn ::tx (fn [tx-report] (reset! datomic-cursor (:db-after tx-report))))
    config))

(defn stop-datascript [config]
  (let [conn (get-in config [:context :datascript])]
    (d/unlisten! conn ::tx)
    config))

(defn install
  ([app-config] (install app-config nil))
  ([app-config schema]
   (-> app-config
       (assoc-in [:context :datascript] (d/create-conn schema))
       (reg-on-start #(start-datascript %))
       (reg-on-stop #(stop-datascript %)))))

(defrecord TransactSideffect [transactions]
  pipeline/ISideffect
  (call! [this controller _ _]
    (let [ds (c/context controller :datascript)]
      (d/transact! ds transactions))))

(defn transact! [& transactions]
  (->TransactSideffect (apply concat transactions)))

(defn q> [ctx query & args]
  (let [db (sub> ctx :datascript)]
    (when db
      (if (seq args)
        (apply d/q query db args)
        (d/q query db)))))

(defn entity> [ctx id]
  (when-let [db (sub> ctx :datascript)]
    (d/entity db id)))
