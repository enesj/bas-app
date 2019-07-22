// Compiled by ClojureScript 1.10.339 {}
goog.provide('me.tonsky.persistent_sorted_set');
goog.require('cljs.core');
goog.require('me.tonsky.persistent_sorted_set.arrays');
me.tonsky.persistent_sorted_set.min_len = (16);
me.tonsky.persistent_sorted_set.max_len = (32);
me.tonsky.persistent_sorted_set.avg_len = (((32) + (16)) >>> (1));
me.tonsky.persistent_sorted_set.level_shift = (cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__40782_SHARP_){
return (((32) & (1 << p1__40782_SHARP_)) != 0);
}),cljs.core.range.call(null,(31),(-1),(-1)))) + (1));
me.tonsky.persistent_sorted_set.path_mask = (((1) << me.tonsky.persistent_sorted_set.level_shift) - (1));
me.tonsky.persistent_sorted_set.empty_path = (0);
me.tonsky.persistent_sorted_set.path_get = (function me$tonsky$persistent_sorted_set$path_get(path,level){
return (me.tonsky.persistent_sorted_set.path_mask & (path >>> level));
});
me.tonsky.persistent_sorted_set.path_set = (function me$tonsky$persistent_sorted_set$path_set(path,level,idx){
return (path | (idx << level));
});
me.tonsky.persistent_sorted_set.binary_search_l = (function me$tonsky$persistent_sorted_set$binary_search_l(cmp,arr,r,k){
var l = (0);
var r__$1 = cljs.core.long$.call(null,r);
while(true){
if((l <= r__$1)){
var m = ((l + r__$1) >>> (1));
var mk = (arr[m]);
if((cmp.call(null,mk,k) < (0))){
var G__40790 = (m + (1));
var G__40791 = r__$1;
l = G__40790;
r__$1 = G__40791;
continue;
} else {
var G__40792 = l;
var G__40793 = (m - (1));
l = G__40792;
r__$1 = G__40793;
continue;
}
} else {
return l;
}
break;
}
});
me.tonsky.persistent_sorted_set.binary_search_r = (function me$tonsky$persistent_sorted_set$binary_search_r(cmp,arr,r,k){
var l = (0);
var r__$1 = cljs.core.long$.call(null,r);
while(true){
if((l <= r__$1)){
var m = ((l + r__$1) >>> (1));
var mk = (arr[m]);
if((cmp.call(null,mk,k) > (0))){
var G__40794 = l;
var G__40795 = (m - (1));
l = G__40794;
r__$1 = G__40795;
continue;
} else {
var G__40796 = (m + (1));
var G__40797 = r__$1;
l = G__40796;
r__$1 = G__40797;
continue;
}
} else {
return l;
}
break;
}
});
me.tonsky.persistent_sorted_set.lookup_exact = (function me$tonsky$persistent_sorted_set$lookup_exact(cmp,arr,key){
var arr_l = arr.length;
var idx = me.tonsky.persistent_sorted_set.binary_search_l.call(null,cmp,arr,(arr_l - (1)),key);
if((((idx < arr_l)) && (((0) === cmp.call(null,(arr[idx]),key))))){
return idx;
} else {
return (-1);
}
});
me.tonsky.persistent_sorted_set.lookup_range = (function me$tonsky$persistent_sorted_set$lookup_range(cmp,arr,key){
var arr_l = arr.length;
var idx = me.tonsky.persistent_sorted_set.binary_search_l.call(null,cmp,arr,(arr_l - (1)),key);
if((idx === arr_l)){
return (-1);
} else {
return idx;
}
});
me.tonsky.persistent_sorted_set.cut_n_splice = (function me$tonsky$persistent_sorted_set$cut_n_splice(arr,cut_from,cut_to,splice_from,splice_to,xs){
var xs_l = xs.length;
var l1 = (splice_from - cut_from);
var l2 = (cut_to - splice_to);
var l1xs = (l1 + xs_l);
var new_arr = me.tonsky.persistent_sorted_set.arrays.make_array.call(null,((l1 + xs_l) + l2));
var l__31025__auto___40798 = (splice_from - cut_from);
var n__4408__auto___40799 = l__31025__auto___40798;
var i__31026__auto___40800 = (0);
while(true){
if((i__31026__auto___40800 < n__4408__auto___40799)){
(new_arr[(i__31026__auto___40800 + (0))] = (arr[(i__31026__auto___40800 + cut_from)]));

var G__40801 = (i__31026__auto___40800 + (1));
i__31026__auto___40800 = G__40801;
continue;
} else {
}
break;
}

var l__31025__auto___40802 = (xs_l - (0));
var n__4408__auto___40803 = l__31025__auto___40802;
var i__31026__auto___40804 = (0);
while(true){
if((i__31026__auto___40804 < n__4408__auto___40803)){
(new_arr[(i__31026__auto___40804 + l1)] = (xs[(i__31026__auto___40804 + (0))]));

var G__40805 = (i__31026__auto___40804 + (1));
i__31026__auto___40804 = G__40805;
continue;
} else {
}
break;
}

var l__31025__auto___40806 = (cut_to - splice_to);
var n__4408__auto___40807 = l__31025__auto___40806;
var i__31026__auto___40808 = (0);
while(true){
if((i__31026__auto___40808 < n__4408__auto___40807)){
(new_arr[(i__31026__auto___40808 + l1xs)] = (arr[(i__31026__auto___40808 + splice_to)]));

var G__40809 = (i__31026__auto___40808 + (1));
i__31026__auto___40808 = G__40809;
continue;
} else {
}
break;
}

return new_arr;
});
me.tonsky.persistent_sorted_set.splice = (function me$tonsky$persistent_sorted_set$splice(arr,splice_from,splice_to,xs){
return me.tonsky.persistent_sorted_set.cut_n_splice.call(null,arr,(0),arr.length,splice_from,splice_to,xs);
});
me.tonsky.persistent_sorted_set.insert = (function me$tonsky$persistent_sorted_set$insert(arr,idx,xs){
return me.tonsky.persistent_sorted_set.cut_n_splice.call(null,arr,(0),arr.length,idx,idx,xs);
});
me.tonsky.persistent_sorted_set.merge_n_split = (function me$tonsky$persistent_sorted_set$merge_n_split(a1,a2){
var a1_l = a1.length;
var a2_l = a2.length;
var total_l = (a1_l + a2_l);
var r1_l = (total_l >>> (1));
var r2_l = (total_l - r1_l);
var r1 = me.tonsky.persistent_sorted_set.arrays.make_array.call(null,r1_l);
var r2 = me.tonsky.persistent_sorted_set.arrays.make_array.call(null,r2_l);
if((a1_l <= r1_l)){
var l__31025__auto___40810 = (a1_l - (0));
var n__4408__auto___40811 = l__31025__auto___40810;
var i__31026__auto___40812 = (0);
while(true){
if((i__31026__auto___40812 < n__4408__auto___40811)){
(r1[(i__31026__auto___40812 + (0))] = (a1[(i__31026__auto___40812 + (0))]));

var G__40813 = (i__31026__auto___40812 + (1));
i__31026__auto___40812 = G__40813;
continue;
} else {
}
break;
}

var l__31025__auto___40814 = ((r1_l - a1_l) - (0));
var n__4408__auto___40815 = l__31025__auto___40814;
var i__31026__auto___40816 = (0);
while(true){
if((i__31026__auto___40816 < n__4408__auto___40815)){
(r1[(i__31026__auto___40816 + a1_l)] = (a2[(i__31026__auto___40816 + (0))]));

var G__40817 = (i__31026__auto___40816 + (1));
i__31026__auto___40816 = G__40817;
continue;
} else {
}
break;
}

var l__31025__auto___40818 = (a2_l - (r1_l - a1_l));
var n__4408__auto___40819 = l__31025__auto___40818;
var i__31026__auto___40820 = (0);
while(true){
if((i__31026__auto___40820 < n__4408__auto___40819)){
(r2[(i__31026__auto___40820 + (0))] = (a2[(i__31026__auto___40820 + (r1_l - a1_l))]));

var G__40821 = (i__31026__auto___40820 + (1));
i__31026__auto___40820 = G__40821;
continue;
} else {
}
break;
}
} else {
var l__31025__auto___40822 = (r1_l - (0));
var n__4408__auto___40823 = l__31025__auto___40822;
var i__31026__auto___40824 = (0);
while(true){
if((i__31026__auto___40824 < n__4408__auto___40823)){
(r1[(i__31026__auto___40824 + (0))] = (a1[(i__31026__auto___40824 + (0))]));

var G__40825 = (i__31026__auto___40824 + (1));
i__31026__auto___40824 = G__40825;
continue;
} else {
}
break;
}

var l__31025__auto___40826 = (a1_l - r1_l);
var n__4408__auto___40827 = l__31025__auto___40826;
var i__31026__auto___40828 = (0);
while(true){
if((i__31026__auto___40828 < n__4408__auto___40827)){
(r2[(i__31026__auto___40828 + (0))] = (a1[(i__31026__auto___40828 + r1_l)]));

var G__40829 = (i__31026__auto___40828 + (1));
i__31026__auto___40828 = G__40829;
continue;
} else {
}
break;
}

var l__31025__auto___40830 = (a2_l - (0));
var n__4408__auto___40831 = l__31025__auto___40830;
var i__31026__auto___40832 = (0);
while(true){
if((i__31026__auto___40832 < n__4408__auto___40831)){
(r2[(i__31026__auto___40832 + (a1_l - r1_l))] = (a2[(i__31026__auto___40832 + (0))]));

var G__40833 = (i__31026__auto___40832 + (1));
i__31026__auto___40832 = G__40833;
continue;
} else {
}
break;
}
}

return [r1,r2];
});
me.tonsky.persistent_sorted_set.eq_arr = (function me$tonsky$persistent_sorted_set$eq_arr(cmp,a1,a1_from,a1_to,a2,a2_from,a2_to){
var len = (a1_to - a1_from);
var and__3938__auto__ = (len === (a2_to - a2_from));
if(and__3938__auto__){
var i = (0);
while(true){
if((i === len)){
return true;
} else {
if(!(((0) === cmp.call(null,(a1[(i + a1_from)]),(a2[(i + a2_from)]))))){
return false;
} else {
var G__40834 = (i + (1));
i = G__40834;
continue;

}
}
break;
}
} else {
return and__3938__auto__;
}
});
me.tonsky.persistent_sorted_set.check_n_splice = (function me$tonsky$persistent_sorted_set$check_n_splice(cmp,arr,from,to,new_arr){
if(me.tonsky.persistent_sorted_set.eq_arr.call(null,cmp,arr,from,to,new_arr,(0),new_arr.length)){
return arr;
} else {
return me.tonsky.persistent_sorted_set.splice.call(null,arr,from,to,new_arr);
}
});
/**
 * Drop non-nil references and return array of arguments
 */
