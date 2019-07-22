// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3949__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3949__auto__){
return or__3949__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3949__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__73251_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__73251_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__73252 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__73253 = null;
var count__73254 = (0);
var i__73255 = (0);
while(true){
if((i__73255 < count__73254)){
var n = cljs.core._nth.call(null,chunk__73253,i__73255);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__73256 = seq__73252;
var G__73257 = chunk__73253;
var G__73258 = count__73254;
var G__73259 = (i__73255 + (1));
seq__73252 = G__73256;
chunk__73253 = G__73257;
count__73254 = G__73258;
i__73255 = G__73259;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__73252);
if(temp__5720__auto__){
var seq__73252__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73252__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__73252__$1);
var G__73260 = cljs.core.chunk_rest.call(null,seq__73252__$1);
var G__73261 = c__4351__auto__;
var G__73262 = cljs.core.count.call(null,c__4351__auto__);
var G__73263 = (0);
seq__73252 = G__73260;
chunk__73253 = G__73261;
count__73254 = G__73262;
i__73255 = G__73263;
continue;
} else {
var n = cljs.core.first.call(null,seq__73252__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__73264 = cljs.core.next.call(null,seq__73252__$1);
var G__73265 = null;
var G__73266 = (0);
var G__73267 = (0);
seq__73252 = G__73264;
chunk__73253 = G__73265;
count__73254 = G__73266;
i__73255 = G__73267;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__73268){
var vec__73269 = p__73268;
var _ = cljs.core.nth.call(null,vec__73269,(0),null);
var v = cljs.core.nth.call(null,vec__73269,(1),null);
var and__3938__auto__ = v;
if(cljs.core.truth_(and__3938__auto__)){
return v.call(null,dep);
} else {
return and__3938__auto__;
}
}),cljs.core.filter.call(null,(function (p__73272){
var vec__73273 = p__73272;
var k = cljs.core.nth.call(null,vec__73273,(0),null);
var v = cljs.core.nth.call(null,vec__73273,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__73285_73293 = cljs.core.seq.call(null,deps);
var chunk__73286_73294 = null;
var count__73287_73295 = (0);
var i__73288_73296 = (0);
while(true){
if((i__73288_73296 < count__73287_73295)){
var dep_73297 = cljs.core._nth.call(null,chunk__73286_73294,i__73288_73296);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_73297;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_73297));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_73297,(depth + (1)),state);
} else {
}


var G__73298 = seq__73285_73293;
var G__73299 = chunk__73286_73294;
var G__73300 = count__73287_73295;
var G__73301 = (i__73288_73296 + (1));
seq__73285_73293 = G__73298;
chunk__73286_73294 = G__73299;
count__73287_73295 = G__73300;
i__73288_73296 = G__73301;
continue;
} else {
var temp__5720__auto___73302 = cljs.core.seq.call(null,seq__73285_73293);
if(temp__5720__auto___73302){
var seq__73285_73303__$1 = temp__5720__auto___73302;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73285_73303__$1)){
var c__4351__auto___73304 = cljs.core.chunk_first.call(null,seq__73285_73303__$1);
var G__73305 = cljs.core.chunk_rest.call(null,seq__73285_73303__$1);
var G__73306 = c__4351__auto___73304;
var G__73307 = cljs.core.count.call(null,c__4351__auto___73304);
var G__73308 = (0);
seq__73285_73293 = G__73305;
chunk__73286_73294 = G__73306;
count__73287_73295 = G__73307;
i__73288_73296 = G__73308;
continue;
} else {
var dep_73309 = cljs.core.first.call(null,seq__73285_73303__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_73309;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_73309));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_73309,(depth + (1)),state);
} else {
}


var G__73310 = cljs.core.next.call(null,seq__73285_73303__$1);
var G__73311 = null;
var G__73312 = (0);
var G__73313 = (0);
seq__73285_73293 = G__73310;
chunk__73286_73294 = G__73311;
count__73287_73295 = G__73312;
i__73288_73296 = G__73313;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__73289){
var vec__73290 = p__73289;
var seq__73291 = cljs.core.seq.call(null,vec__73290);
var first__73292 = cljs.core.first.call(null,seq__73291);
var seq__73291__$1 = cljs.core.next.call(null,seq__73291);
var x = first__73292;
var xs = seq__73291__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__73290,seq__73291,first__73292,seq__73291__$1,x,xs,get_deps__$1){
return (function (p1__73276_SHARP_){
return clojure.set.difference.call(null,p1__73276_SHARP_,x);
});})(vec__73290,seq__73291,first__73292,seq__73291__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__73314 = cljs.core.seq.call(null,provides);
var chunk__73315 = null;
var count__73316 = (0);
var i__73317 = (0);
while(true){
if((i__73317 < count__73316)){
var prov = cljs.core._nth.call(null,chunk__73315,i__73317);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__73318_73326 = cljs.core.seq.call(null,requires);
var chunk__73319_73327 = null;
var count__73320_73328 = (0);
var i__73321_73329 = (0);
while(true){
if((i__73321_73329 < count__73320_73328)){
var req_73330 = cljs.core._nth.call(null,chunk__73319_73327,i__73321_73329);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_73330,prov);


var G__73331 = seq__73318_73326;
var G__73332 = chunk__73319_73327;
var G__73333 = count__73320_73328;
var G__73334 = (i__73321_73329 + (1));
seq__73318_73326 = G__73331;
chunk__73319_73327 = G__73332;
count__73320_73328 = G__73333;
i__73321_73329 = G__73334;
continue;
} else {
var temp__5720__auto___73335 = cljs.core.seq.call(null,seq__73318_73326);
if(temp__5720__auto___73335){
var seq__73318_73336__$1 = temp__5720__auto___73335;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73318_73336__$1)){
var c__4351__auto___73337 = cljs.core.chunk_first.call(null,seq__73318_73336__$1);
var G__73338 = cljs.core.chunk_rest.call(null,seq__73318_73336__$1);
var G__73339 = c__4351__auto___73337;
var G__73340 = cljs.core.count.call(null,c__4351__auto___73337);
var G__73341 = (0);
seq__73318_73326 = G__73338;
chunk__73319_73327 = G__73339;
count__73320_73328 = G__73340;
i__73321_73329 = G__73341;
continue;
} else {
var req_73342 = cljs.core.first.call(null,seq__73318_73336__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_73342,prov);


var G__73343 = cljs.core.next.call(null,seq__73318_73336__$1);
var G__73344 = null;
var G__73345 = (0);
var G__73346 = (0);
seq__73318_73326 = G__73343;
chunk__73319_73327 = G__73344;
count__73320_73328 = G__73345;
i__73321_73329 = G__73346;
continue;
}
} else {
}
}
break;
}


