// Compiled by ClojureScript 1.10.339 {}
goog.provide('keechma.toolbox.util');
goog.require('cljs.core');
goog.require('clojure.string');
keechma.toolbox.util.class_name__GT_string = (function keechma$toolbox$util$class_name__GT_string(class_name){
if(cljs.core.vector_QMARK_.call(null,class_name)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (c){
return cljs.core.name.call(null,(function (){var or__3949__auto__ = c;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "";
}
})());
}),class_name));
} else {
return cljs.core.name.call(null,(function (){var or__3949__auto__ = class_name;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "";
}
})());
}
});
keechma.toolbox.util.class_names = (function keechma$toolbox$util$class_names(checks){
return clojure.string.join.call(null," ",cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p__37409){
var vec__37410 = p__37409;
var k = cljs.core.nth.call(null,vec__37410,(0),null);
var v = cljs.core.nth.call(null,vec__37410,(1),null);
if(cljs.core.truth_(((cljs.core.fn_QMARK_.call(null,v))?v.call(null):v))){
return keechma.toolbox.util.class_name__GT_string.call(null,k);
} else {
return null;
}
}),checks)));
});

//# sourceMappingURL=util.js.map?rel=1563552865394
