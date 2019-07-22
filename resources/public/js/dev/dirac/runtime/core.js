// Compiled by ClojureScript 1.10.339 {}
goog.provide('dirac.runtime.core');
goog.require('cljs.core');
goog.require('dirac.runtime.prefs');
goog.require('dirac.runtime.repl');
goog.require('dirac.runtime.util');
dirac.runtime.core.is_feature_available_QMARK_ = (function dirac$runtime$core$is_feature_available_QMARK_(feature){
var G__72919 = feature;
var G__72919__$1 = (((G__72919 instanceof cljs.core.Keyword))?G__72919.fqn:null);
switch (G__72919__$1) {
case "repl":
return dirac.runtime.repl.available_QMARK_.call(null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__72919__$1)].join('')));

}
});
dirac.runtime.core.available_QMARK_ = (function dirac$runtime$core$available_QMARK_(var_args){
var G__72922 = arguments.length;
switch (G__72922) {
case 0:
return dirac.runtime.core.available_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dirac.runtime.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dirac.runtime.core.available_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return dirac.runtime.core.available_QMARK_.call(null,dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
});

dirac.runtime.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = dirac.runtime.util.resolve_features_BANG_.call(null,features_desc,dirac.runtime.prefs.feature_groups);
if(cljs.core.empty_QMARK_.call(null,features)){
return false;
} else {
return cljs.core.every_QMARK_.call(null,dirac.runtime.core.is_feature_available_QMARK_,features);
}
});

dirac.runtime.core.available_QMARK_.cljs$lang$maxFixedArity = 1;

dirac.runtime.core.is_feature_installed_QMARK_ = (function dirac$runtime$core$is_feature_installed_QMARK_(feature){
var G__72924 = feature;
var G__72924__$1 = (((G__72924 instanceof cljs.core.Keyword))?G__72924.fqn:null);
switch (G__72924__$1) {
case "repl":
return dirac.runtime.repl.installed_QMARK_.call(null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__72924__$1)].join('')));

}
});
dirac.runtime.core.installed_QMARK_ = (function dirac$runtime$core$installed_QMARK_(var_args){
var G__72927 = arguments.length;
switch (G__72927) {
case 0:
return dirac.runtime.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dirac.runtime.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dirac.runtime.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return dirac.runtime.core.installed_QMARK_.call(null,dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
});

dirac.runtime.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = dirac.runtime.util.resolve_features_BANG_.call(null,features_desc,dirac.runtime.prefs.feature_groups);
if(cljs.core.empty_QMARK_.call(null,features)){
return false;
} else {
return cljs.core.every_QMARK_.call(null,dirac.runtime.core.is_feature_installed_QMARK_,features);
}
});

dirac.runtime.core.installed_QMARK_.cljs$lang$maxFixedArity = 1;

dirac.runtime.core.install_BANG_ = (function dirac$runtime$core$install_BANG_(var_args){
var G__72930 = arguments.length;
switch (G__72930) {
case 0:
return dirac.runtime.core.install_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dirac.runtime.core.install_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dirac.runtime.core.install_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return dirac.runtime.core.install_BANG_.call(null,dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
});

dirac.runtime.core.install_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = dirac.runtime.util.resolve_features_BANG_.call(null,features_desc,dirac.runtime.prefs.feature_groups);
dirac.runtime.util.display_banner_if_needed_BANG_.call(null,features,dirac.runtime.prefs.feature_groups);

return dirac.runtime.util.install_feature_BANG_.call(null,new cljs.core.Keyword(null,"repl","repl",-35398667),features,dirac.runtime.core.is_feature_available_QMARK_,dirac.runtime.repl.install_BANG_);
});

dirac.runtime.core.install_BANG_.cljs$lang$maxFixedArity = 1;

dirac.runtime.core.uninstall_BANG_ = (function dirac$runtime$core$uninstall_BANG_(){
return dirac.runtime.repl.uninstall_BANG_.call(null);
});

//# sourceMappingURL=core.js.map?rel=1563552900790
