(ns basapp.util
  (:require [cljsjs.moment]
            [oops.core :refer [ocall]]))

(defn format-ts [ts]
  (when ts
    (ocall (js/moment ts) :format)))

;(defn pretty-print [& data]
;  (let [printed  (map (fn [d] (with-out-str (cljs.pprint/pprint d))) data)]
;    (doseq [p printed]
;      (println p))))

;(defn get-schema []
;  (:schema @(:datascript (:context @basapp.core/running-app))))
;
;(defn get-data []
;  (:datoms @(:datascript (:context @basapp.core/running-app))))