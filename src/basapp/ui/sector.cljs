(ns basapp.ui.sector
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [route>]]
            [basapp.datascript :refer [q> entity>]]
            [basapp.ui.inputs :as i]
            [basapp.ui.antd  :as ant]
            [keechma.toolbox.forms.ui :as forms-ui]))

(defn render-form [ctx title data]
  (let [form-props [:sector :form]]
    [:div.card-body
     [:form {:on-submit #(do (forms-ui/<submit ctx form-props %))}
      [i/render-errors ctx form-props]
      [i/text ctx form-props :short-name {:placeholder "Oznaka" :disabled (not= data 0)}]
      [i/text ctx form-props :name {:placeholder "Ime"}]
      [i/checkbox ctx form-props :active {:label "Aktivan"}]
      [:button.btn.btn-primary "Snimi"]
      [:button.btn.btn-secondary {:style {:margin-left "0.5em"}
                                  :on-click #(do (.preventDefault %)
                                                 (ui/redirect ctx {:page "sectors"}))} "Odustani"]]]))

(defn render [ctx]
  (let [sector-id (:id (route> ctx))
        sector (cond
                     (= sector-id 0) {:sector/name "Novi" :sector/last-name "sektor"}
                     (> sector-id 0) (entity> ctx sector-id)
                     :default nil)
        data {:sectors (q> ctx '[:find [(pull ?e [*]) ...] :in $ :where [?e :sector/short-name]])
              :id      sector-id}]
    (if (:sector/name sector)
      [:div
       [ant/row
        [ant/col {:span 8 :offset 1 :style {:padding-top "1em"}}
         [:a {:href (ui/url ctx {:page "sectors"})} "← Povratak na sektore"]]]
       [ant/row
        [ant/col {:span 8 :offset 4 :style {:padding-top "1em"}}
         [:h3 (str (:sector/name sector) " " (:sector/last-name sector))]]]
       [ant/row
        [ant/col {:span 8 :offset 4 :style {:padding-top "1em"}}
         [render-form ctx "" data]]]
       [(ui/component ctx :employees)]]
      [ant/row
       [ant/col {:span 8 :offset 4 :style {:padding-top "1em"}} [:h3 (str "Ne postoji sektor "  sector-id)]]])))

(def component
  (ui/constructor {:renderer          render
                   :subscription-deps [:datascript]
                   :component-deps [:employees]}))
