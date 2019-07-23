(ns basapp.ui.department
  (:require [keechma.ui-component :as ui]
    [keechma.toolbox.ui :refer [route>]]
    [basapp.datascript :refer [q> entity>]]
    [basapp.ui.inputs :as i]
    [antizer.reagent :as ant]
    [keechma.toolbox.forms.ui :as forms-ui]
    [reagent.core :as r]))

(defn render-form [ctx title data]
  (let [form-props [:department :form]]
    [:div.card-body
     [:form {:on-submit #(do (forms-ui/<submit ctx form-props %))}
      [i/render-errors ctx form-props]
      [i/text ctx form-props :short-name {:placeholder "Oznaka" :disabled (not= (:id data) 0)}]
      [i/text ctx form-props :name {:placeholder "Ime"}]
      [i/select ctx form-props :sector
       {:options (mapv (fn [r] {:value (:db/id r) :label (:sector/short-name r)}) (:sectors data))
        :label "Sektor"}]
      [i/checkbox ctx form-props :active {:label "Aktivan"}]
      [:button.btn.btn-primary "Snimi"]
      [:button.btn.btn-secondary {:style {:margin-left "0.5em"}
                                  :on-click #(do (.preventDefault %)
                                                 (ui/redirect ctx {:page "departments"}))} "Odustani"]]]))

(defn render [ctx]
  (let [department-id (:id (route> ctx))
        department (cond
                     (= department-id 0) {:department/name "Novo" :department/last-name "odjeljenje"}
                     (> department-id 0) (entity> ctx department-id)
                     :default nil)
        data {:sectors (q> ctx '[:find [(pull ?e [*]) ...] :in $ :where [?e :sector/short-name]])
              :departments (q> ctx '[:find [(pull ?e [*]) ...] :in $ :where [?e :department/short-name]])
              :id      department-id}]
    (if (:department/name department)
      [:div
       [ant/row
        [ant/col {:span 8 :offset 1 :style {:padding-top "1em"}} [:a {:href (ui/url ctx {:page "departments"})} "← Povratak na odjeljenja"]]]
       [ant/row
        [ant/col {:span 8 :offset 4 :style {:padding-top "1em"}} [:h3 (str (:department/name department) " " (:department/last-name department))]]]
       [ant/row
        [ant/col {:span 8 :offset 4 :style {:padding-top "1em"}}
         [render-form ctx "" data]]]
       [(ui/component ctx :employees)]]
      [ant/row
       [ant/col {:span 8 :offset 4 :style {:padding-top "1em"}} [:h3 (str "Ne postoji odjeljenje "  department-id)]]])))



(def component
  (ui/constructor {:renderer          render
                   :subscription-deps [:datascript]
                   :component-deps [:employees]}))