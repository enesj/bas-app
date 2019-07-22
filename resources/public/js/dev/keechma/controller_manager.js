// Compiled by ClojureScript 1.10.339 {}
goog.provide('keechma.controller_manager');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('keechma.util');
goog.require('keechma.controller');
goog.require('keechma.reporter');
keechma.controller_manager.send_command_to = (function keechma$controller_manager$send_command_to(var_args){
var G__70356 = arguments.length;
switch (G__70356) {
case 4:
return keechma.controller_manager.send_command_to.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return keechma.controller_manager.send_command_to.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.controller_manager.send_command_to.cljs$core$IFn$_invoke$arity$4 = (function (reporter,controller,command_name,args){
return keechma.controller_manager.send_command_to.call(null,reporter,controller,command_name,args,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"route-changed","route-changed",455870141),command_name))?keechma.reporter.cmd_info.call(null):null));
});

keechma.controller_manager.send_command_to.cljs$core$IFn$_invoke$arity$5 = (function (reporter,controller,command_name,args,origin){
var cmd_info = keechma.reporter.with_origin.call(null,origin);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"route-changed","route-changed",455870141),command_name)){
reporter.call(null,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(controller),command_name], null),args,origin,new cljs.core.Keyword(null,"info","info",-317069002));

reporter.call(null,new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(controller),command_name,args,cmd_info,new cljs.core.Keyword(null,"info","info",-317069002));
} else {
reporter.call(null,new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(controller),command_name,args,cmd_info,new cljs.core.Keyword(null,"info","info",-317069002));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"in-chan","in-chan",1839083771).cljs$core$IFn$_invoke$arity$1(controller),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [command_name,args,cmd_info], null));

return controller;
});

keechma.controller_manager.send_command_to.cljs$lang$maxFixedArity = 5;

keechma.controller_manager.route_command_to_controller = (function keechma$controller_manager$route_command_to_controller(reporter,controllers,command_name,command_args,cmd_info){
var vec__70358 = command_name;
var controller_name = cljs.core.nth.call(null,vec__70358,(0),null);
var command_name__$1 = cljs.core.nth.call(null,vec__70358,(1),null);
var controller = cljs.core.get.call(null,controllers,controller_name);
if(cljs.core.truth_(controller)){
return keechma.controller_manager.send_command_to.call(null,reporter,controller,command_name__$1,command_args,cmd_info);
} else {
if(cljs.core.truth_(goog.DEBUG)){
return console.warn("Trying to send command to a controller that is not running",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"controller","controller",2013778659),controller_name,new cljs.core.Keyword(null,"command","command",-894540724),command_name__$1,new cljs.core.Keyword(null,"args","args",1315556576),command_args], null));
} else {
return null;
}
}
});
keechma.controller_manager.report_running_controllers = (function keechma$controller_manager$report_running_controllers(app_db_atom){
var running_controllers = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732)], null));
return cljs.core.reduce.call(null,((function (running_controllers){
return (function (acc,p__70361){
var vec__70362 = p__70361;
var k = cljs.core.nth.call(null,vec__70362,(0),null);
var v = cljs.core.nth.call(null,vec__70362,(1),null);
return cljs.core.assoc.call(null,acc,k,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(v));
});})(running_controllers))
,cljs.core.PersistentArrayMap.EMPTY,running_controllers);
});
keechma.controller_manager.route_change_execution_plan = (function keechma$controller_manager$route_change_execution_plan(route_params,running_controllers,controllers){
var plan = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stop","stop",-2140911342),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"wake","wake",1262361182),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"route-changed","route-changed",455870141),cljs.core.PersistentVector.EMPTY], null);
var running_controller_keys_set = cljs.core.set.call(null,cljs.core.keys.call(null,running_controllers));
return cljs.core.reduce.call(null,((function (plan,running_controller_keys_set){
return (function (acc,p__70365){
var vec__70366 = p__70365;
var topic = cljs.core.nth.call(null,vec__70366,(0),null);
var controller = cljs.core.nth.call(null,vec__70366,(1),null);
var map__70369 = acc;
var map__70369__$1 = ((((!((map__70369 == null)))?(((((map__70369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70369):map__70369);
var stop = cljs.core.get.call(null,map__70369__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var start = cljs.core.get.call(null,map__70369__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var wake = cljs.core.get.call(null,map__70369__$1,new cljs.core.Keyword(null,"wake","wake",1262361182));
var route_changed = cljs.core.get.call(null,map__70369__$1,new cljs.core.Keyword(null,"route-changed","route-changed",455870141));
var new_params = keechma.controller.params.call(null,controller,route_params);
var running_controller = cljs.core.get.call(null,running_controllers,topic);
var prev_params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(running_controller);
if(cljs.core._EQ_.call(null,keechma.controller.SerializedController,cljs.core.type.call(null,running_controller))){
return cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"wake","wake",1262361182),cljs.core.assoc.call(null,wake,topic,new_params));
} else {
if((((prev_params == null)) && ((new_params == null)))){
return acc;
} else {
if((((prev_params == null)) && (!((new_params == null))))){
return cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.assoc.call(null,start,topic,new_params));
} else {
if(((!((prev_params == null))) && ((new_params == null)))){
return cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"stop","stop",-2140911342),cljs.core.assoc.call(null,stop,topic,new_params));
} else {
if(cljs.core.not_EQ_.call(null,new_params,prev_params)){
return cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"stop","stop",-2140911342),cljs.core.assoc.call(null,stop,topic,new_params),new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.assoc.call(null,start,topic,new_params));
} else {
if(cljs.core._EQ_.call(null,new_params,prev_params)){
return cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"route-changed","route-changed",455870141),cljs.core.conj.call(null,route_changed,topic));
} else {
return acc;

}
}
}
}
}
}
});})(plan,running_controller_keys_set))
,plan,controllers);
});
keechma.controller_manager.apply_stop_controllers = (function keechma$controller_manager$apply_stop_controllers(app_db,reporter,stop){
var running_controllers = cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732)], null));
var stop__$1 = stop;
var app_db__$1 = app_db;
while(true){
var temp__5718__auto__ = cljs.core.first.call(null,stop__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var s = temp__5718__auto__;
var vec__70371 = s;
var topic = cljs.core.nth.call(null,vec__70371,(0),null);
var params = cljs.core.nth.call(null,vec__70371,(1),null);
var controller = cljs.core.get.call(null,running_controllers,topic);
var app_out_cmd_info = keechma.reporter.cmd_info.call(null);
var controller_in_cmd_info = keechma.reporter.with_origin.call(null,app_out_cmd_info);
reporter.call(null,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("keechma","lifecycle","keechma/lifecycle",-422788599),new cljs.core.Keyword(null,"stop","stop",-2140911342)], null)], null),params,app_out_cmd_info,new cljs.core.Keyword(null,"info","info",-317069002));

