(ns basapp.ui.account
  (:require [keechma.ui-component :as ui]
            [keechma.toolbox.ui :refer [route>]]
            [basapp.datascript :refer [q> entity>]]
            [reagent.format :refer [format]]
            [basapp.ui.transfers :as transfers]
            [basapp.ui.inputs :as i]
            [keechma.toolbox.forms.ui :as forms-ui]
            [basapp.util :refer [format-ts]]))

(defn pp [& data]
  (let [printed  (map (fn [d] (with-out-str (cljs.pprint/pprint d))) data)]
    (doseq [p printed]
      (println p))))

(defn money-format [val]
  (format "%.2f" val))

(defn get-receiver-available-brand-credits
  [ctx from-account-id to-account-id]
  (let [brand (entity> ctx to-account-id)
        brand-id (:db/id brand)
        country-id (get-in brand [:ref/country :db/id])
        brand-group-id (get-in brand [:ref/brand-group :db/id])

        brand-currency-id 
        (q> ctx 
            '[:find ?e .
              :in $ ?brand-id
              :where
              [?e :currency/virtual true]
              [?e :currency/specificity 100]
              [?e :ref/account ?brand-id]]
            brand-id)

        brand-group-currency-id 
        (q> ctx 
            '[:find ?e .
              :in $ ?brand-group-id
              :where
              [?e :currency/virtual true]
              [?e :currency/specificity 10]
              [?e :ref/brand-group ?brand-group-id]]
            brand-group-id)

        country-currency-id
        (q> ctx
            '[:find ?e .
              :in $ ?country-id
              :where
              [?e :currency/virtual true]
              [?e :currency/specificity 1]
              [?e :ref/country ?country-id]]
            country-id)

        brand-currency-contos
        (->> (q> ctx 
                 '[:find [(pull ?e [:db/id :ts/at :conto/exchange-rate :conto/balance :ref/currency :ref/from-currency]) ...]
                   :in $ ?brand-currency-id ?account-id
                   :where
                   [?e :conto/balance ?balance]
                   [(pos? ?balance)]
                   [?e :ref/account ?account-id]
                   [?e :ref/currency ?brand-currency-id]]
                 brand-currency-id from-account-id)
             (sort-by :ts/at))

        brand-group-currency-contos
        (->> (q> ctx
                 '[:find [(pull ?e [:db/id :ts/at :conto/exchange-rate :conto/balance :ref/currency :ref/from-currency]) ...]
                   :in $ ?brand-group-currency-id ?account-id
                   :where
                   [?e :conto/balance ?balance]
                   [(pos? ?balance)]
                   [?e :ref/account ?account-id]
                   [?e :ref/currency ?brand-group-currency-id]]
                 brand-group-currency-id from-account-id)
             (sort-by :ts/at))

        country-currency-contos
        (->> (q> ctx 
                 '[:find [(pull ?e [:db/id :ts/at :conto/exchange-rate :conto/balance :ref/currency :ref/from-currency]) ...]
                   :in $ ?country-currency-id ?account-id
                   :where
                   [?e :conto/balance ?balance]
                   [(pos? ?balance)]
                   [?e :ref/account ?account-id]
                   [?e :ref/currency ?country-currency-id]]
                 country-currency-id from-account-id)
             (sort-by :ts/at))

        all-contos (vec (apply concat [brand-currency-contos brand-group-currency-contos country-currency-contos]))]
    (reduce #(+ %1 (:conto/balance %2)) 0 all-contos)))

(defn render-incoming-transfers [ctx account-id]
  [transfers/render 
   ctx
   "Incoming Transfers"
   (->> (q> ctx
            '[:find [(pull ?e 
                           [:db/id 
                            :ts/at 
                            {:ref/from-account [:account/name]} 
                            {:ref/to-account [:account/name]} 
                            :transfer/value 
                            {:ref/from-currency [:currency/code]}]) 
                     ...]
              :in $ ?account-id
              :where
              [?e :transfer/direction]
              [?e :ref/to-account ?account-id]] account-id)
        (sort-by :ts/at))])

