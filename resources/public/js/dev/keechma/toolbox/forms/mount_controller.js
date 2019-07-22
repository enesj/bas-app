// Compiled by ClojureScript 1.10.339 {}
goog.provide('keechma.toolbox.forms.mount_controller');
goog.require('cljs.core');
goog.require('keechma.controller');
goog.require('keechma.toolbox.forms.core');
goog.require('cljs.core.async');
goog.require('clojure.set');

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
keechma.toolbox.forms.mount_controller.Controller = (function (forms_params,__meta,__extmap,__hash){
this.forms_params = forms_params;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k69988,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__69992 = k69988;
var G__69992__$1 = (((G__69992 instanceof cljs.core.Keyword))?G__69992.fqn:null);
switch (G__69992__$1) {
case "forms-params":
return self__.forms_params;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k69988,else__4206__auto__);

}
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#keechma.toolbox.forms.mount-controller.Controller{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"forms-params","forms-params",709182870),self__.forms_params],null))], null),self__.__extmap));
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__69987){
var self__ = this;
var G__69987__$1 = this;
return (new cljs.core.RecordIter((0),G__69987__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"forms-params","forms-params",709182870)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new keechma.toolbox.forms.mount_controller.Controller(self__.forms_params,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1277434469 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this69989,other69990){
var self__ = this;
var this69989__$1 = this;
return ((!((other69990 == null))) && ((this69989__$1.constructor === other69990.constructor)) && (cljs.core._EQ_.call(null,this69989__$1.forms_params,other69990.forms_params)) && (cljs.core._EQ_.call(null,this69989__$1.__extmap,other69990.__extmap)));
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"forms-params","forms-params",709182870),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new keechma.toolbox.forms.mount_controller.Controller(self__.forms_params,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__69987){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__69993 = cljs.core.keyword_identical_QMARK_;
var expr__69994 = k__4211__auto__;
if(cljs.core.truth_(pred__69993.call(null,new cljs.core.Keyword(null,"forms-params","forms-params",709182870),expr__69994))){
return (new keechma.toolbox.forms.mount_controller.Controller(G__69987,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.forms.mount_controller.Controller(self__.forms_params,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__69987),null));
}
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"forms-params","forms-params",709182870),self__.forms_params,null))], null),self__.__extmap));
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__69987){
var self__ = this;
var this__4202__auto____$1 = this;
return (new keechma.toolbox.forms.mount_controller.Controller(self__.forms_params,G__69987,self__.__extmap,self__.__hash));
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

keechma.toolbox.forms.mount_controller.Controller.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms-params","forms-params",-1945252899,null)], null);
});

keechma.toolbox.forms.mount_controller.Controller.cljs$lang$type = true;

keechma.toolbox.forms.mount_controller.Controller.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"keechma.toolbox.forms.mount-controller/Controller",null,(1),null));
});

keechma.toolbox.forms.mount_controller.Controller.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"keechma.toolbox.forms.mount-controller/Controller");
});

/**
 * Positional factory function for keechma.toolbox.forms.mount-controller/Controller.
 */
keechma.toolbox.forms.mount_controller.__GT_Controller = (function keechma$toolbox$forms$mount_controller$__GT_Controller(forms_params){
return (new keechma.toolbox.forms.mount_controller.Controller(forms_params,null,null,null));
});

/**
 * Factory function for keechma.toolbox.forms.mount-controller/Controller, taking a map of keywords to field values.
 */
