// Compiled by ClojureScript 1.10.339 {}
goog.provide('antizer.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('clojure.walk');
goog.require('goog.object');
goog.require('cljsjs.antd');
antizer.core.antd_module = antd;
/**
 * Converts from kebab case to camel case, eg: on-click to onClick
 */
antizer.core.kebab_case__GT_camel_case = (function antizer$core$kebab_case__GT_camel_case(input){
var words = clojure.string.split.call(null,input,/-/);
var capitalize = cljs.core.map.call(null,((function (words){
return (function (p1__58736_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,clojure.string.upper_case.call(null,cljs.core.first.call(null,p1__58736_SHARP_)),cljs.core.rest.call(null,p1__58736_SHARP_));
});})(words))
,cljs.core.rest.call(null,words));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.first.call(null,words),capitalize);
});
/**
 * Stringifys all the keys of a cljs hashmap and converts them
 * from kebab case to camel case. If :html-props option is specified, 
 * then rename the html properties values to their dom equivalent
 * before conversion
 */
antizer.core.map_keys__GT_camel_case = (function antizer$core$map_keys__GT_camel_case(var_args){
var args__4534__auto__ = [];
var len__4531__auto___58763 = arguments.length;
var i__4532__auto___58764 = (0);
while(true){
if((i__4532__auto___58764 < len__4531__auto___58763)){
args__4534__auto__.push((arguments[i__4532__auto___58764]));

var G__58767 = (i__4532__auto___58764 + (1));
i__4532__auto___58764 = G__58767;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return antizer.core.map_keys__GT_camel_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

antizer.core.map_keys__GT_camel_case.cljs$core$IFn$_invoke$arity$variadic = (function (data,p__58751){
var map__58752 = p__58751;
var map__58752__$1 = ((((!((map__58752 == null)))?(((((map__58752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58752):map__58752);
var html_props = cljs.core.get.call(null,map__58752__$1,new cljs.core.Keyword(null,"html-props","html-props",-455448229));
var convert_to_camel = ((function (map__58752,map__58752__$1,html_props){
return (function (p__58756){
var vec__58757 = p__58756;
var key = cljs.core.nth.call(null,vec__58757,(0),null);
var value = cljs.core.nth.call(null,vec__58757,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.core.kebab_case__GT_camel_case.call(null,cljs.core.name.call(null,key)),value], null);
});})(map__58752,map__58752__$1,html_props))
;
return clojure.walk.postwalk.call(null,((function (convert_to_camel,map__58752,map__58752__$1,html_props){
return (function (x){
if(cljs.core.map_QMARK_.call(null,x)){
var new_map = (cljs.core.truth_(html_props)?clojure.set.rename_keys.call(null,x,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720)], null)):x);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,convert_to_camel,new_map));
} else {
return x;
}
});})(convert_to_camel,map__58752,map__58752__$1,html_props))
,data);
});

antizer.core.map_keys__GT_camel_case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
antizer.core.map_keys__GT_camel_case.cljs$lang$applyTo = (function (seq58748){
var G__58749 = cljs.core.first.call(null,seq58748);
var seq58748__$1 = cljs.core.next.call(null,seq58748);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58749,seq58748__$1);
});

antizer.core.get_module_path = (function antizer$core$get_module_path(module_name){
return clojure.string.split.call(null,module_name,/\./);
});
/**
 * Retreives the value of the module's property
 */
antizer.core.get_prop = (function antizer$core$get_prop(module_name,prop){
if(cljs.core.truth_(prop)){
return cljs.core.apply.call(null,goog.object.getValueByKeys,antizer.core.antd_module,cljs.core.conj.call(null,antizer.core.get_module_path.call(null,module_name),cljs.core.name.call(null,prop)));
} else {
return null;
}
});
/**
 * Calls a javascript function, converting the keys for any arguments 
 * that are hashmaps from kebab case to camel case
 * 
 * * func - the native javascript to be called
 */
antizer.core.call_js_func = (function antizer$core$call_js_func(var_args){
var args__4534__auto__ = [];
var len__4531__auto___58806 = arguments.length;
var i__4532__auto___58807 = (0);
while(true){
if((i__4532__auto___58807 < len__4531__auto___58806)){
args__4534__auto__.push((arguments[i__4532__auto___58807]));

var G__58813 = (i__4532__auto___58807 + (1));
i__4532__auto___58807 = G__58813;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return antizer.core.call_js_func.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

antizer.core.call_js_func.cljs$core$IFn$_invoke$arity$variadic = (function (func,args){
return cljs.core.apply.call(null,func,cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,antizer.core.map_keys__GT_camel_case,args)));
});

antizer.core.call_js_func.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
antizer.core.call_js_func.cljs$lang$applyTo = (function (seq58784){
var G__58785 = cljs.core.first.call(null,seq58784);
var seq58784__$1 = cljs.core.next.call(null,seq58784);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58785,seq58784__$1);
});

/**
 * Calls the ant module function
 */
antizer.core.call_func = (function antizer$core$call_func(var_args){
var args__4534__auto__ = [];
var len__4531__auto___58844 = arguments.length;
var i__4532__auto___58845 = (0);
while(true){
if((i__4532__auto___58845 < len__4531__auto___58844)){
args__4534__auto__.push((arguments[i__4532__auto___58845]));

var G__58846 = (i__4532__auto___58845 + (1));
i__4532__auto___58845 = G__58846;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return antizer.core.call_func.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

antizer.core.call_func.cljs$core$IFn$_invoke$arity$variadic = (function (module_name,args){
var path = antizer.core.get_module_path.call(null,module_name);
var func = cljs.core.apply.call(null,goog.object.getValueByKeys,antizer.core.antd_module,path);
return cljs.core.apply.call(null,antizer.core.call_js_func,func,args);
});

antizer.core.call_func.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
antizer.core.call_func.cljs$lang$applyTo = (function (seq58831){
var G__58832 = cljs.core.first.call(null,seq58831);
var seq58831__$1 = cljs.core.next.call(null,seq58831);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58832,seq58831__$1);
});


//# sourceMappingURL=core.js.map?rel=1563552884194
