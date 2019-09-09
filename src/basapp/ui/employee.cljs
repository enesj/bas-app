(ns basapp.ui.employee
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [route>]]
            [basapp.datascript :refer [q> entity>]]
            [basapp.ui.inputs :as i]
            [basapp.ui.antd  :as ant]
            [basapp.util :as util]
            [keechma.toolbox.forms.ui :as forms-ui]))


(defn render-form [ctx title data]
  (let [form-props [:employee :form]]
     [:form {:on-submit #(forms-ui/<submit ctx form-props %)}
      [i/render-errors ctx form-props]
      [i/text ctx form-props :uname {:placeholder "Korisničko ime" :disabled (not= (:id data) 0)}]
      [i/text ctx form-props :name {:placeholder "Ime"}]
      [i/text ctx form-props :last-name {:placeholder "Prezime"}]
      [i/text ctx form-props :email {:placeholder "E-mail"}]
      [i/select ctx form-props :department
       {:options (mapv (fn [r]
                         {:value (:db/id r) :label (:department/short-name r)}) (:departments data))
        :label "Odjeljenje"}]
      [i/text ctx form-props :phone {:placeholder "Telefon"}]
      [i/text ctx form-props :type {:placeholder "Kategorija"}]
      [i/text ctx form-props :position {:placeholder "Pozicija"}]
      [i/select ctx form-props :office
       {:options (mapv (fn [r]
                         {:value (:db/id r) :label (:office/name r)}) (:offices data))
        :label "Prostorija"}]
      [i/checkbox ctx form-props :active {:label "Aktivan"}]
      [:button.btn.btn-primary "Snimi"]
      [:button.btn.btn-secondary {:style {:margin-left "0.5em"}
                                  :on-click #(do (.preventDefault %)
                                                 (ui/redirect ctx {:page "employees"}))} "Odustani"]]))


(defn render [ctx]
  (let [employee-id (:id (route> ctx))
        employee (cond
                   (= employee-id 0) {:employee/name "Novi" :employee/last-name "korisnik"}
                   (> employee-id 0) (entity> ctx employee-id)
                   :default nil)
        data {:employees (q> ctx '[:find [(pull ?e [*]) ...] :in $ :where [?e :employee/uname]])
              :departments (q> ctx '[:find [(pull ?e [*]) ...] :in $ :where [?e :department/short-name]])
              :offices (q> ctx '[:find [(pull ?e [*]) ...] :in $ :where [?e :office/short-name]])
              :floors (q> ctx '[:find [(pull ?e [*]) ...] :in $ :where [?e :floor/short-name]])
              :id      employee-id}]
    (if (:employee/name employee)
      [:div
       [ant/row
        [ant/col util/row-style-8 [:a {:href (ui/url ctx {:page "employees"})} "← Povratak na korisnike"]]]
       [ant/row
        [ant/col {:span 8 :offset 4 :style {:padding-top "1em"}} [:h3 (str (:employee/name employee) " " (:employee/last-name employee))]]]
       [ant/row
        [ant/col {:span 8 :offset 4 :style {:padding-top "1em"}}
         [render-form ctx "" data]]]]
      [ant/row
       [ant/col {:span 8 :offset 4 :style {:padding-top "1em"}} [:h3 (str "Ne postoji korisnik "  employee-id)]]])))

(def component
  (ui/constructor {:renderer          render
                   :subscription-deps [:datascript]}))

