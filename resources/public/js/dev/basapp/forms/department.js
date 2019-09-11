// Compiled by ClojureScript 1.10.339 {}
goog.provide('basapp.forms.department');
goog.require('cljs.core');
goog.require('keechma.toolbox.forms.core');
goog.require('keechma.toolbox.pipeline.core');
goog.require('keechma.toolbox.tasks');
goog.require('basapp.forms.validators');
goog.require('datascript.core');
goog.require('basapp.datascript');
goog.require('basapp.domain.seed');
basapp.forms.department.get_init_data = (function basapp$forms$department$get_init_data(db,department_id){
var data = datascript.core.pull.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),department_id);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("department","name","department/name",-1151724673).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"short-name","short-name",-1767085022),new cljs.core.Keyword("department","short-name","department/short-name",1711124852).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"sector","sector",-1444247062),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("department","sector","department/sector",-63124160).cljs$core$IFn$_invoke$arity$1(data)),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword("department","active","department/active",-1032676766).cljs$core$IFn$_invoke$arity$1(data)], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
basapp.forms.department.Form = (function (validator,__meta,__extmap,__hash){
this.validator = validator;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
basapp.forms.department.Form.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

basapp.forms.department.Form.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k61478,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__61482 = k61478;
var G__61482__$1 = (((G__61482 instanceof cljs.core.Keyword))?G__61482.fqn:null);
switch (G__61482__$1) {
case "validator":
return self__.validator;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k61478,else__4206__auto__);

}
});

basapp.forms.department.Form.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#basapp.forms.department.Form{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"validator","validator",-1966190681),self__.validator],null))], null),self__.__extmap));
});

basapp.forms.department.Form.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__61477){
var self__ = this;
var G__61477__$1 = this;
return (new cljs.core.RecordIter((0),G__61477__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"validator","validator",-1966190681)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

basapp.forms.department.Form.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

basapp.forms.department.Form.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new basapp.forms.department.Form(self__.validator,self__.__meta,self__.__extmap,self__.__hash));
});

basapp.forms.department.Form.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

basapp.forms.department.Form.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (2028991855 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

basapp.forms.department.Form.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this61479,other61480){
var self__ = this;
var this61479__$1 = this;
return ((!((other61480 == null))) && ((this61479__$1.constructor === other61480.constructor)) && (cljs.core._EQ_.call(null,this61479__$1.validator,other61480.validator)) && (cljs.core._EQ_.call(null,this61479__$1.__extmap,other61480.__extmap)));
});

basapp.forms.department.Form.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"validator","validator",-1966190681),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new basapp.forms.department.Form(self__.validator,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

basapp.forms.department.Form.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__61477){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__61483 = cljs.core.keyword_identical_QMARK_;
var expr__61484 = k__4211__auto__;
if(cljs.core.truth_(pred__61483.call(null,new cljs.core.Keyword(null,"validator","validator",-1966190681),expr__61484))){
return (new basapp.forms.department.Form(G__61477,self__.__meta,self__.__extmap,null));
} else {
return (new basapp.forms.department.Form(self__.validator,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__61477),null));
}
});

basapp.forms.department.Form.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"validator","validator",-1966190681),self__.validator,null))], null),self__.__extmap));
});

basapp.forms.department.Form.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__61477){
var self__ = this;
var this__4202__auto____$1 = this;
return (new basapp.forms.department.Form(self__.validator,G__61477,self__.__extmap,self__.__hash));
});

basapp.forms.department.Form.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

basapp.forms.department.Form.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"validator","validator",-325659154,null)], null);
});

basapp.forms.department.Form.cljs$lang$type = true;

basapp.forms.department.Form.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"basapp.forms.department/Form",null,(1),null));
});

basapp.forms.department.Form.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"basapp.forms.department/Form");
});

/**
 * Positional factory function for basapp.forms.department/Form.
 */
basapp.forms.department.__GT_Form = (function basapp$forms$department$__GT_Form(validator){
return (new basapp.forms.department.Form(validator,null,null,null));
});

/**
 * Factory function for basapp.forms.department/Form, taking a map of keywords to field values.
 */
