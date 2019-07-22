// Compiled by ClojureScript 1.10.339 {}
goog.provide('datascript.query');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('datascript.db');
goog.require('me.tonsky.persistent_sorted_set.arrays');
goog.require('datascript.lru');
goog.require('datascript.impl.entity');
goog.require('datascript.parser');
goog.require('datascript.pull_api');
goog.require('datascript.pull_parser');
datascript.query.lru_cache_size = (100);



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
datascript.query.Context = (function (rels,sources,rules,__meta,__extmap,__hash){
this.rels = rels;
this.sources = sources;
this.rules = rules;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k48953,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__48963 = k48953;
var G__48963__$1 = (((G__48963 instanceof cljs.core.Keyword))?G__48963.fqn:null);
switch (G__48963__$1) {
case "rels":
return self__.rels;

break;
case "sources":
return self__.sources;

break;
case "rules":
return self__.rules;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k48953,else__4206__auto__);

}
});

datascript.query.Context.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#datascript.query.Context{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules],null))], null),self__.__extmap));
});

datascript.query.Context.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48952){
var self__ = this;
var G__48952__$1 = this;
return (new cljs.core.RecordIter((0),G__48952__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"rules","rules",1198912366)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.query.Context.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

datascript.query.Context.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.query.Context.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.query.Context.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (1014232958 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

datascript.query.Context.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48954,other48955){
var self__ = this;
var this48954__$1 = this;
return ((!((other48955 == null))) && ((this48954__$1.constructor === other48955.constructor)) && (cljs.core._EQ_.call(null,this48954__$1.rels,other48955.rels)) && (cljs.core._EQ_.call(null,this48954__$1.sources,other48955.sources)) && (cljs.core._EQ_.call(null,this48954__$1.rules,other48955.rules)) && (cljs.core._EQ_.call(null,this48954__$1.__extmap,other48955.__extmap)));
});

datascript.query.Context.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sources","sources",-321166424),null,new cljs.core.Keyword(null,"rules","rules",1198912366),null,new cljs.core.Keyword(null,"rels","rels",1770187185),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

datascript.query.Context.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__48952){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__48975 = cljs.core.keyword_identical_QMARK_;
var expr__48976 = k__4211__auto__;
if(cljs.core.truth_(pred__48975.call(null,new cljs.core.Keyword(null,"rels","rels",1770187185),expr__48976))){
return (new datascript.query.Context(G__48952,self__.sources,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__48975.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424),expr__48976))){
return (new datascript.query.Context(self__.rels,G__48952,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__48975.call(null,new cljs.core.Keyword(null,"rules","rules",1198912366),expr__48976))){
return (new datascript.query.Context(self__.rels,self__.sources,G__48952,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__48952),null));
}
}
}
});

datascript.query.Context.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules,null))], null),self__.__extmap));
});

datascript.query.Context.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__48952){
var self__ = this;
var this__4202__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,G__48952,self__.__extmap,self__.__hash));
});

datascript.query.Context.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

datascript.query.Context.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rels","rels",-884248584,null),new cljs.core.Symbol(null,"sources","sources",1319365103,null),new cljs.core.Symbol(null,"rules","rules",-1455523403,null)], null);
});

datascript.query.Context.cljs$lang$type = true;

datascript.query.Context.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"datascript.query/Context",null,(1),null));
});

datascript.query.Context.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"datascript.query/Context");
});

/**
 * Positional factory function for datascript.query/Context.
 */
datascript.query.__GT_Context = (function datascript$query$__GT_Context(rels,sources,rules){
return (new datascript.query.Context(rels,sources,rules,null,null,null));
});

/**
 * Factory function for datascript.query/Context, taking a map of keywords to field values.
 */
datascript.query.map__GT_Context = (function datascript$query$map__GT_Context(G__48958){
var extmap__4236__auto__ = (function (){var G__48987 = cljs.core.dissoc.call(null,G__48958,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"rules","rules",1198912366));
if(cljs.core.record_QMARK_.call(null,G__48958)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__48987);
} else {
return G__48987;
}
})();
return (new datascript.query.Context(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(G__48958),new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(G__48958),new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(G__48958),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
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
datascript.query.Relation = (function (attrs,tuples,__meta,__extmap,__hash){
this.attrs = attrs;
this.tuples = tuples;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k49037,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__49057 = k49037;
var G__49057__$1 = (((G__49057 instanceof cljs.core.Keyword))?G__49057.fqn:null);
switch (G__49057__$1) {
case "attrs":
return self__.attrs;

break;
case "tuples":
return self__.tuples;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49037,else__4206__auto__);

}
});

datascript.query.Relation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#datascript.query.Relation{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples],null))], null),self__.__extmap));
});

datascript.query.Relation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49036){
var self__ = this;
var G__49036__$1 = this;
return (new cljs.core.RecordIter((0),G__49036__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"tuples","tuples",-676032639)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.query.Relation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

datascript.query.Relation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.query.Relation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.query.Relation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (1107093117 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

datascript.query.Relation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49038,other49039){
var self__ = this;
var this49038__$1 = this;
return ((!((other49039 == null))) && ((this49038__$1.constructor === other49039.constructor)) && (cljs.core._EQ_.call(null,this49038__$1.attrs,other49039.attrs)) && (cljs.core._EQ_.call(null,this49038__$1.tuples,other49039.tuples)) && (cljs.core._EQ_.call(null,this49038__$1.__extmap,other49039.__extmap)));
});

datascript.query.Relation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tuples","tuples",-676032639),null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

datascript.query.Relation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__49036){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__49072 = cljs.core.keyword_identical_QMARK_;
var expr__49073 = k__4211__auto__;
if(cljs.core.truth_(pred__49072.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__49073))){
return (new datascript.query.Relation(G__49036,self__.tuples,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49072.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639),expr__49073))){
return (new datascript.query.Relation(self__.attrs,G__49036,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__49036),null));
}
}
});

datascript.query.Relation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples,null))], null),self__.__extmap));
});

datascript.query.Relation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__49036){
var self__ = this;
var this__4202__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,G__49036,self__.__extmap,self__.__hash));
});

datascript.query.Relation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

datascript.query.Relation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"tuples","tuples",964498888,null)], null);
});

datascript.query.Relation.cljs$lang$type = true;

datascript.query.Relation.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"datascript.query/Relation",null,(1),null));
});

datascript.query.Relation.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"datascript.query/Relation");
});

/**
 * Positional factory function for datascript.query/Relation.
 */
datascript.query.__GT_Relation = (function datascript$query$__GT_Relation(attrs,tuples){
return (new datascript.query.Relation(attrs,tuples,null,null,null));
});

/**
 * Factory function for datascript.query/Relation, taking a map of keywords to field values.
 */
datascript.query.map__GT_Relation = (function datascript$query$map__GT_Relation(G__49042){
var extmap__4236__auto__ = (function (){var G__49079 = cljs.core.dissoc.call(null,G__49042,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"tuples","tuples",-676032639));
if(cljs.core.record_QMARK_.call(null,G__49042)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__49079);
} else {
return G__49079;
}
})();
return (new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__49042),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(G__49042),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});

datascript.query.single = (function datascript$query$single(coll){
if((cljs.core.next.call(null,coll) == null)){
} else {
throw (new Error(["Assert failed: ","Expected single element","\n","(nil? (next coll))"].join('')));
}

return cljs.core.first.call(null,coll);
});
datascript.query.intersect_keys = (function datascript$query$intersect_keys(attrs1,attrs2){
return clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,attrs1)),cljs.core.set.call(null,cljs.core.keys.call(null,attrs2)));
});
datascript.query.concatv = (function datascript$query$concatv(var_args){
var args__4534__auto__ = [];
var len__4531__auto___49124 = arguments.length;
var i__4532__auto___49125 = (0);
while(true){
if((i__4532__auto___49125 < len__4531__auto___49124)){
args__4534__auto__.push((arguments[i__4532__auto___49125]));

var G__49131 = (i__4532__auto___49125 + (1));
i__4532__auto___49125 = G__49131;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.cat,xs);
});

datascript.query.concatv.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
datascript.query.concatv.cljs$lang$applyTo = (function (seq49118){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49118));
});

datascript.query.zip = (function datascript$query$zip(var_args){
var G__49137 = arguments.length;
switch (G__49137) {
case 2:
return datascript.query.zip.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___49144 = arguments.length;
var i__4532__auto___49145 = (0);
while(true){
if((i__4532__auto___49145 < len__4531__auto___49144)){
args_arr__4546__auto__.push((arguments[i__4532__auto___49145]));

var G__49146 = (i__4532__auto___49145 + (1));
i__4532__auto___49145 = G__49146;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((2)),(0),null));
return datascript.query.zip.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4547__auto__);

}
});

datascript.query.zip.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return cljs.core.mapv.call(null,cljs.core.vector,a,b);
});

datascript.query.zip.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,rest){
return cljs.core.apply.call(null,cljs.core.mapv,cljs.core.vector,a,b,rest);
});

/** @this {Function} */
datascript.query.zip.cljs$lang$applyTo = (function (seq49134){
var G__49135 = cljs.core.first.call(null,seq49134);
var seq49134__$1 = cljs.core.next.call(null,seq49134);
var G__49136 = cljs.core.first.call(null,seq49134__$1);
var seq49134__$2 = cljs.core.next.call(null,seq49134__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49135,G__49136,seq49134__$2);
});

datascript.query.zip.cljs$lang$maxFixedArity = (2);

