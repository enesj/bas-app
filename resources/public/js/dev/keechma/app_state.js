// Compiled by ClojureScript 1.10.339 {}
goog.provide('keechma.app_state');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('keechma.ui_component');
goog.require('keechma.controller_manager');
goog.require('keechma.controller');
goog.require('keechma.app_state.core');
goog.require('keechma.app_state.hashchange_router');
goog.require('keechma.app_state.react_native_router');
goog.require('keechma.app_state.history_router');
goog.require('keechma.app_state.memory_router');
goog.require('cognitect.transit');
keechma.app_state.default_route_processor = (function keechma$app_state$default_route_processor(route,_){
return route;
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
keechma.app_state.AppState = (function (name,reporter,router,routes_chan,route_processor,commands_chan,app_db,subscriptions_cache,components,controllers,context,html_element,stop_fns,__meta,__extmap,__hash){
this.name = name;
this.reporter = reporter;
this.router = router;
this.routes_chan = routes_chan;
this.route_processor = route_processor;
this.commands_chan = commands_chan;
this.app_db = app_db;
this.subscriptions_cache = subscriptions_cache;
this.components = components;
this.controllers = controllers;
this.context = context;
this.html_element = html_element;
this.stop_fns = stop_fns;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.app_state.AppState.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

keechma.app_state.AppState.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k70769,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__70773 = k70769;
var G__70773__$1 = (((G__70773 instanceof cljs.core.Keyword))?G__70773.fqn:null);
switch (G__70773__$1) {
case "name":
return self__.name;

break;
case "reporter":
return self__.reporter;

break;
case "router":
return self__.router;

break;
case "routes-chan":
return self__.routes_chan;

break;
case "route-processor":
return self__.route_processor;

break;
case "commands-chan":
return self__.commands_chan;

break;
case "app-db":
return self__.app_db;

break;
case "subscriptions-cache":
return self__.subscriptions_cache;

break;
case "components":
return self__.components;

break;
case "controllers":
return self__.controllers;

break;
case "context":
return self__.context;

break;
case "html-element":
return self__.html_element;

break;
case "stop-fns":
return self__.stop_fns;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k70769,else__4206__auto__);

}
});

keechma.app_state.AppState.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#keechma.app-state.AppState{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reporter","reporter",-805360621),self__.reporter],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"router","router",1091916230),self__.router],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),self__.routes_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"route-processor","route-processor",1968647549),self__.route_processor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"commands-chan","commands-chan",1238886607),self__.commands_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-db","app-db",865606302),self__.app_db],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"subscriptions-cache","subscriptions-cache",1047891019),self__.subscriptions_cache],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"components","components",-1073188942),self__.components],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"controllers","controllers",-1120410624),self__.controllers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"context","context",-830191113),self__.context],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"html-element","html-element",1188696850),self__.html_element],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-fns","stop-fns",188061237),self__.stop_fns],null))], null),self__.__extmap));
});

keechma.app_state.AppState.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__70768){
var self__ = this;
var G__70768__$1 = this;
return (new cljs.core.RecordIter((0),G__70768__$1,13,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),new cljs.core.Keyword(null,"route-processor","route-processor",1968647549),new cljs.core.Keyword(null,"commands-chan","commands-chan",1238886607),new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"subscriptions-cache","subscriptions-cache",1047891019),new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"html-element","html-element",1188696850),new cljs.core.Keyword(null,"stop-fns","stop-fns",188061237)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.app_state.AppState.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

keechma.app_state.AppState.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,self__.route_processor,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,self__.html_element,self__.stop_fns,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.app_state.AppState.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (13 + cljs.core.count.call(null,self__.__extmap));
});

keechma.app_state.AppState.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-113481389 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

keechma.app_state.AppState.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this70770,other70771){
var self__ = this;
var this70770__$1 = this;
return ((!((other70771 == null))) && ((this70770__$1.constructor === other70771.constructor)) && (cljs.core._EQ_.call(null,this70770__$1.name,other70771.name)) && (cljs.core._EQ_.call(null,this70770__$1.reporter,other70771.reporter)) && (cljs.core._EQ_.call(null,this70770__$1.router,other70771.router)) && (cljs.core._EQ_.call(null,this70770__$1.routes_chan,other70771.routes_chan)) && (cljs.core._EQ_.call(null,this70770__$1.route_processor,other70771.route_processor)) && (cljs.core._EQ_.call(null,this70770__$1.commands_chan,other70771.commands_chan)) && (cljs.core._EQ_.call(null,this70770__$1.app_db,other70771.app_db)) && (cljs.core._EQ_.call(null,this70770__$1.subscriptions_cache,other70771.subscriptions_cache)) && (cljs.core._EQ_.call(null,this70770__$1.components,other70771.components)) && (cljs.core._EQ_.call(null,this70770__$1.controllers,other70771.controllers)) && (cljs.core._EQ_.call(null,this70770__$1.context,other70771.context)) && (cljs.core._EQ_.call(null,this70770__$1.html_element,other70771.html_element)) && (cljs.core._EQ_.call(null,this70770__$1.stop_fns,other70771.stop_fns)) && (cljs.core._EQ_.call(null,this70770__$1.__extmap,other70771.__extmap)));
});

keechma.app_state.AppState.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [new cljs.core.Keyword(null,"controllers","controllers",-1120410624),null,new cljs.core.Keyword(null,"router","router",1091916230),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"subscriptions-cache","subscriptions-cache",1047891019),null,new cljs.core.Keyword(null,"commands-chan","commands-chan",1238886607),null,new cljs.core.Keyword(null,"html-element","html-element",1188696850),null,new cljs.core.Keyword(null,"components","components",-1073188942),null,new cljs.core.Keyword(null,"reporter","reporter",-805360621),null,new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),null,new cljs.core.Keyword(null,"stop-fns","stop-fns",188061237),null,new cljs.core.Keyword(null,"context","context",-830191113),null,new cljs.core.Keyword(null,"route-processor","route-processor",1968647549),null,new cljs.core.Keyword(null,"app-db","app-db",865606302),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,self__.route_processor,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,self__.html_element,self__.stop_fns,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

