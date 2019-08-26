(ns basapp.ui.folder
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [route>]]
            [basapp.datascript :refer [q> entity>]]
            [basapp.ui.inputs :as i]
            [antizer.reagent :as ant]
            [keechma.toolbox.forms.ui :as forms-ui]))

(defn render-form [ctx title data]
  (let [form-props [:folder :form]]
    ;(js/console.log "folder data" data)
    [:div.card-body
     [:form {:on-submit #(do (forms-ui/<submit ctx form-props %))}
      [i/render-errors ctx form-props]
      [i/text ctx form-props :link {:placeholder "Link" :disabled (not= (:id data) 0)}]
      [i/text ctx form-props :description {:placeholder "Opis"}]
      [i/select ctx form-props :responsible1
       {:options (mapv (fn [r] {:value (:db/id r) :label (:employee/name r)})
                       (:employees data))
        :label "Odgovoran 1"}]
      [i/select ctx form-props :responsible2
       {:options (mapv (fn [r] {:value (:db/id r) :label (:employee/name r)})
                       (:employees data))
        :label "Odgovoran 2"}]
      [i/select ctx form-props :parent
       {:options (mapv (fn [r] {:value (:db/id r) :label (:folder/link r)})
                       (:folders data))
        :label "Nalazi se u:"}]
      [i/checkbox ctx form-props :active {:label "Aktivan"}]
      [:button.btn.btn-primary "Snimi"]
      [:button.btn.btn-secondary {:style {:margin-left "0.5em"}
                                  :on-click #(do (.preventDefault %)
                                                 (ui/redirect ctx {:page "folders"}))} "Odustani"]]]))

(defn render [ctx]
  (let [folder-id (:id (route> ctx))
        folder (cond
                     (= folder-id 0) {:folder/name "Nova" :folder/last-name "folder"}
                     (> folder-id 0) (entity> ctx folder-id)
                     :default nil)
        data {:employees (q> ctx '[:find [(pull ?e [*]) ...] :in $ :where [?e :employee/email]])
              :folders (q> ctx '[:find [(pull ?e [*]) ...] :in $ :where [?e :folder/link]])
              :id      folder-id}]
    (if (:folder/link folder)
      [:div
       [ant/row
        [ant/col {:span 8 :offset 1 :style {:padding-top "1em"}} [:a {:href (ui/url ctx {:page "folders"})} "← Povratak na foldere"]]]
       [ant/row
        [ant/col {:span 8 :offset 4 :style {:padding-top "1em"}} [:h3 (str (:folder/link folder))]]]
       [ant/row
        [ant/col {:span 8 :offset 4 :style {:padding-top "1em"}}
         [render-form ctx "" data]]]
       [(ui/component ctx :employees)]]
      [ant/row
       [ant/col {:span 8 :offset 4 :style {:padding-top "1em"}} [:h3 (str "Ne postoji folder "  folder-id)]]])))



(def component
  (ui/constructor {:renderer          render
                   :subscription-deps [:datascript]
                   :component-deps [:employees]}))