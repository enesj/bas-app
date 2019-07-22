(ns basapp.ui.dashboard
  (:require [keechma.ui-component :as ui]
            [antizer.reagent :as ant]))

(defn render-dash [ctx]
   [ant/layout-content
    [ant/row
     [:a.row {:href (ui/url ctx {:page "employees"})} "Korisnici"]]
    [ant/row
     [:a.row {:href (ui/url ctx {:page "sectors"})} "Sektori"]]
    [ant/row
     [:a.row {:href (ui/url ctx {:page "departments"})} "Odjeljenja"]]])


(defn render [ctx]
   [render-dash ctx])

(def component
  (ui/constructor {:renderer render}))
