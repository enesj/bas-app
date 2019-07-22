// Compiled by ClojureScript 1.10.339 {}
goog.provide('keechma.controller');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('keechma.reporter');
keechma.controller.not_implemented = new cljs.core.Keyword("keechma.controller","not-implemented","keechma.controller/not-implemented",1337990552);
/**
 * Helper function to dispatch commands from the `handler` function.
 * 
 *   Most of the time, handler function will just dispatch the commands
 *   to other functions. This functions provides a shortcut for that case.
 * 
 *   ```clojure
 *   (defrecord Controller [])
 *  
 *   (defmethod handler Controller [_ app-db-atom in-chan _]
 *  (dispatcher app-db-atom in-chan {:command-name some-fn}))
 *   ```
 */
keechma.controller.dispatcher = (function keechma$controller$dispatcher(app_db_atom,in_chan,actions){
var c__44950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44950__auto__){
return (function (){
var f__44951__auto__ = (function (){var switch__24619__auto__ = ((function (c__44950__auto__){
return (function (state_54930){
var state_val_54931 = (state_54930[(1)]);
if((state_val_54931 === (7))){
var inst_54914 = (state_54930[(7)]);
var inst_54921 = (state_54930[(2)]);
var state_54930__$1 = (function (){var statearr_54934 = state_54930;
(statearr_54934[(8)] = inst_54921);

return statearr_54934;
})();
if(cljs.core.truth_(inst_54914)){
var statearr_54935_54959 = state_54930__$1;
(statearr_54935_54959[(1)] = (8));

} else {
var statearr_54936_54960 = state_54930__$1;
(statearr_54936_54960[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54931 === (1))){
var state_54930__$1 = state_54930;
var statearr_54937_54964 = state_54930__$1;
(statearr_54937_54964[(2)] = null);

(statearr_54937_54964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54931 === (4))){
var inst_54914 = (state_54930[(7)]);
var inst_54916 = (state_54930[(9)]);
var inst_54913 = (state_54930[(2)]);
var inst_54914__$1 = cljs.core.nth.call(null,inst_54913,(0),null);
var inst_54915 = cljs.core.nth.call(null,inst_54913,(1),null);
var inst_54916__$1 = cljs.core.get.call(null,actions,inst_54914__$1);
var state_54930__$1 = (function (){var statearr_54938 = state_54930;
(statearr_54938[(7)] = inst_54914__$1);

(statearr_54938[(9)] = inst_54916__$1);

(statearr_54938[(10)] = inst_54915);

return statearr_54938;
})();
if(cljs.core.truth_(inst_54916__$1)){
var statearr_54939_54971 = state_54930__$1;
(statearr_54939_54971[(1)] = (5));

} else {
var statearr_54940_54972 = state_54930__$1;
(statearr_54940_54972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54931 === (6))){
var state_54930__$1 = state_54930;
var statearr_54942_54973 = state_54930__$1;
(statearr_54942_54973[(2)] = null);

(statearr_54942_54973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54931 === (3))){
var inst_54928 = (state_54930[(2)]);
var state_54930__$1 = state_54930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54930__$1,inst_54928);
} else {
if((state_val_54931 === (2))){
var state_54930__$1 = state_54930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54930__$1,(4),in_chan);
} else {
if((state_val_54931 === (9))){
var state_54930__$1 = state_54930;
var statearr_54944_54982 = state_54930__$1;
(statearr_54944_54982[(2)] = null);

(statearr_54944_54982[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54931 === (5))){
var inst_54916 = (state_54930[(9)]);
var inst_54915 = (state_54930[(10)]);
var inst_54918 = inst_54916.call(null,app_db_atom,inst_54915);
var state_54930__$1 = state_54930;
var statearr_54945_54986 = state_54930__$1;
(statearr_54945_54986[(2)] = inst_54918);

(statearr_54945_54986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54931 === (10))){
var inst_54926 = (state_54930[(2)]);
var state_54930__$1 = state_54930;
var statearr_54946_54989 = state_54930__$1;
(statearr_54946_54989[(2)] = inst_54926);

(statearr_54946_54989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54931 === (8))){
var state_54930__$1 = state_54930;
var statearr_54947_54990 = state_54930__$1;
(statearr_54947_54990[(2)] = null);

(statearr_54947_54990[(1)] = (2));


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
});})(c__44950__auto__))
;
return ((function (switch__24619__auto__,c__44950__auto__){
return (function() {
var keechma$controller$dispatcher_$_state_machine__24620__auto__ = null;
var keechma$controller$dispatcher_$_state_machine__24620__auto____0 = (function (){
var statearr_54948 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54948[(0)] = keechma$controller$dispatcher_$_state_machine__24620__auto__);

(statearr_54948[(1)] = (1));

return statearr_54948;
});
var keechma$controller$dispatcher_$_state_machine__24620__auto____1 = (function (state_54930){
while(true){
var ret_value__24621__auto__ = (function (){try{while(true){
var result__24622__auto__ = switch__24619__auto__.call(null,state_54930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24622__auto__;
}
break;
}
}catch (e54949){if((e54949 instanceof Object)){
var ex__24623__auto__ = e54949;
var statearr_54950_54995 = state_54930;
(statearr_54950_54995[(5)] = ex__24623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55002 = state_54930;
state_54930 = G__55002;
continue;
} else {
return ret_value__24621__auto__;
}
break;
}
});
keechma$controller$dispatcher_$_state_machine__24620__auto__ = function(state_54930){
switch(arguments.length){
case 0:
return keechma$controller$dispatcher_$_state_machine__24620__auto____0.call(this);
case 1:
return keechma$controller$dispatcher_$_state_machine__24620__auto____1.call(this,state_54930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keechma$controller$dispatcher_$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$controller$dispatcher_$_state_machine__24620__auto____0;
keechma$controller$dispatcher_$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$controller$dispatcher_$_state_machine__24620__auto____1;
return keechma$controller$dispatcher_$_state_machine__24620__auto__;
})()
;})(switch__24619__auto__,c__44950__auto__))
})();
var state__44952__auto__ = (function (){var statearr_54951 = f__44951__auto__.call(null);
(statearr_54951[(6)] = c__44950__auto__);

return statearr_54951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44952__auto__);
});})(c__44950__auto__))
);

return c__44950__auto__;
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
keechma.controller.SerializedController = (function (params,__meta,__extmap,__hash){
this.params = params;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.controller.SerializedController.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

keechma.controller.SerializedController.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k55006,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__55010 = k55006;
var G__55010__$1 = (((G__55010 instanceof cljs.core.Keyword))?G__55010.fqn:null);
switch (G__55010__$1) {
case "params":
return self__.params;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k55006,else__4206__auto__);

}
});

keechma.controller.SerializedController.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#keechma.controller.SerializedController{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null))], null),self__.__extmap));
});

keechma.controller.SerializedController.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__55005){
var self__ = this;
var G__55005__$1 = this;
return (new cljs.core.RecordIter((0),G__55005__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.controller.SerializedController.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

keechma.controller.SerializedController.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new keechma.controller.SerializedController(self__.params,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.controller.SerializedController.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

keechma.controller.SerializedController.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (2020583419 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

keechma.controller.SerializedController.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this55007,other55008){
var self__ = this;
var this55007__$1 = this;
return ((!((other55008 == null))) && ((this55007__$1.constructor === other55008.constructor)) && (cljs.core._EQ_.call(null,this55007__$1.params,other55008.params)) && (cljs.core._EQ_.call(null,this55007__$1.__extmap,other55008.__extmap)));
});

keechma.controller.SerializedController.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new keechma.controller.SerializedController(self__.params,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

keechma.controller.SerializedController.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__55005){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__55016 = cljs.core.keyword_identical_QMARK_;
var expr__55017 = k__4211__auto__;
if(cljs.core.truth_(pred__55016.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__55017))){
return (new keechma.controller.SerializedController(G__55005,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.controller.SerializedController(self__.params,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__55005),null));
}
});

keechma.controller.SerializedController.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null))], null),self__.__extmap));
});

