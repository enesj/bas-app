// Compiled by ClojureScript 1.10.339 {}
goog.provide('basapp.ui.sectors');
goog.require('cljs.core');
goog.require('keechma.ui_component');
goog.require('keechma.toolbox.ui');
goog.require('basapp.datascript');
goog.require('basapp.ui.inputs');
goog.require('keechma.toolbox.forms.ui');
goog.require('antizer.reagent');
goog.require('reagent.core');
goog.require('keechma.toolbox.pipeline.core');
goog.require('keechma.toolbox.forms.core');
basapp.ui.sectors.comparison = (function basapp$ui$sectors$comparison(data1,data2,field){
return cljs.core.compare.call(null,cljs.core.get.call(null,cljs.core.js__GT_clj.call(null,data1,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),field),cljs.core.get.call(null,cljs.core.js__GT_clj.call(null,data2,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),field));
});
basapp.ui.sectors.columns = (function basapp$ui$sectors$columns(ctx){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Ime",new cljs.core.Keyword(null,"dataIndex","dataIndex",778447901),"name",new cljs.core.Keyword(null,"sorter","sorter",-2066997708),(function (p1__71121_SHARP_,p2__71122_SHARP_){
return basapp.ui.sectors.comparison.call(null,p1__71121_SHARP_,p2__71122_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177));
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function (p1__71124_SHARP_,p2__71123_SHARP_){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),keechma.ui_component.url.call(null,ctx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),"sectors",new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.js__GT_clj.call(null,p2__71123_SHARP_).call(null,"id")], null))], null),p1__71124_SHARP_], null));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Oznaka",new cljs.core.Keyword(null,"dataIndex","dataIndex",778447901),"short-name",new cljs.core.Keyword(null,"sorter","sorter",-2066997708),(function (p1__71125_SHARP_,p2__71126_SHARP_){
return basapp.ui.sectors.comparison.call(null,p1__71125_SHARP_,p2__71126_SHARP_,new cljs.core.Keyword(null,"short-name","short-name",-1767085022));
})], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"title","title",636505583),"Aktivan",new cljs.core.Keyword(null,"dataIndex","dataIndex",778447901),"active",new cljs.core.Keyword(null,"sorter","sorter",-2066997708),(function (p1__71127_SHARP_,p2__71128_SHARP_){
return basapp.ui.sectors.comparison.call(null,p1__71127_SHARP_,p2__71128_SHARP_,new cljs.core.Keyword(null,"active","active",1895962068));
}),new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Da",new cljs.core.Keyword(null,"value","value",305978217),true], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Ne",new cljs.core.Keyword(null,"value","value",305978217),false], null)], null),new cljs.core.Keyword(null,"onFilter","onFilter",-791374537),(function (value,record){
return cljs.core._EQ_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(record.active)].join(''),value);
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function (p1__71129_SHARP_){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(p1__71129_SHARP_)?"Da":"Ne")], null));
})], null)], null);
});
basapp.ui.sectors.pagination = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show-size-changer","show-size-changer",-745395013),true,new cljs.core.Keyword(null,"page-size-options","page-size-options",-1390274615),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["5","10","20"], null),new cljs.core.Keyword(null,"show-total","show-total",-237443507),(function (p1__71130_SHARP_){
return ["Ukupno: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__71130_SHARP_)," sektora"].join('');
})], null);
basapp.ui.sectors.sectors_table = (function basapp$ui$sectors$sectors_table(ctx){
var sectors = basapp.datascript.q_GT_.call(null,ctx,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Keyword("db","id","db/id",-1388397098)], null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("sector","short-name","sector/short-name",1286264128)], null)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Sektori"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.table,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"columns","columns",1998437288),basapp.ui.sectors.columns.call(null,ctx),new cljs.core.Keyword(null,"dataSource","dataSource",-178401132),sectors,new cljs.core.Keyword(null,"pagination","pagination",-1553654604),basapp.ui.sectors.pagination,new cljs.core.Keyword(null,"row-key","row-key",-1189010712),"id"], null)], null)], null);
});
basapp.ui.sectors.render_form_errors = (function basapp$ui$sectors$render_form_errors(ctx,form_props){
var form_state = keechma.toolbox.forms.ui.form_state_GT_.call(null,ctx,form_props);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"submit-failed","submit-failed",252220857),cljs.core.get_in.call(null,form_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"type","type",1174270348)], null)))){
var e = cljs.core.ex_message.call(null,cljs.core.get_in.call(null,form_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"cause","cause",231901252)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.alert.alert-danger","div.alert.alert-danger",-890058301),e], null);
} else {
return null;
}
});
basapp.ui.sectors.render_form = (function basapp$ui$sectors$render_form(ctx,title,data){
var form_props = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sector","sector",-1444247062),new cljs.core.Keyword(null,"form","form",-1624062471)], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-body","div.card-body",1538579065),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),((function (form_props){
return (function (p1__71131_SHARP_){
return keechma.toolbox.forms.ui._LT_submit.call(null,ctx,form_props,p1__71131_SHARP_);
});})(form_props))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [basapp.ui.sectors.render_form_errors,ctx,form_props], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [basapp.ui.inputs.text,ctx,form_props,new cljs.core.Keyword(null,"short-name","short-name",-1767085022),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Oznaka",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not_EQ_.call(null,data,(0))], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [basapp.ui.inputs.text,ctx,form_props,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Ime"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [basapp.ui.inputs.checkbox,ctx,form_props,new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Aktivan"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),"Snimi"], null)], null)], null);
});
basapp.ui.sectors.render = (function basapp$ui$sectors$render(ctx){
var sector_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(keechma.toolbox.ui.route_GT_.call(null,ctx));
var sector = ((cljs.core._EQ_.call(null,sector_id,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("sector","name","sector/name",602875811),"Novi",new cljs.core.Keyword("sector","short-name","sector/short-name",1286264128),"sektor"], null):(((sector_id > (0)))?basapp.datascript.entity_GT_.call(null,ctx,sector_id):null
));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.pt-5","div.container.pt-5",734167348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mb-5","p.mb-5",1561333168),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),keechma.ui_component.url.call(null,ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),"dashboard"], null))], null),"\u2190 Povratak na naslovnicu"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [basapp.ui.sectors.sectors_table,ctx], null),(cljs.core.truth_(new cljs.core.Keyword("sector","name","sector/name",602875811).cljs$core$IFn$_invoke$arity$1(sector))?(function (){
keechma.toolbox.forms.ui._LT_call.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sector","sector",-1444247062),new cljs.core.Keyword(null,"form","form",-1624062471)], null),new cljs.core.Keyword(null,"reset-form","reset-form",620246626));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.pt-5","div.container.pt-5",734167348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("sector","name","sector/name",602875811).cljs$core$IFn$_invoke$arity$1(sector))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("sector","short-name","sector/short-name",1286264128).cljs$core$IFn$_invoke$arity$1(sector))].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [basapp.ui.sectors.render_form,ctx,"",sector_id], null)], null);
})()
:null)], null);
});
basapp.ui.sectors.component = keechma.ui_component.constructor$.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"renderer","renderer",336841071),basapp.ui.sectors.render,new cljs.core.Keyword(null,"subscription-deps","subscription-deps",1798032321),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datascript","datascript",-2114593819)], null)], null));

//# sourceMappingURL=sectors.js.map?rel=1563552895466
