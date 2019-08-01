(ns basapp.ui.office
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [route>]]
            [basapp.datascript :refer [q> entity>]]
            [basapp.ui.inputs :as i]
            [antizer.reagent :as ant]
            [keechma.toolbox.forms.ui :as forms-ui]))

(defn render-form [ctx title data]
  (let [form-props [:office :form]]
    [:div.card-body
     [:form {:on-submit #(do (forms-ui/<submit ctx form-props %))}
      [i/render-errors ctx form-props]
      [i/text ctx form-props :short-name {:placeholder "Oznaka" :disabled (not= (:id data) 0)}]
      [i/text ctx form-props :name {:placeholder "Ime"}]
      [i/select ctx form-props :floor
       {:options (mapv (fn [r] {:value (:db/id r) :label (:floor/name r)}) (:floors data))
        :label "Sprat"}]
      [i/checkbox ctx form-props :active {:label "Aktivan"}]
      [:button.btn.btn-primary "Snimi"]
      [:button.btn.btn-secondary {:style {:margin-left "0.5em"}
                                  :on-click #(do (.preventDefault %)
                                                 (ui/redirect ctx {:page "offices"}))} "Odustani"]]]))

(defn render [ctx]
  (let [office-id (:id (route> ctx))
        office (cond
                     (= office-id 0) {:office/name "Nova" :office/last-name "prostorija"}
                     (> office-id 0) (entity> ctx office-id)
                     :default nil)
        data {:floors (q> ctx '[:find [(pull ?e [*]) ...] :in $ :where [?e :floor/short-name]])
              :offices (q> ctx '[:find [(pull ?e [*]) ...] :in $ :where [?e :office/short-name]])
              :id      office-id}]
    (if (:office/name office)
      [:div
       [ant/row
        [ant/col {:span 8 :offset 1 :style {:padding-top "1em"}} [:a {:href (ui/url ctx {:page "offices"})} "← Povratak na prostorije"]]]
       [ant/row
        [ant/col {:span 8 :offset 4 :style {:padding-top "1em"}} [:h3 (str (:office/name office) " " (:office/last-name office))]]]
       [ant/row
        [ant/col {:span 8 :offset 4 :style {:padding-top "1em"}}
         [render-form ctx "" data]]]
       [(ui/component ctx :employees)]]
      [ant/row
       [ant/col {:span 8 :offset 4 :style {:padding-top "1em"}} [:h3 (str "Ne postoji prostorija "  office-id)]]])))



(def component
  (ui/constructor {:renderer          render
                   :subscription-deps [:datascript]
                   :component-deps [:employees]}))