// Compiled by ClojureScript 1.10.339 {}
goog.provide('keechma.toolbox.dataloader.controller');
goog.require('cljs.core');
goog.require('keechma.controller');
goog.require('cljs.core.async');
goog.require('keechma.toolbox.dataloader.core');
goog.require('keechma.toolbox.pipeline.core');
goog.require('promesa.core');
goog.require('keechma.toolbox.tasks');
keechma.toolbox.dataloader.controller.dataloader_status_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword("keechma.toolbox.dataloader.controller","status","keechma.toolbox.dataloader.controller/status",-1811543957)], null);
keechma.toolbox.dataloader.controller.wait_dataloader_pipeline_BANG_ = (function keechma$toolbox$dataloader$controller$wait_dataloader_pipeline_BANG_(){
return keechma.toolbox.tasks.block_until_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.toolbox.dataloader.core.id_key,cljs.core.gensym.call(null,new cljs.core.Keyword(null,"dataloader","dataloader",1084918675))], null),(function (app_db){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),cljs.core.get_in.call(null,app_db,keechma.toolbox.dataloader.controller.dataloader_status_key));
}));
});
keechma.toolbox.dataloader.controller.run_dataloader_BANG_ = (function keechma$toolbox$dataloader$controller$run_dataloader_BANG_(var_args){
var G__60372 = arguments.length;
switch (G__60372) {
case 0:
return keechma.toolbox.dataloader.controller.run_dataloader_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return keechma.toolbox.dataloader.controller.run_dataloader_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.toolbox.dataloader.controller.run_dataloader_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return keechma.toolbox.dataloader.controller.run_dataloader_BANG_.call(null,null);
});

keechma.toolbox.dataloader.controller.run_dataloader_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (invalid_datasources){
return keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/commit! (assoc-in app-db dataloader-status-key :pending))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.commit_BANG_.call(null,cljs.core.assoc_in.call(null,app_db,keechma.toolbox.dataloader.controller.dataloader_status_key,new cljs.core.Keyword(null,"pending","pending",-220036727)))], null);
}),(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/send-command! [dataloader/id-key :load-data] invalid-datasources)",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.send_command_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.toolbox.dataloader.core.id_key,new cljs.core.Keyword(null,"load-data","load-data",-1806350928)], null),invalid_datasources)], null);
})], null)], null));
});

keechma.toolbox.dataloader.controller.run_dataloader_BANG_.cljs$lang$maxFixedArity = 1;

keechma.toolbox.dataloader.controller.broadcast = (function keechma$toolbox$dataloader$controller$broadcast(controller,app_db,command,payload){
var running_controllers_keys = cljs.core.keys.call(null,cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732)], null)));
var seq__60382 = cljs.core.seq.call(null,running_controllers_keys);
var chunk__60383 = null;
var count__60384 = (0);
var i__60385 = (0);
while(true){
if((i__60385 < count__60384)){
var c = cljs.core._nth.call(null,chunk__60383,i__60385);
if(cljs.core.not_EQ_.call(null,c,keechma.toolbox.dataloader.core.id_key)){
keechma.controller.send_command.call(null,controller,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,command], null),payload);
} else {
}


var G__60390 = seq__60382;
var G__60391 = chunk__60383;
var G__60392 = count__60384;
var G__60393 = (i__60385 + (1));
seq__60382 = G__60390;
chunk__60383 = G__60391;
count__60384 = G__60392;
i__60385 = G__60393;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__60382);
if(temp__5720__auto__){
var seq__60382__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60382__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__60382__$1);
var G__60396 = cljs.core.chunk_rest.call(null,seq__60382__$1);
var G__60397 = c__4351__auto__;
var G__60398 = cljs.core.count.call(null,c__4351__auto__);
var G__60399 = (0);
seq__60382 = G__60396;
chunk__60383 = G__60397;
count__60384 = G__60398;
i__60385 = G__60399;
continue;
} else {
var c = cljs.core.first.call(null,seq__60382__$1);
if(cljs.core.not_EQ_.call(null,c,keechma.toolbox.dataloader.core.id_key)){
keechma.controller.send_command.call(null,controller,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,command], null),payload);
} else {
}