reporter.call(null,new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.Keyword(null,"in","in",-1531184865),topic,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("keechma","lifecycle","keechma/lifecycle",-422788599),new cljs.core.Keyword(null,"stop","stop",-2140911342)], null),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(controller),controller_in_cmd_info,new cljs.core.Keyword(null,"info","info",-317069002));

var new_app_db = keechma.util.dissoc_in.call(null,keechma.controller.stop.call(null,controller,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(controller),app_db__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null));
cljs.core.async.close_BANG_.call(null,new cljs.core.Keyword(null,"in-chan","in-chan",1839083771).cljs$core$IFn$_invoke$arity$1(controller));

var G__70374 = cljs.core.rest.call(null,stop__$1);
var G__70375 = new_app_db;
stop__$1 = G__70374;
app_db__$1 = G__70375;
continue;
} else {
return app_db__$1;
}
break;
}
});
keechma.controller_manager.apply_start_or_wake_controllers = (function keechma$controller_manager$apply_start_or_wake_controllers(action,reporter_action,app_db,reporter,controllers,commands_chan,get_running,active_topics,start_or_wake){
var start_or_wake__$1 = start_or_wake;
var app_db__$1 = app_db;
while(true){
var temp__5718__auto__ = cljs.core.first.call(null,start_or_wake__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var s = temp__5718__auto__;
var vec__70376 = s;
var topic = cljs.core.nth.call(null,vec__70376,(0),null);
var params = cljs.core.nth.call(null,vec__70376,(1),null);
var app_out_cmd_info = keechma.reporter.cmd_info.call(null);
var controller_in_cmd_info = keechma.reporter.with_origin.call(null,app_out_cmd_info);
reporter.call(null,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("keechma","lifecycle","keechma/lifecycle",-422788599),reporter_action], null)], null),params,app_out_cmd_info,new cljs.core.Keyword(null,"info","info",-317069002));

reporter.call(null,new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.Keyword(null,"in","in",-1531184865),topic,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("keechma","lifecycle","keechma/lifecycle",-422788599),reporter_action], null),params,controller_in_cmd_info,new cljs.core.Keyword(null,"info","info",-317069002));

var controller = cljs.core.assoc.call(null,cljs.core.get.call(null,controllers,topic),new cljs.core.Keyword(null,"in-chan","in-chan",1839083771),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"out-chan","out-chan",384315017),commands_chan,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"route-params","route-params",2111411055),new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(app_db__$1),new cljs.core.Keyword(null,"name","name",1843675177),topic,new cljs.core.Keyword(null,"reporter","reporter",-805360621),reporter,new cljs.core.Keyword(null,"running","running",1554969103),cljs.core.partial.call(null,get_running,topic),new cljs.core.Keyword(null,"active-topics","active-topics",1278012558),active_topics);
var new_app_db = cljs.core.assoc_in.call(null,action.call(null,controller,params,app_db__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null),controller);
var G__70379 = cljs.core.rest.call(null,start_or_wake__$1);
var G__70380 = new_app_db;
start_or_wake__$1 = G__70379;
app_db__$1 = G__70380;
continue;
} else {
return app_db__$1;
}
break;
}
});
keechma.controller_manager.apply_start_controllers = cljs.core.partial.call(null,keechma.controller_manager.apply_start_or_wake_controllers,keechma.controller.start,new cljs.core.Keyword(null,"start","start",-355208981));
keechma.controller_manager.apply_wake_controllers = cljs.core.partial.call(null,keechma.controller_manager.apply_start_or_wake_controllers,keechma.controller.wake,new cljs.core.Keyword(null,"wake","wake",1262361182));
keechma.controller_manager.call_handler_on_started_controllers = (function keechma$controller_manager$call_handler_on_started_controllers(app_db_atom,reporter,start){
var seq__70381 = cljs.core.seq.call(null,start);
var chunk__70382 = null;
var count__70383 = (0);
var i__70384 = (0);
while(true){
if((i__70384 < count__70383)){
var vec__70385 = cljs.core._nth.call(null,chunk__70382,i__70384);
var topic = cljs.core.nth.call(null,vec__70385,(0),null);
var _ = cljs.core.nth.call(null,vec__70385,(1),null);
var controller_70391 = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null));
var app_out_cmd_info_70392 = keechma.reporter.cmd_info.call(null);
var controller_in_cmd_info_70393 = keechma.reporter.with_origin.call(null,app_out_cmd_info_70392);
reporter.call(null,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("keechma","lifecycle","keechma/lifecycle",-422788599),new cljs.core.Keyword(null,"handler","handler",-195596612)], null)], null),null,app_out_cmd_info_70392,new cljs.core.Keyword(null,"info","info",-317069002));

reporter.call(null,new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.Keyword(null,"in","in",-1531184865),topic,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("keechma","lifecycle","keechma/lifecycle",-422788599),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),null,controller_in_cmd_info_70393,new cljs.core.Keyword(null,"info","info",-317069002));

keechma.controller.handler.call(null,controller_70391,app_db_atom,new cljs.core.Keyword(null,"in-chan","in-chan",1839083771).cljs$core$IFn$_invoke$arity$1(controller_70391),new cljs.core.Keyword(null,"out-chan","out-chan",384315017).cljs$core$IFn$_invoke$arity$1(controller_70391));


var G__70394 = seq__70381;
var G__70395 = chunk__70382;
var G__70396 = count__70383;
var G__70397 = (i__70384 + (1));
seq__70381 = G__70394;
chunk__70382 = G__70395;
count__70383 = G__70396;
i__70384 = G__70397;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__70381);
if(temp__5720__auto__){
var seq__70381__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70381__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__70381__$1);
var G__70398 = cljs.core.chunk_rest.call(null,seq__70381__$1);
var G__70399 = c__4351__auto__;
var G__70400 = cljs.core.count.call(null,c__4351__auto__);
var G__70401 = (0);
seq__70381 = G__70398;
chunk__70382 = G__70399;
count__70383 = G__70400;
i__70384 = G__70401;
continue;
} else {
var vec__70388 = cljs.core.first.call(null,seq__70381__$1);
var topic = cljs.core.nth.call(null,vec__70388,(0),null);
var _ = cljs.core.nth.call(null,vec__70388,(1),null);
var controller_70402 = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null));
var app_out_cmd_info_70403 = keechma.reporter.cmd_info.call(null);
var controller_in_cmd_info_70404 = keechma.reporter.with_origin.call(null,app_out_cmd_info_70403);
reporter.call(null,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("keechma","lifecycle","keechma/lifecycle",-422788599),new cljs.core.Keyword(null,"handler","handler",-195596612)], null)], null),null,app_out_cmd_info_70403,new cljs.core.Keyword(null,"info","info",-317069002));

reporter.call(null,new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.Keyword(null,"in","in",-1531184865),topic,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("keechma","lifecycle","keechma/lifecycle",-422788599),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),null,controller_in_cmd_info_70404,new cljs.core.Keyword(null,"info","info",-317069002));

