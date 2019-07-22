// Compiled by ClojureScript 1.10.339 {}
goog.provide('keechma.app_state.hashchange_router');
goog.require('cljs.core');
goog.require('keechma.app_state.core');
goog.require('router.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('goog.History');
keechma.app_state.hashchange_router.hashchange_listener = (function keechma$app_state$hashchange_router$hashchange_listener(routes,routes_chan,e){
var clean_route = cljs.core.subs.call(null,e.token,(1));
var route_params = router.core.url__GT_map.call(null,routes,clean_route);
return cljs.core.async.put_BANG_.call(null,routes_chan,route_params);
});
keechma.app_state.hashchange_router.get_history = (function keechma$app_state$hashchange_router$get_history(){
return (new goog.History(false,null,document.getElementById("history_state0"),document.getElementById("history_iframe0")));
});

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
keechma.app_state.hashchange_router.HashchangeRouter = (function (routes,routes_chan,hashchange_listener,app_db,__meta,__extmap,__hash){
this.routes = routes;
this.routes_chan = routes_chan;
this.hashchange_listener = hashchange_listener;
this.app_db = app_db;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k70754,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__70758 = k70754;
var G__70758__$1 = (((G__70758 instanceof cljs.core.Keyword))?G__70758.fqn:null);
switch (G__70758__$1) {
case "routes":
return self__.routes;

break;
case "routes-chan":
return self__.routes_chan;

break;
case "hashchange-listener":
return self__.hashchange_listener;

break;
case "app-db":
return self__.app_db;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k70754,else__4206__auto__);

}
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#keechma.app-state.hashchange-router.HashchangeRouter{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes","routes",457900162),self__.routes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),self__.routes_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801),self__.hashchange_listener],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-db","app-db",865606302),self__.app_db],null))], null),self__.__extmap));
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__70753){
var self__ = this;
var G__70753__$1 = this;
return (new cljs.core.RecordIter((0),G__70753__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801),new cljs.core.Keyword(null,"app-db","app-db",865606302)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new keechma.app_state.hashchange_router.HashchangeRouter(self__.routes,self__.routes_chan,self__.hashchange_listener,self__.app_db,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.keechma$app_state$core$IRouter$ = cljs.core.PROTOCOL_SENTINEL;

keechma.app_state.hashchange_router.HashchangeRouter.prototype.keechma$app_state$core$IRouter$start_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var history = keechma.app_state.hashchange_router.get_history.call(null);
var current_route_params = router.core.url__GT_map.call(null,new cljs.core.Keyword(null,"routes","routes",457900162).cljs$core$IFn$_invoke$arity$1(this$__$1),cljs.core.subs.call(null,window.location.hash,(2)));
goog.events.listen(history,goog.history.EventType.NAVIGATE,new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801).cljs$core$IFn$_invoke$arity$1(this$__$1));

var G__70759_70765 = history;
G__70759_70765.setEnabled(true);


cljs.core.swap_BANG_.call(null,self__.app_db,cljs.core.assoc,new cljs.core.Keyword(null,"route","route",329891309),current_route_params);

return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"history","history",-247395220),history);
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.keechma$app_state$core$IRouter$stop_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.events.unlisten(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(this$__$1),goog.history.EventType.NAVIGATE,new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801).cljs$core$IFn$_invoke$arity$1(this$__$1));
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.keechma$app_state$core$IRouter$redirect_BANG_$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return this$__$1.keechma$app_state$core$IRouter$redirect_BANG_$arity$3(null,params,null);
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.keechma$app_state$core$IRouter$redirect_BANG_$arity$3 = (function (this$,params,action){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"back","back",-417520012),action)){
return history.back();
} else {
return location.hash = ["#!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(router.core.map__GT_url.call(null,new cljs.core.Keyword(null,"routes","routes",457900162).cljs$core$IFn$_invoke$arity$1(this$__$1),params))].join('');
}
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.keechma$app_state$core$IRouter$url$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return ["#!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(router.core.map__GT_url.call(null,new cljs.core.Keyword(null,"routes","routes",457900162).cljs$core$IFn$_invoke$arity$1(this$__$1),params))].join('');
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.keechma$app_state$core$IRouter$linkable_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return true;
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.keechma$app_state$core$IRouter$wrap_component$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (879603011 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this70755,other70756){
var self__ = this;
var this70755__$1 = this;
return ((!((other70756 == null))) && ((this70755__$1.constructor === other70756.constructor)) && (cljs.core._EQ_.call(null,this70755__$1.routes,other70756.routes)) && (cljs.core._EQ_.call(null,this70755__$1.routes_chan,other70756.routes_chan)) && (cljs.core._EQ_.call(null,this70755__$1.hashchange_listener,other70756.hashchange_listener)) && (cljs.core._EQ_.call(null,this70755__$1.app_db,other70756.app_db)) && (cljs.core._EQ_.call(null,this70755__$1.__extmap,other70756.__extmap)));
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"routes","routes",457900162),null,new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),null,new cljs.core.Keyword(null,"app-db","app-db",865606302),null,new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new keechma.app_state.hashchange_router.HashchangeRouter(self__.routes,self__.routes_chan,self__.hashchange_listener,self__.app_db,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__70753){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__70760 = cljs.core.keyword_identical_QMARK_;
var expr__70761 = k__4211__auto__;
if(cljs.core.truth_(pred__70760.call(null,new cljs.core.Keyword(null,"routes","routes",457900162),expr__70761))){
return (new keechma.app_state.hashchange_router.HashchangeRouter(G__70753,self__.routes_chan,self__.hashchange_listener,self__.app_db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__70760.call(null,new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),expr__70761))){
return (new keechma.app_state.hashchange_router.HashchangeRouter(self__.routes,G__70753,self__.hashchange_listener,self__.app_db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__70760.call(null,new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801),expr__70761))){
return (new keechma.app_state.hashchange_router.HashchangeRouter(self__.routes,self__.routes_chan,G__70753,self__.app_db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__70760.call(null,new cljs.core.Keyword(null,"app-db","app-db",865606302),expr__70761))){
return (new keechma.app_state.hashchange_router.HashchangeRouter(self__.routes,self__.routes_chan,self__.hashchange_listener,G__70753,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.app_state.hashchange_router.HashchangeRouter(self__.routes,self__.routes_chan,self__.hashchange_listener,self__.app_db,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__70753),null));
}
}
}
}
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"routes","routes",457900162),self__.routes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),self__.routes_chan,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801),self__.hashchange_listener,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"app-db","app-db",865606302),self__.app_db,null))], null),self__.__extmap));
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__70753){
var self__ = this;
var this__4202__auto____$1 = this;
return (new keechma.app_state.hashchange_router.HashchangeRouter(self__.routes,self__.routes_chan,self__.hashchange_listener,self__.app_db,G__70753,self__.__extmap,self__.__hash));
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

keechma.app_state.hashchange_router.HashchangeRouter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"routes-chan","routes-chan",-1286759973,null),new cljs.core.Symbol(null,"hashchange-listener","hashchange-listener",405542726,null),new cljs.core.Symbol(null,"app-db","app-db",-1788829467,null)], null);
});

