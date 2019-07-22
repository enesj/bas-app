// Compiled by ClojureScript 1.10.339 {}
goog.provide('entitydb.core');
goog.require('cljs.core');
goog.require('entitydb.util');
goog.require('entitydb.relations');
goog.require('clojure.set');
entitydb.core.meta_store = new cljs.core.Keyword(null,"__meta-store__","__meta-store__",2129600038);
entitydb.core.relations = new cljs.core.Keyword("entitydb","relations","entitydb/relations",1713241413);
/**
 * Inserts an item into the EntityDB collection.
 * 
 *   ```clojure
 *   (def schema {:foos {:id :id}})
 *   (def entity-db-v1 {})
 * 
 *   (def item {:id 1 :name "Foo"})
 *   (def item-meta {:is-loading false})
 * 
 *   (def entity-db-v2 (insert-item schema entity-db-v1 :foos item item-meta))
 *   ;; Returns the new version of the entity-db with the item inserted
 *   ;; inserted into the store
 *   ```
 *   
 */
entitydb.core.insert_item = (function entitydb$core$insert_item(var_args){
var G__59267 = arguments.length;
switch (G__59267) {
case 4:
return entitydb.core.insert_item.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return entitydb.core.insert_item.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

entitydb.core.insert_item.cljs$core$IFn$_invoke$arity$4 = (function (schema,db,entity_kw,item){
return entitydb.core.insert_item.call(null,schema,db,entity_kw,item,null);
});

entitydb.core.insert_item.cljs$core$IFn$_invoke$arity$5 = (function (schema,db,entity_kw,item,meta){
var id = entitydb.util.get_item_id.call(null,schema,entity_kw,item);
var relations = entitydb.relations.get_relations.call(null,schema,entity_kw);
var db_with_inserted_relations = entitydb.core.insert_related.call(null,schema,db,relations,entity_kw,id,item);
var processed_item = entitydb.relations.remove_related_from_item.call(null,cljs.core.keys.call(null,relations),entitydb.util.call_middleware_set.call(null,schema,entity_kw,item));
var merged_item = cljs.core.merge.call(null,(function (){var or__3949__auto__ = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,new cljs.core.Keyword(null,"store","store",1512230022),id], null));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),processed_item);
return cljs.core.assoc_in.call(null,entitydb.core.insert_meta.call(null,db_with_inserted_relations,entity_kw,id,meta),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,new cljs.core.Keyword(null,"store","store",1512230022),id], null),merged_item);
});

entitydb.core.insert_item.cljs$lang$maxFixedArity = 5;

/**
 * Inserts an entity into the EntityDB if the entity is not nil.
 */
entitydb.core.insert_item_when_not_nil = (function entitydb$core$insert_item_when_not_nil(schema,db,entity_kw,item){
if(!((item == null))){
return entitydb.core.insert_item.call(null,schema,db,entity_kw,item);
} else {
return db;
}
});
/**
 * Inserts an item into the EntityDB, and references it from the named item slot.
 * 
 *   Item will be stored in the internal store, and named item slot will contain only 
 *   the identity of the item.
 * 
 *   ```clojure
 *   (def entity-db-v1 {})
 *   (def schema {:foos {:id :id}})
 * 
 *   (def entity-db-v2 (insert-named-item schema entity-db-v1 :foos :current {:id 1 :name "foo"}))
 *   ;; Returns the new version of the entity-db with the entity saved in the store and
 *   ;; referenced from the `:current` named item slot.
 * 
 *   (get-named-item schema entity-db-v2 :foos :current)
 *   ;; Returns the entity referenced from the `:current` named slot.
 * 
 *   ```
 *   
 */
