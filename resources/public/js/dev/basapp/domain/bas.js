// Compiled by ClojureScript 1.10.339 {}
goog.provide('basapp.domain.bas');
goog.require('cljs.core');
goog.require('datascript.core');
goog.require('clojure.string');
basapp.domain.bas.employee_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"zaposlenik","zaposlenik",-1435786558),null,new cljs.core.Keyword(null,"drzavni-sluzbenik","drzavni-sluzbenik",-1885550522),null], null), null);
basapp.domain.bas.insert_employee = (function basapp$domain$bas$insert_employee(name,last_name,uname,email,phone,category,position,department,active){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("employee","position","employee/position",-298220826),new cljs.core.Keyword("employee","active","employee/active",-1479606522),new cljs.core.Keyword("employee","department","employee/department",1430141811),new cljs.core.Keyword("employee","last-name","employee/last-name",-775263724),new cljs.core.Keyword("employee","email","employee/email",-1920303404),new cljs.core.Keyword("employee","phone","employee/phone",-1647093707),new cljs.core.Keyword("employee","type","employee/type",489871418),new cljs.core.Keyword("employee","name","employee/name",-1626949925),new cljs.core.Keyword("employee","uname","employee/uname",-1172221252)],[position,active,parseInt(department),last_name,email,phone,category,name,uname])], null);
});
basapp.domain.bas.insert_department = (function basapp$domain$bas$insert_department(name,short_name,sector,active){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("department","name","department/name",-1151724673),name,new cljs.core.Keyword("department","short-name","department/short-name",1711124852),short_name,new cljs.core.Keyword("department","sektor","department/sektor",2016350143),parseInt(sector),new cljs.core.Keyword("department","active","department/active",-1032676766),active], null)], null);
});
basapp.domain.bas.insert_sector = (function basapp$domain$bas$insert_sector(name,short_name,active){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("sector","name","sector/name",602875811),name,new cljs.core.Keyword("sector","short-name","sector/short-name",1286264128),short_name,new cljs.core.Keyword("sector","active","sector/active",721792622),active], null)], null);
});
basapp.domain.bas.insert_departments = (function basapp$domain$bas$insert_departments(departments_data){
return cljs.core.flatten.call(null,(function (){var iter__4324__auto__ = (function basapp$domain$bas$insert_departments_$_iter__34288(s__34289){
return (new cljs.core.LazySeq(null,(function (){
var s__34289__$1 = s__34289;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34289__$1);
if(temp__5720__auto__){
var s__34289__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34289__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__34289__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__34291 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__34290 = (0);
while(true){
if((i__34290 < size__4323__auto__)){
var department = cljs.core._nth.call(null,c__4322__auto__,i__34290);
cljs.core.chunk_append.call(null,b__34291,cljs.core.apply.call(null,basapp.domain.bas.insert_department,department));

var G__34292 = (i__34290 + (1));
i__34290 = G__34292;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34291),basapp$domain$bas$insert_departments_$_iter__34288.call(null,cljs.core.chunk_rest.call(null,s__34289__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34291),null);
}
} else {
var department = cljs.core.first.call(null,s__34289__$2);
return cljs.core.cons.call(null,cljs.core.apply.call(null,basapp.domain.bas.insert_department,department),basapp$domain$bas$insert_departments_$_iter__34288.call(null,cljs.core.rest.call(null,s__34289__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,departments_data);
})());
});
basapp.domain.bas.insert_sectors = (function basapp$domain$bas$insert_sectors(sectors_data){
return cljs.core.flatten.call(null,(function (){var iter__4324__auto__ = (function basapp$domain$bas$insert_sectors_$_iter__34293(s__34294){
return (new cljs.core.LazySeq(null,(function (){
var s__34294__$1 = s__34294;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34294__$1);
if(temp__5720__auto__){
var s__34294__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34294__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__34294__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__34296 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__34295 = (0);
while(true){
if((i__34295 < size__4323__auto__)){
var sectors = cljs.core._nth.call(null,c__4322__auto__,i__34295);
cljs.core.chunk_append.call(null,b__34296,cljs.core.apply.call(null,basapp.domain.bas.insert_sector,sectors));

var G__34297 = (i__34295 + (1));
i__34295 = G__34297;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34296),basapp$domain$bas$insert_sectors_$_iter__34293.call(null,cljs.core.chunk_rest.call(null,s__34294__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34296),null);
}
} else {
var sectors = cljs.core.first.call(null,s__34294__$2);
return cljs.core.cons.call(null,cljs.core.apply.call(null,basapp.domain.bas.insert_sector,sectors),basapp$domain$bas$insert_sectors_$_iter__34293.call(null,cljs.core.rest.call(null,s__34294__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,sectors_data);
})());
});
basapp.domain.bas.insert_employees = (function basapp$domain$bas$insert_employees(employees_data){
return cljs.core.flatten.call(null,(function (){var iter__4324__auto__ = (function basapp$domain$bas$insert_employees_$_iter__34298(s__34299){
return (new cljs.core.LazySeq(null,(function (){
var s__34299__$1 = s__34299;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34299__$1);
if(temp__5720__auto__){
var s__34299__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34299__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__34299__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__34301 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__34300 = (0);
while(true){
if((i__34300 < size__4323__auto__)){
var employee = cljs.core._nth.call(null,c__4322__auto__,i__34300);
cljs.core.chunk_append.call(null,b__34301,cljs.core.apply.call(null,basapp.domain.bas.insert_employee,employee));

var G__34302 = (i__34300 + (1));
i__34300 = G__34302;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34301),basapp$domain$bas$insert_employees_$_iter__34298.call(null,cljs.core.chunk_rest.call(null,s__34299__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34301),null);
}
} else {
var employee = cljs.core.first.call(null,s__34299__$2);
return cljs.core.cons.call(null,cljs.core.apply.call(null,basapp.domain.bas.insert_employee,employee),basapp$domain$bas$insert_employees_$_iter__34298.call(null,cljs.core.rest.call(null,s__34299__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,employees_data);
})());
});
basapp.domain.bas.sectors = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Ured direktora","Sektor 01",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pravno finasijski poslovi","Sektor 02",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Oblast standardizacije","Sektor 03",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["INDOC i INFO","Sektor 04",true], null)], null);
basapp.domain.bas.departments = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Kancelarija direktora","01-1",(1),true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pravni poslovi","02-1",(2),true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Finansijski poslovi","02-2",(2),true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ISO CEN","03-1",(3),true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["IEC CENELEC","03-2",(3),true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["INDOC","04-1",(4),true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["IT INFO","04-2",(4),true], null)], null);
basapp.domain.bas.employees = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Enes","Jaki\u0107","enesj","enes.jakic@bas.gov.ba","11111","Rukovode\u0107i","Pomo\u0107nik Sektor 04",(10),true], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Zvjezdan","\u0160ehovac","zvjezdans","zvjezdan.sehovac@bas.gov.ba","22222","Rukovode\u0107i","\u0160ef Odjeljenje 03-2",(9),true], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dragan","Lu\u010Di\u0107","daraganl","dragan.lucic@bas.gov.ba","33333","Rukovode\u0107i","\u0160ef Odjeljenje 04-2",(11),true], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sr\u0111an","Mr\u0161i\u0107","srdjanm","srdjan.mrsic@bas.gov.ba","33333","Zaposlenik","Refernt",(10),true], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sanja","\u0106iri\u0107","sanjac","sanja.ciric@bas.gov.ba","33333","Zaposlenik","Refernt",(10),true], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Niramla","Ajanovi\u0107","nirmalaa","nirmala.ajanovic@bas.gov.ba","33333","Slu\u017Ebenik","Vi\u0161i stru\u010Dni saradnik",(10),true], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dragan","\u010Cur\u0107ilo","draganc","dragan.curcilo@bas.gov.ba","87897","Slu\u017Ebenik","Vi\u0161i stru\u010Dni saradnik",(9),false], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Mirjana","\u0160u\u0107ur","mirajnas","mirjana.sucur@bas.gov.ba","87897werwe","Rukovode\u0107i","\u0160ef Odjeljenje 02-2",(9),false], null)], null);

//# sourceMappingURL=bas.js.map?rel=1563559053848
