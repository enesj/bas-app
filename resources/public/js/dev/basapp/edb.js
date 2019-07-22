// Compiled by ClojureScript 1.10.339 {}
goog.provide('basapp.edb');
goog.require('cljs.core');
goog.require('entitydb.core');
goog.require('keechma.toolbox.edb');
basapp.edb.edb_schema = cljs.core.PersistentArrayMap.EMPTY;
/**
 * @param {...*} var_args
 */
basapp.edb.get_collection = (function() { 
var basapp$edb$get_collection__delegate = function (db59401,rest59402){
return cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.get_collection),basapp.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db59401)], null),rest59402));
};
var basapp$edb$get_collection = function (db59401,var_args){
var rest59402 = null;
if (arguments.length > 1) {
var G__59454__i = 0, G__59454__a = new Array(arguments.length -  1);
while (G__59454__i < G__59454__a.length) {G__59454__a[G__59454__i] = arguments[G__59454__i + 1]; ++G__59454__i;}
  rest59402 = new cljs.core.IndexedSeq(G__59454__a,0,null);
} 
return basapp$edb$get_collection__delegate.call(this,db59401,rest59402);};
basapp$edb$get_collection.cljs$lang$maxFixedArity = 1;
basapp$edb$get_collection.cljs$lang$applyTo = (function (arglist__59455){
var db59401 = cljs.core.first(arglist__59455);
var rest59402 = cljs.core.rest(arglist__59455);
return basapp$edb$get_collection__delegate(db59401,rest59402);
});
basapp$edb$get_collection.cljs$core$IFn$_invoke$arity$variadic = basapp$edb$get_collection__delegate;
return basapp$edb$get_collection;
})()
;

/**
 * @param {...*} var_args
 */
basapp.edb.get_item_by_id = (function() { 
var basapp$edb$get_item_by_id__delegate = function (db59403,rest59404){
return cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.core.get_item_by_id,basapp.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db59403)], null),rest59404));
};
var basapp$edb$get_item_by_id = function (db59403,var_args){
var rest59404 = null;
if (arguments.length > 1) {
var G__59457__i = 0, G__59457__a = new Array(arguments.length -  1);
while (G__59457__i < G__59457__a.length) {G__59457__a[G__59457__i] = arguments[G__59457__i + 1]; ++G__59457__i;}
  rest59404 = new cljs.core.IndexedSeq(G__59457__a,0,null);
} 
return basapp$edb$get_item_by_id__delegate.call(this,db59403,rest59404);};
basapp$edb$get_item_by_id.cljs$lang$maxFixedArity = 1;
basapp$edb$get_item_by_id.cljs$lang$applyTo = (function (arglist__59458){
var db59403 = cljs.core.first(arglist__59458);
var rest59404 = cljs.core.rest(arglist__59458);
return basapp$edb$get_item_by_id__delegate(db59403,rest59404);
});
basapp$edb$get_item_by_id.cljs$core$IFn$_invoke$arity$variadic = basapp$edb$get_item_by_id__delegate;
return basapp$edb$get_item_by_id;
})()
;

/**
 * @param {...*} var_args
 */
basapp.edb.get_named_item = (function() { 
var basapp$edb$get_named_item__delegate = function (db59405,rest59406){
return cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.core.get_named_item,basapp.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db59405)], null),rest59406));
};
var basapp$edb$get_named_item = function (db59405,var_args){
var rest59406 = null;
if (arguments.length > 1) {
var G__59459__i = 0, G__59459__a = new Array(arguments.length -  1);
while (G__59459__i < G__59459__a.length) {G__59459__a[G__59459__i] = arguments[G__59459__i + 1]; ++G__59459__i;}
  rest59406 = new cljs.core.IndexedSeq(G__59459__a,0,null);
} 
return basapp$edb$get_named_item__delegate.call(this,db59405,rest59406);};
basapp$edb$get_named_item.cljs$lang$maxFixedArity = 1;
basapp$edb$get_named_item.cljs$lang$applyTo = (function (arglist__59460){
var db59405 = cljs.core.first(arglist__59460);
var rest59406 = cljs.core.rest(arglist__59460);
return basapp$edb$get_named_item__delegate(db59405,rest59406);
});
basapp$edb$get_named_item.cljs$core$IFn$_invoke$arity$variadic = basapp$edb$get_named_item__delegate;
return basapp$edb$get_named_item;
})()
;

