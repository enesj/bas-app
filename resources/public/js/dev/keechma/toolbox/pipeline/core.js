// Compiled by ClojureScript 1.10.339 {}
goog.provide('keechma.toolbox.pipeline.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('promesa.core');
goog.require('keechma.controller');
goog.require('medley.core');

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
keechma.toolbox.pipeline.core.Error = (function (type,message,payload,cause,__meta,__extmap,__hash){
this.type = type;
this.message = message;
this.payload = payload;
this.cause = cause;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.pipeline.core.Error.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k56424,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__56431 = k56424;
var G__56431__$1 = (((G__56431 instanceof cljs.core.Keyword))?G__56431.fqn:null);
switch (G__56431__$1) {
case "type":
return self__.type;

break;
case "message":
return self__.message;

break;
case "payload":
return self__.payload;

break;
case "cause":
return self__.cause;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k56424,else__4206__auto__);

}
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#keechma.toolbox.pipeline.core.Error{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"message","message",-406056002),self__.message],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"payload","payload",-383036092),self__.payload],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cause","cause",231901252),self__.cause],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56423){
var self__ = this;
var G__56423__$1 = this;
return (new cljs.core.RecordIter((0),G__56423__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.Keyword(null,"cause","cause",231901252)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.Error(self__.type,self__.message,self__.payload,self__.cause,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (37091761 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56425,other56426){
var self__ = this;
var this56425__$1 = this;
return ((!((other56426 == null))) && ((this56425__$1.constructor === other56426.constructor)) && (cljs.core._EQ_.call(null,this56425__$1.type,other56426.type)) && (cljs.core._EQ_.call(null,this56425__$1.message,other56426.message)) && (cljs.core._EQ_.call(null,this56425__$1.payload,other56426.payload)) && (cljs.core._EQ_.call(null,this56425__$1.cause,other56426.cause)) && (cljs.core._EQ_.call(null,this56425__$1.__extmap,other56426.__extmap)));
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cause","cause",231901252),null,new cljs.core.Keyword(null,"payload","payload",-383036092),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"message","message",-406056002),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new keechma.toolbox.pipeline.core.Error(self__.type,self__.message,self__.payload,self__.cause,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__56423){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__56444 = cljs.core.keyword_identical_QMARK_;
var expr__56445 = k__4211__auto__;
if(cljs.core.truth_(pred__56444.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__56445))){
return (new keechma.toolbox.pipeline.core.Error(G__56423,self__.message,self__.payload,self__.cause,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__56444.call(null,new cljs.core.Keyword(null,"message","message",-406056002),expr__56445))){
return (new keechma.toolbox.pipeline.core.Error(self__.type,G__56423,self__.payload,self__.cause,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__56444.call(null,new cljs.core.Keyword(null,"payload","payload",-383036092),expr__56445))){
return (new keechma.toolbox.pipeline.core.Error(self__.type,self__.message,G__56423,self__.cause,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__56444.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),expr__56445))){
return (new keechma.toolbox.pipeline.core.Error(self__.type,self__.message,self__.payload,G__56423,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.pipeline.core.Error(self__.type,self__.message,self__.payload,self__.cause,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__56423),null));
}
}
}
}
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type","type",1174270348),self__.type,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"message","message",-406056002),self__.message,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"payload","payload",-383036092),self__.payload,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"cause","cause",231901252),self__.cause,null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__56423){
var self__ = this;
var this__4202__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.Error(self__.type,self__.message,self__.payload,self__.cause,G__56423,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

keechma.toolbox.pipeline.core.Error.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"message","message",1234475525,null),new cljs.core.Symbol(null,"payload","payload",1257495435,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null);
});

keechma.toolbox.pipeline.core.Error.cljs$lang$type = true;

keechma.toolbox.pipeline.core.Error.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"keechma.toolbox.pipeline.core/Error",null,(1),null));
});

keechma.toolbox.pipeline.core.Error.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"keechma.toolbox.pipeline.core/Error");
});

/**
 * Positional factory function for keechma.toolbox.pipeline.core/Error.
 */
keechma.toolbox.pipeline.core.__GT_Error = (function keechma$toolbox$pipeline$core$__GT_Error(type,message,payload,cause){
return (new keechma.toolbox.pipeline.core.Error(type,message,payload,cause,null,null,null));
});

/**
 * Factory function for keechma.toolbox.pipeline.core/Error, taking a map of keywords to field values.
 */
keechma.toolbox.pipeline.core.map__GT_Error = (function keechma$toolbox$pipeline$core$map__GT_Error(G__56427){
var extmap__4236__auto__ = (function (){var G__56450 = cljs.core.dissoc.call(null,G__56427,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.Keyword(null,"cause","cause",231901252));
if(cljs.core.record_QMARK_.call(null,G__56427)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__56450);
} else {
return G__56450;
}
})();
return (new keechma.toolbox.pipeline.core.Error(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__56427),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(G__56427),new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(G__56427),new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(G__56427),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});

keechma.toolbox.pipeline.core.error_BANG_ = (function keechma$toolbox$pipeline$core$error_BANG_(type,payload){
return keechma.toolbox.pipeline.core.__GT_Error.call(null,type,null,payload,null);
});

/**
 * @interface
 */
keechma.toolbox.pipeline.core.ISideffect = function(){};

keechma.toolbox.pipeline.core.call_BANG_ = (function keechma$toolbox$pipeline$core$call_BANG_(this$,controller,app_db_atom,pipelines$){
if(((!((this$ == null))) && (!((this$.keechma$toolbox$pipeline$core$ISideffect$call_BANG_$arity$4 == null))))){
return this$.keechma$toolbox$pipeline$core$ISideffect$call_BANG_$arity$4(this$,controller,app_db_atom,pipelines$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (keechma.toolbox.pipeline.core.call_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,controller,app_db_atom,pipelines$);
} else {
var m__4244__auto____$1 = (keechma.toolbox.pipeline.core.call_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,controller,app_db_atom,pipelines$);
} else {
throw cljs.core.missing_protocol.call(null,"ISideffect.call!",this$);
}
}
}
});


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
keechma.toolbox.pipeline.core.CommitSideffect = (function (value,cb,__meta,__extmap,__hash){
this.value = value;
this.cb = cb;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k56502,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__56506 = k56502;
var G__56506__$1 = (((G__56506 instanceof cljs.core.Keyword))?G__56506.fqn:null);
switch (G__56506__$1) {
case "value":
return self__.value;

break;
case "cb":
return self__.cb;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k56502,else__4206__auto__);

}
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#keechma.toolbox.pipeline.core.CommitSideffect{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cb","cb",589947841),self__.cb],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56501){
var self__ = this;
var G__56501__$1 = this;
return (new cljs.core.RecordIter((0),G__56501__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"cb","cb",589947841)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.CommitSideffect(self__.value,self__.cb,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (706431185 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56503,other56504){
var self__ = this;
var this56503__$1 = this;
return ((!((other56504 == null))) && ((this56503__$1.constructor === other56504.constructor)) && (cljs.core._EQ_.call(null,this56503__$1.value,other56504.value)) && (cljs.core._EQ_.call(null,this56503__$1.cb,other56504.cb)) && (cljs.core._EQ_.call(null,this56503__$1.__extmap,other56504.__extmap)));
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$ = cljs.core.PROTOCOL_SENTINEL;

keechma.toolbox.pipeline.core.CommitSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$call_BANG_$arity$4 = (function (this$,_,app_db_atom,___$1){
var self__ = this;
var this$__$1 = this;
var cb__$1 = new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(this$__$1);
cljs.core.reset_BANG_.call(null,app_db_atom,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(this$__$1));

if(cljs.core.truth_(cb__$1)){
return cb__$1.call(null);
} else {
return null;
}
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cb","cb",589947841),null,new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new keechma.toolbox.pipeline.core.CommitSideffect(self__.value,self__.cb,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__56501){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__56513 = cljs.core.keyword_identical_QMARK_;
var expr__56514 = k__4211__auto__;
if(cljs.core.truth_(pred__56513.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__56514))){
return (new keechma.toolbox.pipeline.core.CommitSideffect(G__56501,self__.cb,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__56513.call(null,new cljs.core.Keyword(null,"cb","cb",589947841),expr__56514))){
return (new keechma.toolbox.pipeline.core.CommitSideffect(self__.value,G__56501,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.pipeline.core.CommitSideffect(self__.value,self__.cb,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__56501),null));
}
}
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"cb","cb",589947841),self__.cb,null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__56501){
var self__ = this;
var this__4202__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.CommitSideffect(self__.value,self__.cb,G__56501,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

keechma.toolbox.pipeline.core.CommitSideffect.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null);
});

keechma.toolbox.pipeline.core.CommitSideffect.cljs$lang$type = true;

keechma.toolbox.pipeline.core.CommitSideffect.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"keechma.toolbox.pipeline.core/CommitSideffect",null,(1),null));
});

keechma.toolbox.pipeline.core.CommitSideffect.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"keechma.toolbox.pipeline.core/CommitSideffect");
});

/**
 * Positional factory function for keechma.toolbox.pipeline.core/CommitSideffect.
 */
keechma.toolbox.pipeline.core.__GT_CommitSideffect = (function keechma$toolbox$pipeline$core$__GT_CommitSideffect(value,cb){
return (new keechma.toolbox.pipeline.core.CommitSideffect(value,cb,null,null,null));
});

/**
 * Factory function for keechma.toolbox.pipeline.core/CommitSideffect, taking a map of keywords to field values.
 */
keechma.toolbox.pipeline.core.map__GT_CommitSideffect = (function keechma$toolbox$pipeline$core$map__GT_CommitSideffect(G__56505){
var extmap__4236__auto__ = (function (){var G__56523 = cljs.core.dissoc.call(null,G__56505,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"cb","cb",589947841));
if(cljs.core.record_QMARK_.call(null,G__56505)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__56523);
} else {
return G__56523;
}
})();
return (new keechma.toolbox.pipeline.core.CommitSideffect(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__56505),new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(G__56505),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});


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
keechma.toolbox.pipeline.core.SendCommandSideffect = (function (command,payload,__meta,__extmap,__hash){
this.command = command;
this.payload = payload;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k56562,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__56566 = k56562;
var G__56566__$1 = (((G__56566 instanceof cljs.core.Keyword))?G__56566.fqn:null);
switch (G__56566__$1) {
case "command":
return self__.command;

break;
case "payload":
return self__.payload;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k56562,else__4206__auto__);

}
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#keechma.toolbox.pipeline.core.SendCommandSideffect{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"command","command",-894540724),self__.command],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"payload","payload",-383036092),self__.payload],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56561){
var self__ = this;
var G__56561__$1 = this;
return (new cljs.core.RecordIter((0),G__56561__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"payload","payload",-383036092)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.SendCommandSideffect(self__.command,self__.payload,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1801969228 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56563,other56564){
var self__ = this;
var this56563__$1 = this;
return ((!((other56564 == null))) && ((this56563__$1.constructor === other56564.constructor)) && (cljs.core._EQ_.call(null,this56563__$1.command,other56564.command)) && (cljs.core._EQ_.call(null,this56563__$1.payload,other56564.payload)) && (cljs.core._EQ_.call(null,this56563__$1.__extmap,other56564.__extmap)));
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$ = cljs.core.PROTOCOL_SENTINEL;

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$call_BANG_$arity$4 = (function (this$,controller,_,___$1){
var self__ = this;
var this$__$1 = this;
return keechma.controller.send_command.call(null,controller,new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(this$__$1),new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(this$__$1));
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),null,new cljs.core.Keyword(null,"command","command",-894540724),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new keechma.toolbox.pipeline.core.SendCommandSideffect(self__.command,self__.payload,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__56561){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__56572 = cljs.core.keyword_identical_QMARK_;
var expr__56573 = k__4211__auto__;
if(cljs.core.truth_(pred__56572.call(null,new cljs.core.Keyword(null,"command","command",-894540724),expr__56573))){
return (new keechma.toolbox.pipeline.core.SendCommandSideffect(G__56561,self__.payload,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__56572.call(null,new cljs.core.Keyword(null,"payload","payload",-383036092),expr__56573))){
return (new keechma.toolbox.pipeline.core.SendCommandSideffect(self__.command,G__56561,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.pipeline.core.SendCommandSideffect(self__.command,self__.payload,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__56561),null));
}
}
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"command","command",-894540724),self__.command,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"payload","payload",-383036092),self__.payload,null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__56561){
var self__ = this;
var this__4202__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.SendCommandSideffect(self__.command,self__.payload,G__56561,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

keechma.toolbox.pipeline.core.SendCommandSideffect.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"command","command",745990803,null),new cljs.core.Symbol(null,"payload","payload",1257495435,null)], null);
});

keechma.toolbox.pipeline.core.SendCommandSideffect.cljs$lang$type = true;

keechma.toolbox.pipeline.core.SendCommandSideffect.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"keechma.toolbox.pipeline.core/SendCommandSideffect",null,(1),null));
});

keechma.toolbox.pipeline.core.SendCommandSideffect.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"keechma.toolbox.pipeline.core/SendCommandSideffect");
});

/**
 * Positional factory function for keechma.toolbox.pipeline.core/SendCommandSideffect.
 */
keechma.toolbox.pipeline.core.__GT_SendCommandSideffect = (function keechma$toolbox$pipeline$core$__GT_SendCommandSideffect(command,payload){
return (new keechma.toolbox.pipeline.core.SendCommandSideffect(command,payload,null,null,null));
});

/**
 * Factory function for keechma.toolbox.pipeline.core/SendCommandSideffect, taking a map of keywords to field values.
 */
