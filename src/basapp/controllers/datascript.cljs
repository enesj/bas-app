(ns basapp.controllers.datascript
  (:require [keechma.toolbox.pipeline.core :as pp :refer-macros [pipeline!]]
            [keechma.toolbox.pipeline.controller :as pp-controller]
            [basapp.datascript :as ds]
            [datascript.core :as dc]
            [keechma.controller :as c]
            [cljs.pprint :refer [pprint]]
            [basapp.domain.seed :as seed]))


(comment
  (defn db-datascript []
    (:datascript (:context @basapp.core/running-app))))


;(def folders
;  (map ds/transact! (seed/insert-data seed/insert-folder seed/folders 'app-db)))

(def controller
  (pp-controller/constructor
    {:params (fn [_] true)}
    {:on-start (pipeline! [value app-db]
                          ;~folders
                          (ds/transact! (seed/insert-data seed/insert-sector seed/sectors app-db))
                          (ds/transact! (seed/insert-data seed/insert-floor seed/floors app-db))
                          (ds/transact! (seed/insert-data seed/insert-department seed/departments app-db))
                          (ds/transact! (seed/insert-data seed/insert-office seed/offices app-db))
                          (ds/transact! (seed/insert-data seed/insert-employee seed/employees app-db))
                          (ds/transact! (seed/insert-data seed/insert-folder seed/folders app-db))
                          (ds/transact! (seed/insert-data seed/insert-folder-parent seed/folders app-db))
                          (pp/commit! (assoc-in app-db [:kv :datascript-initialized?] true))
                          (rescue! [e
                                    (println "ERROR->" e)]))}))

;~