/**
 * @param {...*} var_args
 */
basapp.edb.get_item_meta = (function() { 
var basapp$edb$get_item_meta__delegate = function (db59407,rest59408){
return cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.core.get_item_meta,basapp.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db59407)], null),rest59408));
};
var basapp$edb$get_item_meta = function (db59407,var_args){
var rest59408 = null;
if (arguments.length > 1) {
var G__59461__i = 0, G__59461__a = new Array(arguments.length -  1);
while (G__59461__i < G__59461__a.length) {G__59461__a[G__59461__i] = arguments[G__59461__i + 1]; ++G__59461__i;}
  rest59408 = new cljs.core.IndexedSeq(G__59461__a,0,null);
} 
return basapp$edb$get_item_meta__delegate.call(this,db59407,rest59408);};
basapp$edb$get_item_meta.cljs$lang$maxFixedArity = 1;
basapp$edb$get_item_meta.cljs$lang$applyTo = (function (arglist__59462){
var db59407 = cljs.core.first(arglist__59462);
var rest59408 = cljs.core.rest(arglist__59462);
return basapp$edb$get_item_meta__delegate(db59407,rest59408);
});
basapp$edb$get_item_meta.cljs$core$IFn$_invoke$arity$variadic = basapp$edb$get_item_meta__delegate;
return basapp$edb$get_item_meta;
})()
;

/**
 * @param {...*} var_args
 */
basapp.edb.get_named_item_meta = (function() { 
var basapp$edb$get_named_item_meta__delegate = function (db59409,rest59410){
return cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.core.get_named_item_meta,basapp.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db59409)], null),rest59410));
};
var basapp$edb$get_named_item_meta = function (db59409,var_args){
var rest59410 = null;
if (arguments.length > 1) {
var G__59463__i = 0, G__59463__a = new Array(arguments.length -  1);
while (G__59463__i < G__59463__a.length) {G__59463__a[G__59463__i] = arguments[G__59463__i + 1]; ++G__59463__i;}
  rest59410 = new cljs.core.IndexedSeq(G__59463__a,0,null);
} 
return basapp$edb$get_named_item_meta__delegate.call(this,db59409,rest59410);};
basapp$edb$get_named_item_meta.cljs$lang$maxFixedArity = 1;
basapp$edb$get_named_item_meta.cljs$lang$applyTo = (function (arglist__59464){
var db59409 = cljs.core.first(arglist__59464);
var rest59410 = cljs.core.rest(arglist__59464);
return basapp$edb$get_named_item_meta__delegate(db59409,rest59410);
});
basapp$edb$get_named_item_meta.cljs$core$IFn$_invoke$arity$variadic = basapp$edb$get_named_item_meta__delegate;
return basapp$edb$get_named_item_meta;
})()
;

/**
 * @param {...*} var_args
 */
basapp.edb.get_collection_meta = (function() { 
var basapp$edb$get_collection_meta__delegate = function (db59411,rest59412){
return cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.core.get_collection_meta,basapp.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db59411)], null),rest59412));
};
var basapp$edb$get_collection_meta = function (db59411,var_args){
var rest59412 = null;
if (arguments.length > 1) {
var G__59468__i = 0, G__59468__a = new Array(arguments.length -  1);
while (G__59468__i < G__59468__a.length) {G__59468__a[G__59468__i] = arguments[G__59468__i + 1]; ++G__59468__i;}
  rest59412 = new cljs.core.IndexedSeq(G__59468__a,0,null);
} 
return basapp$edb$get_collection_meta__delegate.call(this,db59411,rest59412);};
basapp$edb$get_collection_meta.cljs$lang$maxFixedArity = 1;
basapp$edb$get_collection_meta.cljs$lang$applyTo = (function (arglist__59469){
var db59411 = cljs.core.first(arglist__59469);
var rest59412 = cljs.core.rest(arglist__59469);
return basapp$edb$get_collection_meta__delegate(db59411,rest59412);
});
basapp$edb$get_collection_meta.cljs$core$IFn$_invoke$arity$variadic = basapp$edb$get_collection_meta__delegate;
return basapp$edb$get_collection_meta;
})()
;

/**
 * @param {...*} var_args
 */