keechma.toolbox.pipeline.core.map__GT_SendCommandSideffect = (function keechma$toolbox$pipeline$core$map__GT_SendCommandSideffect(G__56565){
var extmap__4236__auto__ = (function (){var G__56577 = cljs.core.dissoc.call(null,G__56565,new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"payload","payload",-383036092));
if(cljs.core.record_QMARK_.call(null,G__56565)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__56577);
} else {
return G__56577;
}
})();
return (new keechma.toolbox.pipeline.core.SendCommandSideffect(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(G__56565),new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(G__56565),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});


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
keechma.toolbox.pipeline.core.BroadcastSideffect = (function (command,payload,__meta,__extmap,__hash){
this.command = command;
this.payload = payload;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.pipeline.core.BroadcastSideffect.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

keechma.toolbox.pipeline.core.BroadcastSideffect.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k56634,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__56644 = k56634;
var G__56644__$1 = (((G__56644 instanceof cljs.core.Keyword))?G__56644.fqn:null);
switch (G__56644__$1) {
case "command":
return self__.command;

break;
case "payload":
return self__.payload;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k56634,else__4206__auto__);

}
});

keechma.toolbox.pipeline.core.BroadcastSideffect.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#keechma.toolbox.pipeline.core.BroadcastSideffect{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"command","command",-894540724),self__.command],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"payload","payload",-383036092),self__.payload],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.BroadcastSideffect.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56633){
var self__ = this;
var G__56633__$1 = this;
return (new cljs.core.RecordIter((0),G__56633__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"payload","payload",-383036092)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.toolbox.pipeline.core.BroadcastSideffect.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.pipeline.core.BroadcastSideffect.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.BroadcastSideffect(self__.command,self__.payload,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.BroadcastSideffect.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

keechma.toolbox.pipeline.core.BroadcastSideffect.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1454814604 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

keechma.toolbox.pipeline.core.BroadcastSideffect.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56635,other56636){
var self__ = this;
var this56635__$1 = this;
return ((!((other56636 == null))) && ((this56635__$1.constructor === other56636.constructor)) && (cljs.core._EQ_.call(null,this56635__$1.command,other56636.command)) && (cljs.core._EQ_.call(null,this56635__$1.payload,other56636.payload)) && (cljs.core._EQ_.call(null,this56635__$1.__extmap,other56636.__extmap)));
});

keechma.toolbox.pipeline.core.BroadcastSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$ = cljs.core.PROTOCOL_SENTINEL;

keechma.toolbox.pipeline.core.BroadcastSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$call_BANG_$arity$4 = (function (this$,controller,_,___$1){
var self__ = this;
var this$__$1 = this;
return keechma.controller.broadcast.call(null,controller,new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(this$__$1),new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(this$__$1));
});

keechma.toolbox.pipeline.core.BroadcastSideffect.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),null,new cljs.core.Keyword(null,"command","command",-894540724),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new keechma.toolbox.pipeline.core.BroadcastSideffect(self__.command,self__.payload,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

keechma.toolbox.pipeline.core.BroadcastSideffect.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__56633){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__56657 = cljs.core.keyword_identical_QMARK_;
var expr__56658 = k__4211__auto__;
if(cljs.core.truth_(pred__56657.call(null,new cljs.core.Keyword(null,"command","command",-894540724),expr__56658))){
return (new keechma.toolbox.pipeline.core.BroadcastSideffect(G__56633,self__.payload,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__56657.call(null,new cljs.core.Keyword(null,"payload","payload",-383036092),expr__56658))){
return (new keechma.toolbox.pipeline.core.BroadcastSideffect(self__.command,G__56633,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.pipeline.core.BroadcastSideffect(self__.command,self__.payload,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__56633),null));
}
}
});

keechma.toolbox.pipeline.core.BroadcastSideffect.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"command","command",-894540724),self__.command,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"payload","payload",-383036092),self__.payload,null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.BroadcastSideffect.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__56633){
var self__ = this;
var this__4202__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.BroadcastSideffect(self__.command,self__.payload,G__56633,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.BroadcastSideffect.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

keechma.toolbox.pipeline.core.BroadcastSideffect.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"command","command",745990803,null),new cljs.core.Symbol(null,"payload","payload",1257495435,null)], null);
});

keechma.toolbox.pipeline.core.BroadcastSideffect.cljs$lang$type = true;

keechma.toolbox.pipeline.core.BroadcastSideffect.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"keechma.toolbox.pipeline.core/BroadcastSideffect",null,(1),null));
});

keechma.toolbox.pipeline.core.BroadcastSideffect.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"keechma.toolbox.pipeline.core/BroadcastSideffect");
});

/**
 * Positional factory function for keechma.toolbox.pipeline.core/BroadcastSideffect.
 */
keechma.toolbox.pipeline.core.__GT_BroadcastSideffect = (function keechma$toolbox$pipeline$core$__GT_BroadcastSideffect(command,payload){
return (new keechma.toolbox.pipeline.core.BroadcastSideffect(command,payload,null,null,null));
});

/**
 * Factory function for keechma.toolbox.pipeline.core/BroadcastSideffect, taking a map of keywords to field values.
 */
keechma.toolbox.pipeline.core.map__GT_BroadcastSideffect = (function keechma$toolbox$pipeline$core$map__GT_BroadcastSideffect(G__56637){
var extmap__4236__auto__ = (function (){var G__56665 = cljs.core.dissoc.call(null,G__56637,new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"payload","payload",-383036092));
if(cljs.core.record_QMARK_.call(null,G__56637)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__56665);
} else {
return G__56665;
}
})();
return (new keechma.toolbox.pipeline.core.BroadcastSideffect(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(G__56637),new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(G__56637),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});


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
keechma.toolbox.pipeline.core.ExecuteSideffect = (function (command,payload,__meta,__extmap,__hash){
this.command = command;
this.payload = payload;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k56717,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__56727 = k56717;
var G__56727__$1 = (((G__56727 instanceof cljs.core.Keyword))?G__56727.fqn:null);
switch (G__56727__$1) {
case "command":
return self__.command;

break;
case "payload":
return self__.payload;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k56717,else__4206__auto__);

}
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#keechma.toolbox.pipeline.core.ExecuteSideffect{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"command","command",-894540724),self__.command],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"payload","payload",-383036092),self__.payload],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56716){
var self__ = this;
var G__56716__$1 = this;
return (new cljs.core.RecordIter((0),G__56716__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"payload","payload",-383036092)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.ExecuteSideffect(self__.command,self__.payload,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (1063192084 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56718,other56719){
var self__ = this;
var this56718__$1 = this;
return ((!((other56719 == null))) && ((this56718__$1.constructor === other56719.constructor)) && (cljs.core._EQ_.call(null,this56718__$1.command,other56719.command)) && (cljs.core._EQ_.call(null,this56718__$1.payload,other56719.payload)) && (cljs.core._EQ_.call(null,this56718__$1.__extmap,other56719.__extmap)));
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$ = cljs.core.PROTOCOL_SENTINEL;

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$call_BANG_$arity$4 = (function (this$,controller,_,___$1){
var self__ = this;
var this$__$1 = this;
return keechma.controller.execute.call(null,controller,new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(this$__$1),new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(this$__$1));
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),null,new cljs.core.Keyword(null,"command","command",-894540724),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new keechma.toolbox.pipeline.core.ExecuteSideffect(self__.command,self__.payload,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__56716){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__56734 = cljs.core.keyword_identical_QMARK_;
var expr__56735 = k__4211__auto__;
if(cljs.core.truth_(pred__56734.call(null,new cljs.core.Keyword(null,"command","command",-894540724),expr__56735))){
return (new keechma.toolbox.pipeline.core.ExecuteSideffect(G__56716,self__.payload,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__56734.call(null,new cljs.core.Keyword(null,"payload","payload",-383036092),expr__56735))){
return (new keechma.toolbox.pipeline.core.ExecuteSideffect(self__.command,G__56716,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.pipeline.core.ExecuteSideffect(self__.command,self__.payload,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__56716),null));
}
}
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"command","command",-894540724),self__.command,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"payload","payload",-383036092),self__.payload,null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__56716){
var self__ = this;
var this__4202__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.ExecuteSideffect(self__.command,self__.payload,G__56716,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

keechma.toolbox.pipeline.core.ExecuteSideffect.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"command","command",745990803,null),new cljs.core.Symbol(null,"payload","payload",1257495435,null)], null);
});

keechma.toolbox.pipeline.core.ExecuteSideffect.cljs$lang$type = true;

keechma.toolbox.pipeline.core.ExecuteSideffect.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"keechma.toolbox.pipeline.core/ExecuteSideffect",null,(1),null));
});

keechma.toolbox.pipeline.core.ExecuteSideffect.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"keechma.toolbox.pipeline.core/ExecuteSideffect");
});

/**
 * Positional factory function for keechma.toolbox.pipeline.core/ExecuteSideffect.
 */
keechma.toolbox.pipeline.core.__GT_ExecuteSideffect = (function keechma$toolbox$pipeline$core$__GT_ExecuteSideffect(command,payload){
return (new keechma.toolbox.pipeline.core.ExecuteSideffect(command,payload,null,null,null));
});

/**
 * Factory function for keechma.toolbox.pipeline.core/ExecuteSideffect, taking a map of keywords to field values.
 */
keechma.toolbox.pipeline.core.map__GT_ExecuteSideffect = (function keechma$toolbox$pipeline$core$map__GT_ExecuteSideffect(G__56726){
var extmap__4236__auto__ = (function (){var G__56740 = cljs.core.dissoc.call(null,G__56726,new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"payload","payload",-383036092));
if(cljs.core.record_QMARK_.call(null,G__56726)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__56740);
} else {
return G__56740;
}
})();
return (new keechma.toolbox.pipeline.core.ExecuteSideffect(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(G__56726),new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(G__56726),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});


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
keechma.toolbox.pipeline.core.RedirectSideffect = (function (params,action,__meta,__extmap,__hash){
this.params = params;
this.action = action;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k56769,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__56773 = k56769;
var G__56773__$1 = (((G__56773 instanceof cljs.core.Keyword))?G__56773.fqn:null);
switch (G__56773__$1) {
case "params":
return self__.params;

break;
case "action":
return self__.action;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k56769,else__4206__auto__);

}
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#keechma.toolbox.pipeline.core.RedirectSideffect{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"action","action",-811238024),self__.action],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56768){
var self__ = this;
var G__56768__$1 = this;
return (new cljs.core.RecordIter((0),G__56768__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"action","action",-811238024)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.RedirectSideffect(self__.params,self__.action,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (829097778 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56770,other56771){
var self__ = this;
var this56770__$1 = this;
return ((!((other56771 == null))) && ((this56770__$1.constructor === other56771.constructor)) && (cljs.core._EQ_.call(null,this56770__$1.params,other56771.params)) && (cljs.core._EQ_.call(null,this56770__$1.action,other56771.action)) && (cljs.core._EQ_.call(null,this56770__$1.__extmap,other56771.__extmap)));
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$ = cljs.core.PROTOCOL_SENTINEL;

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$call_BANG_$arity$4 = (function (this$,controller,_,___$1){
var self__ = this;
var this$__$1 = this;
var action__$1 = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(this$__$1);
var params__$1 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(action__$1)){
return keechma.controller.redirect.call(null,controller,params__$1,action__$1);
} else {
return keechma.controller.redirect.call(null,controller,params__$1);
}
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"action","action",-811238024),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new keechma.toolbox.pipeline.core.RedirectSideffect(self__.params,self__.action,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__56768){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__56785 = cljs.core.keyword_identical_QMARK_;
var expr__56786 = k__4211__auto__;
if(cljs.core.truth_(pred__56785.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__56786))){
return (new keechma.toolbox.pipeline.core.RedirectSideffect(G__56768,self__.action,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__56785.call(null,new cljs.core.Keyword(null,"action","action",-811238024),expr__56786))){
return (new keechma.toolbox.pipeline.core.RedirectSideffect(self__.params,G__56768,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.pipeline.core.RedirectSideffect(self__.params,self__.action,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__56768),null));
}
}
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"action","action",-811238024),self__.action,null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__56768){
var self__ = this;
var this__4202__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.RedirectSideffect(self__.params,self__.action,G__56768,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

keechma.toolbox.pipeline.core.RedirectSideffect.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"action","action",829293503,null)], null);
});

keechma.toolbox.pipeline.core.RedirectSideffect.cljs$lang$type = true;

keechma.toolbox.pipeline.core.RedirectSideffect.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"keechma.toolbox.pipeline.core/RedirectSideffect",null,(1),null));
});

keechma.toolbox.pipeline.core.RedirectSideffect.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"keechma.toolbox.pipeline.core/RedirectSideffect");
});

/**
 * Positional factory function for keechma.toolbox.pipeline.core/RedirectSideffect.
 */
keechma.toolbox.pipeline.core.__GT_RedirectSideffect = (function keechma$toolbox$pipeline$core$__GT_RedirectSideffect(params,action){
return (new keechma.toolbox.pipeline.core.RedirectSideffect(params,action,null,null,null));
});

/**
 * Factory function for keechma.toolbox.pipeline.core/RedirectSideffect, taking a map of keywords to field values.
 */
