// Compiled by ClojureScript 1.10.339 {}
goog.provide('oops.core');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.object');
goog.require('oops.sdefs');
goog.require('oops.state');
goog.require('oops.config');
goog.require('oops.messages');
goog.require('oops.helpers');
goog.require('oops.schema');
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_.call(null)){
return null;
} else {
oops.state.mark_error_reported_BANG_.call(null);

var G__28933 = oops.config.get_error_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__28933)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__28933)){
return oops.state.get_console_reporter.call(null).call(null,(console["error"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__28933)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28933)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__28939 = oops.config.get_warning_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__28939)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__28939)){
return oops.state.get_console_reporter.call(null).call(null,(console["warn"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__28939)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28939)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4534__auto__ = [];
var len__4531__auto___28954 = arguments.length;
var i__4532__auto___28955 = (0);
while(true){
if((i__4532__auto___28955 < len__4531__auto___28954)){
args__4534__auto__.push((arguments[i__4532__auto___28955]));

var G__28960 = (i__4532__auto___28955 + (1));
i__4532__auto___28955 = G__28960;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__28947){
var vec__28948 = p__28947;
var info = cljs.core.nth.call(null,vec__28948,(0),null);

if(cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),msg_id)){
} else {
var G__28952_28961 = oops.config.get_config_key.call(null,msg_id);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),G__28952_28961)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),G__28952_28961)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,false,G__28952_28961)){
} else {
if(cljs.core._EQ_.call(null,null,G__28952_28961)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28952_28961)].join('')));

}
}
}
}
}

return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq28945){
var G__28946 = cljs.core.first.call(null,seq28945);
var seq28945__$1 = cljs.core.next.call(null,seq28945);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28946,seq28945__$1);
});

oops.core.validate_object_access_dynamically = (function oops$core$validate_object_access_dynamically(obj,mode,key,push_QMARK_,check_key_read_QMARK_,check_key_write_QMARK_){
if(((((cljs.core._EQ_.call(null,mode,(0))) && ((void 0 === obj))))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"undefined",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):((((cljs.core._EQ_.call(null,mode,(0))) && ((obj == null))))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"nil",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isBoolean(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"boolean",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isNumber(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"number",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isString(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"string",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):((cljs.core.not.call(null,goog.isObject(obj)))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"non-object",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isDateLike(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"date-like",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_type_QMARK_.call(null,obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs type",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_instance_QMARK_.call(null,obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs instance",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return true;
})()
):true
)))))))))){
if(cljs.core.truth_(push_QMARK_)){
oops.state.add_key_to_current_path_BANG_.call(null,key);

oops.state.set_last_access_modifier_BANG_.call(null,mode);
} else {
}

var and__3938__auto__ = (cljs.core.truth_(check_key_read_QMARK_)?((((cljs.core._EQ_.call(null,mode,(0))) && (cljs.core.not.call(null,goog.object.containsKey(obj,key)))))?oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null)):true):true);
if(cljs.core.truth_(and__3938__auto__)){
if(cljs.core.truth_(check_key_write_QMARK_)){
var temp__5722__auto__ = oops.helpers.get_property_descriptor.call(null,obj,key);
if((temp__5722__auto__ == null)){
if(cljs.core.truth_(oops.helpers.is_object_frozen_QMARK_.call(null,obj))){
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-is-frozen","object-is-frozen",-1391578096),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
} else {
if(cljs.core.truth_(oops.helpers.is_object_sealed_QMARK_.call(null,obj))){
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-is-sealed","object-is-sealed",-1791813926),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
} else {
return true;

}
}
} else {
var descriptor_28966 = temp__5722__auto__;
var temp__5722__auto____$1 = oops.helpers.determine_property_non_writable_reason.call(null,descriptor_28966);
if((temp__5722__auto____$1 == null)){
return true;
} else {
var reason_28967 = temp__5722__auto____$1;
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_.call(null,obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_28967,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
}
}
} else {
return true;
}
} else {
return and__3938__auto__;
}
} else {
return null;
}
});
oops.core.validate_fn_call_dynamically = (function oops$core$validate_fn_call_dynamically(fn,mode){
if(((cljs.core._EQ_.call(null,mode,(1))) && ((fn == null)))){
return true;
} else {
if(cljs.core.truth_(goog.isFunction(fn))){
return true;
} else {
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"soft?","soft?",-1339668477),cljs.core._EQ_.call(null,mode,(1)),new cljs.core.Keyword(null,"fn","fn",-1175266204),fn,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

}
}
});
oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_28979 = oops.config.get_child_factory.call(null);
var child_factory_28979__$1 = (function (){var G__28980 = child_factory_28979;
var G__28980__$1 = (((G__28980 instanceof cljs.core.Keyword))?G__28980.fqn:null);
switch (G__28980__$1) {
case "js-obj":
return ((function (G__28980,G__28980__$1,child_factory_28979){
return (function (){
return {};
});
;})(G__28980,G__28980__$1,child_factory_28979))

break;
case "js-array":
return ((function (G__28980,G__28980__$1,child_factory_28979){
return (function (){
return [];
});
;})(G__28980,G__28980__$1,child_factory_28979))

break;
default:
return child_factory_28979;

}
})();

