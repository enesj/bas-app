(ns basapp.ui.floor
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [route>]]
            [basapp.datascript :refer [q> entity>]]
            [basapp.ui.inputs :as i]
            [basapp.ui.antd  :as ant]
            [basapp.util :as util]
            [keechma.toolbox.forms.ui :as forms-ui]))

(defn render-form [ctx title data]
  (let [form-props [:floor :form]]
    [:div.card-body
     [:form {:on-submit #(forms-ui/<submit ctx form-props %)}
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
        floor (entity> ctx floor-id)
        title (or (:floor/name floor) "Dodaj sprat")
        data {:floors (q> ctx '[:find [(pull ?e [*]) ...] :in $ :where [?e :floor/short-name]])}]
    (if (or (:floor/name floor) (not floor-id))
      [:div
       [ant/row
        [ant/col util/row-style-8
         [:a {:href (ui/url ctx {:page "floors"})} "← Povratak na spratove"]]]
       [ant/row
        [ant/col util/row-style-8
         [:h3 title]]]
       [ant/row
        [ant/col util/row-style-8
         [render-form ctx "" data]]]
       [(ui/component ctx :employees)]]
      [ant/row
       [ant/col util/row-style-8 [:h3 "Pogrešan link "]]])))

(def component
  (ui/constructor {:renderer          render
                   :subscription-deps [:datascript]
                   :component-deps [:employees]}))

