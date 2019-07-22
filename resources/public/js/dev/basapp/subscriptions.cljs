(ns basapp.subscriptions
  (:require [keechma.toolbox.dataloader.subscriptions :as dataloader]
            [basapp.edb :refer [edb-schema]]
            [basapp.datasources  :refer [datasources]])
  (:require-macros [reagent.ratom :refer [reaction]]))

(defn get-kv [key]
  (fn [app-db-atom]
    (reaction
     (get-in @app-db-atom (flatten [:kv key])))))


(defn get-datascript [app-db-atom]
  (reaction
   (:datascript @app-db-atom)))

(def subscriptions
  {:datascript get-datascript})
