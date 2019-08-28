(ns basapp.ui.floors
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [route> <cmd sub>]]
            [basapp.datascript :refer [q> entity>]]
            [basapp.util :as util]
            [basapp.ui.antd :as ant]
            [reagent.core :as r]))


(defn comparison [data1 data2 field]
  (util/comparison data1 data2 field))

(defn make-filter [ctx id]
  (let [selected (js->clj id :keywordize-keys true)
        offices (q> ctx '[:find (?e ...)
                          :in $ [?s ...]
                          :where [?e :office/short-name]
                          [?e :office/floor ?s]]
                    (mapv :id selected))]
     (<cmd ctx [:user-actions :filter] ["office" offices (map :name selected)])
     (ant/message-info (str "Izabrali ste: " (map :name selected)))))



(defn columns [ctx]
  [{:title "Ime" :dataIndex "name" :sorter #(comparison %1 %2 :name)
    :render #(r/as-element [:a {:href (ui/url ctx {:page "floor" :id (util/get-id %2)})
                                :on-click (fn [x] (make-filter ctx [%2]))} %1])}
   {:title "Oznaka" :dataIndex "short-name" :sorter #(comparison %1 %2 :short-name)}
   {:title "Aktivan" :dataIndex "active" :sorter #(comparison %1 %2 :active)
    :filters [{:text "Da"  :value true }, { :text "Ne" :value false }],
    :onFilter (fn [value, record] (= (str (.-active record))  value))
    :render #(r/as-element [:div (if  %1 "Da" "Ne")])}])

(defn floors-table [ctx]
  (let [floors (q> ctx '[:find [(pull ?e [*]) ...] :in $ :where [?e :floor/short-name]])]
    [:div
     [:h2 "Spratovi"]
     [ant/table
      {:columns    (columns ctx)
       :dataSource floors :pagination (util/pagination " spratova") :row-key "id"
       :row-selection {:on-change #(make-filter ctx %2)}}]]))

(defn render [ctx]
  (let [selection (sub> ctx :filter)]
    ;(js/console.log selection)
    [:div
     [ant/row
      [ant/col {:span 8 :offset 1 :style {:padding-top "1em"}}
       [:a {:href (ui/url ctx {:page "dashboard"})} "← Povratak na naslovnicu"]]]
     [ant/row
      [ant/col {:span 12 :offset 4 :style {:padding-top "1em"}}
       [floors-table ctx]]]
     (when (not-empty (second selection))
       [(ui/component ctx :employees)])]))

(def component
  (ui/constructor {:renderer render
                   :subscription-deps [:datascript :filter]
                   :component-deps [:employees]}))
