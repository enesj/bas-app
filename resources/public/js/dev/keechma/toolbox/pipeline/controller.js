// Compiled by ClojureScript 1.10.339 {}
goog.provide('keechma.toolbox.pipeline.controller');
goog.require('cljs.core');
goog.require('keechma.controller');
goog.require('cljs.core.async');
goog.require('keechma.toolbox.pipeline.core');
goog.require('clojure.set');
goog.require('medley.core');
goog.require('promesa.core');
keechma.toolbox.pipeline.controller.pipeline_rename_map = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"on-start","on-start",-1839785985),new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.Keyword(null,"on-stop","on-stop",1520114515),new cljs.core.Keyword(null,"route-changed","route-changed",455870141),new cljs.core.Keyword(null,"on-route-changed","on-route-changed",-696117904)], null);
keechma.toolbox.pipeline.controller.get_real_pipeline_name = (function keechma$toolbox$pipeline$controller$get_real_pipeline_name(pipelines,pipeline_name){
var pipeline = cljs.core.get.call(null,pipelines,pipeline_name);
if((pipeline instanceof cljs.core.Keyword)){
return keechma.toolbox.pipeline.controller.get_real_pipeline_name.call(null,pipelines,pipeline);
} else {
return pipeline_name;
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
keechma.toolbox.pipeline.controller.PipelineController = (function (controller_api,pipelines,pipelines$,__meta,__extmap,__hash){
this.controller_api = controller_api;
this.pipelines = pipelines;
this.pipelines$ = pipelines$;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k61862,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__61869 = k61862;
var G__61869__$1 = (((G__61869 instanceof cljs.core.Keyword))?G__61869.fqn:null);
switch (G__61869__$1) {
case "controller-api":
return self__.controller_api;

break;
case "pipelines":
return self__.pipelines;

break;
case "pipelines$":
return self__.pipelines$;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k61862,else__4206__auto__);

}
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#keechma.toolbox.pipeline.controller.PipelineController{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"controller-api","controller-api",-1800643702),self__.controller_api],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pipelines","pipelines",687128919),self__.pipelines],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pipelines$","pipelines$",-1591679384),self__.pipelines$],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__61861){
var self__ = this;
var G__61861__$1 = this;
return (new cljs.core.RecordIter((0),G__61861__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controller-api","controller-api",-1800643702),new cljs.core.Keyword(null,"pipelines","pipelines",687128919),new cljs.core.Keyword(null,"pipelines$","pipelines$",-1591679384)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new keechma.toolbox.pipeline.controller.PipelineController(self__.controller_api,self__.pipelines,self__.pipelines$,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (930798330 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this61863,other61864){
var self__ = this;
var this61863__$1 = this;
return ((!((other61864 == null))) && ((this61863__$1.constructor === other61864.constructor)) && (cljs.core._EQ_.call(null,this61863__$1.controller_api,other61864.controller_api)) && (cljs.core._EQ_.call(null,this61863__$1.pipelines,other61864.pipelines)) && (cljs.core._EQ_.call(null,this61863__$1.pipelines$,other61864.pipelines$)) && (cljs.core._EQ_.call(null,this61863__$1.__extmap,other61864.__extmap)));
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pipelines$","pipelines$",-1591679384),null,new cljs.core.Keyword(null,"controller-api","controller-api",-1800643702),null,new cljs.core.Keyword(null,"pipelines","pipelines",687128919),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new keechma.toolbox.pipeline.controller.PipelineController(self__.controller_api,self__.pipelines,self__.pipelines$,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__61861){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__61878 = cljs.core.keyword_identical_QMARK_;
var expr__61879 = k__4211__auto__;
if(cljs.core.truth_(pred__61878.call(null,new cljs.core.Keyword(null,"controller-api","controller-api",-1800643702),expr__61879))){
return (new keechma.toolbox.pipeline.controller.PipelineController(G__61861,self__.pipelines,self__.pipelines$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__61878.call(null,new cljs.core.Keyword(null,"pipelines","pipelines",687128919),expr__61879))){
return (new keechma.toolbox.pipeline.controller.PipelineController(self__.controller_api,G__61861,self__.pipelines$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__61878.call(null,new cljs.core.Keyword(null,"pipelines$","pipelines$",-1591679384),expr__61879))){
return (new keechma.toolbox.pipeline.controller.PipelineController(self__.controller_api,self__.pipelines,G__61861,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.pipeline.controller.PipelineController(self__.controller_api,self__.pipelines,self__.pipelines$,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__61861),null));
}
}
}
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"controller-api","controller-api",-1800643702),self__.controller_api,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pipelines","pipelines",687128919),self__.pipelines,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pipelines$","pipelines$",-1591679384),self__.pipelines$,null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__61861){
var self__ = this;
var this__4202__auto____$1 = this;
return (new keechma.toolbox.pipeline.controller.PipelineController(self__.controller_api,self__.pipelines,self__.pipelines$,G__61861,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

keechma.toolbox.pipeline.controller.PipelineController.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"controller-api","controller-api",-160112175,null),new cljs.core.Symbol(null,"pipelines","pipelines",-1967306850,null),new cljs.core.Symbol(null,"pipelines$","pipelines$",48852143,null)], null);
});

keechma.toolbox.pipeline.controller.PipelineController.cljs$lang$type = true;

keechma.toolbox.pipeline.controller.PipelineController.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"keechma.toolbox.pipeline.controller/PipelineController",null,(1),null));
});