keechma.controller.SerializedController.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__55005){
var self__ = this;
var this__4202__auto____$1 = this;
return (new keechma.controller.SerializedController(self__.params,G__55005,self__.__extmap,self__.__hash));
});

keechma.controller.SerializedController.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

keechma.controller.SerializedController.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",-1943919534,null)], null);
});

keechma.controller.SerializedController.cljs$lang$type = true;

keechma.controller.SerializedController.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"keechma.controller/SerializedController",null,(1),null));
});

keechma.controller.SerializedController.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"keechma.controller/SerializedController");
});

/**
 * Positional factory function for keechma.controller/SerializedController.
 */
keechma.controller.__GT_SerializedController = (function keechma$controller$__GT_SerializedController(params){
return (new keechma.controller.SerializedController(params,null,null,null));
});

/**
 * Factory function for keechma.controller/SerializedController, taking a map of keywords to field values.
 */
keechma.controller.map__GT_SerializedController = (function keechma$controller$map__GT_SerializedController(G__55009){
var extmap__4236__auto__ = (function (){var G__55022 = cljs.core.dissoc.call(null,G__55009,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.record_QMARK_.call(null,G__55009)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__55022);
} else {
return G__55022;
}
})();
return (new keechma.controller.SerializedController(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__55009),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});

