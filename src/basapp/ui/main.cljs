(ns basapp.ui.main
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [sub> <cmd route>]]
            [antizer.reagent :as ant]))

(defn render [ctx]
  (let [page (:page (route> ctx))]
    [ant/layout {:style {:background "#f0f2f5"}}
     [ant/layout-header {:class "banner"}
      [:a {:href (ui/url ctx {:page "dashboard"})} [:h2.banner-header "BAS poslovni sistem"]]]
     (case page
       "dashboard" [(ui/component ctx :dashboard)]
       "employees" [(ui/component ctx :employees)]
       "employee" [(ui/component ctx :employee)]
       "sectors" [(ui/component ctx :sectors)]
       "sector" [(ui/component ctx :sector)]
       "departments" [(ui/component ctx :departments)]
       "department" [(ui/component ctx :department)]
       [:div "404"])]))

(def component
  (ui/constructor
    {:renderer       render
     :component-deps [:dashboard :employees :employee :sectors :sector :departments :department]}))