me.tonsky.persistent_sorted_set.return_array = (function me$tonsky$persistent_sorted_set$return_array(var_args){
var G__40836 = arguments.length;
switch (G__40836) {
case 1:
return me.tonsky.persistent_sorted_set.return_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return me.tonsky.persistent_sorted_set.return_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return me.tonsky.persistent_sorted_set.return_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

me.tonsky.persistent_sorted_set.return_array.cljs$core$IFn$_invoke$arity$1 = (function (a1){
return [a1];
});

me.tonsky.persistent_sorted_set.return_array.cljs$core$IFn$_invoke$arity$2 = (function (a1,a2){
if(cljs.core.truth_(a1)){
if(cljs.core.truth_(a2)){
return [a1,a2];
} else {
return [a1];
}
} else {
return [a2];
}
});

me.tonsky.persistent_sorted_set.return_array.cljs$core$IFn$_invoke$arity$3 = (function (a1,a2,a3){
if(cljs.core.truth_(a1)){
if(cljs.core.truth_(a2)){
if(cljs.core.truth_(a3)){
return [a1,a2,a3];
} else {
return [a1,a2];
}
} else {
if(cljs.core.truth_(a3)){
return [a1,a3];
} else {
return [a1];
}
}
} else {
if(cljs.core.truth_(a2)){
if(cljs.core.truth_(a3)){
return [a2,a3];
} else {
return [a2];
}
} else {
return [a3];
}
}
});

me.tonsky.persistent_sorted_set.return_array.cljs$lang$maxFixedArity = 3;


/**
 * @interface
 */
me.tonsky.persistent_sorted_set.INode = function(){};

me.tonsky.persistent_sorted_set.node_lim_key = (function me$tonsky$persistent_sorted_set$node_lim_key(_){
if(((!((_ == null))) && (!((_.me$tonsky$persistent_sorted_set$INode$node_lim_key$arity$1 == null))))){
return _.me$tonsky$persistent_sorted_set$INode$node_lim_key$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (me.tonsky.persistent_sorted_set.node_lim_key[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (me.tonsky.persistent_sorted_set.node_lim_key["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"INode.node-lim-key",_);
}
}
}
});

me.tonsky.persistent_sorted_set.node_len = (function me$tonsky$persistent_sorted_set$node_len(_){
if(((!((_ == null))) && (!((_.me$tonsky$persistent_sorted_set$INode$node_len$arity$1 == null))))){
return _.me$tonsky$persistent_sorted_set$INode$node_len$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (me.tonsky.persistent_sorted_set.node_len[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (me.tonsky.persistent_sorted_set.node_len["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"INode.node-len",_);
}
}
}
});

me.tonsky.persistent_sorted_set.node_merge = (function me$tonsky$persistent_sorted_set$node_merge(_,next){
if(((!((_ == null))) && (!((_.me$tonsky$persistent_sorted_set$INode$node_merge$arity$2 == null))))){
return _.me$tonsky$persistent_sorted_set$INode$node_merge$arity$2(_,next);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (me.tonsky.persistent_sorted_set.node_merge[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_,next);
} else {
var m__4244__auto____$1 = (me.tonsky.persistent_sorted_set.node_merge["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_,next);
} else {
throw cljs.core.missing_protocol.call(null,"INode.node-merge",_);
}
}
}
});

me.tonsky.persistent_sorted_set.node_merge_n_split = (function me$tonsky$persistent_sorted_set$node_merge_n_split(_,next){
if(((!((_ == null))) && (!((_.me$tonsky$persistent_sorted_set$INode$node_merge_n_split$arity$2 == null))))){
return _.me$tonsky$persistent_sorted_set$INode$node_merge_n_split$arity$2(_,next);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (me.tonsky.persistent_sorted_set.node_merge_n_split[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_,next);
} else {
var m__4244__auto____$1 = (me.tonsky.persistent_sorted_set.node_merge_n_split["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_,next);
} else {
throw cljs.core.missing_protocol.call(null,"INode.node-merge-n-split",_);
}
}
}
});

me.tonsky.persistent_sorted_set.node_lookup = (function me$tonsky$persistent_sorted_set$node_lookup(_,cmp,key){
if(((!((_ == null))) && (!((_.me$tonsky$persistent_sorted_set$INode$node_lookup$arity$3 == null))))){
return _.me$tonsky$persistent_sorted_set$INode$node_lookup$arity$3(_,cmp,key);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (me.tonsky.persistent_sorted_set.node_lookup[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_,cmp,key);
} else {
var m__4244__auto____$1 = (me.tonsky.persistent_sorted_set.node_lookup["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_,cmp,key);
} else {
throw cljs.core.missing_protocol.call(null,"INode.node-lookup",_);
}
}
}
});

me.tonsky.persistent_sorted_set.node_conj = (function me$tonsky$persistent_sorted_set$node_conj(_,cmp,key){
if(((!((_ == null))) && (!((_.me$tonsky$persistent_sorted_set$INode$node_conj$arity$3 == null))))){
return _.me$tonsky$persistent_sorted_set$INode$node_conj$arity$3(_,cmp,key);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (me.tonsky.persistent_sorted_set.node_conj[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_,cmp,key);
} else {
var m__4244__auto____$1 = (me.tonsky.persistent_sorted_set.node_conj["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_,cmp,key);
} else {
throw cljs.core.missing_protocol.call(null,"INode.node-conj",_);
}
}
}
});

me.tonsky.persistent_sorted_set.node_disj = (function me$tonsky$persistent_sorted_set$node_disj(_,cmp,key,root_QMARK_,left,right){
if(((!((_ == null))) && (!((_.me$tonsky$persistent_sorted_set$INode$node_disj$arity$6 == null))))){
return _.me$tonsky$persistent_sorted_set$INode$node_disj$arity$6(_,cmp,key,root_QMARK_,left,right);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (me.tonsky.persistent_sorted_set.node_disj[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_,cmp,key,root_QMARK_,left,right);
} else {
var m__4244__auto____$1 = (me.tonsky.persistent_sorted_set.node_disj["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_,cmp,key,root_QMARK_,left,right);
} else {
throw cljs.core.missing_protocol.call(null,"INode.node-disj",_);
}
}
}
});

me.tonsky.persistent_sorted_set.rotate = (function me$tonsky$persistent_sorted_set$rotate(node,root_QMARK_,left,right){
if(cljs.core.truth_(root_QMARK_)){
return me.tonsky.persistent_sorted_set.return_array.call(null,node);
} else {
if((me.tonsky.persistent_sorted_set.node_len.call(null,node) > (16))){
return me.tonsky.persistent_sorted_set.return_array.call(null,left,node,right);
} else {
if(cljs.core.truth_((function (){var and__3938__auto__ = left;
if(cljs.core.truth_(and__3938__auto__)){
return (me.tonsky.persistent_sorted_set.node_len.call(null,left) <= (16));
} else {
return and__3938__auto__;
}
})())){
return me.tonsky.persistent_sorted_set.return_array.call(null,me.tonsky.persistent_sorted_set.node_merge.call(null,left,node),right);
} else {
if(cljs.core.truth_((function (){var and__3938__auto__ = right;
if(cljs.core.truth_(and__3938__auto__)){
return (me.tonsky.persistent_sorted_set.node_len.call(null,right) <= (16));
} else {
return and__3938__auto__;
}
})())){
return me.tonsky.persistent_sorted_set.return_array.call(null,left,me.tonsky.persistent_sorted_set.node_merge.call(null,node,right));
} else {
if(cljs.core.truth_((function (){var and__3938__auto__ = left;
if(cljs.core.truth_(and__3938__auto__)){
return (((right == null)) || ((me.tonsky.persistent_sorted_set.node_len.call(null,left) < me.tonsky.persistent_sorted_set.node_len.call(null,right))));
} else {
return and__3938__auto__;
}
})())){
var nodes = me.tonsky.persistent_sorted_set.node_merge_n_split.call(null,left,node);
return me.tonsky.persistent_sorted_set.return_array.call(null,(nodes[(0)]),(nodes[(1)]),right);
} else {
var nodes = me.tonsky.persistent_sorted_set.node_merge_n_split.call(null,node,right);
return me.tonsky.persistent_sorted_set.return_array.call(null,left,(nodes[(0)]),(nodes[(1)]));

}
}
}
}
}
});

/**
* @constructor
 * @implements {me.tonsky.persistent_sorted_set.INode}
*/
me.tonsky.persistent_sorted_set.Node = (function (keys,pointers){
this.keys = keys;
this.pointers = pointers;
});
me.tonsky.persistent_sorted_set.Node.prototype.me$tonsky$persistent_sorted_set$INode$ = cljs.core.PROTOCOL_SENTINEL;

me.tonsky.persistent_sorted_set.Node.prototype.me$tonsky$persistent_sorted_set$INode$node_lim_key$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var arr__31056__auto__ = self__.keys;
return (arr__31056__auto__[(arr__31056__auto__.length - (1))]);
});

me.tonsky.persistent_sorted_set.Node.prototype.me$tonsky$persistent_sorted_set$INode$node_len$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.keys.length;
});

me.tonsky.persistent_sorted_set.Node.prototype.me$tonsky$persistent_sorted_set$INode$node_merge$arity$2 = (function (_,next){
var self__ = this;
var ___$1 = this;
return (new me.tonsky.persistent_sorted_set.Node(me.tonsky.persistent_sorted_set.arrays.aconcat.call(null,self__.keys,next.keys),me.tonsky.persistent_sorted_set.arrays.aconcat.call(null,self__.pointers,next.pointers)));
});

me.tonsky.persistent_sorted_set.Node.prototype.me$tonsky$persistent_sorted_set$INode$node_merge_n_split$arity$2 = (function (_,next){
var self__ = this;
var ___$1 = this;
var ks = me.tonsky.persistent_sorted_set.merge_n_split.call(null,self__.keys,next.keys);
var ps = me.tonsky.persistent_sorted_set.merge_n_split.call(null,self__.pointers,next.pointers);
return me.tonsky.persistent_sorted_set.return_array.call(null,(new me.tonsky.persistent_sorted_set.Node((ks[(0)]),(ps[(0)]))),(new me.tonsky.persistent_sorted_set.Node((ks[(1)]),(ps[(1)]))));
});

me.tonsky.persistent_sorted_set.Node.prototype.me$tonsky$persistent_sorted_set$INode$node_lookup$arity$3 = (function (_,cmp,key){
var self__ = this;
var ___$1 = this;
var idx = me.tonsky.persistent_sorted_set.lookup_range.call(null,cmp,self__.keys,key);
if(((-1) === idx)){
return null;
} else {
return me.tonsky.persistent_sorted_set.node_lookup.call(null,(self__.pointers[idx]),cmp,key);
}
});

me.tonsky.persistent_sorted_set.Node.prototype.me$tonsky$persistent_sorted_set$INode$node_conj$arity$3 = (function (_,cmp,key){
var self__ = this;
var ___$1 = this;
var idx = me.tonsky.persistent_sorted_set.binary_search_l.call(null,cmp,self__.keys,(self__.keys.length - (2)),key);
var nodes = me.tonsky.persistent_sorted_set.node_conj.call(null,(self__.pointers[idx]),cmp,key);
if(cljs.core.truth_(nodes)){
var new_keys = me.tonsky.persistent_sorted_set.check_n_splice.call(null,cmp,self__.keys,idx,(idx + (1)),me.tonsky.persistent_sorted_set.arrays.amap.call(null,me.tonsky.persistent_sorted_set.node_lim_key,nodes));
var new_pointers = me.tonsky.persistent_sorted_set.splice.call(null,self__.pointers,idx,(idx + (1)),nodes);
if((new_pointers.length <= (32))){
return [(new me.tonsky.persistent_sorted_set.Node(new_keys,new_pointers))];
} else {
var middle = (new_pointers.length >>> (1));
return [(new me.tonsky.persistent_sorted_set.Node(new_keys.slice((0),middle),new_pointers.slice((0),middle))),(new me.tonsky.persistent_sorted_set.Node(new_keys.slice(middle),new_pointers.slice(middle)))];
}
} else {
return null;
}
});

me.tonsky.persistent_sorted_set.Node.prototype.me$tonsky$persistent_sorted_set$INode$node_disj$arity$6 = (function (_,cmp,key,root_QMARK_,left,right){
var self__ = this;
var ___$1 = this;
var idx = me.tonsky.persistent_sorted_set.lookup_range.call(null,cmp,self__.keys,key);
if(((-1) === idx)){
return null;
} else {
var child = (self__.pointers[idx]);
var left_child = ((((idx - (1)) >= (0)))?(self__.pointers[(idx - (1))]):null);
var right_child = ((((idx + (1)) < self__.pointers.length))?(self__.pointers[(idx + (1))]):null);
var disjned = me.tonsky.persistent_sorted_set.node_disj.call(null,child,cmp,key,false,left_child,right_child);
if(cljs.core.truth_(disjned)){
var left_idx = (cljs.core.truth_(left_child)?(idx - (1)):idx);
var right_idx = (cljs.core.truth_(right_child)?((2) + idx):((1) + idx));
var new_keys = me.tonsky.persistent_sorted_set.check_n_splice.call(null,cmp,self__.keys,left_idx,right_idx,me.tonsky.persistent_sorted_set.arrays.amap.call(null,me.tonsky.persistent_sorted_set.node_lim_key,disjned));
var new_pointers = me.tonsky.persistent_sorted_set.splice.call(null,self__.pointers,left_idx,right_idx,disjned);
return me.tonsky.persistent_sorted_set.rotate.call(null,(new me.tonsky.persistent_sorted_set.Node(new_keys,new_pointers)),root_QMARK_,left,right);
} else {
return null;
}
}
});

me.tonsky.persistent_sorted_set.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"pointers","pointers",-1669058356,null)], null);
});

me.tonsky.persistent_sorted_set.Node.cljs$lang$type = true;

me.tonsky.persistent_sorted_set.Node.cljs$lang$ctorStr = "me.tonsky.persistent-sorted-set/Node";

me.tonsky.persistent_sorted_set.Node.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"me.tonsky.persistent-sorted-set/Node");
});

