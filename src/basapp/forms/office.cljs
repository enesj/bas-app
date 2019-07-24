(ns basapp.forms.office
  (:require [keechma.toolbox.forms.core :as forms-core]
            [keechma.toolbox.pipeline.core :as pp :refer-macros [pipeline!]]
            [keechma.toolbox.tasks :as t]
            [basapp.forms.validators :as v]
            [datascript.core :as d]
            [basapp.datascript :as ds]
            [basapp.domain.seed :refer [insert-office]]))

(defn get-init-data [db office-id]
  (let [data (d/pull db '[*] office-id)]
    {:name       (:office/name data)
     :short-name (:office/short-name data)
     :floor     (:db/id  (:office/floor data))
     :active     (:office/active data)}))


(defrecord Form [validator])

(defmethod forms-core/call Form [form app-db form-props [cmd & args]]
  (when (= :reset-form cmd)
    (pipeline! [value app-db]
               (pp/send-command! [forms-core/id-key :mount-form] [:office :form]))))

(defmethod forms-core/get-data Form [_ app-db form-props]
  (pipeline! [value app-db]
             (t/block-until! [form-props :get-data] #(get-in % [:kv :datascript-initialized?]))
             (get-init-data (:datascript app-db) (get-in app-db [:route :data :id]))))

(defmethod forms-core/submit-data Form [_ app-db _ data]
  (pipeline! [value app-db]
             (ds/transact!
               (insert-office (:name data)
                              (:short-name data)
                              (:floor data)
                              (:active data)))))

(defmethod forms-core/on-submit-success Form [this app-db form-props data]
  (pipeline! [value app-db]
             (pp/redirect! {:page "offices"})))

(defn constructor []
  (->Form (v/to-validator {:name       [:not-empty]
                           :short-name [:not-empty]
                           :floor     [:not-empty]})))