basapp.edb.insert_item = (function() { 
var basapp$edb$insert_item__delegate = function (db59413,rest59414){
return cljs.core.assoc.call(null,db59413,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.insert_item),basapp.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db59413)], null),rest59414)));
};
var basapp$edb$insert_item = function (db59413,var_args){
var rest59414 = null;
if (arguments.length > 1) {
var G__59470__i = 0, G__59470__a = new Array(arguments.length -  1);
while (G__59470__i < G__59470__a.length) {G__59470__a[G__59470__i] = arguments[G__59470__i + 1]; ++G__59470__i;}
  rest59414 = new cljs.core.IndexedSeq(G__59470__a,0,null);
} 
return basapp$edb$insert_item__delegate.call(this,db59413,rest59414);};
basapp$edb$insert_item.cljs$lang$maxFixedArity = 1;
basapp$edb$insert_item.cljs$lang$applyTo = (function (arglist__59471){
var db59413 = cljs.core.first(arglist__59471);
var rest59414 = cljs.core.rest(arglist__59471);
return basapp$edb$insert_item__delegate(db59413,rest59414);
});
basapp$edb$insert_item.cljs$core$IFn$_invoke$arity$variadic = basapp$edb$insert_item__delegate;
return basapp$edb$insert_item;
})()
;

/**
 * @param {...*} var_args
 */
basapp.edb.insert_named_item = (function() { 
var basapp$edb$insert_named_item__delegate = function (db59415,rest59416){
return cljs.core.assoc.call(null,db59415,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.insert_named_item),basapp.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db59415)], null),rest59416)));
};
var basapp$edb$insert_named_item = function (db59415,var_args){
var rest59416 = null;
if (arguments.length > 1) {
var G__59473__i = 0, G__59473__a = new Array(arguments.length -  1);
while (G__59473__i < G__59473__a.length) {G__59473__a[G__59473__i] = arguments[G__59473__i + 1]; ++G__59473__i;}
  rest59416 = new cljs.core.IndexedSeq(G__59473__a,0,null);
} 
return basapp$edb$insert_named_item__delegate.call(this,db59415,rest59416);};
basapp$edb$insert_named_item.cljs$lang$maxFixedArity = 1;
basapp$edb$insert_named_item.cljs$lang$applyTo = (function (arglist__59476){
var db59415 = cljs.core.first(arglist__59476);
var rest59416 = cljs.core.rest(arglist__59476);
return basapp$edb$insert_named_item__delegate(db59415,rest59416);
});
basapp$edb$insert_named_item.cljs$core$IFn$_invoke$arity$variadic = basapp$edb$insert_named_item__delegate;
return basapp$edb$insert_named_item;
})()
;

/**
 * @param {...*} var_args
 */
basapp.edb.insert_collection = (function() { 
var basapp$edb$insert_collection__delegate = function (db59417,rest59418){
return cljs.core.assoc.call(null,db59417,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.insert_collection),basapp.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db59417)], null),rest59418)));
};
var basapp$edb$insert_collection = function (db59417,var_args){
var rest59418 = null;
if (arguments.length > 1) {
var G__59479__i = 0, G__59479__a = new Array(arguments.length -  1);
while (G__59479__i < G__59479__a.length) {G__59479__a[G__59479__i] = arguments[G__59479__i + 1]; ++G__59479__i;}
  rest59418 = new cljs.core.IndexedSeq(G__59479__a,0,null);
} 
return basapp$edb$insert_collection__delegate.call(this,db59417,rest59418);};
basapp$edb$insert_collection.cljs$lang$maxFixedArity = 1;
basapp$edb$insert_collection.cljs$lang$applyTo = (function (arglist__59480){
var db59417 = cljs.core.first(arglist__59480);
var rest59418 = cljs.core.rest(arglist__59480);
return basapp$edb$insert_collection__delegate(db59417,rest59418);
});
basapp$edb$insert_collection.cljs$core$IFn$_invoke$arity$variadic = basapp$edb$insert_collection__delegate;
return basapp$edb$insert_collection;
})()
;

/**
 * @param {...*} var_args
 */