var child_obj_28978 = child_factory_28979__$1.call(null,obj,key);
if(oops.core.validate_object_access_dynamically.call(null,obj,(2),key,false,true,true)){
(obj[key] = child_obj_28978);
} else {
}

return child_obj_28978;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_28984 = [];
oops.schema.prepare_simple_path_BANG_.call(null,selector,selector_path_28984);

return selector_path_28984;
} else {
var selector_path_28985 = [];
oops.schema.prepare_path_BANG_.call(null,selector,selector_path_28985);

return selector_path_28985;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5724__auto__ = oops.schema.check_dynamic_path_BANG_.call(null,path,op);
if((temp__5724__auto__ == null)){
return null;
} else {
var issue_28986 = temp__5724__auto__;
return cljs.core.apply.call(null,oops.core.report_if_needed_dynamically,issue_28986);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
if(oops.core.validate_object_access_dynamically.call(null,obj,mode,key,true,true,false)){
return (obj[key]);
} else {
return null;
}
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
if(oops.core.validate_object_access_dynamically.call(null,obj,mode,key,true,true,true)){
return (obj[key] = val);
} else {
return null;
}
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_28995 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_28995,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_28988 = (function (){var path_28987 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_28987,(0));

return path_28987;
})();
var len_28989 = path_28988.length;
var i_28990 = (0);
var obj_28991 = obj;
while(true){
if((i_28990 < len_28989)){
var mode_28992 = (path_28988[i_28990]);
var key_28993 = (path_28988[(i_28990 + (1))]);
var next_obj_28994 = oops.core.get_key_dynamically.call(null,obj_28991,key_28993,mode_28992);
var G__28996 = mode_28992;
switch (G__28996) {
case (0):
var G__28998 = (i_28990 + (2));
var G__28999 = next_obj_28994;
i_28990 = G__28998;
obj_28991 = G__28999;
continue;

break;
case (1):
if(!((next_obj_28994 == null))){
var G__29000 = (i_28990 + (2));
var G__29001 = next_obj_28994;
i_28990 = G__29000;
obj_28991 = G__29001;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_28994 == null))){
var G__29002 = (i_28990 + (2));
var G__29003 = next_obj_28994;
i_28990 = G__29002;
obj_28991 = G__29003;
continue;
} else {
var G__29004 = (i_28990 + (2));
var G__29005 = oops.core.punch_key_dynamically_BANG_.call(null,obj_28991,key_28993);
i_28990 = G__29004;
obj_28991 = G__29005;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28996)].join('')));

}
} else {
return obj_28991;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_29031 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_29031,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_29007 = (function (){var path_29006 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_29006,(0));

return path_29006;
})();
var len_29008 = path_29007.length;
if((len_29008 < (4))){
return [obj,(function (){var path_29010 = path_29007;
var len_29011 = path_29010.length;
var i_29012 = (0);
var obj_29013 = obj;
while(true){
if((i_29012 < len_29011)){
var mode_29014 = (path_29010[i_29012]);
var key_29015 = (path_29010[(i_29012 + (1))]);
var next_obj_29016 = oops.core.get_key_dynamically.call(null,obj_29013,key_29015,mode_29014);
var G__29037 = mode_29014;
switch (G__29037) {
case (0):
var G__29042 = (i_29012 + (2));
var G__29043 = next_obj_29016;
i_29012 = G__29042;
obj_29013 = G__29043;
continue;

break;
case (1):
if(!((next_obj_29016 == null))){
var G__29044 = (i_29012 + (2));
var G__29045 = next_obj_29016;
i_29012 = G__29044;
obj_29013 = G__29045;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_29016 == null))){
var G__29046 = (i_29012 + (2));
var G__29047 = next_obj_29016;
i_29012 = G__29046;
obj_29013 = G__29047;
continue;
} else {
var G__29051 = (i_29012 + (2));
var G__29052 = oops.core.punch_key_dynamically_BANG_.call(null,obj_29013,key_29015);
i_29012 = G__29051;
obj_29013 = G__29052;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29037)].join('')));

}
} else {
return obj_29013;
}
break;
}
})()];
} else {
var target_obj_29009 = (function (){var path_29017 = path_29007.slice((0),(len_29008 - (2)));
var len_29018 = path_29017.length;
var i_29019 = (0);
var obj_29020 = obj;
while(true){
if((i_29019 < len_29018)){
var mode_29021 = (path_29017[i_29019]);
var key_29022 = (path_29017[(i_29019 + (1))]);
var next_obj_29023 = oops.core.get_key_dynamically.call(null,obj_29020,key_29022,mode_29021);
var G__29039 = mode_29021;
switch (G__29039) {
case (0):
var G__29054 = (i_29019 + (2));
var G__29055 = next_obj_29023;
i_29019 = G__29054;
obj_29020 = G__29055;
continue;

break;
case (1):
if(!((next_obj_29023 == null))){
var G__29056 = (i_29019 + (2));
var G__29057 = next_obj_29023;
i_29019 = G__29056;
obj_29020 = G__29057;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_29023 == null))){
var G__29058 = (i_29019 + (2));
var G__29059 = next_obj_29023;
i_29019 = G__29058;
obj_29020 = G__29059;
continue;
} else {
var G__29060 = (i_29019 + (2));
var G__29061 = oops.core.punch_key_dynamically_BANG_.call(null,obj_29020,key_29022);
i_29019 = G__29060;
obj_29020 = G__29061;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29039)].join('')));

}
} else {
return obj_29020;
}
break;
}
})();
return [target_obj_29009,(function (){var path_29024 = [(path_29007[(len_29008 - (2))]),(path_29007[(len_29008 - (1))])];
var len_29025 = path_29024.length;
var i_29026 = (0);
var obj_29027 = target_obj_29009;
while(true){
if((i_29026 < len_29025)){
var mode_29028 = (path_29024[i_29026]);
var key_29029 = (path_29024[(i_29026 + (1))]);
var next_obj_29030 = oops.core.get_key_dynamically.call(null,obj_29027,key_29029,mode_29028);
var G__29040 = mode_29028;
switch (G__29040) {
case (0):
var G__29064 = (i_29026 + (2));
var G__29065 = next_obj_29030;
i_29026 = G__29064;
obj_29027 = G__29065;
continue;

break;
case (1):
if(!((next_obj_29030 == null))){
var G__29066 = (i_29026 + (2));
var G__29067 = next_obj_29030;
i_29026 = G__29066;
obj_29027 = G__29067;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_29030 == null))){
var G__29068 = (i_29026 + (2));
var G__29069 = next_obj_29030;
i_29026 = G__29068;
obj_29027 = G__29069;
continue;
} else {
var G__29070 = (i_29026 + (2));
var G__29071 = oops.core.punch_key_dynamically_BANG_.call(null,obj_29027,key_29029);
i_29026 = G__29070;
obj_29027 = G__29071;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29040)].join('')));

}
} else {
return obj_29027;
}
break;
}
})()];
}
} else {
return null;
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_29089 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_29089,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_29076 = (function (){var path_29075 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_29075,(1));

return path_29075;
})();
var len_29079 = path_29076.length;
var parent_obj_path_29080 = path_29076.slice((0),(len_29079 - (2)));
var key_29077 = (path_29076[(len_29079 - (1))]);
var mode_29078 = (path_29076[(len_29079 - (2))]);
var parent_obj_29081 = (function (){var path_29082 = parent_obj_path_29080;
var len_29083 = path_29082.length;
var i_29084 = (0);
var obj_29085 = obj;
while(true){
if((i_29084 < len_29083)){
var mode_29086 = (path_29082[i_29084]);
var key_29087 = (path_29082[(i_29084 + (1))]);
var next_obj_29088 = oops.core.get_key_dynamically.call(null,obj_29085,key_29087,mode_29086);
var G__29093 = mode_29086;
switch (G__29093) {
case (0):
var G__29116 = (i_29084 + (2));
var G__29117 = next_obj_29088;
i_29084 = G__29116;
obj_29085 = G__29117;
continue;

break;
case (1):
if(!((next_obj_29088 == null))){
var G__29120 = (i_29084 + (2));
var G__29121 = next_obj_29088;
i_29084 = G__29120;
obj_29085 = G__29121;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_29088 == null))){
var G__29123 = (i_29084 + (2));
var G__29124 = next_obj_29088;
i_29084 = G__29123;
obj_29085 = G__29124;
continue;
} else {
var G__29125 = (i_29084 + (2));
var G__29126 = oops.core.punch_key_dynamically_BANG_.call(null,obj_29085,key_29087);
i_29084 = G__29125;
obj_29085 = G__29126;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29093)].join('')));

}
} else {
return obj_29085;
}
break;
}
})();
return oops.core.set_key_dynamically.call(null,parent_obj_29081,key_29077,val,mode_29078);
} else {
return null;
}
});

//# sourceMappingURL=core.js.map?rel=1563552857105
