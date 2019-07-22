// Compiled by ClojureScript 1.10.339 {}
goog.provide('basapp.domain.route');
goog.require('cljs.core');
basapp.domain.route.processor = (function basapp$domain$route$processor(route,app_db){
var temp__5718__auto__ = cljs.core.get_in.call(null,route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
if(cljs.core.truth_(temp__5718__auto__)){
var id = temp__5718__auto__;
return cljs.core.assoc_in.call(null,route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"id","id",-1388402092)], null),parseInt(id));
} else {
return route;
}
});

//# sourceMappingURL=route.js.map?rel=1563552894782
