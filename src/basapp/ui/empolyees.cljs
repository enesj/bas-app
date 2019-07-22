(ns basapp.ui.empolyees
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [<cmd route>]]
            [basapp.datascript :refer [q>]]
            [antizer.reagent :as ant]
            [reagent.core :as r]))



(defn comparison [data1 data2 field]
  (compare (get (js->clj data1 :keywordize-keys true) field)
           (get (js->clj data2 :keywordize-keys true) field)))


(defn columns [ctx data]
  [{:title "Ime" :dataIndex "name" :sorter #(comparison %1 %2 :name)
    :render #(r/as-element [:a {:href (ui/url ctx {:page "employee" :id ((js->clj %2) "id")})} %1])}
   {:title "Prezime" :dataIndex "last-name" :sorter #(comparison %1 %2 :last-name)}
   {:title "Korisničko ime" :dataIndex "uname" :sorter #(comparison %1 %2 :uname)}
   {:title "E-mail" :dataIndex "email" :sorter #(comparison %1 %2 :email)}
   {:title "Odjeljenje" :dataIndex "department" :sorter #(comparison %1 %2 :department)
    :render #(r/as-element (:department/short-name (first (filter (fn [x] (= (:db/id x) ((js->clj %1) "id"))) (:departments data)))))}
   {:title "Aktivan" :dataIndex "active" :sorter #(comparison %1 %2 :active)
    :filters [{:text "Da"  :value true }, { :text "Ne" :value false }],
    :onFilter (fn [value, record] (= (str (.-active record))  value))
    :render #(r/as-element [:div (if  %1 "Da" "Ne")])}])

(def pagination {:show-size-changer true
                 :page-size-options ["5" "10" "20"]
                 :show-total #(str "Ukupno: " % " korisnika")})


(defn employees-table [ctx data]
  (let [employees
        (q> ctx
            '[:find [(pull ?e [* :db/id]) ...]
              :in $
              :where [?e :employee/uname]])
        filter (get-in @(:app-db ctx) [:kv :emplooyees-filter])]
    (fn []
      [:div
       [:h2  {:on-click #(js/console.log  "dfsd" (get-in @(:app-db ctx) [:kv :employees-filter]))} "Korisnici"]
       [ant/table
        {:columns (columns ctx data)
         :dataSource employees :pagination pagination :row-key "id"}]])))


(defn render [ctx]
  (let [department-id (:id (route> ctx))
        data {:departments (q> ctx '[:find [(pull ?e [*]) ...] :in $ :where [?e :department/short-name]])
              :id      department-id}]
    [:div.container.pt-5
     [:p.mb-5 [:a {:href (ui/url ctx {:page "dashboard"})} "← Povratak na naslovnicu"]]
     [employees-table ctx data]]))


(def component
  (ui/constructor {:renderer render
                   :subscription-deps [:datascript]}))