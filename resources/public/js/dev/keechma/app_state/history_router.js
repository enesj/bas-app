// Compiled by ClojureScript 1.10.339 {}
goog.provide('keechma.app_state.history_router');
goog.require('cljs.core');
goog.require('keechma.app_state.core');
goog.require('router.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('goog.history.Event');
goog.require('goog.history.Html5History');
goog.require('goog.Uri');
keechma.app_state.history_router.supported_redirect_actions = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"push","push",799791267),null,new cljs.core.Keyword(null,"replace","replace",-786587770),null,new cljs.core.Keyword(null,"back","back",-417520012),null], null), null);
keechma.app_state.history_router.get_redirect_action = (function keechma$app_state$history_router$get_redirect_action(action){
if(cljs.core.contains_QMARK_.call(null,keechma.app_state.history_router.supported_redirect_actions,action)){
return action;
} else {
return new cljs.core.Keyword(null,"push","push",799791267);
}
});
keechma.app_state.history_router.make_urlchange_dispatcher = (function keechma$app_state$history_router$make_urlchange_dispatcher(){
var handlers = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var main_handler = ((function (handlers){
return (function (_){
var seq__70142 = cljs.core.seq.call(null,cljs.core.deref.call(null,handlers));
var chunk__70143 = null;
var count__70144 = (0);
var i__70145 = (0);
while(true){
if((i__70145 < count__70144)){
var h = cljs.core._nth.call(null,chunk__70143,i__70145);
h.call(null,location.href);


var G__70154 = seq__70142;
var G__70155 = chunk__70143;
var G__70156 = count__70144;
var G__70157 = (i__70145 + (1));
seq__70142 = G__70154;
chunk__70143 = G__70155;
count__70144 = G__70156;
i__70145 = G__70157;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__70142);
if(temp__5720__auto__){
var seq__70142__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70142__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__70142__$1);
var G__70158 = cljs.core.chunk_rest.call(null,seq__70142__$1);
var G__70159 = c__4351__auto__;
var G__70160 = cljs.core.count.call(null,c__4351__auto__);
var G__70161 = (0);
seq__70142 = G__70158;
chunk__70143 = G__70159;
count__70144 = G__70160;
i__70145 = G__70161;
continue;
} else {
var h = cljs.core.first.call(null,seq__70142__$1);
h.call(null,location.href);


var G__70162 = cljs.core.next.call(null,seq__70142__$1);
var G__70163 = null;
var G__70164 = (0);
var G__70165 = (0);
seq__70142 = G__70162;
chunk__70143 = G__70163;
count__70144 = G__70164;
i__70145 = G__70165;
continue;
}
} else {
return null;
}
}
break;
}
});})(handlers))
;
var bind_main_handler = ((function (handlers,main_handler){
return (function (){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,cljs.core.deref.call(null,handlers)))){
return window.addEventListener("popstate",main_handler);
} else {
return null;
}
});})(handlers,main_handler))
;
var unbind_main_handler = ((function (handlers,main_handler,bind_main_handler){
return (function (){
if((cljs.core.count.call(null,cljs.core.deref.call(null,handlers)) === (0))){
return window.removeEventListener("popstate",main_handler);
} else {
return null;
}
});})(handlers,main_handler,bind_main_handler))
;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"handlers-count","handlers-count",70073577),((function (handlers,main_handler,bind_main_handler,unbind_main_handler){
return (function (){
return cljs.core.count.call(null,cljs.core.deref.call(null,handlers));
});})(handlers,main_handler,bind_main_handler,unbind_main_handler))
,new cljs.core.Keyword(null,"bind","bind",-113428417),((function (handlers,main_handler,bind_main_handler,unbind_main_handler){
return (function (handler){
cljs.core.swap_BANG_.call(null,handlers,cljs.core.conj,handler);

return bind_main_handler.call(null);
});})(handlers,main_handler,bind_main_handler,unbind_main_handler))
,new cljs.core.Keyword(null,"unbind","unbind",716905720),((function (handlers,main_handler,bind_main_handler,unbind_main_handler){
return (function (handler){
cljs.core.swap_BANG_.call(null,handlers,((function (handlers,main_handler,bind_main_handler,unbind_main_handler){
return (function (h){
return cljs.core.filter.call(null,((function (handlers,main_handler,bind_main_handler,unbind_main_handler){
return (function (p1__70141_SHARP_){
return cljs.core.not_EQ_.call(null,handler,p1__70141_SHARP_);
});})(handlers,main_handler,bind_main_handler,unbind_main_handler))
,h);
});})(handlers,main_handler,bind_main_handler,unbind_main_handler))
);

return unbind_main_handler.call(null);
});})(handlers,main_handler,bind_main_handler,unbind_main_handler))
,new cljs.core.Keyword(null,"replace","replace",-786587770),((function (handlers,main_handler,bind_main_handler,unbind_main_handler){
return (function (href){
history.replaceState(null,"",href);

var seq__70146 = cljs.core.seq.call(null,cljs.core.deref.call(null,handlers));
var chunk__70147 = null;
var count__70148 = (0);
var i__70149 = (0);
while(true){
if((i__70149 < count__70148)){
var h = cljs.core._nth.call(null,chunk__70147,i__70149);
h.call(null,href);


var G__70166 = seq__70146;
var G__70167 = chunk__70147;
var G__70168 = count__70148;
var G__70169 = (i__70149 + (1));
seq__70146 = G__70166;
chunk__70147 = G__70167;
count__70148 = G__70168;
i__70149 = G__70169;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__70146);
if(temp__5720__auto__){
var seq__70146__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70146__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__70146__$1);
var G__70170 = cljs.core.chunk_rest.call(null,seq__70146__$1);
var G__70171 = c__4351__auto__;
var G__70172 = cljs.core.count.call(null,c__4351__auto__);
var G__70173 = (0);
seq__70146 = G__70170;
chunk__70147 = G__70171;
count__70148 = G__70172;
i__70149 = G__70173;
continue;
} else {
var h = cljs.core.first.call(null,seq__70146__$1);
h.call(null,href);


var G__70174 = cljs.core.next.call(null,seq__70146__$1);
var G__70175 = null;
var G__70176 = (0);
var G__70177 = (0);
seq__70146 = G__70174;
chunk__70147 = G__70175;
count__70148 = G__70176;
i__70149 = G__70177;
continue;
}
} else {
return null;
}
}
break;
}
});})(handlers,main_handler,bind_main_handler,unbind_main_handler))
,new cljs.core.Keyword(null,"push","push",799791267),((function (handlers,main_handler,bind_main_handler,unbind_main_handler){
return (function (href){
history.pushState(null,"",href);

var seq__70150 = cljs.core.seq.call(null,cljs.core.deref.call(null,handlers));
var chunk__70151 = null;
var count__70152 = (0);
var i__70153 = (0);
while(true){
if((i__70153 < count__70152)){
var h = cljs.core._nth.call(null,chunk__70151,i__70153);
h.call(null,href);


var G__70178 = seq__70150;
var G__70179 = chunk__70151;
var G__70180 = count__70152;
var G__70181 = (i__70153 + (1));
seq__70150 = G__70178;
chunk__70151 = G__70179;
count__70152 = G__70180;
i__70153 = G__70181;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__70150);
if(temp__5720__auto__){
var seq__70150__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70150__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__70150__$1);
var G__70182 = cljs.core.chunk_rest.call(null,seq__70150__$1);
var G__70183 = c__4351__auto__;
var G__70184 = cljs.core.count.call(null,c__4351__auto__);
var G__70185 = (0);
seq__70150 = G__70182;
chunk__70151 = G__70183;
count__70152 = G__70184;
i__70153 = G__70185;
continue;
} else {
var h = cljs.core.first.call(null,seq__70150__$1);
h.call(null,href);


var G__70186 = cljs.core.next.call(null,seq__70150__$1);
var G__70187 = null;
var G__70188 = (0);
var G__70189 = (0);
seq__70150 = G__70186;
chunk__70151 = G__70187;
count__70152 = G__70188;
i__70153 = G__70189;
continue;
}
} else {
return null;
}
}
break;
}
});})(handlers,main_handler,bind_main_handler,unbind_main_handler))
], null);
});
keechma.app_state.history_router.urlchange_dispatcher = keechma.app_state.history_router.make_urlchange_dispatcher.call(null);
keechma.app_state.history_router.url_prefix = (function keechma$app_state$history_router$url_prefix(base_href){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.origin),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_href)].join('');
});
keechma.app_state.history_router.route_url = (function keechma$app_state$history_router$route_url(url,base_href){
var prefix = keechma.app_state.history_router.url_prefix.call(null,base_href);
return cljs.core.first.call(null,clojure.string.split.call(null,cljs.core.subs.call(null,url,cljs.core.count.call(null,prefix),cljs.core.count.call(null,url)),/#/));
});
keechma.app_state.history_router.link_QMARK_ = (function keechma$app_state$history_router$link_QMARK_(el){
var and__3938__auto__ = el.href;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.call(null,"a",clojure.string.lower_case.call(null,el.tagName));
} else {
return and__3938__auto__;
}
});
keechma.app_state.history_router.link_el = (function keechma$app_state$history_router$link_el(el){
var current_el = el;
while(true){
if(cljs.core.truth_(keechma.app_state.history_router.link_QMARK_.call(null,current_el))){
return current_el;
} else {
var temp__5720__auto__ = current_el.parentNode;
if(cljs.core.truth_(temp__5720__auto__)){
var parent = temp__5720__auto__;
var G__70190 = parent;
current_el = G__70190;
continue;
} else {
return null;
}
}
break;
}
});
keechma.app_state.history_router.current_target_self_QMARK_ = (function keechma$app_state$history_router$current_target_self_QMARK_(el){
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["",null,"_self",null], null), null),el.target);
});
keechma.app_state.history_router.left_button_clicked_QMARK_ = (function keechma$app_state$history_router$left_button_clicked_QMARK_(e){
return cljs.core._EQ_.call(null,(0),e.button);
});
keechma.app_state.history_router.mod_key_pressed_QMARK_ = (function keechma$app_state$history_router$mod_key_pressed_QMARK_(e){
var or__3949__auto__ = e.altKey;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = e.shiftKey;
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = e.ctrlKey;
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return e.metaKey;
}
}
}
});
keechma.app_state.history_router.link_has_prefixed_url_QMARK_ = (function keechma$app_state$history_router$link_has_prefixed_url_QMARK_(el,base_href){
return clojure.string.starts_with_QMARK_.call(null,el.href,keechma.app_state.history_router.url_prefix.call(null,base_href));
});
keechma.app_state.history_router.same_href_QMARK_ = (function keechma$app_state$history_router$same_href_QMARK_(el){
return cljs.core._EQ_.call(null,el.href,location.href);
});
keechma.app_state.history_router.should_href_pass_through_QMARK_ = (function keechma$app_state$history_router$should_href_pass_through_QMARK_(href){
var vec__70191 = clojure.string.split.call(null,location.href,/#/);
var current = cljs.core.nth.call(null,vec__70191,(0),null);
var current_hash = cljs.core.nth.call(null,vec__70191,(1),null);
var vec__70194 = clojure.string.split.call(null,href,/#/);
var next = cljs.core.nth.call(null,vec__70194,(0),null);
var next_hash = cljs.core.nth.call(null,vec__70194,(1),null);
return ((cljs.core._EQ_.call(null,current,next)) && (cljs.core.not_EQ_.call(null,current_hash,next_hash)));
});
keechma.app_state.history_router.make_url = (function keechma$app_state$history_router$make_url(routes,base_href,params){
var hash = location.hash;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_href),cljs.core.str.cljs$core$IFn$_invoke$arity$1(router.core.map__GT_url.call(null,routes,params)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join('');
});
keechma.app_state.history_router.add_trailing_slash = (function keechma$app_state$history_router$add_trailing_slash(base_href){
if(clojure.string.ends_with_QMARK_.call(null,base_href,"/")){
return base_href;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_href),"/"].join('');
}
});
keechma.app_state.history_router.add_leading_slash = (function keechma$app_state$history_router$add_leading_slash(base_href){
if(clojure.string.starts_with_QMARK_.call(null,base_href,"/")){
return base_href;
} else {
return ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_href)].join('');
}
});
keechma.app_state.history_router.process_base_href = (function keechma$app_state$history_router$process_base_href(base_href){
return keechma.app_state.history_router.add_leading_slash.call(null,keechma.app_state.history_router.add_trailing_slash.call(null,base_href));
});
keechma.app_state.history_router.link_has_data_replace_state_QMARK_ = (function keechma$app_state$history_router$link_has_data_replace_state_QMARK_(el){
var and__3938__auto__ = keechma.app_state.history_router.link_QMARK_.call(null,el);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.boolean$.call(null,el.getAttribute("data-replace-state"));
} else {
return and__3938__auto__;
}
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
 * @implements {keechma.app_state.core.IRouter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
keechma.app_state.history_router.HistoryRouter = (function (routes,routes_chan,base_href,app_db,__meta,__extmap,__hash){
this.routes = routes;
this.routes_chan = routes_chan;
this.base_href = base_href;
this.app_db = app_db;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k70198,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__70202 = k70198;
var G__70202__$1 = (((G__70202 instanceof cljs.core.Keyword))?G__70202.fqn:null);
switch (G__70202__$1) {
case "routes":
return self__.routes;

break;
case "routes-chan":
return self__.routes_chan;

break;
case "base-href":
return self__.base_href;

break;
case "app-db":
return self__.app_db;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k70198,else__4206__auto__);

}
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4218__auto__,pr_pair__4220__auto__,"#keechma.app-state.history-router.HistoryRouter{",", ","}",opts__4219__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes","routes",457900162),self__.routes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),self__.routes_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"base-href","base-href",564187357),self__.base_href],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-db","app-db",865606302),self__.app_db],null))], null),self__.__extmap));
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__70197){
var self__ = this;
var G__70197__$1 = this;
return (new cljs.core.RecordIter((0),G__70197__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),new cljs.core.Keyword(null,"base-href","base-href",564187357),new cljs.core.Keyword(null,"app-db","app-db",865606302)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new keechma.app_state.history_router.HistoryRouter(self__.routes,self__.routes_chan,self__.base_href,self__.app_db,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

keechma.app_state.history_router.HistoryRouter.prototype.keechma$app_state$core$IRouter$ = cljs.core.PROTOCOL_SENTINEL;

keechma.app_state.history_router.HistoryRouter.prototype.keechma$app_state$core$IRouter$start_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var handler = ((function (this$__$1){
return (function (href){
return cljs.core.async.put_BANG_.call(null,self__.routes_chan,router.core.url__GT_map.call(null,self__.routes,keechma.app_state.history_router.route_url.call(null,href,self__.base_href)));
});})(this$__$1))
;
new cljs.core.Keyword(null,"bind","bind",-113428417).cljs$core$IFn$_invoke$arity$1(keechma.app_state.history_router.urlchange_dispatcher).call(null,handler);

cljs.core.swap_BANG_.call(null,self__.app_db,cljs.core.assoc,new cljs.core.Keyword(null,"route","route",329891309),router.core.url__GT_map.call(null,self__.routes,keechma.app_state.history_router.route_url.call(null,location.href,self__.base_href)));

return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"urlchange-handler","urlchange-handler",-206381863),handler);
});