entitydb.core.insert_named_item = (function entitydb$core$insert_named_item(var_args){
var G__59270 = arguments.length;
switch (G__59270) {
case 5:
return entitydb.core.insert_named_item.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return entitydb.core.insert_named_item.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

entitydb.core.insert_named_item.cljs$core$IFn$_invoke$arity$5 = (function (schema,db,entity_kw,collection_key,item){
return entitydb.core.insert_named_item.call(null,schema,db,entity_kw,collection_key,item,null);
});

entitydb.core.insert_named_item.cljs$core$IFn$_invoke$arity$6 = (function (schema,db,entity_kw,collection_key,item,meta){
if((((item == null)) && ((meta == null)))){
return db;
} else {
var id = entitydb.util.get_item_id.call(null,schema,entity_kw,item);
var meta_key = (((item == null))?collection_key:id);
return entitydb.core.insert_meta.call(null,cljs.core.partial.call(null,entitydb.core.insert_item_when_not_nil,schema).call(null,cljs.core.assoc_in.call(null,entitydb.core.remove_meta.call(null,db,entity_kw,collection_key),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,new cljs.core.Keyword(null,"c-one","c-one",-1168064923),collection_key], null),id),entity_kw,item),entity_kw,meta_key,meta);
}
});

entitydb.core.insert_named_item.cljs$lang$maxFixedArity = 6;

/**
 * Inserts a collection of items into the EntityDB. Each item will be
 *   stored in the internal store map, and the collection will be stored as a vector
 *   of entity identities.
 * 
 *   ```clojure
 *   (def entity-db-v1 {})
 *   (def schema {:foos {:id :id}})
 * 
 *   (def collection [{:id 1 :name "foo"} {:id 2 :name "bar"}])
 * 
 *   (def entity-db-v2 (insert-collection schema entity-db-v1 :foos :list collection))
 *   ;; Returns the new version of entity db. Each item will be stored
 *   ;; in the internal store map and collection will contain only the
 *   ;; item ids.
 * 
 *   (get-collection schema entity-db-v2 :foos :list)
 *   ;; Returns a collection of items named `:list`. Although internally collections
 *   ;; stores only a vector of ids, this function will return a vector of entities.
 *   ;;
 *   ;; [{:id 1 :name "foo"} {:id 2 :name "bar"}]
 *   
 *   ```
 *   
 */
entitydb.core.insert_collection = (function entitydb$core$insert_collection(var_args){
var G__59273 = arguments.length;
switch (G__59273) {
case 5:
return entitydb.core.insert_collection.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return entitydb.core.insert_collection.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

entitydb.core.insert_collection.cljs$core$IFn$_invoke$arity$5 = (function (schema,db,entity_kw,collection_key,data){
return entitydb.core.insert_collection.call(null,schema,db,entity_kw,collection_key,data,null);
});

entitydb.core.insert_collection.cljs$core$IFn$_invoke$arity$6 = (function (schema,db,entity_kw,collection_key,data,meta){
if(((cljs.core.empty_QMARK_.call(null,data)) && ((meta == null)))){
return entitydb.core.remove_collection.call(null,db,entity_kw,collection_key);
} else {
var id_fn = entitydb.util.get_id_fn.call(null,schema,entity_kw);
var ids = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,id_fn,data));
var db__$1 = entitydb.core.insert_meta.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,new cljs.core.Keyword(null,"c-many","c-many",745949041),collection_key], null),ids),entity_kw,collection_key,meta);
return cljs.core.reduce.call(null,((function (db__$1,id_fn,ids){
return (function (db__$2,item){
return entitydb.core.insert_item.call(null,schema,db__$2,entity_kw,item);
});})(db__$1,id_fn,ids))
,db__$1,data);
}
});

entitydb.core.insert_collection.cljs$lang$maxFixedArity = 6;

/**
 * Appends items to an existing collection.
 * 
 *   ```clojure
 *   (def entity-db-v1 {})
 *   (def schema {:foos {:id :id}})
 * 
 *   (def collection [{:id 1 :name "foo"} {:id 2 :name "bar"}])
 * 
 *   (def entity-db-v2 (insert-collection schema entity-db-v1 :foos :list collection))
 *   ;; Returns the new version of entity db. Each item will be stored
 *   ;; in the internal store map and collection will contain only the
 *   ;; item ids.
 * 
 *   (get-collection schema entity-db-v2 :foos :list)
 *   ;; Returns a collection of items named `:list`. Although internally collections
 *   ;; stores only a vector of ids, this function will return a vector of entities.
 *   ;;
 *   ;; [{:id 1 :name "foo"} {:id 2 :name "bar"}]
 * 
 *   
 *   (def entity-db-v3 (append-collection schema entity-db-v2 :foos :list [{:id 3 :name "baz}]))
 *   
 *   (get-collection schema entity-db-v3 :foos :list)
 *   ;; Returns [{:id 1 :name "foo"} {:id 2 :name "bar} {:id 3 :name "baz"}]
 *   
 *   ```
 *   
 */
entitydb.core.append_collection = (function entitydb$core$append_collection(var_args){
var G__59289 = arguments.length;
switch (G__59289) {
case 5:
return entitydb.core.append_collection.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return entitydb.core.append_collection.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

entitydb.core.append_collection.cljs$core$IFn$_invoke$arity$5 = (function (schema,db,entity_kw,collection_key,data){
var current_meta = entitydb.core.get_collection_meta.call(null,schema,db,entity_kw,collection_key);
return entitydb.core.append_collection.call(null,schema,db,entity_kw,collection_key,data,current_meta);
});

entitydb.core.append_collection.cljs$core$IFn$_invoke$arity$6 = (function (schema,db,entity_kw,collection_key,data,meta){
var c_path = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,new cljs.core.Keyword(null,"c-many","c-many",745949041),collection_key], null);
var current_ids = cljs.core.get_in.call(null,db,c_path);
var db_with_items = entitydb.core.insert_collection.call(null,schema,db,entity_kw,collection_key,data,meta);
var new_ids = cljs.core.get_in.call(null,db_with_items,c_path);
return cljs.core.assoc_in.call(null,db_with_items,c_path,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_ids,new_ids], null))));
});

entitydb.core.append_collection.cljs$lang$maxFixedArity = 6;