keechma.toolbox.pipeline.core.map__GT_RedirectSideffect = (function keechma$toolbox$pipeline$core$map__GT_RedirectSideffect(G__56772){
var extmap__4236__auto__ = (function (){var G__56788 = cljs.core.dissoc.call(null,G__56772,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"action","action",-811238024));
if(cljs.core.record_QMARK_.call(null,G__56772)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__56788);
} else {
return G__56788;
}
})();
return (new keechma.toolbox.pipeline.core.RedirectSideffect(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__56772),new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__56772),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});


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
keechma.toolbox.pipeline.core.DoSideffect = (function (sideffects,__meta,__extmap,__hash){
this.sideffects = sideffects;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k56825,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__56833 = k56825;
var G__56833__$1 = (((G__56833 instanceof cljs.core.Keyword))?G__56833.fqn:null);
switch (G__56833__$1) {
case "sideffects":
return self__.sideffects;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k56825,else__4206__auto__);

}
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#keechma.toolbox.pipeline.core.DoSideffect{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sideffects","sideffects",1173151920),self__.sideffects],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56824){
var self__ = this;
var G__56824__$1 = this;
return (new cljs.core.RecordIter((0),G__56824__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sideffects","sideffects",1173151920)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.DoSideffect(self__.sideffects,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (1418968668 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56826,other56827){
var self__ = this;
var this56826__$1 = this;
return ((!((other56827 == null))) && ((this56826__$1.constructor === other56827.constructor)) && (cljs.core._EQ_.call(null,this56826__$1.sideffects,other56827.sideffects)) && (cljs.core._EQ_.call(null,this56826__$1.__extmap,other56827.__extmap)));
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$ = cljs.core.PROTOCOL_SENTINEL;

keechma.toolbox.pipeline.core.DoSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$call_BANG_$arity$4 = (function (this$,controller,app_db_atom,pipelines$){
var self__ = this;
var this$__$1 = this;
var sideffects__$1 = new cljs.core.Keyword(null,"sideffects","sideffects",1173151920).cljs$core$IFn$_invoke$arity$1(this$__$1);
var seq__56838 = cljs.core.seq.call(null,sideffects__$1);
var chunk__56839 = null;
var count__56840 = (0);
var i__56841 = (0);
while(true){
if((i__56841 < count__56840)){
var s = cljs.core._nth.call(null,chunk__56839,i__56841);
keechma.toolbox.pipeline.core.call_BANG_.call(null,s,controller,app_db_atom,pipelines$);


var G__56867 = seq__56838;
var G__56868 = chunk__56839;
var G__56869 = count__56840;
var G__56870 = (i__56841 + (1));
seq__56838 = G__56867;
chunk__56839 = G__56868;
count__56840 = G__56869;
i__56841 = G__56870;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__56838);
if(temp__5720__auto__){
var seq__56838__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56838__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__56838__$1);
var G__56871 = cljs.core.chunk_rest.call(null,seq__56838__$1);
var G__56872 = c__4351__auto__;
var G__56873 = cljs.core.count.call(null,c__4351__auto__);
var G__56874 = (0);
seq__56838 = G__56871;
chunk__56839 = G__56872;
count__56840 = G__56873;
i__56841 = G__56874;
continue;
} else {
var s = cljs.core.first.call(null,seq__56838__$1);
keechma.toolbox.pipeline.core.call_BANG_.call(null,s,controller,app_db_atom,pipelines$);


var G__56875 = cljs.core.next.call(null,seq__56838__$1);
var G__56876 = null;
var G__56877 = (0);
var G__56878 = (0);
seq__56838 = G__56875;
chunk__56839 = G__56876;
count__56840 = G__56877;
i__56841 = G__56878;
continue;
}
} else {
return null;
}
}
break;
}
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sideffects","sideffects",1173151920),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new keechma.toolbox.pipeline.core.DoSideffect(self__.sideffects,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__56824){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__56842 = cljs.core.keyword_identical_QMARK_;
var expr__56843 = k__4211__auto__;
if(cljs.core.truth_(pred__56842.call(null,new cljs.core.Keyword(null,"sideffects","sideffects",1173151920),expr__56843))){
return (new keechma.toolbox.pipeline.core.DoSideffect(G__56824,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.pipeline.core.DoSideffect(self__.sideffects,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__56824),null));
}
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sideffects","sideffects",1173151920),self__.sideffects,null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__56824){
var self__ = this;
var this__4202__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.DoSideffect(self__.sideffects,G__56824,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

keechma.toolbox.pipeline.core.DoSideffect.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sideffects","sideffects",-1481283849,null)], null);
});

keechma.toolbox.pipeline.core.DoSideffect.cljs$lang$type = true;

keechma.toolbox.pipeline.core.DoSideffect.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"keechma.toolbox.pipeline.core/DoSideffect",null,(1),null));
});

keechma.toolbox.pipeline.core.DoSideffect.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"keechma.toolbox.pipeline.core/DoSideffect");
});

/**
 * Positional factory function for keechma.toolbox.pipeline.core/DoSideffect.
 */
keechma.toolbox.pipeline.core.__GT_DoSideffect = (function keechma$toolbox$pipeline$core$__GT_DoSideffect(sideffects){
return (new keechma.toolbox.pipeline.core.DoSideffect(sideffects,null,null,null));
});

/**
 * Factory function for keechma.toolbox.pipeline.core/DoSideffect, taking a map of keywords to field values.
 */
keechma.toolbox.pipeline.core.map__GT_DoSideffect = (function keechma$toolbox$pipeline$core$map__GT_DoSideffect(G__56828){
var extmap__4236__auto__ = (function (){var G__56845 = cljs.core.dissoc.call(null,G__56828,new cljs.core.Keyword(null,"sideffects","sideffects",1173151920));
if(cljs.core.record_QMARK_.call(null,G__56828)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__56845);
} else {
return G__56845;
}
})();
return (new keechma.toolbox.pipeline.core.DoSideffect(new cljs.core.Keyword(null,"sideffects","sideffects",1173151920).cljs$core$IFn$_invoke$arity$1(G__56828),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});


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
keechma.toolbox.pipeline.core.RunPipelineSideffect = (function (pipeline_key,args,__meta,__extmap,__hash){
this.pipeline_key = pipeline_key;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k56880,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__56884 = k56880;
var G__56884__$1 = (((G__56884 instanceof cljs.core.Keyword))?G__56884.fqn:null);
switch (G__56884__$1) {
case "pipeline-key":
return self__.pipeline_key;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k56880,else__4206__auto__);

}
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#keechma.toolbox.pipeline.core.RunPipelineSideffect{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pipeline-key","pipeline-key",-1849937086),self__.pipeline_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56879){
var self__ = this;
var G__56879__$1 = this;
return (new cljs.core.RecordIter((0),G__56879__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pipeline-key","pipeline-key",-1849937086),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.RunPipelineSideffect(self__.pipeline_key,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-45318976 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56881,other56882){
var self__ = this;
var this56881__$1 = this;
return ((!((other56882 == null))) && ((this56881__$1.constructor === other56882.constructor)) && (cljs.core._EQ_.call(null,this56881__$1.pipeline_key,other56882.pipeline_key)) && (cljs.core._EQ_.call(null,this56881__$1.args,other56882.args)) && (cljs.core._EQ_.call(null,this56881__$1.__extmap,other56882.__extmap)));
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$ = cljs.core.PROTOCOL_SENTINEL;

keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$call_BANG_$arity$4 = (function (this$,controller,app_db_atom,pipelines$){
var self__ = this;
var this$__$1 = this;
var pipeline = cljs.core.get_in.call(null,controller,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pipelines","pipelines",687128919),self__.pipeline_key], null));
if(cljs.core.truth_(pipeline)){
return pipeline.call(null,controller,app_db_atom,self__.args,pipelines$);
} else {
throw cljs.core.ex_info.call(null,["Pipeline ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.pipeline_key)," doesn't exist"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pipeline","pipeline",-401746042),self__.pipeline_key], null));
}
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"pipeline-key","pipeline-key",-1849937086),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new keechma.toolbox.pipeline.core.RunPipelineSideffect(self__.pipeline_key,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__56879){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__56885 = cljs.core.keyword_identical_QMARK_;
var expr__56886 = k__4211__auto__;
if(cljs.core.truth_(pred__56885.call(null,new cljs.core.Keyword(null,"pipeline-key","pipeline-key",-1849937086),expr__56886))){
return (new keechma.toolbox.pipeline.core.RunPipelineSideffect(G__56879,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__56885.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__56886))){
return (new keechma.toolbox.pipeline.core.RunPipelineSideffect(self__.pipeline_key,G__56879,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.pipeline.core.RunPipelineSideffect(self__.pipeline_key,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__56879),null));
}
}
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pipeline-key","pipeline-key",-1849937086),self__.pipeline_key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"args","args",1315556576),self__.args,null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__56879){
var self__ = this;
var this__4202__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.RunPipelineSideffect(self__.pipeline_key,self__.args,G__56879,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pipeline-key","pipeline-key",-209405559,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.cljs$lang$type = true;

keechma.toolbox.pipeline.core.RunPipelineSideffect.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"keechma.toolbox.pipeline.core/RunPipelineSideffect",null,(1),null));
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"keechma.toolbox.pipeline.core/RunPipelineSideffect");
});

/**
 * Positional factory function for keechma.toolbox.pipeline.core/RunPipelineSideffect.
 */
keechma.toolbox.pipeline.core.__GT_RunPipelineSideffect = (function keechma$toolbox$pipeline$core$__GT_RunPipelineSideffect(pipeline_key,args){
return (new keechma.toolbox.pipeline.core.RunPipelineSideffect(pipeline_key,args,null,null,null));
});

/**
 * Factory function for keechma.toolbox.pipeline.core/RunPipelineSideffect, taking a map of keywords to field values.
 */
keechma.toolbox.pipeline.core.map__GT_RunPipelineSideffect = (function keechma$toolbox$pipeline$core$map__GT_RunPipelineSideffect(G__56883){
var extmap__4236__auto__ = (function (){var G__56888 = cljs.core.dissoc.call(null,G__56883,new cljs.core.Keyword(null,"pipeline-key","pipeline-key",-1849937086),new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.record_QMARK_.call(null,G__56883)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__56888);
} else {
return G__56888;
}
})();
return (new keechma.toolbox.pipeline.core.RunPipelineSideffect(new cljs.core.Keyword(null,"pipeline-key","pipeline-key",-1849937086).cljs$core$IFn$_invoke$arity$1(G__56883),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__56883),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});


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
keechma.toolbox.pipeline.core.RerouteSideffect = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.pipeline.core.RerouteSideffect.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

keechma.toolbox.pipeline.core.RerouteSideffect.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k56891,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__56895 = k56891;
switch (G__56895) {
default:
return cljs.core.get.call(null,self__.__extmap,k56891,else__4206__auto__);

}
});

keechma.toolbox.pipeline.core.RerouteSideffect.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#keechma.toolbox.pipeline.core.RerouteSideffect{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

keechma.toolbox.pipeline.core.RerouteSideffect.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56890){
var self__ = this;
var G__56890__$1 = this;
return (new cljs.core.RecordIter((0),G__56890__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.toolbox.pipeline.core.RerouteSideffect.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.pipeline.core.RerouteSideffect.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.RerouteSideffect(self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.RerouteSideffect.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

keechma.toolbox.pipeline.core.RerouteSideffect.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1411337857 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

keechma.toolbox.pipeline.core.RerouteSideffect.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56892,other56893){
var self__ = this;
var this56892__$1 = this;
return ((!((other56893 == null))) && ((this56892__$1.constructor === other56893.constructor)) && (cljs.core._EQ_.call(null,this56892__$1.__extmap,other56893.__extmap)));
});

keechma.toolbox.pipeline.core.RerouteSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$ = cljs.core.PROTOCOL_SENTINEL;

keechma.toolbox.pipeline.core.RerouteSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$call_BANG_$arity$4 = (function (_,controller,___$1,___$2){
var self__ = this;
var ___$3 = this;
return keechma.controller.reroute.call(null,controller);
});

keechma.toolbox.pipeline.core.RerouteSideffect.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new keechma.toolbox.pipeline.core.RerouteSideffect(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

keechma.toolbox.pipeline.core.RerouteSideffect.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__56890){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__56896 = cljs.core.keyword_identical_QMARK_;
var expr__56897 = k__4211__auto__;
return (new keechma.toolbox.pipeline.core.RerouteSideffect(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__56890),null));
});

keechma.toolbox.pipeline.core.RerouteSideffect.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

keechma.toolbox.pipeline.core.RerouteSideffect.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__56890){
var self__ = this;
var this__4202__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.RerouteSideffect(G__56890,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.RerouteSideffect.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

keechma.toolbox.pipeline.core.RerouteSideffect.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

keechma.toolbox.pipeline.core.RerouteSideffect.cljs$lang$type = true;

keechma.toolbox.pipeline.core.RerouteSideffect.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"keechma.toolbox.pipeline.core/RerouteSideffect",null,(1),null));
});

keechma.toolbox.pipeline.core.RerouteSideffect.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"keechma.toolbox.pipeline.core/RerouteSideffect");
});

/**
 * Positional factory function for keechma.toolbox.pipeline.core/RerouteSideffect.
 */
keechma.toolbox.pipeline.core.__GT_RerouteSideffect = (function keechma$toolbox$pipeline$core$__GT_RerouteSideffect(){
return (new keechma.toolbox.pipeline.core.RerouteSideffect(null,null,null));
});

/**
 * Factory function for keechma.toolbox.pipeline.core/RerouteSideffect, taking a map of keywords to field values.
 */
keechma.toolbox.pipeline.core.map__GT_RerouteSideffect = (function keechma$toolbox$pipeline$core$map__GT_RerouteSideffect(G__56894){
var extmap__4236__auto__ = (function (){var G__56899 = cljs.core.dissoc.call(null,G__56894);
if(cljs.core.record_QMARK_.call(null,G__56894)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__56899);
} else {
return G__56899;
}
})();
return (new keechma.toolbox.pipeline.core.RerouteSideffect(null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});

keechma.toolbox.pipeline.core.prepare_running_pipelines = (function keechma$toolbox$pipeline$core$prepare_running_pipelines(pipelines){
return cljs.core.reduce_kv.call(null,(function (acc,name,ps){
return cljs.core.concat.call(null,acc,cljs.core.mapv.call(null,(function (p__56901){
var vec__56902 = p__56901;
var id = cljs.core.nth.call(null,vec__56902,(0),null);
var p = cljs.core.nth.call(null,vec__56902,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,id], null),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(p)], null);
}),ps));
}),cljs.core.PersistentVector.EMPTY,pipelines);
});

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
keechma.toolbox.pipeline.core.WaitPipelinesSideffect = (function (pipeline_filter,__meta,__extmap,__hash){
this.pipeline_filter = pipeline_filter;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.pipeline.core.WaitPipelinesSideffect.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

keechma.toolbox.pipeline.core.WaitPipelinesSideffect.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k56907,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__56911 = k56907;
var G__56911__$1 = (((G__56911 instanceof cljs.core.Keyword))?G__56911.fqn:null);
switch (G__56911__$1) {
case "pipeline-filter":
return self__.pipeline_filter;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k56907,else__4206__auto__);

}
});