keechma.app_state.AppState.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__70768){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__70774 = cljs.core.keyword_identical_QMARK_;
var expr__70775 = k__4211__auto__;
if(cljs.core.truth_(pred__70774.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__70775))){
return (new keechma.app_state.AppState(G__70768,self__.reporter,self__.router,self__.routes_chan,self__.route_processor,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,self__.html_element,self__.stop_fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__70774.call(null,new cljs.core.Keyword(null,"reporter","reporter",-805360621),expr__70775))){
return (new keechma.app_state.AppState(self__.name,G__70768,self__.router,self__.routes_chan,self__.route_processor,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,self__.html_element,self__.stop_fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__70774.call(null,new cljs.core.Keyword(null,"router","router",1091916230),expr__70775))){
return (new keechma.app_state.AppState(self__.name,self__.reporter,G__70768,self__.routes_chan,self__.route_processor,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,self__.html_element,self__.stop_fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__70774.call(null,new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),expr__70775))){
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,G__70768,self__.route_processor,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,self__.html_element,self__.stop_fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__70774.call(null,new cljs.core.Keyword(null,"route-processor","route-processor",1968647549),expr__70775))){
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,G__70768,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,self__.html_element,self__.stop_fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__70774.call(null,new cljs.core.Keyword(null,"commands-chan","commands-chan",1238886607),expr__70775))){
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,self__.route_processor,G__70768,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,self__.html_element,self__.stop_fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__70774.call(null,new cljs.core.Keyword(null,"app-db","app-db",865606302),expr__70775))){
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,self__.route_processor,self__.commands_chan,G__70768,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,self__.html_element,self__.stop_fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__70774.call(null,new cljs.core.Keyword(null,"subscriptions-cache","subscriptions-cache",1047891019),expr__70775))){
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,self__.route_processor,self__.commands_chan,self__.app_db,G__70768,self__.components,self__.controllers,self__.context,self__.html_element,self__.stop_fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__70774.call(null,new cljs.core.Keyword(null,"components","components",-1073188942),expr__70775))){
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,self__.route_processor,self__.commands_chan,self__.app_db,self__.subscriptions_cache,G__70768,self__.controllers,self__.context,self__.html_element,self__.stop_fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__70774.call(null,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),expr__70775))){
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,self__.route_processor,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,G__70768,self__.context,self__.html_element,self__.stop_fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__70774.call(null,new cljs.core.Keyword(null,"context","context",-830191113),expr__70775))){
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,self__.route_processor,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,G__70768,self__.html_element,self__.stop_fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__70774.call(null,new cljs.core.Keyword(null,"html-element","html-element",1188696850),expr__70775))){
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,self__.route_processor,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,G__70768,self__.stop_fns,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__70774.call(null,new cljs.core.Keyword(null,"stop-fns","stop-fns",188061237),expr__70775))){
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,self__.route_processor,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,self__.html_element,G__70768,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,self__.route_processor,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,self__.html_element,self__.stop_fns,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__70768),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
});

keechma.app_state.AppState.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"reporter","reporter",-805360621),self__.reporter,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"router","router",1091916230),self__.router,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),self__.routes_chan,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"route-processor","route-processor",1968647549),self__.route_processor,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"commands-chan","commands-chan",1238886607),self__.commands_chan,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"app-db","app-db",865606302),self__.app_db,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"subscriptions-cache","subscriptions-cache",1047891019),self__.subscriptions_cache,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"components","components",-1073188942),self__.components,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"controllers","controllers",-1120410624),self__.controllers,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"context","context",-830191113),self__.context,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"html-element","html-element",1188696850),self__.html_element,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"stop-fns","stop-fns",188061237),self__.stop_fns,null))], null),self__.__extmap));
});

keechma.app_state.AppState.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__70768){
var self__ = this;
var this__4202__auto____$1 = this;
return (new keechma.app_state.AppState(self__.name,self__.reporter,self__.router,self__.routes_chan,self__.route_processor,self__.commands_chan,self__.app_db,self__.subscriptions_cache,self__.components,self__.controllers,self__.context,self__.html_element,self__.stop_fns,G__70768,self__.__extmap,self__.__hash));
});

keechma.app_state.AppState.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

keechma.app_state.AppState.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"reporter","reporter",835170906,null),new cljs.core.Symbol(null,"router","router",-1562519539,null),new cljs.core.Symbol(null,"routes-chan","routes-chan",-1286759973,null),new cljs.core.Symbol(null,"route-processor","route-processor",-685788220,null),new cljs.core.Symbol(null,"commands-chan","commands-chan",-1415549162,null),new cljs.core.Symbol(null,"app-db","app-db",-1788829467,null),new cljs.core.Symbol(null,"subscriptions-cache","subscriptions-cache",-1606544750,null),new cljs.core.Symbol(null,"components","components",567342585,null),new cljs.core.Symbol(null,"controllers","controllers",520120903,null),new cljs.core.Symbol(null,"context","context",810340414,null),new cljs.core.Symbol(null,"html-element","html-element",-1465738919,null),new cljs.core.Symbol(null,"stop-fns","stop-fns",1828592764,null)], null);
});

keechma.app_state.AppState.cljs$lang$type = true;

keechma.app_state.AppState.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"keechma.app-state/AppState",null,(1),null));
});

keechma.app_state.AppState.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"keechma.app-state/AppState");
});

/**
 * Positional factory function for keechma.app-state/AppState.
 */
keechma.app_state.__GT_AppState = (function keechma$app_state$__GT_AppState(name,reporter,router__$1,routes_chan,route_processor,commands_chan,app_db,subscriptions_cache,components,controllers,context,html_element,stop_fns){
return (new keechma.app_state.AppState(name,reporter,router__$1,routes_chan,route_processor,commands_chan,app_db,subscriptions_cache,components,controllers,context,html_element,stop_fns,null,null,null));
});

/**
 * Factory function for keechma.app-state/AppState, taking a map of keywords to field values.
 */
