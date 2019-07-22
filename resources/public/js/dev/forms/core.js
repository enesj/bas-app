// Compiled by ClojureScript 1.10.339 {}
goog.provide('forms.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('forms.util');
goog.require('forms.dirty');
/**
 * Calculates the error key paths from the error map. It is used to mark
 *   all invalid key paths as dirty
 */
forms.core.errors_keypaths = (function forms$core$errors_keypaths(var_args){
var G__37200 = arguments.length;
switch (G__37200) {
case 1:
return forms.core.errors_keypaths.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return forms.core.errors_keypaths.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

forms.core.errors_keypaths.cljs$core$IFn$_invoke$arity$1 = (function (data){
return cljs.core.distinct.call(null,new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(forms.core.errors_keypaths.call(null,data,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.PersistentVector.EMPTY], null))));
});

forms.core.errors_keypaths.cljs$core$IFn$_invoke$arity$3 = (function (data,path,results){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"$errors$","$errors$",634888771))){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.conj.call(null,new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(m),path));
} else {
if(((cljs.core.vector_QMARK_.call(null,v)) || (cljs.core.map_QMARK_.call(null,v)))){
var map__37201 = m;
var map__37201__$1 = ((((!((map__37201 == null)))?(((((map__37201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37201):map__37201);
var results__$1 = cljs.core.get.call(null,map__37201__$1,new cljs.core.Keyword(null,"results","results",-1134170113));
var lengths = cljs.core.get.call(null,map__37201__$1,new cljs.core.Keyword(null,"lengths","lengths",-851104122));
var new_path = cljs.core.conj.call(null,path,k);
var child_paths = forms.core.errors_keypaths.call(null,v,new_path,m);
var new_results = new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(child_paths);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.concat.call(null,results__$1,new_results)], null);
} else {
if((v == null)){
return m;
} else {
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.conj.call(null,new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(m),cljs.core.conj.call(null,path,k)));
}
}
}
}),results,data);
});

forms.core.errors_keypaths.cljs$lang$maxFixedArity = 3;


/**
 * IForm protocol defines the form behavior
 * @interface
 */
forms.core.IForm = function(){};

/**
 * Initializes the form. If the form constructor was called with the
 *   `auto-validate?` option set to `true` it will add a watch to the
 *   internal state atom and validate the form every time data was changed
 */
forms.core.init_BANG_ = (function forms$core$init_BANG_(this$){
if(((!((this$ == null))) && (!((this$.forms$core$IForm$init_BANG_$arity$1 == null))))){
return this$.forms$core$IForm$init_BANG_$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (forms.core.init_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (forms.core.init_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IForm.init!",this$);
}
}
}
});

/**
 * Returns inner state atom. The state map holds the following properties:
 *  
 *  - `:errors` - map of the current form errors
 *  - `:init-data` - initial form data that was passed to the constructor
 *  - `:data` - current form data
 *  - `:cached-dirty-key-paths` - set of the key paths that were dirty when
 *     the whole form was validated
 *  - `:dirty-key-paths` - set of the dirty key paths
 */