keechma.toolbox.pipeline.core.WaitPipelinesSideffect.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#keechma.toolbox.pipeline.core.WaitPipelinesSideffect{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pipeline-filter","pipeline-filter",213047569),self__.pipeline_filter],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.WaitPipelinesSideffect.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56906){
var self__ = this;
var G__56906__$1 = this;
return (new cljs.core.RecordIter((0),G__56906__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pipeline-filter","pipeline-filter",213047569)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.toolbox.pipeline.core.WaitPipelinesSideffect.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.pipeline.core.WaitPipelinesSideffect.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.WaitPipelinesSideffect(self__.pipeline_filter,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.WaitPipelinesSideffect.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

keechma.toolbox.pipeline.core.WaitPipelinesSideffect.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (980083644 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

keechma.toolbox.pipeline.core.WaitPipelinesSideffect.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56908,other56909){
var self__ = this;
var this56908__$1 = this;
return ((!((other56909 == null))) && ((this56908__$1.constructor === other56909.constructor)) && (cljs.core._EQ_.call(null,this56908__$1.pipeline_filter,other56909.pipeline_filter)) && (cljs.core._EQ_.call(null,this56908__$1.__extmap,other56909.__extmap)));
});

keechma.toolbox.pipeline.core.WaitPipelinesSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$ = cljs.core.PROTOCOL_SENTINEL;

keechma.toolbox.pipeline.core.WaitPipelinesSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$call_BANG_$arity$4 = (function (_,___$1,___$2,pipelines$){
var self__ = this;
var ___$3 = this;
var running_pipelines = cljs.core.deref.call(null,pipelines$);
var filtered = self__.pipeline_filter.call(null,keechma.toolbox.pipeline.core.prepare_running_pipelines.call(null,running_pipelines));
if(cljs.core.seq.call(null,filtered)){
var promises = cljs.core.map.call(null,((function (running_pipelines,filtered,___$3){
return (function (p1__56905_SHARP_){
return cljs.core.get_in.call(null,running_pipelines,cljs.core.conj.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56905_SHARP_),new cljs.core.Keyword(null,"promise","promise",1767129287)));
});})(running_pipelines,filtered,___$3))
,filtered);
return promesa.core.error.call(null,((function (promises,running_pipelines,filtered,___$3){
return (function (___$4){
return null;
});})(promises,running_pipelines,filtered,___$3))
,promesa.core.map.call(null,((function (promises,running_pipelines,filtered,___$3){
return (function (___$4){
return null;
});})(promises,running_pipelines,filtered,___$3))
,promesa.core.all.call(null,promises)));
} else {
return null;
}
});

keechma.toolbox.pipeline.core.WaitPipelinesSideffect.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pipeline-filter","pipeline-filter",213047569),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new keechma.toolbox.pipeline.core.WaitPipelinesSideffect(self__.pipeline_filter,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

keechma.toolbox.pipeline.core.WaitPipelinesSideffect.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__56906){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__56912 = cljs.core.keyword_identical_QMARK_;
var expr__56913 = k__4211__auto__;
if(cljs.core.truth_(pred__56912.call(null,new cljs.core.Keyword(null,"pipeline-filter","pipeline-filter",213047569),expr__56913))){
return (new keechma.toolbox.pipeline.core.WaitPipelinesSideffect(G__56906,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.pipeline.core.WaitPipelinesSideffect(self__.pipeline_filter,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__56906),null));
}
});

keechma.toolbox.pipeline.core.WaitPipelinesSideffect.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pipeline-filter","pipeline-filter",213047569),self__.pipeline_filter,null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.WaitPipelinesSideffect.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__56906){
var self__ = this;
var this__4202__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.WaitPipelinesSideffect(self__.pipeline_filter,G__56906,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.WaitPipelinesSideffect.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

keechma.toolbox.pipeline.core.WaitPipelinesSideffect.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pipeline-filter","pipeline-filter",1853579096,null)], null);
});

keechma.toolbox.pipeline.core.WaitPipelinesSideffect.cljs$lang$type = true;

keechma.toolbox.pipeline.core.WaitPipelinesSideffect.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"keechma.toolbox.pipeline.core/WaitPipelinesSideffect",null,(1),null));
});

keechma.toolbox.pipeline.core.WaitPipelinesSideffect.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"keechma.toolbox.pipeline.core/WaitPipelinesSideffect");
});

/**
 * Positional factory function for keechma.toolbox.pipeline.core/WaitPipelinesSideffect.
 */
keechma.toolbox.pipeline.core.__GT_WaitPipelinesSideffect = (function keechma$toolbox$pipeline$core$__GT_WaitPipelinesSideffect(pipeline_filter){
return (new keechma.toolbox.pipeline.core.WaitPipelinesSideffect(pipeline_filter,null,null,null));
});

/**
 * Factory function for keechma.toolbox.pipeline.core/WaitPipelinesSideffect, taking a map of keywords to field values.
 */
keechma.toolbox.pipeline.core.map__GT_WaitPipelinesSideffect = (function keechma$toolbox$pipeline$core$map__GT_WaitPipelinesSideffect(G__56910){
var extmap__4236__auto__ = (function (){var G__56919 = cljs.core.dissoc.call(null,G__56910,new cljs.core.Keyword(null,"pipeline-filter","pipeline-filter",213047569));
if(cljs.core.record_QMARK_.call(null,G__56910)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__56919);
} else {
return G__56919;
}
})();
return (new keechma.toolbox.pipeline.core.WaitPipelinesSideffect(new cljs.core.Keyword(null,"pipeline-filter","pipeline-filter",213047569).cljs$core$IFn$_invoke$arity$1(G__56910),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});


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
keechma.toolbox.pipeline.core.CancelPipelinesSideffect = (function (pipeline_filter,__meta,__extmap,__hash){
this.pipeline_filter = pipeline_filter;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.pipeline.core.CancelPipelinesSideffect.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

keechma.toolbox.pipeline.core.CancelPipelinesSideffect.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k56930,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__56934 = k56930;
var G__56934__$1 = (((G__56934 instanceof cljs.core.Keyword))?G__56934.fqn:null);
switch (G__56934__$1) {
case "pipeline-filter":
return self__.pipeline_filter;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k56930,else__4206__auto__);

}
});

keechma.toolbox.pipeline.core.CancelPipelinesSideffect.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#keechma.toolbox.pipeline.core.CancelPipelinesSideffect{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pipeline-filter","pipeline-filter",213047569),self__.pipeline_filter],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.CancelPipelinesSideffect.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56929){
var self__ = this;
var G__56929__$1 = this;
return (new cljs.core.RecordIter((0),G__56929__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pipeline-filter","pipeline-filter",213047569)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.toolbox.pipeline.core.CancelPipelinesSideffect.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.pipeline.core.CancelPipelinesSideffect.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.CancelPipelinesSideffect(self__.pipeline_filter,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.CancelPipelinesSideffect.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

keechma.toolbox.pipeline.core.CancelPipelinesSideffect.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (2036013791 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

keechma.toolbox.pipeline.core.CancelPipelinesSideffect.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56931,other56932){
var self__ = this;
var this56931__$1 = this;
return ((!((other56932 == null))) && ((this56931__$1.constructor === other56932.constructor)) && (cljs.core._EQ_.call(null,this56931__$1.pipeline_filter,other56932.pipeline_filter)) && (cljs.core._EQ_.call(null,this56931__$1.__extmap,other56932.__extmap)));
});

keechma.toolbox.pipeline.core.CancelPipelinesSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$ = cljs.core.PROTOCOL_SENTINEL;

keechma.toolbox.pipeline.core.CancelPipelinesSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$call_BANG_$arity$4 = (function (_,___$1,___$2,pipelines$){
var self__ = this;
var ___$3 = this;
var running_pipelines = cljs.core.deref.call(null,pipelines$);
var filtered = self__.pipeline_filter.call(null,keechma.toolbox.pipeline.core.prepare_running_pipelines.call(null,running_pipelines));
if(cljs.core.seq.call(null,filtered)){
cljs.core.reset_BANG_.call(null,pipelines$,cljs.core.reduce.call(null,((function (running_pipelines,filtered,___$3){
return (function (acc,v){
return medley.core.dissoc_in.call(null,acc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(v));
});})(running_pipelines,filtered,___$3))
,running_pipelines,filtered));

return null;
} else {
return null;
}
});

keechma.toolbox.pipeline.core.CancelPipelinesSideffect.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pipeline-filter","pipeline-filter",213047569),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new keechma.toolbox.pipeline.core.CancelPipelinesSideffect(self__.pipeline_filter,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

keechma.toolbox.pipeline.core.CancelPipelinesSideffect.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__56929){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__56935 = cljs.core.keyword_identical_QMARK_;
var expr__56936 = k__4211__auto__;
if(cljs.core.truth_(pred__56935.call(null,new cljs.core.Keyword(null,"pipeline-filter","pipeline-filter",213047569),expr__56936))){
return (new keechma.toolbox.pipeline.core.CancelPipelinesSideffect(G__56929,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.pipeline.core.CancelPipelinesSideffect(self__.pipeline_filter,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__56929),null));
}
});

keechma.toolbox.pipeline.core.CancelPipelinesSideffect.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pipeline-filter","pipeline-filter",213047569),self__.pipeline_filter,null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.CancelPipelinesSideffect.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__56929){
var self__ = this;
var this__4202__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.CancelPipelinesSideffect(self__.pipeline_filter,G__56929,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.CancelPipelinesSideffect.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

keechma.toolbox.pipeline.core.CancelPipelinesSideffect.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pipeline-filter","pipeline-filter",1853579096,null)], null);
});

keechma.toolbox.pipeline.core.CancelPipelinesSideffect.cljs$lang$type = true;

keechma.toolbox.pipeline.core.CancelPipelinesSideffect.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"keechma.toolbox.pipeline.core/CancelPipelinesSideffect",null,(1),null));
});

keechma.toolbox.pipeline.core.CancelPipelinesSideffect.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"keechma.toolbox.pipeline.core/CancelPipelinesSideffect");
});

/**
 * Positional factory function for keechma.toolbox.pipeline.core/CancelPipelinesSideffect.
 */
keechma.toolbox.pipeline.core.__GT_CancelPipelinesSideffect = (function keechma$toolbox$pipeline$core$__GT_CancelPipelinesSideffect(pipeline_filter){
return (new keechma.toolbox.pipeline.core.CancelPipelinesSideffect(pipeline_filter,null,null,null));
});

/**
 * Factory function for keechma.toolbox.pipeline.core/CancelPipelinesSideffect, taking a map of keywords to field values.
 */
