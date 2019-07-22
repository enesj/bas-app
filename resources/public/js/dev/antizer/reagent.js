// Compiled by ClojureScript 1.10.339 {}
goog.provide('antizer.reagent');
goog.require('cljs.core');
goog.require('antizer.core');
goog.require('goog.object');
goog.require('reagent.core');
/**
 * Calls Form.create() decorator with the form to be created. form can be
 * any hiccup form. Accepts the following options:
 * 
 * * :options - map of Form.create() options. Refer to: 
 *              https://ant.design/components/form/#Form.create(options) for
 *              details
 * * :props - the properties hashmap to be passed to the component. Note that
 *            the received properties will be in the form of a JavaScript associative map
 */
antizer.reagent.create_form = (function antizer$reagent$create_form(var_args){
var args__4534__auto__ = [];
var len__4531__auto___70917 = arguments.length;
var i__4532__auto___70918 = (0);
while(true){
if((i__4532__auto___70918 < len__4531__auto___70917)){
args__4534__auto__.push((arguments[i__4532__auto___70918]));

var G__70919 = (i__4532__auto___70918 + (1));
i__4532__auto___70918 = G__70919;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return antizer.reagent.create_form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

antizer.reagent.create_form.cljs$core$IFn$_invoke$arity$variadic = (function (form,p__70914){
var map__70915 = p__70914;
var map__70915__$1 = ((((!((map__70915 == null)))?(((((map__70915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70915):map__70915);
var options = cljs.core.get.call(null,map__70915__$1,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY);
var props = cljs.core.get.call(null,map__70915__$1,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY);
return reagent.core.create_element.call(null,goog.object.getValueByKeys(antd,"Form","create").call(null,cljs.core.clj__GT_js.call(null,antizer.core.map_keys__GT_camel_case.call(null,options))).call(null,reagent.core.reactify_component.call(null,form)),cljs.core.clj__GT_js.call(null,props));
});

antizer.reagent.create_form.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
antizer.reagent.create_form.cljs$lang$applyTo = (function (seq70912){
var G__70913 = cljs.core.first.call(null,seq70912);
var seq70912__$1 = cljs.core.next.call(null,seq70912);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70913,seq70912__$1);
});

/**
 * Returns the `form` created by Form.create(). This function must be called
 * from within the `form` component
 */
antizer.reagent.get_form = (function antizer$reagent$get_form(){
return new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,reagent.core.props.call(null,reagent.core.current_component.call(null)),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
/**
 * Decorate a form field, corresponds to antd's getFieldDecorator() function
 * Arguments:
 * 
 * * form - the `form` object, obtained from `(get-form)`
 * * id - field identifier, supports nested fields format in string format
 * * options - the validation options for the field
 * * field - the input field element that the validation will be applied to
 * 
 * For more information about the validation options, please refer to: 
 * https://ant.design/components/form/#getFieldDecorator(id,-options)-parameters
 */
antizer.reagent.decorate_field = (function antizer$reagent$decorate_field(var_args){
var G__70921 = arguments.length;
switch (G__70921) {
case 3:
return antizer.reagent.decorate_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return antizer.reagent.decorate_field.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

antizer.reagent.decorate_field.cljs$core$IFn$_invoke$arity$3 = (function (form,id,field){
return antizer.reagent.decorate_field.call(null,form,id,cljs.core.PersistentArrayMap.EMPTY,field);
});

antizer.reagent.decorate_field.cljs$core$IFn$_invoke$arity$4 = (function (form,id,options,field){
var field_decorator = new cljs.core.Keyword(null,"getFieldDecorator","getFieldDecorator",-1859085334).cljs$core$IFn$_invoke$arity$1(form);
var params = cljs.core.clj__GT_js.call(null,antizer.core.map_keys__GT_camel_case.call(null,options));
return field_decorator.call(null,id,params).call(null,reagent.core.as_element.call(null,field));
});

antizer.reagent.decorate_field.cljs$lang$maxFixedArity = 4;

antizer.reagent.get_field_decorator = (function antizer$reagent$get_field_decorator(var_args){
var args__4534__auto__ = [];
var len__4531__auto___70949 = arguments.length;
var i__4532__auto___70950 = (0);
while(true){
if((i__4532__auto___70950 < len__4531__auto___70949)){
args__4534__auto__.push((arguments[i__4532__auto___70950]));

var G__70951 = (i__4532__auto___70950 + (1));
i__4532__auto___70950 = G__70951;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_field_decorator.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

antizer.reagent.get_field_decorator.cljs$core$IFn$_invoke$arity$variadic = (function (form__43314__auto__,args__43315__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"getFieldDecorator").call(null,form__43314__auto__),args__43315__auto__);
});

antizer.reagent.get_field_decorator.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
antizer.reagent.get_field_decorator.cljs$lang$applyTo = (function (seq70923){
var G__70924 = cljs.core.first.call(null,seq70923);
var seq70923__$1 = cljs.core.next.call(null,seq70923);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70924,seq70923__$1);
});


antizer.reagent.get_field_error = (function antizer$reagent$get_field_error(var_args){
var args__4534__auto__ = [];
var len__4531__auto___70952 = arguments.length;
var i__4532__auto___70953 = (0);
while(true){
if((i__4532__auto___70953 < len__4531__auto___70952)){
args__4534__auto__.push((arguments[i__4532__auto___70953]));

var G__70954 = (i__4532__auto___70953 + (1));
i__4532__auto___70953 = G__70954;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_field_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

antizer.reagent.get_field_error.cljs$core$IFn$_invoke$arity$variadic = (function (form__43314__auto__,args__43315__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"getFieldError").call(null,form__43314__auto__),args__43315__auto__);
});

antizer.reagent.get_field_error.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
antizer.reagent.get_field_error.cljs$lang$applyTo = (function (seq70925){
var G__70926 = cljs.core.first.call(null,seq70925);
var seq70925__$1 = cljs.core.next.call(null,seq70925);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70926,seq70925__$1);
});


antizer.reagent.get_fields_error = (function antizer$reagent$get_fields_error(var_args){
var args__4534__auto__ = [];
var len__4531__auto___70955 = arguments.length;
var i__4532__auto___70956 = (0);
while(true){
if((i__4532__auto___70956 < len__4531__auto___70955)){
args__4534__auto__.push((arguments[i__4532__auto___70956]));

var G__70957 = (i__4532__auto___70956 + (1));
i__4532__auto___70956 = G__70957;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_fields_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

antizer.reagent.get_fields_error.cljs$core$IFn$_invoke$arity$variadic = (function (form__43314__auto__,args__43315__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"getFieldsError").call(null,form__43314__auto__),args__43315__auto__);
});

antizer.reagent.get_fields_error.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
antizer.reagent.get_fields_error.cljs$lang$applyTo = (function (seq70927){
var G__70928 = cljs.core.first.call(null,seq70927);
var seq70927__$1 = cljs.core.next.call(null,seq70927);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70928,seq70927__$1);
});


antizer.reagent.get_fields_value = (function antizer$reagent$get_fields_value(var_args){
var args__4534__auto__ = [];
var len__4531__auto___70958 = arguments.length;
var i__4532__auto___70959 = (0);
while(true){
if((i__4532__auto___70959 < len__4531__auto___70958)){
args__4534__auto__.push((arguments[i__4532__auto___70959]));

var G__70960 = (i__4532__auto___70959 + (1));
i__4532__auto___70959 = G__70960;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_fields_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

antizer.reagent.get_fields_value.cljs$core$IFn$_invoke$arity$variadic = (function (form__43314__auto__,args__43315__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"getFieldsValue").call(null,form__43314__auto__),args__43315__auto__);
});

antizer.reagent.get_fields_value.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
antizer.reagent.get_fields_value.cljs$lang$applyTo = (function (seq70929){
var G__70930 = cljs.core.first.call(null,seq70929);
var seq70929__$1 = cljs.core.next.call(null,seq70929);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70930,seq70929__$1);
});


antizer.reagent.get_field_value = (function antizer$reagent$get_field_value(var_args){
var args__4534__auto__ = [];
var len__4531__auto___70961 = arguments.length;
var i__4532__auto___70962 = (0);
while(true){
if((i__4532__auto___70962 < len__4531__auto___70961)){
args__4534__auto__.push((arguments[i__4532__auto___70962]));

var G__70963 = (i__4532__auto___70962 + (1));
i__4532__auto___70962 = G__70963;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_field_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

antizer.reagent.get_field_value.cljs$core$IFn$_invoke$arity$variadic = (function (form__43314__auto__,args__43315__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"getFieldValue").call(null,form__43314__auto__),args__43315__auto__);
});

antizer.reagent.get_field_value.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
antizer.reagent.get_field_value.cljs$lang$applyTo = (function (seq70931){
var G__70932 = cljs.core.first.call(null,seq70931);
var seq70931__$1 = cljs.core.next.call(null,seq70931);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70932,seq70931__$1);
});


antizer.reagent.is_fields_touched = (function antizer$reagent$is_fields_touched(var_args){
var args__4534__auto__ = [];
var len__4531__auto___70964 = arguments.length;
var i__4532__auto___70965 = (0);
while(true){
if((i__4532__auto___70965 < len__4531__auto___70964)){
args__4534__auto__.push((arguments[i__4532__auto___70965]));

var G__70966 = (i__4532__auto___70965 + (1));
i__4532__auto___70965 = G__70966;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return antizer.reagent.is_fields_touched.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

antizer.reagent.is_fields_touched.cljs$core$IFn$_invoke$arity$variadic = (function (form__43314__auto__,args__43315__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"isFieldsTouched").call(null,form__43314__auto__),args__43315__auto__);
});

antizer.reagent.is_fields_touched.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
antizer.reagent.is_fields_touched.cljs$lang$applyTo = (function (seq70933){
var G__70934 = cljs.core.first.call(null,seq70933);
var seq70933__$1 = cljs.core.next.call(null,seq70933);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70934,seq70933__$1);
});


antizer.reagent.is_field_touched = (function antizer$reagent$is_field_touched(var_args){
var args__4534__auto__ = [];
var len__4531__auto___70967 = arguments.length;
var i__4532__auto___70968 = (0);
while(true){
if((i__4532__auto___70968 < len__4531__auto___70967)){
args__4534__auto__.push((arguments[i__4532__auto___70968]));

var G__70969 = (i__4532__auto___70968 + (1));
i__4532__auto___70968 = G__70969;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return antizer.reagent.is_field_touched.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

antizer.reagent.is_field_touched.cljs$core$IFn$_invoke$arity$variadic = (function (form__43314__auto__,args__43315__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"isFieldTouched").call(null,form__43314__auto__),args__43315__auto__);
});

antizer.reagent.is_field_touched.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
antizer.reagent.is_field_touched.cljs$lang$applyTo = (function (seq70935){
var G__70936 = cljs.core.first.call(null,seq70935);
var seq70935__$1 = cljs.core.next.call(null,seq70935);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70936,seq70935__$1);
});


antizer.reagent.is_field_validating = (function antizer$reagent$is_field_validating(var_args){
var args__4534__auto__ = [];
var len__4531__auto___70970 = arguments.length;
var i__4532__auto___70971 = (0);
while(true){
if((i__4532__auto___70971 < len__4531__auto___70970)){
args__4534__auto__.push((arguments[i__4532__auto___70971]));

var G__70972 = (i__4532__auto___70971 + (1));
i__4532__auto___70971 = G__70972;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return antizer.reagent.is_field_validating.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

antizer.reagent.is_field_validating.cljs$core$IFn$_invoke$arity$variadic = (function (form__43314__auto__,args__43315__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"isFieldValidating").call(null,form__43314__auto__),args__43315__auto__);
});

antizer.reagent.is_field_validating.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
antizer.reagent.is_field_validating.cljs$lang$applyTo = (function (seq70937){
var G__70938 = cljs.core.first.call(null,seq70937);
var seq70937__$1 = cljs.core.next.call(null,seq70937);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70938,seq70937__$1);
});


antizer.reagent.reset_fields = (function antizer$reagent$reset_fields(var_args){
var args__4534__auto__ = [];
var len__4531__auto___70973 = arguments.length;
var i__4532__auto___70974 = (0);
while(true){
if((i__4532__auto___70974 < len__4531__auto___70973)){
args__4534__auto__.push((arguments[i__4532__auto___70974]));

var G__70975 = (i__4532__auto___70974 + (1));
i__4532__auto___70974 = G__70975;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return antizer.reagent.reset_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

antizer.reagent.reset_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form__43314__auto__,args__43315__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"resetFields").call(null,form__43314__auto__),args__43315__auto__);
});

antizer.reagent.reset_fields.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
antizer.reagent.reset_fields.cljs$lang$applyTo = (function (seq70939){
var G__70940 = cljs.core.first.call(null,seq70939);
var seq70939__$1 = cljs.core.next.call(null,seq70939);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70940,seq70939__$1);
});


antizer.reagent.set_fields = (function antizer$reagent$set_fields(var_args){
var args__4534__auto__ = [];
var len__4531__auto___70976 = arguments.length;
var i__4532__auto___70977 = (0);
while(true){
if((i__4532__auto___70977 < len__4531__auto___70976)){
args__4534__auto__.push((arguments[i__4532__auto___70977]));

var G__70978 = (i__4532__auto___70977 + (1));
i__4532__auto___70977 = G__70978;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return antizer.reagent.set_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

antizer.reagent.set_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form__43314__auto__,args__43315__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"setFields").call(null,form__43314__auto__),args__43315__auto__);
});

antizer.reagent.set_fields.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
antizer.reagent.set_fields.cljs$lang$applyTo = (function (seq70941){
var G__70942 = cljs.core.first.call(null,seq70941);
var seq70941__$1 = cljs.core.next.call(null,seq70941);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70942,seq70941__$1);
});


antizer.reagent.set_fields_value = (function antizer$reagent$set_fields_value(var_args){
var args__4534__auto__ = [];
var len__4531__auto___70979 = arguments.length;
var i__4532__auto___70980 = (0);
while(true){
if((i__4532__auto___70980 < len__4531__auto___70979)){
args__4534__auto__.push((arguments[i__4532__auto___70980]));

var G__70981 = (i__4532__auto___70980 + (1));
i__4532__auto___70980 = G__70981;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return antizer.reagent.set_fields_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

antizer.reagent.set_fields_value.cljs$core$IFn$_invoke$arity$variadic = (function (form__43314__auto__,args__43315__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"setFieldsValue").call(null,form__43314__auto__),args__43315__auto__);
});

antizer.reagent.set_fields_value.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
antizer.reagent.set_fields_value.cljs$lang$applyTo = (function (seq70943){
var G__70944 = cljs.core.first.call(null,seq70943);
var seq70943__$1 = cljs.core.next.call(null,seq70943);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70944,seq70943__$1);
});


antizer.reagent.validate_fields = (function antizer$reagent$validate_fields(var_args){
var args__4534__auto__ = [];
var len__4531__auto___70982 = arguments.length;
var i__4532__auto___70983 = (0);
while(true){
if((i__4532__auto___70983 < len__4531__auto___70982)){
args__4534__auto__.push((arguments[i__4532__auto___70983]));

var G__70984 = (i__4532__auto___70983 + (1));
i__4532__auto___70983 = G__70984;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return antizer.reagent.validate_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

antizer.reagent.validate_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form__43314__auto__,args__43315__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"validateFields").call(null,form__43314__auto__),args__43315__auto__);
});

antizer.reagent.validate_fields.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
antizer.reagent.validate_fields.cljs$lang$applyTo = (function (seq70945){
var G__70946 = cljs.core.first.call(null,seq70945);
var seq70945__$1 = cljs.core.next.call(null,seq70945);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70946,seq70945__$1);
});


antizer.reagent.validate_fields_and_scroll = (function antizer$reagent$validate_fields_and_scroll(var_args){
var args__4534__auto__ = [];
var len__4531__auto___70985 = arguments.length;
var i__4532__auto___70986 = (0);
while(true){
if((i__4532__auto___70986 < len__4531__auto___70985)){
args__4534__auto__.push((arguments[i__4532__auto___70986]));

var G__70987 = (i__4532__auto___70986 + (1));
i__4532__auto___70986 = G__70987;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return antizer.reagent.validate_fields_and_scroll.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

antizer.reagent.validate_fields_and_scroll.cljs$core$IFn$_invoke$arity$variadic = (function (form__43314__auto__,args__43315__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"validateFieldsAndScroll").call(null,form__43314__auto__),args__43315__auto__);
});

antizer.reagent.validate_fields_and_scroll.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
antizer.reagent.validate_fields_and_scroll.cljs$lang$applyTo = (function (seq70947){
var G__70948 = cljs.core.first.call(null,seq70947);
var seq70947__$1 = cljs.core.next.call(null,seq70947);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70948,seq70947__$1);
});

antizer.reagent.message_config = (function antizer$reagent$message_config(var_args){
var args__4534__auto__ = [];
var len__4531__auto___71010 = arguments.length;
var i__4532__auto___71011 = (0);
while(true){
if((i__4532__auto___71011 < len__4531__auto___71010)){
args__4534__auto__.push((arguments[i__4532__auto___71011]));

var G__71012 = (i__4532__auto___71011 + (1));
i__4532__auto___71011 = G__71012;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_config.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

antizer.reagent.message_config.cljs$core$IFn$_invoke$arity$variadic = (function (args__43310__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.config",args__43310__auto__);
});

antizer.reagent.message_config.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
antizer.reagent.message_config.cljs$lang$applyTo = (function (seq70988){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq70988));
});


antizer.reagent.message_destroy = (function antizer$reagent$message_destroy(var_args){
var args__4534__auto__ = [];
var len__4531__auto___71013 = arguments.length;
var i__4532__auto___71014 = (0);
while(true){
if((i__4532__auto___71014 < len__4531__auto___71013)){
args__4534__auto__.push((arguments[i__4532__auto___71014]));

var G__71015 = (i__4532__auto___71014 + (1));
i__4532__auto___71014 = G__71015;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_destroy.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

antizer.reagent.message_destroy.cljs$core$IFn$_invoke$arity$variadic = (function (args__43310__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.destroy",args__43310__auto__);
});

antizer.reagent.message_destroy.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
antizer.reagent.message_destroy.cljs$lang$applyTo = (function (seq70989){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq70989));
});


antizer.reagent.message_error = (function antizer$reagent$message_error(var_args){
var args__4534__auto__ = [];
var len__4531__auto___71016 = arguments.length;
var i__4532__auto___71017 = (0);
while(true){
if((i__4532__auto___71017 < len__4531__auto___71016)){
args__4534__auto__.push((arguments[i__4532__auto___71017]));

var G__71018 = (i__4532__auto___71017 + (1));
i__4532__auto___71017 = G__71018;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_error.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

antizer.reagent.message_error.cljs$core$IFn$_invoke$arity$variadic = (function (args__43310__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.error",args__43310__auto__);
});

antizer.reagent.message_error.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
antizer.reagent.message_error.cljs$lang$applyTo = (function (seq70990){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq70990));
});


antizer.reagent.message_info = (function antizer$reagent$message_info(var_args){
var args__4534__auto__ = [];
var len__4531__auto___71019 = arguments.length;
var i__4532__auto___71020 = (0);
while(true){
if((i__4532__auto___71020 < len__4531__auto___71019)){
args__4534__auto__.push((arguments[i__4532__auto___71020]));

var G__71021 = (i__4532__auto___71020 + (1));
i__4532__auto___71020 = G__71021;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_info.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

antizer.reagent.message_info.cljs$core$IFn$_invoke$arity$variadic = (function (args__43310__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.info",args__43310__auto__);
});

antizer.reagent.message_info.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
antizer.reagent.message_info.cljs$lang$applyTo = (function (seq70991){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq70991));
});


antizer.reagent.message_loading = (function antizer$reagent$message_loading(var_args){
var args__4534__auto__ = [];
var len__4531__auto___71022 = arguments.length;
var i__4532__auto___71023 = (0);
while(true){
if((i__4532__auto___71023 < len__4531__auto___71022)){
args__4534__auto__.push((arguments[i__4532__auto___71023]));

var G__71024 = (i__4532__auto___71023 + (1));
i__4532__auto___71023 = G__71024;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_loading.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

antizer.reagent.message_loading.cljs$core$IFn$_invoke$arity$variadic = (function (args__43310__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.loading",args__43310__auto__);
});

antizer.reagent.message_loading.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
antizer.reagent.message_loading.cljs$lang$applyTo = (function (seq70992){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq70992));
});


antizer.reagent.message_success = (function antizer$reagent$message_success(var_args){
var args__4534__auto__ = [];
var len__4531__auto___71025 = arguments.length;
var i__4532__auto___71026 = (0);
while(true){
if((i__4532__auto___71026 < len__4531__auto___71025)){
args__4534__auto__.push((arguments[i__4532__auto___71026]));

var G__71027 = (i__4532__auto___71026 + (1));
i__4532__auto___71026 = G__71027;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_success.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

antizer.reagent.message_success.cljs$core$IFn$_invoke$arity$variadic = (function (args__43310__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.success",args__43310__auto__);
});

antizer.reagent.message_success.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
antizer.reagent.message_success.cljs$lang$applyTo = (function (seq70993){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq70993));
});


antizer.reagent.message_warn = (function antizer$reagent$message_warn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___71028 = arguments.length;
var i__4532__auto___71029 = (0);
while(true){
if((i__4532__auto___71029 < len__4531__auto___71028)){
args__4534__auto__.push((arguments[i__4532__auto___71029]));

var G__71030 = (i__4532__auto___71029 + (1));
i__4532__auto___71029 = G__71030;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_warn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

antizer.reagent.message_warn.cljs$core$IFn$_invoke$arity$variadic = (function (args__43310__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.warn",args__43310__auto__);
});

antizer.reagent.message_warn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
antizer.reagent.message_warn.cljs$lang$applyTo = (function (seq70994){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq70994));
});


antizer.reagent.message_warning = (function antizer$reagent$message_warning(var_args){
var args__4534__auto__ = [];
var len__4531__auto___71031 = arguments.length;
var i__4532__auto___71032 = (0);
while(true){
if((i__4532__auto___71032 < len__4531__auto___71031)){
args__4534__auto__.push((arguments[i__4532__auto___71032]));

var G__71033 = (i__4532__auto___71032 + (1));
i__4532__auto___71032 = G__71033;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_warning.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

antizer.reagent.message_warning.cljs$core$IFn$_invoke$arity$variadic = (function (args__43310__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.warning",args__43310__auto__);
});

antizer.reagent.message_warning.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
antizer.reagent.message_warning.cljs$lang$applyTo = (function (seq70995){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq70995));
});


antizer.reagent.modal_confirm = (function antizer$reagent$modal_confirm(var_args){
var args__4534__auto__ = [];
var len__4531__auto___71034 = arguments.length;
var i__4532__auto___71035 = (0);
while(true){
if((i__4532__auto___71035 < len__4531__auto___71034)){
args__4534__auto__.push((arguments[i__4532__auto___71035]));

var G__71036 = (i__4532__auto___71035 + (1));
i__4532__auto___71035 = G__71036;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_confirm.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

antizer.reagent.modal_confirm.cljs$core$IFn$_invoke$arity$variadic = (function (args__43310__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"Modal.confirm",args__43310__auto__);
});

antizer.reagent.modal_confirm.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
antizer.reagent.modal_confirm.cljs$lang$applyTo = (function (seq70996){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq70996));
});


antizer.reagent.modal_error = (function antizer$reagent$modal_error(var_args){
var args__4534__auto__ = [];
var len__4531__auto___71037 = arguments.length;
var i__4532__auto___71038 = (0);
while(true){
if((i__4532__auto___71038 < len__4531__auto___71037)){
args__4534__auto__.push((arguments[i__4532__auto___71038]));

var G__71039 = (i__4532__auto___71038 + (1));
i__4532__auto___71038 = G__71039;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_error.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

antizer.reagent.modal_error.cljs$core$IFn$_invoke$arity$variadic = (function (args__43310__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"Modal.error",args__43310__auto__);
});

antizer.reagent.modal_error.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
antizer.reagent.modal_error.cljs$lang$applyTo = (function (seq70997){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq70997));
});


antizer.reagent.modal_info = (function antizer$reagent$modal_info(var_args){
var args__4534__auto__ = [];
var len__4531__auto___71040 = arguments.length;
var i__4532__auto___71041 = (0);
while(true){
if((i__4532__auto___71041 < len__4531__auto___71040)){
args__4534__auto__.push((arguments[i__4532__auto___71041]));

var G__71042 = (i__4532__auto___71041 + (1));
i__4532__auto___71041 = G__71042;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_info.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

antizer.reagent.modal_info.cljs$core$IFn$_invoke$arity$variadic = (function (args__43310__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"Modal.info",args__43310__auto__);
});

antizer.reagent.modal_info.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
antizer.reagent.modal_info.cljs$lang$applyTo = (function (seq70998){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq70998));
});


antizer.reagent.modal_success = (function antizer$reagent$modal_success(var_args){
var args__4534__auto__ = [];
var len__4531__auto___71043 = arguments.length;
var i__4532__auto___71044 = (0);
while(true){
if((i__4532__auto___71044 < len__4531__auto___71043)){
args__4534__auto__.push((arguments[i__4532__auto___71044]));

var G__71045 = (i__4532__auto___71044 + (1));
i__4532__auto___71044 = G__71045;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_success.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

antizer.reagent.modal_success.cljs$core$IFn$_invoke$arity$variadic = (function (args__43310__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"Modal.success",args__43310__auto__);
});

antizer.reagent.modal_success.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
antizer.reagent.modal_success.cljs$lang$applyTo = (function (seq70999){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq70999));
});


antizer.reagent.modal_warning = (function antizer$reagent$modal_warning(var_args){
var args__4534__auto__ = [];
var len__4531__auto___71046 = arguments.length;
var i__4532__auto___71047 = (0);
while(true){
if((i__4532__auto___71047 < len__4531__auto___71046)){
args__4534__auto__.push((arguments[i__4532__auto___71047]));

var G__71048 = (i__4532__auto___71047 + (1));
i__4532__auto___71047 = G__71048;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_warning.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

antizer.reagent.modal_warning.cljs$core$IFn$_invoke$arity$variadic = (function (args__43310__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"Modal.warning",args__43310__auto__);
});

antizer.reagent.modal_warning.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
antizer.reagent.modal_warning.cljs$lang$applyTo = (function (seq71000){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq71000));
});


antizer.reagent.notification_close = (function antizer$reagent$notification_close(var_args){
var args__4534__auto__ = [];
var len__4531__auto___71049 = arguments.length;
var i__4532__auto___71050 = (0);
while(true){
if((i__4532__auto___71050 < len__4531__auto___71049)){
args__4534__auto__.push((arguments[i__4532__auto___71050]));

var G__71051 = (i__4532__auto___71050 + (1));
i__4532__auto___71050 = G__71051;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_close.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

antizer.reagent.notification_close.cljs$core$IFn$_invoke$arity$variadic = (function (args__43310__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.close",args__43310__auto__);
});

antizer.reagent.notification_close.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
antizer.reagent.notification_close.cljs$lang$applyTo = (function (seq71001){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq71001));
});


antizer.reagent.notification_config = (function antizer$reagent$notification_config(var_args){
var args__4534__auto__ = [];
var len__4531__auto___71052 = arguments.length;
var i__4532__auto___71053 = (0);
while(true){
if((i__4532__auto___71053 < len__4531__auto___71052)){
args__4534__auto__.push((arguments[i__4532__auto___71053]));

var G__71054 = (i__4532__auto___71053 + (1));
i__4532__auto___71053 = G__71054;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_config.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

antizer.reagent.notification_config.cljs$core$IFn$_invoke$arity$variadic = (function (args__43310__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.config",args__43310__auto__);
});

antizer.reagent.notification_config.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
antizer.reagent.notification_config.cljs$lang$applyTo = (function (seq71002){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq71002));
});


antizer.reagent.notification_destroy = (function antizer$reagent$notification_destroy(var_args){
var args__4534__auto__ = [];
var len__4531__auto___71055 = arguments.length;
var i__4532__auto___71056 = (0);
while(true){
if((i__4532__auto___71056 < len__4531__auto___71055)){
args__4534__auto__.push((arguments[i__4532__auto___71056]));

var G__71057 = (i__4532__auto___71056 + (1));
i__4532__auto___71056 = G__71057;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_destroy.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

antizer.reagent.notification_destroy.cljs$core$IFn$_invoke$arity$variadic = (function (args__43310__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.destroy",args__43310__auto__);
});

antizer.reagent.notification_destroy.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
antizer.reagent.notification_destroy.cljs$lang$applyTo = (function (seq71003){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq71003));
});


antizer.reagent.notification_error = (function antizer$reagent$notification_error(var_args){
var args__4534__auto__ = [];
var len__4531__auto___71058 = arguments.length;
var i__4532__auto___71059 = (0);
while(true){
if((i__4532__auto___71059 < len__4531__auto___71058)){
args__4534__auto__.push((arguments[i__4532__auto___71059]));

var G__71060 = (i__4532__auto___71059 + (1));
i__4532__auto___71059 = G__71060;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_error.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

antizer.reagent.notification_error.cljs$core$IFn$_invoke$arity$variadic = (function (args__43310__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.error",args__43310__auto__);
});

antizer.reagent.notification_error.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
antizer.reagent.notification_error.cljs$lang$applyTo = (function (seq71004){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq71004));
});


antizer.reagent.notification_info = (function antizer$reagent$notification_info(var_args){
var args__4534__auto__ = [];
var len__4531__auto___71061 = arguments.length;
var i__4532__auto___71062 = (0);
while(true){
if((i__4532__auto___71062 < len__4531__auto___71061)){
args__4534__auto__.push((arguments[i__4532__auto___71062]));

var G__71063 = (i__4532__auto___71062 + (1));
i__4532__auto___71062 = G__71063;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_info.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

antizer.reagent.notification_info.cljs$core$IFn$_invoke$arity$variadic = (function (args__43310__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.info",args__43310__auto__);
});

antizer.reagent.notification_info.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
antizer.reagent.notification_info.cljs$lang$applyTo = (function (seq71005){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq71005));
});


antizer.reagent.notification_open = (function antizer$reagent$notification_open(var_args){
var args__4534__auto__ = [];
var len__4531__auto___71064 = arguments.length;
var i__4532__auto___71065 = (0);
while(true){
if((i__4532__auto___71065 < len__4531__auto___71064)){
args__4534__auto__.push((arguments[i__4532__auto___71065]));

var G__71066 = (i__4532__auto___71065 + (1));
i__4532__auto___71065 = G__71066;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_open.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

antizer.reagent.notification_open.cljs$core$IFn$_invoke$arity$variadic = (function (args__43310__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.open",args__43310__auto__);
});

antizer.reagent.notification_open.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
antizer.reagent.notification_open.cljs$lang$applyTo = (function (seq71006){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq71006));
});


antizer.reagent.notification_success = (function antizer$reagent$notification_success(var_args){
var args__4534__auto__ = [];
var len__4531__auto___71067 = arguments.length;
var i__4532__auto___71068 = (0);
while(true){
if((i__4532__auto___71068 < len__4531__auto___71067)){
args__4534__auto__.push((arguments[i__4532__auto___71068]));

var G__71069 = (i__4532__auto___71068 + (1));
i__4532__auto___71068 = G__71069;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_success.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

antizer.reagent.notification_success.cljs$core$IFn$_invoke$arity$variadic = (function (args__43310__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.success",args__43310__auto__);
});

antizer.reagent.notification_success.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
antizer.reagent.notification_success.cljs$lang$applyTo = (function (seq71007){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq71007));
});


antizer.reagent.notification_warn = (function antizer$reagent$notification_warn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___71070 = arguments.length;
var i__4532__auto___71071 = (0);
while(true){
if((i__4532__auto___71071 < len__4531__auto___71070)){
args__4534__auto__.push((arguments[i__4532__auto___71071]));

var G__71072 = (i__4532__auto___71071 + (1));
i__4532__auto___71071 = G__71072;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_warn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

antizer.reagent.notification_warn.cljs$core$IFn$_invoke$arity$variadic = (function (args__43310__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.warn",args__43310__auto__);
});

antizer.reagent.notification_warn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
antizer.reagent.notification_warn.cljs$lang$applyTo = (function (seq71008){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq71008));
});


antizer.reagent.notification_warning = (function antizer$reagent$notification_warning(var_args){
var args__4534__auto__ = [];
var len__4531__auto___71073 = arguments.length;
var i__4532__auto___71074 = (0);
while(true){
if((i__4532__auto___71074 < len__4531__auto___71073)){
args__4534__auto__.push((arguments[i__4532__auto___71074]));

var G__71075 = (i__4532__auto___71074 + (1));
i__4532__auto___71074 = G__71075;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_warning.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

antizer.reagent.notification_warning.cljs$core$IFn$_invoke$arity$variadic = (function (args__43310__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.warning",args__43310__auto__);
});

antizer.reagent.notification_warning.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
antizer.reagent.notification_warning.cljs$lang$applyTo = (function (seq71009){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq71009));
});

antizer.reagent.locales = (function antizer$reagent$locales(prop__43312__auto__){
return antizer.core.get_prop.call(null,"locales",prop__43312__auto__);
});
antizer.reagent.affix = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Affix"], null)));

antizer.reagent.alert = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Alert"], null)));

antizer.reagent.anchor = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Anchor"], null)));

antizer.reagent.anchor_link = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Anchor","Link"], null)));

antizer.reagent.auto_complete = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AutoComplete"], null)));

antizer.reagent.auto_complete_opt_group = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AutoComplete","OptGroup"], null)));

antizer.reagent.auto_complete_option = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AutoComplete","Option"], null)));

antizer.reagent.avatar = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Avatar"], null)));

antizer.reagent.back_top = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["BackTop"], null)));

antizer.reagent.badge = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Badge"], null)));

antizer.reagent.breadcrumb = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Breadcrumb"], null)));

antizer.reagent.breadcrumb_item = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Breadcrumb","Item"], null)));

antizer.reagent.button = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Button"], null)));

antizer.reagent.button_group = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Button","Group"], null)));

antizer.reagent.calendar = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Calendar"], null)));

antizer.reagent.card = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Card"], null)));

antizer.reagent.card_grid = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Card","Grid"], null)));

antizer.reagent.card_meta = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Card","Meta"], null)));

antizer.reagent.carousel = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Carousel"], null)));

antizer.reagent.cascader = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cascader"], null)));

antizer.reagent.checkbox = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Checkbox"], null)));

antizer.reagent.checkbox_group = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Checkbox","Group"], null)));

antizer.reagent.col = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Col"], null)));

antizer.reagent.collapse = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Collapse"], null)));

antizer.reagent.collapse_panel = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Collapse","Panel"], null)));

antizer.reagent.date_picker = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DatePicker"], null)));

antizer.reagent.date_picker_month_picker = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DatePicker","MonthPicker"], null)));

antizer.reagent.date_picker_range_picker = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DatePicker","RangePicker"], null)));

antizer.reagent.date_picker_week_picker = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DatePicker","WeekPicker"], null)));

antizer.reagent.divider = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Divider"], null)));

antizer.reagent.drawer = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Drawer"], null)));

antizer.reagent.dropdown = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dropdown"], null)));

antizer.reagent.dropdown_button = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dropdown","Button"], null)));

antizer.reagent.form = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Form"], null)));

antizer.reagent.form_item = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Form","Item"], null)));

antizer.reagent.icon = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Icon"], null)));

antizer.reagent.input = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Input"], null)));

antizer.reagent.input_group = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Input","Group"], null)));

antizer.reagent.input_search = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Input","Search"], null)));

antizer.reagent.input_text_area = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Input","TextArea"], null)));

antizer.reagent.input_number = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["InputNumber"], null)));

antizer.reagent.layout = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Layout"], null)));

antizer.reagent.layout_content = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Layout","Content"], null)));

antizer.reagent.layout_footer = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Layout","Footer"], null)));

antizer.reagent.layout_header = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Layout","Header"], null)));

antizer.reagent.layout_sider = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Layout","Sider"], null)));

antizer.reagent.list = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["List"], null)));

antizer.reagent.list_item = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["List","Item"], null)));

antizer.reagent.list_item_meta = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["List","Item","Meta"], null)));

antizer.reagent.locale_provider = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["LocaleProvider"], null)));

antizer.reagent.mention = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Mention"], null)));

antizer.reagent.mention_nav = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Mention","Nav"], null)));

antizer.reagent.menu = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Menu"], null)));

antizer.reagent.menu_divider = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Menu","Divider"], null)));

antizer.reagent.menu_item = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Menu","Item"], null)));

antizer.reagent.menu_item_group = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Menu","ItemGroup"], null)));

antizer.reagent.menu_sub_menu = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Menu","SubMenu"], null)));

antizer.reagent.modal = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Modal"], null)));

antizer.reagent.pagination = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pagination"], null)));

antizer.reagent.popconfirm = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Popconfirm"], null)));

antizer.reagent.popover = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Popover"], null)));

antizer.reagent.progress = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Progress"], null)));

antizer.reagent.radio = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Radio"], null)));

antizer.reagent.radio_button = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Radio","Button"], null)));

antizer.reagent.radio_group = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Radio","Group"], null)));

antizer.reagent.rate = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Rate"], null)));

antizer.reagent.row = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Row"], null)));

antizer.reagent.select = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Select"], null)));

antizer.reagent.select_opt_group = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Select","OptGroup"], null)));

antizer.reagent.select_option = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Select","Option"], null)));

antizer.reagent.slider = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Slider"], null)));

antizer.reagent.spin = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Spin"], null)));

antizer.reagent.steps = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Steps"], null)));

antizer.reagent.steps_step = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Steps","Step"], null)));

antizer.reagent.switch$ = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Switch"], null)));

antizer.reagent.table = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Table"], null)));

antizer.reagent.table_column = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Table","Column"], null)));

antizer.reagent.table_column_group = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Table","ColumnGroup"], null)));

antizer.reagent.tabs = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tabs"], null)));

antizer.reagent.tabs_tab_pane = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tabs","TabPane"], null)));

antizer.reagent.tag = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tag"], null)));

antizer.reagent.tag_checkable_tag = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tag","CheckableTag"], null)));

antizer.reagent.time_picker = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TimePicker"], null)));

antizer.reagent.timeline = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Timeline"], null)));

antizer.reagent.timeline_item = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Timeline","Item"], null)));

antizer.reagent.tooltip = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tooltip"], null)));

antizer.reagent.transfer = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Transfer"], null)));

antizer.reagent.tree = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tree"], null)));

antizer.reagent.tree_select = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TreeSelect"], null)));

antizer.reagent.tree_select_tree_node = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TreeSelect","TreeNode"], null)));

antizer.reagent.tree_tree_node = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tree","TreeNode"], null)));

antizer.reagent.upload = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Upload"], null)));

//# sourceMappingURL=reagent.js.map?rel=1563552895080
