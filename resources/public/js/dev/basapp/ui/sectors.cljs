(ns basapp.ui.sectors
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [route> <cmd sub>]]
            [basapp.datascript :refer [q> entity>]]
            [basapp.domain.seed :refer [insert-sector]]
            [basapp.util :as util]
            [basapp.ui.antd  :as ant]
            [reagent.core :as r]))



(defn comparison [data1 data2 field]
  (util/comparison data1 data2 field))

(defn make-filter [ctx id]
  (let [selected (js->clj id :keywordize-keys true)
        offices (q> ctx '[:find (?e ...)
                          :in $ [?s ...]
                          :where [?e :department/short-name]
                          [?e :department/sector ?s]]
                    (mapv :id selected))]
    (<cmd ctx [:user-actions :filter] ["department" offices (map :name selected)])
    (ant/message-info (str "Izabrali ste: " (map :name selected)))))


(defn columns [ctx]
  [{:title  "Ime" :dataIndex "name" :sorter #(comparison %1 %2 :name)
    :render #(r/as-element [:a {:on-click (fn [x] (make-filter ctx [%2]))
                                :href     (ui/url ctx {:page "sector" :id (util/get-id %2)})} %1])}
   {:title "Oznaka" :dataIndex "short-name" :sorter #(comparison %1 %2 :short-name)}
   {:title  ""
    :render #(r/as-element
               [ant/popconfirm {:title      "Jeste li sigurni?"
                                :on-confirm (fn [] (let [data (js->clj %1 :keywordize-keys true)]
                                                     (<cmd ctx [:user-actions :transact] (partial insert-sector
                                                                                                    (:name data)
                                                                                                    (:short-name data)
                                                                                                    false))))}
                [ant/button {:icon "delete" :type "danger"}]])}])

(defn sectors-table [ctx]
  (let [sectors (q> ctx '[:find [(pull ?e [*]) ...] :in $ :where [?e :sector/short-name]
                                                                [?e :sector/active true]])]
      [:div
       [:h2 {:style {:margin-top "0.5em" :margin-bottom "1em"}} "Sektori"]
       [ant/table
        {:columns (columns ctx)
         :dataSource sectors :pagination (util/pagination " sektora") :row-key "id"
         :row-selection
         {:on-change #(make-filter ctx %2)}}]]))

(defn render [ctx]
  (let [selection (sub> ctx :filter)]
    [:div
     [ant/row
      [ant/col util/row-style-8
       [:a {:href (ui/url ctx {:page "dashboard"})} "← Povratak na naslovnicu"]]]
     [ant/row
      [ant/col util/row-style-12
       [sectors-table ctx]]]
     (when (not-empty (second selection))
       [(ui/component ctx :employees)])]))

(def component
  (ui/constructor {:renderer render
                   :subscription-deps [:datascript :filter]
                   :component-deps [:employees]}))
