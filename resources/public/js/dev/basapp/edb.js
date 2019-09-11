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
var basapp$edb$get_collection__delegate = function (db41385,rest41386){
return cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.get_collection),basapp.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db41385)], null),rest41386));
};
var basapp$edb$get_collection = function (db41385,var_args){
var rest41386 = null;
if (arguments.length > 1) {
var G__41429__i = 0, G__41429__a = new Array(arguments.length -  1);
while (G__41429__i < G__41429__a.length) {G__41429__a[G__41429__i] = arguments[G__41429__i + 1]; ++G__41429__i;}
  rest41386 = new cljs.core.IndexedSeq(G__41429__a,0,null);
} 
return basapp$edb$get_collection__delegate.call(this,db41385,rest41386);};
basapp$edb$get_collection.cljs$lang$maxFixedArity = 1;
basapp$edb$get_collection.cljs$lang$applyTo = (function (arglist__41430){
var db41385 = cljs.core.first(arglist__41430);
var rest41386 = cljs.core.rest(arglist__41430);
return basapp$edb$get_collection__delegate(db41385,rest41386);
});
basapp$edb$get_collection.cljs$core$IFn$_invoke$arity$variadic = basapp$edb$get_collection__delegate;
return basapp$edb$get_collection;
})()
;

/**
 * @param {...*} var_args
 */
basapp.edb.get_item_by_id = (function() { 
var basapp$edb$get_item_by_id__delegate = function (db41387,rest41388){
return cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.core.get_item_by_id,basapp.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db41387)], null),rest41388));
};
var basapp$edb$get_item_by_id = function (db41387,var_args){
var rest41388 = null;
if (arguments.length > 1) {
var G__41431__i = 0, G__41431__a = new Array(arguments.length -  1);
while (G__41431__i < G__41431__a.length) {G__41431__a[G__41431__i] = arguments[G__41431__i + 1]; ++G__41431__i;}
  rest41388 = new cljs.core.IndexedSeq(G__41431__a,0,null);
} 
return basapp$edb$get_item_by_id__delegate.call(this,db41387,rest41388);};
basapp$edb$get_item_by_id.cljs$lang$maxFixedArity = 1;
basapp$edb$get_item_by_id.cljs$lang$applyTo = (function (arglist__41432){
var db41387 = cljs.core.first(arglist__41432);
var rest41388 = cljs.core.rest(arglist__41432);
return basapp$edb$get_item_by_id__delegate(db41387,rest41388);
});
basapp$edb$get_item_by_id.cljs$core$IFn$_invoke$arity$variadic = basapp$edb$get_item_by_id__delegate;
return basapp$edb$get_item_by_id;
})()
;

/**
 * @param {...*} var_args
 */
basapp.edb.get_named_item = (function() { 
var basapp$edb$get_named_item__delegate = function (db41389,rest41390){
return cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.core.get_named_item,basapp.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db41389)], null),rest41390));
};
var basapp$edb$get_named_item = function (db41389,var_args){
var rest41390 = null;
if (arguments.length > 1) {
var G__41433__i = 0, G__41433__a = new Array(arguments.length -  1);
while (G__41433__i < G__41433__a.length) {G__41433__a[G__41433__i] = arguments[G__41433__i + 1]; ++G__41433__i;}
  rest41390 = new cljs.core.IndexedSeq(G__41433__a,0,null);
} 
return basapp$edb$get_named_item__delegate.call(this,db41389,rest41390);};
basapp$edb$get_named_item.cljs$lang$maxFixedArity = 1;
basapp$edb$get_named_item.cljs$lang$applyTo = (function (arglist__41434){
var db41389 = cljs.core.first(arglist__41434);
var rest41390 = cljs.core.rest(arglist__41434);
return basapp$edb$get_named_item__delegate(db41389,rest41390);
});
basapp$edb$get_named_item.cljs$core$IFn$_invoke$arity$variadic = basapp$edb$get_named_item__delegate;
return basapp$edb$get_named_item;
})()
;

/**
 * @param {...*} var_args
 */