datascript.query.same_keys_QMARK_ = (function datascript$query$same_keys_QMARK_(a,b){
return ((cljs.core._EQ_.call(null,cljs.core.count.call(null,a),cljs.core.count.call(null,b))) && (cljs.core.every_QMARK_.call(null,(function (p1__49157_SHARP_){
return cljs.core.contains_QMARK_.call(null,b,p1__49157_SHARP_);
}),cljs.core.keys.call(null,a))) && (cljs.core.every_QMARK_.call(null,(function (p1__49158_SHARP_){
return cljs.core.contains_QMARK_.call(null,b,p1__49158_SHARP_);
}),cljs.core.keys.call(null,a))));
});
datascript.query.looks_like_QMARK_ = (function datascript$query$looks_like_QMARK_(pattern,form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),pattern)){
return true;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),pattern)){
return cljs.core.sequential_QMARK_.call(null,form);
} else {
if((pattern instanceof cljs.core.Symbol)){
return cljs.core._EQ_.call(null,form,pattern);
} else {
if(cljs.core.sequential_QMARK_.call(null,pattern)){
if(cljs.core._EQ_.call(null,cljs.core.last.call(null,pattern),new cljs.core.Symbol(null,"*","*",345799209,null))){
return ((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core.every_QMARK_.call(null,(function (p__49173){
var vec__49174 = p__49173;
var pattern_el = cljs.core.nth.call(null,vec__49174,(0),null);
var form_el = cljs.core.nth.call(null,vec__49174,(1),null);
return datascript.query.looks_like_QMARK_.call(null,pattern_el,form_el);
}),cljs.core.map.call(null,cljs.core.vector,cljs.core.butlast.call(null,pattern),form))));
} else {
return ((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),cljs.core.count.call(null,pattern))) && (cljs.core.every_QMARK_.call(null,(function (p__49187){
var vec__49188 = p__49187;
var pattern_el = cljs.core.nth.call(null,vec__49188,(0),null);
var form_el = cljs.core.nth.call(null,vec__49188,(1),null);
return datascript.query.looks_like_QMARK_.call(null,pattern_el,form_el);
}),cljs.core.map.call(null,cljs.core.vector,pattern,form))));
}
} else {
return pattern.call(null,form);

}
}
}
}
});
datascript.query.source_QMARK_ = (function datascript$query$source_QMARK_(sym){
return (((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,"$",cljs.core.first.call(null,cljs.core.name.call(null,sym)))));
});
datascript.query.free_var_QMARK_ = (function datascript$query$free_var_QMARK_(sym){
return (((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,"?",cljs.core.first.call(null,cljs.core.name.call(null,sym)))));
});
datascript.query.attr_QMARK_ = (function datascript$query$attr_QMARK_(form){
return (((form instanceof cljs.core.Keyword)) || (typeof form === 'string'));
});
datascript.query.lookup_ref_QMARK_ = (function datascript$query$lookup_ref_QMARK_(form){
return datascript.query.looks_like_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query.attr_QMARK_,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),form);
});
datascript.query.join_tuples = (function datascript$query$join_tuples(t1,idxs1,t2,idxs2){
var l1 = idxs1.length;
var l2 = idxs2.length;
var res = me.tonsky.persistent_sorted_set.arrays.make_array.call(null,(l1 + l2));
var n__4408__auto___49265 = l1;
var i_49266 = (0);
while(true){
if((i_49266 < n__4408__auto___49265)){
(res[i_49266] = (t1[(idxs1[i_49266])]));

var G__49274 = (i_49266 + (1));
i_49266 = G__49274;
continue;
} else {
}
break;
}

var n__4408__auto___49279 = l2;
var i_49280 = (0);
while(true){
if((i_49280 < n__4408__auto___49279)){
(res[(l1 + i_49280)] = (t2[(idxs2[i_49280])]));

var G__49288 = (i_49280 + (1));
i_49280 = G__49288;
continue;
} else {
}
break;
}

return res;
});
datascript.query.sum_rel = (function datascript$query$sum_rel(a,b){
var map__49289 = a;
var map__49289__$1 = ((((!((map__49289 == null)))?(((((map__49289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49289):map__49289);
var attrs_a = cljs.core.get.call(null,map__49289__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_a = cljs.core.get.call(null,map__49289__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var map__49290 = b;
var map__49290__$1 = ((((!((map__49290 == null)))?(((((map__49290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49290):map__49290);
var attrs_b = cljs.core.get.call(null,map__49290__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_b = cljs.core.get.call(null,map__49290__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
if(cljs.core._EQ_.call(null,attrs_a,attrs_b)){
return (new datascript.query.Relation(attrs_a,cljs.core.into.call(null,cljs.core.vec.call(null,tuples_a),tuples_b),null,null,null));
} else {
if(cljs.core.not.call(null,datascript.query.same_keys_QMARK_.call(null,attrs_a,attrs_b))){
throw cljs.core.ex_info.call(null,["Can\u2019t sum relations with different attrs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,attrs_a))," and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,attrs_b))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429)], null));
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.number_QMARK_,cljs.core.vals.call(null,attrs_a))){
var idxb__GT_idxa = cljs.core.vec.call(null,(function (){var iter__4324__auto__ = ((function (map__49289,map__49289__$1,attrs_a,tuples_a,map__49290,map__49290__$1,attrs_b,tuples_b){
return (function datascript$query$sum_rel_$_iter__49304(s__49305){
return (new cljs.core.LazySeq(null,((function (map__49289,map__49289__$1,attrs_a,tuples_a,map__49290,map__49290__$1,attrs_b,tuples_b){
return (function (){
var s__49305__$1 = s__49305;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__49305__$1);
if(temp__5720__auto__){
var s__49305__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49305__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__49305__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__49307 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__49306 = (0);
while(true){
if((i__49306 < size__4323__auto__)){
var vec__49310 = cljs.core._nth.call(null,c__4322__auto__,i__49306);
var sym = cljs.core.nth.call(null,vec__49310,(0),null);
var idx_b = cljs.core.nth.call(null,vec__49310,(1),null);
cljs.core.chunk_append.call(null,b__49307,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx_b,attrs_a.call(null,sym)], null));

var G__49360 = (i__49306 + (1));
i__49306 = G__49360;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49307),datascript$query$sum_rel_$_iter__49304.call(null,cljs.core.chunk_rest.call(null,s__49305__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49307),null);
}
} else {
var vec__49315 = cljs.core.first.call(null,s__49305__$2);
var sym = cljs.core.nth.call(null,vec__49315,(0),null);
var idx_b = cljs.core.nth.call(null,vec__49315,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx_b,attrs_a.call(null,sym)], null),datascript$query$sum_rel_$_iter__49304.call(null,cljs.core.rest.call(null,s__49305__$2)));
}
} else {
return null;
}
break;
}
});})(map__49289,map__49289__$1,attrs_a,tuples_a,map__49290,map__49290__$1,attrs_b,tuples_b))
,null,null));
});})(map__49289,map__49289__$1,attrs_a,tuples_a,map__49290,map__49290__$1,attrs_b,tuples_b))
;
return iter__4324__auto__.call(null,attrs_b);
})());
var tlen = (cljs.core.reduce.call(null,cljs.core.max,cljs.core.vals.call(null,attrs_a)) + (1));
var tuples_SINGLEQUOTE_ = cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (idxb__GT_idxa,tlen,map__49289,map__49289__$1,attrs_a,tuples_a,map__49290,map__49290__$1,attrs_b,tuples_b){
return (function (acc,tuple_b){
var tuple_SINGLEQUOTE_ = me.tonsky.persistent_sorted_set.arrays.make_array.call(null,tlen);
var seq__49319_49362 = cljs.core.seq.call(null,idxb__GT_idxa);
var chunk__49320_49363 = null;
var count__49321_49364 = (0);
var i__49322_49365 = (0);
while(true){
if((i__49322_49365 < count__49321_49364)){
var vec__49324_49366 = cljs.core._nth.call(null,chunk__49320_49363,i__49322_49365);
var idx_b_49367 = cljs.core.nth.call(null,vec__49324_49366,(0),null);
var idx_a_49368 = cljs.core.nth.call(null,vec__49324_49366,(1),null);
(tuple_SINGLEQUOTE_[idx_a_49368] = (tuple_b[idx_b_49367]));


var G__49369 = seq__49319_49362;
var G__49370 = chunk__49320_49363;
var G__49371 = count__49321_49364;
var G__49372 = (i__49322_49365 + (1));
seq__49319_49362 = G__49369;
chunk__49320_49363 = G__49370;
count__49321_49364 = G__49371;
i__49322_49365 = G__49372;
continue;
} else {
var temp__5720__auto___49373 = cljs.core.seq.call(null,seq__49319_49362);
if(temp__5720__auto___49373){
var seq__49319_49375__$1 = temp__5720__auto___49373;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49319_49375__$1)){
var c__4351__auto___49376 = cljs.core.chunk_first.call(null,seq__49319_49375__$1);
var G__49377 = cljs.core.chunk_rest.call(null,seq__49319_49375__$1);
var G__49378 = c__4351__auto___49376;
var G__49379 = cljs.core.count.call(null,c__4351__auto___49376);
var G__49380 = (0);
seq__49319_49362 = G__49377;
chunk__49320_49363 = G__49378;
count__49321_49364 = G__49379;
i__49322_49365 = G__49380;
continue;
} else {
var vec__49335_49381 = cljs.core.first.call(null,seq__49319_49375__$1);
var idx_b_49382 = cljs.core.nth.call(null,vec__49335_49381,(0),null);
var idx_a_49383 = cljs.core.nth.call(null,vec__49335_49381,(1),null);
(tuple_SINGLEQUOTE_[idx_a_49383] = (tuple_b[idx_b_49382]));


var G__49384 = cljs.core.next.call(null,seq__49319_49375__$1);
var G__49385 = null;
var G__49386 = (0);
var G__49387 = (0);
seq__49319_49362 = G__49384;
chunk__49320_49363 = G__49385;
count__49321_49364 = G__49386;
i__49322_49365 = G__49387;
continue;
}
} else {
}
}
break;
}

return cljs.core.conj_BANG_.call(null,acc,tuple_SINGLEQUOTE_);
});})(idxb__GT_idxa,tlen,map__49289,map__49289__$1,attrs_a,tuples_a,map__49290,map__49290__$1,attrs_b,tuples_b))
,cljs.core.transient$.call(null,cljs.core.vec.call(null,tuples_a)),tuples_b));
return (new datascript.query.Relation(attrs_a,tuples_SINGLEQUOTE_,null,null,null));
} else {
var all_attrs = cljs.core.zipmap.call(null,cljs.core.keys.call(null,cljs.core.merge.call(null,attrs_a,attrs_b)),cljs.core.range.call(null));
return datascript.query.sum_rel.call(null,datascript.query.sum_rel.call(null,(new datascript.query.Relation(all_attrs,cljs.core.PersistentVector.EMPTY,null,null,null)),a),b);

}
}
}
});
datascript.query.prod_rel = (function datascript$query$prod_rel(var_args){
var G__49392 = arguments.length;
switch (G__49392) {
case 0:
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new datascript.query.Relation(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [me.tonsky.persistent_sorted_set.arrays.make_array.call(null,(0))], null),null,null,null));
});

datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2 = (function (rel1,rel2){
var attrs1 = cljs.core.keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1));
var attrs2 = cljs.core.keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2));
var idxs1 = cljs.core.to_array.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),attrs1));
var idxs2 = cljs.core.to_array.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2),attrs2));
return (new datascript.query.Relation(cljs.core.zipmap.call(null,cljs.core.concat.call(null,attrs1,attrs2),cljs.core.range.call(null)),cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (attrs1,attrs2,idxs1,idxs2){
return (function (acc,t1){
return cljs.core.reduce.call(null,((function (attrs1,attrs2,idxs1,idxs2){
return (function (acc__$1,t2){
return cljs.core.conj_BANG_.call(null,acc__$1,datascript.query.join_tuples.call(null,t1,idxs1,t2,idxs2));
});})(attrs1,attrs2,idxs1,idxs2))
,acc,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2));
});})(attrs1,attrs2,idxs1,idxs2))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1))),null,null,null));
});

datascript.query.prod_rel.cljs$lang$maxFixedArity = 2;

datascript.query._differ_QMARK_ = (function datascript$query$_differ_QMARK_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___49426 = arguments.length;
var i__4532__auto___49428 = (0);
while(true){
if((i__4532__auto___49428 < len__4531__auto___49426)){
args__4534__auto__.push((arguments[i__4532__auto___49428]));

var G__49431 = (i__4532__auto___49428 + (1));
i__4532__auto___49428 = G__49431;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return datascript.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

datascript.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var l = cljs.core.count.call(null,xs);
return cljs.core.not_EQ_.call(null,cljs.core.take.call(null,(l / (2)),xs),cljs.core.drop.call(null,(l / (2)),xs));
});

datascript.query._differ_QMARK_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
datascript.query._differ_QMARK_.cljs$lang$applyTo = (function (seq49416){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49416));
});

datascript.query._get_else = (function datascript$query$_get_else(db,e,a,else_val){
if((else_val == null)){
throw cljs.core.ex_info.call(null,["get-else: nil default value is not supported"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429)], null));
} else {
}

var temp__5722__auto__ = cljs.core.first.call(null,datascript.db._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));
if((temp__5722__auto__ == null)){
return else_val;
} else {
var datom = temp__5722__auto__;
return new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom);
}
});
datascript.query._get_some = (function datascript$query$_get_some(var_args){
var args__4534__auto__ = [];
var len__4531__auto___49452 = arguments.length;
var i__4532__auto___49453 = (0);
while(true){
if((i__4532__auto___49453 < len__4531__auto___49452)){
args__4534__auto__.push((arguments[i__4532__auto___49453]));

var G__49454 = (i__4532__auto___49453 + (1));
i__4532__auto___49453 = G__49454;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return datascript.query._get_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

datascript.query._get_some.cljs$core$IFn$_invoke$arity$variadic = (function (db,e,as){
return cljs.core.reduce.call(null,(function (_,a){
var temp__5724__auto__ = cljs.core.first.call(null,datascript.db._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));
if((temp__5724__auto__ == null)){
return null;
} else {
var datom = temp__5724__auto__;
return cljs.core.reduced.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(datom),new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom)], null));
}
}),null,as);
});

datascript.query._get_some.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
datascript.query._get_some.cljs$lang$applyTo = (function (seq49445){
var G__49446 = cljs.core.first.call(null,seq49445);
var seq49445__$1 = cljs.core.next.call(null,seq49445);
var G__49447 = cljs.core.first.call(null,seq49445__$1);
var seq49445__$2 = cljs.core.next.call(null,seq49445__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49446,G__49447,seq49445__$2);
});

datascript.query._missing_QMARK_ = (function datascript$query$_missing_QMARK_(db,e,a){
return (cljs.core.get.call(null,datascript.impl.entity.entity.call(null,db,e),a) == null);
});
datascript.query.and_fn = (function datascript$query$and_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___49463 = arguments.length;
var i__4532__auto___49464 = (0);
while(true){
if((i__4532__auto___49464 < len__4531__auto___49463)){
args__4534__auto__.push((arguments[i__4532__auto___49464]));

var G__49465 = (i__4532__auto___49464 + (1));
i__4532__auto___49464 = G__49465;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return datascript.query.and_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

datascript.query.and_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.reduce.call(null,(function (a,b){
if(cljs.core.truth_(b)){
return b;
} else {
return cljs.core.reduced.call(null,b);
}
}),true,args);
});

datascript.query.and_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
datascript.query.and_fn.cljs$lang$applyTo = (function (seq49461){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49461));
});

datascript.query.or_fn = (function datascript$query$or_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___49471 = arguments.length;
var i__4532__auto___49472 = (0);
while(true){
if((i__4532__auto___49472 < len__4531__auto___49471)){
args__4534__auto__.push((arguments[i__4532__auto___49472]));

var G__49473 = (i__4532__auto___49472 + (1));
i__4532__auto___49472 = G__49473;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return datascript.query.or_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

datascript.query.or_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.reduce.call(null,(function (a,b){
if(cljs.core.truth_(b)){
return cljs.core.reduced.call(null,b);
} else {
return b;
}
}),null,args);
});

datascript.query.or_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
datascript.query.or_fn.cljs$lang$applyTo = (function (seq49467){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49467));
});

