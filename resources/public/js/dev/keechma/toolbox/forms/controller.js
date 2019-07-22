// Compiled by ClojureScript 1.10.339 {}
goog.provide('keechma.toolbox.forms.controller');
goog.require('cljs.core');
goog.require('keechma.toolbox.pipeline.controller');
goog.require('keechma.toolbox.pipeline.core');
goog.require('keechma.toolbox.forms.core');
goog.require('keechma.toolbox.forms.helpers');
goog.require('keechma.toolbox.forms.cursor');
goog.require('forms.dirty');
goog.require('forms.core');
goog.require('forms.util');
goog.require('promesa.core');
goog.require('reagent.core');
keechma.toolbox.forms.controller.get_form_record = (function keechma$toolbox$forms$controller$get_form_record(forms_config,p__69676){
var vec__69677 = p__69676;
var form_type = cljs.core.nth.call(null,vec__69677,(0),null);
var _ = cljs.core.nth.call(null,vec__69677,(1),null);
return cljs.core.get.call(null,forms_config,form_type);
});
keechma.toolbox.forms.controller.get_form_state = (function keechma$toolbox$forms$controller$get_form_state(app_db,form_props){
return cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),keechma.toolbox.forms.core.id_key,new cljs.core.Keyword(null,"states","states",1389013542),form_props], null));
});
keechma.toolbox.forms.controller.get_forms = (function keechma$toolbox$forms$controller$get_forms(app_db){
var or__3949__auto__ = cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),keechma.toolbox.forms.core.id_key], null));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"states","states",1389013542),cljs.core.PersistentArrayMap.EMPTY], null);
}
});
keechma.toolbox.forms.controller.add_form_to_app_db = (function keechma$toolbox$forms$controller$add_form_to_app_db(app_db,form_props,form_state){
var forms__$1 = keechma.toolbox.forms.controller.get_forms.call(null,app_db);
var forms_order = cljs.core.vec.call(null,cljs.core.filter.call(null,((function (forms__$1){
return (function (p1__69680_SHARP_){
return cljs.core.not_EQ_.call(null,form_props,p1__69680_SHARP_);
});})(forms__$1))
,new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(forms__$1)));
var forms_states = new cljs.core.Keyword(null,"states","states",1389013542).cljs$core$IFn$_invoke$arity$1(forms__$1);
return cljs.core.assoc_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),keechma.toolbox.forms.core.id_key], null),cljs.core.assoc.call(null,forms__$1,new cljs.core.Keyword(null,"states","states",1389013542),cljs.core.assoc.call(null,forms_states,form_props,form_state),new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.conj.call(null,forms_order,form_props)));
});
keechma.toolbox.forms.controller.promise_or_pipeline = (function keechma$toolbox$forms$controller$promise_or_pipeline(var_args){
var G__69686 = arguments.length;
switch (G__69686) {
case 1:
return keechma.toolbox.forms.controller.promise_or_pipeline.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.toolbox.forms.controller.promise_or_pipeline.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.toolbox.forms.controller.promise_or_pipeline.cljs$core$IFn$_invoke$arity$1 = (function (res){
return keechma.toolbox.forms.controller.promise_or_pipeline.call(null,res,cljs.core.identity);
});

keechma.toolbox.forms.controller.promise_or_pipeline.cljs$core$IFn$_invoke$arity$2 = (function (res,processor){
var res_meta = cljs.core.meta.call(null,res);
if(cljs.core.truth_(new cljs.core.Keyword(null,"pipeline?","pipeline?",1488086785).cljs$core$IFn$_invoke$arity$1(res_meta))){
return cljs.core.with_meta.call(null,((function (res_meta){
return (function() { 
var G__69693__delegate = function (args){
return promesa.core.map.call(null,processor,cljs.core.apply.call(null,res,args));
};
var G__69693 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__69696__i = 0, G__69696__a = new Array(arguments.length -  0);
while (G__69696__i < G__69696__a.length) {G__69696__a[G__69696__i] = arguments[G__69696__i + 0]; ++G__69696__i;}
  args = new cljs.core.IndexedSeq(G__69696__a,0,null);
} 
return G__69693__delegate.call(this,args);};
G__69693.cljs$lang$maxFixedArity = 0;
G__69693.cljs$lang$applyTo = (function (arglist__69698){
var args = cljs.core.seq(arglist__69698);
return G__69693__delegate(args);
});
G__69693.cljs$core$IFn$_invoke$arity$variadic = G__69693__delegate;
return G__69693;
})()
;})(res_meta))
,res_meta);
} else {
return promesa.core.map.call(null,processor,promesa.core.promise.call(null,res));
}
});

keechma.toolbox.forms.controller.promise_or_pipeline.cljs$lang$maxFixedArity = 2;

keechma.toolbox.forms.controller.get_initial_state = (function keechma$toolbox$forms$controller$get_initial_state(app_db,forms_config,value){
var form_props = new cljs.core.Keyword(null,"form-props","form-props",202171605).cljs$core$IFn$_invoke$arity$1(value);
var form_record = keechma.toolbox.forms.controller.get_form_record.call(null,forms_config,form_props);
return keechma.toolbox.forms.controller.promise_or_pipeline.call(null,keechma.toolbox.forms.core.get_data.call(null,form_record,app_db,form_props),((function (form_props,form_record){
return (function (p1__69699_SHARP_){
return cljs.core.assoc.call(null,value,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),p1__69699_SHARP_);
});})(form_props,form_record))
);
});
keechma.toolbox.forms.controller.should_immediately_validate_QMARK_ = (function keechma$toolbox$forms$controller$should_immediately_validate_QMARK_(attr_valid_QMARK_,element){
if(cljs.core.not.call(null,attr_valid_QMARK_)){
return true;
} else {
if((element == null)){
return true;
} else {
if(cljs.core._EQ_.call(null,element,new cljs.core.Keyword("keechma.toolbox.forms.core","no-immediate-validation","keechma.toolbox.forms.core/no-immediate-validation",-882249134))){
return false;
} else {
if(cljs.core._EQ_.call(null,"text",element.type)){
return false;
} else {
if(cljs.core._EQ_.call(null,"textarea",element.tagName)){
return false;
} else {
return true;

}
}
}
}
}
});
keechma.toolbox.forms.controller.premount_form = (function keechma$toolbox$forms$controller$premount_form(app_db,p__69704){
var map__69705 = p__69704;
var map__69705__$1 = ((((!((map__69705 == null)))?(((((map__69705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69705):map__69705);
var form_props = cljs.core.get.call(null,map__69705__$1,new cljs.core.Keyword(null,"form-props","form-props",202171605));
return keechma.toolbox.forms.controller.add_form_to_app_db.call(null,app_db,form_props,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"submit-attempted?","submit-attempted?",-251868525),false,new cljs.core.Keyword(null,"dirty-paths","dirty-paths",-1212178073),cljs.core.set.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"cached-dirty-paths","cached-dirty-paths",-1194531204),cljs.core.set.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mounting","mounting",2095448491)], null)], null));
});
keechma.toolbox.forms.controller.mount_form = (function keechma$toolbox$forms$controller$mount_form(app_db,forms_config,p__69712){
var map__69713 = p__69712;
var map__69713__$1 = ((((!((map__69713 == null)))?(((((map__69713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69713):map__69713);
var form_props = cljs.core.get.call(null,map__69713__$1,new cljs.core.Keyword(null,"form-props","form-props",202171605));
var initial_data = cljs.core.get.call(null,map__69713__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var form_record = keechma.toolbox.forms.controller.get_form_record.call(null,forms_config,form_props);
var processed_data = keechma.toolbox.forms.core.process_in.call(null,form_record,app_db,form_props,initial_data);
var form_state = keechma.toolbox.forms.controller.get_form_state.call(null,app_db,form_props);
return cljs.core.assoc_in.call(null,app_db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),keechma.toolbox.forms.core.id_key,new cljs.core.Keyword(null,"states","states",1389013542),form_props], null),cljs.core.assoc.call(null,form_state,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),processed_data,new cljs.core.Keyword(null,"data","data",-232669377),processed_data,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mounted","mounted",-111042616)], null)));
});
keechma.toolbox.forms.controller.unmount_form = (function keechma$toolbox$forms$controller$unmount_form(app_db,p__69720){
var map__69721 = p__69720;
var map__69721__$1 = ((((!((map__69721 == null)))?(((((map__69721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69721):map__69721);
var form_props = cljs.core.get.call(null,map__69721__$1,new cljs.core.Keyword(null,"form-props","form-props",202171605));
var forms__$1 = keechma.toolbox.forms.controller.get_forms.call(null,app_db);
var forms_order = cljs.core.vec.call(null,cljs.core.filter.call(null,((function (forms__$1,map__69721,map__69721__$1,form_props){
return (function (p1__69719_SHARP_){
return cljs.core.not_EQ_.call(null,form_props,p1__69719_SHARP_);
});})(forms__$1,map__69721,map__69721__$1,form_props))
,new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(forms__$1)));
var form_states = cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"states","states",1389013542).cljs$core$IFn$_invoke$arity$1(forms__$1),form_props);
return cljs.core.assoc_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),keechma.toolbox.forms.core.id_key], null),cljs.core.assoc.call(null,forms__$1,new cljs.core.Keyword(null,"order","order",-1254677256),forms_order,new cljs.core.Keyword(null,"states","states",1389013542),form_states));
});
keechma.toolbox.forms.controller.update_form_state = (function keechma$toolbox$forms$controller$update_form_state(app_db,forms_config,type,cause,p__69737){
var map__69738 = p__69737;
var map__69738__$1 = ((((!((map__69738 == null)))?(((((map__69738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69738):map__69738);
var form_props = cljs.core.get.call(null,map__69738__$1,new cljs.core.Keyword(null,"form-props","form-props",202171605));
var form_state = keechma.toolbox.forms.controller.get_form_state.call(null,app_db,form_props);
return cljs.core.assoc_in.call(null,app_db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),keechma.toolbox.forms.core.id_key,new cljs.core.Keyword(null,"states","states",1389013542),form_props,new cljs.core.Keyword(null,"state","state",-1988618099)], null),(cljs.core.truth_(cause)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"cause","cause",231901252),cause], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),type], null)));
});
keechma.toolbox.forms.controller.update_form_data = (function keechma$toolbox$forms$controller$update_form_data(app_db,forms_config,p__69747){
var map__69748 = p__69747;
var map__69748__$1 = ((((!((map__69748 == null)))?(((((map__69748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69748):map__69748);
var form_props = cljs.core.get.call(null,map__69748__$1,new cljs.core.Keyword(null,"form-props","form-props",202171605));
var data = cljs.core.get.call(null,map__69748__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var form_state = keechma.toolbox.forms.controller.get_form_state.call(null,app_db,form_props);
return cljs.core.assoc_in.call(null,app_db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),keechma.toolbox.forms.core.id_key,new cljs.core.Keyword(null,"states","states",1389013542),form_props,new cljs.core.Keyword(null,"data","data",-232669377)], null),data);
});
keechma.toolbox.forms.controller.mark_dirty_and_validate = (function keechma$toolbox$forms$controller$mark_dirty_and_validate(var_args){
var G__69757 = arguments.length;
switch (G__69757) {
case 2:
return keechma.toolbox.forms.controller.mark_dirty_and_validate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return keechma.toolbox.forms.controller.mark_dirty_and_validate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.toolbox.forms.controller.mark_dirty_and_validate.cljs$core$IFn$_invoke$arity$2 = (function (form_record,form_state){
return keechma.toolbox.forms.controller.mark_dirty_and_validate.call(null,form_record,form_state,true);
});

keechma.toolbox.forms.controller.mark_dirty_and_validate.cljs$core$IFn$_invoke$arity$3 = (function (form_record,form_state,dirty_only_QMARK_){
if(cljs.core.truth_(dirty_only_QMARK_)){
var errors = keechma.toolbox.forms.core.validate.call(null,form_record,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(form_state));
var dirty_paths = forms.dirty.calculate_dirty_fields.call(null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(form_state),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(form_state));
return cljs.core.assoc.call(null,form_state,new cljs.core.Keyword(null,"errors","errors",-908790718),errors,new cljs.core.Keyword(null,"dirty-paths","dirty-paths",-1212178073),cljs.core.set.call(null,dirty_paths));
} else {
var errors = keechma.toolbox.forms.core.validate.call(null,form_record,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(form_state));
var cached_dirty_paths = new cljs.core.Keyword(null,"cached-dirty-paths","cached-dirty-paths",-1194531204).cljs$core$IFn$_invoke$arity$1(form_state);
var dirty_paths = forms.core.errors_keypaths.call(null,errors);
return cljs.core.assoc.call(null,form_state,new cljs.core.Keyword(null,"errors","errors",-908790718),errors,new cljs.core.Keyword(null,"dirty-paths","dirty-paths",-1212178073),cljs.core.set.call(null,dirty_paths),new cljs.core.Keyword(null,"cached-dirty-paths","cached-dirty-paths",-1194531204),cljs.core.set.call(null,cljs.core.concat.call(null,cached_dirty_paths,dirty_paths)));
}
});

keechma.toolbox.forms.controller.mark_dirty_and_validate.cljs$lang$maxFixedArity = 3;

keechma.toolbox.forms.controller.handle_on_change = (function keechma$toolbox$forms$controller$handle_on_change(app_db,forms_config,p__69774){
var vec__69775 = p__69774;
var form_props = cljs.core.nth.call(null,vec__69775,(0),null);
var path = cljs.core.nth.call(null,vec__69775,(1),null);
var element = cljs.core.nth.call(null,vec__69775,(2),null);
var value = cljs.core.nth.call(null,vec__69775,(3),null);
var caret_pos = cljs.core.nth.call(null,vec__69775,(4),null);
var path__$1 = forms.util.key_to_path.call(null,path);
var form_state = keechma.toolbox.forms.controller.get_form_state.call(null,app_db,form_props);
var form_record = keechma.toolbox.forms.controller.get_form_record.call(null,forms_config,form_props);
var old_value = keechma.toolbox.forms.helpers.attr_get_in.call(null,form_state,path__$1);
var formatter = keechma.toolbox.forms.core.format_attr_with.call(null,form_record,path__$1);
var formatted_value = (cljs.core.truth_(formatter)?formatter.call(null,value,old_value):value);
var processor = keechma.toolbox.forms.core.process_attr_with.call(null,form_record,path__$1);
var new_state = (cljs.core.truth_(processor)?processor.call(null,app_db,form_props,form_state,path__$1,formatted_value):keechma.toolbox.forms.helpers.attr_assoc_in.call(null,form_state,path__$1,formatted_value));
var attr_valid_QMARK_ = keechma.toolbox.forms.helpers.attr_valid_QMARK_.call(null,form_state,path__$1);
var current_form_state = cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),keechma.toolbox.forms.core.id_key,new cljs.core.Keyword(null,"states","states",1389013542),form_props], null));
if((current_form_state == null)){
throw cljs.core.ex_info.call(null,"Form is not mounted",form_props);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc_in.call(null,app_db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),keechma.toolbox.forms.core.id_key,new cljs.core.Keyword(null,"states","states",1389013542),form_props], null),(cljs.core.truth_(keechma.toolbox.forms.controller.should_immediately_validate_QMARK_.call(null,attr_valid_QMARK_,element))?keechma.toolbox.forms.controller.mark_dirty_and_validate.call(null,form_record,new_state):new_state)),(cljs.core.truth_((function (){var and__3938__auto__ = element;
if(cljs.core.truth_(and__3938__auto__)){
var and__3938__auto____$1 = formatter;
if(cljs.core.truth_(and__3938__auto____$1)){
return caret_pos;
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})())?((function (path__$1,form_state,form_record,old_value,formatter,formatted_value,processor,new_state,attr_valid_QMARK_,current_form_state,vec__69775,form_props,path,element,value,caret_pos){
return (function (){
keechma.toolbox.forms.cursor.set_caret_pos_BANG_.call(null,element,new cljs.core.Keyword(null,"format-chars","format-chars",-1464252231).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,formatter)),value,formatted_value,formatter.call(null,old_value,null),caret_pos);

return reagent.core.flush.call(null);
});})(path__$1,form_state,form_record,old_value,formatter,formatted_value,processor,new_state,attr_valid_QMARK_,current_form_state,vec__69775,form_props,path,element,value,caret_pos))
:reagent.core.flush)], null);
});
keechma.toolbox.forms.controller.handle_on_blur = (function keechma$toolbox$forms$controller$handle_on_blur(app_db,forms_config,p__69809){
var vec__69810 = p__69809;
var form_props = cljs.core.nth.call(null,vec__69810,(0),null);
var path = cljs.core.nth.call(null,vec__69810,(1),null);
var form_state = keechma.toolbox.forms.controller.get_form_state.call(null,app_db,form_props);
var form_record = keechma.toolbox.forms.controller.get_form_record.call(null,forms_config,form_props);
return cljs.core.assoc_in.call(null,app_db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),keechma.toolbox.forms.core.id_key,new cljs.core.Keyword(null,"states","states",1389013542),form_props], null),keechma.toolbox.forms.controller.mark_dirty_and_validate.call(null,form_record,form_state));
});
keechma.toolbox.forms.controller.handle_call = (function keechma$toolbox$forms$controller$handle_call(app_db,forms_config,p__69819){
var vec__69821 = p__69819;
var form_props = cljs.core.nth.call(null,vec__69821,(0),null);
var args = cljs.core.nth.call(null,vec__69821,(1),null);
var form_state = keechma.toolbox.forms.controller.get_form_state.call(null,app_db,form_props);
var form_record = keechma.toolbox.forms.controller.get_form_record.call(null,forms_config,form_props);
return keechma.toolbox.forms.core.call.call(null,form_record,app_db,form_props,args);
});
keechma.toolbox.forms.controller.handle_on_mount = (function keechma$toolbox$forms$controller$handle_on_mount(app_db,forms_config,form_props){
var form_state = keechma.toolbox.forms.controller.get_form_state.call(null,app_db,form_props);
var form_record = keechma.toolbox.forms.controller.get_form_record.call(null,forms_config,form_props);
return keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (form_state,form_record){
return (function (value,app_db__$1,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(core/on-mount form-record app-db form-props)",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.forms.core.on_mount.call(null,form_record,app_db__$1,form_props)], null);
});})(form_state,form_record))
,((function (form_state,form_record){
return (function (value,app_db__$1,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"nil",new cljs.core.Keyword(null,"val","val",128701612),null], null);
});})(form_state,form_record))
], null)], null));
});
keechma.toolbox.forms.controller.handle_on_unmount = (function keechma$toolbox$forms$controller$handle_on_unmount(app_db,forms_config,form_props){
var form_state = keechma.toolbox.forms.controller.get_form_state.call(null,app_db,form_props);
var form_record = keechma.toolbox.forms.controller.get_form_record.call(null,forms_config,form_props);
return keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (form_state,form_record){
return (function (value,app_db__$1,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(core/on-unmount form-record app-db form-props)",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.forms.core.on_unmount.call(null,form_record,app_db__$1,form_props)], null);
});})(form_state,form_record))
,((function (form_state,form_record){
return (function (value,app_db__$1,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"nil",new cljs.core.Keyword(null,"val","val",128701612),null], null);
});})(form_state,form_record))
], null)], null));
});
keechma.toolbox.forms.controller.handle_on_validate = (function keechma$toolbox$forms$controller$handle_on_validate(app_db,forms_config,p__69848){
var vec__69849 = p__69848;
var form_props = cljs.core.nth.call(null,vec__69849,(0),null);
var dirty_only_QMARK_ = cljs.core.nth.call(null,vec__69849,(1),null);
var form_state = keechma.toolbox.forms.controller.get_form_state.call(null,app_db,form_props);
var form_record = keechma.toolbox.forms.controller.get_form_record.call(null,forms_config,form_props);
return cljs.core.assoc_in.call(null,app_db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),keechma.toolbox.forms.core.id_key,new cljs.core.Keyword(null,"states","states",1389013542),form_props], null),keechma.toolbox.forms.controller.mark_dirty_and_validate.call(null,form_record,form_state,dirty_only_QMARK_));
});
keechma.toolbox.forms.controller.handle_on_submit = (function keechma$toolbox$forms$controller$handle_on_submit(app_db,forms_config,data){
var form_props = new cljs.core.Keyword(null,"form-props","form-props",202171605).cljs$core$IFn$_invoke$arity$1(data);
var form_state = keechma.toolbox.forms.controller.get_form_state.call(null,app_db,form_props);
var form_record = keechma.toolbox.forms.controller.get_form_record.call(null,forms_config,form_props);
var new_form_state = cljs.core.assoc.call(null,keechma.toolbox.forms.controller.mark_dirty_and_validate.call(null,form_record,form_state,false),new cljs.core.Keyword(null,"submit-attempted?","submit-attempted?",-251868525),true);
var new_app_db = cljs.core.assoc_in.call(null,app_db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),keechma.toolbox.forms.core.id_key,new cljs.core.Keyword(null,"states","states",1389013542),form_props], null),new_form_state);
if(cljs.core.truth_(keechma.toolbox.forms.helpers.form_invalid_QMARK_.call(null,new_form_state))){
return keechma.toolbox.pipeline.core.commit_BANG_.call(null,new_app_db);
} else {
return keechma.toolbox.pipeline.core.do_BANG_.call(null,keechma.toolbox.pipeline.core.commit_BANG_.call(null,new_app_db),keechma.toolbox.pipeline.core.execute_BANG_.call(null,new cljs.core.Keyword(null,"submit-form","submit-form",-1882310674),data));
}
});
keechma.toolbox.forms.controller.submit_form = (function keechma$toolbox$forms$controller$submit_form(app_db,forms_config,data){
var form_props = new cljs.core.Keyword(null,"form-props","form-props",202171605).cljs$core$IFn$_invoke$arity$1(data);
var form_state = keechma.toolbox.forms.controller.get_form_state.call(null,app_db,form_props);
var form_record = keechma.toolbox.forms.controller.get_form_record.call(null,forms_config,form_props);
var processed_data = keechma.toolbox.forms.core.process_out.call(null,form_record,app_db,form_props,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(form_state));
return keechma.toolbox.forms.controller.promise_or_pipeline.call(null,keechma.toolbox.forms.core.submit_data.call(null,form_record,app_db,form_props,processed_data),((function (form_props,form_state,form_record,processed_data){
return (function (p1__69869_SHARP_){
return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"result","result",1415092211),p1__69869_SHARP_);
});})(form_props,form_state,form_record,processed_data))
);
});
keechma.toolbox.forms.controller.update_form = (function keechma$toolbox$forms$controller$update_form(app_db,forms_config,data){
var form_props = new cljs.core.Keyword(null,"form-props","form-props",202171605).cljs$core$IFn$_invoke$arity$1(data);
var form_state = keechma.toolbox.forms.controller.get_form_state.call(null,app_db,form_props);
var form_record = keechma.toolbox.forms.controller.get_form_record.call(null,forms_config,form_props);
var processed_data = keechma.toolbox.forms.core.process_out.call(null,form_record,app_db,form_props,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(form_state));
return keechma.toolbox.forms.controller.promise_or_pipeline.call(null,keechma.toolbox.forms.core.update_data.call(null,form_record,app_db,form_props,processed_data),((function (form_props,form_state,form_record,processed_data){
return (function (p1__69875_SHARP_){
return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"result","result",1415092211),p1__69875_SHARP_);
});})(form_props,form_state,form_record,processed_data))
);
});
keechma.toolbox.forms.controller.handle_on_update_success = (function keechma$toolbox$forms$controller$handle_on_update_success(app_db,forms_config,value){
var map__69884 = value;
var map__69884__$1 = ((((!((map__69884 == null)))?(((((map__69884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69884):map__69884);
var form_props = cljs.core.get.call(null,map__69884__$1,new cljs.core.Keyword(null,"form-props","form-props",202171605));
var result = cljs.core.get.call(null,map__69884__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var form_state = keechma.toolbox.forms.controller.get_form_state.call(null,app_db,form_props);
var form_record = keechma.toolbox.forms.controller.get_form_record.call(null,forms_config,form_props);
return cljs.core.assoc.call(null,value,new cljs.core.Keyword(null,"data","data",-232669377),keechma.toolbox.forms.core.on_update_success.call(null,form_record,app_db,form_props,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(form_state),result));
});
keechma.toolbox.forms.controller.handle_on_update_error = (function keechma$toolbox$forms$controller$handle_on_update_error(app_db,forms_config,error,value){
var map__69896 = value;
var map__69896__$1 = ((((!((map__69896 == null)))?(((((map__69896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69896):map__69896);
var form_props = cljs.core.get.call(null,map__69896__$1,new cljs.core.Keyword(null,"form-props","form-props",202171605));
var result = cljs.core.get.call(null,map__69896__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var form_state = keechma.toolbox.forms.controller.get_form_state.call(null,app_db,form_props);
var form_record = keechma.toolbox.forms.controller.get_form_record.call(null,forms_config,form_props);
return cljs.core.assoc.call(null,value,new cljs.core.Keyword(null,"data","data",-232669377),keechma.toolbox.forms.core.on_update_error.call(null,form_record,app_db,form_props,result,error));
});
keechma.toolbox.forms.controller.handle_on_submit_success = (function keechma$toolbox$forms$controller$handle_on_submit_success(app_db,forms_config,p__69910){
var map__69911 = p__69910;
var map__69911__$1 = ((((!((map__69911 == null)))?(((((map__69911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69911):map__69911);
var form_props = cljs.core.get.call(null,map__69911__$1,new cljs.core.Keyword(null,"form-props","form-props",202171605));
var result = cljs.core.get.call(null,map__69911__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var form_state = keechma.toolbox.forms.controller.get_form_state.call(null,app_db,form_props);
var form_record = keechma.toolbox.forms.controller.get_form_record.call(null,forms_config,form_props);
return keechma.toolbox.forms.core.on_submit_success.call(null,form_record,app_db,form_props,result);
});
keechma.toolbox.forms.controller.handle_on_submit_error = (function keechma$toolbox$forms$controller$handle_on_submit_error(app_db,forms_config,error,p__69919){
var map__69920 = p__69919;
var map__69920__$1 = ((((!((map__69920 == null)))?(((((map__69920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69920):map__69920);
var form_props = cljs.core.get.call(null,map__69920__$1,new cljs.core.Keyword(null,"form-props","form-props",202171605));
var result = cljs.core.get.call(null,map__69920__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var form_state = keechma.toolbox.forms.controller.get_form_state.call(null,app_db,form_props);
var form_record = keechma.toolbox.forms.controller.get_form_record.call(null,forms_config,form_props);
return keechma.toolbox.forms.core.on_submit_error.call(null,form_record,app_db,form_props,result,error);
});
keechma.toolbox.forms.controller.actions = (function keechma$toolbox$forms$controller$actions(forms_config){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"update-form","update-form",475718790),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"submit-form","submit-form",-1882310674),new cljs.core.Keyword(null,"mount-form","mount-form",-123555853),new cljs.core.Keyword(null,"unmount-form","unmount-form",-11208746),new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"on-validate","on-validate",866266460)],[keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"{:form-props value}",new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form-props","form-props",202171605),value], null)], null);
}),(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/commit!\r\n (update-form-state app-db forms-config :updating nil value))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.commit_BANG_.call(null,keechma.toolbox.forms.controller.update_form_state.call(null,app_db,forms_config,new cljs.core.Keyword(null,"updating","updating",1454028951),null,value))], null);
}),(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(update-form app-db forms-config value)",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.forms.controller.update_form.call(null,app_db,forms_config,value)], null);
}),(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/commit!\r\n (->\r\n  app-db\r\n  (update-form-data\r\n   forms-config\r\n   (handle-on-update-success app-db forms-config value))\r\n  (update-form-state forms-config :updated nil value)))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.commit_BANG_.call(null,keechma.toolbox.forms.controller.update_form_state.call(null,keechma.toolbox.forms.controller.update_form_data.call(null,app_db,forms_config,keechma.toolbox.forms.controller.handle_on_update_success.call(null,app_db,forms_config,value)),forms_config,new cljs.core.Keyword(null,"updated","updated",-1627192056),null,value))], null);
}),(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/send-command! [core/id-key :updated-form] (:form-props value))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.send_command_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.toolbox.forms.core.id_key,new cljs.core.Keyword(null,"updated-form","updated-form",-230141781)], null),new cljs.core.Keyword(null,"form-props","form-props",202171605).cljs$core$IFn$_invoke$arity$1(value))], null);
})], null),new cljs.core.Keyword(null,"rescue","rescue",1135767523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,_,error){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/commit!\r\n (->\r\n  app-db\r\n  (update-form-data\r\n   forms-config\r\n   (handle-on-update-error app-db forms-config error value))\r\n  (update-form-state\r\n   forms-config\r\n   :update-failed\r\n   (:payload error)\r\n   value)))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.commit_BANG_.call(null,keechma.toolbox.forms.controller.update_form_state.call(null,keechma.toolbox.forms.controller.update_form_data.call(null,app_db,forms_config,keechma.toolbox.forms.controller.handle_on_update_error.call(null,app_db,forms_config,error,value)),forms_config,new cljs.core.Keyword(null,"update-failed","update-failed",-471910289),new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(error),value))], null);
})], null)], null)),keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(handle-call app-db forms-config value)",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.forms.controller.handle_call.call(null,app_db,forms_config,value)], null);
})], null)], null)),keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/commit! (handle-on-blur app-db forms-config value))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.commit_BANG_.call(null,keechma.toolbox.forms.controller.handle_on_blur.call(null,app_db,forms_config,value))], null);
})], null)], null)),keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/commit!\r\n (update-form-state app-db forms-config :submitting nil value))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.commit_BANG_.call(null,keechma.toolbox.forms.controller.update_form_state.call(null,app_db,forms_config,new cljs.core.Keyword(null,"submitting","submitting",472950900),null,value))], null);
}),(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(submit-form app-db forms-config value)",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.forms.controller.submit_form.call(null,app_db,forms_config,value)], null);
}),(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/commit!\r\n (update-form-state app-db forms-config :submitted nil value))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.commit_BANG_.call(null,keechma.toolbox.forms.controller.update_form_state.call(null,app_db,forms_config,new cljs.core.Keyword(null,"submitted","submitted",-131658962),null,value))], null);
}),(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(handle-on-submit-success app-db forms-config value)",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.forms.controller.handle_on_submit_success.call(null,app_db,forms_config,value)], null);
})], null),new cljs.core.Keyword(null,"rescue","rescue",1135767523),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,_,error){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/commit!\r\n (update-form-state\r\n  app-db\r\n  forms-config\r\n  :submit-failed\r\n  (:payload error)\r\n  value))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.commit_BANG_.call(null,keechma.toolbox.forms.controller.update_form_state.call(null,app_db,forms_config,new cljs.core.Keyword(null,"submit-failed","submit-failed",252220857),new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(error),value))], null);
}),(function (value,app_db,_,error){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(handle-on-submit-error app-db forms-config error value)",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.forms.controller.handle_on_submit_error.call(null,app_db,forms_config,error,value)], null);
})], null)], null)),keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"{:form-props value}",new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form-props","form-props",202171605),value], null)], null);
}),(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/commit! (premount-form app-db value))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.commit_BANG_.call(null,keechma.toolbox.forms.controller.premount_form.call(null,app_db,value))], null);
}),(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(get-initial-state app-db forms-config value)",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.forms.controller.get_initial_state.call(null,app_db,forms_config,value)], null);
}),(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/commit! (mount-form app-db forms-config value))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.commit_BANG_.call(null,keechma.toolbox.forms.controller.mount_form.call(null,app_db,forms_config,value))], null);
}),(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(handle-on-mount app-db forms-config (:form-props value))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.forms.controller.handle_on_mount.call(null,app_db,forms_config,new cljs.core.Keyword(null,"form-props","form-props",202171605).cljs$core$IFn$_invoke$arity$1(value))], null);
})], null),new cljs.core.Keyword(null,"rescue","rescue",1135767523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,_,error){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/commit!\r\n (update-form-state\r\n  app-db\r\n  forms-config\r\n  :mount-failed\r\n  (:payload error)\r\n  value))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.commit_BANG_.call(null,keechma.toolbox.forms.controller.update_form_state.call(null,app_db,forms_config,new cljs.core.Keyword(null,"mount-failed","mount-failed",804005985),new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(error),value))], null);
})], null)], null)),keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"{:form-props value}",new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form-props","form-props",202171605),value], null)], null);
}),(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(handle-on-unmount app-db forms-config (:form-props value))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.forms.controller.handle_on_unmount.call(null,app_db,forms_config,new cljs.core.Keyword(null,"form-props","form-props",202171605).cljs$core$IFn$_invoke$arity$1(value))], null);
}),(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/commit! (unmount-form app-db value))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.commit_BANG_.call(null,keechma.toolbox.forms.controller.unmount_form.call(null,app_db,value))], null);
})], null)], null)),keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"{:form-props value}",new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form-props","form-props",202171605),value], null)], null);
}),(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(handle-on-submit app-db forms-config value)",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.forms.controller.handle_on_submit.call(null,app_db,forms_config,value)], null);
})], null)], null)),keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(apply pp/commit! (handle-on-change app-db forms-config value))",new cljs.core.Keyword(null,"val","val",128701612),cljs.core.apply.call(null,keechma.toolbox.pipeline.core.commit_BANG_,keechma.toolbox.forms.controller.handle_on_change.call(null,app_db,forms_config,value))], null);
})], null)], null)),keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/commit! (handle-on-validate app-db forms-config value))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.commit_BANG_.call(null,keechma.toolbox.forms.controller.handle_on_validate.call(null,app_db,forms_config,value))], null);
})], null)], null))]);
});
keechma.toolbox.forms.controller.make_controller = (function keechma$toolbox$forms$controller$make_controller(forms_config){
var ctrl = keechma.toolbox.pipeline.controller.constructor$.call(null,(function (){
return true;
}),cljs.core.PersistentArrayMap.EMPTY);
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(ctrl);
var forms_config_with_context = cljs.core.reduce_kv.call(null,((function (ctrl,context){
return (function (m,k,v){
return cljs.core.assoc.call(null,m,k,cljs.core.assoc.call(null,v,new cljs.core.Keyword(null,"context","context",-830191113),context));
});})(ctrl,context))
,cljs.core.PersistentArrayMap.EMPTY,forms_config);
return cljs.core.assoc.call(null,ctrl,new cljs.core.Keyword(null,"pipelines","pipelines",687128919),keechma.toolbox.forms.controller.actions.call(null,forms_config_with_context));
});
keechma.toolbox.forms.controller.register = (function keechma$toolbox$forms$controller$register(var_args){
var G__69967 = arguments.length;
switch (G__69967) {
case 1:
return keechma.toolbox.forms.controller.register.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.toolbox.forms.controller.register.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.toolbox.forms.controller.register.cljs$core$IFn$_invoke$arity$1 = (function (forms_config){
return keechma.toolbox.forms.controller.register.call(null,cljs.core.PersistentArrayMap.EMPTY,forms_config);
});

keechma.toolbox.forms.controller.register.cljs$core$IFn$_invoke$arity$2 = (function (controllers,forms_config){
return cljs.core.assoc.call(null,controllers,keechma.toolbox.forms.core.id_key,keechma.toolbox.forms.controller.make_controller.call(null,forms_config));
});

keechma.toolbox.forms.controller.register.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=controller.js.map?rel=1563552892465