/**
 * Positional factory function for me.tonsky.persistent-sorted-set/Node.
 */
me.tonsky.persistent_sorted_set.__GT_Node = (function me$tonsky$persistent_sorted_set$__GT_Node(keys,pointers){
return (new me.tonsky.persistent_sorted_set.Node(keys,pointers));
});


/**
* @constructor
 * @implements {me.tonsky.persistent_sorted_set.INode}
*/
me.tonsky.persistent_sorted_set.Leaf = (function (keys){
this.keys = keys;
});
me.tonsky.persistent_sorted_set.Leaf.prototype.me$tonsky$persistent_sorted_set$INode$ = cljs.core.PROTOCOL_SENTINEL;

me.tonsky.persistent_sorted_set.Leaf.prototype.me$tonsky$persistent_sorted_set$INode$node_lim_key$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var arr__31056__auto__ = self__.keys;
return (arr__31056__auto__[(arr__31056__auto__.length - (1))]);
});

me.tonsky.persistent_sorted_set.Leaf.prototype.me$tonsky$persistent_sorted_set$INode$node_len$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.keys.length;
});

me.tonsky.persistent_sorted_set.Leaf.prototype.me$tonsky$persistent_sorted_set$INode$node_merge$arity$2 = (function (_,next){
var self__ = this;
var ___$1 = this;
return (new me.tonsky.persistent_sorted_set.Leaf(me.tonsky.persistent_sorted_set.arrays.aconcat.call(null,self__.keys,next.keys)));
});

me.tonsky.persistent_sorted_set.Leaf.prototype.me$tonsky$persistent_sorted_set$INode$node_merge_n_split$arity$2 = (function (_,next){
var self__ = this;
var ___$1 = this;
var ks = me.tonsky.persistent_sorted_set.merge_n_split.call(null,self__.keys,next.keys);
return me.tonsky.persistent_sorted_set.return_array.call(null,(new me.tonsky.persistent_sorted_set.Leaf((ks[(0)]))),(new me.tonsky.persistent_sorted_set.Leaf((ks[(1)]))));
});

me.tonsky.persistent_sorted_set.Leaf.prototype.me$tonsky$persistent_sorted_set$INode$node_lookup$arity$3 = (function (_,cmp,key){
var self__ = this;
var ___$1 = this;
var idx = me.tonsky.persistent_sorted_set.lookup_exact.call(null,cmp,self__.keys,key);
if(((-1) === idx)){
return null;
} else {
return (self__.keys[idx]);
}
});