datascript.query.built_ins = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"true?","true?",-1600332395,null),new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null),new cljs.core.Symbol(null,"get-else","get-else",1312024065,null),new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"print-str","print-str",-699700354,null),new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"get-some","get-some",409442058,null),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"quot","quot",-1125214196,null),new cljs.core.Symbol(null,"false?","false?",-1522377573,null),new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null),new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null),new cljs.core.Symbol(null,"re-seq","re-seq",-2105554076,null),new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol("clojure.string","starts-with?","clojure.string/starts-with?",656256322,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"missing?","missing?",-1710383910,null),new cljs.core.Symbol(null,"ground","ground",-1460862835,null),new cljs.core.Symbol(null,"rand-int","rand-int",-495012157,null),new cljs.core.Symbol(null,"complement","complement",-913606051,null),new cljs.core.Symbol(null,"==","==",-234118149,null),new cljs.core.Symbol(null,"hash-map","hash-map",-439030950,null),new cljs.core.Symbol(null,"compare","compare",1109853757,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),new cljs.core.Symbol(null,"println-str","println-str",-2049216703,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Symbol(null,"!=","!=",-201205829,null),new cljs.core.Symbol(null,"prn-str","prn-str",-145225943,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"re-pattern","re-pattern",1047705161,null),new cljs.core.Symbol(null,"vector","vector",-751469611,null),new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"rand","rand",-1745930995,null),new cljs.core.Symbol(null,"re-matches","re-matches",-1865705768,null),new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("clojure.string","ends-with?","clojure.string/ends-with?",-745964149,null),new cljs.core.Symbol(null,"subs","subs",1453849536,null),new cljs.core.Symbol(null,"mod","mod",1510044207,null),new cljs.core.Symbol("clojure.string","includes?","clojure.string/includes?",-1842146260,null),new cljs.core.Symbol(null,"array-map","array-map",1555038968,null),new cljs.core.Symbol(null,"rem","rem",664046770,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"neg?","neg?",-1902175577,null),new cljs.core.Symbol("clojure.string","blank?","clojure.string/blank?",1772874244,null),new cljs.core.Symbol(null,"not-empty","not-empty",2029453590,null),new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"identical?","identical?",-745864205,null),new cljs.core.Symbol(null,"set","set",1945134081,null),new cljs.core.Symbol(null,"re-find","re-find",1143444147,null)],[cljs.core.true_QMARK_,datascript.query.and_fn,cljs.core.odd_QMARK_,datascript.query._get_else,cljs.core._GT__EQ_,cljs.core.print_str,cljs.core._GT_,cljs.core.count,datascript.query._get_some,cljs.core.nil_QMARK_,cljs.core.inc,cljs.core._SLASH_,cljs.core.quot,cljs.core.false_QMARK_,cljs.core.not,cljs.core.identity,datascript.query._differ_QMARK_,cljs.core.re_seq,cljs.core._LT__EQ_,clojure.string.starts_with_QMARK_,cljs.core._EQ_,cljs.core.min,cljs.core._PLUS_,cljs.core.name,datascript.query._missing_QMARK_,cljs.core.identity,cljs.core.rand_int,cljs.core.complement,cljs.core._EQ__EQ_,cljs.core.hash_map,cljs.core.compare,cljs.core.range,cljs.core.max,cljs.core.empty,cljs.core._STAR_,cljs.core.pr_str,cljs.core.println_str,cljs.core.meta,cljs.core.zero_QMARK_,cljs.core.not_EQ_,cljs.core.prn_str,cljs.core.dec,cljs.core.re_pattern,cljs.core.vector,cljs.core.not_EQ_,cljs.core.str,cljs.core._LT_,cljs.core.namespace,cljs.core._,cljs.core.some_QMARK_,cljs.core.pos_QMARK_,cljs.core.rand,cljs.core.re_matches,cljs.core.list,cljs.core.contains_QMARK_,clojure.string.ends_with_QMARK_,cljs.core.subs,cljs.core.mod,clojure.string.includes_QMARK_,cljs.core.array_map,cljs.core.rem,cljs.core.even_QMARK_,cljs.core.type,cljs.core.neg_QMARK_,clojure.string.blank_QMARK_,cljs.core.not_empty,datascript.query.or_fn,cljs.core.identical_QMARK_,cljs.core.set,cljs.core.re_find]);
datascript.query.built_in_aggregates = (function (){var sum = (function datascript$query$sum(coll){
return cljs.core.reduce.call(null,cljs.core._PLUS_,(0),coll);
});
var avg = (function datascript$query$avg(coll){
return (sum.call(null,coll) / cljs.core.count.call(null,coll));
});
var median = (function datascript$query$median(coll){
var terms = cljs.core.sort.call(null,coll);
var size = cljs.core.count.call(null,coll);
var med = (size >> (1));
var G__49512 = cljs.core.nth.call(null,terms,med);
if(cljs.core.even_QMARK_.call(null,size)){
return ((G__49512 + cljs.core.nth.call(null,terms,(med - (1)))) / (2));
} else {
return G__49512;
}
});
var variance = (function datascript$query$variance(coll){
var mean = avg.call(null,coll);
var sum__$1 = sum.call(null,(function (){var iter__4324__auto__ = ((function (mean){
return (function datascript$query$variance_$_iter__49516(s__49517){
return (new cljs.core.LazySeq(null,((function (mean){
return (function (){
var s__49517__$1 = s__49517;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__49517__$1);
if(temp__5720__auto__){
var s__49517__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49517__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__49517__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__49519 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__49518 = (0);
while(true){
if((i__49518 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__49518);
var delta = (x - mean);
cljs.core.chunk_append.call(null,b__49519,(delta * delta));

var G__49532 = (i__49518 + (1));
i__49518 = G__49532;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49519),datascript$query$variance_$_iter__49516.call(null,cljs.core.chunk_rest.call(null,s__49517__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49519),null);
}
} else {
var x = cljs.core.first.call(null,s__49517__$2);
var delta = (x - mean);
return cljs.core.cons.call(null,(delta * delta),datascript$query$variance_$_iter__49516.call(null,cljs.core.rest.call(null,s__49517__$2)));
}
} else {
return null;
}
break;
}
});})(mean))
,null,null));
});})(mean))
;
return iter__4324__auto__.call(null,coll);
})());
return (sum__$1 / cljs.core.count.call(null,coll));
});
var stddev = (function datascript$query$stddev(coll){
return Math.sqrt(variance.call(null,coll));
});
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"variance","variance",-1522424942,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"median","median",-2084869638,null),new cljs.core.Symbol(null,"sum","sum",1777518341,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"count-distinct","count-distinct",-1566572514,null),new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),new cljs.core.Symbol(null,"avg","avg",1837937727,null),new cljs.core.Symbol(null,"stddev","stddev",775056588,null),new cljs.core.Symbol(null,"rand","rand",-1745930995,null),new cljs.core.Symbol(null,"sample","sample",1719555128,null)],[variance,cljs.core.count,median,sum,(function() {
var G__49539 = null;
var G__49539__1 = (function (coll){
return cljs.core.reduce.call(null,(function (acc,x){
if((cljs.core.compare.call(null,x,acc) < (0))){
return x;
} else {
return acc;
}
}),cljs.core.first.call(null,coll),cljs.core.next.call(null,coll));
});
var G__49539__2 = (function (n,coll){
return cljs.core.vec.call(null,cljs.core.reduce.call(null,(function (acc,x){
if((cljs.core.count.call(null,acc) < n)){
return cljs.core.sort.call(null,cljs.core.compare,cljs.core.conj.call(null,acc,x));
} else {
if((cljs.core.compare.call(null,x,cljs.core.last.call(null,acc)) < (0))){
return cljs.core.sort.call(null,cljs.core.compare,cljs.core.conj.call(null,cljs.core.butlast.call(null,acc),x));
} else {
return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__49539 = function(n,coll){
switch(arguments.length){
case 1:
return G__49539__1.call(this,n);
case 2:
return G__49539__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__49539.cljs$core$IFn$_invoke$arity$1 = G__49539__1;
G__49539.cljs$core$IFn$_invoke$arity$2 = G__49539__2;
return G__49539;
})()
,(function() {
var G__49550 = null;
var G__49550__1 = (function (coll){
return cljs.core.reduce.call(null,(function (acc,x){
if((cljs.core.compare.call(null,x,acc) > (0))){
return x;
} else {
return acc;
}
}),cljs.core.first.call(null,coll),cljs.core.next.call(null,coll));
});
var G__49550__2 = (function (n,coll){
return cljs.core.vec.call(null,cljs.core.reduce.call(null,(function (acc,x){
if((cljs.core.count.call(null,acc) < n)){
return cljs.core.sort.call(null,cljs.core.compare,cljs.core.conj.call(null,acc,x));
} else {
if((cljs.core.compare.call(null,x,cljs.core.first.call(null,acc)) > (0))){
return cljs.core.sort.call(null,cljs.core.compare,cljs.core.conj.call(null,cljs.core.next.call(null,acc),x));
} else {
return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__49550 = function(n,coll){
switch(arguments.length){
case 1:
return G__49550__1.call(this,n);
case 2:
return G__49550__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__49550.cljs$core$IFn$_invoke$arity$1 = G__49550__1;
G__49550.cljs$core$IFn$_invoke$arity$2 = G__49550__2;
return G__49550;
})()
,(function (coll){
return cljs.core.count.call(null,cljs.core.distinct.call(null,coll));
}),cljs.core.set,avg,stddev,(function() {
var G__49554 = null;
var G__49554__1 = (function (coll){
return cljs.core.rand_nth.call(null,coll);
});
var G__49554__2 = (function (n,coll){
return cljs.core.vec.call(null,cljs.core.repeatedly.call(null,n,(function (){
return cljs.core.rand_nth.call(null,coll);
})));
});
G__49554 = function(n,coll){
switch(arguments.length){
case 1:
return G__49554__1.call(this,n);
case 2:
return G__49554__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__49554.cljs$core$IFn$_invoke$arity$1 = G__49554__1;
G__49554.cljs$core$IFn$_invoke$arity$2 = G__49554__2;
return G__49554;
})()
,(function (n,coll){
return cljs.core.vec.call(null,cljs.core.take.call(null,n,cljs.core.shuffle.call(null,coll)));
})]);
})();
datascript.query.parse_rules = (function datascript$query$parse_rules(rules){
var rules__$1 = ((typeof rules === 'string')?cljs.reader.read_string.call(null,rules):rules);
return cljs.core.group_by.call(null,cljs.core.ffirst,rules__$1);
});
datascript.query.empty_rel = (function datascript$query$empty_rel(binding){
var vars = cljs.core.map.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),datascript.parser.collect_vars_distinct.call(null,binding));
return (new datascript.query.Relation(cljs.core.zipmap.call(null,vars,cljs.core.range.call(null)),cljs.core.PersistentVector.EMPTY,null,null,null));
});

/**
 * @interface
 */
datascript.query.IBinding = function(){};

datascript.query.in__GT_rel = (function datascript$query$in__GT_rel(binding,value){
if(((!((binding == null))) && (!((binding.datascript$query$IBinding$in__GT_rel$arity$2 == null))))){
return binding.datascript$query$IBinding$in__GT_rel$arity$2(binding,value);
} else {
var x__4243__auto__ = (((binding == null))?null:binding);
var m__4244__auto__ = (datascript.query.in__GT_rel[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,binding,value);
} else {
var m__4244__auto____$1 = (datascript.query.in__GT_rel["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,binding,value);
} else {
throw cljs.core.missing_protocol.call(null,"IBinding.in->rel",binding);
}
}
}
});

datascript.parser.BindIgnore.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindIgnore.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (_,___$1){
var ___$2 = this;
return datascript.query.prod_rel.call(null);
});

datascript.parser.BindScalar.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindScalar.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,value){
var binding__$1 = this;
return (new datascript.query.Relation(cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.get_in.call(null,binding__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null)),(0)]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null))], null),null,null,null));
});

datascript.parser.BindColl.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindColl.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,coll){
var binding__$1 = this;
if(!(datascript.db.seqable_QMARK_.call(null,coll))){
throw cljs.core.ex_info.call(null,["Cannot bind value ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,coll))," to collection ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,datascript.parser.source.call(null,binding__$1)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datascript.parser.source.call(null,binding__$1)], null));
} else {
if(cljs.core.empty_QMARK_.call(null,coll)){
return datascript.query.empty_rel.call(null,binding__$1);
} else {
return cljs.core.reduce.call(null,datascript.query.sum_rel,cljs.core.map.call(null,((function (binding__$1){
return (function (p1__49583_SHARP_){
return datascript.query.in__GT_rel.call(null,new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(binding__$1),p1__49583_SHARP_);
});})(binding__$1))
,coll));

}
}
});

datascript.parser.BindTuple.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindTuple.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,coll){
var binding__$1 = this;
if(!(datascript.db.seqable_QMARK_.call(null,coll))){
throw cljs.core.ex_info.call(null,["Cannot bind value ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,coll))," to tuple ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,datascript.parser.source.call(null,binding__$1)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datascript.parser.source.call(null,binding__$1)], null));
} else {
if((cljs.core.count.call(null,coll) < cljs.core.count.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(binding__$1)))){
throw cljs.core.ex_info.call(null,["Not enough elements in a collection ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,coll))," to bind tuple ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,datascript.parser.source.call(null,binding__$1)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datascript.parser.source.call(null,binding__$1)], null));
} else {
return cljs.core.reduce.call(null,datascript.query.prod_rel,cljs.core.map.call(null,((function (binding__$1){
return (function (p1__49584_SHARP_,p2__49585_SHARP_){
return datascript.query.in__GT_rel.call(null,p1__49584_SHARP_,p2__49585_SHARP_);
});})(binding__$1))
,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(binding__$1),coll));

}
}
});
datascript.query.resolve_in = (function datascript$query$resolve_in(context,p__49612){
var vec__49613 = p__49612;
var binding = cljs.core.nth.call(null,vec__49613,(0),null);
var value = cljs.core.nth.call(null,vec__49613,(1),null);
if((((binding instanceof datascript.parser.BindScalar)) && ((new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(binding) instanceof datascript.parser.SrcVar)))){
return cljs.core.update.call(null,context,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.assoc,cljs.core.get_in.call(null,binding,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null)),value);
} else {
if((((binding instanceof datascript.parser.BindScalar)) && ((new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(binding) instanceof datascript.parser.RulesVar)))){
return cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"rules","rules",1198912366),datascript.query.parse_rules.call(null,value));
} else {
return cljs.core.update.call(null,context,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.conj,datascript.query.in__GT_rel.call(null,binding,value));

}
}
});
datascript.query.resolve_ins = (function datascript$query$resolve_ins(context,bindings,values){
return cljs.core.reduce.call(null,datascript.query.resolve_in,context,cljs.core.zipmap.call(null,bindings,values));
});
/**
 * List of symbols in current pattern that might potentiall be resolved to refs
 */
datascript.query._STAR_lookup_attrs_STAR_ = null;
/**
 * Default pattern source. Lookup refs, patterns, rules will be resolved with it
 */
