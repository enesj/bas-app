(ns basapp.ui.folders
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [<cmd route> sub>]]
            [basapp.datascript :refer [q> entity>]]
            [basapp.util :as util]
            [basapp.ui.antd  :as ant]
            [reagent.core :as r]))



(defn comparison [data1 data2 field]
  (util/comparison data1 data2 field))



(defn columns [ctx data]
  ;(js/console.log "data" data)
  [{:title  "Ime" :dataIndex "link" :sorter #(comparison %1 %2 (or :link :parent))
    :render #(r/as-element [:a {:href (ui/url ctx {:page "folder" :id (util/get-id %2)})} %1])}
   {:title "Opis" :dataIndex "description"}
   {:title  "Odgovoran 1" :dataIndex "responsible1" :sorter #(comparison %1 %2 :odogovran1)
    :render (util/render-ref ctx "employee" :employee/uname (:employees data))}

   {:title  "Odgovoran 2" :dataIndex "responsible2" :sorter #(comparison %1 %2 :odogovran2)
    :render (util/render-ref ctx "employee" :employee/uname (:employees data))}
   {:title  "Nalazi se u:" :dataIndex "parent" :sorter #(comparison %1 %2 :parent)
    :render (util/render-ref ctx "folder" :folder/link (:folders data))}

   ;{:title "Odgovoran 1" :dataIndex "responsible1"}
   ;{:title "Parent" :dataIndex "parent"}
   {:title    "Aktivan" :dataIndex "active" :sorter #(comparison %1 %2 :active)
    :filters  [{:text "Da" :value true}, {:text "Ne" :value false}],
    :onFilter (fn [value, record] (= (str (.-active record)) value))
    :render   #(r/as-element [:div (if %1 "Da" "Ne")])}])

(defn folders-table [ctx data]
  (let [folders (:folders data)]
    [:div
     [:h2 "Folderi"]
     [ant/table
      {:columns (columns ctx data)
       :dataSource folders :pagination (util/pagination " folderi") :row-key "id"
       :row-selection
       {:on-change
        #(let [selected (js->clj %2 :keywordize-keys true)]
           (<cmd ctx [:user-actions :filter] ["folder" (mapv :id selected) (map :name selected)])
           (ant/message-info (str "Izabrali ste: " (map :name selected))))}}]]))

(defn folders-tree [data]
  (let [folders (:folders data)
        root-folders (filter #(= (:parent folders "")))]
    [:div
     [:h2 "Folderi"]
     [ant/directory-tree
      [ant/tree-tree-node {:title "enes" :key 1}]]]))
        ;[ant-man/tree-tree-node {:title "jakic" :key 2}]]]]))
        ;(mapv (fn [x] [ant/tree-tree-node {:title (:link x) :key (:id x)}]) root-folders))]))





(defn render [ctx]
  (let [selection (sub> ctx :filter)
        folder-id (:id (route> ctx))
        data {:employees (q> ctx '[:find [(pull ?e [*]) ...] :in $ :where [?e :employee/uname]])
              :folders (q> ctx '[:find [(pull ?e [*]) ...] :in $ :where [?e :folder/link]])}]
    ;(js/console.log data)
    [:div
     [ant/row
      [ant/col {:span 8 :offset 1 :style {:padding-top "1em"}}
       [:a {:href (ui/url ctx {:page "dashboard"})} "← Povratak na naslovnicu"]]]
     [ant/row
      [ant/col {:span 12 :offset 4 :style {:padding-top "1em"}}
       [folders-tree data]]]
       ;[folders-table ctx data]]]
     (when (not-empty (second selection))
       [(ui/component ctx :employees)])]))




(def component
  (ui/constructor {:renderer render
                   :subscription-deps [:datascript :filter]
                   :component-deps [:employees]}))


