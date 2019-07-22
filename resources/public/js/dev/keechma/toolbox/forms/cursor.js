// Compiled by ClojureScript 1.10.339 {}
goog.provide('keechma.toolbox.forms.cursor');
goog.require('cljs.core');
keechma.toolbox.forms.cursor.set_selection_BANG_ = (function keechma$toolbox$forms$cursor$set_selection_BANG_(el,pos){
el.selectionStart = pos;

return el.selectionEnd = pos;
});
keechma.toolbox.forms.cursor.calc_caret_pos_add = (function keechma$toolbox$forms$cursor$calc_caret_pos_add(format_chars,caret_start,old_value,new_value){
var start_pos = caret_start;
var rest_old = cljs.core.drop.call(null,caret_start,old_value);
var rest_new = cljs.core.drop.call(null,caret_start,new_value);
while(true){
var first_old = cljs.core.take.call(null,(1),rest_old);
var first_new = cljs.core.take.call(null,(1),rest_new);
var clean_old = cljs.core.remove.call(null,format_chars,rest_old);
var clean_new = cljs.core.remove.call(null,format_chars,rest_new);
var is_format_char_QMARK_ = cljs.core.contains_QMARK_.call(null,format_chars,cljs.core.first.call(null,first_new));
if(cljs.core.empty_QMARK_.call(null,rest_new)){
return start_pos;
} else {
if(cljs.core._EQ_.call(null,clean_new,cljs.core.take.call(null,cljs.core.count.call(null,clean_new),clean_old))){
return start_pos;
} else {
if(((cljs.core._EQ_.call(null,first_old,first_new)) && (is_format_char_QMARK_))){
var G__69554 = (start_pos + (1));
var G__69555 = cljs.core.drop.call(null,(1),rest_old);
var G__69556 = cljs.core.drop.call(null,(1),rest_new);
start_pos = G__69554;
rest_old = G__69555;
rest_new = G__69556;
continue;
} else {
if(cljs.core.not_EQ_.call(null,rest_new,rest_old)){
var G__69557 = (start_pos + (1));
var G__69558 = rest_old;
var G__69559 = cljs.core.drop.call(null,(1),rest_new);
start_pos = G__69557;
rest_old = G__69558;
rest_new = G__69559;
continue;
} else {
return start_pos;

}
}
}
}
break;
}
});
keechma.toolbox.forms.cursor.calc_caret_pos_remove = (function keechma$toolbox$forms$cursor$calc_caret_pos_remove(format_chars,caret_start,old_value,new_value,old_length,new_length){
var diff = (old_length - new_length);
var start_pos = (caret_start - diff);
var prev_old = cljs.core.reverse.call(null,cljs.core.take.call(null,start_pos,old_value));
var prev_new = cljs.core.reverse.call(null,cljs.core.take.call(null,start_pos,new_value));
var start_pos__$1 = start_pos;
var prev_old__$1 = prev_old;
var prev_new__$1 = prev_new;
while(true){
var first_old = cljs.core.take.call(null,(1),prev_old__$1);
var first_new = cljs.core.take.call(null,(1),prev_new__$1);
var is_format_char_QMARK_ = cljs.core.contains_QMARK_.call(null,format_chars,cljs.core.first.call(null,first_new));
if(cljs.core.empty_QMARK_.call(null,prev_new__$1)){
return start_pos__$1;
} else {
if(((cljs.core._EQ_.call(null,first_old,first_new)) && (is_format_char_QMARK_))){
var G__69566 = (start_pos__$1 - (1));
var G__69567 = cljs.core.drop.call(null,(1),prev_old__$1);
var G__69568 = cljs.core.drop.call(null,(1),prev_new__$1);
start_pos__$1 = G__69566;
prev_old__$1 = G__69567;
prev_new__$1 = G__69568;
continue;
} else {
return start_pos__$1;

}
}
break;
}
});
keechma.toolbox.forms.cursor.set_caret_pos_BANG_ = (function keechma$toolbox$forms$cursor$set_caret_pos_BANG_(el,format_chars,input_value,new_value,old_value,caret_pos){
var old_length = cljs.core.count.call(null,old_value);
var new_length = cljs.core.count.call(null,new_value);
var input_length = cljs.core.count.call(null,input_value);
var caret_start = (caret_pos - (input_length - old_length));
el.value = new_value;

if(((cljs.core._EQ_.call(null,new_value,old_value)) && ((input_length < old_length)))){
return keechma.toolbox.forms.cursor.set_selection_BANG_.call(null,el,((caret_pos - (old_length - input_length)) + (1)));
} else {
if(cljs.core._EQ_.call(null,new_value,old_value)){
return keechma.toolbox.forms.cursor.set_selection_BANG_.call(null,el,caret_start);
} else {
if((new_length >= old_length)){
return keechma.toolbox.forms.cursor.set_selection_BANG_.call(null,el,keechma.toolbox.forms.cursor.calc_caret_pos_add.call(null,format_chars,caret_start,old_value,new_value));
} else {
if((new_length < old_length)){
return keechma.toolbox.forms.cursor.set_selection_BANG_.call(null,el,keechma.toolbox.forms.cursor.calc_caret_pos_remove.call(null,format_chars,caret_start,old_value,new_value,old_length,new_length));
} else {
return null;

}
}
}
}
});

//# sourceMappingURL=cursor.js.map?rel=1563552892099
