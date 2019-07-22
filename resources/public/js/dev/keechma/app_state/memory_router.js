// Compiled by ClojureScript 1.10.339 {}
goog.provide('keechma.app_state.memory_router');
goog.require('cljs.core');
goog.require('keechma.app_state.core');
goog.require('cljs.core.async');
goog.require('keechma.util');
keechma.app_state.memory_router.app_route_states_atom = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
keechma.app_state.memory_router.supported_redirect_actions = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"push","push",799791267),null,new cljs.core.Keyword(null,"replace","replace",-786587770),null,new cljs.core.Keyword(null,"back","back",-417520012),null], null), null);
keechma.app_state.memory_router.get_redirect_action = (function keechma$app_state$memory_router$get_redirect_action(action){
if(cljs.core.contains_QMARK_.call(null,keechma.app_state.memory_router.supported_redirect_actions,action)){
return action;
} else {
return new cljs.core.Keyword(null,"push","push",799791267);
}
});
keechma.app_state.memory_router.default_route_QMARK_ = (function keechma$app_state$memory_router$default_route_QMARK_(r){
return ((cljs.core.vector_QMARK_.call(null,r)) && (cljs.core._EQ_.call(null,"",cljs.core.first.call(null,r))));
});
keechma.app_state.memory_router.get_default_route = (function keechma$app_state$memory_router$get_default_route(routes){
var default_route = (function (){var or__3949__auto__ = cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,keechma.app_state.memory_router.default_route_QMARK_,routes)));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),default_route,new cljs.core.Keyword(null,"stack","stack",-793405930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [default_route], null)], null);
});
keechma.app_state.memory_router.get_initial_route = (function keechma$app_state$memory_router$get_initial_route(app_name,routes){
var temp__5718__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,keechma.app_state.memory_router.app_route_states_atom),app_name);
if(cljs.core.truth_(temp__5718__auto__)){
var app_route_state = temp__5718__auto__;
return app_route_state;
} else {
return keechma.app_state.memory_router.get_default_route.call(null,routes);
}
});
keechma.app_state.memory_router.push_to_stack = (function keechma$app_state$memory_router$push_to_stack(current_stack,params){
var temp__5718__auto__ = keechma.util.index_of.call(null,current_stack,params);
if(cljs.core.truth_(temp__5718__auto__)){
var idx = temp__5718__auto__;
return cljs.core.vec.call(null,cljs.core.take.call(null,(idx + (1)),current_stack));
} else {
return cljs.core.conj.call(null,current_stack,params);
}
});
keechma.app_state.memory_router.limit_stack = (function keechma$app_state$memory_router$limit_stack(stack){
return cljs.core.vec.call(null,cljs.core.take_last.call(null,(50),stack));
});
keechma.app_state.memory_router.apply_route_change = (function keechma$app_state$memory_router$apply_route_change(action,routes,current_route,params){
var current_stack = new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(current_route);
var G__70123 = action;
var G__70123__$1 = (((G__70123 instanceof cljs.core.Keyword))?G__70123.fqn:null);
switch (G__70123__$1) {
case "push":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),params,new cljs.core.Keyword(null,"stack","stack",-793405930),keechma.app_state.memory_router.limit_stack.call(null,keechma.app_state.memory_router.push_to_stack.call(null,current_stack,params))], null);

break;
case "replace":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),params,new cljs.core.Keyword(null,"stack","stack",-793405930),keechma.app_state.memory_router.limit_stack.call(null,cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.drop_last.call(null,current_stack)),params))], null);

break;
case "back":
var new_stack = keechma.app_state.memory_router.limit_stack.call(null,cljs.core.vec.call(null,cljs.core.drop_last.call(null,current_stack)));
var new_params = cljs.core.last.call(null,new_stack);
if(cljs.core.truth_(new_params)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new_params,new cljs.core.Keyword(null,"stack","stack",-793405930),new_stack], null);
} else {
return keechma.app_state.memory_router.get_default_route.call(null,routes);
}

break;
default:
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"stack","stack",-793405930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null)], null);

}
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
keechma.app_state.memory_router.MemoryRouter = (function (app_name,routes,routes_chan,app_db,__meta,__extmap,__hash){
this.app_name = app_name;
this.routes = routes;
this.routes_chan = routes_chan;
this.app_db = app_db;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.app_state.memory_router.MemoryRouter.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

keechma.app_state.memory_router.MemoryRouter.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k70126,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__70130 = k70126;
var G__70130__$1 = (((G__70130 instanceof cljs.core.Keyword))?G__70130.fqn:null);
switch (G__70130__$1) {
case "app-name":
return self__.app_name;

break;
case "routes":
return self__.routes;

break;
case "routes-chan":
return self__.routes_chan;

break;
case "app-db":
return self__.app_db;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k70126,else__4206__auto__);

}
});