forms.core.state = (function forms$core$state(this$){
if(((!((this$ == null))) && (!((this$.forms$core$IForm$state$arity$1 == null))))){
return this$.forms$core$IForm$state$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (forms.core.state[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (forms.core.state["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IForm.state",this$);
}
}
}
});

/**
 * Returns the atom that holds the current error map. This map holds all
 *   errors, regardless of the key path `dirty` state.
 */
forms.core.errors = (function forms$core$errors(this$){
if(((!((this$ == null))) && (!((this$.forms$core$IForm$errors$arity$1 == null))))){
return this$.forms$core$IForm$errors$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (forms.core.errors[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (forms.core.errors["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IForm.errors",this$);
}
}
}
});

/**
 * Returns errors for the key path. It is possible that this function will
 *   return `nil` even though the errors exist in the `:errors` map because
 *   this function accounts for the key path `dirty` state. If the field has
 *   errors, but it's not dirty this function will return `nil`
 */
forms.core.errors_for_path = (function forms$core$errors_for_path(this$,key_path){
if(((!((this$ == null))) && (!((this$.forms$core$IForm$errors_for_path$arity$2 == null))))){
return this$.forms$core$IForm$errors_for_path$arity$2(this$,key_path);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (forms.core.errors_for_path[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,key_path);
} else {
var m__4244__auto____$1 = (forms.core.errors_for_path["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,key_path);
} else {
throw cljs.core.missing_protocol.call(null,"IForm.errors-for-path",this$);
}
}
}
});

/**
 * Returns the atom that holds the current data map.
 */
forms.core.data = (function forms$core$data(this$){
if(((!((this$ == null))) && (!((this$.forms$core$IForm$data$arity$1 == null))))){
return this$.forms$core$IForm$data$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (forms.core.data[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (forms.core.data["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IForm.data",this$);
}
}
}
});

/**
 * Returns data for the key path
 */
forms.core.data_for_path = (function forms$core$data_for_path(this$,key_path){
if(((!((this$ == null))) && (!((this$.forms$core$IForm$data_for_path$arity$2 == null))))){
return this$.forms$core$IForm$data_for_path$arity$2(this$,key_path);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (forms.core.data_for_path[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,key_path);
} else {
var m__4244__auto____$1 = (forms.core.data_for_path["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,key_path);
} else {
throw cljs.core.missing_protocol.call(null,"IForm.data-for-path",this$);
}
}
}
});

/**
 * Validates the form.
 * 
 *  When called without the second argument - `(validate! form)` it will validate
 *  the whole form and mark all invalid fields as `dirty` This should happen on
 *  `submit` so you can show all form errors to the user.
 * 
 *  When called with `true` as the second argument - `(validate! form true)` it wil
 *  validate only the fields that are marked as dirty - fields that are not `nil` and
 *  that have a different value than in the `:init-data`. This can be called on `change`
 *  or `blur` events.
 */
forms.core.validate_BANG_ = (function forms$core$validate_BANG_(var_args){
var G__37207 = arguments.length;
switch (G__37207) {
case 1:
return forms.core.validate_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return forms.core.validate_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

forms.core.validate_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if(((!((this$ == null))) && (!((this$.forms$core$IForm$validate_BANG_$arity$1 == null))))){
return this$.forms$core$IForm$validate_BANG_$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (forms.core.validate_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (forms.core.validate_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IForm.validate!",this$);
}
}
}
});

forms.core.validate_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,dirty_only_QMARK_){
if(((!((this$ == null))) && (!((this$.forms$core$IForm$validate_BANG_$arity$2 == null))))){
return this$.forms$core$IForm$validate_BANG_$arity$2(this$,dirty_only_QMARK_);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (forms.core.validate_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,dirty_only_QMARK_);
} else {
var m__4244__auto____$1 = (forms.core.validate_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,dirty_only_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"IForm.validate!",this$);
}
}
}
});

forms.core.validate_BANG_.cljs$lang$maxFixedArity = 2;


/**
 * Commits the form. It will validate the form and mark dirty key paths. After that
 *   it will call the `:on-commit` function that can be used to persist the form.
 */
forms.core.commit_BANG_ = (function forms$core$commit_BANG_(this$){
if(((!((this$ == null))) && (!((this$.forms$core$IForm$commit_BANG_$arity$1 == null))))){
return this$.forms$core$IForm$commit_BANG_$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (forms.core.commit_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (forms.core.commit_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IForm.commit!",this$);
}
}
}
});

/**
 * Updates the data, marks dirty key paths and validates the form
 */
forms.core.update_BANG_ = (function forms$core$update_BANG_(this$,data){
if(((!((this$ == null))) && (!((this$.forms$core$IForm$update_BANG_$arity$2 == null))))){
return this$.forms$core$IForm$update_BANG_$arity$2(this$,data);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (forms.core.update_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,data);
} else {
var m__4244__auto____$1 = (forms.core.update_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,data);
} else {
throw cljs.core.missing_protocol.call(null,"IForm.update!",this$);
}
}
}
});

/**
 * Mark all invalid key paths as dirty. It will validate the whole form and
 *   cache any key paths that have errors.
 */
