(ns basapp.forms.floor
  (:require [keechma.toolbox.forms.core :as forms-core]
            [keechma.toolbox.pipeline.core :as pp :refer-macros [pipeline!]]
            [keechma.toolbox.tasks :as t]
            [basapp.forms.validators :as v]
            [datascript.core :as d]
            [basapp.datascript :as ds]
            [basapp.domain.seed :refer [insert-floor]]))


(defn get-init-data [db floor-id]
  (let [data (d/pull db '[*] floor-id)]
    {:name       (:floor/name data)
     :short-name (:floor/short-name data)
     :active     (:floor/active data)}))


(defrecord Form [validator])

(defmethod forms-core/call Form [form app-db form-props [cmd & args]]
  (when (= :reset-form cmd)
    (pipeline! [value app-db]
               ;(pp/send-command! [forms-core/id-key :unmount-form] [:floor :form])
               (pp/send-command! [forms-core/id-key :mount-form] [:floor :form]))))

(defmethod forms-core/get-data Form [_ app-db form-props]
  (pipeline! [value app-db]
             (t/block-until! [form-props :get-data] #(get-in % [:kv :datascript-initialized?]))
             ;(js/console.log "init-floor" (get-init-data (:datascript app-db) (get-in app-db [:route :data :id])))
             (get-init-data (:datascript app-db) (get-in app-db [:route :data :id]))))

(defmethod forms-core/submit-data Form [_ app-db _ data]
  (pipeline! [value app-db]
             (ds/transact!
               (insert-floor (:name data)
                             (:short-name data)
                             (:active data)))))

(defmethod forms-core/on-submit-success Form [this app-db form-props data]
  (pipeline! [value app-db]
             (pp/redirect! {:page "floors"})))

(defn constructor []
  (->Form (v/to-validator {:name       [:not-empty]
                           :short-name [:not-empty]})))