/**
 * Prepends items to an existing collection.
 * 
 *   ```clojure
 *   (def entity-db-v1 {})
 *   (def schema {:foos {:id :id}})
 * 
 *   (def collection [{:id 1 :name "foo"} {:id 2 :name "bar"}])
 * 
 *   (def entity-db-v2 (insert-collection schema entity-db-v1 :foos :list collection))
 *   ;; Returns the new version of entity db. Each item will be stored
 *   ;; in the internal store map and collection will contain only the
 *   ;; item ids.
 * 
 *   (get-collection schema entity-db-v2 :foos :list)
 *   ;; Returns a collection of items named `:list`. Although internally collections
 *   ;; stores only a vector of ids, this function will return a vector of entities.
 *   ;;
 *   ;; [{:id 1 :name "foo"} {:id 2 :name "bar"}]
 * 
 *   
 *   (def entity-db-v3 (prepend-collection schema entity-db-v2 :foos :list [{:id 3 :name "baz"}]))
 *   
 *   (get-collection schema entity-db-v3 :foos :list)
 *   ;; Returns [{:id 3 :name "baz"} {:id 1 :name "foo"} {:id 2 :name "bar"}]
 *   
 *   ```
 *   
 */
entitydb.core.prepend_collection = (function entitydb$core$prepend_collection(var_args){
var G__59298 = arguments.length;
switch (G__59298) {
case 5:
return entitydb.core.prepend_collection.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return entitydb.core.prepend_collection.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

entitydb.core.prepend_collection.cljs$core$IFn$_invoke$arity$5 = (function (schema,db,entity_kw,collection_key,data){
var current_meta = entitydb.core.get_collection_meta.call(null,schema,db,entity_kw,collection_key);
return entitydb.core.prepend_collection.call(null,schema,db,entity_kw,collection_key,data,current_meta);
});

entitydb.core.prepend_collection.cljs$core$IFn$_invoke$arity$6 = (function (schema,db,entity_kw,collection_key,data,meta){
var c_path = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,new cljs.core.Keyword(null,"c-many","c-many",745949041),collection_key], null);
var current_ids = cljs.core.get_in.call(null,db,c_path);
var db_with_items = entitydb.core.insert_collection.call(null,schema,db,entity_kw,collection_key,data,meta);
var new_ids = cljs.core.get_in.call(null,db_with_items,c_path);
return cljs.core.assoc_in.call(null,db_with_items,c_path,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_ids,current_ids], null))));
});

entitydb.core.prepend_collection.cljs$lang$maxFixedArity = 6;

entitydb.core.insert_related = (function entitydb$core$insert_related(schema,db,relations,entity_kw,id,item){
return cljs.core.reduce_kv.call(null,(function (db__$1,relation_kw,p__59306){
var vec__59307 = p__59306;
var relation_type = cljs.core.nth.call(null,vec__59307,(0),null);
var related_entity_kw = cljs.core.nth.call(null,vec__59307,(1),null);
var collection_key = entitydb.relations.get_related_collection_key.call(null,entity_kw,id,relation_kw);
var relation_data = relation_kw.call(null,item);
var remove_collection_type_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"one","one",935007904),new cljs.core.Keyword(null,"c-one","c-one",-1168064923),new cljs.core.Keyword(null,"many","many",1092119164),new cljs.core.Keyword(null,"c-many","c-many",745949041)], null);
var insert_collection_fn = ((cljs.core._EQ_.call(null,relation_type,new cljs.core.Keyword(null,"one","one",935007904)))?entitydb.core.insert_named_item:entitydb.core.insert_collection);
if(cljs.core.fn_QMARK_.call(null,relation_data)){
return db__$1;
} else {
if(!(cljs.core.contains_QMARK_.call(null,item,relation_kw))){
return db__$1;
} else {
if(((cljs.core.contains_QMARK_.call(null,item,relation_kw)) && ((cljs.core.seq.call(null,relation_data) == null)))){
return entitydb.core.remove_collection_or_named_item.call(null,db__$1,related_entity_kw,remove_collection_type_map.call(null,relation_type),collection_key);
} else {
return insert_collection_fn.call(null,schema,db__$1,related_entity_kw,collection_key,relation_data);

}
}
}
}),db,relations);
});
/**
 * Inserts meta data for an entity or collection into the store.
 */
