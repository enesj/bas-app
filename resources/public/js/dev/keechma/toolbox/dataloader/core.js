// Compiled by ClojureScript 1.10.339 {}
goog.provide('keechma.toolbox.dataloader.core');
goog.require('cljs.core');
goog.require('com.stuartsierra.dependency');
goog.require('cljs.core.async');
goog.require('promesa.core');
goog.require('entitydb.core');
goog.require('medley.core');
goog.require('clojure.set');
goog.require('goog.date.DateTime');
keechma.toolbox.dataloader.core.id_key = new cljs.core.Keyword("keechma.toolbox.dataloader.core","dataloader","keechma.toolbox.dataloader.core/dataloader",-359595488);
keechma.toolbox.dataloader.core.request_cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);

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
keechma.toolbox.dataloader.core.EntityDBWithRelations = (function (data,relations,__meta,__extmap,__hash){
this.data = data;
this.relations = relations;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k59601,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__59605 = k59601;
var G__59605__$1 = (((G__59605 instanceof cljs.core.Keyword))?G__59605.fqn:null);
switch (G__59605__$1) {
case "data":
return self__.data;

break;
case "relations":
return self__.relations;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k59601,else__4206__auto__);

}
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#keechma.toolbox.dataloader.core.EntityDBWithRelations{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relations","relations",-427124442),self__.relations],null))], null),self__.__extmap));
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__59600){
var self__ = this;
var G__59600__$1 = this;
return (new cljs.core.RecordIter((0),G__59600__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"relations","relations",-427124442)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new keechma.toolbox.dataloader.core.EntityDBWithRelations(self__.data,self__.relations,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (440975300 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this59602,other59603){
var self__ = this;
var this59602__$1 = this;
return ((!((other59603 == null))) && ((this59602__$1.constructor === other59603.constructor)) && (cljs.core._EQ_.call(null,this59602__$1.data,other59603.data)) && (cljs.core._EQ_.call(null,this59602__$1.relations,other59603.relations)) && (cljs.core._EQ_.call(null,this59602__$1.__extmap,other59603.__extmap)));
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"relations","relations",-427124442),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new keechma.toolbox.dataloader.core.EntityDBWithRelations(self__.data,self__.relations,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__59600){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__59606 = cljs.core.keyword_identical_QMARK_;
var expr__59607 = k__4211__auto__;
if(cljs.core.truth_(pred__59606.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__59607))){
return (new keechma.toolbox.dataloader.core.EntityDBWithRelations(G__59600,self__.relations,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__59606.call(null,new cljs.core.Keyword(null,"relations","relations",-427124442),expr__59607))){
return (new keechma.toolbox.dataloader.core.EntityDBWithRelations(self__.data,G__59600,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.dataloader.core.EntityDBWithRelations(self__.data,self__.relations,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__59600),null));
}
}
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"relations","relations",-427124442),self__.relations,null))], null),self__.__extmap));
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__59600){
var self__ = this;
var this__4202__auto____$1 = this;
return (new keechma.toolbox.dataloader.core.EntityDBWithRelations(self__.data,self__.relations,G__59600,self__.__extmap,self__.__hash));
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"relations","relations",1213407085,null)], null);
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.cljs$lang$type = true;

keechma.toolbox.dataloader.core.EntityDBWithRelations.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"keechma.toolbox.dataloader.core/EntityDBWithRelations",null,(1),null));
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"keechma.toolbox.dataloader.core/EntityDBWithRelations");
});

/**
 * Positional factory function for keechma.toolbox.dataloader.core/EntityDBWithRelations.
 */
keechma.toolbox.dataloader.core.__GT_EntityDBWithRelations = (function keechma$toolbox$dataloader$core$__GT_EntityDBWithRelations(data,relations){
return (new keechma.toolbox.dataloader.core.EntityDBWithRelations(data,relations,null,null,null));
});

/**
 * Factory function for keechma.toolbox.dataloader.core/EntityDBWithRelations, taking a map of keywords to field values.
 */
keechma.toolbox.dataloader.core.map__GT_EntityDBWithRelations = (function keechma$toolbox$dataloader$core$map__GT_EntityDBWithRelations(G__59604){
var extmap__4236__auto__ = (function (){var G__59609 = cljs.core.dissoc.call(null,G__59604,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"relations","relations",-427124442));
if(cljs.core.record_QMARK_.call(null,G__59604)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__59609);
} else {
return G__59609;
}
})();
return (new keechma.toolbox.dataloader.core.EntityDBWithRelations(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__59604),new cljs.core.Keyword(null,"relations","relations",-427124442).cljs$core$IFn$_invoke$arity$1(G__59604),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});

