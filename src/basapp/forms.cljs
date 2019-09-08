(ns basapp.forms
  (:require [basapp.forms.employee :as employee]
            [basapp.forms.sector :as sector]
            [basapp.forms.department :as department]
            [basapp.forms.floor :as floor]
            [basapp.forms.office :as office]
            [basapp.forms.folder :as folder]))


(def forms
  {:employee (employee/constructor)
   :sector (sector/constructor)
   :department (department/constructor)
   :floor (floor/constructor)
   :office (office/constructor)
   :folder (folder/constructor)})

(def forms-automount-fns
  {:employee (fn [r] (when (= "employee" (:page r)) :form))
   :sector (fn [r] (when (= "sector" (:page r)) :form))
   :department (fn [r] (when (= "department" (:page r)) :form))
   :floor (fn [r] (when (= "floor" (:page r)) :form))
   :office (fn [r] (when (= "office" (:page r)) :form))
   :folder (fn [r] (when (= "folder" (:page r)) :form))})
