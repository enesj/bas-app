// Compiled by ClojureScript 1.10.339 {}
goog.provide('basapp.forms');
goog.require('cljs.core');
goog.require('basapp.forms.employee');
goog.require('basapp.forms.sector');
goog.require('basapp.forms.department');
basapp.forms.forms = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"employee","employee",-504836945),basapp.forms.employee.constructor$.call(null),new cljs.core.Keyword(null,"sector","sector",-1444247062),basapp.forms.sector.constructor$.call(null),new cljs.core.Keyword(null,"department","department",-359157087),basapp.forms.department.constructor$.call(null)], null);
basapp.forms.forms_automount_fns = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"employee","employee",-504836945),(function (r){
if(cljs.core._EQ_.call(null,"employee",new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(r))){
return new cljs.core.Keyword(null,"form","form",-1624062471);
} else {
return null;
}
}),new cljs.core.Keyword(null,"sector","sector",-1444247062),(function (r){
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core._EQ_.call(null,"sectors",new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(r));
if(and__3938__auto__){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(r);
} else {
return and__3938__auto__;
}
})())){
return new cljs.core.Keyword(null,"form","form",-1624062471);
} else {
return null;
}
}),new cljs.core.Keyword(null,"department","department",-359157087),(function (r){
if(cljs.core._EQ_.call(null,"department",new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(r))){
} else {
}

return new cljs.core.Keyword(null,"form","form",-1624062471);
})], null);

//# sourceMappingURL=forms.js.map?rel=1563559492809