keechma.toolbox.dataloader.core.target__GT_edb = (function keechma$toolbox$dataloader$core$target__GT_edb(target){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,cljs.core.namespace.call(null,target)),cljs.core.keyword.call(null,cljs.core.name.call(null,target))], null);
});
keechma.toolbox.dataloader.core.save_kv_data = (function keechma$toolbox$dataloader$core$save_kv_data(app_db,p__59611,data){
var map__59612 = p__59611;
var map__59612__$1 = ((((!((map__59612 == null)))?(((((map__59612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59612):map__59612);
var datasource = map__59612__$1;
var target = cljs.core.get.call(null,map__59612__$1,new cljs.core.Keyword(null,"target","target",253001721));
return cljs.core.assoc_in.call(null,app_db,target,data);
});
keechma.toolbox.dataloader.core.insert_relations = (function keechma$toolbox$dataloader$core$insert_relations(edb_schema,edb,relations){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
var items = ((cljs.core.map_QMARK_.call(null,v))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null):v);
return cljs.core.reduce.call(null,((function (items){
return (function (acc2,item){
return entitydb.core.insert_item.call(null,edb_schema,acc2,k,item);
});})(items))
,acc,items);
}),edb,relations);
});
keechma.toolbox.dataloader.core.save_edb_named_item = (function keechma$toolbox$dataloader$core$save_edb_named_item(app_db,edb_schema,p__59614,data){
var map__59615 = p__59614;
var map__59615__$1 = ((((!((map__59615 == null)))?(((((map__59615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59615):map__59615);
var datasource = map__59615__$1;
var target = cljs.core.get.call(null,map__59615__$1,new cljs.core.Keyword(null,"target","target",253001721));
var edb = new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(app_db);
var vec__59617 = target;
var _ = cljs.core.nth.call(null,vec__59617,(0),null);
var edb_target = cljs.core.nth.call(null,vec__59617,(1),null);
var vec__59620 = keechma.toolbox.dataloader.core.target__GT_edb.call(null,edb_target);
var entity = cljs.core.nth.call(null,vec__59620,(0),null);
var named_item = cljs.core.nth.call(null,vec__59620,(1),null);
var insert_named_item = cljs.core.partial.call(null,entitydb.core.insert_named_item,edb_schema);
var vec__59623 = ((cljs.core._EQ_.call(null,keechma.toolbox.dataloader.core.EntityDBWithRelations,cljs.core.type.call(null,data)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"relations","relations",-427124442).cljs$core$IFn$_invoke$arity$1(data)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [data,null], null));
var data__$1 = cljs.core.nth.call(null,vec__59623,(0),null);
var relations = cljs.core.nth.call(null,vec__59623,(1),null);
return cljs.core.assoc.call(null,app_db,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),(cljs.core.truth_(data__$1)?insert_named_item.call(null,keechma.toolbox.dataloader.core.insert_relations.call(null,edb_schema,edb,relations),entity,named_item,data__$1):entitydb.core.remove_named_item.call(null,edb,entity,named_item)));
});
keechma.toolbox.dataloader.core.save_edb_collection = (function keechma$toolbox$dataloader$core$save_edb_collection(app_db,edb_schema,p__59626,data){
var map__59627 = p__59626;
var map__59627__$1 = ((((!((map__59627 == null)))?(((((map__59627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59627):map__59627);
var datasource = map__59627__$1;
var target = cljs.core.get.call(null,map__59627__$1,new cljs.core.Keyword(null,"target","target",253001721));
var edb = new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(app_db);
var vec__59629 = target;
var _ = cljs.core.nth.call(null,vec__59629,(0),null);
var edb_target = cljs.core.nth.call(null,vec__59629,(1),null);
var vec__59632 = keechma.toolbox.dataloader.core.target__GT_edb.call(null,edb_target);
var entity = cljs.core.nth.call(null,vec__59632,(0),null);
var collection = cljs.core.nth.call(null,vec__59632,(1),null);
var insert_collection = cljs.core.partial.call(null,entitydb.core.insert_collection,edb_schema);
var vec__59635 = ((cljs.core._EQ_.call(null,keechma.toolbox.dataloader.core.EntityDBWithRelations,cljs.core.type.call(null,data)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"relations","relations",-427124442).cljs$core$IFn$_invoke$arity$1(data)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [data,null], null));
var data__$1 = cljs.core.nth.call(null,vec__59635,(0),null);
var relations = cljs.core.nth.call(null,vec__59635,(1),null);
return cljs.core.assoc.call(null,app_db,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),((cljs.core.seq.call(null,data__$1))?insert_collection.call(null,keechma.toolbox.dataloader.core.insert_relations.call(null,edb_schema,edb,relations),entity,collection,data__$1):entitydb.core.remove_collection.call(null,edb,entity,collection)));
});
keechma.toolbox.dataloader.core.get_edb_named_item = (function keechma$toolbox$dataloader$core$get_edb_named_item(app_db,edb_schema,p__59638){
var map__59639 = p__59638;
var map__59639__$1 = ((((!((map__59639 == null)))?(((((map__59639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59639):map__59639);
var target = cljs.core.get.call(null,map__59639__$1,new cljs.core.Keyword(null,"target","target",253001721));
var edb = new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(app_db);
var vec__59641 = target;
var _ = cljs.core.nth.call(null,vec__59641,(0),null);
var edb_target = cljs.core.nth.call(null,vec__59641,(1),null);
var vec__59644 = keechma.toolbox.dataloader.core.target__GT_edb.call(null,edb_target);
var entity = cljs.core.nth.call(null,vec__59644,(0),null);
var named_item = cljs.core.nth.call(null,vec__59644,(1),null);
return entitydb.core.get_named_item.call(null,edb_schema,edb,entity,named_item);
});
keechma.toolbox.dataloader.core.get_edb_collection = (function keechma$toolbox$dataloader$core$get_edb_collection(app_db,edb_schema,p__59647){
var map__59648 = p__59647;
var map__59648__$1 = ((((!((map__59648 == null)))?(((((map__59648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59648):map__59648);
var target = cljs.core.get.call(null,map__59648__$1,new cljs.core.Keyword(null,"target","target",253001721));
var edb = new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(app_db);
var vec__59650 = target;
var _ = cljs.core.nth.call(null,vec__59650,(0),null);
var edb_target = cljs.core.nth.call(null,vec__59650,(1),null);
var vec__59653 = keechma.toolbox.dataloader.core.target__GT_edb.call(null,edb_target);
var entity = cljs.core.nth.call(null,vec__59653,(0),null);
var collection = cljs.core.nth.call(null,vec__59653,(1),null);
return entitydb.core.get_collection.call(null,edb_schema,edb,entity,collection);
});
keechma.toolbox.dataloader.core.get_kv_data = (function keechma$toolbox$dataloader$core$get_kv_data(app_db,p__59656){
var map__59657 = p__59656;
var map__59657__$1 = ((((!((map__59657 == null)))?(((((map__59657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59657):map__59657);
var datasource = map__59657__$1;
var target = cljs.core.get.call(null,map__59657__$1,new cljs.core.Keyword(null,"target","target",253001721));
return cljs.core.get_in.call(null,app_db,target);
});
keechma.toolbox.dataloader.core.get_meta = (function keechma$toolbox$dataloader$core$get_meta(app_db,datasource_key){
return cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),keechma.toolbox.dataloader.core.id_key,datasource_key], null));
});
keechma.toolbox.dataloader.core.save_meta = (function keechma$toolbox$dataloader$core$save_meta(app_db,datasource_key,meta){
return cljs.core.assoc_in.call(null,app_db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),keechma.toolbox.dataloader.core.id_key,datasource_key], null),meta);
});
keechma.toolbox.dataloader.core.save_data = (function keechma$toolbox$dataloader$core$save_data(app_db,edb_schema,p__59659,data){
var map__59660 = p__59659;
var map__59660__$1 = ((((!((map__59660 == null)))?(((((map__59660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59660):map__59660);
var datasource = map__59660__$1;
var target = cljs.core.get.call(null,map__59660__$1,new cljs.core.Keyword(null,"target","target",253001721));
var vec__59662 = target;
var target_start = cljs.core.nth.call(null,vec__59662,(0),null);
var setter = new cljs.core.Keyword(null,"set","set",304602554).cljs$core$IFn$_invoke$arity$1(datasource);
if(cljs.core.boolean$.call(null,setter)){
return setter.call(null,app_db,datasource,data);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("edb","named-item","edb/named-item",-828209093),target_start)){
return keechma.toolbox.dataloader.core.save_edb_named_item.call(null,app_db,edb_schema,datasource,data);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("edb","collection","edb/collection",-683266119),target_start)){
return keechma.toolbox.dataloader.core.save_edb_collection.call(null,app_db,edb_schema,datasource,data);
} else {
if(cljs.core.boolean$.call(null,target)){
return keechma.toolbox.dataloader.core.save_kv_data.call(null,app_db,datasource,data);
} else {
return app_db;

}
}
}
}
});
keechma.toolbox.dataloader.core.get_data = (function keechma$toolbox$dataloader$core$get_data(app_db,edb_schema,p__59665){
var map__59666 = p__59665;
var map__59666__$1 = ((((!((map__59666 == null)))?(((((map__59666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59666):map__59666);
var datasource = map__59666__$1;
var target = cljs.core.get.call(null,map__59666__$1,new cljs.core.Keyword(null,"target","target",253001721));
var vec__59668 = target;
var target_start = cljs.core.nth.call(null,vec__59668,(0),null);
var getter = new cljs.core.Keyword(null,"get","get",1683182755).cljs$core$IFn$_invoke$arity$1(datasource);
if(cljs.core.boolean$.call(null,getter)){
return getter.call(null,app_db,datasource);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("edb","named-item","edb/named-item",-828209093),target_start)){
return keechma.toolbox.dataloader.core.get_edb_named_item.call(null,app_db,edb_schema,datasource);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("edb","collection","edb/collection",-683266119),target_start)){
return keechma.toolbox.dataloader.core.get_edb_collection.call(null,app_db,edb_schema,datasource);
} else {
if(cljs.core.boolean$.call(null,target)){
return keechma.toolbox.dataloader.core.get_kv_data.call(null,app_db,datasource);
} else {
return null;

}
}
}
}
});
keechma.toolbox.dataloader.core.remove_pending_datasource = (function keechma$toolbox$dataloader$core$remove_pending_datasource(app_db,datasource_key){
return cljs.core.update_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword("keechma.toolbox.dataloader.core","pending","keechma.toolbox.dataloader.core/pending",1357461542)], null),(function (p1__59671_SHARP_){
return cljs.core.disj.call(null,p1__59671_SHARP_,datasource_key);
}));
});
keechma.toolbox.dataloader.core.mark_pending_BANG_ = (function keechma$toolbox$dataloader$core$mark_pending_BANG_(app_db_atom,edb_schema,datasources){
return cljs.core.swap_BANG_.call(null,app_db_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword("keechma.toolbox.dataloader.core","pending","keechma.toolbox.dataloader.core/pending",1357461542)], null),cljs.core.set.call(null,cljs.core.keys.call(null,datasources)));
});
keechma.toolbox.dataloader.core.get_meta_and_data = (function keechma$toolbox$dataloader$core$get_meta_and_data(app_db,edb_schema,datasource_key,datasource){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),keechma.toolbox.dataloader.core.get_data.call(null,app_db,edb_schema,datasource),new cljs.core.Keyword(null,"meta","meta",1499536964),keechma.toolbox.dataloader.core.get_meta.call(null,app_db,datasource_key)], null);
});
keechma.toolbox.dataloader.core.datasource_params = (function keechma$toolbox$dataloader$core$datasource_params(datasources,datasource_key,datasource,app_db,edb_schema){
var params_fn = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(datasource);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return ((function (or__3949__auto__){
return (function() { 
var G__59672__delegate = function (args){
return null;
};
var G__59672 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59673__i = 0, G__59673__a = new Array(arguments.length -  0);
while (G__59673__i < G__59673__a.length) {G__59673__a[G__59673__i] = arguments[G__59673__i + 0]; ++G__59673__i;}
  args = new cljs.core.IndexedSeq(G__59673__a,0,null);
} 
return G__59672__delegate.call(this,args);};
G__59672.cljs$lang$maxFixedArity = 0;
G__59672.cljs$lang$applyTo = (function (arglist__59674){
var args = cljs.core.seq(arglist__59674);
return G__59672__delegate(args);
});
G__59672.cljs$core$IFn$_invoke$arity$variadic = G__59672__delegate;
return G__59672;
})()
;
;})(or__3949__auto__))
}
})();
var prev = keechma.toolbox.dataloader.core.get_meta_and_data.call(null,app_db,edb_schema,datasource_key,datasource);
var route = cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"data","data",-232669377)], null));
var deps = cljs.core.reduce.call(null,((function (params_fn,prev,route){
return (function (acc,dep_key){
return cljs.core.assoc.call(null,acc,dep_key,keechma.toolbox.dataloader.core.get_data.call(null,app_db,edb_schema,cljs.core.get.call(null,datasources,dep_key)));
});})(params_fn,prev,route))
,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(datasource));
return params_fn.call(null,prev,route,deps);
});
keechma.toolbox.dataloader.core.cache_key = (function keechma$toolbox$dataloader$core$cache_key(datasource,params){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datasource,cljs.core.hash.call(null,params)], null);
});
keechma.toolbox.dataloader.core.fulfilled_loader = (function keechma$toolbox$dataloader$core$fulfilled_loader(reqs){
return cljs.core.map.call(null,(function (_){
return new cljs.core.Keyword("keechma.toolbox.dataloader.core","fulfilled","keechma.toolbox.dataloader.core/fulfilled",99196335);
}),reqs);
});
keechma.toolbox.dataloader.core.default_loader = (function keechma$toolbox$dataloader$core$default_loader(reqs){
return cljs.core.repeat.call(null,cljs.core.count.call(null,reqs),null);
});
keechma.toolbox.dataloader.core.datasources__GT_loaders = (function keechma$toolbox$dataloader$core$datasources__GT_loaders(app_datasources,datasources,invalid_datasources,app_db,results_chan,edb_schema){
var route_params = cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"data","data",-232669377)], null));
var ds = datasources;
var loaders = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.not.call(null,cljs.core.seq.call(null,ds))){
return loaders;
} else {
var vec__59681 = cljs.core.first.call(null,ds);
var key = cljs.core.nth.call(null,vec__59681,(0),null);
var val = cljs.core.nth.call(null,vec__59681,(1),null);
var prev = keechma.toolbox.dataloader.core.get_meta_and_data.call(null,app_db,edb_schema,key,val);
var params = keechma.toolbox.dataloader.core.datasource_params.call(null,app_datasources,key,val,app_db,edb_schema);
var datasource_loader = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"loader","loader",-462395423).cljs$core$IFn$_invoke$arity$1(val);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return keechma.toolbox.dataloader.core.default_loader;
}
})();
var cache_valid_fn_QMARK_ = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"cache-valid?","cache-valid?",2095228888).cljs$core$IFn$_invoke$arity$1(val);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.constantly.call(null,false);
}
})();
var cached = cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword("keechma.toolbox.dataloader.core","req-cache","keechma.toolbox.dataloader.core/req-cache",-1946273320),key,cljs.core.hash.call(null,params)], null));
var cache_valid_QMARK_ = (function (){var and__3938__auto__ = cached;
if(cljs.core.truth_(and__3938__auto__)){
return cache_valid_fn_QMARK_.call(null,cljs.core.assoc.call(null,cached,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"app-db","app-db",865606302),app_db));
} else {
return and__3938__auto__;
}
})();
var target = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(val);
var prev_meta = new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(prev);
var prev_params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(prev_meta);
var loader = (cljs.core.truth_(cache_valid_QMARK_)?cljs.core.constantly.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cached)], null)):((((cljs.core.contains_QMARK_.call(null,invalid_datasources,key)) || ((prev_meta == null)) || (cljs.core.not_EQ_.call(null,prev_params,params))))?datasource_loader:keechma.toolbox.dataloader.core.fulfilled_loader
));
var current_loaders = (function (){var or__3949__auto__ = cljs.core.get.call(null,loaders,loader);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var G__59693 = cljs.core.rest.call(null,ds);
var G__59694 = cljs.core.assoc.call(null,loaders,loader,cljs.core.conj.call(null,current_loaders,cljs.core.merge.call(null,val,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"prev","prev",-1597069226),prev,new cljs.core.Keyword(null,"datasource","datasource",-246060221),key,new cljs.core.Keyword(null,"app-db","app-db",865606302),app_db,new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"cache-valid?","cache-valid?",2095228888),cache_valid_QMARK_,new cljs.core.Keyword(null,"current-request","current-request",-378355695),cljs.core.get_in.call(null,cljs.core.deref.call(null,keechma.toolbox.dataloader.core.request_cache),keechma.toolbox.dataloader.core.cache_key.call(null,key,params))], null))));
ds = G__59693;
loaders = G__59694;
continue;
}
break;
}
});
keechma.toolbox.dataloader.core.call_loader = (function keechma$toolbox$dataloader$core$call_loader(loader,pending_datasources,context){
var reqs = cljs.core.vec.call(null,loader.call(null,pending_datasources,context));
var seq__59696_59712 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,reqs));
var chunk__59697_59713 = null;
var count__59698_59714 = (0);
var i__59699_59715 = (0);
while(true){
if((i__59699_59715 < count__59698_59714)){
var vec__59700_59733 = cljs.core._nth.call(null,chunk__59697_59713,i__59699_59715);
var idx_59734 = cljs.core.nth.call(null,vec__59700_59733,(0),null);
var req_59735 = cljs.core.nth.call(null,vec__59700_59733,(1),null);
var pending_datasource_59737 = cljs.core.get.call(null,pending_datasources,idx_59734);
var c_key_59738 = keechma.toolbox.dataloader.core.cache_key.call(null,new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(pending_datasource_59737),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(pending_datasource_59737));
cljs.core.swap_BANG_.call(null,keechma.toolbox.dataloader.core.request_cache,cljs.core.assoc_in,c_key_59738,req_59735);


var G__59741 = seq__59696_59712;
var G__59742 = chunk__59697_59713;
var G__59743 = count__59698_59714;
var G__59744 = (i__59699_59715 + (1));
seq__59696_59712 = G__59741;
chunk__59697_59713 = G__59742;
count__59698_59714 = G__59743;
i__59699_59715 = G__59744;
continue;
} else {
var temp__5720__auto___59748 = cljs.core.seq.call(null,seq__59696_59712);
if(temp__5720__auto___59748){
var seq__59696_59749__$1 = temp__5720__auto___59748;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59696_59749__$1)){
var c__4351__auto___59750 = cljs.core.chunk_first.call(null,seq__59696_59749__$1);
var G__59751 = cljs.core.chunk_rest.call(null,seq__59696_59749__$1);
var G__59752 = c__4351__auto___59750;
var G__59753 = cljs.core.count.call(null,c__4351__auto___59750);
var G__59754 = (0);
seq__59696_59712 = G__59751;
chunk__59697_59713 = G__59752;
count__59698_59714 = G__59753;
i__59699_59715 = G__59754;
continue;
} else {
var vec__59703_59757 = cljs.core.first.call(null,seq__59696_59749__$1);
var idx_59758 = cljs.core.nth.call(null,vec__59703_59757,(0),null);
var req_59759 = cljs.core.nth.call(null,vec__59703_59757,(1),null);
var pending_datasource_59763 = cljs.core.get.call(null,pending_datasources,idx_59758);
var c_key_59764 = keechma.toolbox.dataloader.core.cache_key.call(null,new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(pending_datasource_59763),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(pending_datasource_59763));
cljs.core.swap_BANG_.call(null,keechma.toolbox.dataloader.core.request_cache,cljs.core.assoc_in,c_key_59764,req_59759);


var G__59768 = cljs.core.next.call(null,seq__59696_59749__$1);
var G__59769 = null;
var G__59770 = (0);
var G__59771 = (0);
seq__59696_59712 = G__59768;
chunk__59697_59713 = G__59769;
count__59698_59714 = G__59770;
i__59699_59715 = G__59771;
continue;
}
} else {
}
}
break;
}

