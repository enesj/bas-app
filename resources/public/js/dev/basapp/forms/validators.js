// Compiled by ClojureScript 1.10.339 {}
goog.provide('basapp.forms.validators');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('forms.validator');
goog.require('oops.core');
basapp.forms.validators.countries = cljs.core.PersistentVector.fromArray(["United States","United Kingdom","Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Congo, The Democratic Republic of The","Cook Islands","Costa Rica","Cote D'ivoire","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands (Malvinas)","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guinea","Guinea-bissau","Guyana","Haiti","Heard Island and Mcdonald Islands","Holy See (Vatican City State)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran, Islamic Republic of","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea, Democratic People's Republic of","Korea, Republic of","Kuwait","Kyrgyzstan","Lao People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libyan Arab Jamahiriya","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia, The Former Yugoslav Republic of","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia, Federated States of","Moldova, Republic of","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestinian Territory, Occupied","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russian Federation","Rwanda","Saint Helena","Saint Kitts and Nevis","Saint Lucia","Saint Pierre and Miquelon","Saint Vincent and The Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and The South Sandwich Islands","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Swaziland","Sweden","Switzerland","Syrian Arab Republic","Taiwan, Province of China","Tajikistan","Tanzania, United Republic of","Thailand","Timor-leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Venezuela","Viet Nam","Virgin Islands, British","Virgin Islands, U.S.","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe"], true);
basapp.forms.validators.country_set = cljs.core.set.call(null,basapp.forms.validators.countries);
basapp.forms.validators.email_regex = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/;
basapp.forms.validators.url_regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/;
basapp.forms.validators.us_states = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 59, ["MP",null,"WI",null,"SC",null,"MN",null,"NV",null,"NM",null,"NE",null,"AK",null,"NH",null,"ME",null,"NY",null,"TN",null,"FL",null,"IA",null,"GA",null,"IL",null,"RI",null,"GU",null,"VA",null,"PR",null,"MI",null,"PA",null,"UT",null,"WY",null,"SD",null,"MO",null,"KY",null,"CT",null,"AR",null,"ID",null,"DC",null,"FM",null,"MA",null,"OK",null,"AL",null,"VT",null,"MS",null,"CA",null,"LA",null,"DE",null,"WA",null,"AS",null,"KS",null,"MD",null,"ND",null,"MH",null,"TX",null,"VI",null,"OR",null,"NC",null,"AZ",null,"IN",null,"WV",null,"CO",null,"HI",null,"MT",null,"NJ",null,"PW",null,"OH",null], null), null);
basapp.forms.validators.phone_regex = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
basapp.forms.validators.phone_QMARK_ = (function basapp$forms$validators$phone_QMARK_(v,_,___$1){
return !((cljs.core.re_matches.call(null,basapp.forms.validators.phone_regex,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')) == null));
});
basapp.forms.validators.zero_count_QMARK_ = (function basapp$forms$validators$zero_count_QMARK_(v){
if(((!((v == null)))?(((((v.cljs$lang$protocol_mask$partition0$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$ICounted$))))?true:(((!v.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICounted,v):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICounted,v))){
return (cljs.core.count.call(null,v) === (0));
} else {
return false;
}
});
basapp.forms.validators.not_empty_QMARK_ = (function basapp$forms$validators$not_empty_QMARK_(v,_,___$1){
if((v == null)){
return false;
} else {
if(cljs.core._EQ_.call(null,"",v)){
return false;
} else {
if(cljs.core.truth_(basapp.forms.validators.zero_count_QMARK_.call(null,v))){
return false;
} else {
return true;

}
}
}
});
basapp.forms.validators.url_QMARK_ = (function basapp$forms$validators$url_QMARK_(v,_,___$1){
return !((cljs.core.re_matches.call(null,basapp.forms.validators.url_regex,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')) == null));
});
basapp.forms.validators.email_QMARK_ = (function basapp$forms$validators$email_QMARK_(v,_,___$1){
if((((v == null)) || (cljs.core.empty_QMARK_.call(null,v)))){
return true;
} else {
return cljs.core.re_matches.call(null,basapp.forms.validators.email_regex,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));
}
});
basapp.forms.validators.edu_email_QMARK_ = (function basapp$forms$validators$edu_email_QMARK_(v,_,___$1){
if((v == null)){
return true;
} else {
return clojure.string.ends_with_QMARK_.call(null,clojure.string.trim.call(null,v),".edu");
}
});
basapp.forms.validators.number0_GT_100_QMARK_ = (function basapp$forms$validators$number0_GT_100_QMARK_(v,_,___$1){
if(cljs.core.not.call(null,basapp.forms.validators.not_empty_QMARK_.call(null,v,null,null))){
return true;
} else {
var n = parseFloat(v,(10));
return ((((0) < n)) && (((100) >= n)));
}
});
basapp.forms.validators.bool_QMARK_ = (function basapp$forms$validators$bool_QMARK_(v,_,___$1){
if((v == null)){
return true;
} else {
return ((cljs.core._EQ_.call(null,true,v)) || (cljs.core._EQ_.call(null,false,v)));
}
});
basapp.forms.validators.numeric_QMARK_ = (function basapp$forms$validators$numeric_QMARK_(v,_,___$1){
if((v == null)){
return true;
} else {
return cljs.core.re_matches.call(null,/^\d+$/,v);
}
});
basapp.forms.validators.ok_password_QMARK_ = (function basapp$forms$validators$ok_password_QMARK_(v,_,___$1){
if(cljs.core.seq.call(null,v)){
return ((7) < cljs.core.count.call(null,v));
} else {
return true;
}
});
basapp.forms.validators.valid_us_state_QMARK_ = (function basapp$forms$validators$valid_us_state_QMARK_(v,_,___$1){
if(cljs.core.seq.call(null,v)){
return cljs.core.contains_QMARK_.call(null,basapp.forms.validators.us_states,clojure.string.upper_case.call(null,v));
} else {
return true;
}
});
basapp.forms.validators.valid_country_QMARK_ = (function basapp$forms$validators$valid_country_QMARK_(v,_,___$1){
if(cljs.core.seq.call(null,v)){
return cljs.core.contains_QMARK_.call(null,basapp.forms.validators.country_set,v);
} else {
return true;
}
});
basapp.forms.validators.valid_cvv_QMARK_ = (function basapp$forms$validators$valid_cvv_QMARK_(v,_,___$1){
if(cljs.core.seq.call(null,v)){
return ((cljs.core._EQ_.call(null,(3),cljs.core.count.call(null,v))) || (cljs.core._EQ_.call(null,(4),cljs.core.count.call(null,v))));
} else {
return true;
}
});
basapp.forms.validators.valid_zipcode_QMARK_ = (function basapp$forms$validators$valid_zipcode_QMARK_(v,_,___$1){
if(cljs.core.seq.call(null,v)){
return !((cljs.core.re_matches.call(null,/(^\d{5}$)|(^\d{5}-\d{4}$)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')) == null));
} else {
return true;
}
});
basapp.forms.validators.password_confirmation = (function basapp$forms$validators$password_confirmation(_,data,___$1){
var pass = new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(data);
var pass_confirmation = new cljs.core.Keyword(null,"password2","password2",557827521).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pass,pass_confirmation], null)))){
return true;
} else {
return cljs.core._EQ_.call(null,pass,pass_confirmation);
}
});
basapp.forms.validators.cardholder_name = (function basapp$forms$validators$cardholder_name(_,data,___$1){
var nonce = new cljs.core.Keyword(null,"paypal-nonce","paypal-nonce",-127820875).cljs$core$IFn$_invoke$arity$1(data);
var cardholder_name = new cljs.core.Keyword(null,"cardholder-name","cardholder-name",1443135594).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(nonce)){
return true;
} else {
return basapp.forms.validators.not_empty_QMARK_.call(null,cardholder_name,___$1,___$1);
}
});
basapp.forms.validators.default_validations = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"wrong-access-token","wrong-access-token",444582977),new cljs.core.Keyword(null,"valid-cardholder","valid-cardholder",-391652287),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"valid-country","valid-country",-1702510910),new cljs.core.Keyword(null,"email-confirmation","email-confirmation",1841807683),new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"ok-password","ok-password",-330757625),new cljs.core.Keyword(null,"phone","phone",-763596057),new cljs.core.Keyword(null,"valid-zipcode","valid-zipcode",-58894485),new cljs.core.Keyword(null,"password-confirmation","password-confirmation",-2100826802),new cljs.core.Keyword(null,"not-empty","not-empty",388922063),new cljs.core.Keyword(null,"0>100","0>100",-826337392),new cljs.core.Keyword(null,"future-date","future-date",729489331),new cljs.core.Keyword(null,"us-state","us-state",148194614),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"0>","0>",415503448),new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.Keyword(null,"edu-email","edu-email",-820524390),new cljs.core.Keyword(null,"future-date-from-start","future-date-from-start",1376428124),new cljs.core.Keyword(null,"valid-us-state","valid-us-state",1736176350)],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Wrong access-token",new cljs.core.Keyword(null,"validator","validator",-1966190681),(function (_,___$1,___$2){
return true;
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Cardholder name must not be empty",new cljs.core.Keyword(null,"validator","validator",-1966190681),basapp.forms.validators.cardholder_name], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Value is not a valid email",new cljs.core.Keyword(null,"validator","validator",-1966190681),basapp.forms.validators.email_QMARK_], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Not a valid Country",new cljs.core.Keyword(null,"validator","validator",-1966190681),basapp.forms.validators.valid_country_QMARK_], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Email doesn't match email confirmation",new cljs.core.Keyword(null,"validator","validator",-1966190681),(function (_,data,___$1){
var email = new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(data);
var email_confirmation = new cljs.core.Keyword(null,"email-confirmation","email-confirmation",1841807683).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [email,email_confirmation], null)))){
return true;
} else {
return cljs.core._EQ_.call(null,email,email_confirmation);
}
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Value is not a number",new cljs.core.Keyword(null,"validator","validator",-1966190681),basapp.forms.validators.numeric_QMARK_], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Password must have at least 8 characters",new cljs.core.Keyword(null,"validator","validator",-1966190681),basapp.forms.validators.ok_password_QMARK_], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Value is not a valid phone",new cljs.core.Keyword(null,"validator","validator",-1966190681),basapp.forms.validators.phone_QMARK_], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Not a valid Zipcode",new cljs.core.Keyword(null,"validator","validator",-1966190681),basapp.forms.validators.valid_zipcode_QMARK_], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Passwords don't match",new cljs.core.Keyword(null,"validator","validator",-1966190681),basapp.forms.validators.password_confirmation], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Value can't be empty",new cljs.core.Keyword(null,"validator","validator",-1966190681),basapp.forms.validators.not_empty_QMARK_], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Must be between 0 and 100",new cljs.core.Keyword(null,"validator","validator",-1966190681),basapp.forms.validators.number0_GT_100_QMARK_], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Date must be in the future",new cljs.core.Keyword(null,"validator","validator",-1966190681),(function (v,_,___$1){
var current_timestamp = (function (){var target_obj_26321 = Date;
var _STAR_runtime_state_STAR_26325 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_26321,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_26323 = [target_obj_26321,(function (){var next_obj_26324 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_26321,(0),"now",true,true,false))?(target_obj_26321["now"]):null);
return next_obj_26324;
})()];
var fn_26322 = (call_info_26323[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_26322,oops.state.get_last_access_modifier.call(null))){
if(!((fn_26322 == null))){
return fn_26322.call((call_info_26323[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_26325;
}})();
if(cljs.core.not.call(null,basapp.forms.validators.not_empty_QMARK_.call(null,v,null,null))){
return true;
} else {
return (current_timestamp < (function (){var target_obj_26326 = v;
var _STAR_runtime_state_STAR_26330 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_26326,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_26328 = [target_obj_26326,(function (){var next_obj_26329 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_26326,(0),"format",true,true,false))?(target_obj_26326["format"]):null);
return next_obj_26329;
})()];
var fn_26327 = (call_info_26328[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_26327,oops.state.get_last_access_modifier.call(null))){
if(!((fn_26327 == null))){
return fn_26327.call((call_info_26328[(0)]),"x");
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_26330;
}})());
}
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Please select state",new cljs.core.Keyword(null,"validator","validator",-1966190681),(function (v,data,_){
var country = new cljs.core.Keyword(null,"country","country",312965309).cljs$core$IFn$_invoke$arity$1(data);
return !(((cljs.core._EQ_.call(null,"United States",country)) && (((cljs.core._EQ_.call(null,"State *",v)) || ((v == null)) || (cljs.core.empty_QMARK_.call(null,v))))));
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Value is not a valid URL",new cljs.core.Keyword(null,"validator","validator",-1966190681),basapp.forms.validators.url_QMARK_], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Must be bigger than zero",new cljs.core.Keyword(null,"validator","validator",-1966190681),(function (v,_,___$1){
if(cljs.core.not.call(null,basapp.forms.validators.not_empty_QMARK_.call(null,v,null,null))){
return true;
} else {
return ((0) < parseFloat(v));
}
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Value must be true or false",new cljs.core.Keyword(null,"validator","validator",-1966190681),basapp.forms.validators.bool_QMARK_], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Not a valid .edu email",new cljs.core.Keyword(null,"validator","validator",-1966190681),basapp.forms.validators.edu_email_QMARK_], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Date must after the start date",new cljs.core.Keyword(null,"validator","validator",-1966190681),(function (_,data,___$1){
var start = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"startDatetime","startDatetime",1471969528)], null));
var end = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"endDatetime","endDatetime",1192320579)], null));
if(((cljs.core.not.call(null,basapp.forms.validators.not_empty_QMARK_.call(null,start,null,null))) || (cljs.core.not.call(null,basapp.forms.validators.not_empty_QMARK_.call(null,end,null,null))))){
return true;
} else {
return ((function (){var target_obj_26331 = start;
var _STAR_runtime_state_STAR_26335 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_26331,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_26333 = [target_obj_26331,(function (){var next_obj_26334 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_26331,(0),"format",true,true,false))?(target_obj_26331["format"]):null);
return next_obj_26334;
})()];
var fn_26332 = (call_info_26333[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_26332,oops.state.get_last_access_modifier.call(null))){
if(!((fn_26332 == null))){
return fn_26332.call((call_info_26333[(0)]),"x");
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_26335;
}})() < (function (){var target_obj_26336 = end;
var _STAR_runtime_state_STAR_26340 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_26336,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_26338 = [target_obj_26336,(function (){var next_obj_26339 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_26336,(0),"format",true,true,false))?(target_obj_26336["format"]):null);
return next_obj_26339;
})()];
var fn_26337 = (call_info_26338[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_26337,oops.state.get_last_access_modifier.call(null))){
if(!((fn_26337 == null))){
return fn_26337.call((call_info_26338[(0)]),"x");
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_26340;
}})());
}
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Not a valid US state",new cljs.core.Keyword(null,"validator","validator",-1966190681),basapp.forms.validators.valid_us_state_QMARK_], null)]);
basapp.forms.validators.validations$ = cljs.core.atom.call(null,basapp.forms.validators.default_validations);
basapp.forms.validators.register_validation_BANG_ = (function basapp$forms$validators$register_validation_BANG_(key,validator){
return cljs.core.swap_BANG_.call(null,basapp.forms.validators.validations$,cljs.core.assoc,key,validator);
});
basapp.forms.validators.get_validator_message = (function basapp$forms$validators$get_validator_message(validation_key){
var or__3949__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,basapp.forms.validators.validations$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [validation_key,new cljs.core.Keyword(null,"message","message",-406056002)], null));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "Value failed validation.";
}
});
/**
 * Helper function that extracts the validator definitions.
 */
basapp.forms.validators.to_validator = (function basapp$forms$validators$to_validator(config){
return forms.validator.validator.call(null,cljs.core.reduce_kv.call(null,(function (m,attr,v){
return cljs.core.assoc.call(null,m,attr,cljs.core.map.call(null,(function (k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.call(null,cljs.core.deref.call(null,basapp.forms.validators.validations$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"validator","validator",-1966190681)], null))], null);
}),v));
}),cljs.core.PersistentArrayMap.EMPTY,config));
});

//# sourceMappingURL=validators.js.map?rel=1568104862346