(defn render-outgoing-transfers [ctx account-id]
  [transfers/render 
   ctx
   "Outgoing Transfers"
   (->> (q> ctx
            '[:find [(pull ?e 
                           [:db/id 
                            :ts/at 
                            {:ref/from-account [:account/name]} 
                            {:ref/to-account [:account/name]} 
                            :transfer/value 
                            {:ref/from-currency [:currency/code]}]) 
                     ...]
              :in $ ?account-id
              :where
              [?e :transfer/direction]
              [?e :ref/from-account ?account-id]] account-id)
        (sort-by :ts/at))])

(defn render-form-errors [ctx form-props]
  (let [form-state (forms-ui/form-state> ctx form-props)]
    (when (= :submit-failed (get-in form-state [:state :type]))
      (let [e (ex-message (get-in form-state [:state :cause]))]
        [:div.alert.alert-danger e]))))

(defn render-form [ctx title form-type data]
  (let [form-props [form-type :form]]
    [:div.card.bg-light.mt-3
     [:div.card-body
      [:h3 title]
      [:form {:on-submit #(forms-ui/<submit ctx form-props %)}
       [render-form-errors ctx form-props]
       [i/text ctx form-props :value {:placeholder "Value"}]
       (when-let [retailers (:retailers data)]
         [i/select ctx form-props :to-account 
          {:options (mapv (fn [r] {:value (:db/id r) :label (:account/name r)}) retailers)
           :label "Retailer"}])
       (when-let [brands (:brands data)]
         [i/select ctx form-props :to-account
          {:options (mapv (fn [r] {:value (:db/id r) :label (:account/name r)}) brands)
           :label "Brand"}])
       [:button.btn.btn-primary "Submit"]]]]))

(defn render-buy-goods-form [ctx account]
  (let [form-props [:receiver->brand :form]
        brands
        (q> ctx '[:find [(pull ?e [:account/name :db/id]) ...] 
                  :in $ ?country-id
                  :where 
                  [?e :account/type :brand]
                  [?e :ref/country ?country-id]]
            (get-in account [:ref/country :db/id]))
        from-account-id (forms-ui/value-in> ctx form-props :from-account) 
        to-account-id (forms-ui/value-in> ctx form-props :to-account)]
    [:div.card.bg-light.mt-3
     [:div.card-body
      [:h3 "Buy Goods"]
      [:form {:on-submit #(forms-ui/<submit ctx form-props %)}
       [render-form-errors ctx form-props] 
       (when (seq brands)
         [i/select ctx form-props :to-account
          {:options (mapv (fn [r] {:value (:db/id r) :label (:account/name r)}) brands)
           :label "Brand"}])
       (when (and to-account-id
                  (not (empty? to-account-id)))
         [:p.mt-2.mb-3 
          "Available Credits: "
          [:b.text-monospace
           (money-format 
            (get-receiver-available-brand-credits ctx (js/parseInt from-account-id) (js/parseInt to-account-id)))]])
       [i/text ctx form-props :value {:placeholder "Value"}] 
       [:button.btn.btn-primary "Submit"]]]]))

(defn render-send-credits-form [ctx]
  (let [form-props [:sender->receiver :form]
        to-account-id (forms-ui/value-in> ctx form-props :to-account)
        receivers (q> ctx '[:find [(pull ?e [:account/name :db/id]) ...]
                            :in $
                            :where [?e :account/type :receiver]])]
    [:div.card.bg-light.mt-3
     [:div.card-body
      [:h3 "Send Mer-k-do credits"]
      [:form {:on-submit #(forms-ui/<submit ctx form-props %)}
       [render-form-errors ctx form-props]
       [i/text ctx form-props :value {:placeholder "Value"}]
       (when receivers
         [i/select ctx form-props :to-account 
          {:options (mapv (fn [r] {:value (:db/id r) :label (:account/name r)}) receivers)
           :label "Receiver"}]) 
       (when (and to-account-id (not (empty? to-account-id)))
         (let [to-account-e (entity> ctx (js/parseInt to-account-id))
               currencies (q> ctx '[:find [(pull ?e [:currency/code]) ...]
                                    :in $ ?country-id
                                    :where 
                                    [?e :currency/virtual true]
                                    [?e :ref/country ?country-id]]
                              (get-in to-account-e [:ref/country :db/id]))]
           [i/select ctx form-props :to-currency
            {:options (mapv (fn [c] {:value (:currency/code c) :label (:currency/code c)}) currencies)
             :label "Currency"}]))
       
       [:button.btn.btn-primary "Submit"]]]]))

