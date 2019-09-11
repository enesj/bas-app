(ns basapp.ui
  (:require [basapp.ui.main :as main]
            [basapp.ui.dashboard :as dashboard]
            [basapp.ui.employee :as employee]
            [basapp.ui.empolyees :as employees]
            [basapp.ui.sectors :as sectors]
            [basapp.ui.departments :as departments]
            [basapp.ui.department :as department]
            [basapp.ui.sector :as sector]
            [basapp.ui.floors :as floors]
            [basapp.ui.floor :as floor]
            [basapp.ui.offices :as offices]
            [basapp.ui.office :as office]
            [basapp.ui.folders :as folders]
            [basapp.ui.folder :as folder]))

(def ui
  {:main main/component
   :dashboard dashboard/component
   :employees employees/component
   :employee employee/component
   :sectors sectors/component
   :sector sector/component
   :departments departments/component
   :department department/component
   :floors floors/component
   :floor floor/component
   :offices offices/component
   :office office/component
   :folders folders/component
   :folder folder/component})