datascript.query._STAR_implicit_source_STAR_ = null;
datascript.query.getter_fn = (function datascript$query$getter_fn(attrs,attr){
var idx = attrs.call(null,attr);
if(cljs.core.contains_QMARK_.call(null,datascript.query._STAR_lookup_attrs_STAR_,attr)){
return ((function (idx){
return (function (tuple){
var eid = (tuple[idx]);
if(typeof eid === 'number'){
return eid;
} else {
if(cljs.core.sequential_QMARK_.call(null,eid)){
return datascript.db.entid.call(null,datascript.query._STAR_implicit_source_STAR_,eid);
} else {
if(me.tonsky.persistent_sorted_set.arrays.array_QMARK_.call(null,eid)){
return datascript.db.entid.call(null,datascript.query._STAR_implicit_source_STAR_,eid);
} else {
return eid;

}
}
}
});
;})(idx))
} else {
return ((function (idx){
return (function (tuple){
return (tuple[idx]);
});
;})(idx))
}
});
datascript.query.tuple_key_fn = (function datascript$query$tuple_key_fn(getters){
if((cljs.core.count.call(null,getters) === (1))){
return cljs.core.first.call(null,getters);
} else {
var getters__$1 = cljs.core.to_array.call(null,getters);
return ((function (getters__$1){
return (function (tuple){
return cljs.core.list_STAR_.call(null,getters__$1.map(((function (getters__$1){
return (function (p1__49637_SHARP_){
return p1__49637_SHARP_.call(null,tuple);
});})(getters__$1))
));
});
;})(getters__$1))
}
});
datascript.query.hash_attrs = (function datascript$query$hash_attrs(key_fn,tuples){
var tuples__$1 = tuples;
var hash_table = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
var temp__5722__auto__ = cljs.core.first.call(null,tuples__$1);
if((temp__5722__auto__ == null)){
return cljs.core.persistent_BANG_.call(null,hash_table);
} else {
var tuple = temp__5722__auto__;
var key = key_fn.call(null,tuple);
var G__49645 = cljs.core.next.call(null,tuples__$1);
var G__49646 = cljs.core.assoc_BANG_.call(null,hash_table,key,cljs.core.conj.call(null,cljs.core.get.call(null,hash_table,key,cljs.core.List.EMPTY),tuple));
tuples__$1 = G__49645;
hash_table = G__49646;
continue;
}
break;
}
});
datascript.query.hash_join = (function datascript$query$hash_join(rel1,rel2){
var tuples1 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1);
var tuples2 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2);
var attrs1 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1);
var attrs2 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2);
var common_attrs = cljs.core.vec.call(null,datascript.query.intersect_keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2)));
var common_gtrs1 = cljs.core.map.call(null,((function (tuples1,tuples2,attrs1,attrs2,common_attrs){
return (function (p1__49648_SHARP_){
return datascript.query.getter_fn.call(null,attrs1,p1__49648_SHARP_);
});})(tuples1,tuples2,attrs1,attrs2,common_attrs))
,common_attrs);
var common_gtrs2 = cljs.core.map.call(null,((function (tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1){
return (function (p1__49649_SHARP_){
return datascript.query.getter_fn.call(null,attrs2,p1__49649_SHARP_);
});})(tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1))
,common_attrs);
var keep_attrs1 = cljs.core.keys.call(null,attrs1);
var keep_attrs2 = cljs.core.vec.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,attrs2)),cljs.core.set.call(null,cljs.core.keys.call(null,attrs1))));
var keep_idxs1 = cljs.core.to_array.call(null,cljs.core.map.call(null,attrs1,keep_attrs1));
var keep_idxs2 = cljs.core.to_array.call(null,cljs.core.map.call(null,attrs2,keep_attrs2));
var key_fn1 = datascript.query.tuple_key_fn.call(null,common_gtrs1);
var hash = datascript.query.hash_attrs.call(null,key_fn1,tuples1);
var key_fn2 = datascript.query.tuple_key_fn.call(null,common_gtrs2);
var new_tuples = cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2){
return (function (acc,tuple2){
var key = key_fn2.call(null,tuple2);
var temp__5722__auto__ = cljs.core.get.call(null,hash,key);
if((temp__5722__auto__ == null)){
return acc;
} else {
var tuples1__$1 = temp__5722__auto__;
return cljs.core.reduce.call(null,((function (tuples1__$1,temp__5722__auto__,key,tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2){
return (function (acc__$1,tuple1){
return cljs.core.conj_BANG_.call(null,acc__$1,datascript.query.join_tuples.call(null,tuple1,keep_idxs1,tuple2,keep_idxs2));
});})(tuples1__$1,temp__5722__auto__,key,tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2))
,acc,tuples1__$1);
}
});})(tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),tuples2));
return (new datascript.query.Relation(cljs.core.zipmap.call(null,cljs.core.concat.call(null,keep_attrs1,keep_attrs2),cljs.core.range.call(null)),new_tuples,null,null,null));
});
datascript.query.subtract_rel = (function datascript$query$subtract_rel(a,b){
var map__49664 = a;
var map__49664__$1 = ((((!((map__49664 == null)))?(((((map__49664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49664):map__49664);
var attrs_a = cljs.core.get.call(null,map__49664__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_a = cljs.core.get.call(null,map__49664__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var map__49665 = b;
var map__49665__$1 = ((((!((map__49665 == null)))?(((((map__49665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49665):map__49665);
var attrs_b = cljs.core.get.call(null,map__49665__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_b = cljs.core.get.call(null,map__49665__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var attrs = datascript.query.intersect_keys.call(null,attrs_a,attrs_b);
var getters_b = cljs.core.map.call(null,((function (map__49664,map__49664__$1,attrs_a,tuples_a,map__49665,map__49665__$1,attrs_b,tuples_b,attrs){
return (function (p1__49661_SHARP_){
return datascript.query.getter_fn.call(null,attrs_b,p1__49661_SHARP_);
});})(map__49664,map__49664__$1,attrs_a,tuples_a,map__49665,map__49665__$1,attrs_b,tuples_b,attrs))
,attrs);
var key_fn_b = datascript.query.tuple_key_fn.call(null,getters_b);
var hash = datascript.query.hash_attrs.call(null,key_fn_b,tuples_b);
var getters_a = cljs.core.map.call(null,((function (map__49664,map__49664__$1,attrs_a,tuples_a,map__49665,map__49665__$1,attrs_b,tuples_b,attrs,getters_b,key_fn_b,hash){
return (function (p1__49662_SHARP_){
return datascript.query.getter_fn.call(null,attrs_a,p1__49662_SHARP_);
});})(map__49664,map__49664__$1,attrs_a,tuples_a,map__49665,map__49665__$1,attrs_b,tuples_b,attrs,getters_b,key_fn_b,hash))
,attrs);
var key_fn_a = datascript.query.tuple_key_fn.call(null,getters_a);
return cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.filterv.call(null,((function (map__49664,map__49664__$1,attrs_a,tuples_a,map__49665,map__49665__$1,attrs_b,tuples_b,attrs,getters_b,key_fn_b,hash,getters_a,key_fn_a){
return (function (p1__49663_SHARP_){
return (hash.call(null,key_fn_a.call(null,p1__49663_SHARP_)) == null);
});})(map__49664,map__49664__$1,attrs_a,tuples_a,map__49665,map__49665__$1,attrs_b,tuples_b,attrs,getters_b,key_fn_b,hash,getters_a,key_fn_a))
,tuples_a));
});
datascript.query.lookup_pattern_db = (function datascript$query$lookup_pattern_db(db,pattern){
var search_pattern = cljs.core.mapv.call(null,(function (p1__49681_SHARP_){
if((p1__49681_SHARP_ instanceof cljs.core.Symbol)){
return null;
} else {
return p1__49681_SHARP_;
}
}),pattern);
var datoms = datascript.db._search.call(null,db,search_pattern);
var attr__GT_prop = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (search_pattern,datoms){
return (function (p__49684){
var vec__49685 = p__49684;
var s = cljs.core.nth.call(null,vec__49685,(0),null);
var _ = cljs.core.nth.call(null,vec__49685,(1),null);
return datascript.query.free_var_QMARK_.call(null,s);
});})(search_pattern,datoms))
,cljs.core.map.call(null,cljs.core.vector,pattern,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e","a","v","tx"], null))));
return (new datascript.query.Relation(attr__GT_prop,datoms,null,null,null));
});
datascript.query.matches_pattern_QMARK_ = (function datascript$query$matches_pattern_QMARK_(pattern,tuple){
var tuple__$1 = tuple;
var pattern__$1 = pattern;
while(true){
if(cljs.core.truth_((function (){var and__3938__auto__ = tuple__$1;
if(cljs.core.truth_(and__3938__auto__)){
return pattern__$1;
} else {
return and__3938__auto__;
}
})())){
var t = cljs.core.first.call(null,tuple__$1);
var p = cljs.core.first.call(null,pattern__$1);
if((((p instanceof cljs.core.Symbol)) || (cljs.core._EQ_.call(null,t,p)))){
var G__49695 = cljs.core.next.call(null,tuple__$1);
var G__49696 = cljs.core.next.call(null,pattern__$1);
tuple__$1 = G__49695;
pattern__$1 = G__49696;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
});
datascript.query.lookup_pattern_coll = (function datascript$query$lookup_pattern_coll(coll,pattern){
var data = cljs.core.filter.call(null,(function (p1__49697_SHARP_){
return datascript.query.matches_pattern_QMARK_.call(null,pattern,p1__49697_SHARP_);
}),coll);
var attr__GT_idx = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (data){
return (function (p__49698){
var vec__49699 = p__49698;
var s = cljs.core.nth.call(null,vec__49699,(0),null);
var _ = cljs.core.nth.call(null,vec__49699,(1),null);
return datascript.query.free_var_QMARK_.call(null,s);
});})(data))
,cljs.core.map.call(null,cljs.core.vector,pattern,cljs.core.range.call(null))));
return (new datascript.query.Relation(attr__GT_idx,cljs.core.mapv.call(null,cljs.core.to_array,data),null,null,null));
});
datascript.query.normalize_pattern_clause = (function datascript$query$normalize_pattern_clause(clause){
if(cljs.core.truth_(datascript.query.source_QMARK_.call(null,cljs.core.first.call(null,clause)))){
return clause;
} else {
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null),clause);
}
});
datascript.query.lookup_pattern = (function datascript$query$lookup_pattern(source,pattern){
if(((!((source == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$ISearch$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.db.ISearch,source):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.db.ISearch,source))){
return datascript.query.lookup_pattern_db.call(null,source,pattern);
} else {
return datascript.query.lookup_pattern_coll.call(null,source,pattern);

}
});
datascript.query.collapse_rels = (function datascript$query$collapse_rels(rels,new_rel){
var rels__$1 = rels;
var new_rel__$1 = new_rel;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5722__auto__ = cljs.core.first.call(null,rels__$1);
if((temp__5722__auto__ == null)){
return cljs.core.conj.call(null,acc,new_rel__$1);
} else {
var rel = temp__5722__auto__;
if(cljs.core.truth_(cljs.core.not_empty.call(null,datascript.query.intersect_keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(new_rel__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel))))){
var G__49734 = cljs.core.next.call(null,rels__$1);
var G__49735 = datascript.query.hash_join.call(null,rel,new_rel__$1);
var G__49736 = acc;
rels__$1 = G__49734;
new_rel__$1 = G__49735;
acc = G__49736;
continue;
} else {
var G__49739 = cljs.core.next.call(null,rels__$1);
var G__49740 = new_rel__$1;
var G__49741 = cljs.core.conj.call(null,acc,rel);
rels__$1 = G__49739;
new_rel__$1 = G__49740;
acc = G__49741;
continue;
}
}
break;
}
});
datascript.query.rel_with_attr = (function datascript$query$rel_with_attr(context,sym){
return cljs.core.some.call(null,(function (p1__49743_SHARP_){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__49743_SHARP_),sym)){
return p1__49743_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context));
});
datascript.query.context_resolve_val = (function datascript$query$context_resolve_val(context,sym){
var temp__5724__auto__ = datascript.query.rel_with_attr.call(null,context,sym);
if((temp__5724__auto__ == null)){
return null;
} else {
var rel = temp__5724__auto__;
var temp__5724__auto____$1 = cljs.core.first.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel));
if((temp__5724__auto____$1 == null)){
return null;
} else {
var tuple = temp__5724__auto____$1;
return (tuple[new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel).call(null,sym)]);
}
}
});
datascript.query.rel_contains_attrs_QMARK_ = (function datascript$query$rel_contains_attrs_QMARK_(rel,attrs){
return cljs.core.some.call(null,(function (p1__49765_SHARP_){
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),p1__49765_SHARP_);
}),attrs);
});
datascript.query.rel_prod_by_attrs = (function datascript$query$rel_prod_by_attrs(context,attrs){
var rels = cljs.core.filter.call(null,(function (p1__49769_SHARP_){
return datascript.query.rel_contains_attrs_QMARK_.call(null,p1__49769_SHARP_,attrs);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context));
var production = cljs.core.reduce.call(null,datascript.query.prod_rel,rels);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.call(null,context,new cljs.core.Keyword(null,"rels","rels",1770187185),((function (rels,production){
return (function (p1__49770_SHARP_){
return cljs.core.remove.call(null,cljs.core.set.call(null,rels),p1__49770_SHARP_);
});})(rels,production))
),production], null);
});
datascript.query._call_fn = (function datascript$query$_call_fn(context,rel,f,args){
var sources = new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context);
var attrs = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel);
var len = cljs.core.count.call(null,args);
var static_args = me.tonsky.persistent_sorted_set.arrays.make_array.call(null,len);
var tuples_args = me.tonsky.persistent_sorted_set.arrays.make_array.call(null,len);
var n__4408__auto___49787 = len;
var i_49788 = (0);
while(true){
if((i_49788 < n__4408__auto___49787)){
var arg_49790 = cljs.core.nth.call(null,args,i_49788);
if((arg_49790 instanceof cljs.core.Symbol)){
var temp__5722__auto___49791 = cljs.core.get.call(null,sources,arg_49790);
if((temp__5722__auto___49791 == null)){
(tuples_args[i_49788] = cljs.core.get.call(null,attrs,arg_49790));
} else {
var source_49792 = temp__5722__auto___49791;
(static_args[i_49788] = source_49792);
}
} else {
(static_args[i_49788] = arg_49790);
}

var G__49794 = (i_49788 + (1));
i_49788 = G__49794;
continue;
} else {
}
break;
}

if((f === cljs.core.vector)){
return ((function (sources,attrs,len,static_args,tuples_args){
return (function (tuple){
var args__$1 = me.tonsky.persistent_sorted_set.arrays.aclone.call(null,static_args);
var n__4408__auto___49797 = len;
var i_49798 = (0);
while(true){
if((i_49798 < n__4408__auto___49797)){
var temp__5724__auto___49800 = (tuples_args[i_49798]);
if((temp__5724__auto___49800 == null)){
} else {
var tuple_idx_49802 = temp__5724__auto___49800;
var v_49803 = (tuple[tuple_idx_49802]);
(args__$1[i_49798] = v_49803);
}

var G__49804 = (i_49798 + (1));
i_49798 = G__49804;
continue;
} else {
}
break;
}

return cljs.core.apply.call(null,f,args__$1);
});
;})(sources,attrs,len,static_args,tuples_args))
} else {
return ((function (sources,attrs,len,static_args,tuples_args){
return (function (tuple){
var n__4408__auto___49805 = len;
var i_49806 = (0);
while(true){
if((i_49806 < n__4408__auto___49805)){
var temp__5724__auto___49808 = (tuples_args[i_49806]);
if((temp__5724__auto___49808 == null)){
} else {
var tuple_idx_49809 = temp__5724__auto___49808;
var v_49810 = (tuple[tuple_idx_49809]);
(static_args[i_49806] = v_49810);
}

var G__49811 = (i_49806 + (1));
i_49806 = G__49811;
continue;
} else {
}
break;
}

return cljs.core.apply.call(null,f,static_args);
});
;})(sources,attrs,len,static_args,tuples_args))
}
});
datascript.query.resolve_sym = (function datascript$query$resolve_sym(sym){
return null;
});
datascript.query.filter_by_pred = (function datascript$query$filter_by_pred(context,clause){
var vec__49813 = clause;
var vec__49816 = cljs.core.nth.call(null,vec__49813,(0),null);
var seq__49817 = cljs.core.seq.call(null,vec__49816);
var first__49818 = cljs.core.first.call(null,seq__49817);
var seq__49817__$1 = cljs.core.next.call(null,seq__49817);
var f = first__49818;
var args = seq__49817__$1;
var pred = (function (){var or__3949__auto__ = cljs.core.get.call(null,datascript.query.built_ins,f);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = datascript.query.context_resolve_val.call(null,context,f);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = datascript.query.resolve_sym.call(null,f);
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
if((datascript.query.rel_with_attr.call(null,context,f) == null)){
throw cljs.core.ex_info.call(null,["Unknown predicate '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,f))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,clause))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),clause,new cljs.core.Keyword(null,"var","var",-769682797),f], null));
} else {
return null;
}
}
}
}
})();
var vec__49819 = datascript.query.rel_prod_by_attrs.call(null,context,cljs.core.filter.call(null,cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.call(null,vec__49819,(0),null);
var production = cljs.core.nth.call(null,vec__49819,(1),null);
var new_rel = (cljs.core.truth_(pred)?(function (){var tuple_pred = datascript.query._call_fn.call(null,context__$1,production,pred,args);
return cljs.core.update.call(null,production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),((function (tuple_pred,vec__49813,vec__49816,seq__49817,first__49818,seq__49817__$1,f,args,pred,vec__49819,context__$1,production){
return (function (p1__49812_SHARP_){
return cljs.core.filter.call(null,tuple_pred,p1__49812_SHARP_);
});})(tuple_pred,vec__49813,vec__49816,seq__49817,first__49818,seq__49817__$1,f,args,pred,vec__49819,context__$1,production))
);
})():cljs.core.assoc.call(null,production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.PersistentVector.EMPTY));
return cljs.core.update.call(null,context__$1,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.conj,new_rel);
});
datascript.query.bind_by_fn = (function datascript$query$bind_by_fn(context,clause){
var vec__49837 = clause;
var vec__49840 = cljs.core.nth.call(null,vec__49837,(0),null);
var seq__49841 = cljs.core.seq.call(null,vec__49840);
var first__49842 = cljs.core.first.call(null,seq__49841);
var seq__49841__$1 = cljs.core.next.call(null,seq__49841);
var f = first__49842;
var args = seq__49841__$1;
var out = cljs.core.nth.call(null,vec__49837,(1),null);
var binding = datascript.parser.parse_binding.call(null,out);
var fun = (function (){var or__3949__auto__ = cljs.core.get.call(null,datascript.query.built_ins,f);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = datascript.query.context_resolve_val.call(null,context,f);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = datascript.query.resolve_sym.call(null,f);
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
if((datascript.query.rel_with_attr.call(null,context,f) == null)){
throw cljs.core.ex_info.call(null,["Unknown function '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,f))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,clause))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),clause,new cljs.core.Keyword(null,"var","var",-769682797),f], null));
} else {
return null;
}
}
}
}
})();
var vec__49843 = datascript.query.rel_prod_by_attrs.call(null,context,cljs.core.filter.call(null,cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.call(null,vec__49843,(0),null);
var production = cljs.core.nth.call(null,vec__49843,(1),null);
var new_rel = (cljs.core.truth_(fun)?(function (){var tuple_fn = datascript.query._call_fn.call(null,context__$1,production,fun,args);
var rels = (function (){var iter__4324__auto__ = ((function (tuple_fn,vec__49837,vec__49840,seq__49841,first__49842,seq__49841__$1,f,args,out,binding,fun,vec__49843,context__$1,production){
return (function datascript$query$bind_by_fn_$_iter__49846(s__49847){
return (new cljs.core.LazySeq(null,((function (tuple_fn,vec__49837,vec__49840,seq__49841,first__49842,seq__49841__$1,f,args,out,binding,fun,vec__49843,context__$1,production){
return (function (){
var s__49847__$1 = s__49847;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__49847__$1);
if(temp__5720__auto__){
var s__49847__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49847__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__49847__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__49849 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__49848 = (0);
while(true){
if((i__49848 < size__4323__auto__)){
var tuple = cljs.core._nth.call(null,c__4322__auto__,i__49848);
var val = tuple_fn.call(null,tuple);
if(!((val == null))){
cljs.core.chunk_append.call(null,b__49849,datascript.query.prod_rel.call(null,(new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datascript.query.in__GT_rel.call(null,binding,val)));

var G__49878 = (i__49848 + (1));
i__49848 = G__49878;
continue;
} else {
var G__49879 = (i__49848 + (1));
i__49848 = G__49879;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49849),datascript$query$bind_by_fn_$_iter__49846.call(null,cljs.core.chunk_rest.call(null,s__49847__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49849),null);
}
} else {
var tuple = cljs.core.first.call(null,s__49847__$2);
var val = tuple_fn.call(null,tuple);
if(!((val == null))){
return cljs.core.cons.call(null,datascript.query.prod_rel.call(null,(new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datascript.query.in__GT_rel.call(null,binding,val)),datascript$query$bind_by_fn_$_iter__49846.call(null,cljs.core.rest.call(null,s__49847__$2)));
} else {
var G__49880 = cljs.core.rest.call(null,s__49847__$2);
s__49847__$1 = G__49880;
continue;
}
}
} else {
return null;
}
break;
}
});})(tuple_fn,vec__49837,vec__49840,seq__49841,first__49842,seq__49841__$1,f,args,out,binding,fun,vec__49843,context__$1,production))
,null,null));
});})(tuple_fn,vec__49837,vec__49840,seq__49841,first__49842,seq__49841__$1,f,args,out,binding,fun,vec__49843,context__$1,production))
;
return iter__4324__auto__.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(production));
})();
if(cljs.core.empty_QMARK_.call(null,rels)){
return datascript.query.prod_rel.call(null,production,datascript.query.empty_rel.call(null,binding));
} else {
return cljs.core.reduce.call(null,datascript.query.sum_rel,rels);
}
})():datascript.query.prod_rel.call(null,cljs.core.assoc.call(null,production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.PersistentVector.EMPTY),datascript.query.empty_rel.call(null,binding)));
return cljs.core.update.call(null,context__$1,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,new_rel);
});
datascript.query.rule_QMARK_ = (function datascript$query$rule_QMARK_(context,clause){
return ((cljs.core.sequential_QMARK_.call(null,clause)) && (cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),(cljs.core.truth_(datascript.query.source_QMARK_.call(null,cljs.core.first.call(null,clause)))?cljs.core.second.call(null,clause):cljs.core.first.call(null,clause)))));
});
datascript.query.rule_seqid = cljs.core.atom.call(null,(0));
datascript.query.expand_rule = (function datascript$query$expand_rule(clause,context,used_args){
var vec__49890 = clause;
var seq__49891 = cljs.core.seq.call(null,vec__49890);
var first__49892 = cljs.core.first.call(null,seq__49891);
var seq__49891__$1 = cljs.core.next.call(null,seq__49891);
var rule = first__49892;
var call_args = seq__49891__$1;
var seqid = cljs.core.swap_BANG_.call(null,datascript.query.rule_seqid,cljs.core.inc);
var branches = cljs.core.get.call(null,new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),rule);
var iter__4324__auto__ = ((function (vec__49890,seq__49891,first__49892,seq__49891__$1,rule,call_args,seqid,branches){
return (function datascript$query$expand_rule_$_iter__49893(s__49894){
return (new cljs.core.LazySeq(null,((function (vec__49890,seq__49891,first__49892,seq__49891__$1,rule,call_args,seqid,branches){
return (function (){
var s__49894__$1 = s__49894;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__49894__$1);
if(temp__5720__auto__){
var s__49894__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49894__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__49894__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__49896 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__49895 = (0);
while(true){
if((i__49895 < size__4323__auto__)){
var branch = cljs.core._nth.call(null,c__4322__auto__,i__49895);
var vec__49900 = branch;
var seq__49901 = cljs.core.seq.call(null,vec__49900);
var first__49902 = cljs.core.first.call(null,seq__49901);
var seq__49901__$1 = cljs.core.next.call(null,seq__49901);
var vec__49903 = first__49902;
var seq__49904 = cljs.core.seq.call(null,vec__49903);
var first__49905 = cljs.core.first.call(null,seq__49904);
var seq__49904__$1 = cljs.core.next.call(null,seq__49904);
var _ = first__49905;
var rule_args = seq__49904__$1;
var clauses = seq__49901__$1;
var replacements = cljs.core.zipmap.call(null,rule_args,call_args);
cljs.core.chunk_append.call(null,b__49896,clojure.walk.postwalk.call(null,((function (i__49895,vec__49900,seq__49901,first__49902,seq__49901__$1,vec__49903,seq__49904,first__49905,seq__49904__$1,_,rule_args,clauses,replacements,branch,c__4322__auto__,size__4323__auto__,b__49896,s__49894__$2,temp__5720__auto__,vec__49890,seq__49891,first__49892,seq__49891__$1,rule,call_args,seqid,branches){
return (function (p1__49889_SHARP_){
if(cljs.core.truth_(datascript.query.free_var_QMARK_.call(null,p1__49889_SHARP_))){
var x__49789__auto__ = replacements.call(null,p1__49889_SHARP_);
if((x__49789__auto__ == null)){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,p1__49889_SHARP_)),"__auto__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)].join(''));
} else {
return x__49789__auto__;
}
} else {
return p1__49889_SHARP_;
}
});})(i__49895,vec__49900,seq__49901,first__49902,seq__49901__$1,vec__49903,seq__49904,first__49905,seq__49904__$1,_,rule_args,clauses,replacements,branch,c__4322__auto__,size__4323__auto__,b__49896,s__49894__$2,temp__5720__auto__,vec__49890,seq__49891,first__49892,seq__49891__$1,rule,call_args,seqid,branches))
,clauses));

var G__49934 = (i__49895 + (1));
i__49895 = G__49934;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49896),datascript$query$expand_rule_$_iter__49893.call(null,cljs.core.chunk_rest.call(null,s__49894__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49896),null);
}
} else {
var branch = cljs.core.first.call(null,s__49894__$2);
var vec__49907 = branch;
var seq__49908 = cljs.core.seq.call(null,vec__49907);
var first__49909 = cljs.core.first.call(null,seq__49908);
var seq__49908__$1 = cljs.core.next.call(null,seq__49908);
var vec__49910 = first__49909;
var seq__49911 = cljs.core.seq.call(null,vec__49910);
var first__49912 = cljs.core.first.call(null,seq__49911);
var seq__49911__$1 = cljs.core.next.call(null,seq__49911);
var _ = first__49912;
var rule_args = seq__49911__$1;
var clauses = seq__49908__$1;
var replacements = cljs.core.zipmap.call(null,rule_args,call_args);
return cljs.core.cons.call(null,clojure.walk.postwalk.call(null,((function (vec__49907,seq__49908,first__49909,seq__49908__$1,vec__49910,seq__49911,first__49912,seq__49911__$1,_,rule_args,clauses,replacements,branch,s__49894__$2,temp__5720__auto__,vec__49890,seq__49891,first__49892,seq__49891__$1,rule,call_args,seqid,branches){
return (function (p1__49889_SHARP_){
if(cljs.core.truth_(datascript.query.free_var_QMARK_.call(null,p1__49889_SHARP_))){
var x__49789__auto__ = replacements.call(null,p1__49889_SHARP_);
if((x__49789__auto__ == null)){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,p1__49889_SHARP_)),"__auto__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)].join(''));
} else {
return x__49789__auto__;
}
} else {
return p1__49889_SHARP_;
}
});})(vec__49907,seq__49908,first__49909,seq__49908__$1,vec__49910,seq__49911,first__49912,seq__49911__$1,_,rule_args,clauses,replacements,branch,s__49894__$2,temp__5720__auto__,vec__49890,seq__49891,first__49892,seq__49891__$1,rule,call_args,seqid,branches))
,clauses),datascript$query$expand_rule_$_iter__49893.call(null,cljs.core.rest.call(null,s__49894__$2)));
}
} else {
return null;
}
break;
}
});})(vec__49890,seq__49891,first__49892,seq__49891__$1,rule,call_args,seqid,branches))
,null,null));
});})(vec__49890,seq__49891,first__49892,seq__49891__$1,rule,call_args,seqid,branches))
;
return iter__4324__auto__.call(null,branches);
});
datascript.query.remove_pairs = (function datascript$query$remove_pairs(xs,ys){
var pairs = cljs.core.remove.call(null,(function (p__49946){
var vec__49947 = p__49946;
var x = cljs.core.nth.call(null,vec__49947,(0),null);
var y = cljs.core.nth.call(null,vec__49947,(1),null);
return cljs.core._EQ_.call(null,x,y);
}),cljs.core.map.call(null,cljs.core.vector,xs,ys));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,cljs.core.first,pairs),cljs.core.map.call(null,cljs.core.second,pairs)], null);
});
datascript.query.rule_gen_guards = (function datascript$query$rule_gen_guards(rule_clause,used_args){
var vec__49957 = rule_clause;
var seq__49958 = cljs.core.seq.call(null,vec__49957);
var first__49959 = cljs.core.first.call(null,seq__49958);
var seq__49958__$1 = cljs.core.next.call(null,seq__49958);
var rule = first__49959;
var call_args = seq__49958__$1;
var prev_call_args = cljs.core.get.call(null,used_args,rule);
var iter__4324__auto__ = ((function (vec__49957,seq__49958,first__49959,seq__49958__$1,rule,call_args,prev_call_args){
return (function datascript$query$rule_gen_guards_$_iter__49960(s__49961){
return (new cljs.core.LazySeq(null,((function (vec__49957,seq__49958,first__49959,seq__49958__$1,rule,call_args,prev_call_args){
return (function (){
var s__49961__$1 = s__49961;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__49961__$1);
if(temp__5720__auto__){
var s__49961__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49961__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__49961__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__49963 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__49962 = (0);
while(true){
if((i__49962 < size__4323__auto__)){
var prev_args = cljs.core._nth.call(null,c__4322__auto__,i__49962);
var vec__49965 = datascript.query.remove_pairs.call(null,call_args,prev_args);
var call_args__$1 = cljs.core.nth.call(null,vec__49965,(0),null);
var prev_args__$1 = cljs.core.nth.call(null,vec__49965,(1),null);
cljs.core.chunk_append.call(null,b__49963,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,prev_args__$1)], null));

var G__49987 = (i__49962 + (1));
i__49962 = G__49987;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49963),datascript$query$rule_gen_guards_$_iter__49960.call(null,cljs.core.chunk_rest.call(null,s__49961__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49963),null);
}
} else {
var prev_args = cljs.core.first.call(null,s__49961__$2);
var vec__49969 = datascript.query.remove_pairs.call(null,call_args,prev_args);
var call_args__$1 = cljs.core.nth.call(null,vec__49969,(0),null);
var prev_args__$1 = cljs.core.nth.call(null,vec__49969,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,prev_args__$1)], null),datascript$query$rule_gen_guards_$_iter__49960.call(null,cljs.core.rest.call(null,s__49961__$2)));
}
} else {
return null;
}
break;
}
});})(vec__49957,seq__49958,first__49959,seq__49958__$1,rule,call_args,prev_call_args))
,null,null));
});})(vec__49957,seq__49958,first__49959,seq__49958__$1,rule,call_args,prev_call_args))
;
return iter__4324__auto__.call(null,prev_call_args);
});
datascript.query.walk_collect = (function datascript$query$walk_collect(form,pred){
var res = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
clojure.walk.postwalk.call(null,((function (res){
return (function (p1__50005_SHARP_){
if(cljs.core.truth_(pred.call(null,p1__50005_SHARP_))){
cljs.core.swap_BANG_.call(null,res,cljs.core.conj,p1__50005_SHARP_);
} else {
}

return p1__50005_SHARP_;
});})(res))
,form);

return cljs.core.deref.call(null,res);
});
datascript.query.collect_vars = (function datascript$query$collect_vars(clause){
return cljs.core.set.call(null,datascript.query.walk_collect.call(null,clause,datascript.query.free_var_QMARK_));
});
datascript.query.split_guards = (function datascript$query$split_guards(clauses,guards){
var bound_vars = datascript.query.collect_vars.call(null,clauses);
var pred = ((function (bound_vars){
return (function (p__50015){
var vec__50016 = p__50015;
var vec__50019 = cljs.core.nth.call(null,vec__50016,(0),null);
var seq__50020 = cljs.core.seq.call(null,vec__50019);
var first__50021 = cljs.core.first.call(null,seq__50020);
var seq__50020__$1 = cljs.core.next.call(null,seq__50020);
var _ = first__50021;
var vars = seq__50020__$1;
return cljs.core.every_QMARK_.call(null,bound_vars,vars);
});})(bound_vars))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.call(null,pred,guards),cljs.core.remove.call(null,pred,guards)], null);
});
datascript.query.solve_rule = (function datascript$query$solve_rule(context,clause){
var final_attrs = cljs.core.filter.call(null,datascript.query.free_var_QMARK_,clause);
var final_attrs_map = cljs.core.zipmap.call(null,final_attrs,cljs.core.range.call(null));
var solve = ((function (final_attrs,final_attrs_map){
return (function (prefix_context,clauses){
return cljs.core.reduce.call(null,datascript.query._resolve_clause,prefix_context,clauses);
});})(final_attrs,final_attrs_map))
;
var empty_rels_QMARK_ = ((function (final_attrs,final_attrs_map,solve){
return (function (context__$1){
return cljs.core.some.call(null,((function (final_attrs,final_attrs_map,solve){
return (function (p1__50029_SHARP_){
return cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(p1__50029_SHARP_));
});})(final_attrs,final_attrs_map,solve))
,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context__$1));
});})(final_attrs,final_attrs_map,solve))
;
var stack = (new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"used-args","used-args",23596256),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),cljs.core.PersistentArrayMap.EMPTY], null),null,(1),null));
var rel = (new datascript.query.Relation(final_attrs_map,cljs.core.PersistentVector.EMPTY,null,null,null));
while(true){
var temp__5722__auto__ = cljs.core.first.call(null,stack);
if((temp__5722__auto__ == null)){
return rel;
} else {
var frame = temp__5722__auto__;
var vec__50036 = cljs.core.split_with.call(null,((function (stack,rel,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__50031_SHARP_){
return cljs.core.not.call(null,datascript.query.rule_QMARK_.call(null,context,p1__50031_SHARP_));
});})(stack,rel,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(frame));
var clauses = cljs.core.nth.call(null,vec__50036,(0),null);
var vec__50039 = cljs.core.nth.call(null,vec__50036,(1),null);
var seq__50040 = cljs.core.seq.call(null,vec__50039);
var first__50041 = cljs.core.first.call(null,seq__50040);
var seq__50040__$1 = cljs.core.next.call(null,seq__50040);
var rule_clause = first__50041;
var next_clauses = seq__50040__$1;
if((rule_clause == null)){
var context__$1 = solve.call(null,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),clauses);
var tuples = datascript.query._collect.call(null,context__$1,final_attrs);
var new_rel = (new datascript.query.Relation(final_attrs_map,tuples,null,null,null));
var G__50063 = cljs.core.next.call(null,stack);
var G__50064 = datascript.query.sum_rel.call(null,rel,new_rel);
stack = G__50063;
rel = G__50064;
continue;
} else {
var vec__50044 = rule_clause;
var seq__50045 = cljs.core.seq.call(null,vec__50044);
var first__50046 = cljs.core.first.call(null,seq__50045);
var seq__50045__$1 = cljs.core.next.call(null,seq__50045);
var rule = first__50046;
var call_args = seq__50045__$1;
var guards = datascript.query.rule_gen_guards.call(null,rule_clause,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame));
var vec__50047 = datascript.query.split_guards.call(null,cljs.core.concat.call(null,new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028).cljs$core$IFn$_invoke$arity$1(frame),clauses),cljs.core.concat.call(null,guards,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308).cljs$core$IFn$_invoke$arity$1(frame)));
var active_gs = cljs.core.nth.call(null,vec__50047,(0),null);
var pending_gs = cljs.core.nth.call(null,vec__50047,(1),null);
if(cljs.core.truth_(cljs.core.some.call(null,((function (stack,rel,vec__50044,seq__50045,first__50046,seq__50045__$1,rule,call_args,guards,vec__50047,active_gs,pending_gs,vec__50036,clauses,vec__50039,seq__50040,first__50041,seq__50040__$1,rule_clause,next_clauses,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__50033_SHARP_){
return cljs.core._EQ_.call(null,p1__50033_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null))], null));
});})(stack,rel,vec__50044,seq__50045,first__50046,seq__50045__$1,rule,call_args,guards,vec__50047,active_gs,pending_gs,vec__50036,clauses,vec__50039,seq__50040,first__50041,seq__50040__$1,rule_clause,next_clauses,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,active_gs))){
var G__50068 = cljs.core.next.call(null,stack);
var G__50069 = rel;
stack = G__50068;
rel = G__50069;
continue;
} else {
var prefix_clauses = cljs.core.concat.call(null,clauses,active_gs);
var prefix_context = solve.call(null,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),prefix_clauses);
if(cljs.core.truth_(empty_rels_QMARK_.call(null,prefix_context))){
var G__50071 = cljs.core.next.call(null,stack);
var G__50072 = rel;
stack = G__50071;
rel = G__50072;
continue;
} else {
var used_args = cljs.core.assoc.call(null,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.conj.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.PersistentVector.EMPTY),call_args));
var branches = datascript.query.expand_rule.call(null,rule_clause,context,used_args);
var G__50074 = cljs.core.concat.call(null,(function (){var iter__4324__auto__ = ((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__50044,seq__50045,first__50046,seq__50045__$1,rule,call_args,guards,vec__50047,active_gs,pending_gs,vec__50036,clauses,vec__50039,seq__50040,first__50041,seq__50040__$1,rule_clause,next_clauses,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function datascript$query$solve_rule_$_iter__50050(s__50051){
return (new cljs.core.LazySeq(null,((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__50044,seq__50045,first__50046,seq__50045__$1,rule,call_args,guards,vec__50047,active_gs,pending_gs,vec__50036,clauses,vec__50039,seq__50040,first__50041,seq__50040__$1,rule_clause,next_clauses,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (){
var s__50051__$1 = s__50051;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__50051__$1);
if(temp__5720__auto__){
var s__50051__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50051__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__50051__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__50053 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__50052 = (0);
while(true){
if((i__50052 < size__4323__auto__)){
var branch = cljs.core._nth.call(null,c__4322__auto__,i__50052);
cljs.core.chunk_append.call(null,b__50053,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.call(null,branch,next_clauses),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null));

var G__50083 = (i__50052 + (1));
i__50052 = G__50083;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50053),datascript$query$solve_rule_$_iter__50050.call(null,cljs.core.chunk_rest.call(null,s__50051__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50053),null);
}
} else {
var branch = cljs.core.first.call(null,s__50051__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.call(null,branch,next_clauses),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null),datascript$query$solve_rule_$_iter__50050.call(null,cljs.core.rest.call(null,s__50051__$2)));
}
} else {
return null;
}
break;
}
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__50044,seq__50045,first__50046,seq__50045__$1,rule,call_args,guards,vec__50047,active_gs,pending_gs,vec__50036,clauses,vec__50039,seq__50040,first__50041,seq__50040__$1,rule_clause,next_clauses,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,null,null));
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__50044,seq__50045,first__50046,seq__50045__$1,rule,call_args,guards,vec__50047,active_gs,pending_gs,vec__50036,clauses,vec__50039,seq__50040,first__50041,seq__50040__$1,rule_clause,next_clauses,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
;
return iter__4324__auto__.call(null,branches);
})(),cljs.core.next.call(null,stack));
var G__50075 = rel;
stack = G__50074;
rel = G__50075;
continue;
}
}
}
}
break;
}
});
datascript.query.resolve_pattern_lookup_refs = (function datascript$query$resolve_pattern_lookup_refs(source,pattern){
if(((!((source == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$IDB$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.db.IDB,source))){
var vec__50095 = pattern;
var e = cljs.core.nth.call(null,vec__50095,(0),null);
var a = cljs.core.nth.call(null,vec__50095,(1),null);
var v = cljs.core.nth.call(null,vec__50095,(2),null);
var tx = cljs.core.nth.call(null,vec__50095,(3),null);
return cljs.core.subvec.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__3949__auto__ = datascript.query.lookup_ref_QMARK_.call(null,e);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return datascript.query.attr_QMARK_.call(null,e);
}
})())?datascript.db.entid_strict.call(null,source,e):e),a,(cljs.core.truth_((function (){var and__3938__auto__ = v;
if(cljs.core.truth_(and__3938__auto__)){
var and__3938__auto____$1 = datascript.query.attr_QMARK_.call(null,a);
if(cljs.core.truth_(and__3938__auto____$1)){
var and__3938__auto____$2 = datascript.db.ref_QMARK_.call(null,source,a);
if(and__3938__auto____$2){
var or__3949__auto__ = datascript.query.lookup_ref_QMARK_.call(null,v);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return datascript.query.attr_QMARK_.call(null,v);
}
} else {
return and__3938__auto____$2;
}
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})())?datascript.db.entid_strict.call(null,source,v):v),(cljs.core.truth_(datascript.query.lookup_ref_QMARK_.call(null,tx))?datascript.db.entid_strict.call(null,source,tx):tx)], null),(0),cljs.core.count.call(null,pattern));
} else {
return pattern;
}
});
datascript.query.dynamic_lookup_attrs = (function datascript$query$dynamic_lookup_attrs(source,pattern){
var vec__50109 = pattern;
var e = cljs.core.nth.call(null,vec__50109,(0),null);
var a = cljs.core.nth.call(null,vec__50109,(1),null);
var v = cljs.core.nth.call(null,vec__50109,(2),null);
var tx = cljs.core.nth.call(null,vec__50109,(3),null);
var G__50113 = cljs.core.PersistentHashSet.EMPTY;
var G__50113__$1 = (cljs.core.truth_(datascript.query.free_var_QMARK_.call(null,e))?cljs.core.conj.call(null,G__50113,e):G__50113);
var G__50113__$2 = (cljs.core.truth_(datascript.query.free_var_QMARK_.call(null,tx))?cljs.core.conj.call(null,G__50113__$1,tx):G__50113__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = datascript.query.free_var_QMARK_.call(null,v);
if(cljs.core.truth_(and__3938__auto__)){
return ((cljs.core.not.call(null,datascript.query.free_var_QMARK_.call(null,a))) && (datascript.db.ref_QMARK_.call(null,source,a)));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.conj.call(null,G__50113__$2,v);
} else {
return G__50113__$2;
}
});
datascript.query.limit_rel = (function datascript$query$limit_rel(rel,vars){
var temp__5724__auto__ = cljs.core.not_empty.call(null,cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),vars));
if((temp__5724__auto__ == null)){
return null;
} else {
var attrs_SINGLEQUOTE_ = temp__5724__auto__;
return cljs.core.assoc.call(null,rel,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs_SINGLEQUOTE_);
}
});
datascript.query.limit_context = (function datascript$query$limit_context(context,vars){
return cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.keep.call(null,(function (p1__50129_SHARP_){
return datascript.query.limit_rel.call(null,p1__50129_SHARP_,vars);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)));
});
datascript.query.check_bound = (function datascript$query$check_bound(context,vars,form){
var bound = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.call(null,(function (p1__50135_SHARP_){
return cljs.core.keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__50135_SHARP_));
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)));
if(cljs.core.truth_(clojure.set.subset_QMARK_.call(null,vars,bound))){
return null;
} else {
var missing = clojure.set.difference.call(null,cljs.core.set.call(null,vars),bound);
throw cljs.core.ex_info.call(null,["Insufficient bindings: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,missing))," not bound in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,form))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"vars","vars",-2046957217),missing], null));
}
});
datascript.query._resolve_clause = (function datascript$query$_resolve_clause(var_args){
var G__50164 = arguments.length;
switch (G__50164) {
case 2:
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$2 = (function (context,clause){
return datascript.query._resolve_clause.call(null,context,clause,clause);
});

datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3 = (function (context,clause,orig_clause){
while(true){
var pred__50168 = datascript.query.looks_like_QMARK_;
var expr__50169 = clause;
if(cljs.core.truth_(pred__50168.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null)], null),expr__50169))){
return datascript.query.filter_by_pred.call(null,context,clause);
} else {
if(cljs.core.truth_(pred__50168.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),expr__50169))){
return datascript.query.bind_by_fn.call(null,context,clause);
} else {
if(cljs.core.truth_(pred__50168.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query.source_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__50169))){
var vec__50173 = clause;
var seq__50174 = cljs.core.seq.call(null,vec__50173);
var first__50175 = cljs.core.first.call(null,seq__50174);
var seq__50174__$1 = cljs.core.next.call(null,seq__50174);
var source_sym = first__50175;
var rest = seq__50174__$1;
var _STAR_implicit_source_STAR_50176 = datascript.query._STAR_implicit_source_STAR_;
datascript.query._STAR_implicit_source_STAR_ = cljs.core.get.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),source_sym);

