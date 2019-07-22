// Compiled by ClojureScript 1.10.339 {}
goog.provide('forms.dirty');
goog.require('cljs.core');
goog.require('clojure.data');
forms.dirty.analyze_diff = (function forms$dirty$analyze_diff(var_args){
var G__37148 = arguments.length;
switch (G__37148) {
case 1:
return forms.dirty.analyze_diff.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return forms.dirty.analyze_diff.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

forms.dirty.analyze_diff.cljs$core$IFn$_invoke$arity$1 = (function (data){
return forms.dirty.analyze_diff.call(null,data,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"lengths","lengths",-851104122),cljs.core.PersistentArrayMap.EMPTY], null));
});

forms.dirty.analyze_diff.cljs$core$IFn$_invoke$arity$3 = (function (data,path,results){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
if(((cljs.core.vector_QMARK_.call(null,v)) || (cljs.core.map_QMARK_.call(null,v)))){
var map__37149 = m;
var map__37149__$1 = ((((!((map__37149 == null)))?(((((map__37149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37149):map__37149);
var results__$1 = cljs.core.get.call(null,map__37149__$1,new cljs.core.Keyword(null,"results","results",-1134170113));
var lengths = cljs.core.get.call(null,map__37149__$1,new cljs.core.Keyword(null,"lengths","lengths",-851104122));
var new_path = cljs.core.conj.call(null,path,k);
var child_diff = forms.dirty.analyze_diff.call(null,v,new_path,m);
var new_results = new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(child_diff);
var new_lengths = new cljs.core.Keyword(null,"lengths","lengths",-851104122).cljs$core$IFn$_invoke$arity$1(child_diff);
var lengths_with_current = ((cljs.core.vector_QMARK_.call(null,v))?cljs.core.assoc.call(null,lengths,new_path,cljs.core.count.call(null,v)):lengths);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.concat.call(null,results__$1,new_results),new cljs.core.Keyword(null,"lengths","lengths",-851104122),cljs.core.merge.call(null,new_lengths,lengths_with_current)], null);
} else {
if((v == null)){
return m;
} else {
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.conj.call(null,new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(m),cljs.core.conj.call(null,path,k)));
}
}
}),results,data);
});

forms.dirty.analyze_diff.cljs$lang$maxFixedArity = 3;

/**
 * Calculates the key paths that are dirty by diffing the initial and current form data.
 */
forms.dirty.calculate_dirty_fields = (function forms$dirty$calculate_dirty_fields(prev,current){
var vec__37152 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,clojure.data.diff.call(null,prev,current));
var p_diff = cljs.core.nth.call(null,vec__37152,(0),null);
var c_diff = cljs.core.nth.call(null,vec__37152,(1),null);
var p_report = forms.dirty.analyze_diff.call(null,p_diff);
var c_report = forms.dirty.analyze_diff.call(null,c_diff);
var vec__37155 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,clojure.data.diff.call(null,new cljs.core.Keyword(null,"lengths","lengths",-851104122).cljs$core$IFn$_invoke$arity$1(p_report),new cljs.core.Keyword(null,"lengths","lengths",-851104122).cljs$core$IFn$_invoke$arity$1(c_report)));
var p_lengths_diff = cljs.core.nth.call(null,vec__37155,(0),null);
var c_lengths_diff = cljs.core.nth.call(null,vec__37155,(1),null);
return cljs.core.set.call(null,cljs.core.concat.call(null,new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(p_report),new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(c_report),cljs.core.keys.call(null,p_lengths_diff),cljs.core.keys.call(null,c_lengths_diff)));
});

//# sourceMappingURL=dirty.js.map?rel=1563552864676