return reqs;
});
keechma.toolbox.dataloader.core.clear_cache_for_datasource_BANG_ = (function keechma$toolbox$dataloader$core$clear_cache_for_datasource_BANG_(app_db_atom,datasource){
if(cljs.core.truth_(new cljs.core.Keyword(null,"cache-valid?","cache-valid?",2095228888).cljs$core$IFn$_invoke$arity$1(datasource))){
return null;
} else {
var datasource_key = new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(datasource);
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(datasource);
return cljs.core.swap_BANG_.call(null,app_db_atom,medley.core.dissoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword("keechma.toolbox.dataloader.core","req-cache","keechma.toolbox.dataloader.core/req-cache",-1946273320),datasource_key,cljs.core.hash.call(null,params)], null));
}
});
keechma.toolbox.dataloader.core.cache_datasource_response_BANG_ = (function keechma$toolbox$dataloader$core$cache_datasource_response_BANG_(app_db_atom,datasource,value){
if(cljs.core.truth_(new cljs.core.Keyword(null,"cache-valid?","cache-valid?",2095228888).cljs$core$IFn$_invoke$arity$1(datasource))){
return null;
} else {
var cache_value = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached-at","cached-at",2133976632),(new goog.date.DateTime()).getTime(),new cljs.core.Keyword(null,"value","value",305978217),value], null);
var datasource_key = new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(datasource);
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(datasource);
return cljs.core.swap_BANG_.call(null,app_db_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword("keechma.toolbox.dataloader.core","req-cache","keechma.toolbox.dataloader.core/req-cache",-1946273320),datasource_key,cljs.core.hash.call(null,params)], null),cache_value);
}
});
keechma.toolbox.dataloader.core.start_loaders_BANG_ = (function keechma$toolbox$dataloader$core$start_loaders_BANG_(app_db_atom,app_datasources,datasources,invalid_datasources,results_chan,edb_schema,context){
var loaders = keechma.toolbox.dataloader.core.datasources__GT_loaders.call(null,app_datasources,datasources,invalid_datasources,cljs.core.deref.call(null,app_db_atom),results_chan,edb_schema);
var seq__59780 = cljs.core.seq.call(null,loaders);
var chunk__59781 = null;
var count__59782 = (0);
var i__59783 = (0);
while(true){
if((i__59783 < count__59782)){
var vec__59784 = cljs.core._nth.call(null,chunk__59781,i__59783);
var loader = cljs.core.nth.call(null,vec__59784,(0),null);
var unsorted_pending_datasources = cljs.core.nth.call(null,vec__59784,(1),null);
var pending_datasources_59814 = cljs.core.vec.call(null,cljs.core.sort_by.call(null,((function (seq__59780,chunk__59781,count__59782,i__59783,vec__59784,loader,unsorted_pending_datasources,loaders){
return (function (p1__59777_SHARP_){
return (new cljs.core.Keyword(null,"current-request","current-request",-378355695).cljs$core$IFn$_invoke$arity$1(p1__59777_SHARP_) == null);
});})(seq__59780,chunk__59781,count__59782,i__59783,vec__59784,loader,unsorted_pending_datasources,loaders))
,unsorted_pending_datasources));
var pending_datasources_with_current_59815 = cljs.core.vec.call(null,cljs.core.filter.call(null,((function (seq__59780,chunk__59781,count__59782,i__59783,pending_datasources_59814,vec__59784,loader,unsorted_pending_datasources,loaders){
return (function (p1__59778_SHARP_){
return !((new cljs.core.Keyword(null,"current-request","current-request",-378355695).cljs$core$IFn$_invoke$arity$1(p1__59778_SHARP_) == null));
});})(seq__59780,chunk__59781,count__59782,i__59783,pending_datasources_59814,vec__59784,loader,unsorted_pending_datasources,loaders))
,pending_datasources_59814));
var pending_datasources_without_current_59816 = cljs.core.vec.call(null,cljs.core.filter.call(null,((function (seq__59780,chunk__59781,count__59782,i__59783,pending_datasources_59814,pending_datasources_with_current_59815,vec__59784,loader,unsorted_pending_datasources,loaders){
return (function (p1__59779_SHARP_){
return (new cljs.core.Keyword(null,"current-request","current-request",-378355695).cljs$core$IFn$_invoke$arity$1(p1__59779_SHARP_) == null);
});})(seq__59780,chunk__59781,count__59782,i__59783,pending_datasources_59814,pending_datasources_with_current_59815,vec__59784,loader,unsorted_pending_datasources,loaders))
,pending_datasources_59814));
var promises_59817 = keechma.toolbox.dataloader.core.call_loader.call(null,loader,pending_datasources_without_current_59816,context);
var seq__59787_59818 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.concat.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"current-request","current-request",-378355695),pending_datasources_with_current_59815),promises_59817)));
var chunk__59788_59819 = null;
var count__59789_59820 = (0);
var i__59790_59821 = (0);
while(true){
if((i__59790_59821 < count__59789_59820)){
var vec__59791_59822 = cljs.core._nth.call(null,chunk__59788_59819,i__59790_59821);
var idx_59823 = cljs.core.nth.call(null,vec__59791_59822,(0),null);
var loader_promise_59824 = cljs.core.nth.call(null,vec__59791_59822,(1),null);
var pending_datasource_59825 = cljs.core.get.call(null,pending_datasources_59814,idx_59823);
keechma.toolbox.dataloader.core.clear_cache_for_datasource_BANG_.call(null,app_db_atom,pending_datasource_59825);

if(((cljs.core.not_EQ_.call(null,keechma.toolbox.dataloader.core.fulfilled_loader,loader)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"cache-valid?","cache-valid?",2095228888).cljs$core$IFn$_invoke$arity$1(pending_datasource_59825))))){
cljs.core.swap_BANG_.call(null,app_db_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),keechma.toolbox.dataloader.core.id_key,new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(pending_datasource_59825),new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"pending","pending",-220036727));
} else {
}

promesa.core.error.call(null,((function (seq__59787_59818,chunk__59788_59819,count__59789_59820,i__59790_59821,seq__59780,chunk__59781,count__59782,i__59783,pending_datasource_59825,vec__59791_59822,idx_59823,loader_promise_59824,pending_datasources_59814,pending_datasources_with_current_59815,pending_datasources_without_current_59816,promises_59817,vec__59784,loader,unsorted_pending_datasources,loaders){
return (function (error){
var pending_datasource__$1 = cljs.core.get.call(null,pending_datasources_59814,idx_59823);
var c_key = keechma.toolbox.dataloader.core.cache_key.call(null,new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(pending_datasource__$1),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(pending_datasource__$1));
cljs.core.swap_BANG_.call(null,keechma.toolbox.dataloader.core.request_cache,medley.core.dissoc_in,c_key);

return cljs.core.async.put_BANG_.call(null,results_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.assoc.call(null,pending_datasource__$1,new cljs.core.Keyword(null,"error","error",-978969032),error)], null));
});})(seq__59787_59818,chunk__59788_59819,count__59789_59820,i__59790_59821,seq__59780,chunk__59781,count__59782,i__59783,pending_datasource_59825,vec__59791_59822,idx_59823,loader_promise_59824,pending_datasources_59814,pending_datasources_with_current_59815,pending_datasources_without_current_59816,promises_59817,vec__59784,loader,unsorted_pending_datasources,loaders))
,promesa.core.map.call(null,((function (seq__59787_59818,chunk__59788_59819,count__59789_59820,i__59790_59821,seq__59780,chunk__59781,count__59782,i__59783,pending_datasource_59825,vec__59791_59822,idx_59823,loader_promise_59824,pending_datasources_59814,pending_datasources_with_current_59815,pending_datasources_without_current_59816,promises_59817,vec__59784,loader,unsorted_pending_datasources,loaders){
return (function (value){
var processor = (function (){var or__3949__auto__ = cljs.core.get_in.call(null,datasources,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(pending_datasource_59825),new cljs.core.Keyword(null,"processor","processor",-16217796)], null));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return ((function (seq__59787_59818,chunk__59788_59819,count__59789_59820,i__59790_59821,seq__59780,chunk__59781,count__59782,i__59783,or__3949__auto__,pending_datasource_59825,vec__59791_59822,idx_59823,loader_promise_59824,pending_datasources_59814,pending_datasources_with_current_59815,pending_datasources_without_current_59816,promises_59817,vec__59784,loader,unsorted_pending_datasources,loaders){
return (function() { 
var G__59826__delegate = function (data,args){
return data;
};
var G__59826 = function (data,var_args){
var args = null;
if (arguments.length > 1) {
var G__59827__i = 0, G__59827__a = new Array(arguments.length -  1);
while (G__59827__i < G__59827__a.length) {G__59827__a[G__59827__i] = arguments[G__59827__i + 1]; ++G__59827__i;}
  args = new cljs.core.IndexedSeq(G__59827__a,0,null);
} 
return G__59826__delegate.call(this,data,args);};
G__59826.cljs$lang$maxFixedArity = 1;
G__59826.cljs$lang$applyTo = (function (arglist__59828){
var data = cljs.core.first(arglist__59828);
var args = cljs.core.rest(arglist__59828);
return G__59826__delegate(data,args);
});
G__59826.cljs$core$IFn$_invoke$arity$variadic = G__59826__delegate;
return G__59826;
})()
;
;})(seq__59787_59818,chunk__59788_59819,count__59789_59820,i__59790_59821,seq__59780,chunk__59781,count__59782,i__59783,or__3949__auto__,pending_datasource_59825,vec__59791_59822,idx_59823,loader_promise_59824,pending_datasources_59814,pending_datasources_with_current_59815,pending_datasources_without_current_59816,promises_59817,vec__59784,loader,unsorted_pending_datasources,loaders))
}
})();
var c_key = keechma.toolbox.dataloader.core.cache_key.call(null,new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(pending_datasource_59825),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(pending_datasource_59825));
cljs.core.swap_BANG_.call(null,keechma.toolbox.dataloader.core.request_cache,medley.core.dissoc_in,c_key);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword("keechma.toolbox.dataloader.core","fulfilled","keechma.toolbox.dataloader.core/fulfilled",99196335),value)){
return cljs.core.async.put_BANG_.call(null,results_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.assoc.call(null,pending_datasource_59825,new cljs.core.Keyword(null,"value","value",305978217),value)], null));
} else {
keechma.toolbox.dataloader.core.cache_datasource_response_BANG_.call(null,app_db_atom,pending_datasource_59825,value);

return cljs.core.async.put_BANG_.call(null,results_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.assoc.call(null,pending_datasource_59825,new cljs.core.Keyword(null,"value","value",305978217),processor.call(null,value,cljs.core.assoc.call(null,pending_datasource_59825,new cljs.core.Keyword(null,"app-db","app-db",865606302),cljs.core.deref.call(null,app_db_atom))))], null));
}
});})(seq__59787_59818,chunk__59788_59819,count__59789_59820,i__59790_59821,seq__59780,chunk__59781,count__59782,i__59783,pending_datasource_59825,vec__59791_59822,idx_59823,loader_promise_59824,pending_datasources_59814,pending_datasources_with_current_59815,pending_datasources_without_current_59816,promises_59817,vec__59784,loader,unsorted_pending_datasources,loaders))
,promesa.core.promise.call(null,loader_promise_59824)));