me.tonsky.persistent_sorted_set.Leaf.prototype.me$tonsky$persistent_sorted_set$INode$node_conj$arity$3 = (function (_,cmp,key){
var self__ = this;
var ___$1 = this;
var idx = me.tonsky.persistent_sorted_set.binary_search_l.call(null,cmp,self__.keys,(self__.keys.length - (1)),key);
var keys_l = self__.keys.length;
if((((idx < keys_l)) && (((0) === cmp.call(null,key,(self__.keys[idx])))))){
return null;
} else {
if((keys_l === (32))){
var middle = ((keys_l + (1)) >>> (1));
if((idx > middle)){
return [(new me.tonsky.persistent_sorted_set.Leaf(self__.keys.slice((0),middle))),(new me.tonsky.persistent_sorted_set.Leaf(me.tonsky.persistent_sorted_set.cut_n_splice.call(null,self__.keys,middle,keys_l,idx,idx,[key])))];
} else {
return [(new me.tonsky.persistent_sorted_set.Leaf(me.tonsky.persistent_sorted_set.cut_n_splice.call(null,self__.keys,(0),middle,idx,idx,[key]))),(new me.tonsky.persistent_sorted_set.Leaf(self__.keys.slice(middle,keys_l)))];
}
} else {
return [(new me.tonsky.persistent_sorted_set.Leaf(me.tonsky.persistent_sorted_set.splice.call(null,self__.keys,idx,idx,[key])))];

}
}
});

me.tonsky.persistent_sorted_set.Leaf.prototype.me$tonsky$persistent_sorted_set$INode$node_disj$arity$6 = (function (_,cmp,key,root_QMARK_,left,right){
var self__ = this;
var ___$1 = this;
var idx = me.tonsky.persistent_sorted_set.lookup_exact.call(null,cmp,self__.keys,key);
if(((-1) === idx)){
return null;
} else {
var new_keys = me.tonsky.persistent_sorted_set.splice.call(null,self__.keys,idx,(idx + (1)),[]);
return me.tonsky.persistent_sorted_set.rotate.call(null,(new me.tonsky.persistent_sorted_set.Leaf(new_keys)),root_QMARK_,left,right);
}
});

me.tonsky.persistent_sorted_set.Leaf.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null)], null);
});

me.tonsky.persistent_sorted_set.Leaf.cljs$lang$type = true;

me.tonsky.persistent_sorted_set.Leaf.cljs$lang$ctorStr = "me.tonsky.persistent-sorted-set/Leaf";

me.tonsky.persistent_sorted_set.Leaf.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"me.tonsky.persistent-sorted-set/Leaf");
});

/**
 * Positional factory function for me.tonsky.persistent-sorted-set/Leaf.
 */
me.tonsky.persistent_sorted_set.__GT_Leaf = (function me$tonsky$persistent_sorted_set$__GT_Leaf(keys){
return (new me.tonsky.persistent_sorted_set.Leaf(keys));
});



me.tonsky.persistent_sorted_set.uninitialized_hash = null;

/**
* @constructor
 * @implements {me.tonsky.persistent_sorted_set.Object}
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.ITransientSet}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEditableCollection}
 * @implements {cljs.core.ISet}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.ITransientCollection}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.IReduce}
*/
me.tonsky.persistent_sorted_set.BTSet = (function (root,shift,cnt,comparator,meta,_hash){
this.root = root;
this.shift = shift;
this.cnt = cnt;
this.comparator = comparator;
this.meta = meta;
this._hash = _hash;
this.cljs$lang$protocol_mask$partition0$ = 2297303311;
this.cljs$lang$protocol_mask$partition1$ = 8332;
});
me.tonsky.persistent_sorted_set.BTSet.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_.call(null,this$);
});

me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return me.tonsky.persistent_sorted_set.node_lookup.call(null,self__.root,self__.comparator,k);
});

me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var or__3949__auto__ = me.tonsky.persistent_sorted_set.node_lookup.call(null,self__.root,self__.comparator,k);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return not_found;
}
});

me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#{"," ","}",opts,cljs.core.seq.call(null,this$__$1));
});

me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new me.tonsky.persistent_sorted_set.BTSet(self__.root,self__.shift,self__.cnt,self__.comparator,self__.meta,self__._hash));
});

me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cnt;
});

me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.rseq.call(null,me.tonsky.persistent_sorted_set.btset_iter.call(null,this$__$1));
});

me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__4061__auto__ = self__._hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = cljs.core.hash_unordered_coll.call(null,this$__$1);
self__._hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return ((cljs.core.set_QMARK_.call(null,other)) && ((self__.cnt === cljs.core.count.call(null,other))) && (cljs.core.every_QMARK_.call(null,((function (this$__$1){
return (function (p1__40909_SHARP_){
return cljs.core.contains_QMARK_.call(null,this$__$1,p1__40909_SHARP_);
});})(this$__$1))
,other)));
});

me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new me.tonsky.persistent_sorted_set.BTSet((new me.tonsky.persistent_sorted_set.Leaf([])),(0),(0),self__.comparator,self__.meta,null));
});

me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return me.tonsky.persistent_sorted_set.disj.call(null,this$__$1,key,self__.comparator);
});

me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
var temp__5718__auto__ = me.tonsky.persistent_sorted_set.btset_iter.call(null,this$__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var i = temp__5718__auto__;
return cljs.core._reduce.call(null,i,f);
} else {
return f.call(null);
}
});

me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var self__ = this;
var this$__$1 = this;
var temp__5718__auto__ = me.tonsky.persistent_sorted_set.btset_iter.call(null,this$__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var i = temp__5718__auto__;
return cljs.core._reduce.call(null,i,f,start);
} else {
return start;
}
});

me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return me.tonsky.persistent_sorted_set.conj.call(null,this$__$1,key,self__.comparator);
});

me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return me.tonsky.persistent_sorted_set.btset_iter.call(null,this$__$1);
});

me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return me.tonsky.persistent_sorted_set.disj.call(null,this$__$1,key,self__.comparator);
});

me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new me.tonsky.persistent_sorted_set.BTSet(self__.root,self__.shift,self__.cnt,self__.comparator,new_meta,self__._hash));
});

me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return me.tonsky.persistent_sorted_set.conj.call(null,this$__$1,key,self__.comparator);
});

me.tonsky.persistent_sorted_set.BTSet.prototype.call = (function() {
var G__40937 = null;
var G__40937__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__40937__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__40937 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__40937__2.call(this,self__,k);
case 3:
return G__40937__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__40937.cljs$core$IFn$_invoke$arity$2 = G__40937__2;
G__40937.cljs$core$IFn$_invoke$arity$3 = G__40937__3;
return G__40937;
})()
;

me.tonsky.persistent_sorted_set.BTSet.prototype.apply = (function (self__,args40913){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args40913)));
});

me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

me.tonsky.persistent_sorted_set.BTSet.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.Symbol(null,"shift","shift",-1657295705,null),new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.Symbol(null,"comparator","comparator",-509539107,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_hash","_hash",-2130838312,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

me.tonsky.persistent_sorted_set.BTSet.cljs$lang$type = true;

me.tonsky.persistent_sorted_set.BTSet.cljs$lang$ctorStr = "me.tonsky.persistent-sorted-set/BTSet";

me.tonsky.persistent_sorted_set.BTSet.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"me.tonsky.persistent-sorted-set/BTSet");
});

/**
 * Positional factory function for me.tonsky.persistent-sorted-set/BTSet.
 */
me.tonsky.persistent_sorted_set.__GT_BTSet = (function me$tonsky$persistent_sorted_set$__GT_BTSet(root,shift,cnt,comparator,meta,_hash){
return (new me.tonsky.persistent_sorted_set.BTSet(root,shift,cnt,comparator,meta,_hash));
});

me.tonsky.persistent_sorted_set.keys_for = (function me$tonsky$persistent_sorted_set$keys_for(set,path){
var level = set.shift;
var node = set.root;
while(true){
if((level > (0))){
var G__40950 = (level - me.tonsky.persistent_sorted_set.level_shift);
var G__40951 = (node.pointers[me.tonsky.persistent_sorted_set.path_get.call(null,path,level)]);
level = G__40950;
node = G__40951;
continue;
} else {
return node.keys;
}
break;
}
});
me.tonsky.persistent_sorted_set.alter_btset = (function me$tonsky$persistent_sorted_set$alter_btset(set,root,shift,cnt){
return (new me.tonsky.persistent_sorted_set.BTSet(root,shift,cnt,set.comparator,set.meta,null));
});
me.tonsky.persistent_sorted_set._next_path = (function me$tonsky$persistent_sorted_set$_next_path(node,path,level){
var idx = me.tonsky.persistent_sorted_set.path_get.call(null,path,level);
if((level > (0))){
var sub_path = me.tonsky.persistent_sorted_set._next_path.call(null,(node.pointers[idx]),path,(level - me.tonsky.persistent_sorted_set.level_shift));
if(((-1) === sub_path)){
if(((idx + (1)) < node.pointers.length)){
return me.tonsky.persistent_sorted_set.path_set.call(null,(0),level,(idx + (1)));
} else {
return (-1);
}
} else {
return me.tonsky.persistent_sorted_set.path_set.call(null,sub_path,level,idx);
}
} else {
if(((idx + (1)) < node.keys.length)){
return me.tonsky.persistent_sorted_set.path_set.call(null,(0),(0),(idx + (1)));
} else {
return (-1);
}
}
});
/**
 * Returns path representing next item after `path` in natural traversal order,
 * or -1 if end of tree has been reached
 */
me.tonsky.persistent_sorted_set.next_path = (function me$tonsky$persistent_sorted_set$next_path(set,path){
return me.tonsky.persistent_sorted_set._next_path.call(null,set.root,path,set.shift);
});
/**
 * Returns rightmost path possible starting from node and going deeper
 */