forms.core.mark_dirty_BANG_ = (function forms$core$mark_dirty_BANG_(this$){
if(((!((this$ == null))) && (!((this$.forms$core$IForm$mark_dirty_BANG_$arity$1 == null))))){
return this$.forms$core$IForm$mark_dirty_BANG_$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (forms.core.mark_dirty_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (forms.core.mark_dirty_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IForm.mark-dirty!",this$);
}
}
}
});

/**
 * Creates a diff between the initial data and the current data. Based on that diff
 *   it marks the key paths that are dirty.
 */
forms.core.mark_dirty_paths_BANG_ = (function forms$core$mark_dirty_paths_BANG_(this$){
if(((!((this$ == null))) && (!((this$.forms$core$IForm$mark_dirty_paths_BANG_$arity$1 == null))))){
return this$.forms$core$IForm$mark_dirty_paths_BANG_$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (forms.core.mark_dirty_paths_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (forms.core.mark_dirty_paths_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IForm.mark-dirty-paths!",this$);
}
}
}
});

/**
 * Clear dirty key paths that are cached after caling the `mark-dirty!` function
 */
forms.core.clear_cached_dirty_key_paths_BANG_ = (function forms$core$clear_cached_dirty_key_paths_BANG_(this$){
if(((!((this$ == null))) && (!((this$.forms$core$IForm$clear_cached_dirty_key_paths_BANG_$arity$1 == null))))){
return this$.forms$core$IForm$clear_cached_dirty_key_paths_BANG_$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (forms.core.clear_cached_dirty_key_paths_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (forms.core.clear_cached_dirty_key_paths_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IForm.clear-cached-dirty-key-paths!",this$);
}
}
}
});

/**
 * Is the form in the valid state
 */
forms.core.is_valid_QMARK_ = (function forms$core$is_valid_QMARK_(this$){
if(((!((this$ == null))) && (!((this$.forms$core$IForm$is_valid_QMARK_$arity$1 == null))))){
return this$.forms$core$IForm$is_valid_QMARK_$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (forms.core.is_valid_QMARK_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (forms.core.is_valid_QMARK_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IForm.is-valid?",this$);
}
}
}
});

/**
 * Is the key path in the valid state
 */
forms.core.is_valid_path_QMARK_ = (function forms$core$is_valid_path_QMARK_(this$,key_path){
if(((!((this$ == null))) && (!((this$.forms$core$IForm$is_valid_path_QMARK_$arity$2 == null))))){
return this$.forms$core$IForm$is_valid_path_QMARK_$arity$2(this$,key_path);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (forms.core.is_valid_path_QMARK_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,key_path);
} else {
var m__4244__auto____$1 = (forms.core.is_valid_path_QMARK_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,key_path);
} else {
throw cljs.core.missing_protocol.call(null,"IForm.is-valid-path?",this$);
}
}
}
});

/**
 * Are the dirty key paths in the valid state
 */
forms.core.dirty_paths_valid_QMARK_ = (function forms$core$dirty_paths_valid_QMARK_(this$){
if(((!((this$ == null))) && (!((this$.forms$core$IForm$dirty_paths_valid_QMARK_$arity$1 == null))))){
return this$.forms$core$IForm$dirty_paths_valid_QMARK_$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (forms.core.dirty_paths_valid_QMARK_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (forms.core.dirty_paths_valid_QMARK_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IForm.dirty-paths-valid?",this$);
}
}
}
});

/**
 * Reset form to the initial state
 */
forms.core.reset_form_BANG_ = (function forms$core$reset_form_BANG_(var_args){
var G__37220 = arguments.length;
switch (G__37220) {
case 1:
return forms.core.reset_form_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return forms.core.reset_form_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

forms.core.reset_form_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if(((!((this$ == null))) && (!((this$.forms$core$IForm$reset_form_BANG_$arity$1 == null))))){
return this$.forms$core$IForm$reset_form_BANG_$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (forms.core.reset_form_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (forms.core.reset_form_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IForm.reset-form!",this$);
}
}
}
});

forms.core.reset_form_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,init_data){
if(((!((this$ == null))) && (!((this$.forms$core$IForm$reset_form_BANG_$arity$2 == null))))){
return this$.forms$core$IForm$reset_form_BANG_$arity$2(this$,init_data);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (forms.core.reset_form_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,init_data);
} else {
var m__4244__auto____$1 = (forms.core.reset_form_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,init_data);
} else {
throw cljs.core.missing_protocol.call(null,"IForm.reset-form!",this$);
}
}
}
});