var G__59829 = seq__59787_59818;
var G__59830 = chunk__59788_59819;
var G__59831 = count__59789_59820;
var G__59832 = (i__59790_59821 + (1));
seq__59787_59818 = G__59829;
chunk__59788_59819 = G__59830;
count__59789_59820 = G__59831;
i__59790_59821 = G__59832;
continue;
} else {
var temp__5720__auto___59833 = cljs.core.seq.call(null,seq__59787_59818);
if(temp__5720__auto___59833){
var seq__59787_59834__$1 = temp__5720__auto___59833;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59787_59834__$1)){
var c__4351__auto___59835 = cljs.core.chunk_first.call(null,seq__59787_59834__$1);
var G__59836 = cljs.core.chunk_rest.call(null,seq__59787_59834__$1);
var G__59837 = c__4351__auto___59835;
var G__59838 = cljs.core.count.call(null,c__4351__auto___59835);
var G__59839 = (0);
seq__59787_59818 = G__59836;
chunk__59788_59819 = G__59837;
count__59789_59820 = G__59838;
i__59790_59821 = G__59839;
continue;
} else {
var vec__59794_59840 = cljs.core.first.call(null,seq__59787_59834__$1);
var idx_59841 = cljs.core.nth.call(null,vec__59794_59840,(0),null);
var loader_promise_59842 = cljs.core.nth.call(null,vec__59794_59840,(1),null);
var pending_datasource_59843 = cljs.core.get.call(null,pending_datasources_59814,idx_59841);
keechma.toolbox.dataloader.core.clear_cache_for_datasource_BANG_.call(null,app_db_atom,pending_datasource_59843);

if(((cljs.core.not_EQ_.call(null,keechma.toolbox.dataloader.core.fulfilled_loader,loader)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"cache-valid?","cache-valid?",2095228888).cljs$core$IFn$_invoke$arity$1(pending_datasource_59843))))){
cljs.core.swap_BANG_.call(null,app_db_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),keechma.toolbox.dataloader.core.id_key,new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(pending_datasource_59843),new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"pending","pending",-220036727));
} else {
}

promesa.core.error.call(null,((function (seq__59787_59818,chunk__59788_59819,count__59789_59820,i__59790_59821,seq__59780,chunk__59781,count__59782,i__59783,pending_datasource_59843,vec__59794_59840,idx_59841,loader_promise_59842,seq__59787_59834__$1,temp__5720__auto___59833,pending_datasources_59814,pending_datasources_with_current_59815,pending_datasources_without_current_59816,promises_59817,vec__59784,loader,unsorted_pending_datasources,loaders){
return (function (error){
var pending_datasource__$1 = cljs.core.get.call(null,pending_datasources_59814,idx_59841);
var c_key = keechma.toolbox.dataloader.core.cache_key.call(null,new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(pending_datasource__$1),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(pending_datasource__$1));
cljs.core.swap_BANG_.call(null,keechma.toolbox.dataloader.core.request_cache,medley.core.dissoc_in,c_key);

return cljs.core.async.put_BANG_.call(null,results_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.assoc.call(null,pending_datasource__$1,new cljs.core.Keyword(null,"error","error",-978969032),error)], null));
});})(seq__59787_59818,chunk__59788_59819,count__59789_59820,i__59790_59821,seq__59780,chunk__59781,count__59782,i__59783,pending_datasource_59843,vec__59794_59840,idx_59841,loader_promise_59842,seq__59787_59834__$1,temp__5720__auto___59833,pending_datasources_59814,pending_datasources_with_current_59815,pending_datasources_without_current_59816,promises_59817,vec__59784,loader,unsorted_pending_datasources,loaders))
,promesa.core.map.call(null,((function (seq__59787_59818,chunk__59788_59819,count__59789_59820,i__59790_59821,seq__59780,chunk__59781,count__59782,i__59783,pending_datasource_59843,vec__59794_59840,idx_59841,loader_promise_59842,seq__59787_59834__$1,temp__5720__auto___59833,pending_datasources_59814,pending_datasources_with_current_59815,pending_datasources_without_current_59816,promises_59817,vec__59784,loader,unsorted_pending_datasources,loaders){
return (function (value){
var processor = (function (){var or__3949__auto__ = cljs.core.get_in.call(null,datasources,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(pending_datasource_59843),new cljs.core.Keyword(null,"processor","processor",-16217796)], null));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return ((function (seq__59787_59818,chunk__59788_59819,count__59789_59820,i__59790_59821,seq__59780,chunk__59781,count__59782,i__59783,or__3949__auto__,pending_datasource_59843,vec__59794_59840,idx_59841,loader_promise_59842,seq__59787_59834__$1,temp__5720__auto___59833,pending_datasources_59814,pending_datasources_with_current_59815,pending_datasources_without_current_59816,promises_59817,vec__59784,loader,unsorted_pending_datasources,loaders){
return (function() { 
var G__59844__delegate = function (data,args){
return data;
};
var G__59844 = function (data,var_args){
var args = null;
if (arguments.length > 1) {
var G__59845__i = 0, G__59845__a = new Array(arguments.length -  1);
while (G__59845__i < G__59845__a.length) {G__59845__a[G__59845__i] = arguments[G__59845__i + 1]; ++G__59845__i;}
  args = new cljs.core.IndexedSeq(G__59845__a,0,null);
} 
return G__59844__delegate.call(this,data,args);};
G__59844.cljs$lang$maxFixedArity = 1;
G__59844.cljs$lang$applyTo = (function (arglist__59846){
var data = cljs.core.first(arglist__59846);
var args = cljs.core.rest(arglist__59846);
return G__59844__delegate(data,args);
});
G__59844.cljs$core$IFn$_invoke$arity$variadic = G__59844__delegate;
return G__59844;
})()
;
;})(seq__59787_59818,chunk__59788_59819,count__59789_59820,i__59790_59821,seq__59780,chunk__59781,count__59782,i__59783,or__3949__auto__,pending_datasource_59843,vec__59794_59840,idx_59841,loader_promise_59842,seq__59787_59834__$1,temp__5720__auto___59833,pending_datasources_59814,pending_datasources_with_current_59815,pending_datasources_without_current_59816,promises_59817,vec__59784,loader,unsorted_pending_datasources,loaders))
}
})();
var c_key = keechma.toolbox.dataloader.core.cache_key.call(null,new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(pending_datasource_59843),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(pending_datasource_59843));
cljs.core.swap_BANG_.call(null,keechma.toolbox.dataloader.core.request_cache,medley.core.dissoc_in,c_key);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword("keechma.toolbox.dataloader.core","fulfilled","keechma.toolbox.dataloader.core/fulfilled",99196335),value)){
return cljs.core.async.put_BANG_.call(null,results_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.assoc.call(null,pending_datasource_59843,new cljs.core.Keyword(null,"value","value",305978217),value)], null));
} else {
keechma.toolbox.dataloader.core.cache_datasource_response_BANG_.call(null,app_db_atom,pending_datasource_59843,value);

return cljs.core.async.put_BANG_.call(null,results_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.assoc.call(null,pending_datasource_59843,new cljs.core.Keyword(null,"value","value",305978217),processor.call(null,value,cljs.core.assoc.call(null,pending_datasource_59843,new cljs.core.Keyword(null,"app-db","app-db",865606302),cljs.core.deref.call(null,app_db_atom))))], null));
}
});})(seq__59787_59818,chunk__59788_59819,count__59789_59820,i__59790_59821,seq__59780,chunk__59781,count__59782,i__59783,pending_datasource_59843,vec__59794_59840,idx_59841,loader_promise_59842,seq__59787_59834__$1,temp__5720__auto___59833,pending_datasources_59814,pending_datasources_with_current_59815,pending_datasources_without_current_59816,promises_59817,vec__59784,loader,unsorted_pending_datasources,loaders))
,promesa.core.promise.call(null,loader_promise_59842)));


var G__59847 = cljs.core.next.call(null,seq__59787_59834__$1);
var G__59848 = null;
var G__59849 = (0);
var G__59850 = (0);
seq__59787_59818 = G__59847;
chunk__59788_59819 = G__59848;
count__59789_59820 = G__59849;
i__59790_59821 = G__59850;
continue;
}
} else {
}
}
break;
}


var G__59851 = seq__59780;
var G__59852 = chunk__59781;
var G__59853 = count__59782;
var G__59854 = (i__59783 + (1));
seq__59780 = G__59851;
chunk__59781 = G__59852;
count__59782 = G__59853;
i__59783 = G__59854;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__59780);
if(temp__5720__auto__){
var seq__59780__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59780__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__59780__$1);
var G__59855 = cljs.core.chunk_rest.call(null,seq__59780__$1);
var G__59856 = c__4351__auto__;
var G__59857 = cljs.core.count.call(null,c__4351__auto__);
var G__59858 = (0);
seq__59780 = G__59855;
chunk__59781 = G__59856;
count__59782 = G__59857;
i__59783 = G__59858;
continue;
} else {
var vec__59797 = cljs.core.first.call(null,seq__59780__$1);
var loader = cljs.core.nth.call(null,vec__59797,(0),null);
var unsorted_pending_datasources = cljs.core.nth.call(null,vec__59797,(1),null);
var pending_datasources_59859 = cljs.core.vec.call(null,cljs.core.sort_by.call(null,((function (seq__59780,chunk__59781,count__59782,i__59783,vec__59797,loader,unsorted_pending_datasources,seq__59780__$1,temp__5720__auto__,loaders){
return (function (p1__59777_SHARP_){
return (new cljs.core.Keyword(null,"current-request","current-request",-378355695).cljs$core$IFn$_invoke$arity$1(p1__59777_SHARP_) == null);
});})(seq__59780,chunk__59781,count__59782,i__59783,vec__59797,loader,unsorted_pending_datasources,seq__59780__$1,temp__5720__auto__,loaders))
,unsorted_pending_datasources));
var pending_datasources_with_current_59860 = cljs.core.vec.call(null,cljs.core.filter.call(null,((function (seq__59780,chunk__59781,count__59782,i__59783,pending_datasources_59859,vec__59797,loader,unsorted_pending_datasources,seq__59780__$1,temp__5720__auto__,loaders){
return (function (p1__59778_SHARP_){
return !((new cljs.core.Keyword(null,"current-request","current-request",-378355695).cljs$core$IFn$_invoke$arity$1(p1__59778_SHARP_) == null));
});})(seq__59780,chunk__59781,count__59782,i__59783,pending_datasources_59859,vec__59797,loader,unsorted_pending_datasources,seq__59780__$1,temp__5720__auto__,loaders))
,pending_datasources_59859));
var pending_datasources_without_current_59861 = cljs.core.vec.call(null,cljs.core.filter.call(null,((function (seq__59780,chunk__59781,count__59782,i__59783,pending_datasources_59859,pending_datasources_with_current_59860,vec__59797,loader,unsorted_pending_datasources,seq__59780__$1,temp__5720__auto__,loaders){
return (function (p1__59779_SHARP_){
return (new cljs.core.Keyword(null,"current-request","current-request",-378355695).cljs$core$IFn$_invoke$arity$1(p1__59779_SHARP_) == null);
});})(seq__59780,chunk__59781,count__59782,i__59783,pending_datasources_59859,pending_datasources_with_current_59860,vec__59797,loader,unsorted_pending_datasources,seq__59780__$1,temp__5720__auto__,loaders))
,pending_datasources_59859));
var promises_59862 = keechma.toolbox.dataloader.core.call_loader.call(null,loader,pending_datasources_without_current_59861,context);
var seq__59800_59863 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.concat.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"current-request","current-request",-378355695),pending_datasources_with_current_59860),promises_59862)));
var chunk__59801_59864 = null;
var count__59802_59865 = (0);
var i__59803_59866 = (0);
while(true){
if((i__59803_59866 < count__59802_59865)){
var vec__59804_59867 = cljs.core._nth.call(null,chunk__59801_59864,i__59803_59866);
var idx_59868 = cljs.core.nth.call(null,vec__59804_59867,(0),null);
var loader_promise_59869 = cljs.core.nth.call(null,vec__59804_59867,(1),null);
var pending_datasource_59870 = cljs.core.get.call(null,pending_datasources_59859,idx_59868);
keechma.toolbox.dataloader.core.clear_cache_for_datasource_BANG_.call(null,app_db_atom,pending_datasource_59870);

if(((cljs.core.not_EQ_.call(null,keechma.toolbox.dataloader.core.fulfilled_loader,loader)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"cache-valid?","cache-valid?",2095228888).cljs$core$IFn$_invoke$arity$1(pending_datasource_59870))))){
cljs.core.swap_BANG_.call(null,app_db_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),keechma.toolbox.dataloader.core.id_key,new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(pending_datasource_59870),new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"pending","pending",-220036727));
} else {
}