keechma.toolbox.forms.mount_controller.map__GT_Controller = (function keechma$toolbox$forms$mount_controller$map__GT_Controller(G__69991){
var extmap__4236__auto__ = (function (){var G__69996 = cljs.core.dissoc.call(null,G__69991,new cljs.core.Keyword(null,"forms-params","forms-params",709182870));
if(cljs.core.record_QMARK_.call(null,G__69991)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__69996);
} else {
return G__69996;
}
})();
return (new keechma.toolbox.forms.mount_controller.Controller(new cljs.core.Keyword(null,"forms-params","forms-params",709182870).cljs$core$IFn$_invoke$arity$1(G__69991),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});

keechma.toolbox.forms.mount_controller.forms_for_route = (function keechma$toolbox$forms$mount_controller$forms_for_route(route,app_db,forms_params){
return cljs.core.reduce.call(null,(function (acc,p__69998){
var vec__69999 = p__69998;
var form = cljs.core.nth.call(null,vec__69999,(0),null);
var params_fn = cljs.core.nth.call(null,vec__69999,(1),null);
var temp__5718__auto__ = params_fn.call(null,route,app_db);
if(cljs.core.truth_(temp__5718__auto__)){
var id = temp__5718__auto__;
return cljs.core.reduce.call(null,((function (id,temp__5718__auto__,vec__69999,form,params_fn){
return (function (inner_acc,inner_id){
return cljs.core.conj.call(null,inner_acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,inner_id], null));
});})(id,temp__5718__auto__,vec__69999,form,params_fn))
,acc,cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null)));
} else {
return acc;
}
}),cljs.core.PersistentVector.EMPTY,forms_params);
});
keechma.toolbox.forms.mount_controller.mount_forms = (function keechma$toolbox$forms$mount_controller$mount_forms(controller,app_db_atom,route,mounted_forms){
var forms_params = new cljs.core.Keyword(null,"forms-params","forms-params",709182870).cljs$core$IFn$_invoke$arity$1(controller);
var should_be_mounted_forms = cljs.core.set.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,keechma.toolbox.forms.mount_controller.forms_for_route.call(null,route,cljs.core.deref.call(null,app_db_atom),forms_params)));
var forms_to_unmount = clojure.set.difference.call(null,mounted_forms,should_be_mounted_forms);
var forms_to_mount = clojure.set.difference.call(null,should_be_mounted_forms,mounted_forms);
var seq__70004_70012 = cljs.core.seq.call(null,forms_to_unmount);
var chunk__70005_70013 = null;
var count__70006_70014 = (0);
var i__70007_70015 = (0);
while(true){
if((i__70007_70015 < count__70006_70014)){
var f_70016 = cljs.core._nth.call(null,chunk__70005_70013,i__70007_70015);
keechma.controller.send_command.call(null,controller,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.toolbox.forms.core.id_key,new cljs.core.Keyword(null,"unmount-form","unmount-form",-11208746)], null),f_70016);


var G__70017 = seq__70004_70012;
var G__70018 = chunk__70005_70013;
var G__70019 = count__70006_70014;
var G__70020 = (i__70007_70015 + (1));
seq__70004_70012 = G__70017;
chunk__70005_70013 = G__70018;
count__70006_70014 = G__70019;
i__70007_70015 = G__70020;
continue;
} else {
var temp__5720__auto___70021 = cljs.core.seq.call(null,seq__70004_70012);
if(temp__5720__auto___70021){
var seq__70004_70022__$1 = temp__5720__auto___70021;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70004_70022__$1)){
var c__4351__auto___70023 = cljs.core.chunk_first.call(null,seq__70004_70022__$1);
var G__70024 = cljs.core.chunk_rest.call(null,seq__70004_70022__$1);
var G__70025 = c__4351__auto___70023;
var G__70026 = cljs.core.count.call(null,c__4351__auto___70023);
var G__70027 = (0);
seq__70004_70012 = G__70024;
chunk__70005_70013 = G__70025;
count__70006_70014 = G__70026;
i__70007_70015 = G__70027;
continue;
} else {
var f_70028 = cljs.core.first.call(null,seq__70004_70022__$1);
keechma.controller.send_command.call(null,controller,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.toolbox.forms.core.id_key,new cljs.core.Keyword(null,"unmount-form","unmount-form",-11208746)], null),f_70028);


var G__70029 = cljs.core.next.call(null,seq__70004_70022__$1);
var G__70030 = null;
var G__70031 = (0);
var G__70032 = (0);
seq__70004_70012 = G__70029;
chunk__70005_70013 = G__70030;
count__70006_70014 = G__70031;
i__70007_70015 = G__70032;
continue;
}
} else {
}
}
break;
}

var seq__70008 = cljs.core.seq.call(null,forms_to_mount);
var chunk__70009 = null;
var count__70010 = (0);
var i__70011 = (0);
while(true){
if((i__70011 < count__70010)){
var f = cljs.core._nth.call(null,chunk__70009,i__70011);
keechma.controller.send_command.call(null,controller,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.toolbox.forms.core.id_key,new cljs.core.Keyword(null,"mount-form","mount-form",-123555853)], null),f);


var G__70033 = seq__70008;
var G__70034 = chunk__70009;
var G__70035 = count__70010;
var G__70036 = (i__70011 + (1));
seq__70008 = G__70033;
chunk__70009 = G__70034;
count__70010 = G__70035;
i__70011 = G__70036;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__70008);
if(temp__5720__auto__){
var seq__70008__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70008__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__70008__$1);
var G__70037 = cljs.core.chunk_rest.call(null,seq__70008__$1);
var G__70038 = c__4351__auto__;
var G__70039 = cljs.core.count.call(null,c__4351__auto__);
var G__70040 = (0);
seq__70008 = G__70037;
chunk__70009 = G__70038;
count__70010 = G__70039;
i__70011 = G__70040;
continue;
} else {
var f = cljs.core.first.call(null,seq__70008__$1);
keechma.controller.send_command.call(null,controller,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.toolbox.forms.core.id_key,new cljs.core.Keyword(null,"mount-form","mount-form",-123555853)], null),f);