try{return datascript.query._resolve_clause.call(null,context,rest,clause);
}finally {datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR_50176;
}} else {
if(cljs.core.truth_(pred__50168.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__50169))){
var vec__50177 = clause;
var seq__50178 = cljs.core.seq.call(null,vec__50177);
var first__50179 = cljs.core.first.call(null,seq__50178);
var seq__50178__$1 = cljs.core.next.call(null,seq__50178);
var _ = first__50179;
var branches = seq__50178__$1;
var contexts = cljs.core.map.call(null,((function (context,clause,orig_clause,vec__50177,seq__50178,first__50179,seq__50178__$1,_,branches,pred__50168,expr__50169){
return (function (p1__50147_SHARP_){
return datascript.query.resolve_clause.call(null,context,p1__50147_SHARP_);
});})(context,clause,orig_clause,vec__50177,seq__50178,first__50179,seq__50178__$1,_,branches,pred__50168,expr__50169))
,branches);
var rels = cljs.core.map.call(null,((function (context,clause,orig_clause,vec__50177,seq__50178,first__50179,seq__50178__$1,_,branches,contexts,pred__50168,expr__50169){
return (function (p1__50148_SHARP_){
return cljs.core.reduce.call(null,datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(p1__50148_SHARP_));
});})(context,clause,orig_clause,vec__50177,seq__50178,first__50179,seq__50178__$1,_,branches,contexts,pred__50168,expr__50169))
,contexts);
return cljs.core.assoc.call(null,cljs.core.first.call(null,contexts),new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.call(null,datascript.query.sum_rel,rels)], null));
} else {
if(cljs.core.truth_(pred__50168.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__50169))){
var vec__50190 = clause;
var seq__50191 = cljs.core.seq.call(null,vec__50190);
var first__50192 = cljs.core.first.call(null,seq__50191);
var seq__50191__$1 = cljs.core.next.call(null,seq__50191);
var _ = first__50192;
var first__50192__$1 = cljs.core.first.call(null,seq__50191__$1);
var seq__50191__$2 = cljs.core.next.call(null,seq__50191__$1);
var vec__50194 = first__50192__$1;
var seq__50195 = cljs.core.seq.call(null,vec__50194);
var first__50196 = cljs.core.first.call(null,seq__50195);
var seq__50195__$1 = cljs.core.next.call(null,seq__50195);
var req_vars = first__50196;
var vars = seq__50195__$1;
var branches = seq__50191__$2;
datascript.query.check_bound.call(null,context,req_vars,orig_clause);

var G__50297 = context;
var G__50298 = cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"or-join","or-join",591375469,null),cljs.core.concat.call(null,req_vars,vars),branches);
var G__50299 = clause;
context = G__50297;
clause = G__50298;
orig_clause = G__50299;
continue;
} else {
if(cljs.core.truth_(pred__50168.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__50169))){
var vec__50199 = clause;
var seq__50200 = cljs.core.seq.call(null,vec__50199);
var first__50201 = cljs.core.first.call(null,seq__50200);
var seq__50200__$1 = cljs.core.next.call(null,seq__50200);
var _ = first__50201;
var first__50201__$1 = cljs.core.first.call(null,seq__50200__$1);
var seq__50200__$2 = cljs.core.next.call(null,seq__50200__$1);
var vars = first__50201__$1;
var branches = seq__50200__$2;
var vars__$1 = cljs.core.set.call(null,vars);
var join_context = datascript.query.limit_context.call(null,context,vars__$1);
var contexts = cljs.core.map.call(null,((function (context,clause,orig_clause,vec__50199,seq__50200,first__50201,seq__50200__$1,_,first__50201__$1,seq__50200__$2,vars,branches,vars__$1,join_context,pred__50168,expr__50169){
return (function (p1__50152_SHARP_){
return datascript.query.limit_context.call(null,datascript.query.resolve_clause.call(null,join_context,p1__50152_SHARP_),vars__$1);
});})(context,clause,orig_clause,vec__50199,seq__50200,first__50201,seq__50200__$1,_,first__50201__$1,seq__50200__$2,vars,branches,vars__$1,join_context,pred__50168,expr__50169))
,branches);
var rels = cljs.core.map.call(null,((function (context,clause,orig_clause,vec__50199,seq__50200,first__50201,seq__50200__$1,_,first__50201__$1,seq__50200__$2,vars,branches,vars__$1,join_context,contexts,pred__50168,expr__50169){
return (function (p1__50153_SHARP_){
return cljs.core.reduce.call(null,datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(p1__50153_SHARP_));
});})(context,clause,orig_clause,vec__50199,seq__50200,first__50201,seq__50200__$1,_,first__50201__$1,seq__50200__$2,vars,branches,vars__$1,join_context,contexts,pred__50168,expr__50169))
,contexts);
var sum_rel = cljs.core.reduce.call(null,datascript.query.sum_rel,rels);
return cljs.core.update.call(null,context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,sum_rel);
} else {
if(cljs.core.truth_(pred__50168.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__50169))){
var vec__50205 = clause;
var seq__50206 = cljs.core.seq.call(null,vec__50205);
var first__50207 = cljs.core.first.call(null,seq__50206);
var seq__50206__$1 = cljs.core.next.call(null,seq__50206);
var _ = first__50207;
var clauses = seq__50206__$1;
return cljs.core.reduce.call(null,datascript.query.resolve_clause,context,clauses);
} else {
if(cljs.core.truth_(pred__50168.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__50169))){
var vec__50209 = clause;
var seq__50210 = cljs.core.seq.call(null,vec__50209);
var first__50211 = cljs.core.first.call(null,seq__50210);
var seq__50210__$1 = cljs.core.next.call(null,seq__50210);
var _ = first__50211;
var clauses = seq__50210__$1;
var bound_vars = cljs.core.set.call(null,cljs.core.mapcat.call(null,((function (context,clause,orig_clause,vec__50209,seq__50210,first__50211,seq__50210__$1,_,clauses,pred__50168,expr__50169){
return (function (p1__50156_SHARP_){
return cljs.core.keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__50156_SHARP_));
});})(context,clause,orig_clause,vec__50209,seq__50210,first__50211,seq__50210__$1,_,clauses,pred__50168,expr__50169))
,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)));
var negation_vars = datascript.query.collect_vars.call(null,clauses);
var ___$1 = ((cljs.core.empty_QMARK_.call(null,clojure.set.intersection.call(null,bound_vars,negation_vars)))?(function(){throw cljs.core.ex_info.call(null,["Insufficient bindings: none of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,negation_vars))," is bound in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,orig_clause))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),orig_clause], null))})():null);
var context_SINGLEQUOTE_ = cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.call(null,datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context))], null));
var negation_context = cljs.core.reduce.call(null,datascript.query.resolve_clause,context_SINGLEQUOTE_,clauses);
var negation = datascript.query.subtract_rel.call(null,datascript.query.single.call(null,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context_SINGLEQUOTE_)),cljs.core.reduce.call(null,datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(negation_context)));
return cljs.core.assoc.call(null,context_SINGLEQUOTE_,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [negation], null));
} else {
if(cljs.core.truth_(pred__50168.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__50169))){
var vec__50218 = clause;
var seq__50219 = cljs.core.seq.call(null,vec__50218);
var first__50220 = cljs.core.first.call(null,seq__50219);
var seq__50219__$1 = cljs.core.next.call(null,seq__50219);
var _ = first__50220;
var first__50220__$1 = cljs.core.first.call(null,seq__50219__$1);
var seq__50219__$2 = cljs.core.next.call(null,seq__50219__$1);
var vars = first__50220__$1;
var clauses = seq__50219__$2;
var ___$1 = datascript.query.check_bound.call(null,context,vars,orig_clause);
var context_SINGLEQUOTE_ = cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.call(null,datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context))], null));
var join_context = datascript.query.limit_context.call(null,context_SINGLEQUOTE_,vars);
var negation_context = datascript.query.limit_context.call(null,cljs.core.reduce.call(null,datascript.query.resolve_clause,join_context,clauses),vars);
var negation = datascript.query.subtract_rel.call(null,datascript.query.single.call(null,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context_SINGLEQUOTE_)),cljs.core.reduce.call(null,datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(negation_context)));
return cljs.core.assoc.call(null,context_SINGLEQUOTE_,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [negation], null));
} else {
if(cljs.core.truth_(pred__50168.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__50169))){
var source = datascript.query._STAR_implicit_source_STAR_;
var pattern = datascript.query.resolve_pattern_lookup_refs.call(null,source,clause);
var relation = datascript.query.lookup_pattern.call(null,source,pattern);
var _STAR_lookup_attrs_STAR_50232 = datascript.query._STAR_lookup_attrs_STAR_;
datascript.query._STAR_lookup_attrs_STAR_ = ((((!((source == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$IDB$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.db.IDB,source)))?datascript.query.dynamic_lookup_attrs.call(null,source,pattern):datascript.query._STAR_lookup_attrs_STAR_);

try{return cljs.core.update.call(null,context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,relation);
}finally {datascript.query._STAR_lookup_attrs_STAR_ = _STAR_lookup_attrs_STAR_50232;
}} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__50169)].join('')));
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
break;
}
});

