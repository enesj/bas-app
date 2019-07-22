// Compiled by ClojureScript 1.10.339 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__25663__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__25663 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25664__i = 0, G__25664__a = new Array(arguments.length -  0);
while (G__25664__i < G__25664__a.length) {G__25664__a[G__25664__i] = arguments[G__25664__i + 0]; ++G__25664__i;}
  args = new cljs.core.IndexedSeq(G__25664__a,0,null);
} 
return G__25663__delegate.call(this,args);};
G__25663.cljs$lang$maxFixedArity = 0;
G__25663.cljs$lang$applyTo = (function (arglist__25665){
var args = cljs.core.seq(arglist__25665);
return G__25663__delegate(args);
});
G__25663.cljs$core$IFn$_invoke$arity$variadic = G__25663__delegate;
return G__25663;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__25666__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__25666 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25667__i = 0, G__25667__a = new Array(arguments.length -  0);
while (G__25667__i < G__25667__a.length) {G__25667__a[G__25667__i] = arguments[G__25667__i + 0]; ++G__25667__i;}
  args = new cljs.core.IndexedSeq(G__25667__a,0,null);
} 
return G__25666__delegate.call(this,args);};
G__25666.cljs$lang$maxFixedArity = 0;
G__25666.cljs$lang$applyTo = (function (arglist__25668){
var args = cljs.core.seq(arglist__25668);
return G__25666__delegate(args);
});
G__25666.cljs$core$IFn$_invoke$arity$variadic = G__25666__delegate;
return G__25666;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1563552852476