basapp.edb.append_collection = (function() { 
var basapp$edb$append_collection__delegate = function (db59419,rest59420){
return cljs.core.assoc.call(null,db59419,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.append_collection),basapp.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db59419)], null),rest59420)));
};
var basapp$edb$append_collection = function (db59419,var_args){
var rest59420 = null;
if (arguments.length > 1) {
var G__59485__i = 0, G__59485__a = new Array(arguments.length -  1);
while (G__59485__i < G__59485__a.length) {G__59485__a[G__59485__i] = arguments[G__59485__i + 1]; ++G__59485__i;}
  rest59420 = new cljs.core.IndexedSeq(G__59485__a,0,null);
} 
return basapp$edb$append_collection__delegate.call(this,db59419,rest59420);};
basapp$edb$append_collection.cljs$lang$maxFixedArity = 1;
basapp$edb$append_collection.cljs$lang$applyTo = (function (arglist__59486){
var db59419 = cljs.core.first(arglist__59486);
var rest59420 = cljs.core.rest(arglist__59486);
return basapp$edb$append_collection__delegate(db59419,rest59420);
});
basapp$edb$append_collection.cljs$core$IFn$_invoke$arity$variadic = basapp$edb$append_collection__delegate;
return basapp$edb$append_collection;
})()
;

/**
 * @param {...*} var_args
 */
basapp.edb.prepend_collection = (function() { 
var basapp$edb$prepend_collection__delegate = function (db59421,rest59422){
return cljs.core.assoc.call(null,db59421,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.prepend_collection),basapp.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db59421)], null),rest59422)));
};
var basapp$edb$prepend_collection = function (db59421,var_args){
var rest59422 = null;
if (arguments.length > 1) {
var G__59487__i = 0, G__59487__a = new Array(arguments.length -  1);
while (G__59487__i < G__59487__a.length) {G__59487__a[G__59487__i] = arguments[G__59487__i + 1]; ++G__59487__i;}
  rest59422 = new cljs.core.IndexedSeq(G__59487__a,0,null);
} 
return basapp$edb$prepend_collection__delegate.call(this,db59421,rest59422);};
basapp$edb$prepend_collection.cljs$lang$maxFixedArity = 1;
basapp$edb$prepend_collection.cljs$lang$applyTo = (function (arglist__59488){
var db59421 = cljs.core.first(arglist__59488);
var rest59422 = cljs.core.rest(arglist__59488);
return basapp$edb$prepend_collection__delegate(db59421,rest59422);
});
basapp$edb$prepend_collection.cljs$core$IFn$_invoke$arity$variadic = basapp$edb$prepend_collection__delegate;
return basapp$edb$prepend_collection;
})()
;

/**
 * @param {...*} var_args
 */
basapp.edb.remove_item = (function() { 
var basapp$edb$remove_item__delegate = function (db59423,rest59424){
return cljs.core.assoc.call(null,db59423,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.remove_item),basapp.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db59423)], null),rest59424)));
};
var basapp$edb$remove_item = function (db59423,var_args){
var rest59424 = null;
if (arguments.length > 1) {
var G__59489__i = 0, G__59489__a = new Array(arguments.length -  1);
while (G__59489__i < G__59489__a.length) {G__59489__a[G__59489__i] = arguments[G__59489__i + 1]; ++G__59489__i;}
  rest59424 = new cljs.core.IndexedSeq(G__59489__a,0,null);
} 
return basapp$edb$remove_item__delegate.call(this,db59423,rest59424);};
basapp$edb$remove_item.cljs$lang$maxFixedArity = 1;
basapp$edb$remove_item.cljs$lang$applyTo = (function (arglist__59490){
var db59423 = cljs.core.first(arglist__59490);
var rest59424 = cljs.core.rest(arglist__59490);
return basapp$edb$remove_item__delegate(db59423,rest59424);
});
basapp$edb$remove_item.cljs$core$IFn$_invoke$arity$variadic = basapp$edb$remove_item__delegate;
return basapp$edb$remove_item;
})()
;

/**
 * @param {...*} var_args
 */
basapp.edb.insert_related_collection = (function() { 
var basapp$edb$insert_related_collection__delegate = function (db59425,rest59426){
return cljs.core.assoc.call(null,db59425,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.insert_related_collection),basapp.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db59425)], null),rest59426)));
};
var basapp$edb$insert_related_collection = function (db59425,var_args){
var rest59426 = null;
if (arguments.length > 1) {
var G__59491__i = 0, G__59491__a = new Array(arguments.length -  1);
while (G__59491__i < G__59491__a.length) {G__59491__a[G__59491__i] = arguments[G__59491__i + 1]; ++G__59491__i;}
  rest59426 = new cljs.core.IndexedSeq(G__59491__a,0,null);
} 
return basapp$edb$insert_related_collection__delegate.call(this,db59425,rest59426);};
basapp$edb$insert_related_collection.cljs$lang$maxFixedArity = 1;
basapp$edb$insert_related_collection.cljs$lang$applyTo = (function (arglist__59492){
var db59425 = cljs.core.first(arglist__59492);
var rest59426 = cljs.core.rest(arglist__59492);
return basapp$edb$insert_related_collection__delegate(db59425,rest59426);
});
basapp$edb$insert_related_collection.cljs$core$IFn$_invoke$arity$variadic = basapp$edb$insert_related_collection__delegate;
return basapp$edb$insert_related_collection;
})()
;