keechma.app_state.history_router.HistoryRouter.prototype.keechma$app_state$core$IRouter$stop_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"unbind","unbind",716905720).cljs$core$IFn$_invoke$arity$1(keechma.app_state.history_router.urlchange_dispatcher).call(null,new cljs.core.Keyword(null,"urlchange-handler","urlchange-handler",-206381863).cljs$core$IFn$_invoke$arity$1(this$__$1));
});

keechma.app_state.history_router.HistoryRouter.prototype.keechma$app_state$core$IRouter$redirect_BANG_$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return this$__$1.keechma$app_state$core$IRouter$redirect_BANG_$arity$3(null,params,new cljs.core.Keyword(null,"push","push",799791267));
});

keechma.app_state.history_router.HistoryRouter.prototype.keechma$app_state$core$IRouter$redirect_BANG_$arity$3 = (function (this$,params,action){
var self__ = this;
var this$__$1 = this;
var redirect_action = keechma.app_state.history_router.get_redirect_action.call(null,action);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"back","back",-417520012),redirect_action)){
return history.back();
} else {
var redirect_fn = cljs.core.get.call(null,keechma.app_state.history_router.urlchange_dispatcher,redirect_action);
return redirect_fn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.origin),cljs.core.str.cljs$core$IFn$_invoke$arity$1(keechma.app_state.history_router.make_url.call(null,self__.routes,self__.base_href,params))].join(''));
}
});

