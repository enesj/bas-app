// Compiled by ClojureScript 1.10.339 {}
goog.provide('basapp.ui.main');
goog.require('cljs.core');
goog.require('keechma.ui_component');
goog.require('keechma.toolbox.ui');
goog.require('antizer.reagent');
basapp.ui.main.render = (function basapp$ui$main$render(ctx){
var page = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(keechma.toolbox.ui.route_GT_.call(null,ctx));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.layout,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.layout_header,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"banner"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),keechma.ui_component.url.call(null,ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),"dashboard"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.banner-header","h2.banner-header",-747771270),"BAS poslovni sistem"], null)], null)], null),(function (){var G__71117 = page;
switch (G__71117) {
case "dashboard":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.ui_component.component.call(null,ctx,new cljs.core.Keyword(null,"dashboard","dashboard",-631747508))], null);

break;
case "employees":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.ui_component.component.call(null,ctx,new cljs.core.Keyword(null,"employees","employees",1002695450))], null);

break;
case "employee":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.ui_component.component.call(null,ctx,new cljs.core.Keyword(null,"employee","employee",-504836945))], null);

break;
case "sectors":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.ui_component.component.call(null,ctx,new cljs.core.Keyword(null,"sectors","sectors",-1244148731))], null);

break;
case "departments":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.ui_component.component.call(null,ctx,new cljs.core.Keyword(null,"departments","departments",799278298))], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"404"], null);

}
})()], null);
});
basapp.ui.main.component = keechma.ui_component.constructor$.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"renderer","renderer",336841071),basapp.ui.main.render,new cljs.core.Keyword(null,"component-deps","component-deps",-405716162),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",-631747508),new cljs.core.Keyword(null,"employees","employees",1002695450),new cljs.core.Keyword(null,"employee","employee",-504836945),new cljs.core.Keyword(null,"sectors","sectors",-1244148731),new cljs.core.Keyword(null,"departments","departments",799278298)], null)], null));

//# sourceMappingURL=main.js.map?rel=1563552895405
