// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__72580){
var map__72581 = p__72580;
var map__72581__$1 = ((((!((map__72581 == null)))?(((((map__72581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72581):map__72581);
var m = map__72581__$1;
var n = cljs.core.get.call(null,map__72581__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__72581__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__72583_72605 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__72584_72606 = null;
var count__72585_72607 = (0);
var i__72586_72608 = (0);
while(true){
if((i__72586_72608 < count__72585_72607)){
var f_72609 = cljs.core._nth.call(null,chunk__72584_72606,i__72586_72608);
cljs.core.println.call(null,"  ",f_72609);


var G__72610 = seq__72583_72605;
var G__72611 = chunk__72584_72606;
var G__72612 = count__72585_72607;
var G__72613 = (i__72586_72608 + (1));
seq__72583_72605 = G__72610;
chunk__72584_72606 = G__72611;
count__72585_72607 = G__72612;
i__72586_72608 = G__72613;
continue;
} else {
var temp__5720__auto___72614 = cljs.core.seq.call(null,seq__72583_72605);
if(temp__5720__auto___72614){
var seq__72583_72615__$1 = temp__5720__auto___72614;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__72583_72615__$1)){
var c__4351__auto___72616 = cljs.core.chunk_first.call(null,seq__72583_72615__$1);
var G__72617 = cljs.core.chunk_rest.call(null,seq__72583_72615__$1);
var G__72618 = c__4351__auto___72616;
var G__72619 = cljs.core.count.call(null,c__4351__auto___72616);
var G__72620 = (0);
seq__72583_72605 = G__72617;
chunk__72584_72606 = G__72618;
count__72585_72607 = G__72619;
i__72586_72608 = G__72620;
continue;
} else {
var f_72621 = cljs.core.first.call(null,seq__72583_72615__$1);
cljs.core.println.call(null,"  ",f_72621);


var G__72622 = cljs.core.next.call(null,seq__72583_72615__$1);
var G__72623 = null;
var G__72624 = (0);
var G__72625 = (0);
seq__72583_72605 = G__72622;
chunk__72584_72606 = G__72623;
count__72585_72607 = G__72624;
i__72586_72608 = G__72625;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_72626 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_72626);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_72626)))?cljs.core.second.call(null,arglists_72626):arglists_72626));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__72587_72627 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__72588_72628 = null;
var count__72589_72629 = (0);
var i__72590_72630 = (0);
while(true){
if((i__72590_72630 < count__72589_72629)){
var vec__72591_72631 = cljs.core._nth.call(null,chunk__72588_72628,i__72590_72630);
var name_72632 = cljs.core.nth.call(null,vec__72591_72631,(0),null);
var map__72594_72633 = cljs.core.nth.call(null,vec__72591_72631,(1),null);
var map__72594_72634__$1 = ((((!((map__72594_72633 == null)))?(((((map__72594_72633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72594_72633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72594_72633):map__72594_72633);
var doc_72635 = cljs.core.get.call(null,map__72594_72634__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_72636 = cljs.core.get.call(null,map__72594_72634__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_72632);

cljs.core.println.call(null," ",arglists_72636);

if(cljs.core.truth_(doc_72635)){
cljs.core.println.call(null," ",doc_72635);
} else {
}


var G__72637 = seq__72587_72627;
var G__72638 = chunk__72588_72628;
var G__72639 = count__72589_72629;
var G__72640 = (i__72590_72630 + (1));
seq__72587_72627 = G__72637;
chunk__72588_72628 = G__72638;
count__72589_72629 = G__72639;
i__72590_72630 = G__72640;
continue;
} else {
var temp__5720__auto___72641 = cljs.core.seq.call(null,seq__72587_72627);
if(temp__5720__auto___72641){
var seq__72587_72642__$1 = temp__5720__auto___72641;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__72587_72642__$1)){
var c__4351__auto___72643 = cljs.core.chunk_first.call(null,seq__72587_72642__$1);
var G__72644 = cljs.core.chunk_rest.call(null,seq__72587_72642__$1);
var G__72645 = c__4351__auto___72643;
var G__72646 = cljs.core.count.call(null,c__4351__auto___72643);
var G__72647 = (0);
seq__72587_72627 = G__72644;
chunk__72588_72628 = G__72645;
count__72589_72629 = G__72646;
i__72590_72630 = G__72647;
continue;
} else {
var vec__72596_72648 = cljs.core.first.call(null,seq__72587_72642__$1);
var name_72649 = cljs.core.nth.call(null,vec__72596_72648,(0),null);
var map__72599_72650 = cljs.core.nth.call(null,vec__72596_72648,(1),null);
var map__72599_72651__$1 = ((((!((map__72599_72650 == null)))?(((((map__72599_72650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72599_72650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72599_72650):map__72599_72650);
var doc_72652 = cljs.core.get.call(null,map__72599_72651__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_72653 = cljs.core.get.call(null,map__72599_72651__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_72649);

cljs.core.println.call(null," ",arglists_72653);

if(cljs.core.truth_(doc_72652)){
cljs.core.println.call(null," ",doc_72652);
} else {
}


var G__72654 = cljs.core.next.call(null,seq__72587_72642__$1);
var G__72655 = null;
var G__72656 = (0);
var G__72657 = (0);
seq__72587_72627 = G__72654;
chunk__72588_72628 = G__72655;
count__72589_72629 = G__72656;
i__72590_72630 = G__72657;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__72601 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__72602 = null;
var count__72603 = (0);
var i__72604 = (0);
while(true){
if((i__72604 < count__72603)){
var role = cljs.core._nth.call(null,chunk__72602,i__72604);
var temp__5720__auto___72658__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___72658__$1)){
var spec_72659 = temp__5720__auto___72658__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_72659));
} else {
}


var G__72660 = seq__72601;
var G__72661 = chunk__72602;
var G__72662 = count__72603;
var G__72663 = (i__72604 + (1));
seq__72601 = G__72660;
chunk__72602 = G__72661;
count__72603 = G__72662;
i__72604 = G__72663;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__72601);
if(temp__5720__auto____$1){
var seq__72601__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__72601__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__72601__$1);
var G__72664 = cljs.core.chunk_rest.call(null,seq__72601__$1);
var G__72665 = c__4351__auto__;
var G__72666 = cljs.core.count.call(null,c__4351__auto__);
var G__72667 = (0);
seq__72601 = G__72664;
chunk__72602 = G__72665;
count__72603 = G__72666;
i__72604 = G__72667;
continue;
} else {
var role = cljs.core.first.call(null,seq__72601__$1);
var temp__5720__auto___72668__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___72668__$2)){
var spec_72669 = temp__5720__auto___72668__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_72669));
} else {
}


var G__72670 = cljs.core.next.call(null,seq__72601__$1);
var G__72671 = null;
var G__72672 = (0);
var G__72673 = (0);
seq__72601 = G__72670;
chunk__72602 = G__72671;
count__72603 = G__72672;
i__72604 = G__72673;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1563552899909
