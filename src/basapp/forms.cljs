(ns basapp.forms
  (:require [basapp.forms.employee :as employee]
            [basapp.forms.sector :as sector]
            [basapp.forms.department :as department]))


(def forms
  {:employee (employee/constructor)
   :sector (sector/constructor)
   :department (department/constructor)})

(def forms-automount-fns
  {:employee (fn [r] (when (= "employee" (:page r)) :form))
   :sector (fn [r] (when (and (= "sector" (:page r))) :form))
   :department (fn [r] (when (= "department" (:page r)) :form))})