basapp.edb.get_item_meta = (function() { 
var basapp$edb$get_item_meta__delegate = function (db41391,rest41392){
return cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.core.get_item_meta,basapp.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db41391)], null),rest41392));
};
var basapp$edb$get_item_meta = function (db41391,var_args){
var rest41392 = null;
if (arguments.length > 1) {
var G__41435__i = 0, G__41435__a = new Array(arguments.length -  1);
while (G__41435__i < G__41435__a.length) {G__41435__a[G__41435__i] = arguments[G__41435__i + 1]; ++G__41435__i;}
  rest41392 = new cljs.core.IndexedSeq(G__41435__a,0,null);
} 
return basapp$edb$get_item_meta__delegate.call(this,db41391,rest41392);};
basapp$edb$get_item_meta.cljs$lang$maxFixedArity = 1;
basapp$edb$get_item_meta.cljs$lang$applyTo = (function (arglist__41436){
var db41391 = cljs.core.first(arglist__41436);
var rest41392 = cljs.core.rest(arglist__41436);
return basapp$edb$get_item_meta__delegate(db41391,rest41392);
});
basapp$edb$get_item_meta.cljs$core$IFn$_invoke$arity$variadic = basapp$edb$get_item_meta__delegate;
return basapp$edb$get_item_meta;
})()
;

/**
 * @param {...*} var_args
 */
basapp.edb.get_named_item_meta = (function() { 
var basapp$edb$get_named_item_meta__delegate = function (db41393,rest41394){
return cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.core.get_named_item_meta,basapp.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db41393)], null),rest41394));
};
var basapp$edb$get_named_item_meta = function (db41393,var_args){
var rest41394 = null;
if (arguments.length > 1) {
var G__41437__i = 0, G__41437__a = new Array(arguments.length -  1);
while (G__41437__i < G__41437__a.length) {G__41437__a[G__41437__i] = arguments[G__41437__i + 1]; ++G__41437__i;}
  rest41394 = new cljs.core.IndexedSeq(G__41437__a,0,null);
} 
return basapp$edb$get_named_item_meta__delegate.call(this,db41393,rest41394);};
basapp$edb$get_named_item_meta.cljs$lang$maxFixedArity = 1;
basapp$edb$get_named_item_meta.cljs$lang$applyTo = (function (arglist__41438){
var db41393 = cljs.core.first(arglist__41438);
var rest41394 = cljs.core.rest(arglist__41438);
return basapp$edb$get_named_item_meta__delegate(db41393,rest41394);
});
basapp$edb$get_named_item_meta.cljs$core$IFn$_invoke$arity$variadic = basapp$edb$get_named_item_meta__delegate;
return basapp$edb$get_named_item_meta;
})()
;

/**
 * @param {...*} var_args
 */
basapp.edb.get_collection_meta = (function() { 
var basapp$edb$get_collection_meta__delegate = function (db41395,rest41396){
return cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.core.get_collection_meta,basapp.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db41395)], null),rest41396));
};
var basapp$edb$get_collection_meta = function (db41395,var_args){
var rest41396 = null;
if (arguments.length > 1) {
var G__41439__i = 0, G__41439__a = new Array(arguments.length -  1);
while (G__41439__i < G__41439__a.length) {G__41439__a[G__41439__i] = arguments[G__41439__i + 1]; ++G__41439__i;}
  rest41396 = new cljs.core.IndexedSeq(G__41439__a,0,null);
} 
return basapp$edb$get_collection_meta__delegate.call(this,db41395,rest41396);};
basapp$edb$get_collection_meta.cljs$lang$maxFixedArity = 1;
basapp$edb$get_collection_meta.cljs$lang$applyTo = (function (arglist__41440){
var db41395 = cljs.core.first(arglist__41440);
var rest41396 = cljs.core.rest(arglist__41440);
return basapp$edb$get_collection_meta__delegate(db41395,rest41396);
});
basapp$edb$get_collection_meta.cljs$core$IFn$_invoke$arity$variadic = basapp$edb$get_collection_meta__delegate;
return basapp$edb$get_collection_meta;
})()
;

/**
 * @param {...*} var_args
 */