(defn render-receiver-contos [ctx summed-contos]
  (when (seq summed-contos)
    [:div
     [:hr.my-4]
     [:table.table.table-bordered.table-hover
      [:thead
       [:tr
        [:th {:scope "col"} "Currency"]
        [:th {:scope "col"} "Balance"]]]
      [:tbody
       (map
        (fn [c]
          ^{:key (:ref/currency c)}
          [:tr
           [:td (get-in c [:ref/currency :currency/code])]
           [:td.text-right.text-monospace [:b (money-format (:conto/balance c))]]])
        summed-contos)]]]))

(defn render-exchange-credits-form [ctx]
  (let [form-props [:exchange :form] 
        form-state (forms-ui/form-state> ctx form-props)
        account-id (forms-ui/value-in> ctx form-props :account)
        from-currency (forms-ui/value-in> ctx form-props :from-currency)
        receivers (q> ctx '[:find [(pull ?e [:account/name :db/id]) ...]
                            :in $
                            :where [?e :account/type :receiver]])]
    [:div.card.bg-light.mt-3
     [:div.card-body
      [:h3 "Exchange Mer-k-do credits"]
      [:form {:on-submit #(forms-ui/<submit ctx form-props %)}
       [render-form-errors ctx form-props]
       (when receivers
         [i/select ctx form-props :account 
          {:options (mapv (fn [r] {:value (:db/id r) :label (:account/name r)}) receivers)
           :label "Receiver"}]) 
       (when (and account-id (not (empty? account-id)))
         (let [to-account-e (entity> ctx (js/parseInt account-id)) 
               country-currencies (q> ctx '[:find [(pull ?e [:currency/code]) ...]
                                            :in $ ?country-id
                                            :where 
                                            [?e :currency/virtual true]
                                            [?e :ref/country ?country-id]]
                                      (get-in to-account-e [:ref/country :db/id]))
               receiver-currencies (q> ctx '[:find [?currency-tag ...]
                                             :in $ ?account-id
                                             :where
                                             [?e :ref/account ?account-id]
                                             [?e :conto/balance ?balance]
                                             [(pos? ?balance)]
                                             [?e :ref/currency ?currency]
                                             [?currency :currency/code ?currency-tag]]
                                       (get-in to-account-e [:db/id]))
               receiver-contos (q> ctx
                                   '[:find
                                     [(pull ?e
                                            [{:ref/currency [:currency/code]}
                                             {:ref/from-currency [:currency/code]}
                                             {:ref/from-account [:account/name]}
                                             :db/id
                                             :ts/at
                                             :conto/tags
                                             :conto/balance])
                                      ...]
                                     :in $ ?account-id
                                     :where
                                     [?e :conto/balance ?balance]
                                     [?e :ref/account ?account-id]
                                     [(pos? ?balance)]]
                                   (get-in to-account-e [:db/id]))
               receiver-contos-summed (map (fn [[currency vals]]
                                             {:ref/currency currency
                                              :conto/balance (reduce + (map :conto/balance vals))})
                                           (group-by :ref/currency receiver-contos))]
           [:div
            [render-receiver-contos ctx receiver-contos-summed]
            [i/select ctx form-props :from-currency
             {:options (mapv (fn [c] {:value c :label c}) receiver-currencies)
              :label (str "From currency")}]
            (when from-currency
              (let [;; pull available-credits data with/from render-receiver-contos in the future
                    available-credits (:conto/balance (first (filter #(= from-currency (get-in % [:ref/currency :currency/code])) receiver-contos-summed)))
                    #_available-credits
                    #_(q> ctx
                        '[:find (sum ?balance) .
                          :in $ ?account-id ?currency-value
                          :where
                          [?e :conto/balance ?balance]
                          [(pos? ?balance)]
                          [?e :ref/account ?account-id]
                          [?e :ref/currency ?currency]
                          [?currency :currency/code ?currency-name]
                          [(= ?currency-value ?currency-name)]]
                        (get-in to-account-e [:db/id])
                        from-currency)]
                [:div
                 [:p (str "Available credits - " (money-format available-credits))]
                 [i/select ctx form-props :to-currency
                  {:options (mapv (fn [c]
                                    ^{:key (:currency/code c)}
                                    {:value (:currency/code c) :label (:currency/code c)}) (filterv #(not= (:currency/code %) from-currency) country-currencies))
                   :label "To currency"}]
                 [i/text ctx form-props :value {;;:input-type :number
                                                ;;:max available-credits
                                                :placeholder "Value"}]]))]))
       
       [:button.btn.btn-primary "Submit"]]]]))