keechma.app_state.history_router.HistoryRouter.prototype.keechma$app_state$core$IRouter$wrap_component$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var click_handler = ((function (this$__$1){
return (function (e){
var temp__5720__auto__ = keechma.app_state.history_router.link_el.call(null,e.target);
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
var href = el.href;
if(cljs.core.truth_((function (){var and__3938__auto__ = keechma.app_state.history_router.current_target_self_QMARK_.call(null,el);
if(cljs.core.truth_(and__3938__auto__)){
var and__3938__auto____$1 = keechma.app_state.history_router.left_button_clicked_QMARK_.call(null,e);
if(cljs.core.truth_(and__3938__auto____$1)){
var and__3938__auto____$2 = cljs.core.not.call(null,keechma.app_state.history_router.mod_key_pressed_QMARK_.call(null,e));
if(and__3938__auto____$2){
return keechma.app_state.history_router.link_has_prefixed_url_QMARK_.call(null,el,self__.base_href);
} else {
return and__3938__auto____$2;
}
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})())){
if(cljs.core.truth_(keechma.app_state.history_router.should_href_pass_through_QMARK_.call(null,href))){
return null;
} else {
var redirect_fn = cljs.core.get.call(null,keechma.app_state.history_router.urlchange_dispatcher,(cljs.core.truth_(keechma.app_state.history_router.link_has_data_replace_state_QMARK_.call(null,el))?new cljs.core.Keyword(null,"replace","replace",-786587770):new cljs.core.Keyword(null,"push","push",799791267)));
redirect_fn.call(null,href);

e.preventDefault();

return e.stopPropagation();
}
} else {
return null;
}
} else {
return null;
}
});})(this$__$1))
;
return ((function (click_handler,this$__$1){
return (function() { 
var G__70208__delegate = function (children){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),click_handler], null)], null),children);
};
var G__70208 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__70209__i = 0, G__70209__a = new Array(arguments.length -  0);
while (G__70209__i < G__70209__a.length) {G__70209__a[G__70209__i] = arguments[G__70209__i + 0]; ++G__70209__i;}
  children = new cljs.core.IndexedSeq(G__70209__a,0,null);
} 
return G__70208__delegate.call(this,children);};
G__70208.cljs$lang$maxFixedArity = 0;
G__70208.cljs$lang$applyTo = (function (arglist__70210){
var children = cljs.core.seq(arglist__70210);
return G__70208__delegate(children);
});
G__70208.cljs$core$IFn$_invoke$arity$variadic = G__70208__delegate;
return G__70208;
})()
;
;})(click_handler,this$__$1))
});

