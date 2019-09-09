(ns basapp.util
  (:require [cljsjs.moment]
            [reagent.core :as r]
            [keechma.ui-component :as ui]
            [basapp.datascript :refer [q> entity>]]
            [oops.core :refer [ocall]]))

(defn format-ts [ts]
  (when ts
    (ocall (js/moment ts) :format)))


(defn comparison [data1 data2 field]
  (let [data1' (get (js->clj data1 :keywordize-keys true) field)
        data2' (get (js->clj data2 :keywordize-keys true) field)
        data1 (if (coll? data1') (:id data1' ) data1')
        data2 (if (coll? data2') (:id data2' ) data2')]
    (compare data1 data2)))

(defn get-id [id]
  ((js->clj id) "id"))

(defn render-ref [ctx page display-field data]
  ;(js/console.log "folders" page display-field data)
  #(r/as-element
     (when %1
       [:a {:href (ui/url ctx {:page page :id (get-id %1)})}
        (display-field (first (filter (fn [x] (= (:db/id x) (get-id %1))) data)))])))

(def row-style-8 {:span 8 :offset 4 :style {:padding-top "1em"}})
(def row-style-12 {:span 12 :offset 4 :style {:padding-top "1em"}})


(defn pagination [entities]
  {:show-size-changer true
   :page-size-options ["5" "10" "20"]
   :show-total #(str "Ukupno: " % entities)})