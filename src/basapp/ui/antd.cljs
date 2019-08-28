(ns basapp.ui.antd
  (:require [antd]
            [reagent.core :as r]))

(def table (r/adapt-react-class antd/Table))
(def row (r/adapt-react-class antd/Row))
(def col (r/adapt-react-class antd/Col))
(def layout (r/adapt-react-class antd/Layout))
(def layout-content (r/adapt-react-class antd/Layout.Content))
(def layout-header (r/adapt-react-class antd/Layout.Header))

(defn message-info [message]
  (antd/message.info message))