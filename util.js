var req=function(params){var xhr=new XMLHttpRequest();xhr.open(params.verb||'GET', params.url);for(name in params.headers||[]){xhr.setRequestHeader(name, (params.headers||[])[name])};cb=console.log.bind(console);xhr.onerror=params.error||cb;xhr.onreadystatechange=params.cb||cb;return xhr};

var mkparams=function(params){var param_str="";for (key in params){var sep=param_str==""?"?":"&";param_str+=sep+key+"="+params[key]};return param_str}

var q=function(sel){return document.querySelector(sel)}
var qa=function(sel){return document.querySelectorAll(sel)}

var el=function(name){return document.createElement(name);}
var html=function(str){var tmp=el("div");tmp.innerHTML=str;return tmp.children}

var range=function(from,to){var ary = [];for(var i=0;i<from+to;i++){ary[from+i]=from+i;};return ary}

var slug=function(str){return str.replace(/[^\w\d\s]/g, "").trim().replace(/\s+/g, "-")}

var ary=function(indexable){var ary=[];for(var i=0;i<indexable.length;i++){ary[i]=indexable[i];};return ary}

window.util={req:req,mkparams:mkparams,q:q,qa:qa,el:el,html:html,range:range,slug:slug,ary:ary}