keechma.app_state.map__GT_AppState = (function keechma$app_state$map__GT_AppState(G__70772){
var extmap__4236__auto__ = (function (){var G__70777 = cljs.core.dissoc.call(null,G__70772,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),new cljs.core.Keyword(null,"route-processor","route-processor",1968647549),new cljs.core.Keyword(null,"commands-chan","commands-chan",1238886607),new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"subscriptions-cache","subscriptions-cache",1047891019),new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"html-element","html-element",1188696850),new cljs.core.Keyword(null,"stop-fns","stop-fns",188061237));
if(cljs.core.record_QMARK_.call(null,G__70772)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__70777);
} else {
return G__70777;
}
})();
return (new keechma.app_state.AppState(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__70772),new cljs.core.Keyword(null,"reporter","reporter",-805360621).cljs$core$IFn$_invoke$arity$1(G__70772),new cljs.core.Keyword(null,"router","router",1091916230).cljs$core$IFn$_invoke$arity$1(G__70772),new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796).cljs$core$IFn$_invoke$arity$1(G__70772),new cljs.core.Keyword(null,"route-processor","route-processor",1968647549).cljs$core$IFn$_invoke$arity$1(G__70772),new cljs.core.Keyword(null,"commands-chan","commands-chan",1238886607).cljs$core$IFn$_invoke$arity$1(G__70772),new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(G__70772),new cljs.core.Keyword(null,"subscriptions-cache","subscriptions-cache",1047891019).cljs$core$IFn$_invoke$arity$1(G__70772),new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(G__70772),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(G__70772),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(G__70772),new cljs.core.Keyword(null,"html-element","html-element",1188696850).cljs$core$IFn$_invoke$arity$1(G__70772),new cljs.core.Keyword(null,"stop-fns","stop-fns",188061237).cljs$core$IFn$_invoke$arity$1(G__70772),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
keechma.app_state.SerializedAppState = (function (app_db,__meta,__extmap,__hash){
this.app_db = app_db;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.app_state.SerializedAppState.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

keechma.app_state.SerializedAppState.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k70780,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__70784 = k70780;
var G__70784__$1 = (((G__70784 instanceof cljs.core.Keyword))?G__70784.fqn:null);
switch (G__70784__$1) {
case "app-db":
return self__.app_db;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k70780,else__4206__auto__);

}
});

keechma.app_state.SerializedAppState.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#keechma.app-state.SerializedAppState{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-db","app-db",865606302),self__.app_db],null))], null),self__.__extmap));
});

keechma.app_state.SerializedAppState.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__70779){
var self__ = this;
var G__70779__$1 = this;
return (new cljs.core.RecordIter((0),G__70779__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.app_state.SerializedAppState.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

keechma.app_state.SerializedAppState.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new keechma.app_state.SerializedAppState(self__.app_db,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.app_state.SerializedAppState.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

keechma.app_state.SerializedAppState.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-930208384 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

keechma.app_state.SerializedAppState.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this70781,other70782){
var self__ = this;
var this70781__$1 = this;
return ((!((other70782 == null))) && ((this70781__$1.constructor === other70782.constructor)) && (cljs.core._EQ_.call(null,this70781__$1.app_db,other70782.app_db)) && (cljs.core._EQ_.call(null,this70781__$1.__extmap,other70782.__extmap)));
});

keechma.app_state.SerializedAppState.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app-db","app-db",865606302),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new keechma.app_state.SerializedAppState(self__.app_db,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

keechma.app_state.SerializedAppState.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__70779){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__70785 = cljs.core.keyword_identical_QMARK_;
var expr__70786 = k__4211__auto__;
if(cljs.core.truth_(pred__70785.call(null,new cljs.core.Keyword(null,"app-db","app-db",865606302),expr__70786))){
return (new keechma.app_state.SerializedAppState(G__70779,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.app_state.SerializedAppState(self__.app_db,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__70779),null));
}
});

keechma.app_state.SerializedAppState.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"app-db","app-db",865606302),self__.app_db,null))], null),self__.__extmap));
});

keechma.app_state.SerializedAppState.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__70779){
var self__ = this;
var this__4202__auto____$1 = this;
return (new keechma.app_state.SerializedAppState(self__.app_db,G__70779,self__.__extmap,self__.__hash));
});

keechma.app_state.SerializedAppState.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

keechma.app_state.SerializedAppState.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-db","app-db",-1788829467,null)], null);
});

keechma.app_state.SerializedAppState.cljs$lang$type = true;

keechma.app_state.SerializedAppState.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"keechma.app-state/SerializedAppState",null,(1),null));
});

keechma.app_state.SerializedAppState.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"keechma.app-state/SerializedAppState");
});

/**
 * Positional factory function for keechma.app-state/SerializedAppState.
 */
keechma.app_state.__GT_SerializedAppState = (function keechma$app_state$__GT_SerializedAppState(app_db){
return (new keechma.app_state.SerializedAppState(app_db,null,null,null));
});

/**
 * Factory function for keechma.app-state/SerializedAppState, taking a map of keywords to field values.
 */