me.tonsky.persistent_sorted_set._rpath = (function me$tonsky$persistent_sorted_set$_rpath(node,level){
var node__$1 = node;
var path = (0);
var level__$1 = level;
while(true){
if((level__$1 > (0))){
var G__40962 = (function (){var arr__31056__auto__ = node__$1.pointers;
return (arr__31056__auto__[(arr__31056__auto__.length - (1))]);
})();
var G__40963 = me.tonsky.persistent_sorted_set.path_set.call(null,path,level__$1,(node__$1.pointers.length - (1)));
var G__40964 = (level__$1 - me.tonsky.persistent_sorted_set.level_shift);
node__$1 = G__40962;
path = G__40963;
level__$1 = G__40964;
continue;
} else {
return me.tonsky.persistent_sorted_set.path_set.call(null,path,(0),(node__$1.keys.length - (1)));
}
break;
}
});
me.tonsky.persistent_sorted_set._prev_path = (function me$tonsky$persistent_sorted_set$_prev_path(node,path,level){
var idx = me.tonsky.persistent_sorted_set.path_get.call(null,path,level);
if((level > (0))){
var sub_level = (level - me.tonsky.persistent_sorted_set.level_shift);
var sub_path = me.tonsky.persistent_sorted_set._prev_path.call(null,(node.pointers[idx]),path,sub_level);
if(((-1) === sub_path)){
if(((idx - (1)) >= (0))){
var idx__$1 = (idx - (1));
var sub_path__$1 = me.tonsky.persistent_sorted_set._rpath.call(null,(node.pointers[idx__$1]),sub_level);
return me.tonsky.persistent_sorted_set.path_set.call(null,sub_path__$1,level,idx__$1);
} else {
return (-1);
}
} else {
return me.tonsky.persistent_sorted_set.path_set.call(null,sub_path,level,idx);
}
} else {
if(((idx - (1)) >= (0))){
return me.tonsky.persistent_sorted_set.path_set.call(null,(0),(0),(idx - (1)));
} else {
return (-1);
}
}
});
/**
 * Returns path representing previous item before `path` in natural traversal order,
 * or -1 if `path` was already beginning of a tree
 */
me.tonsky.persistent_sorted_set.prev_path = (function me$tonsky$persistent_sorted_set$prev_path(set,path){
return me.tonsky.persistent_sorted_set._prev_path.call(null,set.root,path,set.shift);
});

/**
 * Iterator that represents the whole set
 */
me.tonsky.persistent_sorted_set.btset_iter = (function me$tonsky$persistent_sorted_set$btset_iter(set){
if((me.tonsky.persistent_sorted_set.node_len.call(null,set.root) > (0))){
var left = (0);
var right = (me.tonsky.persistent_sorted_set._rpath.call(null,set.root,set.shift) + (1));
return me.tonsky.persistent_sorted_set.iter.call(null,set,left,right);
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.IChunk}
 * @implements {cljs.core.IReduce}
*/
me.tonsky.persistent_sorted_set.Chunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition0$ = 524306;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
me.tonsky.persistent_sorted_set.Chunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.end - self__.off);
});

me.tonsky.persistent_sorted_set.Chunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,i){
var self__ = this;
var this$__$1 = this;
return (self__.arr[(self__.off + i)]);
});

me.tonsky.persistent_sorted_set.Chunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,i,not_found){
var self__ = this;
var this$__$1 = this;
if((((i >= (0))) && ((i < (self__.end - self__.off))))){
return (self__.arr[(self__.off + i)]);
} else {
return not_found;
}
});

me.tonsky.persistent_sorted_set.Chunk.prototype.cljs$core$IChunk$ = cljs.core.PROTOCOL_SENTINEL;

me.tonsky.persistent_sorted_set.Chunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.off === self__.end)){
throw (new Error("-drop-first of empty chunk"));
} else {
return (new cljs.core.ArrayChunk(self__.arr,(self__.off + (1)),self__.end));
}
});

me.tonsky.persistent_sorted_set.Chunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
if((self__.off === self__.end)){
return f.call(null);
} else {
return cljs.core._reduce.call(null,cljs.core._drop_first.call(null,this$__$1),f,(self__.arr[self__.off]));
}
});

me.tonsky.persistent_sorted_set.Chunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var self__ = this;
var this$__$1 = this;
var val = start;
var n = self__.off;
while(true){
if((n < self__.end)){
var val_SINGLEQUOTE_ = f.call(null,val,(self__.arr[n]));
if(cljs.core.reduced_QMARK_.call(null,val_SINGLEQUOTE_)){
return cljs.core.deref.call(null,val_SINGLEQUOTE_);
} else {
var G__41026 = val_SINGLEQUOTE_;
var G__41027 = (n + (1));
val = G__41026;
n = G__41027;
continue;
}
} else {
return val;
}
break;
}
});

me.tonsky.persistent_sorted_set.Chunk.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"arr","arr",2115492975,null),new cljs.core.Symbol(null,"off","off",-2047994980,null),new cljs.core.Symbol(null,"end","end",1372345569,null)], null);
});

me.tonsky.persistent_sorted_set.Chunk.cljs$lang$type = true;

me.tonsky.persistent_sorted_set.Chunk.cljs$lang$ctorStr = "me.tonsky.persistent-sorted-set/Chunk";

me.tonsky.persistent_sorted_set.Chunk.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"me.tonsky.persistent-sorted-set/Chunk");
});

/**
 * Positional factory function for me.tonsky.persistent-sorted-set/Chunk.
 */
me.tonsky.persistent_sorted_set.__GT_Chunk = (function me$tonsky$persistent_sorted_set$__GT_Chunk(arr,off,end){
return (new me.tonsky.persistent_sorted_set.Chunk(arr,off,end));
});


/**
 * @interface
 */
me.tonsky.persistent_sorted_set.IIter = function(){};

me.tonsky.persistent_sorted_set._copy = (function me$tonsky$persistent_sorted_set$_copy(this$,left,right){
if(((!((this$ == null))) && (!((this$.me$tonsky$persistent_sorted_set$IIter$_copy$arity$3 == null))))){
return this$.me$tonsky$persistent_sorted_set$IIter$_copy$arity$3(this$,left,right);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (me.tonsky.persistent_sorted_set._copy[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,left,right);
} else {
var m__4244__auto____$1 = (me.tonsky.persistent_sorted_set._copy["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,left,right);
} else {
throw cljs.core.missing_protocol.call(null,"IIter.-copy",this$);
}
}
}
});


/**
* @constructor
 * @implements {me.tonsky.persistent_sorted_set.IIter}
 * @implements {me.tonsky.persistent_sorted_set.Object}
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IChunkedNext}
 * @implements {cljs.core.ISeq}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IChunkedSeq}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IReduce}
*/
me.tonsky.persistent_sorted_set.Iter = (function (set,left,right,keys,idx){
this.set = set;
this.left = left;
this.right = right;
this.keys = keys;
this.idx = idx;
this.cljs$lang$protocol_mask$partition0$ = 2309488832;
this.cljs$lang$protocol_mask$partition1$ = 1536;
});
me.tonsky.persistent_sorted_set.Iter.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_.call(null,this$);
});

me.tonsky.persistent_sorted_set.Iter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,cljs.core.seq.call(null,this$__$1));
});

me.tonsky.persistent_sorted_set.Iter.prototype.cljs$core$INext$_next$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keys)){
if(((self__.idx + (1)) < self__.keys.length)){
if(((self__.left + (1)) < self__.right)){
return (new me.tonsky.persistent_sorted_set.Iter(self__.set,(self__.left + (1)),self__.right,self__.keys,(self__.idx + (1))));
} else {
return null;
}
} else {
var left_SINGLEQUOTE_ = me.tonsky.persistent_sorted_set.next_path.call(null,self__.set,self__.left);
if(((cljs.core.not_EQ_.call(null,(-1),left_SINGLEQUOTE_)) && ((left_SINGLEQUOTE_ < self__.right)))){
return me.tonsky.persistent_sorted_set._copy.call(null,this$__$1,left_SINGLEQUOTE_,self__.right);
} else {
return null;
}
}
} else {
return null;
}
});

me.tonsky.persistent_sorted_set.Iter.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keys)){
return me.tonsky.persistent_sorted_set.riter.call(null,self__.set,me.tonsky.persistent_sorted_set.prev_path.call(null,self__.set,self__.left),me.tonsky.persistent_sorted_set.prev_path.call(null,self__.set,self__.right));
} else {
return null;
}
});

me.tonsky.persistent_sorted_set.Iter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return cljs.core.equiv_sequential.call(null,this$__$1,other);
});

me.tonsky.persistent_sorted_set.Iter.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
if((self__.keys == null)){
return f.call(null);
} else {
var first = cljs.core._first.call(null,this$__$1);
var temp__5722__auto__ = cljs.core._next.call(null,this$__$1);
if((temp__5722__auto__ == null)){
return first;
} else {
var next = temp__5722__auto__;
return cljs.core._reduce.call(null,next,f,first);
}
}
});