keechma.app_state.memory_router.MemoryRouter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#keechma.app-state.memory-router.MemoryRouter{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-name","app-name",-268811251),self__.app_name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes","routes",457900162),self__.routes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),self__.routes_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-db","app-db",865606302),self__.app_db],null))], null),self__.__extmap));
});

keechma.app_state.memory_router.MemoryRouter.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__70125){
var self__ = this;
var G__70125__$1 = this;
return (new cljs.core.RecordIter((0),G__70125__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-name","app-name",-268811251),new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),new cljs.core.Keyword(null,"app-db","app-db",865606302)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.app_state.memory_router.MemoryRouter.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

keechma.app_state.memory_router.MemoryRouter.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new keechma.app_state.memory_router.MemoryRouter(self__.app_name,self__.routes,self__.routes_chan,self__.app_db,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.app_state.memory_router.MemoryRouter.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

keechma.app_state.memory_router.MemoryRouter.prototype.keechma$app_state$core$IRouter$ = cljs.core.PROTOCOL_SENTINEL;

keechma.app_state.memory_router.MemoryRouter.prototype.keechma$app_state$core$IRouter$start_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var routes__$1 = new cljs.core.Keyword(null,"routes","routes",457900162).cljs$core$IFn$_invoke$arity$1(this$__$1);
var initial_route = keechma.app_state.memory_router.get_initial_route.call(null,self__.app_name,routes__$1);
cljs.core.swap_BANG_.call(null,self__.app_db,cljs.core.assoc,new cljs.core.Keyword(null,"route","route",329891309),initial_route);

return this$__$1;
});

keechma.app_state.memory_router.MemoryRouter.prototype.keechma$app_state$core$IRouter$stop_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

keechma.app_state.memory_router.MemoryRouter.prototype.keechma$app_state$core$IRouter$url$arity$2 = (function (_,params){
var self__ = this;
var ___$1 = this;
return params;
});

keechma.app_state.memory_router.MemoryRouter.prototype.keechma$app_state$core$IRouter$redirect_BANG_$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return this$__$1.keechma$app_state$core$IRouter$redirect_BANG_$arity$3(null,params,new cljs.core.Keyword(null,"push","push",799791267));
});

keechma.app_state.memory_router.MemoryRouter.prototype.keechma$app_state$core$IRouter$redirect_BANG_$arity$3 = (function (this$,params,action){
var self__ = this;
var this$__$1 = this;
var routes_chan__$1 = new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796).cljs$core$IFn$_invoke$arity$1(this$__$1);
var routes__$1 = new cljs.core.Keyword(null,"routes","routes",457900162).cljs$core$IFn$_invoke$arity$1(this$__$1);
var redirect_action = keechma.app_state.memory_router.get_redirect_action.call(null,action);
var app_db__$1 = cljs.core.deref.call(null,new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(this$__$1));
var current_route = new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(app_db__$1);
var new_route = keechma.app_state.memory_router.apply_route_change.call(null,redirect_action,routes__$1,current_route,params);
var app_name__$1 = new cljs.core.Keyword(null,"app-name","app-name",-268811251).cljs$core$IFn$_invoke$arity$1(this$__$1);
cljs.core.swap_BANG_.call(null,keechma.app_state.memory_router.app_route_states_atom,cljs.core.assoc,app_name__$1,new_route);

return cljs.core.async.put_BANG_.call(null,routes_chan__$1,new_route);
});

keechma.app_state.memory_router.MemoryRouter.prototype.keechma$app_state$core$IRouter$wrap_component$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
});

keechma.app_state.memory_router.MemoryRouter.prototype.keechma$app_state$core$IRouter$linkable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
});

keechma.app_state.memory_router.MemoryRouter.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (1761432056 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

keechma.app_state.memory_router.MemoryRouter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this70127,other70128){
var self__ = this;
var this70127__$1 = this;
return ((!((other70128 == null))) && ((this70127__$1.constructor === other70128.constructor)) && (cljs.core._EQ_.call(null,this70127__$1.app_name,other70128.app_name)) && (cljs.core._EQ_.call(null,this70127__$1.routes,other70128.routes)) && (cljs.core._EQ_.call(null,this70127__$1.routes_chan,other70128.routes_chan)) && (cljs.core._EQ_.call(null,this70127__$1.app_db,other70128.app_db)) && (cljs.core._EQ_.call(null,this70127__$1.__extmap,other70128.__extmap)));
});