keechma.app_state.history_router.HistoryRouter.prototype.keechma$app_state$core$IRouter$url$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return keechma.app_state.history_router.make_url.call(null,self__.routes,self__.base_href,params);
});

keechma.app_state.history_router.HistoryRouter.prototype.keechma$app_state$core$IRouter$linkable_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return true;
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-402337099 ^ cljs.core.hash_unordered_coll.call(null,coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
.call(null,this__4199__auto____$1);
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this70199,other70200){
var self__ = this;
var this70199__$1 = this;
return ((!((other70200 == null))) && ((this70199__$1.constructor === other70200.constructor)) && (cljs.core._EQ_.call(null,this70199__$1.routes,other70200.routes)) && (cljs.core._EQ_.call(null,this70199__$1.routes_chan,other70200.routes_chan)) && (cljs.core._EQ_.call(null,this70199__$1.base_href,other70200.base_href)) && (cljs.core._EQ_.call(null,this70199__$1.app_db,other70200.app_db)) && (cljs.core._EQ_.call(null,this70199__$1.__extmap,other70200.__extmap)));
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"routes","routes",457900162),null,new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),null,new cljs.core.Keyword(null,"base-href","base-href",564187357),null,new cljs.core.Keyword(null,"app-db","app-db",865606302),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new keechma.app_state.history_router.HistoryRouter(self__.routes,self__.routes_chan,self__.base_href,self__.app_db,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4213__auto__)),null));
}
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__70197){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__70203 = cljs.core.keyword_identical_QMARK_;
var expr__70204 = k__4211__auto__;
if(cljs.core.truth_(pred__70203.call(null,new cljs.core.Keyword(null,"routes","routes",457900162),expr__70204))){
return (new keechma.app_state.history_router.HistoryRouter(G__70197,self__.routes_chan,self__.base_href,self__.app_db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__70203.call(null,new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),expr__70204))){
return (new keechma.app_state.history_router.HistoryRouter(self__.routes,G__70197,self__.base_href,self__.app_db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__70203.call(null,new cljs.core.Keyword(null,"base-href","base-href",564187357),expr__70204))){
return (new keechma.app_state.history_router.HistoryRouter(self__.routes,self__.routes_chan,G__70197,self__.app_db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__70203.call(null,new cljs.core.Keyword(null,"app-db","app-db",865606302),expr__70204))){
return (new keechma.app_state.history_router.HistoryRouter(self__.routes,self__.routes_chan,self__.base_href,G__70197,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.app_state.history_router.HistoryRouter(self__.routes,self__.routes_chan,self__.base_href,self__.app_db,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4211__auto__,G__70197),null));
}
}
}
}
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"routes","routes",457900162),self__.routes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),self__.routes_chan,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"base-href","base-href",564187357),self__.base_href,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"app-db","app-db",865606302),self__.app_db,null))], null),self__.__extmap));
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__70197){
var self__ = this;
var this__4202__auto____$1 = this;
return (new keechma.app_state.history_router.HistoryRouter(self__.routes,self__.routes_chan,self__.base_href,self__.app_db,G__70197,self__.__extmap,self__.__hash));
});

keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4209__auto__,(0)),cljs.core._nth.call(null,entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

keechma.app_state.history_router.HistoryRouter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"routes-chan","routes-chan",-1286759973,null),new cljs.core.Symbol(null,"base-href","base-href",-2090248412,null),new cljs.core.Symbol(null,"app-db","app-db",-1788829467,null)], null);
});

keechma.app_state.history_router.HistoryRouter.cljs$lang$type = true;

keechma.app_state.history_router.HistoryRouter.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"keechma.app-state.history-router/HistoryRouter",null,(1),null));
});

keechma.app_state.history_router.HistoryRouter.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write.call(null,writer__4241__auto__,"keechma.app-state.history-router/HistoryRouter");
});

/**
 * Positional factory function for keechma.app-state.history-router/HistoryRouter.
 */
keechma.app_state.history_router.__GT_HistoryRouter = (function keechma$app_state$history_router$__GT_HistoryRouter(routes,routes_chan,base_href,app_db){
return (new keechma.app_state.history_router.HistoryRouter(routes,routes_chan,base_href,app_db,null,null,null));
});

/**
 * Factory function for keechma.app-state.history-router/HistoryRouter, taking a map of keywords to field values.
 */
keechma.app_state.history_router.map__GT_HistoryRouter = (function keechma$app_state$history_router$map__GT_HistoryRouter(G__70201){
var extmap__4236__auto__ = (function (){var G__70206 = cljs.core.dissoc.call(null,G__70201,new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),new cljs.core.Keyword(null,"base-href","base-href",564187357),new cljs.core.Keyword(null,"app-db","app-db",865606302));
if(cljs.core.record_QMARK_.call(null,G__70201)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__70206);
} else {
return G__70206;
}
})();
return (new keechma.app_state.history_router.HistoryRouter(new cljs.core.Keyword(null,"routes","routes",457900162).cljs$core$IFn$_invoke$arity$1(G__70201),new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796).cljs$core$IFn$_invoke$arity$1(G__70201),new cljs.core.Keyword(null,"base-href","base-href",564187357).cljs$core$IFn$_invoke$arity$1(G__70201),new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(G__70201),null,cljs.core.not_empty.call(null,extmap__4236__auto__),null));
});

keechma.app_state.history_router.constructor$ = (function keechma$app_state$history_router$constructor(routes,routes_chan,state){
var base_href = keechma.app_state.history_router.process_base_href.call(null,(function (){var or__3949__auto__ = new cljs.core.Keyword(null,"base-href","base-href",564187357).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "/";
}
})());
return keechma.app_state.core.start_BANG_.call(null,keechma.app_state.history_router.__GT_HistoryRouter.call(null,router.core.expand_routes.call(null,routes),routes_chan,base_href,new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(state)));
});

//# sourceMappingURL=history_router.js.map?rel=1563552893243