(defn render-contos [ctx account-id]
  (let [contos (q> ctx
                   '[:find
                     [(pull ?e
                            [{:ref/currency [:currency/code]} 
                             {:ref/from-currency [:currency/code]}
                             {:ref/from-account [:account/name]}
                             :ts/at
                             :db/id
                             :conto/exchange-rate
                             :conto/tags
                             :conto/balance])
                      ...]
                     :in $ ?account-id
                     :where 
                     [?e :conto/balance]
                     [?e :ref/account ?account-id]]
                   account-id)]
    (when (seq contos)
      [:div
       [:hr.my-4]
       [:h3 "Sub-accounts"]
       [:table.table.table-bordered.table-hover
        [:thead
         [:tr
          [:th {:scope "col"} "Originating Currency"]
          [:th {:scope "col"} "Exchange Rate"]
          [:th {:scope "col"} "Sender Account"]
          [:th {:scope "col"} "Tags"]
          [:th {:scope "col" :style {:width "210px"}} "Created At"]
          [:th {:scope "col"} "Balance"]
          [:th {:scope "col"} "Currency"]]]
        [:tbody
         (map
          (fn [c]
            ^{:key (:db/id c)}
            [:tr
             [:td (get-in c [:ref/from-currency :currency/code])]
             [:td (:conto/exchange-rate c)]
             [:td (get-in c [:ref/from-account :account/name])]
             [:td (when-let [tags (:conto/tags c)] (pr-str tags))]
             [:td [:pre {:style {:font-size "80%" :padding-top "3px" :margin 0}} (format-ts (:ts/at c))]]
             [:td.text-right.text-monospace [:b (money-format (:conto/balance c))]]
             [:td (get-in c [:ref/currency :currency/code])]])
          contos)]]])))

(defn render [ctx]
  (let [account-id (:id (route> ctx))
        account (entity> ctx account-id)
        account-type (:account/type account)]
    [:div.container.pt-5
     [:h1 "Account"]
     [:p.mb-5 [:a {:href (ui/url ctx {:page "dashboard"})} "← Back to Dashboard"]]
     [:h3 (:account/name account) " (" (:account/type account) ")"]
     (when (= :retailer account-type)
       [render-form ctx "Buy Mer-k-do credits" :retailer->merkdo {}])
     (when (= :sender account-type)
       [render-form ctx "Buy Mer-k-do credits" :sender->retailer 
        {:retailers (q> ctx '[:find [(pull ?e [:account/name :db/id]) ...] :in $ :where [?e :account/type :retailer]])}])
     (when (= :sender account-type)
       [render-send-credits-form ctx])
     (when (= :receiver account-type)
       [render-buy-goods-form ctx account])
     (when (= :sender account-type) 
       [render-exchange-credits-form ctx])
     [render-contos ctx account-id]
     [render-incoming-transfers ctx account-id]
     [render-outgoing-transfers ctx account-id]]))

(def component
  (ui/constructor {:renderer render
                   :subscription-deps [:datascript]}))