promesa.core.error.call(null,((function (seq__59800_59863,chunk__59801_59864,count__59802_59865,i__59803_59866,seq__59780,chunk__59781,count__59782,i__59783,pending_datasource_59870,vec__59804_59867,idx_59868,loader_promise_59869,pending_datasources_59859,pending_datasources_with_current_59860,pending_datasources_without_current_59861,promises_59862,vec__59797,loader,unsorted_pending_datasources,seq__59780__$1,temp__5720__auto__,loaders){
return (function (error){
var pending_datasource__$1 = cljs.core.get.call(null,pending_datasources_59859,idx_59868);
var c_key = keechma.toolbox.dataloader.core.cache_key.call(null,new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(pending_datasource__$1),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(pending_datasource__$1));
cljs.core.swap_BANG_.call(null,keechma.toolbox.dataloader.core.request_cache,medley.core.dissoc_in,c_key);

return cljs.core.async.put_BANG_.call(null,results_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.assoc.call(null,pending_datasource__$1,new cljs.core.Keyword(null,"error","error",-978969032),error)], null));
});})(seq__59800_59863,chunk__59801_59864,count__59802_59865,i__59803_59866,seq__59780,chunk__59781,count__59782,i__59783,pending_datasource_59870,vec__59804_59867,idx_59868,loader_promise_59869,pending_datasources_59859,pending_datasources_with_current_59860,pending_datasources_without_current_59861,promises_59862,vec__59797,loader,unsorted_pending_datasources,seq__59780__$1,temp__5720__auto__,loaders))
,promesa.core.map.call(null,((function (seq__59800_59863,chunk__59801_59864,count__59802_59865,i__59803_59866,seq__59780,chunk__59781,count__59782,i__59783,pending_datasource_59870,vec__59804_59867,idx_59868,loader_promise_59869,pending_datasources_59859,pending_datasources_with_current_59860,pending_datasources_without_current_59861,promises_59862,vec__59797,loader,unsorted_pending_datasources,seq__59780__$1,temp__5720__auto__,loaders){
return (function (value){
var processor = (function (){var or__3949__auto__ = cljs.core.get_in.call(null,datasources,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(pending_datasource_59870),new cljs.core.Keyword(null,"processor","processor",-16217796)], null));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return ((function (seq__59800_59863,chunk__59801_59864,count__59802_59865,i__59803_59866,seq__59780,chunk__59781,count__59782,i__59783,or__3949__auto__,pending_datasource_59870,vec__59804_59867,idx_59868,loader_promise_59869,pending_datasources_59859,pending_datasources_with_current_59860,pending_datasources_without_current_59861,promises_59862,vec__59797,loader,unsorted_pending_datasources,seq__59780__$1,temp__5720__auto__,loaders){
return (function() { 
var G__59871__delegate = function (data,args){
return data;
};
var G__59871 = function (data,var_args){
var args = null;
if (arguments.length > 1) {
var G__59872__i = 0, G__59872__a = new Array(arguments.length -  1);
while (G__59872__i < G__59872__a.length) {G__59872__a[G__59872__i] = arguments[G__59872__i + 1]; ++G__59872__i;}
  args = new cljs.core.IndexedSeq(G__59872__a,0,null);
} 
return G__59871__delegate.call(this,data,args);};
G__59871.cljs$lang$maxFixedArity = 1;
G__59871.cljs$lang$applyTo = (function (arglist__59873){
var data = cljs.core.first(arglist__59873);
var args = cljs.core.rest(arglist__59873);
return G__59871__delegate(data,args);
});
G__59871.cljs$core$IFn$_invoke$arity$variadic = G__59871__delegate;
return G__59871;
})()
;
;})(seq__59800_59863,chunk__59801_59864,count__59802_59865,i__59803_59866,seq__59780,chunk__59781,count__59782,i__59783,or__3949__auto__,pending_datasource_59870,vec__59804_59867,idx_59868,loader_promise_59869,pending_datasources_59859,pending_datasources_with_current_59860,pending_datasources_without_current_59861,promises_59862,vec__59797,loader,unsorted_pending_datasources,seq__59780__$1,temp__5720__auto__,loaders))
}
})();
var c_key = keechma.toolbox.dataloader.core.cache_key.call(null,new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(pending_datasource_59870),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(pending_datasource_59870));
cljs.core.swap_BANG_.call(null,keechma.toolbox.dataloader.core.request_cache,medley.core.dissoc_in,c_key);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword("keechma.toolbox.dataloader.core","fulfilled","keechma.toolbox.dataloader.core/fulfilled",99196335),value)){
return cljs.core.async.put_BANG_.call(null,results_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.assoc.call(null,pending_datasource_59870,new cljs.core.Keyword(null,"value","value",305978217),value)], null));
} else {
keechma.toolbox.dataloader.core.cache_datasource_response_BANG_.call(null,app_db_atom,pending_datasource_59870,value);

return cljs.core.async.put_BANG_.call(null,results_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.assoc.call(null,pending_datasource_59870,new cljs.core.Keyword(null,"value","value",305978217),processor.call(null,value,cljs.core.assoc.call(null,pending_datasource_59870,new cljs.core.Keyword(null,"app-db","app-db",865606302),cljs.core.deref.call(null,app_db_atom))))], null));
}
});})(seq__59800_59863,chunk__59801_59864,count__59802_59865,i__59803_59866,seq__59780,chunk__59781,count__59782,i__59783,pending_datasource_59870,vec__59804_59867,idx_59868,loader_promise_59869,pending_datasources_59859,pending_datasources_with_current_59860,pending_datasources_without_current_59861,promises_59862,vec__59797,loader,unsorted_pending_datasources,seq__59780__$1,temp__5720__auto__,loaders))
,promesa.core.promise.call(null,loader_promise_59869)));


var G__59874 = seq__59800_59863;
var G__59875 = chunk__59801_59864;
var G__59876 = count__59802_59865;
var G__59877 = (i__59803_59866 + (1));
seq__59800_59863 = G__59874;
chunk__59801_59864 = G__59875;
count__59802_59865 = G__59876;
i__59803_59866 = G__59877;
continue;
} else {
var temp__5720__auto___59878__$1 = cljs.core.seq.call(null,seq__59800_59863);
if(temp__5720__auto___59878__$1){
var seq__59800_59879__$1 = temp__5720__auto___59878__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59800_59879__$1)){
var c__4351__auto___59880 = cljs.core.chunk_first.call(null,seq__59800_59879__$1);
var G__59881 = cljs.core.chunk_rest.call(null,seq__59800_59879__$1);
var G__59882 = c__4351__auto___59880;
var G__59883 = cljs.core.count.call(null,c__4351__auto___59880);
var G__59884 = (0);
seq__59800_59863 = G__59881;
chunk__59801_59864 = G__59882;
count__59802_59865 = G__59883;
i__59803_59866 = G__59884;
continue;
} else {
var vec__59807_59885 = cljs.core.first.call(null,seq__59800_59879__$1);
var idx_59886 = cljs.core.nth.call(null,vec__59807_59885,(0),null);
var loader_promise_59887 = cljs.core.nth.call(null,vec__59807_59885,(1),null);
var pending_datasource_59888 = cljs.core.get.call(null,pending_datasources_59859,idx_59886);
keechma.toolbox.dataloader.core.clear_cache_for_datasource_BANG_.call(null,app_db_atom,pending_datasource_59888);

if(((cljs.core.not_EQ_.call(null,keechma.toolbox.dataloader.core.fulfilled_loader,loader)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"cache-valid?","cache-valid?",2095228888).cljs$core$IFn$_invoke$arity$1(pending_datasource_59888))))){
cljs.core.swap_BANG_.call(null,app_db_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),keechma.toolbox.dataloader.core.id_key,new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(pending_datasource_59888),new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"pending","pending",-220036727));
} else {
}