/**
 * @param {...*} var_args
 */
basapp.edb.append_related_collection = (function() { 
var basapp$edb$append_related_collection__delegate = function (db59427,rest59428){
return cljs.core.assoc.call(null,db59427,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.append_related_collection),basapp.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db59427)], null),rest59428)));
};
var basapp$edb$append_related_collection = function (db59427,var_args){
var rest59428 = null;
if (arguments.length > 1) {
var G__59493__i = 0, G__59493__a = new Array(arguments.length -  1);
while (G__59493__i < G__59493__a.length) {G__59493__a[G__59493__i] = arguments[G__59493__i + 1]; ++G__59493__i;}
  rest59428 = new cljs.core.IndexedSeq(G__59493__a,0,null);
} 
return basapp$edb$append_related_collection__delegate.call(this,db59427,rest59428);};
basapp$edb$append_related_collection.cljs$lang$maxFixedArity = 1;
basapp$edb$append_related_collection.cljs$lang$applyTo = (function (arglist__59494){
var db59427 = cljs.core.first(arglist__59494);
var rest59428 = cljs.core.rest(arglist__59494);
return basapp$edb$append_related_collection__delegate(db59427,rest59428);
});
basapp$edb$append_related_collection.cljs$core$IFn$_invoke$arity$variadic = basapp$edb$append_related_collection__delegate;
return basapp$edb$append_related_collection;
})()
;

/**
 * @param {...*} var_args
 */
basapp.edb.prepend_related_collection = (function() { 
var basapp$edb$prepend_related_collection__delegate = function (db59429,rest59430){
return cljs.core.assoc.call(null,db59429,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.prepend_related_collection),basapp.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db59429)], null),rest59430)));
};
var basapp$edb$prepend_related_collection = function (db59429,var_args){
var rest59430 = null;
if (arguments.length > 1) {
var G__59495__i = 0, G__59495__a = new Array(arguments.length -  1);
while (G__59495__i < G__59495__a.length) {G__59495__a[G__59495__i] = arguments[G__59495__i + 1]; ++G__59495__i;}
  rest59430 = new cljs.core.IndexedSeq(G__59495__a,0,null);
} 
return basapp$edb$prepend_related_collection__delegate.call(this,db59429,rest59430);};
basapp$edb$prepend_related_collection.cljs$lang$maxFixedArity = 1;
basapp$edb$prepend_related_collection.cljs$lang$applyTo = (function (arglist__59496){
var db59429 = cljs.core.first(arglist__59496);
var rest59430 = cljs.core.rest(arglist__59496);
return basapp$edb$prepend_related_collection__delegate(db59429,rest59430);
});
basapp$edb$prepend_related_collection.cljs$core$IFn$_invoke$arity$variadic = basapp$edb$prepend_related_collection__delegate;
return basapp$edb$prepend_related_collection;
})()
;

/**
 * @param {...*} var_args
 */
basapp.edb.insert_meta = (function() { 
var basapp$edb$insert_meta__delegate = function (db59431,rest59432){
return cljs.core.assoc.call(null,db59431,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,entitydb.core.insert_meta,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db59431)], null),rest59432)));
};
var basapp$edb$insert_meta = function (db59431,var_args){
var rest59432 = null;
if (arguments.length > 1) {
var G__59497__i = 0, G__59497__a = new Array(arguments.length -  1);
while (G__59497__i < G__59497__a.length) {G__59497__a[G__59497__i] = arguments[G__59497__i + 1]; ++G__59497__i;}
  rest59432 = new cljs.core.IndexedSeq(G__59497__a,0,null);
} 
return basapp$edb$insert_meta__delegate.call(this,db59431,rest59432);};
basapp$edb$insert_meta.cljs$lang$maxFixedArity = 1;
basapp$edb$insert_meta.cljs$lang$applyTo = (function (arglist__59498){
var db59431 = cljs.core.first(arglist__59498);
var rest59432 = cljs.core.rest(arglist__59498);
return basapp$edb$insert_meta__delegate(db59431,rest59432);
});
basapp$edb$insert_meta.cljs$core$IFn$_invoke$arity$variadic = basapp$edb$insert_meta__delegate;
return basapp$edb$insert_meta;
})()
;

