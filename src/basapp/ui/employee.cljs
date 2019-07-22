(ns basapp.ui.employee
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [route>]]
            [basapp.datascript :refer [q> entity>]]
            [basapp.ui.inputs :as i]
            [antizer.reagent :as ant]
            [keechma.toolbox.forms.ui :as forms-ui]
            [reagent.core :as r]))



(defn render-form-errors [ctx form-props]
  (let [form-state (forms-ui/form-state> ctx form-props)]
    (when (= :submit-failed (get-in form-state [:state :type]))
      (let [e (ex-message (get-in form-state [:state :cause]))]
        [:div.alert.alert-danger e]))))


(defn render-form [ctx title data]
  (let [form-props [:employee :form]]
     [:form {:on-submit #(forms-ui/<submit ctx form-props %)}
      [render-form-errors ctx form-props]
      [i/text ctx form-props :uname {:placeholder "Korisničko ime" :disabled (not= (:id data) 0)}]
      [i/text ctx form-props :name {:placeholder "Ime"}]
      [i/text ctx form-props :last-name {:placeholder "Prezime"}]
      [i/text ctx form-props :email {:placeholder "E-mail"}]
      [i/select ctx form-props :department
       {:options (mapv (fn [r]
                         {:value (:db/id r) :label (:department/short-name r)}) (:departments data))
        :label "Odjeljenje"}]
      ;[i/select ctx form-props :sector
      ; {:options (mapv (fn [r] {:value (:db/id r) :label (:sector/short-name r)}) (:sectors data))
      ;  :label "Sektor"}]
      [i/text ctx form-props :phone {:placeholder "Telefon"}]
      [i/text ctx form-props :type {:placeholder "Kategorija"}]
      [i/text ctx form-props :position {:placeholder "Pozicija"}]
      [i/checkbox ctx form-props :active {:label "Aktivan"}]
      [:button.btn.btn-primary "Snimi"]]))


(defn render [ctx]
  (let [employee-id (:id (route> ctx))
        employee (cond
                   (= employee-id 0) {:employee/name "Novi" :employee/last-name "korisnik"}
                   (> employee-id 0) (entity> ctx employee-id)
                   :default nil)
        data {:employees (q> ctx '[:find [(pull ?e [*]) ...] :in $ :where [?e :employee/uname]])
              :departments (q> ctx '[:find [(pull ?e [*]) ...] :in $ :where [?e :department/short-name]])
              :id      employee-id}]
    (if (:employee/name employee)
      [:div
       [ant/row
        [ant/col {:span 8 :offset 1 :style {:padding-top "1em"}} [:a {:href (ui/url ctx {:page "employees"})} "← Povratak na korisnike"]]]
       [ant/row
        [ant/col {:span 8 :offset 4 :style {:padding-top "1em"}} [:h3 (str (:employee/name employee) " " (:employee/last-name employee))]]]
       [ant/row
        [ant/col {:span 8 :offset 4 :style {:padding-top "1em"}}
         [render-form ctx "" data]]]]
      [ant/row
       [ant/col {:span 8 :offset 4 :style {:padding-top "1em"}} "Nije pronadjen korisnik"]])))

(def component
  (ui/constructor {:renderer          render
                   :subscription-deps [:datascript]}))

