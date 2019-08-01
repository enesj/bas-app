(ns basapp.forms.folder
  (:require [keechma.toolbox.forms.core :as forms-core]
            [keechma.toolbox.pipeline.core :as pp :refer-macros [pipeline!]]
            [keechma.toolbox.tasks :as t]
            [basapp.forms.validators :as v]
            [datascript.core :as d]
            [basapp.datascript :as ds]
            [basapp.domain.seed :refer [insert-folder]]))

(defn get-init-data [db folder-id]
  (let [data (d/pull db '[*] folder-id)]
    {:link         (:folder/link data)
     :description  (:folder/description data)
     :responsible1 (:db/id (:folder/responsible1 data))
     :responsible2 (:db/id (:folder/responsible2 data))
     :parent       (:db/id (:folder/parent data))
     :active       (:folder/active data)}))


(defrecord Form [validator])

(defmethod forms-core/call Form [form app-db form-props [cmd & args]]
  (when (= :reset-form cmd)
    (pipeline! [value app-db]
               (pp/send-command! [forms-core/id-key :mount-form] [:folder :form]))))

(defmethod forms-core/get-data Form [_ app-db form-props]
  (pipeline! [value app-db]
             (t/block-until! [form-props :get-data] #(get-in % [:kv :datascript-initialized?]))
             (get-init-data (:datascript app-db) (get-in app-db [:route :data :id]))))

(defmethod forms-core/submit-data Form [_ app-db _ data]
  (pipeline! [value app-db]
             (ds/transact!
               (insert-folder (:link data)
                              (:description data)
                              (:responsible1 data)
                              (:responsible2 data)
                              (:parent data)
                              (:active data)
                              nil))))

(defmethod forms-core/on-submit-success Form [this app-db form-props data]
  (pipeline! [value app-db]
             (pp/redirect! {:page "folders"})))

(defn constructor []
  (->Form (v/to-validator {:link       [:not-empty]
                           :responsible [:not-empty]})))