datascript.query._resolve_clause.cljs$lang$maxFixedArity = 3;

datascript.query.resolve_clause = (function datascript$query$resolve_clause(context,clause){
if(cljs.core.truth_(datascript.query.rule_QMARK_.call(null,context,clause))){
if(cljs.core.truth_(datascript.query.source_QMARK_.call(null,cljs.core.first.call(null,clause)))){
var _STAR_implicit_source_STAR_50334 = datascript.query._STAR_implicit_source_STAR_;
datascript.query._STAR_implicit_source_STAR_ = cljs.core.get.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),cljs.core.first.call(null,clause));

try{return datascript.query.resolve_clause.call(null,context,cljs.core.next.call(null,clause));
}finally {datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR_50334;
}} else {
return cljs.core.update.call(null,context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,datascript.query.solve_rule.call(null,context,clause));
}
} else {
return datascript.query._resolve_clause.call(null,context,clause);
}
});
datascript.query._q = (function datascript$query$_q(context,clauses){
var _STAR_implicit_source_STAR_50343 = datascript.query._STAR_implicit_source_STAR_;
datascript.query._STAR_implicit_source_STAR_ = cljs.core.get.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Symbol(null,"$","$",-1580747756,null));

try{return cljs.core.reduce.call(null,datascript.query.resolve_clause,context,clauses);
}finally {datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR_50343;
}});
datascript.query._collect = (function datascript$query$_collect(var_args){
var G__50358 = arguments.length;
switch (G__50358) {
case 2:
return datascript.query._collect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.query._collect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.query._collect.cljs$core$IFn$_invoke$arity$2 = (function (context,symbols){
var rels = new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context);
return datascript.query._collect.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [me.tonsky.persistent_sorted_set.arrays.make_array.call(null,cljs.core.count.call(null,symbols))], null),rels,symbols);
});