entitydb.core.insert_meta = (function entitydb$core$insert_meta(db,entity_kw,meta_key,meta){
var schema = cljs.core.PersistentArrayMap.createAsIfByAssoc([entitydb.core.meta_store,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.partial.call(null,entitydb.util.get_meta_id,entity_kw,meta_key)], null)]);
if((meta == null)){
return entitydb.core.remove_meta.call(null,db,entity_kw,meta_key);
} else {
return entitydb.core.insert_item.call(null,schema,entitydb.util.add_empty_layout.call(null,db,entitydb.core.meta_store),entitydb.core.meta_store,meta);
}
});
entitydb.core.remove_item_id_from_named_items = (function entitydb$core$remove_item_id_from_named_items(collections,id){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p__59313){
var vec__59314 = p__59313;
var key = cljs.core.nth.call(null,vec__59314,(0),null);
var val = cljs.core.nth.call(null,vec__59314,(1),null);
return cljs.core.not_EQ_.call(null,val,id);
}),collections));
});
entitydb.core.remove_item_id_from_collections = (function entitydb$core$remove_item_id_from_collections(collections,id){
return entitydb.util.update_values.call(null,collections,(function (val){
return cljs.core.filterv.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,id),val);
}));
});
/**
 * Removes item from the store. It will also remove it from any named-item slots or collections.
 * 
 *   ```clojure
 *   (def entity-db-v1 {})
 *   (def schema {:foos {:id :id}})
 * 
 *   (def foo-entity {:id 1 :name "Bar"})
 *   
 *   ;; insert `foo-entity` in the `:current` named item slot
 *   (def entity-db-v2 (insert-named-item schema entity-db-v1 :foos :current foo-entity))
 * 
 *   ;; insert `foo-entity` as a part of the `:list` collection
 *   (def entity-db-v3 (insert-collection schema entity-db-v2 :foos :list [foo-entity]))
 * 
 *   ;; get `foo-entity` from the entity-db
 *   (get-item-by-id schema entity-db-v3 :foos 1)
 *   ;; returns `foo-entity`
 * 
 *   (def entity-db-v4 (remove-item schema entity-db :foos 1))
 * 
 *   (get-named-item schema entity-db-v4 :foos :current)
 *   ;; returns `nil`
 * 
 *   (get-collection schema entity-db-v4 :foos :list)
 *   ;; returns []
 *   ```
 *   
 */
entitydb.core.remove_item = (function entitydb$core$remove_item(schema,db,entity_kw,id){
var c_one_without_item_id = entitydb.core.remove_item_id_from_named_items.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,new cljs.core.Keyword(null,"c-one","c-one",-1168064923)], null)),id);
var c_many_without_item_id = entitydb.core.remove_item_id_from_collections.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,new cljs.core.Keyword(null,"c-many","c-many",745949041)], null)),id);
var store_without_item = cljs.core.dissoc.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,new cljs.core.Keyword(null,"store","store",1512230022)], null)),id);
var db__$1 = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,entitydb.core.remove_meta.call(null,db,entity_kw,id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,new cljs.core.Keyword(null,"store","store",1512230022)], null),store_without_item),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,new cljs.core.Keyword(null,"c-one","c-one",-1168064923)], null),c_one_without_item_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,new cljs.core.Keyword(null,"c-many","c-many",745949041)], null),c_many_without_item_id);
var relations = entitydb.relations.get_relations.call(null,schema,entity_kw);
return cljs.core.reduce_kv.call(null,cljs.core.partial.call(null,entitydb.relations.remove_related_collections,entity_kw,id),db__$1,relations);
});
entitydb.core.remove_collection_or_named_item = (function entitydb$core$remove_collection_or_named_item(db,entity_kw,collection_type,collection_key){
var collections_without = cljs.core.dissoc.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,collection_type], null)),collection_key);
return cljs.core.assoc_in.call(null,entitydb.core.remove_meta.call(null,db,entity_kw,collection_key),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,collection_type], null),collections_without);
});
/**
 * Removes the named-item slot. Entity will still be stored in the internal store, but
 *   won't be available through the named-item slot.
 * 
 *   ```clojure
 *   (def entity-db-v1 {})
 *   (def schema {:foos {:id :id}})
 * 
 *   (def foo-entity {:id 1 :name "bar"})
 * 
 *   (def entity-db-v2 (insert-named-item schema entity-db-v1 :foos :current foo-entity))
 *   
 *   (get-named-item schema entity-db-v1 :foos :current)
 *   ;; Returns `{:id 1 :name "bar"}`
 * 
 *   (def entity-db-v3 (remove-named-item schema entity-db-v2 :foos :current))
 * 
 *   (get-named-item schema entity-db-v2 :foos :current)
 *   ;; Returns `nil`
 * 
 *   (get-item-by-id schema entity-db-v2 :foos 1)
 *   ;; Returns `{:id 1 :name "bar"}`
 *   ```
 *   
 */
entitydb.core.remove_named_item = (function entitydb$core$remove_named_item(db,entity_kw,collection_key){
return entitydb.core.remove_collection_or_named_item.call(null,db,entity_kw,new cljs.core.Keyword(null,"c-one","c-one",-1168064923),collection_key);
});
/**
 * Removes the collection. Entities referenced from the collection will still be stored in
 *   the internal store, but won't be available through the collection API.
 * 
 *   ```clojure
 *   (def entity-db-v1 {})
 *   (def schema {:foos {:id :id}})
 * 
 *   (def foo-entity {:id 1 :name "bar"})
 * 
 *   (def entity-db-v2 (insert-collection schema entity-db-v1 :foos :list [foo-entity]))
 *   
 *   (get-collection schema entity-db-v2 :foos :list)
 *   ;; Returns `[{:id 1 :name "bar"}]`
 * 
 *   (def entity-db-v3 (remove-collection schema entity-db-v2 :foos :list))
 * 
 *   (get-collection schema entity-db-v2 :foos :list)
 *   ;; Returns `nil`
 * 
 *   (get-item-by-id schema entity-db-v2 :foos 1)
 *   ;; Returns `{:id 1 :name "bar"}`
 *   ```
 *   
 */
