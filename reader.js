var util = require("util");var type = (function(obj){
return (function() {if(number_p_(obj)) {return ((function() {return "\uFDD1number"; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 6 Column 2
} else {return (function() {if(boolean_p_(obj)) {return ((function() {return "\uFDD1boolean"; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 6 Column 2
} else {return (function() {if(string_p_(obj)) {return ((function() {return "\uFDD1string"; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 6 Column 2
} else {return (function() {if(null_p_(obj)) {return ((function() {return "\uFDD1null"; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 6 Column 2
} else {return (function() {if(list_p_(obj)) {return ((function() {return "\uFDD1list"; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 6 Column 2
} else {return (function() {if(vector_p_(obj)) {return ((function() {return "\uFDD1vector"; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 6 Column 2
} else {return (function() {if(dict_p_(obj)) {return ((function() {return "\uFDD1dict"; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 6 Column 2
} else {return false; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var number_p_ = (function(obj){
return _eq__eq_(typeof obj,"number"); // Line 16 Column 3
});
var string_p_ = (function(obj){
return (_eq__eq_(typeof obj,"string") && not(_eq__eq_(obj[0],"\uFDD0")) && not(_eq__eq_(obj[0],"\uFDD1"))); // Line <unknown undefined> Column <unknown undefined>
});
var symbol_p_ = (function(obj){
return ((_eq__eq_(typeof obj,"string") && _eq__eq_(obj[0],"\uFDD1"))); // Line <unknown undefined> Column <unknown undefined>
});
var key_p_ = (function(obj){
return (_eq__eq_(typeof obj,"string") && _eq__eq_(obj[0],"\uFDD0")); // Line <unknown undefined> Column <unknown undefined>
});
var boolean_p_ = (function(obj){
return (eq_p_(obj,true) || eq_p_(obj,false)); // Line <unknown undefined> Column <unknown undefined>
});
var null_p_ = (function(obj){
return (!!obj && not(eq_p_(obj["length"],undefined)) && eq_p_(obj["length"],1) && eq_p_(vector_dash_ref(obj,0),null)); // Line <unknown undefined> Column <unknown undefined>
});
var list_p_ = (function(obj){
return (!!obj && not(eq_p_(obj["length"],undefined)) && not(eq_p_(obj["list"],undefined))); // Line <unknown undefined> Column <unknown undefined>
});
var vector_p_ = (function(obj){
return (not(list_p_(obj)) && not(null_p_(obj)) && !!obj && eq_p_(typeof obj,"object") && not(eq_p_(obj["length"],undefined))); // Line <unknown undefined> Column <unknown undefined>
});
var dict_p_ = (function(obj){
return (not(symbol_p_(obj)) && !!obj && eq_p_(typeof obj,"object") && eq_p_(obj["length"],undefined)); // Line <unknown undefined> Column <unknown undefined>
});
var function_p_ = (function(obj){
return eq_p_(typeof obj,"function"); // Line 60 Column 3
});
var literal_p_ = (function(x){
return (key_p_(x) || number_p_(x) || string_p_(x) || boolean_p_(x) || null_p_(x)); // Line <unknown undefined> Column <unknown undefined>
});
var str = (function() {
var args = vector_dash__gt_list(Array.prototype.slice.call(arguments));
return fold((function(el,acc){
return (acc + (function() {if(string_p_(el)) {return el; // Line <unknown undefined> Column <unknown undefined>
} else {return inspect(el); // Line 75 Column 36
}})()
); // Line <unknown undefined> Column <unknown undefined>
}),"",args); // Line 73 Column 5
});
var symbol_dash__gt_key = (function(sym){
return ("\uFDD0" + sym["substring"](1)); // Line <unknown undefined> Column <unknown undefined>
});
var key_dash__gt_symbol = (function(sym){
return ("\uFDD1" + sym["substring"](1)); // Line <unknown undefined> Column <unknown undefined>
});
var string_dash__gt_key = (function(str){
return ("\uFDD0" + str); // Line <unknown undefined> Column <unknown undefined>
});
var key_dash__gt_string = (function(key){
return key["substring"](1); // Line 89 Column 3
});
var string_dash__gt_symbol = (function(str){
return ("\uFDD1" + str); // Line <unknown undefined> Column <unknown undefined>
});
var symbol_dash__gt_string = (function(sym){
return sym["substring"](1); // Line 95 Column 3
});
var _emptylst = [null];
var list = (function() {
var args = vector_dash__gt_list(Array.prototype.slice.call(arguments));
return args; // Line <unknown undefined> Column <unknown undefined>
});
var cons = (function(obj,lst){
return ((function() {var o1035622 = (function(res){
res.list = true;return res; // Line <unknown undefined> Column <unknown undefined>
});
var o5702088 = [obj, lst];
return o1035622(o5702088); // Line 106 Column 2
}))(); // Line 106 Column 2
});
var car = (function(lst){
return lst[0]});
var cdr = (function(lst){
return lst[1]});
var cadr = (function(lst){
return car(cdr(lst)); // Line 116 Column 20
});
var cddr = (function(lst){
return cdr(cdr(lst)); // Line 117 Column 20
});
var cdar = (function(lst){
return cdr(car(lst)); // Line 118 Column 20
});
var caddr = (function(lst){
return car(cdr(cdr(lst))); // Line 119 Column 21
});
var cdddr = (function(lst){
return cdr(cdr(cdr(lst))); // Line 120 Column 21
});
var cadar = (function(lst){
return car(cdr(car(lst))); // Line 121 Column 21
});
var cddar = (function(lst){
return cdr(cdr(car(lst))); // Line 122 Column 21
});
var caadr = (function(lst){
return car(car(cdr(lst))); // Line 123 Column 21
});
var cdadr = (function(lst){
return cdr(car(cdr(lst))); // Line 124 Column 21
});
var list_dash_ref = (function(lst,i){
return ((function() {var loop = (function(lst,i){
return (function() {if(null_p_(lst)) {return ((function() {return false; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 127 Column 2
} else {return (function() {if(eq_p_(i,0)) {return ((function() {return car(lst); // Line 127 Column 2
}))(); // Line 127 Column 2
} else {return ((function() {return loop(cdr(lst),(i - 1)); // Line 127 Column 2
}))(); // Line 127 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o8974345 = lst;
var o5974537 = i;
return loop(o8974345,o5974537); // Line 127 Column 2
}))(); // Line 127 Column 2
});
var length = (function(lst){
return fold((function(el,acc){
return (acc + 1); // Line <unknown undefined> Column <unknown undefined>
}),0,lst); // Line 135 Column 3
});
var list_dash_append = (function(){
var lsts = vector_dash__gt_list(Array.prototype.slice.call(arguments, 0));
var l_star_ = (function() {if(null_p_(lsts)) {return _emptylst; // Line <unknown undefined> Column <unknown undefined>
} else {return lsts; // Line <unknown undefined> Column <unknown undefined>
}})()
;
return (function() {if(null_p_(l_star_)) {return _emptylst; // Line <unknown undefined> Column <unknown undefined>
} else {return (function() {if(null_p_(cdr(l_star_))) {return car(l_star_); // Line 144 Column 11
} else {return _list_dash_append(car(l_star_),apply(list_dash_append,cdr(l_star_))); // Line 145 Column 11
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var _list_dash_append = (function(lst1,lst2){
return ((function() {var loop = (function(lst){
return (function() {if(null_p_(lst)) {return lst2; // Line <unknown undefined> Column <unknown undefined>
} else {return cons(car(lst),loop(cdr(lst))); // Line 149 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o8434916 = lst1;
return loop(o8434916); // Line 149 Column 2
}))(); // Line 149 Column 2
});
var list_dash_find = (function(lst,val){
var rst = vector_dash__gt_list(Array.prototype.slice.call(arguments, 2));
return ((function() {var o7535563 = (function(access){
return ((function() {var loop = (function(lst){
return (function() {if(null_p_(lst)) {return false; // Line <unknown undefined> Column <unknown undefined>
} else {return (function() {if(_eq__eq_(access(car(lst)),val)) {return lst; // Line <unknown undefined> Column <unknown undefined>
} else {return vector("__tco_call",(function() {return loop(cdr(lst)); // Line 156 Column 2
})); // Line 156 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o8822814 = lst;
return trampoline(loop(o8822814)); // Line 156 Column 2
}))(); // Line 156 Column 2
});
var o8526158 = (function() {if(null_p_(rst)) {return (function(x){
return x; // Line <unknown undefined> Column <unknown undefined>
}); // Line <unknown undefined> Column <unknown undefined>
} else {return car(rst); // Line 156 Column 2
}})()
;
return o7535563(o8526158); // Line 156 Column 2
}))(); // Line 156 Column 2
});
var map = (function(func,lst){
return (function() {if(null_p_(lst)) {return _emptylst; // Line <unknown undefined> Column <unknown undefined>
} else {return cons(func(car(lst)),map(func,cdr(lst))); // Line 167 Column 7
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var for_dash_each = (function(func,lst){
return ((function() {var loop = (function(lst){
return (function() {if(not(null_p_(lst))) {return ((function() {func(car(lst)); // Line 171 Column 2
return vector("__tco_call",(function() {return loop(cdr(lst)); // Line 171 Column 2
})); // Line 171 Column 2
}))(); // Line 171 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o1525844 = lst;
return trampoline(loop(o1525844)); // Line 171 Column 2
}))(); // Line 171 Column 2
});
var fold = (function(func,acc,lst){
return (function() {if(null_p_(lst)) {return acc; // Line <unknown undefined> Column <unknown undefined>
} else {return fold(func,func(car(lst),acc),cdr(lst)); // Line 180 Column 7
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var reverse = (function(lst){
return (function() {if(null_p_(lst)) {return _emptylst; // Line <unknown undefined> Column <unknown undefined>
} else {return list_dash_append(reverse(cdr(lst)),list(car(lst))); // Line 187 Column 7
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var vector_dash__gt_list = (function(vec){
return ((function() {var loop = (function(i){
return (function() {if((i < vec.length)) {return cons(vector_dash_ref(vec,i),loop((i + 1))); // Line 193 Column 2
} else {return _emptylst}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o2057438 = 0;
return loop(o2057438); // Line 193 Column 2
}))(); // Line 193 Column 2
});
var make_dash_vector = (function(count,val){
return ((function() {var o7972055 = (function(v){
return ((function() {var loop = (function(i){
return (function() {if((i < count)) {return ((function() {vector_dash_put_excl_(v,i,val); // Line 202 Column 2
return vector("__tco_call",(function() {return loop((i + 1)); // Line 202 Column 2
})); // Line 202 Column 2
}))(); // Line 202 Column 2
} else {return v; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o155750 = 0;
return trampoline(loop(o155750)); // Line 202 Column 2
}))(); // Line 202 Column 2
});
var o3898702 = new Array(count);
return o7972055(o3898702); // Line 202 Column 2
}))(); // Line 202 Column 2
});
var vector = (function() {return Array.prototype.slice.call(arguments)});
var vector_dash_ref = (function(vec,i){
return vec[i]});
var vector_dash_put_excl_ = (function(vec,i,obj){
return vec[i] = obj});
var vector_dash_concat = (function(){
var vecs = vector_dash__gt_list(Array.prototype.slice.call(arguments, 0));
return ((function() {var loop = (function(lst,res){
return (function() {if(null_p_(lst)) {return res; // Line <unknown undefined> Column <unknown undefined>
} else {return vector("__tco_call",(function() {return loop(cdr(lst),res["concat"](car(lst))); // Line 220 Column 2
})); // Line 220 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o8119925 = cdr(vecs);
var o2383227 = car(vecs);
return trampoline(loop(o8119925,o2383227)); // Line 220 Column 2
}))(); // Line 220 Column 2
});
var vector_dash_slice = (function(vec,start,end){
return vec.slice(start, end)});
var vector_dash_push_excl_ = (function(vec,obj){
return vec.push(obj)});
var vector_dash_find = (function(vec,val){
return ((function() {var loop = (function(i){
return (function() {if((i < vec.length)) {return (function() {if(eq_p_(vector_dash_ref(vec,i),val)) {return i; // Line <unknown undefined> Column <unknown undefined>
} else {return vector("__tco_call",(function() {return loop((i + 1)); // Line 234 Column 2
})); // Line 234 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
} else {return false; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o2699933 = 0;
return trampoline(loop(o2699933)); // Line 234 Column 2
}))(); // Line 234 Column 2
});
var vector_dash_length = (function(vec){
return vec["length"]; // Line <unknown undefined> Column <unknown undefined>
});
var list_dash__gt_vector = (function(lst){
var res = [];
for_dash_each((function(el){
return res["push"](el); // Line 246 Column 15
}),lst); // Line 245 Column 3
return res; // Line <unknown undefined> Column <unknown undefined>
});
var vector_dash_map = (function(func,vec){
var res = [];
((function() {var loop = (function(i){
return (function() {if((i < vec["length"])) {return ((function() {res["push"](func(vector_dash_ref(vec,i))); // Line 252 Column 2
return vector("__tco_call",(function() {return loop((i + 1)); // Line 252 Column 2
})); // Line 252 Column 2
}))(); // Line 252 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o9074672 = 0;
return trampoline(loop(o9074672)); // Line 252 Column 2
}))(); // Line 252 Column 2
return res; // Line <unknown undefined> Column <unknown undefined>
});
var vector_dash_for_dash_each = (function(func,vec){
return ((function() {var loop = (function(i){
return (function() {if((i < vec["length"])) {return ((function() {func(vector_dash_ref(vec,i)); // Line 260 Column 2
return vector("__tco_call",(function() {return loop((i + 1)); // Line 260 Column 2
})); // Line 260 Column 2
}))(); // Line 260 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o1192047 = 0;
return trampoline(loop(o1192047)); // Line 260 Column 2
}))(); // Line 260 Column 2
});
var vector_dash_fold = (function(func,acc,vec){
return ((function() {var loop = (function(i,acc){
return (function() {if((i < vector_dash_length(vec))) {return vector("__tco_call",(function() {return loop((i + 1),func(vector_dash_ref(vec,i),acc)); // Line 267 Column 2
})); // Line 267 Column 2
} else {return acc; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o764674 = 0;
var o5225172 = acc;
return trampoline(loop(o764674,o5225172)); // Line 267 Column 2
}))(); // Line 267 Column 2
});
var dict = (function() {
var args = vector_dash__gt_list(Array.prototype.slice.call(arguments));
var res = {};
((function() {var loop = (function(lst){
return (function() {if(not(null_p_(lst))) {return ((function() {var o5894180 = (function(key,val){
dict_dash_put_excl_(res,key,val); // Line 279 Column 4
return vector("__tco_call",(function() {return loop(cddr(lst)); // Line 279 Column 4
})); // Line 279 Column 4
});
var o3911383 = car(lst);
var o61791 = cadr(lst);
return o5894180(o3911383,o61791); // Line 279 Column 4
}))(); // Line 279 Column 4
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o1471291 = args;
return trampoline(loop(o1471291)); // Line 279 Column 4
}))(); // Line 279 Column 4
return res; // Line <unknown undefined> Column <unknown undefined>
});
var dict_dash_put_excl_ = (function(dct,k,v){
return dct[k.substring(1)] = v});
var dict_dash_ref = (function(dct,k){
return dct[k.substring(1)]});
var dict_dash_map = (function(func,dct){
var res = dict();
((function() {var loop = (function(lst){
return (function() {if(not(null_p_(lst))) {return ((function() {var o2491649 = (function(k){
dict_dash_put_excl_(res,k,func(dict_dash_ref(dct,k))); // Line 295 Column 2
return vector("__tco_call",(function() {return loop(cdr(lst)); // Line 295 Column 2
})); // Line 295 Column 2
});
var o1021267 = car(lst);
return o2491649(o1021267); // Line 295 Column 2
}))(); // Line 295 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o3356711 = keys(dct);
return trampoline(loop(o3356711)); // Line 295 Column 2
}))(); // Line 295 Column 2
return res; // Line <unknown undefined> Column <unknown undefined>
});
var dict_dash_merge = (function(){
var dcts = vector_dash__gt_list(Array.prototype.slice.call(arguments, 0));
return ((function() {var o6798675 = (function(res){
for_dash_each((function(dct){
return for_dash_each((function(k){
return dict_dash_put_excl_(res,k,dict_dash_ref(dct,k)); // Line 304 Column 2
}),keys(dct)); // Line 304 Column 2
}),dcts); // Line 304 Column 2
return res; // Line <unknown undefined> Column <unknown undefined>
});
var o5252310 = dict();
return o6798675(o5252310); // Line 304 Column 2
}))(); // Line 304 Column 2
});
var dict_dash__gt_vector = (function(dct){
var res = vector();
((function() {var loop = (function(lst){
return (function() {if(not(null_p_(lst))) {return ((function() {vector_dash_push_excl_(res,car(lst)); // Line 314 Column 2
vector_dash_push_excl_(res,dict_dash_ref(dct,car(lst))); // Line 314 Column 2
return vector("__tco_call",(function() {return loop(cdr(lst)); // Line 314 Column 2
})); // Line 314 Column 2
}))(); // Line 314 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o8066228 = keys(dct);
return trampoline(loop(o8066228)); // Line 314 Column 2
}))(); // Line 314 Column 2
return res; // Line <unknown undefined> Column <unknown undefined>
});
var dict_dash__gt_list = (function(dct){
return vector_dash__gt_list(dict_dash__gt_vector(dct)); // Line 323 Column 3
});
var keys = (function(dct){
return ((function() {var o6070761 = (function(res){
for(var k in dct) {
       res = cons(string_dash__gt_key(k), res);
    }return res; // Line <unknown undefined> Column <unknown undefined>
});
var o1742250 = _emptylst;
return o6070761(o1742250); // Line 326 Column 2
}))(); // Line 326 Column 2
});
var vals = (function(dct){
return map((function(k){
return dict_dash_ref(dct,k); // Line 333 Column 20
}),keys(dct)); // Line 333 Column 3
});
var zip = (function(keys,vals){
var res = dict();
((function() {var loop = (function(ks,vs){
return (function() {if(not(null_p_(ks))) {return ((function() {dict_dash_put_excl_(res,car(ks),car(vs)); // Line 338 Column 2
return vector("__tco_call",(function() {return loop(cdr(ks),cdr(vs)); // Line 338 Column 2
})); // Line 338 Column 2
}))(); // Line 338 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o4314837 = keys;
var o1703717 = vals;
return trampoline(loop(o4314837,o1703717)); // Line 338 Column 2
}))(); // Line 338 Column 2
return res; // Line <unknown undefined> Column <unknown undefined>
});
var not = (function(obj){
return (typeof obj !== 'number' && !obj); // Line <unknown undefined> Column <unknown undefined>
});
var _eq__eq_ = (function(obj1,obj2){
return obj1 === obj2});
var _eq_ = (function(obj1,obj2){
return (function() {if((list_p_(obj1) && list_p_(obj2))) {return ((function() {return ((function() {var loop = (function(lst1,lst2){
var n1 = null_p_(lst1);
var n2 = null_p_(lst2);
return (function() {if((n1 && n2)) {return ((function() {return true; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 358 Column 2
} else {return (function() {if((n1 || n2)) {return ((function() {return false; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 358 Column 2
} else {return ((function() {return (function() {if(equal_p_(car(lst1),car(lst2))) {return loop(cdr(lst1),cdr(lst2)); // Line 358 Column 2
} else {return false; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 358 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o9795183 = obj1;
var o6976631 = obj2;
return loop(o9795183,o6976631); // Line 358 Column 2
}))(); // Line 358 Column 2
}))(); // Line 358 Column 2
} else {return (function() {if((vector_p_(obj1) && vector_p_(obj2))) {return ((function() {return (function() {if(not(_eq_(obj1["length"],obj2["length"]))) {return false; // Line <unknown undefined> Column <unknown undefined>
} else {return ((function() {var loop = (function(i){
return (function() {if((i < obj1["length"])) {return (function() {if(_eq_(vector_dash_ref(obj1,i),vector_dash_ref(obj2,i))) {return vector("__tco_call",(function() {return loop((i + 1)); // Line 358 Column 2
})); // Line 358 Column 2
} else {return false; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
} else {return true; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o7390712 = 0;
return trampoline(loop(o7390712)); // Line 358 Column 2
}))(); // Line 358 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 358 Column 2
} else {return (function() {if((dict_p_(obj1) && dict_p_(obj2))) {return ((function() {return ((function() {var o3187292 = (function(keys1,keys2){
return (eq_p_(length(keys1),length(keys2)) && ((function() {var loop = (function(lst){
return (function() {if(null_p_(lst)) {return true; // Line <unknown undefined> Column <unknown undefined>
} else {return (function() {if(equal_p_(dict_dash_ref(obj1,car(lst)),dict_dash_ref(obj2,car(lst)))) {return vector("__tco_call",(function() {return loop(cdr(lst)); // Line 358 Column 2
})); // Line 358 Column 2
} else {return false; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o8273304 = keys1;
return trampoline(loop(o8273304)); // Line 358 Column 2
}))()); // Line <unknown undefined> Column <unknown undefined>
});
var o4013574 = keys(obj1);
var o5335432 = keys(obj2);
return o3187292(o4013574,o5335432); // Line 358 Column 2
}))(); // Line 358 Column 2
}))(); // Line 358 Column 2
} else {return ((function() {return eq_p_(obj1,obj2); // Line 358 Column 2
}))(); // Line 358 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var eq_p_ = _eq__eq_;
var equal_p_ = _eq_;
var print = (function(msg){
return util["print"](msg); // Line 406 Column 3
});
var println = (function(msg){
return util["puts"](msg); // Line 409 Column 3
});
var pp = (function(obj){
return println(inspect(obj)); // Line 412 Column 3
});
var _per_inspect_dash_non_dash_sequence = (function(obj){
return (function() {if(number_p_(obj)) {return ((function() {return ("" + obj); // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 416 Column 2
} else {return (function() {if(string_p_(obj)) {return ((function() {obj = obj["replace"](RegExp("\\\\","g"),"\\\\");
obj = obj["replace"](RegExp("\n","g"),"\\n");
obj = obj["replace"](RegExp("\r","g"),"\\r");
obj = obj["replace"](RegExp("\t","g"),"\\t");
obj = obj["replace"](RegExp("\"","g"),"\\\"");
return ("\"" + obj + "\""); // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 416 Column 2
} else {return (function() {if(key_p_(obj)) {return ((function() {return (":" + symbol_dash__gt_string(obj)); // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 416 Column 2
} else {return (function() {if(symbol_p_(obj)) {return ((function() {return symbol_dash__gt_string(obj); // Line 416 Column 2
}))(); // Line 416 Column 2
} else {return (function() {if(boolean_p_(obj)) {return ((function() {return (function() {if(obj) {return "#t"; // Line <unknown undefined> Column <unknown undefined>
} else {return "#f"; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 416 Column 2
} else {return (function() {if(null_p_(obj)) {return ((function() {return "()"; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 416 Column 2
} else {return (function() {if(function_p_(obj)) {return ((function() {return "<function>"; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 416 Column 2
} else {return ((function() {return ("<unknown " + obj + ">"); // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 416 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var _per_recur_dash_protect = (function(obj,arg,func,halt){
var rest = vector_dash__gt_list(Array.prototype.slice.call(arguments, 4));
return ((function() {var o8795553 = (function(parents){
return (function() {if(list_dash_find(parents,obj)) {return halt; // Line <unknown undefined> Column <unknown undefined>
} else {return func(obj,arg,(function(el,arg){
return _per_recur_dash_protect(el,arg,func,halt,cons(obj,parents)); // Line 433 Column 2
})); // Line 433 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o6784259 = (function() {if(null_p_(rest)) {return _emptylst; // Line <unknown undefined> Column <unknown undefined>
} else {return car(rest); // Line 433 Column 2
}})()
;
return o8795553(o6784259); // Line 433 Column 2
}))(); // Line 433 Column 2
});
var _per_space = (function(obj){
return _per_recur_dash_protect(obj,false,(function(obj,arg,recur){
return (function() {if(list_p_(obj)) {return ((function() {return (length(obj) + 1 + fold((function(el,acc){
return (acc + recur(el,false)); // Line <unknown undefined> Column <unknown undefined>
}),0,obj)); // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 446 Column 5
} else {return (function() {if(dict_p_(obj)) {return ((function() {return recur(dict_dash__gt_list(obj),false); // Line 446 Column 5
}))(); // Line 446 Column 5
} else {return (function() {if(vector_p_(obj)) {return ((function() {return recur(vector_dash__gt_list(obj),false); // Line 446 Column 5
}))(); // Line 446 Column 5
} else {return ((function() {return vector_dash_length(_per_inspect_dash_non_dash_sequence(obj)); // Line 446 Column 5
}))(); // Line 446 Column 5
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}),vector_dash_length("<circular>")); // Line 442 Column 3
});
var inspect = (function(obj){
var rest = vector_dash__gt_list(Array.prototype.slice.call(arguments, 1));
return ((function() {var o2537239 = (function(no_dash_newlines){
return _per_recur_dash_protect(obj,1,(function(obj,i,recur){
var buffer = "";
var get_dash_buffer = (function() {return buffer; // Line <unknown undefined> Column <unknown undefined>
});
var disp = (function(s){
buffer = (buffer + s);
});
var pad = (function(n){
return vector_dash_for_dash_each((function(_){
return disp(" "); // Line 466 Column 2
}),make_dash_vector(n)); // Line 466 Column 2
});
return (function() {if(list_p_(obj)) {return ((function() {return ((function() {var o4501797 = (function(sp,first){
disp("("); // Line 466 Column 2
for_dash_each((function(el){
(function() {if(not(first)) {return (function() {if((sp && not(no_dash_newlines))) {return ((function() {disp("\n"); // Line 466 Column 2
return pad(i); // Line 466 Column 2
}))(); // Line 466 Column 2
} else {return disp(" "); // Line 466 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
disp(recur(el,(i + 1))); // Line 466 Column 2
first = false;
}),obj); // Line 466 Column 2
disp(")"); // Line 466 Column 2
return get_dash_buffer(); // Line 466 Column 2
});
var o8790461 = (_per_space(obj) > 30);
var o3721040 = true;
return o4501797(o8790461,o3721040); // Line 466 Column 2
}))(); // Line 466 Column 2
}))(); // Line 466 Column 2
} else {return (function() {if(vector_p_(obj)) {return ((function() {return ((function() {var o4177047 = (function(sp,first){
disp("["); // Line 466 Column 2
vector_dash_for_dash_each((function(el){
(function() {if(not(first)) {return (function() {if((sp && not(no_dash_newlines))) {return ((function() {disp("\n"); // Line 466 Column 2
return pad(i); // Line 466 Column 2
}))(); // Line 466 Column 2
} else {return disp(" "); // Line 466 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
disp(recur(el,(i + 1))); // Line 466 Column 2
first = false;
}),obj); // Line 466 Column 2
disp("]"); // Line 466 Column 2
return get_dash_buffer(); // Line 466 Column 2
});
var o8899630 = (_per_space(obj) > 30);
var o706055 = true;
return o4177047(o8899630,o706055); // Line 466 Column 2
}))(); // Line 466 Column 2
}))(); // Line 466 Column 2
} else {return (function() {if(dict_p_(obj)) {return ((function() {return ((function() {var o175972 = (function(sp,first){
disp("{"); // Line 466 Column 2
for_dash_each((function(k){
(function() {if(not(first)) {return (function() {if((sp && not(no_dash_newlines))) {return ((function() {disp("\n"); // Line 466 Column 2
return pad(i); // Line 466 Column 2
}))(); // Line 466 Column 2
} else {return disp(" "); // Line 466 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
disp(recur(k,i)); // Line 466 Column 2
disp(" "); // Line 466 Column 2
disp(recur(dict_dash_ref(obj,k),(i + 3 + vector_dash_length(symbol_dash__gt_string(k))))); // Line 466 Column 2
first = false;
}),keys(obj)); // Line 466 Column 2
disp("}"); // Line 466 Column 2
return get_dash_buffer(); // Line 466 Column 2
});
var o853722 = (_per_space(obj) > 30);
var o6061220 = true;
return o175972(o853722,o6061220); // Line 466 Column 2
}))(); // Line 466 Column 2
}))(); // Line 466 Column 2
} else {return ((function() {return _per_inspect_dash_non_dash_sequence(obj); // Line 466 Column 2
}))(); // Line 466 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}),"<circular>"); // Line 466 Column 2
});
var o8736667 = (function() {if(null_p_(rest)) {return false; // Line <unknown undefined> Column <unknown undefined>
} else {return car(rest); // Line 466 Column 2
}})()
;
return o2537239(o8736667); // Line 466 Column 2
}))(); // Line 466 Column 2
});
var apply = (function(func,args){
return func.apply(null,list_dash__gt_vector(args)); // Line 540 Column 3
});
var trampoline_dash_result_p_ = (function(value){
return (vector_p_(value) && _eq_(vector_dash_ref(value,0),"__tco_call")); // Line <unknown undefined> Column <unknown undefined>
});
var trampoline = (function(value){
while(trampoline_dash_result_p_(value)) { value = value[1](); }return value; // Line <unknown undefined> Column <unknown undefined>
});
var gensym = (function() {return string_dash__gt_symbol(("o" + Math["floor"]((Math["random"]() * 10000000)))); // Line 554 Column 3
});


var fs = require("fs");var ast = require("./ast");var chars_dash_whitespace = " \n\t\r";
var chars_dash_special = "(){}[],@'`:";
var chars_dash_delim = str(chars_dash_whitespace,chars_dash_special,";");
var _in_ = (function(str,char){
return number_p_(vector_dash_find(str,char)); // Line 9 Column 3
});
var vec_dash_getter = (function(i){
return (function(vec){
return vector_dash_ref(vec,i); // Line 13 Column 5
}); // Line <unknown undefined> Column <unknown undefined>
});
var read = (function(src){
var index = 0;
var len = vector_dash_length(src);
var lineno = 0;
var colno = 0;
var current = (function() {return (function() {if(finished()) {return ""; // Line <unknown undefined> Column <unknown undefined>
} else {return vector_dash_ref(src,index); // Line 24 Column 9
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var previous = (function() {return vector_dash_ref(src,(index - 1)); // Line 27 Column 5
});
var forward = (function() {index = (index + 1);
return (function() {if(_eq__eq_(previous(),"\n")) {return ((function() {lineno = (lineno + 1);
colno = 0;
}))(); // Line 33 Column 8
} else {colno = (colno + 1);
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var back = (function() {index = (index - 1);
return (function() {if(_eq__eq_(current(),"\n")) {lineno = (lineno - 1);
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var finished = (function() {return (index >= len); // Line <unknown undefined> Column <unknown undefined>
});
var skip_dash_whitespace = (function() {return ((function() {var loop = (function() {return (function() {if(_in_(chars_dash_whitespace,current())) {return ((function() {forward(); // Line 48 Column 4
return vector("__tco_call",(function() {return loop(); // Line 48 Column 4
})); // Line 48 Column 4
}))(); // Line 48 Column 4
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
return trampoline(loop()); // Line 48 Column 4
}))(); // Line 48 Column 4
});
var parse_dash_string = (function(lineno,colno){
return ((function() {var loop = (function(s){
forward(); // Line 55 Column 4
return (function() {if(_eq__eq_(current(),"\\")) {return ((function() {forward(); // Line 55 Column 4
return loop(str(s,((function() {var o5165323 = (function(c){
return (function() {if(_eq__eq_(c,"n")) {return ((function() {return "\n"; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 55 Column 4
} else {return (function() {if(_eq__eq_(c,"t")) {return ((function() {return "\t"; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 55 Column 4
} else {return (function() {if(_eq__eq_(c,"r")) {return ((function() {return "\r"; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 55 Column 4
} else {return ((function() {return c; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 55 Column 4
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o428904 = current();
return o5165323(o428904); // Line 55 Column 4
}))())); // Line 55 Column 4
}))(); // Line 55 Column 4
} else {return (function() {if(_eq__eq_(current(),"\"")) {return ((function() {return make_dash_token("\uFDD1STRING",s,lineno,colno); // Line 55 Column 4
}))(); // Line 55 Column 4
} else {return ((function() {return loop(str(s,current())); // Line 55 Column 4
}))(); // Line 55 Column 4
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o7748314 = "";
return loop(o7748314); // Line 55 Column 4
}))(); // Line 55 Column 4
});
var parse_dash_token = (function(s,lineno,colno){
return (function() {if(s["match"](RegExp("^[-+]?[0-9]+$"))) {return ((function() {return make_dash_token("\uFDD1INTEGER",s,lineno,colno); // Line 71 Column 4
}))(); // Line 71 Column 4
} else {return (function() {if(s["match"](RegExp("^[-+]?[0-9]+\\.[0-9]*$"))) {return ((function() {return make_dash_token("\uFDD1FLOAT",s,lineno,colno); // Line 71 Column 4
}))(); // Line 71 Column 4
} else {return (function() {if(s["match"](RegExp("^[-+]?0x"))) {return ((function() {return ((function() {var o1511276 = (function(m,prefix){
return (function() {if(m) {return make_dash_token("\uFDD1HEX",str(prefix,vector_dash_ref(m,1)),lineno,colno); // Line 71 Column 4
} else {throw(str("invalid hex value: ",s)); // Line 71 Column 4
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o1348995 = s["match"](RegExp("0x([0-9a-fA-F]+)$"));
var o2176847 = (function() {if(_eq__eq_(vector_dash_ref(s,0),"-")) {return "-"; // Line <unknown undefined> Column <unknown undefined>
} else {return ""; // Line <unknown undefined> Column <unknown undefined>
}})()
;
return o1511276(o1348995,o2176847); // Line 71 Column 4
}))(); // Line 71 Column 4
}))(); // Line 71 Column 4
} else {return (function() {if((_eq__eq_(s,"#f") || _eq__eq_(s,"#t"))) {return ((function() {return make_dash_token("\uFDD1BOOLEAN",s,lineno,colno); // Line 71 Column 4
}))(); // Line 71 Column 4
} else {return ((function() {return make_dash_token("\uFDD1SYMBOL",s,lineno,colno); // Line 71 Column 4
}))(); // Line 71 Column 4
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var parse_dash_comment = (function(lineno,colno){
return ((function() {var loop = (function(s){
forward(); // Line 84 Column 4
return (function() {if((finished() || _eq__eq_(current(),"\n"))) {return make_dash_token("\uFDD1COMMENT",s,lineno,colno); // Line 84 Column 4
} else {return vector("__tco_call",(function() {return loop(str(s,current())); // Line 84 Column 4
})); // Line 84 Column 4
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o8325584 = "";
return trampoline(loop(o8325584)); // Line 84 Column 4
}))(); // Line 84 Column 4
});
var unique_dash_obj = list(true);
var make_dash_token = (function(type,data,lineno,colno){
return vector(unique_dash_obj,type,data,lineno,colno); // Line 98 Column 4
});
var token_dash_type = vec_dash_getter(1);
var token_dash_data = vec_dash_getter(2);
var token_dash_lineno = vec_dash_getter(3);
var token_dash_colno = vec_dash_getter(4);
var token_p_ = (function(tok){
return (vector_p_(tok) && _eq__eq_(vector_dash_ref(tok,0),unique_dash_obj)); // Line <unknown undefined> Column <unknown undefined>
});
var get_dash_token = (function() {skip_dash_whitespace(); // Line 110 Column 5
return ((function() {var o5915963 = (function(c,lineno,colno){
return (function() {if(_in_(chars_dash_special,c)) {return ((function() {forward(); // Line 111 Column 4
return make_dash_token("\uFDD1SPECIAL",c,lineno,colno); // Line 111 Column 4
}))(); // Line 111 Column 4
} else {return (function() {if(_eq__eq_(c,"\"")) {return ((function() {return ((function() {var o5723018 = (function(s){
forward(); // Line 111 Column 4
return s; // Line <unknown undefined> Column <unknown undefined>
});
var o2488826 = parse_dash_string(lineno,colno);
return o5723018(o2488826); // Line 111 Column 4
}))(); // Line 111 Column 4
}))(); // Line 111 Column 4
} else {return (function() {if(_eq__eq_(c,";")) {return ((function() {return parse_dash_comment(lineno,colno); // Line 111 Column 4
}))(); // Line 111 Column 4
} else {return (function() {if(_eq__eq_(c,"")) {return ((function() {return false; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 111 Column 4
} else {return (function() {if(finished()) {return ((function() {return false; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 111 Column 4
} else {return ((function() {return ((function() {var loop = (function(s){
return (function() {if((_in_(chars_dash_delim,current()) || finished())) {return parse_dash_token(s,lineno,colno); // Line 111 Column 4
} else {return ((function() {forward(); // Line 111 Column 4
return vector("__tco_call",(function() {return loop(str(s,previous())); // Line 111 Column 4
})); // Line 111 Column 4
}))(); // Line 111 Column 4
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o9401575 = "";
return trampoline(loop(o9401575)); // Line 111 Column 4
}))(); // Line 111 Column 4
}))(); // Line 111 Column 4
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o8267486 = current();
var o6730406 = lineno;
var o8142073 = colno;
return o5915963(o8267486,o6730406,o8142073); // Line 111 Column 4
}))(); // Line 111 Column 4
});
var token_dash__gt_exp = (function(token){
return ((function() {var o752247 = (function(type,data){
return (function() {if(_eq__eq_(type,"\uFDD1STRING")) {return ((function() {return data; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 138 Column 4
} else {return (function() {if(_eq__eq_(type,"\uFDD1SYMBOL")) {return ((function() {return string_dash__gt_symbol(data); // Line 138 Column 4
}))(); // Line 138 Column 4
} else {return (function() {if(_eq__eq_(type,"\uFDD1BOOLEAN")) {return ((function() {return (function() {if(_eq__eq_(data,"#f")) {return false; // Line <unknown undefined> Column <unknown undefined>
} else {return true; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 138 Column 4
} else {return (function() {if(_eq__eq_(type,"\uFDD1INTEGER")) {return ((function() {return parseInt(data); // Line 138 Column 4
}))(); // Line 138 Column 4
} else {return (function() {if(_eq__eq_(type,"\uFDD1FLOAT")) {return ((function() {return parseFloat(data); // Line 138 Column 4
}))(); // Line 138 Column 4
} else {return (function() {if(_eq__eq_(type,"\uFDD1HEX")) {return ((function() {return parseInt(data,16); // Line 138 Column 4
}))(); // Line 138 Column 4
} else {return ((function() {throw(str("cannot convert token to exp: ",token)); // Line 138 Column 4
}))(); // Line 138 Column 4
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o6090595 = token_dash_type(token);
var o82800 = token_dash_data(token);
return o752247(o6090595,o82800); // Line 138 Column 4
}))(); // Line 138 Column 4
});
var special_p_ = (function(t,chars){
return (token_p_(t) && _eq__eq_(token_dash_type(t),"\uFDD1SPECIAL") && _in_(chars,token_dash_data(t))); // Line <unknown undefined> Column <unknown undefined>
});
var compound_dash_start_p_ = (function(t){
return (special_p_(t,"(") || special_p_(t,"[") || special_p_(t,"{")); // Line <unknown undefined> Column <unknown undefined>
});
var compound_dash_end_p_ = (function(t){
return (special_p_(t,")") || special_p_(t,"]") || special_p_(t,"}")); // Line <unknown undefined> Column <unknown undefined>
});
var end_p_ = (function(t){
return (token_p_(t) && _eq__eq_(token_dash_type(t),"\uFDD1END")); // Line <unknown undefined> Column <unknown undefined>
});
var read_dash_exp = (function() {return ((function() {var o832719 = (function(token){
return (function() {if(not(token)) {return ((function() {return make_dash_token("\uFDD1END",false); // Line 170 Column 4
}))(); // Line 170 Column 4
} else {return (function() {if(compound_dash_end_p_(token)) {return ((function() {return token; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 170 Column 4
} else {return (function() {if(compound_dash_start_p_(token)) {return ((function() {return ((function() {var loop = (function(lst,exp){
return (function() {if((end_p_(exp) || compound_dash_end_p_(exp))) {return ((function() {var in_dash_list_p_ = special_p_(token,"(");
var in_dash_vector_p_ = special_p_(token,"[");
var in_dash_dict_p_ = special_p_(token,"{");
return (function() {if((in_dash_list_p_ && special_p_(exp,")"))) {return ((function() {return ast["make-node"]("\uFDD1LIST",reverse(lst),token_dash_lineno(token),token_dash_colno(token)); // Line 170 Column 4
}))(); // Line 170 Column 4
} else {return (function() {if((in_dash_vector_p_ && special_p_(exp,"]"))) {return ((function() {return ast["make-node"]("\uFDD1VECTOR",reverse(lst),token_dash_lineno(token),token_dash_colno(token)); // Line 170 Column 4
}))(); // Line 170 Column 4
} else {return (function() {if((in_dash_dict_p_ && special_p_(exp,"}"))) {return ((function() {return ast["make-node"]("\uFDD1DICT",reverse(lst),token_dash_lineno(token),token_dash_colno(token)); // Line 170 Column 4
}))(); // Line 170 Column 4
} else {return ((function() {throw(str("unterminated ",(function() {if(list_p_) {return ((function() {return "list"; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 170 Column 4
} else {return (function() {if(vector_p_) {return ((function() {return "vector"; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 170 Column 4
} else {return (function() {if(dict_p_) {return ((function() {return "dict"; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 170 Column 4
} else {return false; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
)); // Line 170 Column 4
}))(); // Line 170 Column 4
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 170 Column 4
} else {return ((function() {return vector("__tco_call",(function() {return loop(cons(exp,lst),read_dash_exp()); // Line 170 Column 4
})); // Line 170 Column 4
}))(); // Line 170 Column 4
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o6846580 = _emptylst;
var o1556289 = read_dash_exp();
return trampoline(loop(o6846580,o1556289)); // Line 170 Column 4
}))(); // Line 170 Column 4
}))(); // Line 170 Column 4
} else {return (function() {if(special_p_(token,"'")) {return ((function() {return ast["make-node"]("\uFDD1LIST",list(ast["make-node"]("\uFDD1ATOM","\uFDD1quote",token_dash_lineno(token),token_dash_colno(token)),read_dash_exp()),token_dash_lineno(token),token_dash_colno(token)); // Line 170 Column 4
}))(); // Line 170 Column 4
} else {return (function() {if(special_p_(token,":")) {return ((function() {return ((function() {var o1486087 = (function(e){
(function() {if((not(ast["atom?"](e)) || not(symbol_p_(ast["node-data"](e))))) {throw(str("invalid key expression: ",ast["node-data"](e))); // Line 170 Column 4
}})()
; // Line <unknown undefined> Column <unknown undefined>
return ast["make-node"]("\uFDD1ATOM",symbol_dash__gt_key(ast["node-data"](e)),token_dash_lineno(token),token_dash_colno(token)); // Line 170 Column 4
});
var o4392135 = read_dash_exp();
return o1486087(o4392135); // Line 170 Column 4
}))(); // Line 170 Column 4
}))(); // Line 170 Column 4
} else {return (function() {if(special_p_(token,"`")) {return ((function() {return ast["make-node"]("\uFDD1LIST",list(ast["make-node"]("\uFDD1ATOM","\uFDD1quasiquote",token_dash_lineno(token),token_dash_colno(token)),read_dash_exp()),token_dash_lineno(token),token_dash_colno(token)); // Line 170 Column 4
}))(); // Line 170 Column 4
} else {return (function() {if(special_p_(token,",")) {return ((function() {return ((function() {var o8298530 = (function(next){
return (function() {if(_eq__eq_(next,"@")) {return ((function() {forward(); // Line 170 Column 4
return ast["make-node"]("\uFDD1LIST",list(ast["make-node"]("\uFDD1ATOM","\uFDD1unquote-splicing",token_dash_lineno(token),token_dash_colno(token)),read_dash_exp()),token_dash_lineno(token),token_dash_colno(token)); // Line 170 Column 4
}))(); // Line 170 Column 4
} else {return ((function() {return ast["make-node"]("\uFDD1LIST",list(ast["make-node"]("\uFDD1ATOM","\uFDD1unquote",token_dash_lineno(token),token_dash_colno(token)),read_dash_exp()),token_dash_lineno(token),token_dash_colno(token)); // Line 170 Column 4
}))(); // Line 170 Column 4
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o1380099 = current();
return o8298530(o1380099); // Line 170 Column 4
}))(); // Line 170 Column 4
}))(); // Line 170 Column 4
} else {return ((function() {return (function() {if(_eq__eq_(token_dash_type(token),"\uFDD1COMMENT")) {return read_dash_exp(); // Line 170 Column 4
} else {return ast["make-node"]("\uFDD1ATOM",token_dash__gt_exp(token),token_dash_lineno(token),token_dash_colno(token)); // Line 170 Column 4
}})()
; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 170 Column 4
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o6379341 = get_dash_token();
return o832719(o6379341); // Line 170 Column 4
}))(); // Line 170 Column 4
});
return ((function() {var loop = (function(e_star_,e){
return (function() {if(end_p_(e)) {return (function() {if(_eq__eq_(length(e_star_),1)) {return car(e_star_); // Line 272 Column 2
} else {return ast["make-node"]("\uFDD1LIST",cons(ast["make-node"]("\uFDD1ATOM","\uFDD1begin",0,1),reverse(e_star_)),0,0); // Line 272 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
} else {return vector("__tco_call",(function() {return loop(cons(e,e_star_),read_dash_exp()); // Line 272 Column 2
})); // Line 272 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o778393 = _emptylst;
var o2492467 = read_dash_exp();
return trampoline(loop(o778393,o2492467)); // Line 272 Column 2
}))(); // Line 272 Column 2
});
module["exports"] = dict("\uFDD0read",read);

