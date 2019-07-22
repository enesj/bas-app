// Compiled by ClojureScript 1.10.339 {}
goog.provide('keechma.toolbox.tasks');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('medley.core');
goog.require('promesa.core');
goog.require('keechma.toolbox.pipeline.core');
goog.require('goog.async.AnimationDelay');
goog.require('goog.async.Throttle');

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
keechma.toolbox.tasks.TaskStateUpdate = (function (app_db,id,state,__meta,__extmap,__hash){
this.app_db = app_db;
this.id = id;
this.state = state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.tasks.TaskStateUpdate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

keechma.toolbox.tasks.TaskStateUpdate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k58297,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__58301 = k58297;
var G__58301__$1 = (((G__58301 instanceof cljs.core.Keyword))?G__58301.fqn:null);
switch (G__58301__$1) {
case "app-db":
return self__.app_db;

break;
case "id":
return self__.id;

break;
case "state":
return self__.state;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k58297,else__4206__auto__);

}
});

keechma.toolbox.tasks.TaskStateUpdate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#keechma.toolbox.tasks.TaskStateUpdate{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-db","app-db",865606302),self__.app_db],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null))], null),self__.__extmap));
});

keechma.toolbox.tasks.TaskStateUpdate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__58296){
var self__ = this;
var G__58296__$1 = this;
return (new cljs.core.RecordIter((0),G__58296__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"state","state",-1988618099)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.toolbox.tasks.TaskStateUpdate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.tasks.TaskStateUpdate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new keechma.toolbox.tasks.TaskStateUpdate(self__.app_db,self__.id,self__.state,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.tasks.TaskStateUpdate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

keechma.toolbox.tasks.TaskStateUpdate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (1240211953 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

keechma.toolbox.tasks.TaskStateUpdate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this58298,other58299){
var self__ = this;
var this58298__$1 = this;
return ((!((other58299 == null))) && ((this58298__$1.constructor === other58299.constructor)) && (cljs.core._EQ_.call(null,this58298__$1.app_db,other58299.app_db)) && (cljs.core._EQ_.call(null,this58298__$1.id,other58299.id)) && (cljs.core._EQ_.call(null,this58298__$1.state,other58299.state)) && (cljs.core._EQ_.call(null,this58298__$1.__extmap,other58299.__extmap)));
});

keechma.toolbox.tasks.TaskStateUpdate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"app-db","app-db",865606302),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new keechma.toolbox.tasks.TaskStateUpdate(self__.app_db,self__.id,self__.state,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

keechma.toolbox.tasks.TaskStateUpdate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__58296){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__58307 = cljs.core.keyword_identical_QMARK_;
var expr__58308 = k__4211__auto__;
if(cljs.core.truth_(pred__58307.call(null,new cljs.core.Keyword(null,"app-db","app-db",865606302),expr__58308))){
return (new keechma.toolbox.tasks.TaskStateUpdate(G__58296,self__.id,self__.state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__58307.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__58308))){
return (new keechma.toolbox.tasks.TaskStateUpdate(self__.app_db,G__58296,self__.state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__58307.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__58308))){
return (new keechma.toolbox.tasks.TaskStateUpdate(self__.app_db,self__.id,G__58296,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.tasks.TaskStateUpdate(self__.app_db,self__.id,self__.state,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__58296),null));
}
}
}
});

keechma.toolbox.tasks.TaskStateUpdate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"app-db","app-db",865606302),self__.app_db,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state","state",-1988618099),self__.state,null))], null),self__.__extmap));
});

keechma.toolbox.tasks.TaskStateUpdate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__58296){
var self__ = this;
var this__4202__auto____$1 = this;
return (new keechma.toolbox.tasks.TaskStateUpdate(self__.app_db,self__.id,self__.state,G__58296,self__.__extmap,self__.__hash));
});

keechma.toolbox.tasks.TaskStateUpdate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

keechma.toolbox.tasks.TaskStateUpdate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-db","app-db",-1788829467,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
});

keechma.toolbox.tasks.TaskStateUpdate.cljs$lang$type = true;

keechma.toolbox.tasks.TaskStateUpdate.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"keechma.toolbox.tasks/TaskStateUpdate",null,(1),null));
});