keechma.controller.handler.call(null,controller_70402,app_db_atom,new cljs.core.Keyword(null,"in-chan","in-chan",1839083771).cljs$core$IFn$_invoke$arity$1(controller_70402),new cljs.core.Keyword(null,"out-chan","out-chan",384315017).cljs$core$IFn$_invoke$arity$1(controller_70402));


var G__70405 = cljs.core.next.call(null,seq__70381__$1);
var G__70406 = null;
var G__70407 = (0);
var G__70408 = (0);
seq__70381 = G__70405;
chunk__70382 = G__70406;
count__70383 = G__70407;
i__70384 = G__70408;
continue;
}
} else {
return null;
}
}
break;
}
});
keechma.controller_manager.send_route_changed_to_surviving_controllers = (function keechma$controller_manager$send_route_changed_to_surviving_controllers(app_db_atom,reporter,route_changed,route_params){
var seq__70409 = cljs.core.seq.call(null,route_changed);
var chunk__70410 = null;
var count__70411 = (0);
var i__70412 = (0);
while(true){
if((i__70412 < count__70411)){
var topic = cljs.core._nth.call(null,chunk__70410,i__70412);
var controller_70413 = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null));
keechma.controller_manager.send_command_to.call(null,reporter,controller_70413,new cljs.core.Keyword(null,"route-changed","route-changed",455870141),route_params);


var G__70414 = seq__70409;
var G__70415 = chunk__70410;
var G__70416 = count__70411;
var G__70417 = (i__70412 + (1));
seq__70409 = G__70414;
chunk__70410 = G__70415;
count__70411 = G__70416;
i__70412 = G__70417;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__70409);
if(temp__5720__auto__){
var seq__70409__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70409__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__70409__$1);
var G__70418 = cljs.core.chunk_rest.call(null,seq__70409__$1);
var G__70419 = c__4351__auto__;
var G__70420 = cljs.core.count.call(null,c__4351__auto__);
var G__70421 = (0);
seq__70409 = G__70418;
chunk__70410 = G__70419;
count__70411 = G__70420;
i__70412 = G__70421;
continue;
} else {
var topic = cljs.core.first.call(null,seq__70409__$1);
var controller_70422 = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null));
keechma.controller_manager.send_command_to.call(null,reporter,controller_70422,new cljs.core.Keyword(null,"route-changed","route-changed",455870141),route_params);