basapp.edb.insert_item = (function() { 
var basapp$edb$insert_item__delegate = function (db41397,rest41398){
return cljs.core.assoc.call(null,db41397,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.insert_item),basapp.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db41397)], null),rest41398)));
};
var basapp$edb$insert_item = function (db41397,var_args){
var rest41398 = null;
if (arguments.length > 1) {
var G__41441__i = 0, G__41441__a = new Array(arguments.length -  1);
while (G__41441__i < G__41441__a.length) {G__41441__a[G__41441__i] = arguments[G__41441__i + 1]; ++G__41441__i;}
  rest41398 = new cljs.core.IndexedSeq(G__41441__a,0,null);
} 
return basapp$edb$insert_item__delegate.call(this,db41397,rest41398);};
basapp$edb$insert_item.cljs$lang$maxFixedArity = 1;
basapp$edb$insert_item.cljs$lang$applyTo = (function (arglist__41442){
var db41397 = cljs.core.first(arglist__41442);
var rest41398 = cljs.core.rest(arglist__41442);
return basapp$edb$insert_item__delegate(db41397,rest41398);
});
basapp$edb$insert_item.cljs$core$IFn$_invoke$arity$variadic = basapp$edb$insert_item__delegate;
return basapp$edb$insert_item;
})()
;

/**
 * @param {...*} var_args
 */
basapp.edb.insert_named_item = (function() { 
var basapp$edb$insert_named_item__delegate = function (db41399,rest41400){
return cljs.core.assoc.call(null,db41399,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.insert_named_item),basapp.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db41399)], null),rest41400)));
};
var basapp$edb$insert_named_item = function (db41399,var_args){
var rest41400 = null;
if (arguments.length > 1) {
var G__41443__i = 0, G__41443__a = new Array(arguments.length -  1);
while (G__41443__i < G__41443__a.length) {G__41443__a[G__41443__i] = arguments[G__41443__i + 1]; ++G__41443__i;}
  rest41400 = new cljs.core.IndexedSeq(G__41443__a,0,null);
} 
return basapp$edb$insert_named_item__delegate.call(this,db41399,rest41400);};
basapp$edb$insert_named_item.cljs$lang$maxFixedArity = 1;
basapp$edb$insert_named_item.cljs$lang$applyTo = (function (arglist__41444){
var db41399 = cljs.core.first(arglist__41444);
var rest41400 = cljs.core.rest(arglist__41444);
return basapp$edb$insert_named_item__delegate(db41399,rest41400);
});
basapp$edb$insert_named_item.cljs$core$IFn$_invoke$arity$variadic = basapp$edb$insert_named_item__delegate;
return basapp$edb$insert_named_item;
})()
;

/**
 * @param {...*} var_args
 */
basapp.edb.insert_collection = (function() { 
var basapp$edb$insert_collection__delegate = function (db41401,rest41402){
return cljs.core.assoc.call(null,db41401,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.insert_collection),basapp.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db41401)], null),rest41402)));
};
var basapp$edb$insert_collection = function (db41401,var_args){
var rest41402 = null;
if (arguments.length > 1) {
var G__41445__i = 0, G__41445__a = new Array(arguments.length -  1);
while (G__41445__i < G__41445__a.length) {G__41445__a[G__41445__i] = arguments[G__41445__i + 1]; ++G__41445__i;}
  rest41402 = new cljs.core.IndexedSeq(G__41445__a,0,null);
} 
return basapp$edb$insert_collection__delegate.call(this,db41401,rest41402);};
basapp$edb$insert_collection.cljs$lang$maxFixedArity = 1;
basapp$edb$insert_collection.cljs$lang$applyTo = (function (arglist__41446){
var db41401 = cljs.core.first(arglist__41446);
var rest41402 = cljs.core.rest(arglist__41446);
return basapp$edb$insert_collection__delegate(db41401,rest41402);
});
basapp$edb$insert_collection.cljs$core$IFn$_invoke$arity$variadic = basapp$edb$insert_collection__delegate;
return basapp$edb$insert_collection;
})()
;

/**
 * @param {...*} var_args
 */
basapp.edb.append_collection = (function() { 
var basapp$edb$append_collection__delegate = function (db41403,rest41404){
return cljs.core.assoc.call(null,db41403,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.append_collection),basapp.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db41403)], null),rest41404)));
};
var basapp$edb$append_collection = function (db41403,var_args){
var rest41404 = null;
if (arguments.length > 1) {
var G__41447__i = 0, G__41447__a = new Array(arguments.length -  1);
while (G__41447__i < G__41447__a.length) {G__41447__a[G__41447__i] = arguments[G__41447__i + 1]; ++G__41447__i;}
  rest41404 = new cljs.core.IndexedSeq(G__41447__a,0,null);
} 
return basapp$edb$append_collection__delegate.call(this,db41403,rest41404);};
basapp$edb$append_collection.cljs$lang$maxFixedArity = 1;
basapp$edb$append_collection.cljs$lang$applyTo = (function (arglist__41448){
var db41403 = cljs.core.first(arglist__41448);
var rest41404 = cljs.core.rest(arglist__41448);
return basapp$edb$append_collection__delegate(db41403,rest41404);
});
basapp$edb$append_collection.cljs$core$IFn$_invoke$arity$variadic = basapp$edb$append_collection__delegate;
return basapp$edb$append_collection;
})()
;

