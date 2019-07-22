// Compiled by ClojureScript 1.10.339 {}
goog.provide('entitydb.util');
goog.require('cljs.core');
entitydb.util.passthrough_item = (function entitydb$util$passthrough_item(item){
return item;
});
entitydb.util.add_empty_layout = (function entitydb$util$add_empty_layout(db,entity_kw){
if((entity_kw.call(null,db) == null)){
return cljs.core.assoc.call(null,db,entity_kw,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"store","store",1512230022),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"c-one","c-one",-1168064923),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"c-many","c-many",745949041),cljs.core.PersistentArrayMap.EMPTY], null));
} else {
return db;
}
});
entitydb.util.ensure_layout = (function entitydb$util$ensure_layout(dbal_fn){
return (function() { 
var G__59179__delegate = function (schema,db,entity_kw,args){
var db_with_layout = entitydb.util.add_empty_layout.call(null,db,entity_kw);
return cljs.core.apply.call(null,dbal_fn,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema,db_with_layout,entity_kw], null),args));
};
var G__59179 = function (schema,db,entity_kw,var_args){
var args = null;
if (arguments.length > 3) {
var G__59180__i = 0, G__59180__a = new Array(arguments.length -  3);
while (G__59180__i < G__59180__a.length) {G__59180__a[G__59180__i] = arguments[G__59180__i + 3]; ++G__59180__i;}
  args = new cljs.core.IndexedSeq(G__59180__a,0,null);
} 
return G__59179__delegate.call(this,schema,db,entity_kw,args);};
G__59179.cljs$lang$maxFixedArity = 3;
G__59179.cljs$lang$applyTo = (function (arglist__59181){
var schema = cljs.core.first(arglist__59181);
arglist__59181 = cljs.core.next(arglist__59181);
var db = cljs.core.first(arglist__59181);
arglist__59181 = cljs.core.next(arglist__59181);
var entity_kw = cljs.core.first(arglist__59181);
var args = cljs.core.rest(arglist__59181);
return G__59179__delegate(schema,db,entity_kw,args);
});
G__59179.cljs$core$IFn$_invoke$arity$variadic = G__59179__delegate;
return G__59179;
})()
;
});
entitydb.util.call_middleware = (function entitydb$util$call_middleware(get_or_set,schema,entity_kw,item){
var middlewares = (function (){var or__3949__auto__ = cljs.core.get_in.call(null,schema,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,new cljs.core.Keyword(null,"middleware","middleware",1462115504),get_or_set], null));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [entitydb.util.passthrough_item], null);
}
})();
var pipeline = cljs.core.apply.call(null,cljs.core.comp,middlewares);
return pipeline.call(null,item);
});
entitydb.util.call_middleware_set = cljs.core.partial.call(null,entitydb.util.call_middleware,new cljs.core.Keyword(null,"set","set",304602554));
entitydb.util.call_middleware_get = cljs.core.partial.call(null,entitydb.util.call_middleware,new cljs.core.Keyword(null,"get","get",1683182755));
entitydb.util.get_id_fn = (function entitydb$util$get_id_fn(schema,entity_kw){
var or__3949__auto__ = cljs.core.get_in.call(null,schema,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,new cljs.core.Keyword(null,"id","id",-1388402092)], null));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092);
}
});
entitydb.util.get_item_id = (function entitydb$util$get_item_id(schema,entity_kw,item){
var id_fn = entitydb.util.get_id_fn.call(null,schema,entity_kw);
return id_fn.call(null,item);
});
entitydb.util.get_meta_id = (function entitydb$util$get_meta_id(entity_kw,id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,id], null);
});
entitydb.util.update_values = (function entitydb$util$update_values(var_args){
var args__4534__auto__ = [];
var len__4531__auto___59189 = arguments.length;
var i__4532__auto___59190 = (0);
while(true){
if((i__4532__auto___59190 < len__4531__auto___59189)){
args__4534__auto__.push((arguments[i__4532__auto___59190]));

var G__59191 = (i__4532__auto___59190 + (1));
i__4532__auto___59190 = G__59191;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return entitydb.util.update_values.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

entitydb.util.update_values.cljs$core$IFn$_invoke$arity$variadic = (function (m,f,args){
return cljs.core.reduce.call(null,(function (r,p__59185){
var vec__59186 = p__59185;
var k = cljs.core.nth.call(null,vec__59186,(0),null);
var v = cljs.core.nth.call(null,vec__59186,(1),null);
return cljs.core.assoc.call(null,r,k,cljs.core.apply.call(null,f,v,args));
}),cljs.core.PersistentArrayMap.EMPTY,m);
});

entitydb.util.update_values.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
entitydb.util.update_values.cljs$lang$applyTo = (function (seq59182){
var G__59183 = cljs.core.first.call(null,seq59182);
var seq59182__$1 = cljs.core.next.call(null,seq59182);
var G__59184 = cljs.core.first.call(null,seq59182__$1);
var seq59182__$2 = cljs.core.next.call(null,seq59182__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59183,G__59184,seq59182__$2);
});


//# sourceMappingURL=util.js.map?rel=1563552884563
