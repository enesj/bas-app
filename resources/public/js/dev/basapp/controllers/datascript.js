// Compiled by ClojureScript 1.10.339 {}
goog.provide('basapp.controllers.datascript');
goog.require('cljs.core');
goog.require('keechma.toolbox.pipeline.core');
goog.require('keechma.toolbox.pipeline.controller');
goog.require('basapp.datascript');
goog.require('datascript.core');
goog.require('keechma.controller');
goog.require('cljs.pprint');
goog.require('basapp.domain.seed');
basapp.controllers.datascript.controller = keechma.toolbox.pipeline.controller.constructor$.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),(function (_){
return true;
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-start","on-start",-1839785985),keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(ds/transact!\r\n (seed/insert-data seed/insert-sector seed/sectors app-db))",new cljs.core.Keyword(null,"val","val",128701612),basapp.datascript.transact_BANG_.call(null,basapp.domain.seed.insert_data.call(null,basapp.domain.seed.insert_sector,basapp.domain.seed.sectors,app_db))], null);
}),(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(ds/transact! (seed/insert-data seed/insert-floor seed/floors app-db))",new cljs.core.Keyword(null,"val","val",128701612),basapp.datascript.transact_BANG_.call(null,basapp.domain.seed.insert_data.call(null,basapp.domain.seed.insert_floor,basapp.domain.seed.floors,app_db))], null);
}),(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(ds/transact!\r\n (seed/insert-data seed/insert-department seed/departments app-db))",new cljs.core.Keyword(null,"val","val",128701612),basapp.datascript.transact_BANG_.call(null,basapp.domain.seed.insert_data.call(null,basapp.domain.seed.insert_department,basapp.domain.seed.departments,app_db))], null);
}),(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(ds/transact!\r\n (seed/insert-data seed/insert-office seed/offices app-db))",new cljs.core.Keyword(null,"val","val",128701612),basapp.datascript.transact_BANG_.call(null,basapp.domain.seed.insert_data.call(null,basapp.domain.seed.insert_office,basapp.domain.seed.offices,app_db))], null);
}),(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(ds/transact!\r\n (seed/insert-data seed/insert-employee seed/employees app-db))",new cljs.core.Keyword(null,"val","val",128701612),basapp.datascript.transact_BANG_.call(null,basapp.domain.seed.insert_data.call(null,basapp.domain.seed.insert_employee,basapp.domain.seed.employees,app_db))], null);
}),(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(ds/transact!\r\n (seed/insert-data seed/insert-folder seed/folders app-db))",new cljs.core.Keyword(null,"val","val",128701612),basapp.datascript.transact_BANG_.call(null,basapp.domain.seed.insert_data.call(null,basapp.domain.seed.insert_folder,basapp.domain.seed.folders,app_db))], null);
}),(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(ds/transact!\r\n (seed/insert-data seed/insert-folder-parent seed/folders app-db))",new cljs.core.Keyword(null,"val","val",128701612),basapp.datascript.transact_BANG_.call(null,basapp.domain.seed.insert_data.call(null,basapp.domain.seed.insert_folder_parent,basapp.domain.seed.folders,app_db))], null);
}),(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/commit! (assoc-in app-db [:kv :datascript-initialized?] true))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.commit_BANG_.call(null,cljs.core.assoc_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"datascript-initialized?","datascript-initialized?",2024340329)], null),true))], null);
})], null)], null))], null));

//# sourceMappingURL=datascript.js.map?rel=1568191592788