/**
 * @param {...*} var_args
 */
basapp.edb.prepend_collection = (function() { 
var basapp$edb$prepend_collection__delegate = function (db41405,rest41406){
return cljs.core.assoc.call(null,db41405,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.prepend_collection),basapp.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db41405)], null),rest41406)));
};
var basapp$edb$prepend_collection = function (db41405,var_args){
var rest41406 = null;
if (arguments.length > 1) {
var G__41449__i = 0, G__41449__a = new Array(arguments.length -  1);
while (G__41449__i < G__41449__a.length) {G__41449__a[G__41449__i] = arguments[G__41449__i + 1]; ++G__41449__i;}
  rest41406 = new cljs.core.IndexedSeq(G__41449__a,0,null);
} 
return basapp$edb$prepend_collection__delegate.call(this,db41405,rest41406);};
basapp$edb$prepend_collection.cljs$lang$maxFixedArity = 1;
basapp$edb$prepend_collection.cljs$lang$applyTo = (function (arglist__41450){
var db41405 = cljs.core.first(arglist__41450);
var rest41406 = cljs.core.rest(arglist__41450);
return basapp$edb$prepend_collection__delegate(db41405,rest41406);
});
basapp$edb$prepend_collection.cljs$core$IFn$_invoke$arity$variadic = basapp$edb$prepend_collection__delegate;
return basapp$edb$prepend_collection;
})()
;

/**
 * @param {...*} var_args
 */
basapp.edb.remove_item = (function() { 
var basapp$edb$remove_item__delegate = function (db41407,rest41408){
return cljs.core.assoc.call(null,db41407,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.remove_item),basapp.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db41407)], null),rest41408)));
};
var basapp$edb$remove_item = function (db41407,var_args){
var rest41408 = null;
if (arguments.length > 1) {
var G__41451__i = 0, G__41451__a = new Array(arguments.length -  1);
while (G__41451__i < G__41451__a.length) {G__41451__a[G__41451__i] = arguments[G__41451__i + 1]; ++G__41451__i;}
  rest41408 = new cljs.core.IndexedSeq(G__41451__a,0,null);
} 
return basapp$edb$remove_item__delegate.call(this,db41407,rest41408);};
basapp$edb$remove_item.cljs$lang$maxFixedArity = 1;
basapp$edb$remove_item.cljs$lang$applyTo = (function (arglist__41452){
var db41407 = cljs.core.first(arglist__41452);
var rest41408 = cljs.core.rest(arglist__41452);
return basapp$edb$remove_item__delegate(db41407,rest41408);
});
basapp$edb$remove_item.cljs$core$IFn$_invoke$arity$variadic = basapp$edb$remove_item__delegate;
return basapp$edb$remove_item;
})()
;

/**
 * @param {...*} var_args
 */
basapp.edb.insert_related_collection = (function() { 
var basapp$edb$insert_related_collection__delegate = function (db41409,rest41410){
return cljs.core.assoc.call(null,db41409,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.insert_related_collection),basapp.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db41409)], null),rest41410)));
};
var basapp$edb$insert_related_collection = function (db41409,var_args){
var rest41410 = null;
if (arguments.length > 1) {
var G__41453__i = 0, G__41453__a = new Array(arguments.length -  1);
while (G__41453__i < G__41453__a.length) {G__41453__a[G__41453__i] = arguments[G__41453__i + 1]; ++G__41453__i;}
  rest41410 = new cljs.core.IndexedSeq(G__41453__a,0,null);
} 
return basapp$edb$insert_related_collection__delegate.call(this,db41409,rest41410);};
basapp$edb$insert_related_collection.cljs$lang$maxFixedArity = 1;
basapp$edb$insert_related_collection.cljs$lang$applyTo = (function (arglist__41454){
var db41409 = cljs.core.first(arglist__41454);
var rest41410 = cljs.core.rest(arglist__41454);
return basapp$edb$insert_related_collection__delegate(db41409,rest41410);
});
basapp$edb$insert_related_collection.cljs$core$IFn$_invoke$arity$variadic = basapp$edb$insert_related_collection__delegate;
return basapp$edb$insert_related_collection;
})()
;

