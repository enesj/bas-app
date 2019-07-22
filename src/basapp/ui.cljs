(ns basapp.ui
  (:require [basapp.ui.main :as main]
            [basapp.ui.dashboard :as dashboard]
            [basapp.ui.employee :as employee]
            [basapp.ui.empolyees :as employees]
            [basapp.ui.sectors :as sectors]
            [basapp.ui.departments :as departments]))

(def ui
  {:main main/component
   :dashboard dashboard/component
   :employees employees/component
   :employee employee/component
   :sectors sectors/component
   :departments departments/component})
