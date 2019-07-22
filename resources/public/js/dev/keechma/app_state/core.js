// Compiled by ClojureScript 1.10.339 {}
goog.provide('keechma.app_state.core');
goog.require('cljs.core');

/**
 * @interface
 */
keechma.app_state.core.IRouter = function(){};

keechma.app_state.core.redirect_BANG_ = (function keechma$app_state$core$redirect_BANG_(var_args){
var G__40622 = arguments.length;
switch (G__40622) {
case 2:
return keechma.app_state.core.redirect_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return keechma.app_state.core.redirect_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.app_state.core.redirect_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,params){
if(((!((this$ == null))) && (!((this$.keechma$app_state$core$IRouter$redirect_BANG_$arity$2 == null))))){
return this$.keechma$app_state$core$IRouter$redirect_BANG_$arity$2(this$,params);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (keechma.app_state.core.redirect_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,params);
} else {
var m__4244__auto____$1 = (keechma.app_state.core.redirect_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,params);
} else {
throw cljs.core.missing_protocol.call(null,"IRouter.redirect!",this$);
}
}
}
});

keechma.app_state.core.redirect_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,params,action){
if(((!((this$ == null))) && (!((this$.keechma$app_state$core$IRouter$redirect_BANG_$arity$3 == null))))){
return this$.keechma$app_state$core$IRouter$redirect_BANG_$arity$3(this$,params,action);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (keechma.app_state.core.redirect_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,params,action);
} else {
var m__4244__auto____$1 = (keechma.app_state.core.redirect_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,params,action);
} else {
throw cljs.core.missing_protocol.call(null,"IRouter.redirect!",this$);
}
}
}
});

keechma.app_state.core.redirect_BANG_.cljs$lang$maxFixedArity = 3;


keechma.app_state.core.start_BANG_ = (function keechma$app_state$core$start_BANG_(this$){
if(((!((this$ == null))) && (!((this$.keechma$app_state$core$IRouter$start_BANG_$arity$1 == null))))){
return this$.keechma$app_state$core$IRouter$start_BANG_$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (keechma.app_state.core.start_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (keechma.app_state.core.start_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRouter.start!",this$);
}
}
}
});

keechma.app_state.core.stop_BANG_ = (function keechma$app_state$core$stop_BANG_(this$){
if(((!((this$ == null))) && (!((this$.keechma$app_state$core$IRouter$stop_BANG_$arity$1 == null))))){
return this$.keechma$app_state$core$IRouter$stop_BANG_$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (keechma.app_state.core.stop_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (keechma.app_state.core.stop_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRouter.stop!",this$);
}
}
}
});

keechma.app_state.core.url = (function keechma$app_state$core$url(this$,params){
if(((!((this$ == null))) && (!((this$.keechma$app_state$core$IRouter$url$arity$2 == null))))){
return this$.keechma$app_state$core$IRouter$url$arity$2(this$,params);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (keechma.app_state.core.url[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,params);
} else {
var m__4244__auto____$1 = (keechma.app_state.core.url["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,params);
} else {
throw cljs.core.missing_protocol.call(null,"IRouter.url",this$);
}
}
}
});

keechma.app_state.core.wrap_component = (function keechma$app_state$core$wrap_component(this$){
if(((!((this$ == null))) && (!((this$.keechma$app_state$core$IRouter$wrap_component$arity$1 == null))))){
return this$.keechma$app_state$core$IRouter$wrap_component$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (keechma.app_state.core.wrap_component[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (keechma.app_state.core.wrap_component["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRouter.wrap-component",this$);
}
}
}
});

keechma.app_state.core.linkable_QMARK_ = (function keechma$app_state$core$linkable_QMARK_(this$){
if(((!((this$ == null))) && (!((this$.keechma$app_state$core$IRouter$linkable_QMARK_$arity$1 == null))))){
return this$.keechma$app_state$core$IRouter$linkable_QMARK_$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (keechma.app_state.core.linkable_QMARK_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (keechma.app_state.core.linkable_QMARK_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRouter.linkable?",this$);
}
}
}
});

keechma.app_state.core.reg_on_fn = (function keechma$app_state$core$reg_on_fn(type,config,on_fn){
var on_fns = (function (){var or__3949__auto__ = cljs.core.get_in.call(null,config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on","on",173873944),type], null));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
return cljs.core.assoc_in.call(null,config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on","on",173873944),type], null),cljs.core.conj.call(null,on_fns,on_fn));
});
keechma.app_state.core.reg_on_start = cljs.core.partial.call(null,keechma.app_state.core.reg_on_fn,new cljs.core.Keyword(null,"start","start",-355208981));
keechma.app_state.core.reg_on_stop = cljs.core.partial.call(null,keechma.app_state.core.reg_on_fn,new cljs.core.Keyword(null,"stop","stop",-2140911342));

//# sourceMappingURL=core.js.map?rel=1563552867743