/**
 * @param {...*} var_args
 */
basapp.edb.remove_meta = (function() { 
var basapp$edb$remove_meta__delegate = function (db59433,rest59434){
return cljs.core.assoc.call(null,db59433,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,entitydb.core.remove_meta,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db59433)], null),rest59434)));
};
var basapp$edb$remove_meta = function (db59433,var_args){
var rest59434 = null;
if (arguments.length > 1) {
var G__59499__i = 0, G__59499__a = new Array(arguments.length -  1);
while (G__59499__i < G__59499__a.length) {G__59499__a[G__59499__i] = arguments[G__59499__i + 1]; ++G__59499__i;}
  rest59434 = new cljs.core.IndexedSeq(G__59499__a,0,null);
} 
return basapp$edb$remove_meta__delegate.call(this,db59433,rest59434);};
basapp$edb$remove_meta.cljs$lang$maxFixedArity = 1;
basapp$edb$remove_meta.cljs$lang$applyTo = (function (arglist__59500){
var db59433 = cljs.core.first(arglist__59500);
var rest59434 = cljs.core.rest(arglist__59500);
return basapp$edb$remove_meta__delegate(db59433,rest59434);
});
basapp$edb$remove_meta.cljs$core$IFn$_invoke$arity$variadic = basapp$edb$remove_meta__delegate;
return basapp$edb$remove_meta;
})()
;

/**
 * @param {...*} var_args
 */
basapp.edb.remove_named_item = (function() { 
var basapp$edb$remove_named_item__delegate = function (db59435,rest59436){
return cljs.core.assoc.call(null,db59435,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,entitydb.core.remove_named_item,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db59435)], null),rest59436)));
};
var basapp$edb$remove_named_item = function (db59435,var_args){
var rest59436 = null;
if (arguments.length > 1) {
var G__59501__i = 0, G__59501__a = new Array(arguments.length -  1);
while (G__59501__i < G__59501__a.length) {G__59501__a[G__59501__i] = arguments[G__59501__i + 1]; ++G__59501__i;}
  rest59436 = new cljs.core.IndexedSeq(G__59501__a,0,null);
} 
return basapp$edb$remove_named_item__delegate.call(this,db59435,rest59436);};
basapp$edb$remove_named_item.cljs$lang$maxFixedArity = 1;
basapp$edb$remove_named_item.cljs$lang$applyTo = (function (arglist__59502){
var db59435 = cljs.core.first(arglist__59502);
var rest59436 = cljs.core.rest(arglist__59502);
return basapp$edb$remove_named_item__delegate(db59435,rest59436);
});
basapp$edb$remove_named_item.cljs$core$IFn$_invoke$arity$variadic = basapp$edb$remove_named_item__delegate;
return basapp$edb$remove_named_item;
})()
;

/**
 * @param {...*} var_args
 */
basapp.edb.remove_collection = (function() { 
var basapp$edb$remove_collection__delegate = function (db59437,rest59438){
return cljs.core.assoc.call(null,db59437,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,entitydb.core.remove_collection,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db59437)], null),rest59438)));
};
var basapp$edb$remove_collection = function (db59437,var_args){
var rest59438 = null;
if (arguments.length > 1) {
var G__59504__i = 0, G__59504__a = new Array(arguments.length -  1);
while (G__59504__i < G__59504__a.length) {G__59504__a[G__59504__i] = arguments[G__59504__i + 1]; ++G__59504__i;}
  rest59438 = new cljs.core.IndexedSeq(G__59504__a,0,null);
} 
return basapp$edb$remove_collection__delegate.call(this,db59437,rest59438);};
basapp$edb$remove_collection.cljs$lang$maxFixedArity = 1;
basapp$edb$remove_collection.cljs$lang$applyTo = (function (arglist__59505){
var db59437 = cljs.core.first(arglist__59505);
var rest59438 = cljs.core.rest(arglist__59505);
return basapp$edb$remove_collection__delegate(db59437,rest59438);
});
basapp$edb$remove_collection.cljs$core$IFn$_invoke$arity$variadic = basapp$edb$remove_collection__delegate;
return basapp$edb$remove_collection;
})()
;

