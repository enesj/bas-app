// Compiled by ClojureScript 1.10.339 {}
goog.provide('keechma.toolbox.forms.ui');
goog.require('cljs.core');
goog.require('keechma.ui_component');
goog.require('keechma.toolbox.forms.core');
goog.require('forms.util');
goog.require('forms.core');
keechma.toolbox.forms.ui.no_immediate_validation = new cljs.core.Keyword("keechma.toolbox.forms.core","no-immediate-validation","keechma.toolbox.forms.core/no-immediate-validation",-882249134);
keechma.toolbox.forms.ui.form_state_GT_ = (function keechma$toolbox$forms$ui$form_state_GT_(ctx,form_props){
return cljs.core.deref.call(null,keechma.ui_component.subscription.call(null,ctx,keechma.toolbox.forms.core.id_key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_props], null)));
});
keechma.toolbox.forms.ui.errors_GT_ = (function keechma$toolbox$forms$ui$errors_GT_(ctx,form_props){
return new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(keechma.toolbox.forms.ui.form_state_GT_.call(null,ctx,form_props));
});
keechma.toolbox.forms.ui.data_GT_ = (function keechma$toolbox$forms$ui$data_GT_(ctx,form_props){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(keechma.toolbox.forms.ui.form_state_GT_.call(null,ctx,form_props));
});
keechma.toolbox.forms.ui.value_in_GT_ = (function keechma$toolbox$forms$ui$value_in_GT_(ctx,form_props,path){
return cljs.core.get_in.call(null,keechma.toolbox.forms.ui.data_GT_.call(null,ctx,form_props),forms.util.key_to_path.call(null,path));
});
keechma.toolbox.forms.ui.errors_in_GT_ = (function keechma$toolbox$forms$ui$errors_in_GT_(ctx,form_props,path){
var form_state = keechma.toolbox.forms.ui.form_state_GT_.call(null,ctx,form_props);
var path__$1 = forms.util.key_to_path.call(null,path);
var is_dirty_QMARK_ = ((cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"cached-dirty-paths","cached-dirty-paths",-1194531204).cljs$core$IFn$_invoke$arity$1(form_state),path__$1)) || (cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"dirty-paths","dirty-paths",-1212178073).cljs$core$IFn$_invoke$arity$1(form_state),path__$1)));
if(is_dirty_QMARK_){
return cljs.core.get_in.call(null,new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(form_state),path__$1);
} else {
return null;
}
});
keechma.toolbox.forms.ui.valid_in_QMARK__GT_ = (function keechma$toolbox$forms$ui$valid_in_QMARK__GT_(ctx,form_props,path){
return (keechma.toolbox.forms.ui.errors_in_GT_.call(null,ctx,form_props,path) == null);
});
keechma.toolbox.forms.ui.valid_QMARK__GT_ = (function keechma$toolbox$forms$ui$valid_QMARK__GT_(ctx,form_props){
return cljs.core.empty_QMARK_.call(null,keechma.toolbox.forms.ui.errors_GT_.call(null,ctx,form_props));
});
keechma.toolbox.forms.ui.invalid_QMARK__GT_ = (function keechma$toolbox$forms$ui$invalid_QMARK__GT_(ctx,form_props){
return cljs.core.not.call(null,keechma.toolbox.forms.ui.valid_QMARK__GT_.call(null,ctx,form_props));
});
keechma.toolbox.forms.ui.invalid_in_QMARK__GT_ = (function keechma$toolbox$forms$ui$invalid_in_QMARK__GT_(ctx,form_props,path){
return cljs.core.not.call(null,keechma.toolbox.forms.ui.valid_in_QMARK__GT_.call(null,ctx,form_props,path));
});
keechma.toolbox.forms.ui.submit_attempted_QMARK__GT_ = (function keechma$toolbox$forms$ui$submit_attempted_QMARK__GT_(ctx,form_props){
return new cljs.core.Keyword(null,"submit-attempted?","submit-attempted?",-251868525).cljs$core$IFn$_invoke$arity$1(keechma.toolbox.forms.ui.form_state_GT_.call(null,ctx,form_props));
});
keechma.toolbox.forms.ui._LT_on_change = (function keechma$toolbox$forms$ui$_LT_on_change(ctx,form_props,path,e){
var el = e.target;
var value = el.value;
var caret_pos = ((cljs.core._EQ_.call(null,"text",el.type))?el.selectionStart:null);
return keechma.ui_component.send_command.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.toolbox.forms.core.id_key,new cljs.core.Keyword(null,"on-change","on-change",-732046149)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_props,forms.util.key_to_path.call(null,path),el,value,caret_pos], null));
});
keechma.toolbox.forms.ui._LT_on_blur = (function keechma$toolbox$forms$ui$_LT_on_blur(ctx,form_props,path,e){
return keechma.ui_component.send_command.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.toolbox.forms.core.id_key,new cljs.core.Keyword(null,"on-blur","on-blur",814300747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_props,forms.util.key_to_path.call(null,path)], null));
});
keechma.toolbox.forms.ui._LT_validate = (function keechma$toolbox$forms$ui$_LT_validate(var_args){
var G__37368 = arguments.length;
switch (G__37368) {
case 2:
return keechma.toolbox.forms.ui._LT_validate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return keechma.toolbox.forms.ui._LT_validate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.toolbox.forms.ui._LT_validate.cljs$core$IFn$_invoke$arity$2 = (function (ctx,form_props){
return keechma.toolbox.forms.ui._LT_validate.call(null,ctx,form_props,false);
});

keechma.toolbox.forms.ui._LT_validate.cljs$core$IFn$_invoke$arity$3 = (function (ctx,form_props,dirty_only_QMARK_){
return keechma.ui_component.send_command.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.toolbox.forms.core.id_key,new cljs.core.Keyword(null,"on-validate","on-validate",866266460)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_props,dirty_only_QMARK_], null));
});

