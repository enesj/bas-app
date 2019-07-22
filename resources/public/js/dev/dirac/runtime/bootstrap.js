// Compiled by ClojureScript 1.10.339 {}
goog.provide('dirac.runtime.bootstrap');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
dirac.runtime.bootstrap._STAR_bootstrapped_QMARK__STAR_ = false;
dirac.runtime.bootstrap._STAR_bootstrap_timeout_STAR_ = (100);
dirac.runtime.bootstrap._STAR_bootstrap_listeners_STAR_ = [];
dirac.runtime.bootstrap.notify_listeners_BANG_ = (function dirac$runtime$bootstrap$notify_listeners_BANG_(listeners){
var seq__72713 = cljs.core.seq.call(null,listeners);
var chunk__72714 = null;
var count__72715 = (0);
var i__72716 = (0);
while(true){
if((i__72716 < count__72715)){
var listener = cljs.core._nth.call(null,chunk__72714,i__72716);
listener.call(null);


var G__72717 = seq__72713;
var G__72718 = chunk__72714;
var G__72719 = count__72715;
var G__72720 = (i__72716 + (1));
seq__72713 = G__72717;
chunk__72714 = G__72718;
count__72715 = G__72719;
i__72716 = G__72720;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__72713);
if(temp__5720__auto__){
var seq__72713__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__72713__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__72713__$1);
var G__72721 = cljs.core.chunk_rest.call(null,seq__72713__$1);
var G__72722 = c__4351__auto__;
var G__72723 = cljs.core.count.call(null,c__4351__auto__);
var G__72724 = (0);
seq__72713 = G__72721;
chunk__72714 = G__72722;
count__72715 = G__72723;
i__72716 = G__72724;
continue;
} else {
var listener = cljs.core.first.call(null,seq__72713__$1);
listener.call(null);


var G__72725 = cljs.core.next.call(null,seq__72713__$1);
var G__72726 = null;
var G__72727 = (0);
var G__72728 = (0);
seq__72713 = G__72725;
chunk__72714 = G__72726;
count__72715 = G__72727;
i__72716 = G__72728;
continue;
}
} else {
return null;
}
}
break;
}
});
dirac.runtime.bootstrap.bootstrap_if_needed_BANG_ = (function dirac$runtime$bootstrap$bootstrap_if_needed_BANG_(){
if(dirac.runtime.bootstrap._STAR_bootstrapped_QMARK__STAR_){
} else {
clojure.browser.repl.bootstrap.call(null);

dirac.runtime.bootstrap._STAR_bootstrapped_QMARK__STAR_ = true;
}

dirac.runtime.bootstrap.notify_listeners_BANG_.call(null,dirac.runtime.bootstrap._STAR_bootstrap_listeners_STAR_);

return dirac.runtime.bootstrap._STAR_bootstrap_listeners_STAR_ = [];
});
dirac.runtime.bootstrap.call_after_document_finished_loading = (function dirac$runtime$bootstrap$call_after_document_finished_loading(f,timeout){
if(cljs.core._EQ_.call(null,document.readyState,"loading")){
return setTimeout((function (){
return dirac.runtime.bootstrap.call_after_document_finished_loading.call(null,f,dirac.runtime.bootstrap._STAR_bootstrap_timeout_STAR_);
}),timeout);
} else {
return f.call(null);
}
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 * 
 *   Note that this function might do its job asynchronously if at the time of calling the document is still loading.
 *   You may provide a callback which will be called immediately after bootstrapping happens.
 *   It has no effect if called after bootstrapping has been already done. Only the callback is called immediately.
 */
dirac.runtime.bootstrap.bootstrap_BANG_ = (function dirac$runtime$bootstrap$bootstrap_BANG_(var_args){
var G__72730 = arguments.length;
switch (G__72730) {
case 0:
return dirac.runtime.bootstrap.bootstrap_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dirac.runtime.bootstrap.bootstrap_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dirac.runtime.bootstrap.bootstrap_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return dirac.runtime.bootstrap.bootstrap_BANG_.call(null,null);
});

dirac.runtime.bootstrap.bootstrap_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (callback){
if(!((callback == null))){
if(cljs.core.fn_QMARK_.call(null,callback)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["The callback parameter to clojure.browser.repl/bootstrap expected to be a function.","Got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,callback))," instead."].join('')),"\n","(fn? callback)"].join('')));
}

dirac.runtime.bootstrap._STAR_bootstrap_listeners_STAR_.push(callback);
} else {
}

if(!((typeof document !== 'undefined'))){
return dirac.runtime.bootstrap.bootstrap_if_needed_BANG_.call(null);
} else {
return dirac.runtime.bootstrap.call_after_document_finished_loading.call(null,dirac.runtime.bootstrap.bootstrap_if_needed_BANG_,(0));
}
});

dirac.runtime.bootstrap.bootstrap_BANG_.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=bootstrap.js.map?rel=1563552900109