/**
 * @param {...*} var_args
 */
basapp.edb.empty_collection = (function() { 
var basapp$edb$empty_collection__delegate = function (db59439,rest59440){
return cljs.core.assoc.call(null,db59439,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,entitydb.core.empty_collection,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db59439)], null),rest59440)));
};
var basapp$edb$empty_collection = function (db59439,var_args){
var rest59440 = null;
if (arguments.length > 1) {
var G__59506__i = 0, G__59506__a = new Array(arguments.length -  1);
while (G__59506__i < G__59506__a.length) {G__59506__a[G__59506__i] = arguments[G__59506__i + 1]; ++G__59506__i;}
  rest59440 = new cljs.core.IndexedSeq(G__59506__a,0,null);
} 
return basapp$edb$empty_collection__delegate.call(this,db59439,rest59440);};
basapp$edb$empty_collection.cljs$lang$maxFixedArity = 1;
basapp$edb$empty_collection.cljs$lang$applyTo = (function (arglist__59507){
var db59439 = cljs.core.first(arglist__59507);
var rest59440 = cljs.core.rest(arglist__59507);
return basapp$edb$empty_collection__delegate(db59439,rest59440);
});
basapp$edb$empty_collection.cljs$core$IFn$_invoke$arity$variadic = basapp$edb$empty_collection__delegate;
return basapp$edb$empty_collection;
})()
;

/**
 * @param {...*} var_args
 */
basapp.edb.remove_related_collection = (function() { 
var basapp$edb$remove_related_collection__delegate = function (db59441,rest59442){
return cljs.core.assoc.call(null,db59441,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,entitydb.core.remove_related_collection,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db59441)], null),rest59442)));
};
var basapp$edb$remove_related_collection = function (db59441,var_args){
var rest59442 = null;
if (arguments.length > 1) {
var G__59508__i = 0, G__59508__a = new Array(arguments.length -  1);
while (G__59508__i < G__59508__a.length) {G__59508__a[G__59508__i] = arguments[G__59508__i + 1]; ++G__59508__i;}
  rest59442 = new cljs.core.IndexedSeq(G__59508__a,0,null);
} 
return basapp$edb$remove_related_collection__delegate.call(this,db59441,rest59442);};
basapp$edb$remove_related_collection.cljs$lang$maxFixedArity = 1;
basapp$edb$remove_related_collection.cljs$lang$applyTo = (function (arglist__59509){
var db59441 = cljs.core.first(arglist__59509);
var rest59442 = cljs.core.rest(arglist__59509);
return basapp$edb$remove_related_collection__delegate(db59441,rest59442);
});
basapp$edb$remove_related_collection.cljs$core$IFn$_invoke$arity$variadic = basapp$edb$remove_related_collection__delegate;
return basapp$edb$remove_related_collection;
})()
;

/**
 * @param {...*} var_args
 */
basapp.edb.vacuum = (function() { 
var basapp$edb$vacuum__delegate = function (db59443,rest59444){
return cljs.core.assoc.call(null,db59443,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,entitydb.core.vacuum,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db59443)], null),rest59444)));
};
var basapp$edb$vacuum = function (db59443,var_args){
var rest59444 = null;
if (arguments.length > 1) {
var G__59510__i = 0, G__59510__a = new Array(arguments.length -  1);
while (G__59510__i < G__59510__a.length) {G__59510__a[G__59510__i] = arguments[G__59510__i + 1]; ++G__59510__i;}
  rest59444 = new cljs.core.IndexedSeq(G__59510__a,0,null);
} 
return basapp$edb$vacuum__delegate.call(this,db59443,rest59444);};
basapp$edb$vacuum.cljs$lang$maxFixedArity = 1;
basapp$edb$vacuum.cljs$lang$applyTo = (function (arglist__59515){
var db59443 = cljs.core.first(arglist__59515);
var rest59444 = cljs.core.rest(arglist__59515);
return basapp$edb$vacuum__delegate(db59443,rest59444);
});
basapp$edb$vacuum.cljs$core$IFn$_invoke$arity$variadic = basapp$edb$vacuum__delegate;
return basapp$edb$vacuum;
})()
;

//# sourceMappingURL=edb.js.map?rel=1563552885044
