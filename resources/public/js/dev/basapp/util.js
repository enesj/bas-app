// Compiled by ClojureScript 1.10.339 {}
goog.provide('basapp.util');
goog.require('cljs.core');
goog.require('cljsjs.moment');
goog.require('reagent.core');
goog.require('keechma.ui_component');
goog.require('basapp.datascript');
goog.require('oops.core');
basapp.util.format_ts = (function basapp$util$format_ts(ts){
if(cljs.core.truth_(ts)){
var target_obj_40788 = moment(ts);
var _STAR_runtime_state_STAR_40792 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_40788,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_40790 = [target_obj_40788,(function (){var next_obj_40791 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_40788,(0),"format",true,true,false))?(target_obj_40788["format"]):null);
return next_obj_40791;
})()];
var fn_40789 = (call_info_40790[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_40789,oops.state.get_last_access_modifier.call(null))){
if(!((fn_40789 == null))){
return fn_40789.call((call_info_40790[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_40792;
}} else {
return null;
}
});
basapp.util.comparison = (function basapp$util$comparison(data1,data2,field){
var data1_SINGLEQUOTE_ = cljs.core.get.call(null,cljs.core.js__GT_clj.call(null,data1,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),field);
var data2_SINGLEQUOTE_ = cljs.core.get.call(null,cljs.core.js__GT_clj.call(null,data2,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),field);
var data1__$1 = ((cljs.core.coll_QMARK_.call(null,data1_SINGLEQUOTE_))?new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data1_SINGLEQUOTE_):data1_SINGLEQUOTE_);
var data2__$1 = ((cljs.core.coll_QMARK_.call(null,data2_SINGLEQUOTE_))?new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data2_SINGLEQUOTE_):data2_SINGLEQUOTE_);
return cljs.core.compare.call(null,data1__$1,data2__$1);
});
basapp.util.get_id = (function basapp$util$get_id(id){
return cljs.core.js__GT_clj.call(null,id).call(null,"id");
});
basapp.util.render_ref = (function basapp$util$render_ref(ctx,page,display_field,data){
return (function (p1__40793_SHARP_){
return reagent.core.as_element.call(null,(cljs.core.truth_(p1__40793_SHARP_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),keechma.ui_component.url.call(null,ctx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),page,new cljs.core.Keyword(null,"id","id",-1388402092),basapp.util.get_id.call(null,p1__40793_SHARP_)], null))], null),display_field.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (x){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(x),basapp.util.get_id.call(null,p1__40793_SHARP_));
}),data)))], null):null));
});
});
basapp.util.row_style_8 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"span","span",1394872991),(8),new cljs.core.Keyword(null,"offset","offset",296498311),(4),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"1em"], null)], null);
basapp.util.row_style_12 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"span","span",1394872991),(12),new cljs.core.Keyword(null,"offset","offset",296498311),(4),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"1em"], null)], null);
basapp.util.pagination = (function basapp$util$pagination(entities){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show-size-changer","show-size-changer",-745395013),true,new cljs.core.Keyword(null,"page-size-options","page-size-options",-1390274615),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["5","10","20"], null),new cljs.core.Keyword(null,"show-total","show-total",-237443507),(function (p1__40794_SHARP_){
return ["Ukupno: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40794_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(entities)].join('');
})], null);
});

//# sourceMappingURL=util.js.map?rel=1568104887072