keechma.toolbox.pipeline.controller.PipelineController.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"keechma.toolbox.pipeline.controller/PipelineController");
});

/**
 * Positional factory function for keechma.toolbox.pipeline.controller/PipelineController.
 */
keechma.toolbox.pipeline.controller.__GT_PipelineController = (function keechma$toolbox$pipeline$controller$__GT_PipelineController(controller_api,pipelines,pipelines$){
return (new keechma.toolbox.pipeline.controller.PipelineController(controller_api,pipelines,pipelines$,null,null,null));
});

/**
 * Factory function for keechma.toolbox.pipeline.controller/PipelineController, taking a map of keywords to field values.
 */
keechma.toolbox.pipeline.controller.map__GT_PipelineController = (function keechma$toolbox$pipeline$controller$map__GT_PipelineController(G__61865){
var extmap__4236__auto__ = (function (){var G__61892 = cljs.core.dissoc.call(null,G__61865,new cljs.core.Keyword(null,"controller-api","controller-api",-1800643702),new cljs.core.Keyword(null,"pipelines","pipelines",687128919),new cljs.core.Keyword(null,"pipelines$","pipelines$",-1591679384));
if(cljs.core.record_QMARK_.call(null,G__61865)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__61892);
} else {
return G__61892;
}
})();
return (new keechma.toolbox.pipeline.controller.PipelineController(new cljs.core.Keyword(null,"controller-api","controller-api",-1800643702).cljs$core$IFn$_invoke$arity$1(G__61865),new cljs.core.Keyword(null,"pipelines","pipelines",687128919).cljs$core$IFn$_invoke$arity$1(G__61865),new cljs.core.Keyword(null,"pipelines$","pipelines$",-1591679384).cljs$core$IFn$_invoke$arity$1(G__61865),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});

cljs.core._add_method.call(null,keechma.controller.params,keechma.toolbox.pipeline.controller.PipelineController,(function (this$,route_params){
var params_fn = cljs.core.get_in.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controller-api","controller-api",-1800643702),new cljs.core.Keyword(null,"params","params",710516235)], null));
return params_fn.call(null,route_params);
}));
cljs.core._add_method.call(null,keechma.controller.start,keechma.toolbox.pipeline.controller.PipelineController,(function (this$,params,app_db){
var start_fn = cljs.core.get_in.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controller-api","controller-api",-1800643702),new cljs.core.Keyword(null,"start","start",-355208981)], null));
keechma.controller.execute.call(null,this$,new cljs.core.Keyword(null,"start","start",-355208981),params);

return start_fn.call(null,this$,params,app_db);
}));
cljs.core._add_method.call(null,keechma.controller.stop,keechma.toolbox.pipeline.controller.PipelineController,(function (this$,params,app_db){
var stop_fn = cljs.core.get_in.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controller-api","controller-api",-1800643702),new cljs.core.Keyword(null,"stop","stop",-2140911342)], null));
keechma.controller.execute.call(null,this$,new cljs.core.Keyword(null,"stop","stop",-2140911342),params);

return stop_fn.call(null,this$,params,app_db);
}));
cljs.core._add_method.call(null,keechma.controller.handler,keechma.toolbox.pipeline.controller.PipelineController,(function (this$,app_db_atom,in_chan,_){
var pipelines = new cljs.core.Keyword(null,"pipelines","pipelines",687128919).cljs$core$IFn$_invoke$arity$1(this$);
var pipelines$ = new cljs.core.Keyword(null,"pipelines$","pipelines$",-1591679384).cljs$core$IFn$_invoke$arity$1(this$);
var c__58857__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58857__auto__,pipelines,pipelines$){
return (function (){
var f__58858__auto__ = (function (){var switch__24619__auto__ = ((function (c__58857__auto__,pipelines,pipelines$){
return (function (state_62004){
var state_val_62005 = (state_62004[(1)]);
if((state_val_62005 === (7))){
var inst_61998 = (state_62004[(2)]);
var state_62004__$1 = state_62004;
var statearr_62006_62055 = state_62004__$1;
(statearr_62006_62055[(2)] = inst_61998);

(statearr_62006_62055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62005 === (1))){
var state_62004__$1 = state_62004;
var statearr_62007_62056 = state_62004__$1;
(statearr_62007_62056[(2)] = null);

(statearr_62007_62056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62005 === (4))){
var inst_61966 = (state_62004[(7)]);
var inst_61965 = (state_62004[(8)]);
var inst_61965__$1 = (state_62004[(2)]);
var inst_61966__$1 = cljs.core.nth.call(null,inst_61965__$1,(0),null);
var inst_61967 = cljs.core.nth.call(null,inst_61965__$1,(1),null);
var state_62004__$1 = (function (){var statearr_62008 = state_62004;
(statearr_62008[(9)] = inst_61967);

(statearr_62008[(7)] = inst_61966__$1);

(statearr_62008[(8)] = inst_61965__$1);

return statearr_62008;
})();
if(cljs.core.truth_(inst_61966__$1)){
var statearr_62011_62060 = state_62004__$1;
(statearr_62011_62060[(1)] = (5));

} else {
var statearr_62012_62061 = state_62004__$1;
(statearr_62012_62061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62005 === (13))){
var inst_61994 = (state_62004[(2)]);
var state_62004__$1 = (function (){var statearr_62013 = state_62004;
(statearr_62013[(10)] = inst_61994);

return statearr_62013;
})();
var statearr_62014_62064 = state_62004__$1;
(statearr_62014_62064[(2)] = null);

(statearr_62014_62064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62005 === (6))){
var state_62004__$1 = state_62004;
var statearr_62022_62067 = state_62004__$1;
(statearr_62022_62067[(2)] = null);

(statearr_62022_62067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62005 === (3))){
var inst_62000 = (state_62004[(2)]);
var state_62004__$1 = state_62004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62004__$1,inst_62000);
} else {
if((state_val_62005 === (12))){
var state_62004__$1 = state_62004;
var statearr_62023_62072 = state_62004__$1;
(statearr_62023_62072[(2)] = null);

(statearr_62023_62072[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62005 === (2))){
var state_62004__$1 = state_62004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62004__$1,(4),in_chan);
} else {
if((state_val_62005 === (11))){
var inst_61967 = (state_62004[(9)]);
var inst_61966 = (state_62004[(7)]);
var inst_61974 = (state_62004[(11)]);
var inst_61975 = (state_62004[(12)]);
var inst_61965 = (state_62004[(8)]);
var inst_61973 = (state_62004[(13)]);
var inst_61981 = (state_62004[(14)]);
var inst_61980 = (state_62004[(15)]);
var inst_61983 = [new cljs.core.Keyword(null,"running?","running?",-257884763),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"promise","promise",1767129287)];
var inst_61984 = (function (){var vec__61961 = inst_61965;
var command = inst_61966;
var args = inst_61967;
var pipeline_name = inst_61973;
var real_pipeline_name = inst_61974;
var pipeline = inst_61975;
var pipeline_name_id = inst_61980;
var ctrl_with_pipeline_id = inst_61981;
return ((function (vec__61961,command,args,pipeline_name,real_pipeline_name,pipeline,pipeline_name_id,ctrl_with_pipeline_id,inst_61967,inst_61966,inst_61974,inst_61975,inst_61965,inst_61973,inst_61981,inst_61980,inst_61983,state_val_62005,c__58857__auto__,pipelines,pipelines$){
return (function (err){
cljs.core.swap_BANG_.call(null,pipelines$,medley.core.dissoc_in,pipeline_name_id);

throw err;
});
;})(vec__61961,command,args,pipeline_name,real_pipeline_name,pipeline,pipeline_name_id,ctrl_with_pipeline_id,inst_61967,inst_61966,inst_61974,inst_61975,inst_61965,inst_61973,inst_61981,inst_61980,inst_61983,state_val_62005,c__58857__auto__,pipelines,pipelines$))
})();
var inst_61985 = (function (){var vec__61961 = inst_61965;
var command = inst_61966;
var args = inst_61967;
var pipeline_name = inst_61973;
var real_pipeline_name = inst_61974;
var pipeline = inst_61975;
var pipeline_name_id = inst_61980;
var ctrl_with_pipeline_id = inst_61981;
return ((function (vec__61961,command,args,pipeline_name,real_pipeline_name,pipeline,pipeline_name_id,ctrl_with_pipeline_id,inst_61967,inst_61966,inst_61974,inst_61975,inst_61965,inst_61973,inst_61981,inst_61980,inst_61983,inst_61984,state_val_62005,c__58857__auto__,pipelines,pipelines$){
return (function (val){
cljs.core.swap_BANG_.call(null,pipelines$,medley.core.dissoc_in,pipeline_name_id);

return val;
});
;})(vec__61961,command,args,pipeline_name,real_pipeline_name,pipeline,pipeline_name_id,ctrl_with_pipeline_id,inst_61967,inst_61966,inst_61974,inst_61975,inst_61965,inst_61973,inst_61981,inst_61980,inst_61983,inst_61984,state_val_62005,c__58857__auto__,pipelines,pipelines$))
})();
var inst_61986 = inst_61975.call(null,inst_61981,app_db_atom,inst_61967,pipelines$);
var inst_61987 = promesa.core.map.call(null,inst_61985,inst_61986);
var inst_61988 = promesa.core.error.call(null,inst_61984,inst_61987);
var inst_61989 = [true,inst_61967,inst_61988];
var inst_61990 = cljs.core.PersistentHashMap.fromArrays(inst_61983,inst_61989);
var inst_61991 = cljs.core.swap_BANG_.call(null,pipelines$,cljs.core.assoc_in,inst_61980,inst_61990);
var state_62004__$1 = state_62004;
var statearr_62026_62101 = state_62004__$1;
(statearr_62026_62101[(2)] = inst_61991);

(statearr_62026_62101[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62005 === (9))){
var inst_61966 = (state_62004[(7)]);
var state_62004__$1 = state_62004;
var statearr_62028_62102 = state_62004__$1;
(statearr_62028_62102[(2)] = inst_61966);

(statearr_62028_62102[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62005 === (5))){
var inst_61966 = (state_62004[(7)]);
var inst_61969 = (state_62004[(16)]);
var inst_61969__$1 = cljs.core.get.call(null,keechma.toolbox.pipeline.controller.pipeline_rename_map,inst_61966);
var state_62004__$1 = (function (){var statearr_62030 = state_62004;
(statearr_62030[(16)] = inst_61969__$1);

return statearr_62030;
})();
if(cljs.core.truth_(inst_61969__$1)){
var statearr_62031_62103 = state_62004__$1;
(statearr_62031_62103[(1)] = (8));

} else {
var statearr_62032_62104 = state_62004__$1;
(statearr_62032_62104[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62005 === (10))){
var inst_61974 = (state_62004[(11)]);
var inst_61975 = (state_62004[(12)]);
var inst_61973 = (state_62004[(13)]);
var inst_61980 = (state_62004[(15)]);
var inst_61973__$1 = (state_62004[(2)]);
var inst_61974__$1 = keechma.toolbox.pipeline.controller.get_real_pipeline_name.call(null,pipelines,inst_61973__$1);
var inst_61975__$1 = pipelines.call(null,inst_61974__$1);
var inst_61976 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_61977 = cljs.core.gensym.call(null,new cljs.core.Keyword("pipeline","id","pipeline/id",-812818510));
var inst_61978 = cljs.core.keyword.call(null,inst_61977);
var inst_61979 = [inst_61974__$1,inst_61978];
var inst_61980__$1 = (new cljs.core.PersistentVector(null,2,(5),inst_61976,inst_61979,null));
var inst_61981 = cljs.core.assoc.call(null,this$,new cljs.core.Keyword("pipeline","running","pipeline/running",844864673),inst_61980__$1);
var state_62004__$1 = (function (){var statearr_62033 = state_62004;
(statearr_62033[(11)] = inst_61974__$1);

(statearr_62033[(12)] = inst_61975__$1);

(statearr_62033[(13)] = inst_61973__$1);

(statearr_62033[(14)] = inst_61981);

(statearr_62033[(15)] = inst_61980__$1);

return statearr_62033;
})();
if(cljs.core.truth_(inst_61975__$1)){
var statearr_62034_62105 = state_62004__$1;
(statearr_62034_62105[(1)] = (11));

} else {
var statearr_62035_62106 = state_62004__$1;
(statearr_62035_62106[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62005 === (8))){
var inst_61969 = (state_62004[(16)]);
var state_62004__$1 = state_62004;
var statearr_62036_62107 = state_62004__$1;
(statearr_62036_62107[(2)] = inst_61969);

(statearr_62036_62107[(1)] = (10));


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
});})(c__58857__auto__,pipelines,pipelines$))
;
return ((function (switch__24619__auto__,c__58857__auto__,pipelines,pipelines$){
return (function() {
var keechma$toolbox$pipeline$controller$state_machine__24620__auto__ = null;
var keechma$toolbox$pipeline$controller$state_machine__24620__auto____0 = (function (){
var statearr_62038 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62038[(0)] = keechma$toolbox$pipeline$controller$state_machine__24620__auto__);

(statearr_62038[(1)] = (1));

return statearr_62038;
});
var keechma$toolbox$pipeline$controller$state_machine__24620__auto____1 = (function (state_62004){
while(true){
var ret_value__24621__auto__ = (function (){try{while(true){
var result__24622__auto__ = switch__24619__auto__.call(null,state_62004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24622__auto__;
}
break;
}
}catch (e62040){if((e62040 instanceof Object)){
var ex__24623__auto__ = e62040;
var statearr_62041_62108 = state_62004;
(statearr_62041_62108[(5)] = ex__24623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62109 = state_62004;
state_62004 = G__62109;
continue;
} else {
return ret_value__24621__auto__;
}
break;
}
});
keechma$toolbox$pipeline$controller$state_machine__24620__auto__ = function(state_62004){
switch(arguments.length){
case 0:
return keechma$toolbox$pipeline$controller$state_machine__24620__auto____0.call(this);
case 1:
return keechma$toolbox$pipeline$controller$state_machine__24620__auto____1.call(this,state_62004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keechma$toolbox$pipeline$controller$state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$toolbox$pipeline$controller$state_machine__24620__auto____0;
keechma$toolbox$pipeline$controller$state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$toolbox$pipeline$controller$state_machine__24620__auto____1;
return keechma$toolbox$pipeline$controller$state_machine__24620__auto__;
})()
;})(switch__24619__auto__,c__58857__auto__,pipelines,pipelines$))
})();
var state__58859__auto__ = (function (){var statearr_62043 = f__58858__auto__.call(null);
(statearr_62043[(6)] = c__58857__auto__);

return statearr_62043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58859__auto__);
});})(c__58857__auto__,pipelines,pipelines$))
);

return c__58857__auto__;
}));
keechma.toolbox.pipeline.controller.default_start_stop = (function keechma$toolbox$pipeline$controller$default_start_stop(this$,params,app_db){
return app_db;
});
keechma.toolbox.pipeline.controller.default_params = (function keechma$toolbox$pipeline$controller$default_params(route_params){
return null;
});
keechma.toolbox.pipeline.controller.prepare_controller_api = (function keechma$toolbox$pipeline$controller$prepare_controller_api(controller_api){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stop","stop",-2140911342),keechma.toolbox.pipeline.controller.default_start_stop,new cljs.core.Keyword(null,"start","start",-355208981),keechma.toolbox.pipeline.controller.default_start_stop,new cljs.core.Keyword(null,"params","params",710516235),keechma.toolbox.pipeline.controller.default_params], null),((cljs.core.fn_QMARK_.call(null,controller_api))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),controller_api], null):controller_api));
});
keechma.toolbox.pipeline.controller.redundant_pipeline_message = (function keechma$toolbox$pipeline$controller$redundant_pipeline_message(pipeline){
return ["You can't have `:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pipeline),"` ","and `:on-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pipeline),"` ","pipeline defined. Use `:on-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pipeline),"`, `:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pipeline),"` is deprecated."].join('');
});
keechma.toolbox.pipeline.controller.prepare_pipelines = (function keechma$toolbox$pipeline$controller$prepare_pipelines(pipelines){
if(cljs.core.truth_((function (){var and__3938__auto__ = new cljs.core.Keyword(null,"stop","stop",-2140911342).cljs$core$IFn$_invoke$arity$1(pipelines);
if(cljs.core.truth_(and__3938__auto__)){
return new cljs.core.Keyword(null,"on-stop","on-stop",1520114515).cljs$core$IFn$_invoke$arity$1(pipelines);
} else {
return and__3938__auto__;
}
})())){
throw cljs.core.ex_info.call(null,keechma.toolbox.pipeline.controller.redundant_pipeline_message.call(null,"stop"),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

if(cljs.core.truth_((function (){var and__3938__auto__ = new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(pipelines);
if(cljs.core.truth_(and__3938__auto__)){
return new cljs.core.Keyword(null,"on-start","on-start",-1839785985).cljs$core$IFn$_invoke$arity$1(pipelines);
} else {
return and__3938__auto__;
}
})())){
throw cljs.core.ex_info.call(null,keechma.toolbox.pipeline.controller.redundant_pipeline_message.call(null,"start"),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

if(cljs.core.truth_((function (){var and__3938__auto__ = new cljs.core.Keyword(null,"route-changed","route-changed",455870141).cljs$core$IFn$_invoke$arity$1(pipelines);
if(cljs.core.truth_(and__3938__auto__)){
return new cljs.core.Keyword(null,"on-route-changed","on-route-changed",-696117904).cljs$core$IFn$_invoke$arity$1(pipelines);
} else {
return and__3938__auto__;
}
})())){
throw cljs.core.ex_info.call(null,keechma.toolbox.pipeline.controller.redundant_pipeline_message.call(null,"route-changed"),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return clojure.set.rename_keys.call(null,pipelines,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.Keyword(null,"on-stop","on-stop",1520114515),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"on-start","on-start",-1839785985),new cljs.core.Keyword(null,"route-changed","route-changed",455870141),new cljs.core.Keyword(null,"on-route-change","on-route-change",-1096629615)], null));
});
keechma.toolbox.pipeline.controller.make_constructor = (function keechma$toolbox$pipeline$controller$make_constructor(controller_api,pipelines){
return (function (){
return keechma.toolbox.pipeline.controller.__GT_PipelineController.call(null,keechma.toolbox.pipeline.controller.prepare_controller_api.call(null,controller_api),keechma.toolbox.pipeline.controller.prepare_pipelines.call(null,pipelines),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));
});
});
/**
 * 
 * Constructor for the pipeline controller.
 * 
 * Pipeline controllers are special type of Keechma controllers that handle their commands with pipelines. Pipelines allow you to model a command / action as a series of steps. Pipelines know how to handle promises and they themselves return a promise.
 * 
 * Pipelines allow you to split async actions into distinct steps:
 * 
 * - Pipeline processing
 * - Sideffects
 * 
 * If a pipeline processing step returns a promise (for instance from an AJAX request), pipeline will wait until that promise is resolved before proceeding to the next step.
 * 
 * Simple example
 * 
 * ```clojure
 * (ns some-namespace
 *   (:require [keechma.toolbox.pipeline.controller :as pp-controller]
 *          [keechma.toolbox.pipeline.core :as pp :refer-macros [pipeline!]])
 * 
 * (def some-controller
 *   (fn [route-params] true) ;; route params function
 *   {:start (pipeline! [value app-db]
 *          (pp/commit! (assoc-in app-db [:kv :current-user-status] :loading))
 *          (load-user-from-server)
 *          (pp/commit! (->app-db
 *                         (assoc-in [:kv :current-user-status] :loaded)
 *                         (assoc-in [:kv :current-user] value))))})
 * ```
 * 
 * In the previous example three things happened:
 * 
 * 1. We stored current user status as `:loading` in the app-db
 * 2. We loaded user from the server
 * 3. We stored the current user status and the current user in the app-db
 * 
 * `value` always holds the returned (or resolved) value from the previous processing step - unless the function returns `nil` in that case, value is bound to the previous value. Also, we had to use the `commit!` sideffect function to mutate the app-db.
 * 
 * `value` and `app-db` arguments are always bound to the current pipeline value and to the current version of app-db. This means that in every processing step, value and app-db point to the results of the previous processing step.`
 * 
 * If we want to handle errors or rejections in pipelines, we can use the `rescue!` block:
 * 
 * ```clojure
 * (def some-controller
 *   (fn [route-params] true) ;; route params function
 *   {:start (pipeline! [value app-db]
 *          (pp/commit! (assoc-in app-db [:kv :current-user-status] :loading))
 *          (load-user-from-server)
 *          (pp/commit! (->app-db
 *                         (assoc-in [:kv :current-user-status] :loaded)
 *                         (assoc-in [:kv :current-user] value)))
 *          (rescue! [error]
 *            (pp/commit! (assoc-in app-db [:kv :current-user-status] :error))})
 * ```
 * 
 * Rescue block will catch any errors that happen in the pipeline - including the promises that were rejected. Steps in the rescue block have access to value and app-db arguments.
 * 
 * **Nesting pipelines**
 * 
 * Sometimes you need to run the pipeline only if some condition is true. In that case you can nest pipelines:
 * 
 * ```clojure
 * (def some-controller
 *   (fn [route-params] true) ;; route params function
 *   {:start (pipeline! [value app-db]
 *          (when (= value true)
 *            (pipeline! [value app-db]
 *              (some-api-call)
 *              (pp/commit! (mutate-app-db app-db)))))}) 
 * ```
 * 
 * **Pipeline sideffects**
 * 
 * Pipelines can have various sideffects:
 * 
 * 1. `commit!` - commits the new app-db version in the global app-db atom
 * 2. `send-command!` - sends command to another controller
 * 3. `execute!` - executes command in the current controller
 * 4. `redirect!` - redirects to a different URL
 * 
 * **Exclusive pipelines**
 * 
 * In some cases you want to always run only one pipeline at a time. One example of that behavior is the live search. 
 * 
 * Let's say that you want to implement it as a command that runs on every key press. After the command is ran, it should wait for 500msec before calling the API. If the command is called again in these 500msec, stop the pipeline and run a new one.
 * 
 * Here's how you would implement this feature:
 * 
 * ```clojure
 * (def search-controller
 *   (pp-controller/constructor
 * (fn [] true)
 * {:search (pp/exclusive
 *           (pipeline! [value app-db]
 *             (when-not (empty? value)
 *               (pipeline! [value app-db]
 *                 (delay-pipeline 500)
 *                 (movie-search value)
 *                 (println "SEARCH RESULTS:" value)))))}))
 * ```
 *   
 */
keechma.toolbox.pipeline.controller.constructor$ = (function keechma$toolbox$pipeline$controller$constructor(controller_api,pipelines){
var c = keechma.toolbox.pipeline.controller.make_constructor.call(null,controller_api,pipelines);
return c.call(null);
});

//# sourceMappingURL=controller.js.map?rel=1563552886906
