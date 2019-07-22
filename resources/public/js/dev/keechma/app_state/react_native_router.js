// Compiled by ClojureScript 1.10.339 {}
goog.provide('keechma.app_state.react_native_router');
goog.require('cljs.core');
goog.require('keechma.app_state.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
keechma.app_state.react_native_router.initial_route = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),(0),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"init","init",-1875481434)], null)], null)], null);
if((typeof keechma !== 'undefined') && (typeof keechma.app_state !== 'undefined') && (typeof keechma.app_state.react_native_router !== 'undefined') && (typeof keechma.app_state.react_native_router.route_atom !== 'undefined')){
} else {
keechma.app_state.react_native_router.route_atom = reagent.core.atom.call(null,keechma.app_state.react_native_router.initial_route);
}
keechma.app_state.react_native_router.update_navigation_key = (function keechma$app_state$react_native_router$update_navigation_key(route){
return cljs.core.assoc.call(null,route,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.get_in.call(null,route,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(route),new cljs.core.Keyword(null,"key","key",-1516042587)], null)));
});
keechma.app_state.react_native_router.push_route = (function keechma$app_state$react_native_router$push_route(route,value){
return keechma.app_state.react_native_router.update_navigation_key.call(null,cljs.core.update.call(null,cljs.core.update.call(null,route,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.inc),new cljs.core.Keyword(null,"routes","routes",457900162),(function (p1__70736_SHARP_){
return cljs.core.conj.call(null,p1__70736_SHARP_,value);
})));
});
keechma.app_state.react_native_router.pop_route = (function keechma$app_state$react_native_router$pop_route(route,_){
if(((1) < cljs.core.count.call(null,new cljs.core.Keyword(null,"routes","routes",457900162).cljs$core$IFn$_invoke$arity$1(route)))){
return keechma.app_state.react_native_router.update_navigation_key.call(null,cljs.core.update.call(null,cljs.core.update.call(null,route,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.dec),new cljs.core.Keyword(null,"routes","routes",457900162),cljs.core.pop));
} else {
return route;
}
});
keechma.app_state.react_native_router.home_route = (function keechma$app_state$react_native_router$home_route(route,_){
return keechma.app_state.react_native_router.initial_route;
});
keechma.app_state.react_native_router.navigate_BANG_ = (function keechma$app_state$react_native_router$navigate_BANG_(var_args){
var G__70738 = arguments.length;
switch (G__70738) {
case 1:
return keechma.app_state.react_native_router.navigate_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.app_state.react_native_router.navigate_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.app_state.react_native_router.navigate_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (action){
return keechma.app_state.react_native_router.navigate_BANG_.call(null,action,null);
});

keechma.app_state.react_native_router.navigate_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (action,payload){
var action_fn = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"push","push",799791267),keechma.app_state.react_native_router.push_route,new cljs.core.Keyword(null,"pop","pop",-1734778776),keechma.app_state.react_native_router.pop_route,new cljs.core.Keyword(null,"home","home",-74557309),keechma.app_state.react_native_router.home_route], null),action);
return cljs.core.reset_BANG_.call(null,keechma.app_state.react_native_router.route_atom,action_fn.call(null,cljs.core.deref.call(null,keechma.app_state.react_native_router.route_atom),payload));
});