var G__70041 = cljs.core.next.call(null,seq__70008__$1);
var G__70042 = null;
var G__70043 = (0);
var G__70044 = (0);
seq__70008 = G__70041;
chunk__70009 = G__70042;
count__70010 = G__70043;
i__70011 = G__70044;
continue;
}
} else {
return null;
}
}
break;
}
});
keechma.toolbox.forms.mount_controller.get_mounted_forms = (function keechma$toolbox$forms$mount_controller$get_mounted_forms(app_db){
return cljs.core.set.call(null,cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),keechma.toolbox.forms.core.id_key,new cljs.core.Keyword(null,"order","order",-1254677256)], null)));
});
cljs.core._add_method.call(null,keechma.controller.params,keechma.toolbox.forms.mount_controller.Controller,(function (this$,route){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route);
}));
cljs.core._add_method.call(null,keechma.controller.handler,keechma.toolbox.forms.mount_controller.Controller,(function (this$,app_db_atom,in_chan,out_chan){
keechma.toolbox.forms.mount_controller.mount_forms.call(null,this$,app_db_atom,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),keechma.toolbox.forms.mount_controller.get_mounted_forms.call(null,cljs.core.deref.call(null,app_db_atom)));

var c__58857__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58857__auto__){
return (function (){
var f__58858__auto__ = (function (){var switch__24619__auto__ = ((function (c__58857__auto__){
return (function (state_70073){
var state_val_70074 = (state_70073[(1)]);
if((state_val_70074 === (7))){
var inst_70052 = (state_70073[(7)]);
var inst_70057 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_70052);
var inst_70058 = cljs.core.deref.call(null,app_db_atom);
var inst_70059 = keechma.toolbox.forms.mount_controller.get_mounted_forms.call(null,inst_70058);
var inst_70060 = keechma.toolbox.forms.mount_controller.mount_forms.call(null,this$,app_db_atom,inst_70057,inst_70059);
var state_70073__$1 = state_70073;
var statearr_70075_70094 = state_70073__$1;
(statearr_70075_70094[(2)] = inst_70060);

(statearr_70075_70094[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70074 === (1))){
var state_70073__$1 = state_70073;
var statearr_70076_70095 = state_70073__$1;
(statearr_70076_70095[(2)] = null);

(statearr_70076_70095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70074 === (4))){
var inst_70051 = (state_70073[(8)]);
var inst_70050 = (state_70073[(2)]);
var inst_70051__$1 = cljs.core.nth.call(null,inst_70050,(0),null);
var inst_70052 = cljs.core.nth.call(null,inst_70050,(1),null);
var state_70073__$1 = (function (){var statearr_70077 = state_70073;
(statearr_70077[(8)] = inst_70051__$1);

(statearr_70077[(7)] = inst_70052);

return statearr_70077;
})();
var G__70078_70096 = inst_70051__$1;
var G__70078_70097__$1 = (((G__70078_70096 instanceof cljs.core.Keyword))?G__70078_70096.fqn:null);
switch (G__70078_70097__$1) {
case "mount-forms":
var statearr_70079_70099 = state_70073__$1;
(statearr_70079_70099[(1)] = (6));


break;
case "route-changed":
var statearr_70080_70100 = state_70073__$1;
(statearr_70080_70100[(1)] = (7));


break;
default:
var statearr_70081_70101 = state_70073__$1;
(statearr_70081_70101[(1)] = (8));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70074 === (6))){
var inst_70052 = (state_70073[(7)]);
var inst_70053 = cljs.core.deref.call(null,app_db_atom);
var inst_70054 = keechma.toolbox.forms.mount_controller.get_mounted_forms.call(null,inst_70053);
var inst_70055 = keechma.toolbox.forms.mount_controller.mount_forms.call(null,this$,app_db_atom,inst_70052,inst_70054);
var state_70073__$1 = state_70073;
var statearr_70082_70102 = state_70073__$1;
(statearr_70082_70102[(2)] = inst_70055);

(statearr_70082_70102[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70074 === (3))){
var inst_70071 = (state_70073[(2)]);
var state_70073__$1 = state_70073;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70073__$1,inst_70071);
} else {
if((state_val_70074 === (2))){
var state_70073__$1 = state_70073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70073__$1,(4),in_chan);
} else {
if((state_val_70074 === (11))){
var inst_70069 = (state_70073[(2)]);
var state_70073__$1 = state_70073;
var statearr_70083_70103 = state_70073__$1;
(statearr_70083_70103[(2)] = inst_70069);

(statearr_70083_70103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70074 === (9))){
var state_70073__$1 = state_70073;
var statearr_70084_70104 = state_70073__$1;
(statearr_70084_70104[(2)] = null);

(statearr_70084_70104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70074 === (5))){
var inst_70051 = (state_70073[(8)]);
var inst_70064 = (state_70073[(2)]);
var state_70073__$1 = (function (){var statearr_70085 = state_70073;
(statearr_70085[(9)] = inst_70064);

return statearr_70085;
})();
if(cljs.core.truth_(inst_70051)){
var statearr_70086_70105 = state_70073__$1;
(statearr_70086_70105[(1)] = (9));

} else {
var statearr_70087_70106 = state_70073__$1;
(statearr_70087_70106[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70074 === (10))){
var state_70073__$1 = state_70073;
var statearr_70088_70107 = state_70073__$1;
(statearr_70088_70107[(2)] = null);

(statearr_70088_70107[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70074 === (8))){
var state_70073__$1 = state_70073;
var statearr_70089_70108 = state_70073__$1;
(statearr_70089_70108[(2)] = null);

(statearr_70089_70108[(1)] = (5));


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
});})(c__58857__auto__))
;
return ((function (switch__24619__auto__,c__58857__auto__){
return (function() {
var keechma$toolbox$forms$mount_controller$state_machine__24620__auto__ = null;
var keechma$toolbox$forms$mount_controller$state_machine__24620__auto____0 = (function (){
var statearr_70090 = [null,null,null,null,null,null,null,null,null,null];
(statearr_70090[(0)] = keechma$toolbox$forms$mount_controller$state_machine__24620__auto__);

(statearr_70090[(1)] = (1));

return statearr_70090;
});
var keechma$toolbox$forms$mount_controller$state_machine__24620__auto____1 = (function (state_70073){
while(true){
var ret_value__24621__auto__ = (function (){try{while(true){
var result__24622__auto__ = switch__24619__auto__.call(null,state_70073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24622__auto__;
}
break;
}
}catch (e70091){if((e70091 instanceof Object)){
var ex__24623__auto__ = e70091;
var statearr_70092_70109 = state_70073;
(statearr_70092_70109[(5)] = ex__24623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70110 = state_70073;
state_70073 = G__70110;
continue;
} else {
return ret_value__24621__auto__;
}
break;
}
});
keechma$toolbox$forms$mount_controller$state_machine__24620__auto__ = function(state_70073){
switch(arguments.length){
case 0:
return keechma$toolbox$forms$mount_controller$state_machine__24620__auto____0.call(this);
case 1:
return keechma$toolbox$forms$mount_controller$state_machine__24620__auto____1.call(this,state_70073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keechma$toolbox$forms$mount_controller$state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$toolbox$forms$mount_controller$state_machine__24620__auto____0;
keechma$toolbox$forms$mount_controller$state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$toolbox$forms$mount_controller$state_machine__24620__auto____1;
return keechma$toolbox$forms$mount_controller$state_machine__24620__auto__;
})()
;})(switch__24619__auto__,c__58857__auto__))
})();
var state__58859__auto__ = (function (){var statearr_70093 = f__58858__auto__.call(null);
(statearr_70093[(6)] = c__58857__auto__);

return statearr_70093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58859__auto__);
});})(c__58857__auto__))
);

return c__58857__auto__;
}));
keechma.toolbox.forms.mount_controller.constructor$ = (function keechma$toolbox$forms$mount_controller$constructor(forms_params){
return keechma.toolbox.forms.mount_controller.__GT_Controller.call(null,forms_params);
});
keechma.toolbox.forms.mount_controller.register = (function keechma$toolbox$forms$mount_controller$register(var_args){
var G__70112 = arguments.length;
switch (G__70112) {
case 1:
return keechma.toolbox.forms.mount_controller.register.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.toolbox.forms.mount_controller.register.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.toolbox.forms.mount_controller.register.cljs$core$IFn$_invoke$arity$1 = (function (forms_params){
return keechma.toolbox.forms.mount_controller.register.call(null,cljs.core.PersistentArrayMap.EMPTY,forms_params);
});

keechma.toolbox.forms.mount_controller.register.cljs$core$IFn$_invoke$arity$2 = (function (controllers,forms_params){
return cljs.core.assoc.call(null,controllers,new cljs.core.Keyword("keechma.toolbox.forms.mount-controller","id","keechma.toolbox.forms.mount-controller/id",1803111360),keechma.toolbox.forms.mount_controller.constructor$.call(null,forms_params));
});

keechma.toolbox.forms.mount_controller.register.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=mount_controller.js.map?rel=1563552892736
