(ns basapp.core
  (:require [reagent.core :as reagent]
            [keechma.app-state :as app-state]
            [keechma.toolbox.dataloader.app :as dataloader]
            [keechma.toolbox.forms.app :as forms]
            [basapp.controllers :refer [controllers]]
            [basapp.ui :refer [ui]]
            [basapp.subscriptions :refer [subscriptions]]
            [basapp.edb :refer [edb-schema]]
            [basapp.datasources :refer [datasources]]
            [basapp.forms :as basapp-forms]
            [basapp.domain.route :as route]
            [basapp.datascript :as datascript]
            [basapp.domain.schema :as  schema]))

(def app-definition
  (-> {:components    ui
       :controllers   controllers
       :subscriptions subscriptions
       :html-element  (.getElementById js/document "app")
       :route-processor route/processor
       :routes [["" {:page "dashboard"}]
                ":page"
                ":page/:id"
                ":page/:id/:action"]}
      (dataloader/install datasources edb-schema)
      (forms/install basapp-forms/forms basapp-forms/forms-automount-fns)
      (datascript/install schema/bas)))

(defonce running-app (clojure.core/atom nil))

(defn start-app! []
  (reset! running-app (app-state/start! app-definition)))

(defn dev-setup []
  (when ^boolean js/goog.DEBUG
    (enable-console-print!)
    (println "dev mode")))

(defn reload []
  (let [current @running-app]
    (if current
      (app-state/stop! current start-app!)
      (start-app!))))

(defn ^:export main []
  (dev-setup)
  (start-app!))
