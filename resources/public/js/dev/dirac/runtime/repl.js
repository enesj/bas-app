// Compiled by ClojureScript 1.10.339 {}
goog.provide('dirac.runtime.repl');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dirac.runtime.bootstrap');
goog.require('dirac.runtime.deps');
goog.require('dirac.runtime.output');
goog.require('dirac.runtime.prefs');
goog.require('dirac.runtime.util');
goog.require('goog.labs.userAgent.browser');
goog.require('goog.object');
dirac.runtime.repl.available_QMARK_ = (function dirac$runtime$repl$available_QMARK_(){
var or__3949__auto__ = dirac.runtime.util.in_node_context_QMARK_.call(null);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var and__3938__auto__ = goog.labs.userAgent.browser.isChrome();
if(cljs.core.truth_(and__3938__auto__)){
return goog.labs.userAgent.browser.isVersionOrHigher((47));
} else {
return and__3938__auto__;
}
}
});
dirac.runtime.repl._STAR_installed_QMARK__STAR_ = false;
dirac.runtime.repl._STAR_bootstrapped_QMARK__STAR_ = false;
dirac.runtime.repl.console_tunnel = (function dirac$runtime$repl$console_tunnel(var_args){
var args__4534__auto__ = [];
var len__4531__auto___72861 = arguments.length;
var i__4532__auto___72862 = (0);
while(true){
if((i__4532__auto___72862 < len__4531__auto___72861)){
args__4534__auto__.push((arguments[i__4532__auto___72862]));

var G__72863 = (i__4532__auto___72862 + (1));
i__4532__auto___72862 = G__72863;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return dirac.runtime.repl.console_tunnel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

dirac.runtime.repl.console_tunnel.cljs$core$IFn$_invoke$arity$variadic = (function (method,args){
return goog.object.get(console,method).apply(console,cljs.core.to_array.call(null,args));
});

dirac.runtime.repl.console_tunnel.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
dirac.runtime.repl.console_tunnel.cljs$lang$applyTo = (function (seq72859){
var G__72860 = cljs.core.first.call(null,seq72859);
var seq72859__$1 = cljs.core.next.call(null,seq72859);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72860,seq72859__$1);
});

dirac.runtime.repl.dirac_msg_args = (function dirac$runtime$repl$dirac_msg_args(name,args){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~~$DIRAC-MSG$~~",name], null),args);
});
dirac.runtime.repl.dirac_log_args = (function dirac$runtime$repl$dirac_log_args(request_id,kind,args){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~~$DIRAC-LOG$~~",request_id,kind], null),args);
});
dirac.runtime.repl.call_dirac = (function dirac$runtime$repl$call_dirac(var_args){
var args__4534__auto__ = [];
var len__4531__auto___72866 = arguments.length;
var i__4532__auto___72867 = (0);
while(true){
if((i__4532__auto___72867 < len__4531__auto___72866)){
args__4534__auto__.push((arguments[i__4532__auto___72867]));

var G__72868 = (i__4532__auto___72867 + (1));
i__4532__auto___72867 = G__72868;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return dirac.runtime.repl.call_dirac.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

dirac.runtime.repl.call_dirac.cljs$core$IFn$_invoke$arity$variadic = (function (name,args){
return cljs.core.apply.call(null,dirac.runtime.repl.console_tunnel,"log",dirac.runtime.repl.dirac_msg_args.call(null,name,args));
});

dirac.runtime.repl.call_dirac.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
dirac.runtime.repl.call_dirac.cljs$lang$applyTo = (function (seq72864){
var G__72865 = cljs.core.first.call(null,seq72864);
var seq72864__$1 = cljs.core.next.call(null,seq72864);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72865,seq72864__$1);
});

dirac.runtime.repl.log = (function dirac$runtime$repl$log(var_args){
var args__4534__auto__ = [];
var len__4531__auto___72872 = arguments.length;
var i__4532__auto___72873 = (0);
while(true){
if((i__4532__auto___72873 < len__4531__auto___72872)){
args__4534__auto__.push((arguments[i__4532__auto___72873]));

var G__72874 = (i__4532__auto___72873 + (1));
i__4532__auto___72873 = G__72874;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return dirac.runtime.repl.log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

dirac.runtime.repl.log.cljs$core$IFn$_invoke$arity$variadic = (function (request_id,kind,args){
return cljs.core.apply.call(null,dirac.runtime.repl.console_tunnel,"log",dirac.runtime.repl.dirac_log_args.call(null,request_id,kind,args));
});

dirac.runtime.repl.log.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
dirac.runtime.repl.log.cljs$lang$applyTo = (function (seq72869){
var G__72870 = cljs.core.first.call(null,seq72869);
var seq72869__$1 = cljs.core.next.call(null,seq72869);
var G__72871 = cljs.core.first.call(null,seq72869__$1);
var seq72869__$2 = cljs.core.next.call(null,seq72869__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72870,G__72871,seq72869__$2);
});

dirac.runtime.repl.warn = (function dirac$runtime$repl$warn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___72878 = arguments.length;
var i__4532__auto___72879 = (0);
while(true){
if((i__4532__auto___72879 < len__4531__auto___72878)){
args__4534__auto__.push((arguments[i__4532__auto___72879]));

var G__72880 = (i__4532__auto___72879 + (1));
i__4532__auto___72879 = G__72880;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return dirac.runtime.repl.warn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

dirac.runtime.repl.warn.cljs$core$IFn$_invoke$arity$variadic = (function (request_id,kind,args){
return cljs.core.apply.call(null,dirac.runtime.repl.console_tunnel,"warn",dirac.runtime.repl.dirac_log_args.call(null,request_id,kind,args));
});

dirac.runtime.repl.warn.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
dirac.runtime.repl.warn.cljs$lang$applyTo = (function (seq72875){
var G__72876 = cljs.core.first.call(null,seq72875);
var seq72875__$1 = cljs.core.next.call(null,seq72875);
var G__72877 = cljs.core.first.call(null,seq72875__$1);
var seq72875__$2 = cljs.core.next.call(null,seq72875__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72876,G__72877,seq72875__$2);
});

dirac.runtime.repl.error = (function dirac$runtime$repl$error(var_args){
var args__4534__auto__ = [];
var len__4531__auto___72884 = arguments.length;
var i__4532__auto___72885 = (0);
while(true){
if((i__4532__auto___72885 < len__4531__auto___72884)){
args__4534__auto__.push((arguments[i__4532__auto___72885]));

var G__72886 = (i__4532__auto___72885 + (1));
i__4532__auto___72885 = G__72886;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return dirac.runtime.repl.error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

dirac.runtime.repl.error.cljs$core$IFn$_invoke$arity$variadic = (function (request_id,kind,args){
return cljs.core.apply.call(null,dirac.runtime.repl.console_tunnel,"error",dirac.runtime.repl.dirac_log_args.call(null,request_id,kind,args));
});

dirac.runtime.repl.error.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
dirac.runtime.repl.error.cljs$lang$applyTo = (function (seq72881){
var G__72882 = cljs.core.first.call(null,seq72881);
var seq72881__$1 = cljs.core.next.call(null,seq72881);
var G__72883 = cljs.core.first.call(null,seq72881__$1);
var seq72881__$2 = cljs.core.next.call(null,seq72881__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72882,G__72883,seq72881__$2);
});

dirac.runtime.repl.group_STAR_ = (function dirac$runtime$repl$group_STAR_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___72891 = arguments.length;
var i__4532__auto___72892 = (0);
while(true){
if((i__4532__auto___72892 < len__4531__auto___72891)){
args__4534__auto__.push((arguments[i__4532__auto___72892]));

var G__72893 = (i__4532__auto___72892 + (1));
i__4532__auto___72892 = G__72893;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return dirac.runtime.repl.group_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

dirac.runtime.repl.group_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (collapsed_QMARK_,request_id,kind,args){
return cljs.core.apply.call(null,dirac.runtime.repl.console_tunnel,(cljs.core.truth_(collapsed_QMARK_)?"groupCollapsed":"group"),dirac.runtime.repl.dirac_log_args.call(null,request_id,kind,args));
});

dirac.runtime.repl.group_STAR_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
dirac.runtime.repl.group_STAR_.cljs$lang$applyTo = (function (seq72887){
var G__72888 = cljs.core.first.call(null,seq72887);
var seq72887__$1 = cljs.core.next.call(null,seq72887);
var G__72889 = cljs.core.first.call(null,seq72887__$1);
var seq72887__$2 = cljs.core.next.call(null,seq72887__$1);
var G__72890 = cljs.core.first.call(null,seq72887__$2);
var seq72887__$3 = cljs.core.next.call(null,seq72887__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72888,G__72889,G__72890,seq72887__$3);
});

dirac.runtime.repl.group_collapsed = (function dirac$runtime$repl$group_collapsed(var_args){
var args__4534__auto__ = [];
var len__4531__auto___72895 = arguments.length;
var i__4532__auto___72896 = (0);
while(true){
if((i__4532__auto___72896 < len__4531__auto___72895)){
args__4534__auto__.push((arguments[i__4532__auto___72896]));

var G__72897 = (i__4532__auto___72896 + (1));
i__4532__auto___72896 = G__72897;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return dirac.runtime.repl.group_collapsed.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

dirac.runtime.repl.group_collapsed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,dirac.runtime.repl.group_STAR_,true,args);
});

dirac.runtime.repl.group_collapsed.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
dirac.runtime.repl.group_collapsed.cljs$lang$applyTo = (function (seq72894){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72894));
});

dirac.runtime.repl.group = (function dirac$runtime$repl$group(var_args){
var args__4534__auto__ = [];
var len__4531__auto___72899 = arguments.length;
var i__4532__auto___72900 = (0);
while(true){
if((i__4532__auto___72900 < len__4531__auto___72899)){
args__4534__auto__.push((arguments[i__4532__auto___72900]));

var G__72901 = (i__4532__auto___72900 + (1));
i__4532__auto___72900 = G__72901;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return dirac.runtime.repl.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

dirac.runtime.repl.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,dirac.runtime.repl.group_STAR_,false,args);
});

dirac.runtime.repl.group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
dirac.runtime.repl.group.cljs$lang$applyTo = (function (seq72898){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72898));
});

dirac.runtime.repl.group_end = (function dirac$runtime$repl$group_end(){
return console.groupEnd();
});
dirac.runtime.repl.detect_and_strip = (function dirac$runtime$repl$detect_and_strip(prefix,text){
var prefix_len = cljs.core.count.call(null,prefix);
var s = cljs.core.subs.call(null,text,(0),prefix_len);
if(cljs.core._EQ_.call(null,s,prefix)){
return clojure.string.triml.call(null,cljs.core.subs.call(null,text,prefix_len));
} else {
return null;
}
});
dirac.runtime.repl.get_whitespace_prefix_length = (function dirac$runtime$repl$get_whitespace_prefix_length(line){
var temp__5722__auto__ = cljs.core.re_find.call(null,/^([ ]+)/,line);
if((temp__5722__auto__ == null)){
return (0);
} else {
var m = temp__5722__auto__;
return cljs.core.count.call(null,cljs.core.second.call(null,m));
}
});
dirac.runtime.repl.remove_common_whitespace_prefix = (function dirac$runtime$repl$remove_common_whitespace_prefix(text){
var text_with_spaces = clojure.string.replace.call(null,text,"\t","  ");
var lines = clojure.string.split.call(null,text_with_spaces,/\n/);
var common_prefix_length = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,dirac.runtime.repl.get_whitespace_prefix_length,lines));
if((common_prefix_length > (0))){
return clojure.string.join.call(null,"\n",cljs.core.map.call(null,((function (text_with_spaces,lines,common_prefix_length){
return (function (p1__72902_SHARP_){
return cljs.core.subs.call(null,p1__72902_SHARP_,common_prefix_length);
});})(text_with_spaces,lines,common_prefix_length))
,lines));
} else {
return text;
}
});
dirac.runtime.repl.present_java_trace = (function dirac$runtime$repl$present_java_trace(request_id,text){
var lines = clojure.string.split.call(null,text,/\n/);
var first_line = cljs.core.first.call(null,lines);
var rest_content = clojure.string.join.call(null,"\n",cljs.core.rest.call(null,lines));
if(cljs.core.empty_QMARK_.call(null,rest_content)){
return dirac.runtime.repl.error.call(null,request_id,new cljs.core.Keyword(null,"stderr","stderr",-1571650309),first_line);
} else {
dirac.runtime.repl.group_collapsed.call(null,request_id,new cljs.core.Keyword(null,"stderr","stderr",-1571650309),"%c%s",dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"java-trace-header-style","java-trace-header-style",-1425214239)),first_line);

dirac.runtime.repl.log.call(null,request_id,new cljs.core.Keyword(null,"stderr","stderr",-1571650309),dirac.runtime.repl.remove_common_whitespace_prefix.call(null,rest_content));

return dirac.runtime.repl.group_end.call(null);
}
});
dirac.runtime.repl.should_silence_warning_QMARK_ = (function dirac$runtime$repl$should_silence_warning_QMARK_(message){
if(cljs.core.truth_((function (){var and__3938__auto__ = dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"silence-use-of-undeclared-var-warnings","silence-use-of-undeclared-var-warnings",341047901));
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.re_find.call(null,/^Use of undeclared Var/,message);
} else {
return and__3938__auto__;
}
})())){
return true;
} else {
if(cljs.core.truth_((function (){var and__3938__auto__ = dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"silence-no-such-namespace-warnings","silence-no-such-namespace-warnings",2078733745));
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.re_find.call(null,/^No such namespace/,message);
} else {
return and__3938__auto__;
}
})())){
return true;
} else {
return false;

}
}
});
dirac.runtime.repl.should_silence_error_QMARK_ = (function dirac$runtime$repl$should_silence_error_QMARK_(_message){
return false;

});
dirac.runtime.repl.emit_warning_BANG_ = (function dirac$runtime$repl$emit_warning_BANG_(request_id,message){
if(cljs.core.truth_(dirac.runtime.repl.should_silence_warning_QMARK_.call(null,message))){
return null;
} else {
return dirac.runtime.repl.warn.call(null,request_id,"warning",message);
}
});
dirac.runtime.repl.emit_error_BANG_ = (function dirac$runtime$repl$emit_error_BANG_(request_id,message){
if(cljs.core.truth_(dirac.runtime.repl.should_silence_error_QMARK_.call(null,message))){
return null;
} else {
return dirac.runtime.repl.error.call(null,request_id,"error",message);
}
});
dirac.runtime.repl.formatted_log = (function dirac$runtime$repl$formatted_log(request_id,kind,format,text){
if(cljs.core.not.call(null,(function (){var and__3938__auto__ = cljs.core._EQ_.call(null,format,"rich-text");
if(and__3938__auto__){
return dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"rich-text-enabled","rich-text-enabled",1247614521));
} else {
return and__3938__auto__;
}
})())){
return dirac.runtime.repl.log.call(null,request_id,kind,text);
} else {
var html = dirac.runtime.output.build_html.call(null,text);
return dirac.runtime.repl.log.call(null,request_id,kind,"%r",html);
}
});
dirac.runtime.repl.with_safe_printing = (function dirac$runtime$repl$with_safe_printing(f){
var _STAR_print_level_STAR_72903 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR_72904 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_level_STAR_ = dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"safe-print-level","safe-print-level",-1010991983));

cljs.core._STAR_print_length_STAR_ = dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"safe-print-length","safe-print-length",1870129082));

try{return f.call(null);
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_72904;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_72903;
}});
dirac.runtime.repl.safe_pr_str = (function dirac$runtime$repl$safe_pr_str(v){
return dirac.runtime.repl.with_safe_printing.call(null,(function (){
return cljs.core.pr_str.call(null,v);
}));
});
dirac.runtime.repl.api_version = (9);
dirac.runtime.repl.get_api_version = (function dirac$runtime$repl$get_api_version(){
return dirac.runtime.repl.api_version;
});
goog.exportSymbol('dirac.runtime.repl.get_api_version', dirac.runtime.repl.get_api_version);
dirac.runtime.repl.get_effective_config = (function dirac$runtime$repl$get_effective_config(){
return cljs.core.clj__GT_js.call(null,dirac.runtime.prefs.get_prefs.call(null));
});
goog.exportSymbol('dirac.runtime.repl.get_effective_config', dirac.runtime.repl.get_effective_config);
dirac.runtime.repl.get_serialized_config = (function dirac$runtime$repl$get_serialized_config(){
return cljs.core.pr_str.call(null,dirac.runtime.prefs.get_prefs.call(null));
});
goog.exportSymbol('dirac.runtime.repl.get_serialized_config', dirac.runtime.repl.get_serialized_config);
/**
 * Called by our nREPL boilerplate when we capture a REPL evaluation result.
 */
dirac.runtime.repl.present_repl_result = (function dirac$runtime$repl$present_repl_result(request_id,value){
dirac.runtime.repl.log.call(null,request_id,"result",value);

return value;
});
goog.exportSymbol('dirac.runtime.repl.present_repl_result', dirac.runtime.repl.present_repl_result);
/**
 * Called by our nREPL boilerplate when we capture a REPL evaluation exception.
 */
dirac.runtime.repl.present_repl_exception = (function dirac$runtime$repl$present_repl_exception(request_id,exception){
return dirac.runtime.repl.error.call(null,request_id,"exception",exception);
});
goog.exportSymbol('dirac.runtime.repl.present_repl_exception', dirac.runtime.repl.present_repl_exception);
dirac.runtime.repl.present_output = (function dirac$runtime$repl$present_output(request_id,kind,format,text){
var G__72905 = kind;
switch (G__72905) {
case "java-trace":
return dirac.runtime.repl.present_java_trace.call(null,request_id,text);

break;
default:
var temp__5722__auto__ = dirac.runtime.repl.detect_and_strip.call(null,"WARNING:",text);
if((temp__5722__auto__ == null)){
var temp__5722__auto____$1 = dirac.runtime.repl.detect_and_strip.call(null,"ERROR:",text);
if((temp__5722__auto____$1 == null)){
return dirac.runtime.repl.formatted_log.call(null,request_id,kind,format,text);
} else {
var error_msg = temp__5722__auto____$1;
return dirac.runtime.repl.emit_error_BANG_.call(null,request_id,error_msg);
}
} else {
var warning_msg = temp__5722__auto__;
return dirac.runtime.repl.emit_warning_BANG_.call(null,request_id,warning_msg);
}

}
});
goog.exportSymbol('dirac.runtime.repl.present_output', dirac.runtime.repl.present_output);
dirac.runtime.repl.bootstrapped_QMARK_ = (function dirac$runtime$repl$bootstrapped_QMARK_(){
return dirac.runtime.repl._STAR_bootstrapped_QMARK__STAR_;
});
goog.exportSymbol('dirac.runtime.repl.bootstrapped_QMARK_', dirac.runtime.repl.bootstrapped_QMARK_);
/**
 * This printing wrapper is responsible for capturing printed output and presenting it via `present-output`.
 */
dirac.runtime.repl.capture_output = (function dirac$runtime$repl$capture_output(job_id,f){
var _STAR_print_newline_STAR_72907 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_72908 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_err_fn_STAR_72909 = cljs.core._STAR_print_err_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = cljs.core.partial.call(null,dirac.runtime.repl.present_output,job_id,"stdout","plain-text");

cljs.core._STAR_print_err_fn_STAR_ = cljs.core.partial.call(null,dirac.runtime.repl.present_output,job_id,"stderr","plain-text");

try{return f.call(null);
}finally {cljs.core._STAR_print_err_fn_STAR_ = _STAR_print_err_fn_STAR_72909;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_72908;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_72907;
}});
goog.exportSymbol('dirac.runtime.repl.capture_output', dirac.runtime.repl.capture_output);
/**
 * A presentation wrapper which takes care of presenting REPL evaluation to Dirac user.
 *   We short-circuit nREPL feedback mechanism and display REPL results immediately to the user as native data.
 *   This is especially important for cljs-devtools.
 * 
 *   Please note that for traditional nREPL clients we still serialize the result, send it over the wire to nREPL server and
 *   in turn that result is sent back to clients and presented. The Dirac client has just some special logic and ignores this
 *   echoed output because it was already presented directly.
 * 
 *   See https://github.com/binaryage/dirac/blob/master/docs/about-repls.md for conceptual overview.
 */
dirac.runtime.repl.present = (function dirac$runtime$repl$present(job_id,job_fn){
try{return dirac.runtime.repl.present_repl_result.call(null,job_id,dirac.runtime.repl.capture_output.call(null,job_id,job_fn));
}catch (e72910){var e = e72910;
dirac.runtime.repl.present_repl_exception.call(null,job_id,e);

throw e;
}});
goog.exportSymbol('dirac.runtime.repl.present', dirac.runtime.repl.present);
/**
 * Execute a REPL job by optionally wrapping it in a requested wrapper.
 */
dirac.runtime.repl.execute_job = (function dirac$runtime$repl$execute_job(job_id,wrap_mode,job_fn){
var G__72911 = wrap_mode;
switch (G__72911) {
case "short-circuit-presentation":
return dirac.runtime.repl.present.call(null,job_id,job_fn);

break;
default:
return job_fn.call(null);

}
});
goog.exportSymbol('dirac.runtime.repl.execute_job', dirac.runtime.repl.execute_job);
/**
 * Evaluates a REPL job in the captured mode. Compare it to eval-special.
 *   Captured mode keeps track of *1 *2 *3 and *e REPL specials.
 */
dirac.runtime.repl.eval_captured = (function dirac$runtime$repl$eval_captured(job_id,wrap_mode,job_fn){
try{var result = dirac.runtime.repl.execute_job.call(null,job_id,wrap_mode,job_fn);
cljs.core._STAR_3 = cljs.core._STAR_2;

cljs.core._STAR_2 = cljs.core._STAR_1;

cljs.core._STAR_1 = result;

return dirac.runtime.repl.safe_pr_str.call(null,result);
}catch (e72913){var e = e72913;
cljs.core._STAR_e = e;

throw e;
}});
goog.exportSymbol('dirac.runtime.repl.eval_captured', dirac.runtime.repl.eval_captured);
/**
 * Evaluates a REPL job in the special mode. Compare it to eval-captured.
 */
dirac.runtime.repl.eval_special = (function dirac$runtime$repl$eval_special(job_id,wrap_mode,job_fn){
var result = dirac.runtime.repl.execute_job.call(null,job_id,wrap_mode,job_fn);
return dirac.runtime.repl.safe_pr_str.call(null,result);
});
goog.exportSymbol('dirac.runtime.repl.eval_special', dirac.runtime.repl.eval_special);
/**
 * This is a postprocessing function wrapping Weasel's Javascript evaluation attempt.
 *   This structure is needed for building response to nREPL server (see dirac.implant.weasel in Dirac project)
 *   In our case weasel is running in the context of Dirac DevTools and could potentially have different version of cljs runtime.
 *   To be correct we have to do this post-processing in app's context to use the same cljs runtime as app evaluating the code.
 * 
 *   Also we have to be careful to not enter into infinite printing with cyclic data structures.
 *   We limit printing level and length via with-safe-printing.
 */
dirac.runtime.repl.postprocess_successful_eval = (function dirac$runtime$repl$postprocess_successful_eval(value){
return ({"status": "success", "value": dirac.runtime.repl.with_safe_printing.call(null,(function (){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');
}))});
});
goog.exportSymbol('dirac.runtime.repl.postprocess_successful_eval', dirac.runtime.repl.postprocess_successful_eval);
dirac.runtime.repl.postprocess_unsuccessful_eval = (function dirac$runtime$repl$postprocess_unsuccessful_eval(ex){

return ({"status": "exception", "value": dirac.runtime.repl.safe_pr_str.call(null,ex), "stacktrace": (cljs.core.truth_(ex.hasOwnProperty("stack"))?(ex["stack"]):"No stacktrace available.")});
});
goog.exportSymbol('dirac.runtime.repl.postprocess_unsuccessful_eval', dirac.runtime.repl.postprocess_unsuccessful_eval);
/**
 * This is the main entrypoint for evaluation of a snippet of code in the context of REPL.
 * Please note that this code runs in the context of the app and uses ClojureScript runtime built together with the app.
 * 
 *  job-id    - a numeric id of the REPL job
 *  eval-mode - 'captured' or 'special'
 *  wrap-mode - 'short-circuit-presentation' or nil
 *  job-fn    - code to be executed in the form of a function
 * 
 *   Note that normally we want to support capturing REPL specials *1 *2 *3 and *e. Only when we are executing their retrieval
 *   we don't want to capture them and we want to use the 'special' path.
 * 
 *   Also normally we want to wrap our code in a supporting wrapper which will present results directly via cljs-devtools,
 *   or present exceptions in a friendly way. Also we want to capture any printing which might occur during evaluation.
 *   In some special cases we might not want to do that.
 * 
 *   Finally we want to postprocess evaluation result and prepare Weasel's nREPL response.
 * 
 *   See https://github.com/binaryage/dirac/blob/master/docs/about-repls.md for conceptual overview.
 */
dirac.runtime.repl.eval = (function dirac$runtime$repl$eval(job_id,eval_mode,wrap_mode,job_fn){
var eval_fn = (function (){var G__72914 = eval_mode;
switch (G__72914) {
case "special":
return dirac.runtime.repl.eval_special;

break;
case "captured":
return dirac.runtime.repl.eval_captured;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__72914)].join('')));

}
})();
try{return dirac.runtime.repl.postprocess_successful_eval.call(null,eval_fn.call(null,job_id,wrap_mode,job_fn));
}catch (e72915){var e = e72915;
return dirac.runtime.repl.postprocess_unsuccessful_eval.call(null,e);
}});
goog.exportSymbol('dirac.runtime.repl.eval', dirac.runtime.repl.eval);
/**
 * Automates Dirac REPL from the app. This way you can request evaluation of ClojureScript code as it would be entered
 *   directly by the user.
 */
