// Compiled by ClojureScript 1.10.339 {}
goog.provide('dirac.runtime.output');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dirac.runtime.prefs');
dirac.runtime.output.re_split = (new RegExp("(---<.*?>---)","g"));
dirac.runtime.output.re_style = (new RegExp("---<(.*?)>---"));
dirac.runtime.output.re_code = (new RegExp("`(.*?)`","g"));
dirac.runtime.output.mark_code = (function dirac$runtime$output$mark_code(text){
var code_style = dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"rich-text-code-style","rich-text-code-style",-1907727780));
var reset_style = dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"rich-text-reset-style","rich-text-reset-style",433055243));
return text.replace(dirac.runtime.output.re_code,["---<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code_style),">---$1---<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reset_style),">---"].join(''));
});
dirac.runtime.output.CSI = "\u001B\\[";
dirac.runtime.output.re_ansi = (new RegExp([cljs.core.str.cljs$core$IFn$_invoke$arity$1(dirac.runtime.output.CSI),"([0-9;]+)","m"].join(''),"g"));
dirac.runtime.output.parse_int = (function dirac$runtime$output$parse_int(v){
var res = parseInt(v,(10));
if(cljs.core.truth_(isNaN(res))){
return null;
} else {
return res;
}
});
dirac.runtime.output.command_to_style = (function dirac$runtime$output$command_to_style(command){
var pref_key = cljs.core.keyword.call(null,["rich-text-ansi-style-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(command)].join(''));
return dirac.runtime.prefs.pref.call(null,pref_key);
});
dirac.runtime.output.ansi_code_to_style = (function dirac$runtime$output$ansi_code_to_style(sgr_code){
var commands = cljs.core.keep.call(null,dirac.runtime.output.parse_int,sgr_code.split(";"));
var sanitized_commands = ((cljs.core.empty_QMARK_.call(null,commands))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null):commands);
var styles = cljs.core.map.call(null,dirac.runtime.output.command_to_style,sanitized_commands);
return clojure.string.join.call(null,";",styles);
});
dirac.runtime.output.mark_ansi = (function dirac$runtime$output$mark_ansi(text){
return text.replace(dirac.runtime.output.re_ansi,(function (match,sgr_code){
return ["---<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dirac.runtime.output.ansi_code_to_style.call(null,sgr_code)),">---"].join('');
}));
});
dirac.runtime.output.style_QMARK_ = (function dirac$runtime$output$style_QMARK_(s){
return dirac.runtime.output.re_style.test(s);
});
dirac.runtime.output.build_format_string = (function dirac$runtime$output$build_format_string(soup){
return clojure.string.join.call(null,cljs.core.map.call(null,(function (p1__72734_SHARP_){
if(cljs.core.truth_(dirac.runtime.output.style_QMARK_.call(null,p1__72734_SHARP_))){
return "%c";
} else {
return "%s";
}
}),soup));
});
dirac.runtime.output.boil_soup = (function dirac$runtime$output$boil_soup(soup){
var _STAR_ = (function (x){
if(cljs.core.truth_(dirac.runtime.output.style_QMARK_.call(null,x))){
return cljs.core.second.call(null,x.match(dirac.runtime.output.re_style));
} else {
return x;
}
});
return cljs.core.map.call(null,_STAR_,soup);
});
dirac.runtime.output.prepare_formatted_text = (function dirac$runtime$output$prepare_formatted_text(text){
var marked_text = dirac.runtime.output.mark_ansi.call(null,dirac.runtime.output.mark_code.call(null,text));
var soup = marked_text.split(dirac.runtime.output.re_split);
var format_string = dirac.runtime.output.build_format_string.call(null,soup);
var boiled_soup = dirac.runtime.output.boil_soup.call(null,soup);
return cljs.core.cons.call(null,format_string,boiled_soup);
});
dirac.runtime.output.re_format_char = (new RegExp(["%(.)"].join(''),"g"));
dirac.runtime.output.build_html_from_formatted_string = (function dirac$runtime$output$build_html_from_formatted_string(var_args){
var args__4534__auto__ = [];
var len__4531__auto___72738 = arguments.length;
var i__4532__auto___72739 = (0);
while(true){
if((i__4532__auto___72739 < len__4531__auto___72738)){
args__4534__auto__.push((arguments[i__4532__auto___72739]));

var G__72740 = (i__4532__auto___72739 + (1));
i__4532__auto___72739 = G__72740;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return dirac.runtime.output.build_html_from_formatted_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

dirac.runtime.output.build_html_from_formatted_string.cljs$core$IFn$_invoke$arity$variadic = (function (format,args){
var index_atom = cljs.core.atom.call(null,(0));
var replacer = ((function (index_atom){
return (function (match){
var format_char = cljs.core.second.call(null,match);
var value = cljs.core.nth.call(null,args,cljs.core.deref.call(null,index_atom));
var html_snippet = (function (){var G__72737 = format_char;
switch (G__72737) {
case "s":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');

break;
case "c":
return ["</span><span style=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"\">"].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__72737)].join('')));

}
})();
cljs.core.swap_BANG_.call(null,index_atom,cljs.core.inc);

return html_snippet;
});})(index_atom))
;
var unbalanced_html = format.replace(dirac.runtime.output.re_format_char,replacer);
return ["<span>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unbalanced_html),"</span>"].join('');
});

dirac.runtime.output.build_html_from_formatted_string.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
dirac.runtime.output.build_html_from_formatted_string.cljs$lang$applyTo = (function (seq72735){
var G__72736 = cljs.core.first.call(null,seq72735);
var seq72735__$1 = cljs.core.next.call(null,seq72735);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72736,seq72735__$1);
});

dirac.runtime.output.build_html = (function dirac$runtime$output$build_html(text){
var format_PLUS_args = dirac.runtime.output.prepare_formatted_text.call(null,text);
return cljs.core.apply.call(null,dirac.runtime.output.build_html_from_formatted_string,format_PLUS_args);
});

//# sourceMappingURL=output.js.map?rel=1563552900189