keechma.controller.record_type = (function keechma$controller$record_type(var_args){
var args__4534__auto__ = [];
var len__4531__auto___55030 = arguments.length;
var i__4532__auto___55031 = (0);
while(true){
if((i__4532__auto___55031 < len__4531__auto___55030)){
args__4534__auto__.push((arguments[i__4532__auto___55031]));

var G__55032 = (i__4532__auto___55031 + (1));
i__4532__auto___55031 = G__55032;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return keechma.controller.record_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

keechma.controller.record_type.cljs$core$IFn$_invoke$arity$variadic = (function (record,args){
return cljs.core.type.call(null,record);
});

keechma.controller.record_type.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
keechma.controller.record_type.cljs$lang$applyTo = (function (seq55028){
var G__55029 = cljs.core.first.call(null,seq55028);
var seq55028__$1 = cljs.core.next.call(null,seq55028);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55029,seq55028__$1);
});

if((typeof keechma !== 'undefined') && (typeof keechma.controller !== 'undefined') && (typeof keechma.controller.params !== 'undefined')){
} else {
/**
 * Receives the `route-params` and returns either the `params` for the controller or `nil`
 */
keechma.controller.params = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","params"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
if((typeof keechma !== 'undefined') && (typeof keechma.controller !== 'undefined') && (typeof keechma.controller.start !== 'undefined')){
} else {
/**
 * Called when the controller is started. Receives the controller `params` (returned by the
 *   `params` function) and the application state. It must return the application state.
 */
keechma.controller.start = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","start"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
if((typeof keechma !== 'undefined') && (typeof keechma.controller !== 'undefined') && (typeof keechma.controller.wake !== 'undefined')){
} else {
/**
 * Called when the controller is started from the saved state stored on the server. It will be
 * called instead of the `start` function if the `ssr-handler` function is implemented. This
 * allows you to manually revive the serialized data if needed. Usually this function is not
 * needed, but if you for instance start the inner application from the controller, you can
 * use this function to wake the inner app.
 */
keechma.controller.wake = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","wake"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
if((typeof keechma !== 'undefined') && (typeof keechma.controller !== 'undefined') && (typeof keechma.controller.stop !== 'undefined')){
} else {
/**
 * Called when the controller is stopped. Receives the controller `params` (returned by the
 *   `params` function) and the application state. It must return the application state.
 */
keechma.controller.stop = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","stop"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
if((typeof keechma !== 'undefined') && (typeof keechma.controller !== 'undefined') && (typeof keechma.controller.handler !== 'undefined')){
} else {
/**
 * Called after the `start` function. You can listen to the commands on the `in-chan` 
 *   inside the `go` block. This is the function in which you implement anything that reacts
 *   to the user commands (coming from the UI).
 */
keechma.controller.handler = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","handler"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
if((typeof keechma !== 'undefined') && (typeof keechma.controller !== 'undefined') && (typeof keechma.controller.ssr_handler !== 'undefined')){
} else {
/**
 * Called in after the `start` (instead of the `handler` function) function in the server
 *   side context. This function should call the `done` callback when it has completed the 
 *   server side data loading. Returning `::not-implemented` which is a default behavior will
 *   mark the controller as non server side.
 */
keechma.controller.ssr_handler = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","ssr-handler"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
if((typeof keechma !== 'undefined') && (typeof keechma.controller !== 'undefined') && (typeof keechma.controller.context !== 'undefined')){
} else {
/**
 * Return the context passed to the application.
 */
keechma.controller.context = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","context"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
if((typeof keechma !== 'undefined') && (typeof keechma.controller !== 'undefined') && (typeof keechma.controller.report !== 'undefined')){
} else {
keechma.controller.report = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","report"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
if((typeof keechma !== 'undefined') && (typeof keechma.controller !== 'undefined') && (typeof keechma.controller.execute !== 'undefined')){
} else {
/**
 * Puts the command on the controller's `in-chan` which is passed as an argument to the 
 *   `handler` function. Can be called from the `start` and `stop` functions.
 */
keechma.controller.execute = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","execute"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
if((typeof keechma !== 'undefined') && (typeof keechma.controller !== 'undefined') && (typeof keechma.controller.send_command !== 'undefined')){
} else {
/**
 * Sends a command to another controller
 */
keechma.controller.send_command = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","send-command"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
if((typeof keechma !== 'undefined') && (typeof keechma.controller !== 'undefined') && (typeof keechma.controller.broadcast !== 'undefined')){
} else {
/**
 * Sends a command to all other running controllers
 */
keechma.controller.broadcast = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","broadcast"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
if((typeof keechma !== 'undefined') && (typeof keechma.controller !== 'undefined') && (typeof keechma.controller.is_running_QMARK_ !== 'undefined')){
} else {
/**
 * Returns `true` if this controller is still running. You can use this if you have some
 *   kind of async action, and you want to make sure that the controller is still running 
 *   when you receive the results.
 */
keechma.controller.is_running_QMARK_ = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","is-running?"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
if((typeof keechma !== 'undefined') && (typeof keechma.controller !== 'undefined') && (typeof keechma.controller.redirect !== 'undefined')){
} else {
/**
 * Redirects the page to the URL based on the params.
 */
keechma.controller.redirect = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","redirect"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
if((typeof keechma !== 'undefined') && (typeof keechma.controller !== 'undefined') && (typeof keechma.controller.reroute !== 'undefined')){
} else {
/**
 * Restarts the route process. This is useful in combination with the `:route-processor`.
 *   In some cases route processor might use info from the app-db to determine the current route,
 *   which means that the value from the route processor might be different without the actual
 *   route change happening.
 */
keechma.controller.reroute = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","reroute"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
if((typeof keechma !== 'undefined') && (typeof keechma.controller !== 'undefined') && (typeof keechma.controller.router !== 'undefined')){
} else {
/**
 * Returns the app's router
 */
keechma.controller.router = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","router"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
cljs.core._add_method.call(null,keechma.controller.params,new cljs.core.Keyword(null,"default","default",-1987822328),(function (controller,route_params){
return route_params;
}));
cljs.core._add_method.call(null,keechma.controller.start,new cljs.core.Keyword(null,"default","default",-1987822328),(function (controller,params,app_db){
return app_db;
}));
cljs.core._add_method.call(null,keechma.controller.wake,new cljs.core.Keyword(null,"default","default",-1987822328),(function (controller,params,app_db){
return app_db;
}));
cljs.core._add_method.call(null,keechma.controller.stop,new cljs.core.Keyword(null,"default","default",-1987822328),(function (controller,params,app_db){
return app_db;
}));
cljs.core._add_method.call(null,keechma.controller.handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (controller,app_db_atom,in_chan,out_chan){
return null;
}));
cljs.core._add_method.call(null,keechma.controller.ssr_handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (controller,app_db_atom,done,in_chan,out_chan){
return keechma.controller.not_implemented;
}));
cljs.core._add_method.call(null,keechma.controller.context,new cljs.core.Keyword(null,"default","default",-1987822328),(function() {
var G__55051 = null;
var G__55051__1 = (function (controller){
return new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(controller);
});
var G__55051__2 = (function (controller,key){
var key_vec = ((cljs.core.vector_QMARK_.call(null,key))?key:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null));
return cljs.core.get_in.call(null,controller,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",-830191113)], null),key_vec));
});
G__55051 = function(controller,key){
switch(arguments.length){
case 1:
return G__55051__1.call(this,controller);
case 2:
return G__55051__2.call(this,controller,key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__55051.cljs$core$IFn$_invoke$arity$1 = G__55051__1;
G__55051.cljs$core$IFn$_invoke$arity$2 = G__55051__2;
return G__55051;
})()
);
cljs.core._add_method.call(null,keechma.controller.report,new cljs.core.Keyword(null,"default","default",-1987822328),(function() {
var G__55052 = null;
var G__55052__4 = (function (controller,direction,name,payload){
return keechma.controller.report.call(null,controller,direction,name,payload,keechma.reporter.cmd_info.call(null),new cljs.core.Keyword(null,"info","info",-317069002));
});
var G__55052__5 = (function (controller,direction,name,payload,cmd_info){
return keechma.controller.report.call(null,controller,direction,name,payload,cmd_info,new cljs.core.Keyword(null,"info","info",-317069002));
});
var G__55052__6 = (function (controller,direction,name,payload,cmd_info,severity){
var reporter = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"reporter","reporter",-805360621).cljs$core$IFn$_invoke$arity$1(controller);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return ((function (or__3949__auto__){
return (function (_,___$1,___$2,___$3,___$4,___$5,___$6,___$7){
return null;
});
;})(or__3949__auto__))
}
})();
var topic = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(controller);
return reporter.call(null,new cljs.core.Keyword(null,"controller","controller",2013778659),direction,topic,name,payload,cmd_info,severity);
});
G__55052 = function(controller,direction,name,payload,cmd_info,severity){
switch(arguments.length){
case 4:
return G__55052__4.call(this,controller,direction,name,payload);
case 5:
return G__55052__5.call(this,controller,direction,name,payload,cmd_info);
case 6:
return G__55052__6.call(this,controller,direction,name,payload,cmd_info,severity);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__55052.cljs$core$IFn$_invoke$arity$4 = G__55052__4;
G__55052.cljs$core$IFn$_invoke$arity$5 = G__55052__5;
G__55052.cljs$core$IFn$_invoke$arity$6 = G__55052__6;
return G__55052;
})()
);
cljs.core._add_method.call(null,keechma.controller.execute,new cljs.core.Keyword(null,"default","default",-1987822328),(function() {
var G__55053 = null;
var G__55053__2 = (function (controller,command_name){
return keechma.controller.execute.call(null,controller,command_name,null);
});
var G__55053__3 = (function (controller,command_name,args){
var cmd_info = keechma.reporter.cmd_info.call(null);
keechma.controller.report.call(null,controller,new cljs.core.Keyword(null,"in","in",-1531184865),command_name,args,cmd_info);

return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"in-chan","in-chan",1839083771).cljs$core$IFn$_invoke$arity$1(controller),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [command_name,args,cmd_info], null));
});
G__55053 = function(controller,command_name,args){
switch(arguments.length){
case 2:
return G__55053__2.call(this,controller,command_name);
case 3:
return G__55053__3.call(this,controller,command_name,args);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__55053.cljs$core$IFn$_invoke$arity$2 = G__55053__2;
G__55053.cljs$core$IFn$_invoke$arity$3 = G__55053__3;
return G__55053;
})()
);
cljs.core._add_method.call(null,keechma.controller.send_command,new cljs.core.Keyword(null,"default","default",-1987822328),(function() {
var G__55054 = null;
var G__55054__2 = (function (controller,command_name){
return keechma.controller.send_command.call(null,controller,command_name,null,null);
});
var G__55054__3 = (function (controller,command_name,args){
return keechma.controller.send_command.call(null,controller,command_name,args,null);
});
var G__55054__4 = (function (controller,command_name,args,origin){
var out_chan = new cljs.core.Keyword(null,"out-chan","out-chan",384315017).cljs$core$IFn$_invoke$arity$1(controller);
var cmd_info = keechma.reporter.cmd_info.call(null);
keechma.controller.report.call(null,controller,new cljs.core.Keyword(null,"out","out",-910545517),command_name,args,cmd_info);

cljs.core.async.put_BANG_.call(null,out_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [command_name,args,cmd_info], null));

return controller;
});
G__55054 = function(controller,command_name,args,origin){
switch(arguments.length){
case 2:
return G__55054__2.call(this,controller,command_name);
case 3:
return G__55054__3.call(this,controller,command_name,args);
case 4:
return G__55054__4.call(this,controller,command_name,args,origin);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__55054.cljs$core$IFn$_invoke$arity$2 = G__55054__2;
G__55054.cljs$core$IFn$_invoke$arity$3 = G__55054__3;
G__55054.cljs$core$IFn$_invoke$arity$4 = G__55054__4;
return G__55054;
})()
);
cljs.core._add_method.call(null,keechma.controller.broadcast,new cljs.core.Keyword(null,"default","default",-1987822328),(function() {
var G__55059 = null;
var G__55059__2 = (function (controller,command_name){
return keechma.controller.broadcast.call(null,controller,command_name,null,null);
});
var G__55059__3 = (function (controller,command_name,args){
return keechma.controller.broadcast.call(null,controller,command_name,args,null);
});
var G__55059__4 = (function (controller,command_name,args,origin){
var active_topics = new cljs.core.Keyword(null,"active-topics","active-topics",1278012558).cljs$core$IFn$_invoke$arity$1(controller).call(null);
var current_topic = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(controller);
var seq__55055 = cljs.core.seq.call(null,active_topics);
var chunk__55056 = null;
var count__55057 = (0);
var i__55058 = (0);
while(true){
if((i__55058 < count__55057)){
var t = cljs.core._nth.call(null,chunk__55056,i__55058);
if(cljs.core.not_EQ_.call(null,t,current_topic)){
keechma.controller.send_command.call(null,controller,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,command_name], null),args,origin);
} else {
}


var G__55060 = seq__55055;
var G__55061 = chunk__55056;
var G__55062 = count__55057;
var G__55063 = (i__55058 + (1));
seq__55055 = G__55060;
chunk__55056 = G__55061;
count__55057 = G__55062;
i__55058 = G__55063;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__55055);
if(temp__5720__auto__){
var seq__55055__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55055__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__55055__$1);
var G__55066 = cljs.core.chunk_rest.call(null,seq__55055__$1);
var G__55067 = c__4351__auto__;
var G__55068 = cljs.core.count.call(null,c__4351__auto__);
var G__55069 = (0);
seq__55055 = G__55066;
chunk__55056 = G__55067;
count__55057 = G__55068;
i__55058 = G__55069;
continue;
} else {
var t = cljs.core.first.call(null,seq__55055__$1);
if(cljs.core.not_EQ_.call(null,t,current_topic)){
keechma.controller.send_command.call(null,controller,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,command_name], null),args,origin);
} else {
}


var G__55074 = cljs.core.next.call(null,seq__55055__$1);
var G__55075 = null;
var G__55076 = (0);
var G__55077 = (0);
seq__55055 = G__55074;
chunk__55056 = G__55075;
count__55057 = G__55076;
i__55058 = G__55077;
continue;
}
} else {
return null;
}
}
break;
}
});
G__55059 = function(controller,command_name,args,origin){
switch(arguments.length){
case 2:
return G__55059__2.call(this,controller,command_name);
case 3:
return G__55059__3.call(this,controller,command_name,args);
case 4:
return G__55059__4.call(this,controller,command_name,args,origin);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__55059.cljs$core$IFn$_invoke$arity$2 = G__55059__2;
G__55059.cljs$core$IFn$_invoke$arity$3 = G__55059__3;
G__55059.cljs$core$IFn$_invoke$arity$4 = G__55059__4;
return G__55059;
})()
);
cljs.core._add_method.call(null,keechma.controller.is_running_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (controller){
return cljs.core._EQ_.call(null,controller,new cljs.core.Keyword(null,"running","running",1554969103).cljs$core$IFn$_invoke$arity$1(controller).call(null));
}));
cljs.core._add_method.call(null,keechma.controller.redirect,new cljs.core.Keyword(null,"default","default",-1987822328),(function() {
var G__55085 = null;
var G__55085__2 = (function (controller,params){
return keechma.controller.redirect.call(null,controller,params,null);
});
var G__55085__3 = (function (controller,params,action){
return new cljs.core.Keyword(null,"redirect-fn","redirect-fn",281458973).cljs$core$IFn$_invoke$arity$1(controller).call(null,params,action);
});
G__55085 = function(controller,params,action){
switch(arguments.length){
case 2:
return G__55085__2.call(this,controller,params);
case 3:
return G__55085__3.call(this,controller,params,action);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__55085.cljs$core$IFn$_invoke$arity$2 = G__55085__2;
G__55085.cljs$core$IFn$_invoke$arity$3 = G__55085__3;
return G__55085;
})()
);
cljs.core._add_method.call(null,keechma.controller.reroute,new cljs.core.Keyword(null,"default","default",-1987822328),(function (controller){
var out_chan = new cljs.core.Keyword(null,"out-chan","out-chan",384315017).cljs$core$IFn$_invoke$arity$1(controller);
var cmd_info = keechma.reporter.cmd_info.call(null);
var cmd_name = new cljs.core.Keyword("keechma.controller-manager","reroute","keechma.controller-manager/reroute",-463838217);
keechma.controller.report.call(null,controller,new cljs.core.Keyword(null,"out","out",-910545517),cmd_name,null,cmd_info);

cljs.core.async.put_BANG_.call(null,out_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cmd_name,null,cmd_info], null));

return controller;
}));
cljs.core._add_method.call(null,keechma.controller.router,new cljs.core.Keyword(null,"default","default",-1987822328),(function (controller){
return new cljs.core.Keyword(null,"router","router",1091916230).cljs$core$IFn$_invoke$arity$1(controller);
}));

//# sourceMappingURL=controller.js.map?rel=1563552880443
