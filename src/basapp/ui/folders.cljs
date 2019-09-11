(ns basapp.ui.folders
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [<cmd route> sub>]]
            [basapp.datascript :refer [q> entity>]]
            [basapp.domain.seed :refer [insert-folder]]
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
   {:title  ""
    :render #(r/as-element
               [ant/popconfirm {:title      "Jeste li sigurni?"
                                :on-confirm (fn [] (let [data (js->clj %1 :keywordize-keys true)]
                                                     (<cmd ctx [:user-actions :transact] (partial insert-folder
                                                                                                  (:link data)
                                                                                                  (:description data)
                                                                                                  (:id (:responsible1 data))
                                                                                                  (:id (:responsible2 data))
                                                                                                  false))))}
                [ant/button {:icon "delete" :type "danger"}]])}])

(defn folders-table [ctx data]
  (let [folders (:folders data)]
    [:div
     [:h2 {:style {:margin-top "0.5em" :margin-bottom "1em"}}"Folderi"]
     [ant/table
      {:columns (columns ctx data)
       :dataSource folders :pagination (util/pagination " folderi") :row-key "id"
       :row-selection
       {:on-change
        #(let [selected (js->clj %2 :keywordize-keys true)]
           (<cmd ctx [:user-actions :filter] ["folder" (mapv :id selected) (map :name selected)])
           (ant/message-info (str "Izabrali ste: " (map :name selected))))}}]]))

;(defn folders-tree [data]
;  (let [folders (:folders data)
;        root-folders (filter #(= (:parent folders "")))]
;    [:div
;     [:h2 "Folderi"]
;     [ant/directory-tree
;      [ant/tree-tree-node {:title "enes" :key 1}]]]))
;        ;[ant-man/tree-tree-node {:title "jakic" :key 2}]]]]))
;        ;(mapv (fn [x] [ant/tree-tree-node {:title (:link x) :key (:id x)}]) root-folders))]))


(defn render [ctx]
  (let [selection (sub> ctx :filter)
        folder-id (:id (route> ctx))
        data {:employees (q> ctx '[:find [(pull ?e [*]) ...] :in $ :where [?e :employee/uname]
                                                                          [?e :employee/active true]])
              :folders (q> ctx '[:find [(pull ?e [*]) ...] :in $ :where [?e :folder/link]
                                                                        [?e :folder/active true]])}]
    ;(js/console.log data)
    [:div
     [ant/row
      [ant/col util/row-style-8
       [:a {:href (ui/url ctx {:page "dashboard"})} "← Povratak na naslovnicu"]]]
     [ant/row
      [ant/col util/row-style-12
       ;[folders-tree data]]]
       [folders-table ctx data]]]
     (when (not-empty (second selection))
       [(ui/component ctx :employees)])]))




(def component
  (ui/constructor {:renderer render
                   :subscription-deps [:datascript :filter]
                   :component-deps [:employees]}))