me.tonsky.persistent_sorted_set.Iter.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var self__ = this;
var this$__$1 = this;
var left__$1 = self__.left;
var keys__$1 = self__.keys;
var idx__$1 = self__.idx;
var acc = start;
while(true){
if((keys__$1 == null)){
return acc;
} else {
var new_acc = f.call(null,acc,(keys__$1[idx__$1]));
if(cljs.core.reduced_QMARK_.call(null,new_acc)){
return cljs.core.deref.call(null,new_acc);
} else {
if(((idx__$1 + (1)) < keys__$1.length)){
if(((left__$1 + (1)) < self__.right)){
var G__41096 = (left__$1 + (1));
var G__41097 = keys__$1;
var G__41098 = (idx__$1 + (1));
var G__41099 = new_acc;
left__$1 = G__41096;
keys__$1 = G__41097;
idx__$1 = G__41098;
acc = G__41099;
continue;
} else {
return new_acc;
}
} else {
var new_left = me.tonsky.persistent_sorted_set.next_path.call(null,self__.set,left__$1);
if(((!(((-1) === new_left))) && ((new_left < self__.right)))){
var G__41100 = new_left;
var G__41101 = me.tonsky.persistent_sorted_set.keys_for.call(null,self__.set,new_left);
var G__41102 = me.tonsky.persistent_sorted_set.path_get.call(null,new_left,(0));
var G__41103 = new_acc;
left__$1 = G__41100;
keys__$1 = G__41101;
idx__$1 = G__41102;
acc = G__41103;
continue;
} else {
return new_acc;
}

}
}
}
break;
}
});

me.tonsky.persistent_sorted_set.Iter.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keys)){
return (self__.keys[self__.idx]);
} else {
return null;
}
});

me.tonsky.persistent_sorted_set.Iter.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var or__3949__auto__ = cljs.core._next.call(null,this$__$1);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.List.EMPTY;
}
});

me.tonsky.persistent_sorted_set.Iter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keys)){
return this$__$1;
} else {
return null;
}
});

me.tonsky.persistent_sorted_set.Iter.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var end_idx = ((cljs.core._EQ_.call(null,(self__.left | me.tonsky.persistent_sorted_set.path_mask),(self__.right | me.tonsky.persistent_sorted_set.path_mask)))?(self__.right & me.tonsky.persistent_sorted_set.path_mask):self__.keys.length);
return (new me.tonsky.persistent_sorted_set.Chunk(self__.keys,self__.idx,end_idx));
});

me.tonsky.persistent_sorted_set.Iter.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var or__3949__auto__ = cljs.core._chunked_next.call(null,this$__$1);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.List.EMPTY;
}
});

me.tonsky.persistent_sorted_set.Iter.prototype.me$tonsky$persistent_sorted_set$IIter$ = cljs.core.PROTOCOL_SENTINEL;

me.tonsky.persistent_sorted_set.Iter.prototype.me$tonsky$persistent_sorted_set$IIter$_copy$arity$3 = (function (_,l,r){
var self__ = this;
var ___$1 = this;
return (new me.tonsky.persistent_sorted_set.Iter(self__.set,l,r,me.tonsky.persistent_sorted_set.keys_for.call(null,self__.set,l),me.tonsky.persistent_sorted_set.path_get.call(null,l,(0))));
});

me.tonsky.persistent_sorted_set.Iter.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var left_SINGLEQUOTE_ = me.tonsky.persistent_sorted_set.next_path.call(null,self__.set,(self__.left + ((self__.keys.length - self__.idx) - (1))));
if(((cljs.core.not_EQ_.call(null,(-1),left_SINGLEQUOTE_)) && ((left_SINGLEQUOTE_ < self__.right)))){
return me.tonsky.persistent_sorted_set._copy.call(null,this$__$1,left_SINGLEQUOTE_,self__.right);
} else {
return null;
}
});

me.tonsky.persistent_sorted_set.Iter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"set","set",1945134081,null),new cljs.core.Symbol(null,"left","left",1241415590,null),new cljs.core.Symbol(null,"right","right",1187949694,null),new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null);
});

me.tonsky.persistent_sorted_set.Iter.cljs$lang$type = true;

me.tonsky.persistent_sorted_set.Iter.cljs$lang$ctorStr = "me.tonsky.persistent-sorted-set/Iter";

me.tonsky.persistent_sorted_set.Iter.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"me.tonsky.persistent-sorted-set/Iter");
});

/**
 * Positional factory function for me.tonsky.persistent-sorted-set/Iter.
 */
me.tonsky.persistent_sorted_set.__GT_Iter = (function me$tonsky$persistent_sorted_set$__GT_Iter(set,left,right,keys,idx){
return (new me.tonsky.persistent_sorted_set.Iter(set,left,right,keys,idx));
});

me.tonsky.persistent_sorted_set.iter = (function me$tonsky$persistent_sorted_set$iter(set,left,right){
return (new me.tonsky.persistent_sorted_set.Iter(set,left,right,me.tonsky.persistent_sorted_set.keys_for.call(null,set,left),me.tonsky.persistent_sorted_set.path_get.call(null,left,(0))));
});

/**
* @constructor
 * @implements {me.tonsky.persistent_sorted_set.IIter}
 * @implements {me.tonsky.persistent_sorted_set.Object}
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.ISeq}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.ISequential}
*/
me.tonsky.persistent_sorted_set.ReverseIter = (function (set,left,right,keys,idx){
this.set = set;
this.left = left;
this.right = right;
this.keys = keys;
this.idx = idx;
this.cljs$lang$protocol_mask$partition0$ = 2308964544;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
me.tonsky.persistent_sorted_set.ReverseIter.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_.call(null,this$);
});

me.tonsky.persistent_sorted_set.ReverseIter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,cljs.core.seq.call(null,this$__$1));
});

me.tonsky.persistent_sorted_set.ReverseIter.prototype.cljs$core$INext$_next$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keys)){
if(((self__.idx - (1)) >= (0))){
if(((self__.right - (1)) > self__.left)){
return (new me.tonsky.persistent_sorted_set.ReverseIter(self__.set,self__.left,(self__.right - (1)),self__.keys,(self__.idx - (1))));
} else {
return null;
}
} else {
var right__$1 = me.tonsky.persistent_sorted_set.prev_path.call(null,self__.set,self__.right);
if(((cljs.core.not_EQ_.call(null,(-1),right__$1)) && ((right__$1 > self__.left)))){
return me.tonsky.persistent_sorted_set._copy.call(null,this$__$1,self__.left,right__$1);
} else {
return null;
}
}
} else {
return null;
}
});

me.tonsky.persistent_sorted_set.ReverseIter.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keys)){
var new_left = (((self__.left === (-1)))?(0):me.tonsky.persistent_sorted_set.next_path.call(null,self__.set,self__.left));
var new_right = me.tonsky.persistent_sorted_set.next_path.call(null,self__.set,self__.right);
var new_right__$1 = (((new_right === (-1)))?(self__.right + (1)):new_right);
return me.tonsky.persistent_sorted_set.iter.call(null,self__.set,new_left,new_right__$1);
} else {
return null;
}
});

me.tonsky.persistent_sorted_set.ReverseIter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return cljs.core.equiv_sequential.call(null,this$__$1,other);
});

me.tonsky.persistent_sorted_set.ReverseIter.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keys)){
return (self__.keys[self__.idx]);
} else {
return null;
}
});

me.tonsky.persistent_sorted_set.ReverseIter.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var or__3949__auto__ = cljs.core._next.call(null,this$__$1);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.List.EMPTY;
}
});

me.tonsky.persistent_sorted_set.ReverseIter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keys)){
return this$__$1;
} else {
return null;
}
});

me.tonsky.persistent_sorted_set.ReverseIter.prototype.me$tonsky$persistent_sorted_set$IIter$ = cljs.core.PROTOCOL_SENTINEL;

me.tonsky.persistent_sorted_set.ReverseIter.prototype.me$tonsky$persistent_sorted_set$IIter$_copy$arity$3 = (function (_,l,r){
var self__ = this;
var ___$1 = this;
return (new me.tonsky.persistent_sorted_set.ReverseIter(self__.set,l,r,me.tonsky.persistent_sorted_set.keys_for.call(null,self__.set,r),me.tonsky.persistent_sorted_set.path_get.call(null,r,(0))));
});

me.tonsky.persistent_sorted_set.ReverseIter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"set","set",1945134081,null),new cljs.core.Symbol(null,"left","left",1241415590,null),new cljs.core.Symbol(null,"right","right",1187949694,null),new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null);
});

me.tonsky.persistent_sorted_set.ReverseIter.cljs$lang$type = true;

me.tonsky.persistent_sorted_set.ReverseIter.cljs$lang$ctorStr = "me.tonsky.persistent-sorted-set/ReverseIter";

me.tonsky.persistent_sorted_set.ReverseIter.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"me.tonsky.persistent-sorted-set/ReverseIter");
});

/**
 * Positional factory function for me.tonsky.persistent-sorted-set/ReverseIter.
 */
me.tonsky.persistent_sorted_set.__GT_ReverseIter = (function me$tonsky$persistent_sorted_set$__GT_ReverseIter(set,left,right,keys,idx){
return (new me.tonsky.persistent_sorted_set.ReverseIter(set,left,right,keys,idx));
});

