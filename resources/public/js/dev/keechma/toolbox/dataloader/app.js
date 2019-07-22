// Compiled by ClojureScript 1.10.339 {}
goog.provide('keechma.toolbox.dataloader.app');
goog.require('cljs.core');
goog.require('keechma.toolbox.dataloader.controller');
goog.require('keechma.toolbox.dataloader.subscriptions');
keechma.toolbox.dataloader.app.install = (function keechma$toolbox$dataloader$app$install(app_config,datasources,edb_schema){
var controllers = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(app_config);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var subscriptions = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(app_config);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var dataloader_subscriptions = keechma.toolbox.dataloader.subscriptions.make_subscriptions.call(null,datasources,edb_schema);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,app_config,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),keechma.toolbox.dataloader.controller.register.call(null,controllers,datasources,edb_schema)),new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),cljs.core.merge.call(null,dataloader_subscriptions,subscriptions));
});

//# sourceMappingURL=app.js.map?rel=1563552891967
