(ns basapp.ui.sectors
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [route> <cmd sub>]]
            [basapp.datascript :refer [q> entity>]]
            [basapp.ui.inputs :as i]
            [basapp.util :as util]
            [keechma.toolbox.forms.ui :as forms-ui]
            [antizer.reagent :as ant]
            [reagent.core :as r]
            [keechma.toolbox.pipeline.core :as pp]
            [keechma.toolbox.forms.core :as forms-core]))



(defn comparison [data1 data2 field]
  (util/comparison data1 data2 field))


(defn columns [ctx]
  [{:title "Ime" :dataIndex "name" :sorter #(comparison %1 %2 :name)
    :render #(r/as-element [:a {:href (ui/url ctx {:page "sector" :id (util/get-id %2)})} %1])}
   {:title "Oznaka" :dataIndex "short-name" :sorter #(comparison %1 %2 :short-name)}
   {:title "Aktivan" :dataIndex "active" :sorter #(comparison %1 %2 :active)
    :filters [{:text "Da"  :value true }, { :text "Ne" :value false }],
    :onFilter (fn [value, record] (= (str (.-active record))  value))
    :render #(r/as-element [:div (if  %1 "Da" "Ne")])}])

(def pagination {:show-size-changer true
                 :page-size-options ["5" "10" "20"]
                 :show-total #(str "Ukupno: " % " sektora")})

(defn sectors-table [ctx]
  (let [sectors (q> ctx '[:find [(pull ?e [*]) ...] :in $ :where [?e :sector/short-name]])]
      [:div
       [:h2 "Sektori"]
       [ant/table
        {:columns (columns ctx)
         :dataSource sectors :pagination pagination :row-key "id"
         :row-selection
         {:on-change
          #(let [selected (js->clj %2 :keywordize-keys true)
                 departments (q> ctx '[:find ( ?e ...)
                                       :in $ [?s ...]
                                       :where  [?e :department/short-name]
                                               [?e :department/sector ?s]]
                                 (mapv :id selected))]
                ;(js/console.log "test" departments)
             (<cmd ctx [:user-actions :filter] ["department" departments])
             (ant/message-info (str "Izabrali ste: " (map :name selected))))}}]]))

(defn render [ctx]
  (let [selection (sub> ctx :filter)
        sector-id (:id (route> ctx))]
    [:div
     [ant/row
      [ant/col {:span 8 :offset 1 :style {:padding-top "1em"}}
       [:a {:href (ui/url ctx {:page "dashboard"})} "← Povratak na naslovnicu"]]]
     [ant/row
      [ant/col {:span 12 :offset 4 :style {:padding-top "1em"}}
       [sectors-table ctx]]]
     (when (not-empty selection)
       [(ui/component ctx :employees)])]))

(def component
  (ui/constructor {:renderer render
                   :subscription-deps [:datascript :filter]
                   :component-deps [:employees]}))