var G__60403 = cljs.core.next.call(null,seq__60382__$1);
var G__60404 = null;
var G__60405 = (0);
var G__60406 = (0);
seq__60382 = G__60403;
chunk__60383 = G__60404;
count__60384 = G__60405;
i__60385 = G__60406;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
keechma.toolbox.dataloader.controller.Controller = (function (datasources,dataloader,__meta,__extmap,__hash){
this.datasources = datasources;
this.dataloader = dataloader;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k60410,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__60421 = k60410;
var G__60421__$1 = (((G__60421 instanceof cljs.core.Keyword))?G__60421.fqn:null);
switch (G__60421__$1) {
case "datasources":
return self__.datasources;

break;
case "dataloader":
return self__.dataloader;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k60410,else__4206__auto__);

}
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#keechma.toolbox.dataloader.controller.Controller{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"datasources","datasources",-44123695),self__.datasources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dataloader","dataloader",1084918675),self__.dataloader],null))], null),self__.__extmap));
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60409){
var self__ = this;
var G__60409__$1 = this;
return (new cljs.core.RecordIter((0),G__60409__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datasources","datasources",-44123695),new cljs.core.Keyword(null,"dataloader","dataloader",1084918675)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new keechma.toolbox.dataloader.controller.Controller(self__.datasources,self__.dataloader,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (1993883316 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60411,other60412){
var self__ = this;
var this60411__$1 = this;
return ((!((other60412 == null))) && ((this60411__$1.constructor === other60412.constructor)) && (cljs.core._EQ_.call(null,this60411__$1.datasources,other60412.datasources)) && (cljs.core._EQ_.call(null,this60411__$1.dataloader,other60412.dataloader)) && (cljs.core._EQ_.call(null,this60411__$1.__extmap,other60412.__extmap)));
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datasources","datasources",-44123695),null,new cljs.core.Keyword(null,"dataloader","dataloader",1084918675),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new keechma.toolbox.dataloader.controller.Controller(self__.datasources,self__.dataloader,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__60409){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__60429 = cljs.core.keyword_identical_QMARK_;
var expr__60430 = k__4211__auto__;
if(cljs.core.truth_(pred__60429.call(null,new cljs.core.Keyword(null,"datasources","datasources",-44123695),expr__60430))){
return (new keechma.toolbox.dataloader.controller.Controller(G__60409,self__.dataloader,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__60429.call(null,new cljs.core.Keyword(null,"dataloader","dataloader",1084918675),expr__60430))){
return (new keechma.toolbox.dataloader.controller.Controller(self__.datasources,G__60409,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.dataloader.controller.Controller(self__.datasources,self__.dataloader,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__60409),null));
}
}
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"datasources","datasources",-44123695),self__.datasources,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"dataloader","dataloader",1084918675),self__.dataloader,null))], null),self__.__extmap));
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__60409){
var self__ = this;
var this__4202__auto____$1 = this;
return (new keechma.toolbox.dataloader.controller.Controller(self__.datasources,self__.dataloader,G__60409,self__.__extmap,self__.__hash));
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

keechma.toolbox.dataloader.controller.Controller.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"datasources","datasources",1596407832,null),new cljs.core.Symbol(null,"dataloader","dataloader",-1569517094,null)], null);
});

keechma.toolbox.dataloader.controller.Controller.cljs$lang$type = true;

keechma.toolbox.dataloader.controller.Controller.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"keechma.toolbox.dataloader.controller/Controller",null,(1),null));
});

keechma.toolbox.dataloader.controller.Controller.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"keechma.toolbox.dataloader.controller/Controller");
});

/**
 * Positional factory function for keechma.toolbox.dataloader.controller/Controller.
 */
keechma.toolbox.dataloader.controller.__GT_Controller = (function keechma$toolbox$dataloader$controller$__GT_Controller(datasources,dataloader){
return (new keechma.toolbox.dataloader.controller.Controller(datasources,dataloader,null,null,null));
});

/**
 * Factory function for keechma.toolbox.dataloader.controller/Controller, taking a map of keywords to field values.
 */