basapp.forms.department.map__GT_Form = (function basapp$forms$department$map__GT_Form(G__61481){
var extmap__4236__auto__ = (function (){var G__61486 = cljs.core.dissoc.call(null,G__61481,new cljs.core.Keyword(null,"validator","validator",-1966190681));
if(cljs.core.record_QMARK_.call(null,G__61481)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__61486);
} else {
return G__61486;
}
})();
return (new basapp.forms.department.Form(new cljs.core.Keyword(null,"validator","validator",-1966190681).cljs$core$IFn$_invoke$arity$1(G__61481),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});

cljs.core._add_method.call(null,keechma.toolbox.forms.core.call,basapp.forms.department.Form,(function (form,app_db,form_props,p__61488){
var vec__61489 = p__61488;
var seq__61490 = cljs.core.seq.call(null,vec__61489);
var first__61491 = cljs.core.first.call(null,seq__61490);
var seq__61490__$1 = cljs.core.next.call(null,seq__61490);
var cmd = first__61491;
var args = seq__61490__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"reset-form","reset-form",620246626),cmd)){
return keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (vec__61489,seq__61490,first__61491,seq__61490__$1,cmd,args){
return (function (value,app_db__$1,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/send-command! [forms-core/id-key :mount-form] [:department :form])",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.send_command_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.toolbox.forms.core.id_key,new cljs.core.Keyword(null,"mount-form","mount-form",-123555853)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"department","department",-359157087),new cljs.core.Keyword(null,"form","form",-1624062471)], null))], null);
});})(vec__61489,seq__61490,first__61491,seq__61490__$1,cmd,args))
], null)], null));
} else {
return null;
}
}));
cljs.core._add_method.call(null,keechma.toolbox.forms.core.get_data,basapp.forms.department.Form,(function (_,app_db,form_props){
return keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db__$1,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(t/block-until!\r\n [form-props :get-data]\r\n (fn* [p1__61492#] (get-in p1__61492# [:kv :datascript-initialized?])))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.tasks.block_until_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_props,new cljs.core.Keyword(null,"get-data","get-data",454586681)], null),(function (p1__61492_SHARP_){
return cljs.core.get_in.call(null,p1__61492_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"datascript-initialized?","datascript-initialized?",2024340329)], null));
}))], null);
}),(function (value,app_db__$1,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(get-init-data (:datascript app-db) (get-in app-db [:route :data :id]))",new cljs.core.Keyword(null,"val","val",128701612),basapp.forms.department.get_init_data.call(null,new cljs.core.Keyword(null,"datascript","datascript",-2114593819).cljs$core$IFn$_invoke$arity$1(app_db__$1),cljs.core.get_in.call(null,app_db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"id","id",-1388402092)], null)))], null);
})], null)], null));
}));
cljs.core._add_method.call(null,keechma.toolbox.forms.core.submit_data,basapp.forms.department.Form,(function (_,app_db,___$1,data){
return keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db__$1,___$2){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(ds/transact!\r\n (insert-department\r\n  (:name data)\r\n  (:short-name data)\r\n  (:sector data)\r\n  (:active data)\r\n  nil))",new cljs.core.Keyword(null,"val","val",128701612),basapp.datascript.transact_BANG_.call(null,basapp.domain.seed.insert_department.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"short-name","short-name",-1767085022).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"sector","sector",-1444247062).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(data),null))], null);
})], null)], null));
}));
cljs.core._add_method.call(null,keechma.toolbox.forms.core.on_submit_success,basapp.forms.department.Form,(function (this$,app_db,form_props,data){
return keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db__$1,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/redirect! {:page \"departments\"})",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.redirect_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),"departments"], null))], null);
})], null)], null));
}));
basapp.forms.department.constructor$ = (function basapp$forms$department$constructor(){
return basapp.forms.department.__GT_Form.call(null,basapp.forms.validators.to_validator.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not-empty","not-empty",388922063)], null),new cljs.core.Keyword(null,"short-name","short-name",-1767085022),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not-empty","not-empty",388922063)], null),new cljs.core.Keyword(null,"sector","sector",-1444247062),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not-empty","not-empty",388922063)], null)], null)));
});

//# sourceMappingURL=department.js.map?rel=1568191592645
