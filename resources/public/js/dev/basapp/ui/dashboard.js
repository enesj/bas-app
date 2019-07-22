// Compiled by ClojureScript 1.10.339 {}
goog.provide('basapp.ui.dashboard');
goog.require('cljs.core');
goog.require('keechma.ui_component');
goog.require('antizer.reagent');
basapp.ui.dashboard.render_dash = (function basapp$ui$dashboard$render_dash(ctx){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.layout_content,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.row","a.row",1798495567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),keechma.ui_component.url.call(null,ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),"employees"], null))], null),"Korisnici"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.row","a.row",1798495567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),keechma.ui_component.url.call(null,ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),"sectors"], null))], null),"Sektori"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.row","a.row",1798495567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),keechma.ui_component.url.call(null,ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),"departments"], null))], null),"Odjeljenja"], null)], null)], null);
});
basapp.ui.dashboard.render = (function basapp$ui$dashboard$render(ctx){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [basapp.ui.dashboard.render_dash,ctx], null);
});
basapp.ui.dashboard.component = keechma.ui_component.constructor$.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"renderer","renderer",336841071),basapp.ui.dashboard.render], null));

//# sourceMappingURL=dashboard.js.map?rel=1563552895304
