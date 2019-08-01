(ns basapp.ui.floor
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [route>]]
            [basapp.datascript :refer [q> entity>]]
            [basapp.ui.inputs :as i]
            [antizer.reagent :as ant]
            [keechma.toolbox.forms.ui :as forms-ui]))

(defn render-form [ctx title data]
  (let [form-props [:floor :form]]
    [:div.card-body
     [:form {:on-submit #(do (forms-ui/<submit ctx form-props %))}
      [i/render-errors ctx form-props]
      [i/text ctx form-props :short-name {:placeholder "Oznaka" :disabled (not= data 0)}]
      [i/text ctx form-props :name {:placeholder "Ime"}]
      [i/checkbox ctx form-props :active {:label "Aktivan"}]
      [:button.btn.btn-primary "Snimi"]
      [:button.btn.btn-secondary {:style {:margin-left "0.5em"}
                                  :on-click #(do (.preventDefault %)
                                                 (ui/redirect ctx {:page "floors"}))} "Odustani"]]]))

(defn render [ctx]
  (let [floor-id (:id (route> ctx))
        floor (cond
                 (= floor-id 0) {:floor/name "Novi" :floor/last-name "sprat"}
                 (> floor-id 0) (entity> ctx floor-id)
                 :default nil)
        data {:floors (q> ctx '[:find [(pull ?e [*]) ...] :in $ :where [?e :floor/short-name]])
              :id      floor-id}]
    (if (:floor/name floor)
      [:div
       [ant/row
        [ant/col {:span 8 :offset 1 :style {:padding-top "1em"}}
         [:a {:href (ui/url ctx {:page "floors"})} "← Povratak na spratovee"]]]
       [ant/row
        [ant/col {:span 8 :offset 4 :style {:padding-top "1em"}}
         [:h3 (str (:floor/name floor) " " (:floor/last-name floor))]]]
       [ant/row
        [ant/col {:span 8 :offset 4 :style {:padding-top "1em"}}
         [render-form ctx "" data]]]
       [(ui/component ctx :employees)]]
      [ant/row
       [ant/col {:span 8 :offset 4 :style {:padding-top "1em"}} [:h3 (str "Ne postoji sprat "  floor-id)]]])))

(def component
  (ui/constructor {:renderer          render
                   :subscription-deps [:datascript]
                   :component-deps [:employees]}))

