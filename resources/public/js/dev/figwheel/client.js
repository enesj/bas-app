// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.18";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e74111){if((e74111 instanceof Error)){
var e = e74111;
return "Error: Unable to stringify";
} else {
throw e74111;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__74114 = arguments.length;
switch (G__74114) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__74112_SHARP_){
if(typeof p1__74112_SHARP_ === 'string'){
return p1__74112_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__74112_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___74117 = arguments.length;
var i__4532__auto___74118 = (0);
while(true){
if((i__4532__auto___74118 < len__4531__auto___74117)){
args__4534__auto__.push((arguments[i__4532__auto___74118]));

var G__74119 = (i__4532__auto___74118 + (1));
i__4532__auto___74118 = G__74119;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq74116){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq74116));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___74121 = arguments.length;
var i__4532__auto___74122 = (0);
while(true){
if((i__4532__auto___74122 < len__4531__auto___74121)){
args__4534__auto__.push((arguments[i__4532__auto___74122]));

var G__74123 = (i__4532__auto___74122 + (1));
i__4532__auto___74122 = G__74123;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq74120){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq74120));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__74124){
var map__74125 = p__74124;
var map__74125__$1 = ((((!((map__74125 == null)))?(((((map__74125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74125):map__74125);
var message = cljs.core.get.call(null,map__74125__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__74125__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3949__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3938__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3938__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3938__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__58857__auto___74204 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58857__auto___74204,ch){
return (function (){
var f__58858__auto__ = (function (){var switch__24619__auto__ = ((function (c__58857__auto___74204,ch){
return (function (state_74176){
var state_val_74177 = (state_74176[(1)]);
if((state_val_74177 === (7))){
var inst_74172 = (state_74176[(2)]);
var state_74176__$1 = state_74176;
var statearr_74178_74205 = state_74176__$1;
(statearr_74178_74205[(2)] = inst_74172);

(statearr_74178_74205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74177 === (1))){
var state_74176__$1 = state_74176;
var statearr_74179_74206 = state_74176__$1;
(statearr_74179_74206[(2)] = null);

(statearr_74179_74206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74177 === (4))){
var inst_74129 = (state_74176[(7)]);
var inst_74129__$1 = (state_74176[(2)]);
var state_74176__$1 = (function (){var statearr_74180 = state_74176;
(statearr_74180[(7)] = inst_74129__$1);

return statearr_74180;
})();
if(cljs.core.truth_(inst_74129__$1)){
var statearr_74181_74207 = state_74176__$1;
(statearr_74181_74207[(1)] = (5));

} else {
var statearr_74182_74208 = state_74176__$1;
(statearr_74182_74208[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74177 === (15))){
var inst_74136 = (state_74176[(8)]);
var inst_74151 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_74136);
var inst_74152 = cljs.core.first.call(null,inst_74151);
var inst_74153 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_74152);
var inst_74154 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_74153)].join('');
var inst_74155 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_74154);
var state_74176__$1 = state_74176;
var statearr_74183_74209 = state_74176__$1;
(statearr_74183_74209[(2)] = inst_74155);

(statearr_74183_74209[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74177 === (13))){
var inst_74160 = (state_74176[(2)]);
var state_74176__$1 = state_74176;
var statearr_74184_74210 = state_74176__$1;
(statearr_74184_74210[(2)] = inst_74160);

(statearr_74184_74210[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74177 === (6))){
var state_74176__$1 = state_74176;
var statearr_74185_74211 = state_74176__$1;
(statearr_74185_74211[(2)] = null);

(statearr_74185_74211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74177 === (17))){
var inst_74158 = (state_74176[(2)]);
var state_74176__$1 = state_74176;
var statearr_74186_74212 = state_74176__$1;
(statearr_74186_74212[(2)] = inst_74158);

(statearr_74186_74212[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74177 === (3))){
var inst_74174 = (state_74176[(2)]);
var state_74176__$1 = state_74176;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74176__$1,inst_74174);
} else {
if((state_val_74177 === (12))){
var inst_74135 = (state_74176[(9)]);
var inst_74149 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_74135,opts);
var state_74176__$1 = state_74176;
if(cljs.core.truth_(inst_74149)){
var statearr_74187_74213 = state_74176__$1;
(statearr_74187_74213[(1)] = (15));

} else {
var statearr_74188_74214 = state_74176__$1;
(statearr_74188_74214[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74177 === (2))){
var state_74176__$1 = state_74176;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74176__$1,(4),ch);
} else {
if((state_val_74177 === (11))){
var inst_74136 = (state_74176[(8)]);
var inst_74141 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_74142 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_74136);
var inst_74143 = cljs.core.async.timeout.call(null,(1000));
var inst_74144 = [inst_74142,inst_74143];
var inst_74145 = (new cljs.core.PersistentVector(null,2,(5),inst_74141,inst_74144,null));
var state_74176__$1 = state_74176;
return cljs.core.async.ioc_alts_BANG_.call(null,state_74176__$1,(14),inst_74145);
} else {
if((state_val_74177 === (9))){
var inst_74136 = (state_74176[(8)]);
var inst_74162 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_74163 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_74136);
var inst_74164 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_74163);
var inst_74165 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_74164)].join('');
var inst_74166 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_74165);
var state_74176__$1 = (function (){var statearr_74189 = state_74176;
(statearr_74189[(10)] = inst_74162);

return statearr_74189;
})();
var statearr_74190_74215 = state_74176__$1;
(statearr_74190_74215[(2)] = inst_74166);

(statearr_74190_74215[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74177 === (5))){
var inst_74129 = (state_74176[(7)]);
var inst_74131 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_74132 = (new cljs.core.PersistentArrayMap(null,2,inst_74131,null));
var inst_74133 = (new cljs.core.PersistentHashSet(null,inst_74132,null));
var inst_74134 = figwheel.client.focus_msgs.call(null,inst_74133,inst_74129);
var inst_74135 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_74134);
var inst_74136 = cljs.core.first.call(null,inst_74134);
var inst_74137 = figwheel.client.autoload_QMARK_.call(null);
var state_74176__$1 = (function (){var statearr_74191 = state_74176;
(statearr_74191[(8)] = inst_74136);

(statearr_74191[(9)] = inst_74135);

return statearr_74191;
})();
if(cljs.core.truth_(inst_74137)){
var statearr_74192_74216 = state_74176__$1;
(statearr_74192_74216[(1)] = (8));

} else {
var statearr_74193_74217 = state_74176__$1;
(statearr_74193_74217[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74177 === (14))){
var inst_74147 = (state_74176[(2)]);
var state_74176__$1 = state_74176;
var statearr_74194_74218 = state_74176__$1;
(statearr_74194_74218[(2)] = inst_74147);

(statearr_74194_74218[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74177 === (16))){
var state_74176__$1 = state_74176;
var statearr_74195_74219 = state_74176__$1;
(statearr_74195_74219[(2)] = null);

(statearr_74195_74219[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74177 === (10))){
var inst_74168 = (state_74176[(2)]);
var state_74176__$1 = (function (){var statearr_74196 = state_74176;
(statearr_74196[(11)] = inst_74168);

return statearr_74196;
})();
var statearr_74197_74220 = state_74176__$1;
(statearr_74197_74220[(2)] = null);

(statearr_74197_74220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74177 === (8))){
var inst_74135 = (state_74176[(9)]);
var inst_74139 = figwheel.client.reload_file_state_QMARK_.call(null,inst_74135,opts);
var state_74176__$1 = state_74176;
if(cljs.core.truth_(inst_74139)){
var statearr_74198_74221 = state_74176__$1;
(statearr_74198_74221[(1)] = (11));

} else {
var statearr_74199_74222 = state_74176__$1;
(statearr_74199_74222[(1)] = (12));

}

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
}
}
}
}
}
});})(c__58857__auto___74204,ch))
;
return ((function (switch__24619__auto__,c__58857__auto___74204,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24620__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24620__auto____0 = (function (){
var statearr_74200 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_74200[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24620__auto__);

(statearr_74200[(1)] = (1));

return statearr_74200;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24620__auto____1 = (function (state_74176){
while(true){
var ret_value__24621__auto__ = (function (){try{while(true){
var result__24622__auto__ = switch__24619__auto__.call(null,state_74176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24622__auto__;
}
break;
}
}catch (e74201){if((e74201 instanceof Object)){
var ex__24623__auto__ = e74201;
var statearr_74202_74223 = state_74176;
(statearr_74202_74223[(5)] = ex__24623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74224 = state_74176;
state_74176 = G__74224;
continue;
} else {
return ret_value__24621__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24620__auto__ = function(state_74176){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24620__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24620__auto____1.call(this,state_74176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24620__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24620__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24620__auto__;
})()
;})(switch__24619__auto__,c__58857__auto___74204,ch))
})();
var state__58859__auto__ = (function (){var statearr_74203 = f__58858__auto__.call(null);
(statearr_74203[(6)] = c__58857__auto___74204);

return statearr_74203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58859__auto__);
});})(c__58857__auto___74204,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__74225_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__74225_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_74229 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_74229){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_74227 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_74228 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_74227,_STAR_print_fn_STAR_74228,sb,base_path_74229){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_74227,_STAR_print_fn_STAR_74228,sb,base_path_74229))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = ((!(typeof result_value === 'string'))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_74228;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_74227;
}}catch (e74226){if((e74226 instanceof Error)){
var e = e74226;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_74229], null));
} else {
var e = e74226;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_74229))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__74230){
var map__74231 = p__74230;
var map__74231__$1 = ((((!((map__74231 == null)))?(((((map__74231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74231):map__74231);
var opts = map__74231__$1;
var build_id = cljs.core.get.call(null,map__74231__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__74231,map__74231__$1,opts,build_id){
return (function (p__74233){
var vec__74234 = p__74233;
var seq__74235 = cljs.core.seq.call(null,vec__74234);
var first__74236 = cljs.core.first.call(null,seq__74235);
var seq__74235__$1 = cljs.core.next.call(null,seq__74235);
var map__74237 = first__74236;
var map__74237__$1 = ((((!((map__74237 == null)))?(((((map__74237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74237):map__74237);
var msg = map__74237__$1;
var msg_name = cljs.core.get.call(null,map__74237__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__74235__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__74234,seq__74235,first__74236,seq__74235__$1,map__74237,map__74237__$1,msg,msg_name,_,map__74231,map__74231__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__74234,seq__74235,first__74236,seq__74235__$1,map__74237,map__74237__$1,msg,msg_name,_,map__74231,map__74231__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__74231,map__74231__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__74239){
var vec__74240 = p__74239;
var seq__74241 = cljs.core.seq.call(null,vec__74240);
var first__74242 = cljs.core.first.call(null,seq__74241);
var seq__74241__$1 = cljs.core.next.call(null,seq__74241);
var map__74243 = first__74242;
var map__74243__$1 = ((((!((map__74243 == null)))?(((((map__74243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74243):map__74243);
var msg = map__74243__$1;
var msg_name = cljs.core.get.call(null,map__74243__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__74241__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__74245){
var map__74246 = p__74245;
var map__74246__$1 = ((((!((map__74246 == null)))?(((((map__74246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74246):map__74246);
var on_compile_warning = cljs.core.get.call(null,map__74246__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__74246__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__74246,map__74246__$1,on_compile_warning,on_compile_fail){
return (function (p__74248){
var vec__74249 = p__74248;
var seq__74250 = cljs.core.seq.call(null,vec__74249);
var first__74251 = cljs.core.first.call(null,seq__74250);
var seq__74250__$1 = cljs.core.next.call(null,seq__74250);
var map__74252 = first__74251;
var map__74252__$1 = ((((!((map__74252 == null)))?(((((map__74252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74252):map__74252);
var msg = map__74252__$1;
var msg_name = cljs.core.get.call(null,map__74252__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__74250__$1;
var pred__74254 = cljs.core._EQ_;
var expr__74255 = msg_name;
if(cljs.core.truth_(pred__74254.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__74255))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__74254.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__74255))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__74246,map__74246__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__58857__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58857__auto__,msg_hist,msg_names,msg){
return (function (){
var f__58858__auto__ = (function (){var switch__24619__auto__ = ((function (c__58857__auto__,msg_hist,msg_names,msg){
return (function (state_74344){
var state_val_74345 = (state_74344[(1)]);
if((state_val_74345 === (7))){
var inst_74264 = (state_74344[(2)]);
var state_74344__$1 = state_74344;
if(cljs.core.truth_(inst_74264)){
var statearr_74346_74393 = state_74344__$1;
(statearr_74346_74393[(1)] = (8));

} else {
var statearr_74347_74394 = state_74344__$1;
(statearr_74347_74394[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74345 === (20))){
var inst_74338 = (state_74344[(2)]);
var state_74344__$1 = state_74344;
var statearr_74348_74395 = state_74344__$1;
(statearr_74348_74395[(2)] = inst_74338);

(statearr_74348_74395[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74345 === (27))){
var inst_74334 = (state_74344[(2)]);
var state_74344__$1 = state_74344;
var statearr_74349_74396 = state_74344__$1;
(statearr_74349_74396[(2)] = inst_74334);

(statearr_74349_74396[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74345 === (1))){
var inst_74257 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_74344__$1 = state_74344;
if(cljs.core.truth_(inst_74257)){
var statearr_74350_74397 = state_74344__$1;
(statearr_74350_74397[(1)] = (2));

} else {
var statearr_74351_74398 = state_74344__$1;
(statearr_74351_74398[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74345 === (24))){
var inst_74336 = (state_74344[(2)]);
var state_74344__$1 = state_74344;
var statearr_74352_74399 = state_74344__$1;
(statearr_74352_74399[(2)] = inst_74336);

(statearr_74352_74399[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74345 === (4))){
var inst_74342 = (state_74344[(2)]);
var state_74344__$1 = state_74344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74344__$1,inst_74342);
} else {
if((state_val_74345 === (15))){
var inst_74340 = (state_74344[(2)]);
var state_74344__$1 = state_74344;
var statearr_74353_74400 = state_74344__$1;
(statearr_74353_74400[(2)] = inst_74340);

(statearr_74353_74400[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74345 === (21))){
var inst_74293 = (state_74344[(2)]);
var inst_74294 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_74295 = figwheel.client.auto_jump_to_error.call(null,opts,inst_74294);
var state_74344__$1 = (function (){var statearr_74354 = state_74344;
(statearr_74354[(7)] = inst_74293);

return statearr_74354;
})();
var statearr_74355_74401 = state_74344__$1;
(statearr_74355_74401[(2)] = inst_74295);

(statearr_74355_74401[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74345 === (31))){
var inst_74323 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_74344__$1 = state_74344;
if(cljs.core.truth_(inst_74323)){
var statearr_74356_74402 = state_74344__$1;
(statearr_74356_74402[(1)] = (34));

} else {
var statearr_74357_74403 = state_74344__$1;
(statearr_74357_74403[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74345 === (32))){
var inst_74332 = (state_74344[(2)]);
var state_74344__$1 = state_74344;
var statearr_74358_74404 = state_74344__$1;
(statearr_74358_74404[(2)] = inst_74332);

(statearr_74358_74404[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74345 === (33))){
var inst_74319 = (state_74344[(2)]);
var inst_74320 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_74321 = figwheel.client.auto_jump_to_error.call(null,opts,inst_74320);
var state_74344__$1 = (function (){var statearr_74359 = state_74344;
(statearr_74359[(8)] = inst_74319);

return statearr_74359;
})();
var statearr_74360_74405 = state_74344__$1;
(statearr_74360_74405[(2)] = inst_74321);

(statearr_74360_74405[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74345 === (13))){
var inst_74278 = figwheel.client.heads_up.clear.call(null);
var state_74344__$1 = state_74344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74344__$1,(16),inst_74278);
} else {
if((state_val_74345 === (22))){
var inst_74299 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_74300 = figwheel.client.heads_up.append_warning_message.call(null,inst_74299);
var state_74344__$1 = state_74344;
var statearr_74361_74406 = state_74344__$1;
(statearr_74361_74406[(2)] = inst_74300);

(statearr_74361_74406[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74345 === (36))){
var inst_74330 = (state_74344[(2)]);
var state_74344__$1 = state_74344;
var statearr_74362_74407 = state_74344__$1;
(statearr_74362_74407[(2)] = inst_74330);

(statearr_74362_74407[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74345 === (29))){
var inst_74310 = (state_74344[(2)]);
var inst_74311 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_74312 = figwheel.client.auto_jump_to_error.call(null,opts,inst_74311);
var state_74344__$1 = (function (){var statearr_74363 = state_74344;
(statearr_74363[(9)] = inst_74310);

return statearr_74363;
})();
var statearr_74364_74408 = state_74344__$1;
(statearr_74364_74408[(2)] = inst_74312);

(statearr_74364_74408[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74345 === (6))){
var inst_74259 = (state_74344[(10)]);
var state_74344__$1 = state_74344;
var statearr_74365_74409 = state_74344__$1;
(statearr_74365_74409[(2)] = inst_74259);

(statearr_74365_74409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74345 === (28))){
var inst_74306 = (state_74344[(2)]);
var inst_74307 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_74308 = figwheel.client.heads_up.display_warning.call(null,inst_74307);
var state_74344__$1 = (function (){var statearr_74366 = state_74344;
(statearr_74366[(11)] = inst_74306);

return statearr_74366;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74344__$1,(29),inst_74308);
} else {
if((state_val_74345 === (25))){
var inst_74304 = figwheel.client.heads_up.clear.call(null);
var state_74344__$1 = state_74344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74344__$1,(28),inst_74304);
} else {
if((state_val_74345 === (34))){
var inst_74325 = figwheel.client.heads_up.flash_loaded.call(null);
var state_74344__$1 = state_74344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74344__$1,(37),inst_74325);
} else {
if((state_val_74345 === (17))){
var inst_74284 = (state_74344[(2)]);
var inst_74285 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_74286 = figwheel.client.auto_jump_to_error.call(null,opts,inst_74285);
var state_74344__$1 = (function (){var statearr_74367 = state_74344;
(statearr_74367[(12)] = inst_74284);

return statearr_74367;
})();
var statearr_74368_74410 = state_74344__$1;
(statearr_74368_74410[(2)] = inst_74286);

(statearr_74368_74410[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74345 === (3))){
var inst_74276 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_74344__$1 = state_74344;
if(cljs.core.truth_(inst_74276)){
var statearr_74369_74411 = state_74344__$1;
(statearr_74369_74411[(1)] = (13));

} else {
var statearr_74370_74412 = state_74344__$1;
(statearr_74370_74412[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74345 === (12))){
var inst_74272 = (state_74344[(2)]);
var state_74344__$1 = state_74344;
var statearr_74371_74413 = state_74344__$1;
(statearr_74371_74413[(2)] = inst_74272);

(statearr_74371_74413[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74345 === (2))){
var inst_74259 = (state_74344[(10)]);
var inst_74259__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_74344__$1 = (function (){var statearr_74372 = state_74344;
(statearr_74372[(10)] = inst_74259__$1);

return statearr_74372;
})();
if(cljs.core.truth_(inst_74259__$1)){
var statearr_74373_74414 = state_74344__$1;
(statearr_74373_74414[(1)] = (5));

} else {
var statearr_74374_74415 = state_74344__$1;
(statearr_74374_74415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74345 === (23))){
var inst_74302 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_74344__$1 = state_74344;
if(cljs.core.truth_(inst_74302)){
var statearr_74375_74416 = state_74344__$1;
(statearr_74375_74416[(1)] = (25));

} else {
var statearr_74376_74417 = state_74344__$1;
(statearr_74376_74417[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74345 === (35))){
var state_74344__$1 = state_74344;
var statearr_74377_74418 = state_74344__$1;
(statearr_74377_74418[(2)] = null);

(statearr_74377_74418[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74345 === (19))){
var inst_74297 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_74344__$1 = state_74344;
if(cljs.core.truth_(inst_74297)){
var statearr_74378_74419 = state_74344__$1;
(statearr_74378_74419[(1)] = (22));

} else {
var statearr_74379_74420 = state_74344__$1;
(statearr_74379_74420[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74345 === (11))){
var inst_74268 = (state_74344[(2)]);
var state_74344__$1 = state_74344;
var statearr_74380_74421 = state_74344__$1;
(statearr_74380_74421[(2)] = inst_74268);

(statearr_74380_74421[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74345 === (9))){
var inst_74270 = figwheel.client.heads_up.clear.call(null);
var state_74344__$1 = state_74344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74344__$1,(12),inst_74270);
} else {
if((state_val_74345 === (5))){
var inst_74261 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_74344__$1 = state_74344;
var statearr_74381_74422 = state_74344__$1;
(statearr_74381_74422[(2)] = inst_74261);

(statearr_74381_74422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74345 === (14))){
var inst_74288 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_74344__$1 = state_74344;
if(cljs.core.truth_(inst_74288)){
var statearr_74382_74423 = state_74344__$1;
(statearr_74382_74423[(1)] = (18));

} else {
var statearr_74383_74424 = state_74344__$1;
(statearr_74383_74424[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74345 === (26))){
var inst_74314 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_74344__$1 = state_74344;
if(cljs.core.truth_(inst_74314)){
var statearr_74384_74425 = state_74344__$1;
(statearr_74384_74425[(1)] = (30));

} else {
var statearr_74385_74426 = state_74344__$1;
(statearr_74385_74426[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74345 === (16))){
var inst_74280 = (state_74344[(2)]);
var inst_74281 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_74282 = figwheel.client.heads_up.display_exception.call(null,inst_74281);
var state_74344__$1 = (function (){var statearr_74386 = state_74344;
(statearr_74386[(13)] = inst_74280);

return statearr_74386;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74344__$1,(17),inst_74282);
} else {
if((state_val_74345 === (30))){
var inst_74316 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_74317 = figwheel.client.heads_up.display_warning.call(null,inst_74316);
var state_74344__$1 = state_74344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74344__$1,(33),inst_74317);
} else {
if((state_val_74345 === (10))){
var inst_74274 = (state_74344[(2)]);
var state_74344__$1 = state_74344;
var statearr_74387_74427 = state_74344__$1;
(statearr_74387_74427[(2)] = inst_74274);

(statearr_74387_74427[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74345 === (18))){
var inst_74290 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_74291 = figwheel.client.heads_up.display_exception.call(null,inst_74290);
var state_74344__$1 = state_74344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74344__$1,(21),inst_74291);
} else {
if((state_val_74345 === (37))){
var inst_74327 = (state_74344[(2)]);
var state_74344__$1 = state_74344;
var statearr_74388_74428 = state_74344__$1;
(statearr_74388_74428[(2)] = inst_74327);

(statearr_74388_74428[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74345 === (8))){
var inst_74266 = figwheel.client.heads_up.flash_loaded.call(null);
var state_74344__$1 = state_74344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74344__$1,(11),inst_74266);
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
});})(c__58857__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24619__auto__,c__58857__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24620__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24620__auto____0 = (function (){
var statearr_74389 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_74389[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24620__auto__);

(statearr_74389[(1)] = (1));

return statearr_74389;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24620__auto____1 = (function (state_74344){
while(true){
var ret_value__24621__auto__ = (function (){try{while(true){
var result__24622__auto__ = switch__24619__auto__.call(null,state_74344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24622__auto__;
}
break;
}
}catch (e74390){if((e74390 instanceof Object)){
var ex__24623__auto__ = e74390;
var statearr_74391_74429 = state_74344;
(statearr_74391_74429[(5)] = ex__24623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74430 = state_74344;
state_74344 = G__74430;
continue;
} else {
return ret_value__24621__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24620__auto__ = function(state_74344){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24620__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24620__auto____1.call(this,state_74344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24620__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24620__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24620__auto__;
})()
;})(switch__24619__auto__,c__58857__auto__,msg_hist,msg_names,msg))
})();
var state__58859__auto__ = (function (){var statearr_74392 = f__58858__auto__.call(null);
(statearr_74392[(6)] = c__58857__auto__);

return statearr_74392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58859__auto__);
});})(c__58857__auto__,msg_hist,msg_names,msg))
);

return c__58857__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__58857__auto___74459 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58857__auto___74459,ch){
return (function (){
var f__58858__auto__ = (function (){var switch__24619__auto__ = ((function (c__58857__auto___74459,ch){
return (function (state_74445){
var state_val_74446 = (state_74445[(1)]);
if((state_val_74446 === (1))){
var state_74445__$1 = state_74445;
var statearr_74447_74460 = state_74445__$1;
(statearr_74447_74460[(2)] = null);

(statearr_74447_74460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74446 === (2))){
var state_74445__$1 = state_74445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74445__$1,(4),ch);
} else {
if((state_val_74446 === (3))){
var inst_74443 = (state_74445[(2)]);
var state_74445__$1 = state_74445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74445__$1,inst_74443);
} else {
if((state_val_74446 === (4))){
var inst_74433 = (state_74445[(7)]);
var inst_74433__$1 = (state_74445[(2)]);
var state_74445__$1 = (function (){var statearr_74448 = state_74445;
(statearr_74448[(7)] = inst_74433__$1);

return statearr_74448;
})();
if(cljs.core.truth_(inst_74433__$1)){
var statearr_74449_74461 = state_74445__$1;
(statearr_74449_74461[(1)] = (5));

} else {
var statearr_74450_74462 = state_74445__$1;
(statearr_74450_74462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74446 === (5))){
var inst_74433 = (state_74445[(7)]);
var inst_74435 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_74433);
var state_74445__$1 = state_74445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74445__$1,(8),inst_74435);
} else {
if((state_val_74446 === (6))){
var state_74445__$1 = state_74445;
var statearr_74451_74463 = state_74445__$1;
(statearr_74451_74463[(2)] = null);

(statearr_74451_74463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74446 === (7))){
var inst_74441 = (state_74445[(2)]);
var state_74445__$1 = state_74445;
var statearr_74452_74464 = state_74445__$1;
(statearr_74452_74464[(2)] = inst_74441);

(statearr_74452_74464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74446 === (8))){
var inst_74437 = (state_74445[(2)]);
var state_74445__$1 = (function (){var statearr_74453 = state_74445;
(statearr_74453[(8)] = inst_74437);

return statearr_74453;
})();
var statearr_74454_74465 = state_74445__$1;
(statearr_74454_74465[(2)] = null);

(statearr_74454_74465[(1)] = (2));


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
});})(c__58857__auto___74459,ch))
;
return ((function (switch__24619__auto__,c__58857__auto___74459,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24620__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24620__auto____0 = (function (){
var statearr_74455 = [null,null,null,null,null,null,null,null,null];
(statearr_74455[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24620__auto__);

(statearr_74455[(1)] = (1));

return statearr_74455;
});
var figwheel$client$heads_up_plugin_$_state_machine__24620__auto____1 = (function (state_74445){
while(true){
var ret_value__24621__auto__ = (function (){try{while(true){
var result__24622__auto__ = switch__24619__auto__.call(null,state_74445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24622__auto__;
}
break;
}
}catch (e74456){if((e74456 instanceof Object)){
var ex__24623__auto__ = e74456;
var statearr_74457_74466 = state_74445;
(statearr_74457_74466[(5)] = ex__24623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74467 = state_74445;
state_74445 = G__74467;
continue;
} else {
return ret_value__24621__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24620__auto__ = function(state_74445){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24620__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24620__auto____1.call(this,state_74445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24620__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24620__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24620__auto__;
})()
;})(switch__24619__auto__,c__58857__auto___74459,ch))
})();
var state__58859__auto__ = (function (){var statearr_74458 = f__58858__auto__.call(null);
(statearr_74458[(6)] = c__58857__auto___74459);

return statearr_74458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58859__auto__);
});})(c__58857__auto___74459,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__58857__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58857__auto__){
return (function (){
var f__58858__auto__ = (function (){var switch__24619__auto__ = ((function (c__58857__auto__){
return (function (state_74473){
var state_val_74474 = (state_74473[(1)]);
if((state_val_74474 === (1))){
var inst_74468 = cljs.core.async.timeout.call(null,(3000));
var state_74473__$1 = state_74473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74473__$1,(2),inst_74468);
} else {
if((state_val_74474 === (2))){
var inst_74470 = (state_74473[(2)]);
var inst_74471 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_74473__$1 = (function (){var statearr_74475 = state_74473;
(statearr_74475[(7)] = inst_74470);

return statearr_74475;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74473__$1,inst_74471);
} else {
return null;
}
}
});})(c__58857__auto__))
;
return ((function (switch__24619__auto__,c__58857__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24620__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24620__auto____0 = (function (){
var statearr_74476 = [null,null,null,null,null,null,null,null];
(statearr_74476[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24620__auto__);

(statearr_74476[(1)] = (1));

return statearr_74476;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24620__auto____1 = (function (state_74473){
while(true){
var ret_value__24621__auto__ = (function (){try{while(true){
var result__24622__auto__ = switch__24619__auto__.call(null,state_74473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24622__auto__;
}
break;
}
}catch (e74477){if((e74477 instanceof Object)){
var ex__24623__auto__ = e74477;
var statearr_74478_74480 = state_74473;
(statearr_74478_74480[(5)] = ex__24623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74481 = state_74473;
state_74473 = G__74481;
continue;
} else {
return ret_value__24621__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24620__auto__ = function(state_74473){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24620__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24620__auto____1.call(this,state_74473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24620__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24620__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24620__auto__;
})()
;})(switch__24619__auto__,c__58857__auto__))
})();
var state__58859__auto__ = (function (){var statearr_74479 = f__58858__auto__.call(null);
(statearr_74479[(6)] = c__58857__auto__);

return statearr_74479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58859__auto__);
});})(c__58857__auto__))
);

return c__58857__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__58857__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58857__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__58858__auto__ = (function (){var switch__24619__auto__ = ((function (c__58857__auto__,figwheel_version,temp__5720__auto__){
return (function (state_74488){
var state_val_74489 = (state_74488[(1)]);
if((state_val_74489 === (1))){
var inst_74482 = cljs.core.async.timeout.call(null,(2000));
var state_74488__$1 = state_74488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74488__$1,(2),inst_74482);
} else {
if((state_val_74489 === (2))){
var inst_74484 = (state_74488[(2)]);
var inst_74485 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_74486 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_74485);
var state_74488__$1 = (function (){var statearr_74490 = state_74488;
(statearr_74490[(7)] = inst_74484);

return statearr_74490;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74488__$1,inst_74486);
} else {
return null;
}
}
});})(c__58857__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__24619__auto__,c__58857__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24620__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24620__auto____0 = (function (){
var statearr_74491 = [null,null,null,null,null,null,null,null];
(statearr_74491[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24620__auto__);

(statearr_74491[(1)] = (1));

return statearr_74491;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24620__auto____1 = (function (state_74488){
while(true){
var ret_value__24621__auto__ = (function (){try{while(true){
var result__24622__auto__ = switch__24619__auto__.call(null,state_74488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24622__auto__;
}
break;
}
}catch (e74492){if((e74492 instanceof Object)){
var ex__24623__auto__ = e74492;
var statearr_74493_74495 = state_74488;
(statearr_74493_74495[(5)] = ex__24623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74496 = state_74488;
state_74488 = G__74496;
continue;
} else {
return ret_value__24621__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24620__auto__ = function(state_74488){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24620__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24620__auto____1.call(this,state_74488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24620__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24620__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24620__auto__;
})()
;})(switch__24619__auto__,c__58857__auto__,figwheel_version,temp__5720__auto__))
})();
var state__58859__auto__ = (function (){var statearr_74494 = f__58858__auto__.call(null);
(statearr_74494[(6)] = c__58857__auto__);

return statearr_74494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58859__auto__);
});})(c__58857__auto__,figwheel_version,temp__5720__auto__))
);

return c__58857__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__74497){
var map__74498 = p__74497;
var map__74498__$1 = ((((!((map__74498 == null)))?(((((map__74498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74498):map__74498);
var file = cljs.core.get.call(null,map__74498__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__74498__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__74498__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__74500 = "";
var G__74500__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__74500),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__74500);
var G__74500__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__74500__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__74500__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = line;
if(cljs.core.truth_(and__3938__auto__)){
return column;
} else {
return and__3938__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__74500__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__74500__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__74501){
var map__74502 = p__74501;
var map__74502__$1 = ((((!((map__74502 == null)))?(((((map__74502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74502):map__74502);
var ed = map__74502__$1;
var exception_data = cljs.core.get.call(null,map__74502__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__74502__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_74505 = (function (){var G__74504 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__74504)," Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,exception_data))].join('');
} else {
return G__74504;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_74505);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__74506){
var map__74507 = p__74506;
var map__74507__$1 = ((((!((map__74507 == null)))?(((((map__74507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74507):map__74507);
var w = map__74507__$1;
var message = cljs.core.get.call(null,map__74507__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources\\public\\js\\dev\\figwheel\\client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources\\public\\js\\dev\\figwheel\\client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3938__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3938__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__74509 = cljs.core.seq.call(null,plugins);
var chunk__74510 = null;
var count__74511 = (0);
var i__74512 = (0);
while(true){
if((i__74512 < count__74511)){
var vec__74513 = cljs.core._nth.call(null,chunk__74510,i__74512);
var k = cljs.core.nth.call(null,vec__74513,(0),null);
var plugin = cljs.core.nth.call(null,vec__74513,(1),null);
if(cljs.core.truth_(plugin)){
var pl_74519 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__74509,chunk__74510,count__74511,i__74512,pl_74519,vec__74513,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_74519.call(null,msg_hist);
});})(seq__74509,chunk__74510,count__74511,i__74512,pl_74519,vec__74513,k,plugin))
);
} else {
}


var G__74520 = seq__74509;
var G__74521 = chunk__74510;
var G__74522 = count__74511;
var G__74523 = (i__74512 + (1));
seq__74509 = G__74520;
chunk__74510 = G__74521;
count__74511 = G__74522;
i__74512 = G__74523;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__74509);
if(temp__5720__auto__){
var seq__74509__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__74509__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__74509__$1);
var G__74524 = cljs.core.chunk_rest.call(null,seq__74509__$1);
var G__74525 = c__4351__auto__;
var G__74526 = cljs.core.count.call(null,c__4351__auto__);
var G__74527 = (0);
seq__74509 = G__74524;
chunk__74510 = G__74525;
count__74511 = G__74526;
i__74512 = G__74527;
continue;
} else {
var vec__74516 = cljs.core.first.call(null,seq__74509__$1);
var k = cljs.core.nth.call(null,vec__74516,(0),null);
var plugin = cljs.core.nth.call(null,vec__74516,(1),null);
if(cljs.core.truth_(plugin)){
var pl_74528 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__74509,chunk__74510,count__74511,i__74512,pl_74528,vec__74516,k,plugin,seq__74509__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_74528.call(null,msg_hist);
});})(seq__74509,chunk__74510,count__74511,i__74512,pl_74528,vec__74516,k,plugin,seq__74509__$1,temp__5720__auto__))
);
} else {
}


var G__74529 = cljs.core.next.call(null,seq__74509__$1);
var G__74530 = null;
var G__74531 = (0);
var G__74532 = (0);
seq__74509 = G__74529;
chunk__74510 = G__74530;
count__74511 = G__74531;
i__74512 = G__74532;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__74534 = arguments.length;
switch (G__74534) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__74535_74540 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__74536_74541 = null;
var count__74537_74542 = (0);
var i__74538_74543 = (0);
while(true){
if((i__74538_74543 < count__74537_74542)){
var msg_74544 = cljs.core._nth.call(null,chunk__74536_74541,i__74538_74543);
figwheel.client.socket.handle_incoming_message.call(null,msg_74544);


var G__74545 = seq__74535_74540;
var G__74546 = chunk__74536_74541;
var G__74547 = count__74537_74542;
var G__74548 = (i__74538_74543 + (1));
seq__74535_74540 = G__74545;
chunk__74536_74541 = G__74546;
count__74537_74542 = G__74547;
i__74538_74543 = G__74548;
continue;
} else {
var temp__5720__auto___74549 = cljs.core.seq.call(null,seq__74535_74540);
if(temp__5720__auto___74549){
var seq__74535_74550__$1 = temp__5720__auto___74549;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__74535_74550__$1)){
var c__4351__auto___74551 = cljs.core.chunk_first.call(null,seq__74535_74550__$1);
var G__74552 = cljs.core.chunk_rest.call(null,seq__74535_74550__$1);
var G__74553 = c__4351__auto___74551;
var G__74554 = cljs.core.count.call(null,c__4351__auto___74551);
var G__74555 = (0);
seq__74535_74540 = G__74552;
chunk__74536_74541 = G__74553;
count__74537_74542 = G__74554;
i__74538_74543 = G__74555;
continue;
} else {
var msg_74556 = cljs.core.first.call(null,seq__74535_74550__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_74556);


var G__74557 = cljs.core.next.call(null,seq__74535_74550__$1);
var G__74558 = null;
var G__74559 = (0);
var G__74560 = (0);
seq__74535_74540 = G__74557;
chunk__74536_74541 = G__74558;
count__74537_74542 = G__74559;
i__74538_74543 = G__74560;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4534__auto__ = [];
var len__4531__auto___74565 = arguments.length;
var i__4532__auto___74566 = (0);
while(true){
if((i__4532__auto___74566 < len__4531__auto___74565)){
args__4534__auto__.push((arguments[i__4532__auto___74566]));

var G__74567 = (i__4532__auto___74566 + (1));
i__4532__auto___74566 = G__74567;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__74562){
var map__74563 = p__74562;
var map__74563__$1 = ((((!((map__74563 == null)))?(((((map__74563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74563):map__74563);
var opts = map__74563__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq74561){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq74561));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e74568){if((e74568 instanceof Error)){
var e = e74568;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e74568;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__74569){
var map__74570 = p__74569;
var map__74570__$1 = ((((!((map__74570 == null)))?(((((map__74570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74570):map__74570);
var msg_name = cljs.core.get.call(null,map__74570__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1563552903058