forms.core.reset_form_BANG_.cljs$lang$maxFixedArity = 2;



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {forms.core.IForm}
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
forms.core.Form = (function (state_atom,validator,opts,__meta,__extmap,__hash){
this.state_atom = state_atom;
this.validator = validator;
this.opts = opts;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
forms.core.Form.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

forms.core.Form.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k37248,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__37252 = k37248;
var G__37252__$1 = (((G__37252 instanceof cljs.core.Keyword))?G__37252.fqn:null);
switch (G__37252__$1) {
case "state-atom":
return self__.state_atom;

break;
case "validator":
return self__.validator;

break;
case "opts":
return self__.opts;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k37248,else__4206__auto__);

}
});

forms.core.Form.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#forms.core.Form{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state-atom","state-atom",1303809857),self__.state_atom],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"validator","validator",-1966190681),self__.validator],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts],null))], null),self__.__extmap));
});

forms.core.Form.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37247){
var self__ = this;
var G__37247__$1 = this;
return (new cljs.core.RecordIter((0),G__37247__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-atom","state-atom",1303809857),new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword(null,"opts","opts",155075701)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

forms.core.Form.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

forms.core.Form.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new forms.core.Form(self__.state_atom,self__.validator,self__.opts,self__.__meta,self__.__extmap,self__.__hash));
});

forms.core.Form.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

forms.core.Form.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1603135583 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

forms.core.Form.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37249,other37250){
var self__ = this;
var this37249__$1 = this;
return ((!((other37250 == null))) && ((this37249__$1.constructor === other37250.constructor)) && (cljs.core._EQ_.call(null,this37249__$1.state_atom,other37250.state_atom)) && (cljs.core._EQ_.call(null,this37249__$1.validator,other37250.validator)) && (cljs.core._EQ_.call(null,this37249__$1.opts,other37250.opts)) && (cljs.core._EQ_.call(null,this37249__$1.__extmap,other37250.__extmap)));
});

forms.core.Form.prototype.forms$core$IForm$ = cljs.core.PROTOCOL_SENTINEL;

forms.core.Form.prototype.forms$core$IForm$clear_cached_dirty_key_paths_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,this$__$1.forms$core$IForm$state$arity$1(null),cljs.core.assoc,new cljs.core.Keyword(null,"cached-dirty-key-paths","cached-dirty-key-paths",-611573122),cljs.core.set.call(null,cljs.core.PersistentArrayMap.EMPTY));
});

forms.core.Form.prototype.forms$core$IForm$data$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return reagent.core.cursor.call(null,this$__$1.forms$core$IForm$state$arity$1(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
});

forms.core.Form.prototype.forms$core$IForm$errors$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return reagent.core.cursor.call(null,this$__$1.forms$core$IForm$state$arity$1(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null));
});

forms.core.Form.prototype.forms$core$IForm$validate_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.forms$core$IForm$validate_BANG_$arity$2(null,false);
});

forms.core.Form.prototype.forms$core$IForm$validate_BANG_$arity$2 = (function (this$,dirty_only_QMARK_){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(dirty_only_QMARK_)){
this$__$1.forms$core$IForm$mark_dirty_paths_BANG_$arity$1(null);
} else {
this$__$1.forms$core$IForm$mark_dirty_BANG_$arity$1(null);
}

var validator__$1 = new cljs.core.Keyword(null,"validator","validator",-1966190681).cljs$core$IFn$_invoke$arity$1(this$__$1);
return cljs.core.swap_BANG_.call(null,this$__$1.forms$core$IForm$state$arity$1(null),cljs.core.assoc,new cljs.core.Keyword(null,"errors","errors",-908790718),validator__$1.call(null,cljs.core.deref.call(null,this$__$1.forms$core$IForm$data$arity$1(null))));
});

