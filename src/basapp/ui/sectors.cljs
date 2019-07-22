(ns basapp.ui.sectors
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [route>]]
            [basapp.datascript :refer [q> entity>]]
            [basapp.ui.inputs :as i]
            [keechma.toolbox.forms.ui :as forms-ui]
            [antizer.reagent :as ant]
            [reagent.core :as r]
            [keechma.toolbox.pipeline.core :as pp]
            [keechma.toolbox.forms.core :as forms-core]))



(defn comparison [data1 data2 field]
  (compare (get (js->clj data1 :keywordize-keys true) field)
           (get (js->clj data2 :keywordize-keys true) field)))


(defn columns [ctx]
  [{:title "Ime" :dataIndex "name" :sorter #(comparison %1 %2 :name)
    :render #(r/as-element [:a {:href (ui/url ctx {:page "sectors" :id ((js->clj %2) "id")})} %1])}
   {:title "Oznaka" :dataIndex "short-name" :sorter #(comparison %1 %2 :short-name)}
   {:title "Aktivan" :dataIndex "active" :sorter #(comparison %1 %2 :active)
    :filters [{:text "Da"  :value true }, { :text "Ne" :value false }],
    :onFilter (fn [value, record] (= (str (.-active record))  value))
    :render #(r/as-element [:div (if  %1 "Da" "Ne")])}])

(def pagination {:show-size-changer true
                 :page-size-options ["5" "10" "20"]
                 :show-total #(str "Ukupno: " % " sektora")})

(defn sectors-table [ctx]
  (let [sectors
        (q> ctx
            '[:find [(pull ?e [* :db/id]) ...]
              :in $
              :where [?e :sector/short-name]])]
      [:div
       [:h2 "Sektori"]
       [ant/table
        {:columns (columns ctx)
         :dataSource sectors :pagination pagination :row-key "id"}]]))




(defn render-form-errors [ctx form-props]
  (let [form-state (forms-ui/form-state> ctx form-props)]
    (when (= :submit-failed (get-in form-state [:state :type]))
      (let [e (ex-message (get-in form-state [:state :cause]))]
        [:div.alert.alert-danger e]))))


(defn render-form [ctx title data]
  (let [form-props [:sector :form]]
    [:div.card-body
     [:form {:on-submit #(do (forms-ui/<submit ctx form-props %))}
      [render-form-errors ctx form-props]
      [i/text ctx form-props :short-name {:placeholder "Oznaka" :disabled (not= data 0)}]
      [i/text ctx form-props :name {:placeholder "Ime"}]
      [i/checkbox ctx form-props :active {:label "Aktivan"}]
      [:button.btn.btn-primary "Snimi"]]]))


(defn render [ctx]
  (let [sector-id (:id (route> ctx))
        sector (cond
                 (= sector-id 0) {:sector/name "Novi" :sector/short-name "sektor"}
                 (> sector-id 0) (entity> ctx sector-id)
                 :default nil)]
    [:div.container.pt-5
     [:p.mb-5 [:a {:href (ui/url ctx {:page "dashboard"})} "← Povratak na naslovnicu"]]
     [sectors-table ctx]
     (when (:sector/name sector)
       (forms-ui/<call ctx [:sector :form] :reset-form)
       [:div.container.pt-5
        [:h3 (str (:sector/name sector) " " (:sector/short-name sector))]
        [render-form ctx "" sector-id]])]))



(def component
  (ui/constructor {:renderer render
                   :subscription-deps [:datascript]}))
