// Compiled by ClojureScript 1.10.339 {}
goog.provide('basapp.ui.main');
goog.require('cljs.core');
goog.require('keechma.ui_component');
goog.require('keechma.toolbox.ui');
goog.require('basapp.ui.antd');
basapp.ui.main.render = (function basapp$ui$main$render(ctx){
var page = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(keechma.toolbox.ui.route_GT_.call(null,ctx));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [basapp.ui.antd.layout,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"1em"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [basapp.ui.antd.layout_header,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"banner"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),keechma.ui_component.url.call(null,ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),"dashboard"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.banner-header","h2.banner-header",-747771270),"BAS poslovni sistem"], null)], null)], null),(function (){var G__46752 = page;
switch (G__46752) {
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
case "sector":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.ui_component.component.call(null,ctx,new cljs.core.Keyword(null,"sector","sector",-1444247062))], null);

break;
case "departments":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.ui_component.component.call(null,ctx,new cljs.core.Keyword(null,"departments","departments",799278298))], null);

break;
case "department":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.ui_component.component.call(null,ctx,new cljs.core.Keyword(null,"department","department",-359157087))], null);

break;
case "floors":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.ui_component.component.call(null,ctx,new cljs.core.Keyword(null,"floors","floors",313456152))], null);

break;
case "floor":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.ui_component.component.call(null,ctx,new cljs.core.Keyword(null,"floor","floor",1882041021))], null);

break;
case "offices":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.ui_component.component.call(null,ctx,new cljs.core.Keyword(null,"offices","offices",564965832))], null);

break;
case "office":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.ui_component.component.call(null,ctx,new cljs.core.Keyword(null,"office","office",-733494767))], null);

break;
case "folders":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.ui_component.component.call(null,ctx,new cljs.core.Keyword(null,"folders","folders",44248772))], null);

break;
case "folder":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.ui_component.component.call(null,ctx,new cljs.core.Keyword(null,"folder","folder",1515881736))], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"404"], null);

}
})()], null);
});
basapp.ui.main.component = keechma.ui_component.constructor$.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"renderer","renderer",336841071),basapp.ui.main.render,new cljs.core.Keyword(null,"component-deps","component-deps",-405716162),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dashboard","dashboard",-631747508),new cljs.core.Keyword(null,"employees","employees",1002695450),new cljs.core.Keyword(null,"employee","employee",-504836945),new cljs.core.Keyword(null,"sectors","sectors",-1244148731),new cljs.core.Keyword(null,"sector","sector",-1444247062),new cljs.core.Keyword(null,"departments","departments",799278298),new cljs.core.Keyword(null,"department","department",-359157087),new cljs.core.Keyword(null,"floors","floors",313456152),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Keyword(null,"offices","offices",564965832),new cljs.core.Keyword(null,"office","office",-733494767),new cljs.core.Keyword(null,"folders","folders",44248772),new cljs.core.Keyword(null,"folder","folder",1515881736)], null)], null));

//# sourceMappingURL=main.js.map?rel=1568104903646