keechma.toolbox.dataloader.controller.map__GT_Controller = (function keechma$toolbox$dataloader$controller$map__GT_Controller(G__60413){
var extmap__4236__auto__ = (function (){var G__60438 = cljs.core.dissoc.call(null,G__60413,new cljs.core.Keyword(null,"datasources","datasources",-44123695),new cljs.core.Keyword(null,"dataloader","dataloader",1084918675));
if(cljs.core.record_QMARK_.call(null,G__60413)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__60438);
} else {
return G__60438;
}
})();
return (new keechma.toolbox.dataloader.controller.Controller(new cljs.core.Keyword(null,"datasources","datasources",-44123695).cljs$core$IFn$_invoke$arity$1(G__60413),new cljs.core.Keyword(null,"dataloader","dataloader",1084918675).cljs$core$IFn$_invoke$arity$1(G__60413),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});

cljs.core._add_method.call(null,keechma.controller.params,keechma.toolbox.dataloader.controller.Controller,(function (this$,route_params){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route_params);
}));
cljs.core._add_method.call(null,keechma.controller.start,keechma.toolbox.dataloader.controller.Controller,(function (this$,route_params,app_db){
return cljs.core.assoc_in.call(null,app_db,keechma.toolbox.dataloader.controller.dataloader_status_key,new cljs.core.Keyword(null,"pending","pending",-220036727));
}));
cljs.core._add_method.call(null,keechma.controller.handler,keechma.toolbox.dataloader.controller.Controller,(function (this$,app_db_atom,in_chan,out_chan){
var d = new cljs.core.Keyword(null,"dataloader","dataloader",1084918675).cljs$core$IFn$_invoke$arity$1(this$);
var context = keechma.controller.context.call(null,this$);
var call_dataloader = ((function (d,context){
return (function (invalid_datasources){
cljs.core.swap_BANG_.call(null,app_db_atom,cljs.core.assoc_in,keechma.toolbox.dataloader.controller.dataloader_status_key,new cljs.core.Keyword(null,"pending","pending",-220036727));

keechma.toolbox.dataloader.controller.broadcast.call(null,this$,cljs.core.deref.call(null,app_db_atom),new cljs.core.Keyword("keechma.toolbox.dataloader.controller","status-change","keechma.toolbox.dataloader.controller/status-change",1549842968),new cljs.core.Keyword(null,"pending","pending",-220036727));

return promesa.core.error.call(null,((function (d,context){
return (function (e){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword("keechma.toolbox.dataloader.core","new-dataloader-started","keechma.toolbox.dataloader.core/new-dataloader-started",-613981380),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(e.data))){
throw e;
} else {
return null;
}
});})(d,context))
,promesa.core.map.call(null,((function (d,context){
return (function (){
cljs.core.swap_BANG_.call(null,app_db_atom,cljs.core.assoc_in,keechma.toolbox.dataloader.controller.dataloader_status_key,new cljs.core.Keyword(null,"loaded","loaded",-1246482293));

return keechma.toolbox.dataloader.controller.broadcast.call(null,this$,cljs.core.deref.call(null,app_db_atom),new cljs.core.Keyword("keechma.toolbox.dataloader.controller","status-change","keechma.toolbox.dataloader.controller/status-change",1549842968),new cljs.core.Keyword(null,"loaded","loaded",-1246482293));
});})(d,context))
,d.call(null,app_db_atom,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"context","context",-830191113),context,new cljs.core.Keyword(null,"invalid-datasources","invalid-datasources",1794814717),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"all","all",892129742),invalid_datasources))?cljs.core.set.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"datasources","datasources",-44123695).cljs$core$IFn$_invoke$arity$1(this$))):cljs.core.set.call(null,invalid_datasources))], null))));
});})(d,context))
;
call_dataloader.call(null,null);

