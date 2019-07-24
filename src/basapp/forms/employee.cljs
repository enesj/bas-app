(ns basapp.forms.employee
  (:require [keechma.toolbox.forms.core :as forms-core]
            [keechma.toolbox.pipeline.core :as pp :refer-macros [pipeline!]]
            [keechma.toolbox.tasks :as t]
            [basapp.forms.validators :as v]
            [datascript.core :as d]
            [basapp.datascript :as ds]
            [basapp.domain.seed :refer [insert-employee]]))


(defn get-init-data [db employee-id]
  (let [data (d/pull db '[*] employee-id)]
   {:name (:employee/name data)
    :last-name (:employee/last-name data)
    :uname (:employee/uname data)
    :email (:employee/email data)
    :phone (:employee/phone data)
    :type (:employee/type data)
    :position (:employee/position data)
    :department (:db/id (:employee/department data))
    :office (:db/id (:employee/office data))
    :active (:employee/active data)}))

(defrecord Form [validator])

(defmethod forms-core/get-data Form [_ app-db form-props]
  (pipeline! [value app-db]
             (t/block-until! [form-props :get-data] #(get-in % [:kv :datascript-initialized?]))
             ;(js/console.log "init-emplyee" (get-init-data (:datascript app-db) (get-in app-db [:route :data :id])))
             (get-init-data (:datascript app-db) (get-in app-db [:route :data :id]))))

(defmethod forms-core/submit-data Form [_ app-db _ data]
  (pipeline! [value app-db]
    ;(js/console.log "sdfdsf")
    (ds/transact!
      (insert-employee (:name data)
        (:last-name data)
        (:uname data)
        (:email data)
        (:phone data)
        (:type data)
        (:position data)
        (:department data)
        (:office data)
        (:active data)))))

(defmethod forms-core/on-submit-success Form [this app-db form-props data]
  (pipeline! [value app-db]
             (pp/redirect! {:page "employees"})))

(defn constructor []
  (->Form (v/to-validator {:name [:not-empty]
                           :last-name [:not-empty]
                           :uname [:not-empty]
                           :email [:not-empty :email]
                           :active [:not-empty]})))
