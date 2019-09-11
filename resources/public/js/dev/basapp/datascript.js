// Compiled by ClojureScript 1.10.339 {}
goog.provide('basapp.datascript');
goog.require('cljs.core');
goog.require('keechma.app_state.core');
goog.require('datascript.core');
goog.require('reagent.core');
goog.require('keechma.toolbox.pipeline.core');
goog.require('keechma.controller');
goog.require('keechma.toolbox.ui');
basapp.datascript.start_datascript = (function basapp$datascript$start_datascript(config){
var datomic_cursor = reagent.core.cursor.call(null,new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datascript","datascript",-2114593819)], null));
var conn = cljs.core.get_in.call(null,config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"datascript","datascript",-2114593819)], null));
datascript.core.listen_BANG_.call(null,conn,new cljs.core.Keyword("basapp.datascript","tx","basapp.datascript/tx",-693731584),((function (datomic_cursor,conn){
return (function (tx_report){
return cljs.core.reset_BANG_.call(null,datomic_cursor,new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(tx_report));
});})(datomic_cursor,conn))
);

return config;
});
basapp.datascript.stop_datascript = (function basapp$datascript$stop_datascript(config){
var conn = cljs.core.get_in.call(null,config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"datascript","datascript",-2114593819)], null));
datascript.core.unlisten_BANG_.call(null,conn,new cljs.core.Keyword("basapp.datascript","tx","basapp.datascript/tx",-693731584));

return config;
});
basapp.datascript.install = (function basapp$datascript$install(var_args){
var G__40763 = arguments.length;
switch (G__40763) {
case 1:
return basapp.datascript.install.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return basapp.datascript.install.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

basapp.datascript.install.cljs$core$IFn$_invoke$arity$1 = (function (app_config){
return basapp.datascript.install.call(null,app_config,null);
});

basapp.datascript.install.cljs$core$IFn$_invoke$arity$2 = (function (app_config,schema){
return keechma.app_state.core.reg_on_stop.call(null,keechma.app_state.core.reg_on_start.call(null,cljs.core.assoc_in.call(null,app_config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"datascript","datascript",-2114593819)], null),datascript.core.create_conn.call(null,schema)),(function (p1__40760_SHARP_){
return basapp.datascript.start_datascript.call(null,p1__40760_SHARP_);
})),(function (p1__40761_SHARP_){
return basapp.datascript.stop_datascript.call(null,p1__40761_SHARP_);
}));
});

basapp.datascript.install.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {keechma.toolbox.pipeline.core.ISideffect}
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
basapp.datascript.TransactSideffect = (function (transactions,__meta,__extmap,__hash){
this.transactions = transactions;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
basapp.datascript.TransactSideffect.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

basapp.datascript.TransactSideffect.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k40766,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__40770 = k40766;
var G__40770__$1 = (((G__40770 instanceof cljs.core.Keyword))?G__40770.fqn:null);
switch (G__40770__$1) {
case "transactions":
return self__.transactions;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k40766,else__4206__auto__);

}
});

basapp.datascript.TransactSideffect.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#basapp.datascript.TransactSideffect{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transactions","transactions",-1425846118),self__.transactions],null))], null),self__.__extmap));
});

basapp.datascript.TransactSideffect.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40765){
var self__ = this;
var G__40765__$1 = this;
return (new cljs.core.RecordIter((0),G__40765__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transactions","transactions",-1425846118)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

basapp.datascript.TransactSideffect.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

basapp.datascript.TransactSideffect.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new basapp.datascript.TransactSideffect(self__.transactions,self__.__meta,self__.__extmap,self__.__hash));
});

basapp.datascript.TransactSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$ = cljs.core.PROTOCOL_SENTINEL;

basapp.datascript.TransactSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$call_BANG_$arity$4 = (function (this$,controller,_,___$1){
var self__ = this;
var this$__$1 = this;
var ds = keechma.controller.context.call(null,controller,new cljs.core.Keyword(null,"datascript","datascript",-2114593819));
return datascript.core.transact_BANG_.call(null,ds,self__.transactions);
});

basapp.datascript.TransactSideffect.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

basapp.datascript.TransactSideffect.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-556401388 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

basapp.datascript.TransactSideffect.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40767,other40768){
var self__ = this;
var this40767__$1 = this;
return ((!((other40768 == null))) && ((this40767__$1.constructor === other40768.constructor)) && (cljs.core._EQ_.call(null,this40767__$1.transactions,other40768.transactions)) && (cljs.core._EQ_.call(null,this40767__$1.__extmap,other40768.__extmap)));
});

basapp.datascript.TransactSideffect.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transactions","transactions",-1425846118),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new basapp.datascript.TransactSideffect(self__.transactions,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

