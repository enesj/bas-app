// Compiled by ClojureScript 1.10.339 {}
goog.provide('basapp.controllers.datascript');
goog.require('cljs.core');
goog.require('keechma.toolbox.pipeline.core');
goog.require('keechma.toolbox.pipeline.controller');
goog.require('basapp.datascript');
goog.require('datascript.core');
goog.require('cljs.pprint');
goog.require('basapp.domain.bas');
basapp.controllers.datascript.controller = keechma.toolbox.pipeline.controller.constructor$.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),(function (_){
return true;
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-start","on-start",-1839785985),keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(ds/transact!\r\n (concat\r\n  (d/insert-sectors d/sectors)\r\n  (d/insert-departments d/departments)\r\n  (d/insert-employees d/employees)))",new cljs.core.Keyword(null,"val","val",128701612),basapp.datascript.transact_BANG_.call(null,cljs.core.concat.call(null,basapp.domain.bas.insert_sectors.call(null,basapp.domain.bas.sectors),basapp.domain.bas.insert_departments.call(null,basapp.domain.bas.departments),basapp.domain.bas.insert_employees.call(null,basapp.domain.bas.employees)))], null);
}),(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/commit! (assoc-in app-db [:kv :datascript-initialized?] true))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.commit_BANG_.call(null,cljs.core.assoc_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"datascript-initialized?","datascript-initialized?",2024340329)], null),true))], null);
})], null),new cljs.core.Keyword(null,"rescue","rescue",1135767523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,_,e){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(println \"ERROR->\" e)",new cljs.core.Keyword(null,"val","val",128701612),cljs.core.println.call(null,"ERROR->",e)], null);
})], null)], null))], null));

//# sourceMappingURL=datascript.js.map?rel=1563559343198