keechma.toolbox.forms.ui._LT_validate.cljs$lang$maxFixedArity = 3;

keechma.toolbox.forms.ui._LT_set_value = (function keechma$toolbox$forms$ui$_LT_set_value(ctx,form_props,path,value){
return keechma.ui_component.send_command.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.toolbox.forms.core.id_key,new cljs.core.Keyword(null,"on-change","on-change",-732046149)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_props,forms.util.key_to_path.call(null,path),null,value,null], null));
});
keechma.toolbox.forms.ui._LT_set_value_without_immediate_validation = (function keechma$toolbox$forms$ui$_LT_set_value_without_immediate_validation(ctx,form_props,path,value){
return keechma.ui_component.send_command.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.toolbox.forms.core.id_key,new cljs.core.Keyword(null,"on-change","on-change",-732046149)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_props,forms.util.key_to_path.call(null,path),keechma.toolbox.forms.ui.no_immediate_validation,value,null], null));
});
keechma.toolbox.forms.ui._LT_submit = (function keechma$toolbox$forms$ui$_LT_submit(var_args){
var G__37371 = arguments.length;
switch (G__37371) {
case 2:
return keechma.toolbox.forms.ui._LT_submit.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return keechma.toolbox.forms.ui._LT_submit.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.toolbox.forms.ui._LT_submit.cljs$core$IFn$_invoke$arity$2 = (function (ctx,form_props){
return keechma.toolbox.forms.ui._LT_submit.call(null,ctx,form_props,null);
});

keechma.toolbox.forms.ui._LT_submit.cljs$core$IFn$_invoke$arity$3 = (function (ctx,form_props,e){
if(cljs.core.truth_(e)){
e.preventDefault();
} else {
}

return keechma.ui_component.send_command.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.toolbox.forms.core.id_key,new cljs.core.Keyword(null,"on-submit","on-submit",1227871159)], null),form_props);
});

keechma.toolbox.forms.ui._LT_submit.cljs$lang$maxFixedArity = 3;

keechma.toolbox.forms.ui._LT_call = (function keechma$toolbox$forms$ui$_LT_call(var_args){
var args__4534__auto__ = [];
var len__4531__auto___37376 = arguments.length;
var i__4532__auto___37377 = (0);
while(true){
if((i__4532__auto___37377 < len__4531__auto___37376)){
args__4534__auto__.push((arguments[i__4532__auto___37377]));

var G__37378 = (i__4532__auto___37377 + (1));
i__4532__auto___37377 = G__37378;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return keechma.toolbox.forms.ui._LT_call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

keechma.toolbox.forms.ui._LT_call.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,form_props,args){
return keechma.ui_component.send_command.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.toolbox.forms.core.id_key,new cljs.core.Keyword(null,"call","call",-519999866)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_props,args], null));
});

keechma.toolbox.forms.ui._LT_call.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
keechma.toolbox.forms.ui._LT_call.cljs$lang$applyTo = (function (seq37373){
var G__37374 = cljs.core.first.call(null,seq37373);
var seq37373__$1 = cljs.core.next.call(null,seq37373);
var G__37375 = cljs.core.first.call(null,seq37373__$1);
var seq37373__$2 = cljs.core.next.call(null,seq37373__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37374,G__37375,seq37373__$2);
});


//# sourceMappingURL=ui.js.map?rel=1563552865271
