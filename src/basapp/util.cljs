(ns basapp.util
  (:require [cljsjs.moment]
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

;(defn pretty-print [& data]
;  (let [printed  (map (fn [d] (with-out-str (cljs.pprint/pprint d))) data)]
;    (doseq [p printed]
;      (println p))))

;(defn get-schema []
;  (:schema @(:datascript (:context @basapp.core/running-app))))
;
;(defn get-data []
;  (:datoms @(:datascript (:context @basapp.core/running-app))))