keechma.app_state.hashchange_router.HashchangeRouter.cljs$lang$type = true;

keechma.app_state.hashchange_router.HashchangeRouter.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"keechma.app-state.hashchange-router/HashchangeRouter",null,(1),null));
});

keechma.app_state.hashchange_router.HashchangeRouter.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"keechma.app-state.hashchange-router/HashchangeRouter");
});

/**
 * Positional factory function for keechma.app-state.hashchange-router/HashchangeRouter.
 */
keechma.app_state.hashchange_router.__GT_HashchangeRouter = (function keechma$app_state$hashchange_router$__GT_HashchangeRouter(routes,routes_chan,hashchange_listener,app_db){
return (new keechma.app_state.hashchange_router.HashchangeRouter(routes,routes_chan,hashchange_listener,app_db,null,null,null));
});

/**
 * Factory function for keechma.app-state.hashchange-router/HashchangeRouter, taking a map of keywords to field values.
 */
keechma.app_state.hashchange_router.map__GT_HashchangeRouter = (function keechma$app_state$hashchange_router$map__GT_HashchangeRouter(G__70757){
var extmap__4236__auto__ = (function (){var G__70763 = cljs.core.dissoc.call(null,G__70757,new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801),new cljs.core.Keyword(null,"app-db","app-db",865606302));
if(cljs.core.record_QMARK_.call(null,G__70757)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__70763);
} else {
return G__70763;
}
})();
return (new keechma.app_state.hashchange_router.HashchangeRouter(new cljs.core.Keyword(null,"routes","routes",457900162).cljs$core$IFn$_invoke$arity$1(G__70757),new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796).cljs$core$IFn$_invoke$arity$1(G__70757),new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801).cljs$core$IFn$_invoke$arity$1(G__70757),new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(G__70757),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});

keechma.app_state.hashchange_router.constructor$ = (function keechma$app_state$hashchange_router$constructor(routes,routes_chan,state){
var listener = cljs.core.partial.call(null,keechma.app_state.hashchange_router.hashchange_listener,router.core.expand_routes.call(null,routes),routes_chan);
return keechma.app_state.core.start_BANG_.call(null,keechma.app_state.hashchange_router.__GT_HashchangeRouter.call(null,router.core.expand_routes.call(null,routes),routes_chan,listener,new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(state)));
});

//# sourceMappingURL=hashchange_router.js.map?rel=1563552894307
