(ns basapp.ui.empolyees
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [<cmd route> sub>]]
            [basapp.datascript :refer [q>]]
            [basapp.domain.seed :refer [insert-employee]]
            [basapp.util :as util]
            [basapp.ui.antd  :as ant]
            [reagent.core :as r]
            [clojure.string :as str]))



(defn comparison [data1 data2 field]
  (util/comparison data1 data2 field))


(defn columns [ctx data]
  [{:title "Ime" :dataIndex "name" :sorter #(comparison %1 %2 :name)
    :render #(r/as-element [:a {:href (ui/url ctx {:page "employee" :id (util/get-id %2)})} %1])}
   {:title "Prezime" :dataIndex "last-name" :sorter #(comparison %1 %2 :last-name)}
   {:title "Korisničko ime" :dataIndex "uname" :sorter #(comparison %1 %2 :uname)}
   {:title "E-mail" :dataIndex "email" :sorter #(comparison %1 %2 :email)}
   {:title "Odjeljenje" :dataIndex "department" :sorter #(comparison %1 %2 :department)
    :render  (util/render-ref ctx "department" :department/short-name (:departments data))}
   {:title  ""
    :render #(r/as-element
               [ant/popconfirm {:title      "Jeste li sigurni?"
                                :on-confirm (fn [] (let [data (js->clj %1 :keywordize-keys true)]
                                                     (<cmd ctx [:user-actions :transact] (partial insert-employee
                                                                                                    (:name data)
                                                                                                    (:last-name data)
                                                                                                    (:uname data)
                                                                                                    (:email data)
                                                                                                    (:phone data)
                                                                                                    (:type data)
                                                                                                    (:position data)
                                                                                                    (:id (:department data))
                                                                                                    (:id (:office data))
                                                                                                    false))))}
                [ant/button {:icon "delete" :type "danger"}]])}])

(defn employees-table [ctx data filter-criteria]
  (let [employees
        (if filter-criteria
          (q> ctx
              '[:find [(pull ?e [* :db/id]) ...]
                :in $ [?a [?b ...]]
                :where [?e :employee/uname]
                [?e ?a ?b]]
              filter-criteria)
          (q> ctx
              '[:find [(pull ?e [* :db/id]) ...]
                :where [?e :employee/uname]]))
        employees (filter :employee/active employees)]
    [:div
     (when-not filter-criteria [:h2 {:style {:margin-top "0.5em" :margin-bottom "1em"}} "Korisnici"])
     [ant/table
      {:columns    (columns ctx data)
       :dataSource employees :pagination (util/pagination " korisnika") :row-key "id"
       :row-selection
                   {:on-change
                    #(let [selected (js->clj %2 :keywordize-keys true)]
                       (<cmd ctx [:user-actions :filter] ["employee" (mapv :id selected)])
                       (ant/message-info (str "Izabrali ste: " (map :name selected))))}}]]))

(defn render [ctx]
  (let [[field choices selections] (sub> ctx :filter)
        route (route> ctx)
        page (:page route)
        id  (:id route)
        filter
        (when  (not= field "employee")
          (cond
            (not-empty choices) [(keyword "employee" field) choices]
            id [(keyword "employee" page) [id]]
            :else nil))
        data {:departments (q> ctx '[:find [(pull ?e [*]) ...] :in $ :where [?e :department/short-name]
                                                                            [?e :department/active true]])}]
    [:div
     (if (= "employees" page)
       [ant/row
        [ant/col util/row-style-8
         [:a {:href (ui/url ctx {:page "dashboard"})} "← Povratak na naslovnicu"]]]
       [ant/row
        [ant/col util/row-style-12
         [:h3 (str "Korisnici: " (str/join ", " selections))]]])
     [ant/row
      [ant/col util/row-style-12
       [employees-table ctx data filter]]]]))

(def component
  (ui/constructor {:renderer render
                   :subscription-deps [:datascript :filter]}))
