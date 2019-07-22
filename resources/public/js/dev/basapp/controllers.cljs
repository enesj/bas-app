(ns basapp.controllers
  (:require [basapp.controllers.datascript :as datascript]
            [basapp.controllers.user-actions :as user-actions]))


(def controllers
  (-> {:datascript datascript/controller
       :user-actions user-actions/controller}))