keechma.app_state.react_native_router.navigate_BANG_.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {keechma.app_state.core.IRouter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
keechma.app_state.react_native_router.ReactNativeRouter = (function (routes_chan,watch_id,app_db,__meta,__extmap,__hash){
this.routes_chan = routes_chan;
this.watch_id = watch_id;
this.app_db = app_db;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k70741,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__70745 = k70741;
var G__70745__$1 = (((G__70745 instanceof cljs.core.Keyword))?G__70745.fqn:null);
switch (G__70745__$1) {
case "routes-chan":
return self__.routes_chan;

break;
case "watch-id":
return self__.watch_id;

break;
case "app-db":
return self__.app_db;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k70741,else__4206__auto__);

}
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#keechma.app-state.react-native-router.ReactNativeRouter{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),self__.routes_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"watch-id","watch-id",1539926919),self__.watch_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-db","app-db",865606302),self__.app_db],null))], null),self__.__extmap));
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__70740){
var self__ = this;
var G__70740__$1 = this;
return (new cljs.core.RecordIter((0),G__70740__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),new cljs.core.Keyword(null,"watch-id","watch-id",1539926919),new cljs.core.Keyword(null,"app-db","app-db",865606302)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new keechma.app_state.react_native_router.ReactNativeRouter(self__.routes_chan,self__.watch_id,self__.app_db,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.keechma$app_state$core$IRouter$ = cljs.core.PROTOCOL_SENTINEL;

keechma.app_state.react_native_router.ReactNativeRouter.prototype.keechma$app_state$core$IRouter$start_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var routes_chan__$1 = new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796).cljs$core$IFn$_invoke$arity$1(this$__$1);
var watch_id__$1 = new cljs.core.Keyword(null,"watch-id","watch-id",1539926919).cljs$core$IFn$_invoke$arity$1(this$__$1);
if(goog.DEBUG){
console.warn(":react-native router is deprecated. It will continue to work indefinitely, but new projects should use :memory router instead.");
} else {
}

cljs.core.add_watch.call(null,keechma.app_state.react_native_router.route_atom,watch_id__$1,((function (routes_chan__$1,watch_id__$1,this$__$1){
return (function (_,___$1,___$2,route_data){
return cljs.core.async.put_BANG_.call(null,routes_chan__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),route_data], null));
});})(routes_chan__$1,watch_id__$1,this$__$1))
);

cljs.core.swap_BANG_.call(null,self__.app_db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"data","data",-232669377)], null),cljs.core.deref.call(null,keechma.app_state.react_native_router.route_atom));

return this$__$1;
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.keechma$app_state$core$IRouter$stop_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.remove_watch.call(null,keechma.app_state.react_native_router.route_atom,new cljs.core.Keyword(null,"watch-id","watch-id",1539926919).cljs$core$IFn$_invoke$arity$1(this$__$1));
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.keechma$app_state$core$IRouter$redirect_BANG_$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return keechma.app_state.react_native_router.navigate_BANG_.call(null,new cljs.core.Keyword(null,"push","push",799791267),params);
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.keechma$app_state$core$IRouter$redirect_BANG_$arity$3 = (function (this$,params,_){
var self__ = this;
var this$__$1 = this;
return keechma.app_state.react_native_router.navigate_BANG_.call(null,new cljs.core.Keyword(null,"push","push",799791267),params);
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.keechma$app_state$core$IRouter$url$arity$2 = (function (_,params){
var self__ = this;
var ___$1 = this;
return params;
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.keechma$app_state$core$IRouter$wrap_component$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.keechma$app_state$core$IRouter$linkable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1415765247 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this70742,other70743){
var self__ = this;
var this70742__$1 = this;
return ((!((other70743 == null))) && ((this70742__$1.constructor === other70743.constructor)) && (cljs.core._EQ_.call(null,this70742__$1.routes_chan,other70743.routes_chan)) && (cljs.core._EQ_.call(null,this70742__$1.watch_id,other70743.watch_id)) && (cljs.core._EQ_.call(null,this70742__$1.app_db,other70743.app_db)) && (cljs.core._EQ_.call(null,this70742__$1.__extmap,other70743.__extmap)));
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"watch-id","watch-id",1539926919),null,new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),null,new cljs.core.Keyword(null,"app-db","app-db",865606302),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new keechma.app_state.react_native_router.ReactNativeRouter(self__.routes_chan,self__.watch_id,self__.app_db,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__70740){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__70746 = cljs.core.keyword_identical_QMARK_;
var expr__70747 = k__4211__auto__;
if(cljs.core.truth_(pred__70746.call(null,new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),expr__70747))){
return (new keechma.app_state.react_native_router.ReactNativeRouter(G__70740,self__.watch_id,self__.app_db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__70746.call(null,new cljs.core.Keyword(null,"watch-id","watch-id",1539926919),expr__70747))){
return (new keechma.app_state.react_native_router.ReactNativeRouter(self__.routes_chan,G__70740,self__.app_db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__70746.call(null,new cljs.core.Keyword(null,"app-db","app-db",865606302),expr__70747))){
return (new keechma.app_state.react_native_router.ReactNativeRouter(self__.routes_chan,self__.watch_id,G__70740,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.app_state.react_native_router.ReactNativeRouter(self__.routes_chan,self__.watch_id,self__.app_db,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__70740),null));
}
}
}
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),self__.routes_chan,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"watch-id","watch-id",1539926919),self__.watch_id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"app-db","app-db",865606302),self__.app_db,null))], null),self__.__extmap));
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__70740){
var self__ = this;
var this__4202__auto____$1 = this;
return (new keechma.app_state.react_native_router.ReactNativeRouter(self__.routes_chan,self__.watch_id,self__.app_db,G__70740,self__.__extmap,self__.__hash));
});