keechma.toolbox.pipeline.core.map__GT_CancelPipelinesSideffect = (function keechma$toolbox$pipeline$core$map__GT_CancelPipelinesSideffect(G__56933){
var extmap__4236__auto__ = (function (){var G__56938 = cljs.core.dissoc.call(null,G__56933,new cljs.core.Keyword(null,"pipeline-filter","pipeline-filter",213047569));
if(cljs.core.record_QMARK_.call(null,G__56933)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__56938);
} else {
return G__56938;
}
})();
return (new keechma.toolbox.pipeline.core.CancelPipelinesSideffect(new cljs.core.Keyword(null,"pipeline-filter","pipeline-filter",213047569).cljs$core$IFn$_invoke$arity$1(G__56933),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});

/**
 * 
 * Commit pipeline sideffect.
 * 
 * Accepts `value` or `value` and `callback` as arguments. Value should be a new version of app-db.
 * 
 * ```clojure
 * (commit! (assoc-in app-db [:kv :user] {:username "retro"}))
 * 
 * ```
 * 
 * If the callback argument is present, this function will be called immediately after the app-db-atom is updated.
 * This is useful if you want to force Reagent to re-render the screen.
 */
keechma.toolbox.pipeline.core.commit_BANG_ = (function keechma$toolbox$pipeline$core$commit_BANG_(var_args){
var G__56941 = arguments.length;
switch (G__56941) {
case 1:
return keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (value){
return keechma.toolbox.pipeline.core.commit_BANG_.call(null,value,null);
});

keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (value,cb){
return keechma.toolbox.pipeline.core.__GT_CommitSideffect.call(null,value,cb);
});

keechma.toolbox.pipeline.core.commit_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * 
 * Execute pipeline sideffect.
 * 
 * Accepts `command` and `payload` arguments. Use this if you want to execute a command on the current controller.
 */
keechma.toolbox.pipeline.core.execute_BANG_ = (function keechma$toolbox$pipeline$core$execute_BANG_(var_args){
var G__56944 = arguments.length;
switch (G__56944) {
case 1:
return keechma.toolbox.pipeline.core.execute_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.toolbox.pipeline.core.execute_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.toolbox.pipeline.core.execute_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (command){
return keechma.toolbox.pipeline.core.execute_BANG_.call(null,command,null);
});

keechma.toolbox.pipeline.core.execute_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (command,payload){
return keechma.toolbox.pipeline.core.__GT_ExecuteSideffect.call(null,command,payload);
});

keechma.toolbox.pipeline.core.execute_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * 
 * Send command pipeline sideffect.
 * 
 * Accepts `command` and `payload` arguments. Command should be a vector where first element is the controller topic, and the second
 * element is the command name. 
 */
keechma.toolbox.pipeline.core.send_command_BANG_ = (function keechma$toolbox$pipeline$core$send_command_BANG_(var_args){
var G__56947 = arguments.length;
switch (G__56947) {
case 1:
return keechma.toolbox.pipeline.core.send_command_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.toolbox.pipeline.core.send_command_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.toolbox.pipeline.core.send_command_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (command){
return keechma.toolbox.pipeline.core.send_command_BANG_.call(null,command,null);
});

keechma.toolbox.pipeline.core.send_command_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (command,payload){
return keechma.toolbox.pipeline.core.__GT_SendCommandSideffect.call(null,command,payload);
});

keechma.toolbox.pipeline.core.send_command_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * 
 * Broadcast pipeline sideffect.
 * 
 * Accepts `command` and `payload` arguments.
 */
keechma.toolbox.pipeline.core.broadcast_BANG_ = (function keechma$toolbox$pipeline$core$broadcast_BANG_(command,payload){
return keechma.toolbox.pipeline.core.__GT_BroadcastSideffect.call(null,command,payload);
});
/**
 * 
 * Redirect pipeline sideffect.
 * 
 * Accepts `params` argument. Page will be redirected to a new URL which will be generated from the passed in params argument. If you need to 
 * access the current route data, it is present in the pipeline `app-db` argument under the `[:route :data]` path.
 */
keechma.toolbox.pipeline.core.redirect_BANG_ = (function keechma$toolbox$pipeline$core$redirect_BANG_(var_args){
var G__56950 = arguments.length;
switch (G__56950) {
case 1:
return keechma.toolbox.pipeline.core.redirect_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.toolbox.pipeline.core.redirect_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.toolbox.pipeline.core.redirect_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (params){
return keechma.toolbox.pipeline.core.redirect_BANG_.call(null,params,null);
});

keechma.toolbox.pipeline.core.redirect_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (params,action){
return keechma.toolbox.pipeline.core.__GT_RedirectSideffect.call(null,params,action);
});

keechma.toolbox.pipeline.core.redirect_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * 
 * Runs multiple sideffects sequentially:
 * 
 * ```clojure
 * (do!
 *   (commit! (assoc-in app-db [:kv :current-user] value))
 *   (redirect! {:page "user" :id (:id user)}))
 * ```
 */
keechma.toolbox.pipeline.core.do_BANG_ = (function keechma$toolbox$pipeline$core$do_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___56953 = arguments.length;
var i__4532__auto___56954 = (0);
while(true){
if((i__4532__auto___56954 < len__4531__auto___56953)){
args__4534__auto__.push((arguments[i__4532__auto___56954]));

var G__56955 = (i__4532__auto___56954 + (1));
i__4532__auto___56954 = G__56955;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return keechma.toolbox.pipeline.core.do_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

keechma.toolbox.pipeline.core.do_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (sideffects){
return keechma.toolbox.pipeline.core.__GT_DoSideffect.call(null,sideffects);
});

keechma.toolbox.pipeline.core.do_BANG_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
keechma.toolbox.pipeline.core.do_BANG_.cljs$lang$applyTo = (function (seq56952){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56952));
});

/**
 * Runs a pipeline in a way that blocks the current pipeline until the current pipeline is done. It behaves same as `execute! but blocks the parent pipeline until it's done. Return value and errors will be ignored by the parent pipeline.
 */
keechma.toolbox.pipeline.core.run_pipeline_BANG_ = (function keechma$toolbox$pipeline$core$run_pipeline_BANG_(var_args){
var G__56957 = arguments.length;
switch (G__56957) {
case 1:
return keechma.toolbox.pipeline.core.run_pipeline_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.toolbox.pipeline.core.run_pipeline_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.toolbox.pipeline.core.run_pipeline_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (pipeline_key){
return keechma.toolbox.pipeline.core.run_pipeline_BANG_.call(null,pipeline_key,null);
});

keechma.toolbox.pipeline.core.run_pipeline_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (pipeline_key,args){
return keechma.toolbox.pipeline.core.__GT_RunPipelineSideffect.call(null,pipeline_key,args);
});

keechma.toolbox.pipeline.core.run_pipeline_BANG_.cljs$lang$maxFixedArity = 2;

keechma.toolbox.pipeline.core.reroute_BANG_ = (function keechma$toolbox$pipeline$core$reroute_BANG_(){
return keechma.toolbox.pipeline.core.__GT_RerouteSideffect.call(null);
});
keechma.toolbox.pipeline.core.wait_pipelines_BANG_ = (function keechma$toolbox$pipeline$core$wait_pipelines_BANG_(pipeline_filter){
return keechma.toolbox.pipeline.core.__GT_WaitPipelinesSideffect.call(null,pipeline_filter);
});
keechma.toolbox.pipeline.core.cancel_pipelines_BANG_ = (function keechma$toolbox$pipeline$core$cancel_pipelines_BANG_(pipeline_filter){
return keechma.toolbox.pipeline.core.__GT_CancelPipelinesSideffect.call(null,pipeline_filter);
});
keechma.toolbox.pipeline.core.process_error = (function keechma$toolbox$pipeline$core$process_error(err){
if((err instanceof keechma.toolbox.pipeline.core.Error)){
return err;
} else {
return keechma.toolbox.pipeline.core.__GT_Error.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,err,null);

}
});
keechma.toolbox.pipeline.core.is_promise_QMARK_ = (function keechma$toolbox$pipeline$core$is_promise_QMARK_(val){
if((((val instanceof Error)) || ((val instanceof keechma.toolbox.pipeline.core.Error)))){
return false;
} else {
return cljs.core._EQ_.call(null,val,promesa.core.promise.call(null,val));
}
});
keechma.toolbox.pipeline.core.promise__GT_chan = (function keechma$toolbox$pipeline$core$promise__GT_chan(promise){
var promise_chan = cljs.core.async.chan.call(null);
promesa.core.error.call(null,((function (promise_chan){
return (function (e){
return cljs.core.async.put_BANG_.call(null,promise_chan,keechma.toolbox.pipeline.core.process_error.call(null,e));
});})(promise_chan))
,promesa.core.map.call(null,((function (promise_chan){
return (function (v){
return cljs.core.async.put_BANG_.call(null,promise_chan,(((v == null))?new cljs.core.Keyword("keechma.toolbox.pipeline.core","nil","keechma.toolbox.pipeline.core/nil",-1518367909):v));
});})(promise_chan))
,promise));

return promise_chan;
});
keechma.toolbox.pipeline.core.pipeline_errors = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-sideffect","async-sideffect",-972592540),"Returning sideffects from promises is not permitted. It is possible that application state was modified in the meantime"], null);
keechma.toolbox.pipeline.core.action_ret_val = (function keechma$toolbox$pipeline$core$action_ret_val(action,ctrl,context,app_db_atom,value,error,pipelines$){
try{var ret = (((error == null))?action.call(null,value,cljs.core.deref.call(null,app_db_atom),context):action.call(null,value,cljs.core.deref.call(null,app_db_atom),context,error));
var ret_val = new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(ret);
var ret_repr = new cljs.core.Keyword(null,"repr","repr",669525472).cljs$core$IFn$_invoke$arity$1(ret);
if(cljs.core.truth_(new cljs.core.Keyword(null,"pipeline?","pipeline?",1488086785).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,ret_val)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),ret_val.call(null,ctrl,app_db_atom,value,pipelines$),new cljs.core.Keyword(null,"promise?","promise?",-1924347409),true], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),ret_val,new cljs.core.Keyword(null,"repr","repr",669525472),ret_repr,new cljs.core.Keyword(null,"promise?","promise?",-1924347409),keechma.toolbox.pipeline.core.is_promise_QMARK_.call(null,ret_val)], null);
}
}catch (e56969){var err = e56969;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("keechma.toolbox.pipeline.core","pipeline-error","keechma.toolbox.pipeline.core/pipeline-error",446844314),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(err.data))){
throw err;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),keechma.toolbox.pipeline.core.process_error.call(null,err),new cljs.core.Keyword(null,"promise?","promise?",-1924347409),false], null);
}
}});
keechma.toolbox.pipeline.core.extract_nil = (function keechma$toolbox$pipeline$core$extract_nil(value){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("keechma.toolbox.pipeline.core","nil","keechma.toolbox.pipeline.core/nil",-1518367909),value)){
return null;
} else {
return value;
}
});
keechma.toolbox.pipeline.core.call_sideffect = (function keechma$toolbox$pipeline$core$call_sideffect(sideffect,ctrl,app_db_atom,pipelines$){
try{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),keechma.toolbox.pipeline.core.call_BANG_.call(null,sideffect,ctrl,app_db_atom,pipelines$),new cljs.core.Keyword(null,"error?","error?",-460689159),false], null);
}catch (e56974){var err = e56974;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),err,new cljs.core.Keyword(null,"error?","error?",-460689159),true], null);
}});
keechma.toolbox.pipeline.core.pipeline_running_QMARK_ = (function keechma$toolbox$pipeline$core$pipeline_running_QMARK_(pipelines$,running_check_path){
if((pipelines$ == null)){
return true;
} else {
return cljs.core.get_in.call(null,cljs.core.deref.call(null,pipelines$),running_check_path);
}
});
keechma.toolbox.pipeline.core.run_pipeline = (function keechma$toolbox$pipeline$core$run_pipeline(var_args){
var G__56978 = arguments.length;
switch (G__56978) {
case 4:
return keechma.toolbox.pipeline.core.run_pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return keechma.toolbox.pipeline.core.run_pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.toolbox.pipeline.core.run_pipeline.cljs$core$IFn$_invoke$arity$4 = (function (pipeline,ctrl,app_db_atom,value){
return keechma.toolbox.pipeline.core.run_pipeline.call(null,pipeline,ctrl,app_db_atom,value,null);
});

keechma.toolbox.pipeline.core.run_pipeline.cljs$core$IFn$_invoke$arity$5 = (function (pipeline,ctrl,app_db_atom,value,pipelines$){
var map__56981 = pipeline;
var map__56981__$1 = ((((!((map__56981 == null)))?(((((map__56981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56981):map__56981);
var begin = cljs.core.get.call(null,map__56981__$1,new cljs.core.Keyword(null,"begin","begin",-319034319));
var rescue = cljs.core.get.call(null,map__56981__$1,new cljs.core.Keyword(null,"rescue","rescue",1135767523));
var current_promise = cljs.core.atom.call(null,null);
var context = keechma.controller.context.call(null,ctrl);
var running_check_path = cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pipeline","running","pipeline/running",844864673).cljs$core$IFn$_invoke$arity$1(ctrl),new cljs.core.Keyword(null,"running?","running?",-257884763)], null));
return promesa.core.promise.call(null,((function (map__56981,map__56981__$1,begin,rescue,current_promise,context,running_check_path){
return (function (resolve,reject){
var c__44950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44950__auto__,map__56981,map__56981__$1,begin,rescue,current_promise,context,running_check_path){
return (function (){
var f__44951__auto__ = (function (){var switch__24619__auto__ = ((function (c__44950__auto__,map__56981,map__56981__$1,begin,rescue,current_promise,context,running_check_path){
return (function (state_57233){
var state_val_57236 = (state_57233[(1)]);
if((state_val_57236 === (65))){
var inst_57132 = (state_57233[(2)]);
var state_57233__$1 = state_57233;
if(cljs.core.truth_(inst_57132)){
var statearr_57237_57454 = state_57233__$1;
(statearr_57237_57454[(1)] = (66));

} else {
var statearr_57238_57455 = state_57233__$1;
(statearr_57238_57455[(1)] = (67));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (70))){
var inst_57097 = (state_57233[(7)]);
var state_57233__$1 = state_57233;
var statearr_57239_57456 = state_57233__$1;
(statearr_57239_57456[(2)] = inst_57097);

(statearr_57239_57456[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (62))){
var inst_57121 = (state_57233[(2)]);
var inst_57122 = reject.call(null,inst_57121);
var state_57233__$1 = state_57233;
var statearr_57240_57457 = state_57233__$1;
(statearr_57240_57457[(2)] = inst_57122);

(statearr_57240_57457[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (74))){
var inst_57146 = (state_57233[(2)]);
var state_57233__$1 = state_57233;
var statearr_57243_57458 = state_57233__$1;
(statearr_57243_57458[(2)] = inst_57146);

(statearr_57243_57458[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (110))){
var inst_57217 = (state_57233[(2)]);
var state_57233__$1 = state_57233;
var statearr_57244_57459 = state_57233__$1;
(statearr_57244_57459[(2)] = inst_57217);

(statearr_57244_57459[(1)] = (104));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (7))){
var inst_56999 = (state_57233[(8)]);
var inst_57005 = inst_56999.cljs$lang$protocol_mask$partition0$;
var inst_57006 = (inst_57005 & (64));
var inst_57007 = inst_56999.cljs$core$ISeq$;
var inst_57008 = (cljs.core.PROTOCOL_SENTINEL === inst_57007);
var inst_57009 = ((inst_57006) || (inst_57008));
var state_57233__$1 = state_57233;
if(cljs.core.truth_(inst_57009)){
var statearr_57245_57460 = state_57233__$1;
(statearr_57245_57460[(1)] = (10));

} else {
var statearr_57246_57461 = state_57233__$1;
(statearr_57246_57461[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (59))){
var inst_57124 = (state_57233[(2)]);
var state_57233__$1 = state_57233;
var statearr_57247_57462 = state_57233__$1;
(statearr_57247_57462[(2)] = inst_57124);

(statearr_57247_57462[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (86))){
var inst_57173 = (state_57233[(2)]);
var state_57233__$1 = state_57233;
var statearr_57253_57463 = state_57233__$1;
(statearr_57253_57463[(2)] = inst_57173);

(statearr_57253_57463[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (20))){
var inst_57023 = (state_57233[(9)]);
var inst_57035 = inst_57023.cljs$lang$protocol_mask$partition$;
var inst_57036 = (!inst_57035);
var state_57233__$1 = state_57233;
if(cljs.core.truth_(inst_57036)){
var statearr_57254_57464 = state_57233__$1;
(statearr_57254_57464[(1)] = (22));

} else {
var statearr_57255_57465 = state_57233__$1;
(statearr_57255_57465[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (72))){
var inst_56984 = (state_57233[(10)]);
var inst_56986 = (state_57233[(11)]);
var inst_56985 = (state_57233[(12)]);
var inst_56987 = (state_57233[(13)]);
var inst_57142 = cljs.core.rest.call(null,inst_56985);
var tmp57250 = inst_56984;
var tmp57251 = inst_56986;
var tmp57252 = inst_56987;
var inst_56984__$1 = tmp57250;
var inst_56985__$1 = inst_57142;
var inst_56986__$1 = tmp57251;
var inst_56987__$1 = tmp57252;
var state_57233__$1 = (function (){var statearr_57256 = state_57233;
(statearr_57256[(10)] = inst_56984__$1);

(statearr_57256[(11)] = inst_56986__$1);

(statearr_57256[(12)] = inst_56985__$1);

(statearr_57256[(13)] = inst_56987__$1);

return statearr_57256;
})();
var statearr_57257_57466 = state_57233__$1;
(statearr_57257_57466[(2)] = null);

(statearr_57257_57466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (58))){
var inst_57097 = (state_57233[(7)]);
var inst_57117 = (state_57233[(14)]);
var inst_57117__$1 = new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(inst_57097);
var state_57233__$1 = (function (){var statearr_57260 = state_57233;
(statearr_57260[(14)] = inst_57117__$1);

return statearr_57260;
})();
if(cljs.core.truth_(inst_57117__$1)){
var statearr_57261_57467 = state_57233__$1;
(statearr_57261_57467[(1)] = (60));

} else {
var statearr_57262_57468 = state_57233__$1;
(statearr_57262_57468[(1)] = (61));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (60))){
var inst_57117 = (state_57233[(14)]);
var state_57233__$1 = state_57233;
var statearr_57263_57469 = state_57233__$1;
(statearr_57263_57469[(2)] = inst_57117);

(statearr_57263_57469[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (27))){
var inst_57055 = (state_57233[(15)]);
var inst_57024 = (state_57233[(16)]);
var inst_57055__$1 = (state_57233[(2)]);
var inst_57056 = (inst_57055__$1 instanceof keechma.toolbox.pipeline.core.Error);
var state_57233__$1 = (function (){var statearr_57264 = state_57233;
(statearr_57264[(15)] = inst_57055__$1);

(statearr_57264[(17)] = inst_57056);

return statearr_57264;
})();
if(cljs.core.truth_(inst_57024)){
var statearr_57265_57470 = state_57233__$1;
(statearr_57265_57470[(1)] = (29));

} else {
var statearr_57266_57471 = state_57233__$1;
(statearr_57266_57471[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (1))){
var inst_56984 = new cljs.core.Keyword(null,"begin","begin",-319034319);
var inst_56985 = begin;
var inst_56986 = value;
var inst_56987 = null;
var state_57233__$1 = (function (){var statearr_57269 = state_57233;
(statearr_57269[(10)] = inst_56984);

(statearr_57269[(11)] = inst_56986);

(statearr_57269[(12)] = inst_56985);

(statearr_57269[(13)] = inst_56987);

return statearr_57269;
})();
var statearr_57270_57472 = state_57233__$1;
(statearr_57270_57472[(2)] = null);

(statearr_57270_57472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (69))){
var inst_57134 = (state_57233[(18)]);
var state_57233__$1 = state_57233;
var statearr_57271_57473 = state_57233__$1;
(statearr_57271_57473[(2)] = inst_57134);

(statearr_57271_57473[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (101))){
var inst_57196 = (state_57233[(2)]);
var state_57233__$1 = state_57233;
if(cljs.core.truth_(inst_57196)){
var statearr_57272_57474 = state_57233__$1;
(statearr_57272_57474[(1)] = (102));

} else {
var statearr_57273_57475 = state_57233__$1;
(statearr_57273_57475[(1)] = (103));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (24))){
var inst_57041 = (state_57233[(2)]);
var state_57233__$1 = state_57233;
var statearr_57274_57476 = state_57233__$1;
(statearr_57274_57476[(2)] = inst_57041);

(statearr_57274_57476[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (102))){
var inst_56987 = (state_57233[(13)]);
var inst_57198 = (state_57233[(19)]);
var inst_57198__$1 = new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(inst_56987);
var state_57233__$1 = (function (){var statearr_57277 = state_57233;
(statearr_57277[(19)] = inst_57198__$1);

return statearr_57277;
})();
if(cljs.core.truth_(inst_57198__$1)){
var statearr_57278_57477 = state_57233__$1;
(statearr_57278_57477[(1)] = (105));

} else {
var statearr_57279_57478 = state_57233__$1;
(statearr_57279_57478[(1)] = (106));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (55))){
var inst_57098 = (state_57233[(20)]);
var state_57233__$1 = state_57233;
if(cljs.core.truth_(inst_57098)){
var statearr_57280_57479 = state_57233__$1;
(statearr_57280_57479[(1)] = (63));

} else {
var statearr_57281_57480 = state_57233__$1;
(statearr_57281_57480[(1)] = (64));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (85))){
var inst_57055 = (state_57233[(15)]);
var inst_57166 = (state_57233[(21)]);
var inst_57166__$1 = new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(inst_57055);
var state_57233__$1 = (function (){var statearr_57284 = state_57233;
(statearr_57284[(21)] = inst_57166__$1);

return statearr_57284;
})();
if(cljs.core.truth_(inst_57166__$1)){
var statearr_57285_57481 = state_57233__$1;
(statearr_57285_57481[(1)] = (87));

} else {
var statearr_57286_57482 = state_57233__$1;
(statearr_57286_57482[(1)] = (88));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (39))){
var state_57233__$1 = state_57233;
var statearr_57287_57483 = state_57233__$1;
(statearr_57287_57483[(2)] = false);

(statearr_57287_57483[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (88))){
var inst_57055 = (state_57233[(15)]);
var state_57233__$1 = state_57233;
var statearr_57288_57484 = state_57233__$1;
(statearr_57288_57484[(2)] = inst_57055);

(statearr_57288_57484[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (46))){
var inst_57097 = (state_57233[(7)]);
var inst_57096 = (state_57233[(2)]);
var inst_57097__$1 = cljs.core.get.call(null,inst_57096,new cljs.core.Keyword(null,"value","value",305978217));
var inst_57098 = cljs.core.get.call(null,inst_57096,new cljs.core.Keyword(null,"error?","error?",-460689159));
var inst_57099 = keechma.toolbox.pipeline.core.is_promise_QMARK_.call(null,inst_57097__$1);
var state_57233__$1 = (function (){var statearr_57289 = state_57233;
(statearr_57289[(7)] = inst_57097__$1);

(statearr_57289[(20)] = inst_57098);

return statearr_57289;
})();
if(cljs.core.truth_(inst_57099)){
var statearr_57290_57485 = state_57233__$1;
(statearr_57290_57485[(1)] = (47));

} else {
var statearr_57291_57486 = state_57233__$1;
(statearr_57291_57486[(1)] = (48));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (4))){
var inst_56986 = (state_57233[(11)]);
var inst_56995 = resolve.call(null,inst_56986);
var state_57233__$1 = state_57233;
var statearr_57292_57487 = state_57233__$1;
(statearr_57292_57487[(2)] = inst_56995);

(statearr_57292_57487[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (77))){
var inst_57225 = (state_57233[(2)]);
var state_57233__$1 = state_57233;
var statearr_57295_57488 = state_57233__$1;
(statearr_57295_57488[(2)] = inst_57225);

(statearr_57295_57488[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (106))){
var inst_56987 = (state_57233[(13)]);
var state_57233__$1 = state_57233;
var statearr_57296_57489 = state_57233__$1;
(statearr_57296_57489[(2)] = inst_56987);

(statearr_57296_57489[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (95))){
var inst_57221 = (state_57233[(2)]);
var state_57233__$1 = state_57233;
var statearr_57297_57490 = state_57233__$1;
(statearr_57297_57490[(2)] = inst_57221);

(statearr_57297_57490[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (54))){
var inst_57113 = cljs.core.seq.call(null,rescue);
var state_57233__$1 = state_57233;
if(inst_57113){
var statearr_57298_57491 = state_57233__$1;
(statearr_57298_57491[(1)] = (57));

} else {
var statearr_57301_57492 = state_57233__$1;
(statearr_57301_57492[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (92))){
var inst_57181 = (state_57233[(2)]);
var state_57233__$1 = state_57233;
if(cljs.core.truth_(inst_57181)){
var statearr_57302_57493 = state_57233__$1;
(statearr_57302_57493[(1)] = (93));

} else {
var statearr_57303_57494 = state_57233__$1;
(statearr_57303_57494[(1)] = (94));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (104))){
var inst_57219 = (state_57233[(2)]);
var state_57233__$1 = state_57233;
var statearr_57304_57495 = state_57233__$1;
(statearr_57304_57495[(2)] = inst_57219);

(statearr_57304_57495[(1)] = (95));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (15))){
var inst_57023 = (state_57233[(9)]);
var inst_57022 = (state_57233[(2)]);
var inst_57023__$1 = cljs.core.get.call(null,inst_57022,new cljs.core.Keyword(null,"value","value",305978217));
var inst_57024 = cljs.core.get.call(null,inst_57022,new cljs.core.Keyword(null,"promise?","promise?",-1924347409));
var inst_57025 = cljs.core.get.call(null,inst_57022,new cljs.core.Keyword(null,"repr","repr",669525472));
var inst_57027 = (inst_57023__$1 == null);
var inst_57028 = cljs.core.not.call(null,inst_57027);
var state_57233__$1 = (function (){var statearr_57305 = state_57233;
(statearr_57305[(9)] = inst_57023__$1);

(statearr_57305[(22)] = inst_57025);

(statearr_57305[(16)] = inst_57024);

return statearr_57305;
})();
if(inst_57028){
var statearr_57306_57497 = state_57233__$1;
(statearr_57306_57497[(1)] = (16));

} else {
var statearr_57309_57498 = state_57233__$1;
(statearr_57309_57498[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (48))){
var inst_57097 = (state_57233[(7)]);
var state_57233__$1 = state_57233;
var statearr_57310_57499 = state_57233__$1;
(statearr_57310_57499[(2)] = inst_57097);

(statearr_57310_57499[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (50))){
var inst_57103 = (state_57233[(2)]);
var state_57233__$1 = state_57233;
var statearr_57311_57500 = state_57233__$1;
(statearr_57311_57500[(2)] = inst_57103);

(statearr_57311_57500[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (75))){
var inst_57154 = resolve.call(null,new cljs.core.Keyword("keechma.toolbox.pipeline.core","break","keechma.toolbox.pipeline.core/break",-1503986725));
var state_57233__$1 = state_57233;
var statearr_57312_57501 = state_57233__$1;
(statearr_57312_57501[(2)] = inst_57154);

(statearr_57312_57501[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (99))){
var inst_57055 = (state_57233[(15)]);
var inst_56984 = (state_57233[(10)]);
var inst_56987 = (state_57233[(13)]);
var inst_57191 = cljs.core._EQ_.call(null,inst_56984,new cljs.core.Keyword(null,"rescue","rescue",1135767523));
var inst_57192 = cljs.core._EQ_.call(null,inst_56987,inst_57055);
var inst_57193 = ((inst_57191) && (inst_57192));
var state_57233__$1 = state_57233;
var statearr_57313_57502 = state_57233__$1;
(statearr_57313_57502[(2)] = inst_57193);

(statearr_57313_57502[(1)] = (101));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (21))){
var inst_57043 = (state_57233[(2)]);
var state_57233__$1 = state_57233;
var statearr_57317_57503 = state_57233__$1;
(statearr_57317_57503[(2)] = inst_57043);

(statearr_57317_57503[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (31))){
var inst_57060 = (state_57233[(2)]);
var state_57233__$1 = state_57233;
if(cljs.core.truth_(inst_57060)){
var statearr_57318_57504 = state_57233__$1;
(statearr_57318_57504[(1)] = (32));

} else {
var statearr_57319_57505 = state_57233__$1;
(statearr_57319_57505[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (113))){
var inst_56984 = (state_57233[(10)]);
var inst_56987 = (state_57233[(13)]);
var inst_57208 = (state_57233[(23)]);
var inst_57213 = (state_57233[(2)]);
var tmp57314 = inst_56984;
var tmp57315 = inst_56987;
var inst_56984__$1 = tmp57314;
var inst_56985 = inst_57208;
var inst_56986 = inst_57213;
var inst_56987__$1 = tmp57315;
var state_57233__$1 = (function (){var statearr_57320 = state_57233;
(statearr_57320[(10)] = inst_56984__$1);

(statearr_57320[(11)] = inst_56986);

(statearr_57320[(12)] = inst_56985);

(statearr_57320[(13)] = inst_56987__$1);

return statearr_57320;
})();
var statearr_57322_57506 = state_57233__$1;
(statearr_57322_57506[(2)] = null);

(statearr_57322_57506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (32))){
var inst_57062 = new cljs.core.Keyword(null,"async-sideffect","async-sideffect",-972592540).cljs$core$IFn$_invoke$arity$1(keechma.toolbox.pipeline.core.pipeline_errors);
var inst_57063 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_57064 = [new cljs.core.Keyword("keechma.toolbox.pipeline.core","pipeline-error","keechma.toolbox.pipeline.core/pipeline-error",446844314)];
var inst_57065 = cljs.core.PersistentHashMap.fromArrays(inst_57063,inst_57064);
var inst_57066 = cljs.core.ex_info.call(null,inst_57062,inst_57065);
var inst_57067 = (function(){throw inst_57066})();
var state_57233__$1 = state_57233;
var statearr_57323_57507 = state_57233__$1;
(statearr_57323_57507[(2)] = inst_57067);

(statearr_57323_57507[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (40))){
var inst_57091 = (state_57233[(2)]);
var state_57233__$1 = state_57233;
if(cljs.core.truth_(inst_57091)){
var statearr_57324_57508 = state_57233__$1;
(statearr_57324_57508[(1)] = (44));

} else {
var statearr_57325_57509 = state_57233__$1;
(statearr_57325_57509[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (91))){
var inst_57056 = (state_57233[(17)]);
var state_57233__$1 = state_57233;
var statearr_57326_57510 = state_57233__$1;
(statearr_57326_57510[(2)] = inst_57056);

(statearr_57326_57510[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (108))){
var inst_57055 = (state_57233[(15)]);
var inst_56985 = (state_57233[(12)]);
var inst_57208 = cljs.core.rest.call(null,inst_56985);
var inst_57209 = (inst_57055 == null);
var state_57233__$1 = (function (){var statearr_57328 = state_57233;
(statearr_57328[(23)] = inst_57208);

return statearr_57328;
})();
if(cljs.core.truth_(inst_57209)){
var statearr_57329_57511 = state_57233__$1;
(statearr_57329_57511[(1)] = (111));

} else {
var statearr_57330_57512 = state_57233__$1;
(statearr_57330_57512[(1)] = (112));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (56))){
var inst_57150 = (state_57233[(2)]);
var state_57233__$1 = state_57233;
var statearr_57331_57513 = state_57233__$1;
(statearr_57331_57513[(2)] = inst_57150);

(statearr_57331_57513[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (33))){
var state_57233__$1 = state_57233;
var statearr_57332_57514 = state_57233__$1;
(statearr_57332_57514[(2)] = null);

(statearr_57332_57514[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (13))){
var inst_56999 = (state_57233[(8)]);
var inst_57019 = cljs.core.apply.call(null,cljs.core.hash_map,inst_56999);
var state_57233__$1 = state_57233;
var statearr_57334_57515 = state_57233__$1;
(statearr_57334_57515[(2)] = inst_57019);

(statearr_57334_57515[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (22))){
var inst_57023 = (state_57233[(9)]);
var inst_57038 = cljs.core.native_satisfies_QMARK_.call(null,keechma.toolbox.pipeline.core.ISideffect,inst_57023);
var state_57233__$1 = state_57233;
var statearr_57335_57516 = state_57233__$1;
(statearr_57335_57516[(2)] = inst_57038);

(statearr_57335_57516[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (90))){
var inst_57055 = (state_57233[(15)]);
var inst_56984 = (state_57233[(10)]);
var inst_56987 = (state_57233[(13)]);
var inst_57176 = cljs.core._EQ_.call(null,inst_56984,new cljs.core.Keyword(null,"rescue","rescue",1135767523));
var inst_57177 = cljs.core.not_EQ_.call(null,inst_56987,inst_57055);
var inst_57178 = ((inst_57176) && (inst_57177));
var state_57233__$1 = state_57233;
var statearr_57336_57517 = state_57233__$1;
(statearr_57336_57517[(2)] = inst_57178);

(statearr_57336_57517[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (109))){
var state_57233__$1 = state_57233;
var statearr_57338_57518 = state_57233__$1;
(statearr_57338_57518[(2)] = null);

(statearr_57338_57518[(1)] = (110));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (36))){
var inst_57055 = (state_57233[(15)]);
var inst_57152 = cljs.core._EQ_.call(null,new cljs.core.Keyword("keechma.toolbox.pipeline.core","break","keechma.toolbox.pipeline.core/break",-1503986725),inst_57055);
var state_57233__$1 = state_57233;
if(inst_57152){
var statearr_57339_57519 = state_57233__$1;
(statearr_57339_57519[(1)] = (75));

} else {
var statearr_57340_57520 = state_57233__$1;
(statearr_57340_57520[(1)] = (76));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (41))){
var state_57233__$1 = state_57233;
var statearr_57341_57521 = state_57233__$1;
(statearr_57341_57521[(2)] = true);

(statearr_57341_57521[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (89))){
var inst_57170 = (state_57233[(2)]);
var inst_57171 = reject.call(null,inst_57170);
var state_57233__$1 = state_57233;
var statearr_57342_57522 = state_57233__$1;
(statearr_57342_57522[(2)] = inst_57171);

(statearr_57342_57522[(1)] = (86));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (100))){
var inst_57056 = (state_57233[(17)]);
var state_57233__$1 = state_57233;
var statearr_57344_57523 = state_57233__$1;
(statearr_57344_57523[(2)] = inst_57056);

(statearr_57344_57523[(1)] = (101));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (43))){
var inst_57088 = (state_57233[(2)]);
var state_57233__$1 = state_57233;
var statearr_57345_57524 = state_57233__$1;
(statearr_57345_57524[(2)] = inst_57088);

(statearr_57345_57524[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (61))){
var inst_57097 = (state_57233[(7)]);
var state_57233__$1 = state_57233;
var statearr_57346_57525 = state_57233__$1;
(statearr_57346_57525[(2)] = inst_57097);

(statearr_57346_57525[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (29))){
var inst_57047 = (state_57233[(24)]);
var state_57233__$1 = state_57233;
var statearr_57347_57526 = state_57233__$1;
(statearr_57347_57526[(2)] = inst_57047);

(statearr_57347_57526[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (44))){
var inst_57075 = (state_57233[(25)]);
var inst_57093 = cljs.core.apply.call(null,cljs.core.hash_map,inst_57075);
var state_57233__$1 = state_57233;
var statearr_57348_57527 = state_57233__$1;
(statearr_57348_57527[(2)] = inst_57093);

(statearr_57348_57527[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (93))){
var inst_57055 = (state_57233[(15)]);
var inst_57183 = (state_57233[(26)]);
var inst_57183__$1 = new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(inst_57055);
var state_57233__$1 = (function (){var statearr_57350 = state_57233;
(statearr_57350[(26)] = inst_57183__$1);

return statearr_57350;
})();
if(cljs.core.truth_(inst_57183__$1)){
var statearr_57351_57528 = state_57233__$1;
(statearr_57351_57528[(1)] = (96));

} else {
var statearr_57352_57529 = state_57233__$1;
(statearr_57352_57529[(1)] = (97));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (6))){
var inst_57229 = (state_57233[(2)]);
var state_57233__$1 = state_57233;
var statearr_57353_57530 = state_57233__$1;
(statearr_57353_57530[(2)] = inst_57229);

(statearr_57353_57530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (111))){
var inst_56986 = (state_57233[(11)]);
var state_57233__$1 = state_57233;
var statearr_57354_57531 = state_57233__$1;
(statearr_57354_57531[(2)] = inst_56986);

(statearr_57354_57531[(1)] = (113));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (28))){
var inst_57051 = (state_57233[(2)]);
var inst_57052 = keechma.toolbox.pipeline.core.extract_nil.call(null,inst_57051);
var state_57233__$1 = state_57233;
var statearr_57356_57532 = state_57233__$1;
(statearr_57356_57532[(2)] = inst_57052);

(statearr_57356_57532[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (64))){
var inst_57098 = (state_57233[(20)]);
var state_57233__$1 = state_57233;
var statearr_57357_57533 = state_57233__$1;
(statearr_57357_57533[(2)] = inst_57098);

(statearr_57357_57533[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (103))){
var state_57233__$1 = state_57233;
var statearr_57358_57534 = state_57233__$1;
(statearr_57358_57534[(1)] = (108));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (51))){
var inst_56984 = (state_57233[(10)]);
var inst_57108 = cljs.core._EQ_.call(null,inst_56984,new cljs.core.Keyword(null,"begin","begin",-319034319));
var state_57233__$1 = state_57233;
var statearr_57360_57535 = state_57233__$1;
(statearr_57360_57535[(2)] = inst_57108);

(statearr_57360_57535[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (25))){
var inst_57023 = (state_57233[(9)]);
var inst_57049 = keechma.toolbox.pipeline.core.promise__GT_chan.call(null,inst_57023);
var state_57233__$1 = state_57233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57233__$1,(28),inst_57049);
} else {
if((state_val_57236 === (34))){
var inst_57047 = (state_57233[(24)]);
var inst_57070 = (state_57233[(2)]);
var state_57233__$1 = (function (){var statearr_57362 = state_57233;
(statearr_57362[(27)] = inst_57070);

return statearr_57362;
})();
if(cljs.core.truth_(inst_57047)){
var statearr_57363_57536 = state_57233__$1;
(statearr_57363_57536[(1)] = (35));

} else {
var statearr_57364_57537 = state_57233__$1;
(statearr_57364_57537[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (17))){
var inst_57023 = (state_57233[(9)]);
var inst_57045 = cljs.core.native_satisfies_QMARK_.call(null,keechma.toolbox.pipeline.core.ISideffect,inst_57023);
var state_57233__$1 = state_57233;
var statearr_57365_57538 = state_57233__$1;
(statearr_57365_57538[(2)] = inst_57045);

(statearr_57365_57538[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (3))){
var inst_57231 = (state_57233[(2)]);
var state_57233__$1 = state_57233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57233__$1,inst_57231);
} else {
if((state_val_57236 === (12))){
var inst_57014 = (state_57233[(2)]);
var state_57233__$1 = state_57233;
var statearr_57367_57539 = state_57233__$1;
(statearr_57367_57539[(2)] = inst_57014);

(statearr_57367_57539[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (2))){
var inst_56985 = (state_57233[(12)]);
var inst_56989 = cljs.core.seq.call(null,inst_56985);
var inst_56990 = cljs.core.not.call(null,inst_56989);
var inst_56991 = keechma.toolbox.pipeline.core.pipeline_running_QMARK_.call(null,pipelines$,running_check_path);
var inst_56992 = cljs.core.not.call(null,inst_56991);
var inst_56993 = ((inst_56990) || (inst_56992));
var state_57233__$1 = state_57233;
if(cljs.core.truth_(inst_56993)){
var statearr_57368_57540 = state_57233__$1;
(statearr_57368_57540[(1)] = (4));

} else {
var statearr_57369_57541 = state_57233__$1;
(statearr_57369_57541[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (66))){
var inst_57097 = (state_57233[(7)]);
var inst_57134 = (state_57233[(18)]);
var inst_57134__$1 = new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(inst_57097);
var state_57233__$1 = (function (){var statearr_57370 = state_57233;
(statearr_57370[(18)] = inst_57134__$1);

return statearr_57370;
})();
if(cljs.core.truth_(inst_57134__$1)){
var statearr_57371_57542 = state_57233__$1;
(statearr_57371_57542[(1)] = (69));

} else {
var statearr_57373_57543 = state_57233__$1;
(statearr_57373_57543[(1)] = (70));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (107))){
var inst_57204 = (state_57233[(2)]);
var inst_57205 = reject.call(null,inst_57204);
var state_57233__$1 = state_57233;
var statearr_57374_57544 = state_57233__$1;
(statearr_57374_57544[(2)] = inst_57205);

(statearr_57374_57544[(1)] = (104));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (23))){
var state_57233__$1 = state_57233;
var statearr_57375_57545 = state_57233__$1;
(statearr_57375_57545[(2)] = false);

(statearr_57375_57545[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (47))){
var inst_57097 = (state_57233[(7)]);
var inst_57101 = keechma.toolbox.pipeline.core.promise__GT_chan.call(null,inst_57097);
var state_57233__$1 = state_57233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57233__$1,(50),inst_57101);
} else {
if((state_val_57236 === (35))){
var inst_57055 = (state_57233[(15)]);
var inst_57075 = (state_57233[(25)]);
var inst_57075__$1 = keechma.toolbox.pipeline.core.call_sideffect.call(null,inst_57055,ctrl,app_db_atom,pipelines$);
var inst_57077 = (inst_57075__$1 == null);
var inst_57078 = cljs.core.not.call(null,inst_57077);
var state_57233__$1 = (function (){var statearr_57377 = state_57233;
(statearr_57377[(25)] = inst_57075__$1);

return statearr_57377;
})();
if(inst_57078){
var statearr_57378_57546 = state_57233__$1;
(statearr_57378_57546[(1)] = (38));

} else {
var statearr_57379_57547 = state_57233__$1;
(statearr_57379_57547[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (82))){
var inst_57056 = (state_57233[(17)]);
var state_57233__$1 = state_57233;
if(cljs.core.truth_(inst_57056)){
var statearr_57380_57548 = state_57233__$1;
(statearr_57380_57548[(1)] = (90));

} else {
var statearr_57381_57549 = state_57233__$1;
(statearr_57381_57549[(1)] = (91));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (76))){
var inst_57056 = (state_57233[(17)]);
var state_57233__$1 = state_57233;
if(cljs.core.truth_(inst_57056)){
var statearr_57382_57550 = state_57233__$1;
(statearr_57382_57550[(1)] = (78));

} else {
var statearr_57383_57551 = state_57233__$1;
(statearr_57383_57551[(1)] = (79));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (97))){
var inst_57055 = (state_57233[(15)]);
var state_57233__$1 = state_57233;
var statearr_57386_57552 = state_57233__$1;
(statearr_57386_57552[(2)] = inst_57055);

(statearr_57386_57552[(1)] = (98));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (19))){
var state_57233__$1 = state_57233;
var statearr_57387_57553 = state_57233__$1;
(statearr_57387_57553[(2)] = true);

(statearr_57387_57553[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (57))){
var inst_57097 = (state_57233[(7)]);
var inst_56986 = (state_57233[(11)]);
var tmp57384 = inst_56986;
var inst_56984 = new cljs.core.Keyword(null,"rescue","rescue",1135767523);
var inst_56985 = rescue;
var inst_56986__$1 = tmp57384;
var inst_56987 = inst_57097;
var state_57233__$1 = (function (){var statearr_57388 = state_57233;
(statearr_57388[(10)] = inst_56984);

(statearr_57388[(11)] = inst_56986__$1);

(statearr_57388[(12)] = inst_56985);

(statearr_57388[(13)] = inst_56987);

return statearr_57388;
})();
var statearr_57389_57554 = state_57233__$1;
(statearr_57389_57554[(2)] = null);

(statearr_57389_57554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (68))){
var inst_57148 = (state_57233[(2)]);
var state_57233__$1 = state_57233;
var statearr_57390_57555 = state_57233__$1;
(statearr_57390_57555[(2)] = inst_57148);

(statearr_57390_57555[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (11))){
var state_57233__$1 = state_57233;
var statearr_57392_57556 = state_57233__$1;
(statearr_57392_57556[(2)] = false);

(statearr_57392_57556[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (9))){
var inst_57017 = (state_57233[(2)]);
var state_57233__$1 = state_57233;
if(cljs.core.truth_(inst_57017)){
var statearr_57393_57557 = state_57233__$1;
(statearr_57393_57557[(1)] = (13));

} else {
var statearr_57394_57558 = state_57233__$1;
(statearr_57394_57558[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (5))){
var inst_56986 = (state_57233[(11)]);
var inst_56999 = (state_57233[(8)]);
var inst_56985 = (state_57233[(12)]);
var inst_56987 = (state_57233[(13)]);
var inst_56998 = cljs.core.first.call(null,inst_56985);
var inst_56999__$1 = keechma.toolbox.pipeline.core.action_ret_val.call(null,inst_56998,ctrl,context,app_db_atom,inst_56986,inst_56987,pipelines$);
var inst_57001 = (inst_56999__$1 == null);
var inst_57002 = cljs.core.not.call(null,inst_57001);
var state_57233__$1 = (function (){var statearr_57396 = state_57233;
(statearr_57396[(8)] = inst_56999__$1);

return statearr_57396;
})();
if(inst_57002){
var statearr_57397_57559 = state_57233__$1;
(statearr_57397_57559[(1)] = (7));

} else {
var statearr_57398_57560 = state_57233__$1;
(statearr_57398_57560[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (112))){
var inst_57055 = (state_57233[(15)]);
var state_57233__$1 = state_57233;
var statearr_57399_57561 = state_57233__$1;
(statearr_57399_57561[(2)] = inst_57055);

(statearr_57399_57561[(1)] = (113));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (83))){
var inst_57223 = (state_57233[(2)]);
var state_57233__$1 = state_57233;
var statearr_57401_57562 = state_57233__$1;
(statearr_57401_57562[(2)] = inst_57223);

(statearr_57401_57562[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (14))){
var inst_56999 = (state_57233[(8)]);
var state_57233__$1 = state_57233;
var statearr_57402_57563 = state_57233__$1;
(statearr_57402_57563[(2)] = inst_56999);

(statearr_57402_57563[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (45))){
var inst_57075 = (state_57233[(25)]);
var state_57233__$1 = state_57233;
var statearr_57403_57564 = state_57233__$1;
(statearr_57403_57564[(2)] = inst_57075);

(statearr_57403_57564[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (53))){
var inst_57111 = (state_57233[(2)]);
var state_57233__$1 = state_57233;
if(cljs.core.truth_(inst_57111)){
var statearr_57405_57565 = state_57233__$1;
(statearr_57405_57565[(1)] = (54));

} else {
var statearr_57406_57566 = state_57233__$1;
(statearr_57406_57566[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (78))){
var inst_56984 = (state_57233[(10)]);
var inst_57157 = cljs.core._EQ_.call(null,inst_56984,new cljs.core.Keyword(null,"begin","begin",-319034319));
var state_57233__$1 = state_57233;
var statearr_57407_57567 = state_57233__$1;
(statearr_57407_57567[(2)] = inst_57157);

(statearr_57407_57567[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (26))){
var inst_57023 = (state_57233[(9)]);
var state_57233__$1 = state_57233;
var statearr_57408_57568 = state_57233__$1;
(statearr_57408_57568[(2)] = inst_57023);

(statearr_57408_57568[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (16))){
var inst_57023 = (state_57233[(9)]);
var inst_57030 = inst_57023.keechma$toolbox$pipeline$core$ISideffect$;
var inst_57031 = (cljs.core.PROTOCOL_SENTINEL === inst_57030);
var inst_57032 = ((false) || (inst_57031));
var state_57233__$1 = state_57233;
if(cljs.core.truth_(inst_57032)){
var statearr_57410_57569 = state_57233__$1;
(statearr_57410_57569[(1)] = (19));

} else {
var statearr_57411_57570 = state_57233__$1;
(statearr_57411_57570[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (81))){
var inst_57162 = cljs.core.seq.call(null,rescue);
var state_57233__$1 = state_57233;
if(inst_57162){
var statearr_57412_57571 = state_57233__$1;
(statearr_57412_57571[(1)] = (84));

} else {
var statearr_57413_57572 = state_57233__$1;
(statearr_57413_57572[(1)] = (85));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (79))){
var inst_57056 = (state_57233[(17)]);
var state_57233__$1 = state_57233;
var statearr_57414_57573 = state_57233__$1;
(statearr_57414_57573[(2)] = inst_57056);

(statearr_57414_57573[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (38))){
var inst_57075 = (state_57233[(25)]);
var inst_57080 = inst_57075.cljs$lang$protocol_mask$partition0$;
var inst_57081 = (inst_57080 & (64));
var inst_57082 = inst_57075.cljs$core$ISeq$;
var inst_57083 = (cljs.core.PROTOCOL_SENTINEL === inst_57082);
var inst_57084 = ((inst_57081) || (inst_57083));
var state_57233__$1 = state_57233;
if(cljs.core.truth_(inst_57084)){
var statearr_57415_57574 = state_57233__$1;
(statearr_57415_57574[(1)] = (41));

} else {
var statearr_57417_57575 = state_57233__$1;
(statearr_57417_57575[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (98))){
var inst_57187 = (state_57233[(2)]);
var inst_57188 = reject.call(null,inst_57187);
var state_57233__$1 = state_57233;
var statearr_57418_57576 = state_57233__$1;
(statearr_57418_57576[(2)] = inst_57188);

(statearr_57418_57576[(1)] = (95));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (87))){
var inst_57166 = (state_57233[(21)]);
var state_57233__$1 = state_57233;
var statearr_57419_57577 = state_57233__$1;
(statearr_57419_57577[(2)] = inst_57166);

(statearr_57419_57577[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (30))){
var inst_57024 = (state_57233[(16)]);
var state_57233__$1 = state_57233;
var statearr_57420_57578 = state_57233__$1;
(statearr_57420_57578[(2)] = inst_57024);

(statearr_57420_57578[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (73))){
var state_57233__$1 = state_57233;
var statearr_57421_57579 = state_57233__$1;
(statearr_57421_57579[(2)] = null);

(statearr_57421_57579[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (96))){
var inst_57183 = (state_57233[(26)]);
var state_57233__$1 = state_57233;
var statearr_57423_57580 = state_57233__$1;
(statearr_57423_57580[(2)] = inst_57183);

(statearr_57423_57580[(1)] = (98));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (10))){
var state_57233__$1 = state_57233;
var statearr_57424_57581 = state_57233__$1;
(statearr_57424_57581[(2)] = true);

(statearr_57424_57581[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (18))){
var inst_57024 = (state_57233[(16)]);
var inst_57047 = (state_57233[(2)]);
var state_57233__$1 = (function (){var statearr_57425 = state_57233;
(statearr_57425[(24)] = inst_57047);

return statearr_57425;
})();
if(cljs.core.truth_(inst_57024)){
var statearr_57426_57582 = state_57233__$1;
(statearr_57426_57582[(1)] = (25));

} else {
var statearr_57427_57583 = state_57233__$1;
(statearr_57427_57583[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (105))){
var inst_57198 = (state_57233[(19)]);
var state_57233__$1 = state_57233;
var statearr_57428_57584 = state_57233__$1;
(statearr_57428_57584[(2)] = inst_57198);

(statearr_57428_57584[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (52))){
var inst_57098 = (state_57233[(20)]);
var state_57233__$1 = state_57233;
var statearr_57430_57585 = state_57233__$1;
(statearr_57430_57585[(2)] = inst_57098);

(statearr_57430_57585[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (67))){
var state_57233__$1 = state_57233;
var statearr_57431_57586 = state_57233__$1;
(statearr_57431_57586[(1)] = (72));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (71))){
var inst_57138 = (state_57233[(2)]);
var inst_57139 = reject.call(null,inst_57138);
var state_57233__$1 = state_57233;
var statearr_57433_57587 = state_57233__$1;
(statearr_57433_57587[(2)] = inst_57139);

(statearr_57433_57587[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (42))){
var state_57233__$1 = state_57233;
var statearr_57435_57588 = state_57233__$1;
(statearr_57435_57588[(2)] = false);

(statearr_57435_57588[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (80))){
var inst_57160 = (state_57233[(2)]);
var state_57233__$1 = state_57233;
if(cljs.core.truth_(inst_57160)){
var statearr_57436_57589 = state_57233__$1;
(statearr_57436_57589[(1)] = (81));

} else {
var statearr_57437_57590 = state_57233__$1;
(statearr_57437_57590[(1)] = (82));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (37))){
var inst_57227 = (state_57233[(2)]);
var state_57233__$1 = state_57233;
var statearr_57438_57591 = state_57233__$1;
(statearr_57438_57591[(2)] = inst_57227);

(statearr_57438_57591[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (63))){
var inst_56984 = (state_57233[(10)]);
var inst_57129 = cljs.core._EQ_.call(null,inst_56984,new cljs.core.Keyword(null,"rescue","rescue",1135767523));
var state_57233__$1 = state_57233;
var statearr_57439_57592 = state_57233__$1;
(statearr_57439_57592[(2)] = inst_57129);

(statearr_57439_57592[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (94))){
var inst_57056 = (state_57233[(17)]);
var state_57233__$1 = state_57233;
if(cljs.core.truth_(inst_57056)){
var statearr_57440_57593 = state_57233__$1;
(statearr_57440_57593[(1)] = (99));

} else {
var statearr_57441_57594 = state_57233__$1;
(statearr_57441_57594[(1)] = (100));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (8))){
var state_57233__$1 = state_57233;
var statearr_57443_57595 = state_57233__$1;
(statearr_57443_57595[(2)] = false);

(statearr_57443_57595[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (49))){
var inst_57098 = (state_57233[(20)]);
var inst_57106 = (state_57233[(2)]);
var state_57233__$1 = (function (){var statearr_57444 = state_57233;
(statearr_57444[(28)] = inst_57106);

return statearr_57444;
})();
if(cljs.core.truth_(inst_57098)){
var statearr_57445_57596 = state_57233__$1;
(statearr_57445_57596[(1)] = (51));

} else {
var statearr_57446_57597 = state_57233__$1;
(statearr_57446_57597[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57236 === (84))){
var inst_57055 = (state_57233[(15)]);
var inst_56986 = (state_57233[(11)]);
var tmp57442 = inst_56986;
var inst_56984 = new cljs.core.Keyword(null,"rescue","rescue",1135767523);
var inst_56985 = rescue;
var inst_56986__$1 = tmp57442;
var inst_56987 = inst_57055;
var state_57233__$1 = (function (){var statearr_57447 = state_57233;
(statearr_57447[(10)] = inst_56984);

(statearr_57447[(11)] = inst_56986__$1);

(statearr_57447[(12)] = inst_56985);

(statearr_57447[(13)] = inst_56987);

return statearr_57447;
})();
var statearr_57448_57598 = state_57233__$1;
(statearr_57448_57598[(2)] = null);

(statearr_57448_57598[(1)] = (2));


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
}
}
}
}
}
}
}
}
}
});})(c__44950__auto__,map__56981,map__56981__$1,begin,rescue,current_promise,context,running_check_path))
;
return ((function (switch__24619__auto__,c__44950__auto__,map__56981,map__56981__$1,begin,rescue,current_promise,context,running_check_path){
return (function() {
var keechma$toolbox$pipeline$core$state_machine__24620__auto__ = null;
var keechma$toolbox$pipeline$core$state_machine__24620__auto____0 = (function (){
var statearr_57449 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57449[(0)] = keechma$toolbox$pipeline$core$state_machine__24620__auto__);

(statearr_57449[(1)] = (1));

return statearr_57449;
});
var keechma$toolbox$pipeline$core$state_machine__24620__auto____1 = (function (state_57233){
while(true){
var ret_value__24621__auto__ = (function (){try{while(true){
var result__24622__auto__ = switch__24619__auto__.call(null,state_57233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24622__auto__;
}
break;
}
}catch (e57450){if((e57450 instanceof Object)){
var ex__24623__auto__ = e57450;
var statearr_57451_57599 = state_57233;
(statearr_57451_57599[(5)] = ex__24623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57600 = state_57233;
state_57233 = G__57600;
continue;
} else {
return ret_value__24621__auto__;
}
break;
}
});
keechma$toolbox$pipeline$core$state_machine__24620__auto__ = function(state_57233){
switch(arguments.length){
case 0:
return keechma$toolbox$pipeline$core$state_machine__24620__auto____0.call(this);
case 1:
return keechma$toolbox$pipeline$core$state_machine__24620__auto____1.call(this,state_57233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keechma$toolbox$pipeline$core$state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$toolbox$pipeline$core$state_machine__24620__auto____0;
keechma$toolbox$pipeline$core$state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$toolbox$pipeline$core$state_machine__24620__auto____1;
return keechma$toolbox$pipeline$core$state_machine__24620__auto__;
})()
;})(switch__24619__auto__,c__44950__auto__,map__56981,map__56981__$1,begin,rescue,current_promise,context,running_check_path))
})();
var state__44952__auto__ = (function (){var statearr_57452 = f__44951__auto__.call(null);
(statearr_57452[(6)] = c__44950__auto__);

return statearr_57452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44952__auto__);
});})(c__44950__auto__,map__56981,map__56981__$1,begin,rescue,current_promise,context,running_check_path))
);

return c__44950__auto__;
});})(map__56981,map__56981__$1,begin,rescue,current_promise,context,running_check_path))
);
});

keechma.toolbox.pipeline.core.run_pipeline.cljs$lang$maxFixedArity = 5;

keechma.toolbox.pipeline.core.make_pipeline = (function keechma$toolbox$pipeline$core$make_pipeline(pipeline){
return cljs.core.with_meta.call(null,cljs.core.partial.call(null,keechma.toolbox.pipeline.core.run_pipeline,pipeline),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pipeline?","pipeline?",1488086785),true], null));
});
keechma.toolbox.pipeline.core.exclusive = (function keechma$toolbox$pipeline$core$exclusive(pipeline){
var pipeline_meta = cljs.core.meta.call(null,pipeline);
return cljs.core.with_meta.call(null,((function (pipeline_meta){
return (function (ctrl,app_db_atom,value,pipelines$){
var vec__57601 = new cljs.core.Keyword("pipeline","running","pipeline/running",844864673).cljs$core$IFn$_invoke$arity$1(ctrl);
var pipeline_name = cljs.core.nth.call(null,vec__57601,(0),null);
var pipeline_id = cljs.core.nth.call(null,vec__57601,(1),null);
cljs.core.swap_BANG_.call(null,pipelines$,cljs.core.assoc,pipeline_name,cljs.core.PersistentArrayMap.EMPTY);

return pipeline.call(null,ctrl,app_db_atom,value,pipelines$);
});})(pipeline_meta))
,pipeline_meta);
});

//# sourceMappingURL=core.js.map?rel=1563552882393
