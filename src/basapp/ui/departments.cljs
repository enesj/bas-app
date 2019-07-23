(ns basapp.ui.departments
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [<cmd route> sub>]]
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
  [{:title "Ime" :dataIndex "name" :sorter #(comparison %1 %2 :name)
    :render #(r/as-element [:a {:href (ui/url ctx {:page "department" :id ((js->clj %2) "id")})} %1])}
   {:title "Oznaka" :dataIndex "short-name" :sorter #(comparison %1 %2 :short-name)}
   {:title "Sektor" :dataIndex "sector" :sorter #(comparison %1 %2 :sector)
    :render #(r/as-element (:sector/short-name (first (filter (fn [x] (= (:db/id x) ((js->clj %1) "id"))) (:sectors data)))))}
   {:title "Aktivan" :dataIndex "active" :sorter #(comparison %1 %2 :active)
    :filters [{:text "Da"  :value true }, { :text "Ne" :value false }],
    :onFilter (fn [value, record] (= (str (.-active record))  value))
    :render #(r/as-element [:div (if  %1 "Da" "Ne")])}])

(def pagination {:show-size-changer true
                 :page-size-options ["5" "10" "20"]
                 :show-total #(str "Ukupno: " % " odjeljenja")})

(defn departments-table [ctx data]
  (let [departments (:departments data)]
    [:div
     [:h2 "Odjeljenja"]
     [ant/table
      {:columns (columns ctx data)
       :dataSource departments :pagination pagination :row-key "id"
       :row-selection
       {:on-change
        #(let [selected (js->clj %2 :keywordize-keys true)]
           (<cmd ctx [:user-actions :filter] ["department" (mapv :id selected)])
           (ant/message-info (str "Izabrali ste: " (map :name selected))))}}]]))

(defn render [ctx]
  (let [selection (sub> ctx :filter)
        department-id (:id (route> ctx))
        department-title (cond
                           (= department-id 0) {:department/name "Novo" :department/short-name "odjeljenje"}
                           (> department-id 0) (entity> ctx department-id)
                           :default nil)
        data {:sectors (q> ctx '[:find [(pull ?e [*]) ...] :in $ :where [?e :sector/short-name]])
              :departments (q> ctx '[:find [(pull ?e [*]) ...] :in $ :where [?e :department/short-name]])
              :id      department-id
              :selection selection}]
    [:div
     [ant/row
      [ant/col {:span 8 :offset 1 :style {:padding-top "1em"}}
       [:a {:href (ui/url ctx {:page "dashboard"})} "← Povratak na naslovnicu"]]]
     [ant/row
      [ant/col {:span 12 :offset 4 :style {:padding-top "1em"}}
       [departments-table ctx data]]]
     (when (not-empty selection)
       [(ui/component ctx :employees)])]))




(def component
  (ui/constructor {:renderer render
                   :subscription-deps [:datascript :filter]
                   :component-deps [:employees]}))