var G__73347 = seq__73314;
var G__73348 = chunk__73315;
var G__73349 = count__73316;
var G__73350 = (i__73317 + (1));
seq__73314 = G__73347;
chunk__73315 = G__73348;
count__73316 = G__73349;
i__73317 = G__73350;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__73314);
if(temp__5720__auto__){
var seq__73314__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73314__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__73314__$1);
var G__73351 = cljs.core.chunk_rest.call(null,seq__73314__$1);
var G__73352 = c__4351__auto__;
var G__73353 = cljs.core.count.call(null,c__4351__auto__);
var G__73354 = (0);
seq__73314 = G__73351;
chunk__73315 = G__73352;
count__73316 = G__73353;
i__73317 = G__73354;
continue;
} else {
var prov = cljs.core.first.call(null,seq__73314__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__73322_73355 = cljs.core.seq.call(null,requires);
var chunk__73323_73356 = null;
var count__73324_73357 = (0);
var i__73325_73358 = (0);
while(true){
if((i__73325_73358 < count__73324_73357)){
var req_73359 = cljs.core._nth.call(null,chunk__73323_73356,i__73325_73358);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_73359,prov);


var G__73360 = seq__73322_73355;
var G__73361 = chunk__73323_73356;
var G__73362 = count__73324_73357;
var G__73363 = (i__73325_73358 + (1));
seq__73322_73355 = G__73360;
chunk__73323_73356 = G__73361;
count__73324_73357 = G__73362;
i__73325_73358 = G__73363;
continue;
} else {
var temp__5720__auto___73364__$1 = cljs.core.seq.call(null,seq__73322_73355);
if(temp__5720__auto___73364__$1){
var seq__73322_73365__$1 = temp__5720__auto___73364__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73322_73365__$1)){
var c__4351__auto___73366 = cljs.core.chunk_first.call(null,seq__73322_73365__$1);
var G__73367 = cljs.core.chunk_rest.call(null,seq__73322_73365__$1);
var G__73368 = c__4351__auto___73366;
var G__73369 = cljs.core.count.call(null,c__4351__auto___73366);
var G__73370 = (0);
seq__73322_73355 = G__73367;
chunk__73323_73356 = G__73368;
count__73324_73357 = G__73369;
i__73325_73358 = G__73370;
continue;
} else {
var req_73371 = cljs.core.first.call(null,seq__73322_73365__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_73371,prov);


var G__73372 = cljs.core.next.call(null,seq__73322_73365__$1);
var G__73373 = null;
var G__73374 = (0);
var G__73375 = (0);
seq__73322_73355 = G__73372;
chunk__73323_73356 = G__73373;
count__73324_73357 = G__73374;
i__73325_73358 = G__73375;
continue;
}
} else {
}
}
break;
}


