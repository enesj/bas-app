(ns basapp.ui.departments
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [<cmd route> sub>]]
            [basapp.datascript :refer [q> entity>]]
            [basapp.util :as util]
            [basapp.ui.antd  :as ant]
            [reagent.core :as r]))



(defn comparison [data1 data2 field]
  (util/comparison data1 data2 field))


(defn columns [ctx data]
  [{:title  "Ime" :dataIndex "name" :sorter #(comparison %1 %2 :name)
    :render #(r/as-element [:a {:href (ui/url ctx {:page "department" :id (util/get-id %2)})} %1])}
   {:title "Oznaka" :dataIndex "short-name" :sorter #(comparison %1 %2 :short-name)}
   {:title  "Sektor" :dataIndex "sector" :sorter #(comparison %1 %2 :sector)
    :render (util/render-ref ctx "sector" :sector/short-name (:sectors data))}
   {:title    "Aktivan" :dataIndex "active" :sorter #(comparison %1 %2 :active)
    :filters  [{:text "Da" :value true}, {:text "Ne" :value false}],
    :onFilter (fn [value, record] (= (str (.-active record)) value))
    :render   #(r/as-element [:div (if %1 "Da" "Ne")])}])

(defn departments-table [ctx data]
  (let [departments (:departments data)]
    [:div
     [:h2 "Odjeljenja"]
     [ant/table
      {:columns (columns ctx data)
       :dataSource departments :pagination (util/pagination " odjeljenja") :row-key "id"
       :row-selection
       {:on-change
        #(let [selected (js->clj %2 :keywordize-keys true)]
           (<cmd ctx [:user-actions :filter] ["department" (mapv :id selected) (map :name selected)])
           (ant/message-info (str "Izabrali ste: " (map :name selected))))}}]]))

(defn render [ctx]
  (let [selection (sub> ctx :filter)
        department-id (:id (route> ctx))
        data {:sectors (q> ctx '[:find [(pull ?e [*]) ...] :in $ :where [?e :sector/short-name]])
              :departments (q> ctx '[:find [(pull ?e [*]) ...] :in $ :where [?e :department/short-name]])}]
    [:div
     [ant/row
      [ant/col {:span 8 :offset 1 :style {:padding-top "1em"}}
       [:a {:href (ui/url ctx {:page "dashboard"})} "← Povratak na naslovnicu"]]]
     [ant/row
      [ant/col {:span 12 :offset 4 :style {:padding-top "1em"}}
       [departments-table ctx data]]]
     (when (not-empty (second selection))
       [(ui/component ctx :employees)])]))




(def component
  (ui/constructor {:renderer render
                   :subscription-deps [:datascript :filter]
                   :component-deps [:employees]}))

