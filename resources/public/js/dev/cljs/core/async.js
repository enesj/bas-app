// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30453 = arguments.length;
switch (G__30453) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30454 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30454 = (function (f,blockable,meta30455){
this.f = f;
this.blockable = blockable;
this.meta30455 = meta30455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30456,meta30455__$1){
var self__ = this;
var _30456__$1 = this;
return (new cljs.core.async.t_cljs$core$async30454(self__.f,self__.blockable,meta30455__$1));
});

cljs.core.async.t_cljs$core$async30454.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30456){
var self__ = this;
var _30456__$1 = this;
return self__.meta30455;
});

cljs.core.async.t_cljs$core$async30454.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30454.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30454.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30454.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30454.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30455","meta30455",-2017432630,null)], null);
});

cljs.core.async.t_cljs$core$async30454.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30454.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30454";

cljs.core.async.t_cljs$core$async30454.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async30454");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30454.
 */
cljs.core.async.__GT_t_cljs$core$async30454 = (function cljs$core$async$__GT_t_cljs$core$async30454(f__$1,blockable__$1,meta30455){
return (new cljs.core.async.t_cljs$core$async30454(f__$1,blockable__$1,meta30455));
});

}

return (new cljs.core.async.t_cljs$core$async30454(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30476 = arguments.length;
switch (G__30476) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30479 = arguments.length;
switch (G__30479) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30482 = arguments.length;
switch (G__30482) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30484 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30484);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30484,ret){
return (function (){
return fn1.call(null,val_30484);
});})(val_30484,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30486 = arguments.length;
switch (G__30486) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___30488 = n;
var x_30489 = (0);
while(true){
if((x_30489 < n__4408__auto___30488)){
(a[x_30489] = (0));

var G__30490 = (x_30489 + (1));
x_30489 = G__30490;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__30491 = (i + (1));
i = G__30491;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30492 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30492 = (function (flag,meta30493){
this.flag = flag;
this.meta30493 = meta30493;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30494,meta30493__$1){
var self__ = this;
var _30494__$1 = this;
return (new cljs.core.async.t_cljs$core$async30492(self__.flag,meta30493__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30492.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30494){
var self__ = this;
var _30494__$1 = this;
return self__.meta30493;
});})(flag))
;

cljs.core.async.t_cljs$core$async30492.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30492.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30492.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30492.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30492.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30493","meta30493",-612488592,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30492.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30492.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30492";

cljs.core.async.t_cljs$core$async30492.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async30492");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30492.
 */
cljs.core.async.__GT_t_cljs$core$async30492 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30492(flag__$1,meta30493){
return (new cljs.core.async.t_cljs$core$async30492(flag__$1,meta30493));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30492(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30495 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30495 = (function (flag,cb,meta30496){
this.flag = flag;
this.cb = cb;
this.meta30496 = meta30496;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30497,meta30496__$1){
var self__ = this;
var _30497__$1 = this;
return (new cljs.core.async.t_cljs$core$async30495(self__.flag,self__.cb,meta30496__$1));
});

cljs.core.async.t_cljs$core$async30495.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30497){
var self__ = this;
var _30497__$1 = this;
return self__.meta30496;
});

cljs.core.async.t_cljs$core$async30495.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30495.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async30495.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30495.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30495.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30496","meta30496",-1553383417,null)], null);
});

cljs.core.async.t_cljs$core$async30495.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30495.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30495";

cljs.core.async.t_cljs$core$async30495.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async30495");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30495.
 */
cljs.core.async.__GT_t_cljs$core$async30495 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30495(flag__$1,cb__$1,meta30496){
return (new cljs.core.async.t_cljs$core$async30495(flag__$1,cb__$1,meta30496));
});

}