basapp.datascript.TransactSideffect.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__40765){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__40771 = cljs.core.keyword_identical_QMARK_;
var expr__40772 = k__4211__auto__;
if(cljs.core.truth_(pred__40771.call(null,new cljs.core.Keyword(null,"transactions","transactions",-1425846118),expr__40772))){
return (new basapp.datascript.TransactSideffect(G__40765,self__.__meta,self__.__extmap,null));
} else {
return (new basapp.datascript.TransactSideffect(self__.transactions,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__40765),null));
}
});

basapp.datascript.TransactSideffect.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"transactions","transactions",-1425846118),self__.transactions,null))], null),self__.__extmap));
});

basapp.datascript.TransactSideffect.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__40765){
var self__ = this;
var this__4202__auto____$1 = this;
return (new basapp.datascript.TransactSideffect(self__.transactions,G__40765,self__.__extmap,self__.__hash));
});

basapp.datascript.TransactSideffect.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

basapp.datascript.TransactSideffect.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transactions","transactions",214685409,null)], null);
});

basapp.datascript.TransactSideffect.cljs$lang$type = true;

basapp.datascript.TransactSideffect.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"basapp.datascript/TransactSideffect",null,(1),null));
});

basapp.datascript.TransactSideffect.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"basapp.datascript/TransactSideffect");
});

/**
 * Positional factory function for basapp.datascript/TransactSideffect.
 */
basapp.datascript.__GT_TransactSideffect = (function basapp$datascript$__GT_TransactSideffect(transactions){
return (new basapp.datascript.TransactSideffect(transactions,null,null,null));
});

/**
 * Factory function for basapp.datascript/TransactSideffect, taking a map of keywords to field values.
 */
basapp.datascript.map__GT_TransactSideffect = (function basapp$datascript$map__GT_TransactSideffect(G__40769){
var extmap__4236__auto__ = (function (){var G__40774 = cljs.core.dissoc.call(null,G__40769,new cljs.core.Keyword(null,"transactions","transactions",-1425846118));
if(cljs.core.record_QMARK_.call(null,G__40769)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__40774);
} else {
return G__40774;
}
})();
return (new basapp.datascript.TransactSideffect(new cljs.core.Keyword(null,"transactions","transactions",-1425846118).cljs$core$IFn$_invoke$arity$1(G__40769),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});

basapp.datascript.transact_BANG_ = (function basapp$datascript$transact_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___40777 = arguments.length;
var i__4532__auto___40778 = (0);
while(true){
if((i__4532__auto___40778 < len__4531__auto___40777)){
args__4534__auto__.push((arguments[i__4532__auto___40778]));

var G__40779 = (i__4532__auto___40778 + (1));
i__4532__auto___40778 = G__40779;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return basapp.datascript.transact_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

basapp.datascript.transact_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (transactions){
return basapp.datascript.__GT_TransactSideffect.call(null,cljs.core.apply.call(null,cljs.core.concat,transactions));
});

basapp.datascript.transact_BANG_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
basapp.datascript.transact_BANG_.cljs$lang$applyTo = (function (seq40776){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40776));
});

basapp.datascript.q_GT_ = (function basapp$datascript$q_GT_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___40783 = arguments.length;
var i__4532__auto___40784 = (0);
while(true){
if((i__4532__auto___40784 < len__4531__auto___40783)){
args__4534__auto__.push((arguments[i__4532__auto___40784]));

var G__40785 = (i__4532__auto___40784 + (1));
i__4532__auto___40784 = G__40785;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return basapp.datascript.q_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

basapp.datascript.q_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,query,args){
var db = keechma.toolbox.ui.sub_GT_.call(null,ctx,new cljs.core.Keyword(null,"datascript","datascript",-2114593819));
if(cljs.core.truth_(db)){
if(cljs.core.seq.call(null,args)){
return cljs.core.apply.call(null,datascript.core.q,query,db,args);
} else {
return datascript.core.q.call(null,query,db);
}
} else {
return null;
}
});

basapp.datascript.q_GT_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
basapp.datascript.q_GT_.cljs$lang$applyTo = (function (seq40780){
var G__40781 = cljs.core.first.call(null,seq40780);
var seq40780__$1 = cljs.core.next.call(null,seq40780);
var G__40782 = cljs.core.first.call(null,seq40780__$1);
var seq40780__$2 = cljs.core.next.call(null,seq40780__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40781,G__40782,seq40780__$2);
});

basapp.datascript.entity_GT_ = (function basapp$datascript$entity_GT_(ctx,id){
var temp__5720__auto__ = keechma.toolbox.ui.sub_GT_.call(null,ctx,new cljs.core.Keyword(null,"datascript","datascript",-2114593819));
if(cljs.core.truth_(temp__5720__auto__)){
var db = temp__5720__auto__;
return datascript.core.entity.call(null,db,id);
} else {
return null;
}
});

//# sourceMappingURL=datascript.js.map?rel=1568104886950