keechma.app_state.memory_router.MemoryRouter.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"routes","routes",457900162),null,new cljs.core.Keyword(null,"app-name","app-name",-268811251),null,new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),null,new cljs.core.Keyword(null,"app-db","app-db",865606302),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new keechma.app_state.memory_router.MemoryRouter(self__.app_name,self__.routes,self__.routes_chan,self__.app_db,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

keechma.app_state.memory_router.MemoryRouter.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__70125){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__70131 = cljs.core.keyword_identical_QMARK_;
var expr__70132 = k__4211__auto__;
if(cljs.core.truth_(pred__70131.call(null,new cljs.core.Keyword(null,"app-name","app-name",-268811251),expr__70132))){
return (new keechma.app_state.memory_router.MemoryRouter(G__70125,self__.routes,self__.routes_chan,self__.app_db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__70131.call(null,new cljs.core.Keyword(null,"routes","routes",457900162),expr__70132))){
return (new keechma.app_state.memory_router.MemoryRouter(self__.app_name,G__70125,self__.routes_chan,self__.app_db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__70131.call(null,new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),expr__70132))){
return (new keechma.app_state.memory_router.MemoryRouter(self__.app_name,self__.routes,G__70125,self__.app_db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__70131.call(null,new cljs.core.Keyword(null,"app-db","app-db",865606302),expr__70132))){
return (new keechma.app_state.memory_router.MemoryRouter(self__.app_name,self__.routes,self__.routes_chan,G__70125,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.app_state.memory_router.MemoryRouter(self__.app_name,self__.routes,self__.routes_chan,self__.app_db,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__70125),null));
}
}
}
}
});

keechma.app_state.memory_router.MemoryRouter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"app-name","app-name",-268811251),self__.app_name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"routes","routes",457900162),self__.routes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),self__.routes_chan,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"app-db","app-db",865606302),self__.app_db,null))], null),self__.__extmap));
});

keechma.app_state.memory_router.MemoryRouter.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__70125){
var self__ = this;
var this__4202__auto____$1 = this;
return (new keechma.app_state.memory_router.MemoryRouter(self__.app_name,self__.routes,self__.routes_chan,self__.app_db,G__70125,self__.__extmap,self__.__hash));
});

keechma.app_state.memory_router.MemoryRouter.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

keechma.app_state.memory_router.MemoryRouter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-name","app-name",1371720276,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"routes-chan","routes-chan",-1286759973,null),new cljs.core.Symbol(null,"app-db","app-db",-1788829467,null)], null);
});

keechma.app_state.memory_router.MemoryRouter.cljs$lang$type = true;

keechma.app_state.memory_router.MemoryRouter.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"keechma.app-state.memory-router/MemoryRouter",null,(1),null));
});

keechma.app_state.memory_router.MemoryRouter.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"keechma.app-state.memory-router/MemoryRouter");
});

/**
 * Positional factory function for keechma.app-state.memory-router/MemoryRouter.
 */
keechma.app_state.memory_router.__GT_MemoryRouter = (function keechma$app_state$memory_router$__GT_MemoryRouter(app_name,routes,routes_chan,app_db){
return (new keechma.app_state.memory_router.MemoryRouter(app_name,routes,routes_chan,app_db,null,null,null));
});

/**
 * Factory function for keechma.app-state.memory-router/MemoryRouter, taking a map of keywords to field values.
 */
keechma.app_state.memory_router.map__GT_MemoryRouter = (function keechma$app_state$memory_router$map__GT_MemoryRouter(G__70129){
var extmap__4236__auto__ = (function (){var G__70134 = cljs.core.dissoc.call(null,G__70129,new cljs.core.Keyword(null,"app-name","app-name",-268811251),new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),new cljs.core.Keyword(null,"app-db","app-db",865606302));
if(cljs.core.record_QMARK_.call(null,G__70129)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__70134);
} else {
return G__70134;
}
})();
return (new keechma.app_state.memory_router.MemoryRouter(new cljs.core.Keyword(null,"app-name","app-name",-268811251).cljs$core$IFn$_invoke$arity$1(G__70129),new cljs.core.Keyword(null,"routes","routes",457900162).cljs$core$IFn$_invoke$arity$1(G__70129),new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796).cljs$core$IFn$_invoke$arity$1(G__70129),new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(G__70129),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});

keechma.app_state.memory_router.constructor$ = (function keechma$app_state$memory_router$constructor(routes,routes_chan,state){
var vec__70136 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(state);
var app_name = cljs.core.nth.call(null,vec__70136,(0),null);
var _ = cljs.core.nth.call(null,vec__70136,(1),null);
return keechma.app_state.core.start_BANG_.call(null,keechma.app_state.memory_router.__GT_MemoryRouter.call(null,app_name,routes,routes_chan,new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(state)));
});

//# sourceMappingURL=memory_router.js.map?rel=1563552893048