entitydb.core.remove_collection = (function entitydb$core$remove_collection(db,entity_kw,collection_key){
return entitydb.core.remove_collection_or_named_item.call(null,db,entity_kw,new cljs.core.Keyword(null,"c-many","c-many",745949041),collection_key);
});
/**
 * Empties a collection, but leaves the meta intact. If the new meta is provided it will
 *   be merged into the current meta.  Entities referenced from the collection will still be stored in
 *   the internal store, but won't be available through the collection API.
 * 
 *   ```clojure
 *   (def entity-db-v1 {})
 *   (def schema {:foos {:id :id}})
 * 
 *   (def foo-entity {:id 1 :name "bar"})
 * 
 *   (def entity-db-v2 (insert-collection schema entity-db-v1 :foos :list [foo-entity]))
 *   
 *   (get-collection schema entity-db-v2 :foos :list)
 *   ;; Returns `[{:id 1 :name "bar"}]`
 * 
 *   (def entity-db-v3 (empty-collection schema entity-db-v2 :foos :list))
 * 
 *   (get-collection schema entity-db-v2 :foos :list)
 *   ;; Returns `[]`
 * 
 *   (get-item-by-id schema entity-db-v2 :foos 1)
 *   ;; Returns `{:id 1 :name "bar"}`
 *   ```
 *   
 */
entitydb.core.empty_collection = (function entitydb$core$empty_collection(var_args){
var G__59319 = arguments.length;
switch (G__59319) {
case 3:
return entitydb.core.empty_collection.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return entitydb.core.empty_collection.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

entitydb.core.empty_collection.cljs$core$IFn$_invoke$arity$3 = (function (db,entity_kw,collection_key){
return entitydb.core.empty_collection.call(null,db,entity_kw,collection_key,cljs.core.PersistentArrayMap.EMPTY);
});

entitydb.core.empty_collection.cljs$core$IFn$_invoke$arity$4 = (function (db,entity_kw,collection_key,meta){
return entitydb.core.insert_meta.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,new cljs.core.Keyword(null,"c-many","c-many",745949041),collection_key], null),cljs.core.PersistentVector.EMPTY),entity_kw,collection_key,meta);
});

entitydb.core.empty_collection.cljs$lang$maxFixedArity = 4;

/**
 * Removes any meta data stored on the entity or collection
 */
entitydb.core.remove_meta = (function entitydb$core$remove_meta(db,entity_kw,id){
var meta_key = entitydb.util.get_meta_id.call(null,entity_kw,id);
var current_meta = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entitydb.core.meta_store,new cljs.core.Keyword(null,"store","store",1512230022),meta_key], null));
if((current_meta == null)){
return db;
} else {
var store = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entitydb.core.meta_store,new cljs.core.Keyword(null,"store","store",1512230022)], null));
var store_without_item = cljs.core.dissoc.call(null,store,meta_key);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entitydb.core.meta_store,new cljs.core.Keyword(null,"store","store",1512230022)], null),(function (){var or__3949__auto__ = store_without_item;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
}
});
/**
 * Gets meta data for an entity.
 */
entitydb.core.get_item_meta = (function entitydb$core$get_item_meta(schema,db,entity_kw,id){
if(cljs.core._EQ_.call(null,entity_kw,entitydb.core.meta_store)){
return null;
} else {
return entitydb.core.get_item_by_id.call(null,schema,db,entitydb.core.meta_store,entitydb.util.get_meta_id.call(null,entity_kw,id));
}
});
/**
 * Returns the meta data for an entity referenced in the named item slot.
 */
entitydb.core.get_named_item_meta = (function entitydb$core$get_named_item_meta(schema,db,entity_kw,collection_key){
var item = entitydb.core.get_named_item.call(null,schema,db,entity_kw,collection_key,false);
var meta_key = (((item == null))?collection_key:entitydb.util.get_item_id.call(null,schema,entity_kw,item));
return entitydb.core.get_item_meta.call(null,schema,db,entity_kw,meta_key);
});
/**
 * Returns the meta data for a collection.
 */