keechma.app_state.map__GT_SerializedAppState = (function keechma$app_state$map__GT_SerializedAppState(G__70783){
var extmap__4236__auto__ = (function (){var G__70788 = cljs.core.dissoc.call(null,G__70783,new cljs.core.Keyword(null,"app-db","app-db",865606302));
if(cljs.core.record_QMARK_.call(null,G__70783)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__70788);
} else {
return G__70788;
}
})();
return (new keechma.app_state.SerializedAppState(new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(G__70783),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});

keechma.app_state.get_controller_types_set = (function keechma$app_state$get_controller_types_set(app_state){
return cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.type,cljs.core.vals.call(null,new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(app_state))));
});
keechma.app_state.prepare_for_serialization = (function keechma$app_state$prepare_for_serialization(var_args){
var G__70792 = arguments.length;
switch (G__70792) {
case 1:
return keechma.app_state.prepare_for_serialization.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.app_state.prepare_for_serialization.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.app_state.prepare_for_serialization.cljs$core$IFn$_invoke$arity$1 = (function (value){
return keechma.app_state.prepare_for_serialization.call(null,value,cljs.core.set.call(null,cljs.core.PersistentArrayMap.EMPTY));
});

keechma.app_state.prepare_for_serialization.cljs$core$IFn$_invoke$arity$2 = (function (value,controller_types){
if(cljs.core._EQ_.call(null,keechma.app_state.AppState,cljs.core.type.call(null,value))){
return keechma.app_state.__GT_SerializedAppState.call(null,keechma.app_state.prepare_for_serialization.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(value)),keechma.app_state.get_controller_types_set.call(null,value)));
} else {
if(((!((value == null)))?(((((value.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === value.cljs$core$IDeref$))))?true:(((!value.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,value):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,value))){
return keechma.app_state.prepare_for_serialization.call(null,cljs.core.deref.call(null,value),controller_types);
} else {
if(cljs.core.contains_QMARK_.call(null,controller_types,cljs.core.type.call(null,value))){
return keechma.controller.__GT_SerializedController.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(value));
} else {
if(((cljs.core._EQ_.call(null,keechma.app_state.SerializedAppState,cljs.core.type.call(null,value))) || (cljs.core._EQ_.call(null,keechma.controller.SerializedController,cljs.core.type.call(null,value))))){
return value;
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return cljs.core.reduce.call(null,(function (acc,p__70794){
var vec__70795 = p__70794;
var k = cljs.core.nth.call(null,vec__70795,(0),null);
var v = cljs.core.nth.call(null,vec__70795,(1),null);
return cljs.core.assoc.call(null,acc,k,keechma.app_state.prepare_for_serialization.call(null,v,controller_types));
}),cljs.core.PersistentArrayMap.EMPTY,value);
} else {
if(cljs.core.vector_QMARK_.call(null,value)){
return cljs.core.map.call(null,(function (p1__70790_SHARP_){
return keechma.app_state.prepare_for_serialization.call(null,p1__70790_SHARP_,controller_types);
}),value);
} else {
return value;

}
}
}
}
}
}
});

keechma.app_state.prepare_for_serialization.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {keechma.app_state.Object}
*/
keechma.app_state.ControllerWriteHandler = (function (){
});
keechma.app_state.ControllerWriteHandler.prototype.tag = (function (v){
var self__ = this;
var this$ = this;
return "controller";
});

keechma.app_state.ControllerWriteHandler.prototype.rep = (function (v){
var self__ = this;
var this$ = this;
return ({"params": new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(v)});
});

keechma.app_state.ControllerWriteHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return null;
});

keechma.app_state.ControllerWriteHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

keechma.app_state.ControllerWriteHandler.cljs$lang$type = true;

keechma.app_state.ControllerWriteHandler.cljs$lang$ctorStr = "keechma.app-state/ControllerWriteHandler";

keechma.app_state.ControllerWriteHandler.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"keechma.app-state/ControllerWriteHandler");
});

/**
 * Positional factory function for keechma.app-state/ControllerWriteHandler.
 */
keechma.app_state.__GT_ControllerWriteHandler = (function keechma$app_state$__GT_ControllerWriteHandler(){
return (new keechma.app_state.ControllerWriteHandler());
});


/**
* @constructor
 * @implements {keechma.app_state.Object}
*/
keechma.app_state.AppStateWriteHandler = (function (){
});
keechma.app_state.AppStateWriteHandler.prototype.tag = (function (v){
var self__ = this;
var this$ = this;
return "app-state";
});

keechma.app_state.AppStateWriteHandler.prototype.rep = (function (v){
var self__ = this;
var this$ = this;
return ({"appdb": new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(v)});
});

keechma.app_state.AppStateWriteHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return null;
});

keechma.app_state.AppStateWriteHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

keechma.app_state.AppStateWriteHandler.cljs$lang$type = true;

keechma.app_state.AppStateWriteHandler.cljs$lang$ctorStr = "keechma.app-state/AppStateWriteHandler";

keechma.app_state.AppStateWriteHandler.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"keechma.app-state/AppStateWriteHandler");
});

/**
 * Positional factory function for keechma.app-state/AppStateWriteHandler.
 */
keechma.app_state.__GT_AppStateWriteHandler = (function keechma$app_state$__GT_AppStateWriteHandler(){
return (new keechma.app_state.AppStateWriteHandler());
});

