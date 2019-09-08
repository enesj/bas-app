(def foreign-libs
  '[{:file           "dist/index.js"
     ;:file-min       "dist/indexjs"
     :provides       ["react"
                      "react-dom"
                      "create-react-class"
                      "antd"]

     :global-exports {react               React
                      react-dom           ReactDOM
                      create-react-class  CreateReactClass
                      antd Antd}}])

(defproject basapp "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/clojurescript "1.10.339"]
                 [reagent "0.8.1" :exclusions [cljsjs/react cljsjs/react-dom cljsjs/react-dom-server]]
                 [keechma "0.3.13" :exclusions [cljsjs/react-with-addons cljsjs/react-dom cljsjs/react-dom-server]]
                 [keechma/toolbox "0.1.23" :exclusions [cljsjs/react-with-addons cljsjs/react-dom cljsjs/react-dom-server]]
                 [keechma/entitydb "0.1.5"]
                 [reagent-utils "0.3.2"]
                 [datascript "0.18.4"]
                 [cljsjs/moment "2.24.0-0"]
                 [binaryage/oops "0.6.2"]]
                 ;[antizer "0.3.1"]]

  :min-lein-version "2.5.3"

  :source-paths ["src"]

  :plugins [[lein-cljsbuild "1.1.7"]]

  :clean-targets ^{:protect false} ["resources/public/js"
                                    "target"
                                    "test/js"]

  :figwheel {:css-dirs ["resources/public/css"]}

  :repl-options {:nrepl-middleware [cider.piggieback/wrap-cljs-repl]}

  :profiles
  {:dev
   {:dependencies [
                   [figwheel-sidecar "0.5.18"]
                   [binaryage/dirac "1.3.3"]
                   [cider/piggieback "0.4.0"]
                   [binaryage/devtools "0.9.10"]]

    :plugins      [[lein-figwheel "0.5.18"]
                   [lein-doo "0.1.7"]]}}


  :cljsbuild
  {:builds
   [{:id           "dev"
     :source-paths ["src"]
     :figwheel     {:on-jsload "basapp.core/reload"}
     :compiler     {:main                 basapp.core
                    :optimizations        :none
                    :output-to            "resources/public/js/app.js"
                    :output-dir           "resources/public/js/dev"
                    :asset-path           "js/dev"
                    :infer-externs        true
                    :npm-deps             false
                    :source-map-timestamp true
                    :preloads             [devtools.preload dirac.runtime.preload]
                    :external-config
                                          {:devtools/config
                                           {:features-to-install    [:formatters :hints]
                                            :fn-symbol              "F"
                                            :print-config-overrides true}}
                    :foreign-libs ~foreign-libs}}


    {:id           "min"
     :source-paths ["src"]
     :compiler     {:main            basapp.core
                    :optimizations   :advanced
                    :output-to       "resources/public/js/app.js"
                    :output-dir      "resources/public/js/min"
                    :elide-asserts   true
                    :closure-defines {goog.DEBUG false}
                    :pretty-print    false
                    :infer-externs        true
                    :npm-deps             false
                    :foreign-libs ~foreign-libs}}

    {:id           "test"
     :source-paths ["src" "test/cljs"]
     :compiler     {:output-to     "resources/public/js/test.js"
                    :output-dir    "resources/public/js/test"
                    :main          basapp.runner
                    :infer-externs        true
                    :npm-deps             false
                    :optimizations :none
                    :foreign-libs ~foreign-libs}}]})
