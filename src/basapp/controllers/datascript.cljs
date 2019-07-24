(ns basapp.controllers.datascript
  (:require [keechma.toolbox.pipeline.core :as pp :refer-macros [pipeline!]]
            [keechma.toolbox.pipeline.controller :as pp-controller]
            [basapp.datascript :as ds]
            [datascript.core :as dc]
            [cljs.pprint :refer [pprint]]
            [basapp.domain.seed :as seed]))


(comment
  (defn db-datascript []
    (:datascript (:context @basapp.core/running-app))))

(def controller
  (pp-controller/constructor
    {:params (fn [_] true)}
    {:on-start (pipeline! [value app-db]
                 (ds/transact! (concat
                                 (seed/insert-data seed/insert-sector seed/sectors)
                                 (seed/insert-data seed/insert-department seed/departments)
                                 (seed/insert-data seed/insert-floor seed/floors)
                                 (seed/insert-data seed/insert-office seed/offices)
                                 (seed/insert-data seed/insert-employee seed/employees)))
                 (pp/commit! (assoc-in app-db [:kv :datascript-initialized?] true))
                 (rescue! [e]
                   (println "ERROR->" e)))}))
