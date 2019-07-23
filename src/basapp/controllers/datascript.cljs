(ns basapp.controllers.datascript
  (:require [keechma.toolbox.pipeline.core :as pp :refer-macros [pipeline!]]
            [keechma.toolbox.pipeline.controller :as pp-controller]
            [basapp.datascript :as ds]
            [datascript.core :as dc]
            [cljs.pprint :refer [pprint]]
            [basapp.domain.bas :as d]))


(comment
  (defn db-datascript []
    (:datascript (:context @basapp.core/running-app))))



(def controller
  (pp-controller/constructor
    {:params (fn [_] true)}
    {:on-start (pipeline! [value app-db]
                 (ds/transact! (concat
                                 (d/insert-sectors d/sectors)
                                 (d/insert-departments d/departments)
                                 (d/insert-employees d/employees)))
                 ;(ds/transact! (d/insert-departments d/departments))
                 ;(ds/transact! (d/insert-employees d/employees))
                 ;(js/console.log (dc/entity  (:datascript app-db)  1))
                 ;(ds/transact!
                 ;   (d/insert-country (d/db app-db) "United States of America" "USA" "$"))
                 ;(ds/transact!
                 ;   (d/insert-country (d/db app-db) "Guatemala" "GTM" "Q"))
                 (pp/commit! (assoc-in app-db [:kv :datascript-initialized?] true))
                 (rescue! [e]
                   (println "ERROR->" e)))}))