keechma.app_state.react_native_router.ReactNativeRouter.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

keechma.app_state.react_native_router.ReactNativeRouter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"routes-chan","routes-chan",-1286759973,null),new cljs.core.Symbol(null,"watch-id","watch-id",-1114508850,null),new cljs.core.Symbol(null,"app-db","app-db",-1788829467,null)], null);
});

keechma.app_state.react_native_router.ReactNativeRouter.cljs$lang$type = true;

keechma.app_state.react_native_router.ReactNativeRouter.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"keechma.app-state.react-native-router/ReactNativeRouter",null,(1),null));
});

keechma.app_state.react_native_router.ReactNativeRouter.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"keechma.app-state.react-native-router/ReactNativeRouter");
});

/**
 * Positional factory function for keechma.app-state.react-native-router/ReactNativeRouter.
 */
keechma.app_state.react_native_router.__GT_ReactNativeRouter = (function keechma$app_state$react_native_router$__GT_ReactNativeRouter(routes_chan,watch_id,app_db){
return (new keechma.app_state.react_native_router.ReactNativeRouter(routes_chan,watch_id,app_db,null,null,null));
});

/**
 * Factory function for keechma.app-state.react-native-router/ReactNativeRouter, taking a map of keywords to field values.
 */
keechma.app_state.react_native_router.map__GT_ReactNativeRouter = (function keechma$app_state$react_native_router$map__GT_ReactNativeRouter(G__70744){
var extmap__4236__auto__ = (function (){var G__70749 = cljs.core.dissoc.call(null,G__70744,new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),new cljs.core.Keyword(null,"watch-id","watch-id",1539926919),new cljs.core.Keyword(null,"app-db","app-db",865606302));
if(cljs.core.record_QMARK_.call(null,G__70744)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__70749);
} else {
return G__70749;
}
})();
return (new keechma.app_state.react_native_router.ReactNativeRouter(new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796).cljs$core$IFn$_invoke$arity$1(G__70744),new cljs.core.Keyword(null,"watch-id","watch-id",1539926919).cljs$core$IFn$_invoke$arity$1(G__70744),new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(G__70744),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});

keechma.app_state.react_native_router.constructor$ = (function keechma$app_state$react_native_router$constructor(_,routes_chan,state){
var watch_id = cljs.core.keyword.call(null,cljs.core.gensym.call(null,new cljs.core.Keyword(null,"route-watch","route-watch",-391939416)));
return keechma.app_state.core.start_BANG_.call(null,keechma.app_state.react_native_router.__GT_ReactNativeRouter.call(null,routes_chan,watch_id,new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(state)));
});

//# sourceMappingURL=react_native_router.js.map?rel=1563552894184
