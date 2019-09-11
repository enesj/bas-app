(ns basapp.ui.offices
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [<cmd route> sub>]]
            [basapp.datascript :refer [q> entity>]]
            [basapp.domain.seed :refer [insert-office]]
            [basapp.util :as util]
            [basapp.ui.antd  :as ant]
            [reagent.core :as r]))


(defn comparison [data1 data2 field]
  (util/comparison data1 data2 field))


(defn columns [ctx data]
  [{:title  "Ime" :dataIndex "name" :sorter #(comparison %1 %2 :name)
    :render #(r/as-element [:a {:href (ui/url ctx {:page "office" :id (util/get-id %2)})} %1])}
   {:title "Oznaka" :dataIndex "short-name" :sorter #(comparison %1 %2 :short-name)}
   {:title  "Sprat" :dataIndex "floor" :sorter #(comparison %1 %2 :floor)
    :render (util/render-ref ctx "floor" :floor/name (:floors data))}
   {:title  ""
    :render #(r/as-element
               [ant/popconfirm {:title      "Jeste li sigurni?"
                                :on-confirm (fn [] (let [data (js->clj %1 :keywordize-keys true)]
                                                     (<cmd ctx [:user-actions :transact] (partial insert-office
                                                                                                  (:name data)
                                                                                                  (:short-name data)
                                                                                                  (:id (:floor data))
                                                                                                  false))))}
                [ant/button {:icon "delete" :type "danger"}]])}])

(defn offices-table [ctx data]
  (let [offices (:offices data)]
    [:div
     [:h2 {:style {:margin-top "0.5em" :margin-bottom "1em"}} "Prostorije"]
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
              :offices (q> ctx '[:find [(pull ?e [*]) ...] :in $ :where [?e :office/short-name]
                                                                        [?e :office/active true]])}]
    ;(js/console.log data)
    [:div
     [ant/row
      [ant/col util/row-style-8
       [:a {:href (ui/url ctx {:page "dashboard"})} "← Povratak na naslovnicu"]]]
     [ant/row
      [ant/col util/row-style-12
       [offices-table ctx data]]]
     (when (not-empty (second selection))
       [(ui/component ctx :employees)])]))




(def component
  (ui/constructor {:renderer render
                   :subscription-deps [:datascript :filter]
                   :component-deps [:employees]}))