/**
 * @param {...*} var_args
 */
basapp.edb.append_related_collection = (function() { 
var basapp$edb$append_related_collection__delegate = function (db41411,rest41412){
return cljs.core.assoc.call(null,db41411,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.append_related_collection),basapp.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db41411)], null),rest41412)));
};
var basapp$edb$append_related_collection = function (db41411,var_args){
var rest41412 = null;
if (arguments.length > 1) {
var G__41455__i = 0, G__41455__a = new Array(arguments.length -  1);
while (G__41455__i < G__41455__a.length) {G__41455__a[G__41455__i] = arguments[G__41455__i + 1]; ++G__41455__i;}
  rest41412 = new cljs.core.IndexedSeq(G__41455__a,0,null);
} 
return basapp$edb$append_related_collection__delegate.call(this,db41411,rest41412);};
basapp$edb$append_related_collection.cljs$lang$maxFixedArity = 1;
basapp$edb$append_related_collection.cljs$lang$applyTo = (function (arglist__41456){
var db41411 = cljs.core.first(arglist__41456);
var rest41412 = cljs.core.rest(arglist__41456);
return basapp$edb$append_related_collection__delegate(db41411,rest41412);
});
basapp$edb$append_related_collection.cljs$core$IFn$_invoke$arity$variadic = basapp$edb$append_related_collection__delegate;
return basapp$edb$append_related_collection;
})()
;

/**
 * @param {...*} var_args
 */
basapp.edb.prepend_related_collection = (function() { 
var basapp$edb$prepend_related_collection__delegate = function (db41413,rest41414){
return cljs.core.assoc.call(null,db41413,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.prepend_related_collection),basapp.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db41413)], null),rest41414)));
};
var basapp$edb$prepend_related_collection = function (db41413,var_args){
var rest41414 = null;
if (arguments.length > 1) {
var G__41457__i = 0, G__41457__a = new Array(arguments.length -  1);
while (G__41457__i < G__41457__a.length) {G__41457__a[G__41457__i] = arguments[G__41457__i + 1]; ++G__41457__i;}
  rest41414 = new cljs.core.IndexedSeq(G__41457__a,0,null);
} 
return basapp$edb$prepend_related_collection__delegate.call(this,db41413,rest41414);};
basapp$edb$prepend_related_collection.cljs$lang$maxFixedArity = 1;
basapp$edb$prepend_related_collection.cljs$lang$applyTo = (function (arglist__41458){
var db41413 = cljs.core.first(arglist__41458);
var rest41414 = cljs.core.rest(arglist__41458);
return basapp$edb$prepend_related_collection__delegate(db41413,rest41414);
});
basapp$edb$prepend_related_collection.cljs$core$IFn$_invoke$arity$variadic = basapp$edb$prepend_related_collection__delegate;
return basapp$edb$prepend_related_collection;
})()
;

/**
 * @param {...*} var_args
 */
basapp.edb.insert_meta = (function() { 
var basapp$edb$insert_meta__delegate = function (db41415,rest41416){
return cljs.core.assoc.call(null,db41415,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,entitydb.core.insert_meta,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db41415)], null),rest41416)));
};
var basapp$edb$insert_meta = function (db41415,var_args){
var rest41416 = null;
if (arguments.length > 1) {
var G__41459__i = 0, G__41459__a = new Array(arguments.length -  1);
while (G__41459__i < G__41459__a.length) {G__41459__a[G__41459__i] = arguments[G__41459__i + 1]; ++G__41459__i;}
  rest41416 = new cljs.core.IndexedSeq(G__41459__a,0,null);
} 
return basapp$edb$insert_meta__delegate.call(this,db41415,rest41416);};
basapp$edb$insert_meta.cljs$lang$maxFixedArity = 1;
basapp$edb$insert_meta.cljs$lang$applyTo = (function (arglist__41460){
var db41415 = cljs.core.first(arglist__41460);
var rest41416 = cljs.core.rest(arglist__41460);
return basapp$edb$insert_meta__delegate(db41415,rest41416);
});
basapp$edb$insert_meta.cljs$core$IFn$_invoke$arity$variadic = basapp$edb$insert_meta__delegate;
return basapp$edb$insert_meta;
})()
;

