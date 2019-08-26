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
   :sector (fn [r] (when (and (= "sector" (:page r))) :form))
   :department (fn [r] (when (= "department" (:page r)) :form))
   :floor (fn [r] (when (and (= "floor" (:page r))) :form))
   :office (fn [r] (when (and (= "office" (:page r))) :form))
   :folder (fn [r] (when (and (= "folder" (:page r))) :form))})
