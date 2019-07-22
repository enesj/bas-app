(ns basapp.ui.departments
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [<cmd route>]]
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


(defn columns [ctx data]
  ;(js/console.log "data" data)
  [{:title "Ime" :dataIndex "name" :sorter #(comparison %1 %2 :name)
    :render #(r/as-element [:a {:href (ui/url ctx {:page "departments" :id ((js->clj %2) "id")})} %1])}
   {:title "Oznaka" :dataIndex "short-name" :sorter #(comparison %1 %2 :short-name)}
   {:title "Sektor" :dataIndex "sektor" :sorter #(comparison %1 %2 :sektor)
    :render #(r/as-element (:sector/short-name (first (filter (fn [x] (= (:db/id x) %1)) (:sectors data)))))}
   {:title "Aktivan" :dataIndex "active" :sorter #(comparison %1 %2 :active)
    :filters [{:text "Da"  :value true }, { :text "Ne" :value false }],
    :onFilter (fn [value, record] (= (str (.-active record))  value))
    :render #(r/as-element [:div (if  %1 "Da" "Ne")])}])

(def pagination {:show-size-changer true
                 :page-size-options ["5" "10" "20"]
                 :show-total #(str "Ukupno: " % " odjeljenja")})

(defn departments-table [ctx data]
  (let [departments
        (q> ctx
            '[:find [(pull ?e [* ]) ...]
              :in $
              :where [?e :department/short-name]])]
    [:div
     [:h2 "Odjeljenja"]
     [ant/table
      {:columns (columns ctx data)
       :dataSource departments :pagination pagination :row-key "id"
       :row-selection
       {:on-change
        #(let [selected (js->clj %2 :keywordize-keys true)]
           (<cmd ctx [:user-actions :employees-filter] {:departments (:id (first selected))})
           (ant/message-info (str "Izabrali ste: " (map :name selected))))}}]]))

(defn render-form-errors [ctx form-props]
  (let [form-state (forms-ui/form-state> ctx form-props)]
    (when (= :submit-failed (get-in form-state [:state :type]))
      (let [e (ex-message (get-in form-state [:state :cause]))]
        [:div.alert.alert-danger e]))))

(defn render-form [ctx title data]
  (let [form-props [:department :form]]
    [:div.card-body
     [:form {:on-submit #(do (forms-ui/<submit ctx form-props %))}
      [render-form-errors ctx form-props]
      [i/text ctx form-props :short-name {:placeholder "Oznaka" :disabled (not= (:id data) 0)}]
      [i/text ctx form-props :name {:placeholder "Ime"}]
      [i/select ctx form-props :sector
       {:options (mapv (fn [r] {:value (:db/id r) :label (:sector/short-name r)}) (:sectors data))
        :label "Sektor"}]
      [i/checkbox ctx form-props :active {:label "Aktivan"}]
      [:button.btn.btn-primary "Snimi"]]]))

(defn render [ctx]
  (let [selection (atom ())
        department-id (:id (route> ctx))
        department-title (cond
                           (= department-id 0) {:department/name "Novo" :department/short-name "odjeljenje"}
                           (> department-id 0) (entity> ctx department-id)
                           :default nil)
        data {:sectors (q> ctx '[:find [(pull ?e [*]) ...] :in $ :where [?e :sector/short-name]])
              :departments (q> ctx '[:find [(pull ?e [*]) ...] :in $ :where [?e :department/short-name]])
              :id      department-id
              :selection selection}]
    [:div.container.pt-5
     [:p.mb-5 [:a {:href (ui/url ctx {:page "dashboard"})} "← Povratak na naslovnicu"]]
     [departments-table ctx data]
     (when (:department/name department-title)
       (forms-ui/<call ctx [:department :form] :reset-form)
       [:div.container.pt-5
        [:h3 (str (:department/name department-title) " " (:department/short-name department-title))]
        [render-form ctx "" data]])
     (when (empty? @selection)
       [(ui/component ctx :employees)])]))


(def component
  (ui/constructor {:renderer render
                   :subscription-deps [:datascript]
                   :component-deps [:employees]}))