return (new cljs.core.async.t_cljs$core$async30495(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30498_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30498_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30499_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30499_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30500 = (i + (1));
i = G__30500;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___30508 = arguments.length;
var i__4532__auto___30509 = (0);
while(true){
if((i__4532__auto___30509 < len__4531__auto___30508)){
args__4534__auto__.push((arguments[i__4532__auto___30509]));

var G__30510 = (i__4532__auto___30509 + (1));
i__4532__auto___30509 = G__30510;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30505){
var map__30506 = p__30505;
var map__30506__$1 = ((((!((map__30506 == null)))?(((((map__30506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30506):map__30506);
var opts = map__30506__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30501){
var G__30502 = cljs.core.first.call(null,seq30501);
var seq30501__$1 = cljs.core.next.call(null,seq30501);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30502,seq30501__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30512 = arguments.length;
switch (G__30512) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__25582__auto___30558 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25582__auto___30558){
return (function (){
var f__25583__auto__ = (function (){var switch__24619__auto__ = ((function (c__25582__auto___30558){
return (function (state_30536){
var state_val_30537 = (state_30536[(1)]);
if((state_val_30537 === (7))){
var inst_30532 = (state_30536[(2)]);
var state_30536__$1 = state_30536;
var statearr_30538_30563 = state_30536__$1;
(statearr_30538_30563[(2)] = inst_30532);

(statearr_30538_30563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30537 === (1))){
var state_30536__$1 = state_30536;
var statearr_30539_30564 = state_30536__$1;
(statearr_30539_30564[(2)] = null);

(statearr_30539_30564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30537 === (4))){
var inst_30515 = (state_30536[(7)]);
var inst_30515__$1 = (state_30536[(2)]);
var inst_30516 = (inst_30515__$1 == null);
var state_30536__$1 = (function (){var statearr_30540 = state_30536;
(statearr_30540[(7)] = inst_30515__$1);

return statearr_30540;
})();
if(cljs.core.truth_(inst_30516)){
var statearr_30541_30566 = state_30536__$1;
(statearr_30541_30566[(1)] = (5));

} else {
var statearr_30542_30567 = state_30536__$1;
(statearr_30542_30567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30537 === (13))){
var state_30536__$1 = state_30536;
var statearr_30543_30569 = state_30536__$1;
(statearr_30543_30569[(2)] = null);

(statearr_30543_30569[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30537 === (6))){
var inst_30515 = (state_30536[(7)]);
var state_30536__$1 = state_30536;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30536__$1,(11),to,inst_30515);
} else {
if((state_val_30537 === (3))){
var inst_30534 = (state_30536[(2)]);
var state_30536__$1 = state_30536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30536__$1,inst_30534);
} else {
if((state_val_30537 === (12))){
var state_30536__$1 = state_30536;
var statearr_30544_30570 = state_30536__$1;
(statearr_30544_30570[(2)] = null);

(statearr_30544_30570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30537 === (2))){
var state_30536__$1 = state_30536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30536__$1,(4),from);
} else {
if((state_val_30537 === (11))){
var inst_30525 = (state_30536[(2)]);
var state_30536__$1 = state_30536;
if(cljs.core.truth_(inst_30525)){
var statearr_30545_30571 = state_30536__$1;
(statearr_30545_30571[(1)] = (12));

} else {
var statearr_30546_30572 = state_30536__$1;
(statearr_30546_30572[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30537 === (9))){
var state_30536__$1 = state_30536;
var statearr_30547_30573 = state_30536__$1;
(statearr_30547_30573[(2)] = null);

(statearr_30547_30573[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30537 === (5))){
var state_30536__$1 = state_30536;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30548_30574 = state_30536__$1;
(statearr_30548_30574[(1)] = (8));

} else {
var statearr_30549_30575 = state_30536__$1;
(statearr_30549_30575[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30537 === (14))){
var inst_30530 = (state_30536[(2)]);
var state_30536__$1 = state_30536;
var statearr_30550_30579 = state_30536__$1;
(statearr_30550_30579[(2)] = inst_30530);

(statearr_30550_30579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30537 === (10))){
var inst_30522 = (state_30536[(2)]);
var state_30536__$1 = state_30536;
var statearr_30551_30580 = state_30536__$1;
(statearr_30551_30580[(2)] = inst_30522);

(statearr_30551_30580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30537 === (8))){
var inst_30519 = cljs.core.async.close_BANG_.call(null,to);
var state_30536__$1 = state_30536;
var statearr_30552_30581 = state_30536__$1;
(statearr_30552_30581[(2)] = inst_30519);

(statearr_30552_30581[(1)] = (10));


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
}
}
}
});})(c__25582__auto___30558))
;
return ((function (switch__24619__auto__,c__25582__auto___30558){
return (function() {
var cljs$core$async$state_machine__24620__auto__ = null;
var cljs$core$async$state_machine__24620__auto____0 = (function (){
var statearr_30553 = [null,null,null,null,null,null,null,null];
(statearr_30553[(0)] = cljs$core$async$state_machine__24620__auto__);

(statearr_30553[(1)] = (1));

return statearr_30553;
});
var cljs$core$async$state_machine__24620__auto____1 = (function (state_30536){
while(true){
var ret_value__24621__auto__ = (function (){try{while(true){
var result__24622__auto__ = switch__24619__auto__.call(null,state_30536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24622__auto__;
}
break;
}
}catch (e30554){if((e30554 instanceof Object)){
var ex__24623__auto__ = e30554;
var statearr_30555_30587 = state_30536;
(statearr_30555_30587[(5)] = ex__24623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30592 = state_30536;
state_30536 = G__30592;
continue;
} else {
return ret_value__24621__auto__;
}
break;
}
});
cljs$core$async$state_machine__24620__auto__ = function(state_30536){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24620__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24620__auto____1.call(this,state_30536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24620__auto____0;
cljs$core$async$state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24620__auto____1;
return cljs$core$async$state_machine__24620__auto__;
})()
;})(switch__24619__auto__,c__25582__auto___30558))
})();
var state__25584__auto__ = (function (){var statearr_30556 = f__25583__auto__.call(null);
(statearr_30556[(6)] = c__25582__auto___30558);

return statearr_30556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25584__auto__);
});})(c__25582__auto___30558))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__30597){
var vec__30598 = p__30597;
var v = cljs.core.nth.call(null,vec__30598,(0),null);
var p = cljs.core.nth.call(null,vec__30598,(1),null);
var job = vec__30598;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__25582__auto___30824 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25582__auto___30824,res,vec__30598,v,p,job,jobs,results){
return (function (){
var f__25583__auto__ = (function (){var switch__24619__auto__ = ((function (c__25582__auto___30824,res,vec__30598,v,p,job,jobs,results){
return (function (state_30605){
var state_val_30606 = (state_30605[(1)]);
if((state_val_30606 === (1))){
var state_30605__$1 = state_30605;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30605__$1,(2),res,v);
} else {
if((state_val_30606 === (2))){
var inst_30602 = (state_30605[(2)]);
var inst_30603 = cljs.core.async.close_BANG_.call(null,res);
var state_30605__$1 = (function (){var statearr_30620 = state_30605;
(statearr_30620[(7)] = inst_30602);

return statearr_30620;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30605__$1,inst_30603);
} else {
return null;
}
}
});})(c__25582__auto___30824,res,vec__30598,v,p,job,jobs,results))
;
return ((function (switch__24619__auto__,c__25582__auto___30824,res,vec__30598,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24620__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24620__auto____0 = (function (){
var statearr_30637 = [null,null,null,null,null,null,null,null];
(statearr_30637[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24620__auto__);

(statearr_30637[(1)] = (1));

return statearr_30637;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24620__auto____1 = (function (state_30605){
while(true){
var ret_value__24621__auto__ = (function (){try{while(true){
var result__24622__auto__ = switch__24619__auto__.call(null,state_30605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24622__auto__;
}
break;
}
}catch (e30639){if((e30639 instanceof Object)){
var ex__24623__auto__ = e30639;
var statearr_30640_30825 = state_30605;
(statearr_30640_30825[(5)] = ex__24623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30826 = state_30605;
state_30605 = G__30826;
continue;
} else {
return ret_value__24621__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24620__auto__ = function(state_30605){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24620__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24620__auto____1.call(this,state_30605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24620__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24620__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24620__auto__;
})()
;})(switch__24619__auto__,c__25582__auto___30824,res,vec__30598,v,p,job,jobs,results))
})();
var state__25584__auto__ = (function (){var statearr_30643 = f__25583__auto__.call(null);
(statearr_30643[(6)] = c__25582__auto___30824);

return statearr_30643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25584__auto__);
});})(c__25582__auto___30824,res,vec__30598,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30646){
var vec__30648 = p__30646;
var v = cljs.core.nth.call(null,vec__30648,(0),null);
var p = cljs.core.nth.call(null,vec__30648,(1),null);
var job = vec__30648;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___30827 = n;
var __30828 = (0);
while(true){
if((__30828 < n__4408__auto___30827)){
var G__30653_30829 = type;
var G__30653_30830__$1 = (((G__30653_30829 instanceof cljs.core.Keyword))?G__30653_30829.fqn:null);
switch (G__30653_30830__$1) {
case "compute":
var c__25582__auto___30832 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30828,c__25582__auto___30832,G__30653_30829,G__30653_30830__$1,n__4408__auto___30827,jobs,results,process,async){
return (function (){
var f__25583__auto__ = (function (){var switch__24619__auto__ = ((function (__30828,c__25582__auto___30832,G__30653_30829,G__30653_30830__$1,n__4408__auto___30827,jobs,results,process,async){
return (function (state_30667){
var state_val_30668 = (state_30667[(1)]);
if((state_val_30668 === (1))){
var state_30667__$1 = state_30667;
var statearr_30671_30833 = state_30667__$1;
(statearr_30671_30833[(2)] = null);

(statearr_30671_30833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30668 === (2))){
var state_30667__$1 = state_30667;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30667__$1,(4),jobs);
} else {
if((state_val_30668 === (3))){
var inst_30665 = (state_30667[(2)]);
var state_30667__$1 = state_30667;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30667__$1,inst_30665);
} else {
if((state_val_30668 === (4))){
var inst_30657 = (state_30667[(2)]);
var inst_30658 = process.call(null,inst_30657);
var state_30667__$1 = state_30667;
if(cljs.core.truth_(inst_30658)){
var statearr_30677_30834 = state_30667__$1;
(statearr_30677_30834[(1)] = (5));

} else {
var statearr_30678_30835 = state_30667__$1;
(statearr_30678_30835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30668 === (5))){
var state_30667__$1 = state_30667;
var statearr_30680_30836 = state_30667__$1;
(statearr_30680_30836[(2)] = null);

(statearr_30680_30836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30668 === (6))){
var state_30667__$1 = state_30667;
var statearr_30682_30837 = state_30667__$1;
(statearr_30682_30837[(2)] = null);

(statearr_30682_30837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30668 === (7))){
var inst_30663 = (state_30667[(2)]);
var state_30667__$1 = state_30667;
var statearr_30684_30838 = state_30667__$1;
(statearr_30684_30838[(2)] = inst_30663);

(statearr_30684_30838[(1)] = (3));


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
});})(__30828,c__25582__auto___30832,G__30653_30829,G__30653_30830__$1,n__4408__auto___30827,jobs,results,process,async))
;
return ((function (__30828,switch__24619__auto__,c__25582__auto___30832,G__30653_30829,G__30653_30830__$1,n__4408__auto___30827,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24620__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24620__auto____0 = (function (){
var statearr_30686 = [null,null,null,null,null,null,null];
(statearr_30686[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24620__auto__);

(statearr_30686[(1)] = (1));

return statearr_30686;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24620__auto____1 = (function (state_30667){
while(true){
var ret_value__24621__auto__ = (function (){try{while(true){
var result__24622__auto__ = switch__24619__auto__.call(null,state_30667);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24622__auto__;
}
break;
}
}catch (e30687){if((e30687 instanceof Object)){
var ex__24623__auto__ = e30687;
var statearr_30688_30839 = state_30667;
(statearr_30688_30839[(5)] = ex__24623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30840 = state_30667;
state_30667 = G__30840;
continue;
} else {
return ret_value__24621__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24620__auto__ = function(state_30667){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24620__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24620__auto____1.call(this,state_30667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24620__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24620__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24620__auto__;
})()
;})(__30828,switch__24619__auto__,c__25582__auto___30832,G__30653_30829,G__30653_30830__$1,n__4408__auto___30827,jobs,results,process,async))
})();
var state__25584__auto__ = (function (){var statearr_30691 = f__25583__auto__.call(null);
(statearr_30691[(6)] = c__25582__auto___30832);

return statearr_30691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25584__auto__);
});})(__30828,c__25582__auto___30832,G__30653_30829,G__30653_30830__$1,n__4408__auto___30827,jobs,results,process,async))
);


break;
case "async":
var c__25582__auto___30841 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30828,c__25582__auto___30841,G__30653_30829,G__30653_30830__$1,n__4408__auto___30827,jobs,results,process,async){
return (function (){
var f__25583__auto__ = (function (){var switch__24619__auto__ = ((function (__30828,c__25582__auto___30841,G__30653_30829,G__30653_30830__$1,n__4408__auto___30827,jobs,results,process,async){
return (function (state_30704){
var state_val_30705 = (state_30704[(1)]);
if((state_val_30705 === (1))){
var state_30704__$1 = state_30704;
var statearr_30706_30842 = state_30704__$1;
(statearr_30706_30842[(2)] = null);

(statearr_30706_30842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30705 === (2))){
var state_30704__$1 = state_30704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30704__$1,(4),jobs);
} else {
if((state_val_30705 === (3))){
var inst_30702 = (state_30704[(2)]);
var state_30704__$1 = state_30704;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30704__$1,inst_30702);
} else {
if((state_val_30705 === (4))){
var inst_30694 = (state_30704[(2)]);
var inst_30695 = async.call(null,inst_30694);
var state_30704__$1 = state_30704;
if(cljs.core.truth_(inst_30695)){
var statearr_30707_30843 = state_30704__$1;
(statearr_30707_30843[(1)] = (5));

} else {
var statearr_30708_30844 = state_30704__$1;
(statearr_30708_30844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30705 === (5))){
var state_30704__$1 = state_30704;
var statearr_30709_30845 = state_30704__$1;
(statearr_30709_30845[(2)] = null);

(statearr_30709_30845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30705 === (6))){
var state_30704__$1 = state_30704;
var statearr_30710_30846 = state_30704__$1;
(statearr_30710_30846[(2)] = null);

(statearr_30710_30846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30705 === (7))){
var inst_30700 = (state_30704[(2)]);
var state_30704__$1 = state_30704;
var statearr_30711_30847 = state_30704__$1;
(statearr_30711_30847[(2)] = inst_30700);

(statearr_30711_30847[(1)] = (3));


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
});})(__30828,c__25582__auto___30841,G__30653_30829,G__30653_30830__$1,n__4408__auto___30827,jobs,results,process,async))
;
return ((function (__30828,switch__24619__auto__,c__25582__auto___30841,G__30653_30829,G__30653_30830__$1,n__4408__auto___30827,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24620__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24620__auto____0 = (function (){
var statearr_30712 = [null,null,null,null,null,null,null];
(statearr_30712[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24620__auto__);

(statearr_30712[(1)] = (1));

return statearr_30712;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24620__auto____1 = (function (state_30704){
while(true){
var ret_value__24621__auto__ = (function (){try{while(true){
var result__24622__auto__ = switch__24619__auto__.call(null,state_30704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24622__auto__;
}
break;
}
}catch (e30713){if((e30713 instanceof Object)){
var ex__24623__auto__ = e30713;
var statearr_30714_30848 = state_30704;
(statearr_30714_30848[(5)] = ex__24623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30849 = state_30704;
state_30704 = G__30849;
continue;
} else {
return ret_value__24621__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24620__auto__ = function(state_30704){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24620__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24620__auto____1.call(this,state_30704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24620__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24620__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24620__auto__;
})()
;})(__30828,switch__24619__auto__,c__25582__auto___30841,G__30653_30829,G__30653_30830__$1,n__4408__auto___30827,jobs,results,process,async))
})();
var state__25584__auto__ = (function (){var statearr_30715 = f__25583__auto__.call(null);
(statearr_30715[(6)] = c__25582__auto___30841);

return statearr_30715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25584__auto__);
});})(__30828,c__25582__auto___30841,G__30653_30829,G__30653_30830__$1,n__4408__auto___30827,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30653_30830__$1)].join('')));

}

var G__30850 = (__30828 + (1));
__30828 = G__30850;
continue;
} else {
}
break;
}

var c__25582__auto___30851 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25582__auto___30851,jobs,results,process,async){
return (function (){
var f__25583__auto__ = (function (){var switch__24619__auto__ = ((function (c__25582__auto___30851,jobs,results,process,async){
return (function (state_30737){
var state_val_30738 = (state_30737[(1)]);
if((state_val_30738 === (7))){
var inst_30733 = (state_30737[(2)]);
var state_30737__$1 = state_30737;
var statearr_30739_30852 = state_30737__$1;
(statearr_30739_30852[(2)] = inst_30733);

(statearr_30739_30852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30738 === (1))){
var state_30737__$1 = state_30737;
var statearr_30740_30853 = state_30737__$1;
(statearr_30740_30853[(2)] = null);

(statearr_30740_30853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30738 === (4))){
var inst_30718 = (state_30737[(7)]);
var inst_30718__$1 = (state_30737[(2)]);
var inst_30719 = (inst_30718__$1 == null);
var state_30737__$1 = (function (){var statearr_30741 = state_30737;
(statearr_30741[(7)] = inst_30718__$1);

return statearr_30741;
})();
if(cljs.core.truth_(inst_30719)){
var statearr_30742_30854 = state_30737__$1;
(statearr_30742_30854[(1)] = (5));

} else {
var statearr_30743_30855 = state_30737__$1;
(statearr_30743_30855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30738 === (6))){
var inst_30718 = (state_30737[(7)]);
var inst_30723 = (state_30737[(8)]);
var inst_30723__$1 = cljs.core.async.chan.call(null,(1));
var inst_30724 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30725 = [inst_30718,inst_30723__$1];
var inst_30726 = (new cljs.core.PersistentVector(null,2,(5),inst_30724,inst_30725,null));
var state_30737__$1 = (function (){var statearr_30744 = state_30737;
(statearr_30744[(8)] = inst_30723__$1);

return statearr_30744;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30737__$1,(8),jobs,inst_30726);
} else {
if((state_val_30738 === (3))){
var inst_30735 = (state_30737[(2)]);
var state_30737__$1 = state_30737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30737__$1,inst_30735);
} else {
if((state_val_30738 === (2))){
var state_30737__$1 = state_30737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30737__$1,(4),from);
} else {
if((state_val_30738 === (9))){
var inst_30730 = (state_30737[(2)]);
var state_30737__$1 = (function (){var statearr_30745 = state_30737;
(statearr_30745[(9)] = inst_30730);

return statearr_30745;
})();
var statearr_30746_30856 = state_30737__$1;
(statearr_30746_30856[(2)] = null);

(statearr_30746_30856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30738 === (5))){
var inst_30721 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30737__$1 = state_30737;
var statearr_30747_30857 = state_30737__$1;
(statearr_30747_30857[(2)] = inst_30721);

(statearr_30747_30857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30738 === (8))){
var inst_30723 = (state_30737[(8)]);
var inst_30728 = (state_30737[(2)]);
var state_30737__$1 = (function (){var statearr_30748 = state_30737;
(statearr_30748[(10)] = inst_30728);

return statearr_30748;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30737__$1,(9),results,inst_30723);
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
});})(c__25582__auto___30851,jobs,results,process,async))
;
return ((function (switch__24619__auto__,c__25582__auto___30851,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24620__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24620__auto____0 = (function (){
var statearr_30749 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30749[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24620__auto__);

(statearr_30749[(1)] = (1));

return statearr_30749;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24620__auto____1 = (function (state_30737){
while(true){
var ret_value__24621__auto__ = (function (){try{while(true){
var result__24622__auto__ = switch__24619__auto__.call(null,state_30737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24622__auto__;
}
break;
}
}catch (e30750){if((e30750 instanceof Object)){
var ex__24623__auto__ = e30750;
var statearr_30751_30858 = state_30737;
(statearr_30751_30858[(5)] = ex__24623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30859 = state_30737;
state_30737 = G__30859;
continue;
} else {
return ret_value__24621__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24620__auto__ = function(state_30737){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24620__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24620__auto____1.call(this,state_30737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24620__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24620__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24620__auto__;
})()
;})(switch__24619__auto__,c__25582__auto___30851,jobs,results,process,async))
})();
var state__25584__auto__ = (function (){var statearr_30752 = f__25583__auto__.call(null);
(statearr_30752[(6)] = c__25582__auto___30851);

return statearr_30752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25584__auto__);
});})(c__25582__auto___30851,jobs,results,process,async))
);


var c__25582__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25582__auto__,jobs,results,process,async){
return (function (){
var f__25583__auto__ = (function (){var switch__24619__auto__ = ((function (c__25582__auto__,jobs,results,process,async){
return (function (state_30790){
var state_val_30791 = (state_30790[(1)]);
if((state_val_30791 === (7))){
var inst_30786 = (state_30790[(2)]);
var state_30790__$1 = state_30790;
var statearr_30794_30860 = state_30790__$1;
(statearr_30794_30860[(2)] = inst_30786);

(statearr_30794_30860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (20))){
var state_30790__$1 = state_30790;
var statearr_30795_30861 = state_30790__$1;
(statearr_30795_30861[(2)] = null);

(statearr_30795_30861[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (1))){
var state_30790__$1 = state_30790;
var statearr_30798_30862 = state_30790__$1;
(statearr_30798_30862[(2)] = null);

(statearr_30798_30862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (4))){
var inst_30755 = (state_30790[(7)]);
var inst_30755__$1 = (state_30790[(2)]);
var inst_30756 = (inst_30755__$1 == null);
var state_30790__$1 = (function (){var statearr_30799 = state_30790;
(statearr_30799[(7)] = inst_30755__$1);

return statearr_30799;
})();
if(cljs.core.truth_(inst_30756)){
var statearr_30800_30863 = state_30790__$1;
(statearr_30800_30863[(1)] = (5));

} else {
var statearr_30801_30864 = state_30790__$1;
(statearr_30801_30864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (15))){
var inst_30768 = (state_30790[(8)]);
var state_30790__$1 = state_30790;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30790__$1,(18),to,inst_30768);
} else {
if((state_val_30791 === (21))){
var inst_30781 = (state_30790[(2)]);
var state_30790__$1 = state_30790;
var statearr_30802_30865 = state_30790__$1;
(statearr_30802_30865[(2)] = inst_30781);

(statearr_30802_30865[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (13))){
var inst_30783 = (state_30790[(2)]);
var state_30790__$1 = (function (){var statearr_30803 = state_30790;
(statearr_30803[(9)] = inst_30783);

return statearr_30803;
})();
var statearr_30804_30866 = state_30790__$1;
(statearr_30804_30866[(2)] = null);

(statearr_30804_30866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (6))){
var inst_30755 = (state_30790[(7)]);
var state_30790__$1 = state_30790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30790__$1,(11),inst_30755);
} else {
if((state_val_30791 === (17))){
var inst_30776 = (state_30790[(2)]);
var state_30790__$1 = state_30790;
if(cljs.core.truth_(inst_30776)){
var statearr_30805_30867 = state_30790__$1;
(statearr_30805_30867[(1)] = (19));

} else {
var statearr_30806_30868 = state_30790__$1;
(statearr_30806_30868[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (3))){
var inst_30788 = (state_30790[(2)]);
var state_30790__$1 = state_30790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30790__$1,inst_30788);
} else {
if((state_val_30791 === (12))){
var inst_30765 = (state_30790[(10)]);
var state_30790__$1 = state_30790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30790__$1,(14),inst_30765);
} else {
if((state_val_30791 === (2))){
var state_30790__$1 = state_30790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30790__$1,(4),results);
} else {
if((state_val_30791 === (19))){
var state_30790__$1 = state_30790;
var statearr_30807_30869 = state_30790__$1;
(statearr_30807_30869[(2)] = null);

(statearr_30807_30869[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (11))){
var inst_30765 = (state_30790[(2)]);
var state_30790__$1 = (function (){var statearr_30808 = state_30790;
(statearr_30808[(10)] = inst_30765);

return statearr_30808;
})();
var statearr_30809_30870 = state_30790__$1;
(statearr_30809_30870[(2)] = null);

(statearr_30809_30870[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (9))){
var state_30790__$1 = state_30790;
var statearr_30810_30871 = state_30790__$1;
(statearr_30810_30871[(2)] = null);

(statearr_30810_30871[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (5))){
var state_30790__$1 = state_30790;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30811_30872 = state_30790__$1;
(statearr_30811_30872[(1)] = (8));

} else {
var statearr_30812_30873 = state_30790__$1;
(statearr_30812_30873[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (14))){
var inst_30770 = (state_30790[(11)]);
var inst_30768 = (state_30790[(8)]);
var inst_30768__$1 = (state_30790[(2)]);
var inst_30769 = (inst_30768__$1 == null);
var inst_30770__$1 = cljs.core.not.call(null,inst_30769);
var state_30790__$1 = (function (){var statearr_30813 = state_30790;
(statearr_30813[(11)] = inst_30770__$1);

(statearr_30813[(8)] = inst_30768__$1);

return statearr_30813;
})();
if(inst_30770__$1){
var statearr_30814_30874 = state_30790__$1;
(statearr_30814_30874[(1)] = (15));

} else {
var statearr_30815_30875 = state_30790__$1;
(statearr_30815_30875[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (16))){
var inst_30770 = (state_30790[(11)]);
var state_30790__$1 = state_30790;
var statearr_30816_30876 = state_30790__$1;
(statearr_30816_30876[(2)] = inst_30770);

(statearr_30816_30876[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (10))){
var inst_30762 = (state_30790[(2)]);
var state_30790__$1 = state_30790;
var statearr_30817_30877 = state_30790__$1;
(statearr_30817_30877[(2)] = inst_30762);

(statearr_30817_30877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (18))){
var inst_30773 = (state_30790[(2)]);
var state_30790__$1 = state_30790;
var statearr_30818_30878 = state_30790__$1;
(statearr_30818_30878[(2)] = inst_30773);

(statearr_30818_30878[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (8))){
var inst_30759 = cljs.core.async.close_BANG_.call(null,to);
var state_30790__$1 = state_30790;
var statearr_30819_30879 = state_30790__$1;
(statearr_30819_30879[(2)] = inst_30759);

(statearr_30819_30879[(1)] = (10));


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
});})(c__25582__auto__,jobs,results,process,async))
;
return ((function (switch__24619__auto__,c__25582__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24620__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24620__auto____0 = (function (){
var statearr_30820 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30820[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24620__auto__);

(statearr_30820[(1)] = (1));

return statearr_30820;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24620__auto____1 = (function (state_30790){
while(true){
var ret_value__24621__auto__ = (function (){try{while(true){
var result__24622__auto__ = switch__24619__auto__.call(null,state_30790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24622__auto__;
}
break;
}
}catch (e30821){if((e30821 instanceof Object)){
var ex__24623__auto__ = e30821;
var statearr_30822_30880 = state_30790;
(statearr_30822_30880[(5)] = ex__24623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30881 = state_30790;
state_30790 = G__30881;
continue;
} else {
return ret_value__24621__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24620__auto__ = function(state_30790){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24620__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24620__auto____1.call(this,state_30790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24620__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24620__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24620__auto__;
})()
;})(switch__24619__auto__,c__25582__auto__,jobs,results,process,async))
})();
var state__25584__auto__ = (function (){var statearr_30823 = f__25583__auto__.call(null);
(statearr_30823[(6)] = c__25582__auto__);

return statearr_30823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25584__auto__);
});})(c__25582__auto__,jobs,results,process,async))
);

return c__25582__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30883 = arguments.length;
switch (G__30883) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30886 = arguments.length;
switch (G__30886) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30889 = arguments.length;
switch (G__30889) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__25582__auto___30940 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25582__auto___30940,tc,fc){
return (function (){
var f__25583__auto__ = (function (){var switch__24619__auto__ = ((function (c__25582__auto___30940,tc,fc){
return (function (state_30915){
var state_val_30916 = (state_30915[(1)]);
if((state_val_30916 === (7))){
var inst_30911 = (state_30915[(2)]);
var state_30915__$1 = state_30915;
var statearr_30917_30943 = state_30915__$1;
(statearr_30917_30943[(2)] = inst_30911);

(statearr_30917_30943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30916 === (1))){
var state_30915__$1 = state_30915;
var statearr_30918_30946 = state_30915__$1;
(statearr_30918_30946[(2)] = null);

(statearr_30918_30946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30916 === (4))){
var inst_30892 = (state_30915[(7)]);
var inst_30892__$1 = (state_30915[(2)]);
var inst_30893 = (inst_30892__$1 == null);
var state_30915__$1 = (function (){var statearr_30919 = state_30915;
(statearr_30919[(7)] = inst_30892__$1);

return statearr_30919;
})();
if(cljs.core.truth_(inst_30893)){
var statearr_30920_30949 = state_30915__$1;
(statearr_30920_30949[(1)] = (5));

} else {
var statearr_30921_30950 = state_30915__$1;
(statearr_30921_30950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30916 === (13))){
var state_30915__$1 = state_30915;
var statearr_30922_30951 = state_30915__$1;
(statearr_30922_30951[(2)] = null);

(statearr_30922_30951[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30916 === (6))){
var inst_30892 = (state_30915[(7)]);
var inst_30898 = p.call(null,inst_30892);
var state_30915__$1 = state_30915;
if(cljs.core.truth_(inst_30898)){
var statearr_30923_30952 = state_30915__$1;
(statearr_30923_30952[(1)] = (9));

} else {
var statearr_30924_30954 = state_30915__$1;
(statearr_30924_30954[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30916 === (3))){
var inst_30913 = (state_30915[(2)]);
var state_30915__$1 = state_30915;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30915__$1,inst_30913);
} else {
if((state_val_30916 === (12))){
var state_30915__$1 = state_30915;
var statearr_30925_30958 = state_30915__$1;
(statearr_30925_30958[(2)] = null);

(statearr_30925_30958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30916 === (2))){
var state_30915__$1 = state_30915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30915__$1,(4),ch);
} else {
if((state_val_30916 === (11))){
var inst_30892 = (state_30915[(7)]);
var inst_30902 = (state_30915[(2)]);
var state_30915__$1 = state_30915;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30915__$1,(8),inst_30902,inst_30892);
} else {
if((state_val_30916 === (9))){
var state_30915__$1 = state_30915;
var statearr_30926_30959 = state_30915__$1;
(statearr_30926_30959[(2)] = tc);

(statearr_30926_30959[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30916 === (5))){
var inst_30895 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30896 = cljs.core.async.close_BANG_.call(null,fc);
var state_30915__$1 = (function (){var statearr_30927 = state_30915;
(statearr_30927[(8)] = inst_30895);

return statearr_30927;
})();
var statearr_30928_30961 = state_30915__$1;
(statearr_30928_30961[(2)] = inst_30896);

(statearr_30928_30961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30916 === (14))){
var inst_30909 = (state_30915[(2)]);
var state_30915__$1 = state_30915;
var statearr_30929_30963 = state_30915__$1;
(statearr_30929_30963[(2)] = inst_30909);

(statearr_30929_30963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30916 === (10))){
var state_30915__$1 = state_30915;
var statearr_30930_30964 = state_30915__$1;
(statearr_30930_30964[(2)] = fc);

(statearr_30930_30964[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30916 === (8))){
var inst_30904 = (state_30915[(2)]);
var state_30915__$1 = state_30915;
if(cljs.core.truth_(inst_30904)){
var statearr_30931_30966 = state_30915__$1;
(statearr_30931_30966[(1)] = (12));

} else {
var statearr_30932_30967 = state_30915__$1;
(statearr_30932_30967[(1)] = (13));

}

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
}
}
}
});})(c__25582__auto___30940,tc,fc))
;
return ((function (switch__24619__auto__,c__25582__auto___30940,tc,fc){
return (function() {
var cljs$core$async$state_machine__24620__auto__ = null;
var cljs$core$async$state_machine__24620__auto____0 = (function (){
var statearr_30933 = [null,null,null,null,null,null,null,null,null];
(statearr_30933[(0)] = cljs$core$async$state_machine__24620__auto__);

(statearr_30933[(1)] = (1));

return statearr_30933;
});
var cljs$core$async$state_machine__24620__auto____1 = (function (state_30915){
while(true){
var ret_value__24621__auto__ = (function (){try{while(true){
var result__24622__auto__ = switch__24619__auto__.call(null,state_30915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24622__auto__;
}
break;
}
}catch (e30934){if((e30934 instanceof Object)){
var ex__24623__auto__ = e30934;
var statearr_30935_30973 = state_30915;
(statearr_30935_30973[(5)] = ex__24623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30975 = state_30915;
state_30915 = G__30975;
continue;
} else {
return ret_value__24621__auto__;
}
break;
}
});
cljs$core$async$state_machine__24620__auto__ = function(state_30915){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24620__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24620__auto____1.call(this,state_30915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24620__auto____0;
cljs$core$async$state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24620__auto____1;
return cljs$core$async$state_machine__24620__auto__;
})()
;})(switch__24619__auto__,c__25582__auto___30940,tc,fc))
})();
var state__25584__auto__ = (function (){var statearr_30936 = f__25583__auto__.call(null);
(statearr_30936[(6)] = c__25582__auto___30940);

return statearr_30936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25584__auto__);
});})(c__25582__auto___30940,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__25582__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25582__auto__){
return (function (){
var f__25583__auto__ = (function (){var switch__24619__auto__ = ((function (c__25582__auto__){
return (function (state_31007){
var state_val_31008 = (state_31007[(1)]);
if((state_val_31008 === (7))){
var inst_31003 = (state_31007[(2)]);
var state_31007__$1 = state_31007;
var statearr_31012_31043 = state_31007__$1;
(statearr_31012_31043[(2)] = inst_31003);

(statearr_31012_31043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31008 === (1))){
var inst_30985 = init;
var state_31007__$1 = (function (){var statearr_31013 = state_31007;
(statearr_31013[(7)] = inst_30985);

return statearr_31013;
})();
var statearr_31014_31044 = state_31007__$1;
(statearr_31014_31044[(2)] = null);

(statearr_31014_31044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31008 === (4))){
var inst_30988 = (state_31007[(8)]);
var inst_30988__$1 = (state_31007[(2)]);
var inst_30991 = (inst_30988__$1 == null);
var state_31007__$1 = (function (){var statearr_31015 = state_31007;
(statearr_31015[(8)] = inst_30988__$1);

return statearr_31015;
})();
if(cljs.core.truth_(inst_30991)){
var statearr_31018_31046 = state_31007__$1;
(statearr_31018_31046[(1)] = (5));

} else {
var statearr_31019_31047 = state_31007__$1;
(statearr_31019_31047[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31008 === (6))){
var inst_30994 = (state_31007[(9)]);
var inst_30985 = (state_31007[(7)]);
var inst_30988 = (state_31007[(8)]);
var inst_30994__$1 = f.call(null,inst_30985,inst_30988);
var inst_30995 = cljs.core.reduced_QMARK_.call(null,inst_30994__$1);
var state_31007__$1 = (function (){var statearr_31022 = state_31007;
(statearr_31022[(9)] = inst_30994__$1);

return statearr_31022;
})();
if(inst_30995){
var statearr_31023_31050 = state_31007__$1;
(statearr_31023_31050[(1)] = (8));

} else {
var statearr_31024_31051 = state_31007__$1;
(statearr_31024_31051[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31008 === (3))){
var inst_31005 = (state_31007[(2)]);
var state_31007__$1 = state_31007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31007__$1,inst_31005);
} else {
if((state_val_31008 === (2))){
var state_31007__$1 = state_31007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31007__$1,(4),ch);
} else {
if((state_val_31008 === (9))){
var inst_30994 = (state_31007[(9)]);
var inst_30985 = inst_30994;
var state_31007__$1 = (function (){var statearr_31028 = state_31007;
(statearr_31028[(7)] = inst_30985);

return statearr_31028;
})();
var statearr_31029_31055 = state_31007__$1;
(statearr_31029_31055[(2)] = null);

(statearr_31029_31055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31008 === (5))){
var inst_30985 = (state_31007[(7)]);
var state_31007__$1 = state_31007;
var statearr_31030_31057 = state_31007__$1;
(statearr_31030_31057[(2)] = inst_30985);

(statearr_31030_31057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31008 === (10))){
var inst_31001 = (state_31007[(2)]);
var state_31007__$1 = state_31007;
var statearr_31032_31058 = state_31007__$1;
(statearr_31032_31058[(2)] = inst_31001);

(statearr_31032_31058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31008 === (8))){
var inst_30994 = (state_31007[(9)]);
var inst_30997 = cljs.core.deref.call(null,inst_30994);
var state_31007__$1 = state_31007;
var statearr_31033_31060 = state_31007__$1;
(statearr_31033_31060[(2)] = inst_30997);

(statearr_31033_31060[(1)] = (10));


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
});})(c__25582__auto__))
;
return ((function (switch__24619__auto__,c__25582__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24620__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24620__auto____0 = (function (){
var statearr_31034 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31034[(0)] = cljs$core$async$reduce_$_state_machine__24620__auto__);

(statearr_31034[(1)] = (1));

return statearr_31034;
});
var cljs$core$async$reduce_$_state_machine__24620__auto____1 = (function (state_31007){
while(true){
var ret_value__24621__auto__ = (function (){try{while(true){
var result__24622__auto__ = switch__24619__auto__.call(null,state_31007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24622__auto__;
}
break;
}
}catch (e31037){if((e31037 instanceof Object)){
var ex__24623__auto__ = e31037;
var statearr_31038_31068 = state_31007;
(statearr_31038_31068[(5)] = ex__24623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31071 = state_31007;
state_31007 = G__31071;
continue;
} else {
return ret_value__24621__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24620__auto__ = function(state_31007){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24620__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24620__auto____1.call(this,state_31007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24620__auto____0;
cljs$core$async$reduce_$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24620__auto____1;
return cljs$core$async$reduce_$_state_machine__24620__auto__;
})()
;})(switch__24619__auto__,c__25582__auto__))
})();
var state__25584__auto__ = (function (){var statearr_31041 = f__25583__auto__.call(null);
(statearr_31041[(6)] = c__25582__auto__);

return statearr_31041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25584__auto__);
});})(c__25582__auto__))
);

return c__25582__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__25582__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25582__auto__,f__$1){
return (function (){
var f__25583__auto__ = (function (){var switch__24619__auto__ = ((function (c__25582__auto__,f__$1){
return (function (state_31079){
var state_val_31080 = (state_31079[(1)]);
if((state_val_31080 === (1))){
var inst_31074 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_31079__$1 = state_31079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31079__$1,(2),inst_31074);
} else {
if((state_val_31080 === (2))){
var inst_31076 = (state_31079[(2)]);
var inst_31077 = f__$1.call(null,inst_31076);
var state_31079__$1 = state_31079;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31079__$1,inst_31077);
} else {
return null;
}
}
});})(c__25582__auto__,f__$1))
;
return ((function (switch__24619__auto__,c__25582__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__24620__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24620__auto____0 = (function (){
var statearr_31086 = [null,null,null,null,null,null,null];
(statearr_31086[(0)] = cljs$core$async$transduce_$_state_machine__24620__auto__);

(statearr_31086[(1)] = (1));

return statearr_31086;
});
var cljs$core$async$transduce_$_state_machine__24620__auto____1 = (function (state_31079){
while(true){
var ret_value__24621__auto__ = (function (){try{while(true){
var result__24622__auto__ = switch__24619__auto__.call(null,state_31079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24622__auto__;
}
break;
}
}catch (e31087){if((e31087 instanceof Object)){
var ex__24623__auto__ = e31087;
var statearr_31088_31091 = state_31079;
(statearr_31088_31091[(5)] = ex__24623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31092 = state_31079;
state_31079 = G__31092;
continue;
} else {
return ret_value__24621__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24620__auto__ = function(state_31079){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24620__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24620__auto____1.call(this,state_31079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24620__auto____0;
cljs$core$async$transduce_$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24620__auto____1;
return cljs$core$async$transduce_$_state_machine__24620__auto__;
})()
;})(switch__24619__auto__,c__25582__auto__,f__$1))
})();
var state__25584__auto__ = (function (){var statearr_31090 = f__25583__auto__.call(null);
(statearr_31090[(6)] = c__25582__auto__);

return statearr_31090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25584__auto__);
});})(c__25582__auto__,f__$1))
);

return c__25582__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31094 = arguments.length;
switch (G__31094) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__25582__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25582__auto__){
return (function (){
var f__25583__auto__ = (function (){var switch__24619__auto__ = ((function (c__25582__auto__){
return (function (state_31119){
var state_val_31120 = (state_31119[(1)]);
if((state_val_31120 === (7))){
var inst_31101 = (state_31119[(2)]);
var state_31119__$1 = state_31119;
var statearr_31121_31143 = state_31119__$1;
(statearr_31121_31143[(2)] = inst_31101);

(statearr_31121_31143[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31120 === (1))){
var inst_31095 = cljs.core.seq.call(null,coll);
var inst_31096 = inst_31095;
var state_31119__$1 = (function (){var statearr_31123 = state_31119;
(statearr_31123[(7)] = inst_31096);

return statearr_31123;
})();
var statearr_31124_31144 = state_31119__$1;
(statearr_31124_31144[(2)] = null);

(statearr_31124_31144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31120 === (4))){
var inst_31096 = (state_31119[(7)]);
var inst_31099 = cljs.core.first.call(null,inst_31096);
var state_31119__$1 = state_31119;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31119__$1,(7),ch,inst_31099);
} else {
if((state_val_31120 === (13))){
var inst_31113 = (state_31119[(2)]);
var state_31119__$1 = state_31119;
var statearr_31125_31145 = state_31119__$1;
(statearr_31125_31145[(2)] = inst_31113);

(statearr_31125_31145[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31120 === (6))){
var inst_31104 = (state_31119[(2)]);
var state_31119__$1 = state_31119;
if(cljs.core.truth_(inst_31104)){
var statearr_31126_31146 = state_31119__$1;
(statearr_31126_31146[(1)] = (8));

} else {
var statearr_31127_31147 = state_31119__$1;
(statearr_31127_31147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31120 === (3))){
var inst_31117 = (state_31119[(2)]);
var state_31119__$1 = state_31119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31119__$1,inst_31117);
} else {
if((state_val_31120 === (12))){
var state_31119__$1 = state_31119;
var statearr_31128_31148 = state_31119__$1;
(statearr_31128_31148[(2)] = null);

(statearr_31128_31148[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31120 === (2))){
var inst_31096 = (state_31119[(7)]);
var state_31119__$1 = state_31119;
if(cljs.core.truth_(inst_31096)){
var statearr_31129_31151 = state_31119__$1;
(statearr_31129_31151[(1)] = (4));

} else {
var statearr_31130_31152 = state_31119__$1;
(statearr_31130_31152[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31120 === (11))){
var inst_31110 = cljs.core.async.close_BANG_.call(null,ch);
var state_31119__$1 = state_31119;
var statearr_31131_31153 = state_31119__$1;
(statearr_31131_31153[(2)] = inst_31110);

(statearr_31131_31153[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31120 === (9))){
var state_31119__$1 = state_31119;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31132_31154 = state_31119__$1;
(statearr_31132_31154[(1)] = (11));

} else {
var statearr_31133_31155 = state_31119__$1;
(statearr_31133_31155[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31120 === (5))){
var inst_31096 = (state_31119[(7)]);
var state_31119__$1 = state_31119;
var statearr_31134_31156 = state_31119__$1;
(statearr_31134_31156[(2)] = inst_31096);

(statearr_31134_31156[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31120 === (10))){
var inst_31115 = (state_31119[(2)]);
var state_31119__$1 = state_31119;
var statearr_31135_31157 = state_31119__$1;
(statearr_31135_31157[(2)] = inst_31115);

(statearr_31135_31157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31120 === (8))){
var inst_31096 = (state_31119[(7)]);
var inst_31106 = cljs.core.next.call(null,inst_31096);
var inst_31096__$1 = inst_31106;
var state_31119__$1 = (function (){var statearr_31136 = state_31119;
(statearr_31136[(7)] = inst_31096__$1);

return statearr_31136;
})();
var statearr_31137_31158 = state_31119__$1;
(statearr_31137_31158[(2)] = null);

(statearr_31137_31158[(1)] = (2));


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
}
}
});})(c__25582__auto__))
;
return ((function (switch__24619__auto__,c__25582__auto__){
return (function() {
var cljs$core$async$state_machine__24620__auto__ = null;
var cljs$core$async$state_machine__24620__auto____0 = (function (){
var statearr_31138 = [null,null,null,null,null,null,null,null];
(statearr_31138[(0)] = cljs$core$async$state_machine__24620__auto__);

(statearr_31138[(1)] = (1));

return statearr_31138;
});
var cljs$core$async$state_machine__24620__auto____1 = (function (state_31119){
while(true){
var ret_value__24621__auto__ = (function (){try{while(true){
var result__24622__auto__ = switch__24619__auto__.call(null,state_31119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24622__auto__;
}
break;
}
}catch (e31139){if((e31139 instanceof Object)){
var ex__24623__auto__ = e31139;
var statearr_31140_31159 = state_31119;
(statearr_31140_31159[(5)] = ex__24623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31160 = state_31119;
state_31119 = G__31160;
continue;
} else {
return ret_value__24621__auto__;
}
break;
}
});
cljs$core$async$state_machine__24620__auto__ = function(state_31119){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24620__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24620__auto____1.call(this,state_31119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24620__auto____0;
cljs$core$async$state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24620__auto____1;
return cljs$core$async$state_machine__24620__auto__;
})()
;})(switch__24619__auto__,c__25582__auto__))
})();
var state__25584__auto__ = (function (){var statearr_31141 = f__25583__auto__.call(null);
(statearr_31141[(6)] = c__25582__auto__);

return statearr_31141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25584__auto__);
});})(c__25582__auto__))
);

return c__25582__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31161 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31161 = (function (ch,cs,meta31162){
this.ch = ch;
this.cs = cs;
this.meta31162 = meta31162;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31163,meta31162__$1){
var self__ = this;
var _31163__$1 = this;
return (new cljs.core.async.t_cljs$core$async31161(self__.ch,self__.cs,meta31162__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31161.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31163){
var self__ = this;
var _31163__$1 = this;
return self__.meta31162;
});})(cs))
;

cljs.core.async.t_cljs$core$async31161.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31161.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31161.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31161.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31161.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31161.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31161.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31162","meta31162",-961393003,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31161.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31161.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31161";

cljs.core.async.t_cljs$core$async31161.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async31161");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31161.
 */
cljs.core.async.__GT_t_cljs$core$async31161 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31161(ch__$1,cs__$1,meta31162){
return (new cljs.core.async.t_cljs$core$async31161(ch__$1,cs__$1,meta31162));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31161(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__25582__auto___31385 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25582__auto___31385,cs,m,dchan,dctr,done){
return (function (){
var f__25583__auto__ = (function (){var switch__24619__auto__ = ((function (c__25582__auto___31385,cs,m,dchan,dctr,done){
return (function (state_31300){
var state_val_31301 = (state_31300[(1)]);
if((state_val_31301 === (7))){
var inst_31296 = (state_31300[(2)]);
var state_31300__$1 = state_31300;
var statearr_31302_31386 = state_31300__$1;
(statearr_31302_31386[(2)] = inst_31296);

(statearr_31302_31386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31301 === (20))){
var inst_31197 = (state_31300[(7)]);
var inst_31210 = cljs.core.first.call(null,inst_31197);
var inst_31211 = cljs.core.nth.call(null,inst_31210,(0),null);
var inst_31212 = cljs.core.nth.call(null,inst_31210,(1),null);
var state_31300__$1 = (function (){var statearr_31303 = state_31300;
(statearr_31303[(8)] = inst_31211);

return statearr_31303;
})();
if(cljs.core.truth_(inst_31212)){
var statearr_31304_31387 = state_31300__$1;
(statearr_31304_31387[(1)] = (22));

} else {
var statearr_31305_31388 = state_31300__$1;
(statearr_31305_31388[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31301 === (27))){
var inst_31240 = (state_31300[(9)]);
var inst_31247 = (state_31300[(10)]);
var inst_31166 = (state_31300[(11)]);
var inst_31242 = (state_31300[(12)]);
var inst_31247__$1 = cljs.core._nth.call(null,inst_31240,inst_31242);
var inst_31248 = cljs.core.async.put_BANG_.call(null,inst_31247__$1,inst_31166,done);
var state_31300__$1 = (function (){var statearr_31306 = state_31300;
(statearr_31306[(10)] = inst_31247__$1);

return statearr_31306;
})();
if(cljs.core.truth_(inst_31248)){
var statearr_31307_31389 = state_31300__$1;
(statearr_31307_31389[(1)] = (30));

} else {
var statearr_31308_31390 = state_31300__$1;
(statearr_31308_31390[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31301 === (1))){
var state_31300__$1 = state_31300;
var statearr_31309_31391 = state_31300__$1;
(statearr_31309_31391[(2)] = null);

(statearr_31309_31391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31301 === (24))){
var inst_31197 = (state_31300[(7)]);
var inst_31217 = (state_31300[(2)]);
var inst_31218 = cljs.core.next.call(null,inst_31197);
var inst_31175 = inst_31218;
var inst_31176 = null;
var inst_31177 = (0);
var inst_31178 = (0);
var state_31300__$1 = (function (){var statearr_31310 = state_31300;
(statearr_31310[(13)] = inst_31177);

(statearr_31310[(14)] = inst_31176);

(statearr_31310[(15)] = inst_31217);

(statearr_31310[(16)] = inst_31178);

(statearr_31310[(17)] = inst_31175);

return statearr_31310;
})();
var statearr_31311_31392 = state_31300__$1;
(statearr_31311_31392[(2)] = null);

(statearr_31311_31392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31301 === (39))){
var state_31300__$1 = state_31300;
var statearr_31315_31393 = state_31300__$1;
(statearr_31315_31393[(2)] = null);

(statearr_31315_31393[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31301 === (4))){
var inst_31166 = (state_31300[(11)]);
var inst_31166__$1 = (state_31300[(2)]);
var inst_31167 = (inst_31166__$1 == null);
var state_31300__$1 = (function (){var statearr_31316 = state_31300;
(statearr_31316[(11)] = inst_31166__$1);

return statearr_31316;
})();
if(cljs.core.truth_(inst_31167)){
var statearr_31317_31394 = state_31300__$1;
(statearr_31317_31394[(1)] = (5));

} else {
var statearr_31318_31395 = state_31300__$1;
(statearr_31318_31395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31301 === (15))){
var inst_31177 = (state_31300[(13)]);
var inst_31176 = (state_31300[(14)]);
var inst_31178 = (state_31300[(16)]);
var inst_31175 = (state_31300[(17)]);
var inst_31193 = (state_31300[(2)]);
var inst_31194 = (inst_31178 + (1));
var tmp31312 = inst_31177;
var tmp31313 = inst_31176;
var tmp31314 = inst_31175;
var inst_31175__$1 = tmp31314;
var inst_31176__$1 = tmp31313;
var inst_31177__$1 = tmp31312;
var inst_31178__$1 = inst_31194;
var state_31300__$1 = (function (){var statearr_31319 = state_31300;
(statearr_31319[(13)] = inst_31177__$1);

(statearr_31319[(14)] = inst_31176__$1);

(statearr_31319[(18)] = inst_31193);

(statearr_31319[(16)] = inst_31178__$1);

(statearr_31319[(17)] = inst_31175__$1);

return statearr_31319;
})();
var statearr_31320_31396 = state_31300__$1;
(statearr_31320_31396[(2)] = null);

(statearr_31320_31396[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31301 === (21))){
var inst_31221 = (state_31300[(2)]);
var state_31300__$1 = state_31300;
var statearr_31324_31397 = state_31300__$1;
(statearr_31324_31397[(2)] = inst_31221);

(statearr_31324_31397[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31301 === (31))){
var inst_31247 = (state_31300[(10)]);
var inst_31251 = done.call(null,null);
var inst_31252 = cljs.core.async.untap_STAR_.call(null,m,inst_31247);
var state_31300__$1 = (function (){var statearr_31325 = state_31300;
(statearr_31325[(19)] = inst_31251);

return statearr_31325;
})();
var statearr_31326_31398 = state_31300__$1;
(statearr_31326_31398[(2)] = inst_31252);

(statearr_31326_31398[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31301 === (32))){
var inst_31241 = (state_31300[(20)]);
var inst_31240 = (state_31300[(9)]);
var inst_31239 = (state_31300[(21)]);
var inst_31242 = (state_31300[(12)]);
var inst_31254 = (state_31300[(2)]);
var inst_31255 = (inst_31242 + (1));
var tmp31321 = inst_31241;
var tmp31322 = inst_31240;
var tmp31323 = inst_31239;
var inst_31239__$1 = tmp31323;
var inst_31240__$1 = tmp31322;
var inst_31241__$1 = tmp31321;
var inst_31242__$1 = inst_31255;
var state_31300__$1 = (function (){var statearr_31327 = state_31300;
(statearr_31327[(20)] = inst_31241__$1);

(statearr_31327[(9)] = inst_31240__$1);

(statearr_31327[(22)] = inst_31254);

(statearr_31327[(21)] = inst_31239__$1);

(statearr_31327[(12)] = inst_31242__$1);

return statearr_31327;
})();
var statearr_31328_31399 = state_31300__$1;
(statearr_31328_31399[(2)] = null);

(statearr_31328_31399[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31301 === (40))){
var inst_31267 = (state_31300[(23)]);
var inst_31271 = done.call(null,null);
var inst_31272 = cljs.core.async.untap_STAR_.call(null,m,inst_31267);
var state_31300__$1 = (function (){var statearr_31329 = state_31300;
(statearr_31329[(24)] = inst_31271);

return statearr_31329;
})();
var statearr_31330_31400 = state_31300__$1;
(statearr_31330_31400[(2)] = inst_31272);

(statearr_31330_31400[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31301 === (33))){
var inst_31258 = (state_31300[(25)]);
var inst_31260 = cljs.core.chunked_seq_QMARK_.call(null,inst_31258);
var state_31300__$1 = state_31300;
if(inst_31260){
var statearr_31331_31401 = state_31300__$1;
(statearr_31331_31401[(1)] = (36));

} else {
var statearr_31332_31402 = state_31300__$1;
(statearr_31332_31402[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31301 === (13))){
var inst_31187 = (state_31300[(26)]);
var inst_31190 = cljs.core.async.close_BANG_.call(null,inst_31187);
var state_31300__$1 = state_31300;
var statearr_31333_31403 = state_31300__$1;
(statearr_31333_31403[(2)] = inst_31190);

(statearr_31333_31403[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31301 === (22))){
var inst_31211 = (state_31300[(8)]);
var inst_31214 = cljs.core.async.close_BANG_.call(null,inst_31211);
var state_31300__$1 = state_31300;
var statearr_31334_31404 = state_31300__$1;
(statearr_31334_31404[(2)] = inst_31214);

(statearr_31334_31404[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31301 === (36))){
var inst_31258 = (state_31300[(25)]);
var inst_31262 = cljs.core.chunk_first.call(null,inst_31258);
var inst_31263 = cljs.core.chunk_rest.call(null,inst_31258);
var inst_31264 = cljs.core.count.call(null,inst_31262);
var inst_31239 = inst_31263;
var inst_31240 = inst_31262;
var inst_31241 = inst_31264;
var inst_31242 = (0);
var state_31300__$1 = (function (){var statearr_31335 = state_31300;
(statearr_31335[(20)] = inst_31241);

(statearr_31335[(9)] = inst_31240);

(statearr_31335[(21)] = inst_31239);

(statearr_31335[(12)] = inst_31242);

return statearr_31335;
})();
var statearr_31336_31405 = state_31300__$1;
(statearr_31336_31405[(2)] = null);

(statearr_31336_31405[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31301 === (41))){
var inst_31258 = (state_31300[(25)]);
var inst_31274 = (state_31300[(2)]);
var inst_31275 = cljs.core.next.call(null,inst_31258);
var inst_31239 = inst_31275;
var inst_31240 = null;
var inst_31241 = (0);
var inst_31242 = (0);
var state_31300__$1 = (function (){var statearr_31337 = state_31300;
(statearr_31337[(20)] = inst_31241);

(statearr_31337[(9)] = inst_31240);

(statearr_31337[(27)] = inst_31274);

(statearr_31337[(21)] = inst_31239);

(statearr_31337[(12)] = inst_31242);

return statearr_31337;
})();
var statearr_31338_31406 = state_31300__$1;
(statearr_31338_31406[(2)] = null);

(statearr_31338_31406[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31301 === (43))){
var state_31300__$1 = state_31300;
var statearr_31339_31407 = state_31300__$1;
(statearr_31339_31407[(2)] = null);

(statearr_31339_31407[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31301 === (29))){
var inst_31283 = (state_31300[(2)]);
var state_31300__$1 = state_31300;
var statearr_31340_31410 = state_31300__$1;
(statearr_31340_31410[(2)] = inst_31283);

(statearr_31340_31410[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31301 === (44))){
var inst_31293 = (state_31300[(2)]);
var state_31300__$1 = (function (){var statearr_31341 = state_31300;
(statearr_31341[(28)] = inst_31293);

return statearr_31341;
})();
var statearr_31342_31411 = state_31300__$1;
(statearr_31342_31411[(2)] = null);

(statearr_31342_31411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31301 === (6))){
var inst_31231 = (state_31300[(29)]);
var inst_31230 = cljs.core.deref.call(null,cs);
var inst_31231__$1 = cljs.core.keys.call(null,inst_31230);
var inst_31232 = cljs.core.count.call(null,inst_31231__$1);
var inst_31233 = cljs.core.reset_BANG_.call(null,dctr,inst_31232);
var inst_31238 = cljs.core.seq.call(null,inst_31231__$1);
var inst_31239 = inst_31238;
var inst_31240 = null;
var inst_31241 = (0);
var inst_31242 = (0);
var state_31300__$1 = (function (){var statearr_31343 = state_31300;
(statearr_31343[(29)] = inst_31231__$1);

(statearr_31343[(20)] = inst_31241);

(statearr_31343[(9)] = inst_31240);

(statearr_31343[(30)] = inst_31233);

(statearr_31343[(21)] = inst_31239);

(statearr_31343[(12)] = inst_31242);

return statearr_31343;
})();
var statearr_31344_31416 = state_31300__$1;
(statearr_31344_31416[(2)] = null);

(statearr_31344_31416[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31301 === (28))){
var inst_31258 = (state_31300[(25)]);
var inst_31239 = (state_31300[(21)]);
var inst_31258__$1 = cljs.core.seq.call(null,inst_31239);
var state_31300__$1 = (function (){var statearr_31345 = state_31300;
(statearr_31345[(25)] = inst_31258__$1);

return statearr_31345;
})();
if(inst_31258__$1){
var statearr_31346_31420 = state_31300__$1;
(statearr_31346_31420[(1)] = (33));

} else {
var statearr_31347_31421 = state_31300__$1;
(statearr_31347_31421[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31301 === (25))){
var inst_31241 = (state_31300[(20)]);
var inst_31242 = (state_31300[(12)]);
var inst_31244 = (inst_31242 < inst_31241);
var inst_31245 = inst_31244;
var state_31300__$1 = state_31300;
if(cljs.core.truth_(inst_31245)){
var statearr_31348_31423 = state_31300__$1;
(statearr_31348_31423[(1)] = (27));

} else {
var statearr_31349_31424 = state_31300__$1;
(statearr_31349_31424[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31301 === (34))){
var state_31300__$1 = state_31300;
var statearr_31350_31429 = state_31300__$1;
(statearr_31350_31429[(2)] = null);

(statearr_31350_31429[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31301 === (17))){
var state_31300__$1 = state_31300;
var statearr_31351_31430 = state_31300__$1;
(statearr_31351_31430[(2)] = null);

(statearr_31351_31430[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31301 === (3))){
var inst_31298 = (state_31300[(2)]);
var state_31300__$1 = state_31300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31300__$1,inst_31298);
} else {
if((state_val_31301 === (12))){
var inst_31226 = (state_31300[(2)]);
var state_31300__$1 = state_31300;
var statearr_31352_31431 = state_31300__$1;
(statearr_31352_31431[(2)] = inst_31226);

(statearr_31352_31431[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31301 === (2))){
var state_31300__$1 = state_31300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31300__$1,(4),ch);
} else {
if((state_val_31301 === (23))){
var state_31300__$1 = state_31300;
var statearr_31353_31435 = state_31300__$1;
(statearr_31353_31435[(2)] = null);

(statearr_31353_31435[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31301 === (35))){
var inst_31281 = (state_31300[(2)]);
var state_31300__$1 = state_31300;
var statearr_31354_31436 = state_31300__$1;
(statearr_31354_31436[(2)] = inst_31281);

(statearr_31354_31436[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31301 === (19))){
var inst_31197 = (state_31300[(7)]);
var inst_31201 = cljs.core.chunk_first.call(null,inst_31197);
var inst_31202 = cljs.core.chunk_rest.call(null,inst_31197);
var inst_31203 = cljs.core.count.call(null,inst_31201);
var inst_31175 = inst_31202;
var inst_31176 = inst_31201;
var inst_31177 = inst_31203;
var inst_31178 = (0);
var state_31300__$1 = (function (){var statearr_31355 = state_31300;
(statearr_31355[(13)] = inst_31177);

(statearr_31355[(14)] = inst_31176);

(statearr_31355[(16)] = inst_31178);

(statearr_31355[(17)] = inst_31175);

return statearr_31355;
})();
var statearr_31356_31437 = state_31300__$1;
(statearr_31356_31437[(2)] = null);

(statearr_31356_31437[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31301 === (11))){
var inst_31197 = (state_31300[(7)]);
var inst_31175 = (state_31300[(17)]);
var inst_31197__$1 = cljs.core.seq.call(null,inst_31175);
var state_31300__$1 = (function (){var statearr_31357 = state_31300;
(statearr_31357[(7)] = inst_31197__$1);

return statearr_31357;
})();
if(inst_31197__$1){
var statearr_31358_31438 = state_31300__$1;
(statearr_31358_31438[(1)] = (16));

} else {
var statearr_31359_31439 = state_31300__$1;
(statearr_31359_31439[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31301 === (9))){
var inst_31228 = (state_31300[(2)]);
var state_31300__$1 = state_31300;
var statearr_31360_31440 = state_31300__$1;
(statearr_31360_31440[(2)] = inst_31228);

(statearr_31360_31440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31301 === (5))){
var inst_31173 = cljs.core.deref.call(null,cs);
var inst_31174 = cljs.core.seq.call(null,inst_31173);
var inst_31175 = inst_31174;
var inst_31176 = null;
var inst_31177 = (0);
var inst_31178 = (0);
var state_31300__$1 = (function (){var statearr_31361 = state_31300;
(statearr_31361[(13)] = inst_31177);

(statearr_31361[(14)] = inst_31176);

(statearr_31361[(16)] = inst_31178);

(statearr_31361[(17)] = inst_31175);

return statearr_31361;
})();
var statearr_31362_31441 = state_31300__$1;
(statearr_31362_31441[(2)] = null);

(statearr_31362_31441[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31301 === (14))){
var state_31300__$1 = state_31300;
var statearr_31363_31442 = state_31300__$1;
(statearr_31363_31442[(2)] = null);

(statearr_31363_31442[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31301 === (45))){
var inst_31290 = (state_31300[(2)]);
var state_31300__$1 = state_31300;
var statearr_31364_31443 = state_31300__$1;
(statearr_31364_31443[(2)] = inst_31290);

(statearr_31364_31443[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31301 === (26))){
var inst_31231 = (state_31300[(29)]);
var inst_31285 = (state_31300[(2)]);
var inst_31286 = cljs.core.seq.call(null,inst_31231);
var state_31300__$1 = (function (){var statearr_31365 = state_31300;
(statearr_31365[(31)] = inst_31285);

return statearr_31365;
})();
if(inst_31286){
var statearr_31366_31444 = state_31300__$1;
(statearr_31366_31444[(1)] = (42));

} else {
var statearr_31367_31445 = state_31300__$1;
(statearr_31367_31445[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31301 === (16))){
var inst_31197 = (state_31300[(7)]);
var inst_31199 = cljs.core.chunked_seq_QMARK_.call(null,inst_31197);
var state_31300__$1 = state_31300;
if(inst_31199){
var statearr_31368_31446 = state_31300__$1;
(statearr_31368_31446[(1)] = (19));

} else {
var statearr_31369_31447 = state_31300__$1;
(statearr_31369_31447[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31301 === (38))){
var inst_31278 = (state_31300[(2)]);
var state_31300__$1 = state_31300;
var statearr_31370_31448 = state_31300__$1;
(statearr_31370_31448[(2)] = inst_31278);

(statearr_31370_31448[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31301 === (30))){
var state_31300__$1 = state_31300;
var statearr_31371_31449 = state_31300__$1;
(statearr_31371_31449[(2)] = null);

(statearr_31371_31449[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31301 === (10))){
var inst_31176 = (state_31300[(14)]);
var inst_31178 = (state_31300[(16)]);
var inst_31186 = cljs.core._nth.call(null,inst_31176,inst_31178);
var inst_31187 = cljs.core.nth.call(null,inst_31186,(0),null);
var inst_31188 = cljs.core.nth.call(null,inst_31186,(1),null);
var state_31300__$1 = (function (){var statearr_31372 = state_31300;
(statearr_31372[(26)] = inst_31187);

return statearr_31372;
})();
if(cljs.core.truth_(inst_31188)){
var statearr_31373_31450 = state_31300__$1;
(statearr_31373_31450[(1)] = (13));

} else {
var statearr_31374_31451 = state_31300__$1;
(statearr_31374_31451[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31301 === (18))){
var inst_31224 = (state_31300[(2)]);
var state_31300__$1 = state_31300;
var statearr_31375_31452 = state_31300__$1;
(statearr_31375_31452[(2)] = inst_31224);

(statearr_31375_31452[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31301 === (42))){
var state_31300__$1 = state_31300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31300__$1,(45),dchan);
} else {
if((state_val_31301 === (37))){
var inst_31267 = (state_31300[(23)]);
var inst_31258 = (state_31300[(25)]);
var inst_31166 = (state_31300[(11)]);
var inst_31267__$1 = cljs.core.first.call(null,inst_31258);
var inst_31268 = cljs.core.async.put_BANG_.call(null,inst_31267__$1,inst_31166,done);
var state_31300__$1 = (function (){var statearr_31376 = state_31300;
(statearr_31376[(23)] = inst_31267__$1);

return statearr_31376;
})();
if(cljs.core.truth_(inst_31268)){
var statearr_31377_31453 = state_31300__$1;
(statearr_31377_31453[(1)] = (39));

} else {
var statearr_31378_31454 = state_31300__$1;
(statearr_31378_31454[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31301 === (8))){
var inst_31177 = (state_31300[(13)]);
var inst_31178 = (state_31300[(16)]);
var inst_31180 = (inst_31178 < inst_31177);
var inst_31181 = inst_31180;
var state_31300__$1 = state_31300;
if(cljs.core.truth_(inst_31181)){
var statearr_31379_31455 = state_31300__$1;
(statearr_31379_31455[(1)] = (10));

} else {
var statearr_31380_31456 = state_31300__$1;
(statearr_31380_31456[(1)] = (11));

}

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
}
});})(c__25582__auto___31385,cs,m,dchan,dctr,done))
;
return ((function (switch__24619__auto__,c__25582__auto___31385,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24620__auto__ = null;
var cljs$core$async$mult_$_state_machine__24620__auto____0 = (function (){
var statearr_31381 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31381[(0)] = cljs$core$async$mult_$_state_machine__24620__auto__);

(statearr_31381[(1)] = (1));

return statearr_31381;
});
var cljs$core$async$mult_$_state_machine__24620__auto____1 = (function (state_31300){
while(true){
var ret_value__24621__auto__ = (function (){try{while(true){
var result__24622__auto__ = switch__24619__auto__.call(null,state_31300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24622__auto__;
}
break;
}
}catch (e31382){if((e31382 instanceof Object)){
var ex__24623__auto__ = e31382;
var statearr_31383_31457 = state_31300;
(statearr_31383_31457[(5)] = ex__24623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31458 = state_31300;
state_31300 = G__31458;
continue;
} else {
return ret_value__24621__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24620__auto__ = function(state_31300){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24620__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24620__auto____1.call(this,state_31300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24620__auto____0;
cljs$core$async$mult_$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24620__auto____1;
return cljs$core$async$mult_$_state_machine__24620__auto__;
})()
;})(switch__24619__auto__,c__25582__auto___31385,cs,m,dchan,dctr,done))
})();
var state__25584__auto__ = (function (){var statearr_31384 = f__25583__auto__.call(null);
(statearr_31384[(6)] = c__25582__auto___31385);

return statearr_31384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25584__auto__);
});})(c__25582__auto___31385,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31460 = arguments.length;
switch (G__31460) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,state_map);
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,mode);
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___31480 = arguments.length;
var i__4532__auto___31481 = (0);
while(true){
if((i__4532__auto___31481 < len__4531__auto___31480)){
args__4534__auto__.push((arguments[i__4532__auto___31481]));

var G__31482 = (i__4532__auto___31481 + (1));
i__4532__auto___31481 = G__31482;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31474){
var map__31475 = p__31474;
var map__31475__$1 = ((((!((map__31475 == null)))?(((((map__31475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31475):map__31475);
var opts = map__31475__$1;
var statearr_31477_31483 = state;
(statearr_31477_31483[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__31475,map__31475__$1,opts){
return (function (val){
var statearr_31478_31484 = state;
(statearr_31478_31484[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31475,map__31475__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_31479_31485 = state;
(statearr_31479_31485[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31470){
var G__31471 = cljs.core.first.call(null,seq31470);
var seq31470__$1 = cljs.core.next.call(null,seq31470);
var G__31472 = cljs.core.first.call(null,seq31470__$1);
var seq31470__$2 = cljs.core.next.call(null,seq31470__$1);
var G__31473 = cljs.core.first.call(null,seq31470__$2);
var seq31470__$3 = cljs.core.next.call(null,seq31470__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31471,G__31472,G__31473,seq31470__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31494 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31494 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31495){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31495 = meta31495;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31496,meta31495__$1){
var self__ = this;
var _31496__$1 = this;
return (new cljs.core.async.t_cljs$core$async31494(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31495__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31494.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31496){
var self__ = this;
var _31496__$1 = this;
return self__.meta31495;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31494.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31494.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31494.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31494.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31494.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31494.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31494.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31494.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31494.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31495","meta31495",-1530575937,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31494.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31494.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31494";

cljs.core.async.t_cljs$core$async31494.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async31494");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31494.
 */
cljs.core.async.__GT_t_cljs$core$async31494 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31494(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31495){
return (new cljs.core.async.t_cljs$core$async31494(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31495));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31494(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25582__auto___31716 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25582__auto___31716,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__25583__auto__ = (function (){var switch__24619__auto__ = ((function (c__25582__auto___31716,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31601){
var state_val_31603 = (state_31601[(1)]);
if((state_val_31603 === (7))){
var inst_31513 = (state_31601[(2)]);
var state_31601__$1 = state_31601;
var statearr_31604_31718 = state_31601__$1;
(statearr_31604_31718[(2)] = inst_31513);

(statearr_31604_31718[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (20))){
var inst_31525 = (state_31601[(7)]);
var state_31601__$1 = state_31601;
var statearr_31605_31727 = state_31601__$1;
(statearr_31605_31727[(2)] = inst_31525);

(statearr_31605_31727[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (27))){
var state_31601__$1 = state_31601;
var statearr_31606_31730 = state_31601__$1;
(statearr_31606_31730[(2)] = null);

(statearr_31606_31730[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (1))){
var inst_31500 = (state_31601[(8)]);
var inst_31500__$1 = calc_state.call(null);
var inst_31502 = (inst_31500__$1 == null);
var inst_31503 = cljs.core.not.call(null,inst_31502);
var state_31601__$1 = (function (){var statearr_31607 = state_31601;
(statearr_31607[(8)] = inst_31500__$1);

return statearr_31607;
})();
if(inst_31503){
var statearr_31608_31740 = state_31601__$1;
(statearr_31608_31740[(1)] = (2));

} else {
var statearr_31609_31741 = state_31601__$1;
(statearr_31609_31741[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (24))){
var inst_31572 = (state_31601[(9)]);
var inst_31549 = (state_31601[(10)]);
var inst_31558 = (state_31601[(11)]);
var inst_31572__$1 = inst_31549.call(null,inst_31558);
var state_31601__$1 = (function (){var statearr_31610 = state_31601;
(statearr_31610[(9)] = inst_31572__$1);

return statearr_31610;
})();
if(cljs.core.truth_(inst_31572__$1)){
var statearr_31611_31744 = state_31601__$1;
(statearr_31611_31744[(1)] = (29));

} else {
var statearr_31612_31747 = state_31601__$1;
(statearr_31612_31747[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (4))){
var inst_31516 = (state_31601[(2)]);
var state_31601__$1 = state_31601;
if(cljs.core.truth_(inst_31516)){
var statearr_31613_31748 = state_31601__$1;
(statearr_31613_31748[(1)] = (8));

} else {
var statearr_31614_31749 = state_31601__$1;
(statearr_31614_31749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (15))){
var inst_31543 = (state_31601[(2)]);
var state_31601__$1 = state_31601;
if(cljs.core.truth_(inst_31543)){
var statearr_31615_31756 = state_31601__$1;
(statearr_31615_31756[(1)] = (19));

} else {
var statearr_31616_31758 = state_31601__$1;
(statearr_31616_31758[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (21))){
var inst_31548 = (state_31601[(12)]);
var inst_31548__$1 = (state_31601[(2)]);
var inst_31549 = cljs.core.get.call(null,inst_31548__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31550 = cljs.core.get.call(null,inst_31548__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31551 = cljs.core.get.call(null,inst_31548__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31601__$1 = (function (){var statearr_31618 = state_31601;
(statearr_31618[(10)] = inst_31549);

(statearr_31618[(12)] = inst_31548__$1);

(statearr_31618[(13)] = inst_31550);

return statearr_31618;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31601__$1,(22),inst_31551);
} else {
if((state_val_31603 === (31))){
var inst_31581 = (state_31601[(2)]);
var state_31601__$1 = state_31601;
if(cljs.core.truth_(inst_31581)){
var statearr_31619_31776 = state_31601__$1;
(statearr_31619_31776[(1)] = (32));

} else {
var statearr_31620_31777 = state_31601__$1;
(statearr_31620_31777[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (32))){
var inst_31557 = (state_31601[(14)]);
var state_31601__$1 = state_31601;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31601__$1,(35),out,inst_31557);
} else {
if((state_val_31603 === (33))){
var inst_31548 = (state_31601[(12)]);
var inst_31525 = inst_31548;
var state_31601__$1 = (function (){var statearr_31622 = state_31601;
(statearr_31622[(7)] = inst_31525);

return statearr_31622;
})();
var statearr_31623_31780 = state_31601__$1;
(statearr_31623_31780[(2)] = null);

(statearr_31623_31780[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (13))){
var inst_31525 = (state_31601[(7)]);
var inst_31532 = inst_31525.cljs$lang$protocol_mask$partition0$;
var inst_31533 = (inst_31532 & (64));
var inst_31534 = inst_31525.cljs$core$ISeq$;
var inst_31535 = (cljs.core.PROTOCOL_SENTINEL === inst_31534);
var inst_31536 = ((inst_31533) || (inst_31535));
var state_31601__$1 = state_31601;
if(cljs.core.truth_(inst_31536)){
var statearr_31625_31783 = state_31601__$1;
(statearr_31625_31783[(1)] = (16));

} else {
var statearr_31626_31784 = state_31601__$1;
(statearr_31626_31784[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (22))){
var inst_31557 = (state_31601[(14)]);
var inst_31558 = (state_31601[(11)]);
var inst_31556 = (state_31601[(2)]);
var inst_31557__$1 = cljs.core.nth.call(null,inst_31556,(0),null);
var inst_31558__$1 = cljs.core.nth.call(null,inst_31556,(1),null);
var inst_31559 = (inst_31557__$1 == null);
var inst_31560 = cljs.core._EQ_.call(null,inst_31558__$1,change);
var inst_31561 = ((inst_31559) || (inst_31560));
var state_31601__$1 = (function (){var statearr_31627 = state_31601;
(statearr_31627[(14)] = inst_31557__$1);

(statearr_31627[(11)] = inst_31558__$1);

return statearr_31627;
})();
if(cljs.core.truth_(inst_31561)){
var statearr_31628_31790 = state_31601__$1;
(statearr_31628_31790[(1)] = (23));

} else {
var statearr_31629_31792 = state_31601__$1;
(statearr_31629_31792[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (36))){
var inst_31548 = (state_31601[(12)]);
var inst_31525 = inst_31548;
var state_31601__$1 = (function (){var statearr_31631 = state_31601;
(statearr_31631[(7)] = inst_31525);

return statearr_31631;
})();
var statearr_31632_31795 = state_31601__$1;
(statearr_31632_31795[(2)] = null);

(statearr_31632_31795[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (29))){
var inst_31572 = (state_31601[(9)]);
var state_31601__$1 = state_31601;
var statearr_31633_31796 = state_31601__$1;
(statearr_31633_31796[(2)] = inst_31572);

(statearr_31633_31796[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (6))){
var state_31601__$1 = state_31601;
var statearr_31634_31799 = state_31601__$1;
(statearr_31634_31799[(2)] = false);

(statearr_31634_31799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (28))){
var inst_31568 = (state_31601[(2)]);
var inst_31569 = calc_state.call(null);
var inst_31525 = inst_31569;
var state_31601__$1 = (function (){var statearr_31635 = state_31601;
(statearr_31635[(7)] = inst_31525);

(statearr_31635[(15)] = inst_31568);

return statearr_31635;
})();
var statearr_31636_31801 = state_31601__$1;
(statearr_31636_31801[(2)] = null);

(statearr_31636_31801[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (25))){
var inst_31595 = (state_31601[(2)]);
var state_31601__$1 = state_31601;
var statearr_31638_31802 = state_31601__$1;
(statearr_31638_31802[(2)] = inst_31595);

(statearr_31638_31802[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (34))){
var inst_31593 = (state_31601[(2)]);
var state_31601__$1 = state_31601;
var statearr_31639_31803 = state_31601__$1;
(statearr_31639_31803[(2)] = inst_31593);

(statearr_31639_31803[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (17))){
var state_31601__$1 = state_31601;
var statearr_31641_31805 = state_31601__$1;
(statearr_31641_31805[(2)] = false);

(statearr_31641_31805[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (3))){
var state_31601__$1 = state_31601;
var statearr_31642_31807 = state_31601__$1;
(statearr_31642_31807[(2)] = false);

(statearr_31642_31807[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (12))){
var inst_31597 = (state_31601[(2)]);
var state_31601__$1 = state_31601;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31601__$1,inst_31597);
} else {
if((state_val_31603 === (2))){
var inst_31500 = (state_31601[(8)]);
var inst_31505 = inst_31500.cljs$lang$protocol_mask$partition0$;
var inst_31506 = (inst_31505 & (64));
var inst_31507 = inst_31500.cljs$core$ISeq$;
var inst_31508 = (cljs.core.PROTOCOL_SENTINEL === inst_31507);
var inst_31509 = ((inst_31506) || (inst_31508));
var state_31601__$1 = state_31601;
if(cljs.core.truth_(inst_31509)){
var statearr_31643_31809 = state_31601__$1;
(statearr_31643_31809[(1)] = (5));

} else {
var statearr_31644_31810 = state_31601__$1;
(statearr_31644_31810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (23))){
var inst_31557 = (state_31601[(14)]);
var inst_31563 = (inst_31557 == null);
var state_31601__$1 = state_31601;
if(cljs.core.truth_(inst_31563)){
var statearr_31645_31814 = state_31601__$1;
(statearr_31645_31814[(1)] = (26));

} else {
var statearr_31646_31815 = state_31601__$1;
(statearr_31646_31815[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (35))){
var inst_31584 = (state_31601[(2)]);
var state_31601__$1 = state_31601;
if(cljs.core.truth_(inst_31584)){
var statearr_31648_31816 = state_31601__$1;
(statearr_31648_31816[(1)] = (36));

} else {
var statearr_31649_31818 = state_31601__$1;
(statearr_31649_31818[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (19))){
var inst_31525 = (state_31601[(7)]);
var inst_31545 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31525);
var state_31601__$1 = state_31601;
var statearr_31650_31819 = state_31601__$1;
(statearr_31650_31819[(2)] = inst_31545);

(statearr_31650_31819[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (11))){
var inst_31525 = (state_31601[(7)]);
var inst_31529 = (inst_31525 == null);
var inst_31530 = cljs.core.not.call(null,inst_31529);
var state_31601__$1 = state_31601;
if(inst_31530){
var statearr_31651_31822 = state_31601__$1;
(statearr_31651_31822[(1)] = (13));

} else {
var statearr_31653_31823 = state_31601__$1;
(statearr_31653_31823[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (9))){
var inst_31500 = (state_31601[(8)]);
var state_31601__$1 = state_31601;
var statearr_31655_31824 = state_31601__$1;
(statearr_31655_31824[(2)] = inst_31500);

(statearr_31655_31824[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (5))){
var state_31601__$1 = state_31601;
var statearr_31658_31825 = state_31601__$1;
(statearr_31658_31825[(2)] = true);

(statearr_31658_31825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (14))){
var state_31601__$1 = state_31601;
var statearr_31661_31827 = state_31601__$1;
(statearr_31661_31827[(2)] = false);

(statearr_31661_31827[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (26))){
var inst_31558 = (state_31601[(11)]);
var inst_31565 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31558);
var state_31601__$1 = state_31601;
var statearr_31664_31830 = state_31601__$1;
(statearr_31664_31830[(2)] = inst_31565);

(statearr_31664_31830[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (16))){
var state_31601__$1 = state_31601;
var statearr_31665_31831 = state_31601__$1;
(statearr_31665_31831[(2)] = true);

(statearr_31665_31831[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (38))){
var inst_31589 = (state_31601[(2)]);
var state_31601__$1 = state_31601;
var statearr_31666_31832 = state_31601__$1;
(statearr_31666_31832[(2)] = inst_31589);

(statearr_31666_31832[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (30))){
var inst_31549 = (state_31601[(10)]);
var inst_31550 = (state_31601[(13)]);
var inst_31558 = (state_31601[(11)]);
var inst_31576 = cljs.core.empty_QMARK_.call(null,inst_31549);
var inst_31577 = inst_31550.call(null,inst_31558);
var inst_31578 = cljs.core.not.call(null,inst_31577);
var inst_31579 = ((inst_31576) && (inst_31578));
var state_31601__$1 = state_31601;
var statearr_31668_31834 = state_31601__$1;
(statearr_31668_31834[(2)] = inst_31579);

(statearr_31668_31834[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (10))){
var inst_31500 = (state_31601[(8)]);
var inst_31521 = (state_31601[(2)]);
var inst_31522 = cljs.core.get.call(null,inst_31521,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31523 = cljs.core.get.call(null,inst_31521,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31524 = cljs.core.get.call(null,inst_31521,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31525 = inst_31500;
var state_31601__$1 = (function (){var statearr_31669 = state_31601;
(statearr_31669[(7)] = inst_31525);

(statearr_31669[(16)] = inst_31523);

(statearr_31669[(17)] = inst_31524);

(statearr_31669[(18)] = inst_31522);

return statearr_31669;
})();
var statearr_31670_31836 = state_31601__$1;
(statearr_31670_31836[(2)] = null);

(statearr_31670_31836[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (18))){
var inst_31540 = (state_31601[(2)]);
var state_31601__$1 = state_31601;
var statearr_31672_31839 = state_31601__$1;
(statearr_31672_31839[(2)] = inst_31540);

(statearr_31672_31839[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (37))){
var state_31601__$1 = state_31601;
var statearr_31673_31840 = state_31601__$1;
(statearr_31673_31840[(2)] = null);

(statearr_31673_31840[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31603 === (8))){
var inst_31500 = (state_31601[(8)]);
var inst_31518 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31500);
var state_31601__$1 = state_31601;
var statearr_31674_31844 = state_31601__$1;
(statearr_31674_31844[(2)] = inst_31518);

(statearr_31674_31844[(1)] = (10));


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
}
}
}
}
}
});})(c__25582__auto___31716,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24619__auto__,c__25582__auto___31716,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24620__auto__ = null;
var cljs$core$async$mix_$_state_machine__24620__auto____0 = (function (){
var statearr_31676 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31676[(0)] = cljs$core$async$mix_$_state_machine__24620__auto__);

(statearr_31676[(1)] = (1));

return statearr_31676;
});
var cljs$core$async$mix_$_state_machine__24620__auto____1 = (function (state_31601){
while(true){
var ret_value__24621__auto__ = (function (){try{while(true){
var result__24622__auto__ = switch__24619__auto__.call(null,state_31601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24622__auto__;
}
break;
}
}catch (e31677){if((e31677 instanceof Object)){
var ex__24623__auto__ = e31677;
var statearr_31678_31851 = state_31601;
(statearr_31678_31851[(5)] = ex__24623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31852 = state_31601;
state_31601 = G__31852;
continue;
} else {
return ret_value__24621__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24620__auto__ = function(state_31601){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24620__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24620__auto____1.call(this,state_31601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24620__auto____0;
cljs$core$async$mix_$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24620__auto____1;
return cljs$core$async$mix_$_state_machine__24620__auto__;
})()
;})(switch__24619__auto__,c__25582__auto___31716,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__25584__auto__ = (function (){var statearr_31682 = f__25583__auto__.call(null);
(statearr_31682[(6)] = c__25582__auto___31716);

return statearr_31682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25584__auto__);
});})(c__25582__auto___31716,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31871 = arguments.length;
switch (G__31871) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31914 = arguments.length;
switch (G__31914) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3949__auto__,mults){
return (function (p1__31904_SHARP_){
if(cljs.core.truth_(p1__31904_SHARP_.call(null,topic))){
return p1__31904_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31904_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31924 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31924 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31925){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31925 = meta31925;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31926,meta31925__$1){
var self__ = this;
var _31926__$1 = this;
return (new cljs.core.async.t_cljs$core$async31924(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31925__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31924.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31926){
var self__ = this;
var _31926__$1 = this;
return self__.meta31925;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31924.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31924.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31924.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31924.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31924.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31924.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31924.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31924.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31925","meta31925",-1915889030,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31924.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31924.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31924";

cljs.core.async.t_cljs$core$async31924.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async31924");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31924.
 */
cljs.core.async.__GT_t_cljs$core$async31924 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31924(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31925){
return (new cljs.core.async.t_cljs$core$async31924(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31925));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31924(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25582__auto___32174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25582__auto___32174,mults,ensure_mult,p){
return (function (){
var f__25583__auto__ = (function (){var switch__24619__auto__ = ((function (c__25582__auto___32174,mults,ensure_mult,p){
return (function (state_32044){
var state_val_32046 = (state_32044[(1)]);
if((state_val_32046 === (7))){
var inst_32037 = (state_32044[(2)]);
var state_32044__$1 = state_32044;
var statearr_32054_32175 = state_32044__$1;
(statearr_32054_32175[(2)] = inst_32037);

(statearr_32054_32175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (20))){
var state_32044__$1 = state_32044;
var statearr_32059_32176 = state_32044__$1;
(statearr_32059_32176[(2)] = null);

(statearr_32059_32176[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (1))){
var state_32044__$1 = state_32044;
var statearr_32063_32177 = state_32044__$1;
(statearr_32063_32177[(2)] = null);

(statearr_32063_32177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (24))){
var inst_32016 = (state_32044[(7)]);
var inst_32029 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32016);
var state_32044__$1 = state_32044;
var statearr_32067_32178 = state_32044__$1;
(statearr_32067_32178[(2)] = inst_32029);

(statearr_32067_32178[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (4))){
var inst_31956 = (state_32044[(8)]);
var inst_31956__$1 = (state_32044[(2)]);
var inst_31957 = (inst_31956__$1 == null);
var state_32044__$1 = (function (){var statearr_32074 = state_32044;
(statearr_32074[(8)] = inst_31956__$1);

return statearr_32074;
})();
if(cljs.core.truth_(inst_31957)){
var statearr_32079_32186 = state_32044__$1;
(statearr_32079_32186[(1)] = (5));

} else {
var statearr_32080_32187 = state_32044__$1;
(statearr_32080_32187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (15))){
var inst_32010 = (state_32044[(2)]);
var state_32044__$1 = state_32044;
var statearr_32083_32188 = state_32044__$1;
(statearr_32083_32188[(2)] = inst_32010);

(statearr_32083_32188[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (21))){
var inst_32034 = (state_32044[(2)]);
var state_32044__$1 = (function (){var statearr_32087 = state_32044;
(statearr_32087[(9)] = inst_32034);

return statearr_32087;
})();
var statearr_32089_32189 = state_32044__$1;
(statearr_32089_32189[(2)] = null);

(statearr_32089_32189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (13))){
var inst_31986 = (state_32044[(10)]);
var inst_31988 = cljs.core.chunked_seq_QMARK_.call(null,inst_31986);
var state_32044__$1 = state_32044;
if(inst_31988){
var statearr_32091_32190 = state_32044__$1;
(statearr_32091_32190[(1)] = (16));

} else {
var statearr_32092_32191 = state_32044__$1;
(statearr_32092_32191[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (22))){
var inst_32025 = (state_32044[(2)]);
var state_32044__$1 = state_32044;
if(cljs.core.truth_(inst_32025)){
var statearr_32093_32222 = state_32044__$1;
(statearr_32093_32222[(1)] = (23));

} else {
var statearr_32094_32223 = state_32044__$1;
(statearr_32094_32223[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (6))){
var inst_32018 = (state_32044[(11)]);
var inst_31956 = (state_32044[(8)]);
var inst_32016 = (state_32044[(7)]);
var inst_32016__$1 = topic_fn.call(null,inst_31956);
var inst_32017 = cljs.core.deref.call(null,mults);
var inst_32018__$1 = cljs.core.get.call(null,inst_32017,inst_32016__$1);
var state_32044__$1 = (function (){var statearr_32095 = state_32044;
(statearr_32095[(11)] = inst_32018__$1);

(statearr_32095[(7)] = inst_32016__$1);

return statearr_32095;
})();
if(cljs.core.truth_(inst_32018__$1)){
var statearr_32096_32229 = state_32044__$1;
(statearr_32096_32229[(1)] = (19));

} else {
var statearr_32097_32232 = state_32044__$1;
(statearr_32097_32232[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (25))){
var inst_32031 = (state_32044[(2)]);
var state_32044__$1 = state_32044;
var statearr_32098_32235 = state_32044__$1;
(statearr_32098_32235[(2)] = inst_32031);

(statearr_32098_32235[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (17))){
var inst_31986 = (state_32044[(10)]);
var inst_32000 = cljs.core.first.call(null,inst_31986);
var inst_32002 = cljs.core.async.muxch_STAR_.call(null,inst_32000);
var inst_32003 = cljs.core.async.close_BANG_.call(null,inst_32002);
var inst_32004 = cljs.core.next.call(null,inst_31986);
var inst_31967 = inst_32004;
var inst_31968 = null;
var inst_31969 = (0);
var inst_31970 = (0);
var state_32044__$1 = (function (){var statearr_32101 = state_32044;
(statearr_32101[(12)] = inst_31967);

(statearr_32101[(13)] = inst_32003);

(statearr_32101[(14)] = inst_31969);

(statearr_32101[(15)] = inst_31968);

(statearr_32101[(16)] = inst_31970);

return statearr_32101;
})();
var statearr_32102_32242 = state_32044__$1;
(statearr_32102_32242[(2)] = null);

(statearr_32102_32242[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (3))){
var inst_32039 = (state_32044[(2)]);
var state_32044__$1 = state_32044;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32044__$1,inst_32039);
} else {
if((state_val_32046 === (12))){
var inst_32012 = (state_32044[(2)]);
var state_32044__$1 = state_32044;
var statearr_32103_32243 = state_32044__$1;
(statearr_32103_32243[(2)] = inst_32012);

(statearr_32103_32243[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (2))){
var state_32044__$1 = state_32044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32044__$1,(4),ch);
} else {
if((state_val_32046 === (23))){
var state_32044__$1 = state_32044;
var statearr_32106_32244 = state_32044__$1;
(statearr_32106_32244[(2)] = null);

(statearr_32106_32244[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (19))){
var inst_32018 = (state_32044[(11)]);
var inst_31956 = (state_32044[(8)]);
var inst_32023 = cljs.core.async.muxch_STAR_.call(null,inst_32018);
var state_32044__$1 = state_32044;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32044__$1,(22),inst_32023,inst_31956);
} else {
if((state_val_32046 === (11))){
var inst_31967 = (state_32044[(12)]);
var inst_31986 = (state_32044[(10)]);
var inst_31986__$1 = cljs.core.seq.call(null,inst_31967);
var state_32044__$1 = (function (){var statearr_32116 = state_32044;
(statearr_32116[(10)] = inst_31986__$1);

return statearr_32116;
})();
if(inst_31986__$1){
var statearr_32119_32245 = state_32044__$1;
(statearr_32119_32245[(1)] = (13));

} else {
var statearr_32120_32246 = state_32044__$1;
(statearr_32120_32246[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (9))){
var inst_32014 = (state_32044[(2)]);
var state_32044__$1 = state_32044;
var statearr_32121_32247 = state_32044__$1;
(statearr_32121_32247[(2)] = inst_32014);

(statearr_32121_32247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (5))){
var inst_31964 = cljs.core.deref.call(null,mults);
var inst_31965 = cljs.core.vals.call(null,inst_31964);
var inst_31966 = cljs.core.seq.call(null,inst_31965);
var inst_31967 = inst_31966;
var inst_31968 = null;
var inst_31969 = (0);
var inst_31970 = (0);
var state_32044__$1 = (function (){var statearr_32123 = state_32044;
(statearr_32123[(12)] = inst_31967);

(statearr_32123[(14)] = inst_31969);

(statearr_32123[(15)] = inst_31968);

(statearr_32123[(16)] = inst_31970);

return statearr_32123;
})();
var statearr_32125_32251 = state_32044__$1;
(statearr_32125_32251[(2)] = null);

(statearr_32125_32251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (14))){
var state_32044__$1 = state_32044;
var statearr_32133_32252 = state_32044__$1;
(statearr_32133_32252[(2)] = null);

(statearr_32133_32252[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (16))){
var inst_31986 = (state_32044[(10)]);
var inst_31991 = cljs.core.chunk_first.call(null,inst_31986);
var inst_31995 = cljs.core.chunk_rest.call(null,inst_31986);
var inst_31996 = cljs.core.count.call(null,inst_31991);
var inst_31967 = inst_31995;
var inst_31968 = inst_31991;
var inst_31969 = inst_31996;
var inst_31970 = (0);
var state_32044__$1 = (function (){var statearr_32138 = state_32044;
(statearr_32138[(12)] = inst_31967);

(statearr_32138[(14)] = inst_31969);

(statearr_32138[(15)] = inst_31968);

(statearr_32138[(16)] = inst_31970);

return statearr_32138;
})();
var statearr_32141_32256 = state_32044__$1;
(statearr_32141_32256[(2)] = null);

(statearr_32141_32256[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (10))){
var inst_31967 = (state_32044[(12)]);
var inst_31969 = (state_32044[(14)]);
var inst_31968 = (state_32044[(15)]);
var inst_31970 = (state_32044[(16)]);
var inst_31978 = cljs.core._nth.call(null,inst_31968,inst_31970);
var inst_31979 = cljs.core.async.muxch_STAR_.call(null,inst_31978);
var inst_31980 = cljs.core.async.close_BANG_.call(null,inst_31979);
var inst_31982 = (inst_31970 + (1));
var tmp32129 = inst_31967;
var tmp32130 = inst_31969;
var tmp32131 = inst_31968;
var inst_31967__$1 = tmp32129;
var inst_31968__$1 = tmp32131;
var inst_31969__$1 = tmp32130;
var inst_31970__$1 = inst_31982;
var state_32044__$1 = (function (){var statearr_32150 = state_32044;
(statearr_32150[(12)] = inst_31967__$1);

(statearr_32150[(17)] = inst_31980);

(statearr_32150[(14)] = inst_31969__$1);

(statearr_32150[(15)] = inst_31968__$1);

(statearr_32150[(16)] = inst_31970__$1);

return statearr_32150;
})();
var statearr_32154_32260 = state_32044__$1;
(statearr_32154_32260[(2)] = null);

(statearr_32154_32260[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (18))){
var inst_32007 = (state_32044[(2)]);
var state_32044__$1 = state_32044;
var statearr_32158_32262 = state_32044__$1;
(statearr_32158_32262[(2)] = inst_32007);

(statearr_32158_32262[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32046 === (8))){
var inst_31969 = (state_32044[(14)]);
var inst_31970 = (state_32044[(16)]);
var inst_31973 = (inst_31970 < inst_31969);
var inst_31974 = inst_31973;
var state_32044__$1 = state_32044;
if(cljs.core.truth_(inst_31974)){
var statearr_32159_32263 = state_32044__$1;
(statearr_32159_32263[(1)] = (10));

} else {
var statearr_32160_32264 = state_32044__$1;
(statearr_32160_32264[(1)] = (11));

}

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
}
}
}
});})(c__25582__auto___32174,mults,ensure_mult,p))
;
return ((function (switch__24619__auto__,c__25582__auto___32174,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24620__auto__ = null;
var cljs$core$async$state_machine__24620__auto____0 = (function (){
var statearr_32161 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32161[(0)] = cljs$core$async$state_machine__24620__auto__);

(statearr_32161[(1)] = (1));

return statearr_32161;
});
var cljs$core$async$state_machine__24620__auto____1 = (function (state_32044){
while(true){
var ret_value__24621__auto__ = (function (){try{while(true){
var result__24622__auto__ = switch__24619__auto__.call(null,state_32044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24622__auto__;
}
break;
}
}catch (e32164){if((e32164 instanceof Object)){
var ex__24623__auto__ = e32164;
var statearr_32165_32269 = state_32044;
(statearr_32165_32269[(5)] = ex__24623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32271 = state_32044;
state_32044 = G__32271;
continue;
} else {
return ret_value__24621__auto__;
}
break;
}
});
cljs$core$async$state_machine__24620__auto__ = function(state_32044){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24620__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24620__auto____1.call(this,state_32044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24620__auto____0;
cljs$core$async$state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24620__auto____1;
return cljs$core$async$state_machine__24620__auto__;
})()
;})(switch__24619__auto__,c__25582__auto___32174,mults,ensure_mult,p))
})();
var state__25584__auto__ = (function (){var statearr_32168 = f__25583__auto__.call(null);
(statearr_32168[(6)] = c__25582__auto___32174);

return statearr_32168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25584__auto__);
});})(c__25582__auto___32174,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32275 = arguments.length;
switch (G__32275) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32292 = arguments.length;
switch (G__32292) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32306 = arguments.length;
switch (G__32306) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__25582__auto___32397 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25582__auto___32397,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__25583__auto__ = (function (){var switch__24619__auto__ = ((function (c__25582__auto___32397,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32349){
var state_val_32350 = (state_32349[(1)]);
if((state_val_32350 === (7))){
var state_32349__$1 = state_32349;
var statearr_32351_32402 = state_32349__$1;
(statearr_32351_32402[(2)] = null);

(statearr_32351_32402[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32350 === (1))){
var state_32349__$1 = state_32349;
var statearr_32352_32404 = state_32349__$1;
(statearr_32352_32404[(2)] = null);

(statearr_32352_32404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32350 === (4))){
var inst_32311 = (state_32349[(7)]);
var inst_32313 = (inst_32311 < cnt);
var state_32349__$1 = state_32349;
if(cljs.core.truth_(inst_32313)){
var statearr_32353_32408 = state_32349__$1;
(statearr_32353_32408[(1)] = (6));

} else {
var statearr_32354_32409 = state_32349__$1;
(statearr_32354_32409[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32350 === (15))){
var inst_32343 = (state_32349[(2)]);
var state_32349__$1 = state_32349;
var statearr_32356_32413 = state_32349__$1;
(statearr_32356_32413[(2)] = inst_32343);

(statearr_32356_32413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32350 === (13))){
var inst_32336 = cljs.core.async.close_BANG_.call(null,out);
var state_32349__$1 = state_32349;
var statearr_32359_32414 = state_32349__$1;
(statearr_32359_32414[(2)] = inst_32336);

(statearr_32359_32414[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32350 === (6))){
var state_32349__$1 = state_32349;
var statearr_32362_32415 = state_32349__$1;
(statearr_32362_32415[(2)] = null);

(statearr_32362_32415[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32350 === (3))){
var inst_32345 = (state_32349[(2)]);
var state_32349__$1 = state_32349;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32349__$1,inst_32345);
} else {
if((state_val_32350 === (12))){
var inst_32333 = (state_32349[(8)]);
var inst_32333__$1 = (state_32349[(2)]);
var inst_32334 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32333__$1);
var state_32349__$1 = (function (){var statearr_32364 = state_32349;
(statearr_32364[(8)] = inst_32333__$1);

return statearr_32364;
})();
if(cljs.core.truth_(inst_32334)){
var statearr_32365_32417 = state_32349__$1;
(statearr_32365_32417[(1)] = (13));

} else {
var statearr_32366_32419 = state_32349__$1;
(statearr_32366_32419[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32350 === (2))){
var inst_32310 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32311 = (0);
var state_32349__$1 = (function (){var statearr_32367 = state_32349;
(statearr_32367[(7)] = inst_32311);

(statearr_32367[(9)] = inst_32310);

return statearr_32367;
})();
var statearr_32368_32421 = state_32349__$1;
(statearr_32368_32421[(2)] = null);

(statearr_32368_32421[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32350 === (11))){
var inst_32311 = (state_32349[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32349,(10),Object,null,(9));
var inst_32320 = chs__$1.call(null,inst_32311);
var inst_32321 = done.call(null,inst_32311);
var inst_32322 = cljs.core.async.take_BANG_.call(null,inst_32320,inst_32321);
var state_32349__$1 = state_32349;
var statearr_32370_32426 = state_32349__$1;
(statearr_32370_32426[(2)] = inst_32322);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32349__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32350 === (9))){
var inst_32311 = (state_32349[(7)]);
var inst_32324 = (state_32349[(2)]);
var inst_32325 = (inst_32311 + (1));
var inst_32311__$1 = inst_32325;
var state_32349__$1 = (function (){var statearr_32371 = state_32349;
(statearr_32371[(7)] = inst_32311__$1);

(statearr_32371[(10)] = inst_32324);

return statearr_32371;
})();
var statearr_32372_32431 = state_32349__$1;
(statearr_32372_32431[(2)] = null);

(statearr_32372_32431[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32350 === (5))){
var inst_32331 = (state_32349[(2)]);
var state_32349__$1 = (function (){var statearr_32373 = state_32349;
(statearr_32373[(11)] = inst_32331);

return statearr_32373;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32349__$1,(12),dchan);
} else {
if((state_val_32350 === (14))){
var inst_32333 = (state_32349[(8)]);
var inst_32338 = cljs.core.apply.call(null,f,inst_32333);
var state_32349__$1 = state_32349;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32349__$1,(16),out,inst_32338);
} else {
if((state_val_32350 === (16))){
var inst_32340 = (state_32349[(2)]);
var state_32349__$1 = (function (){var statearr_32375 = state_32349;
(statearr_32375[(12)] = inst_32340);

return statearr_32375;
})();
var statearr_32376_32438 = state_32349__$1;
(statearr_32376_32438[(2)] = null);

(statearr_32376_32438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32350 === (10))){
var inst_32315 = (state_32349[(2)]);
var inst_32316 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32349__$1 = (function (){var statearr_32377 = state_32349;
(statearr_32377[(13)] = inst_32315);

return statearr_32377;
})();
var statearr_32378_32443 = state_32349__$1;
(statearr_32378_32443[(2)] = inst_32316);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32349__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32350 === (8))){
var inst_32329 = (state_32349[(2)]);
var state_32349__$1 = state_32349;
var statearr_32379_32445 = state_32349__$1;
(statearr_32379_32445[(2)] = inst_32329);

(statearr_32379_32445[(1)] = (5));


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
}
}
}
}
}
});})(c__25582__auto___32397,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24619__auto__,c__25582__auto___32397,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24620__auto__ = null;
var cljs$core$async$state_machine__24620__auto____0 = (function (){
var statearr_32380 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32380[(0)] = cljs$core$async$state_machine__24620__auto__);

(statearr_32380[(1)] = (1));

return statearr_32380;
});
var cljs$core$async$state_machine__24620__auto____1 = (function (state_32349){
while(true){
var ret_value__24621__auto__ = (function (){try{while(true){
var result__24622__auto__ = switch__24619__auto__.call(null,state_32349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24622__auto__;
}
break;
}
}catch (e32381){if((e32381 instanceof Object)){
var ex__24623__auto__ = e32381;
var statearr_32382_32455 = state_32349;
(statearr_32382_32455[(5)] = ex__24623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32456 = state_32349;
state_32349 = G__32456;
continue;
} else {
return ret_value__24621__auto__;
}
break;
}
});
cljs$core$async$state_machine__24620__auto__ = function(state_32349){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24620__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24620__auto____1.call(this,state_32349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24620__auto____0;
cljs$core$async$state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24620__auto____1;
return cljs$core$async$state_machine__24620__auto__;
})()
;})(switch__24619__auto__,c__25582__auto___32397,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__25584__auto__ = (function (){var statearr_32386 = f__25583__auto__.call(null);
(statearr_32386[(6)] = c__25582__auto___32397);

return statearr_32386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25584__auto__);
});})(c__25582__auto___32397,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32463 = arguments.length;
switch (G__32463) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25582__auto___32551 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25582__auto___32551,out){
return (function (){
var f__25583__auto__ = (function (){var switch__24619__auto__ = ((function (c__25582__auto___32551,out){
return (function (state_32501){
var state_val_32502 = (state_32501[(1)]);
if((state_val_32502 === (7))){
var inst_32479 = (state_32501[(7)]);
var inst_32480 = (state_32501[(8)]);
var inst_32479__$1 = (state_32501[(2)]);
var inst_32480__$1 = cljs.core.nth.call(null,inst_32479__$1,(0),null);
var inst_32481 = cljs.core.nth.call(null,inst_32479__$1,(1),null);
var inst_32482 = (inst_32480__$1 == null);
var state_32501__$1 = (function (){var statearr_32505 = state_32501;
(statearr_32505[(7)] = inst_32479__$1);

(statearr_32505[(8)] = inst_32480__$1);

(statearr_32505[(9)] = inst_32481);

return statearr_32505;
})();
if(cljs.core.truth_(inst_32482)){
var statearr_32506_32557 = state_32501__$1;
(statearr_32506_32557[(1)] = (8));

} else {
var statearr_32507_32558 = state_32501__$1;
(statearr_32507_32558[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32502 === (1))){
var inst_32468 = cljs.core.vec.call(null,chs);
var inst_32469 = inst_32468;
var state_32501__$1 = (function (){var statearr_32508 = state_32501;
(statearr_32508[(10)] = inst_32469);

return statearr_32508;
})();
var statearr_32509_32560 = state_32501__$1;
(statearr_32509_32560[(2)] = null);

(statearr_32509_32560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32502 === (4))){
var inst_32469 = (state_32501[(10)]);
var state_32501__$1 = state_32501;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32501__$1,(7),inst_32469);
} else {
if((state_val_32502 === (6))){
var inst_32497 = (state_32501[(2)]);
var state_32501__$1 = state_32501;
var statearr_32510_32562 = state_32501__$1;
(statearr_32510_32562[(2)] = inst_32497);

(statearr_32510_32562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32502 === (3))){
var inst_32499 = (state_32501[(2)]);
var state_32501__$1 = state_32501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32501__$1,inst_32499);
} else {
if((state_val_32502 === (2))){
var inst_32469 = (state_32501[(10)]);
var inst_32472 = cljs.core.count.call(null,inst_32469);
var inst_32473 = (inst_32472 > (0));
var state_32501__$1 = state_32501;
if(cljs.core.truth_(inst_32473)){
var statearr_32514_32565 = state_32501__$1;
(statearr_32514_32565[(1)] = (4));

} else {
var statearr_32515_32566 = state_32501__$1;
(statearr_32515_32566[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32502 === (11))){
var inst_32469 = (state_32501[(10)]);
var inst_32490 = (state_32501[(2)]);
var tmp32511 = inst_32469;
var inst_32469__$1 = tmp32511;
var state_32501__$1 = (function (){var statearr_32516 = state_32501;
(statearr_32516[(11)] = inst_32490);

(statearr_32516[(10)] = inst_32469__$1);

return statearr_32516;
})();
var statearr_32517_32568 = state_32501__$1;
(statearr_32517_32568[(2)] = null);

(statearr_32517_32568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32502 === (9))){
var inst_32480 = (state_32501[(8)]);
var state_32501__$1 = state_32501;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32501__$1,(11),out,inst_32480);
} else {
if((state_val_32502 === (5))){
var inst_32495 = cljs.core.async.close_BANG_.call(null,out);
var state_32501__$1 = state_32501;
var statearr_32519_32569 = state_32501__$1;
(statearr_32519_32569[(2)] = inst_32495);

(statearr_32519_32569[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32502 === (10))){
var inst_32493 = (state_32501[(2)]);
var state_32501__$1 = state_32501;
var statearr_32522_32570 = state_32501__$1;
(statearr_32522_32570[(2)] = inst_32493);

(statearr_32522_32570[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32502 === (8))){
var inst_32479 = (state_32501[(7)]);
var inst_32480 = (state_32501[(8)]);
var inst_32481 = (state_32501[(9)]);
var inst_32469 = (state_32501[(10)]);
var inst_32485 = (function (){var cs = inst_32469;
var vec__32475 = inst_32479;
var v = inst_32480;
var c = inst_32481;
return ((function (cs,vec__32475,v,c,inst_32479,inst_32480,inst_32481,inst_32469,state_val_32502,c__25582__auto___32551,out){
return (function (p1__32461_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32461_SHARP_);
});
;})(cs,vec__32475,v,c,inst_32479,inst_32480,inst_32481,inst_32469,state_val_32502,c__25582__auto___32551,out))
})();
var inst_32486 = cljs.core.filterv.call(null,inst_32485,inst_32469);
var inst_32469__$1 = inst_32486;
var state_32501__$1 = (function (){var statearr_32525 = state_32501;
(statearr_32525[(10)] = inst_32469__$1);

return statearr_32525;
})();
var statearr_32527_32576 = state_32501__$1;
(statearr_32527_32576[(2)] = null);

(statearr_32527_32576[(1)] = (2));


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
});})(c__25582__auto___32551,out))
;
return ((function (switch__24619__auto__,c__25582__auto___32551,out){
return (function() {
var cljs$core$async$state_machine__24620__auto__ = null;
var cljs$core$async$state_machine__24620__auto____0 = (function (){
var statearr_32531 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32531[(0)] = cljs$core$async$state_machine__24620__auto__);

(statearr_32531[(1)] = (1));

return statearr_32531;
});
var cljs$core$async$state_machine__24620__auto____1 = (function (state_32501){
while(true){
var ret_value__24621__auto__ = (function (){try{while(true){
var result__24622__auto__ = switch__24619__auto__.call(null,state_32501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24622__auto__;
}
break;
}
}catch (e32533){if((e32533 instanceof Object)){
var ex__24623__auto__ = e32533;
var statearr_32535_32579 = state_32501;
(statearr_32535_32579[(5)] = ex__24623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32581 = state_32501;
state_32501 = G__32581;
continue;
} else {
return ret_value__24621__auto__;
}
break;
}
});
cljs$core$async$state_machine__24620__auto__ = function(state_32501){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24620__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24620__auto____1.call(this,state_32501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24620__auto____0;
cljs$core$async$state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24620__auto____1;
return cljs$core$async$state_machine__24620__auto__;
})()
;})(switch__24619__auto__,c__25582__auto___32551,out))
})();
var state__25584__auto__ = (function (){var statearr_32537 = f__25583__auto__.call(null);
(statearr_32537[(6)] = c__25582__auto___32551);

return statearr_32537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25584__auto__);
});})(c__25582__auto___32551,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32587 = arguments.length;
switch (G__32587) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25582__auto___32653 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25582__auto___32653,out){
return (function (){
var f__25583__auto__ = (function (){var switch__24619__auto__ = ((function (c__25582__auto___32653,out){
return (function (state_32613){
var state_val_32614 = (state_32613[(1)]);
if((state_val_32614 === (7))){
var inst_32595 = (state_32613[(7)]);
var inst_32595__$1 = (state_32613[(2)]);
var inst_32596 = (inst_32595__$1 == null);
var inst_32597 = cljs.core.not.call(null,inst_32596);
var state_32613__$1 = (function (){var statearr_32616 = state_32613;
(statearr_32616[(7)] = inst_32595__$1);

return statearr_32616;
})();
if(inst_32597){
var statearr_32617_32656 = state_32613__$1;
(statearr_32617_32656[(1)] = (8));

} else {
var statearr_32618_32657 = state_32613__$1;
(statearr_32618_32657[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (1))){
var inst_32588 = (0);
var state_32613__$1 = (function (){var statearr_32619 = state_32613;
(statearr_32619[(8)] = inst_32588);

return statearr_32619;
})();
var statearr_32620_32658 = state_32613__$1;
(statearr_32620_32658[(2)] = null);

(statearr_32620_32658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (4))){
var state_32613__$1 = state_32613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32613__$1,(7),ch);
} else {
if((state_val_32614 === (6))){
var inst_32608 = (state_32613[(2)]);
var state_32613__$1 = state_32613;
var statearr_32622_32663 = state_32613__$1;
(statearr_32622_32663[(2)] = inst_32608);

(statearr_32622_32663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (3))){
var inst_32610 = (state_32613[(2)]);
var inst_32611 = cljs.core.async.close_BANG_.call(null,out);
var state_32613__$1 = (function (){var statearr_32623 = state_32613;
(statearr_32623[(9)] = inst_32610);

return statearr_32623;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32613__$1,inst_32611);
} else {
if((state_val_32614 === (2))){
var inst_32588 = (state_32613[(8)]);
var inst_32590 = (inst_32588 < n);
var state_32613__$1 = state_32613;
if(cljs.core.truth_(inst_32590)){
var statearr_32625_32667 = state_32613__$1;
(statearr_32625_32667[(1)] = (4));

} else {
var statearr_32630_32668 = state_32613__$1;
(statearr_32630_32668[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (11))){
var inst_32588 = (state_32613[(8)]);
var inst_32600 = (state_32613[(2)]);
var inst_32601 = (inst_32588 + (1));
var inst_32588__$1 = inst_32601;
var state_32613__$1 = (function (){var statearr_32631 = state_32613;
(statearr_32631[(10)] = inst_32600);

(statearr_32631[(8)] = inst_32588__$1);

return statearr_32631;
})();
var statearr_32635_32673 = state_32613__$1;
(statearr_32635_32673[(2)] = null);

(statearr_32635_32673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (9))){
var state_32613__$1 = state_32613;
var statearr_32636_32674 = state_32613__$1;
(statearr_32636_32674[(2)] = null);

(statearr_32636_32674[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (5))){
var state_32613__$1 = state_32613;
var statearr_32637_32675 = state_32613__$1;
(statearr_32637_32675[(2)] = null);

(statearr_32637_32675[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (10))){
var inst_32605 = (state_32613[(2)]);
var state_32613__$1 = state_32613;
var statearr_32639_32677 = state_32613__$1;
(statearr_32639_32677[(2)] = inst_32605);

(statearr_32639_32677[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (8))){
var inst_32595 = (state_32613[(7)]);
var state_32613__$1 = state_32613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32613__$1,(11),out,inst_32595);
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
});})(c__25582__auto___32653,out))
;
return ((function (switch__24619__auto__,c__25582__auto___32653,out){
return (function() {
var cljs$core$async$state_machine__24620__auto__ = null;
var cljs$core$async$state_machine__24620__auto____0 = (function (){
var statearr_32642 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32642[(0)] = cljs$core$async$state_machine__24620__auto__);

(statearr_32642[(1)] = (1));

return statearr_32642;
});
var cljs$core$async$state_machine__24620__auto____1 = (function (state_32613){
while(true){
var ret_value__24621__auto__ = (function (){try{while(true){
var result__24622__auto__ = switch__24619__auto__.call(null,state_32613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24622__auto__;
}
break;
}
}catch (e32643){if((e32643 instanceof Object)){
var ex__24623__auto__ = e32643;
var statearr_32644_32685 = state_32613;
(statearr_32644_32685[(5)] = ex__24623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32691 = state_32613;
state_32613 = G__32691;
continue;
} else {
return ret_value__24621__auto__;
}
break;
}
});
cljs$core$async$state_machine__24620__auto__ = function(state_32613){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24620__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24620__auto____1.call(this,state_32613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24620__auto____0;
cljs$core$async$state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24620__auto____1;
return cljs$core$async$state_machine__24620__auto__;
})()
;})(switch__24619__auto__,c__25582__auto___32653,out))
})();
var state__25584__auto__ = (function (){var statearr_32647 = f__25583__auto__.call(null);
(statearr_32647[(6)] = c__25582__auto___32653);

return statearr_32647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25584__auto__);
});})(c__25582__auto___32653,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32704 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32704 = (function (f,ch,meta32705){
this.f = f;
this.ch = ch;
this.meta32705 = meta32705;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32706,meta32705__$1){
var self__ = this;
var _32706__$1 = this;
return (new cljs.core.async.t_cljs$core$async32704(self__.f,self__.ch,meta32705__$1));
});

cljs.core.async.t_cljs$core$async32704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32706){
var self__ = this;
var _32706__$1 = this;
return self__.meta32705;
});

cljs.core.async.t_cljs$core$async32704.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32704.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32704.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32704.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32704.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32718 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32718 = (function (f,ch,meta32705,_,fn1,meta32719){
this.f = f;
this.ch = ch;
this.meta32705 = meta32705;
this._ = _;
this.fn1 = fn1;
this.meta32719 = meta32719;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32720,meta32719__$1){
var self__ = this;
var _32720__$1 = this;
return (new cljs.core.async.t_cljs$core$async32718(self__.f,self__.ch,self__.meta32705,self__._,self__.fn1,meta32719__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32718.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32720){
var self__ = this;
var _32720__$1 = this;
return self__.meta32719;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32718.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32718.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32718.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32718.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32700_SHARP_){
return f1.call(null,(((p1__32700_SHARP_ == null))?null:self__.f.call(null,p1__32700_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32718.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32705","meta32705",-2045172767,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32704","cljs.core.async/t_cljs$core$async32704",-1336274400,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32719","meta32719",-799962050,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32718.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32718.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32718";

cljs.core.async.t_cljs$core$async32718.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async32718");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32718.
 */
cljs.core.async.__GT_t_cljs$core$async32718 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32718(f__$1,ch__$1,meta32705__$1,___$2,fn1__$1,meta32719){
return (new cljs.core.async.t_cljs$core$async32718(f__$1,ch__$1,meta32705__$1,___$2,fn1__$1,meta32719));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32718(self__.f,self__.ch,self__.meta32705,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32704.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32704.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32704.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32705","meta32705",-2045172767,null)], null);
});

cljs.core.async.t_cljs$core$async32704.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32704.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32704";

cljs.core.async.t_cljs$core$async32704.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async32704");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32704.
 */
cljs.core.async.__GT_t_cljs$core$async32704 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32704(f__$1,ch__$1,meta32705){
return (new cljs.core.async.t_cljs$core$async32704(f__$1,ch__$1,meta32705));
});

}

return (new cljs.core.async.t_cljs$core$async32704(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32764 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32764 = (function (f,ch,meta32765){
this.f = f;
this.ch = ch;
this.meta32765 = meta32765;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32766,meta32765__$1){
var self__ = this;
var _32766__$1 = this;
return (new cljs.core.async.t_cljs$core$async32764(self__.f,self__.ch,meta32765__$1));
});

cljs.core.async.t_cljs$core$async32764.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32766){
var self__ = this;
var _32766__$1 = this;
return self__.meta32765;
});

cljs.core.async.t_cljs$core$async32764.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32764.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32764.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32764.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32764.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32764.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32764.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32765","meta32765",110403638,null)], null);
});

cljs.core.async.t_cljs$core$async32764.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32764.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32764";

cljs.core.async.t_cljs$core$async32764.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async32764");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32764.
 */
cljs.core.async.__GT_t_cljs$core$async32764 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32764(f__$1,ch__$1,meta32765){
return (new cljs.core.async.t_cljs$core$async32764(f__$1,ch__$1,meta32765));
});

}

return (new cljs.core.async.t_cljs$core$async32764(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32778 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32778 = (function (p,ch,meta32779){
this.p = p;
this.ch = ch;
this.meta32779 = meta32779;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32780,meta32779__$1){
var self__ = this;
var _32780__$1 = this;
return (new cljs.core.async.t_cljs$core$async32778(self__.p,self__.ch,meta32779__$1));
});

cljs.core.async.t_cljs$core$async32778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32780){
var self__ = this;
var _32780__$1 = this;
return self__.meta32779;
});

cljs.core.async.t_cljs$core$async32778.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32778.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32778.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32778.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32778.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32778.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32778.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32778.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32779","meta32779",-1146244222,null)], null);
});

cljs.core.async.t_cljs$core$async32778.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32778.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32778";

cljs.core.async.t_cljs$core$async32778.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async32778");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32778.
 */
cljs.core.async.__GT_t_cljs$core$async32778 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32778(p__$1,ch__$1,meta32779){
return (new cljs.core.async.t_cljs$core$async32778(p__$1,ch__$1,meta32779));
});

}

return (new cljs.core.async.t_cljs$core$async32778(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32825 = arguments.length;
switch (G__32825) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25582__auto___32894 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25582__auto___32894,out){
return (function (){
var f__25583__auto__ = (function (){var switch__24619__auto__ = ((function (c__25582__auto___32894,out){
return (function (state_32850){
var state_val_32851 = (state_32850[(1)]);
if((state_val_32851 === (7))){
var inst_32846 = (state_32850[(2)]);
var state_32850__$1 = state_32850;
var statearr_32859_32897 = state_32850__$1;
(statearr_32859_32897[(2)] = inst_32846);

(statearr_32859_32897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32851 === (1))){
var state_32850__$1 = state_32850;
var statearr_32860_32902 = state_32850__$1;
(statearr_32860_32902[(2)] = null);

(statearr_32860_32902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32851 === (4))){
var inst_32832 = (state_32850[(7)]);
var inst_32832__$1 = (state_32850[(2)]);
var inst_32833 = (inst_32832__$1 == null);
var state_32850__$1 = (function (){var statearr_32861 = state_32850;
(statearr_32861[(7)] = inst_32832__$1);

return statearr_32861;
})();
if(cljs.core.truth_(inst_32833)){
var statearr_32863_32904 = state_32850__$1;
(statearr_32863_32904[(1)] = (5));

} else {
var statearr_32864_32905 = state_32850__$1;
(statearr_32864_32905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32851 === (6))){
var inst_32832 = (state_32850[(7)]);
var inst_32837 = p.call(null,inst_32832);
var state_32850__$1 = state_32850;
if(cljs.core.truth_(inst_32837)){
var statearr_32865_32907 = state_32850__$1;
(statearr_32865_32907[(1)] = (8));

} else {
var statearr_32866_32908 = state_32850__$1;
(statearr_32866_32908[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32851 === (3))){
var inst_32848 = (state_32850[(2)]);
var state_32850__$1 = state_32850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32850__$1,inst_32848);
} else {
if((state_val_32851 === (2))){
var state_32850__$1 = state_32850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32850__$1,(4),ch);
} else {
if((state_val_32851 === (11))){
var inst_32840 = (state_32850[(2)]);
var state_32850__$1 = state_32850;
var statearr_32868_32912 = state_32850__$1;
(statearr_32868_32912[(2)] = inst_32840);

(statearr_32868_32912[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32851 === (9))){
var state_32850__$1 = state_32850;
var statearr_32871_32915 = state_32850__$1;
(statearr_32871_32915[(2)] = null);

(statearr_32871_32915[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32851 === (5))){
var inst_32835 = cljs.core.async.close_BANG_.call(null,out);
var state_32850__$1 = state_32850;
var statearr_32874_32923 = state_32850__$1;
(statearr_32874_32923[(2)] = inst_32835);

(statearr_32874_32923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32851 === (10))){
var inst_32843 = (state_32850[(2)]);
var state_32850__$1 = (function (){var statearr_32875 = state_32850;
(statearr_32875[(8)] = inst_32843);

return statearr_32875;
})();
var statearr_32876_32926 = state_32850__$1;
(statearr_32876_32926[(2)] = null);

(statearr_32876_32926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32851 === (8))){
var inst_32832 = (state_32850[(7)]);
var state_32850__$1 = state_32850;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32850__$1,(11),out,inst_32832);
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
});})(c__25582__auto___32894,out))
;
return ((function (switch__24619__auto__,c__25582__auto___32894,out){
return (function() {
var cljs$core$async$state_machine__24620__auto__ = null;
var cljs$core$async$state_machine__24620__auto____0 = (function (){
var statearr_32879 = [null,null,null,null,null,null,null,null,null];
(statearr_32879[(0)] = cljs$core$async$state_machine__24620__auto__);

(statearr_32879[(1)] = (1));

return statearr_32879;
});
var cljs$core$async$state_machine__24620__auto____1 = (function (state_32850){
while(true){
var ret_value__24621__auto__ = (function (){try{while(true){
var result__24622__auto__ = switch__24619__auto__.call(null,state_32850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24622__auto__;
}
break;
}
}catch (e32881){if((e32881 instanceof Object)){
var ex__24623__auto__ = e32881;
var statearr_32886_32936 = state_32850;
(statearr_32886_32936[(5)] = ex__24623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32943 = state_32850;
state_32850 = G__32943;
continue;
} else {
return ret_value__24621__auto__;
}
break;
}
});
cljs$core$async$state_machine__24620__auto__ = function(state_32850){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24620__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24620__auto____1.call(this,state_32850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24620__auto____0;
cljs$core$async$state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24620__auto____1;
return cljs$core$async$state_machine__24620__auto__;
})()
;})(switch__24619__auto__,c__25582__auto___32894,out))
})();
var state__25584__auto__ = (function (){var statearr_32887 = f__25583__auto__.call(null);
(statearr_32887[(6)] = c__25582__auto___32894);

return statearr_32887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25584__auto__);
});})(c__25582__auto___32894,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32956 = arguments.length;
switch (G__32956) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__25582__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25582__auto__){
return (function (){
var f__25583__auto__ = (function (){var switch__24619__auto__ = ((function (c__25582__auto__){
return (function (state_33031){
var state_val_33032 = (state_33031[(1)]);
if((state_val_33032 === (7))){
var inst_33027 = (state_33031[(2)]);
var state_33031__$1 = state_33031;
var statearr_33036_33090 = state_33031__$1;
(statearr_33036_33090[(2)] = inst_33027);

(statearr_33036_33090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (20))){
var inst_32996 = (state_33031[(7)]);
var inst_33008 = (state_33031[(2)]);
var inst_33009 = cljs.core.next.call(null,inst_32996);
var inst_32977 = inst_33009;
var inst_32978 = null;
var inst_32979 = (0);
var inst_32980 = (0);
var state_33031__$1 = (function (){var statearr_33037 = state_33031;
(statearr_33037[(8)] = inst_33008);

(statearr_33037[(9)] = inst_32977);

(statearr_33037[(10)] = inst_32978);

(statearr_33037[(11)] = inst_32979);

(statearr_33037[(12)] = inst_32980);

return statearr_33037;
})();
var statearr_33038_33095 = state_33031__$1;
(statearr_33038_33095[(2)] = null);

(statearr_33038_33095[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (1))){
var state_33031__$1 = state_33031;
var statearr_33039_33097 = state_33031__$1;
(statearr_33039_33097[(2)] = null);

(statearr_33039_33097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (4))){
var inst_32966 = (state_33031[(13)]);
var inst_32966__$1 = (state_33031[(2)]);
var inst_32967 = (inst_32966__$1 == null);
var state_33031__$1 = (function (){var statearr_33040 = state_33031;
(statearr_33040[(13)] = inst_32966__$1);

return statearr_33040;
})();
if(cljs.core.truth_(inst_32967)){
var statearr_33041_33102 = state_33031__$1;
(statearr_33041_33102[(1)] = (5));

} else {
var statearr_33042_33103 = state_33031__$1;
(statearr_33042_33103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (15))){
var state_33031__$1 = state_33031;
var statearr_33046_33104 = state_33031__$1;
(statearr_33046_33104[(2)] = null);

(statearr_33046_33104[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (21))){
var state_33031__$1 = state_33031;
var statearr_33048_33106 = state_33031__$1;
(statearr_33048_33106[(2)] = null);

(statearr_33048_33106[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (13))){
var inst_32977 = (state_33031[(9)]);
var inst_32978 = (state_33031[(10)]);
var inst_32979 = (state_33031[(11)]);
var inst_32980 = (state_33031[(12)]);
var inst_32991 = (state_33031[(2)]);
var inst_32992 = (inst_32980 + (1));
var tmp33043 = inst_32977;
var tmp33044 = inst_32978;
var tmp33045 = inst_32979;
var inst_32977__$1 = tmp33043;
var inst_32978__$1 = tmp33044;
var inst_32979__$1 = tmp33045;
var inst_32980__$1 = inst_32992;
var state_33031__$1 = (function (){var statearr_33050 = state_33031;
(statearr_33050[(9)] = inst_32977__$1);

(statearr_33050[(10)] = inst_32978__$1);

(statearr_33050[(11)] = inst_32979__$1);

(statearr_33050[(14)] = inst_32991);

(statearr_33050[(12)] = inst_32980__$1);

return statearr_33050;
})();
var statearr_33051_33113 = state_33031__$1;
(statearr_33051_33113[(2)] = null);

(statearr_33051_33113[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (22))){
var state_33031__$1 = state_33031;
var statearr_33053_33114 = state_33031__$1;
(statearr_33053_33114[(2)] = null);

(statearr_33053_33114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (6))){
var inst_32966 = (state_33031[(13)]);
var inst_32975 = f.call(null,inst_32966);
var inst_32976 = cljs.core.seq.call(null,inst_32975);
var inst_32977 = inst_32976;
var inst_32978 = null;
var inst_32979 = (0);
var inst_32980 = (0);
var state_33031__$1 = (function (){var statearr_33054 = state_33031;
(statearr_33054[(9)] = inst_32977);

(statearr_33054[(10)] = inst_32978);

(statearr_33054[(11)] = inst_32979);

(statearr_33054[(12)] = inst_32980);

return statearr_33054;
})();
var statearr_33055_33121 = state_33031__$1;
(statearr_33055_33121[(2)] = null);

(statearr_33055_33121[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (17))){
var inst_32996 = (state_33031[(7)]);
var inst_33000 = cljs.core.chunk_first.call(null,inst_32996);
var inst_33001 = cljs.core.chunk_rest.call(null,inst_32996);
var inst_33003 = cljs.core.count.call(null,inst_33000);
var inst_32977 = inst_33001;
var inst_32978 = inst_33000;
var inst_32979 = inst_33003;
var inst_32980 = (0);
var state_33031__$1 = (function (){var statearr_33057 = state_33031;
(statearr_33057[(9)] = inst_32977);

(statearr_33057[(10)] = inst_32978);

(statearr_33057[(11)] = inst_32979);

(statearr_33057[(12)] = inst_32980);

return statearr_33057;
})();
var statearr_33060_33131 = state_33031__$1;
(statearr_33060_33131[(2)] = null);

(statearr_33060_33131[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (3))){
var inst_33029 = (state_33031[(2)]);
var state_33031__$1 = state_33031;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33031__$1,inst_33029);
} else {
if((state_val_33032 === (12))){
var inst_33017 = (state_33031[(2)]);
var state_33031__$1 = state_33031;
var statearr_33061_33134 = state_33031__$1;
(statearr_33061_33134[(2)] = inst_33017);

(statearr_33061_33134[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (2))){
var state_33031__$1 = state_33031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33031__$1,(4),in$);
} else {
if((state_val_33032 === (23))){
var inst_33025 = (state_33031[(2)]);
var state_33031__$1 = state_33031;
var statearr_33063_33139 = state_33031__$1;
(statearr_33063_33139[(2)] = inst_33025);

(statearr_33063_33139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (19))){
var inst_33012 = (state_33031[(2)]);
var state_33031__$1 = state_33031;
var statearr_33064_33140 = state_33031__$1;
(statearr_33064_33140[(2)] = inst_33012);

(statearr_33064_33140[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (11))){
var inst_32977 = (state_33031[(9)]);
var inst_32996 = (state_33031[(7)]);
var inst_32996__$1 = cljs.core.seq.call(null,inst_32977);
var state_33031__$1 = (function (){var statearr_33066 = state_33031;
(statearr_33066[(7)] = inst_32996__$1);

return statearr_33066;
})();
if(inst_32996__$1){
var statearr_33067_33146 = state_33031__$1;
(statearr_33067_33146[(1)] = (14));

} else {
var statearr_33068_33147 = state_33031__$1;
(statearr_33068_33147[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (9))){
var inst_33019 = (state_33031[(2)]);
var inst_33020 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33031__$1 = (function (){var statearr_33070 = state_33031;
(statearr_33070[(15)] = inst_33019);

return statearr_33070;
})();
if(cljs.core.truth_(inst_33020)){
var statearr_33071_33153 = state_33031__$1;
(statearr_33071_33153[(1)] = (21));

} else {
var statearr_33072_33154 = state_33031__$1;
(statearr_33072_33154[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (5))){
var inst_32969 = cljs.core.async.close_BANG_.call(null,out);
var state_33031__$1 = state_33031;
var statearr_33073_33155 = state_33031__$1;
(statearr_33073_33155[(2)] = inst_32969);

(statearr_33073_33155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (14))){
var inst_32996 = (state_33031[(7)]);
var inst_32998 = cljs.core.chunked_seq_QMARK_.call(null,inst_32996);
var state_33031__$1 = state_33031;
if(inst_32998){
var statearr_33074_33157 = state_33031__$1;
(statearr_33074_33157[(1)] = (17));

} else {
var statearr_33075_33158 = state_33031__$1;
(statearr_33075_33158[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (16))){
var inst_33015 = (state_33031[(2)]);
var state_33031__$1 = state_33031;
var statearr_33076_33162 = state_33031__$1;
(statearr_33076_33162[(2)] = inst_33015);

(statearr_33076_33162[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (10))){
var inst_32978 = (state_33031[(10)]);
var inst_32980 = (state_33031[(12)]);
var inst_32988 = cljs.core._nth.call(null,inst_32978,inst_32980);
var state_33031__$1 = state_33031;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33031__$1,(13),out,inst_32988);
} else {
if((state_val_33032 === (18))){
var inst_32996 = (state_33031[(7)]);
var inst_33006 = cljs.core.first.call(null,inst_32996);
var state_33031__$1 = state_33031;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33031__$1,(20),out,inst_33006);
} else {
if((state_val_33032 === (8))){
var inst_32979 = (state_33031[(11)]);
var inst_32980 = (state_33031[(12)]);
var inst_32985 = (inst_32980 < inst_32979);
var inst_32986 = inst_32985;
var state_33031__$1 = state_33031;
if(cljs.core.truth_(inst_32986)){
var statearr_33080_33169 = state_33031__$1;
(statearr_33080_33169[(1)] = (10));

} else {
var statearr_33081_33171 = state_33031__$1;
(statearr_33081_33171[(1)] = (11));

}

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
}
});})(c__25582__auto__))
;
return ((function (switch__24619__auto__,c__25582__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24620__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24620__auto____0 = (function (){
var statearr_33082 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33082[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24620__auto__);

(statearr_33082[(1)] = (1));

return statearr_33082;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24620__auto____1 = (function (state_33031){
while(true){
var ret_value__24621__auto__ = (function (){try{while(true){
var result__24622__auto__ = switch__24619__auto__.call(null,state_33031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24622__auto__;
}
break;
}
}catch (e33084){if((e33084 instanceof Object)){
var ex__24623__auto__ = e33084;
var statearr_33085_33186 = state_33031;
(statearr_33085_33186[(5)] = ex__24623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33187 = state_33031;
state_33031 = G__33187;
continue;
} else {
return ret_value__24621__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24620__auto__ = function(state_33031){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24620__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24620__auto____1.call(this,state_33031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24620__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24620__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24620__auto__;
})()
;})(switch__24619__auto__,c__25582__auto__))
})();
var state__25584__auto__ = (function (){var statearr_33086 = f__25583__auto__.call(null);
(statearr_33086[(6)] = c__25582__auto__);

return statearr_33086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25584__auto__);
});})(c__25582__auto__))
);

return c__25582__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33193 = arguments.length;
switch (G__33193) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33221 = arguments.length;
switch (G__33221) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33265 = arguments.length;
switch (G__33265) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25582__auto___33352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25582__auto___33352,out){
return (function (){
var f__25583__auto__ = (function (){var switch__24619__auto__ = ((function (c__25582__auto___33352,out){
return (function (state_33302){
var state_val_33303 = (state_33302[(1)]);
if((state_val_33303 === (7))){
var inst_33297 = (state_33302[(2)]);
var state_33302__$1 = state_33302;
var statearr_33304_33360 = state_33302__$1;
(statearr_33304_33360[(2)] = inst_33297);

(statearr_33304_33360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33303 === (1))){
var inst_33276 = null;
var state_33302__$1 = (function (){var statearr_33305 = state_33302;
(statearr_33305[(7)] = inst_33276);

return statearr_33305;
})();
var statearr_33306_33365 = state_33302__$1;
(statearr_33306_33365[(2)] = null);

(statearr_33306_33365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33303 === (4))){
var inst_33279 = (state_33302[(8)]);
var inst_33279__$1 = (state_33302[(2)]);
var inst_33282 = (inst_33279__$1 == null);
var inst_33283 = cljs.core.not.call(null,inst_33282);
var state_33302__$1 = (function (){var statearr_33309 = state_33302;
(statearr_33309[(8)] = inst_33279__$1);

return statearr_33309;
})();
if(inst_33283){
var statearr_33310_33369 = state_33302__$1;
(statearr_33310_33369[(1)] = (5));

} else {
var statearr_33311_33370 = state_33302__$1;
(statearr_33311_33370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33303 === (6))){
var state_33302__$1 = state_33302;
var statearr_33312_33371 = state_33302__$1;
(statearr_33312_33371[(2)] = null);

(statearr_33312_33371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33303 === (3))){
var inst_33299 = (state_33302[(2)]);
var inst_33300 = cljs.core.async.close_BANG_.call(null,out);
var state_33302__$1 = (function (){var statearr_33313 = state_33302;
(statearr_33313[(9)] = inst_33299);

return statearr_33313;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33302__$1,inst_33300);
} else {
if((state_val_33303 === (2))){
var state_33302__$1 = state_33302;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33302__$1,(4),ch);
} else {
if((state_val_33303 === (11))){
var inst_33279 = (state_33302[(8)]);
var inst_33291 = (state_33302[(2)]);
var inst_33276 = inst_33279;
var state_33302__$1 = (function (){var statearr_33316 = state_33302;
(statearr_33316[(7)] = inst_33276);

(statearr_33316[(10)] = inst_33291);

return statearr_33316;
})();
var statearr_33317_33376 = state_33302__$1;
(statearr_33317_33376[(2)] = null);

(statearr_33317_33376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33303 === (9))){
var inst_33279 = (state_33302[(8)]);
var state_33302__$1 = state_33302;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33302__$1,(11),out,inst_33279);
} else {
if((state_val_33303 === (5))){
var inst_33276 = (state_33302[(7)]);
var inst_33279 = (state_33302[(8)]);
var inst_33286 = cljs.core._EQ_.call(null,inst_33279,inst_33276);
var state_33302__$1 = state_33302;
if(inst_33286){
var statearr_33325_33379 = state_33302__$1;
(statearr_33325_33379[(1)] = (8));

} else {
var statearr_33327_33380 = state_33302__$1;
(statearr_33327_33380[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33303 === (10))){
var inst_33294 = (state_33302[(2)]);
var state_33302__$1 = state_33302;
var statearr_33328_33381 = state_33302__$1;
(statearr_33328_33381[(2)] = inst_33294);

(statearr_33328_33381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33303 === (8))){
var inst_33276 = (state_33302[(7)]);
var tmp33322 = inst_33276;
var inst_33276__$1 = tmp33322;
var state_33302__$1 = (function (){var statearr_33329 = state_33302;
(statearr_33329[(7)] = inst_33276__$1);

return statearr_33329;
})();
var statearr_33330_33382 = state_33302__$1;
(statearr_33330_33382[(2)] = null);

(statearr_33330_33382[(1)] = (2));


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
});})(c__25582__auto___33352,out))
;
return ((function (switch__24619__auto__,c__25582__auto___33352,out){
return (function() {
var cljs$core$async$state_machine__24620__auto__ = null;
var cljs$core$async$state_machine__24620__auto____0 = (function (){
var statearr_33333 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33333[(0)] = cljs$core$async$state_machine__24620__auto__);

(statearr_33333[(1)] = (1));

return statearr_33333;
});
var cljs$core$async$state_machine__24620__auto____1 = (function (state_33302){
while(true){
var ret_value__24621__auto__ = (function (){try{while(true){
var result__24622__auto__ = switch__24619__auto__.call(null,state_33302);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24622__auto__;
}
break;
}
}catch (e33336){if((e33336 instanceof Object)){
var ex__24623__auto__ = e33336;
var statearr_33337_33384 = state_33302;
(statearr_33337_33384[(5)] = ex__24623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33336;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33385 = state_33302;
state_33302 = G__33385;
continue;
} else {
return ret_value__24621__auto__;
}
break;
}
});
cljs$core$async$state_machine__24620__auto__ = function(state_33302){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24620__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24620__auto____1.call(this,state_33302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24620__auto____0;
cljs$core$async$state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24620__auto____1;
return cljs$core$async$state_machine__24620__auto__;
})()
;})(switch__24619__auto__,c__25582__auto___33352,out))
})();
var state__25584__auto__ = (function (){var statearr_33339 = f__25583__auto__.call(null);
(statearr_33339[(6)] = c__25582__auto___33352);

return statearr_33339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25584__auto__);
});})(c__25582__auto___33352,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33388 = arguments.length;
switch (G__33388) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25582__auto___33503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25582__auto___33503,out){
return (function (){
var f__25583__auto__ = (function (){var switch__24619__auto__ = ((function (c__25582__auto___33503,out){
return (function (state_33431){
var state_val_33432 = (state_33431[(1)]);
if((state_val_33432 === (7))){
var inst_33426 = (state_33431[(2)]);
var state_33431__$1 = state_33431;
var statearr_33436_33505 = state_33431__$1;
(statearr_33436_33505[(2)] = inst_33426);

(statearr_33436_33505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (1))){
var inst_33389 = (new Array(n));
var inst_33390 = inst_33389;
var inst_33391 = (0);
var state_33431__$1 = (function (){var statearr_33439 = state_33431;
(statearr_33439[(7)] = inst_33391);

(statearr_33439[(8)] = inst_33390);

return statearr_33439;
})();
var statearr_33441_33506 = state_33431__$1;
(statearr_33441_33506[(2)] = null);

(statearr_33441_33506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (4))){
var inst_33394 = (state_33431[(9)]);
var inst_33394__$1 = (state_33431[(2)]);
var inst_33395 = (inst_33394__$1 == null);
var inst_33396 = cljs.core.not.call(null,inst_33395);
var state_33431__$1 = (function (){var statearr_33444 = state_33431;
(statearr_33444[(9)] = inst_33394__$1);

return statearr_33444;
})();
if(inst_33396){
var statearr_33446_33509 = state_33431__$1;
(statearr_33446_33509[(1)] = (5));

} else {
var statearr_33447_33510 = state_33431__$1;
(statearr_33447_33510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (15))){
var inst_33419 = (state_33431[(2)]);
var state_33431__$1 = state_33431;
var statearr_33450_33513 = state_33431__$1;
(statearr_33450_33513[(2)] = inst_33419);

(statearr_33450_33513[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (13))){
var state_33431__$1 = state_33431;
var statearr_33454_33515 = state_33431__$1;
(statearr_33454_33515[(2)] = null);

(statearr_33454_33515[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (6))){
var inst_33391 = (state_33431[(7)]);
var inst_33415 = (inst_33391 > (0));
var state_33431__$1 = state_33431;
if(cljs.core.truth_(inst_33415)){
var statearr_33456_33516 = state_33431__$1;
(statearr_33456_33516[(1)] = (12));

} else {
var statearr_33457_33517 = state_33431__$1;
(statearr_33457_33517[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (3))){
var inst_33428 = (state_33431[(2)]);
var state_33431__$1 = state_33431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33431__$1,inst_33428);
} else {
if((state_val_33432 === (12))){
var inst_33390 = (state_33431[(8)]);
var inst_33417 = cljs.core.vec.call(null,inst_33390);
var state_33431__$1 = state_33431;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33431__$1,(15),out,inst_33417);
} else {
if((state_val_33432 === (2))){
var state_33431__$1 = state_33431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33431__$1,(4),ch);
} else {
if((state_val_33432 === (11))){
var inst_33408 = (state_33431[(2)]);
var inst_33409 = (new Array(n));
var inst_33390 = inst_33409;
var inst_33391 = (0);
var state_33431__$1 = (function (){var statearr_33458 = state_33431;
(statearr_33458[(7)] = inst_33391);

(statearr_33458[(8)] = inst_33390);

(statearr_33458[(10)] = inst_33408);

return statearr_33458;
})();
var statearr_33462_33524 = state_33431__$1;
(statearr_33462_33524[(2)] = null);

(statearr_33462_33524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (9))){
var inst_33390 = (state_33431[(8)]);
var inst_33406 = cljs.core.vec.call(null,inst_33390);
var state_33431__$1 = state_33431;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33431__$1,(11),out,inst_33406);
} else {
if((state_val_33432 === (5))){
var inst_33401 = (state_33431[(11)]);
var inst_33391 = (state_33431[(7)]);
var inst_33390 = (state_33431[(8)]);
var inst_33394 = (state_33431[(9)]);
var inst_33398 = (inst_33390[inst_33391] = inst_33394);
var inst_33401__$1 = (inst_33391 + (1));
var inst_33402 = (inst_33401__$1 < n);
var state_33431__$1 = (function (){var statearr_33471 = state_33431;
(statearr_33471[(11)] = inst_33401__$1);

(statearr_33471[(12)] = inst_33398);

return statearr_33471;
})();
if(cljs.core.truth_(inst_33402)){
var statearr_33473_33526 = state_33431__$1;
(statearr_33473_33526[(1)] = (8));

} else {
var statearr_33474_33527 = state_33431__$1;
(statearr_33474_33527[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (14))){
var inst_33423 = (state_33431[(2)]);
var inst_33424 = cljs.core.async.close_BANG_.call(null,out);
var state_33431__$1 = (function (){var statearr_33476 = state_33431;
(statearr_33476[(13)] = inst_33423);

return statearr_33476;
})();
var statearr_33478_33528 = state_33431__$1;
(statearr_33478_33528[(2)] = inst_33424);

(statearr_33478_33528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (10))){
var inst_33412 = (state_33431[(2)]);
var state_33431__$1 = state_33431;
var statearr_33480_33529 = state_33431__$1;
(statearr_33480_33529[(2)] = inst_33412);

(statearr_33480_33529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (8))){
var inst_33401 = (state_33431[(11)]);
var inst_33390 = (state_33431[(8)]);
var tmp33475 = inst_33390;
var inst_33390__$1 = tmp33475;
var inst_33391 = inst_33401;
var state_33431__$1 = (function (){var statearr_33482 = state_33431;
(statearr_33482[(7)] = inst_33391);

(statearr_33482[(8)] = inst_33390__$1);

return statearr_33482;
})();
var statearr_33485_33533 = state_33431__$1;
(statearr_33485_33533[(2)] = null);

(statearr_33485_33533[(1)] = (2));


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
}
}
}
}
});})(c__25582__auto___33503,out))
;
return ((function (switch__24619__auto__,c__25582__auto___33503,out){
return (function() {
var cljs$core$async$state_machine__24620__auto__ = null;
var cljs$core$async$state_machine__24620__auto____0 = (function (){
var statearr_33488 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33488[(0)] = cljs$core$async$state_machine__24620__auto__);

(statearr_33488[(1)] = (1));

return statearr_33488;
});
var cljs$core$async$state_machine__24620__auto____1 = (function (state_33431){
while(true){
var ret_value__24621__auto__ = (function (){try{while(true){
var result__24622__auto__ = switch__24619__auto__.call(null,state_33431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24622__auto__;
}
break;
}
}catch (e33489){if((e33489 instanceof Object)){
var ex__24623__auto__ = e33489;
var statearr_33492_33539 = state_33431;
(statearr_33492_33539[(5)] = ex__24623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33553 = state_33431;
state_33431 = G__33553;
continue;
} else {
return ret_value__24621__auto__;
}
break;
}
});
cljs$core$async$state_machine__24620__auto__ = function(state_33431){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24620__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24620__auto____1.call(this,state_33431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24620__auto____0;
cljs$core$async$state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24620__auto____1;
return cljs$core$async$state_machine__24620__auto__;
})()
;})(switch__24619__auto__,c__25582__auto___33503,out))
})();
var state__25584__auto__ = (function (){var statearr_33493 = f__25583__auto__.call(null);
(statearr_33493[(6)] = c__25582__auto___33503);

return statearr_33493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25584__auto__);
});})(c__25582__auto___33503,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33566 = arguments.length;
switch (G__33566) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25582__auto___33655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25582__auto___33655,out){
return (function (){
var f__25583__auto__ = (function (){var switch__24619__auto__ = ((function (c__25582__auto___33655,out){
return (function (state_33611){
var state_val_33613 = (state_33611[(1)]);
if((state_val_33613 === (7))){
var inst_33606 = (state_33611[(2)]);
var state_33611__$1 = state_33611;
var statearr_33614_33656 = state_33611__$1;
(statearr_33614_33656[(2)] = inst_33606);

(statearr_33614_33656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (1))){
var inst_33567 = [];
var inst_33568 = inst_33567;
var inst_33569 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33611__$1 = (function (){var statearr_33615 = state_33611;
(statearr_33615[(7)] = inst_33569);

(statearr_33615[(8)] = inst_33568);

return statearr_33615;
})();
var statearr_33616_33661 = state_33611__$1;
(statearr_33616_33661[(2)] = null);

(statearr_33616_33661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (4))){
var inst_33574 = (state_33611[(9)]);
var inst_33574__$1 = (state_33611[(2)]);
var inst_33575 = (inst_33574__$1 == null);
var inst_33576 = cljs.core.not.call(null,inst_33575);
var state_33611__$1 = (function (){var statearr_33617 = state_33611;
(statearr_33617[(9)] = inst_33574__$1);

return statearr_33617;
})();
if(inst_33576){
var statearr_33619_33666 = state_33611__$1;
(statearr_33619_33666[(1)] = (5));

} else {
var statearr_33620_33668 = state_33611__$1;
(statearr_33620_33668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (15))){
var inst_33600 = (state_33611[(2)]);
var state_33611__$1 = state_33611;
var statearr_33623_33670 = state_33611__$1;
(statearr_33623_33670[(2)] = inst_33600);

(statearr_33623_33670[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (13))){
var state_33611__$1 = state_33611;
var statearr_33624_33677 = state_33611__$1;
(statearr_33624_33677[(2)] = null);

(statearr_33624_33677[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (6))){
var inst_33568 = (state_33611[(8)]);
var inst_33595 = inst_33568.length;
var inst_33596 = (inst_33595 > (0));
var state_33611__$1 = state_33611;
if(cljs.core.truth_(inst_33596)){
var statearr_33627_33678 = state_33611__$1;
(statearr_33627_33678[(1)] = (12));

} else {
var statearr_33629_33679 = state_33611__$1;
(statearr_33629_33679[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (3))){
var inst_33608 = (state_33611[(2)]);
var state_33611__$1 = state_33611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33611__$1,inst_33608);
} else {
if((state_val_33613 === (12))){
var inst_33568 = (state_33611[(8)]);
var inst_33598 = cljs.core.vec.call(null,inst_33568);
var state_33611__$1 = state_33611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33611__$1,(15),out,inst_33598);
} else {
if((state_val_33613 === (2))){
var state_33611__$1 = state_33611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33611__$1,(4),ch);
} else {
if((state_val_33613 === (11))){
var inst_33578 = (state_33611[(10)]);
var inst_33574 = (state_33611[(9)]);
var inst_33588 = (state_33611[(2)]);
var inst_33589 = [];
var inst_33590 = inst_33589.push(inst_33574);
var inst_33568 = inst_33589;
var inst_33569 = inst_33578;
var state_33611__$1 = (function (){var statearr_33630 = state_33611;
(statearr_33630[(11)] = inst_33588);

(statearr_33630[(7)] = inst_33569);

(statearr_33630[(12)] = inst_33590);

(statearr_33630[(8)] = inst_33568);

return statearr_33630;
})();
var statearr_33631_33685 = state_33611__$1;
(statearr_33631_33685[(2)] = null);

(statearr_33631_33685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (9))){
var inst_33568 = (state_33611[(8)]);
var inst_33586 = cljs.core.vec.call(null,inst_33568);
var state_33611__$1 = state_33611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33611__$1,(11),out,inst_33586);
} else {
if((state_val_33613 === (5))){
var inst_33578 = (state_33611[(10)]);
var inst_33574 = (state_33611[(9)]);
var inst_33569 = (state_33611[(7)]);
var inst_33578__$1 = f.call(null,inst_33574);
var inst_33579 = cljs.core._EQ_.call(null,inst_33578__$1,inst_33569);
var inst_33580 = cljs.core.keyword_identical_QMARK_.call(null,inst_33569,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33581 = ((inst_33579) || (inst_33580));
var state_33611__$1 = (function (){var statearr_33633 = state_33611;
(statearr_33633[(10)] = inst_33578__$1);

return statearr_33633;
})();
if(cljs.core.truth_(inst_33581)){
var statearr_33634_33695 = state_33611__$1;
(statearr_33634_33695[(1)] = (8));

} else {
var statearr_33635_33697 = state_33611__$1;
(statearr_33635_33697[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (14))){
var inst_33603 = (state_33611[(2)]);
var inst_33604 = cljs.core.async.close_BANG_.call(null,out);
var state_33611__$1 = (function (){var statearr_33637 = state_33611;
(statearr_33637[(13)] = inst_33603);

return statearr_33637;
})();
var statearr_33638_33701 = state_33611__$1;
(statearr_33638_33701[(2)] = inst_33604);

(statearr_33638_33701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (10))){
var inst_33593 = (state_33611[(2)]);
var state_33611__$1 = state_33611;
var statearr_33639_33706 = state_33611__$1;
(statearr_33639_33706[(2)] = inst_33593);

(statearr_33639_33706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (8))){
var inst_33578 = (state_33611[(10)]);
var inst_33574 = (state_33611[(9)]);
var inst_33568 = (state_33611[(8)]);
var inst_33583 = inst_33568.push(inst_33574);
var tmp33636 = inst_33568;
var inst_33568__$1 = tmp33636;
var inst_33569 = inst_33578;
var state_33611__$1 = (function (){var statearr_33640 = state_33611;
(statearr_33640[(14)] = inst_33583);

(statearr_33640[(7)] = inst_33569);

(statearr_33640[(8)] = inst_33568__$1);

return statearr_33640;
})();
var statearr_33641_33715 = state_33611__$1;
(statearr_33641_33715[(2)] = null);

(statearr_33641_33715[(1)] = (2));


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
}
}
}
}
});})(c__25582__auto___33655,out))
;
return ((function (switch__24619__auto__,c__25582__auto___33655,out){
return (function() {
var cljs$core$async$state_machine__24620__auto__ = null;
var cljs$core$async$state_machine__24620__auto____0 = (function (){
var statearr_33643 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33643[(0)] = cljs$core$async$state_machine__24620__auto__);

(statearr_33643[(1)] = (1));

return statearr_33643;
});
var cljs$core$async$state_machine__24620__auto____1 = (function (state_33611){
while(true){
var ret_value__24621__auto__ = (function (){try{while(true){
var result__24622__auto__ = switch__24619__auto__.call(null,state_33611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24622__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24622__auto__;
}
break;
}
}catch (e33644){if((e33644 instanceof Object)){
var ex__24623__auto__ = e33644;
var statearr_33645_33721 = state_33611;
(statearr_33645_33721[(5)] = ex__24623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33730 = state_33611;
state_33611 = G__33730;
continue;
} else {
return ret_value__24621__auto__;
}
break;
}
});
cljs$core$async$state_machine__24620__auto__ = function(state_33611){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24620__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24620__auto____1.call(this,state_33611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24620__auto____0;
cljs$core$async$state_machine__24620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24620__auto____1;
return cljs$core$async$state_machine__24620__auto__;
})()
;})(switch__24619__auto__,c__25582__auto___33655,out))
})();
var state__25584__auto__ = (function (){var statearr_33646 = f__25583__auto__.call(null);
(statearr_33646[(6)] = c__25582__auto___33655);

return statearr_33646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25584__auto__);
});})(c__25582__auto___33655,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1563552861732