entitydb.core.get_collection_meta = entitydb.core.get_item_meta;
entitydb.core.get_related_items_fn = (function entitydb$core$get_related_items_fn(schema,db,entity_kw,id){
return (function (item,relation_kw,p__59321){
var vec__59322 = p__59321;
var relation_type = cljs.core.nth.call(null,vec__59322,(0),null);
var related_entity_kw = cljs.core.nth.call(null,vec__59322,(1),null);
var collection_key = entitydb.relations.get_related_collection_key.call(null,entity_kw,id,relation_kw);
var get_related_fn = ((cljs.core._EQ_.call(null,relation_type,new cljs.core.Keyword(null,"one","one",935007904)))?entitydb.core.get_named_item:entitydb.core.get_collection);
var data_fn = cljs.core.partial.call(null,get_related_fn,schema,db,related_entity_kw,collection_key);
return cljs.core.assoc.call(null,item,relation_kw,data_fn);
});
});
entitydb.core.resolve_relations = (function entitydb$core$resolve_relations(item,pull_relations){
if(cljs.core.seq.call(null,pull_relations)){
return cljs.core.reduce.call(null,(function (acc,r){
var relation = ((cljs.core.vector_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));
var vec__59327 = relation;
var seq__59328 = cljs.core.seq.call(null,vec__59327);
var first__59329 = cljs.core.first.call(null,seq__59328);
var seq__59328__$1 = cljs.core.next.call(null,seq__59328);
var attr = first__59329;
var attr_pull_relations = seq__59328__$1;
var attr_getter = cljs.core.get.call(null,acc,attr);
var temp__5718__auto__ = ((cljs.core.fn_QMARK_.call(null,attr_getter))?attr_getter.call(null):null);
if(cljs.core.truth_(temp__5718__auto__)){
var resolved = temp__5718__auto__;
if(cljs.core.vector_QMARK_.call(null,resolved)){
return cljs.core.assoc.call(null,acc,attr,cljs.core.map.call(null,((function (resolved,temp__5718__auto__,relation,vec__59327,seq__59328,first__59329,seq__59328__$1,attr,attr_pull_relations,attr_getter){
return (function (p1__59326_SHARP_){
return entitydb.core.resolve_relations.call(null,p1__59326_SHARP_,attr_pull_relations);
});})(resolved,temp__5718__auto__,relation,vec__59327,seq__59328,first__59329,seq__59328__$1,attr,attr_pull_relations,attr_getter))
,resolved));
} else {
return cljs.core.assoc.call(null,acc,attr,entitydb.core.resolve_relations.call(null,resolved,attr_pull_relations));
}
} else {
return acc;
}
}),item,pull_relations);
} else {
return item;
}
});
/**
 * Gets an entity from the store by the id
 */
entitydb.core.get_item_by_id = (function entitydb$core$get_item_by_id(var_args){
var G__59337 = arguments.length;
switch (G__59337) {
case 4:
return entitydb.core.get_item_by_id.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return entitydb.core.get_item_by_id.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

entitydb.core.get_item_by_id.cljs$core$IFn$_invoke$arity$4 = (function (schema,db,entity_kw,id){
return entitydb.core.get_item_by_id.call(null,schema,db,entity_kw,id,cljs.core.PersistentVector.EMPTY);
});

entitydb.core.get_item_by_id.cljs$core$IFn$_invoke$arity$5 = (function (schema,db,entity_kw,id,pull_relations){
var relations = entitydb.relations.get_relations.call(null,schema,entity_kw);
var item = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,new cljs.core.Keyword(null,"store","store",1512230022),id], null));
if((item == null)){
return null;
} else {
return entitydb.core.resolve_relations.call(null,(function (){var item__$1 = cljs.core.with_meta.call(null,item,entitydb.core.get_item_meta.call(null,schema,db,entity_kw,id));
return cljs.core.reduce_kv.call(null,entitydb.core.get_related_items_fn.call(null,schema,db,entity_kw,id),item__$1,relations);
})(),pull_relations);
}
});

entitydb.core.get_item_by_id.cljs$lang$maxFixedArity = 5;

/**
 * Gets collection by it's key. Internally collections store only entity ids, but
 *   this function will return a collection of entities based on the ids stored in the collection
 * 
 *   
 *   ```clojure
 *   (def entity-db-v1 {})
 *   (def schema {:foos {:id :id}})
 * 
 *   (def collection [{:id 1 :name "foo"} {:id 2 :name "bar"}])
 * 
 *   (def entity-db-v2 (insert-collection schema entity-db-v1 :foos :list collection))
 *   ;; Returns the new version of entity db. Each item will be stored
 *   ;; in the internal store map and collection will contain only the
 *   ;; item ids.
 * 
 *   (get-collection schema entity-db-v2 :foos :list)
 *   ;; Returns a collection of items named `:list`. Although internally collections
 *   ;; stores only a vector of ids, this function will return a vector of entities.
 *   ;;
 *   ;; [{:id 1 :name "foo"} {:id 2 :name "bar"}]
 *   ```
 *   
 */
entitydb.core.get_collection = (function entitydb$core$get_collection(var_args){
var G__59344 = arguments.length;
switch (G__59344) {
case 4:
return entitydb.core.get_collection.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return entitydb.core.get_collection.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

entitydb.core.get_collection.cljs$core$IFn$_invoke$arity$4 = (function (schema,db,entity_kw,collection_key){
return entitydb.core.get_collection.call(null,schema,db,entity_kw,collection_key,cljs.core.PersistentVector.EMPTY);
});

entitydb.core.get_collection.cljs$core$IFn$_invoke$arity$5 = (function (schema,db,entity_kw,collection_key,pull_relations){
var ids = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,new cljs.core.Keyword(null,"c-many","c-many",745949041),collection_key], null));
return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (ids){
return (function (p1__59342_SHARP_){
return entitydb.core.get_item_by_id.call(null,schema,db,entity_kw,p1__59342_SHARP_,pull_relations);
});})(ids))
,ids)),entitydb.core.get_collection_meta.call(null,schema,db,entity_kw,collection_key));
});