forms.core.Form.prototype.forms$core$IForm$init_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var auto_validate_QMARK_ = cljs.core.get_in.call(null,this$__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"auto-validate?","auto-validate?",866667103)], null));
cljs.core.remove_watch.call(null,this$__$1.forms$core$IForm$state$arity$1(null),new cljs.core.Keyword(null,"__form__","__form__",636608963));

if(cljs.core.truth_(auto_validate_QMARK_)){
cljs.core.add_watch.call(null,this$__$1.forms$core$IForm$state$arity$1(null),new cljs.core.Keyword(null,"__form__","__form__",636608963),((function (auto_validate_QMARK_,this$__$1){
return (function (_,___$1,old_val,new_val){
var old_data = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(old_val);
var new_data = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_val);
if(cljs.core.not_EQ_.call(null,old_data,new_data)){
forms.core.mark_dirty_paths_BANG_.call(null,this$__$1);

return forms.core.validate_BANG_.call(null,this$__$1,true);
} else {
return null;
}
});})(auto_validate_QMARK_,this$__$1))
);
} else {
}

return this$__$1;
});

forms.core.Form.prototype.forms$core$IForm$dirty_paths_valid_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.make_reaction.call(null,((function (this$__$1){
return (function (){
var current_state = cljs.core.deref.call(null,forms.core.state.call(null,this$__$1));
var current_errors = new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(current_state);
var dirty_paths = new cljs.core.Keyword(null,"dirty-key-paths","dirty-key-paths",-818120204).cljs$core$IFn$_invoke$arity$1(current_state);
var valid_paths = cljs.core.take_while.call(null,((function (dirty_paths,current_state,current_errors,this$__$1){
return (function (path){
return (cljs.core.get_in.call(null,current_errors,path) == null);
});})(dirty_paths,current_state,current_errors,this$__$1))
,dirty_paths);
return cljs.core._EQ_.call(null,cljs.core.count.call(null,valid_paths),cljs.core.count.call(null,dirty_paths));
});})(this$__$1))
);
});

forms.core.Form.prototype.forms$core$IForm$is_valid_path_QMARK_$arity$2 = (function (this$,key_path){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.make_reaction.call(null,((function (this$__$1){
return (function (){
return (cljs.core.deref.call(null,forms.core.errors_for_path.call(null,this$__$1,key_path)) == null);
});})(this$__$1))
);
});

forms.core.Form.prototype.forms$core$IForm$mark_dirty_paths_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var current_state = cljs.core.deref.call(null,this$__$1.forms$core$IForm$state$arity$1(null));
var dirty_paths = forms.dirty.calculate_dirty_fields.call(null,new cljs.core.Keyword(null,"init-data","init-data",372811248).cljs$core$IFn$_invoke$arity$1(current_state),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(current_state));
return cljs.core.swap_BANG_.call(null,this$__$1.forms$core$IForm$state$arity$1(null),cljs.core.assoc,new cljs.core.Keyword(null,"dirty-key-paths","dirty-key-paths",-818120204),cljs.core.set.call(null,cljs.core.concat.call(null,dirty_paths,new cljs.core.Keyword(null,"cached-dirty-key-paths","cached-dirty-key-paths",-611573122).cljs$core$IFn$_invoke$arity$1(current_state))));
});

forms.core.Form.prototype.forms$core$IForm$commit_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var commit_fn = cljs.core.get_in.call(null,this$__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"on-commit","on-commit",551275063)], null));
this$__$1.forms$core$IForm$mark_dirty_BANG_$arity$1(null);

this$__$1.forms$core$IForm$validate_BANG_$arity$1(null);

return commit_fn.call(null,this$__$1);
});

