// Compiled by ClojureScript 1.10.339 {}
goog.provide('keechma.toolbox.forms.helpers');
goog.require('cljs.core');
goog.require('keechma.ui_component');
goog.require('keechma.toolbox.forms.core');
goog.require('reagent.ratom');
goog.require('forms.util');
goog.require('forms.core');
keechma.toolbox.forms.helpers.form_state = (function keechma$toolbox$forms$helpers$form_state(ctx,form_props){
return keechma.ui_component.subscription.call(null,ctx,new cljs.core.Keyword(null,"form-state","form-state",-1897375037),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_props], null));
});
keechma.toolbox.forms.helpers.form_state_sub = (function keechma$toolbox$forms$helpers$form_state_sub(app_db,form_props){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),keechma.toolbox.forms.core.id_key,new cljs.core.Keyword(null,"states","states",1389013542),form_props], null));
}));
});
keechma.toolbox.forms.helpers.attr_assoc_in = (function keechma$toolbox$forms$helpers$attr_assoc_in(form_state,path,value){
return cljs.core.assoc.call(null,form_state,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.assoc_in.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(form_state),forms.util.key_to_path.call(null,path),value));
});
keechma.toolbox.forms.helpers.attr_get_in = (function keechma$toolbox$forms$helpers$attr_get_in(form_state,path){
return cljs.core.get_in.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(form_state),forms.util.key_to_path.call(null,path));
});
keechma.toolbox.forms.helpers.attr_errors = (function keechma$toolbox$forms$helpers$attr_errors(form_state,path){
var path__$1 = forms.util.key_to_path.call(null,path);
var is_dirty_QMARK_ = ((cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"cached-dirty-paths","cached-dirty-paths",-1194531204).cljs$core$IFn$_invoke$arity$1(form_state),path__$1)) || (cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"dirty-paths","dirty-paths",-1212178073).cljs$core$IFn$_invoke$arity$1(form_state),path__$1)));
if(is_dirty_QMARK_){
return cljs.core.get_in.call(null,new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(form_state),path__$1);
} else {
return null;
}
});
keechma.toolbox.forms.helpers.attr_valid_QMARK_ = (function keechma$toolbox$forms$helpers$attr_valid_QMARK_(form_state,path){
return (keechma.toolbox.forms.helpers.attr_errors.call(null,form_state,path) == null);
});
keechma.toolbox.forms.helpers.form_errors = (function keechma$toolbox$forms$helpers$form_errors(form_state){
return new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(form_state);
});
keechma.toolbox.forms.helpers.form_valid_QMARK_ = (function keechma$toolbox$forms$helpers$form_valid_QMARK_(form_state){
return cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(form_state));
});
keechma.toolbox.forms.helpers.form_invalid_QMARK_ = (function keechma$toolbox$forms$helpers$form_invalid_QMARK_(form_state){
return cljs.core.not.call(null,keechma.toolbox.forms.helpers.form_valid_QMARK_.call(null,form_state));
});
keechma.toolbox.forms.helpers.form_submit_attempted_QMARK_ = (function keechma$toolbox$forms$helpers$form_submit_attempted_QMARK_(form_state){
return new cljs.core.Keyword(null,"submit-attempted?","submit-attempted?",-251868525).cljs$core$IFn$_invoke$arity$1(form_state);
});
keechma.toolbox.forms.helpers.mark_dirty_paths = (function keechma$toolbox$forms$helpers$mark_dirty_paths(var_args){
var G__40536 = arguments.length;
switch (G__40536) {
case 2:
return keechma.toolbox.forms.helpers.mark_dirty_paths.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return keechma.toolbox.forms.helpers.mark_dirty_paths.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.toolbox.forms.helpers.mark_dirty_paths.cljs$core$IFn$_invoke$arity$2 = (function (form_state,dirty_paths){
return keechma.toolbox.forms.helpers.mark_dirty_paths.call(null,form_state,dirty_paths,false);
});

keechma.toolbox.forms.helpers.mark_dirty_paths.cljs$core$IFn$_invoke$arity$3 = (function (form_state,dirty_paths,cache_QMARK_){
var cached_dirty_paths = new cljs.core.Keyword(null,"cached-dirty-key-paths","cached-dirty-key-paths",-611573122).cljs$core$IFn$_invoke$arity$1(form_state);
var new_dirty_paths = cljs.core.set.call(null,cljs.core.concat.call(null,dirty_paths,cached_dirty_paths));
var new_cached_dirty_paths = (cljs.core.truth_(cache_QMARK_)?new_dirty_paths:cached_dirty_paths);
return cljs.core.assoc.call(null,new cljs.core.Keyword(null,"dirty-paths","dirty-paths",-1212178073),new_dirty_paths,new cljs.core.Keyword(null,"cached-dirty-paths","cached-dirty-paths",-1194531204),new_cached_dirty_paths);
});

keechma.toolbox.forms.helpers.mark_dirty_paths.cljs$lang$maxFixedArity = 3;

keechma.toolbox.forms.helpers.errors__GT_paths = (function keechma$toolbox$forms$helpers$errors__GT_paths(errors){
return cljs.core.set.call(null,forms.core.errors_keypaths.call(null,errors));
});
keechma.toolbox.forms.helpers.make_component_helpers = (function keechma$toolbox$forms$helpers$make_component_helpers(ctx,form_props){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (path){
var path__$1 = forms.util.key_to_path.call(null,path);
return ((function (path__$1){
return (function (e){
var el = e.target;
var value = el.value;
var caret_pos = ((cljs.core._EQ_.call(null,"text",el.type))?el.selectionStart:null);
return keechma.ui_component.send_command.call(null,ctx,new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_props,path__$1,el,value,caret_pos], null));
});
;})(path__$1))
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (path){
var path__$1 = forms.util.key_to_path.call(null,path);
return ((function (path__$1){
return (function (e){
return keechma.ui_component.send_command.call(null,ctx,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_props,path__$1], null));
});
;})(path__$1))
}),new cljs.core.Keyword(null,"validate","validate",-201300827),(function() { 
var G__40547__delegate = function (args){
var dirty_only_QMARK_ = (function (){var or__3949__auto__ = cljs.core.first.call(null,args);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return false;
}
})();
return keechma.ui_component.send_command.call(null,ctx,new cljs.core.Keyword(null,"on-validate","on-validate",866266460),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_props,dirty_only_QMARK_], null));
};
var G__40547 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40548__i = 0, G__40548__a = new Array(arguments.length -  0);
while (G__40548__i < G__40548__a.length) {G__40548__a[G__40548__i] = arguments[G__40548__i + 0]; ++G__40548__i;}
  args = new cljs.core.IndexedSeq(G__40548__a,0,null);
} 
return G__40547__delegate.call(this,args);};
G__40547.cljs$lang$maxFixedArity = 0;
G__40547.cljs$lang$applyTo = (function (arglist__40549){
var args = cljs.core.seq(arglist__40549);
return G__40547__delegate(args);
});
G__40547.cljs$core$IFn$_invoke$arity$variadic = G__40547__delegate;
return G__40547;
})()
,new cljs.core.Keyword(null,"set-value","set-value",445227352),(function (path,value){
var path__$1 = forms.util.key_to_path.call(null,path);
return keechma.ui_component.send_command.call(null,ctx,new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_props,path__$1,null,value,null], null));
}),new cljs.core.Keyword(null,"set-value-without-immediate-validation","set-value-without-immediate-validation",2126257571),(function (path,value){
var path__$1 = forms.util.key_to_path.call(null,path);
return keechma.ui_component.send_command.call(null,ctx,new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_props,path__$1,new cljs.core.Keyword("keechma.toolbox.forms.core","no-immediate-validation","keechma.toolbox.forms.core/no-immediate-validation",-882249134),value,null], null));
}),new cljs.core.Keyword(null,"submit","submit",-49315317),(function (e){
if(cljs.core.truth_(e)){
e.preventDefault();
} else {
}

return keechma.ui_component.send_command.call(null,ctx,new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),form_props);
}),new cljs.core.Keyword(null,"call","call",-519999866),(function (args){
return keechma.ui_component.send_command.call(null,ctx,new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_props,args], null));
})], null);
});

//# sourceMappingURL=helpers.js.map?rel=1563552867553
