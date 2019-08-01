(ns basapp.ui.main
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [sub> <cmd route>]]
            [antizer.reagent :as ant]))

(defn render [ctx]
  (let [page (:page (route> ctx))]
    [ant/layout {:style {:padding-bottom "1em"}}
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
       "floors" [(ui/component ctx :floors)]
       "floor" [(ui/component ctx :floor)]
       "offices" [(ui/component ctx :offices)]
       "office" [(ui/component ctx :office)]
       "folders" [(ui/component ctx :folders)]
       ;"folder" [(ui/component ctx :folder)]
       [:div "404"])]))

(def component
  (ui/constructor
    {:renderer       render
     :component-deps [:dashboard :employees :employee :sectors :sector :departments :department :floors
                      :floor :offices :office :folders]}))
