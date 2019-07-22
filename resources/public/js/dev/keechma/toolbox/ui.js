// Compiled by ClojureScript 1.10.339 {}
goog.provide('keechma.toolbox.ui');
goog.require('cljs.core');
goog.require('keechma.ui_component');
/**
 * Read and defer a component subscription
 */
keechma.toolbox.ui.sub_GT_ = (function keechma$toolbox$ui$sub_GT_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___53782 = arguments.length;
var i__4532__auto___53783 = (0);
while(true){
if((i__4532__auto___53783 < len__4531__auto___53782)){
args__4534__auto__.push((arguments[i__4532__auto___53783]));

var G__53784 = (i__4532__auto___53783 + (1));
i__4532__auto___53783 = G__53784;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return keechma.toolbox.ui.sub_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

keechma.toolbox.ui.sub_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,subscription,args){
return cljs.core.deref.call(null,keechma.ui_component.subscription.call(null,ctx,subscription,args));
});

keechma.toolbox.ui.sub_GT_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
keechma.toolbox.ui.sub_GT_.cljs$lang$applyTo = (function (seq53774){
var G__53775 = cljs.core.first.call(null,seq53774);
var seq53774__$1 = cljs.core.next.call(null,seq53774);
var G__53776 = cljs.core.first.call(null,seq53774__$1);
var seq53774__$2 = cljs.core.next.call(null,seq53774__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53775,G__53776,seq53774__$2);
});

/**
 * Send a command to the controller
 */
keechma.toolbox.ui._LT_cmd = (function keechma$toolbox$ui$_LT_cmd(var_args){
var args__4534__auto__ = [];
var len__4531__auto___53805 = arguments.length;
var i__4532__auto___53806 = (0);
while(true){
if((i__4532__auto___53806 < len__4531__auto___53805)){
args__4534__auto__.push((arguments[i__4532__auto___53806]));

var G__53808 = (i__4532__auto___53806 + (1));
i__4532__auto___53806 = G__53808;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return keechma.toolbox.ui._LT_cmd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

keechma.toolbox.ui._LT_cmd.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,command,args){
return cljs.core.apply.call(null,keechma.ui_component.send_command,ctx,command,args);
});

keechma.toolbox.ui._LT_cmd.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
keechma.toolbox.ui._LT_cmd.cljs$lang$applyTo = (function (seq53791){
var G__53792 = cljs.core.first.call(null,seq53791);
var seq53791__$1 = cljs.core.next.call(null,seq53791);
var G__53793 = cljs.core.first.call(null,seq53791__$1);
var seq53791__$2 = cljs.core.next.call(null,seq53791__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53792,G__53793,seq53791__$2);
});

/**
 * Read current route data. Derefs the route subscription
 */
keechma.toolbox.ui.route_GT_ = (function keechma$toolbox$ui$route_GT_(ctx){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,keechma.ui_component.current_route.call(null,ctx)));
});

//# sourceMappingURL=ui.js.map?rel=1563552879449
