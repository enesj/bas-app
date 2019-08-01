(ns basapp.ui.offices
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [<cmd route> sub>]]
            [basapp.datascript :refer [q> entity>]]
            [basapp.util :as util]
            [antizer.reagent :as ant]
            [reagent.core :as r]))


(defn comparison [data1 data2 field]
  (util/comparison data1 data2 field))


(defn columns [ctx data]
  [{:title  "Ime" :dataIndex "name" :sorter #(comparison %1 %2 :name)
    :render #(r/as-element [:a {:href (ui/url ctx {:page "office" :id (util/get-id %2)})} %1])}
   {:title "Oznaka" :dataIndex "short-name" :sorter #(comparison %1 %2 :short-name)}
   {:title  "Sprat" :dataIndex "floor" :sorter #(comparison %1 %2 :floor)
    :render (util/render-ref ctx "floor" :floor/name (:floors data))}
   {:title    "Aktivan" :dataIndex "active" :sorter #(comparison %1 %2 :active)
    :filters  [{:text "Da" :value true}, {:text "Ne" :value false}],
    :onFilter (fn [value, record] (= (str (.-active record)) value))
    :render   #(r/as-element [:div (if %1 "Da" "Ne")])}])

(defn offices-table [ctx data]
  (let [offices (:offices data)]
    [:div
     [:h2 "Prostorije"]
     [ant/table
      {:columns (columns ctx data)
       :dataSource offices :pagination (util/pagination " prostorija") :row-key "id"
       :row-selection
       {:on-change
        #(let [selected (js->clj %2 :keywordize-keys true)]
           (<cmd ctx [:user-actions :filter] ["office" (mapv :id selected) (map :name selected)])
           (ant/message-info (str "Izabrali ste: " (map :name selected))))}}]]))

(defn render [ctx]
  (let [selection (sub> ctx :filter)
        office-id (:id (route> ctx))
        data {:floors (q> ctx '[:find [(pull ?e [*]) ...] :in $ :where [?e :floor/short-name]])
              :offices (q> ctx '[:find [(pull ?e [*]) ...] :in $ :where [?e :office/short-name]])}]
    (js/console.log data)
    [:div
     [ant/row
      [ant/col {:span 8 :offset 1 :style {:padding-top "1em"}}
       [:a {:href (ui/url ctx {:page "dashboard"})} "← Povratak na naslovnicu"]]]
     [ant/row
      [ant/col {:span 12 :offset 4 :style {:padding-top "1em"}}
       [offices-table ctx data]]]
     (when (not-empty (second selection))
       [(ui/component ctx :employees)])]))




(def component
  (ui/constructor {:renderer render
                   :subscription-deps [:datascript :filter]
                   :component-deps [:employees]}))