/**
 * @param {...*} var_args
 */
basapp.edb.remove_meta = (function() { 
var basapp$edb$remove_meta__delegate = function (db41417,rest41418){
return cljs.core.assoc.call(null,db41417,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,entitydb.core.remove_meta,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db41417)], null),rest41418)));
};
var basapp$edb$remove_meta = function (db41417,var_args){
var rest41418 = null;
if (arguments.length > 1) {
var G__41461__i = 0, G__41461__a = new Array(arguments.length -  1);
while (G__41461__i < G__41461__a.length) {G__41461__a[G__41461__i] = arguments[G__41461__i + 1]; ++G__41461__i;}
  rest41418 = new cljs.core.IndexedSeq(G__41461__a,0,null);
} 
return basapp$edb$remove_meta__delegate.call(this,db41417,rest41418);};
basapp$edb$remove_meta.cljs$lang$maxFixedArity = 1;
basapp$edb$remove_meta.cljs$lang$applyTo = (function (arglist__41462){
var db41417 = cljs.core.first(arglist__41462);
var rest41418 = cljs.core.rest(arglist__41462);
return basapp$edb$remove_meta__delegate(db41417,rest41418);
});
basapp$edb$remove_meta.cljs$core$IFn$_invoke$arity$variadic = basapp$edb$remove_meta__delegate;
return basapp$edb$remove_meta;
})()
;

/**
 * @param {...*} var_args
 */
basapp.edb.remove_named_item = (function() { 
var basapp$edb$remove_named_item__delegate = function (db41419,rest41420){
return cljs.core.assoc.call(null,db41419,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,entitydb.core.remove_named_item,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db41419)], null),rest41420)));
};
var basapp$edb$remove_named_item = function (db41419,var_args){
var rest41420 = null;
if (arguments.length > 1) {
var G__41463__i = 0, G__41463__a = new Array(arguments.length -  1);
while (G__41463__i < G__41463__a.length) {G__41463__a[G__41463__i] = arguments[G__41463__i + 1]; ++G__41463__i;}
  rest41420 = new cljs.core.IndexedSeq(G__41463__a,0,null);
} 
return basapp$edb$remove_named_item__delegate.call(this,db41419,rest41420);};
basapp$edb$remove_named_item.cljs$lang$maxFixedArity = 1;
basapp$edb$remove_named_item.cljs$lang$applyTo = (function (arglist__41464){
var db41419 = cljs.core.first(arglist__41464);
var rest41420 = cljs.core.rest(arglist__41464);
return basapp$edb$remove_named_item__delegate(db41419,rest41420);
});
basapp$edb$remove_named_item.cljs$core$IFn$_invoke$arity$variadic = basapp$edb$remove_named_item__delegate;
return basapp$edb$remove_named_item;
})()
;

/**
 * @param {...*} var_args
 */
basapp.edb.remove_collection = (function() { 
var basapp$edb$remove_collection__delegate = function (db41421,rest41422){
return cljs.core.assoc.call(null,db41421,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,entitydb.core.remove_collection,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db41421)], null),rest41422)));
};
var basapp$edb$remove_collection = function (db41421,var_args){
var rest41422 = null;
if (arguments.length > 1) {
var G__41465__i = 0, G__41465__a = new Array(arguments.length -  1);
while (G__41465__i < G__41465__a.length) {G__41465__a[G__41465__i] = arguments[G__41465__i + 1]; ++G__41465__i;}
  rest41422 = new cljs.core.IndexedSeq(G__41465__a,0,null);
} 
return basapp$edb$remove_collection__delegate.call(this,db41421,rest41422);};
basapp$edb$remove_collection.cljs$lang$maxFixedArity = 1;
basapp$edb$remove_collection.cljs$lang$applyTo = (function (arglist__41466){
var db41421 = cljs.core.first(arglist__41466);
var rest41422 = cljs.core.rest(arglist__41466);
return basapp$edb$remove_collection__delegate(db41421,rest41422);
});
basapp$edb$remove_collection.cljs$core$IFn$_invoke$arity$variadic = basapp$edb$remove_collection__delegate;
return basapp$edb$remove_collection;
})()
;