forms.core.Form.prototype.forms$core$IForm$mark_dirty_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var errors = self__.validator.call(null,cljs.core.deref.call(null,this$__$1.forms$core$IForm$data$arity$1(null)));
var errors_keypaths = forms.core.errors_keypaths.call(null,errors);
var current_state = cljs.core.deref.call(null,this$__$1.forms$core$IForm$state$arity$1(null));
var current_dirty_paths = new cljs.core.Keyword(null,"dirty-key-paths","dirty-key-paths",-818120204).cljs$core$IFn$_invoke$arity$1(forms.core.state);
return cljs.core.reset_BANG_.call(null,this$__$1.forms$core$IForm$state$arity$1(null),cljs.core.assoc.call(null,current_state,new cljs.core.Keyword(null,"cached-dirty-key-paths","cached-dirty-key-paths",-611573122),cljs.core.set.call(null,cljs.core.concat.call(null,new cljs.core.Keyword(null,"cached-dirty-key-paths","cached-dirty-key-paths",-611573122).cljs$core$IFn$_invoke$arity$1(forms.core.state),errors_keypaths)),new cljs.core.Keyword(null,"dirty-key-paths","dirty-key-paths",-818120204),cljs.core.set.call(null,errors_keypaths)));
});

forms.core.Form.prototype.forms$core$IForm$errors_for_path$arity$2 = (function (this$,key_path){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.make_reaction.call(null,((function (this$__$1){
return (function (){
var path = forms.util.key_to_path.call(null,key_path);
var current_state = cljs.core.deref.call(null,forms.core.state.call(null,this$__$1));
var is_dirty_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"dirty-key-paths","dirty-key-paths",-818120204).cljs$core$IFn$_invoke$arity$1(current_state),path);
if(is_dirty_QMARK_){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,forms.core.errors.call(null,this$__$1)),cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"$errors$","$errors$",634888771)));
} else {
return null;
}
});})(this$__$1))
);
});

forms.core.Form.prototype.forms$core$IForm$data_for_path$arity$2 = (function (this$,key_path){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.make_reaction.call(null,((function (this$__$1){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,forms.core.data.call(null,this$__$1)),forms.util.key_to_path.call(null,key_path));
});})(this$__$1))
);
});

forms.core.Form.prototype.forms$core$IForm$state$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"state-atom","state-atom",1303809857).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

forms.core.Form.prototype.forms$core$IForm$reset_form_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.forms$core$IForm$reset_form_BANG_$arity$2(null,new cljs.core.Keyword(null,"init-data","init-data",372811248).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$__$1.forms$core$IForm$state$arity$1(null))));
});

forms.core.Form.prototype.forms$core$IForm$reset_form_BANG_$arity$2 = (function (this$,init_data){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1.forms$core$IForm$state$arity$1(null),forms.core.init_state.call(null,init_data));
});

forms.core.Form.prototype.forms$core$IForm$is_valid_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.make_reaction.call(null,((function (this$__$1){
return (function (){
return cljs.core._EQ_.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.deref.call(null,forms.core.errors.call(null,this$__$1)));
});})(this$__$1))
);
});

forms.core.Form.prototype.forms$core$IForm$update_BANG_$arity$2 = (function (this$,data){
var self__ = this;
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,this$__$1.forms$core$IForm$state$arity$1(null),cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),data);

this$__$1.forms$core$IForm$mark_dirty_paths_BANG_$arity$1(null);

return this$__$1.forms$core$IForm$validate_BANG_$arity$2(null,true);
});

forms.core.Form.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state-atom","state-atom",1303809857),null,new cljs.core.Keyword(null,"validator","validator",-1966190681),null,new cljs.core.Keyword(null,"opts","opts",155075701),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new forms.core.Form(self__.state_atom,self__.validator,self__.opts,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

forms.core.Form.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__37247){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__37258 = cljs.core.keyword_identical_QMARK_;
var expr__37259 = k__4211__auto__;
if(cljs.core.truth_(pred__37258.call(null,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857),expr__37259))){
return (new forms.core.Form(G__37247,self__.validator,self__.opts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37258.call(null,new cljs.core.Keyword(null,"validator","validator",-1966190681),expr__37259))){
return (new forms.core.Form(self__.state_atom,G__37247,self__.opts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37258.call(null,new cljs.core.Keyword(null,"opts","opts",155075701),expr__37259))){
return (new forms.core.Form(self__.state_atom,self__.validator,G__37247,self__.__meta,self__.__extmap,null));
} else {
return (new forms.core.Form(self__.state_atom,self__.validator,self__.opts,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__37247),null));
}
}
}
});