dirac.runtime.repl.request_eval_cljs = (function dirac$runtime$repl$request_eval_cljs(code){
if(typeof code === 'string'){
} else {
throw (new Error(["Assert failed: ","Code passed for evaluation must be a string","\n","(string? code)"].join('')));
}

return dirac.runtime.repl.call_dirac.call(null,"eval-cljs",code);
});
goog.exportSymbol('dirac.runtime.repl.request_eval_cljs', dirac.runtime.repl.request_eval_cljs);
/**
 * Automates Dirac REPL from the app. This way you can request evaluation of Javascript code as it would be entered
 *   directly by the user.
 */
dirac.runtime.repl.request_eval_js = (function dirac$runtime$repl$request_eval_js(code){
if(typeof code === 'string'){
} else {
throw (new Error(["Assert failed: ","Code passed for evaluation must be a string","\n","(string? code)"].join('')));
}

return dirac.runtime.repl.call_dirac.call(null,"eval-js",code);
});
goog.exportSymbol('dirac.runtime.repl.request_eval_js', dirac.runtime.repl.request_eval_js);
dirac.runtime.repl.installed_QMARK_ = (function dirac$runtime$repl$installed_QMARK_(){
return dirac.runtime.repl._STAR_installed_QMARK__STAR_;
});
goog.exportSymbol('dirac.runtime.repl.installed_QMARK_', dirac.runtime.repl.installed_QMARK_);
dirac.runtime.repl.install_BANG_ = (function dirac$runtime$repl$install_BANG_(){
if(cljs.core.not.call(null,dirac.runtime.repl.installed_QMARK_.call(null))){
dirac.runtime.bootstrap.bootstrap_BANG_.call(null,(function (){
return dirac.runtime.repl._STAR_bootstrapped_QMARK__STAR_ = true;
}));

dirac.runtime.repl._STAR_installed_QMARK__STAR_ = true;

return true;
} else {
return null;
}
});
goog.exportSymbol('dirac.runtime.repl.install_BANG_', dirac.runtime.repl.install_BANG_);
dirac.runtime.repl.uninstall_BANG_ = (function dirac$runtime$repl$uninstall_BANG_(){
if(cljs.core.truth_(dirac.runtime.repl.installed_QMARK_.call(null))){
return dirac.runtime.repl._STAR_installed_QMARK__STAR_ = false;
} else {
return null;
}
});
goog.exportSymbol('dirac.runtime.repl.uninstall_BANG_', dirac.runtime.repl.uninstall_BANG_);

//# sourceMappingURL=repl.js.map?rel=1563552900687
