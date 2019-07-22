// Compiled by ClojureScript 1.10.339 {}
goog.provide('basapp.subscriptions');
goog.require('cljs.core');
goog.require('keechma.toolbox.dataloader.subscriptions');
goog.require('basapp.edb');
goog.require('basapp.datasources');
basapp.subscriptions.get_kv = (function basapp$subscriptions$get_kv(key){
return (function (app_db_atom){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),key], null)));
}));
});
});
basapp.subscriptions.get_datascript = (function basapp$subscriptions$get_datascript(app_db_atom){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"datascript","datascript",-2114593819).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_db_atom));
}));
});
basapp.subscriptions.subscriptions = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datascript","datascript",-2114593819),basapp.subscriptions.get_datascript], null);

//# sourceMappingURL=subscriptions.js.map?rel=1563552885777
