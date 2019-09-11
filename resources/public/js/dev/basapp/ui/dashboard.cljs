(ns basapp.ui.dashboard
  (:require [keechma.ui-component :as ui]
            [basapp.ui.antd  :as ant]))

(defn render-dash [ctx]
   [ant/layout-content
    [ant/row
     [ant/col {:span 8 :offset 2}
      [:a.row {:href (ui/url ctx {:page "employees"})} "Korisnici"]]]
    [ant/row
     [ant/col {:span 8 :offset 2}
      [:a.row {:href (ui/url ctx {:page "sectors"})} "Sektori"]]]
    [ant/row
     [ant/col {:span 8 :offset 2}
      [:a.row {:href (ui/url ctx {:page "departments"})} "Odjeljenja"]]]
    [ant/row
     [ant/col {:span 8 :offset 2}
      [:a.row {:href (ui/url ctx {:page "floors"})} "Spratovi"]]]
    [ant/row
     [ant/col {:span 8 :offset 2}
      [:a.row {:href (ui/url ctx {:page "offices"})} "Prostorije"]]]
    [ant/row
     [ant/col {:span 8 :offset 2}
      [:a.row {:href (ui/url ctx {:page "folders"})} "Folderi"]]]])


(defn render [ctx]
   [render-dash ctx])

(def component
  (ui/constructor {:renderer render}))