datascript.query._collect.cljs$core$IFn$_invoke$arity$3 = (function (acc,rels,symbols){
while(true){
var temp__5722__auto__ = cljs.core.first.call(null,rels);
if((temp__5722__auto__ == null)){
return acc;
} else {
var rel = temp__5722__auto__;
var keep_attrs = cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),symbols);
if(cljs.core.empty_QMARK_.call(null,keep_attrs)){
var G__50395 = acc;
var G__50396 = cljs.core.next.call(null,rels);
var G__50397 = symbols;
acc = G__50395;
rels = G__50396;
symbols = G__50397;
continue;
} else {
var copy_map = cljs.core.to_array.call(null,cljs.core.map.call(null,((function (acc,rels,symbols,keep_attrs,rel,temp__5722__auto__){
return (function (p1__50354_SHARP_){
return cljs.core.get.call(null,keep_attrs,p1__50354_SHARP_);
});})(acc,rels,symbols,keep_attrs,rel,temp__5722__auto__))
,symbols));
var len = cljs.core.count.call(null,symbols);
var G__50399 = (function (){var iter__4324__auto__ = ((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5722__auto__){
return (function datascript$query$iter__50362(s__50363){
return (new cljs.core.LazySeq(null,((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5722__auto__){
return (function (){
var s__50363__$1 = s__50363;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__50363__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var t1 = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4320__auto__ = ((function (s__50363__$1,acc,rels,symbols,t1,xs__6277__auto__,temp__5720__auto__,copy_map,len,keep_attrs,rel,temp__5722__auto__){
return (function datascript$query$iter__50362_$_iter__50364(s__50365){
return (new cljs.core.LazySeq(null,((function (s__50363__$1,acc,rels,symbols,t1,xs__6277__auto__,temp__5720__auto__,copy_map,len,keep_attrs,rel,temp__5722__auto__){
return (function (){
var s__50365__$1 = s__50365;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__50365__$1);
if(temp__5720__auto____$1){
var s__50365__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50365__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__50365__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__50367 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__50366 = (0);
while(true){
if((i__50366 < size__4323__auto__)){
var t2 = cljs.core._nth.call(null,c__4322__auto__,i__50366);
cljs.core.chunk_append.call(null,b__50367,(function (){var res = cljs.core.aclone.call(null,t1);
var n__4408__auto___50406 = len;
var i_50407 = (0);
while(true){
if((i_50407 < n__4408__auto___50406)){
var temp__5724__auto___50408 = (copy_map[i_50407]);
if((temp__5724__auto___50408 == null)){
} else {
var idx_50409 = temp__5724__auto___50408;
(res[i_50407] = (t2[idx_50409]));
}

var G__50411 = (i_50407 + (1));
i_50407 = G__50411;
continue;
} else {
}
break;
}

return res;
})());

var G__50412 = (i__50366 + (1));
i__50366 = G__50412;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50367),datascript$query$iter__50362_$_iter__50364.call(null,cljs.core.chunk_rest.call(null,s__50365__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50367),null);
}
} else {
var t2 = cljs.core.first.call(null,s__50365__$2);
return cljs.core.cons.call(null,(function (){var res = cljs.core.aclone.call(null,t1);
var n__4408__auto___50413 = len;
var i_50414 = (0);
while(true){
if((i_50414 < n__4408__auto___50413)){
var temp__5724__auto___50415 = (copy_map[i_50414]);
if((temp__5724__auto___50415 == null)){
} else {
var idx_50416 = temp__5724__auto___50415;
(res[i_50414] = (t2[idx_50416]));
}

var G__50420 = (i_50414 + (1));
i_50414 = G__50420;
continue;
} else {
}
break;
}

return res;
})(),datascript$query$iter__50362_$_iter__50364.call(null,cljs.core.rest.call(null,s__50365__$2)));
}
} else {
return null;
}
break;
}
});})(s__50363__$1,acc,rels,symbols,t1,xs__6277__auto__,temp__5720__auto__,copy_map,len,keep_attrs,rel,temp__5722__auto__))
,null,null));
});})(s__50363__$1,acc,rels,symbols,t1,xs__6277__auto__,temp__5720__auto__,copy_map,len,keep_attrs,rel,temp__5722__auto__))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel)));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,datascript$query$iter__50362.call(null,cljs.core.rest.call(null,s__50363__$1)));
} else {
var G__50421 = cljs.core.rest.call(null,s__50363__$1);
s__50363__$1 = G__50421;
continue;
}
} else {
return null;
}
break;
}
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5722__auto__))
,null,null));
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5722__auto__))
;
return iter__4324__auto__.call(null,acc);
})();
var G__50400 = cljs.core.next.call(null,rels);
var G__50401 = symbols;
acc = G__50399;
rels = G__50400;
symbols = G__50401;
continue;
}
}
break;
}
});