entitydb.core.get_collection.cljs$lang$maxFixedArity = 5;

/**
 * Gets an entity referenced from the named item slot. Internally named slots store
 *   only entity ids but this function will return an entity based on the id.
 */
entitydb.core.get_named_item = (function entitydb$core$get_named_item(var_args){
var G__59351 = arguments.length;
switch (G__59351) {
case 4:
return entitydb.core.get_named_item.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return entitydb.core.get_named_item.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return entitydb.core.get_named_item.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

entitydb.core.get_named_item.cljs$core$IFn$_invoke$arity$4 = (function (schema,db,entity_kw,collection_key){
return entitydb.core.get_named_item.call(null,schema,db,entity_kw,collection_key,false,cljs.core.PersistentVector.EMPTY);
});

entitydb.core.get_named_item.cljs$core$IFn$_invoke$arity$5 = (function (schema,db,entity_kw,collection_key,include_meta){
return entitydb.core.get_named_item.call(null,schema,db,entity_kw,collection_key,include_meta,cljs.core.PersistentVector.EMPTY);
});

entitydb.core.get_named_item.cljs$core$IFn$_invoke$arity$6 = (function (schema,db,entity_kw,collection_key,include_meta,pull_relations){
var id = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,new cljs.core.Keyword(null,"c-one","c-one",-1168064923),collection_key], null));
var item = entitydb.core.get_item_by_id.call(null,schema,db,entity_kw,id,pull_relations);
if(cljs.core.truth_(include_meta)){
return cljs.core.with_meta.call(null,item,entitydb.core.get_named_item_meta.call(null,schema,db,entity_kw,collection_key));
} else {
return item;
}
});

entitydb.core.get_named_item.cljs$lang$maxFixedArity = 6;

entitydb.core.vacuum_entity_db = (function entitydb$core$vacuum_entity_db(db,entity_kw){
var store = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,new cljs.core.Keyword(null,"store","store",1512230022)], null));
var ids = cljs.core.keys.call(null,store);
var locked_one_ids = cljs.core.vals.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,new cljs.core.Keyword(null,"c-one","c-one",-1168064923)], null)));
var locked_many_ids = cljs.core.vals.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,new cljs.core.Keyword(null,"c-many","c-many",745949041)], null)));
var locked_ids = cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [locked_one_ids,locked_many_ids], null));
var to_remove_ids = clojure.set.difference.call(null,cljs.core.set.call(null,ids),cljs.core.set.call(null,locked_ids));
var db_without_meta = cljs.core.reduce.call(null,((function (store,ids,locked_one_ids,locked_many_ids,locked_ids,to_remove_ids){
return (function (db__$1,id){
return entitydb.core.remove_meta.call(null,db__$1,entity_kw,id);
});})(store,ids,locked_one_ids,locked_many_ids,locked_ids,to_remove_ids))
,db,to_remove_ids);
return cljs.core.assoc_in.call(null,db_without_meta,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,new cljs.core.Keyword(null,"store","store",1512230022)], null),cljs.core.select_keys.call(null,store,locked_ids));
});
/**
 * Removes orphaned entities from the EntityDB. Any entity that is not referenced
 *   in a collection or in a named item slot will be removed from the EntityDB
 */