keechma.toolbox.tasks.TaskStateUpdate.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"keechma.toolbox.tasks/TaskStateUpdate");
});

/**
 * Positional factory function for keechma.toolbox.tasks/TaskStateUpdate.
 */
keechma.toolbox.tasks.__GT_TaskStateUpdate = (function keechma$toolbox$tasks$__GT_TaskStateUpdate(app_db,id,state){
return (new keechma.toolbox.tasks.TaskStateUpdate(app_db,id,state,null,null,null));
});

/**
 * Factory function for keechma.toolbox.tasks/TaskStateUpdate, taking a map of keywords to field values.
 */
keechma.toolbox.tasks.map__GT_TaskStateUpdate = (function keechma$toolbox$tasks$map__GT_TaskStateUpdate(G__58300){
var extmap__4236__auto__ = (function (){var G__58310 = cljs.core.dissoc.call(null,G__58300,new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"state","state",-1988618099));
if(cljs.core.record_QMARK_.call(null,G__58300)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__58310);
} else {
return G__58310;
}
})();
return (new keechma.toolbox.tasks.TaskStateUpdate(new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(G__58300),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__58300),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__58300),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});

keechma.toolbox.tasks.raf_producer = (function keechma$toolbox$tasks$raf_producer(res_chan,_){
var is_running_QMARK_ = cljs.core.atom.call(null,true);
var wait_delay = ((function (is_running_QMARK_){
return (function keechma$toolbox$tasks$raf_producer_$_wait_delay(){
return (new goog.async.AnimationDelay(((function (is_running_QMARK_){
return (function (val){
cljs.core.async.put_BANG_.call(null,res_chan,val);

if(cljs.core.truth_(cljs.core.deref.call(null,is_running_QMARK_))){
return keechma$toolbox$tasks$raf_producer_$_wait_delay.call(null);
} else {
return null;
}
});})(is_running_QMARK_))
)).start();
});})(is_running_QMARK_))
;
wait_delay.call(null);

return ((function (is_running_QMARK_,wait_delay){
return (function (){
cljs.core.reset_BANG_.call(null,is_running_QMARK_,false);

return null;
});
;})(is_running_QMARK_,wait_delay))
});
keechma.toolbox.tasks.throttle = (function keechma$toolbox$tasks$throttle(f,interval){
var t = (new goog.async.Throttle(f,interval));
return ((function (t){
return (function() { 
var G__58312__delegate = function (args){
return t.fire.apply(t,cljs.core.to_array.call(null,args));
};
var G__58312 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58313__i = 0, G__58313__a = new Array(arguments.length -  0);
while (G__58313__i < G__58313__a.length) {G__58313__a[G__58313__i] = arguments[G__58313__i + 0]; ++G__58313__i;}
  args = new cljs.core.IndexedSeq(G__58313__a,0,null);
} 
return G__58312__delegate.call(this,args);};
G__58312.cljs$lang$maxFixedArity = 0;
G__58312.cljs$lang$applyTo = (function (arglist__58314){
var args = cljs.core.seq(arglist__58314);
return G__58312__delegate(args);
});
G__58312.cljs$core$IFn$_invoke$arity$variadic = G__58312__delegate;
return G__58312;
})()
;
;})(t))
});
keechma.toolbox.tasks.app_db_change_producer = (function keechma$toolbox$tasks$app_db_change_producer(res_chan,app_db_watcher){
var throttled_put_BANG_ = keechma.toolbox.tasks.throttle.call(null,(function (){
return cljs.core.async.put_BANG_.call(null,res_chan,true);
}),(1));
app_db_watcher.call(null,((function (throttled_put_BANG_){
return (function (data){
return throttled_put_BANG_.call(null,data);
});})(throttled_put_BANG_))
);

return ((function (throttled_put_BANG_){
return (function (){
return null;
});
;})(throttled_put_BANG_))
});
keechma.toolbox.tasks.finish_task_BANG_ = (function keechma$toolbox$tasks$finish_task_BANG_(app_db,id,state){
var current = cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword("keechma.toolbox.tasks","tasks","keechma.toolbox.tasks/tasks",1082644599),id], null));
var version = new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(current);
var stopper = cljs.core.get_in.call(null,current,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stoppers","stoppers",-1386775922),version], null));
return medley.core.dissoc_in.call(null,(cljs.core.truth_(stopper)?stopper.call(null,app_db,state):app_db),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword("keechma.toolbox.tasks","tasks","keechma.toolbox.tasks/tasks",1082644599),id], null));
});
keechma.toolbox.tasks.make_app_db_watcher = (function keechma$toolbox$tasks$make_app_db_watcher(app_db_atom,watcher_id){
return (function (cb){
return cljs.core.add_watch.call(null,app_db_atom,watcher_id,(function (_,___$1,old_state,new_state){
if(cljs.core.not_EQ_.call(null,old_state,new_state)){
return cb.call(null,new_state);
} else {
return null;
}
}));
});
});
keechma.toolbox.tasks.clear_task_version = (function keechma$toolbox$tasks$clear_task_version(app_db,id,version){
return medley.core.dissoc_in.call(null,medley.core.dissoc_in.call(null,app_db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword("keechma.toolbox.tasks","tasks","keechma.toolbox.tasks/tasks",1082644599),id,new cljs.core.Keyword(null,"states","states",1389013542),version], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword("keechma.toolbox.tasks","tasks","keechma.toolbox.tasks/tasks",1082644599),id,new cljs.core.Keyword(null,"stoppers","stoppers",-1386775922),version], null));
});
keechma.toolbox.tasks.register_task_BANG_ = (function keechma$toolbox$tasks$register_task_BANG_(app_db_atom,id,producer,reducer,resolve,runner_chan){
var version = cljs.core.gensym.call(null,id);
var watcher_id = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,version], null);
var finisher = producer.call(null,runner_chan,keechma.toolbox.tasks.make_app_db_watcher.call(null,app_db_atom,watcher_id));
var stopper = ((function (version,watcher_id,finisher){
return (function (app_db,state){
cljs.core.async.close_BANG_.call(null,runner_chan);

cljs.core.remove_watch.call(null,app_db_atom,watcher_id);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword("keechma.toolbox.tasks","stopped","keechma.toolbox.tasks/stopped",1900756919),state)){
resolve.call(null);
} else {
resolve.call(null,new cljs.core.Keyword("keechma.toolbox.pipeline.core","break","keechma.toolbox.pipeline.core/break",-1503986725));
}

var temp__5718__auto__ = finisher.call(null);
if(cljs.core.truth_(temp__5718__auto__)){
var finisher_res = temp__5718__auto__;
var new_app_db = reducer.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"value","value",305978217),finisher_res,new cljs.core.Keyword(null,"id","id",-1388402092),id], null),app_db);
if((new_app_db instanceof keechma.toolbox.tasks.TaskStateUpdate)){
throw cljs.core.ex_info.call(null,"It's impossible to change task state when the task is not running",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"task","task",-1476607993),id,new cljs.core.Keyword(null,"state","state",-1988618099),state], null));
} else {
return keechma.toolbox.tasks.clear_task_version.call(null,new_app_db,id,version);
}
} else {
return keechma.toolbox.tasks.clear_task_version.call(null,app_db,id,version);
}
});})(version,watcher_id,finisher))
;
cljs.core.reset_BANG_.call(null,app_db_atom,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,keechma.toolbox.tasks.finish_task_BANG_.call(null,cljs.core.deref.call(null,app_db_atom),id,new cljs.core.Keyword("keechma.toolbox.tasks","cancelled","keechma.toolbox.tasks/cancelled",-738362585)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword("keechma.toolbox.tasks","tasks","keechma.toolbox.tasks/tasks",1082644599),id,new cljs.core.Keyword(null,"version","version",425292698)], null),version),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword("keechma.toolbox.tasks","tasks","keechma.toolbox.tasks/tasks",1082644599),id,new cljs.core.Keyword(null,"states","states",1389013542),version], null),new cljs.core.Keyword("keechma.toolbox.tasks","running","keechma.toolbox.tasks/running",93195802)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword("keechma.toolbox.tasks","tasks","keechma.toolbox.tasks/tasks",1082644599),id,new cljs.core.Keyword(null,"stoppers","stoppers",-1386775922),version], null),stopper));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stopper","stopper",-304934685),stopper,new cljs.core.Keyword(null,"version","version",425292698),version], null);
});
keechma.toolbox.tasks.update_task_state_BANG_ = (function keechma$toolbox$tasks$update_task_state_BANG_(state){
return (function (app_db,id){
return keechma.toolbox.pipeline.core.commit_BANG_.call(null,keechma.toolbox.tasks.finish_task_BANG_.call(null,app_db,id,state));
});
});
keechma.toolbox.tasks.stop_task_BANG_ = keechma.toolbox.tasks.update_task_state_BANG_.call(null,new cljs.core.Keyword("keechma.toolbox.tasks","stopped","keechma.toolbox.tasks/stopped",1900756919));
keechma.toolbox.tasks.cancel_task_BANG_ = keechma.toolbox.tasks.update_task_state_BANG_.call(null,new cljs.core.Keyword("keechma.toolbox.tasks","cancelled","keechma.toolbox.tasks/cancelled",-738362585));
keechma.toolbox.tasks.update_task_state = (function keechma$toolbox$tasks$update_task_state(state){
return (function (app_db,id){
return keechma.toolbox.tasks.__GT_TaskStateUpdate.call(null,app_db,id,state);
});
});
keechma.toolbox.tasks.stop_task = keechma.toolbox.tasks.update_task_state.call(null,new cljs.core.Keyword("keechma.toolbox.tasks","stopped","keechma.toolbox.tasks/stopped",1900756919));
keechma.toolbox.tasks.cancel_task = keechma.toolbox.tasks.update_task_state.call(null,new cljs.core.Keyword("keechma.toolbox.tasks","cancelled","keechma.toolbox.tasks/cancelled",-738362585));
keechma.toolbox.tasks.update_app_db_atom_BANG_ = (function keechma$toolbox$tasks$update_app_db_atom_BANG_(payload,app_db_atom){
if((payload == null)){
return app_db_atom;
} else {
return cljs.core.reset_BANG_.call(null,app_db_atom,payload);
}
});
keechma.toolbox.tasks.ex_task_cancelled = (function keechma$toolbox$tasks$ex_task_cancelled(id,version){
return cljs.core.ex_info.call(null,"Task cancelled",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("keechma.toolbox.tasks","task","keechma.toolbox.tasks/task",-283157456),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"version","version",425292698),version,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword("keechma.toolbox.tasks","cancelled","keechma.toolbox.tasks/cancelled",-738362585)], null)], null));
});
keechma.toolbox.tasks.task_running_QMARK_ = (function keechma$toolbox$tasks$task_running_QMARK_(app_db,id){
var task = cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword("keechma.toolbox.tasks","tasks","keechma.toolbox.tasks/tasks",1082644599),id], null));
var current_version = new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(task);
return !((cljs.core.get_in.call(null,task,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),current_version], null)) == null));
});
keechma.toolbox.tasks.task_loop = (function keechma$toolbox$tasks$task_loop(p__58330){
var map__58331 = p__58330;
var map__58331__$1 = ((((!((map__58331 == null)))?(((((map__58331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58331):map__58331);
var reject = cljs.core.get.call(null,map__58331__$1,new cljs.core.Keyword(null,"reject","reject",1415953113));
var reducer = cljs.core.get.call(null,map__58331__$1,new cljs.core.Keyword(null,"reducer","reducer",1705592893));
var producer = cljs.core.get.call(null,map__58331__$1,new cljs.core.Keyword(null,"producer","producer",-1034261436));
var pipelines$ = cljs.core.get.call(null,map__58331__$1,new cljs.core.Keyword(null,"pipelines$","pipelines$",-1591679384));
var value = cljs.core.get.call(null,map__58331__$1,new cljs.core.Keyword(null,"value","value",305978217));
var app_db_atom = cljs.core.get.call(null,map__58331__$1,new cljs.core.Keyword(null,"app-db-atom","app-db-atom",-1595839667));
var ctrl = cljs.core.get.call(null,map__58331__$1,new cljs.core.Keyword(null,"ctrl","ctrl",361402094));
var id = cljs.core.get.call(null,map__58331__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var resolve = cljs.core.get.call(null,map__58331__$1,new cljs.core.Keyword(null,"resolve","resolve",-1584445482));
var runner_chan = cljs.core.async.chan.call(null);
var pipelines_watcher_key = cljs.core.keyword.call(null,cljs.core.gensym.call(null,new cljs.core.Keyword(null,"w","w",354169001)));
var parent_pipeline_id = new cljs.core.Keyword("pipeline","running","pipeline/running",844864673).cljs$core$IFn$_invoke$arity$1(ctrl);
var map__58333 = keechma.toolbox.tasks.register_task_BANG_.call(null,app_db_atom,id,producer,reducer,resolve,runner_chan);
var map__58333__$1 = ((((!((map__58333 == null)))?(((((map__58333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58333):map__58333);
var stopper = cljs.core.get.call(null,map__58333__$1,new cljs.core.Keyword(null,"stopper","stopper",-304934685));
var version = cljs.core.get.call(null,map__58333__$1,new cljs.core.Keyword(null,"version","version",425292698));
cljs.core.add_watch.call(null,pipelines$,pipelines_watcher_key,((function (runner_chan,pipelines_watcher_key,parent_pipeline_id,map__58333,map__58333__$1,stopper,version,map__58331,map__58331__$1,reject,reducer,producer,pipelines$,value,app_db_atom,ctrl,id,resolve){
return (function (_,___$1,___$2,new_val){
if(cljs.core.truth_(cljs.core.get_in.call(null,new_val,cljs.core.conj.call(null,parent_pipeline_id,new cljs.core.Keyword(null,"running?","running?",-257884763))))){
return null;
} else {
return cljs.core.reset_BANG_.call(null,app_db_atom,keechma.toolbox.tasks.finish_task_BANG_.call(null,cljs.core.deref.call(null,app_db_atom),id,new cljs.core.Keyword("keechma.toolbox.tasks","cancelled","keechma.toolbox.tasks/cancelled",-738362585)));
}
});})(runner_chan,pipelines_watcher_key,parent_pipeline_id,map__58333,map__58333__$1,stopper,version,map__58331,map__58331__$1,reject,reducer,producer,pipelines$,value,app_db_atom,ctrl,id,resolve))
);

var started_at = (new Date()).getTime();
var c__44950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44950__auto__,started_at,runner_chan,pipelines_watcher_key,parent_pipeline_id,map__58333,map__58333__$1,stopper,version,map__58331,map__58331__$1,reject,reducer,producer,pipelines$,value,app_db_atom,ctrl,id,resolve){
return (function (){
var f__44951__auto__ = (function (){var switch__24619__auto__ = ((function (c__44950__auto__,started_at,runner_chan,pipelines_watcher_key,parent_pipeline_id,map__58333,map__58333__$1,stopper,version,map__58331,map__58331__$1,reject,reducer,producer,pipelines$,value,app_db_atom,ctrl,id,resolve){
return (function (state_58371){
var state_val_58372 = (state_58371[(1)]);
if((state_val_58372 === (7))){
var inst_58367 = (state_58371[(2)]);
var state_58371__$1 = state_58371;
var statearr_58373_58402 = state_58371__$1;
(statearr_58373_58402[(2)] = inst_58367);

(statearr_58373_58402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (1))){
var inst_58335 = (0);
var state_58371__$1 = (function (){var statearr_58374 = state_58371;
(statearr_58374[(7)] = inst_58335);

return statearr_58374;
})();
var statearr_58375_58403 = state_58371__$1;
(statearr_58375_58403[(2)] = null);

(statearr_58375_58403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (4))){
var inst_58338 = (state_58371[(8)]);
var inst_58338__$1 = (state_58371[(2)]);
var state_58371__$1 = (function (){var statearr_58376 = state_58371;
(statearr_58376[(8)] = inst_58338__$1);

return statearr_58376;
})();
if(cljs.core.truth_(inst_58338__$1)){
var statearr_58377_58404 = state_58371__$1;
(statearr_58377_58404[(1)] = (5));

} else {
var statearr_58378_58405 = state_58371__$1;
(statearr_58378_58405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (13))){
var inst_58335 = (state_58371[(7)]);
var inst_58359 = (state_58371[(2)]);
var inst_58360 = (inst_58335 + (1));
var inst_58335__$1 = inst_58360;
var state_58371__$1 = (function (){var statearr_58379 = state_58371;
(statearr_58379[(9)] = inst_58359);

(statearr_58379[(7)] = inst_58335__$1);

return statearr_58379;
})();
var statearr_58380_58406 = state_58371__$1;
(statearr_58380_58406[(2)] = null);

(statearr_58380_58406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (6))){
var inst_58365 = cljs.core.remove_watch.call(null,pipelines$,pipelines_watcher_key);
var state_58371__$1 = state_58371;
var statearr_58381_58407 = state_58371__$1;
(statearr_58381_58407[(2)] = inst_58365);

(statearr_58381_58407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (3))){
var inst_58369 = (state_58371[(2)]);
var state_58371__$1 = state_58371;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58371__$1,inst_58369);
} else {
if((state_val_58372 === (12))){
var state_58371__$1 = state_58371;
var statearr_58382_58408 = state_58371__$1;
(statearr_58382_58408[(2)] = null);

(statearr_58382_58408[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (2))){
var state_58371__$1 = state_58371;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58371__$1,(4),runner_chan);
} else {
if((state_val_58372 === (11))){
var inst_58344 = (state_58371[(10)]);
var inst_58356 = cljs.core.reset_BANG_.call(null,app_db_atom,inst_58344);
var state_58371__$1 = state_58371;
var statearr_58383_58409 = state_58371__$1;
(statearr_58383_58409[(2)] = inst_58356);

(statearr_58383_58409[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (9))){
var inst_58344 = (state_58371[(10)]);
var inst_58354 = cljs.core.not_EQ_.call(null,app_db_atom,inst_58344);
var state_58371__$1 = state_58371;
if(inst_58354){
var statearr_58384_58413 = state_58371__$1;
(statearr_58384_58413[(1)] = (11));

} else {
var statearr_58385_58414 = state_58371__$1;
(statearr_58385_58414[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (5))){
var inst_58344 = (state_58371[(10)]);
var inst_58338 = (state_58371[(8)]);
var inst_58335 = (state_58371[(7)]);
var inst_58340 = cljs.core.deref.call(null,app_db_atom);
var inst_58341 = [new cljs.core.Keyword(null,"times-invoked","times-invoked",-1156475095),new cljs.core.Keyword(null,"started-at","started-at",1318767912),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"state","state",-1988618099)];
var inst_58342 = [inst_58335,started_at,id,inst_58338,new cljs.core.Keyword("keechma.toolbox.tasks","running","keechma.toolbox.tasks/running",93195802)];
var inst_58343 = cljs.core.PersistentHashMap.fromArrays(inst_58341,inst_58342);
var inst_58344__$1 = reducer.call(null,inst_58343,inst_58340);
var inst_58345 = (inst_58344__$1 instanceof keechma.toolbox.tasks.TaskStateUpdate);
var state_58371__$1 = (function (){var statearr_58386 = state_58371;
(statearr_58386[(10)] = inst_58344__$1);

return statearr_58386;
})();
if(cljs.core.truth_(inst_58345)){
var statearr_58387_58415 = state_58371__$1;
(statearr_58387_58415[(1)] = (8));

} else {
var statearr_58388_58416 = state_58371__$1;
(statearr_58388_58416[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (10))){
var inst_58363 = (state_58371[(2)]);
var state_58371__$1 = state_58371;
var statearr_58389_58418 = state_58371__$1;
(statearr_58389_58418[(2)] = inst_58363);

(statearr_58389_58418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58372 === (8))){
var inst_58344 = (state_58371[(10)]);
var inst_58347 = cljs.core.remove_watch.call(null,pipelines$,pipelines_watcher_key);
var inst_58348 = new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(inst_58344);
var inst_58349 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_58344);
var inst_58350 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(inst_58344);
var inst_58351 = keechma.toolbox.tasks.finish_task_BANG_.call(null,inst_58348,inst_58349,inst_58350);
var inst_58352 = cljs.core.reset_BANG_.call(null,app_db_atom,inst_58351);
var state_58371__$1 = (function (){var statearr_58390 = state_58371;
(statearr_58390[(11)] = inst_58347);

return statearr_58390;
})();
var statearr_58391_58423 = state_58371__$1;
(statearr_58391_58423[(2)] = inst_58352);

(statearr_58391_58423[(1)] = (10));


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
});})(c__44950__auto__,started_at,runner_chan,pipelines_watcher_key,parent_pipeline_id,map__58333,map__58333__$1,stopper,version,map__58331,map__58331__$1,reject,reducer,producer,pipelines$,value,app_db_atom,ctrl,id,resolve))
;
return ((function (switch__24619__auto__,c__44950__auto__,started_at,runner_chan,pipelines_watcher_key,parent_pipeline_id,map__58333,map__58333__$1,stopper,version,map__58331,map__58331__$1,reject,reducer,producer,pipelines$,value,app_db_atom,ctrl,id,resolve){
return (function() {
var keechma$toolbox$tasks$task_loop_$_state_machine__24620__auto__ = null;
var keechma$toolbox$tasks$task_loop_$_state_machine__24620__auto____0 = (function (){
var statearr_58392 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58392[(0)] = keechma$toolbox$tasks$task_loop_$_state_machine__24620__auto__);

(statearr_58392[(1)] = (1));

return statearr_58392;
});
var keechma$toolbox$tasks$task_loop_$_state_machine__24620__auto____1 = (function (state_58371){
while(true){
var ret_value__24621__auto__ = (function (){try{while(true){
var result__24622__auto__ = switch__24619__auto__.call(null,state_58371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24622__auto__;
}
break;
}
}catch (e58393){if((e58393 instanceof Object)){
var ex__24623__auto__ = e58393;
var statearr_58394_58425 = state_58371;
(statearr_58394_58425[(5)] = ex__24623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58393;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58426 = state_58371;
state_58371 = G__58426;
continue;
} else {
return ret_value__24621__auto__;
}
break;
}
});
keechma$toolbox$tasks$task_loop_$_state_machine__24620__auto__ = function(state_58371){
switch(arguments.length){
case 0:
return keechma$toolbox$tasks$task_loop_$_state_machine__24620__auto____0.call(this);
case 1:
return keechma$toolbox$tasks$task_loop_$_state_machine__24620__auto____1.call(this,state_58371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keechma$toolbox$tasks$task_loop_$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$toolbox$tasks$task_loop_$_state_machine__24620__auto____0;
keechma$toolbox$tasks$task_loop_$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$toolbox$tasks$task_loop_$_state_machine__24620__auto____1;
return keechma$toolbox$tasks$task_loop_$_state_machine__24620__auto__;
})()
;})(switch__24619__auto__,c__44950__auto__,started_at,runner_chan,pipelines_watcher_key,parent_pipeline_id,map__58333,map__58333__$1,stopper,version,map__58331,map__58331__$1,reject,reducer,producer,pipelines$,value,app_db_atom,ctrl,id,resolve))
})();
var state__44952__auto__ = (function (){var statearr_58395 = f__44951__auto__.call(null);
(statearr_58395[(6)] = c__44950__auto__);

return statearr_58395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44952__auto__);
});})(c__44950__auto__,started_at,runner_chan,pipelines_watcher_key,parent_pipeline_id,map__58333,map__58333__$1,stopper,version,map__58331,map__58331__$1,reject,reducer,producer,pipelines$,value,app_db_atom,ctrl,id,resolve))
);

return c__44950__auto__;
});
keechma.toolbox.tasks.blocking_task_producer = (function keechma$toolbox$tasks$blocking_task_producer(var_args){
var G__58428 = arguments.length;
switch (G__58428) {
case 6:
return keechma.toolbox.tasks.blocking_task_producer.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return keechma.toolbox.tasks.blocking_task_producer.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.toolbox.tasks.blocking_task_producer.cljs$core$IFn$_invoke$arity$6 = (function (producer,id,reducer,ctrl,app_db_atom,value){
return keechma.toolbox.tasks.blocking_task_producer.call(null,producer,id,reducer,ctrl,app_db_atom,value,null);
});

keechma.toolbox.tasks.blocking_task_producer.cljs$core$IFn$_invoke$arity$7 = (function (producer,id,reducer,ctrl,app_db_atom,value,pipelines$){
return promesa.core.promise.call(null,(function (resolve,reject){
return keechma.toolbox.tasks.task_loop.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"producer","producer",-1034261436),new cljs.core.Keyword(null,"pipelines$","pipelines$",-1591679384),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"app-db-atom","app-db-atom",-1595839667),new cljs.core.Keyword(null,"ctrl","ctrl",361402094),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"resolve","resolve",-1584445482),new cljs.core.Keyword(null,"reject","reject",1415953113),new cljs.core.Keyword(null,"reducer","reducer",1705592893)],[producer,pipelines$,value,app_db_atom,ctrl,id,resolve,reject,reducer]));
}));
});

keechma.toolbox.tasks.blocking_task_producer.cljs$lang$maxFixedArity = 7;

keechma.toolbox.tasks.blocking_task_BANG_ = (function keechma$toolbox$tasks$blocking_task_BANG_(producer,id,reducer){
return cljs.core.with_meta.call(null,cljs.core.partial.call(null,keechma.toolbox.tasks.blocking_task_producer,producer,id,reducer),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pipeline?","pipeline?",1488086785),true], null));
});
keechma.toolbox.tasks.non_blocking_task_producer = (function keechma$toolbox$tasks$non_blocking_task_producer(var_args){
var G__58431 = arguments.length;
switch (G__58431) {
case 6:
return keechma.toolbox.tasks.non_blocking_task_producer.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return keechma.toolbox.tasks.non_blocking_task_producer.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.toolbox.tasks.non_blocking_task_producer.cljs$core$IFn$_invoke$arity$6 = (function (producer,id,reducer,ctrl,app_db_atom,value){
return keechma.toolbox.tasks.non_blocking_task_producer.call(null,producer,id,reducer,ctrl,app_db_atom,value,null);
});

keechma.toolbox.tasks.non_blocking_task_producer.cljs$core$IFn$_invoke$arity$7 = (function (producer,id,reducer,ctrl,app_db_atom,value,pipelines$){
var parent_pipeline_id_58433 = new cljs.core.Keyword("pipeline","running","pipeline/running",844864673).cljs$core$IFn$_invoke$arity$1(ctrl);
var running_path_58434 = cljs.core.conj.call(null,parent_pipeline_id_58433,new cljs.core.Keyword(null,"running?","running?",-257884763));
keechma.toolbox.tasks.task_loop.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"producer","producer",-1034261436),new cljs.core.Keyword(null,"pipelines$","pipelines$",-1591679384),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"app-db-atom","app-db-atom",-1595839667),new cljs.core.Keyword(null,"ctrl","ctrl",361402094),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"resolve","resolve",-1584445482),new cljs.core.Keyword(null,"reject","reject",1415953113),new cljs.core.Keyword(null,"reducer","reducer",1705592893)],[producer,cljs.core.atom.call(null,cljs.core.assoc_in.call(null,cljs.core.PersistentArrayMap.EMPTY,running_path_58434,true)),value,app_db_atom,ctrl,id,cljs.core.identity,cljs.core.identity,reducer]));

return null;
});

keechma.toolbox.tasks.non_blocking_task_producer.cljs$lang$maxFixedArity = 7;

keechma.toolbox.tasks.non_blocking_task_BANG_ = (function keechma$toolbox$tasks$non_blocking_task_BANG_(producer,id,reducer){
return cljs.core.with_meta.call(null,cljs.core.partial.call(null,keechma.toolbox.tasks.non_blocking_task_producer,producer,id,reducer),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pipeline?","pipeline?",1488086785),true], null));
});
keechma.toolbox.tasks.blocking_raf_BANG_ = cljs.core.partial.call(null,keechma.toolbox.tasks.blocking_task_BANG_,keechma.toolbox.tasks.raf_producer);
keechma.toolbox.tasks.non_blocking_raf_BANG_ = cljs.core.partial.call(null,keechma.toolbox.tasks.non_blocking_task_BANG_,keechma.toolbox.tasks.raf_producer);
keechma.toolbox.tasks.block_until_BANG_ = (function keechma$toolbox$tasks$block_until_BANG_(id,predicate_fn){
return keechma.toolbox.tasks.blocking_task_BANG_.call(null,keechma.toolbox.tasks.app_db_change_producer,id,(function (_,app_db){
var res = predicate_fn.call(null,app_db);
if(cljs.core.truth_(res)){
return keechma.toolbox.tasks.stop_task.call(null,app_db,id);
} else {
return app_db;
}
}));
});

//# sourceMappingURL=tasks.js.map?rel=1563552883306
