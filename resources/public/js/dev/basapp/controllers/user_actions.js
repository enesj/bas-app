// Compiled by ClojureScript 1.10.339 {}
goog.provide('basapp.controllers.user_actions');
goog.require('cljs.core');
goog.require('keechma.toolbox.pipeline.core');
goog.require('keechma.toolbox.pipeline.controller');
goog.require('keechma.toolbox.dataloader.controller');
basapp.controllers.user_actions.controller = keechma.toolbox.pipeline.controller.constructor$.call(null,cljs.core.constantly.call(null,true),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"employees-filter","employees-filter",-2138121844),keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/commit! (assoc-in app-db [:kv :employees-filter] value))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.commit_BANG_.call(null,cljs.core.assoc_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"employees-filter","employees-filter",-2138121844)], null),value))], null);
})], null)], null))], null));

//# sourceMappingURL=user_actions.js.map?rel=1563556862418
