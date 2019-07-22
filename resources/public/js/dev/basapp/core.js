// Compiled by ClojureScript 1.10.339 {}
goog.provide('basapp.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('keechma.app_state');
goog.require('keechma.toolbox.dataloader.app');
goog.require('keechma.toolbox.forms.app');
goog.require('basapp.controllers');
goog.require('basapp.ui');
goog.require('basapp.subscriptions');
goog.require('basapp.edb');
goog.require('basapp.datasources');
goog.require('basapp.forms');
goog.require('basapp.domain.route');
goog.require('basapp.datascript');
goog.require('basapp.domain.schema');
basapp.core.app_definition = basapp.datascript.install.call(null,keechma.toolbox.forms.app.install.call(null,keechma.toolbox.dataloader.app.install.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"components","components",-1073188942),basapp.ui.ui,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),basapp.controllers.controllers,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),basapp.subscriptions.subscriptions,new cljs.core.Keyword(null,"html-element","html-element",1188696850),document.getElementById("app"),new cljs.core.Keyword(null,"route-processor","route-processor",1968647549),basapp.domain.route.processor,new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),"dashboard"], null)], null),":page",":page/:id",":page/:id/:action"], null)], null),basapp.datasources.datasources,basapp.edb.edb_schema),basapp.forms.forms,basapp.forms.forms_automount_fns),basapp.domain.schema.bas);
if((typeof basapp !== 'undefined') && (typeof basapp.core !== 'undefined') && (typeof basapp.core.running_app !== 'undefined')){
} else {
basapp.core.running_app = cljs.core.atom.call(null,null);
}
basapp.core.start_app_BANG_ = (function basapp$core$start_app_BANG_(){
return cljs.core.reset_BANG_.call(null,basapp.core.running_app,keechma.app_state.start_BANG_.call(null,basapp.core.app_definition));
});
basapp.core.dev_setup = (function basapp$core$dev_setup(){
if(goog.DEBUG){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
basapp.core.reload = (function basapp$core$reload(){
var current = cljs.core.deref.call(null,basapp.core.running_app);
if(cljs.core.truth_(current)){
return keechma.app_state.stop_BANG_.call(null,current,basapp.core.start_app_BANG_);
} else {
return basapp.core.start_app_BANG_.call(null);
}
});
basapp.core.main = (function basapp$core$main(){
basapp.core.dev_setup.call(null);

return basapp.core.start_app_BANG_.call(null);
});
goog.exportSymbol('basapp.core.main', basapp.core.main);

//# sourceMappingURL=core.js.map?rel=1563559530180