entitydb.core.vacuum = (function entitydb$core$vacuum(db){
var entity_kws = cljs.core.keys.call(null,db);
var entity_kws_without_meta = cljs.core.filterv.call(null,((function (entity_kws){
return (function (k){
return !(cljs.core._EQ_.call(null,k,entitydb.core.meta_store));
});})(entity_kws))
,entity_kws);
return cljs.core.reduce.call(null,entitydb.core.vacuum_entity_db,db,entity_kws_without_meta);
});
entitydb.core.get_relation_path = (function entitydb$core$get_relation_path(schema,parent_entity_kw,attr,parent){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_entity_kw,entitydb.util.get_item_id.call(null,schema,parent_entity_kw,parent),attr], null);
});
entitydb.core.wrap_collection_fn_with_relation_path = (function entitydb$core$wrap_collection_fn_with_relation_path(relation_fn,include_schema_QMARK_){
return (function() { 
var G__59353__delegate = function (schema,db,parent_entity_kw,attr,parent,args){
var relation = cljs.core.get_in.call(null,schema,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_entity_kw,new cljs.core.Keyword(null,"relations","relations",-427124442),attr], null));
var relation_collection_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"many","many",1092119164),cljs.core.first.call(null,relation));
var relation_kw = cljs.core.last.call(null,relation);
if(!(relation_collection_QMARK_)){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)," is not a collection relation"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var path = entitydb.core.get_relation_path.call(null,schema,parent_entity_kw,attr,parent);
var default_args = (cljs.core.truth_(include_schema_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema,db,relation_kw,path], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,relation_kw,path], null));
return cljs.core.apply.call(null,relation_fn,cljs.core.into.call(null,default_args,args));
};
var G__59353 = function (schema,db,parent_entity_kw,attr,parent,var_args){
var args = null;
if (arguments.length > 5) {
var G__59354__i = 0, G__59354__a = new Array(arguments.length -  5);
while (G__59354__i < G__59354__a.length) {G__59354__a[G__59354__i] = arguments[G__59354__i + 5]; ++G__59354__i;}
  args = new cljs.core.IndexedSeq(G__59354__a,0,null);
} 
return G__59353__delegate.call(this,schema,db,parent_entity_kw,attr,parent,args);};
G__59353.cljs$lang$maxFixedArity = 5;
G__59353.cljs$lang$applyTo = (function (arglist__59355){
var schema = cljs.core.first(arglist__59355);
arglist__59355 = cljs.core.next(arglist__59355);
var db = cljs.core.first(arglist__59355);
arglist__59355 = cljs.core.next(arglist__59355);
var parent_entity_kw = cljs.core.first(arglist__59355);
arglist__59355 = cljs.core.next(arglist__59355);
var attr = cljs.core.first(arglist__59355);
arglist__59355 = cljs.core.next(arglist__59355);
var parent = cljs.core.first(arglist__59355);
var args = cljs.core.rest(arglist__59355);
return G__59353__delegate(schema,db,parent_entity_kw,attr,parent,args);
});
G__59353.cljs$core$IFn$_invoke$arity$variadic = G__59353__delegate;
return G__59353;
})()
;
});
entitydb.core.insert_related_collection = entitydb.core.wrap_collection_fn_with_relation_path.call(null,entitydb.core.insert_collection,true);
entitydb.core.remove_related_collection = entitydb.core.wrap_collection_fn_with_relation_path.call(null,entitydb.core.remove_collection,false);
entitydb.core.prepend_related_collection = entitydb.core.wrap_collection_fn_with_relation_path.call(null,entitydb.core.prepend_collection,true);
entitydb.core.append_related_collection = entitydb.core.wrap_collection_fn_with_relation_path.call(null,entitydb.core.append_collection,true);
/**
 * Returns a map with all public functions. These functions will have `schema`
 *   partially applied to them so you don't have to pass the schema around.
 */
entitydb.core.make_dbal = (function entitydb$core$make_dbal(schema){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"vacuum","vacuum",1586940514),new cljs.core.Keyword(null,"get-item-meta","get-item-meta",2060605026),new cljs.core.Keyword(null,"get-collection-meta","get-collection-meta",-407930811),new cljs.core.Keyword(null,"remove-named-item","remove-named-item",1073414277),new cljs.core.Keyword(null,"get-collection","get-collection",1355574565),new cljs.core.Keyword(null,"insert-named-item","insert-named-item",-2075226073),new cljs.core.Keyword(null,"remove-related-collection","remove-related-collection",929850472),new cljs.core.Keyword(null,"insert-meta","insert-meta",779549576),new cljs.core.Keyword(null,"remove-item","remove-item",2128630697),new cljs.core.Keyword(null,"prepend-collection","prepend-collection",-715711190),new cljs.core.Keyword(null,"append-related-collection","append-related-collection",1938085610),new cljs.core.Keyword(null,"append-collection","append-collection",1351258414),new cljs.core.Keyword(null,"remove-meta","remove-meta",-878580370),new cljs.core.Keyword(null,"get-named-item","get-named-item",1064962478),new cljs.core.Keyword(null,"get-item-by-id","get-item-by-id",1876302674),new cljs.core.Keyword(null,"insert-item","insert-item",-1846152333),new cljs.core.Keyword(null,"remove-collection","remove-collection",733692375),new cljs.core.Keyword(null,"prepend-related-collection","prepend-related-collection",-724313731),new cljs.core.Keyword(null,"insert-related-collection","insert-related-collection",991015039),new cljs.core.Keyword(null,"insert-collection","insert-collection",385768703),new cljs.core.Keyword(null,"get-named-item-meta","get-named-item-meta",-902647137)],[entitydb.core.vacuum,cljs.core.partial.call(null,entitydb.core.get_item_meta,schema),cljs.core.partial.call(null,entitydb.core.get_collection_meta,schema),entitydb.core.remove_named_item,cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.get_collection),schema),cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.insert_named_item),schema),cljs.core.partial.call(null,entitydb.core.remove_related_collection,schema),entitydb.core.insert_meta,cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.remove_item),schema),cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.prepend_collection),schema),cljs.core.partial.call(null,entitydb.core.append_related_collection,schema),cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.append_collection),schema),entitydb.core.remove_meta,cljs.core.partial.call(null,entitydb.core.get_named_item,schema),cljs.core.partial.call(null,entitydb.core.get_item_by_id,schema),cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.insert_item),schema),entitydb.core.remove_collection,cljs.core.partial.call(null,entitydb.core.prepend_related_collection,schema),cljs.core.partial.call(null,entitydb.core.insert_related_collection,schema),cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.insert_collection),schema),cljs.core.partial.call(null,entitydb.core.get_named_item_meta,schema)]);
});

//# sourceMappingURL=core.js.map?rel=1563552884860