datascript.query._collect.cljs$lang$maxFixedArity = 3;

datascript.query.collect = (function datascript$query$collect(context,symbols){
return cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.vec,datascript.query._collect.call(null,context,symbols)));
});

/**
 * @interface
 */
datascript.query.IContextResolve = function(){};

datascript.query._context_resolve = (function datascript$query$_context_resolve(var$,context){
if(((!((var$ == null))) && (!((var$.datascript$query$IContextResolve$_context_resolve$arity$2 == null))))){
return var$.datascript$query$IContextResolve$_context_resolve$arity$2(var$,context);
} else {
var x__4243__auto__ = (((var$ == null))?null:var$);
var m__4244__auto__ = (datascript.query._context_resolve[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,var$,context);
} else {
var m__4244__auto____$1 = (datascript.query._context_resolve["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,var$,context);
} else {
throw cljs.core.missing_protocol.call(null,"IContextResolve.-context-resolve",var$);
}
}
}
});

datascript.parser.Variable.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Variable.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,context){
var var$__$1 = this;
return datascript.query.context_resolve_val.call(null,context,var$__$1.symbol);
});

datascript.parser.SrcVar.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.SrcVar.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,context){
var var$__$1 = this;
return cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424),var$__$1.symbol], null));
});

datascript.parser.PlainSymbol.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.PlainSymbol.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,_){
var var$__$1 = this;
var or__3949__auto__ = cljs.core.get.call(null,datascript.query.built_in_aggregates,var$__$1.symbol);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return datascript.query.resolve_sym.call(null,var$__$1.symbol);
}
});

datascript.parser.Constant.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Constant.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,_){
var var$__$1 = this;
return var$__$1.value;
});
datascript.query._aggregate = (function datascript$query$_aggregate(find_elements,context,tuples){
return cljs.core.mapv.call(null,(function (element,fixed_value,i){
if(cljs.core.truth_(datascript.parser.aggregate_QMARK_.call(null,element))){
var f = datascript.query._context_resolve.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(element),context);
var args = cljs.core.map.call(null,((function (f){
return (function (p1__50434_SHARP_){
return datascript.query._context_resolve.call(null,p1__50434_SHARP_,context);
});})(f))
,cljs.core.butlast.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(element)));
var vals = cljs.core.map.call(null,((function (f,args){
return (function (p1__50435_SHARP_){
return cljs.core.nth.call(null,p1__50435_SHARP_,i);
});})(f,args))
,tuples);
return cljs.core.apply.call(null,f,cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null)));
} else {
return fixed_value;
}
}),find_elements,cljs.core.first.call(null,tuples),cljs.core.range.call(null));
});
datascript.query.idxs_of = (function datascript$query$idxs_of(pred,coll){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__50445_SHARP_,p2__50446_SHARP_){
if(cljs.core.truth_(pred.call(null,p1__50445_SHARP_))){
return p2__50446_SHARP_;
} else {
return null;
}
}),coll,cljs.core.range.call(null)));
});
datascript.query.aggregate = (function datascript$query$aggregate(find_elements,context,resultset){
var group_idxs = datascript.query.idxs_of.call(null,cljs.core.complement.call(null,datascript.parser.aggregate_QMARK_),find_elements);
var group_fn = ((function (group_idxs){
return (function (tuple){
return cljs.core.map.call(null,((function (group_idxs){
return (function (p1__50457_SHARP_){
return cljs.core.nth.call(null,tuple,p1__50457_SHARP_);
});})(group_idxs))
,group_idxs);
});})(group_idxs))
;
var grouped = cljs.core.group_by.call(null,group_fn,resultset);
var iter__4324__auto__ = ((function (group_idxs,group_fn,grouped){
return (function datascript$query$aggregate_$_iter__50463(s__50464){
return (new cljs.core.LazySeq(null,((function (group_idxs,group_fn,grouped){
return (function (){
var s__50464__$1 = s__50464;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__50464__$1);
if(temp__5720__auto__){
var s__50464__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50464__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__50464__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__50466 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__50465 = (0);
while(true){
if((i__50465 < size__4323__auto__)){
var vec__50467 = cljs.core._nth.call(null,c__4322__auto__,i__50465);
var _ = cljs.core.nth.call(null,vec__50467,(0),null);
var tuples = cljs.core.nth.call(null,vec__50467,(1),null);
cljs.core.chunk_append.call(null,b__50466,datascript.query._aggregate.call(null,find_elements,context,tuples));

var G__50477 = (i__50465 + (1));
i__50465 = G__50477;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50466),datascript$query$aggregate_$_iter__50463.call(null,cljs.core.chunk_rest.call(null,s__50464__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50466),null);
}
} else {
var vec__50470 = cljs.core.first.call(null,s__50464__$2);
var _ = cljs.core.nth.call(null,vec__50470,(0),null);
var tuples = cljs.core.nth.call(null,vec__50470,(1),null);
return cljs.core.cons.call(null,datascript.query._aggregate.call(null,find_elements,context,tuples),datascript$query$aggregate_$_iter__50463.call(null,cljs.core.rest.call(null,s__50464__$2)));
}
} else {
return null;
}
break;
}
});})(group_idxs,group_fn,grouped))
,null,null));
});})(group_idxs,group_fn,grouped))
;
return iter__4324__auto__.call(null,grouped);
});

/**
 * @interface
 */
datascript.query.IPostProcess = function(){};

datascript.query._post_process = (function datascript$query$_post_process(find,tuples){
if(((!((find == null))) && (!((find.datascript$query$IPostProcess$_post_process$arity$2 == null))))){
return find.datascript$query$IPostProcess$_post_process$arity$2(find,tuples);
} else {
var x__4243__auto__ = (((find == null))?null:find);
var m__4244__auto__ = (datascript.query._post_process[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,find,tuples);
} else {
var m__4244__auto____$1 = (datascript.query._post_process["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,find,tuples);
} else {
throw cljs.core.missing_protocol.call(null,"IPostProcess.-post-process",find);
}
}
}
});

datascript.parser.FindRel.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindRel.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return tuples;
});

datascript.parser.FindColl.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindColl.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.first),tuples);
});

datascript.parser.FindScalar.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindScalar.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return cljs.core.ffirst.call(null,tuples);
});

datascript.parser.FindTuple.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindTuple.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return cljs.core.first.call(null,tuples);
});
datascript.query.pull = (function datascript$query$pull(find_elements,context,resultset){
var resolved = (function (){var iter__4324__auto__ = (function datascript$query$pull_$_iter__50493(s__50494){
return (new cljs.core.LazySeq(null,(function (){
var s__50494__$1 = s__50494;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__50494__$1);
if(temp__5720__auto__){
var s__50494__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50494__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__50494__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__50496 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__50495 = (0);
while(true){
if((i__50495 < size__4323__auto__)){
var find = cljs.core._nth.call(null,c__4322__auto__,i__50495);
cljs.core.chunk_append.call(null,b__50496,(cljs.core.truth_(datascript.parser.pull_QMARK_.call(null,find))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query._context_resolve.call(null,new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(find),context),datascript.pull_parser.parse_pull.call(null,datascript.query._context_resolve.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(find),context))], null):null));

var G__50523 = (i__50495 + (1));
i__50495 = G__50523;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50496),datascript$query$pull_$_iter__50493.call(null,cljs.core.chunk_rest.call(null,s__50494__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50496),null);
}
} else {
var find = cljs.core.first.call(null,s__50494__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(datascript.parser.pull_QMARK_.call(null,find))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query._context_resolve.call(null,new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(find),context),datascript.pull_parser.parse_pull.call(null,datascript.query._context_resolve.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(find),context))], null):null),datascript$query$pull_$_iter__50493.call(null,cljs.core.rest.call(null,s__50494__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,find_elements);
})();
var iter__4324__auto__ = ((function (resolved){
return (function datascript$query$pull_$_iter__50500(s__50501){
return (new cljs.core.LazySeq(null,((function (resolved){
return (function (){
var s__50501__$1 = s__50501;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__50501__$1);
if(temp__5720__auto__){
var s__50501__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50501__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__50501__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__50503 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__50502 = (0);
while(true){
if((i__50502 < size__4323__auto__)){
var tuple = cljs.core._nth.call(null,c__4322__auto__,i__50502);
cljs.core.chunk_append.call(null,b__50503,cljs.core.mapv.call(null,((function (i__50502,tuple,c__4322__auto__,size__4323__auto__,b__50503,s__50501__$2,temp__5720__auto__,resolved){
return (function (env,el){
if(cljs.core.truth_(env)){
var vec__50506 = env;
var src = cljs.core.nth.call(null,vec__50506,(0),null);
var spec = cljs.core.nth.call(null,vec__50506,(1),null);
return datascript.pull_api.pull_spec.call(null,src,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null),false);
} else {
return el;
}
});})(i__50502,tuple,c__4322__auto__,size__4323__auto__,b__50503,s__50501__$2,temp__5720__auto__,resolved))
,resolved,tuple));

var G__50536 = (i__50502 + (1));
i__50502 = G__50536;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50503),datascript$query$pull_$_iter__50500.call(null,cljs.core.chunk_rest.call(null,s__50501__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50503),null);
}
} else {
var tuple = cljs.core.first.call(null,s__50501__$2);
return cljs.core.cons.call(null,cljs.core.mapv.call(null,((function (tuple,s__50501__$2,temp__5720__auto__,resolved){
return (function (env,el){
if(cljs.core.truth_(env)){
var vec__50510 = env;
var src = cljs.core.nth.call(null,vec__50510,(0),null);
var spec = cljs.core.nth.call(null,vec__50510,(1),null);
return datascript.pull_api.pull_spec.call(null,src,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null),false);
} else {
return el;
}
});})(tuple,s__50501__$2,temp__5720__auto__,resolved))
,resolved,tuple),datascript$query$pull_$_iter__50500.call(null,cljs.core.rest.call(null,s__50501__$2)));
}
} else {
return null;
}
break;
}
});})(resolved))
,null,null));
});})(resolved))
;
return iter__4324__auto__.call(null,resultset);
});
datascript.query.query_cache = cljs.core.volatile_BANG_.call(null,datascript.lru.lru.call(null,(100)));
datascript.query.memoized_parse_query = (function datascript$query$memoized_parse_query(q){
var temp__5722__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,datascript.query.query_cache),q,null);
if((temp__5722__auto__ == null)){
var qp = datascript.parser.parse_query.call(null,q);
cljs.core._vreset_BANG_.call(null,datascript.query.query_cache,cljs.core.assoc.call(null,cljs.core._deref.call(null,datascript.query.query_cache),q,qp));

return qp;
} else {
var cached = temp__5722__auto__;
return cached;
}
});
datascript.query.q = (function datascript$query$q(var_args){
var args__4534__auto__ = [];
var len__4531__auto___50569 = arguments.length;
var i__4532__auto___50570 = (0);
while(true){
if((i__4532__auto___50570 < len__4531__auto___50569)){
args__4534__auto__.push((arguments[i__4532__auto___50570]));

var G__50572 = (i__4532__auto___50570 + (1));
i__4532__auto___50570 = G__50572;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return datascript.query.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

datascript.query.q.cljs$core$IFn$_invoke$arity$variadic = (function (q,inputs){
var parsed_q = datascript.query.memoized_parse_query.call(null,q);
var find = new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(parsed_q);
var find_elements = datascript.parser.find_elements.call(null,find);
var find_vars = datascript.parser.find_vars.call(null,find);
var result_arity = cljs.core.count.call(null,find_elements);
var with$ = new cljs.core.Keyword(null,"qwith","qwith",-45809392).cljs$core$IFn$_invoke$arity$1(parsed_q);
var all_vars = cljs.core.concat.call(null,find_vars,cljs.core.map.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),with$));
var q__$1 = (function (){var G__50563 = q;
if(cljs.core.sequential_QMARK_.call(null,q)){
return datascript.parser.query__GT_map.call(null,G__50563);
} else {
return G__50563;
}
})();
var wheres = new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q__$1);
var context = datascript.query.resolve_ins.call(null,(new datascript.query.Context(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(parsed_q),inputs);
var resultset = datascript.query.collect.call(null,datascript.query._q.call(null,context,wheres),all_vars);
var G__50564 = resultset;
var G__50564__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q__$1))?cljs.core.mapv.call(null,((function (G__50564,parsed_q,find,find_elements,find_vars,result_arity,with$,all_vars,q__$1,wheres,context,resultset){
return (function (p1__50556_SHARP_){
return cljs.core.vec.call(null,cljs.core.subvec.call(null,p1__50556_SHARP_,(0),result_arity));
});})(G__50564,parsed_q,find,find_elements,find_vars,result_arity,with$,all_vars,q__$1,wheres,context,resultset))
,G__50564):G__50564);
var G__50564__$2 = (cljs.core.truth_(cljs.core.some.call(null,datascript.parser.aggregate_QMARK_,find_elements))?datascript.query.aggregate.call(null,find_elements,context,G__50564__$1):G__50564__$1);
var G__50564__$3 = (cljs.core.truth_(cljs.core.some.call(null,datascript.parser.pull_QMARK_,find_elements))?datascript.query.pull.call(null,find_elements,context,G__50564__$2):G__50564__$2);
return datascript.query._post_process.call(null,find,G__50564__$3);

});

datascript.query.q.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
datascript.query.q.cljs$lang$applyTo = (function (seq50557){
var G__50558 = cljs.core.first.call(null,seq50557);
var seq50557__$1 = cljs.core.next.call(null,seq50557);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50558,seq50557__$1);
});


//# sourceMappingURL=query.js.map?rel=1563552877416