me.tonsky.persistent_sorted_set.riter = (function me$tonsky$persistent_sorted_set$riter(set,left,right){
return (new me.tonsky.persistent_sorted_set.ReverseIter(set,left,right,me.tonsky.persistent_sorted_set.keys_for.call(null,set,right),me.tonsky.persistent_sorted_set.path_get.call(null,right,(0))));
});
me.tonsky.persistent_sorted_set._distance = (function me$tonsky$persistent_sorted_set$_distance(node,left,right,level){
var idx_l = me.tonsky.persistent_sorted_set.path_get.call(null,left,level);
var idx_r = me.tonsky.persistent_sorted_set.path_get.call(null,right,level);
if((level > (0))){
if((idx_l === idx_r)){
return me.tonsky.persistent_sorted_set._distance.call(null,(node.pointers[idx_l]),left,right,(level - me.tonsky.persistent_sorted_set.level_shift));
} else {
var level__$1 = level;
var res = (idx_r - idx_l);
while(true){
if(((0) === level__$1)){
return res;
} else {
var G__41139 = (level__$1 - me.tonsky.persistent_sorted_set.level_shift);
var G__41140 = (res * me.tonsky.persistent_sorted_set.avg_len);
level__$1 = G__41139;
res = G__41140;
continue;
}
break;
}
}
} else {
return (idx_r - idx_l);
}
});
me.tonsky.persistent_sorted_set.distance = (function me$tonsky$persistent_sorted_set$distance(set,path_l,path_r){
if((path_l === path_r)){
return (0);
} else {
if(((path_l + (1)) === path_r)){
return (1);
} else {
if((me.tonsky.persistent_sorted_set.next_path.call(null,set,path_l) === path_r)){
return (1);
} else {
return me.tonsky.persistent_sorted_set._distance.call(null,set.root,path_l,path_r,set.shift);

}
}
}
});
me.tonsky.persistent_sorted_set.est_count = (function me$tonsky$persistent_sorted_set$est_count(iter){
return me.tonsky.persistent_sorted_set.distance.call(null,iter.set,iter.left,iter.right);
});
/**
 * Returns path to first element >= key,
 * or -1 if all elements in a set < key
 */
me.tonsky.persistent_sorted_set._seek = (function me$tonsky$persistent_sorted_set$_seek(set,key,comparator){
var node = set.root;
var path = (0);
var level = set.shift;
while(true){
var keys_l = me.tonsky.persistent_sorted_set.node_len.call(null,node);
if(((0) === level)){
var keys = node.keys;
var idx = me.tonsky.persistent_sorted_set.binary_search_l.call(null,comparator,keys,(keys_l - (1)),key);
if((keys_l === idx)){
return (-1);
} else {
return me.tonsky.persistent_sorted_set.path_set.call(null,path,(0),idx);
}
} else {
var keys = node.keys;
var idx = me.tonsky.persistent_sorted_set.binary_search_l.call(null,comparator,keys,(keys_l - (2)),key);
var G__41155 = (node.pointers[idx]);
var G__41156 = me.tonsky.persistent_sorted_set.path_set.call(null,path,level,idx);
var G__41157 = (level - me.tonsky.persistent_sorted_set.level_shift);
node = G__41155;
path = G__41156;
level = G__41157;
continue;
}
break;
}
});
/**
 * Returns path to the first element that is > key.
 * If all elements in a set are <= key, returns `(-rpath set) + 1`.
 * It’s a virtual path that is bigger than any path in a tree
 */
me.tonsky.persistent_sorted_set._rseek = (function me$tonsky$persistent_sorted_set$_rseek(set,key,comparator){
var node = set.root;
var path = (0);
var level = set.shift;
while(true){
var keys_l = me.tonsky.persistent_sorted_set.node_len.call(null,node);
if(((0) === level)){
var keys = node.keys;
var idx = me.tonsky.persistent_sorted_set.binary_search_r.call(null,comparator,keys,(keys_l - (1)),key);
return me.tonsky.persistent_sorted_set.path_set.call(null,path,(0),idx);
} else {
var keys = node.keys;
var idx = me.tonsky.persistent_sorted_set.binary_search_r.call(null,comparator,keys,(keys_l - (2)),key);
var G__41159 = (node.pointers[idx]);
var G__41160 = me.tonsky.persistent_sorted_set.path_set.call(null,path,level,idx);
var G__41161 = (level - me.tonsky.persistent_sorted_set.level_shift);
node = G__41159;
path = G__41160;
level = G__41161;
continue;
}
break;
}
});
me.tonsky.persistent_sorted_set._slice = (function me$tonsky$persistent_sorted_set$_slice(set,key_from,key_to,comparator){
var path = me.tonsky.persistent_sorted_set._seek.call(null,set,key_from,comparator);
if((path < (0))){
return null;
} else {
var till_path = me.tonsky.persistent_sorted_set._rseek.call(null,set,key_to,comparator);
if((till_path > path)){
return (new me.tonsky.persistent_sorted_set.Iter(set,path,till_path,me.tonsky.persistent_sorted_set.keys_for.call(null,set,path),me.tonsky.persistent_sorted_set.path_get.call(null,path,(0))));
} else {
return null;
}
}
});
me.tonsky.persistent_sorted_set.arr_map_inplace = (function me$tonsky$persistent_sorted_set$arr_map_inplace(f,arr){
var len = arr.length;
var i_41162 = (0);
while(true){
if((i_41162 < len)){
(arr[i_41162] = f.call(null,(arr[i_41162])));

var G__41163 = (i_41162 + (1));
i_41162 = G__41163;
continue;
} else {
}
break;
}

return arr;
});
/**
 * Splits `arr` into arrays of size between min-len and max-len,
 * trying to stick to (min+max)/2
 */
me.tonsky.persistent_sorted_set.arr_partition_approx = (function me$tonsky$persistent_sorted_set$arr_partition_approx(min_len,max_len,arr){
var chunk_len = me.tonsky.persistent_sorted_set.avg_len;
var len = arr.length;
var acc = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
if((len > (0))){
var pos_41164 = (0);
while(true){
var rest_41165 = (len - pos_41164);
if((rest_41165 <= max_len)){
cljs.core.conj_BANG_.call(null,acc,arr.slice(pos_41164));
} else {
if((rest_41165 >= (chunk_len + min_len))){
cljs.core.conj_BANG_.call(null,acc,arr.slice(pos_41164,(pos_41164 + chunk_len)));

var G__41166 = (pos_41164 + chunk_len);
pos_41164 = G__41166;
continue;
} else {
var piece_len_41167 = (rest_41165 >>> (1));
cljs.core.conj_BANG_.call(null,acc,arr.slice(pos_41164,(pos_41164 + piece_len_41167)));

var G__41168 = (pos_41164 + piece_len_41167);
pos_41164 = G__41168;
continue;

}
}
break;
}
} else {
}

return cljs.core.to_array.call(null,cljs.core.persistent_BANG_.call(null,acc));
});
me.tonsky.persistent_sorted_set.sorted_arr_distinct_QMARK_ = (function me$tonsky$persistent_sorted_set$sorted_arr_distinct_QMARK_(arr,cmp){
var al = arr.length;
if((al <= (1))){
return true;
} else {
var i = (1);
var p = (arr[(0)]);
while(true){
if((i >= al)){
return true;
} else {
var e = (arr[i]);
if(((0) === cmp.call(null,e,p))){
return false;
} else {
var G__41169 = (i + (1));
var G__41170 = e;
i = G__41169;
p = G__41170;
continue;
}
}
break;
}
}
});
/**
 * Filter out repetitive values in a sorted array.
 * Optimized for no-duplicates case
 */
me.tonsky.persistent_sorted_set.sorted_arr_distinct = (function me$tonsky$persistent_sorted_set$sorted_arr_distinct(arr,cmp){
if(cljs.core.truth_(me.tonsky.persistent_sorted_set.sorted_arr_distinct_QMARK_.call(null,arr,cmp))){
return arr;
} else {
var al = arr.length;
var acc = cljs.core.transient$.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(arr[(0)])], null));
var i = (1);
var p = (arr[(0)]);
while(true){
if((i >= al)){
return cljs.core.into_array.call(null,cljs.core.persistent_BANG_.call(null,acc));
} else {
var e = (arr[i]);
if(((0) === cmp.call(null,e,p))){
var G__41171 = acc;
var G__41172 = (i + (1));
var G__41173 = e;
acc = G__41171;
i = G__41172;
p = G__41173;
continue;
} else {
var G__41174 = cljs.core.conj_BANG_.call(null,acc,e);
var G__41175 = (i + (1));
var G__41176 = e;
acc = G__41174;
i = G__41175;
p = G__41176;
continue;
}
}
break;
}
}
});
/**
 * Analogue to [[clojure.core/conj]] with comparator that overrides the one stored in set.
 */
me.tonsky.persistent_sorted_set.conj = (function me$tonsky$persistent_sorted_set$conj(set,key,cmp){
var roots = me.tonsky.persistent_sorted_set.node_conj.call(null,set.root,cmp,key);
if((roots == null)){
return set;
} else {
if((roots.length === (1))){
return me.tonsky.persistent_sorted_set.alter_btset.call(null,set,(roots[(0)]),set.shift,(set.cnt + (1)));
} else {
return me.tonsky.persistent_sorted_set.alter_btset.call(null,set,(new me.tonsky.persistent_sorted_set.Node(me.tonsky.persistent_sorted_set.arrays.amap.call(null,me.tonsky.persistent_sorted_set.node_lim_key,roots),roots)),(set.shift + me.tonsky.persistent_sorted_set.level_shift),(set.cnt + (1)));

}
}
});
/**
 * Analogue to [[clojure.core/disj]] with comparator that overrides the one stored in set.
 */