var c__58857__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58857__auto__,d,context,call_dataloader){
return (function (){
var f__58858__auto__ = (function (){var switch__24619__auto__ = ((function (c__58857__auto__,d,context,call_dataloader){
return (function (state_60529){
var state_val_60530 = (state_60529[(1)]);
if((state_val_60530 === (7))){
var inst_60525 = (state_60529[(2)]);
var state_60529__$1 = state_60529;
var statearr_60531_60560 = state_60529__$1;
(statearr_60531_60560[(2)] = inst_60525);

(statearr_60531_60560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60530 === (1))){
var state_60529__$1 = state_60529;
var statearr_60532_60562 = state_60529__$1;
(statearr_60532_60562[(2)] = null);

(statearr_60532_60562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60530 === (4))){
var inst_60514 = (state_60529[(7)]);
var inst_60513 = (state_60529[(2)]);
var inst_60514__$1 = cljs.core.nth.call(null,inst_60513,(0),null);
var inst_60515 = cljs.core.nth.call(null,inst_60513,(1),null);
var state_60529__$1 = (function (){var statearr_60533 = state_60529;
(statearr_60533[(7)] = inst_60514__$1);

(statearr_60533[(8)] = inst_60515);

return statearr_60533;
})();
if(cljs.core.truth_(inst_60514__$1)){
var statearr_60535_60565 = state_60529__$1;
(statearr_60535_60565[(1)] = (5));

} else {
var statearr_60536_60567 = state_60529__$1;
(statearr_60536_60567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60530 === (6))){
var state_60529__$1 = state_60529;
var statearr_60537_60569 = state_60529__$1;
(statearr_60537_60569[(2)] = null);

(statearr_60537_60569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60530 === (3))){
var inst_60527 = (state_60529[(2)]);
var state_60529__$1 = state_60529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60529__$1,inst_60527);
} else {
if((state_val_60530 === (2))){
var state_60529__$1 = state_60529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60529__$1,(4),in_chan);
} else {
if((state_val_60530 === (9))){
var inst_60515 = (state_60529[(8)]);
var inst_60517 = call_dataloader.call(null,inst_60515);
var state_60529__$1 = state_60529;
var statearr_60539_60573 = state_60529__$1;
(statearr_60539_60573[(2)] = inst_60517);

(statearr_60539_60573[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60530 === (5))){
var inst_60514 = (state_60529[(7)]);
var state_60529__$1 = state_60529;
var G__60540_60575 = inst_60514;
var G__60540_60576__$1 = (((G__60540_60575 instanceof cljs.core.Keyword))?G__60540_60575.fqn:null);
switch (G__60540_60576__$1) {
case "load-data":
var statearr_60541_60578 = state_60529__$1;
(statearr_60541_60578[(1)] = (9));


break;
default:
var statearr_60542_60581 = state_60529__$1;
(statearr_60542_60581[(1)] = (10));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60530 === (10))){
var state_60529__$1 = state_60529;
var statearr_60544_60582 = state_60529__$1;
(statearr_60544_60582[(2)] = null);

(statearr_60544_60582[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60530 === (8))){
var inst_60521 = (state_60529[(2)]);
var state_60529__$1 = (function (){var statearr_60545 = state_60529;
(statearr_60545[(9)] = inst_60521);

return statearr_60545;
})();
var statearr_60546_60585 = state_60529__$1;
(statearr_60546_60585[(2)] = null);

(statearr_60546_60585[(1)] = (2));


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
});})(c__58857__auto__,d,context,call_dataloader))
;
return ((function (switch__24619__auto__,c__58857__auto__,d,context,call_dataloader){
return (function() {
var keechma$toolbox$dataloader$controller$state_machine__24620__auto__ = null;
var keechma$toolbox$dataloader$controller$state_machine__24620__auto____0 = (function (){
var statearr_60547 = [null,null,null,null,null,null,null,null,null,null];
(statearr_60547[(0)] = keechma$toolbox$dataloader$controller$state_machine__24620__auto__);

(statearr_60547[(1)] = (1));

return statearr_60547;
});
var keechma$toolbox$dataloader$controller$state_machine__24620__auto____1 = (function (state_60529){
while(true){
var ret_value__24621__auto__ = (function (){try{while(true){
var result__24622__auto__ = switch__24619__auto__.call(null,state_60529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24622__auto__;
}
break;
}
}catch (e60548){if((e60548 instanceof Object)){
var ex__24623__auto__ = e60548;
var statearr_60552_60588 = state_60529;
(statearr_60552_60588[(5)] = ex__24623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60591 = state_60529;
state_60529 = G__60591;
continue;
} else {
return ret_value__24621__auto__;
}
break;
}
});
keechma$toolbox$dataloader$controller$state_machine__24620__auto__ = function(state_60529){
switch(arguments.length){
case 0:
return keechma$toolbox$dataloader$controller$state_machine__24620__auto____0.call(this);
case 1:
return keechma$toolbox$dataloader$controller$state_machine__24620__auto____1.call(this,state_60529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keechma$toolbox$dataloader$controller$state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$toolbox$dataloader$controller$state_machine__24620__auto____0;
keechma$toolbox$dataloader$controller$state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$toolbox$dataloader$controller$state_machine__24620__auto____1;
return keechma$toolbox$dataloader$controller$state_machine__24620__auto__;
})()
;})(switch__24619__auto__,c__58857__auto__,d,context,call_dataloader))
})();
var state__58859__auto__ = (function (){var statearr_60553 = f__58858__auto__.call(null);
(statearr_60553[(6)] = c__58857__auto__);

return statearr_60553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58859__auto__);
});})(c__58857__auto__,d,context,call_dataloader))
);

return c__58857__auto__;
}));
/**
 * Dataloader controller constructor
 */
keechma.toolbox.dataloader.controller.constructor$ = (function keechma$toolbox$dataloader$controller$constructor(datasources,edb_schema){
return keechma.toolbox.dataloader.controller.__GT_Controller.call(null,datasources,keechma.toolbox.dataloader.core.make_dataloader.call(null,datasources,edb_schema));
});
/**
 * 
 * 
 * Registers dataloader controller to the controller map
 * 
 * ```clojure
 *  (def app
 *   {:controllers (-> {}
 *                  (keechma.toolbox.dataloader.controller/register datasources-map edb-schema))})
 * ```
 * 
 *   `keechma.toolbox.dataloader.controller/register` function expects three arguments:
 * 
 * - controller map
 * - datasources map
 * - EDB schema
 * 
 * It returns a new version of the controller map with the dataloader controller registered.
 * 
 * **Datasources**
 * 
 * Datasource is an abstraction of any data that is loaded from the "outside" world. It can be an API endpoint, local storage value or any other data that is not present in the application state.
 * 
 * Dataloader allows you to declaratively list your datasources. It then determines when and how the datasources should be loaded. Datasources can be defined as a graph, where datasources can depend on other datasources. This removes any need to manually load data in the correct order. When datasources params or depenedencies change, dataloader will invalidate that datasource and reload it.
 * 
 * Dataloader checks it's datasources on each route change. If the datasource `params` function returns a result different from the previous result, this datasource (and any datasources that depend on it) will be reloaded.
 * 
 * Dataloader can be manually triggered by sending the `:load-data` command to the dataloader controller.
 * 
 * **Example**
 * 
 * ```clojure
 * 
 * (defn promised-datasource
 *  ([] (promised-datasource nil))
 *  ([data]
 *   (fn [params]
 *  (map (fn [loader-params]
 *         (p/promise (fn [resolve reject]
 *                      (let [value (or data (:params loader-params))]
 *                        (js/setTimeout #(resolve value) 1)))))
 *       params))))
 * 
 * (def simple-promised-datasource (promised-datasource))
 * 
 * (def simple-datasources
 *  {:jwt
 *   {:target [:kv :jwt]
 * :loader (promised-datasource)
 * :processor (fn [value datasource]
 *              (str value "!"))
 * :params (fn [prev route _]
 *           (or (:jwt route) "JWT"))}
 * 
 *   :current-user
 *   {:target [:kv :user :current]
 * :deps   [:jwt]
 * :loader simple-promised-datasource
 * :params (fn [prev route {:keys [jwt]}]
 *           {:jwt jwt
 *            :current-user-id 1})}
 * 
 *   :users
 *   {:target [:kv :user :list]
 * :deps   [:jwt]
 * :loader simple-promised-datasource
 * :params (fn [prev route {:keys [jwt]}]
 *           {:jwt jwt
 *            :users [{:id 1} {:id 2}]})}
 * 
 *   :current-user-favorites
 *   {:target [:kv :favorites :current]
 * :deps   [:jwt :current-user]
 * :loader simple-promised-datasource
 * :params (fn [prev route {:keys [jwt current-user]}]
 *           {:jwt jwt
 *            :current-user current-user
 *            :favorites [{:id 3} {:id 4}]})}})
 * ```
 * 
 * A lot of stuff is happening in this example, so let's explain them one by one.
 * 
 * `promised-datasource` function is used as an example loader. The important thing to note here is that loader functions accept an array of requests. This means that you can use this function as an optimization point, a place where you can optimize the requests - remove duplicates or combine them into one request. Loader function should return a list of promises or results (these can be combined). Dataloader will wait for each promise to resolve, and then continue loading the dependent datasources.
 * 
 * Datasources are registered in the map, and the key under which the datasource is registered can be used by the other datasources to depend on it.
 * 
 * Each datasource map can have the following attributes:
 * 
 * - `:target` - where to store the returned data
 * - `:params` - function that returns the params needed to load the data
 * - `:loader` - function that is used to load the data, this function gets a list of requests
 * - `:deps` - list of datasources that the datasource depends on
 * - `:processor` - function that processes the result data before it gets stored in the app-db
 * 
 * **`:target` attribute**
 * 
 * Target attribute tells dataloader where it should store the loaded data. It has three different forms:
 * 
 * - general path - `[:kv :user]` - it will be stored under this path in the app-db
 * - EntityDB collection path - `[:edb/collection :user/list]` - If the first element of the target vector is `:edb/collection` keyword, the results will be treated as the EntityDB collection and the second element of the vector will be split on `/` to determine where this collection should be stored. If the second element of the target vector looked like `:user/list` the data would be stored in the collection named `:list` for the entity named `:user`.
 * - EntityDB named item - `[:edb/named-item :user/current]` - this will store the EntityDB named item, using the same rules like the EntityDB collection target to determine where the item should be stored.
 * 
 * **`:params` attribute**
 * 
 * Params function returns the params needed to load the datasource. It receives three arguments:
 * 
 * - previously loaded value
 * - current route
 * - datasource dependencies
 * 
 * This function is called to determine the current datasource state. If the returned value is different from the previously returned value, the datasource will be reloaded. Loader function receives the params, and it has to make sense of it. Even if your params fn returns `nil`, loader function will be called. It is loader function's responsobility to decide what the returned params mean.
 * 
 * **`:loader`** attribute:
 * 
 * Loader function is responsible for the data loading. This is where you should place your AJAX request functions. Loader function will receive a vector of requests (one element for each "triggered" datasource). Each request comes from a datasource, and it contains the following attributes:
 * 
 * - `:params` - value returned from the "params" function
 * - `:prev` - previously loaded value
 * - `:datasource` - key under which the datasource is registered
 * - `:app-db` - current app-db state
 * - `:target` - path where data will be stored in the app-db
 * 
 * Loader function should return a vector (one item for each request). Values in the returned vector can be either promises or resolved values.
 * 
 * 
 * **Manually triggering the Dataloader**
 * 
 * In some cases you will want to manually trigger the dataloader without the route change. For instance you might obtain a JWT token as a result of some user's action, and then reload all datasources that depend on it. Dataloader controller can manually trigger the dataloader. You can achieve this by sending the `:load-data` command to the dataloader controller:
 * 
 * ```clojure
 * (ns some.namespace
 *   (:require [keechma.toolbox.dataloader.core :as dataloader]
 *      [keechma.controller :as controller]))
 * 
 * (defn trigger-dataloader [ctrl]
 *   (controller/send-command ctrl [dataloader/id-key :load-data])) ;; dataloader controller will be registered under the dataloader/id-key keyword
 * ```
 * 
 * This will reload all invalidated datasources.
 * 
 * **Keeping track of dataloader status from a different controller
 * 
 * Sometimes it's valuable to know when the dataloader is done with loading. There are two ways to get this info, and they depend on the flavor of your controller.
 * 
 * If you're using pipelines (and `keechma.toolbox.pipeline.controller`) you can use the built in `keechma.toolbox.dataloader.controller/wait-dataloader-pipeline!` function which will block the pipeline until the dataloader is finished with loading.
 * 
 * ```clojure
 * (pipeline! [value app-db]
 *   (keechma.toolbox.dataloader.controller/wait-dataloader-pipeline!)
 *   (some-fn)
 * ```
 * 
 * In this case `some-fn` will be called after the dataloader is done.
 * 
 * If you're using a normal controller API (where you implement the `handler` function), you can listen for the `:keechma.toolbox.dataloader.controller/status-change` command. This command will be sent with `:pending` or `:loaded` as payload - depending on the dataloader's status.
 */
keechma.toolbox.dataloader.controller.register = (function keechma$toolbox$dataloader$controller$register(var_args){
var G__60596 = arguments.length;
switch (G__60596) {
case 2:
return keechma.toolbox.dataloader.controller.register.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return keechma.toolbox.dataloader.controller.register.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.toolbox.dataloader.controller.register.cljs$core$IFn$_invoke$arity$2 = (function (datasources,edb_schema){
return keechma.toolbox.dataloader.controller.register.call(null,cljs.core.PersistentArrayMap.EMPTY,datasources,edb_schema);
});

keechma.toolbox.dataloader.controller.register.cljs$core$IFn$_invoke$arity$3 = (function (controllers,datasources,edb_schema){
return cljs.core.assoc.call(null,controllers,keechma.toolbox.dataloader.core.id_key,keechma.toolbox.dataloader.controller.constructor$.call(null,datasources,edb_schema));
});

keechma.toolbox.dataloader.controller.register.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=controller.js.map?rel=1563552886000