keechma.app_state.serialize_app_state = (function keechma$app_state$serialize_app_state(transit_writers,state){
var running_controllers = cljs.core.get_in.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732)], null));
var handlers = cljs.core.assoc.call(null,transit_writers,keechma.app_state.SerializedAppState,(new keechma.app_state.AppStateWriteHandler()),keechma.controller.SerializedController,(new keechma.app_state.ControllerWriteHandler()));
var writer = cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers], null));
var prepared_state = keechma.app_state.prepare_for_serialization.call(null,state);
return cognitect.transit.write.call(null,writer,prepared_state);
});
keechma.app_state.deserialize_app_state = (function keechma$app_state$deserialize_app_state(transit_readers,serialized_state){
var handlers = cljs.core.assoc.call(null,transit_readers,"controller",(function (data){
return keechma.controller.__GT_SerializedController.call(null,cljs.core.get.call(null,data,"params"));
}),"app-state",(function (data){
return keechma.app_state.__GT_SerializedAppState.call(null,cljs.core.get.call(null,data,"appdb"));
}));
var reader = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers], null));
return cognitect.transit.read.call(null,reader,serialized_state);
});
keechma.app_state.app_db = (function keechma$app_state$app_db(initial_data){
return reagent.core.atom.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"route","route",329891309),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"kv","kv",-1099920440),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.PersistentArrayMap.EMPTY], null),initial_data));
});
keechma.app_state.default_config = (function keechma$app_state$default_config(initial_data){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"subscriptions-cache","subscriptions-cache",1047891019),new cljs.core.Keyword(null,"commands-chan","commands-chan",1238886607),new cljs.core.Keyword(null,"html-element","html-element",1188696850),new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),new cljs.core.Keyword(null,"stop-fns","stop-fns",188061237),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.Keyword(null,"route-processor","route-processor",1968647549),new cljs.core.Keyword(null,"app-db","app-db",865606302)],[cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hashchange","hashchange",1795201042),new cljs.core.Keyword(null,"application","application",551185447),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.async.chan.call(null),null,cljs.core.PersistentArrayMap.EMPTY,(function (app_name,type,direction,topic,name,payload,cmd_info,severity){
return null;
}),cljs.core.async.chan.call(null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stop","stop",-2140911342),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.PersistentVector.EMPTY], null),keechma.app_state.default_route_processor,keechma.app_state.app_db.call(null,initial_data)]);
});
keechma.app_state.process_config = (function keechma$app_state$process_config(config){
var name = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(config),cljs.core.keyword.call(null,cljs.core.gensym.call(null,"v"))], null);
var reporter = cljs.core.partial.call(null,new cljs.core.Keyword(null,"reporter","reporter",-805360621).cljs$core$IFn$_invoke$arity$1(config),name);
return cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"reporter","reporter",-805360621),reporter);
});
keechma.app_state.add_reporter_to_controllers = (function keechma$app_state$add_reporter_to_controllers(controllers,reporter){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
return cljs.core.assoc.call(null,m,k,cljs.core.assoc.call(null,v,new cljs.core.Keyword(null,"reporter","reporter",-805360621),reporter));
}),cljs.core.PersistentArrayMap.EMPTY,controllers);
});
keechma.app_state.add_redirect_fn_to_controllers = (function keechma$app_state$add_redirect_fn_to_controllers(controllers,router__$1){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
var new_v = cljs.core.assoc.call(null,v,new cljs.core.Keyword(null,"redirect-fn","redirect-fn",281458973),cljs.core.partial.call(null,keechma.app_state.core.redirect_BANG_,router__$1),new cljs.core.Keyword(null,"router","router",1091916230),router__$1);
return cljs.core.assoc.call(null,m,k,new_v);
}),cljs.core.PersistentArrayMap.EMPTY,controllers);
});
keechma.app_state.add_context_to_controllers = (function keechma$app_state$add_context_to_controllers(controllers,context){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
return cljs.core.assoc.call(null,m,k,cljs.core.assoc.call(null,v,new cljs.core.Keyword(null,"context","context",-830191113),context));
}),cljs.core.PersistentArrayMap.EMPTY,controllers);
});
keechma.app_state.add_stop_fn = (function keechma$app_state$add_stop_fn(state,stop_fn){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"stop-fns","stop-fns",188061237),cljs.core.conj.call(null,new cljs.core.Keyword(null,"stop-fns","stop-fns",188061237).cljs$core$IFn$_invoke$arity$1(state),stop_fn));
});
keechma.app_state.start_selected_router_BANG_ = (function keechma$app_state$start_selected_router_BANG_(state,constructor$){
var routes = new cljs.core.Keyword(null,"routes","routes",457900162).cljs$core$IFn$_invoke$arity$1(state);
var routes_chan = new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796).cljs$core$IFn$_invoke$arity$1(state);
var router__$1 = constructor$.call(null,routes,routes_chan,state);
return keechma.app_state.add_stop_fn.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"router","router",1091916230),router__$1),((function (routes,routes_chan,router__$1){
return (function (s){
keechma.app_state.core.stop_BANG_.call(null,router__$1);

return s;
});})(routes,routes_chan,router__$1))
);
});
keechma.app_state.start_router_BANG_ = (function keechma$app_state$start_router_BANG_(state){
var router__$1 = new cljs.core.Keyword(null,"router","router",1091916230).cljs$core$IFn$_invoke$arity$1(state);
var G__70799 = router__$1;
var G__70799__$1 = (((G__70799 instanceof cljs.core.Keyword))?G__70799.fqn:null);
switch (G__70799__$1) {
case "hashchange":
return keechma.app_state.start_selected_router_BANG_.call(null,state,keechma.app_state.hashchange_router.constructor$);

break;
case "react-native":
return keechma.app_state.start_selected_router_BANG_.call(null,state,keechma.app_state.react_native_router.constructor$);

break;
case "history":
return keechma.app_state.start_selected_router_BANG_.call(null,state,keechma.app_state.history_router.constructor$);

break;
case "memory":
return keechma.app_state.start_selected_router_BANG_.call(null,state,keechma.app_state.memory_router.constructor$);

break;
default:
return state;

}
});
keechma.app_state.resolve_main_component = (function keechma$app_state$resolve_main_component(state){
var router__$1 = new cljs.core.Keyword(null,"router","router",1091916230).cljs$core$IFn$_invoke$arity$1(state);
var current_route_reaction = reagent.ratom.make_reaction.call(null,((function (router__$1){
return (function (){
return new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(state)));
});})(router__$1))
);
var resolved = cljs.core.partial.call(null,keechma.ui_component.component__GT_renderer,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"commands-chan","commands-chan",1238886607),new cljs.core.Keyword(null,"commands-chan","commands-chan",1238886607).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"reporter","reporter",-805360621),cljs.core.partial.call(null,new cljs.core.Keyword(null,"reporter","reporter",-805360621).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"out","out",-910545517)),new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"url-fn","url-fn",1228268268),cljs.core.partial.call(null,keechma.app_state.core.url,router__$1),new cljs.core.Keyword(null,"router","router",1091916230),router__$1,new cljs.core.Keyword(null,"redirect-fn","redirect-fn",281458973),cljs.core.partial.call(null,keechma.app_state.core.redirect_BANG_,router__$1),new cljs.core.Keyword(null,"current-route-fn","current-route-fn",787729302),((function (router__$1,current_route_reaction){
return (function (){
return current_route_reaction;
});})(router__$1,current_route_reaction))
], null));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"main-component","main-component",-1680547783),resolved.call(null,keechma.ui_component.system.call(null,new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(state),(function (){var or__3949__auto__ = new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})())));
});
keechma.app_state.app_renderer = (function keechma$app_state$app_renderer(state){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,(function (){
var main_component = new cljs.core.Keyword(null,"main-component","main-component",-1680547783).cljs$core$IFn$_invoke$arity$1(state);
var router__$1 = new cljs.core.Keyword(null,"router","router",1091916230).cljs$core$IFn$_invoke$arity$1(state);
var route_wrap_component = keechma.app_state.core.wrap_component.call(null,router__$1);
if(cljs.core.truth_(route_wrap_component)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,route_wrap_component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"router-wrap","router-wrap",867326239)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main_component], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main_component], null);
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.flatten.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(state)))].join('')], null))], null);
});
keechma.app_state.mount_to_element_BANG_ = (function keechma$app_state$mount_to_element_BANG_(state){
var main_component = new cljs.core.Keyword(null,"main-component","main-component",-1680547783).cljs$core$IFn$_invoke$arity$1(state);
var container = new cljs.core.Keyword(null,"html-element","html-element",1188696850).cljs$core$IFn$_invoke$arity$1(state);
reagent.core.render_component.call(null,keechma.app_state.app_renderer.call(null,state),container);

return keechma.app_state.add_stop_fn.call(null,state,((function (main_component,container){
return (function (s){
return reagent.core.unmount_component_at_node.call(null,container);
});})(main_component,container))
);
});
keechma.app_state.start_controllers = (function keechma$app_state$start_controllers(state){
var router__$1 = new cljs.core.Keyword(null,"router","router",1091916230).cljs$core$IFn$_invoke$arity$1(state);
var route_processor = new cljs.core.Keyword(null,"route-processor","route-processor",1968647549).cljs$core$IFn$_invoke$arity$1(state);
var reporter = new cljs.core.Keyword(null,"reporter","reporter",-805360621).cljs$core$IFn$_invoke$arity$1(state);
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(state);
var controllers = keechma.app_state.add_redirect_fn_to_controllers.call(null,keechma.app_state.add_reporter_to_controllers.call(null,keechma.app_state.add_context_to_controllers.call(null,new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(state),context),reporter),router__$1);
var routes_chan = new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796).cljs$core$IFn$_invoke$arity$1(state);
var commands_chan = new cljs.core.Keyword(null,"commands-chan","commands-chan",1238886607).cljs$core$IFn$_invoke$arity$1(state);
var app_db = new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(state);
var manager = keechma.controller_manager.start.call(null,routes_chan,route_processor,commands_chan,app_db,controllers,reporter);
return keechma.app_state.add_stop_fn.call(null,state,((function (router__$1,route_processor,reporter,context,controllers,routes_chan,commands_chan,app_db,manager){
return (function (s){
new cljs.core.Keyword(null,"stop","stop",-2140911342).cljs$core$IFn$_invoke$arity$1(manager).call(null);

return s;
});})(router__$1,route_processor,reporter,context,controllers,routes_chan,commands_chan,app_db,manager))
);
});
keechma.app_state.add_sub_cache = (function keechma$app_state$add_sub_cache(cache,p__70801){
var vec__70802 = p__70801;
var key = cljs.core.nth.call(null,vec__70802,(0),null);
var sub = cljs.core.nth.call(null,vec__70802,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,((function (vec__70802,key,sub){
return (function() { 
var G__70805__delegate = function (app_db_atom,args){
var app_db_atom_hash = cljs.core.hash.call(null,app_db_atom);
var cached = cljs.core.get.call(null,cljs.core.deref.call(null,cache),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app_db_atom_hash,key,args], null));
if(cljs.core.truth_(cached)){
return cached;
} else {
var sub_reaction = cljs.core.apply.call(null,sub,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app_db_atom], null),cljs.core.vec.call(null,args)));
cljs.core.swap_BANG_.call(null,cache,cljs.core.assoc,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app_db_atom_hash,key,args], null),sub_reaction);

return sub_reaction;
}
};
var G__70805 = function (app_db_atom,var_args){
var args = null;
if (arguments.length > 1) {
var G__70806__i = 0, G__70806__a = new Array(arguments.length -  1);
while (G__70806__i < G__70806__a.length) {G__70806__a[G__70806__i] = arguments[G__70806__i + 1]; ++G__70806__i;}
  args = new cljs.core.IndexedSeq(G__70806__a,0,null);
} 
return G__70805__delegate.call(this,app_db_atom,args);};
G__70805.cljs$lang$maxFixedArity = 1;
G__70805.cljs$lang$applyTo = (function (arglist__70807){
var app_db_atom = cljs.core.first(arglist__70807);
var args = cljs.core.rest(arglist__70807);
return G__70805__delegate(app_db_atom,args);
});
G__70805.cljs$core$IFn$_invoke$arity$variadic = G__70805__delegate;
return G__70805;
})()
;})(vec__70802,key,sub))
], null);
});
keechma.app_state.start_subs_cache = (function keechma$app_state$start_subs_cache(state){
var subscriptions = new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(state);
var subs_cache = new cljs.core.Keyword(null,"subscriptions-cache","subscriptions-cache",1047891019).cljs$core$IFn$_invoke$arity$1(state);
var cached_subscriptions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (subscriptions,subs_cache){
return (function (p1__70808_SHARP_){
return keechma.app_state.add_sub_cache.call(null,subs_cache,p1__70808_SHARP_);
});})(subscriptions,subs_cache))
,subscriptions));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),cached_subscriptions);
});
keechma.app_state.restore_app_db = (function keechma$app_state$restore_app_db(old_app,new_app){
var old_app_db = cljs.core.deref.call(null,new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(old_app));
var new_app_db_atom = new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(new_app);
return cljs.core.reset_BANG_.call(null,new_app_db_atom,cljs.core.merge.call(null,cljs.core.deref.call(null,new_app_db_atom),cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,old_app_db,new cljs.core.Keyword(null,"internal","internal",-854870097)),new cljs.core.Keyword(null,"route","route",329891309))));
});
keechma.app_state.get_initial_data = (function keechma$app_state$get_initial_data(config){
var initial_data = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core._EQ_.call(null,keechma.app_state.SerializedAppState,cljs.core.type.call(null,initial_data))){
return new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(initial_data);
} else {
if((initial_data == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return initial_data;

}
}
});
keechma.app_state.run_lifecycle_fns = (function keechma$app_state$run_lifecycle_fns(lifecycle,config){
var fns = cljs.core.get_in.call(null,config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on","on",173873944),lifecycle], null));
return cljs.core.reduce.call(null,((function (fns){
return (function (c,f){
return f.call(null,c);
});})(fns))
,config,fns);
});
/**
 * Starts the application. It receives the application config `map` as the first argument.
 *   It receives `boolean` `should-mount?` as the second element. Default value for `should-mount?`
 *   is `true`.
 * 
 *   You can pass false to the `should-mount?` argument if you want to start the app,
 *   but you want to manually mount the application (for instance another app could manage mounting
 *   and unmounting). In that case you can get the main app component at the `:main-component` of the
 *   map returned from the `start!` function.
 * 
 *   Application config contains all the parts needed to run the application:
 * 
 *   - Route defintions
 *   - Controllers
 *   - UI subscriptions
 *   - UI components 
 *   - HTML element to which the component should be mounted
 *   - Routes chan (through which the route changes will be communicated)
 *   - Commands chan (through which the UI sends the commands to the controllers)
 * 
 *   `start!` function returns the updated config map which can be passed to the `stop!`
 *   function to stop the application.
 * 
 *   Example:
 * 
 *   ```clojure
 *   (def app-config {:controllers {:users (->users/Controller)}
 *                 :subscriptions {:user-list (fn [app-db-atom])}
 *                 :components {:main layout/component
 *                              :users users/component}
 *                 :html-element (.getElementById js/document "app")})
 *   ```
 * 
 *   If any of the params is missing, the defaults will be used.
 * 
 *   When the application is started, the following happens:
 * 
 *   1. Routes are expanded (converted to regexps, etc.)
 *   2. Application binds the listener the history change event
 *   3. Controller manager is started
 *   4. Application is (optionally) mounted into the DOM
 *   
 *   
 */
keechma.app_state.start_BANG_ = (function keechma$app_state$start_BANG_(var_args){
var G__70810 = arguments.length;
switch (G__70810) {
case 1:
return keechma.app_state.start_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.app_state.start_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.app_state.start_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (config){
return keechma.app_state.start_BANG_.call(null,config,true);
});

keechma.app_state.start_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (config,should_mount_QMARK_){
var initial_data = keechma.app_state.get_initial_data.call(null,config);
var config__$1 = keechma.app_state.map__GT_AppState.call(null,keechma.app_state.process_config.call(null,cljs.core.merge.call(null,keechma.app_state.default_config.call(null,initial_data),config)));
var mount = (cljs.core.truth_(should_mount_QMARK_)?keechma.app_state.mount_to_element_BANG_:cljs.core.identity);
var lifecycle_runner = cljs.core.partial.call(null,keechma.app_state.run_lifecycle_fns,new cljs.core.Keyword(null,"start","start",-355208981));
return lifecycle_runner.call(null,mount.call(null,keechma.app_state.resolve_main_component.call(null,keechma.app_state.start_controllers.call(null,keechma.app_state.start_router_BANG_.call(null,keechma.app_state.start_subs_cache.call(null,config__$1))))));
});

keechma.app_state.start_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Stops the application. `stop!` function receives the following as the arguments:
 * 
 *   - `config` - App config map returned from the `start!` function
 *   - `done` - An optional callback function that will be called when the application
 *   is stopped.
 * 
 *   Purpose of the `stop!` function is to completely clean up after the application. When the
 *   application is stopped, the following happens:
 * 
 *   1. History change event listener is unbound
 *   2. Controller manager and any running controllers are stopped
 *   3. Any channels used by the app (`routes-chan`, `commands-chan`,...) are closed
 *   4. Application is unmounted and removed from the DOM
 *   
 */
keechma.app_state.stop_BANG_ = (function keechma$app_state$stop_BANG_(var_args){
var G__70813 = arguments.length;
switch (G__70813) {
case 1:
return keechma.app_state.stop_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.app_state.stop_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.app_state.stop_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (config){
return keechma.app_state.stop_BANG_.call(null,config,cljs.core.identity);
});

keechma.app_state.stop_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (config,done){
var c__58857__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58857__auto__){
return (function (){
var f__58858__auto__ = (function (){var switch__24619__auto__ = ((function (c__58857__auto__){
return (function (state_70862){
var state_val_70863 = (state_70862[(1)]);
if((state_val_70863 === (7))){
var inst_70833 = (state_70862[(7)]);
var inst_70835 = cljs.core.chunked_seq_QMARK_.call(null,inst_70833);
var state_70862__$1 = state_70862;
if(inst_70835){
var statearr_70867_70892 = state_70862__$1;
(statearr_70867_70892[(1)] = (10));

} else {
var statearr_70868_70893 = state_70862__$1;
(statearr_70868_70893[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70863 === (1))){
var inst_70818 = new cljs.core.Keyword(null,"stop-fns","stop-fns",188061237).cljs$core$IFn$_invoke$arity$1(config);
var inst_70819 = cljs.core.seq.call(null,inst_70818);
var inst_70820 = inst_70819;
var inst_70821 = null;
var inst_70822 = (0);
var inst_70823 = (0);
var state_70862__$1 = (function (){var statearr_70869 = state_70862;
(statearr_70869[(8)] = inst_70823);

(statearr_70869[(9)] = inst_70821);

(statearr_70869[(10)] = inst_70820);

(statearr_70869[(11)] = inst_70822);

return statearr_70869;
})();
var statearr_70870_70894 = state_70862__$1;
(statearr_70870_70894[(2)] = null);

(statearr_70870_70894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70863 === (4))){
var inst_70823 = (state_70862[(8)]);
var inst_70821 = (state_70862[(9)]);
var inst_70820 = (state_70862[(10)]);
var inst_70822 = (state_70862[(11)]);
var inst_70828 = cljs.core._nth.call(null,inst_70821,inst_70823);
var inst_70829 = inst_70828.call(null,config);
var inst_70830 = (inst_70823 + (1));
var tmp70864 = inst_70821;
var tmp70865 = inst_70820;
var tmp70866 = inst_70822;
var inst_70820__$1 = tmp70865;
var inst_70821__$1 = tmp70864;
var inst_70822__$1 = tmp70866;
var inst_70823__$1 = inst_70830;
var state_70862__$1 = (function (){var statearr_70871 = state_70862;
(statearr_70871[(8)] = inst_70823__$1);

(statearr_70871[(12)] = inst_70829);

(statearr_70871[(9)] = inst_70821__$1);

(statearr_70871[(10)] = inst_70820__$1);

(statearr_70871[(11)] = inst_70822__$1);

return statearr_70871;
})();
var statearr_70872_70895 = state_70862__$1;
(statearr_70872_70895[(2)] = null);

(statearr_70872_70895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70863 === (6))){
var inst_70852 = (state_70862[(2)]);
var state_70862__$1 = state_70862;
var statearr_70873_70896 = state_70862__$1;
(statearr_70873_70896[(2)] = inst_70852);

(statearr_70873_70896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70863 === (3))){
var inst_70854 = (state_70862[(2)]);
var inst_70855 = keechma.app_state.run_lifecycle_fns.call(null,new cljs.core.Keyword(null,"stop","stop",-2140911342),config);
var inst_70856 = new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796).cljs$core$IFn$_invoke$arity$1(inst_70855);
var inst_70857 = new cljs.core.Keyword(null,"commands-chan","commands-chan",1238886607).cljs$core$IFn$_invoke$arity$1(inst_70855);
var inst_70858 = cljs.core.async.close_BANG_.call(null,inst_70857);
var inst_70859 = cljs.core.async.close_BANG_.call(null,inst_70856);
var inst_70860 = done.call(null,inst_70855);
var state_70862__$1 = (function (){var statearr_70874 = state_70862;
(statearr_70874[(13)] = inst_70858);

(statearr_70874[(14)] = inst_70854);

(statearr_70874[(15)] = inst_70859);

return statearr_70874;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70862__$1,inst_70860);
} else {
if((state_val_70863 === (12))){
var inst_70847 = (state_70862[(2)]);
var state_70862__$1 = state_70862;
var statearr_70875_70897 = state_70862__$1;
(statearr_70875_70897[(2)] = inst_70847);

(statearr_70875_70897[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70863 === (2))){
var inst_70823 = (state_70862[(8)]);
var inst_70822 = (state_70862[(11)]);
var inst_70825 = (inst_70823 < inst_70822);
var inst_70826 = inst_70825;
var state_70862__$1 = state_70862;
if(cljs.core.truth_(inst_70826)){
var statearr_70876_70898 = state_70862__$1;
(statearr_70876_70898[(1)] = (4));

} else {
var statearr_70877_70899 = state_70862__$1;
(statearr_70877_70899[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70863 === (11))){
var inst_70833 = (state_70862[(7)]);
var inst_70842 = cljs.core.first.call(null,inst_70833);
var inst_70843 = inst_70842.call(null,config);
var inst_70844 = cljs.core.next.call(null,inst_70833);
var inst_70820 = inst_70844;
var inst_70821 = null;
var inst_70822 = (0);
var inst_70823 = (0);
var state_70862__$1 = (function (){var statearr_70878 = state_70862;
(statearr_70878[(16)] = inst_70843);

(statearr_70878[(8)] = inst_70823);

(statearr_70878[(9)] = inst_70821);

(statearr_70878[(10)] = inst_70820);

(statearr_70878[(11)] = inst_70822);

return statearr_70878;
})();
var statearr_70879_70900 = state_70862__$1;
(statearr_70879_70900[(2)] = null);

(statearr_70879_70900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70863 === (9))){
var inst_70850 = (state_70862[(2)]);
var state_70862__$1 = state_70862;
var statearr_70880_70901 = state_70862__$1;
(statearr_70880_70901[(2)] = inst_70850);

(statearr_70880_70901[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70863 === (5))){
var inst_70833 = (state_70862[(7)]);
var inst_70820 = (state_70862[(10)]);
var inst_70833__$1 = cljs.core.seq.call(null,inst_70820);
var state_70862__$1 = (function (){var statearr_70881 = state_70862;
(statearr_70881[(7)] = inst_70833__$1);

return statearr_70881;
})();
if(inst_70833__$1){
var statearr_70882_70902 = state_70862__$1;
(statearr_70882_70902[(1)] = (7));

} else {
var statearr_70883_70903 = state_70862__$1;
(statearr_70883_70903[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70863 === (10))){
var inst_70833 = (state_70862[(7)]);
var inst_70837 = cljs.core.chunk_first.call(null,inst_70833);
var inst_70838 = cljs.core.chunk_rest.call(null,inst_70833);
var inst_70839 = cljs.core.count.call(null,inst_70837);
var inst_70820 = inst_70838;
var inst_70821 = inst_70837;
var inst_70822 = inst_70839;
var inst_70823 = (0);
var state_70862__$1 = (function (){var statearr_70884 = state_70862;
(statearr_70884[(8)] = inst_70823);

(statearr_70884[(9)] = inst_70821);

(statearr_70884[(10)] = inst_70820);

(statearr_70884[(11)] = inst_70822);

return statearr_70884;
})();
var statearr_70885_70904 = state_70862__$1;
(statearr_70885_70904[(2)] = null);

(statearr_70885_70904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70863 === (8))){
var state_70862__$1 = state_70862;
var statearr_70886_70905 = state_70862__$1;
(statearr_70886_70905[(2)] = null);

(statearr_70886_70905[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__58857__auto__))
;
return ((function (switch__24619__auto__,c__58857__auto__){
return (function() {
var keechma$app_state$state_machine__24620__auto__ = null;
var keechma$app_state$state_machine__24620__auto____0 = (function (){
var statearr_70887 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70887[(0)] = keechma$app_state$state_machine__24620__auto__);

(statearr_70887[(1)] = (1));

return statearr_70887;
});
var keechma$app_state$state_machine__24620__auto____1 = (function (state_70862){
while(true){
var ret_value__24621__auto__ = (function (){try{while(true){
var result__24622__auto__ = switch__24619__auto__.call(null,state_70862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24622__auto__;
}
break;
}
}catch (e70888){if((e70888 instanceof Object)){
var ex__24623__auto__ = e70888;
var statearr_70889_70906 = state_70862;
(statearr_70889_70906[(5)] = ex__24623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70907 = state_70862;
state_70862 = G__70907;
continue;
} else {
return ret_value__24621__auto__;
}
break;
}
});
keechma$app_state$state_machine__24620__auto__ = function(state_70862){
switch(arguments.length){
case 0:
return keechma$app_state$state_machine__24620__auto____0.call(this);
case 1:
return keechma$app_state$state_machine__24620__auto____1.call(this,state_70862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keechma$app_state$state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$app_state$state_machine__24620__auto____0;
keechma$app_state$state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$app_state$state_machine__24620__auto____1;
return keechma$app_state$state_machine__24620__auto__;
})()
;})(switch__24619__auto__,c__58857__auto__))
})();
var state__58859__auto__ = (function (){var statearr_70890 = f__58858__auto__.call(null);
(statearr_70890[(6)] = c__58857__auto__);

return statearr_70890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58859__auto__);
});})(c__58857__auto__))
);

return c__58857__auto__;
});

keechma.app_state.stop_BANG_.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=app_state.js.map?rel=1563552894684