forms.core.Form.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state-atom","state-atom",1303809857),self__.state_atom,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"validator","validator",-1966190681),self__.validator,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts,null))], null),self__.__extmap));
});

forms.core.Form.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__37247){
var self__ = this;
var this__4202__auto____$1 = this;
return (new forms.core.Form(self__.state_atom,self__.validator,self__.opts,G__37247,self__.__extmap,self__.__hash));
});

forms.core.Form.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

forms.core.Form.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state-atom","state-atom",-1350625912,null),new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null);
});

forms.core.Form.cljs$lang$type = true;

forms.core.Form.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"forms.core/Form",null,(1),null));
});

forms.core.Form.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"forms.core/Form");
});

/**
 * Positional factory function for forms.core/Form.
 */
forms.core.__GT_Form = (function forms$core$__GT_Form(state_atom,validator,opts){
return (new forms.core.Form(state_atom,validator,opts,null,null,null));
});

/**
 * Factory function for forms.core/Form, taking a map of keywords to field values.
 */
forms.core.map__GT_Form = (function forms$core$map__GT_Form(G__37251){
var extmap__4236__auto__ = (function (){var G__37261 = cljs.core.dissoc.call(null,G__37251,new cljs.core.Keyword(null,"state-atom","state-atom",1303809857),new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword(null,"opts","opts",155075701));
if(cljs.core.record_QMARK_.call(null,G__37251)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__37261);
} else {
return G__37261;
}
})();
return (new forms.core.Form(new cljs.core.Keyword(null,"state-atom","state-atom",1303809857).cljs$core$IFn$_invoke$arity$1(G__37251),new cljs.core.Keyword(null,"validator","validator",-1966190681).cljs$core$IFn$_invoke$arity$1(G__37251),new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(G__37251),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});

forms.core.init_state = (function forms$core$init_state(data){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"init-data","init-data",372811248),data,new cljs.core.Keyword(null,"data","data",-232669377),(function (){var or__3949__auto__ = data;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword(null,"cached-dirty-key-paths","cached-dirty-key-paths",-611573122),cljs.core.set.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"dirty-key-paths","dirty-key-paths",-818120204),cljs.core.set.call(null,cljs.core.PersistentArrayMap.EMPTY)], null);
});
forms.core.with_default_opts = (function forms$core$with_default_opts(opts){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-commit","on-commit",551275063),(function (_){
return null;
}),new cljs.core.Keyword(null,"auto-validate?","auto-validate?",866667103),false], null),opts);
});
/**
 * Form constructor. It accepts the following arguments:
 * 
 *   - `validator` - returned either by the `form.validator/validator` or `form.validator/comp-validators` function
 *   - `data` - initial data map
 *   - `opts` - map with the form options:
 *    + `:on-commit` - function to be called when the form is commited (by calling `(commit! form)`)
 *    + `:auto-validate?` - should the form be validated on any data change
 */
forms.core.constructor$ = (function forms$core$constructor(var_args){
var G__37305 = arguments.length;
switch (G__37305) {
case 1:
return forms.core.constructor$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return forms.core.constructor$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return forms.core.constructor$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

forms.core.constructor$.cljs$core$IFn$_invoke$arity$1 = (function (validator){
return cljs.core.partial.call(null,forms.core.constructor$,validator);
});

forms.core.constructor$.cljs$core$IFn$_invoke$arity$2 = (function (validator,data){
return forms.core.constructor$.call(null,validator,data,cljs.core.PersistentArrayMap.EMPTY);
});

forms.core.constructor$.cljs$core$IFn$_invoke$arity$3 = (function (validator,data,opts){
return forms.core.init_BANG_.call(null,forms.core.__GT_Form.call(null,reagent.core.atom.call(null,forms.core.init_state.call(null,data)),validator,forms.core.with_default_opts.call(null,opts)));
});

forms.core.constructor$.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=core.js.map?rel=1563552865104
