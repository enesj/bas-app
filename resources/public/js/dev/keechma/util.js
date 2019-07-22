// Compiled by ClojureScript 1.10.339 {}
goog.provide('keechma.util');
goog.require('cljs.core');
goog.require('cljs.core.async');
keechma.util.update_values = (function keechma$util$update_values(var_args){
var args__4534__auto__ = [];
var len__4531__auto___36049 = arguments.length;
var i__4532__auto___36051 = (0);
while(true){
if((i__4532__auto___36051 < len__4531__auto___36049)){
args__4534__auto__.push((arguments[i__4532__auto___36051]));

var G__36053 = (i__4532__auto___36051 + (1));
i__4532__auto___36051 = G__36053;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return keechma.util.update_values.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

keechma.util.update_values.cljs$core$IFn$_invoke$arity$variadic = (function (m,f,args){
return cljs.core.reduce.call(null,(function (r,p__36042){
var vec__36043 = p__36042;
var k = cljs.core.nth.call(null,vec__36043,(0),null);
var v = cljs.core.nth.call(null,vec__36043,(1),null);
return cljs.core.assoc.call(null,r,k,cljs.core.apply.call(null,f,v,args));
}),cljs.core.PersistentArrayMap.EMPTY,m);
});

keechma.util.update_values.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
keechma.util.update_values.cljs$lang$applyTo = (function (seq36037){
var G__36038 = cljs.core.first.call(null,seq36037);
var seq36037__$1 = cljs.core.next.call(null,seq36037);
var G__36039 = cljs.core.first.call(null,seq36037__$1);
var seq36037__$2 = cljs.core.next.call(null,seq36037__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36038,G__36039,seq36037__$2);
});

/**
 * true if seq contains elm
 */
keechma.util.in_QMARK_ = (function keechma$util$in_QMARK_(seq,elm){
return cljs.core.some.call(null,(function (p1__36059_SHARP_){
return cljs.core._EQ_.call(null,elm,p1__36059_SHARP_);
}),seq);
});
keechma.util.without = (function keechma$util$without(list,val){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,(function (ls_val){
return cljs.core._EQ_.call(null,val,ls_val);
}),list));
});
/**
 * Return a channel which will close on the nth next animation frame.
 */
keechma.util.animation_frame = (function keechma$util$animation_frame(var_args){
var G__36066 = arguments.length;
switch (G__36066) {
case 0:
return keechma.util.animation_frame.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return keechma.util.animation_frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.util.animation_frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.util.animation_frame.cljs$core$IFn$_invoke$arity$0 = (function (){
return keechma.util.animation_frame.call(null,(1));
});

keechma.util.animation_frame.cljs$core$IFn$_invoke$arity$1 = (function (n){
return keechma.util.animation_frame.call(null,n,cljs.core.async.chan.call(null,(1)));
});

keechma.util.animation_frame.cljs$core$IFn$_invoke$arity$2 = (function (n,out){
window.requestAnimationFrame((function (timestamp){
if(cljs.core._EQ_.call(null,n,(1))){
cljs.core.async.put_BANG_.call(null,out,timestamp);

return cljs.core.async.close_BANG_.call(null,out);
} else {
return keechma.util.animation_frame.call(null,(n - (1)),out);
}
}));

return out;
});

keechma.util.animation_frame.cljs$lang$maxFixedArity = 2;

/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 */
keechma.util.dissoc_in = (function keechma$util$dissoc_in(m,p__36079){
var vec__36080 = p__36079;
var seq__36081 = cljs.core.seq.call(null,vec__36080);
var first__36082 = cljs.core.first.call(null,seq__36081);
var seq__36081__$1 = cljs.core.next.call(null,seq__36081);
var k = first__36082;
var ks = seq__36081__$1;
var keys = vec__36080;
if(ks){
var temp__5718__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__5718__auto__)){
var nextmap = temp__5718__auto__;
var newmap = keechma.util.dissoc_in.call(null,nextmap,ks);
if(cljs.core.seq.call(null,newmap)){
return cljs.core.assoc.call(null,m,k,newmap);
} else {
return cljs.core.dissoc.call(null,m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.call(null,m,k);
}
});
keechma.util.index_of = (function keechma$util$index_of(coll,item){
var c = coll;
var idx = (0);
while(true){
var temp__5718__auto__ = cljs.core.first.call(null,c);
if(cljs.core.truth_(temp__5718__auto__)){
var first_item = temp__5718__auto__;
if(cljs.core._EQ_.call(null,first_item,item)){
return idx;
} else {
var G__36097 = cljs.core.rest.call(null,c);
var G__36098 = (idx + (1));
c = G__36097;
idx = G__36098;
continue;
}
} else {
return null;
}
break;
}
});

//# sourceMappingURL=util.js.map?rel=1563552863273
