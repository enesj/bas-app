(ns basapp.ui.transfers
  (:require [keechma.ui-component :as ui]
            [basapp.datascript :refer [q>]]
            [reagent.format :refer [format]]
            [basapp.util :refer [format-ts]]))

(defn render-conto-table [{:keys [ref/currency ref/from-currency ref/from-account ts/at conto/exchange-rate conto/tags]}]
  [:table.table.m-0
   [:tbody
    (when currency
      [:tr
       [:th {:scope "row" :style {:width "190px"}} "Currency"]
       [:td (:currency/code currency)]])
    (when from-currency
      [:tr
       [:th {:scope "row" :style {:width "190px"}} "Originating Currency"]
       [:td (:currency/code from-currency)]])
    (when exchange-rate
      [:tr
       [:th {:scope "row" :style {:width "190px"}} "Exchange Rate"]
       [:td exchange-rate]])
    (when from-account
      [:tr
       [:th {:scope "row" :style {:width "190px"}} "Sender Account"]
       [:td (:account/name from-account)]])
    (when at
      [:tr
       [:th {:scope "row" :style {:width "190px"}} "Created At"]
       [:td [:pre {:style {:font-size "80%" :padding-top "3px" :margin 0}} (format-ts at)]]])
    (when (seq tags)
      [:tr
       [:th {:scope "row" :style {:width "190px"}} "Tags"]
       [:td (pr-str tags)]])]])


(defn render-transactions [ctx i]
  (let [transactions
        (->> (q> ctx
                 '[:find 
                   [(pull ?e 
                          [:db/id 
                           :transaction/type
                           :transaction/value 
                           :ts/at
                           {:ref/account [:account/name]} 
                           {:ref/currency [:currency/code]} 
                           {:ref/conto [{:ref/currency [:currency/code]} 
                                        {:ref/from-currency [:currency/code]}
                                        {:ref/from-account [:account/name]}
                                        :ts/at
                                        :conto/exchange-rate
                                        :conto/tags]}])
                    ...]
                   :in $ ?transfer-id
                   :where [?e :ref/transfer ?transfer-id]] (:db/id i))
             (sort-by :db/id))] 
    [:<> 
     [:tr.table-dark
      [:td.py-1 {:scope "row" :col-span 6 :style {:background "#000" :font-size "80%"}}
       (get-in i [:ref/from-account :account/name])
       " → "
       (get-in i [:ref/to-account :account/name])
       ": " (:transfer/value i) (get-in i [:ref/from-currency :currency/code])]]
     (map
      (fn [t]
        ^{:key (:db/id t)}
        [:tr  
         [:td.text-center
          {:class [(when (= :credit (:transaction/type t)) "table-success")
                   (when (= :debit (:transaction/type t)) "table-danger")]}
          (:transaction/type t)]
         [:td.text-right.text-monospace 
          [:b (format "%.2f" (:transaction/value t))]]
         [:td (get-in t [:ref/currency :currency/code])]
         [:td (get-in t [:ref/account :account/name])]
         [:td [:pre {:style {:font-size "80%" :padding-top "3px" :margin 0}} (format-ts (:ts/at t))]]
         [:td.p-0 {:style {:width "410px"}} [render-conto-table (:ref/conto t)]]])
      (sort :db/id transactions))]))

(defn render [ctx title transfers] 
  (when (seq transfers)
    [:<>     
     [:hr.my-4]
     [:h3 title]
     [:table.table.table-bordered.table-hover
      [:thead
       [:tr
        [:th.text-center {:scope "col" :style {:width "70px"}} "Type"]
        [:th {:scope "col"} "Value"]
        [:th {:scope "col"} "Currency"]
        [:th {:scope "col"} "Account"]
        [:th {:scope "col"} "Created At"]
        [:th {:scope "col"} "Conto"]]]
      [:tbody
       (doall
        (map 
         (fn [i]
           ^{:key (:db/id i)}
           [render-transactions ctx i])
         transfers))]]]))
