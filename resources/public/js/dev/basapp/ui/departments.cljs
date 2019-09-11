(ns basapp.ui.departments
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [<cmd route> sub>]]
            [basapp.datascript :refer [q> entity>]]
            [basapp.domain.seed :refer [insert-department]]
            [basapp.util :as util]
            [basapp.ui.antd  :as ant]
            [reagent.core :as r]))



(defn comparison [data1 data2 field]
  (util/comparison data1 data2 field))


(defn columns [ctx data]
  ;(js.console.log ctx)
  [{:title  "Ime" :dataIndex "name" :sorter #(comparison %1 %2 :name)
    :render #(r/as-element [:a {:href (ui/url ctx {:page "department" :id (util/get-id %2)})} %1])}
   {:title "Oznaka" :dataIndex "short-name" :sorter #(comparison %1 %2 :short-name)}
   {:title  "Sektor" :dataIndex "sector" :sorter #(comparison %1 %2 :sector)
    :render (util/render-ref ctx "sector" :sector/short-name (:sectors data))}
   {:title  ""
    :render #(r/as-element
               [ant/popconfirm {:title      "Jeste li sigurni?"
                                :on-confirm (fn [] (let [data (js->clj %1 :keywordize-keys true)]
                                                     (<cmd ctx [:user-actions :transact] (partial insert-department
                                                                                                   (:name data)
                                                                                                   (:short-name data)
                                                                                                   (:id (:sector data))
                                                                                                   false))))}
                [ant/button {:icon "delete" :type "danger"}]])}])

(defn departments-table [ctx data]
  (let [departments (:departments data)]
    [:div
     [:h2 {:style {:margin-top "0.5em" :margin-bottom "1em"}}"Odjeljenja"]
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
        data {:sectors (q> ctx '[:find [(pull ?e [*]) ...] :in $ :where [?e :sector/short-name]
                                                                        [?e :sector/active true]])
              :departments (q> ctx '[:find [(pull ?e [*]) ...] :in $ :where [?e :department/short-name]
                                                                            [?e :department/active true]])}]
    [:div
     [ant/row
      [ant/col util/row-style-8
       [:a {:href (ui/url ctx {:page "dashboard"})} "← Povratak na naslovnicu"]]]
     [ant/row
      [ant/col util/row-style-12
       [departments-table ctx data]]]
     (when (not-empty (second selection))
       [(ui/component ctx :employees)])]))




(def component
  (ui/constructor {:renderer render
                   :subscription-deps [:datascript :filter]
                   :component-deps [:employees]}))