var G__73376 = cljs.core.next.call(null,seq__73314__$1);
var G__73377 = null;
var G__73378 = (0);
var G__73379 = (0);
seq__73314 = G__73376;
chunk__73315 = G__73377;
count__73316 = G__73378;
i__73317 = G__73379;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__73380_73384 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__73381_73385 = null;
var count__73382_73386 = (0);
var i__73383_73387 = (0);
while(true){
if((i__73383_73387 < count__73382_73386)){
var ns_73388 = cljs.core._nth.call(null,chunk__73381_73385,i__73383_73387);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_73388);


var G__73389 = seq__73380_73384;
var G__73390 = chunk__73381_73385;
var G__73391 = count__73382_73386;
var G__73392 = (i__73383_73387 + (1));
seq__73380_73384 = G__73389;
chunk__73381_73385 = G__73390;
count__73382_73386 = G__73391;
i__73383_73387 = G__73392;
continue;
} else {
var temp__5720__auto___73393 = cljs.core.seq.call(null,seq__73380_73384);
if(temp__5720__auto___73393){
var seq__73380_73394__$1 = temp__5720__auto___73393;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73380_73394__$1)){
var c__4351__auto___73395 = cljs.core.chunk_first.call(null,seq__73380_73394__$1);
var G__73396 = cljs.core.chunk_rest.call(null,seq__73380_73394__$1);
var G__73397 = c__4351__auto___73395;
var G__73398 = cljs.core.count.call(null,c__4351__auto___73395);
var G__73399 = (0);
seq__73380_73384 = G__73396;
chunk__73381_73385 = G__73397;
count__73382_73386 = G__73398;
i__73383_73387 = G__73399;
continue;
} else {
var ns_73400 = cljs.core.first.call(null,seq__73380_73394__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_73400);


var G__73401 = cljs.core.next.call(null,seq__73380_73394__$1);
var G__73402 = null;
var G__73403 = (0);
var G__73404 = (0);
seq__73380_73384 = G__73401;
chunk__73381_73385 = G__73402;
count__73382_73386 = G__73403;
i__73383_73387 = G__73404;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3949__auto__ = goog.require__;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__73405__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__73405 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__73406__i = 0, G__73406__a = new Array(arguments.length -  0);
while (G__73406__i < G__73406__a.length) {G__73406__a[G__73406__i] = arguments[G__73406__i + 0]; ++G__73406__i;}
  args = new cljs.core.IndexedSeq(G__73406__a,0,null);
} 
return G__73405__delegate.call(this,args);};
G__73405.cljs$lang$maxFixedArity = 0;
G__73405.cljs$lang$applyTo = (function (arglist__73407){
var args = cljs.core.seq(arglist__73407);
return G__73405__delegate(args);
});
G__73405.cljs$core$IFn$_invoke$arity$variadic = G__73405__delegate;
return G__73405;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__73408_SHARP_,p2__73409_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__73408_SHARP_)].join('')),p2__73409_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__73410_SHARP_,p2__73411_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__73410_SHARP_)].join(''),p2__73411_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__73412 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__73412.addCallback(((function (G__73412){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__73412))
);

G__73412.addErrback(((function (G__73412){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__73412))
);

return G__73412;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e73413){if((e73413 instanceof Error)){
var e = e73413;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e73413;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e73414){if((e73414 instanceof Error)){
var e = e73414;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e73414;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__73415 = cljs.core._EQ_;
var expr__73416 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__73415.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__73416))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__73415.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__73416))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__73415.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__73416))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__73415,expr__73416){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__73415,expr__73416))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__73418,callback){
var map__73419 = p__73418;
var map__73419__$1 = ((((!((map__73419 == null)))?(((((map__73419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73419):map__73419);
var file_msg = map__73419__$1;
var request_url = cljs.core.get.call(null,map__73419__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3949__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__73419,map__73419__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__73419,map__73419__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__58857__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58857__auto__){
return (function (){
var f__58858__auto__ = (function (){var switch__24619__auto__ = ((function (c__58857__auto__){
return (function (state_73457){
var state_val_73458 = (state_73457[(1)]);
if((state_val_73458 === (7))){
var inst_73453 = (state_73457[(2)]);
var state_73457__$1 = state_73457;
var statearr_73459_73485 = state_73457__$1;
(statearr_73459_73485[(2)] = inst_73453);

(statearr_73459_73485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73458 === (1))){
var state_73457__$1 = state_73457;
var statearr_73460_73486 = state_73457__$1;
(statearr_73460_73486[(2)] = null);

(statearr_73460_73486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73458 === (4))){
var inst_73423 = (state_73457[(7)]);
var inst_73423__$1 = (state_73457[(2)]);
var state_73457__$1 = (function (){var statearr_73461 = state_73457;
(statearr_73461[(7)] = inst_73423__$1);

return statearr_73461;
})();
if(cljs.core.truth_(inst_73423__$1)){
var statearr_73462_73487 = state_73457__$1;
(statearr_73462_73487[(1)] = (5));

} else {
var statearr_73463_73488 = state_73457__$1;
(statearr_73463_73488[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73458 === (15))){
var inst_73436 = (state_73457[(8)]);
var inst_73438 = (state_73457[(9)]);
var inst_73440 = inst_73438.call(null,inst_73436);
var state_73457__$1 = state_73457;
var statearr_73464_73489 = state_73457__$1;
(statearr_73464_73489[(2)] = inst_73440);

(statearr_73464_73489[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73458 === (13))){
var inst_73447 = (state_73457[(2)]);
var state_73457__$1 = state_73457;
var statearr_73465_73490 = state_73457__$1;
(statearr_73465_73490[(2)] = inst_73447);

(statearr_73465_73490[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73458 === (6))){
var state_73457__$1 = state_73457;
var statearr_73466_73491 = state_73457__$1;
(statearr_73466_73491[(2)] = null);

(statearr_73466_73491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73458 === (17))){
var inst_73444 = (state_73457[(2)]);
var state_73457__$1 = state_73457;
var statearr_73467_73492 = state_73457__$1;
(statearr_73467_73492[(2)] = inst_73444);

(statearr_73467_73492[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73458 === (3))){
var inst_73455 = (state_73457[(2)]);
var state_73457__$1 = state_73457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73457__$1,inst_73455);
} else {
if((state_val_73458 === (12))){
var state_73457__$1 = state_73457;
var statearr_73468_73493 = state_73457__$1;
(statearr_73468_73493[(2)] = null);

(statearr_73468_73493[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73458 === (2))){
var state_73457__$1 = state_73457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73457__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_73458 === (11))){
var inst_73428 = (state_73457[(10)]);
var inst_73434 = figwheel.client.file_reloading.blocking_load.call(null,inst_73428);
var state_73457__$1 = state_73457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73457__$1,(14),inst_73434);
} else {
if((state_val_73458 === (9))){
var inst_73428 = (state_73457[(10)]);
var state_73457__$1 = state_73457;
if(cljs.core.truth_(inst_73428)){
var statearr_73469_73494 = state_73457__$1;
(statearr_73469_73494[(1)] = (11));

} else {
var statearr_73470_73495 = state_73457__$1;
(statearr_73470_73495[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73458 === (5))){
var inst_73423 = (state_73457[(7)]);
var inst_73429 = (state_73457[(11)]);
var inst_73428 = cljs.core.nth.call(null,inst_73423,(0),null);
var inst_73429__$1 = cljs.core.nth.call(null,inst_73423,(1),null);
var state_73457__$1 = (function (){var statearr_73471 = state_73457;
(statearr_73471[(10)] = inst_73428);

(statearr_73471[(11)] = inst_73429__$1);

return statearr_73471;
})();
if(cljs.core.truth_(inst_73429__$1)){
var statearr_73472_73496 = state_73457__$1;
(statearr_73472_73496[(1)] = (8));

} else {
var statearr_73473_73497 = state_73457__$1;
(statearr_73473_73497[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73458 === (14))){
var inst_73428 = (state_73457[(10)]);
var inst_73438 = (state_73457[(9)]);
var inst_73436 = (state_73457[(2)]);
var inst_73437 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_73438__$1 = cljs.core.get.call(null,inst_73437,inst_73428);
var state_73457__$1 = (function (){var statearr_73474 = state_73457;
(statearr_73474[(8)] = inst_73436);

(statearr_73474[(9)] = inst_73438__$1);

return statearr_73474;
})();
if(cljs.core.truth_(inst_73438__$1)){
var statearr_73475_73498 = state_73457__$1;
(statearr_73475_73498[(1)] = (15));

} else {
var statearr_73476_73499 = state_73457__$1;
(statearr_73476_73499[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73458 === (16))){
var inst_73436 = (state_73457[(8)]);
var inst_73442 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_73436);
var state_73457__$1 = state_73457;
var statearr_73477_73500 = state_73457__$1;
(statearr_73477_73500[(2)] = inst_73442);

(statearr_73477_73500[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73458 === (10))){
var inst_73449 = (state_73457[(2)]);
var state_73457__$1 = (function (){var statearr_73478 = state_73457;
(statearr_73478[(12)] = inst_73449);

return statearr_73478;
})();
var statearr_73479_73501 = state_73457__$1;
(statearr_73479_73501[(2)] = null);

(statearr_73479_73501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73458 === (8))){
var inst_73429 = (state_73457[(11)]);
var inst_73431 = eval(inst_73429);
var state_73457__$1 = state_73457;
var statearr_73480_73502 = state_73457__$1;
(statearr_73480_73502[(2)] = inst_73431);

(statearr_73480_73502[(1)] = (10));


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
});})(c__58857__auto__))
;
return ((function (switch__24619__auto__,c__58857__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24620__auto__ = null;
var figwheel$client$file_reloading$state_machine__24620__auto____0 = (function (){
var statearr_73481 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73481[(0)] = figwheel$client$file_reloading$state_machine__24620__auto__);

(statearr_73481[(1)] = (1));

return statearr_73481;
});
var figwheel$client$file_reloading$state_machine__24620__auto____1 = (function (state_73457){
while(true){
var ret_value__24621__auto__ = (function (){try{while(true){
var result__24622__auto__ = switch__24619__auto__.call(null,state_73457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24622__auto__;
}
break;
}
}catch (e73482){if((e73482 instanceof Object)){
var ex__24623__auto__ = e73482;
var statearr_73483_73503 = state_73457;
(statearr_73483_73503[(5)] = ex__24623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73504 = state_73457;
state_73457 = G__73504;
continue;
} else {
return ret_value__24621__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24620__auto__ = function(state_73457){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24620__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24620__auto____1.call(this,state_73457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24620__auto____0;
figwheel$client$file_reloading$state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24620__auto____1;
return figwheel$client$file_reloading$state_machine__24620__auto__;
})()
;})(switch__24619__auto__,c__58857__auto__))
})();
var state__58859__auto__ = (function (){var statearr_73484 = f__58858__auto__.call(null);
(statearr_73484[(6)] = c__58857__auto__);

return statearr_73484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58859__auto__);
});})(c__58857__auto__))
);

return c__58857__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__73506 = arguments.length;
switch (G__73506) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__73508,callback){
var map__73509 = p__73508;
var map__73509__$1 = ((((!((map__73509 == null)))?(((((map__73509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73509):map__73509);
var file_msg = map__73509__$1;
var namespace = cljs.core.get.call(null,map__73509__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__73509,map__73509__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__73509,map__73509__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__73511){
var map__73512 = p__73511;
var map__73512__$1 = ((((!((map__73512 == null)))?(((((map__73512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73512.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73512):map__73512);
var file_msg = map__73512__$1;
var namespace = cljs.core.get.call(null,map__73512__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__73514){
var map__73515 = p__73514;
var map__73515__$1 = ((((!((map__73515 == null)))?(((((map__73515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73515):map__73515);
var file_msg = map__73515__$1;
var namespace = cljs.core.get.call(null,map__73515__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3938__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3938__auto__){
var or__3949__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3938__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__73517,callback){
var map__73518 = p__73517;
var map__73518__$1 = ((((!((map__73518 == null)))?(((((map__73518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73518):map__73518);
var file_msg = map__73518__$1;
var request_url = cljs.core.get.call(null,map__73518__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__73518__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__58857__auto___73568 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58857__auto___73568,out){
return (function (){
var f__58858__auto__ = (function (){var switch__24619__auto__ = ((function (c__58857__auto___73568,out){
return (function (state_73553){
var state_val_73554 = (state_73553[(1)]);
if((state_val_73554 === (1))){
var inst_73527 = cljs.core.seq.call(null,files);
var inst_73528 = cljs.core.first.call(null,inst_73527);
var inst_73529 = cljs.core.next.call(null,inst_73527);
var inst_73530 = files;
var state_73553__$1 = (function (){var statearr_73555 = state_73553;
(statearr_73555[(7)] = inst_73530);

(statearr_73555[(8)] = inst_73528);

(statearr_73555[(9)] = inst_73529);

return statearr_73555;
})();
var statearr_73556_73569 = state_73553__$1;
(statearr_73556_73569[(2)] = null);

(statearr_73556_73569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73554 === (2))){
var inst_73530 = (state_73553[(7)]);
var inst_73536 = (state_73553[(10)]);
var inst_73535 = cljs.core.seq.call(null,inst_73530);
var inst_73536__$1 = cljs.core.first.call(null,inst_73535);
var inst_73537 = cljs.core.next.call(null,inst_73535);
var inst_73538 = (inst_73536__$1 == null);
var inst_73539 = cljs.core.not.call(null,inst_73538);
var state_73553__$1 = (function (){var statearr_73557 = state_73553;
(statearr_73557[(11)] = inst_73537);

(statearr_73557[(10)] = inst_73536__$1);

return statearr_73557;
})();
if(inst_73539){
var statearr_73558_73570 = state_73553__$1;
(statearr_73558_73570[(1)] = (4));

} else {
var statearr_73559_73571 = state_73553__$1;
(statearr_73559_73571[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73554 === (3))){
var inst_73551 = (state_73553[(2)]);
var state_73553__$1 = state_73553;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73553__$1,inst_73551);
} else {
if((state_val_73554 === (4))){
var inst_73536 = (state_73553[(10)]);
var inst_73541 = figwheel.client.file_reloading.reload_js_file.call(null,inst_73536);
var state_73553__$1 = state_73553;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73553__$1,(7),inst_73541);
} else {
if((state_val_73554 === (5))){
var inst_73547 = cljs.core.async.close_BANG_.call(null,out);
var state_73553__$1 = state_73553;
var statearr_73560_73572 = state_73553__$1;
(statearr_73560_73572[(2)] = inst_73547);

(statearr_73560_73572[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73554 === (6))){
var inst_73549 = (state_73553[(2)]);
var state_73553__$1 = state_73553;
var statearr_73561_73573 = state_73553__$1;
(statearr_73561_73573[(2)] = inst_73549);

(statearr_73561_73573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73554 === (7))){
var inst_73537 = (state_73553[(11)]);
var inst_73543 = (state_73553[(2)]);
var inst_73544 = cljs.core.async.put_BANG_.call(null,out,inst_73543);
var inst_73530 = inst_73537;
var state_73553__$1 = (function (){var statearr_73562 = state_73553;
(statearr_73562[(12)] = inst_73544);

(statearr_73562[(7)] = inst_73530);

return statearr_73562;
})();
var statearr_73563_73574 = state_73553__$1;
(statearr_73563_73574[(2)] = null);

(statearr_73563_73574[(1)] = (2));


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
});})(c__58857__auto___73568,out))
;
return ((function (switch__24619__auto__,c__58857__auto___73568,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24620__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24620__auto____0 = (function (){
var statearr_73564 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73564[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24620__auto__);

(statearr_73564[(1)] = (1));

return statearr_73564;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24620__auto____1 = (function (state_73553){
while(true){
var ret_value__24621__auto__ = (function (){try{while(true){
var result__24622__auto__ = switch__24619__auto__.call(null,state_73553);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24622__auto__;
}
break;
}
}catch (e73565){if((e73565 instanceof Object)){
var ex__24623__auto__ = e73565;
var statearr_73566_73575 = state_73553;
(statearr_73566_73575[(5)] = ex__24623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73576 = state_73553;
state_73553 = G__73576;
continue;
} else {
return ret_value__24621__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24620__auto__ = function(state_73553){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24620__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24620__auto____1.call(this,state_73553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24620__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24620__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24620__auto__;
})()
;})(switch__24619__auto__,c__58857__auto___73568,out))
})();
var state__58859__auto__ = (function (){var statearr_73567 = f__58858__auto__.call(null);
(statearr_73567[(6)] = c__58857__auto___73568);

return statearr_73567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58859__auto__);
});})(c__58857__auto___73568,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__73577,opts){
var map__73578 = p__73577;
var map__73578__$1 = ((((!((map__73578 == null)))?(((((map__73578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73578):map__73578);
var eval_body = cljs.core.get.call(null,map__73578__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__73578__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3938__auto__ = eval_body;
if(cljs.core.truth_(and__3938__auto__)){
return typeof eval_body === 'string';
} else {
return and__3938__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e73580){var e = e73580;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__73581_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__73581_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__73582){
var vec__73583 = p__73582;
var k = cljs.core.nth.call(null,vec__73583,(0),null);
var v = cljs.core.nth.call(null,vec__73583,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__73586){
var vec__73587 = p__73586;
var k = cljs.core.nth.call(null,vec__73587,(0),null);
var v = cljs.core.nth.call(null,vec__73587,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__73593,p__73594){
var map__73595 = p__73593;
var map__73595__$1 = ((((!((map__73595 == null)))?(((((map__73595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73595):map__73595);
var opts = map__73595__$1;
var before_jsload = cljs.core.get.call(null,map__73595__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__73595__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__73595__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__73596 = p__73594;
var map__73596__$1 = ((((!((map__73596 == null)))?(((((map__73596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73596):map__73596);
var msg = map__73596__$1;
var files = cljs.core.get.call(null,map__73596__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__73596__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__73596__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__58857__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58857__auto__,map__73595,map__73595__$1,opts,before_jsload,on_jsload,reload_dependents,map__73596,map__73596__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__58858__auto__ = (function (){var switch__24619__auto__ = ((function (c__58857__auto__,map__73595,map__73595__$1,opts,before_jsload,on_jsload,reload_dependents,map__73596,map__73596__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_73750){
var state_val_73751 = (state_73750[(1)]);
if((state_val_73751 === (7))){
var inst_73611 = (state_73750[(7)]);
var inst_73613 = (state_73750[(8)]);
var inst_73610 = (state_73750[(9)]);
var inst_73612 = (state_73750[(10)]);
var inst_73618 = cljs.core._nth.call(null,inst_73611,inst_73613);
var inst_73619 = figwheel.client.file_reloading.eval_body.call(null,inst_73618,opts);
var inst_73620 = (inst_73613 + (1));
var tmp73752 = inst_73611;
var tmp73753 = inst_73610;
var tmp73754 = inst_73612;
var inst_73610__$1 = tmp73753;
var inst_73611__$1 = tmp73752;
var inst_73612__$1 = tmp73754;
var inst_73613__$1 = inst_73620;
var state_73750__$1 = (function (){var statearr_73755 = state_73750;
(statearr_73755[(11)] = inst_73619);

(statearr_73755[(7)] = inst_73611__$1);

(statearr_73755[(8)] = inst_73613__$1);

(statearr_73755[(9)] = inst_73610__$1);

(statearr_73755[(10)] = inst_73612__$1);

return statearr_73755;
})();
var statearr_73756_73839 = state_73750__$1;
(statearr_73756_73839[(2)] = null);

(statearr_73756_73839[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73751 === (20))){
var inst_73653 = (state_73750[(12)]);
var inst_73661 = figwheel.client.file_reloading.sort_files.call(null,inst_73653);
var state_73750__$1 = state_73750;
var statearr_73757_73840 = state_73750__$1;
(statearr_73757_73840[(2)] = inst_73661);

(statearr_73757_73840[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73751 === (27))){
var state_73750__$1 = state_73750;
var statearr_73758_73841 = state_73750__$1;
(statearr_73758_73841[(2)] = null);

(statearr_73758_73841[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73751 === (1))){
var inst_73602 = (state_73750[(13)]);
var inst_73599 = before_jsload.call(null,files);
var inst_73600 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_73601 = (function (){return ((function (inst_73602,inst_73599,inst_73600,state_val_73751,c__58857__auto__,map__73595,map__73595__$1,opts,before_jsload,on_jsload,reload_dependents,map__73596,map__73596__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__73590_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__73590_SHARP_);
});
;})(inst_73602,inst_73599,inst_73600,state_val_73751,c__58857__auto__,map__73595,map__73595__$1,opts,before_jsload,on_jsload,reload_dependents,map__73596,map__73596__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_73602__$1 = cljs.core.filter.call(null,inst_73601,files);
var inst_73603 = cljs.core.not_empty.call(null,inst_73602__$1);
var state_73750__$1 = (function (){var statearr_73759 = state_73750;
(statearr_73759[(13)] = inst_73602__$1);

(statearr_73759[(14)] = inst_73600);

(statearr_73759[(15)] = inst_73599);

return statearr_73759;
})();
if(cljs.core.truth_(inst_73603)){
var statearr_73760_73842 = state_73750__$1;
(statearr_73760_73842[(1)] = (2));

} else {
var statearr_73761_73843 = state_73750__$1;
(statearr_73761_73843[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73751 === (24))){
var state_73750__$1 = state_73750;
var statearr_73762_73844 = state_73750__$1;
(statearr_73762_73844[(2)] = null);

(statearr_73762_73844[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73751 === (39))){
var inst_73703 = (state_73750[(16)]);
var state_73750__$1 = state_73750;
var statearr_73763_73845 = state_73750__$1;
(statearr_73763_73845[(2)] = inst_73703);

(statearr_73763_73845[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73751 === (46))){
var inst_73745 = (state_73750[(2)]);
var state_73750__$1 = state_73750;
var statearr_73764_73846 = state_73750__$1;
(statearr_73764_73846[(2)] = inst_73745);

(statearr_73764_73846[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73751 === (4))){
var inst_73647 = (state_73750[(2)]);
var inst_73648 = cljs.core.List.EMPTY;
var inst_73649 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_73648);
var inst_73650 = (function (){return ((function (inst_73647,inst_73648,inst_73649,state_val_73751,c__58857__auto__,map__73595,map__73595__$1,opts,before_jsload,on_jsload,reload_dependents,map__73596,map__73596__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__73591_SHARP_){
var and__3938__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__73591_SHARP_);
if(cljs.core.truth_(and__3938__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__73591_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__73591_SHARP_))));
} else {
return and__3938__auto__;
}
});
;})(inst_73647,inst_73648,inst_73649,state_val_73751,c__58857__auto__,map__73595,map__73595__$1,opts,before_jsload,on_jsload,reload_dependents,map__73596,map__73596__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_73651 = cljs.core.filter.call(null,inst_73650,files);
var inst_73652 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_73653 = cljs.core.concat.call(null,inst_73651,inst_73652);
var state_73750__$1 = (function (){var statearr_73765 = state_73750;
(statearr_73765[(17)] = inst_73647);

(statearr_73765[(18)] = inst_73649);

(statearr_73765[(12)] = inst_73653);

return statearr_73765;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_73766_73847 = state_73750__$1;
(statearr_73766_73847[(1)] = (16));

} else {
var statearr_73767_73848 = state_73750__$1;
(statearr_73767_73848[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73751 === (15))){
var inst_73637 = (state_73750[(2)]);
var state_73750__$1 = state_73750;
var statearr_73768_73849 = state_73750__$1;
(statearr_73768_73849[(2)] = inst_73637);

(statearr_73768_73849[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73751 === (21))){
var inst_73663 = (state_73750[(19)]);
var inst_73663__$1 = (state_73750[(2)]);
var inst_73664 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_73663__$1);
var state_73750__$1 = (function (){var statearr_73769 = state_73750;
(statearr_73769[(19)] = inst_73663__$1);

return statearr_73769;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73750__$1,(22),inst_73664);
} else {
if((state_val_73751 === (31))){
var inst_73748 = (state_73750[(2)]);
var state_73750__$1 = state_73750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73750__$1,inst_73748);
} else {
if((state_val_73751 === (32))){
var inst_73703 = (state_73750[(16)]);
var inst_73708 = inst_73703.cljs$lang$protocol_mask$partition0$;
var inst_73709 = (inst_73708 & (64));
var inst_73710 = inst_73703.cljs$core$ISeq$;
var inst_73711 = (cljs.core.PROTOCOL_SENTINEL === inst_73710);
var inst_73712 = ((inst_73709) || (inst_73711));
var state_73750__$1 = state_73750;
if(cljs.core.truth_(inst_73712)){
var statearr_73770_73850 = state_73750__$1;
(statearr_73770_73850[(1)] = (35));

} else {
var statearr_73771_73851 = state_73750__$1;
(statearr_73771_73851[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73751 === (40))){
var inst_73725 = (state_73750[(20)]);
var inst_73724 = (state_73750[(2)]);
var inst_73725__$1 = cljs.core.get.call(null,inst_73724,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_73726 = cljs.core.get.call(null,inst_73724,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_73727 = cljs.core.not_empty.call(null,inst_73725__$1);
var state_73750__$1 = (function (){var statearr_73772 = state_73750;
(statearr_73772[(21)] = inst_73726);

(statearr_73772[(20)] = inst_73725__$1);

return statearr_73772;
})();
if(cljs.core.truth_(inst_73727)){
var statearr_73773_73852 = state_73750__$1;
(statearr_73773_73852[(1)] = (41));

} else {
var statearr_73774_73853 = state_73750__$1;
(statearr_73774_73853[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73751 === (33))){
var state_73750__$1 = state_73750;
var statearr_73775_73854 = state_73750__$1;
(statearr_73775_73854[(2)] = false);

(statearr_73775_73854[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73751 === (13))){
var inst_73623 = (state_73750[(22)]);
var inst_73627 = cljs.core.chunk_first.call(null,inst_73623);
var inst_73628 = cljs.core.chunk_rest.call(null,inst_73623);
var inst_73629 = cljs.core.count.call(null,inst_73627);
var inst_73610 = inst_73628;
var inst_73611 = inst_73627;
var inst_73612 = inst_73629;
var inst_73613 = (0);
var state_73750__$1 = (function (){var statearr_73776 = state_73750;
(statearr_73776[(7)] = inst_73611);

(statearr_73776[(8)] = inst_73613);

(statearr_73776[(9)] = inst_73610);

(statearr_73776[(10)] = inst_73612);

return statearr_73776;
})();
var statearr_73777_73855 = state_73750__$1;
(statearr_73777_73855[(2)] = null);

(statearr_73777_73855[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73751 === (22))){
var inst_73667 = (state_73750[(23)]);
var inst_73666 = (state_73750[(24)]);
var inst_73663 = (state_73750[(19)]);
var inst_73671 = (state_73750[(25)]);
var inst_73666__$1 = (state_73750[(2)]);
var inst_73667__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_73666__$1);
var inst_73668 = (function (){var all_files = inst_73663;
var res_SINGLEQUOTE_ = inst_73666__$1;
var res = inst_73667__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_73667,inst_73666,inst_73663,inst_73671,inst_73666__$1,inst_73667__$1,state_val_73751,c__58857__auto__,map__73595,map__73595__$1,opts,before_jsload,on_jsload,reload_dependents,map__73596,map__73596__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__73592_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__73592_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_73667,inst_73666,inst_73663,inst_73671,inst_73666__$1,inst_73667__$1,state_val_73751,c__58857__auto__,map__73595,map__73595__$1,opts,before_jsload,on_jsload,reload_dependents,map__73596,map__73596__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_73669 = cljs.core.filter.call(null,inst_73668,inst_73666__$1);
var inst_73670 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_73671__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_73670);
var inst_73672 = cljs.core.not_empty.call(null,inst_73671__$1);
var state_73750__$1 = (function (){var statearr_73778 = state_73750;
(statearr_73778[(26)] = inst_73669);

(statearr_73778[(23)] = inst_73667__$1);

(statearr_73778[(24)] = inst_73666__$1);

(statearr_73778[(25)] = inst_73671__$1);

return statearr_73778;
})();
if(cljs.core.truth_(inst_73672)){
var statearr_73779_73856 = state_73750__$1;
(statearr_73779_73856[(1)] = (23));

} else {
var statearr_73780_73857 = state_73750__$1;
(statearr_73780_73857[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73751 === (36))){
var state_73750__$1 = state_73750;
var statearr_73781_73858 = state_73750__$1;
(statearr_73781_73858[(2)] = false);

(statearr_73781_73858[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73751 === (41))){
var inst_73725 = (state_73750[(20)]);
var inst_73729 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_73730 = cljs.core.map.call(null,inst_73729,inst_73725);
var inst_73731 = cljs.core.pr_str.call(null,inst_73730);
var inst_73732 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_73731)].join('');
var inst_73733 = figwheel.client.utils.log.call(null,inst_73732);
var state_73750__$1 = state_73750;
var statearr_73782_73859 = state_73750__$1;
(statearr_73782_73859[(2)] = inst_73733);

(statearr_73782_73859[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73751 === (43))){
var inst_73726 = (state_73750[(21)]);
var inst_73736 = (state_73750[(2)]);
var inst_73737 = cljs.core.not_empty.call(null,inst_73726);
var state_73750__$1 = (function (){var statearr_73783 = state_73750;
(statearr_73783[(27)] = inst_73736);

return statearr_73783;
})();
if(cljs.core.truth_(inst_73737)){
var statearr_73784_73860 = state_73750__$1;
(statearr_73784_73860[(1)] = (44));

} else {
var statearr_73785_73861 = state_73750__$1;
(statearr_73785_73861[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73751 === (29))){
var inst_73669 = (state_73750[(26)]);
var inst_73667 = (state_73750[(23)]);
var inst_73703 = (state_73750[(16)]);
var inst_73666 = (state_73750[(24)]);
var inst_73663 = (state_73750[(19)]);
var inst_73671 = (state_73750[(25)]);
var inst_73699 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_73702 = (function (){var all_files = inst_73663;
var res_SINGLEQUOTE_ = inst_73666;
var res = inst_73667;
var files_not_loaded = inst_73669;
var dependencies_that_loaded = inst_73671;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_73669,inst_73667,inst_73703,inst_73666,inst_73663,inst_73671,inst_73699,state_val_73751,c__58857__auto__,map__73595,map__73595__$1,opts,before_jsload,on_jsload,reload_dependents,map__73596,map__73596__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__73701){
var map__73786 = p__73701;
var map__73786__$1 = ((((!((map__73786 == null)))?(((((map__73786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73786):map__73786);
var namespace = cljs.core.get.call(null,map__73786__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_73669,inst_73667,inst_73703,inst_73666,inst_73663,inst_73671,inst_73699,state_val_73751,c__58857__auto__,map__73595,map__73595__$1,opts,before_jsload,on_jsload,reload_dependents,map__73596,map__73596__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_73703__$1 = cljs.core.group_by.call(null,inst_73702,inst_73669);
var inst_73705 = (inst_73703__$1 == null);
var inst_73706 = cljs.core.not.call(null,inst_73705);
var state_73750__$1 = (function (){var statearr_73788 = state_73750;
(statearr_73788[(28)] = inst_73699);

(statearr_73788[(16)] = inst_73703__$1);

return statearr_73788;
})();
if(inst_73706){
var statearr_73789_73862 = state_73750__$1;
(statearr_73789_73862[(1)] = (32));

} else {
var statearr_73790_73863 = state_73750__$1;
(statearr_73790_73863[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73751 === (44))){
var inst_73726 = (state_73750[(21)]);
var inst_73739 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_73726);
var inst_73740 = cljs.core.pr_str.call(null,inst_73739);
var inst_73741 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_73740)].join('');
var inst_73742 = figwheel.client.utils.log.call(null,inst_73741);
var state_73750__$1 = state_73750;
var statearr_73791_73864 = state_73750__$1;
(statearr_73791_73864[(2)] = inst_73742);

(statearr_73791_73864[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73751 === (6))){
var inst_73644 = (state_73750[(2)]);
var state_73750__$1 = state_73750;
var statearr_73792_73865 = state_73750__$1;
(statearr_73792_73865[(2)] = inst_73644);

(statearr_73792_73865[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73751 === (28))){
var inst_73669 = (state_73750[(26)]);
var inst_73696 = (state_73750[(2)]);
var inst_73697 = cljs.core.not_empty.call(null,inst_73669);
var state_73750__$1 = (function (){var statearr_73793 = state_73750;
(statearr_73793[(29)] = inst_73696);

return statearr_73793;
})();
if(cljs.core.truth_(inst_73697)){
var statearr_73794_73866 = state_73750__$1;
(statearr_73794_73866[(1)] = (29));

} else {
var statearr_73795_73867 = state_73750__$1;
(statearr_73795_73867[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73751 === (25))){
var inst_73667 = (state_73750[(23)]);
var inst_73683 = (state_73750[(2)]);
var inst_73684 = cljs.core.not_empty.call(null,inst_73667);
var state_73750__$1 = (function (){var statearr_73796 = state_73750;
(statearr_73796[(30)] = inst_73683);

return statearr_73796;
})();
if(cljs.core.truth_(inst_73684)){
var statearr_73797_73868 = state_73750__$1;
(statearr_73797_73868[(1)] = (26));

} else {
var statearr_73798_73869 = state_73750__$1;
(statearr_73798_73869[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73751 === (34))){
var inst_73719 = (state_73750[(2)]);
var state_73750__$1 = state_73750;
if(cljs.core.truth_(inst_73719)){
var statearr_73799_73870 = state_73750__$1;
(statearr_73799_73870[(1)] = (38));

} else {
var statearr_73800_73871 = state_73750__$1;
(statearr_73800_73871[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73751 === (17))){
var state_73750__$1 = state_73750;
var statearr_73801_73872 = state_73750__$1;
(statearr_73801_73872[(2)] = recompile_dependents);

(statearr_73801_73872[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73751 === (3))){
var state_73750__$1 = state_73750;
var statearr_73802_73873 = state_73750__$1;
(statearr_73802_73873[(2)] = null);

(statearr_73802_73873[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73751 === (12))){
var inst_73640 = (state_73750[(2)]);
var state_73750__$1 = state_73750;
var statearr_73803_73874 = state_73750__$1;
(statearr_73803_73874[(2)] = inst_73640);

(statearr_73803_73874[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73751 === (2))){
var inst_73602 = (state_73750[(13)]);
var inst_73609 = cljs.core.seq.call(null,inst_73602);
var inst_73610 = inst_73609;
var inst_73611 = null;
var inst_73612 = (0);
var inst_73613 = (0);
var state_73750__$1 = (function (){var statearr_73804 = state_73750;
(statearr_73804[(7)] = inst_73611);

(statearr_73804[(8)] = inst_73613);

(statearr_73804[(9)] = inst_73610);

(statearr_73804[(10)] = inst_73612);

return statearr_73804;
})();
var statearr_73805_73875 = state_73750__$1;
(statearr_73805_73875[(2)] = null);

(statearr_73805_73875[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73751 === (23))){
var inst_73669 = (state_73750[(26)]);
var inst_73667 = (state_73750[(23)]);
var inst_73666 = (state_73750[(24)]);
var inst_73663 = (state_73750[(19)]);
var inst_73671 = (state_73750[(25)]);
var inst_73674 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_73676 = (function (){var all_files = inst_73663;
var res_SINGLEQUOTE_ = inst_73666;
var res = inst_73667;
var files_not_loaded = inst_73669;
var dependencies_that_loaded = inst_73671;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_73669,inst_73667,inst_73666,inst_73663,inst_73671,inst_73674,state_val_73751,c__58857__auto__,map__73595,map__73595__$1,opts,before_jsload,on_jsload,reload_dependents,map__73596,map__73596__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__73675){
var map__73806 = p__73675;
var map__73806__$1 = ((((!((map__73806 == null)))?(((((map__73806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73806):map__73806);
var request_url = cljs.core.get.call(null,map__73806__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_73669,inst_73667,inst_73666,inst_73663,inst_73671,inst_73674,state_val_73751,c__58857__auto__,map__73595,map__73595__$1,opts,before_jsload,on_jsload,reload_dependents,map__73596,map__73596__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_73677 = cljs.core.reverse.call(null,inst_73671);
var inst_73678 = cljs.core.map.call(null,inst_73676,inst_73677);
var inst_73679 = cljs.core.pr_str.call(null,inst_73678);
var inst_73680 = figwheel.client.utils.log.call(null,inst_73679);
var state_73750__$1 = (function (){var statearr_73808 = state_73750;
(statearr_73808[(31)] = inst_73674);

return statearr_73808;
})();
var statearr_73809_73876 = state_73750__$1;
(statearr_73809_73876[(2)] = inst_73680);

(statearr_73809_73876[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73751 === (35))){
var state_73750__$1 = state_73750;
var statearr_73810_73877 = state_73750__$1;
(statearr_73810_73877[(2)] = true);

(statearr_73810_73877[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73751 === (19))){
var inst_73653 = (state_73750[(12)]);
var inst_73659 = figwheel.client.file_reloading.expand_files.call(null,inst_73653);
var state_73750__$1 = state_73750;
var statearr_73811_73878 = state_73750__$1;
(statearr_73811_73878[(2)] = inst_73659);

(statearr_73811_73878[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73751 === (11))){
var state_73750__$1 = state_73750;
var statearr_73812_73879 = state_73750__$1;
(statearr_73812_73879[(2)] = null);

(statearr_73812_73879[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73751 === (9))){
var inst_73642 = (state_73750[(2)]);
var state_73750__$1 = state_73750;
var statearr_73813_73880 = state_73750__$1;
(statearr_73813_73880[(2)] = inst_73642);

(statearr_73813_73880[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73751 === (5))){
var inst_73613 = (state_73750[(8)]);
var inst_73612 = (state_73750[(10)]);
var inst_73615 = (inst_73613 < inst_73612);
var inst_73616 = inst_73615;
var state_73750__$1 = state_73750;
if(cljs.core.truth_(inst_73616)){
var statearr_73814_73881 = state_73750__$1;
(statearr_73814_73881[(1)] = (7));

} else {
var statearr_73815_73882 = state_73750__$1;
(statearr_73815_73882[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73751 === (14))){
var inst_73623 = (state_73750[(22)]);
var inst_73632 = cljs.core.first.call(null,inst_73623);
var inst_73633 = figwheel.client.file_reloading.eval_body.call(null,inst_73632,opts);
var inst_73634 = cljs.core.next.call(null,inst_73623);
var inst_73610 = inst_73634;
var inst_73611 = null;
var inst_73612 = (0);
var inst_73613 = (0);
var state_73750__$1 = (function (){var statearr_73816 = state_73750;
(statearr_73816[(32)] = inst_73633);

(statearr_73816[(7)] = inst_73611);

(statearr_73816[(8)] = inst_73613);

(statearr_73816[(9)] = inst_73610);

(statearr_73816[(10)] = inst_73612);

return statearr_73816;
})();
var statearr_73817_73883 = state_73750__$1;
(statearr_73817_73883[(2)] = null);

(statearr_73817_73883[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73751 === (45))){
var state_73750__$1 = state_73750;
var statearr_73818_73884 = state_73750__$1;
(statearr_73818_73884[(2)] = null);

(statearr_73818_73884[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73751 === (26))){
var inst_73669 = (state_73750[(26)]);
var inst_73667 = (state_73750[(23)]);
var inst_73666 = (state_73750[(24)]);
var inst_73663 = (state_73750[(19)]);
var inst_73671 = (state_73750[(25)]);
var inst_73686 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_73688 = (function (){var all_files = inst_73663;
var res_SINGLEQUOTE_ = inst_73666;
var res = inst_73667;
var files_not_loaded = inst_73669;
var dependencies_that_loaded = inst_73671;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_73669,inst_73667,inst_73666,inst_73663,inst_73671,inst_73686,state_val_73751,c__58857__auto__,map__73595,map__73595__$1,opts,before_jsload,on_jsload,reload_dependents,map__73596,map__73596__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__73687){
var map__73819 = p__73687;
var map__73819__$1 = ((((!((map__73819 == null)))?(((((map__73819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73819):map__73819);
var namespace = cljs.core.get.call(null,map__73819__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__73819__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_73669,inst_73667,inst_73666,inst_73663,inst_73671,inst_73686,state_val_73751,c__58857__auto__,map__73595,map__73595__$1,opts,before_jsload,on_jsload,reload_dependents,map__73596,map__73596__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_73689 = cljs.core.map.call(null,inst_73688,inst_73667);
var inst_73690 = cljs.core.pr_str.call(null,inst_73689);
var inst_73691 = figwheel.client.utils.log.call(null,inst_73690);
var inst_73692 = (function (){var all_files = inst_73663;
var res_SINGLEQUOTE_ = inst_73666;
var res = inst_73667;
var files_not_loaded = inst_73669;
var dependencies_that_loaded = inst_73671;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_73669,inst_73667,inst_73666,inst_73663,inst_73671,inst_73686,inst_73688,inst_73689,inst_73690,inst_73691,state_val_73751,c__58857__auto__,map__73595,map__73595__$1,opts,before_jsload,on_jsload,reload_dependents,map__73596,map__73596__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_73669,inst_73667,inst_73666,inst_73663,inst_73671,inst_73686,inst_73688,inst_73689,inst_73690,inst_73691,state_val_73751,c__58857__auto__,map__73595,map__73595__$1,opts,before_jsload,on_jsload,reload_dependents,map__73596,map__73596__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_73693 = setTimeout(inst_73692,(10));
var state_73750__$1 = (function (){var statearr_73821 = state_73750;
(statearr_73821[(33)] = inst_73686);

(statearr_73821[(34)] = inst_73691);

return statearr_73821;
})();
var statearr_73822_73885 = state_73750__$1;
(statearr_73822_73885[(2)] = inst_73693);

(statearr_73822_73885[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73751 === (16))){
var state_73750__$1 = state_73750;
var statearr_73823_73886 = state_73750__$1;
(statearr_73823_73886[(2)] = reload_dependents);

(statearr_73823_73886[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73751 === (38))){
var inst_73703 = (state_73750[(16)]);
var inst_73721 = cljs.core.apply.call(null,cljs.core.hash_map,inst_73703);
var state_73750__$1 = state_73750;
var statearr_73824_73887 = state_73750__$1;
(statearr_73824_73887[(2)] = inst_73721);

(statearr_73824_73887[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73751 === (30))){
var state_73750__$1 = state_73750;
var statearr_73825_73888 = state_73750__$1;
(statearr_73825_73888[(2)] = null);

(statearr_73825_73888[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73751 === (10))){
var inst_73623 = (state_73750[(22)]);
var inst_73625 = cljs.core.chunked_seq_QMARK_.call(null,inst_73623);
var state_73750__$1 = state_73750;
if(inst_73625){
var statearr_73826_73889 = state_73750__$1;
(statearr_73826_73889[(1)] = (13));

} else {
var statearr_73827_73890 = state_73750__$1;
(statearr_73827_73890[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73751 === (18))){
var inst_73657 = (state_73750[(2)]);
var state_73750__$1 = state_73750;
if(cljs.core.truth_(inst_73657)){
var statearr_73828_73891 = state_73750__$1;
(statearr_73828_73891[(1)] = (19));

} else {
var statearr_73829_73892 = state_73750__$1;
(statearr_73829_73892[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73751 === (42))){
var state_73750__$1 = state_73750;
var statearr_73830_73893 = state_73750__$1;
(statearr_73830_73893[(2)] = null);

(statearr_73830_73893[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73751 === (37))){
var inst_73716 = (state_73750[(2)]);
var state_73750__$1 = state_73750;
var statearr_73831_73894 = state_73750__$1;
(statearr_73831_73894[(2)] = inst_73716);

(statearr_73831_73894[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73751 === (8))){
var inst_73623 = (state_73750[(22)]);
var inst_73610 = (state_73750[(9)]);
var inst_73623__$1 = cljs.core.seq.call(null,inst_73610);
var state_73750__$1 = (function (){var statearr_73832 = state_73750;
(statearr_73832[(22)] = inst_73623__$1);

return statearr_73832;
})();
if(inst_73623__$1){
var statearr_73833_73895 = state_73750__$1;
(statearr_73833_73895[(1)] = (10));

} else {
var statearr_73834_73896 = state_73750__$1;
(statearr_73834_73896[(1)] = (11));

}

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
});})(c__58857__auto__,map__73595,map__73595__$1,opts,before_jsload,on_jsload,reload_dependents,map__73596,map__73596__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24619__auto__,c__58857__auto__,map__73595,map__73595__$1,opts,before_jsload,on_jsload,reload_dependents,map__73596,map__73596__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24620__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24620__auto____0 = (function (){
var statearr_73835 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73835[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24620__auto__);

(statearr_73835[(1)] = (1));

return statearr_73835;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24620__auto____1 = (function (state_73750){
while(true){
var ret_value__24621__auto__ = (function (){try{while(true){
var result__24622__auto__ = switch__24619__auto__.call(null,state_73750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24622__auto__;
}
break;
}
}catch (e73836){if((e73836 instanceof Object)){
var ex__24623__auto__ = e73836;
var statearr_73837_73897 = state_73750;
(statearr_73837_73897[(5)] = ex__24623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73898 = state_73750;
state_73750 = G__73898;
continue;
} else {
return ret_value__24621__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24620__auto__ = function(state_73750){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24620__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24620__auto____1.call(this,state_73750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24620__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24620__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24620__auto__;
})()
;})(switch__24619__auto__,c__58857__auto__,map__73595,map__73595__$1,opts,before_jsload,on_jsload,reload_dependents,map__73596,map__73596__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__58859__auto__ = (function (){var statearr_73838 = f__58858__auto__.call(null);
(statearr_73838[(6)] = c__58857__auto__);

return statearr_73838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58859__auto__);
});})(c__58857__auto__,map__73595,map__73595__$1,opts,before_jsload,on_jsload,reload_dependents,map__73596,map__73596__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__58857__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__73901,link){
var map__73902 = p__73901;
var map__73902__$1 = ((((!((map__73902 == null)))?(((((map__73902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73902):map__73902);
var file = cljs.core.get.call(null,map__73902__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__73902,map__73902__$1,file){
return (function (p1__73899_SHARP_,p2__73900_SHARP_){
if(cljs.core._EQ_.call(null,p1__73899_SHARP_,p2__73900_SHARP_)){
return p1__73899_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__73902,map__73902__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__73905){
var map__73906 = p__73905;
var map__73906__$1 = ((((!((map__73906 == null)))?(((((map__73906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73906):map__73906);
var match_length = cljs.core.get.call(null,map__73906__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__73906__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__73904_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__73904_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__73908_SHARP_,p2__73909_SHARP_){
return cljs.core.assoc.call(null,p1__73908_SHARP_,cljs.core.get.call(null,p2__73909_SHARP_,key),p2__73909_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5718__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5718__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_73910 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_73910);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_73910);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__73911,p__73912){
var map__73913 = p__73911;
var map__73913__$1 = ((((!((map__73913 == null)))?(((((map__73913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73913):map__73913);
var on_cssload = cljs.core.get.call(null,map__73913__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__73914 = p__73912;
var map__73914__$1 = ((((!((map__73914 == null)))?(((((map__73914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73914):map__73914);
var files_msg = map__73914__$1;
var files = cljs.core.get.call(null,map__73914__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1563552902172
