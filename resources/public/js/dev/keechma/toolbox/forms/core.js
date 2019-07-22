// Compiled by ClojureScript 1.10.339 {}
goog.provide('keechma.toolbox.forms.core');
goog.require('cljs.core');
goog.require('forms.dirty');
keechma.toolbox.forms.core.id_key = new cljs.core.Keyword("keechma.toolbox.forms.core","forms","keechma.toolbox.forms.core/forms",1602620891);
keechma.toolbox.forms.core.form_type = (function keechma$toolbox$forms$core$form_type(var_args){
var args__4534__auto__ = [];
var len__4531__auto___37162 = arguments.length;
var i__4532__auto___37163 = (0);
while(true){
if((i__4532__auto___37163 < len__4531__auto___37162)){
args__4534__auto__.push((arguments[i__4532__auto___37163]));

var G__37164 = (i__4532__auto___37163 + (1));
i__4532__auto___37163 = G__37164;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return keechma.toolbox.forms.core.form_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

keechma.toolbox.forms.core.form_type.cljs$core$IFn$_invoke$arity$variadic = (function (form,args){
return cljs.core.type.call(null,form);
});

keechma.toolbox.forms.core.form_type.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
keechma.toolbox.forms.core.form_type.cljs$lang$applyTo = (function (seq37160){
var G__37161 = cljs.core.first.call(null,seq37160);
var seq37160__$1 = cljs.core.next.call(null,seq37160);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37161,seq37160__$1);
});

if((typeof keechma !== 'undefined') && (typeof keechma.toolbox !== 'undefined') && (typeof keechma.toolbox.forms !== 'undefined') && (typeof keechma.toolbox.forms.core !== 'undefined') && (typeof keechma.toolbox.forms.core.get_data !== 'undefined')){
} else {
/**
 * This function should return either the initial form data or a promise that will resolve to the inital form data.
 */
keechma.toolbox.forms.core.get_data = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.toolbox.forms.core","get-data"),keechma.toolbox.forms.core.form_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
if((typeof keechma !== 'undefined') && (typeof keechma.toolbox !== 'undefined') && (typeof keechma.toolbox.forms !== 'undefined') && (typeof keechma.toolbox.forms.core !== 'undefined') && (typeof keechma.toolbox.forms.core.submit_data !== 'undefined')){
} else {
/**
 * This function should return either the saved form data or a promise that will resolve to the saved form data
 */
keechma.toolbox.forms.core.submit_data = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.toolbox.forms.core","submit-data"),keechma.toolbox.forms.core.form_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
if((typeof keechma !== 'undefined') && (typeof keechma.toolbox !== 'undefined') && (typeof keechma.toolbox.forms !== 'undefined') && (typeof keechma.toolbox.forms.core !== 'undefined') && (typeof keechma.toolbox.forms.core.update_data !== 'undefined')){
} else {
/**
 * This function should return either the updated form data or a promise that will resolve to the updated form data
 */
keechma.toolbox.forms.core.update_data = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.toolbox.forms.core","update-data"),keechma.toolbox.forms.core.form_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
if((typeof keechma !== 'undefined') && (typeof keechma.toolbox !== 'undefined') && (typeof keechma.toolbox.forms !== 'undefined') && (typeof keechma.toolbox.forms.core !== 'undefined') && (typeof keechma.toolbox.forms.core.process_in !== 'undefined')){
} else {
/**
 * This function should return the processed incoming data (returned from the `get-data`) function. Use it to prepare the incoming data for the form.
 */
keechma.toolbox.forms.core.process_in = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.toolbox.forms.core","process-in"),keechma.toolbox.forms.core.form_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
if((typeof keechma !== 'undefined') && (typeof keechma.toolbox !== 'undefined') && (typeof keechma.toolbox.forms !== 'undefined') && (typeof keechma.toolbox.forms.core !== 'undefined') && (typeof keechma.toolbox.forms.core.process_out !== 'undefined')){
} else {
/**
 * This function should return the processed outgoing data that will be passed to the `submit-data` function.
 */
keechma.toolbox.forms.core.process_out = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.toolbox.forms.core","process-out"),keechma.toolbox.forms.core.form_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
if((typeof keechma !== 'undefined') && (typeof keechma.toolbox !== 'undefined') && (typeof keechma.toolbox.forms !== 'undefined') && (typeof keechma.toolbox.forms.core !== 'undefined') && (typeof keechma.toolbox.forms.core.process_attr_with !== 'undefined')){
} else {
/**
 * This function should return a processing function that can process the new value and return the new form state. If the processing function is returned, data will not be set in the `form-state` `:data` map. It should be done manually.
 * 
 *  Processor functions should look like this, and they should return a new version of a form-state:
 *   
 *  ```
 *  (fn [app-db form-props form-state path value]
 *    form-state)
 *  ```
 */
keechma.toolbox.forms.core.process_attr_with = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.toolbox.forms.core","process-attr-with"),keechma.toolbox.forms.core.form_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
if((typeof keechma !== 'undefined') && (typeof keechma.toolbox !== 'undefined') && (typeof keechma.toolbox.forms !== 'undefined') && (typeof keechma.toolbox.forms.core !== 'undefined') && (typeof keechma.toolbox.forms.core.format_attr_with !== 'undefined')){
} else {
/**
 * This function should return a formatting function that can be used to format the value if applicable.
 *   
 *   Formatting functions should look like this:
 * 
 *  ```clojure
 *  (def format-percentage
 *    ^{:format-chars #{"%"}}
 *    (fn [value old-value]
 *      value))
 *  ```
 *  
 *  Formatting funtion should have a `format-chars` meta-data entry, which will be used to correctly position the cursor after formatting. Formatting function should be able to take in the formatted data, extract the value and format the data again. It should also handle corner cases like `nil` or empty string.
 *  
 */
keechma.toolbox.forms.core.format_attr_with = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.toolbox.forms.core","format-attr-with"),keechma.toolbox.forms.core.form_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
if((typeof keechma !== 'undefined') && (typeof keechma.toolbox !== 'undefined') && (typeof keechma.toolbox.forms !== 'undefined') && (typeof keechma.toolbox.forms.core !== 'undefined') && (typeof keechma.toolbox.forms.core.on_submit_error !== 'undefined')){
} else {
/**
 * This function will be called if the `submit-data` function throws or rejects the returned promise. It should return a pipeline sideffect or a pipeline.
 */
keechma.toolbox.forms.core.on_submit_error = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.toolbox.forms.core","on-submit-error"),keechma.toolbox.forms.core.form_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
if((typeof keechma !== 'undefined') && (typeof keechma.toolbox !== 'undefined') && (typeof keechma.toolbox.forms !== 'undefined') && (typeof keechma.toolbox.forms.core !== 'undefined') && (typeof keechma.toolbox.forms.core.on_mount !== 'undefined')){
} else {
/**
 * This function is called immediately after `get-data` in the mount form process. You can return pipeline! from this function.
 */
keechma.toolbox.forms.core.on_mount = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.toolbox.forms.core","on-mount"),keechma.toolbox.forms.core.form_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
if((typeof keechma !== 'undefined') && (typeof keechma.toolbox !== 'undefined') && (typeof keechma.toolbox.forms !== 'undefined') && (typeof keechma.toolbox.forms.core !== 'undefined') && (typeof keechma.toolbox.forms.core.on_unmount !== 'undefined')){
} else {
/**
 * This function is called before the form is unmounted. You can return pipeline from this function
 */
keechma.toolbox.forms.core.on_unmount = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.toolbox.forms.core","on-unmount"),keechma.toolbox.forms.core.form_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
if((typeof keechma !== 'undefined') && (typeof keechma.toolbox !== 'undefined') && (typeof keechma.toolbox.forms !== 'undefined') && (typeof keechma.toolbox.forms.core !== 'undefined') && (typeof keechma.toolbox.forms.core.on_submit_success !== 'undefined')){
} else {
/**
 * This function will be called if the `submit-data` function returns a value or resolves a returned promise. It should return a pipeline sideffect or a pipeline.
 */
keechma.toolbox.forms.core.on_submit_success = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.toolbox.forms.core","on-submit-success"),keechma.toolbox.forms.core.form_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
if((typeof keechma !== 'undefined') && (typeof keechma.toolbox !== 'undefined') && (typeof keechma.toolbox.forms !== 'undefined') && (typeof keechma.toolbox.forms.core !== 'undefined') && (typeof keechma.toolbox.forms.core.on_update_error !== 'undefined')){
} else {
/**
 * This function will be called if the `update-data` function throws or rejects the returned promise. It should return a new form data state.
 */
keechma.toolbox.forms.core.on_update_error = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.toolbox.forms.core","on-update-error"),keechma.toolbox.forms.core.form_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
if((typeof keechma !== 'undefined') && (typeof keechma.toolbox !== 'undefined') && (typeof keechma.toolbox.forms !== 'undefined') && (typeof keechma.toolbox.forms.core !== 'undefined') && (typeof keechma.toolbox.forms.core.on_update_success !== 'undefined')){
} else {
/**
 * This function will be called if the `update-data` function returns a value or resolves a returned promise. It should return a new form data state.
 */
keechma.toolbox.forms.core.on_update_success = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.toolbox.forms.core","on-update-success"),keechma.toolbox.forms.core.form_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
if((typeof keechma !== 'undefined') && (typeof keechma.toolbox !== 'undefined') && (typeof keechma.toolbox.forms !== 'undefined') && (typeof keechma.toolbox.forms.core !== 'undefined') && (typeof keechma.toolbox.forms.core.validate !== 'undefined')){
} else {
keechma.toolbox.forms.core.validate = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.toolbox.forms.core","validate"),keechma.toolbox.forms.core.form_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
if((typeof keechma !== 'undefined') && (typeof keechma.toolbox !== 'undefined') && (typeof keechma.toolbox.forms !== 'undefined') && (typeof keechma.toolbox.forms.core !== 'undefined') && (typeof keechma.toolbox.forms.core.call !== 'undefined')){
} else {
keechma.toolbox.forms.core.call = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.toolbox.forms.core","call"),keechma.toolbox.forms.core.form_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
cljs.core._add_method.call(null,keechma.toolbox.forms.core.get_data,new cljs.core.Keyword(null,"default","default",-1987822328),(function (this$,app_db,form_props){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,keechma.toolbox.forms.core.submit_data,new cljs.core.Keyword(null,"default","default",-1987822328),(function (this$,app_db,form_props,data){
return data;
}));
cljs.core._add_method.call(null,keechma.toolbox.forms.core.update_data,new cljs.core.Keyword(null,"default","default",-1987822328),(function (this$,app_db,form_props,data){
return data;
}));
cljs.core._add_method.call(null,keechma.toolbox.forms.core.process_in,new cljs.core.Keyword(null,"default","default",-1987822328),(function (this$,app_db,form_props,data){
return data;
}));
cljs.core._add_method.call(null,keechma.toolbox.forms.core.process_out,new cljs.core.Keyword(null,"default","default",-1987822328),(function (this$,app_db,form_props,data){
return data;
}));
cljs.core._add_method.call(null,keechma.toolbox.forms.core.process_attr_with,new cljs.core.Keyword(null,"default","default",-1987822328),(function (this$,path){
return null;
}));
cljs.core._add_method.call(null,keechma.toolbox.forms.core.format_attr_with,new cljs.core.Keyword(null,"default","default",-1987822328),(function (this$,path){
return null;
}));
cljs.core._add_method.call(null,keechma.toolbox.forms.core.on_mount,new cljs.core.Keyword(null,"default","default",-1987822328),(function (this$,app_db,form_props){
return null;
}));
cljs.core._add_method.call(null,keechma.toolbox.forms.core.on_unmount,new cljs.core.Keyword(null,"default","default",-1987822328),(function (this$,app_db,form_props){
return null;
}));
cljs.core._add_method.call(null,keechma.toolbox.forms.core.on_submit_error,new cljs.core.Keyword(null,"default","default",-1987822328),(function (this$,app_db,form_props,data,error){
return null;
}));
cljs.core._add_method.call(null,keechma.toolbox.forms.core.on_submit_success,new cljs.core.Keyword(null,"default","default",-1987822328),(function (this$,app_db,form_props,data){
return null;
}));
cljs.core._add_method.call(null,keechma.toolbox.forms.core.on_update_error,new cljs.core.Keyword(null,"default","default",-1987822328),(function (this$,app_db,form_props,data,error){
return data;
}));
cljs.core._add_method.call(null,keechma.toolbox.forms.core.on_update_success,new cljs.core.Keyword(null,"default","default",-1987822328),(function (this$,app_db,form_props,data,new_data){
return new_data;
}));
cljs.core._add_method.call(null,keechma.toolbox.forms.core.call,new cljs.core.Keyword(null,"default","default",-1987822328),(function (this$,app_db,form_props,args){
return null;
}));
cljs.core._add_method.call(null,keechma.toolbox.forms.core.validate,new cljs.core.Keyword(null,"default","default",-1987822328),(function (this$,data){
var validator = new cljs.core.Keyword(null,"validator","validator",-1966190681).cljs$core$IFn$_invoke$arity$1(this$);
if(cljs.core.truth_(validator)){
return validator.call(null,data);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
}));

//# sourceMappingURL=core.js.map?rel=1563552864804
