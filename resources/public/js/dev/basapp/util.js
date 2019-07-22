// Compiled by ClojureScript 1.10.339 {}
goog.provide('basapp.util');
goog.require('cljs.core');
goog.require('cljsjs.moment');
goog.require('oops.core');
basapp.util.format_ts = (function basapp$util$format_ts(ts){
if(cljs.core.truth_(ts)){
var target_obj_40588 = moment(ts);
var _STAR_runtime_state_STAR_40592 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_40588,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_40590 = [target_obj_40588,(function (){var next_obj_40591 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_40588,(0),"format",true,true,false))?(target_obj_40588["format"]):null);
return next_obj_40591;
})()];
var fn_40589 = (call_info_40590[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_40589,oops.state.get_last_access_modifier.call(null))){
if(!((fn_40589 == null))){
return fn_40589.call((call_info_40590[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_40592;
}} else {
return null;
}
});

//# sourceMappingURL=util.js.map?rel=1563552867624