me.tonsky.persistent_sorted_set.disj = (function me$tonsky$persistent_sorted_set$disj(set,key,cmp){
var new_roots = me.tonsky.persistent_sorted_set.node_disj.call(null,set.root,cmp,key,true,null,null);
if((new_roots == null)){
return set;
} else {
var new_root = (new_roots[(0)]);
if((((new_root instanceof me.tonsky.persistent_sorted_set.Node)) && (((1) === new_root.pointers.length)))){
return me.tonsky.persistent_sorted_set.alter_btset.call(null,set,(new_root.pointers[(0)]),(set.shift - me.tonsky.persistent_sorted_set.level_shift),(set.cnt - (1)));
} else {
return me.tonsky.persistent_sorted_set.alter_btset.call(null,set,new_root,set.shift,(set.cnt - (1)));
}
}
});
/**
 * An iterator for part of the set with provided boundaries.
 * `(slice set from to)` returns iterator for all Xs where from <= X <= to.
 * Optionally pass in comparator that will override the one that set uses. Supports efficient [[clojure.core/rseq]].
 */
me.tonsky.persistent_sorted_set.slice = (function me$tonsky$persistent_sorted_set$slice(var_args){
var G__41178 = arguments.length;
switch (G__41178) {
case 3:
return me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3 = (function (set,key_from,key_to){
return me.tonsky.persistent_sorted_set._slice.call(null,set,key_from,key_to,set.comparator);
});

me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$4 = (function (set,key_from,key_to,comparator){
return me.tonsky.persistent_sorted_set._slice.call(null,set,key_from,key_to,comparator);
});

me.tonsky.persistent_sorted_set.slice.cljs$lang$maxFixedArity = 4;

/**
 * A reverse iterator for part of the set with provided boundaries.
 * `(rslice set from to)` returns backwards iterator for all Xs where from <= X <= to.
 * Optionally pass in comparator that will override the one that set uses. Supports efficient [[clojure.core/rseq]].
 */
me.tonsky.persistent_sorted_set.rslice = (function me$tonsky$persistent_sorted_set$rslice(var_args){
var G__41181 = arguments.length;
switch (G__41181) {
case 2:
return me.tonsky.persistent_sorted_set.rslice.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return me.tonsky.persistent_sorted_set.rslice.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return me.tonsky.persistent_sorted_set.rslice.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

me.tonsky.persistent_sorted_set.rslice.cljs$core$IFn$_invoke$arity$2 = (function (set,key){
var G__41182 = me.tonsky.persistent_sorted_set._slice.call(null,set,key,key,set.comparator);
if((G__41182 == null)){
return null;
} else {
return cljs.core.rseq.call(null,G__41182);
}
});

me.tonsky.persistent_sorted_set.rslice.cljs$core$IFn$_invoke$arity$3 = (function (set,key_from,key_to){
var G__41183 = me.tonsky.persistent_sorted_set._slice.call(null,set,key_to,key_from,set.comparator);
if((G__41183 == null)){
return null;
} else {
return cljs.core.rseq.call(null,G__41183);
}
});

me.tonsky.persistent_sorted_set.rslice.cljs$core$IFn$_invoke$arity$4 = (function (set,key_from,key_to,comparator){
var G__41184 = me.tonsky.persistent_sorted_set._slice.call(null,set,key_to,key_from,comparator);
if((G__41184 == null)){
return null;
} else {
return cljs.core.rseq.call(null,G__41184);
}
});

me.tonsky.persistent_sorted_set.rslice.cljs$lang$maxFixedArity = 4;

/**
 * Fast path to create a set if you already have a sorted array of elements on your hands.
 */
me.tonsky.persistent_sorted_set.from_sorted_array = (function me$tonsky$persistent_sorted_set$from_sorted_array(cmp,arr){
var leaves = me.tonsky.persistent_sorted_set.arr_map_inplace.call(null,(function (p1__41186_SHARP_){
return (new me.tonsky.persistent_sorted_set.Leaf(p1__41186_SHARP_));
}),me.tonsky.persistent_sorted_set.arr_partition_approx.call(null,(16),(32),arr));
var current_level = leaves;
var shift = (0);
while(true){
var G__41188 = cljs.core.count.call(null,current_level);
switch (G__41188) {
case (0):
return (new me.tonsky.persistent_sorted_set.BTSet((new me.tonsky.persistent_sorted_set.Leaf([])),(0),(0),cmp,null,null));

break;
case (1):
return (new me.tonsky.persistent_sorted_set.BTSet(cljs.core.first.call(null,current_level),shift,arr.length,cmp,null,null));

break;
default:
var G__41193 = me.tonsky.persistent_sorted_set.arr_map_inplace.call(null,((function (current_level,shift,G__41188,leaves){
return (function (p1__41187_SHARP_){
return (new me.tonsky.persistent_sorted_set.Node(me.tonsky.persistent_sorted_set.arrays.amap.call(null,me.tonsky.persistent_sorted_set.node_lim_key,p1__41187_SHARP_),p1__41187_SHARP_));
});})(current_level,shift,G__41188,leaves))
,me.tonsky.persistent_sorted_set.arr_partition_approx.call(null,(16),(32),current_level));
var G__41194 = (shift + me.tonsky.persistent_sorted_set.level_shift);
current_level = G__41193;
shift = G__41194;
continue;

}
break;
}
});
/**
 * Create a set with custom comparator and a collection of keys. Useful when you don’t want to call [[clojure.core/apply]] on [[sorted-set-by]].
 */
me.tonsky.persistent_sorted_set.from_sequential = (function me$tonsky$persistent_sorted_set$from_sequential(cmp,seq){
var arr = me.tonsky.persistent_sorted_set.sorted_arr_distinct.call(null,me.tonsky.persistent_sorted_set.arrays.asort.call(null,cljs.core.into_array.call(null,seq),cmp),cmp);
return me.tonsky.persistent_sorted_set.from_sorted_array.call(null,cmp,arr);
});
me.tonsky.persistent_sorted_set.sorted_set_by = (function me$tonsky$persistent_sorted_set$sorted_set_by(var_args){
var G__41199 = arguments.length;
switch (G__41199) {
case 1:
return me.tonsky.persistent_sorted_set.sorted_set_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___41203 = arguments.length;
var i__4532__auto___41204 = (0);
while(true){
if((i__4532__auto___41204 < len__4531__auto___41203)){
args_arr__4546__auto__.push((arguments[i__4532__auto___41204]));

var G__41205 = (i__4532__auto___41204 + (1));
i__4532__auto___41204 = G__41205;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((1)),(0),null));
return me.tonsky.persistent_sorted_set.sorted_set_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4547__auto__);

}
});

me.tonsky.persistent_sorted_set.sorted_set_by.cljs$core$IFn$_invoke$arity$1 = (function (cmp){
return (new me.tonsky.persistent_sorted_set.BTSet((new me.tonsky.persistent_sorted_set.Leaf([])),(0),(0),cmp,null,null));
});

me.tonsky.persistent_sorted_set.sorted_set_by.cljs$core$IFn$_invoke$arity$variadic = (function (cmp,keys){
return me.tonsky.persistent_sorted_set.from_sequential.call(null,cmp,keys);
});

/** @this {Function} */
me.tonsky.persistent_sorted_set.sorted_set_by.cljs$lang$applyTo = (function (seq41197){
var G__41198 = cljs.core.first.call(null,seq41197);
var seq41197__$1 = cljs.core.next.call(null,seq41197);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41198,seq41197__$1);
});

me.tonsky.persistent_sorted_set.sorted_set_by.cljs$lang$maxFixedArity = (1);

me.tonsky.persistent_sorted_set.sorted_set = (function me$tonsky$persistent_sorted_set$sorted_set(var_args){
var G__41210 = arguments.length;
switch (G__41210) {
case 0:
return me.tonsky.persistent_sorted_set.sorted_set.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___41212 = arguments.length;
var i__4532__auto___41213 = (0);
while(true){
if((i__4532__auto___41213 < len__4531__auto___41212)){
args_arr__4546__auto__.push((arguments[i__4532__auto___41213]));

var G__41215 = (i__4532__auto___41213 + (1));
i__4532__auto___41213 = G__41215;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((0)),(0),null));
return me.tonsky.persistent_sorted_set.sorted_set.cljs$core$IFn$_invoke$arity$variadic(argseq__4547__auto__);

}
});

me.tonsky.persistent_sorted_set.sorted_set.cljs$core$IFn$_invoke$arity$0 = (function (){
return me.tonsky.persistent_sorted_set.sorted_set_by.call(null,cljs.core.compare);
});

me.tonsky.persistent_sorted_set.sorted_set.cljs$core$IFn$_invoke$arity$variadic = (function (keys){
return me.tonsky.persistent_sorted_set.from_sequential.call(null,cljs.core.compare,keys);
});

/** @this {Function} */
me.tonsky.persistent_sorted_set.sorted_set.cljs$lang$applyTo = (function (seq41209){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41209));
});

me.tonsky.persistent_sorted_set.sorted_set.cljs$lang$maxFixedArity = (0);


//# sourceMappingURL=persistent_sorted_set.js.map?rel=1563552868440
