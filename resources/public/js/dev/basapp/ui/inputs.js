// Compiled by ClojureScript 1.10.339 {}
goog.provide('basapp.ui.inputs');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('keechma.toolbox.forms.ui');
goog.require('keechma.toolbox.util');
goog.require('basapp.forms.validators');
goog.require('oops.core');
basapp.ui.inputs.make_input_with_composition_support = (function basapp$ui$inputs$make_input_with_composition_support(tag){
return (function (props){
var el_ref_atom = cljs.core.atom.call(null,null);
var composition_atom_QMARK_ = cljs.core.atom.call(null,false);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (el_ref_atom,composition_atom_QMARK_){
return (function (props__$1){
var props_ref = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props__$1);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.identity;
}
})();
var props_on_change = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"on-change","on-change",-732046149).cljs$core$IFn$_invoke$arity$1(props__$1);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.identity;
}
})();
var props_value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(props__$1);
var props_without_value = cljs.core.dissoc.call(null,props__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,props_without_value,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (props_ref,props_on_change,props_value,props_without_value,el_ref_atom,composition_atom_QMARK_){
return (function (e){
if(cljs.core.truth_(cljs.core.deref.call(null,composition_atom_QMARK_))){
return null;
} else {
return props_on_change.call(null,e);
}
});})(props_ref,props_on_change,props_value,props_without_value,el_ref_atom,composition_atom_QMARK_))
,new cljs.core.Keyword(null,"on-composition-start","on-composition-start",-1518620253),((function (props_ref,props_on_change,props_value,props_without_value,el_ref_atom,composition_atom_QMARK_){
return (function (){
return cljs.core.reset_BANG_.call(null,composition_atom_QMARK_,true);
});})(props_ref,props_on_change,props_value,props_without_value,el_ref_atom,composition_atom_QMARK_))
,new cljs.core.Keyword(null,"on-composition-update","on-composition-update",-337521083),((function (props_ref,props_on_change,props_value,props_without_value,el_ref_atom,composition_atom_QMARK_){
return (function (){
return cljs.core.reset_BANG_.call(null,composition_atom_QMARK_,true);
});})(props_ref,props_on_change,props_value,props_without_value,el_ref_atom,composition_atom_QMARK_))
,new cljs.core.Keyword(null,"on-composition-end","on-composition-end",581757376),((function (props_ref,props_on_change,props_value,props_without_value,el_ref_atom,composition_atom_QMARK_){
return (function (e){
cljs.core.reset_BANG_.call(null,composition_atom_QMARK_,false);

return props_on_change.call(null,e);
});})(props_ref,props_on_change,props_value,props_without_value,el_ref_atom,composition_atom_QMARK_))
,new cljs.core.Keyword(null,"default-value","default-value",232220170),props_value,new cljs.core.Keyword(null,"ref","ref",1289896967),((function (props_ref,props_on_change,props_value,props_without_value,el_ref_atom,composition_atom_QMARK_){
return (function (el){
cljs.core.reset_BANG_.call(null,el_ref_atom,el);

return props_ref.call(null,el);
});})(props_ref,props_on_change,props_value,props_without_value,el_ref_atom,composition_atom_QMARK_))
], null))], null);
});})(el_ref_atom,composition_atom_QMARK_))
,new cljs.core.Keyword(null,"component-will-update","component-will-update",335247566),((function (el_ref_atom,composition_atom_QMARK_){
return (function (comp,p__32073){
var vec__32074 = p__32073;
var _ = cljs.core.nth.call(null,vec__32074,(0),null);
var new_props = cljs.core.nth.call(null,vec__32074,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__32074,(2),null);
var el = cljs.core.deref.call(null,el_ref_atom);
var composition_QMARK_ = cljs.core.deref.call(null,composition_atom_QMARK_);
if(cljs.core.truth_((function (){var and__3938__auto__ = el;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,composition_QMARK_);
} else {
return and__3938__auto__;
}
})())){
return el.value = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new_props);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "";
}
})();
} else {
return null;
}
});})(el_ref_atom,composition_atom_QMARK_))
], null));
});
});
basapp.ui.inputs.input_with_composition_support = basapp.ui.inputs.make_input_with_composition_support.call(null,new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636));
basapp.ui.inputs.textarea_with_composition_support = basapp.ui.inputs.make_input_with_composition_support.call(null,new cljs.core.Keyword(null,"textarea.form-control","textarea.form-control",-1690362789));
basapp.ui.inputs.process_classes = (function basapp$ui$inputs$process_classes(classes){
return clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.name,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [classes], null)))));
});
basapp.ui.inputs.render_errors = (function basapp$ui$inputs$render_errors(attr_errors){
var temp__5720__auto__ = cljs.core.get_in.call(null,attr_errors,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$errors$","$errors$",634888771),new cljs.core.Keyword(null,"failed","failed",-1397425762)], null));
if(cljs.core.truth_(temp__5720__auto__)){
var errors = temp__5720__auto__;
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"5px",new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null)], null),cljs.core.doall.call(null,cljs.core.map.call(null,((function (errors,temp__5720__auto__){
return (function (e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),basapp.forms.validators.get_validator_message.call(null,e)], null);
});})(errors,temp__5720__auto__))
,errors)));
} else {
return null;
}
});
basapp.ui.inputs.get_placeholder = (function basapp$ui$inputs$get_placeholder(p__32077){
var map__32078 = p__32077;
var map__32078__$1 = ((((!((map__32078 == null)))?(((((map__32078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32078):map__32078);
var placeholder = cljs.core.get.call(null,map__32078__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var label = cljs.core.get.call(null,map__32078__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var or__3949__auto__ = placeholder;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return label;
}
});
basapp.ui.inputs.get_label = (function basapp$ui$inputs$get_label(p__32080){
var map__32081 = p__32080;
var map__32081__$1 = ((((!((map__32081 == null)))?(((((map__32081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32081):map__32081);
var label = cljs.core.get.call(null,map__32081__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var placeholder = cljs.core.get.call(null,map__32081__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var or__3949__auto__ = label;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return placeholder;
}
});
basapp.ui.inputs.render_label = (function basapp$ui$inputs$render_label(input_props,errors){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),keechma.toolbox.util.class_names.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"has-errors","has-errors",44889806),cljs.core.seq.call(null,errors)], null))], null),basapp.ui.inputs.get_label.call(null,input_props)], null);
});
basapp.ui.inputs.text = (function basapp$ui$inputs$text(ctx,form_props,attr,p__32085){
var map__32086 = p__32085;
var map__32086__$1 = ((((!((map__32086 == null)))?(((((map__32086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32086):map__32086);
var input_props = map__32086__$1;
var input_type = cljs.core.get.call(null,map__32086__$1,new cljs.core.Keyword(null,"input-type","input-type",856973840));
var class$ = cljs.core.get.call(null,map__32086__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var max = cljs.core.get.call(null,map__32086__$1,new cljs.core.Keyword(null,"max","max",61366548));
var errors = keechma.toolbox.forms.ui.errors_in_GT_.call(null,ctx,form_props,attr);
var input_size = (function (){var or__3949__auto__ = new cljs.core.Keyword("input","size","input/size",1534595413).cljs$core$IFn$_invoke$arity$1(input_props);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"normal","normal",-1519123858);
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.form-group","fieldset.form-group",-2065985896),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [basapp.ui.inputs.render_label,input_props,errors], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [basapp.ui.inputs.input_with_composition_support,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),basapp.ui.inputs.get_placeholder.call(null,input_props),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (errors,input_size,map__32086,map__32086__$1,input_props,input_type,class$,max){
return (function (p1__32083_SHARP_){
return keechma.toolbox.forms.ui._LT_on_change.call(null,ctx,form_props,attr,p1__32083_SHARP_);
});})(errors,input_size,map__32086,map__32086__$1,input_props,input_type,class$,max))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (errors,input_size,map__32086,map__32086__$1,input_props,input_type,class$,max){
return (function (p1__32084_SHARP_){
return keechma.toolbox.forms.ui._LT_on_blur.call(null,ctx,form_props,attr,p1__32084_SHARP_);
});})(errors,input_size,map__32086,map__32086__$1,input_props,input_type,class$,max))
,new cljs.core.Keyword(null,"value","value",305978217),keechma.toolbox.forms.ui.value_in_GT_.call(null,ctx,form_props,attr),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__3949__auto__ = input_type;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"text","text",-1790561697);
}
})(),new cljs.core.Keyword(null,"max","max",61366548),(function (){var or__3949__auto__ = max;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return null;
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),keechma.toolbox.util.class_names.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"has-errors","has-errors",44889806),cljs.core.seq.call(null,errors),"fs2 size-normal",cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"normal","normal",-1519123858),input_size),"fs1 size-small",cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"small","small",2133478704),input_size),basapp.ui.inputs.process_classes.call(null,class$),true]))], null),cljs.core.select_keys.call(null,input_props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),new cljs.core.Keyword(null,"disabled","disabled",-1529784218)], null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [basapp.ui.inputs.render_errors,errors], null)], null);
});
basapp.ui.inputs.textarea = (function basapp$ui$inputs$textarea(ctx,form_props,attr,p__32090){
var map__32091 = p__32090;
var map__32091__$1 = ((((!((map__32091 == null)))?(((((map__32091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32091):map__32091);
var input_props = map__32091__$1;
var rows = cljs.core.get.call(null,map__32091__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var class$ = cljs.core.get.call(null,map__32091__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var errors = keechma.toolbox.forms.ui.errors_in_GT_.call(null,ctx,form_props,attr);
var input_size = (function (){var or__3949__auto__ = new cljs.core.Keyword("input","size","input/size",1534595413).cljs$core$IFn$_invoke$arity$1(input_props);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"normal","normal",-1519123858);
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.form-group","fieldset.form-group",-2065985896),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [basapp.ui.inputs.render_label,input_props], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [basapp.ui.inputs.textarea_with_composition_support,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),basapp.ui.inputs.get_placeholder.call(null,input_props),new cljs.core.Keyword(null,"rows","rows",850049680),(function (){var or__3949__auto__ = rows;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (6);
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (errors,input_size,map__32091,map__32091__$1,input_props,rows,class$){
return (function (p1__32088_SHARP_){
return keechma.toolbox.forms.ui._LT_on_change.call(null,ctx,form_props,attr,p1__32088_SHARP_);
});})(errors,input_size,map__32091,map__32091__$1,input_props,rows,class$))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (errors,input_size,map__32091,map__32091__$1,input_props,rows,class$){
return (function (p1__32089_SHARP_){
return keechma.toolbox.forms.ui._LT_on_blur.call(null,ctx,form_props,attr,p1__32089_SHARP_);
});})(errors,input_size,map__32091,map__32091__$1,input_props,rows,class$))
,new cljs.core.Keyword(null,"value","value",305978217),keechma.toolbox.forms.ui.value_in_GT_.call(null,ctx,form_props,attr),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"resize","resize",297367086),"vertical"], null),new cljs.core.Keyword(null,"class","class",-2030961996),keechma.toolbox.util.class_names.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"has-errors","has-errors",44889806),cljs.core.seq.call(null,errors),"fs2 size-normal",cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"normal","normal",-1519123858),input_size),"fs1 size-small",cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"small","small",2133478704),input_size),basapp.ui.inputs.process_classes.call(null,class$),true]))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [basapp.ui.inputs.render_errors,keechma.toolbox.forms.ui.errors_in_GT_.call(null,ctx,form_props,attr)], null)], null);
});
basapp.ui.inputs.select = (function basapp$ui$inputs$select(ctx,form_props,attr,p__32094){
var map__32095 = p__32094;
var map__32095__$1 = ((((!((map__32095 == null)))?(((((map__32095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32095):map__32095);
var input_props = map__32095__$1;
var options = cljs.core.get.call(null,map__32095__$1,new cljs.core.Keyword(null,"options","options",99638489));
var optgroups = cljs.core.get.call(null,map__32095__$1,new cljs.core.Keyword(null,"optgroups","optgroups",-1959444938));
var class$ = cljs.core.get.call(null,map__32095__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var errors = keechma.toolbox.forms.ui.errors_in_GT_.call(null,ctx,form_props,attr);
var placeholder = basapp.ui.inputs.get_placeholder.call(null,input_props);
var input_size = (function (){var or__3949__auto__ = new cljs.core.Keyword("input","size","input/size",1534595413).cljs$core$IFn$_invoke$arity$1(input_props);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"normal","normal",-1519123858);
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.form-group","fieldset.form-group",-2065985896),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [basapp.ui.inputs.render_label,input_props], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.form-control","select.form-control",696610397),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (errors,placeholder,input_size,map__32095,map__32095__$1,input_props,options,optgroups,class$){
return (function (p1__32093_SHARP_){
return keechma.toolbox.forms.ui._LT_on_change.call(null,ctx,form_props,attr,p1__32093_SHARP_);
});})(errors,placeholder,input_size,map__32095,map__32095__$1,input_props,options,optgroups,class$))
,new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = keechma.toolbox.forms.ui.value_in_GT_.call(null,ctx,form_props,attr);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),keechma.toolbox.util.class_names.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"has-errors","has-errors",44889806),cljs.core.seq.call(null,errors),"fs2 size-normal",cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"normal","normal",-1519123858),input_size),"fs1 size-small",cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"small","small",2133478704),input_size),basapp.ui.inputs.process_classes.call(null,class$),true]))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),placeholder], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"\u2014"], null),(cljs.core.truth_(optgroups)?cljs.core.map.call(null,((function (errors,placeholder,input_size,map__32095,map__32095__$1,input_props,options,optgroups,class$){
return (function (p__32097){
var map__32098 = p__32097;
var map__32098__$1 = ((((!((map__32098 == null)))?(((((map__32098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32098):map__32098);
var label = cljs.core.get.call(null,map__32098__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var options__$1 = cljs.core.get.call(null,map__32098__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.seq.call(null,options__$1)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"key","key",-1516042587),label], null),cljs.core.map.call(null,((function (map__32098,map__32098__$1,label,options__$1,errors,placeholder,input_size,map__32095,map__32095__$1,input_props,options,optgroups,class$){
return (function (p__32100){
var map__32101 = p__32100;
var map__32101__$1 = ((((!((map__32101 == null)))?(((((map__32101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32101):map__32101);
var value = cljs.core.get.call(null,map__32101__$1,new cljs.core.Keyword(null,"value","value",305978217));
var label__$1 = cljs.core.get.call(null,map__32101__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"key","key",-1516042587),value], null),label__$1], null);
});})(map__32098,map__32098__$1,label,options__$1,errors,placeholder,input_size,map__32095,map__32095__$1,input_props,options,optgroups,class$))
,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),options__$1))], null);
} else {
return null;
}
});})(errors,placeholder,input_size,map__32095,map__32095__$1,input_props,options,optgroups,class$))
,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),optgroups)):cljs.core.map.call(null,((function (errors,placeholder,input_size,map__32095,map__32095__$1,input_props,options,optgroups,class$){
return (function (p__32103){
var map__32104 = p__32103;
var map__32104__$1 = ((((!((map__32104 == null)))?(((((map__32104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32104):map__32104);
var value = cljs.core.get.call(null,map__32104__$1,new cljs.core.Keyword(null,"value","value",305978217));
var label = cljs.core.get.call(null,map__32104__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"key","key",-1516042587),value], null),label], null);
});})(errors,placeholder,input_size,map__32095,map__32095__$1,input_props,options,optgroups,class$))
,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"label","label",1718410804),options)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [basapp.ui.inputs.render_errors,keechma.toolbox.forms.ui.errors_in_GT_.call(null,ctx,form_props,attr)], null)], null);
});
basapp.ui.inputs.checkbox = (function basapp$ui$inputs$checkbox(ctx,form_props,attr,p__32107){
var map__32108 = p__32107;
var map__32108__$1 = ((((!((map__32108 == null)))?(((((map__32108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32108):map__32108);
var input_props = map__32108__$1;
var class$ = cljs.core.get.call(null,map__32108__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var errors = keechma.toolbox.forms.ui.errors_in_GT_.call(null,ctx,form_props,attr);
var input_size = (function (){var or__3949__auto__ = new cljs.core.Keyword("input","size","input/size",1534595413).cljs$core$IFn$_invoke$arity$1(input_props);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"normal","normal",-1519123858);
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.form-group","fieldset.form-group",-2065985896),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.fs2.c-neutral-3.block","label.fs2.c-neutral-3.block",-1413428971),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.mr1","input.mr1",-712173387),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),basapp.ui.inputs.get_placeholder.call(null,input_props),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (errors,input_size,map__32108,map__32108__$1,input_props,class$){
return (function (p1__32106_SHARP_){
return keechma.toolbox.forms.ui._LT_set_value.call(null,ctx,form_props,attr,(function (){var target_obj_32110 = p1__32106_SHARP_;
var _STAR_runtime_state_STAR_32113 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_32110,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_32111 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_32110,(0),"target",true,true,false))?(target_obj_32110["target"]):null);
var next_obj_32112 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_32111,(0),"checked",true,true,false))?(next_obj_32111["checked"]):null);
return next_obj_32112;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_32113;
}})());
});})(errors,input_size,map__32108,map__32108__$1,input_props,class$))
,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.boolean$.call(null,keechma.toolbox.forms.ui.value_in_GT_.call(null,ctx,form_props,attr)),new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"class","class",-2030961996),keechma.toolbox.util.class_names.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"has-errors","has-errors",44889806),cljs.core.seq.call(null,errors),basapp.ui.inputs.process_classes.call(null,class$),true]))], null)], null),basapp.ui.inputs.get_label.call(null,input_props)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [basapp.ui.inputs.render_errors,keechma.toolbox.forms.ui.errors_in_GT_.call(null,ctx,form_props,attr)], null)], null);
});

//# sourceMappingURL=inputs.js.map?rel=1568104870033
