(ns basapp.forms.department
  (:require [keechma.toolbox.forms.core :as forms-core]
            [keechma.toolbox.pipeline.core :as pp :refer-macros [pipeline!]]
            [keechma.toolbox.tasks :as t]
            [basapp.forms.validators :as v]
            [datascript.core :as d]
            [basapp.datascript :as ds]
            [basapp.domain.bas :refer [insert-department]]))
;[basapp.util :refer [pretty-print]]))


(defn get-init-data [db department-id]
  (let [data (d/pull db '[*] department-id)]
    {:name       (:department/name data)
     :short-name (:department/short-name data)
     :sector     (:db/id  (:department/sector data))
     :active     (:department/active data)}))


(defrecord Form [validator])

(defmethod forms-core/call Form [form app-db form-props [cmd & args]]
  (when (= :reset-form cmd)
    (pipeline! [value app-db]
               (pp/send-command! [forms-core/id-key :mount-form] [:department :form]))))

(defmethod forms-core/get-data Form [_ app-db form-props]
  (pipeline! [value app-db]
             (t/block-until! [form-props :get-data] #(get-in % [:kv :datascript-initialized?]))
             (get-init-data (:datascript app-db) (get-in app-db [:route :data :id]))))

(defmethod forms-core/submit-data Form [_ app-db _ data]
  (pipeline! [value app-db]
             (ds/transact!
               (insert-department (:name data)
                                  (:short-name data)
                                  (:sector data)
                                  (:active data)))))

(defmethod forms-core/on-submit-success Form [this app-db form-props data]
  (pipeline! [value app-db]
             (pp/redirect! {:page "departments"})))

(defn constructor []
  (->Form (v/to-validator {:name       [:not-empty]
                           :short-name [:not-empty]
                           :sector     [:not-empty]})))