var G__70423 = cljs.core.next.call(null,seq__70409__$1);
var G__70424 = null;
var G__70425 = (0);
var G__70426 = (0);
seq__70409 = G__70423;
chunk__70410 = G__70424;
count__70411 = G__70425;
i__70412 = G__70426;
continue;
}
} else {
return null;
}
}
break;
}
});
keechma.controller_manager.apply_route_change = (function keechma$controller_manager$apply_route_change(reporter,route_params,app_db_atom,commands_chan,controllers){
reporter.call(null,new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword(null,"out","out",-910545517),null,new cljs.core.Keyword(null,"route-changed","route-changed",455870141),route_params,keechma.reporter.cmd_info.call(null),new cljs.core.Keyword(null,"info","info",-317069002));

var app_db_70429 = cljs.core.deref.call(null,app_db_atom);
var execution_plan_70430 = keechma.controller_manager.route_change_execution_plan.call(null,route_params,cljs.core.get_in.call(null,app_db_70429,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732)], null)),controllers);
var map__70427_70431 = execution_plan_70430;
var map__70427_70432__$1 = ((((!((map__70427_70431 == null)))?(((((map__70427_70431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70427_70431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70427_70431):map__70427_70431);
var stop_70433 = cljs.core.get.call(null,map__70427_70432__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var start_70434 = cljs.core.get.call(null,map__70427_70432__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var wake_70435 = cljs.core.get.call(null,map__70427_70432__$1,new cljs.core.Keyword(null,"wake","wake",1262361182));
var route_changed_70436 = cljs.core.get.call(null,map__70427_70432__$1,new cljs.core.Keyword(null,"route-changed","route-changed",455870141));
var get_running_70437 = ((function (app_db_70429,execution_plan_70430,map__70427_70431,map__70427_70432__$1,stop_70433,start_70434,wake_70435,route_changed_70436){
return (function (topic){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null));
});})(app_db_70429,execution_plan_70430,map__70427_70431,map__70427_70432__$1,stop_70433,start_70434,wake_70435,route_changed_70436))
;
var active_topics_70438 = ((function (app_db_70429,execution_plan_70430,map__70427_70431,map__70427_70432__$1,stop_70433,start_70434,wake_70435,route_changed_70436,get_running_70437){
return (function (){
return cljs.core.keys.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732)], null)));
});})(app_db_70429,execution_plan_70430,map__70427_70431,map__70427_70432__$1,stop_70433,start_70434,wake_70435,route_changed_70436,get_running_70437))
;
cljs.core.reset_BANG_.call(null,app_db_atom,keechma.controller_manager.apply_wake_controllers.call(null,keechma.controller_manager.apply_start_controllers.call(null,keechma.controller_manager.apply_stop_controllers.call(null,cljs.core.assoc.call(null,app_db_70429,new cljs.core.Keyword(null,"route","route",329891309),route_params),reporter,stop_70433),reporter,controllers,commands_chan,get_running_70437,active_topics_70438,start_70434),reporter,controllers,commands_chan,get_running_70437,active_topics_70438,wake_70435));

keechma.controller_manager.call_handler_on_started_controllers.call(null,app_db_atom,reporter,cljs.core.concat.call(null,start_70434,wake_70435));

keechma.controller_manager.send_route_changed_to_surviving_controllers.call(null,app_db_atom,reporter,route_changed_70436,route_params);

return reporter.call(null,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"in","in",-1531184865),null,new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),keechma.controller_manager.report_running_controllers.call(null,app_db_atom),keechma.reporter.cmd_info.call(null),new cljs.core.Keyword(null,"info","info",-317069002));
});
keechma.controller_manager.call_ssr_handler_on_started_controllers = (function keechma$controller_manager$call_ssr_handler_on_started_controllers(app_db_atom,reporter,start,ssr_handler_done_cb){
var wait_chan = cljs.core.async.chan.call(null);
var wait_count = (function (){var wait_count = (0);
var start__$1 = start;
while(true){
var temp__5718__auto__ = cljs.core.first.call(null,start__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var s = temp__5718__auto__;
var vec__70439 = s;
var topic = cljs.core.nth.call(null,vec__70439,(0),null);
var _ = cljs.core.nth.call(null,vec__70439,(1),null);
var controller = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null));
reporter.call(null,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic,new cljs.core.Keyword(null,"ssr-handler","ssr-handler",1473540493)], null),keechma.reporter.cmd_info.call(null),new cljs.core.Keyword(null,"info","info",-317069002));

var ret_val = keechma.controller.ssr_handler.call(null,controller,app_db_atom,((function (wait_count,start__$1,vec__70439,topic,_,controller,s,temp__5718__auto__,wait_chan){
return (function (){
return cljs.core.async.put_BANG_.call(null,wait_chan,true);
});})(wait_count,start__$1,vec__70439,topic,_,controller,s,temp__5718__auto__,wait_chan))
,new cljs.core.Keyword(null,"in-chan","in-chan",1839083771).cljs$core$IFn$_invoke$arity$1(controller),new cljs.core.Keyword(null,"out-chan","out-chan",384315017).cljs$core$IFn$_invoke$arity$1(controller));
if(cljs.core._EQ_.call(null,keechma.controller.not_implemented,ret_val)){
var G__70479 = wait_count;
var G__70480 = cljs.core.rest.call(null,start__$1);
wait_count = G__70479;
start__$1 = G__70480;
continue;
} else {
var G__70481 = (wait_count + (1));
var G__70482 = cljs.core.rest.call(null,start__$1);
wait_count = G__70481;
start__$1 = G__70482;
continue;
}
} else {
return wait_count;
}
break;
}
})();
var c__58857__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58857__auto__,wait_chan,wait_count){
return (function (){
var f__58858__auto__ = (function (){var switch__24619__auto__ = ((function (c__58857__auto__,wait_chan,wait_count){
return (function (state_70461){
var state_val_70462 = (state_70461[(1)]);
if((state_val_70462 === (7))){
var inst_70449 = (state_70461[(2)]);
var state_70461__$1 = state_70461;
if(cljs.core.truth_(inst_70449)){
var statearr_70463_70483 = state_70461__$1;
(statearr_70463_70483[(1)] = (8));

} else {
var statearr_70464_70484 = state_70461__$1;
(statearr_70464_70484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70462 === (1))){
var inst_70442 = wait_count;
var state_70461__$1 = (function (){var statearr_70465 = state_70461;
(statearr_70465[(7)] = inst_70442);

return statearr_70465;
})();
var statearr_70466_70485 = state_70461__$1;
(statearr_70466_70485[(2)] = null);

(statearr_70466_70485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70462 === (4))){
var inst_70446 = ssr_handler_done_cb.call(null);
var state_70461__$1 = state_70461;
var statearr_70467_70486 = state_70461__$1;
(statearr_70467_70486[(2)] = inst_70446);

(statearr_70467_70486[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70462 === (6))){
var inst_70457 = (state_70461[(2)]);
var state_70461__$1 = state_70461;
var statearr_70468_70487 = state_70461__$1;
(statearr_70468_70487[(2)] = inst_70457);

(statearr_70468_70487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70462 === (3))){
var inst_70459 = (state_70461[(2)]);
var state_70461__$1 = state_70461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70461__$1,inst_70459);
} else {
if((state_val_70462 === (2))){
var inst_70442 = (state_70461[(7)]);
var inst_70444 = cljs.core._EQ_.call(null,(0),inst_70442);
var state_70461__$1 = state_70461;
if(inst_70444){
var statearr_70469_70488 = state_70461__$1;
(statearr_70469_70488[(1)] = (4));

} else {
var statearr_70470_70489 = state_70461__$1;
(statearr_70470_70489[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70462 === (9))){
var state_70461__$1 = state_70461;
var statearr_70471_70490 = state_70461__$1;
(statearr_70471_70490[(2)] = null);

(statearr_70471_70490[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70462 === (5))){
var state_70461__$1 = state_70461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70461__$1,(7),wait_chan);
} else {
if((state_val_70462 === (10))){
var inst_70455 = (state_70461[(2)]);
var state_70461__$1 = state_70461;
var statearr_70472_70491 = state_70461__$1;
(statearr_70472_70491[(2)] = inst_70455);

(statearr_70472_70491[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70462 === (8))){
var inst_70442 = (state_70461[(7)]);
var inst_70451 = (inst_70442 - (1));
var inst_70442__$1 = inst_70451;
var state_70461__$1 = (function (){var statearr_70473 = state_70461;
(statearr_70473[(7)] = inst_70442__$1);

return statearr_70473;
})();
var statearr_70474_70492 = state_70461__$1;
(statearr_70474_70492[(2)] = null);

(statearr_70474_70492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__58857__auto__,wait_chan,wait_count))
;
return ((function (switch__24619__auto__,c__58857__auto__,wait_chan,wait_count){
return (function() {
var keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__24620__auto__ = null;
var keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__24620__auto____0 = (function (){
var statearr_70475 = [null,null,null,null,null,null,null,null];
(statearr_70475[(0)] = keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__24620__auto__);

(statearr_70475[(1)] = (1));

return statearr_70475;
});
var keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__24620__auto____1 = (function (state_70461){
while(true){
var ret_value__24621__auto__ = (function (){try{while(true){
var result__24622__auto__ = switch__24619__auto__.call(null,state_70461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24622__auto__;
}
break;
}
}catch (e70476){if((e70476 instanceof Object)){
var ex__24623__auto__ = e70476;
var statearr_70477_70493 = state_70461;
(statearr_70477_70493[(5)] = ex__24623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70494 = state_70461;
state_70461 = G__70494;
continue;
} else {
return ret_value__24621__auto__;
}
break;
}
});
keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__24620__auto__ = function(state_70461){
switch(arguments.length){
case 0:
return keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__24620__auto____0.call(this);
case 1:
return keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__24620__auto____1.call(this,state_70461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__24620__auto____0;
keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__24620__auto____1;
return keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__24620__auto__;
})()
;})(switch__24619__auto__,c__58857__auto__,wait_chan,wait_count))
})();
var state__58859__auto__ = (function (){var statearr_70478 = f__58858__auto__.call(null);
(statearr_70478[(6)] = c__58857__auto__);

return statearr_70478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58859__auto__);
});})(c__58857__auto__,wait_chan,wait_count))
);

return c__58857__auto__;
});
keechma.controller_manager.start_ssr = (function keechma$controller_manager$start_ssr(routes_chan,commands_chan,app_db_atom,controllers,reporter,done_cb){
var app_db = cljs.core.deref.call(null,app_db_atom);
var route_params = new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(app_db);
var execution_plan = keechma.controller_manager.route_change_execution_plan.call(null,route_params,cljs.core.PersistentArrayMap.EMPTY,controllers);
var map__70495 = execution_plan;
var map__70495__$1 = ((((!((map__70495 == null)))?(((((map__70495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70495):map__70495);
var start = cljs.core.get.call(null,map__70495__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var get_running = ((function (app_db,route_params,execution_plan,map__70495,map__70495__$1,start){
return (function (topic){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null));
});})(app_db,route_params,execution_plan,map__70495,map__70495__$1,start))
;
var active_topics = ((function (app_db,route_params,execution_plan,map__70495,map__70495__$1,start,get_running){
return (function (){
return cljs.core.keys.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732)], null)));
});})(app_db,route_params,execution_plan,map__70495,map__70495__$1,start,get_running))
;
var ssr_handler_done_cb = ((function (app_db,route_params,execution_plan,map__70495,map__70495__$1,start,get_running,active_topics){
return (function (){
cljs.core.async.close_BANG_.call(null,commands_chan);

return done_cb.call(null);
});})(app_db,route_params,execution_plan,map__70495,map__70495__$1,start,get_running,active_topics))
;
cljs.core.reset_BANG_.call(null,app_db_atom,keechma.controller_manager.apply_start_controllers.call(null,app_db,reporter,controllers,commands_chan,get_running,active_topics,start));

var c__58857__auto___70534 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58857__auto___70534,app_db,route_params,execution_plan,map__70495,map__70495__$1,start,get_running,active_topics,ssr_handler_done_cb){
return (function (){
var f__58858__auto__ = (function (){var switch__24619__auto__ = ((function (c__58857__auto___70534,app_db,route_params,execution_plan,map__70495,map__70495__$1,start,get_running,active_topics,ssr_handler_done_cb){
return (function (state_70520){
var state_val_70521 = (state_70520[(1)]);
if((state_val_70521 === (1))){
var state_70520__$1 = state_70520;
var statearr_70522_70535 = state_70520__$1;
(statearr_70522_70535[(2)] = null);

(statearr_70522_70535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70521 === (2))){
var state_70520__$1 = state_70520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70520__$1,(4),commands_chan);
} else {
if((state_val_70521 === (3))){
var inst_70518 = (state_70520[(2)]);
var state_70520__$1 = state_70520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70520__$1,inst_70518);
} else {
if((state_val_70521 === (4))){
var inst_70499 = (state_70520[(7)]);
var inst_70499__$1 = (state_70520[(2)]);
var state_70520__$1 = (function (){var statearr_70523 = state_70520;
(statearr_70523[(7)] = inst_70499__$1);

return statearr_70523;
})();
if(cljs.core.truth_(inst_70499__$1)){
var statearr_70524_70536 = state_70520__$1;
(statearr_70524_70536[(1)] = (5));

} else {
var statearr_70525_70537 = state_70520__$1;
(statearr_70525_70537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70521 === (5))){
var inst_70499 = (state_70520[(7)]);
var inst_70504 = cljs.core.nth.call(null,inst_70499,(0),null);
var inst_70505 = cljs.core.nth.call(null,inst_70499,(1),null);
var inst_70506 = cljs.core.nth.call(null,inst_70499,(2),null);
var inst_70507 = cljs.core.deref.call(null,app_db_atom);
var inst_70508 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_70509 = [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732)];
var inst_70510 = (new cljs.core.PersistentVector(null,2,(5),inst_70508,inst_70509,null));
var inst_70511 = cljs.core.get_in.call(null,inst_70507,inst_70510);
var inst_70512 = keechma.controller_manager.route_command_to_controller.call(null,reporter,inst_70511,inst_70504,inst_70505,inst_70506);
var state_70520__$1 = (function (){var statearr_70526 = state_70520;
(statearr_70526[(8)] = inst_70512);

return statearr_70526;
})();
var statearr_70527_70538 = state_70520__$1;
(statearr_70527_70538[(2)] = null);

(statearr_70527_70538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70521 === (6))){
var state_70520__$1 = state_70520;
var statearr_70528_70539 = state_70520__$1;
(statearr_70528_70539[(2)] = null);

(statearr_70528_70539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70521 === (7))){
var inst_70516 = (state_70520[(2)]);
var state_70520__$1 = state_70520;
var statearr_70529_70540 = state_70520__$1;
(statearr_70529_70540[(2)] = inst_70516);

(statearr_70529_70540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__58857__auto___70534,app_db,route_params,execution_plan,map__70495,map__70495__$1,start,get_running,active_topics,ssr_handler_done_cb))
;
return ((function (switch__24619__auto__,c__58857__auto___70534,app_db,route_params,execution_plan,map__70495,map__70495__$1,start,get_running,active_topics,ssr_handler_done_cb){
return (function() {
var keechma$controller_manager$start_ssr_$_state_machine__24620__auto__ = null;
var keechma$controller_manager$start_ssr_$_state_machine__24620__auto____0 = (function (){
var statearr_70530 = [null,null,null,null,null,null,null,null,null];
(statearr_70530[(0)] = keechma$controller_manager$start_ssr_$_state_machine__24620__auto__);

(statearr_70530[(1)] = (1));

return statearr_70530;
});
var keechma$controller_manager$start_ssr_$_state_machine__24620__auto____1 = (function (state_70520){
while(true){
var ret_value__24621__auto__ = (function (){try{while(true){
var result__24622__auto__ = switch__24619__auto__.call(null,state_70520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24622__auto__;
}
break;
}
}catch (e70531){if((e70531 instanceof Object)){
var ex__24623__auto__ = e70531;
var statearr_70532_70541 = state_70520;
(statearr_70532_70541[(5)] = ex__24623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70542 = state_70520;
state_70520 = G__70542;
continue;
} else {
return ret_value__24621__auto__;
}
break;
}
});
keechma$controller_manager$start_ssr_$_state_machine__24620__auto__ = function(state_70520){
switch(arguments.length){
case 0:
return keechma$controller_manager$start_ssr_$_state_machine__24620__auto____0.call(this);
case 1:
return keechma$controller_manager$start_ssr_$_state_machine__24620__auto____1.call(this,state_70520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keechma$controller_manager$start_ssr_$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$controller_manager$start_ssr_$_state_machine__24620__auto____0;
keechma$controller_manager$start_ssr_$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$controller_manager$start_ssr_$_state_machine__24620__auto____1;
return keechma$controller_manager$start_ssr_$_state_machine__24620__auto__;
})()
;})(switch__24619__auto__,c__58857__auto___70534,app_db,route_params,execution_plan,map__70495,map__70495__$1,start,get_running,active_topics,ssr_handler_done_cb))
})();
var state__58859__auto__ = (function (){var statearr_70533 = f__58858__auto__.call(null);
(statearr_70533[(6)] = c__58857__auto___70534);

return statearr_70533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58859__auto__);
});})(c__58857__auto___70534,app_db,route_params,execution_plan,map__70495,map__70495__$1,start,get_running,active_topics,ssr_handler_done_cb))
);


return keechma.controller_manager.call_ssr_handler_on_started_controllers.call(null,app_db_atom,reporter,start,ssr_handler_done_cb);
});
/**
 * Starts the controller manager. Controller manager is the central part
 *   of the application that manages the lifecycle of the controllers and routes
 *   the messages sent to them.
 * 
 *   `start` function receives the following parameters:
 *   
 *   - `route-chan` - Route changes will communicated through this channel
 *   - `route-processor` - Function that will be called on every route change. It can be used to process the route before it's written into app-db
 *   - `commands-chan` - User (UI) commands will be sent through this channel
 *   - `app-db` - application state atom
 *   - `controllers` map of controllers registered for the app
 *   - `reporter` - internal reporter function
 * 
 *   Each time when the new route data comes through the `route-chan` controller
 *   manager will do the following:
 * 
 *   - call the `params` function on each registered controller
 *   - compare the value returned by the `params` function with the value that
 *   was returned last time when the route changes
 *   - based on the comparison it will do one of the following:
 *  - if the last value was `nil` and the current value is `nil` - do nothing
 *  - if the last value was `nil` and the current value is not `nil` - start the controller
 *  - if the last value was not `nil` and the current value is `nil` - stop the controller
 *  - if the last value was not `nil` and the current value is not `nil` and these values are the same - do nothing
 *  - if the last value was not `nil` and the current value is not `nil` and these values are different - restart the controller (stop the current instance and start the new one)
 * 
 *   Controller manager also acts as a command router. Each time a command comes - through the `commands-chan`
 *   the name of the command should look like this `[:controlnler-key :command-name]`. Controller manager will route the `:command-name` command to the appropriate controller based on the `:controller-key`. Controller key is the key under which the controller was registered in the `controllers` argument.
 *   
 */
keechma.controller_manager.start = (function keechma$controller_manager$start(route_chan,route_processor,commands_chan,app_db_atom,controllers,reporter){
var current_route_value = cljs.core.atom.call(null,new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_db_atom)));
reporter.call(null,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"in","in",-1531184865),null,new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.reduce.call(null,((function (current_route_value){
return (function (acc,p__70543){
var vec__70544 = p__70543;
var k = cljs.core.nth.call(null,vec__70544,(0),null);
var _ = cljs.core.nth.call(null,vec__70544,(1),null);
return cljs.core.conj.call(null,acc,k);
});})(current_route_value))
,cljs.core.PersistentVector.EMPTY,controllers),keechma.reporter.cmd_info.call(null),new cljs.core.Keyword(null,"info","info",-317069002));

keechma.controller_manager.apply_route_change.call(null,reporter,route_processor.call(null,new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_db_atom)),cljs.core.deref.call(null,app_db_atom)),app_db_atom,commands_chan,controllers);

var stop_route_block = cljs.core.async.chan.call(null);
var stop_command_block = cljs.core.async.chan.call(null);
var running_chans = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var c__58857__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58857__auto__,stop_route_block,stop_command_block,current_route_value){
return (function (){
var f__58858__auto__ = (function (){var switch__24619__auto__ = ((function (c__58857__auto__,stop_route_block,stop_command_block,current_route_value){
return (function (state_70582){
var state_val_70583 = (state_70582[(1)]);
if((state_val_70583 === (7))){
var inst_70562 = (state_70582[(2)]);
var state_70582__$1 = state_70582;
if(cljs.core.truth_(inst_70562)){
var statearr_70584_70681 = state_70582__$1;
(statearr_70584_70681[(1)] = (8));

} else {
var statearr_70585_70682 = state_70582__$1;
(statearr_70585_70682[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70583 === (1))){
var state_70582__$1 = state_70582;
var statearr_70586_70683 = state_70582__$1;
(statearr_70586_70683[(2)] = null);

(statearr_70586_70683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70583 === (4))){
var inst_70558 = (state_70582[(7)]);
var inst_70555 = (state_70582[(2)]);
var inst_70556 = cljs.core.nth.call(null,inst_70555,(0),null);
var inst_70557 = cljs.core.nth.call(null,inst_70555,(1),null);
var inst_70558__$1 = cljs.core.not_EQ_.call(null,inst_70557,stop_route_block);
var state_70582__$1 = (function (){var statearr_70587 = state_70582;
(statearr_70587[(8)] = inst_70556);

(statearr_70587[(7)] = inst_70558__$1);

return statearr_70587;
})();
if(inst_70558__$1){
var statearr_70588_70684 = state_70582__$1;
(statearr_70588_70684[(1)] = (5));

} else {
var statearr_70589_70685 = state_70582__$1;
(statearr_70589_70685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70583 === (13))){
var inst_70574 = (state_70582[(2)]);
var state_70582__$1 = (function (){var statearr_70590 = state_70582;
(statearr_70590[(9)] = inst_70574);

return statearr_70590;
})();
var statearr_70591_70686 = state_70582__$1;
(statearr_70591_70686[(2)] = null);

(statearr_70591_70686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70583 === (6))){
var inst_70558 = (state_70582[(7)]);
var state_70582__$1 = state_70582;
var statearr_70592_70687 = state_70582__$1;
(statearr_70592_70687[(2)] = inst_70558);

(statearr_70592_70687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70583 === (3))){
var inst_70580 = (state_70582[(2)]);
var state_70582__$1 = state_70582;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70582__$1,inst_70580);
} else {
if((state_val_70583 === (12))){
var state_70582__$1 = state_70582;
var statearr_70593_70688 = state_70582__$1;
(statearr_70593_70688[(2)] = null);

(statearr_70593_70688[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70583 === (2))){
var inst_70551 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_70552 = [stop_route_block,route_chan];
var inst_70553 = (new cljs.core.PersistentVector(null,2,(5),inst_70551,inst_70552,null));
var state_70582__$1 = state_70582;
return cljs.core.async.ioc_alts_BANG_.call(null,state_70582__$1,(4),inst_70553);
} else {
if((state_val_70583 === (11))){
var inst_70566 = (state_70582[(10)]);
var inst_70571 = keechma.controller_manager.apply_route_change.call(null,reporter,inst_70566,app_db_atom,commands_chan,controllers);
var state_70582__$1 = state_70582;
var statearr_70594_70689 = state_70582__$1;
(statearr_70594_70689[(2)] = inst_70571);

(statearr_70594_70689[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70583 === (9))){
var state_70582__$1 = state_70582;
var statearr_70595_70690 = state_70582__$1;
(statearr_70595_70690[(2)] = null);

(statearr_70595_70690[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70583 === (5))){
var inst_70556 = (state_70582[(8)]);
var state_70582__$1 = state_70582;
var statearr_70596_70691 = state_70582__$1;
(statearr_70596_70691[(2)] = inst_70556);

(statearr_70596_70691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70583 === (10))){
var inst_70578 = (state_70582[(2)]);
var state_70582__$1 = state_70582;
var statearr_70597_70692 = state_70582__$1;
(statearr_70597_70692[(2)] = inst_70578);

(statearr_70597_70692[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70583 === (8))){
var inst_70566 = (state_70582[(10)]);
var inst_70556 = (state_70582[(8)]);
var inst_70564 = cljs.core.reset_BANG_.call(null,current_route_value,inst_70556);
var inst_70565 = cljs.core.deref.call(null,app_db_atom);
var inst_70566__$1 = route_processor.call(null,inst_70556,inst_70565);
var inst_70567 = cljs.core.deref.call(null,app_db_atom);
var inst_70568 = new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(inst_70567);
var inst_70569 = cljs.core.not_EQ_.call(null,inst_70566__$1,inst_70568);
var state_70582__$1 = (function (){var statearr_70598 = state_70582;
(statearr_70598[(11)] = inst_70564);

(statearr_70598[(10)] = inst_70566__$1);

return statearr_70598;
})();
if(inst_70569){
var statearr_70599_70693 = state_70582__$1;
(statearr_70599_70693[(1)] = (11));

} else {
var statearr_70600_70694 = state_70582__$1;
(statearr_70600_70694[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__58857__auto__,stop_route_block,stop_command_block,current_route_value))
;
return ((function (switch__24619__auto__,c__58857__auto__,stop_route_block,stop_command_block,current_route_value){
return (function() {
var keechma$controller_manager$start_$_state_machine__24620__auto__ = null;
var keechma$controller_manager$start_$_state_machine__24620__auto____0 = (function (){
var statearr_70601 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70601[(0)] = keechma$controller_manager$start_$_state_machine__24620__auto__);

(statearr_70601[(1)] = (1));

return statearr_70601;
});
var keechma$controller_manager$start_$_state_machine__24620__auto____1 = (function (state_70582){
while(true){
var ret_value__24621__auto__ = (function (){try{while(true){
var result__24622__auto__ = switch__24619__auto__.call(null,state_70582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24622__auto__;
}
break;
}
}catch (e70602){if((e70602 instanceof Object)){
var ex__24623__auto__ = e70602;
var statearr_70603_70695 = state_70582;
(statearr_70603_70695[(5)] = ex__24623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70696 = state_70582;
state_70582 = G__70696;
continue;
} else {
return ret_value__24621__auto__;
}
break;
}
});
keechma$controller_manager$start_$_state_machine__24620__auto__ = function(state_70582){
switch(arguments.length){
case 0:
return keechma$controller_manager$start_$_state_machine__24620__auto____0.call(this);
case 1:
return keechma$controller_manager$start_$_state_machine__24620__auto____1.call(this,state_70582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keechma$controller_manager$start_$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$controller_manager$start_$_state_machine__24620__auto____0;
keechma$controller_manager$start_$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$controller_manager$start_$_state_machine__24620__auto____1;
return keechma$controller_manager$start_$_state_machine__24620__auto__;
})()
;})(switch__24619__auto__,c__58857__auto__,stop_route_block,stop_command_block,current_route_value))
})();
var state__58859__auto__ = (function (){var statearr_70604 = f__58858__auto__.call(null);
(statearr_70604[(6)] = c__58857__auto__);

return statearr_70604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58859__auto__);
});})(c__58857__auto__,stop_route_block,stop_command_block,current_route_value))
);

return c__58857__auto__;
})(),(function (){var c__58857__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58857__auto__,stop_route_block,stop_command_block,current_route_value){
return (function (){
var f__58858__auto__ = (function (){var switch__24619__auto__ = ((function (c__58857__auto__,stop_route_block,stop_command_block,current_route_value){
return (function (state_70650){
var state_val_70651 = (state_70650[(1)]);
if((state_val_70651 === (7))){
var inst_70646 = (state_70650[(2)]);
var state_70650__$1 = state_70650;
var statearr_70652_70697 = state_70650__$1;
(statearr_70652_70697[(2)] = inst_70646);

(statearr_70652_70697[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70651 === (1))){
var state_70650__$1 = state_70650;
var statearr_70653_70698 = state_70650__$1;
(statearr_70653_70698[(2)] = null);

(statearr_70653_70698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70651 === (4))){
var inst_70613 = (state_70650[(2)]);
var inst_70614 = cljs.core.nth.call(null,inst_70613,(0),null);
var inst_70615 = cljs.core.nth.call(null,inst_70613,(1),null);
var inst_70616 = cljs.core._EQ_.call(null,inst_70615,stop_command_block);
var state_70650__$1 = (function (){var statearr_70654 = state_70650;
(statearr_70654[(7)] = inst_70614);

return statearr_70654;
})();
if(inst_70616){
var statearr_70655_70699 = state_70650__$1;
(statearr_70655_70699[(1)] = (5));

} else {
var statearr_70656_70700 = state_70650__$1;
(statearr_70656_70700[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70651 === (13))){
var inst_70640 = (state_70650[(2)]);
var state_70650__$1 = state_70650;
var statearr_70657_70701 = state_70650__$1;
(statearr_70657_70701[(2)] = inst_70640);

(statearr_70657_70701[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70651 === (6))){
var inst_70614 = (state_70650[(7)]);
var inst_70622 = (state_70650[(8)]);
var inst_70622__$1 = cljs.core.nth.call(null,inst_70614,(0),null);
var inst_70623 = cljs.core.nth.call(null,inst_70614,(1),null);
var inst_70624 = cljs.core.nth.call(null,inst_70614,(2),null);
var inst_70625 = cljs.core.deref.call(null,app_db_atom);
var inst_70626 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_70627 = [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732)];
var inst_70628 = (new cljs.core.PersistentVector(null,2,(5),inst_70626,inst_70627,null));
var inst_70629 = cljs.core.get_in.call(null,inst_70625,inst_70628);
var inst_70630 = (inst_70622__$1 == null);
var inst_70631 = cljs.core.not.call(null,inst_70630);
var state_70650__$1 = (function (){var statearr_70658 = state_70650;
(statearr_70658[(9)] = inst_70624);

(statearr_70658[(10)] = inst_70629);

(statearr_70658[(8)] = inst_70622__$1);

(statearr_70658[(11)] = inst_70623);

return statearr_70658;
})();
if(inst_70631){
var statearr_70659_70702 = state_70650__$1;
(statearr_70659_70702[(1)] = (8));

} else {
var statearr_70660_70703 = state_70650__$1;
(statearr_70660_70703[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70651 === (3))){
var inst_70648 = (state_70650[(2)]);
var state_70650__$1 = state_70650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70650__$1,inst_70648);
} else {
if((state_val_70651 === (12))){
var inst_70624 = (state_70650[(9)]);
var inst_70629 = (state_70650[(10)]);
var inst_70622 = (state_70650[(8)]);
var inst_70623 = (state_70650[(11)]);
var inst_70638 = keechma.controller_manager.route_command_to_controller.call(null,reporter,inst_70629,inst_70622,inst_70623,inst_70624);
var state_70650__$1 = state_70650;
var statearr_70661_70704 = state_70650__$1;
(statearr_70661_70704[(2)] = inst_70638);

(statearr_70661_70704[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70651 === (2))){
var inst_70609 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_70610 = [stop_command_block,commands_chan];
var inst_70611 = (new cljs.core.PersistentVector(null,2,(5),inst_70609,inst_70610,null));
var state_70650__$1 = state_70650;
return cljs.core.async.ioc_alts_BANG_.call(null,state_70650__$1,(4),inst_70611);
} else {
if((state_val_70651 === (11))){
var inst_70635 = cljs.core.deref.call(null,current_route_value);
var inst_70636 = cljs.core.async.put_BANG_.call(null,route_chan,inst_70635);
var state_70650__$1 = state_70650;
var statearr_70662_70705 = state_70650__$1;
(statearr_70662_70705[(2)] = inst_70636);

(statearr_70662_70705[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70651 === (9))){
var state_70650__$1 = state_70650;
var statearr_70663_70706 = state_70650__$1;
(statearr_70663_70706[(2)] = null);

(statearr_70663_70706[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70651 === (5))){
var state_70650__$1 = state_70650;
var statearr_70664_70707 = state_70650__$1;
(statearr_70664_70707[(2)] = null);

(statearr_70664_70707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70651 === (10))){
var inst_70643 = (state_70650[(2)]);
var state_70650__$1 = (function (){var statearr_70665 = state_70650;
(statearr_70665[(12)] = inst_70643);

return statearr_70665;
})();
var statearr_70666_70708 = state_70650__$1;
(statearr_70666_70708[(2)] = null);

(statearr_70666_70708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70651 === (8))){
var inst_70622 = (state_70650[(8)]);
var inst_70633 = cljs.core._EQ_.call(null,new cljs.core.Keyword("keechma.controller-manager","reroute","keechma.controller-manager/reroute",-463838217),inst_70622);
var state_70650__$1 = state_70650;
if(inst_70633){
var statearr_70667_70709 = state_70650__$1;
(statearr_70667_70709[(1)] = (11));

} else {
var statearr_70668_70710 = state_70650__$1;
(statearr_70668_70710[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__58857__auto__,stop_route_block,stop_command_block,current_route_value))
;
return ((function (switch__24619__auto__,c__58857__auto__,stop_route_block,stop_command_block,current_route_value){
return (function() {
var keechma$controller_manager$start_$_state_machine__24620__auto__ = null;
var keechma$controller_manager$start_$_state_machine__24620__auto____0 = (function (){
var statearr_70669 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70669[(0)] = keechma$controller_manager$start_$_state_machine__24620__auto__);

(statearr_70669[(1)] = (1));

return statearr_70669;
});
var keechma$controller_manager$start_$_state_machine__24620__auto____1 = (function (state_70650){
while(true){
var ret_value__24621__auto__ = (function (){try{while(true){
var result__24622__auto__ = switch__24619__auto__.call(null,state_70650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24622__auto__;
}
break;
}
}catch (e70670){if((e70670 instanceof Object)){
var ex__24623__auto__ = e70670;
var statearr_70671_70711 = state_70650;
(statearr_70671_70711[(5)] = ex__24623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70712 = state_70650;
state_70650 = G__70712;
continue;
} else {
return ret_value__24621__auto__;
}
break;
}
});
keechma$controller_manager$start_$_state_machine__24620__auto__ = function(state_70650){
switch(arguments.length){
case 0:
return keechma$controller_manager$start_$_state_machine__24620__auto____0.call(this);
case 1:
return keechma$controller_manager$start_$_state_machine__24620__auto____1.call(this,state_70650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keechma$controller_manager$start_$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$controller_manager$start_$_state_machine__24620__auto____0;
keechma$controller_manager$start_$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$controller_manager$start_$_state_machine__24620__auto____1;
return keechma$controller_manager$start_$_state_machine__24620__auto__;
})()
;})(switch__24619__auto__,c__58857__auto__,stop_route_block,stop_command_block,current_route_value))
})();
var state__58859__auto__ = (function (){var statearr_70672 = f__58858__auto__.call(null);
(statearr_70672[(6)] = c__58857__auto__);

return statearr_70672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58859__auto__);
});})(c__58857__auto__,stop_route_block,stop_command_block,current_route_value))
);

return c__58857__auto__;
})()], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"running-chans","running-chans",-1708113388),running_chans,new cljs.core.Keyword(null,"stop","stop",-2140911342),((function (stop_route_block,stop_command_block,running_chans,current_route_value){
return (function (){
reporter.call(null,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"in","in",-1531184865),null,new cljs.core.Keyword(null,"stop","stop",-2140911342),null,keechma.reporter.cmd_info.call(null),new cljs.core.Keyword(null,"info","info",-317069002));

var controllers__$1 = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732)], null));
cljs.core.async.close_BANG_.call(null,stop_route_block);

cljs.core.async.close_BANG_.call(null,stop_command_block);

var seq__70673_70713 = cljs.core.seq.call(null,running_chans);
var chunk__70674_70714 = null;
var count__70675_70715 = (0);
var i__70676_70716 = (0);
while(true){
if((i__70676_70716 < count__70675_70715)){
var running_70717 = cljs.core._nth.call(null,chunk__70674_70714,i__70676_70716);
cljs.core.async.close_BANG_.call(null,running_70717);


var G__70718 = seq__70673_70713;
var G__70719 = chunk__70674_70714;
var G__70720 = count__70675_70715;
var G__70721 = (i__70676_70716 + (1));
seq__70673_70713 = G__70718;
chunk__70674_70714 = G__70719;
count__70675_70715 = G__70720;
i__70676_70716 = G__70721;
continue;
} else {
var temp__5720__auto___70722 = cljs.core.seq.call(null,seq__70673_70713);
if(temp__5720__auto___70722){
var seq__70673_70723__$1 = temp__5720__auto___70722;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70673_70723__$1)){
var c__4351__auto___70724 = cljs.core.chunk_first.call(null,seq__70673_70723__$1);
var G__70725 = cljs.core.chunk_rest.call(null,seq__70673_70723__$1);
var G__70726 = c__4351__auto___70724;
var G__70727 = cljs.core.count.call(null,c__4351__auto___70724);
var G__70728 = (0);
seq__70673_70713 = G__70725;
chunk__70674_70714 = G__70726;
count__70675_70715 = G__70727;
i__70676_70716 = G__70728;
continue;
} else {
var running_70729 = cljs.core.first.call(null,seq__70673_70723__$1);
cljs.core.async.close_BANG_.call(null,running_70729);


var G__70730 = cljs.core.next.call(null,seq__70673_70723__$1);
var G__70731 = null;
var G__70732 = (0);
var G__70733 = (0);
seq__70673_70713 = G__70730;
chunk__70674_70714 = G__70731;
count__70675_70715 = G__70732;
i__70676_70716 = G__70733;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,app_db_atom,keechma.controller_manager.apply_stop_controllers.call(null,cljs.core.deref.call(null,app_db_atom),reporter,cljs.core.reduce.call(null,((function (controllers__$1,stop_route_block,stop_command_block,running_chans,current_route_value){
return (function (acc,p__70677){
var vec__70678 = p__70677;
var key = cljs.core.nth.call(null,vec__70678,(0),null);
var controller = cljs.core.nth.call(null,vec__70678,(1),null);
return cljs.core.assoc.call(null,acc,key,cljs.core.PersistentArrayMap.EMPTY);
});})(controllers__$1,stop_route_block,stop_command_block,running_chans,current_route_value))
,cljs.core.PersistentArrayMap.EMPTY,controllers__$1)));
});})(stop_route_block,stop_command_block,running_chans,current_route_value))
], null);
});

//# sourceMappingURL=controller_manager.js.map?rel=1563552893989