promesa.core.error.call(null,((function (seq__59800_59863,chunk__59801_59864,count__59802_59865,i__59803_59866,seq__59780,chunk__59781,count__59782,i__59783,pending_datasource_59888,vec__59807_59885,idx_59886,loader_promise_59887,seq__59800_59879__$1,temp__5720__auto___59878__$1,pending_datasources_59859,pending_datasources_with_current_59860,pending_datasources_without_current_59861,promises_59862,vec__59797,loader,unsorted_pending_datasources,seq__59780__$1,temp__5720__auto__,loaders){
return (function (error){
var pending_datasource__$1 = cljs.core.get.call(null,pending_datasources_59859,idx_59886);
var c_key = keechma.toolbox.dataloader.core.cache_key.call(null,new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(pending_datasource__$1),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(pending_datasource__$1));
cljs.core.swap_BANG_.call(null,keechma.toolbox.dataloader.core.request_cache,medley.core.dissoc_in,c_key);

return cljs.core.async.put_BANG_.call(null,results_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.assoc.call(null,pending_datasource__$1,new cljs.core.Keyword(null,"error","error",-978969032),error)], null));
});})(seq__59800_59863,chunk__59801_59864,count__59802_59865,i__59803_59866,seq__59780,chunk__59781,count__59782,i__59783,pending_datasource_59888,vec__59807_59885,idx_59886,loader_promise_59887,seq__59800_59879__$1,temp__5720__auto___59878__$1,pending_datasources_59859,pending_datasources_with_current_59860,pending_datasources_without_current_59861,promises_59862,vec__59797,loader,unsorted_pending_datasources,seq__59780__$1,temp__5720__auto__,loaders))
,promesa.core.map.call(null,((function (seq__59800_59863,chunk__59801_59864,count__59802_59865,i__59803_59866,seq__59780,chunk__59781,count__59782,i__59783,pending_datasource_59888,vec__59807_59885,idx_59886,loader_promise_59887,seq__59800_59879__$1,temp__5720__auto___59878__$1,pending_datasources_59859,pending_datasources_with_current_59860,pending_datasources_without_current_59861,promises_59862,vec__59797,loader,unsorted_pending_datasources,seq__59780__$1,temp__5720__auto__,loaders){
return (function (value){
var processor = (function (){var or__3949__auto__ = cljs.core.get_in.call(null,datasources,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(pending_datasource_59888),new cljs.core.Keyword(null,"processor","processor",-16217796)], null));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return ((function (seq__59800_59863,chunk__59801_59864,count__59802_59865,i__59803_59866,seq__59780,chunk__59781,count__59782,i__59783,or__3949__auto__,pending_datasource_59888,vec__59807_59885,idx_59886,loader_promise_59887,seq__59800_59879__$1,temp__5720__auto___59878__$1,pending_datasources_59859,pending_datasources_with_current_59860,pending_datasources_without_current_59861,promises_59862,vec__59797,loader,unsorted_pending_datasources,seq__59780__$1,temp__5720__auto__,loaders){
return (function() { 
var G__59895__delegate = function (data,args){
return data;
};
var G__59895 = function (data,var_args){
var args = null;
if (arguments.length > 1) {
var G__59896__i = 0, G__59896__a = new Array(arguments.length -  1);
while (G__59896__i < G__59896__a.length) {G__59896__a[G__59896__i] = arguments[G__59896__i + 1]; ++G__59896__i;}
  args = new cljs.core.IndexedSeq(G__59896__a,0,null);
} 
return G__59895__delegate.call(this,data,args);};
G__59895.cljs$lang$maxFixedArity = 1;
G__59895.cljs$lang$applyTo = (function (arglist__59897){
var data = cljs.core.first(arglist__59897);
var args = cljs.core.rest(arglist__59897);
return G__59895__delegate(data,args);
});
G__59895.cljs$core$IFn$_invoke$arity$variadic = G__59895__delegate;
return G__59895;
})()
;
;})(seq__59800_59863,chunk__59801_59864,count__59802_59865,i__59803_59866,seq__59780,chunk__59781,count__59782,i__59783,or__3949__auto__,pending_datasource_59888,vec__59807_59885,idx_59886,loader_promise_59887,seq__59800_59879__$1,temp__5720__auto___59878__$1,pending_datasources_59859,pending_datasources_with_current_59860,pending_datasources_without_current_59861,promises_59862,vec__59797,loader,unsorted_pending_datasources,seq__59780__$1,temp__5720__auto__,loaders))
}
})();
var c_key = keechma.toolbox.dataloader.core.cache_key.call(null,new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(pending_datasource_59888),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(pending_datasource_59888));
cljs.core.swap_BANG_.call(null,keechma.toolbox.dataloader.core.request_cache,medley.core.dissoc_in,c_key);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword("keechma.toolbox.dataloader.core","fulfilled","keechma.toolbox.dataloader.core/fulfilled",99196335),value)){
return cljs.core.async.put_BANG_.call(null,results_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.assoc.call(null,pending_datasource_59888,new cljs.core.Keyword(null,"value","value",305978217),value)], null));
} else {
keechma.toolbox.dataloader.core.cache_datasource_response_BANG_.call(null,app_db_atom,pending_datasource_59888,value);

return cljs.core.async.put_BANG_.call(null,results_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.assoc.call(null,pending_datasource_59888,new cljs.core.Keyword(null,"value","value",305978217),processor.call(null,value,cljs.core.assoc.call(null,pending_datasource_59888,new cljs.core.Keyword(null,"app-db","app-db",865606302),cljs.core.deref.call(null,app_db_atom))))], null));
}
});})(seq__59800_59863,chunk__59801_59864,count__59802_59865,i__59803_59866,seq__59780,chunk__59781,count__59782,i__59783,pending_datasource_59888,vec__59807_59885,idx_59886,loader_promise_59887,seq__59800_59879__$1,temp__5720__auto___59878__$1,pending_datasources_59859,pending_datasources_with_current_59860,pending_datasources_without_current_59861,promises_59862,vec__59797,loader,unsorted_pending_datasources,seq__59780__$1,temp__5720__auto__,loaders))
,promesa.core.promise.call(null,loader_promise_59887)));


var G__59901 = cljs.core.next.call(null,seq__59800_59879__$1);
var G__59902 = null;
var G__59903 = (0);
var G__59904 = (0);
seq__59800_59863 = G__59901;
chunk__59801_59864 = G__59902;
count__59802_59865 = G__59903;
i__59803_59866 = G__59904;
continue;
}
} else {
}
}
break;
}


