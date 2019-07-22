(ns basapp.ui.inputs
  (:require [reagent.core :as r]
            [clojure.string :as str]
            [keechma.toolbox.forms.ui :as forms-ui]
            [keechma.toolbox.util :refer [class-names]]
            [basapp.forms.validators :as validators]
            [oops.core :refer [oget]]))

(defn make-input-with-composition-support [tag]
  ;; This function implements input fields that handle composition based inputs correctly
  (fn [props]
    (let [el-ref-atom (atom nil)
          composition-atom? (atom false)]
      (r/create-class
       {:reagent-render (fn [props]
                          (let [props-ref  (or (:ref props) identity)
                                props-on-change (or (:on-change props) identity)
                                props-value (:value props)
                                props-without-value (dissoc props :value)]
                            [tag (merge props-without-value
                                        {:on-change (fn [e]
                                                      (when-not @composition-atom?
                                                        (props-on-change e)))
                                         :on-composition-start #(reset! composition-atom? true)
                                         :on-composition-update #(reset! composition-atom? true)
                                         :on-composition-end (fn [e]
                                                               (reset! composition-atom? false)
                                                               (props-on-change e))
                                         :default-value props-value
                                         :ref (fn [el]
                                                (reset! el-ref-atom el)
                                                (props-ref el))})]))
        :component-will-update (fn [comp [_ new-props _]]
                                 (let [el @el-ref-atom
                                       composition? @composition-atom?]
                                   (when (and el (not composition?))
                                     (set! (.-value el) (or (:value new-props) "")))))}))))

(def input-with-composition-support (make-input-with-composition-support :input.form-control))
(def textarea-with-composition-support (make-input-with-composition-support :textarea.form-control))

(defn process-classes [classes]
  (str/join " " (map name (filter (complement nil?) (flatten [classes])))))


(defn render-errors [attr-errors]
  (when-let [errors (get-in attr-errors [:$errors$ :failed])]
    (into [:ul {:style {:padding-top "5px" :color "red"}}]
        (doall (map (fn [e]
                      [:li (validators/get-validator-message e)])
                    errors)))))

(defn get-placeholder [{:keys [placeholder label]}]
  (or placeholder label))

(defn get-label [{:keys [label placeholder]}]
  (or label placeholder))

(defn render-label [input-props errors]
  [:label {:class (class-names {:has-errors (seq errors)})}
   (get-label input-props)])

(defn text [ctx form-props attr {:keys [input-type class max] :as input-props}]
  (let [errors (forms-ui/errors-in> ctx form-props attr)
        input-size (or (:input/size input-props) :normal)]
    [:fieldset.form-group
     [render-label input-props errors]
     [input-with-composition-support
      (-> {:placeholder (get-placeholder input-props)
           :on-change #(forms-ui/<on-change ctx form-props attr %)
           :on-blur #(forms-ui/<on-blur ctx form-props attr %)
           :value (forms-ui/value-in> ctx form-props attr)
           :type (or input-type :text)
           :max (or max nil)
           :class (class-names {:has-errors (seq errors)
                                "fs2 size-normal" (= :normal input-size)
                                "fs1 size-small" (= :small input-size)
                                (process-classes class) true})}
          (merge (select-keys input-props [:auto-focus :disabled])))]
     [render-errors errors]]))

(defn textarea [ctx form-props attr {:keys [rows class] :as input-props}]
  (let [errors (forms-ui/errors-in> ctx form-props attr)
        input-size (or (:input/size input-props) :normal)]
    [:fieldset.form-group
     [render-label input-props]
     [textarea-with-composition-support
      {:placeholder (get-placeholder input-props)
       :rows (or rows 6)
       :on-change #(forms-ui/<on-change ctx form-props attr %)
       :on-blur #(forms-ui/<on-blur ctx form-props attr %)
       :value (forms-ui/value-in> ctx form-props attr)
       :style {:resize "vertical"}
       :class (class-names {:has-errors (seq errors)
                            "fs2 size-normal" (= :normal input-size)
                            "fs1 size-small" (= :small input-size)
                            (process-classes class) true})}]
     [render-errors (forms-ui/errors-in> ctx form-props attr)]]))

(defn select [ctx form-props attr {:keys [options optgroups class] :as input-props}]
  (let [errors (forms-ui/errors-in> ctx form-props attr)
        placeholder (get-placeholder input-props)
        input-size (or (:input/size input-props) :normal)]
    [:fieldset.form-group
     [render-label input-props]
     [:select.form-control
      {:on-change #(forms-ui/<on-change ctx form-props attr %)
       :value (or (forms-ui/value-in> ctx form-props attr) "")
       :class (class-names {:has-errors (seq errors)
                            "fs2 size-normal" (= :normal input-size)
                            "fs1 size-small" (= :small input-size)
                            (process-classes class) true})}
      [:option {:value ""} placeholder]
      [:option {:value ""} "—"]
      (if optgroups
        (map
         (fn [{:keys [label options]}]
           (when (seq options)
             [:optgroup {:label label :key label}
              (map
               (fn [{:keys [value label]}]
                 [:option
                  {:value value
                   :key value}
                  label])
               (sort-by :label options))]))
         (sort-by :label optgroups))
        (map
         (fn [{:keys [value label]}]
           [:option
            {:value value
             :key value}
            label])
         (sort-by :label options)))]
     [render-errors (forms-ui/errors-in> ctx form-props attr)]]))

(defn checkbox [ctx form-props attr {:keys [class] :as input-props}]
  (let [errors (forms-ui/errors-in> ctx form-props attr)
        input-size (or (:input/size input-props) :normal)]
    [:fieldset.form-group
     [:label.fs2.c-neutral-3.block
      [:input.mr1
       {:placeholder (get-placeholder input-props)
        :on-change #(forms-ui/<set-value ctx form-props attr (oget % :target.checked))
        :checked (boolean (forms-ui/value-in> ctx form-props attr))
        :type "checkbox"
        :class (class-names {:has-errors (seq errors)
                             (process-classes class) true})}]
      (get-label input-props)]
     [render-errors (forms-ui/errors-in> ctx form-props attr)]]))