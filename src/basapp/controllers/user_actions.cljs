(ns basapp.controllers.user-actions
  (:require [keechma.toolbox.pipeline.core :as pp :refer-macros [pipeline!]]
            [keechma.toolbox.pipeline.controller :as pp-controller]
            [keechma.toolbox.dataloader.controller :refer [wait-dataloader-pipeline!]]))

(def controller
  (pp-controller/constructor
    (constantly true)
    {:on-route-changed (pipeline! [value app-db]
                                  ;(js/console.log value)
                                  (when-not (= (:route value) ":page/:id")
                                    (pp/commit! (assoc-in app-db [:kv :filter] []))))
     :filter (pipeline! [value app-db]
                        (pp/commit! (assoc-in app-db [:kv :filter] value)))}))