var G__59905 = cljs.core.next.call(null,seq__59780__$1);
var G__59906 = null;
var G__59907 = (0);
var G__59908 = (0);
seq__59780 = G__59905;
chunk__59781 = G__59906;
count__59782 = G__59907;
i__59783 = G__59908;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.core.List.EMPTY;
keechma.toolbox.dataloader.core.has_pending_datasources_QMARK_ = (function keechma$toolbox$dataloader$core$has_pending_datasources_QMARK_(app_db){
return !(cljs.core.empty_QMARK_.call(null,cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword("keechma.toolbox.dataloader.core","pending","keechma.toolbox.dataloader.core/pending",1357461542)], null))));
});
keechma.toolbox.dataloader.core.store_datasource_BANG_ = (function keechma$toolbox$dataloader$core$store_datasource_BANG_(app_db_atom,edb_schema,payload){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("keechma.toolbox.dataloader.core","fulfilled","keechma.toolbox.dataloader.core/fulfilled",99196335),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(payload))){
return cljs.core.reset_BANG_.call(null,app_db_atom,keechma.toolbox.dataloader.core.remove_pending_datasource.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(payload)));
} else {
var app_db = cljs.core.deref.call(null,app_db_atom);
var datasource_key = new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(payload);
var value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(payload);
var value_keys = ((cljs.core.map_QMARK_.call(null,value))?cljs.core.set.call(null,cljs.core.keys.call(null,value)):cljs.core.PersistentHashSet.EMPTY);
var vec__59910 = ((cljs.core._EQ_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"meta","meta",1499536964),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),value_keys))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(value),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(value)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,cljs.core.PersistentArrayMap.EMPTY], null));
var res_data = cljs.core.nth.call(null,vec__59910,(0),null);
var res_meta = cljs.core.nth.call(null,vec__59910,(1),null);
return cljs.core.reset_BANG_.call(null,app_db_atom,keechma.toolbox.dataloader.core.remove_pending_datasource.call(null,keechma.toolbox.dataloader.core.save_data.call(null,keechma.toolbox.dataloader.core.save_meta.call(null,app_db,datasource_key,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"completed","completed",-486056503),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(payload),new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"meta","meta",1499536964),res_meta,new cljs.core.Keyword(null,"prev","prev",-1597069226),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),null,new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"params","params",710516235),null], null),medley.core.dissoc_in.call(null,new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(payload),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"prev","prev",-1597069226)], null)))], null)),edb_schema,payload,res_data),datasource_key));
}
});
keechma.toolbox.dataloader.core.start_dependent_loaders_BANG_ = (function keechma$toolbox$dataloader$core$start_dependent_loaders_BANG_(app_db_atom,app_datasources,datasources,invalid_datasources,results_chan,edb_schema,context){
var app_db = cljs.core.deref.call(null,app_db_atom);
var statuses = cljs.core.reduce.call(null,((function (app_db){
return (function (acc,datasource_key){
return cljs.core.assoc.call(null,acc,datasource_key,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(keechma.toolbox.dataloader.core.get_meta.call(null,app_db,datasource_key)));
});})(app_db))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys.call(null,app_datasources));
var fulfilled = cljs.core.reduce.call(null,((function (app_db,statuses){
return (function (acc,p__59966){
var vec__59967 = p__59966;
var datasource_key = cljs.core.nth.call(null,vec__59967,(0),null);
var val = cljs.core.nth.call(null,vec__59967,(1),null);
if(((cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword("keechma.toolbox.dataloader.core","pending","keechma.toolbox.dataloader.core/pending",1357461542)], null)),datasource_key)) && (cljs.core.empty_QMARK_.call(null,clojure.set.intersection.call(null,cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword("keechma.toolbox.dataloader.core","pending","keechma.toolbox.dataloader.core/pending",1357461542)], null)),cljs.core.set.call(null,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(val))))))){
return cljs.core.assoc.call(null,acc,datasource_key,val);
} else {
return acc;
}
});})(app_db,statuses))
,cljs.core.PersistentArrayMap.EMPTY,datasources);
return keechma.toolbox.dataloader.core.start_loaders_BANG_.call(null,app_db_atom,app_datasources,fulfilled,invalid_datasources,results_chan,edb_schema,context);
});
keechma.toolbox.dataloader.core.store_datasource_error_BANG_ = (function keechma$toolbox$dataloader$core$store_datasource_error_BANG_(app_db,edb_schema,payload){
var datasource_key = new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(payload);
return keechma.toolbox.dataloader.core.remove_pending_datasource.call(null,keechma.toolbox.dataloader.core.save_data.call(null,keechma.toolbox.dataloader.core.save_meta.call(null,app_db,datasource_key,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"prev","prev",-1597069226),null,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(payload),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(payload)], null)),edb_schema,payload,null),datasource_key);
});
keechma.toolbox.dataloader.core.mark_dependent_errors_BANG_ = (function keechma$toolbox$dataloader$core$mark_dependent_errors_BANG_(app_db,app_datasources,datasources,edb_schema,payload){
return cljs.core.reduce.call(null,(function (acc,p__59983){
var vec__59984 = p__59983;
var datasource_key = cljs.core.nth.call(null,vec__59984,(0),null);
var val = cljs.core.nth.call(null,vec__59984,(1),null);
return keechma.toolbox.dataloader.core.remove_pending_datasource.call(null,keechma.toolbox.dataloader.core.save_data.call(null,keechma.toolbox.dataloader.core.save_meta.call(null,app_db,datasource_key,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"prev","prev",-1597069226),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(payload)], null)),edb_schema,val,null),datasource_key);
}),app_db,datasources);
});
keechma.toolbox.dataloader.core.deps_fulfilled_QMARK_ = (function keechma$toolbox$dataloader$core$deps_fulfilled_QMARK_(app_db,datasources_plan,datasource){
return cljs.core.reduce.call(null,(function (fulfilled_QMARK_,dep_key){
var dep = cljs.core.get.call(null,datasources_plan,dep_key);
var and__3938__auto__ = fulfilled_QMARK_;
if(cljs.core.truth_(and__3938__auto__)){
var and__3938__auto____$1 = new cljs.core.Keyword(null,"deps-fulfilled?","deps-fulfilled?",-1634962438).cljs$core$IFn$_invoke$arity$1(dep);
if(cljs.core.truth_(and__3938__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"reload?","reload?",-1559406964).cljs$core$IFn$_invoke$arity$1(dep));
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
}),true,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(datasource));
});
keechma.toolbox.dataloader.core.datasources_load_plan = (function keechma$toolbox$dataloader$core$datasources_load_plan(app_db,datasources,datasources_order,edb_schema,invalid_datasources){
var datasources_plan = cljs.core.PersistentArrayMap.EMPTY;
var datasources_order__$1 = datasources_order;
while(true){
if(cljs.core.seq.call(null,datasources_order__$1)){
var datasource_key = cljs.core.first.call(null,datasources_order__$1);
var datasource = cljs.core.get.call(null,datasources,datasource_key);
var datasource_meta = keechma.toolbox.dataloader.core.get_meta.call(null,app_db,datasource_key);
var datasource_deps_fulfilled_QMARK_ = keechma.toolbox.dataloader.core.deps_fulfilled_QMARK_.call(null,app_db,datasources_plan,datasource);
var new_datasource_params = keechma.toolbox.dataloader.core.datasource_params.call(null,datasources,datasource_key,datasource,app_db,edb_schema);
var manually_invalidated_QMARK_ = cljs.core.contains_QMARK_.call(null,invalid_datasources,datasource_key);
var reload_QMARK_ = ((((cljs.core.not.call(null,datasource_deps_fulfilled_QMARK_)) || (manually_invalidated_QMARK_)))?true:!(((((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(datasource_meta),new_datasource_params)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword("keechma.toolbox.dataloader.core","ignore","keechma.toolbox.dataloader.core/ignore",-1113981850),new_datasource_params)))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"completed","completed",-486056503),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(datasource_meta))))));
if((datasource == null)){
throw cljs.core.ex_info.call(null,["Missing datasource ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(datasource_key)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("keechma.toolbox.dataloader.core","missing-datasource","keechma.toolbox.dataloader.core/missing-datasource",8830817)], null));
} else {
}

var G__59987 = cljs.core.assoc.call(null,datasources_plan,datasource_key,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"deps-fulfilled?","deps-fulfilled?",-1634962438),datasource_deps_fulfilled_QMARK_,new cljs.core.Keyword(null,"reload?","reload?",-1559406964),reload_QMARK_,new cljs.core.Keyword(null,"manually-invalidated?","manually-invalidated?",-1564605583),manually_invalidated_QMARK_], null));
var G__59988 = cljs.core.rest.call(null,datasources_order__$1);
datasources_plan = G__59987;
datasources_order__$1 = G__59988;
continue;
} else {
return datasources_plan;
}
break;
}
});
keechma.toolbox.dataloader.core.clear_cache_for_invalidated_datasources_BANG_ = (function keechma$toolbox$dataloader$core$clear_cache_for_invalidated_datasources_BANG_(app_db_atom,invalid_datasources){
if(cljs.core.seq.call(null,invalid_datasources)){
var app_db = cljs.core.deref.call(null,app_db_atom);
var app_db_SINGLEQUOTE_ = cljs.core.reduce.call(null,((function (app_db){
return (function (acc,k){
return medley.core.dissoc_in.call(null,acc,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword("keechma.toolbox.dataloader.core","req-cache","keechma.toolbox.dataloader.core/req-cache",-1946273320),k], null));
});})(app_db))
,app_db,invalid_datasources);
return cljs.core.reset_BANG_.call(null,app_db_atom,app_db_SINGLEQUOTE_);
} else {
return null;
}
});
keechma.toolbox.dataloader.core.make_dataloader = (function keechma$toolbox$dataloader$core$make_dataloader(var_args){
var G__59995 = arguments.length;
switch (G__59995) {
case 1:
return keechma.toolbox.dataloader.core.make_dataloader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.toolbox.dataloader.core.make_dataloader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.toolbox.dataloader.core.make_dataloader.cljs$core$IFn$_invoke$arity$1 = (function (datasources){
return keechma.toolbox.dataloader.core.make_dataloader.call(null,datasources,cljs.core.PersistentArrayMap.EMPTY);
});

keechma.toolbox.dataloader.core.make_dataloader.cljs$core$IFn$_invoke$arity$2 = (function (datasources,edb_schema){
var g = cljs.core.reduce.call(null,(function (acc,p__59996){
var vec__59997 = p__59996;
var key = cljs.core.nth.call(null,vec__59997,(0),null);
var val = cljs.core.nth.call(null,vec__59997,(1),null);
var deps = new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(val);
return cljs.core.reduce.call(null,((function (deps,vec__59997,key,val){
return (function (p1__59989_SHARP_,p2__59990_SHARP_){
return com.stuartsierra.dependency.depend.call(null,p1__59989_SHARP_,key,p2__59990_SHARP_);
});})(deps,vec__59997,key,val))
,acc,deps);
}),com.stuartsierra.dependency.graph.call(null),datasources);
var g_nodes = com.stuartsierra.dependency.nodes.call(null,g);
var independent = cljs.core.filter.call(null,((function (g,g_nodes){
return (function (p1__59991_SHARP_){
return !(cljs.core.contains_QMARK_.call(null,g_nodes,p1__59991_SHARP_));
});})(g,g_nodes))
,cljs.core.keys.call(null,datasources));
var datasources_order = cljs.core.concat.call(null,independent,com.stuartsierra.dependency.topo_sort.call(null,g));
var active_dataloader_id_atom = cljs.core.atom.call(null,null);
return ((function (g,g_nodes,independent,datasources_order,active_dataloader_id_atom){
return (function (app_db_atom,p__60000){
var map__60001 = p__60000;
var map__60001__$1 = ((((!((map__60001 == null)))?(((((map__60001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60001):map__60001);
var context = cljs.core.get.call(null,map__60001__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var invalid_datasources = cljs.core.get.call(null,map__60001__$1,new cljs.core.Keyword(null,"invalid-datasources","invalid-datasources",1794814717));
var dataloader_id = cljs.core.gensym.call(null,new cljs.core.Keyword(null,"dataloader","dataloader",1084918675));
keechma.toolbox.dataloader.core.clear_cache_for_invalidated_datasources_BANG_.call(null,app_db_atom,invalid_datasources);

cljs.core.reset_BANG_.call(null,active_dataloader_id_atom,dataloader_id);

return promesa.core.promise.call(null,((function (dataloader_id,map__60001,map__60001__$1,context,invalid_datasources,g,g_nodes,independent,datasources_order,active_dataloader_id_atom){
return (function (resolve,reject,on_cancel){
var running_QMARK_ = cljs.core.atom.call(null,true);
var results_chan = cljs.core.async.chan.call(null);
var plan = keechma.toolbox.dataloader.core.datasources_load_plan.call(null,cljs.core.deref.call(null,app_db_atom),datasources,datasources_order,edb_schema,invalid_datasources);
var start_nodes = cljs.core.filter.call(null,((function (running_QMARK_,results_chan,plan,dataloader_id,map__60001,map__60001__$1,context,invalid_datasources,g,g_nodes,independent,datasources_order,active_dataloader_id_atom){
return (function (p1__59992_SHARP_){
var and__3938__auto__ = new cljs.core.Keyword(null,"reload?","reload?",-1559406964).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,plan,p1__59992_SHARP_));
if(cljs.core.truth_(and__3938__auto__)){
return new cljs.core.Keyword(null,"deps-fulfilled?","deps-fulfilled?",-1634962438).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,plan,p1__59992_SHARP_));
} else {
return and__3938__auto__;
}
});})(running_QMARK_,results_chan,plan,dataloader_id,map__60001,map__60001__$1,context,invalid_datasources,g,g_nodes,independent,datasources_order,active_dataloader_id_atom))
,cljs.core.keys.call(null,plan));
if(cljs.core.fn_QMARK_.call(null,on_cancel)){
on_cancel.call(null,((function (running_QMARK_,results_chan,plan,start_nodes,dataloader_id,map__60001,map__60001__$1,context,invalid_datasources,g,g_nodes,independent,datasources_order,active_dataloader_id_atom){
return (function (){
return cljs.core.swap_BANG_.call(null,running_QMARK_,cljs.core.not);
});})(running_QMARK_,results_chan,plan,start_nodes,dataloader_id,map__60001,map__60001__$1,context,invalid_datasources,g,g_nodes,independent,datasources_order,active_dataloader_id_atom))
);
} else {
}

keechma.toolbox.dataloader.core.mark_pending_BANG_.call(null,app_db_atom,edb_schema,cljs.core.select_keys.call(null,datasources,cljs.core.filter.call(null,((function (running_QMARK_,results_chan,plan,start_nodes,dataloader_id,map__60001,map__60001__$1,context,invalid_datasources,g,g_nodes,independent,datasources_order,active_dataloader_id_atom){
return (function (p1__59993_SHARP_){
return new cljs.core.Keyword(null,"reload?","reload?",-1559406964).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,plan,p1__59993_SHARP_));
});})(running_QMARK_,results_chan,plan,start_nodes,dataloader_id,map__60001,map__60001__$1,context,invalid_datasources,g,g_nodes,independent,datasources_order,active_dataloader_id_atom))
,cljs.core.keys.call(null,plan))));

keechma.toolbox.dataloader.core.start_loaders_BANG_.call(null,app_db_atom,datasources,cljs.core.select_keys.call(null,datasources,start_nodes),invalid_datasources,results_chan,edb_schema,context);

var c__58857__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58857__auto__,running_QMARK_,results_chan,plan,start_nodes,dataloader_id,map__60001,map__60001__$1,context,invalid_datasources,g,g_nodes,independent,datasources_order,active_dataloader_id_atom){
return (function (){
var f__58858__auto__ = (function (){var switch__24619__auto__ = ((function (c__58857__auto__,running_QMARK_,results_chan,plan,start_nodes,dataloader_id,map__60001,map__60001__$1,context,invalid_datasources,g,g_nodes,independent,datasources_order,active_dataloader_id_atom){
return (function (state_60075){
var state_val_60076 = (state_60075[(1)]);
if((state_val_60076 === (7))){
var inst_60012 = cljs.core.deref.call(null,app_db_atom);
var inst_60013 = keechma.toolbox.dataloader.core.has_pending_datasources_QMARK_.call(null,inst_60012);
var state_60075__$1 = state_60075;
if(cljs.core.truth_(inst_60013)){
var statearr_60077_60122 = state_60075__$1;
(statearr_60077_60122[(1)] = (10));

} else {
var statearr_60078_60123 = state_60075__$1;
(statearr_60078_60123[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60076 === (20))){
var state_60075__$1 = state_60075;
var statearr_60079_60124 = state_60075__$1;
(statearr_60079_60124[(2)] = null);

(statearr_60079_60124[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60076 === (1))){
var state_60075__$1 = state_60075;
var statearr_60080_60125 = state_60075__$1;
(statearr_60080_60125[(2)] = null);

(statearr_60080_60125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60076 === (24))){
var state_60075__$1 = state_60075;
var statearr_60081_60126 = state_60075__$1;
(statearr_60081_60126[(2)] = null);

(statearr_60081_60126[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60076 === (4))){
var inst_60006 = cljs.core.deref.call(null,active_dataloader_id_atom);
var inst_60007 = cljs.core._EQ_.call(null,dataloader_id,inst_60006);
var state_60075__$1 = state_60075;
var statearr_60082_60127 = state_60075__$1;
(statearr_60082_60127[(2)] = inst_60007);

(statearr_60082_60127[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60076 === (15))){
var inst_60024 = (state_60075[(7)]);
var inst_60024__$1 = cljs.core.deref.call(null,running_QMARK_);
var state_60075__$1 = (function (){var statearr_60083 = state_60075;
(statearr_60083[(7)] = inst_60024__$1);

return statearr_60083;
})();
if(cljs.core.truth_(inst_60024__$1)){
var statearr_60084_60128 = state_60075__$1;
(statearr_60084_60128[(1)] = (16));

} else {
var statearr_60085_60129 = state_60075__$1;
(statearr_60085_60129[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60076 === (21))){
var inst_60037 = (state_60075[(2)]);
var state_60075__$1 = state_60075;
var statearr_60086_60130 = state_60075__$1;
(statearr_60086_60130[(2)] = inst_60037);

(statearr_60086_60130[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60076 === (13))){
var inst_60021 = (state_60075[(8)]);
var inst_60019 = (state_60075[(2)]);
var inst_60020 = cljs.core.nth.call(null,inst_60019,(0),null);
var inst_60021__$1 = cljs.core.nth.call(null,inst_60019,(1),null);
var inst_60022 = new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(inst_60021__$1);
var inst_60023 = com.stuartsierra.dependency.transitive_dependents.call(null,g,inst_60022);
var state_60075__$1 = (function (){var statearr_60087 = state_60075;
(statearr_60087[(8)] = inst_60021__$1);

(statearr_60087[(9)] = inst_60023);

return statearr_60087;
})();
var G__60088_60131 = inst_60020;
var G__60088_60132__$1 = (((G__60088_60131 instanceof cljs.core.Keyword))?G__60088_60131.fqn:null);
switch (G__60088_60132__$1) {
case "ok":
var statearr_60089_60134 = state_60075__$1;
(statearr_60089_60134[(1)] = (15));


break;
case "error":
var statearr_60090_60135 = state_60075__$1;
(statearr_60090_60135[(1)] = (22));


break;
default:
var statearr_60091_60136 = state_60075__$1;
(statearr_60091_60136[(1)] = (26));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60076 === (22))){
var state_60075__$1 = state_60075;
if(goog.DEBUG){
var statearr_60092_60137 = state_60075__$1;
(statearr_60092_60137[(1)] = (23));

} else {
var statearr_60093_60138 = state_60075__$1;
(statearr_60093_60138[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60076 === (6))){
var inst_60010 = (state_60075[(2)]);
var state_60075__$1 = state_60075;
if(cljs.core.truth_(inst_60010)){
var statearr_60094_60139 = state_60075__$1;
(statearr_60094_60139[(1)] = (7));

} else {
var statearr_60095_60140 = state_60075__$1;
(statearr_60095_60140[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60076 === (25))){
var inst_60021 = (state_60075[(8)]);
var inst_60023 = (state_60075[(9)]);
var inst_60048 = (state_60075[(2)]);
var inst_60049 = cljs.core.deref.call(null,app_db_atom);
var inst_60050 = keechma.toolbox.dataloader.core.store_datasource_error_BANG_.call(null,inst_60049,edb_schema,inst_60021);
var inst_60051 = cljs.core.select_keys.call(null,datasources,inst_60023);
var inst_60052 = keechma.toolbox.dataloader.core.mark_dependent_errors_BANG_.call(null,inst_60050,datasources,inst_60051,edb_schema,inst_60021);
var inst_60053 = cljs.core.reset_BANG_.call(null,app_db_atom,inst_60052);
var state_60075__$1 = (function (){var statearr_60096 = state_60075;
(statearr_60096[(10)] = inst_60048);

return statearr_60096;
})();
var statearr_60097_60141 = state_60075__$1;
(statearr_60097_60141[(2)] = inst_60053);

(statearr_60097_60141[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60076 === (17))){
var inst_60024 = (state_60075[(7)]);
var state_60075__$1 = state_60075;
var statearr_60098_60142 = state_60075__$1;
(statearr_60098_60142[(2)] = inst_60024);

(statearr_60098_60142[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60076 === (3))){
var inst_60073 = (state_60075[(2)]);
var state_60075__$1 = state_60075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60075__$1,inst_60073);
} else {
if((state_val_60076 === (12))){
var inst_60063 = (state_60075[(2)]);
var state_60075__$1 = state_60075;
var statearr_60099_60147 = state_60075__$1;
(statearr_60099_60147[(2)] = inst_60063);

(statearr_60099_60147[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60076 === (2))){
var inst_60004 = (state_60075[(11)]);
var inst_60004__$1 = cljs.core.deref.call(null,running_QMARK_);
var state_60075__$1 = (function (){var statearr_60100 = state_60075;
(statearr_60100[(11)] = inst_60004__$1);

return statearr_60100;
})();
if(cljs.core.truth_(inst_60004__$1)){
var statearr_60101_60148 = state_60075__$1;
(statearr_60101_60148[(1)] = (4));

} else {
var statearr_60102_60149 = state_60075__$1;
(statearr_60102_60149[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60076 === (23))){
var inst_60021 = (state_60075[(8)]);
var inst_60040 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_60021);
var inst_60041 = inst_60040.message;
var inst_60042 = new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(inst_60021);
var inst_60043 = ["Dataloader error in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_60042)," datasource (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_60041),")"].join('');
var inst_60044 = inst_60040.message = inst_60043;
var inst_60045 = console.error(inst_60040);
var state_60075__$1 = (function (){var statearr_60103 = state_60075;
(statearr_60103[(12)] = inst_60044);

return statearr_60103;
})();
var statearr_60104_60153 = state_60075__$1;
(statearr_60104_60153[(2)] = inst_60045);

(statearr_60104_60153[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60076 === (19))){
var inst_60021 = (state_60075[(8)]);
var inst_60023 = (state_60075[(9)]);
var inst_60032 = keechma.toolbox.dataloader.core.store_datasource_BANG_.call(null,app_db_atom,edb_schema,inst_60021);
var inst_60033 = cljs.core.select_keys.call(null,datasources,inst_60023);
var inst_60034 = keechma.toolbox.dataloader.core.start_dependent_loaders_BANG_.call(null,app_db_atom,datasources,inst_60033,invalid_datasources,results_chan,edb_schema,context);
var state_60075__$1 = (function (){var statearr_60105 = state_60075;
(statearr_60105[(13)] = inst_60032);

return statearr_60105;
})();
var statearr_60106_60155 = state_60075__$1;
(statearr_60106_60155[(2)] = inst_60034);

(statearr_60106_60155[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60076 === (11))){
var inst_60060 = cljs.core.deref.call(null,app_db_atom);
var inst_60061 = resolve.call(null,inst_60060);
var state_60075__$1 = state_60075;
var statearr_60107_60157 = state_60075__$1;
(statearr_60107_60157[(2)] = inst_60061);

(statearr_60107_60157[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60076 === (9))){
var inst_60071 = (state_60075[(2)]);
var state_60075__$1 = state_60075;
var statearr_60108_60160 = state_60075__$1;
(statearr_60108_60160[(2)] = inst_60071);

(statearr_60108_60160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60076 === (5))){
var inst_60004 = (state_60075[(11)]);
var state_60075__$1 = state_60075;
var statearr_60109_60163 = state_60075__$1;
(statearr_60109_60163[(2)] = inst_60004);

(statearr_60109_60163[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60076 === (14))){
var inst_60057 = (state_60075[(2)]);
var state_60075__$1 = (function (){var statearr_60110 = state_60075;
(statearr_60110[(14)] = inst_60057);

return statearr_60110;
})();
var statearr_60111_60165 = state_60075__$1;
(statearr_60111_60165[(2)] = null);

(statearr_60111_60165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60076 === (26))){
var state_60075__$1 = state_60075;
var statearr_60112_60169 = state_60075__$1;
(statearr_60112_60169[(2)] = null);

(statearr_60112_60169[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60076 === (16))){
var inst_60026 = cljs.core.deref.call(null,active_dataloader_id_atom);
var inst_60027 = cljs.core._EQ_.call(null,dataloader_id,inst_60026);
var state_60075__$1 = state_60075;
var statearr_60113_60171 = state_60075__$1;
(statearr_60113_60171[(2)] = inst_60027);

(statearr_60113_60171[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60076 === (10))){
var state_60075__$1 = state_60075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60075__$1,(13),results_chan);
} else {
if((state_val_60076 === (18))){
var inst_60030 = (state_60075[(2)]);
var state_60075__$1 = state_60075;
if(cljs.core.truth_(inst_60030)){
var statearr_60114_60175 = state_60075__$1;
(statearr_60114_60175[(1)] = (19));

} else {
var statearr_60115_60176 = state_60075__$1;
(statearr_60115_60176[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60076 === (8))){
var inst_60065 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_60066 = [new cljs.core.Keyword("keechma.toolbox.dataloader.core","new-dataloader-started","keechma.toolbox.dataloader.core/new-dataloader-started",-613981380)];
var inst_60067 = cljs.core.PersistentHashMap.fromArrays(inst_60065,inst_60066);
var inst_60068 = cljs.core.ex_info.call(null,"New dataloader started",inst_60067);
var inst_60069 = reject.call(null,inst_60068);
var state_60075__$1 = state_60075;
var statearr_60116_60180 = state_60075__$1;
(statearr_60116_60180[(2)] = inst_60069);

(statearr_60116_60180[(1)] = (9));


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
});})(c__58857__auto__,running_QMARK_,results_chan,plan,start_nodes,dataloader_id,map__60001,map__60001__$1,context,invalid_datasources,g,g_nodes,independent,datasources_order,active_dataloader_id_atom))
;
return ((function (switch__24619__auto__,c__58857__auto__,running_QMARK_,results_chan,plan,start_nodes,dataloader_id,map__60001,map__60001__$1,context,invalid_datasources,g,g_nodes,independent,datasources_order,active_dataloader_id_atom){
return (function() {
var keechma$toolbox$dataloader$core$state_machine__24620__auto__ = null;
var keechma$toolbox$dataloader$core$state_machine__24620__auto____0 = (function (){
var statearr_60117 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60117[(0)] = keechma$toolbox$dataloader$core$state_machine__24620__auto__);

(statearr_60117[(1)] = (1));

return statearr_60117;
});
var keechma$toolbox$dataloader$core$state_machine__24620__auto____1 = (function (state_60075){
while(true){
var ret_value__24621__auto__ = (function (){try{while(true){
var result__24622__auto__ = switch__24619__auto__.call(null,state_60075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24622__auto__;
}
break;
}
}catch (e60118){if((e60118 instanceof Object)){
var ex__24623__auto__ = e60118;
var statearr_60119_60183 = state_60075;
(statearr_60119_60183[(5)] = ex__24623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60188 = state_60075;
state_60075 = G__60188;
continue;
} else {
return ret_value__24621__auto__;
}
break;
}
});
keechma$toolbox$dataloader$core$state_machine__24620__auto__ = function(state_60075){
switch(arguments.length){
case 0:
return keechma$toolbox$dataloader$core$state_machine__24620__auto____0.call(this);
case 1:
return keechma$toolbox$dataloader$core$state_machine__24620__auto____1.call(this,state_60075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keechma$toolbox$dataloader$core$state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$toolbox$dataloader$core$state_machine__24620__auto____0;
keechma$toolbox$dataloader$core$state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$toolbox$dataloader$core$state_machine__24620__auto____1;
return keechma$toolbox$dataloader$core$state_machine__24620__auto__;
})()
;})(switch__24619__auto__,c__58857__auto__,running_QMARK_,results_chan,plan,start_nodes,dataloader_id,map__60001,map__60001__$1,context,invalid_datasources,g,g_nodes,independent,datasources_order,active_dataloader_id_atom))
})();
var state__58859__auto__ = (function (){var statearr_60120 = f__58858__auto__.call(null);
(statearr_60120[(6)] = c__58857__auto__);

return statearr_60120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58859__auto__);
});})(c__58857__auto__,running_QMARK_,results_chan,plan,start_nodes,dataloader_id,map__60001,map__60001__$1,context,invalid_datasources,g,g_nodes,independent,datasources_order,active_dataloader_id_atom))
);

return c__58857__auto__;
});})(dataloader_id,map__60001,map__60001__$1,context,invalid_datasources,g,g_nodes,independent,datasources_order,active_dataloader_id_atom))
);
});
;})(g,g_nodes,independent,datasources_order,active_dataloader_id_atom))
});

keechma.toolbox.dataloader.core.make_dataloader.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=core.js.map?rel=1563552885546
