(ns basapp.domain.route)

(defn processor [route app-db]
  (if-let [id (get-in route [:data :id])]
    (assoc-in route [:data :id] (js/parseInt id))
    route))

