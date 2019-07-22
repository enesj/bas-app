// Compiled by ClojureScript 1.10.339 {}
goog.provide('keechma.toolbox.forms.app');
goog.require('cljs.core');
goog.require('keechma.toolbox.forms.controller');
goog.require('keechma.toolbox.forms.mount_controller');
goog.require('keechma.toolbox.forms.core');
keechma.toolbox.forms.app.form_state_sub = (function keechma$toolbox$forms$app$form_state_sub(app_db_atom,form_props){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),keechma.toolbox.forms.core.id_key,new cljs.core.Keyword(null,"states","states",1389013542),form_props], null));
}));
});
keechma.toolbox.forms.app.add_form_state_subscription_dep_to_components = (function keechma$toolbox$forms$app$add_form_state_subscription_dep_to_components(app_config){
return cljs.core.assoc.call(null,app_config,new cljs.core.Keyword(null,"components","components",-1073188942),cljs.core.reduce_kv.call(null,(function (acc,k,c){
var s_deps = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"subscription-deps","subscription-deps",1798032321).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
return cljs.core.assoc_in.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"subscription-deps","subscription-deps",1798032321)], null),cljs.core.conj.call(null,s_deps,keechma.toolbox.forms.core.id_key));
}),new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(app_config),new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(app_config)));
});
keechma.toolbox.forms.app.register_forms_controller = (function keechma$toolbox$forms$app$register_forms_controller(app_config,forms__$1){
return cljs.core.update.call(null,app_config,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),(function (p1__70116_SHARP_){
return keechma.toolbox.forms.controller.register.call(null,p1__70116_SHARP_,forms__$1);
}));
});
keechma.toolbox.forms.app.register_forms_mount_controller = (function keechma$toolbox$forms$app$register_forms_mount_controller(app_config,forms_mount_fns){
if(cljs.core.truth_(forms_mount_fns)){
return cljs.core.update.call(null,app_config,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),(function (p1__70117_SHARP_){
return keechma.toolbox.forms.mount_controller.register.call(null,p1__70117_SHARP_,forms_mount_fns);
}));
} else {
return app_config;
}
});
keechma.toolbox.forms.app.install = (function keechma$toolbox$forms$app$install(var_args){
var G__70119 = arguments.length;
switch (G__70119) {
case 2:
return keechma.toolbox.forms.app.install.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return keechma.toolbox.forms.app.install.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.toolbox.forms.app.install.cljs$core$IFn$_invoke$arity$2 = (function (app_config,forms__$1){
return keechma.toolbox.forms.app.install.call(null,app_config,forms__$1,null);
});

keechma.toolbox.forms.app.install.cljs$core$IFn$_invoke$arity$3 = (function (app_config,forms__$1,forms_mount_fns){
return keechma.toolbox.forms.app.register_forms_mount_controller.call(null,keechma.toolbox.forms.app.register_forms_controller.call(null,keechma.toolbox.forms.app.add_form_state_subscription_dep_to_components.call(null,cljs.core.assoc_in.call(null,app_config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),keechma.toolbox.forms.core.id_key], null),keechma.toolbox.forms.app.form_state_sub)),forms__$1),forms_mount_fns);
});

keechma.toolbox.forms.app.install.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=app.js.map?rel=1563552892825
