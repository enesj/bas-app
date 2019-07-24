(ns basapp.ui.empolyees
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [<cmd route> sub>]]
            [basapp.datascript :refer [q>]]
            [basapp.util :as util]
            [antizer.reagent :as ant]
            [reagent.core :as r]))



(defn comparison [data1 data2 field]
  (util/comparison data1 data2 field))


(defn columns [ctx data]

  [{:title "Ime" :dataIndex "name" :sorter #(comparison %1 %2 :name)
    :render #(r/as-element [:a {:href (ui/url ctx {:page "employee" :id (util/get-id %2)})} %1])}
   {:title "Prezime" :dataIndex "last-name" :sorter #(comparison %1 %2 :last-name)}
   {:title "Korisničko ime" :dataIndex "uname" :sorter #(comparison %1 %2 :uname)}
   {:title "E-mail" :dataIndex "email" :sorter #(comparison %1 %2 :email)}
   {:title "Odjeljenje" :dataIndex "department" :sorter #(comparison %1 %2 :department)
    :render #(r/as-element
               [:a {:href (ui/url ctx {:page "department" :id (util/get-id %1)})}
                (:department/short-name (first (filter (fn [x] (= (:db/id x) (util/get-id %1))) (:departments data))))])}
   {:title "Aktivan" :dataIndex "active" :sorter #(comparison %1 %2 :active)
    :filters [{:text "Da"  :value true }, { :text "Ne" :value false }],
    :onFilter (fn [value, record] (= (str (.-active record))  value))
    :render #(r/as-element [:div (if  %1 "Da" "Ne")])}])

(def pagination {:show-size-changer true
                 :page-size-options ["5" "10" "20"]
                 :show-total #(str "Ukupno: " % " korisnika")})


(defn employees-table [ctx data filter]
  (let [employees
        (if filter
          (q> ctx
              '[:find [(pull ?e [* :db/id]) ...]
                :in $ [?a [?b ...]]
                :where [?e :employee/uname]
                [?e ?a ?b]]
              filter)
          (q> ctx
              '[:find [(pull ?e [* :db/id]) ...]
                :where [?e :employee/uname]]))]
      [:div
       [:h2 "Korisnici"]
       [ant/table
        {:columns (columns ctx data)
         :dataSource employees :pagination pagination :row-key "id"
         :row-selection
         {:on-change
          #(let [selected (js->clj %2 :keywordize-keys true)]
             (<cmd ctx [:user-actions :filter] ["employee" (mapv :id selected)]
               (ant/message-info (str "Izabrali ste: " (map :name selected)))))}}]]))


(defn render [ctx]
  (let [filter-sub (sub> ctx :filter)
        filter-sub' (when (not-empty filter-sub) [(keyword "employee" (first filter-sub)) (second filter-sub)])
        route (route> ctx)
        page (:page route)
        departments (case page
                      "sector" (q> ctx '[:find ( ?e ...)
                                         :in $ [?s ...]
                                         :where  [?e :department/short-name]
                                         [?e :department/sector ?s]]
                                   [(:id route)])
                      "department" [(:id route)]
                                   nil)

        filter (if (#{"sector" "department"} page) [:employee/department departments] filter-sub')
        data {:departments (q> ctx '[:find [(pull ?e [*]) ...] :in $ :where [?e :department/short-name]])}]
    ;(js/console.log "FILTER " filter)
    [:div
     (when (= "employees" page)
       [ant/row
        [ant/col {:span 8 :offset 1 :style {:padding-top "1em"}}
         [:a {:href (ui/url ctx {:page "dashboard"})} "← Povratak na naslovnicu"]]])
     [ant/row
      [ant/col {:span 12 :offset 4 :style {:padding-top "1em"}}
       [employees-table ctx data filter]]]]))


(def component
  (ui/constructor {:renderer render
                   :subscription-deps [:datascript :filter]}))