/**
 * @param {...*} var_args
 */
basapp.edb.empty_collection = (function() { 
var basapp$edb$empty_collection__delegate = function (db41423,rest41424){
return cljs.core.assoc.call(null,db41423,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,entitydb.core.empty_collection,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db41423)], null),rest41424)));
};
var basapp$edb$empty_collection = function (db41423,var_args){
var rest41424 = null;
if (arguments.length > 1) {
var G__41467__i = 0, G__41467__a = new Array(arguments.length -  1);
while (G__41467__i < G__41467__a.length) {G__41467__a[G__41467__i] = arguments[G__41467__i + 1]; ++G__41467__i;}
  rest41424 = new cljs.core.IndexedSeq(G__41467__a,0,null);
} 
return basapp$edb$empty_collection__delegate.call(this,db41423,rest41424);};
basapp$edb$empty_collection.cljs$lang$maxFixedArity = 1;
basapp$edb$empty_collection.cljs$lang$applyTo = (function (arglist__41468){
var db41423 = cljs.core.first(arglist__41468);
var rest41424 = cljs.core.rest(arglist__41468);
return basapp$edb$empty_collection__delegate(db41423,rest41424);
});
basapp$edb$empty_collection.cljs$core$IFn$_invoke$arity$variadic = basapp$edb$empty_collection__delegate;
return basapp$edb$empty_collection;
})()
;

/**
 * @param {...*} var_args
 */
basapp.edb.remove_related_collection = (function() { 
var basapp$edb$remove_related_collection__delegate = function (db41425,rest41426){
return cljs.core.assoc.call(null,db41425,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,entitydb.core.remove_related_collection,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db41425)], null),rest41426)));
};
var basapp$edb$remove_related_collection = function (db41425,var_args){
var rest41426 = null;
if (arguments.length > 1) {
var G__41469__i = 0, G__41469__a = new Array(arguments.length -  1);
while (G__41469__i < G__41469__a.length) {G__41469__a[G__41469__i] = arguments[G__41469__i + 1]; ++G__41469__i;}
  rest41426 = new cljs.core.IndexedSeq(G__41469__a,0,null);
} 
return basapp$edb$remove_related_collection__delegate.call(this,db41425,rest41426);};
basapp$edb$remove_related_collection.cljs$lang$maxFixedArity = 1;
basapp$edb$remove_related_collection.cljs$lang$applyTo = (function (arglist__41470){
var db41425 = cljs.core.first(arglist__41470);
var rest41426 = cljs.core.rest(arglist__41470);
return basapp$edb$remove_related_collection__delegate(db41425,rest41426);
});
basapp$edb$remove_related_collection.cljs$core$IFn$_invoke$arity$variadic = basapp$edb$remove_related_collection__delegate;
return basapp$edb$remove_related_collection;
})()
;

/**
 * @param {...*} var_args
 */
basapp.edb.vacuum = (function() { 
var basapp$edb$vacuum__delegate = function (db41427,rest41428){
return cljs.core.assoc.call(null,db41427,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,entitydb.core.vacuum,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db41427)], null),rest41428)));
};
var basapp$edb$vacuum = function (db41427,var_args){
var rest41428 = null;
if (arguments.length > 1) {
var G__41471__i = 0, G__41471__a = new Array(arguments.length -  1);
while (G__41471__i < G__41471__a.length) {G__41471__a[G__41471__i] = arguments[G__41471__i + 1]; ++G__41471__i;}
  rest41428 = new cljs.core.IndexedSeq(G__41471__a,0,null);
} 
return basapp$edb$vacuum__delegate.call(this,db41427,rest41428);};
basapp$edb$vacuum.cljs$lang$maxFixedArity = 1;
basapp$edb$vacuum.cljs$lang$applyTo = (function (arglist__41472){
var db41427 = cljs.core.first(arglist__41472);
var rest41428 = cljs.core.rest(arglist__41472);
return basapp$edb$vacuum__delegate(db41427,rest41428);
});
basapp$edb$vacuum.cljs$core$IFn$_invoke$arity$variadic = basapp$edb$vacuum__delegate;
return basapp$edb$vacuum;
})()
;

//# sourceMappingURL=edb.js.map?rel=1568104889610
