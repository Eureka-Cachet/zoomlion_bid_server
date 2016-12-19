/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);



/*! jQuery Migrate v1.2.2-pre | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
void 0===jQuery.migrateMute&&(jQuery.migrateMute=!0),function(e,t,n){function i(n){var i=t.console;a[n]||(a[n]=!0,e.migrateWarnings.push(n),i&&i.warn&&!e.migrateMute&&(i.warn("JQMIGRATE: "+n),e.migrateTrace&&i.trace&&i.trace()))}function r(t,r,a,o){if(Object.defineProperty)try{return Object.defineProperty(t,r,{configurable:!0,enumerable:!0,get:function(){return i(o),a},set:function(e){i(o),a=e}}),n}catch(s){}e._definePropertyBroken=!0,t[r]=a}var a={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){a={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&i("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,l=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},u=/^(?:input|button)$/i,d=/^[238]$/,h=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;r(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,r,a,l){var c=r.toLowerCase(),p=t&&t.nodeType;return l&&(4>s.length&&i("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(p)&&(o?r in o:e.isFunction(e.fn[r])))?e(t)[r](a):("type"===r&&a!==n&&u.test(t.nodeName)&&t.parentNode&&i("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&h.test(c)&&(e.attrHooks[c]={get:function(t,i){var r,a=e.prop(t,i);return a===!0||"boolean"!=typeof a&&(r=t.getAttributeNode(i))&&r.nodeValue!==!1?i.toLowerCase():n},set:function(t,n,i){var r;return n===!1?e.removeAttr(t,i):(r=e.propFix[i]||i,r in t&&(t[r]=!0),t.setAttribute(i,i.toLowerCase())),i}},f.test(c)&&i("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,r,a))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?l.apply(this,arguments):("input"!==n&&"option"!==n&&i("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var r=(e.nodeName||"").toLowerCase();return"button"===r?c.apply(this,arguments):("input"!==r&&"option"!==r&&i("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var p,m,g=e.fn.init,v=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,r){var a;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(a=y.exec(e.trim(t)))&&a[0]&&("<"!==t.charAt(0)&&i("$(html) HTML strings must start with '<' character"),a[3]&&i("$(html) HTML text after last tag is ignored"),"#"===a[0].charAt(0)&&(i("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?g.call(this,e.parseHTML(a[2],n,!0),n,r):g.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e?v.apply(this,arguments):(i("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(p=e.uaMatch(navigator.userAgent),m={},p.browser&&(m[p.browser]=!0,m.version=p.version),m.chrome?m.webkit=!0:m.webkit&&(m.safari=!0),e.browser=m),r(e,"browser",e.browser,"jQuery.browser is deprecated"),e.boxModel=e.support.boxModel="CSS1Compat"===document.compatMode,r(e,"boxModel",e.boxModel,"jQuery.boxModel is deprecated"),r(e.support,"boxModel",e.support.boxModel,"jQuery.support.boxModel is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(i,r){var a=e.fn.init.call(this,i,r,n);return a instanceof t?a:t(a)},t.fn.init.prototype=t.fn;var n=t(document);return i("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var r,a,o=this[0];return!o||"events"!==t||1!==arguments.length||(r=e.data(o,t),a=e._data(o,t),r!==n&&r!==a||a===n)?b.apply(this,arguments):(i("Use of jQuery.fn.data('events') is deprecated"),a)};var w=/\/(java|ecma)script/i,x=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return i("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),x.apply(this,arguments)},e.clean||(e.clean=function(t,r,a,o){r=r||document,r=!r.nodeType&&r[0]||r,r=r.ownerDocument||r,i("jQuery.clean() is deprecated");var s,l,c,u,d=[];if(e.merge(d,e.buildFragment(t,r).childNodes),a)for(c=function(e){return!e.type||w.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):a.appendChild(e):n},s=0;null!=(l=d[s]);s++)e.nodeName(l,"script")&&c(l)||(a.appendChild(l),l.getElementsByTagName!==n&&(u=e.grep(e.merge([],l.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(u)),s+=u.length));return d});var _=e.event.add,k=e.event.remove,C=e.event.trigger,T=e.fn.toggle,S=e.fn.live,E=e.fn.die,$="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",A=RegExp("\\b(?:"+$+")\\b"),I=/(?:^|\s)hover(\.\S+|)\b/,D=function(t){return"string"!=typeof t||e.event.special.hover?t:(I.test(t)&&i("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(I,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&r(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,r,a){e!==document&&A.test(t)&&i("AJAX events should be attached to document: "+t),_.call(this,e,D(t||""),n,r,a)},e.event.remove=function(e,t,n,i,r){k.call(this,e,D(t)||"",n,i,r)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return i("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return T.apply(this,arguments);i("jQuery.fn.toggle(handler, handler...) is deprecated");var r=arguments,a=t.guid||e.guid++,o=0,s=function(n){var i=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,i+1),n.preventDefault(),r[i].apply(this,arguments)||!1};for(s.guid=a;r.length>o;)r[o++].guid=a;return this.click(s)},e.fn.live=function(t,n,r){return i("jQuery.fn.live() is deprecated"),S?S.apply(this,arguments):(e(this.context).on(t,this.selector,n,r),this)},e.fn.die=function(t,n){return i("jQuery.fn.die() is deprecated"),E?E.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,r){return n||A.test(e)||i("Global events are undocumented and deprecated"),C.call(this,e,t,n||document,r)},e.each($.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);


/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
jQuery.cookie=function(e,i,o){if("undefined"==typeof i){var n=null;if(document.cookie&&""!=document.cookie)for(var r=document.cookie.split(";"),t=0;t<r.length;t++){var p=jQuery.trim(r[t]);if(p.substring(0,e.length+1)==e+"="){n=decodeURIComponent(p.substring(e.length+1));break}}return n}o=o||{},null===i&&(i="",o.expires=-1);var u="";if(o.expires&&("number"==typeof o.expires||o.expires.toUTCString)){var s;"number"==typeof o.expires?(s=new Date,s.setTime(s.getTime()+24*o.expires*60*60*1e3)):s=o.expires,u="; expires="+s.toUTCString()}var a=o.path?"; path="+o.path:"",c=o.domain?"; domain="+o.domain:"",m=o.secure?"; secure":"";document.cookie=[e,"=",encodeURIComponent(i),u,a,c,m].join("")};
/*! jQuery UI - v1.9.2 - 2013-11-03
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.button.js, jquery.ui.dialog.js, jquery.ui.slider.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */

(function(e,t){function i(t,i){var s,a,o,r=t.nodeName.toLowerCase();return"area"===r?(s=t.parentNode,a=s.name,t.href&&a&&"map"===s.nodeName.toLowerCase()?(o=e("img[usemap=#"+a+"]")[0],!!o&&n(o)):!1):(/input|select|textarea|button|object/.test(r)?!t.disabled:"a"===r?t.href||i:i)&&n(t)}function n(t){return e.expr.filters.visible(t)&&!e(t).parents().andSelf().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var s=0,a=/^ui-id-\d+$/;e.ui=e.ui||{},e.ui.version||(e.extend(e.ui,{version:"1.9.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({_focus:e.fn.focus,focus:function(t,i){return"number"==typeof t?this.each(function(){var n=this;setTimeout(function(){e(n).focus(),i&&i.call(n)},t)}):this._focus.apply(this,arguments)},scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var n,s,a=e(this[0]);a.length&&a[0]!==document;){if(n=a.css("position"),("absolute"===n||"relative"===n||"fixed"===n)&&(s=parseInt(a.css("zIndex"),10),!isNaN(s)&&0!==s))return s;a=a.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++s)})},removeUniqueId:function(){return this.each(function(){a.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,n){return!!e.data(t,n[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),s=isNaN(n);return(s||n>=0)&&i(t,!s)}}),e(function(){var t=document.body,i=t.appendChild(i=document.createElement("div"));i.offsetHeight,e.extend(i.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),e.support.minHeight=100===i.offsetHeight,e.support.selectstart="onselectstart"in i,t.removeChild(i).style.display="none"}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,n){function s(t,i,n,s){return e.each(a,function(){i-=parseFloat(e.css(t,"padding"+this))||0,n&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var a="Width"===n?["Left","Right"]:["Top","Bottom"],o=n.toLowerCase(),r={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+n]=function(i){return i===t?r["inner"+n].call(this):this.each(function(){e(this).css(o,s(this,i)+"px")})},e.fn["outer"+n]=function(t,i){return"number"!=typeof t?r["outer"+n].call(this,t):this.each(function(){e(this).css(o,s(this,t,!0,i)+"px")})}}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),function(){var t=/msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase())||[];e.ui.ie=t.length?!0:!1,e.ui.ie6=6===parseFloat(t[1],10)}(),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,n){var s,a=e.ui[t].prototype;for(s in n)a.plugins[s]=a.plugins[s]||[],a.plugins[s].push([i,n[s]])},call:function(e,t,i){var n,s=e.plugins[t];if(s&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(n=0;s.length>n;n++)e.options[s[n][0]]&&s[n][1].apply(e.element,i)}},contains:e.contains,hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var n=i&&"left"===i?"scrollLeft":"scrollTop",s=!1;return t[n]>0?!0:(t[n]=1,s=t[n]>0,t[n]=0,s)},isOverAxis:function(e,t,i){return e>t&&t+i>e},isOver:function(t,i,n,s,a,o){return e.ui.isOverAxis(t,n,a)&&e.ui.isOverAxis(i,s,o)}}))})(jQuery);(function(t,e){var i=0,s=Array.prototype.slice,n=t.cleanData;t.cleanData=function(e){for(var i,s=0;null!=(i=e[s]);s++)try{t(i).triggerHandler("remove")}catch(a){}n(e)},t.widget=function(i,s,n){var a,o,r,h,l=i.split(".")[0];i=i.split(".")[1],a=l+"-"+i,n||(n=s,s=t.Widget),t.expr[":"][a.toLowerCase()]=function(e){return!!t.data(e,a)},t[l]=t[l]||{},o=t[l][i],r=t[l][i]=function(t,i){return this._createWidget?(arguments.length&&this._createWidget(t,i),e):new r(t,i)},t.extend(r,o,{version:n.version,_proto:t.extend({},n),_childConstructors:[]}),h=new s,h.options=t.widget.extend({},h.options),t.each(n,function(e,i){t.isFunction(i)&&(n[e]=function(){var t=function(){return s.prototype[e].apply(this,arguments)},n=function(t){return s.prototype[e].apply(this,t)};return function(){var e,s=this._super,a=this._superApply;return this._super=t,this._superApply=n,e=i.apply(this,arguments),this._super=s,this._superApply=a,e}}())}),r.prototype=t.widget.extend(h,{widgetEventPrefix:o?h.widgetEventPrefix:i},n,{constructor:r,namespace:l,widgetName:i,widgetBaseClass:a,widgetFullName:a}),o?(t.each(o._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,r,i._proto)}),delete o._childConstructors):s._childConstructors.push(r),t.widget.bridge(i,r)},t.widget.extend=function(i){for(var n,a,o=s.call(arguments,1),r=0,h=o.length;h>r;r++)for(n in o[r])a=o[r][n],o[r].hasOwnProperty(n)&&a!==e&&(i[n]=t.isPlainObject(a)?t.isPlainObject(i[n])?t.widget.extend({},i[n],a):t.widget.extend({},a):a);return i},t.widget.bridge=function(i,n){var a=n.prototype.widgetFullName||i;t.fn[i]=function(o){var r="string"==typeof o,h=s.call(arguments,1),l=this;return o=!r&&h.length?t.widget.extend.apply(null,[o].concat(h)):o,r?this.each(function(){var s,n=t.data(this,a);return n?t.isFunction(n[o])&&"_"!==o.charAt(0)?(s=n[o].apply(n,h),s!==n&&s!==e?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):e):t.error("no such method '"+o+"' for "+i+" widget instance"):t.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+o+"'")}):this.each(function(){var e=t.data(this,a);e?e.option(o||{})._init():t.data(this,a,new n(o,this))}),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this.bindings=t(),this.hoverable=t(),this.focusable=t(),s!==this&&(t.data(s,this.widgetName,this),t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(i,s){var n,a,o,r=i;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof i)if(r={},n=i.split("."),i=n.shift(),n.length){for(a=r[i]=t.widget.extend({},this.options[i]),o=0;n.length-1>o;o++)a[n[o]]=a[n[o]]||{},a=a[n[o]];if(i=n.pop(),s===e)return a[i]===e?null:a[i];a[i]=s}else{if(s===e)return this.options[i]===e?null:this.options[i];r[i]=s}return this._setOptions(r),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var a,o=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=a=t(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,a=this.widget()),t.each(n,function(n,r){function h(){return i||o.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof r?o[r]:r).apply(o,arguments):e}"string"!=typeof r&&(h.guid=r.guid=r.guid||h.guid||t.guid++);var l=n.match(/^(\w+)\s*(.*)$/),c=l[1]+o.eventNamespace,u=l[2];u?a.delegate(u,c,h):s.bind(c,h)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,s){var n,a,o=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(t.isFunction(o)&&o.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,a){"string"==typeof n&&(n={effect:n});var o,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),o=!t.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),o&&t.effects&&(t.effects.effect[r]||t.uiBackCompat!==!1&&t.effects[r])?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,a):s.queue(function(i){t(this)[e](),a&&a.call(s[0]),i()})}}),t.uiBackCompat!==!1&&(t.Widget.prototype._getCreateOptions=function(){return t.metadata&&t.metadata.get(this.element[0])[this.widgetName]})})(jQuery);(function(e){var t=!1;e(document).mouseup(function(){t=!1}),e.widget("ui.mouse",{version:"1.9.2",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!t){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,n=1===i.which,a="string"==typeof this.options.cancel&&i.target.nodeName?e(i.target).closest(this.options.cancel).length:!1;return n&&!a&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===e.data(i.target,this.widgetName+".preventClickEvent")&&e.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return s._mouseMove(e)},this._mouseUpDelegate=function(e){return s._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),t=!0,!0)):!0}},_mouseMove:function(t){return!e.ui.ie||document.documentMode>=9||t.button?this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted):this._mouseUp(t)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);(function(t,e){function i(t,e,i){return[parseInt(t[0],10)*(d.test(t[0])?e/100:1),parseInt(t[1],10)*(d.test(t[1])?i/100:1)]}function s(e,i){return parseInt(t.css(e,i),10)||0}t.ui=t.ui||{};var n,a=Math.max,o=Math.abs,r=Math.round,l=/left|center|right/,h=/top|center|bottom/,c=/[\+\-]\d+%?/,u=/^\w+/,d=/%$/,p=t.fn.position;t.position={scrollbarWidth:function(){if(n!==e)return n;var i,s,a=t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=a.children()[0];return t("body").append(a),i=o.offsetWidth,a.css("overflow","scroll"),s=o.offsetWidth,i===s&&(s=a[0].clientWidth),a.remove(),n=i-s},getScrollInfo:function(e){var i=e.isWindow?"":e.element.css("overflow-x"),s=e.isWindow?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,a="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:n?t.position.scrollbarWidth():0,height:a?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]);return{element:i,isWindow:s,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s?i.width():i.outerWidth(),height:s?i.height():i.outerHeight()}}},t.fn.position=function(e){if(!e||!e.of)return p.apply(this,arguments);e=t.extend({},e);var n,d,f,g,m,v=t(e.of),_=t.position.getWithinInfo(e.within),b=t.position.getScrollInfo(_),y=v[0],w=(e.collision||"flip").split(" "),k={};return 9===y.nodeType?(d=v.width(),f=v.height(),g={top:0,left:0}):t.isWindow(y)?(d=v.width(),f=v.height(),g={top:v.scrollTop(),left:v.scrollLeft()}):y.preventDefault?(e.at="left top",d=f=0,g={top:y.pageY,left:y.pageX}):(d=v.outerWidth(),f=v.outerHeight(),g=v.offset()),m=t.extend({},g),t.each(["my","at"],function(){var t,i,s=(e[this]||"").split(" ");1===s.length&&(s=l.test(s[0])?s.concat(["center"]):h.test(s[0])?["center"].concat(s):["center","center"]),s[0]=l.test(s[0])?s[0]:"center",s[1]=h.test(s[1])?s[1]:"center",t=c.exec(s[0]),i=c.exec(s[1]),k[this]=[t?t[0]:0,i?i[0]:0],e[this]=[u.exec(s[0])[0],u.exec(s[1])[0]]}),1===w.length&&(w[1]=w[0]),"right"===e.at[0]?m.left+=d:"center"===e.at[0]&&(m.left+=d/2),"bottom"===e.at[1]?m.top+=f:"center"===e.at[1]&&(m.top+=f/2),n=i(k.at,d,f),m.left+=n[0],m.top+=n[1],this.each(function(){var l,h,c=t(this),u=c.outerWidth(),p=c.outerHeight(),y=s(this,"marginLeft"),D=s(this,"marginTop"),x=u+y+s(this,"marginRight")+b.width,C=p+D+s(this,"marginBottom")+b.height,M=t.extend({},m),I=i(k.my,c.outerWidth(),c.outerHeight());"right"===e.my[0]?M.left-=u:"center"===e.my[0]&&(M.left-=u/2),"bottom"===e.my[1]?M.top-=p:"center"===e.my[1]&&(M.top-=p/2),M.left+=I[0],M.top+=I[1],t.support.offsetFractions||(M.left=r(M.left),M.top=r(M.top)),l={marginLeft:y,marginTop:D},t.each(["left","top"],function(i,s){t.ui.position[w[i]]&&t.ui.position[w[i]][s](M,{targetWidth:d,targetHeight:f,elemWidth:u,elemHeight:p,collisionPosition:l,collisionWidth:x,collisionHeight:C,offset:[n[0]+I[0],n[1]+I[1]],my:e.my,at:e.at,within:_,elem:c})}),t.fn.bgiframe&&c.bgiframe(),e.using&&(h=function(t){var i=g.left-M.left,s=i+d-u,n=g.top-M.top,r=n+f-p,l={target:{element:v,left:g.left,top:g.top,width:d,height:f},element:{element:c,left:M.left,top:M.top,width:u,height:p},horizontal:0>s?"left":i>0?"right":"center",vertical:0>r?"top":n>0?"bottom":"middle"};u>d&&d>o(i+s)&&(l.horizontal="center"),p>f&&f>o(n+r)&&(l.vertical="middle"),l.important=a(o(i),o(s))>a(o(n),o(r))?"horizontal":"vertical",e.using.call(this,t,l)}),c.offset(t.extend(M,{using:h}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,o=s.width,r=t.left-e.collisionPosition.marginLeft,l=n-r,h=r+e.collisionWidth-o-n;e.collisionWidth>o?l>0&&0>=h?(i=t.left+l+e.collisionWidth-o-n,t.left+=l-i):t.left=h>0&&0>=l?n:l>h?n+o-e.collisionWidth:n:l>0?t.left+=l:h>0?t.left-=h:t.left=a(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,o=e.within.height,r=t.top-e.collisionPosition.marginTop,l=n-r,h=r+e.collisionHeight-o-n;e.collisionHeight>o?l>0&&0>=h?(i=t.top+l+e.collisionHeight-o-n,t.top+=l-i):t.top=h>0&&0>=l?n:l>h?n+o-e.collisionHeight:n:l>0?t.top+=l:h>0?t.top-=h:t.top=a(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,a=n.offset.left+n.scrollLeft,r=n.width,l=n.isWindow?n.scrollLeft:n.offset.left,h=t.left-e.collisionPosition.marginLeft,c=h-l,u=h+e.collisionWidth-r-l,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-r-a,(0>i||o(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-l,(s>0||u>o(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,a=n.offset.top+n.scrollTop,r=n.height,l=n.isWindow?n.scrollTop:n.offset.top,h=t.top-e.collisionPosition.marginTop,c=h-l,u=h+e.collisionHeight-r-l,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>c?(s=t.top+p+f+g+e.collisionHeight-r-a,t.top+p+f+g>c&&(0>s||o(c)>s)&&(t.top+=p+f+g)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+g-l,t.top+p+f+g>u&&(i>0||u>o(i))&&(t.top+=p+f+g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var e,i,s,n,a,o=document.getElementsByTagName("body")[0],r=document.createElement("div");e=document.createElement(o?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&t.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(a in s)e.style[a]=s[a];e.appendChild(r),i=o||document.documentElement,i.insertBefore(e,i.firstChild),r.style.cssText="position: absolute; left: 10.7432222px;",n=t(r).offset().left,t.support.offsetFractions=n>10&&11>n,e.innerHTML="",i.removeChild(e)}(),t.uiBackCompat!==!1&&function(t){var i=t.fn.position;t.fn.position=function(s){if(!s||!s.offset)return i.call(this,s);var n=s.offset.split(" "),a=s.at.split(" ");return 1===n.length&&(n[1]=n[0]),/^\d/.test(n[0])&&(n[0]="+"+n[0]),/^\d/.test(n[1])&&(n[1]="+"+n[1]),1===a.length&&(/left|center|right/.test(a[0])?a[1]="center":(a[1]=a[0],a[0]="center")),i.call(this,t.extend(s,{at:a[0]+n[0]+" "+a[1]+n[1],offset:e}))}}(jQuery)})(jQuery);(function(t){t.widget("ui.draggable",t.ui.mouse,{version:"1.9.2",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1},_create:function(){"original"!=this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(e){var i=this.options;return this.helper||i.disabled||t(e.target).is(".ui-resizable-handle")?!1:(this.handle=this._getHandle(e),this.handle?(t(i.iframeFix===!0?"iframe":i.iframeFix).each(function(){t('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(t(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(e){var i=this.options;return this.helper=this._createHelper(e),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),i.containment&&this._setContainment(),this._trigger("start",e)===!1?(this._clear(),!1):(this._cacheHelperProportions(),t.ui.ddmanager&&!i.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._mouseDrag(e,!0),t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0)},_mouseDrag:function(e,i){if(this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",e,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.options.axis&&"y"==this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"==this.options.axis||(this.helper[0].style.top=this.position.top+"px"),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1},_mouseStop:function(e){var i=!1;t.ui.ddmanager&&!this.options.dropBehaviour&&(i=t.ui.ddmanager.drop(this,e)),this.dropped&&(i=this.dropped,this.dropped=!1);for(var s=this.element[0],a=!1;s&&(s=s.parentNode);)s==document&&(a=!0);if(!a&&"original"===this.options.helper)return!1;if("invalid"==this.options.revert&&!i||"valid"==this.options.revert&&i||this.options.revert===!0||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,i)){var n=this;t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){n._trigger("stop",e)!==!1&&n._clear()})}else this._trigger("stop",e)!==!1&&this._clear();return!1},_mouseUp:function(e){return t("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),t.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(e){var i=this.options.handle&&t(this.options.handle,this.element).length?!1:!0;return t(this.options.handle,this.element).find("*").andSelf().each(function(){this==e.target&&(i=!0)}),i},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e])):"clone"==i.helper?this.element.clone().removeAttr("id"):this.element;return s.parents("body").length||s.appendTo("parent"==i.appendTo?this.element[0].parentNode:i.appendTo),s[0]==this.element[0]||/(fixed|absolute)/.test(s.css("position"))||s.css("position","absolute"),s},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var e=this.offsetParent.offset();return"absolute"==this.cssPosition&&this.scrollParent[0]!=document&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&"html"==this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"==this.cssPosition){var t=this.element.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e=this.options;if("parent"==e.containment&&(e.containment=this.helper[0].parentNode),("document"==e.containment||"window"==e.containment)&&(this.containment=["document"==e.containment?0:t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,"document"==e.containment?0:t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,("document"==e.containment?0:t(window).scrollLeft())+t("document"==e.containment?document:window).width()-this.helperProportions.width-this.margins.left,("document"==e.containment?0:t(window).scrollTop())+(t("document"==e.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(e.containment)||e.containment.constructor==Array)e.containment.constructor==Array&&(this.containment=e.containment);else{var i=t(e.containment),s=i[0];if(!s)return;i.offset();var a="hidden"!=t(s).css("overflow");this.containment=[(parseInt(t(s).css("borderLeftWidth"),10)||0)+(parseInt(t(s).css("paddingLeft"),10)||0),(parseInt(t(s).css("borderTopWidth"),10)||0)+(parseInt(t(s).css("paddingTop"),10)||0),(a?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(t(s).css("borderLeftWidth"),10)||0)-(parseInt(t(s).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(a?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(t(s).css("borderTopWidth"),10)||0)-(parseInt(t(s).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=i}},_convertPositionTo:function(e,i){i||(i=this.position);var s="absolute"==e?1:-1,a=(this.options,"absolute"!=this.cssPosition||this.scrollParent[0]!=document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent),n=/(html|body)/i.test(a[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"==this.cssPosition?-this.scrollParent.scrollTop():n?0:a.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"==this.cssPosition?-this.scrollParent.scrollLeft():n?0:a.scrollLeft())*s}},_generatePosition:function(e){var i=this.options,s="absolute"!=this.cssPosition||this.scrollParent[0]!=document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(s[0].tagName),n=e.pageX,r=e.pageY;if(this.originalPosition){var o;if(this.containment){if(this.relative_container){var l=this.relative_container.offset();o=[this.containment[0]+l.left,this.containment[1]+l.top,this.containment[2]+l.left,this.containment[3]+l.top]}else o=this.containment;e.pageX-this.offset.click.left<o[0]&&(n=o[0]+this.offset.click.left),e.pageY-this.offset.click.top<o[1]&&(r=o[1]+this.offset.click.top),e.pageX-this.offset.click.left>o[2]&&(n=o[2]+this.offset.click.left),e.pageY-this.offset.click.top>o[3]&&(r=o[3]+this.offset.click.top)}if(i.grid){var h=i.grid[1]?this.originalPageY+Math.round((r-this.originalPageY)/i.grid[1])*i.grid[1]:this.originalPageY;r=o?h-this.offset.click.top<o[1]||h-this.offset.click.top>o[3]?h-this.offset.click.top<o[1]?h+i.grid[1]:h-i.grid[1]:h:h;var c=i.grid[0]?this.originalPageX+Math.round((n-this.originalPageX)/i.grid[0])*i.grid[0]:this.originalPageX;n=o?c-this.offset.click.left<o[0]||c-this.offset.click.left>o[2]?c-this.offset.click.left<o[0]?c+i.grid[0]:c-i.grid[0]:c:c}}return{top:r-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"==this.cssPosition?-this.scrollParent.scrollTop():a?0:s.scrollTop()),left:n-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"==this.cssPosition?-this.scrollParent.scrollLeft():a?0:s.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]==this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(e,i,s){return s=s||this._uiHash(),t.ui.plugin.call(this,e,[i,s]),"drag"==e&&(this.positionAbs=this._convertPositionTo("absolute")),t.Widget.prototype._trigger.call(this,e,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),t.ui.plugin.add("draggable","connectToSortable",{start:function(e,i){var s=t(this).data("draggable"),a=s.options,n=t.extend({},i,{item:s.element});s.sortables=[],t(a.connectToSortable).each(function(){var i=t.data(this,"sortable");i&&!i.options.disabled&&(s.sortables.push({instance:i,shouldRevert:i.options.revert}),i.refreshPositions(),i._trigger("activate",e,n))})},stop:function(e,i){var s=t(this).data("draggable"),a=t.extend({},i,{item:s.element});t.each(s.sortables,function(){this.instance.isOver?(this.instance.isOver=0,s.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=!0),this.instance._mouseStop(e),this.instance.options.helper=this.instance.options._helper,"original"==s.options.helper&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",e,a))})},drag:function(e,i){var s=t(this).data("draggable"),a=this;t.each(s.sortables,function(){var n=!1,r=this;this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(n=!0,t.each(s.sortables,function(){return this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this!=r&&this.instance._intersectsWith(this.instance.containerCache)&&t.ui.contains(r.instance.element[0],this.instance.element[0])&&(n=!1),n})),n?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=t(a).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return i.helper[0]},e.target=this.instance.currentItem[0],this.instance._mouseCapture(e,!0),this.instance._mouseStart(e,!0,!0),this.instance.offset.click.top=s.offset.click.top,this.instance.offset.click.left=s.offset.click.left,this.instance.offset.parent.left-=s.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=s.offset.parent.top-this.instance.offset.parent.top,s._trigger("toSortable",e),s.dropped=this.instance.element,s.currentItem=s.element,this.instance.fromOutside=s),this.instance.currentItem&&this.instance._mouseDrag(e)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",e,this.instance._uiHash(this.instance)),this.instance._mouseStop(e,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),s._trigger("fromSortable",e),s.dropped=!1)})}}),t.ui.plugin.add("draggable","cursor",{start:function(){var e=t("body"),i=t(this).data("draggable").options;e.css("cursor")&&(i._cursor=e.css("cursor")),e.css("cursor",i.cursor)},stop:function(){var e=t(this).data("draggable").options;e._cursor&&t("body").css("cursor",e._cursor)}}),t.ui.plugin.add("draggable","opacity",{start:function(e,i){var s=t(i.helper),a=t(this).data("draggable").options;s.css("opacity")&&(a._opacity=s.css("opacity")),s.css("opacity",a.opacity)},stop:function(e,i){var s=t(this).data("draggable").options;s._opacity&&t(i.helper).css("opacity",s._opacity)}}),t.ui.plugin.add("draggable","scroll",{start:function(){var e=t(this).data("draggable");e.scrollParent[0]!=document&&"HTML"!=e.scrollParent[0].tagName&&(e.overflowOffset=e.scrollParent.offset())},drag:function(e){var i=t(this).data("draggable"),s=i.options,a=!1;i.scrollParent[0]!=document&&"HTML"!=i.scrollParent[0].tagName?(s.axis&&"x"==s.axis||(i.overflowOffset.top+i.scrollParent[0].offsetHeight-e.pageY<s.scrollSensitivity?i.scrollParent[0].scrollTop=a=i.scrollParent[0].scrollTop+s.scrollSpeed:e.pageY-i.overflowOffset.top<s.scrollSensitivity&&(i.scrollParent[0].scrollTop=a=i.scrollParent[0].scrollTop-s.scrollSpeed)),s.axis&&"y"==s.axis||(i.overflowOffset.left+i.scrollParent[0].offsetWidth-e.pageX<s.scrollSensitivity?i.scrollParent[0].scrollLeft=a=i.scrollParent[0].scrollLeft+s.scrollSpeed:e.pageX-i.overflowOffset.left<s.scrollSensitivity&&(i.scrollParent[0].scrollLeft=a=i.scrollParent[0].scrollLeft-s.scrollSpeed))):(s.axis&&"x"==s.axis||(e.pageY-t(document).scrollTop()<s.scrollSensitivity?a=t(document).scrollTop(t(document).scrollTop()-s.scrollSpeed):t(window).height()-(e.pageY-t(document).scrollTop())<s.scrollSensitivity&&(a=t(document).scrollTop(t(document).scrollTop()+s.scrollSpeed))),s.axis&&"y"==s.axis||(e.pageX-t(document).scrollLeft()<s.scrollSensitivity?a=t(document).scrollLeft(t(document).scrollLeft()-s.scrollSpeed):t(window).width()-(e.pageX-t(document).scrollLeft())<s.scrollSensitivity&&(a=t(document).scrollLeft(t(document).scrollLeft()+s.scrollSpeed)))),a!==!1&&t.ui.ddmanager&&!s.dropBehaviour&&t.ui.ddmanager.prepareOffsets(i,e)}}),t.ui.plugin.add("draggable","snap",{start:function(){var e=t(this).data("draggable"),i=e.options;e.snapElements=[],t(i.snap.constructor!=String?i.snap.items||":data(draggable)":i.snap).each(function(){var i=t(this),s=i.offset();this!=e.element[0]&&e.snapElements.push({item:this,width:i.outerWidth(),height:i.outerHeight(),top:s.top,left:s.left})})},drag:function(e,i){for(var s=t(this).data("draggable"),a=s.options,n=a.snapTolerance,r=i.offset.left,o=r+s.helperProportions.width,l=i.offset.top,h=l+s.helperProportions.height,c=s.snapElements.length-1;c>=0;c--){var d=s.snapElements[c].left,u=d+s.snapElements[c].width,p=s.snapElements[c].top,g=p+s.snapElements[c].height;if(r>d-n&&u+n>r&&l>p-n&&g+n>l||r>d-n&&u+n>r&&h>p-n&&g+n>h||o>d-n&&u+n>o&&l>p-n&&g+n>l||o>d-n&&u+n>o&&h>p-n&&g+n>h){if("inner"!=a.snapMode){var f=n>=Math.abs(p-h),m=n>=Math.abs(g-l),v=n>=Math.abs(d-o),_=n>=Math.abs(u-r);f&&(i.position.top=s._convertPositionTo("relative",{top:p-s.helperProportions.height,left:0}).top-s.margins.top),m&&(i.position.top=s._convertPositionTo("relative",{top:g,left:0}).top-s.margins.top),v&&(i.position.left=s._convertPositionTo("relative",{top:0,left:d-s.helperProportions.width}).left-s.margins.left),_&&(i.position.left=s._convertPositionTo("relative",{top:0,left:u}).left-s.margins.left)}var b=f||m||v||_;if("outer"!=a.snapMode){var f=n>=Math.abs(p-l),m=n>=Math.abs(g-h),v=n>=Math.abs(d-r),_=n>=Math.abs(u-o);f&&(i.position.top=s._convertPositionTo("relative",{top:p,left:0}).top-s.margins.top),m&&(i.position.top=s._convertPositionTo("relative",{top:g-s.helperProportions.height,left:0}).top-s.margins.top),v&&(i.position.left=s._convertPositionTo("relative",{top:0,left:d}).left-s.margins.left),_&&(i.position.left=s._convertPositionTo("relative",{top:0,left:u-s.helperProportions.width}).left-s.margins.left)}!s.snapElements[c].snapping&&(f||m||v||_||b)&&s.options.snap.snap&&s.options.snap.snap.call(s.element,e,t.extend(s._uiHash(),{snapItem:s.snapElements[c].item})),s.snapElements[c].snapping=f||m||v||_||b}else s.snapElements[c].snapping&&s.options.snap.release&&s.options.snap.release.call(s.element,e,t.extend(s._uiHash(),{snapItem:s.snapElements[c].item})),s.snapElements[c].snapping=!1}}}),t.ui.plugin.add("draggable","stack",{start:function(){var e=t(this).data("draggable").options,i=t.makeArray(t(e.stack)).sort(function(e,i){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(i).css("zIndex"),10)||0)});if(i.length){var s=parseInt(i[0].style.zIndex)||0;t(i).each(function(t){this.style.zIndex=s+t}),this[0].style.zIndex=s+i.length}}}),t.ui.plugin.add("draggable","zIndex",{start:function(e,i){var s=t(i.helper),a=t(this).data("draggable").options;s.css("zIndex")&&(a._zIndex=s.css("zIndex")),s.css("zIndex",a.zIndex)},stop:function(e,i){var s=t(this).data("draggable").options;s._zIndex&&t(i.helper).css("zIndex",s._zIndex)}})})(jQuery);(function(t){t.widget("ui.droppable",{version:"1.9.2",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect"},_create:function(){var e=this.options,i=e.accept;this.isover=0,this.isout=1,this.accept=t.isFunction(i)?i:function(t){return t.is(i)},this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight},t.ui.ddmanager.droppables[e.scope]=t.ui.ddmanager.droppables[e.scope]||[],t.ui.ddmanager.droppables[e.scope].push(this),e.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){for(var e=t.ui.ddmanager.droppables[this.options.scope],i=0;e.length>i;i++)e[i]==this&&e.splice(i,1);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(e,i){"accept"==e&&(this.accept=t.isFunction(i)?i:function(t){return t.is(i)}),t.Widget.prototype._setOption.apply(this,arguments)},_activate:function(e){var i=t.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),i&&this._trigger("activate",e,this.ui(i))},_deactivate:function(e){var i=t.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),i&&this._trigger("deactivate",e,this.ui(i))},_over:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!=this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",e,this.ui(i)))},_out:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!=this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",e,this.ui(i)))},_drop:function(e,i){var s=i||t.ui.ddmanager.current;if(!s||(s.currentItem||s.element)[0]==this.element[0])return!1;var n=!1;return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var e=t.data(this,"droppable");return e.options.greedy&&!e.options.disabled&&e.options.scope==s.options.scope&&e.accept.call(e.element[0],s.currentItem||s.element)&&t.ui.intersect(s,t.extend(e,{offset:e.element.offset()}),e.options.tolerance)?(n=!0,!1):undefined}),n?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",e,this.ui(s)),this.element):!1},ui:function(t){return{draggable:t.currentItem||t.element,helper:t.helper,position:t.position,offset:t.positionAbs}}}),t.ui.intersect=function(e,i,s){if(!i.offset)return!1;var n=(e.positionAbs||e.position.absolute).left,a=n+e.helperProportions.width,o=(e.positionAbs||e.position.absolute).top,r=o+e.helperProportions.height,l=i.offset.left,h=l+i.proportions.width,c=i.offset.top,d=c+i.proportions.height;switch(s){case"fit":return n>=l&&h>=a&&o>=c&&d>=r;case"intersect":return n+e.helperProportions.width/2>l&&h>a-e.helperProportions.width/2&&o+e.helperProportions.height/2>c&&d>r-e.helperProportions.height/2;case"pointer":var u=(e.positionAbs||e.position.absolute).left+(e.clickOffset||e.offset.click).left,p=(e.positionAbs||e.position.absolute).top+(e.clickOffset||e.offset.click).top,g=t.ui.isOver(p,u,c,l,i.proportions.height,i.proportions.width);return g;case"touch":return(o>=c&&d>=o||r>=c&&d>=r||c>o&&r>d)&&(n>=l&&h>=n||a>=l&&h>=a||l>n&&a>h);default:return!1}},t.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(e,i){var s=t.ui.ddmanager.droppables[e.options.scope]||[],n=i?i.type:null,a=(e.currentItem||e.element).find(":data(droppable)").andSelf();t:for(var o=0;s.length>o;o++)if(!(s[o].options.disabled||e&&!s[o].accept.call(s[o].element[0],e.currentItem||e.element))){for(var r=0;a.length>r;r++)if(a[r]==s[o].element[0]){s[o].proportions.height=0;continue t}s[o].visible="none"!=s[o].element.css("display"),s[o].visible&&("mousedown"==n&&s[o]._activate.call(s[o],i),s[o].offset=s[o].element.offset(),s[o].proportions={width:s[o].element[0].offsetWidth,height:s[o].element[0].offsetHeight})}},drop:function(e,i){var s=!1;return t.each(t.ui.ddmanager.droppables[e.options.scope]||[],function(){this.options&&(!this.options.disabled&&this.visible&&t.ui.intersect(e,this,this.options.tolerance)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this.isout=1,this.isover=0,this._deactivate.call(this,i)))}),s},dragStart:function(e,i){e.element.parentsUntil("body").bind("scroll.droppable",function(){e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)})},drag:function(e,i){e.options.refreshPositions&&t.ui.ddmanager.prepareOffsets(e,i),t.each(t.ui.ddmanager.droppables[e.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s=t.ui.intersect(e,this,this.options.tolerance),n=s||1!=this.isover?s&&0==this.isover?"isover":null:"isout";if(n){var a;if(this.options.greedy){var o=this.options.scope,r=this.element.parents(":data(droppable)").filter(function(){return t.data(this,"droppable").options.scope===o});r.length&&(a=t.data(r[0],"droppable"),a.greedyChild="isover"==n?1:0)}a&&"isover"==n&&(a.isover=0,a.isout=1,a._out.call(a,i)),this[n]=1,this["isout"==n?"isover":"isout"]=0,this["isover"==n?"_over":"_out"].call(this,i),a&&"isout"==n&&(a.isout=0,a.isover=1,a._over.call(a,i))}}})},dragStop:function(e,i){e.element.parentsUntil("body").unbind("scroll.droppable"),e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)}}})(jQuery);(function(t){t.widget("ui.resizable",t.ui.mouse,{version:"1.9.2",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1e3},_create:function(){var e=this,i=this.options;if(this.element.addClass("ui-resizable"),t.extend(this,{_aspectRatio:!!i.aspectRatio,aspectRatio:i.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:i.helper||i.ghost||i.animate?i.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(t('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("resizable",this.element.data("resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=i.handles||(t(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor==String){"all"==this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw");var s=this.handles.split(",");this.handles={};for(var n=0;s.length>n;n++){var a=t.trim(s[n]),o="ui-resizable-"+a,r=t('<div class="ui-resizable-handle '+o+'"></div>');r.css({zIndex:i.zIndex}),"se"==a&&r.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[a]=".ui-resizable-"+a,this.element.append(r)}}this._renderAxis=function(e){e=e||this.element;for(var i in this.handles){if(this.handles[i].constructor==String&&(this.handles[i]=t(this.handles[i],this.element).show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var s=t(this.handles[i],this.element),n=0;n=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth();var a=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join("");e.css(a,n),this._proportionallyResize()}t(this.handles[i]).length}},this._renderAxis(this.element),this._handles=t(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){if(!e.resizing){if(this.className)var t=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);e.axis=t&&t[1]?t[1]:"se"}}),i.autoHide&&(this._handles.hide(),t(this.element).addClass("ui-resizable-autohide").mouseenter(function(){i.disabled||(t(this).removeClass("ui-resizable-autohide"),e._handles.show())}).mouseleave(function(){i.disabled||e.resizing||(t(this).addClass("ui-resizable-autohide"),e._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var e=function(e){t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){e(this.element);var i=this.element;this.originalElement.css({position:i.css("position"),width:i.outerWidth(),height:i.outerHeight(),top:i.css("top"),left:i.css("left")}).insertAfter(i),i.remove()}return this.originalElement.css("resize",this.originalResizeStyle),e(this.originalElement),this},_mouseCapture:function(e){var i=!1;for(var s in this.handles)t(this.handles[s])[0]==e.target&&(i=!0);return!this.options.disabled&&i},_mouseStart:function(i){var s=this.options,n=this.element.position(),a=this.element;this.resizing=!0,this.documentScroll={top:t(document).scrollTop(),left:t(document).scrollLeft()},(a.is(".ui-draggable")||/absolute/.test(a.css("position")))&&a.css({position:"absolute",top:n.top,left:n.left}),this._renderProxy();var o=e(this.helper.css("left")),r=e(this.helper.css("top"));s.containment&&(o+=t(s.containment).scrollLeft()||0,r+=t(s.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:o,top:r},this.size=this._helper?{width:a.outerWidth(),height:a.outerHeight()}:{width:a.width(),height:a.height()},this.originalSize=this._helper?{width:a.outerWidth(),height:a.outerHeight()}:{width:a.width(),height:a.height()},this.originalPosition={left:o,top:r},this.sizeDiff={width:a.outerWidth()-a.width(),height:a.outerHeight()-a.height()},this.originalMousePosition={left:i.pageX,top:i.pageY},this.aspectRatio="number"==typeof s.aspectRatio?s.aspectRatio:this.originalSize.width/this.originalSize.height||1;var h=t(".ui-resizable-"+this.axis).css("cursor");return t("body").css("cursor","auto"==h?this.axis+"-resize":h),a.addClass("ui-resizable-resizing"),this._propagate("start",i),!0},_mouseDrag:function(t){var e=this.helper,i=(this.options,this.originalMousePosition),s=this.axis,n=t.pageX-i.left||0,a=t.pageY-i.top||0,o=this._change[s];if(!o)return!1;var r=o.apply(this,[t,n,a]);return this._updateVirtualBoundaries(t.shiftKey),(this._aspectRatio||t.shiftKey)&&(r=this._updateRatio(r,t)),r=this._respectSize(r,t),this._propagate("resize",t),e.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"}),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),this._updateCache(r),this._trigger("resize",t,this.ui()),!1},_mouseStop:function(e){this.resizing=!1;var i=this.options,s=this;if(this._helper){var n=this._proportionallyResizeElements,a=n.length&&/textarea/i.test(n[0].nodeName),o=a&&t.ui.hasScroll(n[0],"left")?0:s.sizeDiff.height,r=a?0:s.sizeDiff.width,h={width:s.helper.width()-r,height:s.helper.height()-o},l=parseInt(s.element.css("left"),10)+(s.position.left-s.originalPosition.left)||null,c=parseInt(s.element.css("top"),10)+(s.position.top-s.originalPosition.top)||null;i.animate||this.element.css(t.extend(h,{top:c,left:l})),s.helper.height(s.size.height),s.helper.width(s.size.width),this._helper&&!i.animate&&this._proportionallyResize()}return t("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",e),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(t){var e,s,n,a,o,r=this.options;o={minWidth:i(r.minWidth)?r.minWidth:0,maxWidth:i(r.maxWidth)?r.maxWidth:1/0,minHeight:i(r.minHeight)?r.minHeight:0,maxHeight:i(r.maxHeight)?r.maxHeight:1/0},(this._aspectRatio||t)&&(e=o.minHeight*this.aspectRatio,n=o.minWidth/this.aspectRatio,s=o.maxHeight*this.aspectRatio,a=o.maxWidth/this.aspectRatio,e>o.minWidth&&(o.minWidth=e),n>o.minHeight&&(o.minHeight=n),o.maxWidth>s&&(o.maxWidth=s),o.maxHeight>a&&(o.maxHeight=a)),this._vBoundaries=o},_updateCache:function(t){this.options,this.offset=this.helper.offset(),i(t.left)&&(this.position.left=t.left),i(t.top)&&(this.position.top=t.top),i(t.height)&&(this.size.height=t.height),i(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var e=(this.options,this.position),s=this.size,n=this.axis;return i(t.height)?t.width=t.height*this.aspectRatio:i(t.width)&&(t.height=t.width/this.aspectRatio),"sw"==n&&(t.left=e.left+(s.width-t.width),t.top=null),"nw"==n&&(t.top=e.top+(s.height-t.height),t.left=e.left+(s.width-t.width)),t},_respectSize:function(t,e){var s=(this.helper,this._vBoundaries),n=(this._aspectRatio||e.shiftKey,this.axis),a=i(t.width)&&s.maxWidth&&s.maxWidth<t.width,o=i(t.height)&&s.maxHeight&&s.maxHeight<t.height,r=i(t.width)&&s.minWidth&&s.minWidth>t.width,h=i(t.height)&&s.minHeight&&s.minHeight>t.height;r&&(t.width=s.minWidth),h&&(t.height=s.minHeight),a&&(t.width=s.maxWidth),o&&(t.height=s.maxHeight);var l=this.originalPosition.left+this.originalSize.width,c=this.position.top+this.size.height,u=/sw|nw|w/.test(n),d=/nw|ne|n/.test(n);r&&u&&(t.left=l-s.minWidth),a&&u&&(t.left=l-s.maxWidth),h&&d&&(t.top=c-s.minHeight),o&&d&&(t.top=c-s.maxHeight);var p=!t.width&&!t.height;return p&&!t.left&&t.top?t.top=null:p&&!t.top&&t.left&&(t.left=null),t},_proportionallyResize:function(){if(this.options,this._proportionallyResizeElements.length)for(var e=this.helper||this.element,i=0;this._proportionallyResizeElements.length>i;i++){var s=this._proportionallyResizeElements[i];if(!this.borderDif){var n=[s.css("borderTopWidth"),s.css("borderRightWidth"),s.css("borderBottomWidth"),s.css("borderLeftWidth")],a=[s.css("paddingTop"),s.css("paddingRight"),s.css("paddingBottom"),s.css("paddingLeft")];this.borderDif=t.map(n,function(t,e){var i=parseInt(t,10)||0,s=parseInt(a[e],10)||0;return i+s})}s.css({height:e.height()-this.borderDif[0]-this.borderDif[2]||0,width:e.width()-this.borderDif[1]-this.borderDif[3]||0})}},_renderProxy:function(){var e=this.element,i=this.options;if(this.elementOffset=e.offset(),this._helper){this.helper=this.helper||t('<div style="overflow:hidden;"></div>');var s=t.ui.ie6?1:0,n=t.ui.ie6?2:-1;this.helper.addClass(this._helper).css({width:this.element.outerWidth()+n,height:this.element.outerHeight()+n,position:"absolute",left:this.elementOffset.left-s+"px",top:this.elementOffset.top-s+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()}else this.helper=this.element},_change:{e:function(t,e){return{width:this.originalSize.width+e}},w:function(t,e){var i=(this.options,this.originalSize),s=this.originalPosition;return{left:s.left+e,width:i.width-e}},n:function(t,e,i){var s=(this.options,this.originalSize),n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(t,e,i){return{height:this.originalSize.height+i}},se:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},sw:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[e,i,s]))},ne:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},nw:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[e,i,s]))}},_propagate:function(e,i){t.ui.plugin.call(this,e,[i,this.ui()]),"resize"!=e&&this._trigger(e,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),t.ui.plugin.add("resizable","alsoResize",{start:function(){var e=t(this).data("resizable"),i=e.options,s=function(e){t(e).each(function(){var e=t(this);e.data("resizable-alsoresize",{width:parseInt(e.width(),10),height:parseInt(e.height(),10),left:parseInt(e.css("left"),10),top:parseInt(e.css("top"),10)})})};"object"!=typeof i.alsoResize||i.alsoResize.parentNode?s(i.alsoResize):i.alsoResize.length?(i.alsoResize=i.alsoResize[0],s(i.alsoResize)):t.each(i.alsoResize,function(t){s(t)})},resize:function(e,i){var s=t(this).data("resizable"),n=s.options,a=s.originalSize,o=s.originalPosition,r={height:s.size.height-a.height||0,width:s.size.width-a.width||0,top:s.position.top-o.top||0,left:s.position.left-o.left||0},h=function(e,s){t(e).each(function(){var e=t(this),n=t(this).data("resizable-alsoresize"),a={},o=s&&s.length?s:e.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];t.each(o,function(t,e){var i=(n[e]||0)+(r[e]||0);i&&i>=0&&(a[e]=i||null)}),e.css(a)})};"object"!=typeof n.alsoResize||n.alsoResize.nodeType?h(n.alsoResize):t.each(n.alsoResize,function(t,e){h(t,e)})},stop:function(){t(this).removeData("resizable-alsoresize")}}),t.ui.plugin.add("resizable","animate",{stop:function(e){var i=t(this).data("resizable"),s=i.options,n=i._proportionallyResizeElements,a=n.length&&/textarea/i.test(n[0].nodeName),o=a&&t.ui.hasScroll(n[0],"left")?0:i.sizeDiff.height,r=a?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-o},l=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,c=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(t.extend(h,c&&l?{top:c,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};n&&n.length&&t(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",e)}})}}),t.ui.plugin.add("resizable","containment",{start:function(){var i=t(this).data("resizable"),s=i.options,n=i.element,a=s.containment,o=a instanceof t?a.get(0):/parent/.test(a)?n.parent().get(0):a;if(o)if(i.containerElement=t(o),/document/.test(a)||a==document)i.containerOffset={left:0,top:0},i.containerPosition={left:0,top:0},i.parentData={element:t(document),left:0,top:0,width:t(document).width(),height:t(document).height()||document.body.parentNode.scrollHeight};else{var r=t(o),h=[];t(["Top","Right","Left","Bottom"]).each(function(t,i){h[t]=e(r.css("padding"+i))}),i.containerOffset=r.offset(),i.containerPosition=r.position(),i.containerSize={height:r.innerHeight()-h[3],width:r.innerWidth()-h[1]};var l=i.containerOffset,c=i.containerSize.height,u=i.containerSize.width,d=t.ui.hasScroll(o,"left")?o.scrollWidth:u,p=t.ui.hasScroll(o)?o.scrollHeight:c;i.parentData={element:o,left:l.left,top:l.top,width:d,height:p}}},resize:function(e){var i=t(this).data("resizable"),s=i.options,n=(i.containerSize,i.containerOffset),a=(i.size,i.position),o=i._aspectRatio||e.shiftKey,r={top:0,left:0},h=i.containerElement;h[0]!=document&&/static/.test(h.css("position"))&&(r=n),a.left<(i._helper?n.left:0)&&(i.size.width=i.size.width+(i._helper?i.position.left-n.left:i.position.left-r.left),o&&(i.size.height=i.size.width/i.aspectRatio),i.position.left=s.helper?n.left:0),a.top<(i._helper?n.top:0)&&(i.size.height=i.size.height+(i._helper?i.position.top-n.top:i.position.top),o&&(i.size.width=i.size.height*i.aspectRatio),i.position.top=i._helper?n.top:0),i.offset.left=i.parentData.left+i.position.left,i.offset.top=i.parentData.top+i.position.top;var l=Math.abs((i._helper?i.offset.left-r.left:i.offset.left-r.left)+i.sizeDiff.width),c=Math.abs((i._helper?i.offset.top-r.top:i.offset.top-n.top)+i.sizeDiff.height),u=i.containerElement.get(0)==i.element.parent().get(0),d=/relative|absolute/.test(i.containerElement.css("position"));u&&d&&(l-=i.parentData.left),l+i.size.width>=i.parentData.width&&(i.size.width=i.parentData.width-l,o&&(i.size.height=i.size.width/i.aspectRatio)),c+i.size.height>=i.parentData.height&&(i.size.height=i.parentData.height-c,o&&(i.size.width=i.size.height*i.aspectRatio))},stop:function(){var e=t(this).data("resizable"),i=e.options,s=(e.position,e.containerOffset),n=e.containerPosition,a=e.containerElement,o=t(e.helper),r=o.offset(),h=o.outerWidth()-e.sizeDiff.width,l=o.outerHeight()-e.sizeDiff.height;e._helper&&!i.animate&&/relative/.test(a.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:h,height:l}),e._helper&&!i.animate&&/static/.test(a.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:h,height:l})}}),t.ui.plugin.add("resizable","ghost",{start:function(){var e=t(this).data("resizable"),i=e.options,s=e.size;e.ghost=e.originalElement.clone(),e.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),e.ghost.appendTo(e.helper)},resize:function(){var e=t(this).data("resizable");e.options,e.ghost&&e.ghost.css({position:"relative",height:e.size.height,width:e.size.width})},stop:function(){var e=t(this).data("resizable");e.options,e.ghost&&e.helper&&e.helper.get(0).removeChild(e.ghost.get(0))}}),t.ui.plugin.add("resizable","grid",{resize:function(e){var i=t(this).data("resizable"),s=i.options,n=i.size,a=i.originalSize,o=i.originalPosition,r=i.axis;s._aspectRatio||e.shiftKey,s.grid="number"==typeof s.grid?[s.grid,s.grid]:s.grid;var h=Math.round((n.width-a.width)/(s.grid[0]||1))*(s.grid[0]||1),l=Math.round((n.height-a.height)/(s.grid[1]||1))*(s.grid[1]||1);/^(se|s|e)$/.test(r)?(i.size.width=a.width+h,i.size.height=a.height+l):/^(ne)$/.test(r)?(i.size.width=a.width+h,i.size.height=a.height+l,i.position.top=o.top-l):/^(sw)$/.test(r)?(i.size.width=a.width+h,i.size.height=a.height+l,i.position.left=o.left-h):(i.size.width=a.width+h,i.size.height=a.height+l,i.position.top=o.top-l,i.position.left=o.left-h)}});var e=function(t){return parseInt(t,10)||0},i=function(t){return!isNaN(parseInt(t,10))}})(jQuery);(function(e){e.widget("ui.selectable",e.ui.mouse,{version:"1.9.2",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch"},_create:function(){var t=this;this.element.addClass("ui-selectable"),this.dragged=!1;var i;this.refresh=function(){i=e(t.options.filter,t.element[0]),i.addClass("ui-selectee"),i.each(function(){var t=e(this),i=t.offset();e.data(this,"selectable-item",{element:this,$element:t,left:i.left,top:i.top,right:i.left+t.outerWidth(),bottom:i.top+t.outerHeight(),startselected:!1,selected:t.hasClass("ui-selected"),selecting:t.hasClass("ui-selecting"),unselecting:t.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=i.addClass("ui-selectee"),this._mouseInit(),this.helper=e("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(t){var i=this;if(this.opos=[t.pageX,t.pageY],!this.options.disabled){var s=this.options;this.selectees=e(s.filter,this.element[0]),this._trigger("start",t),e(s.appendTo).append(this.helper),this.helper.css({left:t.clientX,top:t.clientY,width:0,height:0}),s.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var s=e.data(this,"selectable-item");s.startselected=!0,t.metaKey||t.ctrlKey||(s.$element.removeClass("ui-selected"),s.selected=!1,s.$element.addClass("ui-unselecting"),s.unselecting=!0,i._trigger("unselecting",t,{unselecting:s.element}))}),e(t.target).parents().andSelf().each(function(){var s=e.data(this,"selectable-item");if(s){var n=!t.metaKey&&!t.ctrlKey||!s.$element.hasClass("ui-selected");return s.$element.removeClass(n?"ui-unselecting":"ui-selected").addClass(n?"ui-selecting":"ui-unselecting"),s.unselecting=!n,s.selecting=n,s.selected=n,n?i._trigger("selecting",t,{selecting:s.element}):i._trigger("unselecting",t,{unselecting:s.element}),!1}})}},_mouseDrag:function(t){var i=this;if(this.dragged=!0,!this.options.disabled){var s=this.options,n=this.opos[0],a=this.opos[1],o=t.pageX,r=t.pageY;if(n>o){var l=o;o=n,n=l}if(a>r){var l=r;r=a,a=l}return this.helper.css({left:n,top:a,width:o-n,height:r-a}),this.selectees.each(function(){var l=e.data(this,"selectable-item");if(l&&l.element!=i.element[0]){var h=!1;"touch"==s.tolerance?h=!(l.left>o||n>l.right||l.top>r||a>l.bottom):"fit"==s.tolerance&&(h=l.left>n&&o>l.right&&l.top>a&&r>l.bottom),h?(l.selected&&(l.$element.removeClass("ui-selected"),l.selected=!1),l.unselecting&&(l.$element.removeClass("ui-unselecting"),l.unselecting=!1),l.selecting||(l.$element.addClass("ui-selecting"),l.selecting=!0,i._trigger("selecting",t,{selecting:l.element}))):(l.selecting&&((t.metaKey||t.ctrlKey)&&l.startselected?(l.$element.removeClass("ui-selecting"),l.selecting=!1,l.$element.addClass("ui-selected"),l.selected=!0):(l.$element.removeClass("ui-selecting"),l.selecting=!1,l.startselected&&(l.$element.addClass("ui-unselecting"),l.unselecting=!0),i._trigger("unselecting",t,{unselecting:l.element}))),l.selected&&(t.metaKey||t.ctrlKey||l.startselected||(l.$element.removeClass("ui-selected"),l.selected=!1,l.$element.addClass("ui-unselecting"),l.unselecting=!0,i._trigger("unselecting",t,{unselecting:l.element}))))}}),!1}},_mouseStop:function(t){var i=this;return this.dragged=!1,this.options,e(".ui-unselecting",this.element[0]).each(function(){var s=e.data(this,"selectable-item");s.$element.removeClass("ui-unselecting"),s.unselecting=!1,s.startselected=!1,i._trigger("unselected",t,{unselected:s.element})}),e(".ui-selecting",this.element[0]).each(function(){var s=e.data(this,"selectable-item");s.$element.removeClass("ui-selecting").addClass("ui-selected"),s.selecting=!1,s.selected=!0,s.startselected=!0,i._trigger("selected",t,{selected:s.element})}),this._trigger("stop",t),this.helper.remove(),!1}})})(jQuery);(function(t){t.widget("ui.sortable",t.ui.mouse,{version:"1.9.2",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3},_create:function(){var t=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?"x"===t.axis||/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var t=this.items.length-1;t>=0;t--)this.items[t].item.removeData(this.widgetName+"-item");return this},_setOption:function(e,i){"disabled"===e?(this.options[e]=i,this.widget().toggleClass("ui-sortable-disabled",!!i)):t.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(e,i){var s=this;if(this.reverting)return!1;if(this.options.disabled||"static"==this.options.type)return!1;this._refreshItems(e);var n=null;if(t(e.target).parents().each(function(){return t.data(this,s.widgetName+"-item")==s?(n=t(this),!1):undefined}),t.data(e.target,s.widgetName+"-item")==s&&(n=t(e.target)),!n)return!1;if(this.options.handle&&!i){var a=!1;if(t(this.options.handle,n).find("*").andSelf().each(function(){this==e.target&&(a=!0)}),!a)return!1}return this.currentItem=n,this._removeCurrentsFromItems(),!0},_mouseStart:function(e,i,s){var n=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(e),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,n.cursorAt&&this._adjustOffsetFromHelper(n.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!=this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),n.containment&&this._setContainment(),n.cursor&&(t("body").css("cursor")&&(this._storedCursor=t("body").css("cursor")),t("body").css("cursor",n.cursor)),n.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",n.opacity)),n.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",n.zIndex)),this.scrollParent[0]!=document&&"HTML"!=this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",e,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(var a=this.containers.length-1;a>=0;a--)this.containers[a]._trigger("activate",e,this._uiHash(this));return t.ui.ddmanager&&(t.ui.ddmanager.current=this),t.ui.ddmanager&&!n.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(e),!0},_mouseDrag:function(e){if(this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll){var i=this.options,s=!1;this.scrollParent[0]!=document&&"HTML"!=this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<i.scrollSensitivity?this.scrollParent[0].scrollTop=s=this.scrollParent[0].scrollTop+i.scrollSpeed:e.pageY-this.overflowOffset.top<i.scrollSensitivity&&(this.scrollParent[0].scrollTop=s=this.scrollParent[0].scrollTop-i.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<i.scrollSensitivity?this.scrollParent[0].scrollLeft=s=this.scrollParent[0].scrollLeft+i.scrollSpeed:e.pageX-this.overflowOffset.left<i.scrollSensitivity&&(this.scrollParent[0].scrollLeft=s=this.scrollParent[0].scrollLeft-i.scrollSpeed)):(e.pageY-t(document).scrollTop()<i.scrollSensitivity?s=t(document).scrollTop(t(document).scrollTop()-i.scrollSpeed):t(window).height()-(e.pageY-t(document).scrollTop())<i.scrollSensitivity&&(s=t(document).scrollTop(t(document).scrollTop()+i.scrollSpeed)),e.pageX-t(document).scrollLeft()<i.scrollSensitivity?s=t(document).scrollLeft(t(document).scrollLeft()-i.scrollSpeed):t(window).width()-(e.pageX-t(document).scrollLeft())<i.scrollSensitivity&&(s=t(document).scrollLeft(t(document).scrollLeft()+i.scrollSpeed))),s!==!1&&t.ui.ddmanager&&!i.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e)}this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"==this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"==this.options.axis||(this.helper[0].style.top=this.position.top+"px");for(var n=this.items.length-1;n>=0;n--){var a=this.items[n],o=a.item[0],r=this._intersectsWithPointer(a);if(r&&a.instance===this.currentContainer&&o!=this.currentItem[0]&&this.placeholder[1==r?"next":"prev"]()[0]!=o&&!t.contains(this.placeholder[0],o)&&("semi-dynamic"==this.options.type?!t.contains(this.element[0],o):!0)){if(this.direction=1==r?"down":"up","pointer"!=this.options.tolerance&&!this._intersectsWithSides(a))break;this._rearrange(e,a),this._trigger("change",e,this._uiHash());break}}return this._contactContainers(e),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),this._trigger("sort",e,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(e,i){if(e){if(t.ui.ddmanager&&!this.options.dropBehaviour&&t.ui.ddmanager.drop(this,e),this.options.revert){var s=this,n=this.placeholder.offset();this.reverting=!0,t(this.helper).animate({left:n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){s._clear(e)})}else this._clear(e,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"==this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("deactivate",null,this._uiHash(this)),this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",null,this._uiHash(this)),this.containers[e].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!=this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),t.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?t(this.domPosition.prev).after(this.currentItem):t(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},t(i).each(function(){var i=(t(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[-=_](.+)/);i&&s.push((e.key||i[1]+"[]")+"="+(e.key&&e.expression?i[1]:i[2]))}),!s.length&&e.key&&s.push(e.key+"="),s.join("&")},toArray:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},i.each(function(){s.push(t(e.item||this).attr(e.attribute||"id")||"")}),s},_intersectsWith:function(t){var e=this.positionAbs.left,i=e+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,a=t.left,o=a+t.width,r=t.top,h=r+t.height,l=this.offset.click.top,c=this.offset.click.left,u=s+l>r&&h>s+l&&e+c>a&&o>e+c;return"pointer"==this.options.tolerance||this.options.forcePointerForContainers||"pointer"!=this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]?u:e+this.helperProportions.width/2>a&&o>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&h>n-this.helperProportions.height/2},_intersectsWithPointer:function(e){var i="x"===this.options.axis||t.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,e.top,e.height),s="y"===this.options.axis||t.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,e.left,e.width),n=i&&s,a=this._getDragVerticalDirection(),o=this._getDragHorizontalDirection();return n?this.floating?o&&"right"==o||"down"==a?2:1:a&&("down"==a?2:1):!1},_intersectsWithSides:function(e){var i=t.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,e.top+e.height/2,e.height),s=t.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,e.left+e.width/2,e.width),n=this._getDragVerticalDirection(),a=this._getDragHorizontalDirection();return this.floating&&a?"right"==a&&s||"left"==a&&!s:n&&("down"==n&&i||"up"==n&&!i)},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top;return 0!=t&&(t>0?"down":"up")},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left;return 0!=t&&(t>0?"right":"left")},refresh:function(t){return this._refreshItems(t),this.refreshPositions(),this},_connectWith:function(){var t=this.options;return t.connectWith.constructor==String?[t.connectWith]:t.connectWith},_getItemsAsjQuery:function(e){var i=[],s=[],n=this._connectWith();if(n&&e)for(var a=n.length-1;a>=0;a--)for(var o=t(n[a]),r=o.length-1;r>=0;r--){var h=t.data(o[r],this.widgetName);h&&h!=this&&!h.options.disabled&&s.push([t.isFunction(h.options.items)?h.options.items.call(h.element):t(h.options.items,h.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),h])}s.push([t.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):t(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);for(var a=s.length-1;a>=0;a--)s[a][0].each(function(){i.push(this)});return t(i)},_removeCurrentsFromItems:function(){var e=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=t.grep(this.items,function(t){for(var i=0;e.length>i;i++)if(e[i]==t.item[0])return!1;return!0})},_refreshItems:function(e){this.items=[],this.containers=[this];var i=this.items,s=[[t.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):t(this.options.items,this.element),this]],n=this._connectWith();if(n&&this.ready)for(var a=n.length-1;a>=0;a--)for(var o=t(n[a]),r=o.length-1;r>=0;r--){var h=t.data(o[r],this.widgetName);h&&h!=this&&!h.options.disabled&&(s.push([t.isFunction(h.options.items)?h.options.items.call(h.element[0],e,{item:this.currentItem}):t(h.options.items,h.element),h]),this.containers.push(h))}for(var a=s.length-1;a>=0;a--)for(var l=s[a][1],c=s[a][0],r=0,u=c.length;u>r;r++){var d=t(c[r]);d.data(this.widgetName+"-item",l),i.push({item:d,instance:l,width:0,height:0,left:0,top:0})}},refreshPositions:function(e){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());for(var i=this.items.length-1;i>=0;i--){var s=this.items[i];if(s.instance==this.currentContainer||!this.currentContainer||s.item[0]==this.currentItem[0]){var n=this.options.toleranceElement?t(this.options.toleranceElement,s.item):s.item;e||(s.width=n.outerWidth(),s.height=n.outerHeight());var a=n.offset();s.left=a.left,s.top=a.top}}if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(var i=this.containers.length-1;i>=0;i--){var a=this.containers[i].element.offset();this.containers[i].containerCache.left=a.left,this.containers[i].containerCache.top=a.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight()}return this},_createPlaceholder:function(e){e=e||this;var i=e.options;if(!i.placeholder||i.placeholder.constructor==String){var s=i.placeholder;i.placeholder={element:function(){var i=t(document.createElement(e.currentItem[0].nodeName)).addClass(s||e.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];return s||(i.style.visibility="hidden"),i},update:function(t,n){(!s||i.forcePlaceholderSize)&&(n.height()||n.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10)))}}}e.placeholder=t(i.placeholder.element.call(e.element,e.currentItem)),e.currentItem.after(e.placeholder),i.placeholder.update(e,e.placeholder)},_contactContainers:function(e){for(var i=null,s=null,n=this.containers.length-1;n>=0;n--)if(!t.contains(this.currentItem[0],this.containers[n].element[0]))if(this._intersectsWith(this.containers[n].containerCache)){if(i&&t.contains(this.containers[n].element[0],i.element[0]))continue;i=this.containers[n],s=n}else this.containers[n].containerCache.over&&(this.containers[n]._trigger("out",e,this._uiHash(this)),this.containers[n].containerCache.over=0);if(i)if(1===this.containers.length)this.containers[s]._trigger("over",e,this._uiHash(this)),this.containers[s].containerCache.over=1;else{for(var a=1e4,o=null,r=this.containers[s].floating?"left":"top",h=this.containers[s].floating?"width":"height",l=this.positionAbs[r]+this.offset.click[r],c=this.items.length-1;c>=0;c--)if(t.contains(this.containers[s].element[0],this.items[c].item[0])&&this.items[c].item[0]!=this.currentItem[0]){var u=this.items[c].item.offset()[r],d=!1;Math.abs(u-l)>Math.abs(u+this.items[c][h]-l)&&(d=!0,u+=this.items[c][h]),a>Math.abs(u-l)&&(a=Math.abs(u-l),o=this.items[c],this.direction=d?"up":"down")}if(!o&&!this.options.dropOnEmpty)return;this.currentContainer=this.containers[s],o?this._rearrange(e,o,null,!0):this._rearrange(e,null,this.containers[s].element,!0),this._trigger("change",e,this._uiHash()),this.containers[s]._trigger("change",e,this._uiHash(this)),this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[s]._trigger("over",e,this._uiHash(this)),this.containers[s].containerCache.over=1}},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e,this.currentItem])):"clone"==i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||t("parent"!=i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]==this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(""==s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(""==s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var e=this.offsetParent.offset();return"absolute"==this.cssPosition&&this.scrollParent[0]!=document&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&"html"==this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"==this.cssPosition){var t=this.currentItem.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e=this.options;if("parent"==e.containment&&(e.containment=this.helper[0].parentNode),("document"==e.containment||"window"==e.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,t("document"==e.containment?document:window).width()-this.helperProportions.width-this.margins.left,(t("document"==e.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),!/^(document|window|parent)$/.test(e.containment)){var i=t(e.containment)[0],s=t(e.containment).offset(),n="hidden"!=t(i).css("overflow");this.containment=[s.left+(parseInt(t(i).css("borderLeftWidth"),10)||0)+(parseInt(t(i).css("paddingLeft"),10)||0)-this.margins.left,s.top+(parseInt(t(i).css("borderTopWidth"),10)||0)+(parseInt(t(i).css("paddingTop"),10)||0)-this.margins.top,s.left+(n?Math.max(i.scrollWidth,i.offsetWidth):i.offsetWidth)-(parseInt(t(i).css("borderLeftWidth"),10)||0)-(parseInt(t(i).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,s.top+(n?Math.max(i.scrollHeight,i.offsetHeight):i.offsetHeight)-(parseInt(t(i).css("borderTopWidth"),10)||0)-(parseInt(t(i).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(e,i){i||(i=this.position);var s="absolute"==e?1:-1,n=(this.options,"absolute"!=this.cssPosition||this.scrollParent[0]!=document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent),a=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"==this.cssPosition?-this.scrollParent.scrollTop():a?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"==this.cssPosition?-this.scrollParent.scrollLeft():a?0:n.scrollLeft())*s}},_generatePosition:function(e){var i=this.options,s="absolute"!=this.cssPosition||this.scrollParent[0]!=document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,n=/(html|body)/i.test(s[0].tagName);"relative"!=this.cssPosition||this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset());var a=e.pageX,o=e.pageY;if(this.originalPosition&&(this.containment&&(e.pageX-this.offset.click.left<this.containment[0]&&(a=this.containment[0]+this.offset.click.left),e.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment[1]+this.offset.click.top),e.pageX-this.offset.click.left>this.containment[2]&&(a=this.containment[2]+this.offset.click.left),e.pageY-this.offset.click.top>this.containment[3]&&(o=this.containment[3]+this.offset.click.top)),i.grid)){var r=this.originalPageY+Math.round((o-this.originalPageY)/i.grid[1])*i.grid[1];o=this.containment?r-this.offset.click.top<this.containment[1]||r-this.offset.click.top>this.containment[3]?r-this.offset.click.top<this.containment[1]?r+i.grid[1]:r-i.grid[1]:r:r;var h=this.originalPageX+Math.round((a-this.originalPageX)/i.grid[0])*i.grid[0];a=this.containment?h-this.offset.click.left<this.containment[0]||h-this.offset.click.left>this.containment[2]?h-this.offset.click.left<this.containment[0]?h+i.grid[0]:h-i.grid[0]:h:h}return{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"==this.cssPosition?-this.scrollParent.scrollTop():n?0:s.scrollTop()),left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"==this.cssPosition?-this.scrollParent.scrollLeft():n?0:s.scrollLeft())}},_rearrange:function(t,e,i,s){i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],"down"==this.direction?e.item[0]:e.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;this._delay(function(){n==this.counter&&this.refreshPositions(!s)})},_clear:function(e,i){this.reverting=!1;var s=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]==this.currentItem[0]){for(var n in this._storedCSS)("auto"==this._storedCSS[n]||"static"==this._storedCSS[n])&&(this._storedCSS[n]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();this.fromOutside&&!i&&s.push(function(t){this._trigger("receive",t,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev==this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent==this.currentItem.parent()[0]||i||s.push(function(t){this._trigger("update",t,this._uiHash())}),this!==this.currentContainer&&(i||(s.push(function(t){this._trigger("remove",t,this._uiHash())}),s.push(function(t){return function(e){t._trigger("receive",e,this._uiHash(this))}}.call(this,this.currentContainer)),s.push(function(t){return function(e){t._trigger("update",e,this._uiHash(this))}}.call(this,this.currentContainer))));for(var n=this.containers.length-1;n>=0;n--)i||s.push(function(t){return function(e){t._trigger("deactivate",e,this._uiHash(this))}}.call(this,this.containers[n])),this.containers[n].containerCache.over&&(s.push(function(t){return function(e){t._trigger("out",e,this._uiHash(this))}}.call(this,this.containers[n])),this.containers[n].containerCache.over=0);if(this._storedCursor&&t("body").css("cursor",this._storedCursor),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"==this._storedZIndex?"":this._storedZIndex),this.dragging=!1,this.cancelHelperRemoval){if(!i){this._trigger("beforeStop",e,this._uiHash());for(var n=0;s.length>n;n++)s[n].call(this,e);this._trigger("stop",e,this._uiHash())}return this.fromOutside=!1,!1}if(i||this._trigger("beforeStop",e,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!=this.currentItem[0]&&this.helper.remove(),this.helper=null,!i){for(var n=0;s.length>n;n++)s[n].call(this,e);this._trigger("stop",e,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){t.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(e){var i=e||this;return{helper:i.helper,placeholder:i.placeholder||t([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:e?e.element:null}}})})(jQuery);(function(e){var t,i,n,s,a="ui-button ui-widget ui-state-default ui-corner-all",o="ui-state-hover ui-state-active ",r="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",u=function(){var t=e(this).find(":ui-button");setTimeout(function(){t.button("refresh")},1)},h=function(t){var i=t.name,n=t.form,s=e([]);return i&&(s=n?e(n).find("[name='"+i+"']"):e("[name='"+i+"']",t.ownerDocument).filter(function(){return!this.form})),s};e.widget("ui.button",{version:"1.9.2",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,u),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var o=this,r=this.options,l="checkbox"===this.type||"radio"===this.type,c=l?"":"ui-state-active",d="ui-state-focus";null===r.label&&(r.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(a).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){r.disabled||this===t&&e(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){r.disabled||e(this).removeClass(c)}).bind("click"+this.eventNamespace,function(e){r.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}),this.element.bind("focus"+this.eventNamespace,function(){o.buttonElement.addClass(d)}).bind("blur"+this.eventNamespace,function(){o.buttonElement.removeClass(d)}),l&&(this.element.bind("change"+this.eventNamespace,function(){s||o.refresh()}),this.buttonElement.bind("mousedown"+this.eventNamespace,function(e){r.disabled||(s=!1,i=e.pageX,n=e.pageY)}).bind("mouseup"+this.eventNamespace,function(e){r.disabled||(i!==e.pageX||n!==e.pageY)&&(s=!0)})),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){return r.disabled||s?!1:(e(this).toggleClass("ui-state-active"),o.buttonElement.attr("aria-pressed",o.element[0].checked),undefined)}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(r.disabled||s)return!1;e(this).addClass("ui-state-active"),o.buttonElement.attr("aria-pressed","true");var t=o.element[0];h(t).not(t).map(function(){return e(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return r.disabled?!1:(e(this).addClass("ui-state-active"),t=this,o.document.one("mouseup",function(){t=null}),undefined)}).bind("mouseup"+this.eventNamespace,function(){return r.disabled?!1:(e(this).removeClass("ui-state-active"),undefined)}).bind("keydown"+this.eventNamespace,function(t){return r.disabled?!1:((t.keyCode===e.ui.keyCode.SPACE||t.keyCode===e.ui.keyCode.ENTER)&&e(this).addClass("ui-state-active"),undefined)}).bind("keyup"+this.eventNamespace,function(){e(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(t){t.keyCode===e.ui.keyCode.SPACE&&e(this).click()})),this._setOption("disabled",r.disabled),this._resetButton()},_determineButtonType:function(){var e,t,i;this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button","checkbox"===this.type||"radio"===this.type?(e=this.element.parents().last(),t="label[for='"+this.element.attr("id")+"']",this.buttonElement=e.find(t),this.buttonElement.length||(e=e.length?e.siblings():this.element.siblings(),this.buttonElement=e.filter(t),this.buttonElement.length||(this.buttonElement=e.find(t))),this.element.addClass("ui-helper-hidden-accessible"),i=this.element.is(":checked"),i&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",i)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(a+" "+o+" "+r).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(e,t){return this._super(e,t),"disabled"===e?(t?this.element.prop("disabled",!0):this.element.prop("disabled",!1),undefined):(this._resetButton(),undefined)},refresh:function(){var t=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOption("disabled",t),"radio"===this.type?h(this.element[0]).each(function(){e(this).is(":checked")?e(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"===this.type)return this.options.label&&this.element.val(this.options.label),undefined;var t=this.buttonElement.removeClass(r),i=e("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),n=this.options.icons,s=n.primary&&n.secondary,a=[];n.primary||n.secondary?(this.options.text&&a.push("ui-button-text-icon"+(s?"s":n.primary?"-primary":"-secondary")),n.primary&&t.prepend("<span class='ui-button-icon-primary ui-icon "+n.primary+"'></span>"),n.secondary&&t.append("<span class='ui-button-icon-secondary ui-icon "+n.secondary+"'></span>"),this.options.text||(a.push(s?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||t.attr("title",e.trim(i)))):a.push("ui-button-text-only"),t.addClass(a.join(" "))}}),e.widget("ui.buttonset",{version:"1.9.2",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(e,t){"disabled"===e&&this.buttons.button("option",e,t),this._super(e,t)},refresh:function(){var t="rtl"===this.element.css("direction");this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(t?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})})(jQuery);(function(e,t){var i="ui-dialog ui-widget ui-widget-content ui-corner-all ",a={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},n={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0};e.widget("ui.dialog",{version:"1.9.2",options:{autoOpen:!0,buttons:{},closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:!1,maxWidth:!1,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(t){var i=e(this).css(t).offset().top;0>i&&e(this).css("top",t.top-i)}},resizable:!0,show:null,stack:!0,title:"",width:300,zIndex:1e3},_create:function(){this.originalTitle=this.element.attr("title"),"string"!=typeof this.originalTitle&&(this.originalTitle=""),this.oldPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.options.title=this.options.title||this.originalTitle;var a,n,s,r,o,l=this,u=this.options,d=u.title||"&#160;";a=(this.uiDialog=e("<div>")).addClass(i+u.dialogClass).css({display:"none",outline:0,zIndex:u.zIndex}).attr("tabIndex",-1).keydown(function(t){u.closeOnEscape&&!t.isDefaultPrevented()&&t.keyCode&&t.keyCode===e.ui.keyCode.ESCAPE&&(l.close(t),t.preventDefault())}).mousedown(function(e){l.moveToTop(!1,e)}).appendTo("body"),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(a),n=(this.uiDialogTitlebar=e("<div>")).addClass("ui-dialog-titlebar  ui-widget-header  ui-corner-all  ui-helper-clearfix").bind("mousedown",function(){a.focus()}).prependTo(a),s=e("<a href='#'></a>").addClass("ui-dialog-titlebar-close  ui-corner-all").attr("role","button").click(function(e){e.preventDefault(),l.close(e)}).appendTo(n),(this.uiDialogTitlebarCloseText=e("<span>")).addClass("ui-icon ui-icon-closethick").text(u.closeText).appendTo(s),r=e("<span>").uniqueId().addClass("ui-dialog-title").html(d).prependTo(n),o=(this.uiDialogButtonPane=e("<div>")).addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),(this.uiButtonSet=e("<div>")).addClass("ui-dialog-buttonset").appendTo(o),a.attr({role:"dialog","aria-labelledby":r.attr("id")}),n.find("*").add(n).disableSelection(),this._hoverable(s),this._focusable(s),u.draggable&&e.fn.draggable&&this._makeDraggable(),u.resizable&&e.fn.resizable&&this._makeResizable(),this._createButtons(u.buttons),this._isOpen=!1,e.fn.bgiframe&&a.bgiframe(),this._on(a,{keydown:function(i){if(u.modal&&i.keyCode===e.ui.keyCode.TAB){var n=e(":tabbable",a),s=n.filter(":first"),r=n.filter(":last");return i.target!==r[0]||i.shiftKey?i.target===s[0]&&i.shiftKey?(r.focus(1),!1):t:(s.focus(1),!1)}}})},_init:function(){this.options.autoOpen&&this.open()},_destroy:function(){var e,t=this.oldPosition;this.overlay&&this.overlay.destroy(),this.uiDialog.hide(),this.element.removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),e=t.parent.children().eq(t.index),e.length&&e[0]!==this.element[0]?e.before(this.element):t.parent.append(this.element)},widget:function(){return this.uiDialog},close:function(t){var i,a,n=this;if(this._isOpen&&!1!==this._trigger("beforeClose",t))return this._isOpen=!1,this.overlay&&this.overlay.destroy(),this.options.hide?this._hide(this.uiDialog,this.options.hide,function(){n._trigger("close",t)}):(this.uiDialog.hide(),this._trigger("close",t)),e.ui.dialog.overlay.resize(),this.options.modal&&(i=0,e(".ui-dialog").each(function(){this!==n.uiDialog[0]&&(a=e(this).css("z-index"),isNaN(a)||(i=Math.max(i,a)))}),e.ui.dialog.maxZ=i),this},isOpen:function(){return this._isOpen},moveToTop:function(t,i){var a,n=this.options;return n.modal&&!t||!n.stack&&!n.modal?this._trigger("focus",i):(n.zIndex>e.ui.dialog.maxZ&&(e.ui.dialog.maxZ=n.zIndex),this.overlay&&(e.ui.dialog.maxZ+=1,e.ui.dialog.overlay.maxZ=e.ui.dialog.maxZ,this.overlay.$el.css("z-index",e.ui.dialog.overlay.maxZ)),a={scrollTop:this.element.scrollTop(),scrollLeft:this.element.scrollLeft()},e.ui.dialog.maxZ+=1,this.uiDialog.css("z-index",e.ui.dialog.maxZ),this.element.attr(a),this._trigger("focus",i),this)},open:function(){if(!this._isOpen){var t,i=this.options,a=this.uiDialog;return this._size(),this._position(i.position),a.show(i.show),this.overlay=i.modal?new e.ui.dialog.overlay(this):null,this.moveToTop(!0),t=this.element.find(":tabbable"),t.length||(t=this.uiDialogButtonPane.find(":tabbable"),t.length||(t=a)),t.eq(0).focus(),this._isOpen=!0,this._trigger("open"),this}},_createButtons:function(t){var i=this,a=!1;this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),"object"==typeof t&&null!==t&&e.each(t,function(){return!(a=!0)}),a?(e.each(t,function(t,a){var n,s;a=e.isFunction(a)?{click:a,text:t}:a,a=e.extend({type:"button"},a),s=a.click,a.click=function(){s.apply(i.element[0],arguments)},n=e("<button></button>",a).appendTo(i.uiButtonSet),e.fn.button&&n.button()}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog)):this.uiDialog.removeClass("ui-dialog-buttons")},_makeDraggable:function(){function t(e){return{position:e.position,offset:e.offset}}var i=this,a=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(a,n){e(this).addClass("ui-dialog-dragging"),i._trigger("dragStart",a,t(n))},drag:function(e,a){i._trigger("drag",e,t(a))},stop:function(n,s){a.position=[s.position.left-i.document.scrollLeft(),s.position.top-i.document.scrollTop()],e(this).removeClass("ui-dialog-dragging"),i._trigger("dragStop",n,t(s)),e.ui.dialog.overlay.resize()}})},_makeResizable:function(i){function a(e){return{originalPosition:e.originalPosition,originalSize:e.originalSize,position:e.position,size:e.size}}i=i===t?this.options.resizable:i;var n=this,s=this.options,r=this.uiDialog.css("position"),o="string"==typeof i?i:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:s.maxWidth,maxHeight:s.maxHeight,minWidth:s.minWidth,minHeight:this._minHeight(),handles:o,start:function(t,i){e(this).addClass("ui-dialog-resizing"),n._trigger("resizeStart",t,a(i))},resize:function(e,t){n._trigger("resize",e,a(t))},stop:function(t,i){e(this).removeClass("ui-dialog-resizing"),s.height=e(this).height(),s.width=e(this).width(),n._trigger("resizeStop",t,a(i)),e.ui.dialog.overlay.resize()}}).css("position",r).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var e=this.options;return"auto"===e.height?e.minHeight:Math.min(e.minHeight,e.height)},_position:function(t){var i,a=[],n=[0,0];t?(("string"==typeof t||"object"==typeof t&&"0"in t)&&(a=t.split?t.split(" "):[t[0],t[1]],1===a.length&&(a[1]=a[0]),e.each(["left","top"],function(e,t){+a[e]===a[e]&&(n[e]=a[e],a[e]=t)}),t={my:a[0]+(0>n[0]?n[0]:"+"+n[0])+" "+a[1]+(0>n[1]?n[1]:"+"+n[1]),at:a.join(" ")}),t=e.extend({},e.ui.dialog.prototype.options.position,t)):t=e.ui.dialog.prototype.options.position,i=this.uiDialog.is(":visible"),i||this.uiDialog.show(),this.uiDialog.position(t),i||this.uiDialog.hide()},_setOptions:function(t){var i=this,s={},r=!1;e.each(t,function(e,t){i._setOption(e,t),e in a&&(r=!0),e in n&&(s[e]=t)}),r&&this._size(),this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option",s)},_setOption:function(t,a){var n,s,r=this.uiDialog;switch(t){case"buttons":this._createButtons(a);break;case"closeText":this.uiDialogTitlebarCloseText.text(""+a);break;case"dialogClass":r.removeClass(this.options.dialogClass).addClass(i+a);break;case"disabled":a?r.addClass("ui-dialog-disabled"):r.removeClass("ui-dialog-disabled");break;case"draggable":n=r.is(":data(draggable)"),n&&!a&&r.draggable("destroy"),!n&&a&&this._makeDraggable();break;case"position":this._position(a);break;case"resizable":s=r.is(":data(resizable)"),s&&!a&&r.resizable("destroy"),s&&"string"==typeof a&&r.resizable("option","handles",a),s||a===!1||this._makeResizable(a);break;case"title":e(".ui-dialog-title",this.uiDialogTitlebar).html(""+(a||"&#160;"))}this._super(t,a)},_size:function(){var t,i,a,n=this.options,s=this.uiDialog.is(":visible");this.element.show().css({width:"auto",minHeight:0,height:0}),n.minWidth>n.width&&(n.width=n.minWidth),t=this.uiDialog.css({height:"auto",width:n.width}).outerHeight(),i=Math.max(0,n.minHeight-t),"auto"===n.height?e.support.minHeight?this.element.css({minHeight:i,height:"auto"}):(this.uiDialog.show(),a=this.element.css("height","auto").height(),s||this.uiDialog.hide(),this.element.height(Math.max(a,i))):this.element.height(Math.max(n.height-t,0)),this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())}}),e.extend(e.ui.dialog,{uuid:0,maxZ:0,getTitleId:function(e){var t=e.attr("id");return t||(this.uuid+=1,t=this.uuid),"ui-dialog-title-"+t},overlay:function(t){this.$el=e.ui.dialog.overlay.create(t)}}),e.extend(e.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:e.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(e){return e+".dialog-overlay"}).join(" "),create:function(i){0===this.instances.length&&(setTimeout(function(){e.ui.dialog.overlay.instances.length&&e(document).bind(e.ui.dialog.overlay.events,function(i){return e(i.target).zIndex()<e.ui.dialog.overlay.maxZ?!1:t})},1),e(window).bind("resize.dialog-overlay",e.ui.dialog.overlay.resize));var a=this.oldInstances.pop()||e("<div>").addClass("ui-widget-overlay");return e(document).bind("keydown.dialog-overlay",function(t){var n=e.ui.dialog.overlay.instances;0!==n.length&&n[n.length-1]===a&&i.options.closeOnEscape&&!t.isDefaultPrevented()&&t.keyCode&&t.keyCode===e.ui.keyCode.ESCAPE&&(i.close(t),t.preventDefault())}),a.appendTo(document.body).css({width:this.width(),height:this.height()}),e.fn.bgiframe&&a.bgiframe(),this.instances.push(a),a},destroy:function(t){var i=e.inArray(t,this.instances),a=0;-1!==i&&this.oldInstances.push(this.instances.splice(i,1)[0]),0===this.instances.length&&e([document,window]).unbind(".dialog-overlay"),t.height(0).width(0).remove(),e.each(this.instances,function(){a=Math.max(a,this.css("z-index"))}),this.maxZ=a},height:function(){var t,i;return e.ui.ie?(t=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),i=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight),i>t?e(window).height()+"px":t+"px"):e(document).height()+"px"},width:function(){var t,i;return e.ui.ie?(t=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth),i=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth),i>t?e(window).width()+"px":t+"px"):e(document).width()+"px"},resize:function(){var t=e([]);e.each(e.ui.dialog.overlay.instances,function(){t=t.add(this)}),t.css({width:0,height:0}).css({width:e.ui.dialog.overlay.width(),height:e.ui.dialog.overlay.height()})}}),e.extend(e.ui.dialog.overlay.prototype,{destroy:function(){e.ui.dialog.overlay.destroy(this.$el)}})})(jQuery);(function(e){var t=5;e.widget("ui.slider",e.ui.mouse,{version:"1.9.2",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null},_create:function(){var i,s,n=this.options,a=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),o="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",r=[];for(this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"+(n.disabled?" ui-slider-disabled ui-disabled":"")),this.range=e([]),n.range&&(n.range===!0&&(n.values||(n.values=[this._valueMin(),this._valueMin()]),n.values.length&&2!==n.values.length&&(n.values=[n.values[0],n.values[0]])),this.range=e("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+("min"===n.range||"max"===n.range?" ui-slider-range-"+n.range:""))),s=n.values&&n.values.length||1,i=a.length;s>i;i++)r.push(o);this.handles=a.add(e(r.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.add(this.range).filter("a").click(function(e){e.preventDefault()}).mouseenter(function(){n.disabled||e(this).addClass("ui-state-hover")}).mouseleave(function(){e(this).removeClass("ui-state-hover")}).focus(function(){n.disabled?e(this).blur():(e(".ui-slider .ui-state-focus").removeClass("ui-state-focus"),e(this).addClass("ui-state-focus"))}).blur(function(){e(this).removeClass("ui-state-focus")}),this.handles.each(function(t){e(this).data("ui-slider-handle-index",t)}),this._on(this.handles,{keydown:function(i){var s,n,a,o,r=e(i.target).data("ui-slider-handle-index");switch(i.keyCode){case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(i.preventDefault(),!this._keySliding&&(this._keySliding=!0,e(i.target).addClass("ui-state-active"),s=this._start(i,r),s===!1))return}switch(o=this.options.step,n=a=this.options.values&&this.options.values.length?this.values(r):this.value(),i.keyCode){case e.ui.keyCode.HOME:a=this._valueMin();break;case e.ui.keyCode.END:a=this._valueMax();break;case e.ui.keyCode.PAGE_UP:a=this._trimAlignValue(n+(this._valueMax()-this._valueMin())/t);break;case e.ui.keyCode.PAGE_DOWN:a=this._trimAlignValue(n-(this._valueMax()-this._valueMin())/t);break;case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if(n===this._valueMax())return;a=this._trimAlignValue(n+o);break;case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(n===this._valueMin())return;a=this._trimAlignValue(n-o)}this._slide(i,r,a)},keyup:function(t){var i=e(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,i),this._change(t,i),e(t.target).removeClass("ui-state-active"))}}),this._refreshValue(),this._animateOff=!1},_destroy:function(){this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(t){var i,s,n,a,o,r,l,h,u=this,c=this.options;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:t.pageX,y:t.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var i=Math.abs(s-u.values(t));n>i&&(n=i,a=e(this),o=t)}),c.range===!0&&this.values(1)===c.min&&(o+=1,a=e(this.handles[o])),r=this._start(t,o),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,a.addClass("ui-state-active").focus(),l=a.offset(),h=!e(t.target).parents().andSelf().is(".ui-slider-handle"),this._clickOffset=h?{left:0,top:0}:{left:t.pageX-l.left-a.width()/2,top:t.pageY-l.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,o,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},i=this._normValueFromMouse(t);return this._slide(e,this._handleIndex,i),!1},_mouseStop:function(e){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(e,this._handleIndex),this._change(e,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(e){var t,i,s,n,a;return"horizontal"===this.orientation?(t=this.elementSize.width,i=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(t=this.elementSize.height,i=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/t,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),a=this._valueMin()+s*n,this._trimAlignValue(a)},_start:function(e,t){var i={handle:this.handles[t],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("start",e,i)},_slide:function(e,t,i){var s,n,a;this.options.values&&this.options.values.length?(s=this.values(t?0:1),2===this.options.values.length&&this.options.range===!0&&(0===t&&i>s||1===t&&s>i)&&(i=s),i!==this.values(t)&&(n=this.values(),n[t]=i,a=this._trigger("slide",e,{handle:this.handles[t],value:i,values:n}),s=this.values(t?0:1),a!==!1&&this.values(t,i,!0))):i!==this.value()&&(a=this._trigger("slide",e,{handle:this.handles[t],value:i}),a!==!1&&this.value(i))},_stop:function(e,t){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("stop",e,i)},_change:function(e,t){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("change",e,i)}},value:function(e){return arguments.length?(this.options.value=this._trimAlignValue(e),this._refreshValue(),this._change(null,0),undefined):this._value()},values:function(t,i){var s,n,a;if(arguments.length>1)return this.options.values[t]=this._trimAlignValue(i),this._refreshValue(),this._change(null,t),undefined;if(!arguments.length)return this._values();if(!e.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(t):this.value();for(s=this.options.values,n=arguments[0],a=0;s.length>a;a+=1)s[a]=this._trimAlignValue(n[a]),this._change(null,a);this._refreshValue()},_setOption:function(t,i){var s,n=0;switch(e.isArray(this.options.values)&&(n=this.options.values.length),e.Widget.prototype._setOption.apply(this,arguments),t){case"disabled":i?(this.handles.filter(".ui-state-focus").blur(),this.handles.removeClass("ui-state-hover"),this.handles.prop("disabled",!0),this.element.addClass("ui-disabled")):(this.handles.prop("disabled",!1),this.element.removeClass("ui-disabled"));break;case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1}},_value:function(){var e=this.options.value;return e=this._trimAlignValue(e)},_values:function(e){var t,i,s;if(arguments.length)return t=this.options.values[e],t=this._trimAlignValue(t);for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i},_trimAlignValue:function(e){if(this._valueMin()>=e)return this._valueMin();if(e>=this._valueMax())return this._valueMax();var t=this.options.step>0?this.options.step:1,i=(e-this._valueMin())%t,s=e-i;return 2*Math.abs(i)>=t&&(s+=i>0?t:-t),parseFloat(s.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var t,i,s,n,a,o=this.options.range,r=this.options,l=this,h=this._animateOff?!1:r.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((l.values(s)-l._valueMin())/(l._valueMax()-l._valueMin())),u["horizontal"===l.orientation?"left":"bottom"]=i+"%",e(this).stop(1,1)[h?"animate":"css"](u,r.animate),l.options.range===!0&&("horizontal"===l.orientation?(0===s&&l.range.stop(1,1)[h?"animate":"css"]({left:i+"%"},r.animate),1===s&&l.range[h?"animate":"css"]({width:i-t+"%"},{queue:!1,duration:r.animate})):(0===s&&l.range.stop(1,1)[h?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&l.range[h?"animate":"css"]({height:i-t+"%"},{queue:!1,duration:r.animate}))),t=i}):(s=this.value(),n=this._valueMin(),a=this._valueMax(),i=a!==n?100*((s-n)/(a-n)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[h?"animate":"css"](u,r.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({width:i+"%"},r.animate),"max"===o&&"horizontal"===this.orientation&&this.range[h?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({height:i+"%"},r.animate),"max"===o&&"vertical"===this.orientation&&this.range[h?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))}})})(jQuery);jQuery.effects||function(t,e){var i=t.uiBackCompat!==!1,s="ui-effects-";t.effects={effect:{}},function(e,i){function s(t,e,i){var s=u[e.type]||{};return null==t?i||!e.def?null:e.def:(t=s.floor?~~t:parseFloat(t),isNaN(t)?e.def:s.mod?(t+s.mod)%s.mod:0>t?0:t>s.max?s.max:t)}function n(t){var s=h(),n=s._rgba=[];return t=t.toLowerCase(),g(c,function(e,a){var o,r=a.re.exec(t),l=r&&a.parse(r),c=a.space||"rgba";return l?(o=s[c](l),s[d[c].cache]=o[d[c].cache],n=s._rgba=o._rgba,!1):i}),n.length?("0,0,0,0"===n.join()&&e.extend(n,o.transparent),s):o[t]}function a(t,e,i){return i=(i+1)%1,1>6*i?t+6*(e-t)*i:1>2*i?e:2>3*i?t+6*(e-t)*(2/3-i):t}var o,r="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),l=/^([\-+])=\s*(\d+\.?\d*)/,c=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],h=e.Color=function(t,i,s,n){return new e.Color.fn.parse(t,i,s,n)},d={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},p=h.support={},f=e("<p>")[0],g=e.each;f.style.cssText="background-color:rgba(1,1,1,.5)",p.rgba=f.style.backgroundColor.indexOf("rgba")>-1,g(d,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),h.fn=e.extend(h.prototype,{parse:function(a,r,l,c){if(a===i)return this._rgba=[null,null,null,null],this;(a.jquery||a.nodeType)&&(a=e(a).css(r),r=i);var u=this,p=e.type(a),f=this._rgba=[];return r!==i&&(a=[a,r,l,c],p="array"),"string"===p?this.parse(n(a)||o._default):"array"===p?(g(d.rgba.props,function(t,e){f[e.idx]=s(a[e.idx],e)}),this):"object"===p?(a instanceof h?g(d,function(t,e){a[e.cache]&&(u[e.cache]=a[e.cache].slice())}):g(d,function(e,i){var n=i.cache;g(i.props,function(t,e){if(!u[n]&&i.to){if("alpha"===t||null==a[t])return;u[n]=i.to(u._rgba)}u[n][e.idx]=s(a[t],e,!0)}),u[n]&&0>t.inArray(null,u[n].slice(0,3))&&(u[n][3]=1,i.from&&(u._rgba=i.from(u[n])))}),this):i},is:function(t){var e=h(t),s=!0,n=this;return g(d,function(t,a){var o,r=e[a.cache];return r&&(o=n[a.cache]||a.to&&a.to(n._rgba)||[],g(a.props,function(t,e){return null!=r[e.idx]?s=r[e.idx]===o[e.idx]:i})),s}),s},_space:function(){var t=[],e=this;return g(d,function(i,s){e[s.cache]&&t.push(i)}),t.pop()},transition:function(t,e){var i=h(t),n=i._space(),a=d[n],o=0===this.alpha()?h("transparent"):this,r=o[a.cache]||a.to(o._rgba),l=r.slice();return i=i[a.cache],g(a.props,function(t,n){var a=n.idx,o=r[a],c=i[a],h=u[n.type]||{};null!==c&&(null===o?l[a]=c:(h.mod&&(c-o>h.mod/2?o+=h.mod:o-c>h.mod/2&&(o-=h.mod)),l[a]=s((c-o)*e+o,n)))}),this[n](l)},blend:function(t){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=h(t)._rgba;return h(e.map(i,function(t,e){return(1-s)*n[e]+s*t}))},toRgbaString:function(){var t="rgba(",i=e.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===i[3]&&(i.pop(),t="rgb("),t+i.join()+")"},toHslaString:function(){var t="hsla(",i=e.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t});return 1===i[3]&&(i.pop(),t="hsl("),t+i.join()+")"},toHexString:function(t){var i=this._rgba.slice(),s=i.pop();return t&&i.push(~~(255*s)),"#"+e.map(i,function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),h.fn.parse.prototype=h.fn,d.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,s=t[0]/255,n=t[1]/255,a=t[2]/255,o=t[3],r=Math.max(s,n,a),l=Math.min(s,n,a),c=r-l,h=r+l,d=.5*h;return e=l===r?0:s===r?60*(n-a)/c+360:n===r?60*(a-s)/c+120:60*(s-n)/c+240,i=0===d||1===d?d:.5>=d?c/h:c/(2-h),[Math.round(e)%360,i,d,null==o?1:o]},d.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],s=t[2],n=t[3],o=.5>=s?s*(1+i):s+i-s*i,r=2*s-o;return[Math.round(255*a(r,o,e+1/3)),Math.round(255*a(r,o,e)),Math.round(255*a(r,o,e-1/3)),n]},g(d,function(t,n){var a=n.props,o=n.cache,r=n.to,c=n.from;h.fn[t]=function(t){if(r&&!this[o]&&(this[o]=r(this._rgba)),t===i)return this[o].slice();var n,l=e.type(t),d="array"===l||"object"===l?t:arguments,u=this[o].slice();return g(a,function(t,e){var i=d["object"===l?t:e.idx];null==i&&(i=u[e.idx]),u[e.idx]=s(i,e)}),c?(n=h(c(u)),n[o]=u,n):h(u)},g(a,function(i,s){h.fn[i]||(h.fn[i]=function(n){var a,o=e.type(n),r="alpha"===i?this._hsla?"hsla":"rgba":t,c=this[r](),h=c[s.idx];return"undefined"===o?h:("function"===o&&(n=n.call(this,h),o=e.type(n)),null==n&&s.empty?this:("string"===o&&(a=l.exec(n),a&&(n=h+parseFloat(a[2])*("+"===a[1]?1:-1))),c[s.idx]=n,this[r](c)))})})}),g(r,function(t,i){e.cssHooks[i]={set:function(t,s){var a,o,r="";if("string"!==e.type(s)||(a=n(s))){if(s=h(a||s),!p.rgba&&1!==s._rgba[3]){for(o="backgroundColor"===i?t.parentNode:t;(""===r||"transparent"===r)&&o&&o.style;)try{r=e.css(o,"backgroundColor"),o=o.parentNode}catch(l){}s=s.blend(r&&"transparent"!==r?r:"_default")}s=s.toRgbaString()}try{t.style[i]=s}catch(c){}}},e.fx.step[i]=function(t){t.colorInit||(t.start=h(t.elem,i),t.end=h(t.end),t.colorInit=!0),e.cssHooks[i].set(t.elem,t.start.transition(t.end,t.pos))}}),e.cssHooks.borderColor={expand:function(t){var e={};return g(["Top","Right","Bottom","Left"],function(i,s){e["border"+s+"Color"]=t}),e}},o=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(){var e,i,s=this.ownerDocument.defaultView?this.ownerDocument.defaultView.getComputedStyle(this,null):this.currentStyle,n={};if(s&&s.length&&s[0]&&s[s[0]])for(i=s.length;i--;)e=s[i],"string"==typeof s[e]&&(n[t.camelCase(e)]=s[e]);else for(e in s)"string"==typeof s[e]&&(n[e]=s[e]);return n}function s(e,i){var s,n,o={};for(s in i)n=i[s],e[s]!==n&&(a[s]||(t.fx.step[s]||!isNaN(parseFloat(n)))&&(o[s]=n));return o}var n=["add","remove","toggle"],a={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,i){t.fx.step[i]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(jQuery.style(t.elem,i,t.end),t.setAttr=!0)}}),t.effects.animateClass=function(e,a,o,r){var l=t.speed(a,o,r);return this.queue(function(){var a,o=t(this),r=o.attr("class")||"",c=l.children?o.find("*").andSelf():o;c=c.map(function(){var e=t(this);return{el:e,start:i.call(this)}}),a=function(){t.each(n,function(t,i){e[i]&&o[i+"Class"](e[i])})},a(),c=c.map(function(){return this.end=i.call(this.el[0]),this.diff=s(this.start,this.end),this}),o.attr("class",r),c=c.map(function(){var e=this,i=t.Deferred(),s=jQuery.extend({},l,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,s),i.promise()}),t.when.apply(t,c.get()).done(function(){a(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),l.complete.call(o[0])})})},t.fn.extend({_addClass:t.fn.addClass,addClass:function(e,i,s,n){return i?t.effects.animateClass.call(this,{add:e},i,s,n):this._addClass(e)},_removeClass:t.fn.removeClass,removeClass:function(e,i,s,n){return i?t.effects.animateClass.call(this,{remove:e},i,s,n):this._removeClass(e)},_toggleClass:t.fn.toggleClass,toggleClass:function(i,s,n,a,o){return"boolean"==typeof s||s===e?n?t.effects.animateClass.call(this,s?{add:i}:{remove:i},n,a,o):this._toggleClass(i,s):t.effects.animateClass.call(this,{toggle:i},s,n,a)},switchClass:function(e,i,s,n,a){return t.effects.animateClass.call(this,{add:i,remove:e},s,n,a)}})}(),function(){function n(e,i,s,n){return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||t.fx.speeds[i])&&(n=s,s=i,i={}),t.isFunction(s)&&(n=s,s=null),i&&t.extend(e,i),s=s||i.duration,e.duration=t.fx.off?0:"number"==typeof s?s:s in t.fx.speeds?t.fx.speeds[s]:t.fx.speeds._default,e.complete=n||i.complete,e}function a(e){return!e||"number"==typeof e||t.fx.speeds[e]?!0:"string"!=typeof e||t.effects.effect[e]?!1:i&&t.effects[e]?!1:!0}t.extend(t.effects,{version:"1.9.2",save:function(t,e){for(var i=0;e.length>i;i++)null!==e[i]&&t.data(s+e[i],t[0].style[e[i]])},restore:function(t,i){var n,a;for(a=0;i.length>a;a++)null!==i[a]&&(n=t.data(s+i[a]),n===e&&(n=""),t.css(i[a],n))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},getBaseline:function(t,e){var i,s;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=t[1]/e.width}return{x:s,y:i}},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),"float":e.css("float")},s=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:e.width(),height:e.height()},a=document.activeElement;try{a.id}catch(o){a=document.body}return e.wrap(s),(e[0]===a||t.contains(e[0],a))&&t(a).focus(),s=e.parent(),"static"===e.css("position")?(s.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,s){i[s]=e.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(n),s.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).focus()),e},setTransition:function(e,i,s,n){return n=n||{},t.each(i,function(t,i){var a=e.cssUnit(i);a[0]>0&&(n[i]=a[0]*s+a[1])}),n}}),t.fn.extend({effect:function(){function e(e){function i(){t.isFunction(a)&&a.call(n[0]),t.isFunction(e)&&e()}var n=t(this),a=s.complete,o=s.mode;(n.is(":hidden")?"hide"===o:"show"===o)?i():r.call(n[0],s,i)}var s=n.apply(this,arguments),a=s.mode,o=s.queue,r=t.effects.effect[s.effect],l=!r&&i&&t.effects[s.effect];return t.fx.off||!r&&!l?a?this[a](s.duration,s.complete):this.each(function(){s.complete&&s.complete.call(this)}):r?o===!1?this.each(e):this.queue(o||"fx",e):l.call(this,{options:s,duration:s.duration,callback:s.complete,mode:s.mode})},_show:t.fn.show,show:function(t){if(a(t))return this._show.apply(this,arguments);var e=n.apply(this,arguments);return e.mode="show",this.effect.call(this,e)},_hide:t.fn.hide,hide:function(t){if(a(t))return this._hide.apply(this,arguments);var e=n.apply(this,arguments);return e.mode="hide",this.effect.call(this,e)},__toggle:t.fn.toggle,toggle:function(e){if(a(e)||"boolean"==typeof e||t.isFunction(e))return this.__toggle.apply(this,arguments);var i=n.apply(this,arguments);return i.mode="toggle",this.effect.call(this,i)},cssUnit:function(e){var i=this.css(e),s=[];return t.each(["em","px","%","pt"],function(t,e){i.indexOf(e)>0&&(s=[parseFloat(i),e])}),s}})}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,i){e[i]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;((e=Math.pow(2,--i))-1)/11>t;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?i(2*t)/2:1-i(-2*t+2)/2}})}()}(jQuery);(function(t){var e=/up|down|vertical/,i=/up|left|vertical|horizontal/;t.effects.effect.blind=function(s,n){var a,o,r,l=t(this),h=["position","top","bottom","left","right","height","width"],c=t.effects.setMode(l,s.mode||"hide"),d=s.direction||"up",u=e.test(d),p=u?"height":"width",f=u?"top":"left",g=i.test(d),m={},v="show"===c;l.parent().is(".ui-effects-wrapper")?t.effects.save(l.parent(),h):t.effects.save(l,h),l.show(),a=t.effects.createWrapper(l).css({overflow:"hidden"}),o=a[p](),r=parseFloat(a.css(f))||0,m[p]=v?o:0,g||(l.css(u?"bottom":"right",0).css(u?"top":"left","auto").css({position:"absolute"}),m[f]=v?r:o+r),v&&(a.css(p,0),g||a.css(f,r+o)),a.animate(m,{duration:s.duration,easing:s.easing,queue:!1,complete:function(){"hide"===c&&l.hide(),t.effects.restore(l,h),t.effects.removeWrapper(l),n()}})}})(jQuery);(function(t){t.effects.effect.bounce=function(e,i){var s,n,a,o=t(this),r=["position","top","bottom","left","right","height","width"],l=t.effects.setMode(o,e.mode||"effect"),h="hide"===l,c="show"===l,d=e.direction||"up",u=e.distance,p=e.times||5,f=2*p+(c||h?1:0),g=e.duration/f,m=e.easing,v="up"===d||"down"===d?"top":"left",_="up"===d||"left"===d,b=o.queue(),y=b.length;for((c||h)&&r.push("opacity"),t.effects.save(o,r),o.show(),t.effects.createWrapper(o),u||(u=o["top"===v?"outerHeight":"outerWidth"]()/3),c&&(a={opacity:1},a[v]=0,o.css("opacity",0).css(v,_?2*-u:2*u).animate(a,g,m)),h&&(u/=Math.pow(2,p-1)),a={},a[v]=0,s=0;p>s;s++)n={},n[v]=(_?"-=":"+=")+u,o.animate(n,g,m).animate(a,g,m),u=h?2*u:u/2;h&&(n={opacity:0},n[v]=(_?"-=":"+=")+u,o.animate(n,g,m)),o.queue(function(){h&&o.hide(),t.effects.restore(o,r),t.effects.removeWrapper(o),i()}),y>1&&b.splice.apply(b,[1,0].concat(b.splice(y,f+1))),o.dequeue()}})(jQuery);(function(t){t.effects.effect.clip=function(e,i){var s,n,a,o=t(this),r=["position","top","bottom","left","right","height","width"],l=t.effects.setMode(o,e.mode||"hide"),h="show"===l,c=e.direction||"vertical",d="vertical"===c,u=d?"height":"width",p=d?"top":"left",f={};t.effects.save(o,r),o.show(),s=t.effects.createWrapper(o).css({overflow:"hidden"}),n="IMG"===o[0].tagName?s:o,a=n[u](),h&&(n.css(u,0),n.css(p,a/2)),f[u]=h?a:0,f[p]=h?0:a/2,n.animate(f,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){h||o.hide(),t.effects.restore(o,r),t.effects.removeWrapper(o),i()}})}})(jQuery);(function(e){e.effects.effect.drop=function(t,i){var s,n=e(this),a=["position","top","bottom","left","right","opacity","height","width"],o=e.effects.setMode(n,t.mode||"hide"),r="show"===o,l=t.direction||"left",h="up"===l||"down"===l?"top":"left",c="up"===l||"left"===l?"pos":"neg",d={opacity:r?1:0};e.effects.save(n,a),n.show(),e.effects.createWrapper(n),s=t.distance||n["top"===h?"outerHeight":"outerWidth"](!0)/2,r&&n.css("opacity",0).css(h,"pos"===c?-s:s),d[h]=(r?"pos"===c?"+=":"-=":"pos"===c?"-=":"+=")+s,n.animate(d,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===o&&n.hide(),e.effects.restore(n,a),e.effects.removeWrapper(n),i()}})}})(jQuery);(function(e){e.effects.effect.explode=function(t,i){function s(){b.push(this),b.length===d*u&&n()}function n(){p.css({visibility:"visible"}),e(b).remove(),g||p.hide(),i()}var a,o,r,l,h,c,d=t.pieces?Math.round(Math.sqrt(t.pieces)):3,u=d,p=e(this),f=e.effects.setMode(p,t.mode||"hide"),g="show"===f,m=p.show().css("visibility","hidden").offset(),v=Math.ceil(p.outerWidth()/u),_=Math.ceil(p.outerHeight()/d),b=[];for(a=0;d>a;a++)for(l=m.top+a*_,c=a-(d-1)/2,o=0;u>o;o++)r=m.left+o*v,h=o-(u-1)/2,p.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-o*v,top:-a*_}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:v,height:_,left:r+(g?h*v:0),top:l+(g?c*_:0),opacity:g?0:1}).animate({left:r+(g?0:h*v),top:l+(g?0:c*_),opacity:g?1:0},t.duration||500,t.easing,s)}})(jQuery);(function(e){e.effects.effect.fade=function(t,i){var s=e(this),n=e.effects.setMode(s,t.mode||"toggle");s.animate({opacity:n},{queue:!1,duration:t.duration,easing:t.easing,complete:i})}})(jQuery);(function(e){e.effects.effect.fold=function(t,i){var s,n,a=e(this),o=["position","top","bottom","left","right","height","width"],r=e.effects.setMode(a,t.mode||"hide"),l="show"===r,h="hide"===r,c=t.size||15,d=/([0-9]+)%/.exec(c),u=!!t.horizFirst,p=l!==u,f=p?["width","height"]:["height","width"],g=t.duration/2,m={},v={};e.effects.save(a,o),a.show(),s=e.effects.createWrapper(a).css({overflow:"hidden"}),n=p?[s.width(),s.height()]:[s.height(),s.width()],d&&(c=parseInt(d[1],10)/100*n[h?0:1]),l&&s.css(u?{height:0,width:c}:{height:c,width:0}),m[f[0]]=l?n[0]:c,v[f[1]]=l?n[1]:0,s.animate(m,g,t.easing).animate(v,g,t.easing,function(){h&&a.hide(),e.effects.restore(a,o),e.effects.removeWrapper(a),i()})}})(jQuery);(function(e){e.effects.effect.highlight=function(t,i){var s=e(this),n=["backgroundImage","backgroundColor","opacity"],a=e.effects.setMode(s,t.mode||"show"),o={backgroundColor:s.css("backgroundColor")};"hide"===a&&(o.opacity=0),e.effects.save(s,n),s.show().css({backgroundImage:"none",backgroundColor:t.color||"#ffff99"}).animate(o,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===a&&s.hide(),e.effects.restore(s,n),i()}})}})(jQuery);(function(e){e.effects.effect.pulsate=function(t,i){var s,n=e(this),a=e.effects.setMode(n,t.mode||"show"),o="show"===a,r="hide"===a,l=o||"hide"===a,h=2*(t.times||5)+(l?1:0),c=t.duration/h,d=0,u=n.queue(),p=u.length;for((o||!n.is(":visible"))&&(n.css("opacity",0).show(),d=1),s=1;h>s;s++)n.animate({opacity:d},c,t.easing),d=1-d;n.animate({opacity:d},c,t.easing),n.queue(function(){r&&n.hide(),i()}),p>1&&u.splice.apply(u,[1,0].concat(u.splice(p,h+1))),n.dequeue()}})(jQuery);(function(t){t.effects.effect.puff=function(e,i){var s=t(this),n=t.effects.setMode(s,e.mode||"hide"),a="hide"===n,o=parseInt(e.percent,10)||150,r=o/100,l={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()};t.extend(e,{effect:"scale",queue:!1,fade:!0,mode:n,complete:i,percent:a?o:100,from:a?l:{height:l.height*r,width:l.width*r,outerHeight:l.outerHeight*r,outerWidth:l.outerWidth*r}}),s.effect(e)},t.effects.effect.scale=function(e,i){var s=t(this),n=t.extend(!0,{},e),a=t.effects.setMode(s,e.mode||"effect"),o=parseInt(e.percent,10)||(0===parseInt(e.percent,10)?0:"hide"===a?0:100),r=e.direction||"both",l=e.origin,h={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()},c={y:"horizontal"!==r?o/100:1,x:"vertical"!==r?o/100:1};n.effect="size",n.queue=!1,n.complete=i,"effect"!==a&&(n.origin=l||["middle","center"],n.restore=!0),n.from=e.from||("show"===a?{height:0,width:0,outerHeight:0,outerWidth:0}:h),n.to={height:h.height*c.y,width:h.width*c.x,outerHeight:h.outerHeight*c.y,outerWidth:h.outerWidth*c.x},n.fade&&("show"===a&&(n.from.opacity=0,n.to.opacity=1),"hide"===a&&(n.from.opacity=1,n.to.opacity=0)),s.effect(n)},t.effects.effect.size=function(e,i){var s,n,a,o=t(this),r=["position","top","bottom","left","right","width","height","overflow","opacity"],l=["position","top","bottom","left","right","overflow","opacity"],h=["width","height","overflow"],c=["fontSize"],d=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],u=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],p=t.effects.setMode(o,e.mode||"effect"),f=e.restore||"effect"!==p,g=e.scale||"both",m=e.origin||["middle","center"],v=o.css("position"),_=f?r:l,b={height:0,width:0,outerHeight:0,outerWidth:0};"show"===p&&o.show(),s={height:o.height(),width:o.width(),outerHeight:o.outerHeight(),outerWidth:o.outerWidth()},"toggle"===e.mode&&"show"===p?(o.from=e.to||b,o.to=e.from||s):(o.from=e.from||("show"===p?b:s),o.to=e.to||("hide"===p?b:s)),a={from:{y:o.from.height/s.height,x:o.from.width/s.width},to:{y:o.to.height/s.height,x:o.to.width/s.width}},("box"===g||"both"===g)&&(a.from.y!==a.to.y&&(_=_.concat(d),o.from=t.effects.setTransition(o,d,a.from.y,o.from),o.to=t.effects.setTransition(o,d,a.to.y,o.to)),a.from.x!==a.to.x&&(_=_.concat(u),o.from=t.effects.setTransition(o,u,a.from.x,o.from),o.to=t.effects.setTransition(o,u,a.to.x,o.to))),("content"===g||"both"===g)&&a.from.y!==a.to.y&&(_=_.concat(c).concat(h),o.from=t.effects.setTransition(o,c,a.from.y,o.from),o.to=t.effects.setTransition(o,c,a.to.y,o.to)),t.effects.save(o,_),o.show(),t.effects.createWrapper(o),o.css("overflow","hidden").css(o.from),m&&(n=t.effects.getBaseline(m,s),o.from.top=(s.outerHeight-o.outerHeight())*n.y,o.from.left=(s.outerWidth-o.outerWidth())*n.x,o.to.top=(s.outerHeight-o.to.outerHeight)*n.y,o.to.left=(s.outerWidth-o.to.outerWidth)*n.x),o.css(o.from),("content"===g||"both"===g)&&(d=d.concat(["marginTop","marginBottom"]).concat(c),u=u.concat(["marginLeft","marginRight"]),h=r.concat(d).concat(u),o.find("*[width]").each(function(){var i=t(this),s={height:i.height(),width:i.width(),outerHeight:i.outerHeight(),outerWidth:i.outerWidth()};f&&t.effects.save(i,h),i.from={height:s.height*a.from.y,width:s.width*a.from.x,outerHeight:s.outerHeight*a.from.y,outerWidth:s.outerWidth*a.from.x},i.to={height:s.height*a.to.y,width:s.width*a.to.x,outerHeight:s.height*a.to.y,outerWidth:s.width*a.to.x},a.from.y!==a.to.y&&(i.from=t.effects.setTransition(i,d,a.from.y,i.from),i.to=t.effects.setTransition(i,d,a.to.y,i.to)),a.from.x!==a.to.x&&(i.from=t.effects.setTransition(i,u,a.from.x,i.from),i.to=t.effects.setTransition(i,u,a.to.x,i.to)),i.css(i.from),i.animate(i.to,e.duration,e.easing,function(){f&&t.effects.restore(i,h)})})),o.animate(o.to,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){0===o.to.opacity&&o.css("opacity",o.from.opacity),"hide"===p&&o.hide(),t.effects.restore(o,_),f||("static"===v?o.css({position:"relative",top:o.to.top,left:o.to.left}):t.each(["top","left"],function(t,e){o.css(e,function(e,i){var s=parseInt(i,10),n=t?o.to.left:o.to.top;return"auto"===i?n+"px":s+n+"px"})})),t.effects.removeWrapper(o),i()}})}})(jQuery);(function(t){t.effects.effect.shake=function(e,i){var s,n=t(this),a=["position","top","bottom","left","right","height","width"],o=t.effects.setMode(n,e.mode||"effect"),r=e.direction||"left",l=e.distance||20,h=e.times||3,c=2*h+1,d=Math.round(e.duration/c),u="up"===r||"down"===r?"top":"left",p="up"===r||"left"===r,f={},g={},m={},v=n.queue(),_=v.length;for(t.effects.save(n,a),n.show(),t.effects.createWrapper(n),f[u]=(p?"-=":"+=")+l,g[u]=(p?"+=":"-=")+2*l,m[u]=(p?"-=":"+=")+2*l,n.animate(f,d,e.easing),s=1;h>s;s++)n.animate(g,d,e.easing).animate(m,d,e.easing);n.animate(g,d,e.easing).animate(f,d/2,e.easing).queue(function(){"hide"===o&&n.hide(),t.effects.restore(n,a),t.effects.removeWrapper(n),i()}),_>1&&v.splice.apply(v,[1,0].concat(v.splice(_,c+1))),n.dequeue()}})(jQuery);(function(e){e.effects.effect.slide=function(t,i){var s,n=e(this),a=["position","top","bottom","left","right","width","height"],o=e.effects.setMode(n,t.mode||"show"),r="show"===o,l=t.direction||"left",h="up"===l||"down"===l?"top":"left",c="up"===l||"left"===l,d={};e.effects.save(n,a),n.show(),s=t.distance||n["top"===h?"outerHeight":"outerWidth"](!0),e.effects.createWrapper(n).css({overflow:"hidden"}),r&&n.css(h,c?isNaN(s)?"-"+s:-s:s),d[h]=(r?c?"+=":"-=":c?"-=":"+=")+s,n.animate(d,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===o&&n.hide(),e.effects.restore(n,a),e.effects.removeWrapper(n),i()}})}})(jQuery);(function(e){e.effects.effect.transfer=function(t,i){var s=e(this),n=e(t.to),a="fixed"===n.css("position"),o=e("body"),r=a?o.scrollTop():0,l=a?o.scrollLeft():0,h=n.offset(),c={top:h.top-r,left:h.left-l,height:n.innerHeight(),width:n.innerWidth()},d=s.offset(),u=e('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(t.className).css({top:d.top-r,left:d.left-l,height:s.innerHeight(),width:s.innerWidth(),position:a?"fixed":"absolute"}).animate(c,t.duration,t.easing,function(){u.remove(),i()})}})(jQuery);
																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																						/*
 * jQuery UI Touch Punch 0.2.2
 *
 * Copyright 2011, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
(function(b){b.support.touch="ontouchend" in document;if(!b.support.touch){return;}var c=b.ui.mouse.prototype,e=c._mouseInit,a;function d(g,h){if(g.originalEvent.touches.length>1){return;}g.preventDefault();var i=g.originalEvent.changedTouches[0],f=document.createEvent("MouseEvents");f.initMouseEvent(h,true,true,window,1,i.screenX,i.screenY,i.clientX,i.clientY,false,false,false,false,0,null);g.target.dispatchEvent(f);}c._touchStart=function(g){var f=this;if(a||!f._mouseCapture(g.originalEvent.changedTouches[0])){return;}a=true;f._touchMoved=false;d(g,"mouseover");d(g,"mousemove");d(g,"mousedown");};c._touchMove=function(f){if(!a){return;}this._touchMoved=true;d(f,"mousemove");};c._touchEnd=function(f){if(!a){return;}d(f,"mouseup");d(f,"mouseout");if(!this._touchMoved){d(f,"click");}a=false;};c._mouseInit=function(){var f=this;f.element.bind("touchstart",b.proxy(f,"_touchStart")).bind("touchmove",b.proxy(f,"_touchMove")).bind("touchend",b.proxy(f,"_touchEnd"));e.call(f);};})(jQuery);
/*!
 * Bootstrap v3.1.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.isLoading=!1};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",f.resetText||d.data("resetText",d[e]()),d[e](f[b]||this.options[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},b.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});return this.$element.trigger(j),j.isDefaultPrevented()?void 0:(this.sliding=!0,f&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")),f&&this.cycle(),this)};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);!e&&f.toggle&&"show"==c&&(c=!c),e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(b){a(d).remove(),a(e).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown",h),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=" li:not(.divider):visible a",i=f.find("[role=menu]"+h+", [role=listbox]"+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu], [role=listbox]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());c.is("a")&&b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this,d=this.tip();this.setContent(),this.options.animation&&d.addClass("fade");var e="function"==typeof this.options.placement?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement,f=/\s?auto?\s?/i,g=f.test(e);g&&(e=e.replace(f,"")||"top"),d.detach().css({top:0,left:0,display:"block"}).addClass(e),this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element);var h=this.getPosition(),i=d[0].offsetWidth,j=d[0].offsetHeight;if(g){var k=this.$element.parent(),l=e,m=document.documentElement.scrollTop||document.body.scrollTop,n="body"==this.options.container?window.innerWidth:k.outerWidth(),o="body"==this.options.container?window.innerHeight:k.outerHeight(),p="body"==this.options.container?0:k.offset().left;e="bottom"==e&&h.top+h.height+j-m>o?"top":"top"==e&&h.top-m-j<0?"bottom":"right"==e&&h.right+i>n?"left":"left"==e&&h.left-i<p?"right":e,d.removeClass(l).addClass(e)}var q=this.getCalculatedOffset(e,h,i,j);this.applyPlacement(q,e),this.hoverState=null;var r=function(){c.$element.trigger("shown.bs."+c.type)};a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,r).emulateTransitionEnd(150):r()}},b.prototype.applyPlacement=function(b,c){var d,e=this.tip(),f=e[0].offsetWidth,g=e[0].offsetHeight,h=parseInt(e.css("margin-top"),10),i=parseInt(e.css("margin-left"),10);isNaN(h)&&(h=0),isNaN(i)&&(i=0),b.top=b.top+h,b.left=b.left+i,a.offset.setOffset(e[0],a.extend({using:function(a){e.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),e.addClass("in");var j=e[0].offsetWidth,k=e[0].offsetHeight;if("top"==c&&k!=g&&(d=!0,b.top=b.top+g-k),/bottom|top/.test(c)){var l=0;b.left<0&&(l=-2*b.left,b.left=0,e.offset(b),j=e[0].offsetWidth,k=e[0].offsetHeight),this.replaceArrow(l-f+j,j,"left")}else this.replaceArrow(k-g,k,"top");d&&e.offset(b)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(a(c).is("body")?window:c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);{var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})}},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(b.RESET).addClass("affix");var a=this.$window.scrollTop(),c=this.$element.offset();return this.pinnedOffset=c.top-a},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"top"==this.affixed&&(e.top+=d),"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:c-h-this.$element.height()}))}}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);

/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function C(a){j.cssText=a}function D(a,b){return C(n.join(a+";")+(b||""))}function E(a,b){return typeof a===b}function F(a,b){return!!~(""+a).indexOf(b)}function G(a,b){for(var d in a){var e=a[d];if(!F(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function H(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:E(f,"function")?f.bind(d||b):f}return!1}function I(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return E(b,"string")||E(b,"undefined")?G(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),H(e,b,c))}function J(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=E(e[d],"function"),E(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),A={}.hasOwnProperty,B;!E(A,"undefined")&&!E(A.call,"undefined")?B=function(a,b){return A.call(a,b)}:B=function(a,b){return b in a&&E(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return I("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!E(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!I("indexedDB",a)},s.hashchange=function(){return z("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return C("background-color:rgba(150,255,150,.5)"),F(j.backgroundColor,"rgba")},s.hsla=function(){return C("background-color:hsla(120,40%,100%,.5)"),F(j.backgroundColor,"rgba")||F(j.backgroundColor,"hsla")},s.multiplebgs=function(){return C("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return I("backgroundSize")},s.borderimage=function(){return I("borderImage")},s.borderradius=function(){return I("borderRadius")},s.boxshadow=function(){return I("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return D("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return I("animationName")},s.csscolumns=function(){return I("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return C((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),F(j.backgroundImage,"gradient")},s.cssreflections=function(){return I("boxReflect")},s.csstransforms=function(){return!!I("transform")},s.csstransforms3d=function(){var a=!!I("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return I("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var K in s)B(s,K)&&(x=K.toLowerCase(),e[x]=s[K](),v.push((e[x]?"":"no-")+x));return e.input||J(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)B(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},C(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.hasEvent=z,e.testProp=function(a){return G([a])},e.testAllProps=I,e.testStyles=y,e.prefixed=function(a,b,c){return b?I(a,b,c):I(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
/*	
 * jQuery mmenu v4.0.2
 * @requires jQuery 1.7.0 or later
 *
 * mmenu.frebsite.nl
 *	
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * Dual licensed under the MIT and GPL licenses.
 * http://en.wikipedia.org/wiki/MIT_License
 * http://en.wikipedia.org/wiki/GNU_General_Public_License
 */

!function(a){function j(c,d,e){if("object"!=typeof c&&(c={}),e){if("boolean"!=typeof c.isMenu){var f=e.children();c.isMenu=1==f.length&&f.is(d.panelNodeType)}return c}if("object"!=typeof c.onClick&&(c.onClick={}),"undefined"!=typeof c.onClick.setLocationHref&&(a[b].deprecated("onClick.setLocationHref option","!onClick.preventDefault"),"boolean"==typeof c.onClick.setLocationHref&&(c.onClick.preventDefault=!c.onClick.setLocationHref)),c=a.extend(!0,{},a[b].defaults,c),a[b].useOverflowScrollingFallback()){switch(c.position){case"top":case"right":case"bottom":a[b].debug('position: "'+c.position+'" not supported when using the overflowScrolling-fallback.'),c.position="left"}switch(c.zposition){case"front":case"next":a[b].debug('z-position: "'+c.zposition+'" not supported when using the overflowScrolling-fallback.'),c.zposition="back"}}return c}function k(c){return"object"!=typeof c&&(c={}),c=a.extend(!0,{},a[b].configuration,c),"string"!=typeof c.pageSelector&&(c.pageSelector="> "+c.pageNodetype),c}function l(){d.$wndw=a(window),d.$html=a("html"),d.$body=a("body"),d.$allMenus=a(),a.each([e,g,f],function(a,b){b.add=function(a){a=a.split(" ");for(var c in a)b[a[c]]=b.mm(a[c])}}),e.mm=function(a){return"mm-"+a},e.add("menu ismenu panel list current highest hidden page blocker modal background opened opening subopen fullsubopen subclose subopened subtitle selected label nooverflowscrolling"),e.umm=function(a){return"mm-"==a.slice(0,3)&&(a=a.slice(3)),a},g.mm=function(a){return"mm-"+a},g.add("parent style scrollTop offetLeft"),f.mm=function(a){return a+".mm"},f.add("toggle open opening opened close closing closed keydown resize setPage setSelected transitionend touchstart touchend click scroll"),a[b].support.touch||(f.touchstart=f.mm("mousedown"),f.touchend=f.mm("mouseup")),a[b]._c=e,a[b]._d=g,a[b]._e=f,a[b].glbl=d,a[b].useOverflowScrollingFallback(i)}function m(b,c){if(b.hasClass(e.current))return!1;var d=a("."+e.panel,c),f=d.filter("."+e.current);return d.removeClass(e.highest).removeClass(e.current).not(b).not(f).addClass(e.hidden),b.hasClass(e.opened)?f.addClass(e.highest).removeClass(e.opened).removeClass(e.subopened):(b.addClass(e.highest),f.addClass(e.subopened)),b.removeClass(e.hidden).removeClass(e.subopened).addClass(e.current).addClass(e.opened),"open"}function n(){return d.$scrollTopNode||(0!=d.$html.scrollTop()?d.$scrollTopNode=d.$html:0!=d.$body.scrollTop()&&(d.$scrollTopNode=d.$body)),d.$scrollTopNode?d.$scrollTopNode.scrollTop():0}function o(c,d,e){var g=a[b].support.transition;"webkitTransition"==g?c.one("webkitTransitionEnd",d):g?c.one(f.transitionend,d):setTimeout(d,e)}function p(b,c,d,e){"string"==typeof b&&(b=a(b));var g=d?f.touchstart:f.click;e||b.off(g),b.on(g,function(a){a.preventDefault(),a.stopPropagation(),c.call(this,a)})}var b="mmenu",c="4.0.2";if(!a[b]){var d={$wndw:null,$html:null,$body:null,$page:null,$blck:null,$allMenus:null,$scrollTopNode:null},e={},f={},g={},h=0;a[b]=function(a,b,c){return d.$allMenus=d.$allMenus.add(a),this.$menu=a,this.opts=b,this.conf=c,this.serialnr=h++,this._init(),this},a[b].prototype={open:function(){return this._openSetup(),this._openFinish(),"open"},_openSetup:function(){var a=n();this.$menu.addClass(e.current),d.$allMenus.not(this.$menu).trigger(f.close),d.$page.data(g.style,d.$page.attr("style")||"").data(g.scrollTop,a).data(g.offetLeft,d.$page.offset().left);var b=0;d.$wndw.off(f.resize).on(f.resize,function(a,c){if(d.$html.hasClass(e.opened)||c){var f=d.$wndw.width();f!=b&&(b=f,d.$page.width(f-d.$page.data(g.offetLeft)))}}).trigger(f.resize,[!0]),this.conf.preventTabbing&&d.$wndw.off(f.keydown).on(f.keydown,function(a){return 9==a.keyCode?(a.preventDefault(),!1):void 0}),this.opts.modal&&d.$html.addClass(e.modal),this.opts.moveBackground&&d.$html.addClass(e.background),"left"!=this.opts.position&&d.$html.addClass(e.mm(this.opts.position)),"back"!=this.opts.zposition&&d.$html.addClass(e.mm(this.opts.zposition)),this.opts.classes&&d.$html.addClass(this.opts.classes),d.$html.addClass(e.opened),this.$menu.addClass(e.opened),d.$page.scrollTop(a),this.$menu.scrollTop(0)},_openFinish:function(){var a=this;o(d.$page,function(){a.$menu.trigger(f.opened)},this.conf.transitionDuration),d.$html.addClass(e.opening),this.$menu.trigger(f.opening),window.scrollTo(0,0)},close:function(){var a=this;return o(d.$page,function(){a.$menu.removeClass(e.current).removeClass(e.opened),d.$html.removeClass(e.opened).removeClass(e.modal).removeClass(e.background).removeClass(e.mm(a.opts.position)).removeClass(e.mm(a.opts.zposition)),a.opts.classes&&d.$html.removeClass(a.opts.classes),d.$wndw.off(f.resize).off(f.scroll),d.$page.attr("style",d.$page.data(g.style)),d.$scrollTopNode&&d.$scrollTopNode.scrollTop(d.$page.data(g.scrollTop)),a.$menu.trigger(f.closed)},this.conf.transitionDuration),d.$html.removeClass(e.opening),d.$wndw.off(f.keydown),this.$menu.trigger(f.closing),"close"},_init:function(){if(this.opts=j(this.opts,this.conf,this.$menu),this.direction=this.opts.slidingSubmenus?"horizontal":"vertical",this._initPage(d.$page),this._initMenu(),this._initBlocker(),this._initPanles(),this._initLinks(),this._initOpenClose(),this._bindCustomEvents(),a[b].addons)for(var c=0;c<a[b].addons.length;c++)"function"==typeof this["_addon_"+a[b].addons[c]]&&this["_addon_"+a[b].addons[c]]()},_bindCustomEvents:function(){var b=this;this.$menu.off(f.open+" "+f.close+" "+f.setPage).on(f.open+" "+f.close+" "+f.setPage,function(a){a.stopPropagation()}),this.$menu.on(f.open,function(c){return a(this).hasClass(e.current)?(c.stopImmediatePropagation(),!1):b.open(a(this),b.opts,b.conf)}).on(f.close,function(c){return a(this).hasClass(e.current)?b.close(a(this),b.opts,b.conf):(c.stopImmediatePropagation(),!1)}).on(f.setPage,function(a,c){b._initPage(c),b._initOpenClose()});var c=this.$menu.find(this.opts.isMenu&&"horizontal"!=this.direction?"ul":"."+e.panel);c.off(f.toggle+" "+f.open+" "+f.close).on(f.toggle+" "+f.open+" "+f.close,function(a){a.stopPropagation()}),"horizontal"==this.direction?c.on(f.open,function(){return m(a(this),b.$menu)}):c.on(f.toggle,function(){var c=a(this);return c.triggerHandler(c.parent().hasClass(e.opened)?f.close:f.open)}).on(f.open,function(){return a(this).parent().addClass(e.opened),"open"}).on(f.close,function(){return a(this).parent().removeClass(e.opened),"close"})},_initBlocker:function(){var b=this;d.$blck||(d.$blck=a('<div id="'+e.blocker+'" />').appendTo(d.$body)),p(d.$blck,function(){d.$html.hasClass(e.modal)||b.$menu.trigger(f.close)},!0,!0)},_initPage:function(c){c||(c=a(this.conf.pageSelector,d.$body),c.length>1&&(a[b].debug("Multiple nodes found for the page-node, all nodes are wrapped in one <"+this.conf.pageNodetype+">."),c=c.wrapAll("<"+this.conf.pageNodetype+" />").parent())),c.addClass(e.page),d.$page=c},_initMenu:function(){this.conf.clone&&(this.$menu=this.$menu.clone(!0),this.$menu.add(this.$menu.find("*")).filter("[id]").each(function(){a(this).attr("id",e.mm(a(this).attr("id")))})),this.$menu.contents().each(function(){3==a(this)[0].nodeType&&a(this).remove()}),this.$menu.prependTo("body").addClass(e.menu),this.$menu.addClass(e.mm(this.direction)),this.opts.classes&&this.$menu.addClass(this.opts.classes),this.opts.isMenu&&this.$menu.addClass(e.ismenu),"left"!=this.opts.position&&this.$menu.addClass(e.mm(this.opts.position)),"back"!=this.opts.zposition&&this.$menu.addClass(e.mm(this.opts.zposition))},_initPanles:function(){var b=this;this.__refactorClass(a("ul."+this.conf.listClass,this.$menu),"list"),this.opts.isMenu&&a("ul",this.$menu).not(".mm-nolist").addClass(e.list);var c=a("ul."+e.list+" > li",this.$menu);this.__refactorClass(c.filter("."+this.conf.selectedClass),"selected"),this.__refactorClass(c.filter("."+this.conf.labelClass),"label"),c.off(f.setSelected).on(f.setSelected,function(b,d){b.stopPropagation(),c.removeClass(e.selected),"boolean"!=typeof d&&(d=!0),d&&a(this).addClass(e.selected)}),this.__refactorClass(a("."+this.conf.panelClass,this.$menu),"panel"),this.$menu.children().filter(this.conf.panelNodeType).add(this.$menu.find("ul."+e.list).children().children().filter(this.conf.panelNodeType)).addClass(e.panel);var d=a("."+e.panel,this.$menu);d.each(function(c){var d=a(this),f=d.attr("id")||e.mm("m"+b.serialnr+"-p"+c);d.attr("id",f)}),d.find("."+e.panel).each(function(){var d=a(this),f=d.is("ul")?d:d.find("ul").first(),h=d.parent(),i=h.find("> a, > span"),j=h.closest("."+e.panel);if(d.data(g.parent,h),h.parent().is("ul."+e.list)){var k=a('<a class="'+e.subopen+'" href="#'+d.attr("id")+'" />').insertBefore(i);i.is("a")||k.addClass(e.fullsubopen),"horizontal"==b.direction&&f.prepend('<li class="'+e.subtitle+'"><a class="'+e.subclose+'" href="#'+j.attr("id")+'">'+i.text()+"</a></li>")}});var h="horizontal"==this.direction?f.open:f.toggle;if(d.each(function(){var d=a(this),e=d.attr("id");p(a('a[href="#'+e+'"]',b.$menu),function(){d.trigger(h)})}),"horizontal"==this.direction){var i=a("ul."+e.list+" > li."+e.selected,this.$menu);i.add(i.parents("li")).parents("li").removeClass(e.selected).end().each(function(){var b=a(this),c=b.find("> ."+e.panel);c.length&&(b.parents("."+e.panel).addClass(e.subopened),c.addClass(e.opened))}).closest("."+e.panel).addClass(e.opened).parents("."+e.panel).addClass(e.subopened)}else a("li."+e.selected,this.$menu).addClass(e.opened).parents("."+e.selected).removeClass(e.selected);var j=d.filter("."+e.opened);j.length||(j=d.first()),j.addClass(e.opened).last().addClass(e.current),"horizontal"==this.direction&&d.find("."+e.panel).appendTo(this.$menu)},_initLinks:function(){var b=this,c=a("ul."+e.list+" > li > a",this.$menu).not("."+e.subopen).not("."+e.subclose).not('[rel="external"]').not('[target="_blank"]');c.off(f.click).on(f.click,function(c){var g=a(this),h=g.attr("href");b.__valueOrFn(b.opts.onClick.setSelected,g)&&g.parent().trigger(f.setSelected);var i=b.__valueOrFn(b.opts.onClick.preventDefault,g,"#"==h.slice(0,1));i&&(c.preventDefault(),c.stopPropagation()),b.__valueOrFn(b.opts.onClick.blockUI,g,!i)&&d.$html.addClass(e.blocking),b.__valueOrFn(b.opts.onClick.close,g,i)&&b.$menu.triggerHandler(f.close)})},_initOpenClose:function(){var b=this,c=this.$menu.attr("id");c&&c.length&&(this.conf.clone&&(c=e.umm(c)),p(a('a[href="#'+c+'"]'),function(){b.$menu.trigger(f.open)}));var c=d.$page.attr("id");c&&c.length&&p(a('a[href="#'+c+'"]'),function(){b.$menu.trigger(f.close)},!1,!0)},__valueOrFn:function(a,b,c){return"function"==typeof a?a.call(b[0]):"undefined"==typeof a&&"undefined"!=typeof c?c:a},__refactorClass:function(a,b){a.removeClass(this.conf[b+"Class"]).addClass(e[b])}},a.fn[b]=function(c,e){return d.$wndw||l(),c=j(c,e),e=k(e),this.each(function(){var d=a(this);d.data(b)||d.data(b,new a[b](d,c,e))})},a[b].version=c,a[b].defaults={position:"left",zposition:"back",moveBackground:!0,slidingSubmenus:!0,modal:!1,classes:"",onClick:{setSelected:!0}},a[b].configuration={preventTabbing:!0,panelClass:"Panel",listClass:"List",selectedClass:"Selected",labelClass:"Label",pageNodetype:"div",panelNodeType:"ul, div",transitionDuration:400},function(){var c=window.document,d=window.navigator.userAgent,e="ontouchstart"in c,f="WebkitOverflowScrolling"in c.documentElement.style,g=function(){var a=document.createElement("div").style;return"webkitTransition"in a?"webkitTransition":"transition"in a}(),h=function(){return d.indexOf("Android")>=0?2.4>parseFloat(d.slice(d.indexOf("Android")+8)):!1}();a[b].support={touch:e,transition:g,oldAndroidBrowser:h,overflowscrolling:function(){return e?f?!0:h?!1:!0:!0}()}}(),a[b].useOverflowScrollingFallback=function(a){return d.$html?("boolean"==typeof a&&d.$html[a?"addClass":"removeClass"](e.nooverflowscrolling),d.$html.hasClass(e.nooverflowscrolling)):(i=a,a)},a[b].debug=function(){},a[b].deprecated=function(a,b){"undefined"!=typeof console&&"undefined"!=typeof console.warn&&console.warn("MMENU: "+a+" is deprecated, use "+b+" instead.")};var i=!a[b].support.overflowscrolling}}(jQuery);
/*	
 * jQuery mmenu counters addon
 */
!function(a){var b="mmenu",c="counters";a[b].prototype["_addon_"+c]=function(){var e=this.opts[c],f=a[b]._c,g=a[b]._d,h=a[b]._e;f.add("counter noresults"),h.add("update"),"boolean"==typeof e&&(e={add:e,update:e}),"object"!=typeof e&&(e={}),e=a.extend(!0,{},a[b].defaults[c],e),e.count&&(a[b].deprecated('the option "count" for counters, the option "update"'),e.update=e.count),this.__refactorClass(a("em."+this.conf.counterClass,this.$menu),"counter"),e.add&&a("."+f.panel,this.$menu).each(function(){var b=a(this),c=b.data(g.parent);if(c){var d=a('<em class="'+f.counter+'" />'),e=c.find("> a."+f.subopen);e.parent().find("em."+f.counter).length||e.before(d)}}),e.update&&a("em."+f.counter,this.$menu).each(function(){var b=a(this),c=a(b.next().attr("href"),this.$menu);c.is("."+f.list)||(c=c.find("> ."+f.list)),c.length&&b.off(h.update).on(h.update,function(a){a.stopPropagation();var d=c.children().not("."+f.label).not("."+f.subtitle).not("."+f.hidden).not("."+f.noresults);b.html(d.length)})}).trigger(h.update)},a[b].defaults[c]={add:!1,update:!1},a[b].configuration.counterClass="Counter",a[b].addons=a[b].addons||[],a[b].addons.push(c)}(jQuery);
/*	
 * jQuery mmenu dragOpen addon
 */
!function(a){function d(a,b,c){return b>a&&(a=b),a>c&&(a=c),a}var b="mmenu",c="dragOpen";a[b].prototype["_addon_"+c]=function(){var e=this,f=this.opts[c];if(a.fn.hammer){var g=a[b]._c,i=(a[b]._d,a[b]._e);g.add("dragging"),i.add("dragleft dragright dragup dragdown dragend");var j=a[b].glbl;if("boolean"==typeof f&&(f={open:f}),"object"!=typeof f&&(f={}),"number"!=typeof f.maxStartPos&&(f.maxStartPos="left"==this.opts.position||"right"==this.opts.position?150:50),f=a.extend(!0,{},a[b].defaults[c],f),f.open){var k=0,l=!1,m=0,n=0,o="width";switch(this.opts.position){case"left":case"right":o="width";break;default:o="height"}switch(this.opts.position){case"left":var p={events:i.dragleft+" "+i.dragright,open_dir:"right",close_dir:"left",delta:"deltaX",page:"pageX",negative:!1};break;case"right":var p={events:i.dragleft+" "+i.dragright,open_dir:"left",close_dir:"right",delta:"deltaX",page:"pageX",negative:!0};break;case"top":var p={events:i.dragup+" "+i.dragdown,open_dir:"down",close_dir:"up",delta:"deltaY",page:"pageY",negative:!1};break;case"bottom":var p={events:i.dragup+" "+i.dragdown,open_dir:"up",close_dir:"down",delta:"deltaY",page:"pageY",negative:!0}}$dragNode=this.__valueOrFn(f.pageNode,this.$menu,j.$page),"string"==typeof $dragNode&&($dragNode=a($dragNode)),$dragNode.hammer().on(i.touchstart,function(a){switch(e.opts.position){case"right":case"bottom":a[p.page]>=j.$wndw[o]()-f.maxStartPos&&(k=1);break;default:a[p.page]<=f.maxStartPos&&(k=1)}}).on(p.events+" "+i.dragend,function(a){k>0&&(a.gesture.preventDefault(),a.stopPropagation())}).on(p.events,function(a){var b=p.negative?-a.gesture[p.delta]:a.gesture[p.delta];if(l=b>m?p.open_dir:p.close_dir,m=b,m>f.threshold&&1==k){if(j.$html.hasClass(g.opened))return;k=2,e._openSetup(),j.$html.addClass(g.dragging),n=d(j.$wndw[o]()*e.conf[c][o].perc,e.conf[c][o].min,e.conf[c][o].max)}if(2==k){var h=j.$page;switch(e.opts.zposition){case"front":h=e.$menu;break;case"next":h=h.add(e.$menu)}h.css(e.opts.position,d(m,10,n))}}).on(i.dragend,function(){if(2==k){var b=j.$page;switch(e.opts.zposition){case"front":b=e.$menu;break;case"next":b=b.add(e.$menu)}j.$html.removeClass(g.dragging),b.css(e.opts.position,""),l==p.open_dir?e._openFinish():e.close()}k=0})}}},a[b].defaults[c]={open:!1,threshold:50},a[b].configuration[c]={width:{perc:.8,min:140,max:440},height:{perc:.8,min:140,max:880}},a[b].addons=a[b].addons||[],a[b].addons.push(c)}(jQuery);
/*	
 * jQuery mmenu header addon
 */

!function(a){var b="mmenu",c="header";a[b].prototype["_addon_"+c]=function(){var d=this,e=this.opts[c],f=this.conf[c];if("horizontal"==this.direction){var g=a[b]._c,i=(a[b]._d,a[b]._e);g.add("header hasheader prev next"),i.add("setheader");var j=a[b].glbl;"boolean"==typeof e&&(e={add:e,update:e}),"object"!=typeof e&&(e={}),e=a.extend(!0,{},a[b].defaults[c],e),e.add&&a('<div class="'+g.header+'" />').prependTo(this.$menu).append('<a class="'+g.prev+'" href="#"></a>').append("<span></span>").append('<a class="'+g.next+'" href="#"></a>');var k=a("div."+g.header,this.$menu);if(k.length&&this.$menu.addClass(g.hasheader),e.update&&k.length){var l=k.find("span"),m=k.find("."+g.prev),n=k.find("."+g.next),o="#"+j.$page.attr("id");m.add(n).on(i.click,function(b){b.preventDefault(),b.stopPropagation();var c=a(this).attr("href");"#"!==c&&(c==o?d.$menu.trigger(i.close):a(c,d.$menu).trigger(i.open))}),a("."+g.panel,this.$menu).each(function(){var b=a(this),c=a("."+f.panelHeaderClass,b).text(),d=a("."+f.panelPrevClass,b).attr("href"),h=a("."+f.panelNextClass,b).attr("href");c||(c=a("."+g.subclose,b).text()),c||(c=e.title),d||(d=a("."+g.subclose,b).attr("href")),b.off(i.setheader).on(i.setheader,function(a){a.stopPropagation(),l[c?"show":"hide"]().text(c),m[d?"show":"hide"]().attr("href",d),n[h?"show":"hide"]().attr("href",h)}),b.on(i.open,function(){a(this).trigger(i.setheader)})}).filter("."+g.current).trigger(i.setheader)}}},a[b].defaults[c]={add:!1,update:!1,title:"Menu"},a[b].configuration[c]={panelHeaderClass:"Header",panelNextClass:"Next",panelPrevClass:"Prev"},a[b].addons=a[b].addons||[],a[b].addons.push(c)}(jQuery);
/*	
 * jQuery mmenu searchfield addon
 */

!function(a){function d(a){switch(a){case 9:case 16:case 17:case 18:case 37:case 38:case 39:case 40:return!0}return!1}var b="mmenu",c="searchfield";a[b].prototype["_addon_"+c]=function(){var e=this,f=this.opts[c],g=a[b]._c,h=a[b]._d,i=a[b]._e;if(g.add("search hassearch noresults nosubresults counter"),i.add("search reset keyup change update"),"boolean"==typeof f&&(f={add:f,search:f}),"object"!=typeof f&&(f={}),f=a.extend(!0,{},a[b].defaults[c],f),f.add&&(a('<div class="'+g.search+'" />').prependTo(this.$menu).append('<input placeholder="'+f.placeholder+'" type="text" autocomplete="off" />'),f.noResults&&a("ul",this.$menu).first().append('<li class="'+g.noresults+'">'+f.noResults+"</li>")),a("div."+g.search,this.$menu).length&&this.$menu.addClass(g.hassearch),f.search){var j=a("div."+g.search,this.$menu).find("input");if(j.length){var k=a("ul."+g.list+"> li."+g.label,this.$menu),l=a("ul."+g.list+"> li",this.$menu).not("."+g.subtitle).not("."+g.label).not("."+g.noresults),m="> a";f.showLinksOnly||(m+=", > span"),j.on(i.keyup,function(a){d(a.keyCode)||e.$menu.trigger(i.search)}).on(i.change,function(){e.$menu.trigger(i.search)}),this.$menu.on(i.reset+" "+i.search,function(a){a.stopPropagation()}).on(i.reset,function(){e.$menu.trigger(i.search,[""])}).on(i.search,function(b,c){"string"==typeof c?j.val(c):c=j.val(),c=c.toLowerCase(),l.add(k).addClass(g.hidden),l.each(function(){var b=a(this);a(m,b).text().toLowerCase().indexOf(c)>-1&&b.add(b.prevAll("."+g.label).first()).removeClass(g.hidden)}),a(a("."+g.panel,e.$menu).get().reverse()).each(function(){var b=a(this),c=b.data(h.parent);if(c){var d=b.add(b.find("> ."+g.list)).find("> li").not("."+g.subtitle).not("."+g.label).not("."+g.hidden);d.length?c.removeClass(g.hidden).removeClass(g.nosubresults).prevAll("."+g.label).first().removeClass(g.hidden):(b.hasClass(g.current)&&c.trigger(i.open),c.addClass(g.nosubresults))}}),e.$menu[l.not("."+g.hidden).length?"removeClass":"addClass"](g.noresults),a("em."+g.counter,e.$menu).trigger(i.update)})}}},a[b].defaults[c]={add:!1,search:!1,showLinksOnly:!0,placeholder:"Search",noResults:"No results found."},a[b].addons=a[b].addons||[],a[b].addons.push(c)}(jQuery);
//Style Sheet Switcher version 1.1 Oct 10th, 2006
//Author: Dynamic Drive: http://www.dynamicdrive.com
//Usage terms: http://www.dynamicdrive.com/notice.htm

var manual_or_random="manual" //"manual" or "random"
var randomsetting="3 days" //"eachtime", "sessiononly", or "x days (replace x with desired integer)". Only applicable if mode is random.

//////No need to edit beyond here//////////////

function getCookie(Name) { 
var re=new RegExp(Name+"=[^;]+", "i"); //construct RE to search for target name/value pair
if (document.cookie.match(re)) //if cookie found
return document.cookie.match(re)[0].split("=")[1] //return its value
return null
}

function setCookie(name, value, days) {
var expireDate = new Date()
//set "expstring" to either future or past date, to set or delete cookie, respectively
var expstring=(typeof days!="undefined")? expireDate.setDate(expireDate.getDate()+parseInt(days)) : expireDate.setDate(expireDate.getDate()-5)
document.cookie = name+"="+value+"; expires="+expireDate.toGMTString()+"; path=/";
}

function deleteCookie(name){
setCookie(name, "moot")
}


function setStylesheet(title, randomize){ //Main stylesheet switcher function. Second parameter if defined causes a random alternate stylesheet (including none) to be enabled
var i, cacheobj, altsheets=[""]
for(i=0; (cacheobj=document.getElementsByTagName("link")[i]); i++) {
if(cacheobj.getAttribute("rel").toLowerCase()=="alternate stylesheet" && cacheobj.getAttribute("title")) { //if this is an alternate stylesheet with title
cacheobj.disabled = true
altsheets.push(cacheobj) //store reference to alt stylesheets inside array
if(cacheobj.getAttribute("title") == title) //enable alternate stylesheet with title that matches parameter
cacheobj.disabled = false //enable chosen style sheet
}
}
if (typeof randomize!="undefined"){ //if second paramter is defined, randomly enable an alt style sheet (includes non)
var randomnumber=Math.floor(Math.random()*altsheets.length)
altsheets[randomnumber].disabled=false
}
return (typeof randomize!="undefined" && altsheets[randomnumber]!="")? altsheets[randomnumber].getAttribute("title") : "" //if in "random" mode, return "title" of randomly enabled alt stylesheet
}

function chooseStyle(styletitle, days){ //Interface function to switch style sheets plus save "title" attr of selected stylesheet to cookie
if (document.getElementById){
setStylesheet(styletitle)
setCookie("mysheet", styletitle, days)
}
}

function indicateSelected(element){ //Optional function that shows which style sheet is currently selected within group of radio buttons or select menu
if (selectedtitle!=null && (element.type==undefined || element.type=="select-one")){ //if element is a radio button or select menu
var element=(element.type=="select-one") ? element.options : element
for (var i=0; i<element.length; i++){
if (element[i].value==selectedtitle){ //if match found between form element value and cookie value
if (element[i].tagName=="OPTION") //if this is a select menu
element[i].selected=true
else //else if it's a radio button
element[i].checked=true
break
}
}
}
}

if (manual_or_random=="manual"){ //IF MANUAL MODE
var selectedtitle=getCookie("mysheet")
if (document.getElementById && selectedtitle!=null) //load user chosen style sheet from cookie if there is one stored
setStylesheet(selectedtitle)
}
else if (manual_or_random=="random"){ //IF AUTO RANDOM MODE
if (randomsetting=="eachtime")
setStylesheet("", "random")
else if (randomsetting=="sessiononly"){ //if "sessiononly" setting
if (getCookie("mysheet_s")==null) //if "mysheet_s" session cookie is empty
document.cookie="mysheet_s="+setStylesheet("", "random")+"; path=/" //activate random alt stylesheet while remembering its "title" value
else
setStylesheet(getCookie("mysheet_s")) //just activate random alt stylesheet stored in cookie
}
else if (randomsetting.search(/^[1-9]+ days/i)!=-1){ //if "x days" setting
if (getCookie("mysheet_r")==null || parseInt(getCookie("mysheet_r_days"))!=parseInt(randomsetting)){ //if "mysheet_r" cookie is empty or admin has changed number of days to persist in "x days" variable
setCookie("mysheet_r", setStylesheet("", "random"), parseInt(randomsetting)) //activate random alt stylesheet while remembering its "title" value
setCookie("mysheet_r_days", randomsetting, parseInt(randomsetting)) //Also remember the number of days to persist per the "x days" variable
}
else
setStylesheet(getCookie("mysheet_r")) //just activate random alt stylesheet stored in cookie
} 
}
 /* 
 Textarea Elastic (Autosize) 
 http://www.jacklmoore.com/autosize
 */
(function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(window.jQuery||window.$)})(function(e){var t,o={className:"autosizejs",append:"",callback:!1,resizeDelay:10},i='<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>',n=["fontFamily","fontSize","fontWeight","fontStyle","letterSpacing","textTransform","wordSpacing","textIndent"],s=e(i).data("autosize",!0)[0];s.style.lineHeight="99px","99px"===e(s).css("lineHeight")&&n.push("lineHeight"),s.style.lineHeight="",e.fn.autosize=function(i){return this.length?(i=e.extend({},o,i||{}),s.parentNode!==document.body&&e(document.body).append(s),this.each(function(){function o(){var t,o;"getComputedStyle"in window?(t=window.getComputedStyle(u),o=u.getBoundingClientRect().width,e.each(["paddingLeft","paddingRight","borderLeftWidth","borderRightWidth"],function(e,i){o-=parseInt(t[i],10)}),s.style.width=o+"px"):s.style.width=Math.max(p.width(),0)+"px"}function a(){var a={};if(t=u,s.className=i.className,d=parseInt(p.css("maxHeight"),10),e.each(n,function(e,t){a[t]=p.css(t)}),e(s).css(a),o(),window.chrome){var r=u.style.width;u.style.width="0px",u.offsetWidth,u.style.width=r}}function r(){var e,n;t!==u?a():o(),s.value=u.value+i.append,s.style.overflowY=u.style.overflowY,n=parseInt(u.style.height,10),s.scrollTop=0,s.scrollTop=9e4,e=s.scrollTop,d&&e>d?(u.style.overflowY="scroll",e=d):(u.style.overflowY="hidden",c>e&&(e=c)),e+=f,n!==e&&(u.style.height=e+"px",w&&i.callback.call(u,u))}function l(){clearTimeout(h),h=setTimeout(function(){var e=p.width();e!==g&&(g=e,r())},parseInt(i.resizeDelay,10))}var d,c,h,u=this,p=e(u),f=0,w=e.isFunction(i.callback),z={height:u.style.height,overflow:u.style.overflow,overflowY:u.style.overflowY,wordWrap:u.style.wordWrap,resize:u.style.resize},g=p.width();p.data("autosize")||(p.data("autosize",!0),("border-box"===p.css("box-sizing")||"border-box"===p.css("-moz-box-sizing")||"border-box"===p.css("-webkit-box-sizing"))&&(f=p.outerHeight()-p.height()),c=Math.max(parseInt(p.css("minHeight"),10)-f||0,p.height()),p.css({overflow:"hidden",overflowY:"hidden",wordWrap:"break-word",resize:"none"===p.css("resize")||"vertical"===p.css("resize")?"none":"horizontal"}),"onpropertychange"in u?"oninput"in u?p.on("input.autosize keyup.autosize",r):p.on("propertychange.autosize",function(){"value"===event.propertyName&&r()}):p.on("input.autosize",r),i.resizeDelay!==!1&&e(window).on("resize.autosize",l),p.on("autosize.resize",r),p.on("autosize.resizeIncludeStyle",function(){t=null,r()}),p.on("autosize.destroy",function(){t=null,clearTimeout(h),e(window).off("resize",l),p.off("autosize").off(".autosize").css(z).removeData("autosize")}),r())})):this}});

(function($){
    $.fn.limit  = function(options) {
        var defaults = {
        limit: 140, result:true , 
	   autosize: true,
        text_result: 'Limit <strong> %C </strong>',
	   alert_remaining: 5,
        alertClass: 'limited'
        }
        var options = $.extend(defaults,  options);
        return this.each(function() {
            var characters = options.limit , wrapper=$('<div class="cl-textlimit" />') ,result_class=$('<div class="cl-textlimit-result" />');
            $(this).replaceWith(wrapper);
		  wrapper.append(this);
		   if(options.result) {  wrapper.append( result_class.append(options.text_result.replace('%C',characters)) ); }
             if(options.autosize){ wrapper.find('textarea').autosize(); }
            $(this).keyup(function(){
                if($(this).val().length > characters){
                    $(this).val($(this).val().substr(0, characters));
                }
                if(options.result != false) {
                    var remaining =  characters - $(this).val().length;
                    $('.cl-textlimit-result').html(options.text_result.replace('%C',remaining));
                    if(remaining <= options.alert_remaining) {
                      wrapper.find('textarea').addClass(options.alertClass);
				  result_class.addClass(options.alertClass);
                    } else{
                       wrapper.find('textarea').removeClass(options.alertClass);
				   result_class.removeClass(options.alertClass);
                    }
                }
			 
            });
        });
    };
})(jQuery);


/**
 *  Markdown
 **/
// Released under MIT license
// Copyright (c) 2009-2010 Dominic Baggott
// Copyright (c) 2009-2010 Ash Berlin
// Copyright (c) 2011 Christoph Dorn <christoph@christophdorn.com> (http://www.christophdorn.com)

!function(e){function t(){return"Markdown.mk_block( "+uneval(this.toString())+", "+uneval(this.trailing)+", "+uneval(this.lineNumber)+" )"}function r(){var e=require("util");return"Markdown.mk_block( "+e.inspect(this.toString())+", "+e.inspect(this.trailing)+", "+e.inspect(this.lineNumber)+" )"}function n(e){for(var t=0,r=-1;-1!==(r=e.indexOf("\n",r+1));)t++;return t}function i(e,t){function r(e){this.len_after=e,this.name="close_"+t}var n=e+"_state",i="strong"==e?"em_state":"strong_state";return function(l){if(this[n][0]==t)return this[n].shift(),[l.length,new r(l.length-t.length)];var a=this[i].slice(),s=this[n].slice();this[n].unshift(t);{var o=this.processInline(l.substr(t.length)),c=o[o.length-1];this[n].shift()}if(c instanceof r){o.pop();var u=l.length-c.len_after;return[u,[e].concat(o)]}return this[i]=a,this[n]=s,[t.length,t]}}function l(e){for(var t=e.split(""),r=[""],n=!1;t.length;){var i=t.shift();switch(i){case" ":n?r[r.length-1]+=i:r.push("");break;case"'":case'"':n=!n;break;case"\\":i=t.shift();default:r[r.length-1]+=i}}return r}function s(e){return d(e)&&e.length>1&&"object"==typeof e[1]&&!d(e[1])?e[1]:void 0}function o(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function c(e){if("string"==typeof e)return o(e);var t=e.shift(),r={},n=[];for(!e.length||"object"!=typeof e[0]||e[0]instanceof Array||(r=e.shift());e.length;)n.push(arguments.callee(e.shift()));var i="";for(var l in r)i+=" "+l+'="'+o(r[l])+'"';return"img"==t||"br"==t||"hr"==t?"<"+t+i+"/>":"<"+t+i+">"+n.join("")+"</"+t+">"}function u(e,t,r){var n;r=r||{};var i=e.slice(0);"function"==typeof r.preprocessTreeNode&&(i=r.preprocessTreeNode(i,t));var l=s(i);if(l){i[1]={};for(n in l)i[1][n]=l[n];l=i[1]}if("string"==typeof i)return i;switch(i[0]){case"header":i[0]="h"+i[1].level,delete i[1].level;break;case"bulletlist":i[0]="ul";break;case"numberlist":i[0]="ol";break;case"listitem":i[0]="li";break;case"para":i[0]="p";break;case"markdown":i[0]="html",l&&delete l.references;break;case"code_block":i[0]="pre",n=l?2:1;var a=["code"];a.push.apply(a,i.splice(n)),i[n]=a;break;case"inlinecode":i[0]="code";break;case"img":i[1].src=i[1].href,delete i[1].href;break;case"linebreak":i[0]="br";break;case"link":i[0]="a";break;case"link_ref":i[0]="a";var o=t[l.ref];if(!o)return l.original;delete l.ref,l.href=o.href,o.title&&(l.title=o.title),delete l.original;break;case"img_ref":i[0]="img";var o=t[l.ref];if(!o)return l.original;delete l.ref,l.src=o.href,o.title&&(l.title=o.title),delete l.original}if(n=1,l){for(var c in i[1])n=2;1===n&&i.splice(n,1)}for(;n<i.length;++n)i[n]=arguments.callee(i[n],t,r);return i}function h(e){for(var t=s(e)?2:1;t<e.length;)"string"==typeof e[t]?t+1<e.length&&"string"==typeof e[t+1]?e[t]+=e.splice(t+1,1)[0]:++t:(arguments.callee(e[t]),++t)}var f=e.Markdown=function _(e){switch(typeof e){case"undefined":this.dialect=_.dialects.Gruber;break;case"object":this.dialect=e;break;default:if(!(e in _.dialects))throw new Error("Unknown Markdown dialect '"+String(e)+"'");this.dialect=_.dialects[e]}this.em_state=[],this.strong_state=[],this.debug_indent=""};e.parse=function(e,t){var r=new f(t);return r.toTree(e)},e.toHTML=function(t,r,n){var i=e.toHTMLTree(t,r,n);return e.renderJsonML(i)},e.toHTMLTree=function(e,t,r){"string"==typeof e&&(e=this.parse(e,t));var n=s(e),i={};n&&n.references&&(i=n.references);var l=u(e,i,r);return h(l),l};var g=f.mk_block=function(e,n,i){1==arguments.length&&(n="\n\n");var l=new String(e);return l.trailing=n,l.inspect=r,l.toSource=t,void 0!=i&&(l.lineNumber=i),l};f.prototype.split_blocks=function(e){var t,r=/([\s\S]+?)($|\n(?:\s*\n|$)+)/g,i=[],l=1;for(null!=(t=/^(\s*\n)/.exec(e))&&(l+=n(t[0]),r.lastIndex=t[0].length);null!==(t=r.exec(e));)i.push(g(t[1],t[2],l)),l+=n(t[0]);return i},f.prototype.processBlock=function(e,t){var r=this.dialect.block,n=r.__order__;if("__call__"in r)return r.__call__.call(this,e,t);for(var i=0;i<n.length;i++){var l=r[n[i]].call(this,e,t);if(l)return(!d(l)||l.length>0&&!d(l[0]))&&this.debug(n[i],"didn't return a proper array"),l}return[]},f.prototype.processInline=function(e){return this.dialect.inline.__call__.call(this,String(e))},f.prototype.toTree=function(e,t){var r=e instanceof Array?e:this.split_blocks(e),n=this.tree;try{for(this.tree=t||this.tree||["markdown"];r.length;){var i=this.processBlock(r.shift(),r);i.length&&this.tree.push.apply(this.tree,i)}return this.tree}finally{t&&(this.tree=n)}},f.prototype.debug=function(){var e=Array.prototype.slice.call(arguments);e.unshift(this.debug_indent),"undefined"!=typeof print&&print.apply(print,e),"undefined"!=typeof console&&"undefined"!=typeof console.log&&console.log.apply(null,e)},f.prototype.loop_re_over_block=function(e,t,r){for(var n,i=t.valueOf();i.length&&null!=(n=e.exec(i));)i=i.substr(n[0].length),r.call(this,n);return i},f.dialects={},f.dialects.Gruber={block:{atxHeader:function(e,t){var r=e.match(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/);if(!r)return void 0;var n=["header",{level:r[1].length}];return Array.prototype.push.apply(n,this.processInline(r[2])),r[0].length<e.length&&t.unshift(g(e.substr(r[0].length),e.trailing,e.lineNumber+2)),[n]},setextHeader:function(e,t){var r=e.match(/^(.*)\n([-=])\2\2+(?:\n|$)/);if(!r)return void 0;var n="="===r[2]?1:2,i=["header",{level:n},r[1]];return r[0].length<e.length&&t.unshift(g(e.substr(r[0].length),e.trailing,e.lineNumber+2)),[i]},code:function(e,t){var r=[],n=/^(?: {0,3}\t| {4})(.*)\n?/;if(!e.match(n))return void 0;e:for(;;){var i=this.loop_re_over_block(n,e.valueOf(),function(e){r.push(e[1])});if(i.length){t.unshift(g(i,e.trailing));break e}if(!t.length)break e;if(!t[0].match(n))break e;r.push(e.trailing.replace(/[^\n]/g,"").substring(2)),e=t.shift()}return[["code_block",r.join("\n")]]},horizRule:function(e,t){var r=e.match(/^(?:([\s\S]*?)\n)?[ \t]*([-_*])(?:[ \t]*\2){2,}[ \t]*(?:\n([\s\S]*))?$/);if(!r)return void 0;var n=[["hr"]];return r[1]&&n.unshift.apply(n,this.processBlock(r[1],[])),r[3]&&t.unshift(g(r[3])),n},lists:function(){function e(e){return new RegExp("(?:^("+o+"{0,"+e+"} {0,3})("+l+")\\s+)|(^"+o+"{0,"+(e-1)+"}[ ]{0,4})")}function t(e){return e.replace(/ {0,3}\t/g,"    ")}function r(e,t,r,n){if(t)return e.push(["para"].concat(r)),void 0;var i=e[e.length-1]instanceof Array&&"para"==e[e.length-1][0]?e[e.length-1]:e;n&&e.length>1&&r.unshift(n);for(var l=0;l<r.length;l++){var a=r[l],s="string"==typeof a;s&&i.length>1&&"string"==typeof i[i.length-1]?i[i.length-1]+=a:i.push(a)}}function n(e,t){for(var r=new RegExp("^("+o+"{"+e+"}.*?\\n?)*$"),n=new RegExp("^"+o+"{"+e+"}","gm"),i=[];t.length>0;){if(r.exec(t[0])){var l=t.shift(),a=l.replace(n,"");i.push(g(a,l.trailing,l.lineNumber))}break}return i}function i(e,t,r){var n=e.list,i=n[n.length-1];if(!(i[1]instanceof Array&&"para"==i[1][0]))if(t+1==r.length)i.push(["para"].concat(i.splice(1)));else{var l=i.pop();i.push(["para"].concat(i.splice(1)),l)}}var l="[*+-]|\\d+\\.",a=/[*+-]/,s=new RegExp("^( {0,3})("+l+")[ 	]+"),o="(?: {0,3}\\t| {4})";return function(l,o){function c(e){var t=a.exec(e[2])?["bulletlist"]:["numberlist"];return p.push({list:t,indent:e[1]}),t}var u=l.match(s);if(!u)return void 0;for(var h,f,p=[],g=c(u),d=!1,_=[p[0].list];;){for(var b=l.split(/(?=\n)/),k="",m=0;m<b.length;m++){var y="",w=b[m].replace(/^\n/,function(e){return y=e,""}),M=e(p.length);if(u=w.match(M),void 0!==u[1]){k.length&&(r(h,d,this.processInline(k),y),d=!1,k=""),u[1]=t(u[1]);var x=Math.floor(u[1].length/4)+1;if(x>p.length)g=c(u),h.push(g),h=g[1]=["listitem"];else{var S=!1;for(f=0;f<p.length;f++)if(p[f].indent==u[1]){g=p[f].list,p.splice(f+1),S=!0;break}S||(x++,x<=p.length?(p.splice(x),g=p[x-1].list):(g=c(u),h.push(g))),h=["listitem"],g.push(h)}y=""}w.length>u[0].length&&(k+=y+w.substr(u[0].length))}k.length&&(r(h,d,this.processInline(k),y),d=!1,k="");var $=n(p.length,o);$.length>0&&(v(p,i,this),h.push.apply(h,this.toTree($,[])));var j=o[0]&&o[0].valueOf()||"";if(!j.match(s)&&!j.match(/^ /))break;l=o.shift();var A=this.dialect.block.horizRule(l,o);if(A){_.push.apply(_,A);break}v(p,i,this),d=!0}return _}}(),blockquote:function(e,t){if(!e.match(/^>/m))return void 0;var r=[];if(">"!=e[0]){for(var n=e.split(/\n/),i=[];n.length&&">"!=n[0][0];)i.push(n.shift());e=n.join("\n"),r.push.apply(r,this.processBlock(i.join("\n"),[]))}for(;t.length&&">"==t[0][0];){var l=t.shift();e=new String(e+e.trailing+l),e.trailing=l.trailing}{var a=e.replace(/^> ?/gm,"");this.tree}return r.push(this.toTree(a,["blockquote"])),r},referenceDefn:function(e,t){var r=/^\s*\[(.*?)\]:\s*(\S+)(?:\s+(?:(['"])(.*?)\3|\((.*?)\)))?\n?/;if(!e.match(r))return void 0;s(this.tree)||this.tree.splice(1,0,{});var n=s(this.tree);void 0===n.references&&(n.references={});var i=this.loop_re_over_block(r,e,function(e){e[2]&&"<"==e[2][0]&&">"==e[2][e[2].length-1]&&(e[2]=e[2].substring(1,e[2].length-1));var t=n.references[e[1].toLowerCase()]={href:e[2]};void 0!==e[4]?t.title=e[4]:void 0!==e[5]&&(t.title=e[5])});return i.length&&t.unshift(g(i,e.trailing)),[]},para:function(e){return[["para"].concat(this.processInline(e))]}}},f.dialects.Gruber.inline={__oneElement__:function(e,t,r){var n,i;t=t||this.dialect.inline.__patterns__;var l=new RegExp("([\\s\\S]*?)("+(t.source||t)+")");if(n=l.exec(e),!n)return[e.length,e];if(n[1])return[n[1].length,n[1]];var i;return n[2]in this.dialect.inline&&(i=this.dialect.inline[n[2]].call(this,e.substr(n.index),n,r||[])),i=i||[n[2].length,n[2]]},__call__:function(e,t){function r(e){"string"==typeof e&&"string"==typeof i[i.length-1]?i[i.length-1]+=e:i.push(e)}for(var n,i=[];e.length>0;)n=this.dialect.inline.__oneElement__.call(this,e,t,i),e=e.substr(n.shift()),v(n,r);return i},"]":function(){},"}":function(){},"\\":function(e){return e.match(/^\\[\\`\*_{}\[\]()#\+.!\-]/)?[2,e[1]]:[1,"\\"]},"![":function(e){var t=e.match(/^!\[(.*?)\][ \t]*\([ \t]*(\S*)(?:[ \t]+(["'])(.*?)\3)?[ \t]*\)/);if(t){t[2]&&"<"==t[2][0]&&">"==t[2][t[2].length-1]&&(t[2]=t[2].substring(1,t[2].length-1)),t[2]=this.dialect.inline.__call__.call(this,t[2],/\\/)[0];var r={alt:t[1],href:t[2]||""};return void 0!==t[4]&&(r.title=t[4]),[t[0].length,["img",r]]}return t=e.match(/^!\[(.*?)\][ \t]*\[(.*?)\]/),t?[t[0].length,["img_ref",{alt:t[1],ref:t[2].toLowerCase(),original:t[0]}]]:[2,"!["]},"[":function b(e){var t=String(e),r=f.DialectHelpers.inline_until_char.call(this,e.substr(1),"]");if(!r)return[1,"["];var b,n,i=1+r[0],l=r[1];e=e.substr(i);var a=e.match(/^\s*\([ \t]*(\S+)(?:[ \t]+(["'])(.*?)\2)?[ \t]*\)/);if(a){var s=a[1];if(i+=a[0].length,s&&"<"==s[0]&&">"==s[s.length-1]&&(s=s.substring(1,s.length-1)),!a[3])for(var o=1,c=0;c<s.length;c++)switch(s[c]){case"(":o++;break;case")":0==--o&&(i-=s.length-c,s=s.substring(0,c))}return s=this.dialect.inline.__call__.call(this,s,/\\/)[0],n={href:s||""},void 0!==a[3]&&(n.title=a[3]),b=["link",n].concat(l),[i,b]}return a=e.match(/^\s*\[(.*?)\]/),a?(i+=a[0].length,n={ref:(a[1]||String(l)).toLowerCase(),original:t.substr(0,i)},b=["link_ref",n].concat(l),[i,b]):1==l.length&&"string"==typeof l[0]?(n={ref:l[0].toLowerCase(),original:t.substr(0,i)},b=["link_ref",n,l[0]],[i,b]):[1,"["]},"<":function(e){var t;return null!=(t=e.match(/^<(?:((https?|ftp|mailto):[^>]+)|(.*?@.*?\.[a-zA-Z]+))>/))?t[3]?[t[0].length,["link",{href:"mailto:"+t[3]},t[3]]]:"mailto"==t[2]?[t[0].length,["link",{href:t[1]},t[1].substr("mailto:".length)]]:[t[0].length,["link",{href:t[1]},t[1]]]:[1,"<"]},"`":function(e){var t=e.match(/(`+)(([\s\S]*?)\1)/);return t&&t[2]?[t[1].length+t[2].length,["inlinecode",t[3]]]:[1,"`"]},"  \n":function(){return[3,["linebreak"]]}},f.dialects.Gruber.inline["**"]=i("strong","**"),f.dialects.Gruber.inline.__=i("strong","__"),f.dialects.Gruber.inline["*"]=i("em","*"),f.dialects.Gruber.inline._=i("em","_"),f.buildBlockOrder=function(e){var t=[];for(var r in e)"__order__"!=r&&"__call__"!=r&&t.push(r);e.__order__=t},f.buildInlinePatterns=function(e){var t=[];for(var r in e)if(!r.match(/^__.*__$/)){var n=r.replace(/([\\.*+?|()\[\]{}])/g,"\\$1").replace(/\n/,"\\n");t.push(1==r.length?n:"(?:"+n+")")}t=t.join("|"),e.__patterns__=t;var i=e.__call__;e.__call__=function(e,r){return void 0!=r?i.call(this,e,r):i.call(this,e,t)}},f.DialectHelpers={},f.DialectHelpers.inline_until_char=function(e,t){for(var r=0,n=[];;){if(e[r]==t)return r++,[r,n];if(r>=e.length)return null;var i=this.dialect.inline.__oneElement__.call(this,e.substr(r));r+=i[0],n.push.apply(n,i.slice(1))}},f.subclassDialect=function(e){function t(){}function r(){}return t.prototype=e.block,r.prototype=e.inline,{block:new t,inline:new r}},f.buildBlockOrder(f.dialects.Gruber.block),f.buildInlinePatterns(f.dialects.Gruber.inline),f.dialects.Maruku=f.subclassDialect(f.dialects.Gruber),f.dialects.Maruku.processMetaHash=function(e){for(var t=l(e),r={},n=0;n<t.length;++n)if(/^#/.test(t[n]))r.id=t[n].substring(1);else if(/^\./.test(t[n]))r["class"]=r["class"]?r["class"]+t[n].replace(/./," "):t[n].substring(1);else if(/\=/.test(t[n])){var i=t[n].split(/\=/);r[i[0]]=i[1]}return r},f.dialects.Maruku.block.document_meta=function(e){if(e.lineNumber>1)return void 0;if(!e.match(/^(?:\w+:.*\n)*\w+:.*$/))return void 0;s(this.tree)||this.tree.splice(1,0,{});var t=e.split(/\n/);for(p in t){var r=t[p].match(/(\w+):\s*(.*)$/),n=r[1].toLowerCase(),i=r[2];this.tree[1][n]=i}return[]},f.dialects.Maruku.block.block_meta=function(e){var t=e.match(/(^|\n) {0,3}\{:\s*((?:\\\}|[^\}])*)\s*\}$/);if(!t)return void 0;var r,n=this.dialect.processMetaHash(t[2]);if(""===t[1]){var i=this.tree[this.tree.length-1];if(r=s(i),"string"==typeof i)return void 0;r||(r={},i.splice(1,0,r));for(a in n)r[a]=n[a];return[]}var l=e.replace(/\n.*$/,""),o=this.processBlock(l,[]);r=s(o[0]),r||(r={},o[0].splice(1,0,r));for(a in n)r[a]=n[a];return o},f.dialects.Maruku.block.definition_list=function(e,t){var r,n=/^((?:[^\s:].*\n)+):\s+([\s\S]+)$/,i=["dl"];if(!(s=e.match(n)))return void 0;for(var l=[e];t.length&&n.exec(t[0]);)l.push(t.shift());for(var a=0;a<l.length;++a){var s=l[a].match(n),o=s[1].replace(/\n$/,"").split(/\n/),c=s[2].split(/\n:\s+/);for(r=0;r<o.length;++r)i.push(["dt",o[r]]);for(r=0;r<c.length;++r)i.push(["dd"].concat(this.processInline(c[r].replace(/(\n)\s+/,"$1"))))}return[i]},f.dialects.Maruku.inline["{:"]=function(e,t,r){if(!r.length)return[2,"{:"];var n=r[r.length-1];if("string"==typeof n)return[2,"{:"];var i=e.match(/^\{:\s*((?:\\\}|[^\}])*)\s*\}/);if(!i)return[2,"{:"];var l=this.dialect.processMetaHash(i[1]),a=s(n);a||(a={},n.splice(1,0,a));for(var o in l)a[o]=l[o];return[i[0].length,""]},f.buildBlockOrder(f.dialects.Maruku.block),f.buildInlinePatterns(f.dialects.Maruku.inline);var v,d=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)};v=Array.prototype.forEach?function(e,t,r){return e.forEach(t,r)}:function(e,t,r){for(var n=0;n<e.length;n++)t.call(r||e,e[n],n,e)},e.renderJsonML=function(e,t){t=t||{},t.root=t.root||!1;var r=[];if(t.root)r.push(c(e));else for(e.shift(),!e.length||"object"!=typeof e[0]||e[0]instanceof Array||e.shift();e.length;)r.push(c(e.shift()));return r.join("\n\n")}}(function(){return"undefined"==typeof exports?(window.markdown={},window.markdown):exports}());
																																																																																																																																																																																																																																																																																																																																																	 /** 
toMarkdown																																																																																																																																																																																																																																																																																																																																																	  **/
var toMarkdown=function(string){var ELEMENTS=[{patterns:'p',replacement:function(str,attrs,innerHTML){return innerHTML?'\n\n'+innerHTML+'\n':'';}},{patterns:'br',type:'void',replacement:'\n'},{patterns:'h([1-6])',replacement:function(str,hLevel,attrs,innerHTML){var hPrefix='';for(var i=0;i<hLevel;i++){hPrefix+='#';}return'\n\n'+hPrefix+' '+innerHTML+'\n';}},{patterns:'hr',type:'void',replacement:'\n\n* * *\n'},{patterns:'a',replacement:function(str,attrs,innerHTML){var href=attrs.match(attrRegExp('href')),title=attrs.match(attrRegExp('title'));return href?'['+innerHTML+']'+'('+href[1]+(title&&title[1]?' "'+title[1]+'"':'')+')':str;}},{patterns:['b','strong'],replacement:function(str,attrs,innerHTML){return innerHTML?'**'+innerHTML+'**':'';}},{patterns:['i','em'],replacement:function(str,attrs,innerHTML){return innerHTML?'_'+innerHTML+'_':'';}},{patterns:'code',replacement:function(str,attrs,innerHTML){return innerHTML?'`'+innerHTML+'`':'';}},{patterns:'img',type:'void',replacement:function(str,attrs,innerHTML){var src=attrs.match(attrRegExp('src')),alt=attrs.match(attrRegExp('alt')),title=attrs.match(attrRegExp('title'));return'!['+(alt&&alt[1]?alt[1]:'')+']'+'('+src[1]+(title&&title[1]?' "'+title[1]+'"':'')+')';}}];for(var i=0,len=ELEMENTS.length;i<len;i++){if(typeof ELEMENTS[i].patterns==='string'){string=replaceEls(string,{tag:ELEMENTS[i].patterns,replacement:ELEMENTS[i].replacement,type:ELEMENTS[i].type});}else{for(var j=0,pLen=ELEMENTS[i].patterns.length;j<pLen;j++){string=replaceEls(string,{tag:ELEMENTS[i].patterns[j],replacement:ELEMENTS[i].replacement,type:ELEMENTS[i].type});}}}function replaceEls(html,elProperties){var pattern=elProperties.type==='void'?'<'+elProperties.tag+'\\b([^>]*)\\/?>':'<'+elProperties.tag+'\\b([^>]*)>([\\s\\S]*?)<\\/'+elProperties.tag+'>',regex=new RegExp(pattern,'gi'),markdown='';if(typeof elProperties.replacement==='string'){markdown=html.replace(regex,elProperties.replacement);}else{markdown=html.replace(regex,function(str,p1,p2,p3){return elProperties.replacement.call(this,str,p1,p2,p3);});}return markdown;}function attrRegExp(attr){return new RegExp(attr+'\\s*=\\s*["\']?([^"\']*)["\']?','i');}string=string.replace(/<pre\b[^>]*>`([\s\S]*)`<\/pre>/gi,function(str,innerHTML){innerHTML=innerHTML.replace(/^\t+/g,'  ');innerHTML=innerHTML.replace(/\n/g,'\n    ');return'\n\n    '+innerHTML+'\n';});string=string.replace(/^(\s{0,3}\d+)\. /g,'$1\\. ');var noChildrenRegex=/<(ul|ol)\b[^>]*>(?:(?!<ul|<ol)[\s\S])*?<\/\1>/gi;while(string.match(noChildrenRegex)){string=string.replace(noChildrenRegex,function(str){return replaceLists(str);});}function replaceLists(html){html=html.replace(/<(ul|ol)\b[^>]*>([\s\S]*?)<\/\1>/gi,function(str,listType,innerHTML){var lis=innerHTML.split('</li>');lis.splice(lis.length-1,1);for(i=0,len=lis.length;i<len;i++){if(lis[i]){var prefix=(listType==='ol')?(i+1)+".  ":"*   ";lis[i]=lis[i].replace(/\s*<li[^>]*>([\s\S]*)/i,function(str,innerHTML){innerHTML=innerHTML.replace(/^\s+/,'');innerHTML=innerHTML.replace(/\n\n/g,'\n\n    ');innerHTML=innerHTML.replace(/\n([ ]*)+(\*|\d+\.) /g,'\n$1    $2 ');return prefix+innerHTML;});}}return lis.join('\n');});return'\n\n'+html.replace(/[ \t]+\n|\s+$/g,'');}var deepest=/<blockquote\b[^>]*>((?:(?!<blockquote)[\s\S])*?)<\/blockquote>/gi;while(string.match(deepest)){string=string.replace(deepest,function(str){return replaceBlockquotes(str);});}function replaceBlockquotes(html){html=html.replace(/<blockquote\b[^>]*>([\s\S]*?)<\/blockquote>/gi,function(str,inner){inner=inner.replace(/^\s+|\s+$/g,'');inner=cleanUp(inner);inner=inner.replace(/^/gm,'> ');inner=inner.replace(/^(>([ \t]{2,}>)+)/gm,'> >');return inner;});return html;}function cleanUp(string){string=string.replace(/^[\t\r\n]+|[\t\r\n]+$/g,'');string=string.replace(/\n\s+\n/g,'\n\n');string=string.replace(/\n{3,}/g,'\n\n');return string;}return cleanUp(string);};if(typeof exports==='object'){exports.toMarkdown=toMarkdown;}
/* 
* ===============================
 * bootstrap-markdown.js  v2.1.0
 * http://github.com/toopay/bootstrap-markdown
 * ===============================
 */
!function(t){"use strict";var e=function(e,n){this.$ns="bootstrap-markdown",this.$element=t(e),this.$editable={el:null,type:null,attrKeys:[],attrValues:[],content:null},this.$options=t.extend(!0,{},t.fn.markdown.defaults,n),this.$oldContent=null,this.$isPreview=!1,this.$editor=null,this.$textarea=null,this.$handler=[],this.$callback=[],this.$nextTab=[],this.showEditor()};e.prototype={constructor:e,__alterButtons:function(e,n){var i=this.$handler,a="all"==e,r=this;t.each(i,function(t,i){var s=!0;s=a?!1:i.indexOf(e)<0,0==s&&n(r.$editor.find('button[data-handler="'+i+'"]'))})},__buildButtons:function(e,n){var i,a=this.$ns,r=this.$handler,s=this.$callback;for(i=0;i<e.length;i++){var o,l=e[i];for(o=0;o<l.length;o++){var c,h=l[o].data,d=t("<div/>",{"class":"btn-group"});for(c=0;c<h.length;c++){var u=h[c],p="",f=a+"-"+u.name,v=u.btnText?u.btnText:"",g=u.btnClass?u.btnClass:"btn",m=u.tabIndex?u.tabIndex:"-1";1==u.toggle&&(p=' data-toggle="button"'),d.append('<button class="'+g+' btn-default btn-sm" title="'+u.title+'" tabindex="'+m+'" data-provider="'+a+'" data-handler="'+f+'"'+p+'><span class="'+u.icon+'"></span> '+v+"</button>"),r.push(f),s.push(u.callback)}n.append(d)}}return n},__setListener:function(){var e="undefined"!=typeof this.$textarea.attr("rows"),n=this.$textarea.val().split("\n").length>5?this.$textarea.val().split("\n").length:"5",i=e?this.$textarea.attr("rows"):n;this.$textarea.attr("rows",i),this.$textarea.css("resize","none"),this.$textarea.on("focus",t.proxy(this.focus,this)).on("keypress",t.proxy(this.keypress,this)).on("keyup",t.proxy(this.keyup,this)),this.eventSupported("keydown")&&this.$textarea.on("keydown",t.proxy(this.keydown,this)),this.$textarea.data("markdown",this)},__handle:function(e){var n=t(e.currentTarget),i=this.$handler,a=this.$callback,r=n.attr("data-handler"),s=i.indexOf(r),o=a[s];t(e.currentTarget).focus(),o(this),r.indexOf("cmdSave")<0&&this.$textarea.focus(),e.preventDefault()},showEditor:function(){var e,n=this,i=this.$ns,a=this.$element,r=(a.css("height"),a.css("width"),this.$editable),s=this.$handler,o=this.$callback,l=this.$options,c=t("<div/>",{"class":"md-editor",click:function(){n.focus()}});if(null==this.$editor){var h=t("<div/>",{"class":"md-header btn-toolbar"});if(l.buttons.length>0&&(h=this.__buildButtons(l.buttons,h)),l.additionalButtons.length>0&&(h=this.__buildButtons(l.additionalButtons,h)),c.append(h),a.is("textarea"))a.before(c),e=a,e.addClass("md-input form-control"),c.append(e);else{var d="function"==typeof toMarkdown?toMarkdown(a.html()):a.html(),u=t.trim(d);e=t("<textarea/>",{"class":"form-control",val:u}),c.append(e),r.el=a,r.type=a.prop("tagName").toLowerCase(),r.content=a.html(),t(a[0].attributes).each(function(){r.attrKeys.push(this.nodeName),r.attrValues.push(this.nodeValue)}),a.replaceWith(c)}if(l.savable){var p=t("<div/>",{"class":"md-footer"}),f="cmdSave";s.push(f),o.push(l.onSave),p.append('<button class="btn btn-success" data-provider="'+i+'" data-handler="'+f+'"><i class="fa icon-white fa-ok"></i> Save</button>'),c.append(p)}t.each(["height","width"],function(t,e){"inherit"!=l[e]&&(jQuery.isNumeric(l[e])?c.css(e,l[e]+"px"):c.addClass(l[e]))}),this.$editor=c,this.$textarea=e,this.$editable=r,this.$oldContent=this.getContent(),this.__setListener(),this.$editor.attr("id",(new Date).getTime()),this.$editor.on("click",'[data-provider="bootstrap-markdown"]',t.proxy(this.__handle,this))}else this.$editor.show();return l.autofocus&&(this.$textarea.focus(),this.$editor.addClass("active")),l.onShow(this),this},showPreview:function(){var e,n=this.$options,i=n.onPreview(this),a=this.$textarea,r=a.next(),s=t("<div/>",{"class":"md-preview","data-provider":"markdown-preview"});return this.$isPreview=!0,this.disableButtons("all").enableButtons("cmdPreview"),e="string"==typeof i?i:"object"==typeof markdown?markdown.toHTML(a.val()):a.val(),s.html(e),r&&"md-footer"==r.attr("class")?s.insertBefore(r):a.parent().append(s),a.hide(),s.data("markdown",this),this},hidePreview:function(){this.$isPreview=!1;var t=this.$editor.find('div[data-provider="markdown-preview"]');return t.remove(),this.enableButtons("all"),this.$textarea.show(),this.__setListener(),this},isDirty:function(){return this.$oldContent!=this.getContent()},getContent:function(){return this.$textarea.val()},setContent:function(t){return this.$textarea.val(t),this},findSelection:function(t){var e,n=this.getContent();if(e=n.indexOf(t),e>=0&&t.length>0){var i,a=this.getSelection();return this.setSelection(e,e+t.length),i=this.getSelection(),this.setSelection(a.start,a.end),i}return null},getSelection:function(){var t=this.$textarea[0];return("selectionStart"in t&&function(){var e=t.selectionEnd-t.selectionStart;return{start:t.selectionStart,end:t.selectionEnd,length:e,text:t.value.substr(t.selectionStart,e)}}||function(){return null})()},setSelection:function(t,e){var n=this.$textarea[0];return("selectionStart"in n&&function(){n.selectionStart=t,n.selectionEnd=e}||function(){return null})()},replaceSelection:function(t){var e=this.$textarea[0];return("selectionStart"in e&&function(){return e.value=e.value.substr(0,e.selectionStart)+t+e.value.substr(e.selectionEnd,e.value.length),e.selectionStart=e.value.length,this}||function(){return e.value+=t,jQuery(e)})()},getNextTab:function(){if(0==this.$nextTab.length)return null;var t,e=this.$nextTab.shift();return"function"==typeof e?t=e():"object"==typeof e&&e.length>0&&(t=e),t},setNextTab:function(t,e){if("string"==typeof t){var n=this;this.$nextTab.push(function(){return n.findSelection(t)})}else if("numeric"==typeof t&&"numeric"==typeof e){var i=this.getSelection();this.setSelection(t,e),this.$nextTab.push(this.getSelection()),this.setSelection(i.start,i.end)}},enableButtons:function(t){var e=function(t){t.removeAttr("disabled")};return this.__alterButtons(t,e),this},disableButtons:function(t){var e=function(t){t.attr("disabled","disabled")};return this.__alterButtons(t,e),this},eventSupported:function(t){var e=t in this.$element;return e||(this.$element.setAttribute(t,"return;"),e="function"==typeof this.$element[t]),e},keydown:function(e){this.suppressKeyPressRepeat=~t.inArray(e.keyCode,[40,38,9,13,27]),this.keyup(e)},keypress:function(t){this.suppressKeyPressRepeat||this.keyup(t)},keyup:function(t){var e=!1;switch(t.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:var n;if(n=this.getNextTab(),null!=n){var i=this;setTimeout(function(){i.setSelection(n.start,n.end)},500),e=!0}else{var a=this.getSelection();a.start==a.end&&a.end==this.getContent().length?e=!1:(this.setSelection(this.getContent().length,this.getContent().length),e=!0)}break;case 13:case 27:e=!1;break;default:e=!1}e&&(t.stopPropagation(),t.preventDefault())},focus:function(){var e=this.$options,n=(e.hideable,this.$editor);return n.addClass("active"),t(document).find(".md-editor").each(function(){if(t(this).attr("id")!=n.attr("id")){var e;e=t(this).find("textarea").data("markdown"),null==e&&(e=t(this).find('div[data-provider="markdown-preview"]').data("markdown")),e&&e.blur()}}),this},blur:function(){var e=this.$options,n=e.hideable,i=this.$editor,a=this.$editable;if(i.hasClass("active")||0==this.$element.parent().length){if(i.removeClass("active"),n)if(null!=a.el){var r=t("<"+a.type+"/>"),s=this.getContent(),o="object"==typeof markdown?markdown.toHTML(s):s;t(a.attrKeys).each(function(t){r.attr(a.attrKeys[t],a.attrValues[t])}),r.html(o),i.replaceWith(r)}else i.hide();e.onBlur(this)}return this}};var n=t.fn.markdown;t.fn.markdown=function(n){return this.each(function(){var i=t(this),a=i.data("markdown"),r="object"==typeof n&&n;a||i.data("markdown",a=new e(this,r))})},t.fn.markdown.defaults={autofocus:!1,hideable:!1,savable:!1,width:"inherit",height:"inherit",buttons:[[{name:"groupFont",data:[{name:"cmdBold",title:"Bold",icon:"glyphicon glyphicon-bold",callback:function(t){var e,n,i=t.getSelection(),a=t.getContent();e=0==i.length?"strong text":i.text,"**"==a.substr(i.start-2,2)&&"**"==a.substr(i.end,2)?(t.setSelection(i.start-2,i.end+2),t.replaceSelection(e),n=i.start-2):(t.replaceSelection("**"+e+"**"),n=i.start+2),t.setSelection(n,n+e.length)}},{name:"cmdItalic",title:"Italic",icon:"glyphicon glyphicon-italic",callback:function(t){var e,n,i=t.getSelection(),a=t.getContent();e=0==i.length?"emphasized text":i.text,"*"==a.substr(i.start-1,1)&&"*"==a.substr(i.end,1)?(t.setSelection(i.start-1,i.end+1),t.replaceSelection(e),n=i.start-1):(t.replaceSelection("*"+e+"*"),n=i.start+1),t.setSelection(n,n+e.length)}},{name:"cmdHeading",title:"Heading",icon:"glyphicon glyphicon-font",callback:function(t){var e,n,i,a,r=t.getSelection(),s=t.getContent();e=0==r.length?"heading text":r.text,i=4,"### "==s.substr(r.start-i,i)||(i=3,"###"==s.substr(r.start-i,i))?(t.setSelection(r.start-i,r.end),t.replaceSelection(e),n=r.start-i):(a=s.substr(r.start-1,1),a&&"\n"!=a?(t.replaceSelection("\n\n### "+e+"\n"),n=r.start+6):(t.replaceSelection("### "+e+"\n"),n=r.start+4)),t.setSelection(n,n+e.length)}}]},{name:"groupLink",data:[{name:"cmdUrl",title:"URL/Link",icon:"glyphicon glyphicon-globe",callback:function(t){{var e,n,i,a=t.getSelection();t.getContent()}e=0==a.length?"enter link description here":a.text,i=prompt("Insert Hyperlink","http://"),null!=i&&(t.replaceSelection("["+e+"]("+i+")"),n=a.start+1,t.setSelection(n,n+e.length))}},{name:"cmdImage",title:"Image",icon:"glyphicon glyphicon-picture",callback:function(t){{var e,n,i,a=t.getSelection();t.getContent()}e=0==a.length?"enter image description here":a.text,i=prompt("Insert Image Hyperlink","http://"),null!=i&&(t.replaceSelection("!["+e+"]("+i+' "enter image title here")'),n=a.start+2,t.setNextTab("enter image title here"),t.setSelection(n,n+e.length))}}]},{name:"groupMisc",data:[{name:"cmdList",title:"List",icon:"glyphicon glyphicon-list",callback:function(e){{var n,i,a=e.getSelection();e.getContent()}if(0==a.length)n="list text here",e.replaceSelection("- "+n),i=a.start+2;else if(a.text.indexOf("\n")<0)n=a.text,e.replaceSelection("- "+n),i=a.start+2;else{var r=[];r=a.text.split("\n"),n=r[0],t.each(r,function(t,e){r[t]="- "+e}),e.replaceSelection("\n\n"+r.join("\n")),i=a.start+4}e.setSelection(i,i+n.length)}}]},{name:"groupUtil",data:[{name:"cmdPreview",toggle:!0,title:"Preview",btnText:"Preview",btnClass:"btn btn-sm",icon:"glyphicon glyphicon-search",callback:function(t){var e=t.$isPreview;0==e?t.showPreview():t.hidePreview()}}]}]],additionalButtons:[],onShow:function(){},onPreview:function(){},onSave:function(){},onBlur:function(){}},t.fn.markdown.Constructor=e,t.fn.markdown.noConflict=function(){return t.fn.markdown=n,this};var i=function(t){var e=t;return e.data("markdown")?(e.data("markdown").showEditor(),void 0):(e.markdown(e.data()),void 0)},a=function(e){var n,i=!1,a=t(e.currentTarget);"focusin"!=e.type&&"click"!=e.type||1!=a.length||"object"!=typeof a[0]||(n=a[0].activeElement,t(n).data("markdown")||("undefined"==typeof t(n).parent().parent().parent().attr("class")||t(n).parent().parent().parent().attr("class").indexOf("md-editor")<0?("undefined"==typeof t(n).parent().parent().attr("class")||t(n).parent().parent().attr("class").indexOf("md-editor")<0)&&(i=!0):i=!1),i&&t(document).find(".md-editor").each(function(){var e=t(n).parent();if(t(this).attr("id")!=e.attr("id")){var i;i=t(this).find("textarea").data("markdown"),null==i&&(i=t(this).find('div[data-provider="markdown-preview"]').data("markdown")),i&&i.blur()}}),e.stopPropagation())};t(document).on("click.markdown.data-api",'[data-provide="markdown-editable"]',function(e){i(t(this)),e.preventDefault()}).on("click",function(t){a(t)}).on("focusin",function(t){a(t)}).ready(function(){t('textarea[data-provide="markdown"]').each(function(){i(t(this))})})}(window.jQuery);


/*iCheck*/
/*!
 * iCheck v0.9.1 jQuery plugin, http://git.io/uhUPMA
 */
(function(f){function C(a,c,d){var b=a[0],e=/er/.test(d)?k:/bl/.test(d)?u:j;active=d==E?{checked:b[j],disabled:b[u],indeterminate:"true"==a.attr(k)||"false"==a.attr(v)}:b[e];if(/^(ch|di|in)/.test(d)&&!active)p(a,e);else if(/^(un|en|de)/.test(d)&&active)w(a,e);else if(d==E)for(var e in active)active[e]?p(a,e,!0):w(a,e,!0);else if(!c||"toggle"==d){if(!c)a[r]("ifClicked");active?b[l]!==x&&w(a,e):p(a,e)}}function p(a,c,d){var b=a[0],e=a.parent(),g=c==j,H=c==k,m=H?v:g?I:"enabled",r=h(b,m+y(b[l])),L=h(b,
c+y(b[l]));if(!0!==b[c]){if(!d&&c==j&&b[l]==x&&b.name){var p=a.closest("form"),s='input[name="'+b.name+'"]',s=p.length?p.find(s):f(s);s.each(function(){this!==b&&f.data(this,n)&&w(f(this),c)})}H?(b[c]=!0,b[j]&&w(a,j,"force")):(d||(b[c]=!0),g&&b[k]&&w(a,k,!1));J(a,g,c,d)}b[u]&&h(b,z,!0)&&e.find("."+F).css(z,"default");e[t](L||h(b,c));e[A](r||h(b,m)||"")}function w(a,c,d){var b=a[0],e=a.parent(),g=c==j,f=c==k,m=f?v:g?I:"enabled",n=h(b,m+y(b[l])),p=h(b,c+y(b[l]));if(!1!==b[c]){if(f||!d||"force"==d)b[c]=
!1;J(a,g,m,d)}!b[u]&&h(b,z,!0)&&e.find("."+F).css(z,"pointer");e[A](p||h(b,c)||"");e[t](n||h(b,m))}function K(a,c){if(f.data(a,n)){var d=f(a),line=d.parents("li.line"),lineLabel =line.find("span").text();d.parent().html(d.attr("style",f.data(a,n).s||"")[r](c||""));d.off(".i").unwrap(); d.removeAttr("id");d.next().removeAttr("for"); line.append("<label>"+lineLabel+"</label>"); f(D+'[for="'+a.id+'"]').add(d.closest(D)).off(".i")}}function h(a,c,d){if(f.data(a,n))return f.data(a,n).o[c+(d?"":"Class")]}function y(a){return a.charAt(0).toUpperCase()+a.slice(1)}function J(a,c,d,b){if(!b){if(c)a[r]("ifToggled");a[r]("ifChanged")[r]("if"+y(d))}}var n="iCheck",
F=n+"-helper",x="radio",j="checked",I="un"+j,u="disabled",v="determinate",k="in"+v,E="update",l="type",t="addClass",A="removeClass",r="trigger",D="label",z="cursor",G=/ipad|iphone|ipod|android|blackberry|windows phone|opera mini/i.test(navigator.userAgent);f.fn[n]=function(a,c){var d=":checkbox, :"+x,b=f(),e=function(a){a.each(function(){var a=f(this);b=a.is(d)?b.add(a):b.add(a.find(d))})};if(/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(a))return a=a.toLowerCase(),
e(this),b.each(function(){"destroy"==a?K(this,"ifDestroyed"):C(f(this),!0,a);f.isFunction(c)&&c()});if("object"==typeof a||!a){var g=f.extend({checkedClass:j,disabledClass:u,indeterminateClass:k,labelHover:!0},a),h=g.handle,m=g.hoverClass||"hover",y=g.focusClass||"focus",v=g.activeClass||"active",z=!!g.labelHover,s=g.labelHoverClass||"hover",B=(""+g.increaseArea).replace("%","")|0;if("checkbox"==h||h==x)d=":"+h;-50>B&&(B=-50);e(this);return b.each(function(){K(this);var a=f(this),b=this,c=b.id,d=
-B+"%",e=100+2*B+"%",e={position:"absolute",top:d,left:d,display:"block",width:e,height:e,margin:0,padding:0,background:"#fff",border:0,opacity:0},d=G?{position:"absolute",visibility:"hidden"}:B?e:{position:"absolute",opacity:0},h="checkbox"==b[l]?g.checkboxClass||"icheckbox":g.radioClass||"i"+x,k=f(D+'[for="'+c+'"]').add(a.closest(D)),q=a.wrap('<div class="'+h+'"/>')[r]("ifCreated").parent().append(g.insert),e=f('<ins class="'+F+'"/>').css(e).appendTo(q);a.data(n,{o:g,s:a.attr("style")}).css(d);
g.inheritClass&&q[t](b.className);g.inheritID&&c&&q.attr("id",n+"-"+c);"static"==q.css("position")&&q.css("position","relative");C(a,!0,E);if(k.length)k.on("click.i mouseenter.i mouseleave.i touchbegin.i touchend.i",function(c){var d=c[l],e=f(this);if(!b[u])if("click"==d?C(a,!1,!0):z&&(/ve|nd/.test(d)?(q[A](m),e[A](s)):(q[t](m),e[t](s))),G)c.stopPropagation();else return!1});a.on("click.i focus.i blur.i keyup.i keydown.i keypress.i",function(c){var d=c[l];c=c.keyCode;if("click"==d)return!1;if("keydown"==
d&&32==c)return b[l]==x&&b[j]||(b[j]?w(a,j):p(a,j)),!1;if("keyup"==d&&b[l]==x)!b[j]&&p(a,j);else if(/us|ur/.test(d))q["blur"==d?A:t](y)});e.on("click mousedown mouseup mouseover mouseout touchbegin.i touchend.i",function(d){var c=d[l],e=/wn|up/.test(c)?v:m;if(!b[u]){if("click"==c)C(a,!1,!0);else{if(/wn|er|in/.test(c))q[t](e);else q[A](e+" "+v);if(k.length&&z&&e==m)k[/ut|nd/.test(c)?A:t](s)}if(G)d.stopPropagation();else return!1}})})}return this}})(jQuery);


/* bootstrapSwitch v1.8  */
!function($){$.fn.bootstrapSwitch=function(method){var inputSelector='input[type!="hidden"]';var methods={init:function(){return this.each(function(){var $element=$(this),$div,$switchLeft,$switchRight,$label,$form=$element.closest("form"),myClasses="",classes=$element.attr("class"),color,moving,onLabel="<i class='fa fa-check'></i>",offLabel="<i class='fa fa-times'></i>",icon=false,textLabel=false;$.each(["switch-mini","switch-small","switch-large"],function(i,el){if(classes.indexOf(el)>=0){myClasses=el}});$element.addClass("has-switch");if($element.data("on")!==undefined){color="switch-"+$element.data("on")}if($element.data("on-label")!==undefined){onLabel=$element.data("on-label")}if($element.data("off-label")!==undefined){offLabel=$element.data("off-label")}if($element.data("label-icon")!==undefined){icon=$element.data("label-icon")}if($element.data("text-label")!==undefined){textLabel=$element.data("text-label")}$switchLeft=$("<span>").addClass("switch-left").addClass(myClasses).addClass(color).html(onLabel);color="";if($element.data("off")!==undefined){color="switch-"+$element.data("off")}$switchRight=$("<span>").addClass("switch-right").addClass(myClasses).addClass(color).html(offLabel);$label=$("<label>").html("&nbsp;").addClass(myClasses+" normal").attr("for",$element.find(inputSelector).attr("id"));if(icon){$label.html('<i class="fa '+icon+'"></i>').removeClass("normal")}if(textLabel){$label.html(""+textLabel+"")}$div=$element.find(inputSelector).wrap($("<div>")).parent().data("animated",false);if($element.data("animated")!==false){$div.addClass("switch-animate").data("animated",true)}$div.append($switchLeft).append($label).append($switchRight);$element.addClass($element.find(inputSelector).is(":checked")?"checked":"unchecked");$element.find(">div").addClass($element.find(inputSelector).is(":checked")?"switch-on":"switch-off");if($element.find(inputSelector).is(":disabled")){$(this).addClass("deactivate")}var changeStatus=function($this){if($element.parent("label").is(".label-change-switch")){}else{$this.siblings("label").trigger("mousedown").trigger("mouseup").trigger("click")}};$element.on("keydown",function(e){if(e.keyCode===32){e.stopImmediatePropagation();e.preventDefault();changeStatus($(e.target).find("span:first"))}});$switchLeft.on("click",function(e){changeStatus($(this))});$switchRight.on("click",function(e){changeStatus($(this))});$element.find(inputSelector).on("change",function(e,skipOnChange){var $this=$(this),$element=$this.parent(),thisState=$this.is(":checked"),state=$element.is(".switch-off");e.preventDefault();$element.css("left","");if(state===thisState){if(thisState){$element.removeClass("switch-off").addClass("switch-on");$element.parents(".has-switch").removeClass("unchecked").addClass("checked")}else{$element.removeClass("switch-on").addClass("switch-off");$element.parents(".has-switch").removeClass("checked").addClass("unchecked")}if($element.data("animated")!==false){$element.addClass("switch-animate")}if(typeof skipOnChange==="boolean"&&skipOnChange){return}$element.parent().trigger("switch-change",{el:$this,value:thisState})}});$element.find("label").on("mousedown touchstart",function(e){var $this=$(this);moving=false;e.preventDefault();e.stopImmediatePropagation();$this.closest("div").removeClass("switch-animate");if($this.closest(".has-switch").is(".deactivate")){$this.unbind("click")}else{if($this.closest(".switch-on").parent().is(".radio-no-uncheck")){$this.unbind("click")}else{if(!$element.hasClass("ios")){$this.on("mousemove touchmove",function(e){var $element=$(this).closest(".switch"),relativeX=(e.pageX||e.originalEvent.targetTouches[0].pageX)-$element.offset().left,percent=(relativeX/$element.width())*100,left=25,right=75;moving=true;if(percent<left){percent=left}else{if(percent>right){percent=right}}$element.find(">div").css("left",(percent-right)+"%")})}$this.on("click touchend",function(e){var $this=$(this),$target=$(e.target),$myRadioCheckBox=$target.siblings("input");e.stopImmediatePropagation();e.preventDefault();$this.unbind("mouseleave");if(moving){$myRadioCheckBox.prop("checked",!(parseInt($this.parent().css("left"))<-25))}else{$myRadioCheckBox.prop("checked",!$myRadioCheckBox.is(":checked"))}moving=false;$myRadioCheckBox.trigger("change")});$this.on("mouseleave",function(e){var $this=$(this),$myInputBox=$this.siblings("input");e.preventDefault();e.stopImmediatePropagation();$this.unbind("mouseleave");$this.trigger("mouseup");$myInputBox.prop("checked",!(parseInt($this.parent().css("left"))<-25)).trigger("change")});$this.on("mouseup",function(e){e.stopImmediatePropagation();e.preventDefault();$(this).unbind("mousemove")})}}});if($form.data("bootstrapSwitch")!=="injected"){$form.bind("reset",function(){setTimeout(function(){$form.find(".make-switch").each(function(){var $input=$(this).find(inputSelector);$input.prop("checked",$input.is(":checked")).trigger("change")})},1)});$form.data("bootstrapSwitch","injected")}})},toggleActivation:function(){var $this=$(this);$this.toggleClass("deactivate");$this.find(inputSelector).prop("disabled",$this.is(".deactivate"))},isActive:function(){return !$(this).hasClass("deactivate")},setActive:function(active){var $this=$(this);if(active){$this.removeClass("deactivate");$this.find(inputSelector).removeAttr("disabled")}else{$this.addClass("deactivate");$this.find(inputSelector).attr("disabled","disabled")}},toggleState:function(skipOnChange){var $input=$(this).find(":checkbox");$input.prop("checked",!$input.is(":checked")).trigger("change",skipOnChange)},toggleRadioState:function(skipOnChange){var $radioinput=$(this).find(":radio");$radioinput.not(":checked").prop("checked",!$radioinput.is(":checked")).trigger("change",skipOnChange)},toggleRadioStateAllowUncheck:function(uncheck,skipOnChange){var $radioinput=$(this).find(":radio");if(uncheck){$radioinput.not(":checked").trigger("change",skipOnChange)}else{$radioinput.not(":checked").prop("checked",!$radioinput.is(":checked")).trigger("change",skipOnChange)}},setState:function(value,skipOnChange){$(this).find(inputSelector).prop("checked",value).trigger("change",skipOnChange)},setOnLabel:function(value){var $switchLeft=$(this).find(".switch-left");$switchLeft.html(value)},setOffLabel:function(value){var $switchRight=$(this).find(".switch-right");$switchRight.html(value)},setOnClass:function(value){var $switchLeft=$(this).find(".switch-left");var color="";if(value!==undefined){if($(this).attr("data-on")!==undefined){color="switch-"+$(this).attr("data-on")}$switchLeft.removeClass(color);color="switch-"+value;$switchLeft.addClass(color)}},setOffClass:function(value){var $switchRight=$(this).find(".switch-right");var color="";if(value!==undefined){if($(this).attr("data-off")!==undefined){color="switch-"+$(this).attr("data-off")}$switchRight.removeClass(color);color="switch-"+value;$switchRight.addClass(color)}},setAnimated:function(value){var $element=$(this).find(inputSelector).parent();if(value===undefined){value=false}$element.data("animated",value);$element.attr("data-animated",value);if($element.data("animated")!==false){$element.addClass("switch-animate")}else{$element.removeClass("switch-animate")}},setSizeClass:function(value){var $element=$(this);var $switchLeft=$element.find(".switch-left");var $switchRight=$element.find(".switch-right");var $label=$element.find("label");$.each(["switch-mini","switch-small","switch-large"],function(i,el){if(el!==value){$switchLeft.removeClass(el);$switchRight.removeClass(el);$label.removeClass(el)}else{$switchLeft.addClass(el);$switchRight.addClass(el);$label.addClass(el)}})},status:function(){return $(this).find(inputSelector).is(":checked")},destroy:function(){var $element=$(this),$div=$element.find("div"),$form=$element.closest("form"),$inputbox;$div.find(":not(input)").remove();$inputbox=$div.children();$inputbox.unwrap().unwrap();$inputbox.unbind("change");if($form){$form.unbind("reset");$form.removeData("bootstrapSwitch")}return $inputbox}};if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof method==="object"||!method){return methods.init.apply(this,arguments)}else{$.error("Method "+method+" does not exist!")}}}}(jQuery);(function($){$(function(){$(".switch")["bootstrapSwitch"]()})})(jQuery);



/*
 * bootstrap-tagsinput v0.3.9 by Tim Schlechter
 * 
 */
!function(a){"use strict";function b(b,c){this.itemsArray=[],this.$element=a(b),this.$element.hide(),this.isSelect="SELECT"===b.tagName,this.multiple=this.isSelect&&b.hasAttribute("multiple"),this.objectItems=c&&c.itemValue,this.placeholderText=b.hasAttribute("placeholder")?this.$element.attr("placeholder"):"",this.inputSize=Math.max(1,this.placeholderText.length),this.$container=a('<div class="bootstrap-tagsinput"></div>'),this.$input=a('<input size="'+this.inputSize+'" type="text" placeholder="'+this.placeholderText+'"/>').appendTo(this.$container),this.$element.after(this.$container),this.build(c)}function c(a,b){if("function"!=typeof a[b]){var c=a[b];a[b]=function(a){return a[c]}}}function d(a,b){if("function"!=typeof a[b]){var c=a[b];a[b]=function(){return c}}}function e(a){return a?h.text(a).html():""}function f(a){var b=0;if(document.selection){a.focus();var c=document.selection.createRange();c.moveStart("character",-a.value.length),b=c.text.length}else(a.selectionStart||"0"==a.selectionStart)&&(b=a.selectionStart);return b}var g={tagClass:function(){return"label label-default"},itemValue:function(a){return a?a.toString():a},itemText:function(a){return this.itemValue(a)},freeInput:!0,maxTags:void 0,confirmKeys:[13],onTagExists:function(a,b){b.hide().fadeIn()}};b.prototype={constructor:b,add:function(b,c){var d=this;if(!(d.options.maxTags&&d.itemsArray.length>=d.options.maxTags||b!==!1&&!b)){if("object"==typeof b&&!d.objectItems)throw"Can't add objects when itemValue option is not set";if(!b.toString().match(/^\s*$/)){if(d.isSelect&&!d.multiple&&d.itemsArray.length>0&&d.remove(d.itemsArray[0]),"string"==typeof b&&"INPUT"===this.$element[0].tagName){var f=b.split(",");if(f.length>1){for(var g=0;g<f.length;g++)this.add(f[g],!0);return c||d.pushVal(),void 0}}var h=d.options.itemValue(b),i=d.options.itemText(b),j=d.options.tagClass(b),k=a.grep(d.itemsArray,function(a){return d.options.itemValue(a)===h})[0];if(k){if(d.options.onTagExists){var l=a(".tag",d.$container).filter(function(){return a(this).data("item")===k});d.options.onTagExists(b,l)}}else{d.itemsArray.push(b);var m=a('<span class="tag '+e(j)+'">'+e(i)+'<span data-role="remove"></span></span>');if(m.data("item",b),d.findInputWrapper().before(m),m.after(" "),d.isSelect&&!a('option[value="'+escape(h)+'"]',d.$element)[0]){var n=a("<option selected>"+e(i)+"</option>");n.data("item",b),n.attr("value",h),d.$element.append(n)}c||d.pushVal(),d.options.maxTags===d.itemsArray.length&&d.$container.addClass("bootstrap-tagsinput-max"),d.$element.trigger(a.Event("itemAdded",{item:b}))}}}},remove:function(b,c){var d=this;d.objectItems&&(b="object"==typeof b?a.grep(d.itemsArray,function(a){return d.options.itemValue(a)==d.options.itemValue(b)})[0]:a.grep(d.itemsArray,function(a){return d.options.itemValue(a)==b})[0]),b&&(a(".tag",d.$container).filter(function(){return a(this).data("item")===b}).remove(),a("option",d.$element).filter(function(){return a(this).data("item")===b}).remove(),d.itemsArray.splice(a.inArray(b,d.itemsArray),1)),c||d.pushVal(),d.options.maxTags>d.itemsArray.length&&d.$container.removeClass("bootstrap-tagsinput-max"),d.$element.trigger(a.Event("itemRemoved",{item:b}))},removeAll:function(){var b=this;for(a(".tag",b.$container).remove(),a("option",b.$element).remove();b.itemsArray.length>0;)b.itemsArray.pop();b.pushVal(),b.options.maxTags&&!this.isEnabled()&&this.enable()},refresh:function(){var b=this;a(".tag",b.$container).each(function(){var c=a(this),d=c.data("item"),f=b.options.itemValue(d),g=b.options.itemText(d),h=b.options.tagClass(d);if(c.attr("class",null),c.addClass("tag "+e(h)),c.contents().filter(function(){return 3==this.nodeType})[0].nodeValue=e(g),b.isSelect){var i=a("option",b.$element).filter(function(){return a(this).data("item")===d});i.attr("value",f)}})},items:function(){return this.itemsArray},pushVal:function(){var b=this,c=a.map(b.items(),function(a){return b.options.itemValue(a).toString()});b.$element.val(c,!0).trigger("change")},build:function(b){var e=this;e.options=a.extend({},g,b);var h=e.options.typeahead||{};e.objectItems&&(e.options.freeInput=!1),c(e.options,"itemValue"),c(e.options,"itemText"),c(e.options,"tagClass"),e.options.source&&(h.source=e.options.source),h.source&&a.fn.typeahead&&(d(h,"source"),e.$input.typeahead({source:function(b,c){function d(a){for(var b=[],d=0;d<a.length;d++){var g=e.options.itemText(a[d]);f[g]=a[d],b.push(g)}c(b)}this.map={};var f=this.map,g=h.source(b);a.isFunction(g.success)?g.success(d):a.when(g).then(d)},updater:function(a){e.add(this.map[a])},matcher:function(a){return-1!==a.toLowerCase().indexOf(this.query.trim().toLowerCase())},sorter:function(a){return a.sort()},highlighter:function(a){var b=new RegExp("("+this.query+")","gi");return a.replace(b,"<strong>$1</strong>")}})),e.$container.on("click",a.proxy(function(){e.$input.focus()},e)),e.$container.on("keydown","input",a.proxy(function(b){var c=a(b.target),d=e.findInputWrapper();switch(b.which){case 8:if(0===f(c[0])){var g=d.prev();g&&e.remove(g.data("item"))}break;case 46:if(0===f(c[0])){var h=d.next();h&&e.remove(h.data("item"))}break;case 37:var i=d.prev();0===c.val().length&&i[0]&&(i.before(d),c.focus());break;case 39:var j=d.next();0===c.val().length&&j[0]&&(j.after(d),c.focus());break;default:e.options.freeInput&&a.inArray(b.which,e.options.confirmKeys)>=0&&(e.add(c.val()),c.val(""),b.preventDefault())}c.attr("size",Math.max(this.inputSize,c.val().length))},e)),e.$container.on("click","[data-role=remove]",a.proxy(function(b){e.remove(a(b.target).closest(".tag").data("item"))},e)),e.options.itemValue===g.itemValue&&("INPUT"===e.$element[0].tagName?e.add(e.$element.val()):a("option",e.$element).each(function(){e.add(a(this).attr("value"),!0)}))},destroy:function(){var a=this;a.$container.off("keypress","input"),a.$container.off("click","[role=remove]"),a.$container.remove(),a.$element.removeData("tagsinput"),a.$element.show()},focus:function(){this.$input.focus()},input:function(){return this.$input},findInputWrapper:function(){for(var b=this.$input[0],c=this.$container[0];b&&b.parentNode!==c;)b=b.parentNode;return a(b)}},a.fn.tagsinput=function(c,d){var e=[];return this.each(function(){var f=a(this).data("tagsinput");if(f){var g=f[c](d);void 0!==g&&e.push(g)}else f=new b(this,c),a(this).data("tagsinput",f),e.push(f),"SELECT"===this.tagName&&a("option",a(this)).attr("selected","selected"),a(this).val(a(this).val())}),"string"==typeof c?e.length>1?e:e[0]:e},a.fn.tagsinput.Constructor=b;var h=a("<div />");a(function(){a("input[data-role=tagsinput], select[multiple][data-role=tagsinput]").tagsinput()})}(window.jQuery);



/* Parsley dist/parsley.min.js build version 1.2.2 http://parsleyjs.org */
!function(d){var h=function(a){this.messages={defaultMessage:"This value seems to be invalid.",type:{email:"This value should be a valid email.",url:"This value should be a valid url.",urlstrict:"This value should be a valid url.",number:"This value should be a valid number.",digits:"This value should be digits.",dateIso:"This value should be a valid date (YYYY-MM-DD).",alphanum:"This value should be alphanumeric.",phone:"This value should be a valid phone number."},notnull:"This value should not be null.",
notblank:"This value should not be blank.",required:"This value is required.",regexp:"This value seems to be invalid.",min:"This value should be greater than or equal to %s.",max:"This value should be lower than or equal to %s.",range:"This value should be between %s and %s.",minlength:"This value is too short. It should have %s characters or more.",maxlength:"This value is too long. It should have %s characters or less.",rangelength:"This value length is invalid. It should be between %s and %s characters long.",
mincheck:"You must select at least %s choices.",maxcheck:"You must select %s choices or less.",rangecheck:"You must select between %s and %s choices.",equalto:"This value should be the same."};this.init(a)};h.prototype={constructor:h,validators:{notnull:function(){return{validate:function(a){return 0<a.length},priority:2}},notblank:function(){return{validate:function(a){return"string"===typeof a&&""!==a.replace(/^\s+/g,"").replace(/\s+$/g,"")},priority:2}},required:function(){var a=this;return{validate:function(b){if("object"===
typeof b){for(var c in b)if(a.required().validate(b[c]))return!0;return!1}return a.notnull().validate(b)&&a.notblank().validate(b)},priority:512}},type:function(){return{validate:function(a,b){var c;switch(b){case "number":c=/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/;break;case "digits":c=/^\d+$/;break;case "alphanum":c=/^\w+$/;break;case "email":c=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))){2,6}$/i;
break;case "url":a=/(https?|s?ftp|git)/i.test(a)?a:"http://"+a;case "urlstrict":c=/^(https?|s?ftp|git):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
break;case "dateIso":c=/^(\d{4})\D?(0[1-9]|1[0-2])\D?([12]\d|0[1-9]|3[01])$/;break;case "phone":c=/^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;break;default:return!1}return""!==a?c.test(a):!1},priority:256}},regexp:function(){return{validate:function(a,b,c){return RegExp(b,c.options.regexpFlag||"").test(a)},priority:64}},minlength:function(){return{validate:function(a,b){return a.length>=b},priority:32}},maxlength:function(){return{validate:function(a,
b){return a.length<=b},priority:32}},rangelength:function(){var a=this;return{validate:function(b,c){return a.minlength().validate(b,c[0])&&a.maxlength().validate(b,c[1])},priority:32}},min:function(){return{validate:function(a,b){return Number(a)>=b},priority:32}},max:function(){return{validate:function(a,b){return Number(a)<=b},priority:32}},range:function(){var a=this;return{validate:function(b,c){return a.min().validate(b,c[0])&&a.max().validate(b,c[1])},priority:32}},equalto:function(){return{validate:function(a,
b,c){c.options.validateIfUnchanged=!0;return a===d(b).val()},priority:64}},remote:function(){return{validate:function(a,b,c){var e={},f={};e[c.$element.attr("name")]=a;"undefined"!==typeof c.options.remoteDatatype&&(f={dataType:c.options.remoteDatatype});var g=function(a,b){"undefined"!==typeof b&&("undefined"!==typeof c.Validator.messages.remote&&b!==c.Validator.messages.remote)&&d(c.UI.ulError+" .remote").remove();if(!1===a)c.options.listeners.onFieldError(c.element,c.constraints,c);else!0===a&&
!1===c.options.listeners.onFieldSuccess(c.element,c.constraints,c)&&(a=!1);c.updtConstraint({name:"remote",valid:a},b);c.manageValidationResult()},k=function(a){if("object"===typeof a)return a;try{a=d.parseJSON(a)}catch(b){}return a},l=function(a){return"object"===typeof a&&null!==a?"undefined"!==typeof a.error?a.error:"undefined"!==typeof a.message?a.message:null:null};d.ajax(d.extend({},{url:b,data:e,type:c.options.remoteMethod||"GET",success:function(a){a=k(a);g(1===a||!0===a||"object"===typeof a&&
null!==a&&"undefined"!==typeof a.success,l(a))},error:function(a){a=k(a);g(!1,l(a))}},f));return null},priority:64}},mincheck:function(){var a=this;return{validate:function(b,c){return a.minlength().validate(b,c)},priority:32}},maxcheck:function(){var a=this;return{validate:function(b,c){return a.maxlength().validate(b,c)},priority:32}},rangecheck:function(){var a=this;return{validate:function(b,c){return a.rangelength().validate(b,c)},priority:32}}},init:function(a){var b=a.validators;a=a.messages;
for(var c in b)this.addValidator(c,b[c]);for(c in a)this.addMessage(c,a[c])},formatMesssage:function(a,b){if("object"===typeof b){for(var c in b)a=this.formatMesssage(a,b[c]);return a}return"string"===typeof a?a.replace(/%s/i,b):""},addValidator:function(a,b){if("undefined"===typeof b().validate)throw Error("Validator `"+a+"` must have a validate method. See more here: http://parsleyjs.org/documentation.html#javascript-general");"undefined"===typeof b().priority&&(b={validate:b().validate,priority:32},
window.console&&window.console.warn&&window.console.warn("Validator `"+a+"` should have a priority. Default priority 32 given"));this.validators[a]=b},addMessage:function(a,b,c){if("undefined"!==typeof c&&!0===c)this.messages.type[a]=b;else if("type"===a)for(var d in b)this.messages.type[d]=b[d];else this.messages[a]=b}};var n=function(a){this.init(a)};n.prototype={constructor:n,init:function(a){this.ParsleyInstance=a;this.hash=a.hash;this.options=this.ParsleyInstance.options;this.errorClassHandler=
this.options.errors.classHandler(this.ParsleyInstance.element,this.ParsleyInstance.isRadioOrCheckbox)||this.ParsleyInstance.$element;this.ulErrorManagement()},ulErrorManagement:function(){this.ulError="#"+this.hash;this.ulTemplate=d(this.options.errors.errorsWrapper).attr("id",this.hash).addClass("parsley-error-list")},removeError:function(a){a=this.ulError+" ."+a;var b=this;this.options.animate?d(a).fadeOut(this.options.animateDuration,function(){d(this).remove();b.ulError&&0===d(b.ulError).children().length&&
b.removeErrors()}):d(a).remove()},addError:function(a){for(var b in a){var c=d(this.options.errors.errorElem).addClass(b);d(this.ulError).append(this.options.animate?d(c).html(a[b]).hide().fadeIn(this.options.animateDuration):d(c).html(a[b]))}},removeErrors:function(){this.options.animate?d(this.ulError).fadeOut(this.options.animateDuration,function(){d(this).remove()}):d(this.ulError).remove()},reset:function(){this.ParsleyInstance.valid=null;this.removeErrors();this.ParsleyInstance.validatedOnce=
!1;this.errorClassHandler.removeClass(this.options.successClass).removeClass(this.options.errorClass);for(var a in this.constraints)this.constraints[a].valid=null;return this},manageError:function(a){d(this.ulError).length||this.manageErrorContainer();if(!("required"===a.name&&null!==this.ParsleyInstance.getVal()&&0<this.ParsleyInstance.getVal().length))if(this.ParsleyInstance.isRequired&&"required"!==a.name&&(null===this.ParsleyInstance.getVal()||0===this.ParsleyInstance.getVal().length))this.removeError(a.name);
else{var b=a.name,c=!1!==this.options.errorMessage?"custom-error-message":b,e={};a=!1!==this.options.errorMessage?this.options.errorMessage:"type"===a.name?this.ParsleyInstance.Validator.messages[b][a.requirements]:"undefined"===typeof this.ParsleyInstance.Validator.messages[b]?this.ParsleyInstance.Validator.messages.defaultMessage:this.ParsleyInstance.Validator.formatMesssage(this.ParsleyInstance.Validator.messages[b],a.requirements);d(this.ulError+" ."+c).length||(e[c]=a,this.addError(e))}},manageErrorContainer:function(){var a=
this.options.errorContainer||this.options.errors.container(this.ParsleyInstance.element,this.ParsleyInstance.isRadioOrCheckbox),b=this.options.animate?this.ulTemplate.css("display",""):this.ulTemplate;"undefined"!==typeof a?d(a).append(b):!this.ParsleyInstance.isRadioOrCheckbox?this.ParsleyInstance.$element.after(b):this.ParsleyInstance.$element.parent().after(b)}};var m=function(a,b,c){this.options=b;if("ParsleyFieldMultiple"===c)return this;this.init(a,c||"ParsleyField")};m.prototype={constructor:m,
init:function(a,b){this.type=b;this.valid=!0;this.element=a;this.validatedOnce=!1;this.$element=d(a);this.val=this.$element.val();this.Validator=new h(this.options);this.isRequired=!1;this.constraints={};"undefined"===typeof this.isRadioOrCheckbox&&(this.isRadioOrCheckbox=!1,this.hash=this.generateHash());this.UI=new n(this);this.bindHtml5Constraints();this.addConstraints();this.hasConstraints()&&this.bindValidationEvents()},setParent:function(a){this.$parent=d(a)},getParent:function(){return this.$parent},
bindHtml5Constraints:function(){if(this.$element.hasClass("required")||this.$element.attr("required"))this.options.required=!0;var a=this.$element.attr("type");"undefined"!==typeof a&&RegExp(a,"i").test("email url number range tel")&&(this.options.type="tel"===a?"phone":a,RegExp(this.options.type,"i").test("number range")&&(this.options.type="number","undefined"!==typeof this.$element.attr("min")&&this.$element.attr("min").length&&(this.options.min=this.$element.attr("min")),"undefined"!==typeof this.$element.attr("max")&&
this.$element.attr("max").length&&(this.options.max=this.$element.attr("max"))));"string"===typeof this.$element.attr("pattern")&&this.$element.attr("pattern").length&&(this.options.regexp=this.$element.attr("pattern"))},addConstraints:function(){for(var a in this.options){var b={};b[a]=this.options[a];this.addConstraint(b,!0,!1)}},addConstraint:function(a,b,c){for(var d in a)d=d.toLowerCase(),"function"===typeof this.Validator.validators[d]&&(this.constraints[d]={name:d,requirements:a[d],valid:null},
"required"===d&&(this.isRequired=!0),this.addCustomConstraintMessage(d));"undefined"===typeof b&&this.bindValidationEvents()},updateConstraint:function(a,b){for(var c in a)this.updtConstraint({name:c,requirements:a[c],valid:null},b)},updtConstraint:function(a,b){this.constraints[a.name]=d.extend(!0,this.constraints[a.name],a);"string"===typeof b&&(this.Validator.messages[a.name]=b);this.bindValidationEvents()},removeConstraint:function(a){a=a.toLowerCase();delete this.constraints[a];"required"===
a&&(this.isRequired=!1);this.hasConstraints()?this.bindValidationEvents():this.UI.reset()},addCustomConstraintMessage:function(a){var b=a+("type"===a&&"undefined"!==typeof this.options[a]?this.options[a].charAt(0).toUpperCase()+this.options[a].substr(1):"")+"Message";"undefined"!==typeof this.options[b]&&this.Validator.addMessage("type"===a?this.options[a]:a,this.options[b],"type"===a)},bindValidationEvents:function(){this.valid=null;this.$element.addClass("parsley-validated");this.$element.off("."+
this.type);this.options.remote&&!/change/i.test(this.options.trigger)&&(this.options.trigger=!this.options.trigger?"change":" change");var a=(!this.options.trigger?"":this.options.trigger)+(/key/i.test(this.options.trigger)?"":" keyup");this.$element.is("select")&&(a+=/change/i.test(a)?"":" change");a=a.replace(/^\s+/g,"").replace(/\s+$/g,"");this.$element.on((a+" ").split(" ").join("."+this.type+" "),!1,d.proxy(this.eventValidation,this))},generateHash:function(){return"parsley-"+(Math.random()+
"").substring(2)},getHash:function(){return this.hash},getVal:function(){return"undefined"!==typeof this.$element.domApi(this.options.namespace).value?this.$element.domApi(this.options.namespace).value:this.$element.val()},eventValidation:function(a){var b=this.getVal();if("keyup"===a.type&&!/keyup/i.test(this.options.trigger)&&!this.validatedOnce||"change"===a.type&&!/change/i.test(this.options.trigger)&&!this.validatedOnce||!this.isRadioOrCheckbox&&this.getLength(b)<this.options.validationMinlength&&
!this.validatedOnce)return!0;this.validate()},getLength:function(a){return!a||!a.hasOwnProperty("length")?0:a.length},isValid:function(){return this.validate(!1)},hasConstraints:function(){for(var a in this.constraints)return!0;return!1},validate:function(a){var b=this.getVal(),c=null;if(!this.hasConstraints()||this.$element.is(this.options.excluded))return null;if(this.options.listeners.onFieldValidate(this.element,this)||""===b&&!this.isRequired)return this.UI.reset(),null;if(!this.needsValidation(b))return this.valid;
c=this.applyValidators();("undefined"!==typeof a?a:this.options.showErrors)&&this.manageValidationResult();return c},needsValidation:function(a){if(!this.options.validateIfUnchanged&&null!==this.valid&&this.val===a&&this.validatedOnce)return!1;this.val=a;return this.validatedOnce=!0},applyValidators:function(){var a=null,b;for(b in this.constraints){var c=this.Validator.validators[this.constraints[b].name]().validate(this.val,this.constraints[b].requirements,this);!1===c?(a=!1,this.constraints[b].valid=
a):!0===c&&(this.constraints[b].valid=!0,a=!1!==a)}if(!1===a)this.options.listeners.onFieldError(this.element,this.constraints,this);else!0===a&&!1===this.options.listeners.onFieldSuccess(this.element,this.constraints,this)&&(a=!1);return a},manageValidationResult:function(){var a=null,b=[],c;for(c in this.constraints)!1===this.constraints[c].valid?(b.push(this.constraints[c]),a=!1):!0===this.constraints[c].valid&&(this.UI.removeError(this.constraints[c].name),a=!1!==a);this.valid=a;if(!0===this.valid)return this.UI.removeErrors(),
this.UI.errorClassHandler.removeClass(this.options.errorClass).addClass(this.options.successClass),!0;if(!1===this.valid){if(!0===this.options.priorityEnabled){for(var a=0,e,f=0;f<b.length;f++)e=this.Validator.validators[b[f].name]().priority,e>a&&(c=b[f],a=e);this.UI.manageError(c)}else for(f=0;f<b.length;f++)this.UI.manageError(b[f]);this.UI.errorClassHandler.removeClass(this.options.successClass).addClass(this.options.errorClass);return!1}this.UI.ulError&&0===d(this.ulError).children().length&&
this.UI.removeErrors();return a},addListener:function(a){for(var b in a)this.options.listeners[b]=a[b]},destroy:function(){this.$element.removeClass("parsley-validated");this.UI.reset();this.$element.off("."+this.type).removeData(this.type)}};var p=function(a,b,c){this.initMultiple(a,b);this.inherit(a,b);this.Validator=new h(b);this.init(a,c||"ParsleyFieldMultiple")};p.prototype={constructor:p,initMultiple:function(a,b){this.element=a;this.$element=d(a);this.group=b.group||!1;this.hash=this.getName();
this.siblings=this.group?'[parsley-group="'+this.group+'"]':'input[name="'+this.$element.attr("name")+'"]';this.isRadioOrCheckbox=!0;this.isRadio=this.$element.is("input[type=radio]");this.isCheckbox=this.$element.is("input[type=checkbox]");this.errorClassHandler=b.errors.classHandler(a,this.isRadioOrCheckbox)||this.$element.parent()},inherit:function(a,b){var c=new m(a,b,"ParsleyFieldMultiple"),d;for(d in c)"undefined"===typeof this[d]&&(this[d]=c[d])},getName:function(){if(this.group)return"parsley-"+
this.group;if("undefined"===typeof this.$element.attr("name"))throw"A radio / checkbox input must have a parsley-group attribute or a name to be Parsley validated !";return"parsley-"+this.$element.attr("name").replace(/(:|\.|\[|\])/g,"")},getVal:function(){if(this.isRadio)return d(this.siblings+":checked").val()||"";if(this.isCheckbox){var a=[];d(this.siblings+":checked").each(function(){a.push(d(this).val())});return a}},bindValidationEvents:function(){this.valid=null;this.$element.addClass("parsley-validated");
this.$element.off("."+this.type);var a=this,b=(!this.options.trigger?"":this.options.trigger)+(/change/i.test(this.options.trigger)?"":" change"),b=b.replace(/^\s+/g,"").replace(/\s+$/g,"");d(this.siblings).each(function(){d(this).on(b.split(" ").join("."+a.type+" "),!1,d.proxy(a.eventValidation,a))})}};var q=function(a,b,c){this.init(a,b,c||"parsleyForm")};q.prototype={constructor:q,init:function(a,b,c){this.type=c;this.items=[];this.$element=d(a);this.options=b;var e=this;this.$element.find(b.inputs).each(function(){e.addItem(this)});
this.$element.on("submit."+this.type,!1,d.proxy(this.validate,this))},addListener:function(a){for(var b in a)if(/Field/.test(b))for(var c=0;c<this.items.length;c++)this.items[c].addListener(a);else this.options.listeners[b]=a[b]},addItem:function(a){if(d(a).is(this.options.excluded))return!1;a=d(a).parsley(this.options);a.setParent(this);this.items.push(a)},removeItem:function(a){a=d(a).parsley();for(var b=0;b<this.items.length;b++)if(this.items[b].hash===a.hash)return this.items[b].destroy(),this.items.splice(b,
1),!0;return!1},validate:function(a){var b=!0;this.focusedField=!1;for(var c=0;c<this.items.length;c++)if("undefined"!==typeof this.items[c]&&!1===this.items[c].validate()&&(b=!1,!this.focusedField&&"first"===this.options.focus||"last"===this.options.focus))this.focusedField=this.items[c].$element;if(this.focusedField&&!b)if(0<this.options.scrollDuration){var e=this,c=this.focusedField.offset().top-d(window).height()/2;d("html, body").animate({scrollTop:c},this.options.scrollDuration,function(){e.focusedField.focus()})}else this.focusedField.focus();
a=this.options.listeners.onFormValidate(b,a,this);return"undefined"!==typeof a?a:b},isValid:function(){for(var a=0;a<this.items.length;a++)if(!1===this.items[a].isValid())return!1;return!0},removeErrors:function(){for(var a=0;a<this.items.length;a++)this.items[a].parsley("reset")},destroy:function(){for(var a=0;a<this.items.length;a++)this.items[a].destroy();this.$element.off("."+this.type).removeData(this.type)},reset:function(){for(var a=0;a<this.items.length;a++)this.items[a].UI.reset()}};d.fn.parsley=
function(a,b){function c(b,c){var e=d(b).data(c);if(!e){switch(c){case "parsleyForm":e=new q(b,f,"parsleyForm");break;case "parsleyField":e=new m(b,f,"parsleyField");break;case "parsleyFieldMultiple":e=new p(b,f,"parsleyFieldMultiple");break;default:return}d(b).data(c,e)}return"string"===typeof a&&"function"===typeof e[a]?(e=e[a].apply(e,k),"undefined"!==typeof e?e:d(b)):e}var e=d(this).data("parsleyNamespace")?d(this).data("parsleyNamespace"):"undefined"!==typeof a&&"undefined"!==typeof a.namespace?
a.namespace:d.fn.parsley.defaults.namespace,f=d.extend(!0,{},d.fn.parsley.defaults,"undefined"!==typeof window.ParsleyConfig?window.ParsleyConfig:{},a,this.domApi(e)),g=null,k=Array.prototype.slice.call(arguments,1);d(this).is("form")||"undefined"!==typeof d(this).domApi(e).bind?g=c(d(this),"parsleyForm"):d(this).is(f.inputs)&&(g=c(d(this),!d(this).is("input[type=radio], input[type=checkbox]")?"parsleyField":"parsleyFieldMultiple"));return"function"===typeof b?b():g};d(window).on("load",function(){d("[parsley-validate], [data-parsley-validate]").each(function(){d(this).parsley()})});
d.fn.domApi=function(a){var b,c={},e=RegExp("^"+a,"i");if("undefined"===typeof this[0])return{};for(var f in this[0].attributes)if(b=this[0].attributes[f],null!==b&&b.specified&&e.test(b.name)){var g=c,k=r(b.name.replace(a,"")),l;b=b.value;var h=void 0;try{l=b?"true"==b||("false"==b?!1:"null"==b?null:!isNaN(h=Number(b))?h:/^[\[\{]/.test(b)?d.parseJSON(b):b):b}catch(m){l=b}g[k]=l}return c};var r=function(a){return a.replace(/-+(.)?/g,function(a,c){return c?c.toUpperCase():""})};d.fn.parsley.defaults=
{namespace:"parsley-",inputs:"input, textarea, select",excluded:"input[type=hidden], input[type=file], :disabled",priorityEnabled:!0,trigger:!1,animate:!0,animateDuration:300,scrollDuration:500,focus:"first",validationMinlength:3,successClass:"parsley-success",errorClass:"parsley-error",errorMessage:!1,validators:{},showErrors:!0,messages:{},validateIfUnchanged:!1,errors:{classHandler:function(a,b){},container:function(a,b){},errorsWrapper:"<ul></ul>",errorElem:"<li></li>"},listeners:{onFieldValidate:function(a,
b){return!1},onFormValidate:function(a,b,c){},onFieldError:function(a,b,c){},onFieldSuccess:function(a,b,c){}}}}(window.jQuery||window.Zepto);


/*
colpick Color Picker
Copyright 2013 Jose Vargas. Licensed under GPL license. Based on Stefan Petre's Color Picker www.eyecon.ro, dual licensed under the MIT and GPL licenses
For usage and examples: colpick.com/plugin
 */
!function(t){var i=function(){var i='<div class="colpick"><div class="colpick_color"><div class="colpick_color_overlay1"><div class="colpick_color_overlay2"><div class="colpick_selector_outer"><div class="colpick_selector_inner"></div></div></div></div></div><div class="colpick_hue"><div class="colpick_hue_arrs"><div class="colpick_hue_larr"></div><div class="colpick_hue_rarr"></div></div></div><div class="colpick_new_color"></div><div class="colpick_current_color"></div><div class="colpick_hex_field"><div class="colpick_field_letter">#</div><input type="text" maxlength="6" size="6" /></div><div class="colpick_rgb_r colpick_field"><div class="colpick_field_letter">R</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_rgb_g colpick_field"><div class="colpick_field_letter">G</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_rgb_b colpick_field"><div class="colpick_field_letter">B</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_hsb_h colpick_field"><div class="colpick_field_letter">H</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_hsb_s colpick_field"><div class="colpick_field_letter">S</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_hsb_b colpick_field"><div class="colpick_field_letter">B</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_submit"></div></div>',a={showEvent:"click",bornIn:"body",onShow:function(){},onBeforeShow:function(){},onHide:function(){},onChange:function(){},onSubmit:function(){},colorScheme:"light",color:"2EB398",livePreview:!0,flat:!1,layout:"full",submit:1,submitText:'<i class="fa fa-magic"></i>',height:156},l=function(i,a){var c=o(i);t(a).data("colpick").fields.eq(1).val(c.r).end().eq(2).val(c.g).end().eq(3).val(c.b).end()},r=function(i,a){t(a).data("colpick").fields.eq(4).val(Math.round(i.h)).end().eq(5).val(Math.round(i.s)).end().eq(6).val(Math.round(i.b)).end()},n=function(i,a){t(a).data("colpick").fields.eq(0).val(d(i))},s=function(i,a){t(a).data("colpick").selector.css("backgroundColor","#"+d({h:i.h,s:100,b:100})),t(a).data("colpick").selectorIndic.css({left:parseInt(t(a).data("colpick").height*i.s/100,10),top:parseInt(t(a).data("colpick").height*(100-i.b)/100,10)})},p=function(i,a){t(a).data("colpick").hue.css("top",parseInt(t(a).data("colpick").height-t(a).data("colpick").height*i.h/360,10))},f=function(i,a){t(a).data("colpick").currentColor.css("backgroundColor","#"+d(i))},u=function(i,a){t(a).data("colpick").newColor.css("backgroundColor","#"+d(i))},v=function(){var i,a=t(this).parent().parent();this.parentNode.className.indexOf("_hex")>0?(a.data("colpick").color=i=c(L(this.value)),l(i,a.get(0)),r(i,a.get(0))):this.parentNode.className.indexOf("_hsb")>0?(a.data("colpick").color=i=H({h:parseInt(a.data("colpick").fields.eq(4).val(),10),s:parseInt(a.data("colpick").fields.eq(5).val(),10),b:parseInt(a.data("colpick").fields.eq(6).val(),10)}),l(i,a.get(0)),n(i,a.get(0))):(a.data("colpick").color=i=e(z({r:parseInt(a.data("colpick").fields.eq(1).val(),10),g:parseInt(a.data("colpick").fields.eq(2).val(),10),b:parseInt(a.data("colpick").fields.eq(3).val(),10)})),n(i,a.get(0)),r(i,a.get(0))),s(i,a.get(0)),p(i,a.get(0)),u(i,a.get(0)),a.data("colpick").onChange.apply(a.parent(),[i,d(i),o(i)])},h=function(){t(this).parent().removeClass("colpick_focus")},k=function(){t(this).parent().parent().data("colpick").fields.parent().removeClass("colpick_focus"),t(this).parent().addClass("colpick_focus")},g=function(i){i.preventDefault?i.preventDefault():i.returnValue=!1;var a=t(this).parent().find("input").focus(),c={el:t(this).parent().addClass("colpick_slider"),max:this.parentNode.className.indexOf("_hsb_h")>0?360:this.parentNode.className.indexOf("_hsb")>0?100:255,y:i.pageY,field:a,val:parseInt(a.val(),10),preview:t(this).parent().parent().data("colpick").livePreview};t(document).mouseup(c,m),t(document).mousemove(c,_)},_=function(t){return t.data.field.val(Math.max(0,Math.min(t.data.max,parseInt(t.data.val-t.pageY+t.data.y,10)))),t.data.preview&&v.apply(t.data.field.get(0),[!0]),!1},m=function(i){return v.apply(i.data.field.get(0),[!0]),i.data.el.removeClass("colpick_slider").find("input").focus(),t(document).off("mouseup",m),t(document).off("mousemove",_),!1},b=function(i){i.preventDefault?i.preventDefault():i.returnValue=!1;var a={cal:t(this).parent(),y:t(this).offset().top};a.preview=a.cal.data("colpick").livePreview,t(document).mouseup(a,w),t(document).mousemove(a,x),v.apply(a.cal.data("colpick").fields.eq(4).val(parseInt(360*(a.cal.data("colpick").height-(i.pageY-a.y))/a.cal.data("colpick").height,10)).get(0),[a.preview])},x=function(t){return v.apply(t.data.cal.data("colpick").fields.eq(4).val(parseInt(360*(t.data.cal.data("colpick").height-Math.max(0,Math.min(t.data.cal.data("colpick").height,t.pageY-t.data.y)))/t.data.cal.data("colpick").height,10)).get(0),[t.data.preview]),!1},w=function(i){return l(i.data.cal.data("colpick").color,i.data.cal.get(0)),n(i.data.cal.data("colpick").color,i.data.cal.get(0)),t(document).off("mouseup",w),t(document).off("mousemove",x),!1},y=function(i){i.preventDefault?i.preventDefault():i.returnValue=!1;var a={cal:t(this).parent(),pos:t(this).offset()};a.preview=a.cal.data("colpick").livePreview,t(document).mouseup(a,I),t(document).mousemove(a,M),v.apply(a.cal.data("colpick").fields.eq(6).val(parseInt(100*(a.cal.data("colpick").height-(i.pageY-a.pos.top))/a.cal.data("colpick").height,10)).end().eq(5).val(parseInt(100*(i.pageX-a.pos.left)/a.cal.data("colpick").height,10)).get(0),[a.preview])},M=function(t){return v.apply(t.data.cal.data("colpick").fields.eq(6).val(parseInt(100*(t.data.cal.data("colpick").height-Math.max(0,Math.min(t.data.cal.data("colpick").height,t.pageY-t.data.pos.top)))/t.data.cal.data("colpick").height,10)).end().eq(5).val(parseInt(100*Math.max(0,Math.min(t.data.cal.data("colpick").height,t.pageX-t.data.pos.left))/t.data.cal.data("colpick").height,10)).get(0),[t.data.preview]),!1},I=function(i){return l(i.data.cal.data("colpick").color,i.data.cal.get(0)),n(i.data.cal.data("colpick").color,i.data.cal.get(0)),t(document).off("mouseup",I),t(document).off("mousemove",M),!1},C=function(){var i=t(this).parent(),a=i.data("colpick").color;i.data("colpick").origColor=a,f(a,i.get(0)),i.data("colpick").onSubmit(a,d(a),o(a),i.data("colpick").el)},q=function(){var i=t("#"+t(this).data("colpickId"));i.data("colpick").onBeforeShow.apply(this,[i.get(0)]);var a=t(i.data("colpick").bornIn),c=a.offset(),e=t(this).offset(),o=a.scrollTop()+e.top+this.offsetHeight,l=e.left-c.left,d=T();l+346>d.l+d.w&&(l-=346),i.css({left:l+"px",top:o+"px"}),0!=i.data("colpick").onShow.apply(this,[i.get(0)])&&i.show(),t("html").mousedown({cal:i},S),i.mousedown(function(t){t.stopPropagation()})},S=function(i){0!=i.data.cal.data("colpick").onHide.apply(this,[i.data.cal.get(0)])&&i.data.cal.hide(),t("html").off("mousedown",S)},T=function(){var t="CSS1Compat"==document.compatMode;return{l:window.pageXOffset||(t?document.documentElement.scrollLeft:document.body.scrollLeft),w:window.innerWidth||(t?document.documentElement.clientWidth:document.body.clientWidth)}},H=function(t){return{h:Math.min(360,Math.max(0,t.h)),s:Math.min(100,Math.max(0,t.s)),b:Math.min(100,Math.max(0,t.b))}},z=function(t){return{r:Math.min(255,Math.max(0,t.r)),g:Math.min(255,Math.max(0,t.g)),b:Math.min(255,Math.max(0,t.b))}},L=function(t){var i=6-t.length;if(i>0){for(var a=[],c=0;i>c;c++)a.push("0");a.push(t),t=a.join("")}return t},N=function(){var i=t(this).parent(),a=i.data("colpick").origColor;i.data("colpick").color=a,l(a,i.get(0)),n(a,i.get(0)),r(a,i.get(0)),s(a,i.get(0)),p(a,i.get(0)),u(a,i.get(0))};return{init:function(o){if(o=t.extend({},a,o||{}),"string"==typeof o.color)o.color=c(o.color);else if(void 0!=o.color.r&&void 0!=o.color.g&&void 0!=o.color.b)o.color=e(o.color);else{if(void 0==o.color.h||void 0==o.color.s||void 0==o.color.b)return this;o.color=H(o.color)}return this.each(function(){if(!t(this).data("colpickId")){var a=t.extend({},o);a.origColor=o.color;var c="collorpicker_"+parseInt(1e3*Math.random());t(this).data("colpickId",c);var e=t(i).attr("id",c);e.addClass("colpick_"+a.layout+(a.submit?"":" colpick_"+a.layout+"_ns")),"light"!=a.colorScheme&&e.addClass("colpick_"+a.colorScheme),e.find("div.colpick_submit").html(a.submitText).click(C),a.fields=e.find("input").change(v).blur(h).focus(k),e.find("div.colpick_field_arrs").mousedown(g).end().find("div.colpick_current_color").click(N),a.selector=e.find("div.colpick_color").mousedown(y),a.selectorIndic=a.selector.find("div.colpick_selector_outer"),a.el=this,a.hue=e.find("div.colpick_hue_arrs"),huebar=a.hue.parent();var d=navigator.userAgent.toLowerCase(),_="Microsoft Internet Explorer"===navigator.appName,m=_?parseFloat(d.match(/msie ([0-9]{1,}[\.0-9]{0,})/)[1]):0,x=_&&10>m,w=["#ff0000","#ff0080","#ff00ff","#8000ff","#0000ff","#0080ff","#00ffff","#00ff80","#00ff00","#80ff00","#ffff00","#ff8000","#ff0000"];if(x){var M,I;for(M=0;11>=M;M++)I=t("<div></div>").attr("style","height:8.333333%; filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr="+w[M]+", endColorstr="+w[M+1]+'); -ms-filter: "progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='+w[M]+", endColorstr="+w[M+1]+')";'),huebar.append(I)}else stopList=w.join(","),huebar.attr("style","background:-webkit-linear-gradient(top center,"+stopList+"); background:-moz-linear-gradient(top center,"+stopList+"); background:linear-gradient(to bottom,"+stopList+"); "),huebar.css({background:"linear-gradient(to bottom,"+stopList+")"}),huebar.css({background:"-moz-linear-gradient(top,"+stopList+")"});e.find("div.colpick_hue").mousedown(b),a.newColor=e.find("div.colpick_new_color"),a.currentColor=e.find("div.colpick_current_color"),e.data("colpick",a),l(a.color,e.get(0)),r(a.color,e.get(0)),n(a.color,e.get(0)),p(a.color,e.get(0)),s(a.color,e.get(0)),f(a.color,e.get(0)),u(a.color,e.get(0)),a.flat?(e.appendTo(this).show(),e.addClass("colpick_flat").css({position:"relative",display:"block"})):(e.appendTo(a.bornIn),t(this).on(a.showEvent,q),e.css({position:"absolute"}))}})},showPicker:function(){return this.each(function(){t(this).data("colpickId")&&q.apply(this)})},hidePicker:function(){return this.each(function(){t(this).data("colpickId")&&t("#"+t(this).data("colpickId")).hide()})},setColor:function(i,a){if(a="undefined"==typeof a?1:a,"string"==typeof i)i=c(i);else if(void 0!=i.r&&void 0!=i.g&&void 0!=i.b)i=e(i);else{if(void 0==i.h||void 0==i.s||void 0==i.b)return this;i=H(i)}return this.each(function(){if(t(this).data("colpickId")){var c=t("#"+t(this).data("colpickId"));c.data("colpick").color=i,c.data("colpick").origColor=i,l(i,c.get(0)),r(i,c.get(0)),n(i,c.get(0)),p(i,c.get(0)),s(i,c.get(0)),u(i,c.get(0)),c.data("colpick").onChange.apply(c.parent(),[i,d(i),o(i),1]),a&&f(i,c.get(0))}})}}}(),a=function(t){var t=parseInt(t.indexOf("#")>-1?t.substring(1):t,16);return{r:t>>16,g:(65280&t)>>8,b:255&t}},c=function(t){return e(a(t))},e=function(t){var i={h:0,s:0,b:0},a=Math.min(t.r,t.g,t.b),c=Math.max(t.r,t.g,t.b),e=c-a;return i.b=c,i.s=0!=c?255*e/c:0,i.h=0!=i.s?t.r==c?(t.g-t.b)/e:t.g==c?2+(t.b-t.r)/e:4+(t.r-t.g)/e:-1,i.h*=60,i.h<0&&(i.h+=360),i.s*=100/255,i.b*=100/255,i},o=function(t){var i={},a=Math.round(t.h),c=Math.round(255*t.s/100),e=Math.round(255*t.b/100);if(0==c)i.r=i.g=i.b=e;else{var o=e,l=(255-c)*e/255,d=(o-l)*(a%60)/60;360==a&&(a=0),60>a?(i.r=o,i.b=l,i.g=l+d):120>a?(i.g=o,i.b=l,i.r=o-d):180>a?(i.g=o,i.r=l,i.b=l+d):240>a?(i.b=o,i.r=l,i.g=o-d):300>a?(i.b=o,i.g=l,i.r=l+d):360>a?(i.r=o,i.g=l,i.b=o-d):(i.r=0,i.g=0,i.b=0)}return{r:Math.round(i.r),g:Math.round(i.g),b:Math.round(i.b)}},l=function(i){var a=[i.r.toString(16),i.g.toString(16),i.b.toString(16)];return t.each(a,function(t,i){1==i.length&&(a[t]="0"+i)}),a.join("")},d=function(t){return l(o(t))};t.fn.extend({colpick:i.init,colpickHide:i.hidePicker,colpickShow:i.showPicker,colpickSetColor:i.setColor}),t.extend({colpickRgbToHex:l,colpickRgbToHsb:e,colpickHsbToHex:d,colpickHsbToRgb:o,colpickHexToHsb:c,colpickHexToRgb:a})}(jQuery);

/**
 * bootstrap-colorpalette.js
 * (c) 2013~ Jiung Kang
 * Licensed under the Apache License, Version 2.0 (the "License");
 */
!function(t){"use strict";var F=[["#000000","#424242","#636363","#9C9C94","#CEC6CE","#EFEFEF","#F7F7F7","#FFFFFF"],["#FF0000","#FF9C00","#FFFF00","#00FF00","#00FFFF","#0000FF","#9C00FF","#FF00FF"],["#F7C6CE","#FFE7CE","#FFEFC6","#D6EFD6","#CEDEE7","#CEE7F7","#D6D6E7","#E7D6DE"],["#E79C9C","#FFC69C","#FFE79C","#B5D6A5","#A5C6CE","#9CC6EF","#B5A5D6","#D6A5BD"],["#E76363","#F7AD6B","#FFD663","#94BD7B","#73A5AD","#6BADDE","#8C7BC6","#C67BA5"],["#CE0000","#E79439","#EFC631","#6BA54A","#4A7B8C","#3984C6","#634AA5","#A54A7B"],["#9C0000","#B56308","#BD9400","#397B21","#104A5A","#085294","#311873","#731842"],["#630000","#7B3900","#846300","#295218","#083139","#003163","#21104A","#4A1031"]],e=function(F,e){F.addClass("bootstrap-colorpalette");var o=[];t.each(e,function(F,e){o.push("<div>"),t.each(e,function(t,F){var e=['<a href="javascript:void(0)"  class="btn-color" style="background-color:',F,'" data-value="',F,'" title="',F,'"></a>'].join("");o.push(e)}),o.push("</div>")}),F.html(o.join(""))},o=function(F){F.element.on("click",function(e){var o=t(e.target),a=o.closest(".btn-color");if(a[0]){var n=a.attr("data-value");F.value=n,F.element.trigger({type:"selectColor",color:n,element:F.element})}})},a=function(t,a){this.element=t,e(t,a&&a.colors||F),o(this)};t.fn.extend({colorPalette:function(F){return this.each(function(){var e=t(this),o=e.data("colorpalette");o||e.data("colorpalette",new a(e,F))}),this}})}(jQuery);



/* ==========================================================
 * bootstrap-maxlength.js v1.4.2
 * 
 * Copyright (c) 2013 Maurizio Napoleoni; 
 *
 * Licensed under the terms of the MIT license.
 * See: https://github.com/mimo84/bootstrap-maxlength/blob/master/LICENSE
 * ========================================================== */
/*jslint browser:true*/
/*global  jQuery*/
!function(t){"use strict";t.fn.extend({maxlength:function(e,a){function s(t){var a=t.val(),s=a.match(/\n/g),o=0,r=0;return e.utf8?(o=s?n(s):0,r=n(t.val())+o):(o=s?s.length:0,r=t.val().length+o),r}function n(t){for(var e=0,a=0;a<t.length;a++){var s=t.charCodeAt(a);128>s?e++:e+=s>127&&2048>s?2:3}return e}function o(t,a,n){var o=!0;return!e.alwaysShow&&n-s(t)>a&&(o=!1),o}function r(t,e){var a=e-s(t);return a}function i(t){t.css({display:"block"})}function l(t){t.css({display:"none"})}function h(t,a){var s="";return e.message?s=e.message.replace("%charsTyped%",a).replace("%charsRemaining%",t-a).replace("%charsTotal%",t):(e.preText&&(s+=e.preText),s+=e.showCharsTyped?a:t-a,e.showMaxLength&&(s+=e.separator+t),e.postText&&(s+=e.postText)),s}function c(t,a,s,n){n.html(h(s,s-t)),t>0?o(a,e.threshold,s)?i(n.removeClass(e.limitReachedClass).addClass(e.warningClass)):l(n):i(n.removeClass(e.warningClass).addClass(e.limitReachedClass))}function d(e){var a=e[0];return t.extend({},"function"==typeof a.getBoundingClientRect?a.getBoundingClientRect():{width:a.offsetWidth,height:a.offsetHeight},e.offset())}function u(t,a){var s=d(t),n=m.offset(),o=t.outerWidth(),r=a.outerWidth(),i=a.outerWidth(),l=a.outerHeight(),h=m.scrollTop()+s.top,c=s.left-n.left;switch(e.placement){case"bottom":a.css({top:h+s.height,left:c+s.width/2-i/2});break;case"top":a.css({top:h-l,left:c+s.width/2-i/2});break;case"left":a.css({top:h+s.height/2-l/2,left:c-i});break;case"right":a.css({top:h+s.height/2-l/2,left:c+s.width});break;case"bottom-right":a.css({top:h+s.height,left:c+o-i});break;case"top-right":a.css({top:h-l,left:c+o-i});break;case"top-left":a.css({top:h-l,left:c});break;case"bottom-left":a.css({top:h+t.outerHeight(),left:c});break;case"centered-right":a.css({top:h+l/2,left:c+o-r-3})}}function f(t){return t.attr("maxlength")||t.attr("size")}var p=t(this),g={alwaysShow:p.data("always-show")||!1,bornIn:"body",threshold:p.data("threshold")||10,warningClass:"label label-success",limitReachedClass:"label label-danger",separator:p.data("separator")||" / ",preText:p.data("pre-text"),postText:p.data("post-text"),showMaxLength:!0,placement:p.data("position")||"bottom-left",showCharsTyped:!0,validate:!1,utf8:!1};t.isFunction(e)&&!a&&(a=e,e={}),e=t.extend(g,e),console.log(e.warningClass);var m=t(e.bornIn);return this.each(function(){var a,s,n=t(this);n.focus(function(){var e=h(a,"0");a=f(n),s=t('<span class="bootstrap-maxlength"></span>').css({display:"none",position:"absolute",whiteSpace:"nowrap",zIndex:1099}).html(e),n.is("textarea")&&(n.data("maxlenghtsizex",n.outerWidth()),n.data("maxlenghtsizey",n.outerHeight()),n.mouseup(function(){(n.outerWidth()!==n.data("maxlenghtsizex")||n.outerHeight()!==n.data("maxlenghtsizey"))&&u(n,s),n.data("maxlenghtsizex",n.outerWidth()),n.data("maxlenghtsizey",n.outerHeight())})),m.append(s);var o=r(n,f(n));c(o,n,a,s),u(n,s)}),n.blur(function(){s.remove()}),n.keyup(function(t){{var o=r(n,f(n)),i=!0;t.keyCode||t.which}return e.validate&&0>o?i=!1:c(o,n,a,s),i})})}})}(jQuery);


/*!
 * bootstrap-select v1.3.5
 * http://silviomoreto.github.io/bootstrap-select/
 *
 * Copyright 2013 bootstrap-select
 * Licensed under the MIT license
 */
!function(t){"use strict";t.expr[":"].icontains=function(e,i,s){return t(e).text().toUpperCase().indexOf(s[3].toUpperCase())>=0};var e=function(i,s,n){n&&(n.stopPropagation(),n.preventDefault()),this.$element=t(i),this.$newElement=null,this.$button=null,this.$menu=null,this.options=t.extend({},t.fn.selectpicker.defaults,this.$element.data(),"object"==typeof s&&s),null==this.options.title&&(this.options.title=this.$element.attr("title")),this.val=e.prototype.val,this.render=e.prototype.render,this.refresh=e.prototype.refresh,this.setStyle=e.prototype.setStyle,this.selectAll=e.prototype.selectAll,this.deselectAll=e.prototype.deselectAll,this.init()};e.prototype={constructor:e,init:function(){this.$element.hide(),this.multiple=this.$element.prop("multiple");var e=this.$element.attr("id");if(this.$newElement=this.createView(),this.$element.after(this.$newElement),this.$menu=this.$newElement.find("> .dropdown-menu"),this.$button=this.$newElement.find("> button"),this.$searchbox=this.$newElement.find("input"),void 0!==e){var i=this;this.$button.attr("data-id",e),t('label[for="'+e+'"]').click(function(t){t.preventDefault(),i.$button.focus()})}this.checkDisabled(),this.clickListener(),this.liveSearchListener(),this.render(),this.liHeight(),this.setStyle(),this.setWidth(),this.options.container&&this.selectPosition(),this.$menu.data("this",this),this.$newElement.data("this",this)},createDropdown:function(){var e=this.multiple?" show-tick":"",i=this.options.header?'<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>'+this.options.header+"</div>":"",s=this.options.liveSearch?'<div class="bootstrap-select-searchbox"><input type="text" class="input-block-level form-control" /></div>':"",n="<div class='btn-group bootstrap-select"+e+"'><button type='button' class='btn dropdown-toggle selectpicker' data-toggle='dropdown'><div class='filter-option pull-left'></div>&nbsp;<div class='caret'></div></button><div class='dropdown-menu open'>"+i+s+"<ul class='dropdown-menu inner selectpicker' role='menu'></ul></div></div>";return t(n)},createView:function(){var t=this.createDropdown(),e=this.createLi();return t.find("ul").append(e),t},reloadLi:function(){this.destroyLi();var t=this.createLi();this.$menu.find("ul").append(t)},destroyLi:function(){this.$menu.find("li").remove()},createLi:function(){var e=this,i=[],s="";return this.$element.find("option").each(function(){var s=t(this),n=s.attr("class")||"",o=s.attr("style")||"",a=s.data("content")?s.data("content"):s.html(),l=void 0!==s.data("subtext")?'<small class="muted text-muted">'+s.data("subtext")+"</small>":"",d=void 0!==s.data("icon")?'<i class="glyphicon '+s.data("icon")+'"></i> ':"";if(""!==d&&(s.is(":disabled")||s.parent().is(":disabled"))&&(d="<span>"+d+"</span>"),s.data("content")||(a=d+'<span class="text">'+a+l+"</span>"),e.options.hideDisabled&&(s.is(":disabled")||s.parent().is(":disabled")))i.push('<a style="min-height: 0; padding: 0"></a>');else if(s.parent().is("optgroup")&&s.data("divider")!==!0)if(0==s.index()){var h=s.parent().attr("label"),r=void 0!==s.parent().data("subtext")?'<small class="muted text-muted">'+s.parent().data("subtext")+"</small>":"",c=s.parent().data("icon")?'<i class="'+s.parent().data("icon")+'"></i> ':"";h=c+'<span class="text">'+h+r+"</span>",0!=s[0].index?i.push('<div class="div-contain"><div class="divider"></div></div><dt>'+h+"</dt>"+e.createA(a,"opt "+n,o)):i.push("<dt>"+h+"</dt>"+e.createA(a,"opt "+n,o))}else i.push(e.createA(a,"opt "+n,o));else s.data("divider")===!0?i.push('<div class="div-contain"><div class="divider"></div></div>'):t(this).data("hidden")===!0?i.push(""):i.push(e.createA(a,n,o))}),t.each(i,function(t,e){s+="<li rel="+t+">"+e+"</li>"}),this.multiple||0!=this.$element.find("option:selected").length||this.options.title||this.$element.find("option").eq(0).prop("selected",!0).attr("selected","selected"),t(s)},createA:function(t,e,i){return'<a tabindex="0" class="'+e+'" style="'+i+'">'+t+'<i class="glyphicon glyphicon-ok icon-ok check-mark"></i></a>'},render:function(){var e=this;this.$element.find("option").each(function(i){e.setDisabled(i,t(this).is(":disabled")||t(this).parent().is(":disabled")),e.setSelected(i,t(this).is(":selected"))}),this.tabIndex();var i=this.$element.find("option:selected").map(function(){var i,s=t(this),n=s.data("icon")&&e.options.showIcon?'<i class="glyphicon '+s.data("icon")+'"></i> ':"";return i=e.options.showSubtext&&s.attr("data-subtext")&&!e.multiple?' <small class="muted text-muted">'+s.data("subtext")+"</small>":"",s.data("content")&&e.options.showContent?s.data("content"):void 0!=s.attr("title")?s.attr("title"):n+s.html()+i}).toArray(),s=this.multiple?i.join(", "):i[0];if(this.multiple&&this.options.selectedTextFormat.indexOf("count")>-1){var n=this.options.selectedTextFormat.split(">"),o=this.options.hideDisabled?":not([disabled])":"";(n.length>1&&i.length>n[1]||1==n.length&&i.length>=2)&&(s=this.options.countSelectedText.replace("{0}",i.length).replace("{1}",this.$element.find('option:not([data-divider="true"]):not([data-hidden="true"])'+o).length))}s||(s=void 0!=this.options.title?this.options.title:this.options.noneSelectedText),this.$newElement.find(".filter-option").html(s)},setStyle:function(t,e){this.$element.attr("class")&&this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device/gi,""));var i=t?t:this.options.style;"add"==e?this.$button.addClass(i):"remove"==e?this.$button.removeClass(i):(this.$button.removeClass(this.options.style),this.$button.addClass(i))},liHeight:function(){var t=this.$newElement.clone();t.appendTo("body");var e=t.addClass("open").find("> .dropdown-menu"),i=e.find("li > a").outerHeight(),s=this.options.header?e.find(".popover-title").outerHeight():0,n=this.options.liveSearch?e.find(".bootstrap-select-searchbox").outerHeight():0;t.remove(),this.$newElement.data("liHeight",i).data("headerHeight",s).data("searchHeight",n)},setSize:function(){var e,i,s,n=this,o=this.$menu,a=o.find(".inner"),l=this.$newElement.outerHeight(),d=this.$newElement.data("liHeight"),h=this.$newElement.data("headerHeight"),r=this.$newElement.data("searchHeight"),c=o.find("li .divider").outerHeight(!0),p=parseInt(o.css("padding-top"))+parseInt(o.css("padding-bottom"))+parseInt(o.css("border-top-width"))+parseInt(o.css("border-bottom-width")),u=this.options.hideDisabled?":not(.disabled)":"",f=t(window),m=p+parseInt(o.css("margin-top"))+parseInt(o.css("margin-bottom"))+2,v=function(){i=n.$newElement.offset().top-f.scrollTop(),s=f.height()-i-l};if(v(),this.options.header&&o.css("padding-top",0),"auto"==this.options.size){var b=function(){var t;v(),e=s-m,n.$newElement.toggleClass("dropup",i>s&&e-m<o.height()&&n.options.dropupAuto),n.$newElement.hasClass("dropup")&&(e=i-m),t=o.find("li").length+o.find("dt").length>3?3*d+m-2:0,o.css({"max-height":e+"px",overflow:"hidden","min-height":t+"px"}),a.css({"max-height":e-h-r-p+"px","overflow-y":"auto","min-height":t-p+"px"})};b(),t(window).resize(b),t(window).scroll(b)}else if(this.options.size&&"auto"!=this.options.size&&o.find("li"+u).length>this.options.size){var $=o.find("li"+u+" > *").filter(":not(.div-contain)").slice(0,this.options.size).last().parent().index(),w=o.find("li").slice(0,$+1).find(".div-contain").length;e=d*this.options.size+w*c+p,this.$newElement.toggleClass("dropup",i>s&&e<o.height()&&this.options.dropupAuto),o.css({"max-height":e+h+r+"px",overflow:"hidden"}),a.css({"max-height":e-p+"px","overflow-y":"auto"})}},setWidth:function(){if("auto"==this.options.width){this.$menu.css("min-width","0");var t=this.$newElement.clone().appendTo("body"),e=t.find("> .dropdown-menu").css("width");t.remove(),this.$newElement.css("width",e)}else"fit"==this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width","").addClass("fit-width")):this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width",this.options.width)):(this.$menu.css("min-width",""),this.$newElement.css("width",""));this.$newElement.hasClass("fit-width")&&"fit"!==this.options.width&&this.$newElement.removeClass("fit-width")},selectPosition:function(){var e,i,s=this,n="<div />",o=t(n),a=function(t){o.addClass(t.attr("class")).toggleClass("dropup",t.hasClass("dropup")),e=t.offset(),i=t.hasClass("dropup")?0:t[0].offsetHeight,o.css({top:e.top+i,left:e.left,width:t[0].offsetWidth,position:"absolute"})};this.$newElement.on("click",function(){a(t(this)),o.appendTo(s.options.container),o.toggleClass("open",!t(this).hasClass("open")),o.append(s.$menu)}),t(window).resize(function(){a(s.$newElement)}),t(window).on("scroll",function(){a(s.$newElement)}),t("html").on("click",function(e){t(e.target).closest(s.$newElement).length<1&&o.removeClass("open")})},mobile:function(){this.$element.addClass("mobile-device").appendTo(this.$newElement),this.options.container&&this.$menu.hide()},refresh:function(){this.reloadLi(),this.render(),this.setWidth(),this.setStyle(),this.checkDisabled(),this.liHeight()},update:function(){this.reloadLi(),this.setWidth(),this.setStyle(),this.checkDisabled(),this.liHeight()},setSelected:function(t,e){this.$menu.find("li").eq(t).toggleClass("selected",e)},setDisabled:function(t,e){e?this.$menu.find("li").eq(t).addClass("disabled").find("a").attr("href","#").attr("tabindex",-1):this.$menu.find("li").eq(t).removeClass("disabled").find("a").removeAttr("href").attr("tabindex",0)},isDisabled:function(){return this.$element.is(":disabled")},checkDisabled:function(){var t=this;this.isDisabled()?this.$button.addClass("disabled").attr("tabindex",-1):(this.$button.hasClass("disabled")&&this.$button.removeClass("disabled"),-1==this.$button.attr("tabindex")&&(this.$element.data("tabindex")||this.$button.removeAttr("tabindex"))),this.$button.click(function(){return!t.isDisabled()})},tabIndex:function(){this.$element.is("[tabindex]")&&(this.$element.data("tabindex",this.$element.attr("tabindex")),this.$button.attr("tabindex",this.$element.data("tabindex")))},clickListener:function(){var e=this;t("body").on("touchstart.dropdown",".dropdown-menu",function(t){t.stopPropagation()}),this.$newElement.on("click",function(){e.setSize()}),this.$menu.on("click","li a",function(i){var s=t(this).parent().index(),n=e.$element.val();if(e.multiple&&i.stopPropagation(),i.preventDefault(),!e.isDisabled()&&!t(this).parent().hasClass("disabled")){var o=e.$element.find("option"),a=o.eq(s);if(e.multiple){var l=a.prop("selected");a.prop("selected",!l)}else o.prop("selected",!1),a.prop("selected",!0);e.$button.focus(),n!=e.$element.val()&&e.$element.change()}}),this.$menu.on("click","li.disabled a, li dt, li .div-contain, h3.popover-title",function(t){t.target==this&&(t.preventDefault(),t.stopPropagation(),e.$button.focus())}),this.$searchbox.on("click",function(t){t.stopPropagation()}),this.$element.change(function(){e.render()})},liveSearchListener:function(){var t=this;this.$newElement.on("click.dropdown.data-api",function(){t.options.liveSearch&&setTimeout(function(){t.$searchbox.focus()},10)}),this.$searchbox.on("keyup",function(e){40==e.keyCode?t.$menu.find("li:not(.divider):visible a").first().focus():38==e.keyCode?t.$menu.find("li:not(.divider):visible a").last().focus():t.$searchbox.val()?t.$menu.find("li").show().not(":icontains("+t.$searchbox.val()+")").hide():t.$menu.find("li").show()}).on("keydown",function(e){return 13==e.keyCode?(t.$button.click().focus(),e.preventDefault(),!1):void 0})},val:function(t){return void 0!=t?(this.$element.val(t),this.$element.change(),this.$element):this.$element.val()},selectAll:function(){this.$element.find("option").prop("selected",!0).attr("selected","selected"),this.render()},deselectAll:function(){this.$element.find("option").prop("selected",!1).removeAttr("selected"),this.render()},keydown:function(e){var i=t(this).parent().data("this");i.$searchbox&&i.$searchbox.is(":not(:visible)")&&e.keyCode>=48&&e.keyCode<=90&&(t(":focus").click(),i.$searchbox.focus())},keyup:function(e){var i,s,n,o;if(i=t(this),n=i.parent(),o=n.data("this"),o.options.container&&(n=o.$menu),s=t("[role=menu] li:not(.divider):visible a",n),s.length){if(/(38|40)/.test(e.keyCode)&&o.$searchbox){var a=s.index(t(":focus")),l=i.data("lastIndex");i.data("lastIndex",a),a==l&&(0==a||a==s.length-1)&&o.$searchbox.focus()}else{var d={48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9"},h=[];s.each(function(){t(this).parent().is(":not(.disabled)")&&t.trim(t(this).text().toLowerCase()).substring(0,1)==d[e.keyCode]&&h.push(t(this).parent().index())});var r=t(document).data("keycount");r++,t(document).data("keycount",r);var c=t.trim(t(":focus").text().toLowerCase()).substring(0,1);c!=d[e.keyCode]?(r=1,t(document).data("keycount",r)):r>=h.length&&t(document).data("keycount",0),s.eq(h[r-1]).focus()}/(13|32)/.test(e.keyCode)&&i.is("[role=menu]")&&(e.preventDefault(),t(":focus").click(),t(document).data("keycount",0))}},hide:function(){this.$newElement.hide()},show:function(){this.$newElement.show()},destroy:function(){this.$newElement.remove(),this.$element.remove()}},t.fn.selectpicker=function(i,s){var n,o=arguments,a=this.each(function(){if(t(this).is("select")){var a=t(this),l=a.data("selectpicker"),d="object"==typeof i&&i;if(l){if(d)for(var h in d)l.options[h]=d[h]}else a.data("selectpicker",l=new e(this,d,s));if("string"==typeof i){var r=i;l[r]instanceof Function?([].shift.apply(o),n=l[r].apply(l,o)):n=l.options[r]}}});return void 0!=n?n:a},t.fn.selectpicker.defaults={style:"btn-default",size:"auto",title:null,selectedTextFormat:"values",noneSelectedText:"Nothing selected",countSelectedText:"{0} of {1} selected",width:!1,container:!1,hideDisabled:!1,showSubtext:!1,showIcon:!0,showContent:!0,dropupAuto:!0,header:!1,liveSearch:!1},t(document).data("keycount",0).on("keydown",".selectpicker[data-toggle=dropdown], .selectpicker[role=menu]",e.prototype.keydown).on("keyup",".selectpicker[data-toggle=dropdown], .selectpicker[role=menu]",e.prototype.keyup)}(window.jQuery);

/* ===========================================================
 * Bootstrap: fileinput.js v3.0.0-p7
 * http://jasny.github.com/bootstrap/javascript.html#fileinput
 * ===========================================================
 * Copyright 2012 Jasny BV, Netherlands.
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

+function(e){"use strict";var t="Microsoft Internet Explorer"==window.navigator.appName,i=function(t,i){if(this.$element=e(t),this.$input=this.$element.find(":file"),0!==this.$input.length){this.name=this.$input.attr("name")||i.name,this.$hidden=this.$element.find('input[type=hidden][name="'+this.name+'"]'),0===this.$hidden.length&&(this.$hidden=e('<input type="hidden" />'),this.$element.prepend(this.$hidden)),this.$preview=this.$element.find(".fileinput-preview");var n=this.$preview.css("height");"inline"!=this.$preview.css("display")&&"0px"!=n&&"none"!=n&&this.$preview.css("line-height",n),this.original={exists:this.$element.hasClass("fileinput-exists"),preview:this.$preview.html(),hiddenVal:this.$hidden.val()},this.listen()}};i.prototype.listen=function(){this.$input.on("change.bs.fileinput",e.proxy(this.change,this)),e(this.$input[0].form).on("reset.bs.fileinput",e.proxy(this.reset,this)),this.$element.find('[data-trigger="fileinput"]').on("click.bs.fileinput",e.proxy(this.trigger,this)),this.$element.find('[data-dismiss="fileinput"]').on("click.bs.fileinput",e.proxy(this.clear,this))},i.prototype.change=function(t){if(void 0===t.target.files&&(t.target.files=t.target&&t.target.value?[{name:t.target.value.replace(/^.+\\/,"")}]:[]),0!==t.target.files.length){this.$hidden.val(""),this.$hidden.attr("name",""),this.$input.attr("name",this.name);var i=t.target.files[0];if(this.$preview.length>0&&("undefined"!=typeof i.type?i.type.match("image.*"):i.name.match(/\.(gif|png|jpe?g)$/i))&&"undefined"!=typeof FileReader){var n=new FileReader,s=this.$preview,a=this.$element;n.onload=function(n){var l=e("<img>").attr("src",n.target.result);t.target.files[0].result=n.target.result,a.find(".fileinput-filename").text(i.name),"none"!=s.css("max-height")&&l.css("max-height",parseInt(s.css("max-height"),10)-parseInt(s.css("padding-top"),10)-parseInt(s.css("padding-bottom"),10)-parseInt(s.css("border-top"),10)-parseInt(s.css("border-bottom"),10)),s.html(l),a.addClass("fileinput-exists").removeClass("fileinput-new"),a.trigger("change.bs.fileinput",t.target.files)},n.readAsDataURL(i)}else this.$element.find(".fileinput-filename").text(i.name),this.$preview.text(i.name),this.$element.addClass("fileinput-exists").removeClass("fileinput-new"),this.$element.trigger("change.bs.fileinput")}},i.prototype.clear=function(e){if(e&&e.preventDefault(),this.$hidden.val(""),this.$hidden.attr("name",this.name),this.$input.attr("name",""),t){var i=this.$input.clone(!0);this.$input.after(i),this.$input.remove(),this.$input=i}else this.$input.val("");this.$preview.html(""),this.$element.find(".fileinput-filename").text(""),this.$element.addClass("fileinput-new").removeClass("fileinput-exists"),e!==!1&&(this.$input.trigger("change"),this.$element.trigger("clear.bs.fileinput"))},i.prototype.reset=function(){this.clear(!1),this.$hidden.val(this.original.hiddenVal),this.$preview.html(this.original.preview),this.$element.find(".fileinput-filename").text(""),this.original.exists?this.$element.addClass("fileinput-exists").removeClass("fileinput-new"):this.$element.addClass("fileinput-new").removeClass("fileinput-exists"),this.$element.trigger("reset.bs.fileinput")},i.prototype.trigger=function(e){this.$input.trigger("click"),e.preventDefault()},e.fn.fileinput=function(t){return this.each(function(){var n=e(this),s=n.data("fileinput");s||n.data("fileinput",s=new i(this,t)),"string"==typeof t&&s[t]()})},e.fn.fileinput.Constructor=i,e(document).on("click.fileinput.data-api",'[data-provides="fileinput"]',function(t){var i=e(this);if(!i.data("fileinput")){i.fileinput(i.data());var n=e(t.target).closest('[data-dismiss="fileinput"],[data-trigger="fileinput"]');n.length>0&&(t.preventDefault(),n.trigger("click.bs.fileinput"))}})}(window.jQuery);


// jQuery Slider Plugin
// Egor Khmelev - http://blog.egorkhmelev.com/ - hmelyoff@gmail.com
!function(){Function.prototype.inheritFrom=function(t,e){var i=function(){};if(i.prototype=t.prototype,this.prototype=new i,this.prototype.constructor=this,this.prototype.baseConstructor=t,this.prototype.superClass=t.prototype,e)for(var s in e)this.prototype[s]=e[s]},Number.prototype.jSliderNice=function(t){var e,i=/^(-)?(\d+)([\.,](\d+))?$/,s=Number(this),n=String(s),o="",r=" ";if(e=n.match(i)){var a=e[2],h=e[4]?Number("0."+e[4]):0;if(h){var l=Math.pow(10,t?t:2);if(h=Math.round(h*l),sNewDecPart=String(h),o=sNewDecPart,sNewDecPart.length<t)for(var u=t-sNewDecPart.length,c=0;u>c;c++)o="0"+o;o=","+o}else if(t&&0!=t){for(var c=0;t>c;c++)o+="0";o=","+o}var d;if(Number(a)<1e3)d=a+o;else{var c,p="";for(c=1;3*c<a.length;c++)p=r+a.substring(a.length-3*c,a.length-3*(c-1))+p;d=a.substr(0,3-3*c+a.length)+p+o}return e[1]?"-"+d:d}return n},this.jSliderIsArray=function(t){return"undefined"==typeof t?!1:t instanceof Array||!(t instanceof Object)&&"[object Array]"==Object.prototype.toString.call(t)||"number"==typeof t.length&&"undefined"!=typeof t.splice&&"undefined"!=typeof t.propertyIsEnumerable&&!t.propertyIsEnumerable("splice")?!0:!1}}(),function(){var t={};this.jSliderTmpl=function e(i,s){var n=/\W/.test(i)?new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+i.replace(/[\r\t\n]/g," ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');"):t[i]=t[i]||e(i);return s?n(s):n}}(),function(t){this.Draggable=function(){this._init.apply(this,arguments)},Draggable.prototype={oninit:function(){},events:function(){},onmousedown:function(){this.ptr.css({position:"absolute"})},onmousemove:function(t,e,i){this.ptr.css({left:e,top:i})},onmouseup:function(){},isDefault:{drag:!1,clicked:!1,toclick:!0,mouseup:!1},_init:function(){if(arguments.length>0){this.ptr=t(arguments[0]),this.outer=t(".draggable-outer"),this.is={},t.extend(this.is,this.isDefault);var e=this.ptr.offset();this.d={left:e.left,top:e.top,width:this.ptr.width(),height:this.ptr.height()},this.oninit.apply(this,arguments),this._events()}},_getPageCoords:function(t){return t.targetTouches&&t.targetTouches[0]?{x:t.targetTouches[0].pageX,y:t.targetTouches[0].pageY}:{x:t.pageX,y:t.pageY}},_bindEvent:function(t,e,i){this.supportTouches_?t.get(0).addEventListener(this.events_[e],i,!1):t.bind(this.events_[e],i)},_events:function(){var e=this;this.supportTouches_=t.browser.webkit&&-1!=navigator.userAgent.indexOf("Mobile"),this.events_={click:this.supportTouches_?"touchstart":"click",down:this.supportTouches_?"touchstart":"mousedown",move:this.supportTouches_?"touchmove":"mousemove",up:this.supportTouches_?"touchend":"mouseup"},this._bindEvent(t(document),"move",function(t){e.is.drag&&(t.stopPropagation(),t.preventDefault(),e._mousemove(t))}),this._bindEvent(t(document),"down",function(t){e.is.drag&&(t.stopPropagation(),t.preventDefault())}),this._bindEvent(t(document),"up",function(t){e._mouseup(t)}),this._bindEvent(this.ptr,"down",function(t){return e._mousedown(t),!1}),this._bindEvent(this.ptr,"up",function(t){e._mouseup(t)}),this.ptr.find("a").click(function(){return e.is.clicked=!0,e.is.toclick?void 0:(e.is.toclick=!0,!1)}).mousedown(function(t){return e._mousedown(t),!1}),this.events()},_mousedown:function(e){this.is.drag=!0,this.is.clicked=!1,this.is.mouseup=!1;var i=this.ptr.offset(),s=this._getPageCoords(e);this.cx=s.x-i.left,this.cy=s.y-i.top,t.extend(this.d,{left:i.left,top:i.top,width:this.ptr.width(),height:this.ptr.height()}),this.outer&&this.outer.get(0)&&this.outer.css({height:Math.max(this.outer.height(),t(document.body).height()),overflow:"hidden"}),this.onmousedown(e)},_mousemove:function(t){this.is.toclick=!1;var e=this._getPageCoords(t);this.onmousemove(t,e.x-this.cx,e.y-this.cy)},_mouseup:function(e){this.is.drag&&(this.is.drag=!1,this.outer&&this.outer.get(0)&&(t.browser.mozilla?this.outer.css({overflow:"hidden"}):this.outer.css({overflow:"visible"}),t.browser.msie&&"6.0"==t.browser.version?this.outer.css({height:"100%"}):this.outer.css({height:"auto"})),this.onmouseup(e))}}}(jQuery),function(t){function e(){this.baseConstructor.apply(this,arguments)}t.jslider=function(e,i){var s=t(e);return s.data("jslider")||s.data("jslider",new jSlider(e,i)),s.data("jslider")},t.fn.jslider=function(e,i){function s(t){return void 0!==t}function n(t){return null!=t}var o,r=arguments;return this.each(function(){var a=t.jslider(this,e);if("string"==typeof e)switch(e){case"value":if(s(r[1])&&s(r[2])){var h=a.getPointers();n(h[0])&&n(r[1])&&(h[0].set(r[1]),h[0].setIndexOver()),n(h[1])&&n(r[2])&&(h[1].set(r[2]),h[1].setIndexOver())}else if(s(r[1])){var h=a.getPointers();n(h[0])&&n(r[1])&&(h[0].set(r[1]),h[0].setIndexOver())}else o=a.getValue();break;case"prc":if(s(r[1])&&s(r[2])){var h=a.getPointers();n(h[0])&&n(r[1])&&(h[0]._set(r[1]),h[0].setIndexOver()),n(h[1])&&n(r[2])&&(h[1]._set(r[2]),h[1].setIndexOver())}else if(s(r[1])){var h=a.getPointers();n(h[0])&&n(r[1])&&(h[0]._set(r[1]),h[0].setIndexOver())}else o=a.getPrcValue();break;case"calculatedValue":var l=a.getValue().split(";");o="";for(var u=0;u<l.length;u++)o+=(u>0?";":"")+a.nice(l[u]);break;case"skin":a.setSkin(r[1])}else e||i||(jSliderIsArray(o)||(o=[]),o.push(jslider))}),jSliderIsArray(o)&&1==o.length&&(o=o[0]),o||this};var i={settings:{from:1,to:10,step:1,smooth:!0,limits:!0,round:0,value:"5;7",dimension:""},className:"jslider",selector:".jslider-",template:jSliderTmpl('<span class="<%=className%>"><table><tr><td><div class="<%=className%>-bg"><i class="l"><i></i></i><i class="r"><i></i></i><i class="v"><i></i></i></div><div class="<%=className%>-pointer"><i></i></div><div class="<%=className%>-pointer <%=className%>-pointer-to"><i></i></div><div class="<%=className%>-label"><span><%=settings.from%></span></div><div class="<%=className%>-label <%=className%>-label-to"><span><%=settings.to%></span><%=settings.dimension%></div><div class="<%=className%>-value"><span></span><%=settings.dimension%></div><div class="<%=className%>-value <%=className%>-value-to"><span></span><%=settings.dimension%></div><div class="<%=className%>-scale"><%=scale%></div></td></tr></table></span>')};this.jSlider=function(){return this.init.apply(this,arguments)},jSlider.prototype={init:function(e,s){this.settings=t.extend(!0,{},i.settings,s?s:{}),this.inputNode=t(e).hide(),this.settings.interval=this.settings.to-this.settings.from,this.settings.value=this.inputNode.attr("value"),this.settings.calculate&&t.isFunction(this.settings.calculate)&&(this.nice=this.settings.calculate),this.settings.onstatechange&&t.isFunction(this.settings.onstatechange)&&(this.onstatechange=this.settings.onstatechange),this.is={init:!1},this.o={},this.create()},onstatechange:function(){},create:function(){var s=this;this.domNode=t(i.template({className:i.className,settings:{from:this.nice(this.settings.from),to:this.nice(this.settings.to),dimension:this.settings.dimension},scale:this.generateScale()})),this.inputNode.after(this.domNode),this.drawScale(),this.settings.skin&&this.settings.skin.length>0&&this.setSkin(this.settings.skin),this.sizes={domWidth:this.domNode.width(),domOffset:this.domNode.offset()},t.extend(this.o,{pointers:{},labels:{0:{o:this.domNode.find(i.selector+"value").not(i.selector+"value-to")},1:{o:this.domNode.find(i.selector+"value").filter(i.selector+"value-to")}},limits:{0:this.domNode.find(i.selector+"label").not(i.selector+"label-to"),1:this.domNode.find(i.selector+"label").filter(i.selector+"label-to")}}),t.extend(this.o.labels[0],{value:this.o.labels[0].o.find("span")}),t.extend(this.o.labels[1],{value:this.o.labels[1].o.find("span")}),s.settings.value.split(";")[1]||(this.settings.single=!0,this.domNode.addDependClass("single")),s.settings.limits||this.domNode.addDependClass("limitless"),this.domNode.find(i.selector+"pointer").each(function(t){var i=s.settings.value.split(";")[t];if(i){s.o.pointers[t]=new e(this,t,s);var n=s.settings.value.split(";")[t-1];n&&new Number(i)<new Number(n)&&(i=n),i=i<s.settings.from?s.settings.from:i,i=i>s.settings.to?s.settings.to:i,s.o.pointers[t].set(i,!0)}}),this.o.value=this.domNode.find(".v"),this.is.init=!0,t.each(this.o.pointers,function(){s.redraw(this)}),function(e){t(window).resize(function(){e.onresize()})}(this)},setSkin:function(t){this.skin_&&this.domNode.removeDependClass(this.skin_,"_"),this.domNode.addDependClass(this.skin_=t,"_")},setPointersIndex:function(){t.each(this.getPointers(),function(t){this.index(t)})},getPointers:function(){return this.o.pointers},generateScale:function(){if(this.settings.scale&&this.settings.scale.length>0){for(var t="",e=this.settings.scale,i=Math.round(100/(e.length-1)*10)/10,s=0;s<e.length;s++)t+='<span style="left: '+s*i+'%">'+("|"!=e[s]?"<ins>"+e[s]+"</ins>":"")+"</span>";return t}return""},drawScale:function(){this.domNode.find(i.selector+"scale span ins").each(function(){t(this).css({marginLeft:-t(this).outerWidth()/2})})},onresize:function(){var e=this;this.sizes={domWidth:this.domNode.width(),domOffset:this.domNode.offset()},t.each(this.o.pointers,function(){e.redraw(this)})},limits:function(t,e){if(!this.settings.smooth){var i=100*this.settings.step/this.settings.interval;t=Math.round(t/i)*i}var s=this.o.pointers[1-e.uid];return s&&e.uid&&t<s.value.prc&&(t=s.value.prc),s&&!e.uid&&t>s.value.prc&&(t=s.value.prc),0>t&&(t=0),t>100&&(t=100),Math.round(10*t)/10},redraw:function(t){return this.is.init?(this.setValue(),this.o.pointers[0]&&this.o.pointers[1]&&this.o.value.css({left:this.o.pointers[0].value.prc+"%",width:this.o.pointers[1].value.prc-this.o.pointers[0].value.prc+"%"}),this.o.labels[t.uid].value.html(this.nice(t.value.origin)),this.redrawLabels(t),void 0):!1},redrawLabels:function(t){function e(t,e,s){return e.margin=-e.label/2,label_left=e.border+e.margin,0>label_left&&(e.margin-=label_left),e.border+e.label/2>i.sizes.domWidth?(e.margin=0,e.right=!0):e.right=!1,t.o.css({left:s+"%",marginLeft:e.margin,right:"auto"}),e.right&&t.o.css({left:"auto",right:0}),e}var i=this,s=this.o.labels[t.uid],n=t.value.prc,o={label:s.o.outerWidth(),right:!1,border:n*this.sizes.domWidth/100};if(!this.settings.single){var r=this.o.pointers[1-t.uid],a=this.o.labels[r.uid];switch(t.uid){case 0:o.border+o.label/2>a.o.offset().left-this.sizes.domOffset.left?(a.o.css({visibility:"hidden"}),a.value.html(this.nice(r.value.origin)),s.o.css({visibility:"visible"}),n=(r.value.prc-n)/2+n,r.value.prc!=t.value.prc&&(s.value.html(this.nice(t.value.origin)+"&nbsp;&ndash;&nbsp;"+this.nice(r.value.origin)),o.label=s.o.outerWidth(),o.border=n*this.sizes.domWidth/100)):a.o.css({visibility:"visible"});break;case 1:o.border-o.label/2<a.o.offset().left-this.sizes.domOffset.left+a.o.outerWidth()?(a.o.css({visibility:"hidden"}),a.value.html(this.nice(r.value.origin)),s.o.css({visibility:"visible"}),n=(n-r.value.prc)/2+r.value.prc,r.value.prc!=t.value.prc&&(s.value.html(this.nice(r.value.origin)+"&nbsp;&ndash;&nbsp;"+this.nice(t.value.origin)),o.label=s.o.outerWidth(),o.border=n*this.sizes.domWidth/100)):a.o.css({visibility:"visible"})}}if(o=e(s,o,n),a){var o={label:a.o.outerWidth(),right:!1,border:r.value.prc*this.sizes.domWidth/100};o=e(a,o,r.value.prc)}this.redrawLimits()},redrawLimits:function(){if(this.settings.limits){var t=[!0,!0];for(key in this.o.pointers)if(!this.settings.single||0==key){var e=this.o.pointers[key],i=this.o.labels[e.uid],s=i.o.offset().left-this.sizes.domOffset.left,n=this.o.limits[0];s<n.outerWidth()&&(t[0]=!1);var n=this.o.limits[1];s+i.o.outerWidth()>this.sizes.domWidth-n.outerWidth()&&(t[1]=!1)}for(var o=0;o<t.length;o++)t[o]?this.o.limits[o].fadeIn("fast"):this.o.limits[o].fadeOut("fast")}},setValue:function(){var t=this.getValue();this.inputNode.attr("value",t),this.onstatechange.call(this,t)},getValue:function(){if(!this.is.init)return!1;var e=this,i="";return t.each(this.o.pointers,function(t){void 0==this.value.prc||isNaN(this.value.prc)||(i+=(t>0?";":"")+e.prcToValue(this.value.prc))}),i},getPrcValue:function(){if(!this.is.init)return!1;var e="";return t.each(this.o.pointers,function(t){void 0==this.value.prc||isNaN(this.value.prc)||(e+=(t>0?";":"")+this.value.prc)}),e},prcToValue:function(t){if(this.settings.heterogeneity&&this.settings.heterogeneity.length>0)for(var e=this.settings.heterogeneity,i=0,s=this.settings.from,n=0;n<=e.length;n++){if(e[n])var o=e[n].split("/");else var o=[100,this.settings.to];if(o[0]=new Number(o[0]),o[1]=new Number(o[1]),t>=i&&t<=o[0])var r=s+(t-i)*(o[1]-s)/(o[0]-i);i=o[0],s=o[1]}else var r=this.settings.from+t*this.settings.interval/100;return this.round(r)},valueToPrc:function(t,e){if(this.settings.heterogeneity&&this.settings.heterogeneity.length>0)for(var i=this.settings.heterogeneity,s=0,n=this.settings.from,o=0;o<=i.length;o++){if(i[o])var r=i[o].split("/");else var r=[100,this.settings.to];if(r[0]=new Number(r[0]),r[1]=new Number(r[1]),t>=n&&t<=r[1])var a=e.limits(s+(t-n)*(r[0]-s)/(r[1]-n));s=r[0],n=r[1]}else var a=e.limits(100*(t-this.settings.from)/this.settings.interval);return a},round:function(t){return t=Math.round(t/this.settings.step)*this.settings.step,t=this.settings.round?Math.round(t*Math.pow(10,this.settings.round))/Math.pow(10,this.settings.round):Math.round(t)},nice:function(t){return t=t.toString().replace(/,/gi,"."),t=t.toString().replace(/ /gi,""),Number.prototype.jSliderNice?new Number(t).jSliderNice(this.settings.round).replace(/-/gi,"&minus;"):new Number(t)}},e.inheritFrom(Draggable,{oninit:function(t,e,i){this.uid=e,this.parent=i,this.value={},this.settings=this.parent.settings},onmousedown:function(){this._parent={offset:this.parent.domNode.offset(),width:this.parent.domNode.width()},this.ptr.addDependClass("hover"),this.setIndexOver()},onmousemove:function(t){var e=this._getPageCoords(t);this._set(this.calc(e.x))},onmouseup:function(){this.parent.settings.callback&&t.isFunction(this.parent.settings.callback)&&this.parent.settings.callback.call(this.parent,this.parent.getValue()),this.ptr.removeDependClass("hover")},setIndexOver:function(){this.parent.setPointersIndex(1),this.index(2)},index:function(t){this.ptr.css({zIndex:t})},limits:function(t){return this.parent.limits(t,this)},calc:function(t){var e=this.limits(100*(t-this._parent.offset.left)/this._parent.width);return e},set:function(t,e){this.value.origin=this.parent.round(t),this._set(this.parent.valueToPrc(t,this),e)},_set:function(t,e){e||(this.value.origin=this.parent.prcToValue(t)),this.value.prc=t,this.ptr.css({left:t+"%"}),this.parent.redraw(this)}})}(jQuery);

/**
 * Slider Pagination Concept
 * jquery.pagination.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */
!function(t){"use strict";t.Slider=function(t,i){this.$el=i,this.range=t.range,this.value=t.value,this.total=t.total,this.width=t.width,this._create()},t.Slider.prototype={_create:function(){ this.slider=this.$el.slider({ range: this.range ,value:this.value,min:1,max:this.total,step:1}),this.$value=t("<span>"+this.value+"</span>"),this.getHandle().append(this.$value)},setValue:function(t){this.value=t,this.$value.text(t),this.slider.slider("value",t)},getValue:function(){return this.value},getHandle:function(){return this.$el.find("a.ui-slider-handle")},getSlider:function(){return this.slider},getSliderEl:function(){return this.$el},next:function(t){this.value<this.total&&(this.setValue(++this.value),t&&t.call(this,this.value))},previous:function(t){this.value>1&&(this.setValue(--this.value),t&&t.call(this,this.value))}},t.Pagination=function(i,n){this.$el=t(n),this._init(i)},t.Pagination.defaults={  value:1,total:5,width:200,onChange:function(){return!1},onSlide:function(){return!1}},t.Pagination.prototype={_init:function(i){this.options=t.extend(!0,{},t.Pagination.defaults,i);var n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"};this.transEndEventName=n[Modernizr.prefixed("transition")],t.fn.applyStyle=Modernizr.csstransitions?t.fn.css:t.fn.animate,this._layout(),this._initEvents()},_layout:function(){this.$navNext=this.$el.find("nav > a.cp-next"),this.$navPrev=this.$el.find("nav > a.cp-prev");var i=t('<div class="cp-slider"></div>').appendTo(this.$el);this.slider=new t.Slider({ range: this.options.range, value:this.options.value,total:this.options.total,width:this.options.width},i),this.isSliderOpened=this.options.sliderOpened},_initEvents:function(){var i=this;this.slider.getHandle().on("click",function(){return i.isSliderOpened?!1:(i.isSliderOpened=!0,i.slider.getSliderEl().addClass("cp-slider-open"),i.$el.stop().applyStyle({width:i.options.width},t.extend(!0,[],{duration:"150ms"})),i.toggleNavigation(!1),!1)}),this.slider.getSlider().on({slidestop:function(n,e){if(!i.isSliderOpened)return!1;var s=function(){i.isSliderOpened=!1,i.slider.getSliderEl().removeClass("cp-slider-open"),i.toggleNavigation(!0)};i.$el.stop().applyStyle({width:0},t.extend(!0,[],{duration:"150ms",complete:s})).on(i.transEndEventName,function(){t(this).off(i.transEndEventName),s.call()}),i.options.onChange(e.value)},slide:function(t,n){return i.isSliderOpened?(i.slider.setValue(n.value),i.options.onSlide(n.value),void 0):!1}}),this.$navNext.on("click",function(){return i.slider.next(function(t){i.options.onChange(t)}),!1}),this.$navPrev.on("click",function(){return i.slider.previous(function(t){i.options.onChange(t)}),!1})},toggleNavigation:function(i){t.fn.render=i?t.fn.show:t.fn.hide,this.$navNext.render(),this.$navPrev.render()}},t.fn.modernSlider=function(i){var n=t.data(this,"pagination");if("string"==typeof i){var e=Array.prototype.slice.call(arguments,1);this.each(function(){n[i].apply(n,e)})}else this.each(function(){n?n._init():n=t.data(this,"pagination",new t.Pagination(i,this))});return n}}(jQuery,window);

/*!
 * jQuery twitter bootstrap wizard plugin
 * Examples and documentation at: http://github.com/VinceG/twitter-bootstrap-wizard
 * version 1.0
 * Requires jQuery v1.3.2 or later
 * Supports Bootstrap 2.2.x, 2.3.x, 3.0
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Authors: Vadim Vincent Gabriel (http://vadimg.com), Jason Gill (www.gilluminate.com)
 */
(function(e){var k=function(d,g){d=e(d);var a=this,b=e.extend({},e.fn.bootstrapWizard.defaults,g),f=null,c=null;this.rebindClick=function(b,a){b.unbind("click",a).bind("click",a)};this.fixNavigationButtons=function(){f.length||(c.find("a:first").tab("show"),f=c.find('li:has([data-toggle="tab"]):first'));e(b.previousSelector,d).toggleClass("disabled",a.firstIndex()>=a.currentIndex());e(b.nextSelector,d).toggleClass("disabled",a.currentIndex()>=a.navigationLength());a.rebindClick(e(b.nextSelector,d),
a.next);a.rebindClick(e(b.previousSelector,d),a.previous);a.rebindClick(e(b.lastSelector,d),a.last);a.rebindClick(e(b.firstSelector,d),a.first);if(b.onTabShow&&"function"===typeof b.onTabShow&&!1===b.onTabShow(f,c,a.currentIndex()))return!1};this.next=function(h){if(d.hasClass("last")||b.onNext&&"function"===typeof b.onNext&&!1===b.onNext(f,c,a.nextIndex()))return!1;$index=a.nextIndex();$index>a.navigationLength()||c.find('li:has([data-toggle="tab"]):eq('+$index+") a").tab("show")};this.previous=
function(h){if(d.hasClass("first")||b.onPrevious&&"function"===typeof b.onPrevious&&!1===b.onPrevious(f,c,a.previousIndex()))return!1;$index=a.previousIndex();0>$index||c.find('li:has([data-toggle="tab"]):eq('+$index+") a").tab("show")};this.first=function(h){if(b.onFirst&&"function"===typeof b.onFirst&&!1===b.onFirst(f,c,a.firstIndex())||d.hasClass("disabled"))return!1;c.find('li:has([data-toggle="tab"]):eq(0) a').tab("show")};this.last=function(h){if(b.onLast&&"function"===typeof b.onLast&&!1===
b.onLast(f,c,a.lastIndex())||d.hasClass("disabled"))return!1;c.find('li:has([data-toggle="tab"]):eq('+a.navigationLength()+") a").tab("show")};this.currentIndex=function(){return c.find('li:has([data-toggle="tab"])').index(f)};this.firstIndex=function(){return 0};this.lastIndex=function(){return a.navigationLength()};this.getIndex=function(a){return c.find('li:has([data-toggle="tab"])').index(a)};this.nextIndex=function(){return c.find('li:has([data-toggle="tab"])').index(f)+1};this.previousIndex=
function(){return c.find('li:has([data-toggle="tab"])').index(f)-1};this.navigationLength=function(){return c.find('li:has([data-toggle="tab"])').length-1};this.activeTab=function(){return f};this.nextTab=function(){return c.find('li:has([data-toggle="tab"]):eq('+(a.currentIndex()+1)+")").length?c.find('li:has([data-toggle="tab"]):eq('+(a.currentIndex()+1)+")"):null};this.previousTab=function(){return 0>=a.currentIndex()?null:c.find('li:has([data-toggle="tab"]):eq('+parseInt(a.currentIndex()-1)+")")};
this.show=function(a){return d.find('li:has([data-toggle="tab"]):eq('+a+") a").tab("show")};this.disable=function(a){c.find('li:has([data-toggle="tab"]):eq('+a+")").addClass("disabled")};this.enable=function(a){c.find('li:has([data-toggle="tab"]):eq('+a+")").removeClass("disabled")};this.hide=function(a){c.find('li:has([data-toggle="tab"]):eq('+a+")").hide()};this.display=function(a){c.find('li:has([data-toggle="tab"]):eq('+a+")").show()};this.remove=function(a){var b="undefined"!=typeof a[1]?a[1]:
!1;a=c.find('li:has([data-toggle="tab"]):eq('+a[0]+")");b&&(b=a.find("a").attr("href"),e(b).remove());a.remove()};c=d.find("ul:first",d);f=c.find('li:has([data-toggle="tab"]).active',d);c.hasClass(b.tabClass)||c.addClass(b.tabClass);if(b.onInit&&"function"===typeof b.onInit)b.onInit(f,c,0);if(b.onShow&&"function"===typeof b.onShow)b.onShow(f,c,a.nextIndex());a.fixNavigationButtons();e('a[data-toggle="tab"]',c).on("click",function(d){d=c.find('li:has([data-toggle="tab"])').index(e(d.currentTarget).parent('li:has([data-toggle="tab"])'));
if(b.onTabClick&&"function"===typeof b.onTabClick&&!1===b.onTabClick(f,c,a.currentIndex(),d))return!1});e('a[data-toggle="tab"]',c).on("shown shown.bs.tab",function(d){$element=e(d.target).parent();d=c.find('li:has([data-toggle="tab"])').index($element);if($element.hasClass("disabled")||b.onTabChange&&"function"===typeof b.onTabChange&&!1===b.onTabChange(f,c,a.currentIndex(),d))return!1;f=$element;a.fixNavigationButtons()})};e.fn.bootstrapWizard=function(d){if("string"==typeof d){var g=Array.prototype.slice.call(arguments,
1);1===g.length&&g.toString();return this.data("bootstrapWizard")[d](g)}return this.each(function(a){a=e(this);if(!a.data("bootstrapWizard")){var b=new k(a,d);a.data("bootstrapWizard",b)}})};e.fn.bootstrapWizard.defaults={tabClass:"nav nav-pills",nextSelector:".wizard .next",previousSelector:".wizard .previous",firstSelector:".wizard  .first",lastSelector:".wizard  .last",onShow:null,onInit:null,onNext:null,onPrevious:null,onLast:null,onFirst:null,onTabChange:null,onTabClick:null,onTabShow:null}})(jQuery);



/*
* MultiSelect v0.9.10
* Copyright (c) 2012 Louis Cuny
*
* This program is free software. It comes without any warranty, to
* the extent permitted by applicable law. You can redistribute it
* and/or modify it under the terms of the Do What The Fuck You Want
* To Public License, Version 2, as published by Sam Hocevar. See
* http://sam.zoy.org/wtfpl/COPYING for more details.
*/

!function(e){"use strict";var t=function(t,s){this.options=s,this.$element=e(t),this.$container=e("<div/>",{"class":"ms-container"}),this.$selectableContainer=e("<div/>",{"class":"ms-selectable"}),this.$selectionContainer=e("<div/>",{"class":"ms-selection"}),this.$selectableUl=e("<ul/>",{"class":"ms-list",tabindex:"-1"}),this.$selectionUl=e("<ul/>",{"class":"ms-list",tabindex:"-1"}),this.scrollTo=0,this.elemsSelector="li:visible:not(.ms-optgroup-label,.ms-optgroup-container,."+s.disabledClass+")"};t.prototype={constructor:t,init:function(){var t=this,s=this.$element;if(0===s.next(".ms-container").length){s.css({position:"absolute",left:"-9999px"}),s.attr("id",s.attr("id")?s.attr("id"):Math.ceil(1e3*Math.random())+"multiselect"),this.$container.attr("id","ms-"+s.attr("id")),this.$container.addClass(t.options.cssClass),s.find("option").each(function(){t.generateLisFromOption(this)}),this.$selectionUl.find(".ms-optgroup-label").hide(),t.options.selectableHeader&&t.$selectableContainer.append(t.options.selectableHeader),t.$selectableContainer.append(t.$selectableUl),t.options.selectableFooter&&t.$selectableContainer.append(t.options.selectableFooter),t.options.selectionHeader&&t.$selectionContainer.append(t.options.selectionHeader),t.$selectionContainer.append(t.$selectionUl),t.options.selectionFooter&&t.$selectionContainer.append(t.options.selectionFooter),t.$container.append(t.$selectableContainer),t.$container.append(t.$selectionContainer),s.after(t.$container),t.activeMouse(t.$selectableUl),t.activeKeyboard(t.$selectableUl);var l=t.options.dblClick?"dblclick":"click";t.$selectableUl.on(l,".ms-elem-selectable",function(){t.select(e(this).data("ms-value"))}),t.$selectionUl.on(l,".ms-elem-selection",function(){t.deselect(e(this).data("ms-value"))}),t.activeMouse(t.$selectionUl),t.activeKeyboard(t.$selectionUl),s.on("focus",function(){t.$selectableUl.focus()})}var i=s.find("option:selected").map(function(){return e(this).val()}).get();t.select(i,"init"),"function"==typeof t.options.afterInit&&t.options.afterInit.call(this,this.$container)},generateLisFromOption:function(t,s){for(var l=this,i=l.$element,n="",o=e(t),a=0;a<t.attributes.length;a++){var r=t.attributes[a];"value"!==r.name&&"disabled"!==r.name&&(n+=r.name+'="'+r.value+'" ')}var c=e("<li "+n+"><span>"+l.escapeHTML(o.text())+"</span></li>"),d=c.clone(),h=o.val(),p=l.sanitize(h);c.data("ms-value",h).addClass("ms-elem-selectable").attr("id",p+"-selectable"),d.data("ms-value",h).addClass("ms-elem-selection").attr("id",p+"-selection").hide(),(o.prop("disabled")||i.prop("disabled"))&&(d.addClass(l.options.disabledClass),c.addClass(l.options.disabledClass));var f=o.parent("optgroup");if(f.length>0){var u=f.attr("label"),m=l.sanitize(u),v=l.$selectableUl.find("#optgroup-selectable-"+m),b=l.$selectionUl.find("#optgroup-selection-"+m);if(0===v.length){var g='<li class="ms-optgroup-container"></li>',$='<ul class="ms-optgroup"><li class="ms-optgroup-label"><span>'+u+"</span></li></ul>";v=e(g),b=e(g),v.attr("id","optgroup-selectable-"+m),b.attr("id","optgroup-selection-"+m),v.append(e($)),b.append(e($)),l.options.selectableOptgroup&&(v.find(".ms-optgroup-label").on("click",function(){var t=f.children(":not(:selected)").map(function(){return e(this).val()}).get();l.select(t)}),b.find(".ms-optgroup-label").on("click",function(){var t=f.children(":selected").map(function(){return e(this).val()}).get();l.deselect(t)})),l.$selectableUl.append(v),l.$selectionUl.append(b)}s=void 0==s?v.children().length:s+1,c.insertAt(s,v.children()),d.insertAt(s,b.children())}else s=void 0==s?l.$selectableUl.children().length:s,c.insertAt(s,l.$selectableUl),d.insertAt(s,l.$selectionUl)},addOption:function(t){var s=this;t.value&&(t=[t]),e.each(t,function(t,l){if(l.value&&0===s.$element.find("option[value='"+l.value+"']").length){var i=e('<option value="'+l.value+'">'+l.text+"</option>"),t=parseInt("undefined"==typeof l.index?s.$element.children().length:l.index),n=void 0==l.nested?s.$element:e("optgroup[label='"+l.nested+"']");i.insertAt(t,n),s.generateLisFromOption(i.get(0),t,l.nested)}})},escapeHTML:function(t){return e("<div>").text(t).html()},activeKeyboard:function(t){var s=this;t.on("focus",function(){e(this).addClass("ms-focus")}).on("blur",function(){e(this).removeClass("ms-focus")}).on("keydown",function(l){switch(l.which){case 40:case 38:return l.preventDefault(),l.stopPropagation(),s.moveHighlight(e(this),38===l.which?-1:1),void 0;case 37:case 39:return l.preventDefault(),l.stopPropagation(),s.switchList(t),void 0;case 9:if(s.$element.is("[tabindex]")){l.preventDefault();var i=parseInt(s.$element.attr("tabindex"),10);return i=l.shiftKey?i-1:i+1,e('[tabindex="'+i+'"]').focus(),void 0}l.shiftKey&&s.$element.trigger("focus")}return e.inArray(l.which,s.options.keySelect)>-1?(l.preventDefault(),l.stopPropagation(),s.selectHighlighted(t),void 0):void 0})},moveHighlight:function(e,t){{var s=e.find(this.elemsSelector),l=s.filter(".ms-hover"),i=null,n=s.first().outerHeight(),o=e.height();"#"+this.$container.prop("id")}if(s.off("mouseenter"),s.removeClass("ms-hover"),1===t){if(i=l.nextAll(this.elemsSelector).first(),0===i.length){var a=l.parent();if(a.hasClass("ms-optgroup")){var r=a.parent(),c=r.next(":visible");i=c.length>0?c.find(this.elemsSelector).first():s.first()}else i=s.first()}}else if(-1===t&&(i=l.prevAll(this.elemsSelector).first(),0===i.length)){var a=l.parent();if(a.hasClass("ms-optgroup")){var r=a.parent(),d=r.prev(":visible");i=d.length>0?d.find(this.elemsSelector).last():s.last()}else i=s.last()}if(i.length>0){i.addClass("ms-hover");var h=e.scrollTop()+i.position().top-o/2+n/2;e.scrollTop(h)}},selectHighlighted:function(e){var t=e.find(this.elemsSelector),s=t.filter(".ms-hover").first();s.length>0&&(e.parent().hasClass("ms-selectable")?this.select(s.data("ms-value")):this.deselect(s.data("ms-value")),t.removeClass("ms-hover"))},switchList:function(e){e.blur(),e.parent().hasClass("ms-selectable")?this.$selectionUl.focus():this.$selectableUl.focus()},activeMouse:function(t){var s=this;t.on("mousemove",function(){var l=t.find(s.elemsSelector);l.on("mouseenter",function(){l.removeClass("ms-hover"),e(this).addClass("ms-hover")})})},refresh:function(){this.destroy(),this.$element.multiSelect(this.options)},destroy:function(){e("#ms-"+this.$element.attr("id")).remove(),this.$element.removeData("multiselect")},select:function(t,s){"string"==typeof t&&(t=[t]);var l=this,i=this.$element,n=e.map(t,function(e){return l.sanitize(e)}),o=this.$selectableUl.find("#"+n.join("-selectable, #")+"-selectable").filter(":not(."+l.options.disabledClass+")"),a=this.$selectionUl.find("#"+n.join("-selection, #")+"-selection").filter(":not(."+l.options.disabledClass+")"),r=i.find("option:not(:disabled)").filter(function(){return e.inArray(this.value,t)>-1});if("init"===s&&(o=this.$selectableUl.find("#"+n.join("-selectable, #")+"-selectable"),a=this.$selectionUl.find("#"+n.join("-selection, #")+"-selection")),o.length>0){o.addClass("ms-selected").hide(),a.addClass("ms-selected").show(),r.prop("selected",!0);var c=l.$selectableUl.children(".ms-optgroup-container");if(c.length>0){c.each(function(){var t=e(this).find(".ms-elem-selectable");t.length===t.filter(".ms-selected").length&&e(this).find(".ms-optgroup-label").hide()});var d=l.$selectionUl.children(".ms-optgroup-container");d.each(function(){var t=e(this).find(".ms-elem-selection");t.filter(".ms-selected").length>0&&e(this).find(".ms-optgroup-label").show()})}else if(l.options.keepOrder){var h=l.$selectionUl.find(".ms-selected");h.length>1&&h.last().get(0)!=a.get(0)&&a.insertAfter(h.last())}"init"!==s&&(i.trigger("change"),"function"==typeof l.options.afterSelect&&l.options.afterSelect.call(this,t))}},deselect:function(t){"string"==typeof t&&(t=[t]);var s=this,l=this.$element,i=e.map(t,function(e){return s.sanitize(e)}),n=this.$selectableUl.find("#"+i.join("-selectable, #")+"-selectable"),o=this.$selectionUl.find("#"+i.join("-selection, #")+"-selection").filter(".ms-selected").filter(":not(."+s.options.disabledClass+")"),a=l.find("option").filter(function(){return e.inArray(this.value,t)>-1});if(o.length>0){n.removeClass("ms-selected").show(),o.removeClass("ms-selected").hide(),a.prop("selected",!1);var r=s.$selectableUl.children(".ms-optgroup-container");if(r.length>0){r.each(function(){var t=e(this).find(".ms-elem-selectable");t.filter(":not(.ms-selected)").length>0&&e(this).find(".ms-optgroup-label").show()});var c=s.$selectionUl.children(".ms-optgroup-container");c.each(function(){var t=e(this).find(".ms-elem-selection");0===t.filter(".ms-selected").length&&e(this).find(".ms-optgroup-label").hide()})}l.trigger("change"),"function"==typeof s.options.afterDeselect&&s.options.afterDeselect.call(this,t)}},select_all:function(){var t=this.$element,s=t.val();if(t.find('option:not(":disabled")').prop("selected",!0),this.$selectableUl.find(".ms-elem-selectable").filter(":not(."+this.options.disabledClass+")").addClass("ms-selected").hide(),this.$selectionUl.find(".ms-optgroup-label").show(),this.$selectableUl.find(".ms-optgroup-label").hide(),this.$selectionUl.find(".ms-elem-selection").filter(":not(."+this.options.disabledClass+")").addClass("ms-selected").show(),this.$selectionUl.focus(),t.trigger("change"),"function"==typeof this.options.afterSelect){var l=e.grep(t.val(),function(t){return e.inArray(t,s)<0});this.options.afterSelect.call(this,l)}},deselect_all:function(){var e=this.$element,t=e.val();e.find("option").prop("selected",!1),this.$selectableUl.find(".ms-elem-selectable").removeClass("ms-selected").show(),this.$selectionUl.find(".ms-optgroup-label").hide(),this.$selectableUl.find(".ms-optgroup-label").show(),this.$selectionUl.find(".ms-elem-selection").removeClass("ms-selected").hide(),this.$selectableUl.focus(),e.trigger("change"),"function"==typeof this.options.afterDeselect&&this.options.afterDeselect.call(this,t)},sanitize:function(e){var t,s,l=0;if(0==e.length)return l;var i=0;for(t=0,i=e.length;i>t;t++)s=e.charCodeAt(t),l=(l<<5)-l+s,l|=0;return l}},e.fn.multiSelect=function(){var s=arguments[0],l=arguments;return this.each(function(){var i=e(this),n=i.data("multiselect"),o=e.extend({},e.fn.multiSelect.defaults,i.data(),"object"==typeof s&&s);n||i.data("multiselect",n=new t(this,o)),"string"==typeof s?n[s](l[1]):n.init()})},e.fn.multiSelect.defaults={keySelect:[32],selectableOptgroup:!1,disabledClass:"disabled",dblClick:!1,keepOrder:!1,cssClass:""},e.fn.multiSelect.Constructor=t,e.fn.insertAt=function(e,t){return this.each(function(){0===e?t.prepend(this):t.children().eq(e-1).after(this)})}}(window.jQuery);
/* =========================================================
 * Caplet Clock
 * =========================================================
 */
!(function($) {
$.fn.capletClock = function(options) {
                var defaults = {
                    width : 120, height : 120, content:"%D { %M , %d } %Y", digital:true,
				months : [ "January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December" ], 
				//months : [ "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
				days:["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                };
                var options = $.extend(defaults, options);
                return this.each(function() {
                        obj = $(this);
				    var analog=$('<div class="cl-analog"/>').append('<svg viewBox="0 0 1000 1000"><path d="m978,498c0,263.98999 -214.01001,478 -478,478s-478,-214.01001 -478,-478s214.00999,-478 478,-478s478,214.00999 478,478zm-952.504,0.00299l23.305,0m899.69998,0l26,0m-474.50198,-474.49999l0,23.305m0,899.7l0,26" class="circle" /><path d="M500,500,500,236" id="hour"/><path d="M500,500,500,120" id="min" /><path d="M500,650,500,90" id="sec" /><circle id="pointSec" cx="50%" cy="50%" r="40" /></svg>').css({"width":options.width,"height":options.height });
				    obj.append(analog);
						var d = new Date(),day=d.getUTCDay(),month = d.getMonth(), year = d.getFullYear(),date = d.getUTCDate(),
						div='<div class="cl-dateTime" style="height:'+ (options.height) +'px">'+options.content+'<span class="cl-digital"></span></div>',
						divContent=div.replace("{",'<span class="cl-month"><a href="javascript:void(0)">');
						divContent=divContent.replace("}",'</a></span>');
						divContent=divContent.replace("%d",date);
						divContent=divContent.replace("%M",options.months[month]);
						divContent=divContent.replace("%D",'<span class="cl-day">'+options.days[day]+'</span>');
						divContent=divContent.replace("%Y",'<span class="cl-year">'+year+'</span>');
						obj.append(divContent);
						var objWidht=parseInt(obj.find(".cl-month").outerWidth()) + parseInt(obj.find(".cl-dateTime").css('padding-left'));
						obj.css("width",objWidht+10);
					setInterval(function() {
						var d = new Date(),
						hours = d.getHours(),
						minute = d.getMinutes(),
						second = d.getSeconds(),
						ap = "am";
						if(options.digital){
							if (hours   > 11) { ap = "pm"; }
							if (hours  > 12) { hours = hours - 12; }
							if (hours   == 0) { hours = 12; }
							if (minute < 10) { minute = "0" + minute; }
							if (second < 10) { second = "0" + second; }
							var timeString = hours + ':' + minute +"<small> " + ap+"</small>";
							obj.find(".cl-digital").html(timeString);
						}
						
								rotate(sec, 6*second);
								rotate(min, 6*minute);
								rotate(hour, 30*(hours%12) + minute/2);
						
						function rotate(el, deg) {
							el.setAttribute('transform', 'rotate('+ deg +' 500 500)');
						}
					}, 1000);
                });
}
})(jQuery)

/* =========================================================
 * Caplet Timline
 * =========================================================
 */
!(function($) {
$.fn.capletTimeline = function(options) {
                var defaults = { };
                var options = $.extend(defaults, options);
                return this.each(function() {
                        objTime = $(this);
				objTime.find(".mark").each(function() {
					var mark = $(this);
					if(mark.not(".bgimg")){
						mark.css({"line-height": parseInt(mark.height()+20)+"px" });
					}
				 }); 
                });
}
})(jQuery)

/* =========================================================
 * bootstrap-datetimepicker.js
 * =========================================================
 * Copyright 2012 Stefan Petre
 * Improvements by Andrew Rowls
 * Improvements by S�bastien Malot
 * Improvements by Yun Lai
 * Project URL : http://www.malot.fr/bootstrap-datetimepicker
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */

/*
 * Improvement by CuGBabyBeaR @ 2013-09-12
 * 
 * Make it work in bootstrap v3
 */

!function ($) {

	function UTCDate() {
		return new Date(Date.UTC.apply(Date, arguments));
	}

	function UTCToday() {
		var today = new Date();
		return UTCDate(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), today.getUTCHours(), today.getUTCMinutes(), today.getUTCSeconds(), 0);
	}

	// Picker object

	var Datetimepicker = function (element, options) {
		var that = this;

		this.element = $(element);

		this.bornIn = options.bornIn || "body";
		this.language = options.language || this.element.data('date-language') || "en";
		this.language = this.language in dates ? this.language : "en";
		this.isRTL = dates[this.language].rtl || false;
		this.formatType = options.formatType || this.element.data('format-type') || 'standard';
		this.format = DPGlobal.parseFormat(options.format || this.element.data('date-format') || dates[this.language].format || DPGlobal.getDefaultFormat(this.formatType, 'input'), this.formatType);
		this.isInline = false;
		this.isVisible = false;
		this.isInput = this.element.is('input');

		this.bootcssVer = this.isInput ? (this.element.is('.form-control') ? 3 : 2) : ( this.bootcssVer = this.element.is('.input-group') ? 3 : 2 );

		this.component = this.element.is('.date') ? ( this.bootcssVer == 3 ? this.element.find('.input-group-addon .glyphicon-th, .input-group-addon .glyphicon-time, .input-group-addon .glyphicon-calendar , .input-group-addon .fa-th, .input-group-addon .fa-calendar , .input-group-btn  .fa-th , .input-group-btn  .fa-calendar').parent() : this.element.find('.add-on .icon-th, .add-on .icon-time, .add-on .icon-calendar').parent()) : false;
		this.componentReset = this.element.is('.date') ? ( this.bootcssVer == 3 ? this.element.find('.input-group-addon .glyphicon-remove , .input-group-addon .fa-times , .input-group-btn  .fa-times').parent() : this.element.find('.add-on .icon-remove').parent()) : false;
		this.hasInput = this.component && this.element.find('input').length;
		if (this.component && this.component.length === 0) {
			this.component = false;
		}
		this.linkField = options.linkField || this.element.data('link-field') || false;
		this.linkFormat = DPGlobal.parseFormat(options.linkFormat || this.element.data('link-format') || DPGlobal.getDefaultFormat(this.formatType, 'link'), this.formatType);
		this.minuteStep = options.minuteStep || this.element.data('minute-step') || 5;
		this.pickerPosition = options.pickerPosition || this.element.data('picker-position') || 'bottom-right';
		this.showMeridian = options.showMeridian || this.element.data('show-meridian') || false;
		this.initialDate = options.initialDate || new Date();

		this._attachEvents();

		this.formatViewType = "datetime";
		if ('formatViewType' in options) {
			this.formatViewType = options.formatViewType;
		} else if ('formatViewType' in this.element.data()) {
			this.formatViewType = this.element.data('formatViewType');
		}

		this.minView = 0;
		if ('minView' in options) {
			this.minView = options.minView;
		} else if ('minView' in this.element.data()) {
			this.minView = this.element.data('min-view');
		}
		this.minView = DPGlobal.convertViewMode(this.minView);

		this.maxView = DPGlobal.modes.length - 1;
		if ('maxView' in options) {
			this.maxView = options.maxView;
		} else if ('maxView' in this.element.data()) {
			this.maxView = this.element.data('max-view');
		}
		this.maxView = DPGlobal.convertViewMode(this.maxView);

		this.wheelViewModeNavigation = false;
		if ('wheelViewModeNavigation' in options) {
			this.wheelViewModeNavigation = options.wheelViewModeNavigation;
		} else if ('wheelViewModeNavigation' in this.element.data()) {
			this.wheelViewModeNavigation = this.element.data('view-mode-wheel-navigation');
		}

		this.wheelViewModeNavigationInverseDirection = false;

		if ('wheelViewModeNavigationInverseDirection' in options) {
			this.wheelViewModeNavigationInverseDirection = options.wheelViewModeNavigationInverseDirection;
		} else if ('wheelViewModeNavigationInverseDirection' in this.element.data()) {
			this.wheelViewModeNavigationInverseDirection = this.element.data('view-mode-wheel-navigation-inverse-dir');
		}

		this.wheelViewModeNavigationDelay = 100;
		if ('wheelViewModeNavigationDelay' in options) {
			this.wheelViewModeNavigationDelay = options.wheelViewModeNavigationDelay;
		} else if ('wheelViewModeNavigationDelay' in this.element.data()) {
			this.wheelViewModeNavigationDelay = this.element.data('view-mode-wheel-navigation-delay');
		}

		this.startViewMode = 2;
		if ('startView' in options) {
			this.startViewMode = options.startView;
		} else if ('startView' in this.element.data()) {
			this.startViewMode = this.element.data('start-view');
		}
		this.startViewMode = DPGlobal.convertViewMode(this.startViewMode);
		this.viewMode = this.startViewMode;

		this.viewSelect = this.minView;
		if ('viewSelect' in options) {
			this.viewSelect = options.viewSelect;
		} else if ('viewSelect' in this.element.data()) {
			this.viewSelect = this.element.data('view-select');
		}
		this.viewSelect = DPGlobal.convertViewMode(this.viewSelect);

		this.forceParse = true;
		if ('forceParse' in options) {
			this.forceParse = options.forceParse;
		} else if ('dateForceParse' in this.element.data()) {
			this.forceParse = this.element.data('date-force-parse');
		}

		this.picker = $((this.bootcssVer == 3) ? DPGlobal.templateV3 : DPGlobal.template)
			.appendTo(this.isInline ? this.element : this.bornIn)
			.on({
				click:     $.proxy(this.click, this),
				mousedown: $.proxy(this.mousedown, this)
			});

		if (this.wheelViewModeNavigation) {
			if ($.fn.mousewheel) {
				this.picker.on({mousewheel: $.proxy(this.mousewheel, this)});
			} else {
				console.log("Mouse Wheel event is not supported. Please include the jQuery Mouse Wheel plugin before enabling this option");
			}
		}

		if (this.isInline) {
			this.picker.addClass('datetimepicker-inline');
		} else {
			this.picker.addClass('datetimepicker-dropdown-' + this.pickerPosition + ' dropdown-menu');
		}
		if (this.isRTL) {
			this.picker.addClass('datetimepicker-rtl');
			if (this.bootcssVer == 3) {
				this.picker.find('.prev span, .next span')
					.toggleClass('glyphicon-arrow-left glyphicon-arrow-right');
			} else {
				this.picker.find('.prev i, .next i')
					.toggleClass('icon-arrow-left icon-arrow-right');
			}
			;

		}
		$(document).on('mousedown', function (e) {
			// Clicked outside the datetimepicker, hide it
			if ($(e.target).closest('.datetimepicker').length === 0) {
				that.hide();
			}
		});

		this.autoclose = false;
		if ('autoclose' in options) {
			this.autoclose = options.autoclose;
		} else if ('dateAutoclose' in this.element.data()) {
			this.autoclose = this.element.data('date-autoclose');
		}

		this.keyboardNavigation = true;
		if ('keyboardNavigation' in options) {
			this.keyboardNavigation = options.keyboardNavigation;
		} else if ('dateKeyboardNavigation' in this.element.data()) {
			this.keyboardNavigation = this.element.data('date-keyboard-navigation');
		}

		this.todayBtn = (options.todayBtn || this.element.data('date-today-btn') || false);
		this.todayHighlight = (options.todayHighlight || this.element.data('date-today-highlight') || false);

		this.weekStart = ((options.weekStart || this.element.data('date-weekstart') || dates[this.language].weekStart || 0) % 7);
		this.weekEnd = ((this.weekStart + 6) % 7);
		this.startDate = -Infinity;
		this.endDate = Infinity;
		this.daysOfWeekDisabled = [];
		this.setStartDate(options.startDate || this.element.data('date-startdate'));
		this.setEndDate(options.endDate || this.element.data('date-enddate'));
		this.setDaysOfWeekDisabled(options.daysOfWeekDisabled || this.element.data('date-days-of-week-disabled'));
		this.fillDow();
		this.fillMonths();
		this.update();
		this.showMode();

		if (this.isInline) {
			this.show();
		}
	};

	Datetimepicker.prototype = {
		constructor: Datetimepicker,

		_events:       [],
		_attachEvents: function () {
			this._detachEvents();
			if (this.isInput) { // single input
				this._events = [
					[this.element, {
						focus:   $.proxy(this.show, this),
						keyup:   $.proxy(this.update, this),
						keydown: $.proxy(this.keydown, this)
					}]
				];
			}
			else if (this.component && this.hasInput) { // component: input + button
				this._events = [
					// For components that are not readonly, allow keyboard nav
					[this.element.find('input'), {
						focus:   $.proxy(this.show, this),
						keyup:   $.proxy(this.update, this),
						keydown: $.proxy(this.keydown, this)
					}],
					[this.component, {
						click: $.proxy(this.show, this)
					}]
				];
				if (this.componentReset) {
					this._events.push([
						this.componentReset,
						{click: $.proxy(this.reset, this)}
					]);
				}
			}
			else if (this.element.is('div')) {  // inline datetimepicker
				this.isInline = true;
			}
			else {
				this._events = [
					[this.element, {
						click: $.proxy(this.show, this)
					}]
				];
			}
			for (var i = 0, el, ev; i < this._events.length; i++) {
				el = this._events[i][0];
				ev = this._events[i][1];
				el.on(ev);
			}
		},

		_detachEvents: function () {
			for (var i = 0, el, ev; i < this._events.length; i++) {
				el = this._events[i][0];
				ev = this._events[i][1];
				el.off(ev);
			}
			this._events = [];
		},

		show: function (e) {
			this.picker.show();
			this.height = this.component ? this.component.outerHeight() : this.element.outerHeight();
			if (this.forceParse) {
				this.update();
			}
			this.place();
			$(window).on('resize', $.proxy(this.place, this));
			if (e) {
				e.stopPropagation();
				e.preventDefault();
			}
			this.isVisible = true;
			this.element.trigger({
				type: 'show',
				date: this.date
			});
		},

		hide: function (e) {
			if (!this.isVisible) return;
			if (this.isInline) return;
			this.picker.hide();
			$(window).off('resize', this.place);
			this.viewMode = this.startViewMode;
			this.showMode();
			if (!this.isInput) {
				$(document).off('mousedown', this.hide);
			}

			if (
				this.forceParse &&
					(
						this.isInput && this.element.val() ||
							this.hasInput && this.element.find('input').val()
						)
				)
				this.setValue();
			this.isVisible = false;
			this.element.trigger({
				type: 'hide',
				date: this.date
			});
		},

		remove: function () {
			this._detachEvents();
			this.picker.remove();
			delete this.picker;
			delete this.element.data().datetimepicker;
		},

		getDate: function () {
			var d = this.getUTCDate();
			return new Date(d.getTime() + (d.getTimezoneOffset() * 60000));
		},

		getUTCDate: function () {
			return this.date;
		},

		setDate: function (d) {
			this.setUTCDate(new Date(d.getTime() - (d.getTimezoneOffset() * 60000)));
		},

		setUTCDate: function (d) {
			if (d >= this.startDate && d <= this.endDate) {
				this.date = d;
				this.setValue();
				this.viewDate = this.date;
				this.fill();
			} else {
				this.element.trigger({
					type:      'outOfRange',
					date:      d,
					startDate: this.startDate,
					endDate:   this.endDate
				});
			}
		},

		setFormat: function (format) {
			this.format = DPGlobal.parseFormat(format, this.formatType);
			var element;
			if (this.isInput) {
				element = this.element;
			} else if (this.component) {
				element = this.element.find('input');
			}
			if (element && element.val()) {
				this.setValue();
			}
		},

		setValue: function () {
			var formatted = this.getFormattedDate();
			if (!this.isInput) {
				if (this.component) {
					this.element.find('input').val(formatted);
				}
				this.element.data('date', formatted);
			} else {
				this.element.val(formatted);
			}
			if (this.linkField) {
				$('#' + this.linkField).val(this.getFormattedDate(this.linkFormat));
			}
		},

		getFormattedDate: function (format) {
			if (format == undefined) format = this.format;
			return DPGlobal.formatDate(this.date, format, this.language, this.formatType);
		},

		setStartDate: function (startDate) {
			this.startDate = startDate || -Infinity;
			if (this.startDate !== -Infinity) {
				this.startDate = DPGlobal.parseDate(this.startDate, this.format, this.language, this.formatType);
			}
			this.update();
			this.updateNavArrows();
		},

		setEndDate: function (endDate) {
			this.endDate = endDate || Infinity;
			if (this.endDate !== Infinity) {
				this.endDate = DPGlobal.parseDate(this.endDate, this.format, this.language, this.formatType);
			}
			this.update();
			this.updateNavArrows();
		},

		setDaysOfWeekDisabled: function (daysOfWeekDisabled) {
			this.daysOfWeekDisabled = daysOfWeekDisabled || [];
			if (!$.isArray(this.daysOfWeekDisabled)) {
				this.daysOfWeekDisabled = this.daysOfWeekDisabled.split(/,\s*/);
			}
			this.daysOfWeekDisabled = $.map(this.daysOfWeekDisabled, function (d) {
				return parseInt(d, 10);
			});
			this.update();
			this.updateNavArrows();
		},

		place: function () {
			if (this.isInline) return;

			var index_highest = 0;
			$('div').each(function () {
				var index_current = parseInt($(this).css("zIndex"), 10);
				if (index_current > index_highest) {
					index_highest = index_current;
				}
			});
			var zIndex = index_highest + 10;

			var offset, top, left;				
			if (this.component) {
				offset = this.component.offset();
				left = offset.left;
				
				if (this.pickerPosition == 'bottom-left' || this.pickerPosition == 'top-left') {
					left += this.component.outerWidth() - this.picker.outerWidth();
				}
			} else {
				offset = this.element.offset();
				left = offset.left;
			}
			if (this.pickerPosition == 'top-left' || this.pickerPosition == 'top-right') {
				top = offset.top - this.picker.outerHeight();
			} else {
				top = offset.top + this.height;
			}
			
		var newBorn=$(this.bornIn);
		var bornPos=newBorn.offset();
			
			this.picker.css({
				top:    top+newBorn.scrollTop(),
				left:   left-bornPos.left,
				zIndex: zIndex
			});
		},

		update: function () {
			var date, fromArgs = false;
			if (arguments && arguments.length && (typeof arguments[0] === 'string' || arguments[0] instanceof Date)) {
				date = arguments[0];
				fromArgs = true;
			} else {
				date = this.element.data('date') || (this.isInput ? this.element.val() : this.element.find('input').val()) || this.initialDate;
				if (typeof date == 'string' || date instanceof String) {
				  date = date.replace(/^\s+|\s+$/g,'');
				}
			}

			if (!date) {
				date = new Date();
				fromArgs = false;
			}

			this.date = DPGlobal.parseDate(date, this.format, this.language, this.formatType);

			if (fromArgs) this.setValue();

			if (this.date < this.startDate) {
				this.viewDate = new Date(this.startDate);
			} else if (this.date > this.endDate) {
				this.viewDate = new Date(this.endDate);
			} else {
				this.viewDate = new Date(this.date);
			}
			this.fill();
		},

		fillDow: function () {
			var dowCnt = this.weekStart,
				html = '<tr>';
			while (dowCnt < this.weekStart + 7) {
				html += '<th class="dow">' + dates[this.language].daysMin[(dowCnt++) % 7] + '</th>';
			}
			html += '</tr>';
			this.picker.find('.datetimepicker-days thead').append(html);
		},

		fillMonths: function () {
			var html = '',
				i = 0;
			while (i < 12) {
				html += '<span class="month">' + dates[this.language].monthsShort[i++] + '</span>';
			}
			this.picker.find('.datetimepicker-months td').html(html);
		},

		fill: function () {
			if (this.date == null || this.viewDate == null) {
				return;
			}
			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth(),
				dayMonth = d.getUTCDate(),
				hours = d.getUTCHours(),
				minutes = d.getUTCMinutes(),
				startYear = this.startDate !== -Infinity ? this.startDate.getUTCFullYear() : -Infinity,
				startMonth = this.startDate !== -Infinity ? this.startDate.getUTCMonth() : -Infinity,
				endYear = this.endDate !== Infinity ? this.endDate.getUTCFullYear() : Infinity,
				endMonth = this.endDate !== Infinity ? this.endDate.getUTCMonth() : Infinity,
				currentDate = (new UTCDate(this.date.getUTCFullYear(), this.date.getUTCMonth(), this.date.getUTCDate())).valueOf(),
				today = new Date();
			this.picker.find('.datetimepicker-days thead th:eq(1)')
				.text(dates[this.language].months[month] + ' ' + year);
			if (this.formatViewType == "time") {
				var hourConverted = hours % 12 ? hours % 12 : 12;
				var hoursDisplay = (hourConverted < 10 ? '0' : '') + hourConverted;
				var minutesDisplay = (minutes < 10 ? '0' : '') + minutes;
				var meridianDisplay = dates[this.language].meridiem[hours < 12 ? 0 : 1];
				this.picker.find('.datetimepicker-hours thead th:eq(1)')
					.text(hoursDisplay + ':' + minutesDisplay + ' ' + meridianDisplay.toUpperCase());
				this.picker.find('.datetimepicker-minutes thead th:eq(1)')
					.text(hoursDisplay + ':' + minutesDisplay + ' ' + meridianDisplay.toUpperCase());
			} else {
				this.picker.find('.datetimepicker-hours thead th:eq(1)')
					.text(dayMonth + ' ' + dates[this.language].months[month] + ' ' + year);
				this.picker.find('.datetimepicker-minutes thead th:eq(1)')
					.text(dayMonth + ' ' + dates[this.language].months[month] + ' ' + year);
			}
			this.picker.find('tfoot th.today div.now').text(dates[this.language].today);
			this.picker.find('tfoot th.today').toggle(this.todayBtn !== false);
			this.updateNavArrows();
			this.fillMonths();
			/*var prevMonth = UTCDate(year, month, 0,0,0,0,0);
			 prevMonth.setUTCDate(prevMonth.getDate() - (prevMonth.getUTCDay() - this.weekStart + 7)%7);*/
			var prevMonth = UTCDate(year, month - 1, 28, 0, 0, 0, 0),
				day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
			prevMonth.setUTCDate(day);
			prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.weekStart + 7) % 7);
			var nextMonth = new Date(prevMonth);
			nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
			nextMonth = nextMonth.valueOf();
			var html = [];
			var clsName;
			while (prevMonth.valueOf() < nextMonth) {
				if (prevMonth.getUTCDay() == this.weekStart) {
					html.push('<tr>');
				}
				clsName = '';
				if (prevMonth.getUTCFullYear() < year || (prevMonth.getUTCFullYear() == year && prevMonth.getUTCMonth() < month)) {
					clsName += ' old';
				} else if (prevMonth.getUTCFullYear() > year || (prevMonth.getUTCFullYear() == year && prevMonth.getUTCMonth() > month)) {
					clsName += ' new';
				}
				// Compare internal UTC date with local today, not UTC today
				if (this.todayHighlight &&
					prevMonth.getUTCFullYear() == today.getFullYear() &&
					prevMonth.getUTCMonth() == today.getMonth() &&
					prevMonth.getUTCDate() == today.getDate()) {
					clsName += ' today';
				}
				if (prevMonth.valueOf() == currentDate) {
					clsName += ' active';
				}
				if ((prevMonth.valueOf() + 86400000) <= this.startDate || prevMonth.valueOf() > this.endDate ||
					$.inArray(prevMonth.getUTCDay(), this.daysOfWeekDisabled) !== -1) {
					clsName += ' disabled';
				}
				html.push('<td class="day' + clsName + '">' + prevMonth.getUTCDate() + '</td>');
				if (prevMonth.getUTCDay() == this.weekEnd) {
					html.push('</tr>');
				}
				prevMonth.setUTCDate(prevMonth.getUTCDate() + 1);
			}
			this.picker.find('.datetimepicker-days tbody').empty().append(html.join(''));

			html = [];
			var txt = '', meridian = '', meridianOld = '';
			for (var i = 0; i < 24; i++) {
				var actual = UTCDate(year, month, dayMonth, i);
				clsName = '';
				// We want the previous hour for the startDate
				if ((actual.valueOf() + 3600000) <= this.startDate || actual.valueOf() > this.endDate) {
					clsName += ' disabled';
				} else if (hours == i) {
					clsName += ' active';
				}
				if (this.showMeridian && dates[this.language].meridiem.length == 2) {
					meridian = (i < 12 ? dates[this.language].meridiem[0] : dates[this.language].meridiem[1]);
					if (meridian != meridianOld) {
						if (meridianOld != '') {
							html.push('</fieldset>');
						}
						html.push('<fieldset class="hour"><legend>' + meridian.toUpperCase() + '</legend>');
					}
					meridianOld = meridian;
					txt = (i % 12 ? i % 12 : 12);
					html.push('<span class="hour' + clsName + ' hour_' + (i < 12 ? 'am' : 'pm') + '">' + txt + '</span>');
					if (i == 23) {
						html.push('</fieldset>');
					}
				} else {
					txt = i + ':00';
					html.push('<span class="hour' + clsName + '">' + txt + '</span>');
				}
			}
			this.picker.find('.datetimepicker-hours td').html(html.join(''));

			html = [];
			txt = '', meridian = '', meridianOld = '';
			for (var i = 0; i < 60; i += this.minuteStep) {
				var actual = UTCDate(year, month, dayMonth, hours, i, 0);
				clsName = '';
				if (actual.valueOf() < this.startDate || actual.valueOf() > this.endDate) {
					clsName += ' disabled';
				} else if (Math.floor(minutes / this.minuteStep) == Math.floor(i / this.minuteStep)) {
					clsName += ' active';
				}
				if (this.showMeridian && dates[this.language].meridiem.length == 2) {
					meridian = (hours < 12 ? dates[this.language].meridiem[0] : dates[this.language].meridiem[1]);
					if (meridian != meridianOld) {
						if (meridianOld != '') {
							html.push('</fieldset>');
						}
						html.push('<fieldset class="minute"><legend>' + meridian.toUpperCase() + '</legend>');
					}
					meridianOld = meridian;
					txt = (hours % 12 ? hours % 12 : 12);
					//html.push('<span class="minute'+clsName+' minute_'+(hours<12?'am':'pm')+'">'+txt+'</span>');
					html.push('<span class="minute' + clsName + '">' + txt + ':' + (i < 10 ? '0' + i : i) + '</span>');
					if (i == 59) {
						html.push('</fieldset>');
					}
				} else {
					txt = i + ':00';
					//html.push('<span class="hour'+clsName+'">'+txt+'</span>');
					html.push('<span class="minute' + clsName + '">' + hours + ':' + (i < 10 ? '0' + i : i) + '</span>');
				}
			}
			this.picker.find('.datetimepicker-minutes td').html(html.join(''));

			var currentYear = this.date.getUTCFullYear();
			var months = this.picker.find('.datetimepicker-months')
				.find('th:eq(1)')
				.text(year)
				.end()
				.find('span').removeClass('active');
			if (currentYear == year) {
				months.eq(this.date.getUTCMonth()).addClass('active');
			}
			if (year < startYear || year > endYear) {
				months.addClass('disabled');
			}
			if (year == startYear) {
				months.slice(0, startMonth).addClass('disabled');
			}
			if (year == endYear) {
				months.slice(endMonth + 1).addClass('disabled');
			}

			html = '';
			year = parseInt(year / 10, 10) * 10;
			var yearCont = this.picker.find('.datetimepicker-years')
				.find('th:eq(1)')
				.text(year + '-' + (year + 9))
				.end()
				.find('td');
			year -= 1;
			for (var i = -1; i < 11; i++) {
				html += '<span class="year' + (i == -1 || i == 10 ? ' old' : '') + (currentYear == year ? ' active' : '') + (year < startYear || year > endYear ? ' disabled' : '') + '">' + year + '</span>';
				year += 1;
			}
			yearCont.html(html);
			this.place();
		},

		updateNavArrows: function () {
			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth(),
				day = d.getUTCDate(),
				hour = d.getUTCHours();
			switch (this.viewMode) {
				case 0:
					if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear()
						&& month <= this.startDate.getUTCMonth()
						&& day <= this.startDate.getUTCDate()
						&& hour <= this.startDate.getUTCHours()) {
						this.picker.find('.prev').css({visibility: 'hidden'});
					} else {
						this.picker.find('.prev').css({visibility: 'visible'});
					}
					if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear()
						&& month >= this.endDate.getUTCMonth()
						&& day >= this.endDate.getUTCDate()
						&& hour >= this.endDate.getUTCHours()) {
						this.picker.find('.next').css({visibility: 'hidden'});
					} else {
						this.picker.find('.next').css({visibility: 'visible'});
					}
					break;
				case 1:
					if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear()
						&& month <= this.startDate.getUTCMonth()
						&& day <= this.startDate.getUTCDate()) {
						this.picker.find('.prev').css({visibility: 'hidden'});
					} else {
						this.picker.find('.prev').css({visibility: 'visible'});
					}
					if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear()
						&& month >= this.endDate.getUTCMonth()
						&& day >= this.endDate.getUTCDate()) {
						this.picker.find('.next').css({visibility: 'hidden'});
					} else {
						this.picker.find('.next').css({visibility: 'visible'});
					}
					break;
				case 2:
					if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear()
						&& month <= this.startDate.getUTCMonth()) {
						this.picker.find('.prev').css({visibility: 'hidden'});
					} else {
						this.picker.find('.prev').css({visibility: 'visible'});
					}
					if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear()
						&& month >= this.endDate.getUTCMonth()) {
						this.picker.find('.next').css({visibility: 'hidden'});
					} else {
						this.picker.find('.next').css({visibility: 'visible'});
					}
					break;
				case 3:
				case 4:
					if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear()) {
						this.picker.find('.prev').css({visibility: 'hidden'});
					} else {
						this.picker.find('.prev').css({visibility: 'visible'});
					}
					if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear()) {
						this.picker.find('.next').css({visibility: 'hidden'});
					} else {
						this.picker.find('.next').css({visibility: 'visible'});
					}
					break;
			}
		},

		mousewheel: function (e) {

			e.preventDefault();
			e.stopPropagation();

			if (this.wheelPause) {
				return;
			}

			this.wheelPause = true;

			var originalEvent = e.originalEvent;

			var delta = originalEvent.wheelDelta;

			var mode = delta > 0 ? 1 : (delta === 0) ? 0 : -1;

			if (this.wheelViewModeNavigationInverseDirection) {
				mode = -mode;
			}

			this.showMode(mode);

			setTimeout($.proxy(function () {

				this.wheelPause = false

			}, this), this.wheelViewModeNavigationDelay);

		},

		click: function (e) {
			e.stopPropagation();
			e.preventDefault();
			var target = $(e.target).closest('span, td, th, legend');
			if (target.length == 1) {
				if (target.is('.disabled')) {
					this.element.trigger({
						type:      'outOfRange',
						date:      this.viewDate,
						startDate: this.startDate,
						endDate:   this.endDate
					});
					return;
				}
				switch (target[0].nodeName.toLowerCase()) {
					case 'th':
						switch (target[0].className) {
							case 'switch':
								this.showMode(1);
								break;
							case 'prev':
							case 'next':
								var dir = DPGlobal.modes[this.viewMode].navStep * (target[0].className == 'prev' ? -1 : 1);
								switch (this.viewMode) {
									case 0:
										this.viewDate = this.moveHour(this.viewDate, dir);
										break;
									case 1:
										this.viewDate = this.moveDate(this.viewDate, dir);
										break;
									case 2:
										this.viewDate = this.moveMonth(this.viewDate, dir);
										break;
									case 3:
									case 4:
										this.viewDate = this.moveYear(this.viewDate, dir);
										break;
								}
								this.fill();
								break;
							case 'today':
								var date = new Date();
								date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), 0);

								// Respect startDate and endDate.
								if (date < this.startDate) date = this.startDate;
								else if (date > this.endDate) date = this.endDate;

								this.viewMode = this.startViewMode;
								this.showMode(0);
								this._setDate(date);
								this.fill();
								if (this.autoclose) {
									this.hide();
								}
								break;
						}
						break;
					case 'span':
						if (!target.is('.disabled')) {
							var year = this.viewDate.getUTCFullYear(),
								month = this.viewDate.getUTCMonth(),
								day = this.viewDate.getUTCDate(),
								hours = this.viewDate.getUTCHours(),
								minutes = this.viewDate.getUTCMinutes(),
								seconds = this.viewDate.getUTCSeconds();

							if (target.is('.month')) {
								this.viewDate.setUTCDate(1);
								month = target.parent().find('span').index(target);
								day = this.viewDate.getUTCDate();
								this.viewDate.setUTCMonth(month);
								this.element.trigger({
									type: 'changeMonth',
									date: this.viewDate
								});
								if (this.viewSelect >= 3) {
									this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
								}
							} else if (target.is('.year')) {
								this.viewDate.setUTCDate(1);
								year = parseInt(target.text(), 10) || 0;
								this.viewDate.setUTCFullYear(year);
								this.element.trigger({
									type: 'changeYear',
									date: this.viewDate
								});
								if (this.viewSelect >= 4) {
									this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
								}
							} else if (target.is('.hour')) {
								hours = parseInt(target.text(), 10) || 0;
								if (target.hasClass('hour_am') || target.hasClass('hour_pm')) {
									if (hours == 12 && target.hasClass('hour_am')) {
										hours = 0;
									} else if (hours != 12 && target.hasClass('hour_pm')) {
										hours += 12;
									}
								}
								this.viewDate.setUTCHours(hours);
								this.element.trigger({
									type: 'changeHour',
									date: this.viewDate
								});
								if (this.viewSelect >= 1) {
									this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
								}
							} else if (target.is('.minute')) {
								minutes = parseInt(target.text().substr(target.text().indexOf(':') + 1), 10) || 0;
								this.viewDate.setUTCMinutes(minutes);
								this.element.trigger({
									type: 'changeMinute',
									date: this.viewDate
								});
								if (this.viewSelect >= 0) {
									this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
								}
							}
							if (this.viewMode != 0) {
								var oldViewMode = this.viewMode;
								this.showMode(-1);
								this.fill();
								if (oldViewMode == this.viewMode && this.autoclose) {
									this.hide();
								}
							} else {
								this.fill();
								if (this.autoclose) {
									this.hide();
								}
							}
						}
						break;
					case 'td':
						if (target.is('.day') && !target.is('.disabled')) {
							var day = parseInt(target.text(), 10) || 1;
							var year = this.viewDate.getUTCFullYear(),
								month = this.viewDate.getUTCMonth(),
								hours = this.viewDate.getUTCHours(),
								minutes = this.viewDate.getUTCMinutes(),
								seconds = this.viewDate.getUTCSeconds();
							if (target.is('.old')) {
								if (month === 0) {
									month = 11;
									year -= 1;
								} else {
									month -= 1;
								}
							} else if (target.is('.new')) {
								if (month == 11) {
									month = 0;
									year += 1;
								} else {
									month += 1;
								}
							}
							this.viewDate.setUTCFullYear(year);
							this.viewDate.setUTCMonth(month);
							this.viewDate.setUTCDate(day);
							this.element.trigger({
								type: 'changeDay',
								date: this.viewDate
							});
							if (this.viewSelect >= 2) {
								this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
							}
						}
						var oldViewMode = this.viewMode;
						this.showMode(-1);
						this.fill();
						if (oldViewMode == this.viewMode && this.autoclose) {
							this.hide();
						}
						break;
				}
			}
		},

		_setDate: function (date, which) {
			if (!which || which == 'date')
				this.date = date;
			if (!which || which == 'view')
				this.viewDate = date;
			this.fill();
			this.setValue();
			var element;
			if (this.isInput) {
				element = this.element;
			} else if (this.component) {
				element = this.element.find('input');
			}
			if (element) {
				element.change();
				if (this.autoclose && (!which || which == 'date')) {
					//this.hide();
				}
			}
			this.element.trigger({
				type: 'changeDate',
				date: this.date
			});
		},

		moveMinute: function (date, dir) {
			if (!dir) return date;
			var new_date = new Date(date.valueOf());
			//dir = dir > 0 ? 1 : -1;
			new_date.setUTCMinutes(new_date.getUTCMinutes() + (dir * this.minuteStep));
			return new_date;
		},

		moveHour: function (date, dir) {
			if (!dir) return date;
			var new_date = new Date(date.valueOf());
			//dir = dir > 0 ? 1 : -1;
			new_date.setUTCHours(new_date.getUTCHours() + dir);
			return new_date;
		},

		moveDate: function (date, dir) {
			if (!dir) return date;
			var new_date = new Date(date.valueOf());
			//dir = dir > 0 ? 1 : -1;
			new_date.setUTCDate(new_date.getUTCDate() + dir);
			return new_date;
		},

		moveMonth: function (date, dir) {
			if (!dir) return date;
			var new_date = new Date(date.valueOf()),
				day = new_date.getUTCDate(),
				month = new_date.getUTCMonth(),
				mag = Math.abs(dir),
				new_month, test;
			dir = dir > 0 ? 1 : -1;
			if (mag == 1) {
				test = dir == -1
					// If going back one month, make sure month is not current month
					// (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
					? function () {
					return new_date.getUTCMonth() == month;
				}
					// If going forward one month, make sure month is as expected
					// (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
					: function () {
					return new_date.getUTCMonth() != new_month;
				};
				new_month = month + dir;
				new_date.setUTCMonth(new_month);
				// Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
				if (new_month < 0 || new_month > 11)
					new_month = (new_month + 12) % 12;
			} else {
				// For magnitudes >1, move one month at a time...
				for (var i = 0; i < mag; i++)
					// ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
					new_date = this.moveMonth(new_date, dir);
				// ...then reset the day, keeping it in the new month
				new_month = new_date.getUTCMonth();
				new_date.setUTCDate(day);
				test = function () {
					return new_month != new_date.getUTCMonth();
				};
			}
			// Common date-resetting loop -- if date is beyond end of month, make it
			// end of month
			while (test()) {
				new_date.setUTCDate(--day);
				new_date.setUTCMonth(new_month);
			}
			return new_date;
		},

		moveYear: function (date, dir) {
			return this.moveMonth(date, dir * 12);
		},

		dateWithinRange: function (date) {
			return date >= this.startDate && date <= this.endDate;
		},

		keydown: function (e) {
			if (this.picker.is(':not(:visible)')) {
				if (e.keyCode == 27) // allow escape to hide and re-show picker
					this.show();
				return;
			}
			var dateChanged = false,
				dir, day, month,
				newDate, newViewDate;
			switch (e.keyCode) {
				case 27: // escape
					this.hide();
					e.preventDefault();
					break;
				case 37: // left
				case 39: // right
					if (!this.keyboardNavigation) break;
					dir = e.keyCode == 37 ? -1 : 1;
					viewMode = this.viewMode;
					if (e.ctrlKey) {
						viewMode += 2;
					} else if (e.shiftKey) {
						viewMode += 1;
					}
					if (viewMode == 4) {
						newDate = this.moveYear(this.date, dir);
						newViewDate = this.moveYear(this.viewDate, dir);
					} else if (viewMode == 3) {
						newDate = this.moveMonth(this.date, dir);
						newViewDate = this.moveMonth(this.viewDate, dir);
					} else if (viewMode == 2) {
						newDate = this.moveDate(this.date, dir);
						newViewDate = this.moveDate(this.viewDate, dir);
					} else if (viewMode == 1) {
						newDate = this.moveHour(this.date, dir);
						newViewDate = this.moveHour(this.viewDate, dir);
					} else if (viewMode == 0) {
						newDate = this.moveMinute(this.date, dir);
						newViewDate = this.moveMinute(this.viewDate, dir);
					}
					if (this.dateWithinRange(newDate)) {
						this.date = newDate;
						this.viewDate = newViewDate;
						this.setValue();
						this.update();
						e.preventDefault();
						dateChanged = true;
					}
					break;
				case 38: // up
				case 40: // down
					if (!this.keyboardNavigation) break;
					dir = e.keyCode == 38 ? -1 : 1;
					viewMode = this.viewMode;
					if (e.ctrlKey) {
						viewMode += 2;
					} else if (e.shiftKey) {
						viewMode += 1;
					}
					if (viewMode == 4) {
						newDate = this.moveYear(this.date, dir);
						newViewDate = this.moveYear(this.viewDate, dir);
					} else if (viewMode == 3) {
						newDate = this.moveMonth(this.date, dir);
						newViewDate = this.moveMonth(this.viewDate, dir);
					} else if (viewMode == 2) {
						newDate = this.moveDate(this.date, dir * 7);
						newViewDate = this.moveDate(this.viewDate, dir * 7);
					} else if (viewMode == 1) {
						if (this.showMeridian) {
							newDate = this.moveHour(this.date, dir * 6);
							newViewDate = this.moveHour(this.viewDate, dir * 6);
						} else {
							newDate = this.moveHour(this.date, dir * 4);
							newViewDate = this.moveHour(this.viewDate, dir * 4);
						}
					} else if (viewMode == 0) {
						newDate = this.moveMinute(this.date, dir * 4);
						newViewDate = this.moveMinute(this.viewDate, dir * 4);
					}
					if (this.dateWithinRange(newDate)) {
						this.date = newDate;
						this.viewDate = newViewDate;
						this.setValue();
						this.update();
						e.preventDefault();
						dateChanged = true;
					}
					break;
				case 13: // enter
					if (this.viewMode != 0) {
						var oldViewMode = this.viewMode;
						this.showMode(-1);
						this.fill();
						if (oldViewMode == this.viewMode && this.autoclose) {
							this.hide();
						}
					} else {
						this.fill();
						if (this.autoclose) {
							this.hide();
						}
					}
					e.preventDefault();
					break;
				case 9: // tab
					this.hide();
					break;
			}
			if (dateChanged) {
				var element;
				if (this.isInput) {
					element = this.element;
				} else if (this.component) {
					element = this.element.find('input');
				}
				if (element) {
					element.change();
				}
				this.element.trigger({
					type: 'changeDate',
					date: this.date
				});
			}
		},

		showMode: function (dir) {
			if (dir) {
				var newViewMode = Math.max(0, Math.min(DPGlobal.modes.length - 1, this.viewMode + dir));
				if (newViewMode >= this.minView && newViewMode <= this.maxView) {
					this.element.trigger({
						type:        'changeMode',
						date:        this.viewDate,
						oldViewMode: this.viewMode,
						newViewMode: newViewMode
					});

					this.viewMode = newViewMode;
				}
			}
			/*
			 vitalets: fixing bug of very special conditions:
			 jquery 1.7.1 + webkit + show inline datetimepicker in bootstrap popover.
			 Method show() does not set display css correctly and datetimepicker is not shown.
			 Changed to .css('display', 'block') solve the problem.
			 See https://github.com/vitalets/x-editable/issues/37

			 In jquery 1.7.2+ everything works fine.
			 */
			//this.picker.find('>div').hide().filter('.datetimepicker-'+DPGlobal.modes[this.viewMode].clsName).show();
			this.picker.find('>div').hide().filter('.datetimepicker-' + DPGlobal.modes[this.viewMode].clsName).css('display', 'block');
			this.updateNavArrows();
		},

		reset: function (e) {
			this._setDate(null, 'date');
		}
	};

	$.fn.datetimepicker = function (option) {
		var args = Array.apply(null, arguments);
		args.shift();
		return this.each(function () {
			var $this = $(this),
				data = $this.data('datetimepicker'),
				options = typeof option == 'object' && option;
			if (!data) {
				$this.data('datetimepicker', (data = new Datetimepicker(this, $.extend({}, $.fn.datetimepicker.defaults, options))));
			}
			if (typeof option == 'string' && typeof data[option] == 'function') {
				data[option].apply(data, args);
			}
		});
	};

	$.fn.datetimepicker.defaults = {
	};
	$.fn.datetimepicker.Constructor = Datetimepicker;
	var dates = $.fn.datetimepicker.dates = {
		en: {
			days:        ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
			daysShort:   ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
			daysMin:     ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
			months:      ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			meridiem:    ["am", "pm"],
			suffix:      ["st", "nd", "rd", "th"],
			today:       "Today"
		}
	};

	var DPGlobal = {
		modes:            [
			{
				clsName: 'minutes',
				navFnc:  'Hours',
				navStep: 1
			},
			{
				clsName: 'hours',
				navFnc:  'Date',
				navStep: 1
			},
			{
				clsName: 'days',
				navFnc:  'Month',
				navStep: 1
			},
			{
				clsName: 'months',
				navFnc:  'FullYear',
				navStep: 1
			},
			{
				clsName: 'years',
				navFnc:  'FullYear',
				navStep: 10
			}
		],
		isLeapYear:       function (year) {
			return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
		},
		getDaysInMonth:   function (year, month) {
			return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
		},
		getDefaultFormat: function (type, field) {
			if (type == "standard") {
				if (field == 'input')
					return 'yyyy-mm-dd hh:ii';
				else
					return 'yyyy-mm-dd hh:ii:ss';
			} else if (type == "php") {
				if (field == 'input')
					return 'Y-m-d H:i';
				else
					return 'Y-m-d H:i:s';
			} else {
				throw new Error("Invalid format type.");
			}
		},
		validParts:       function (type) {
			if (type == "standard") {
				return /hh?|HH?|p|P|ii?|ss?|dd?|DD?|mm?|MM?|yy(?:yy)?/g;
			} else if (type == "php") {
				return /[dDjlNwzFmMnStyYaABgGhHis]/g;
			} else {
				throw new Error("Invalid format type.");
			}
		},
		nonpunctuation:   /[^ -\/:-@\[-`{-~\t\n\rTZ]+/g,
		parseFormat:      function (format, type) {
			// IE treats \0 as a string end in inputs (truncating the value),
			// so it's a bad format delimiter, anyway
			var separators = format.replace(this.validParts(type), '\0').split('\0'),
				parts = format.match(this.validParts(type));
			if (!separators || !separators.length || !parts || parts.length == 0) {
				throw new Error("Invalid date format.");
			}
			return {separators: separators, parts: parts};
		},
		parseDate:        function (date, format, language, type) {
			if (date instanceof Date) {
				var dateUTC = new Date(date.valueOf() - date.getTimezoneOffset() * 60000);
				dateUTC.setMilliseconds(0);
				return dateUTC;
			}
			if (/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(date)) {
				format = this.parseFormat('yyyy-mm-dd', type);
			}
			if (/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}$/.test(date)) {
				format = this.parseFormat('yyyy-mm-dd hh:ii', type);
			}
			if (/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}\:\d{1,2}[Z]{0,1}$/.test(date)) {
				format = this.parseFormat('yyyy-mm-dd hh:ii:ss', type);
			}
			if (/^[-+]\d+[dmwy]([\s,]+[-+]\d+[dmwy])*$/.test(date)) {
				var part_re = /([-+]\d+)([dmwy])/,
					parts = date.match(/([-+]\d+)([dmwy])/g),
					part, dir;
				date = new Date();
				for (var i = 0; i < parts.length; i++) {
					part = part_re.exec(parts[i]);
					dir = parseInt(part[1]);
					switch (part[2]) {
						case 'd':
							date.setUTCDate(date.getUTCDate() + dir);
							break;
						case 'm':
							date = Datetimepicker.prototype.moveMonth.call(Datetimepicker.prototype, date, dir);
							break;
						case 'w':
							date.setUTCDate(date.getUTCDate() + dir * 7);
							break;
						case 'y':
							date = Datetimepicker.prototype.moveYear.call(Datetimepicker.prototype, date, dir);
							break;
					}
				}
				return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), 0);
			}
			var parts = date && date.match(this.nonpunctuation) || [],
				date = new Date(0, 0, 0, 0, 0, 0, 0),
				parsed = {},
				setters_order = ['hh', 'h', 'ii', 'i', 'ss', 's', 'yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'D', 'DD', 'd', 'dd', 'H', 'HH', 'p', 'P'],
				setters_map = {
					hh:   function (d, v) {
						return d.setUTCHours(v);
					},
					h:    function (d, v) {
						return d.setUTCHours(v);
					},
					HH:   function (d, v) {
						return d.setUTCHours(v == 12 ? 0 : v);
					},
					H:    function (d, v) {
						return d.setUTCHours(v == 12 ? 0 : v);
					},
					ii:   function (d, v) {
						return d.setUTCMinutes(v);
					},
					i:    function (d, v) {
						return d.setUTCMinutes(v);
					},
					ss:   function (d, v) {
						return d.setUTCSeconds(v);
					},
					s:    function (d, v) {
						return d.setUTCSeconds(v);
					},
					yyyy: function (d, v) {
						return d.setUTCFullYear(v);
					},
					yy:   function (d, v) {
						return d.setUTCFullYear(2000 + v);
					},
					m:    function (d, v) {
						v -= 1;
						while (v < 0) v += 12;
						v %= 12;
						d.setUTCMonth(v);
						while (d.getUTCMonth() != v)
							d.setUTCDate(d.getUTCDate() - 1);
						return d;
					},
					d:    function (d, v) {
						return d.setUTCDate(v);
					},
					p:    function (d, v) {
						return d.setUTCHours(v == 1 ? d.getUTCHours() + 12 : d.getUTCHours());
					}
				},
				val, filtered, part;
			setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
			setters_map['dd'] = setters_map['d'];
			setters_map['P'] = setters_map['p'];
			date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
			if (parts.length == format.parts.length) {
				for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
					val = parseInt(parts[i], 10);
					part = format.parts[i];
					if (isNaN(val)) {
						switch (part) {
							case 'MM':
								filtered = $(dates[language].months).filter(function () {
									var m = this.slice(0, parts[i].length),
										p = parts[i].slice(0, m.length);
									return m == p;
								});
								val = $.inArray(filtered[0], dates[language].months) + 1;
								break;
							case 'M':
								filtered = $(dates[language].monthsShort).filter(function () {
									var m = this.slice(0, parts[i].length),
										p = parts[i].slice(0, m.length);
									return m == p;
								});
								val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
								break;
							case 'p':
							case 'P':
								val = $.inArray(parts[i].toLowerCase(), dates[language].meridiem);
								break;
						}
					}
					parsed[part] = val;
				}
				for (var i = 0, s; i < setters_order.length; i++) {
					s = setters_order[i];
					if (s in parsed && !isNaN(parsed[s]))
						setters_map[s](date, parsed[s])
				}
			}
			return date;
		},
		formatDate:       function (date, format, language, type) {
			if (date == null) {
				return '';
			}
			var val;
			if (type == 'standard') {
				val = {
					// year
					yy:   date.getUTCFullYear().toString().substring(2),
					yyyy: date.getUTCFullYear(),
					// month
					m:    date.getUTCMonth() + 1,
					M:    dates[language].monthsShort[date.getUTCMonth()],
					MM:   dates[language].months[date.getUTCMonth()],
					// day
					d:    date.getUTCDate(),
					D:    dates[language].daysShort[date.getUTCDay()],
					DD:   dates[language].days[date.getUTCDay()],
					p:    (dates[language].meridiem.length == 2 ? dates[language].meridiem[date.getUTCHours() < 12 ? 0 : 1] : ''),
					// hour
					h:    date.getUTCHours(),
					// minute
					i:    date.getUTCMinutes(),
					// second
					s:    date.getUTCSeconds()
				};

				if (dates[language].meridiem.length == 2) {
					val.H = (val.h % 12 == 0 ? 12 : val.h % 12);
				}
				else {
					val.H = val.h;
				}
				val.HH = (val.H < 10 ? '0' : '') + val.H;
				val.P = val.p.toUpperCase();
				val.hh = (val.h < 10 ? '0' : '') + val.h;
				val.ii = (val.i < 10 ? '0' : '') + val.i;
				val.ss = (val.s < 10 ? '0' : '') + val.s;
				val.dd = (val.d < 10 ? '0' : '') + val.d;
				val.mm = (val.m < 10 ? '0' : '') + val.m;
			} else if (type == 'php') {
				// php format
				val = {
					// year
					y: date.getUTCFullYear().toString().substring(2),
					Y: date.getUTCFullYear(),
					// month
					F: dates[language].months[date.getUTCMonth()],
					M: dates[language].monthsShort[date.getUTCMonth()],
					n: date.getUTCMonth() + 1,
					t: DPGlobal.getDaysInMonth(date.getUTCFullYear(), date.getUTCMonth()),
					// day
					j: date.getUTCDate(),
					l: dates[language].days[date.getUTCDay()],
					D: dates[language].daysShort[date.getUTCDay()],
					w: date.getUTCDay(), // 0 -> 6
					N: (date.getUTCDay() == 0 ? 7 : date.getUTCDay()),       // 1 -> 7
					S: (date.getUTCDate() % 10 <= dates[language].suffix.length ? dates[language].suffix[date.getUTCDate() % 10 - 1] : ''),
					// hour
					a: (dates[language].meridiem.length == 2 ? dates[language].meridiem[date.getUTCHours() < 12 ? 0 : 1] : ''),
					g: (date.getUTCHours() % 12 == 0 ? 12 : date.getUTCHours() % 12),
					G: date.getUTCHours(),
					// minute
					i: date.getUTCMinutes(),
					// second
					s: date.getUTCSeconds()
				};
				val.m = (val.n < 10 ? '0' : '') + val.n;
				val.d = (val.j < 10 ? '0' : '') + val.j;
				val.A = val.a.toString().toUpperCase();
				val.h = (val.g < 10 ? '0' : '') + val.g;
				val.H = (val.G < 10 ? '0' : '') + val.G;
				val.i = (val.i < 10 ? '0' : '') + val.i;
				val.s = (val.s < 10 ? '0' : '') + val.s;
			} else {
				throw new Error("Invalid format type.");
			}
			var date = [],
				seps = $.extend([], format.separators);
			for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
				if (seps.length) {
					date.push(seps.shift());
				}
				date.push(val[format.parts[i]]);
			}
			if (seps.length) {
				date.push(seps.shift());
			}
			return date.join('');
		},
		convertViewMode:  function (viewMode) {
			switch (viewMode) {
				case 4:
				case 'decade':
					viewMode = 4;
					break;
				case 3:
				case 'year':
					viewMode = 3;
					break;
				case 2:
				case 'month':
					viewMode = 2;
					break;
				case 1:
				case 'day':
					viewMode = 1;
					break;
				case 0:
				case 'hour':
					viewMode = 0;
					break;
			}

			return viewMode;
		},
		headTemplate:     '<thead>' +
							  '<tr>' +
							  '<th class="prev"><i class="fa fa-angle-left"/></th>' +
							  '<th colspan="5" class="switch"></th>' +
							  '<th class="next"><i class="fa fa-angle-right"/></th>' +
							  '</tr>' +
							 '</thead>',
		headTemplateV3:   '<thead>' +
							  '<tr>' +
							  '<th class="prev"><i class="fa fa-angle-left"></i> </th>' +
							  '<th colspan="5" class="switch"></th>' +
							  '<th class="next"><i class="fa fa-angle-right"></i> </th>' +
							  '</tr>' +
			'</thead>',
		contTemplate:     '<tbody><tr><td colspan="7"></td></tr></tbody>',
		footTemplate:     '<tfoot><tr><th colspan="7" class="today"><div class="now"></div></th></tr></tfoot>'
	};
	DPGlobal.template = '<div class="datetimepicker">' +
		'<div class="datetimepicker-minutes">' +
		'<table class=" table-condensed">' +
		DPGlobal.headTemplate +
		DPGlobal.contTemplate +
		DPGlobal.footTemplate +
		'</table>' +
		'</div>' +
		'<div class="datetimepicker-hours">' +
		'<table class=" table-condensed">' +
		DPGlobal.headTemplate +
		DPGlobal.contTemplate +
		DPGlobal.footTemplate +
		'</table>' +
		'</div>' +
		'<div class="datetimepicker-days">' +
		'<table class=" table-condensed">' +
		DPGlobal.headTemplate +
		'<tbody></tbody>' +
		DPGlobal.footTemplate +
		'</table>' +
		'</div>' +
		'<div class="datetimepicker-months">' +
		'<table class="table-condensed">' +
		DPGlobal.headTemplate +
		DPGlobal.contTemplate +
		DPGlobal.footTemplate +
		'</table>' +
		'</div>' +
		'<div class="datetimepicker-years">' +
		'<table class="table-condensed">' +
		DPGlobal.headTemplate +
		DPGlobal.contTemplate +
		DPGlobal.footTemplate +
		'</table>' +
		'</div>' +
		'</div>';
	DPGlobal.templateV3 = '<div class="datetimepicker">' +
		'<div class="datetimepicker-minutes">' +
		'<table class=" table-condensed">' +
		DPGlobal.headTemplateV3 +
		DPGlobal.contTemplate +
		DPGlobal.footTemplate +
		'</table>' +
		'</div>' +
		'<div class="datetimepicker-hours">' +
		'<table class=" table-condensed">' +
		DPGlobal.headTemplateV3 +
		DPGlobal.contTemplate +
		DPGlobal.footTemplate +
		'</table>' +
		'</div>' +
		'<div class="datetimepicker-days">' +
		'<table class=" table-condensed">' +
		DPGlobal.headTemplateV3 +
		'<tbody></tbody>' +
		DPGlobal.footTemplate +
		'</table>' +
		'</div>' +
		'<div class="datetimepicker-months">' +
		'<table class="table-condensed">' +
		DPGlobal.headTemplateV3 +
		DPGlobal.contTemplate +
		DPGlobal.footTemplate +
		'</table>' +
		'</div>' +
		'<div class="datetimepicker-years">' +
		'<table class="table-condensed">' +
		DPGlobal.headTemplateV3 +
		DPGlobal.contTemplate +
		DPGlobal.footTemplate +
		'</table>' +
		'</div>' +
		'</div>';
	$.fn.datetimepicker.DPGlobal = DPGlobal;

	/* DATETIMEPICKER NO CONFLICT
	 * =================== */

	$.fn.datetimepicker.noConflict = function () {
		$.fn.datetimepicker = old;
		return this;
	};

	/* DATETIMEPICKER DATA-API
	 * ================== */

	$(document).on(
		'focus.datetimepicker.data-api click.datetimepicker.data-api',
		'[data-provide="datetimepicker"]',
		function (e) {
			var $this = $(this);
			if ($this.data('datetimepicker')) return;
			e.preventDefault();
			// component click requires us to explicitly show it
			$this.datetimepicker('show');
		}
	);
	$(function () {
		$('[data-provide="datetimepicker-inline"]').datetimepicker({
			startView: 2,
			minView: 2
		});
	});

}(window.jQuery);











/**
* @version: 1.2
* @author: Dan Grossman http://www.dangrossman.info/
* @date: 2013-07-25
* @copyright: Copyright (c) 2012-2013 Dan Grossman. All rights reserved.
* @license: Licensed under Apache License v2.0. See http://www.apache.org/licenses/LICENSE-2.0
* @website: http://www.improvely.com/
*/
!function ($) {

    var DateRangePicker = function (element, options, cb) {
        var hasOptions = typeof options == 'object';
        var localeObject;

        //option defaults

        this.startDate = moment().startOf('day');
        this.endDate = moment().startOf('day');
        this.minDate = false;
        this.maxDate = false;
        this.dateLimit = false;

        this.showDropdowns = false;
        this.showWeekNumbers = false;
        this.timePicker = false;
        this.timePickerIncrement = 30;
        this.timePicker12Hour = true;
        this.ranges = {};
        this.opens = 'right';

        this.buttonClasses = ['btn', 'btn-small'];
        this.applyClass = 'btn-success';
        this.cancelClass = 'btn-default';

        this.format = 'MM/DD/YYYY';
        this.separator = ' - ';
	   
	   this.overlay= false;
	   this.overlayOpacity= 0.2;

        this.locale = {
            applyLabel: '<i class="fa fa-check"></i>',
            cancelLabel: '<i class="fa fa-times"></i>',
            fromLabel: 'From',
            toLabel: 'To',
            weekLabel: 'W',
            customRangeLabel: 'Custom Range',
            daysOfWeek: moment()._lang._weekdaysMin.slice(),
            monthNames: moment()._lang._monthsShort.slice(),
            firstDay: 0
        };

        this.cb = function () { };

        // by default, the daterangepicker element is placed at the bottom of HTML body
        this.parentEl = 'body';

        //element that triggered the date range picker
        this.element = $(element);

        if (this.element.hasClass('pull-right'))
            this.opens = 'left';

        if (this.element.is('input')) {
            this.element.on({
                click: $.proxy(this.show, this),
                focus: $.proxy(this.show, this)
            });
        } else {
            this.element.on('click', $.proxy(this.show, this));
        }

        localeObject = this.locale;

        if (hasOptions) {
            if (typeof options.locale == 'object') {
                $.each(localeObject, function (property, value) {
                    localeObject[property] = options.locale[property] || value;
                });
            }

            if (options.applyClass) {
                this.applyClass = options.applyClass;
            }

            if (options.cancelClass) {
                this.cancelClass = options.cancelClass;
            }
        }

        var DRPTemplate = '<div class="daterangepicker dropdown-menu">' +
                '<div class="calendar left"></div>' +
                '<div class="calendar right"></div>' +
                '<div class="ranges">' +
                  '<div class="range_inputs">' +
                    '<div class="daterangepicker_start_input" style="float: left">' +
                      '<label for="daterangepicker_start">' + this.locale.fromLabel + '</label>' +
                      '<input class="input-mini" type="text" name="daterangepicker_start" value="" disabled="disabled" />' +
                    '</div>' +
                    '<div class="daterangepicker_end_input" style="float: left; padding-left: 11px">' +
                      '<label for="daterangepicker_end">' + this.locale.toLabel + '</label>' +
                      '<input class="input-mini" type="text" name="daterangepicker_end" value="" disabled="disabled" />' +
                    '</div>' +
                    '<div class="btn-group btn-group-justified"><a class=" btn ' + this.applyClass + ' applyBtn" >' + this.locale.applyLabel + '</a> ' +
                    '<a class="btn ' + this.cancelClass + ' cancelBtn">' + this.locale.cancelLabel + '</a></div>' +
                  '</div>' +
                '</div>' +
              '</div>';

        this.parentEl = (hasOptions && options.parentEl && $(options.parentEl)) || $(this.parentEl);
        //the date range picker
        this.container = $(DRPTemplate).appendTo(this.parentEl);

        if (hasOptions) {

            if (typeof options.format == 'string')
                this.format = options.format;

            if (typeof options.separator == 'string')
                this.separator = options.separator;

            if (typeof options.startDate == 'string')
                this.startDate = moment(options.startDate, this.format);

            if (typeof options.endDate == 'string')
                this.endDate = moment(options.endDate, this.format);

            if (typeof options.minDate == 'string')
                this.minDate = moment(options.minDate, this.format);

            if (typeof options.maxDate == 'string')
                this.maxDate = moment(options.maxDate, this.format);

            if (typeof options.startDate == 'object')
                this.startDate = moment(options.startDate);

            if (typeof options.endDate == 'object')
                this.endDate = moment(options.endDate);

            if (typeof options.minDate == 'object')
                this.minDate = moment(options.minDate);

            if (typeof options.maxDate == 'object')
                this.maxDate = moment(options.maxDate);

            if (typeof options.ranges == 'object') {
                for (var range in options.ranges) {

                    var start = moment(options.ranges[range][0]);
                    var end = moment(options.ranges[range][1]);

                    // If we have a min/max date set, bound this range
                    // to it, but only if it would otherwise fall
                    // outside of the min/max.
                    if (this.minDate && start.isBefore(this.minDate))
                        start = moment(this.minDate);

                    if (this.maxDate && end.isAfter(this.maxDate))
                        end = moment(this.maxDate);

                    // If the end of the range is before the minimum (if min is set) OR
                    // the start of the range is after the max (also if set) don't display this
                    // range option.
                    if ((this.minDate && end.isBefore(this.minDate)) || (this.maxDate && start.isAfter(this.maxDate))) {
                        continue;
                    }

                    this.ranges[range] = [start, end];
                }

                var list = '<ul>';
                for (var range in this.ranges) {
                    list += '<li>' + range + '</li>';
                }
                list += '<li>' + this.locale.customRangeLabel + '</li>';
                list += '</ul>';
                this.container.find('.ranges').prepend(list);
            }

            if (typeof options.dateLimit == 'object')
                this.dateLimit = options.dateLimit;

            // update day names order to firstDay
            if (typeof options.locale == 'object') {
                if (typeof options.locale.firstDay == 'number') {
                    this.locale.firstDay = options.locale.firstDay;
                    var iterator = options.locale.firstDay;
                    while (iterator > 0) {
                        this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift());
                        iterator--;
                    }
                }
            }

            if (typeof options.opens == 'string')
                this.opens = options.opens;

            if (typeof options.showWeekNumbers == 'boolean') {
                this.showWeekNumbers = options.showWeekNumbers;
            }

            if (typeof options.buttonClasses == 'string') {
                this.buttonClasses = [options.buttonClasses];
            }

            if (typeof options.buttonClasses == 'object') {
                this.buttonClasses = options.buttonClasses;
            }

            if (typeof options.showDropdowns == 'boolean') {
                this.showDropdowns = options.showDropdowns;
            }

            if (typeof options.timePicker == 'boolean') {
                this.timePicker = options.timePicker;
            }

            if (typeof options.timePickerIncrement == 'number') {
                this.timePickerIncrement = options.timePickerIncrement;
            }

            if (typeof options.timePicker12Hour == 'boolean') {
                this.timePicker12Hour = options.timePicker12Hour;
            }

        }

        if (!this.timePicker) {
            this.startDate = this.startDate.startOf('day');
            this.endDate = this.endDate.startOf('day');
        }

        //apply CSS classes to buttons
        var c = this.container;
        $.each(this.buttonClasses, function (idx, val) {
            c.find('button').addClass(val);
        });

        if (this.opens == 'right') {
            //swap calendar positions
            var left = this.container.find('.calendar.left');
            var right = this.container.find('.calendar.right');
            left.removeClass('left').addClass('right');
            right.removeClass('right').addClass('left');
        }

        if (typeof options == 'undefined' || typeof options.ranges == 'undefined') {
            this.container.find('.calendar').show();
            this.move();
        }

        if (typeof cb == 'function')
            this.cb = cb;

        this.container.addClass('opens' + this.opens);

        //try parse date if in text input
        if (!hasOptions || (typeof options.startDate == 'undefined' && typeof options.endDate == 'undefined')) {
            if ($(this.element).is('input[type=text]')) {
                var val = $(this.element).val();
                var split = val.split(this.separator);
                var start, end;
                if (split.length == 2) {
                    start = moment(split[0], this.format);
                    end = moment(split[1], this.format);
                }
                if (start != null && end != null) {
                    this.startDate = start;
                    this.endDate = end;
                }
            }
        }

        //state
        this.oldStartDate = this.startDate.clone();
        this.oldEndDate = this.endDate.clone();

        this.leftCalendar = {
            month: moment([this.startDate.year(), this.startDate.month(), 1, this.startDate.hour(), this.startDate.minute()]),
            calendar: []
        };

        this.rightCalendar = {
            month: moment([this.endDate.year(), this.endDate.month(), 1, this.endDate.hour(), this.endDate.minute()]),
            calendar: []
        };

        //event listeners
        this.container.on('mousedown', $.proxy(this.mousedown, this));
        this.container.find('.calendar').on('click', '.prev', $.proxy(this.clickPrev, this));
        this.container.find('.calendar').on('click', '.next', $.proxy(this.clickNext, this));
        this.container.find('.ranges').on('click', 'a.applyBtn', $.proxy(this.clickApply, this));
        this.container.find('.ranges').on('click', 'a.cancelBtn', $.proxy(this.clickCancel, this));

        this.container.find('.ranges').on('click', '.daterangepicker_start_input', $.proxy(this.showCalendars, this));
        this.container.find('.ranges').on('click', '.daterangepicker_end_input', $.proxy(this.showCalendars, this));

        this.container.find('.calendar').on('click', 'td.available', $.proxy(this.clickDate, this));
        this.container.find('.calendar').on('mouseenter', 'td.available', $.proxy(this.enterDate, this));
        this.container.find('.calendar').on('mouseleave', 'td.available', $.proxy(this.updateView, this));

        this.container.find('.ranges').on('click', 'li', $.proxy(this.clickRange, this));
        this.container.find('.ranges').on('mouseenter', 'li', $.proxy(this.enterRange, this));
        this.container.find('.ranges').on('mouseleave', 'li', $.proxy(this.updateView, this));

        this.container.find('.calendar').on('change', 'select.yearselect', $.proxy(this.updateMonthYear, this));
        this.container.find('.calendar').on('change', 'select.monthselect', $.proxy(this.updateMonthYear, this));

        this.container.find('.calendar').on('change', 'select.hourselect', $.proxy(this.updateTime, this));
        this.container.find('.calendar').on('change', 'select.minuteselect', $.proxy(this.updateTime, this));
        this.container.find('.calendar').on('change', 'select.ampmselect', $.proxy(this.updateTime, this));

        this.element.on('keyup', $.proxy(this.updateFromControl, this));

        this.updateView();
        this.updateCalendars();

    };

    DateRangePicker.prototype = {

        constructor: DateRangePicker,

        mousedown: function (e) {
            e.stopPropagation();
        },

        updateView: function () {
            this.leftCalendar.month.month(this.startDate.month()).year(this.startDate.year());
            this.rightCalendar.month.month(this.endDate.month()).year(this.endDate.year());

            this.container.find('input[name=daterangepicker_start]').val(this.startDate.format(this.format));
            this.container.find('input[name=daterangepicker_end]').val(this.endDate.format(this.format));

            if (this.startDate.isSame(this.endDate) || this.startDate.isBefore(this.endDate)) {
                this.container.find('button.applyBtn').removeAttr('disabled');
            } else {
                this.container.find('button.applyBtn').attr('disabled', 'disabled');
            }
        },

        updateFromControl: function () {
            if (!this.element.is('input')) return;
            if (!this.element.val().length) return;

            var dateString = this.element.val().split(this.separator);
            var start = moment(dateString[0], this.format);
            var end = moment(dateString[1], this.format);

            if (start == null || end == null) return;
            if (end.isBefore(start)) return;

            this.oldStartDate = this.startDate.clone();
            this.oldEndDate = this.endDate.clone();

            this.startDate = start;
            this.endDate = end;

            if (!this.startDate.isSame(this.oldStartDate) || !this.endDate.isSame(this.oldEndDate))
                this.notify();

            this.updateCalendars();
        },

        notify: function () {
            this.updateView();
            this.cb(this.startDate, this.endDate);
        },

        move: function () {
            var parentOffset = {
                top: this.parentEl.offset().top - (this.parentEl.is('body') ? 0 : this.parentEl.scrollTop()),
                left: this.parentEl.offset().left - (this.parentEl.is('body') ? 0 : this.parentEl.scrollLeft())
            };
            if (this.opens == 'left') {
			 if(this.parentEl.is('body')){
				 right=$(window).width() - this.element.offset().left - this.element.outerWidth() - parentOffset.left;
			}else{
				 right=$(window).width() - this.element.offset().left - parentOffset.left;
			}
                this.container.css({
                    top: this.element.offset().top + this.element.outerHeight() - parentOffset.top,
                    right: right,
                    left: 'auto'
                });
			 
                if (this.container.offset().left < 0) {
                    this.container.css({
                        right: 'auto',
                        left: 9
                    });
                }
            } else {
                this.container.css({
                    top: this.element.offset().top + this.element.outerHeight() - parentOffset.top,
                    left: this.element.offset().left - parentOffset.left,
                    right: 'auto'
                });
                if (this.container.offset().left + this.container.outerWidth() > $(window).width()) {
                    this.container.css({
                        left: 'auto',
                        right: 0
                    });
                }
            }
        },

        show: function (e) {
            this.container.show();
		  if(this.overlay){
			  this.element.css({'position':'relative','z-index':parseInt(this.container.css('z-index')-1)});
			 // alert($("body").find("#cl-overla").length);
			  if($("body").find("#cl-overlay").length==0){
			  $("body").append('<div id="cl-overlay" style="z-index:'+parseInt(this.container.css('z-index')-2)+'"/>');
			  $('#cl-overlay').css('opacity',this.overlayOpacity).fadeIn();
			  }
		  }
            this.move();
            if (e) {
                e.stopPropagation();
                e.preventDefault();
            }

            $(document).on('mousedown', $.proxy(this.hide, this));
            this.element.trigger('shown', {target: e.target, picker: this});
        },

        hide: function (e) {
            this.container.hide();
		  if(this.overlay){
			this.element.css({'position':'','z-index':''});
			$("body").find('#cl-overlay').fadeOut(400,function(){ $(this).remove() });
		  }
            if (!this.startDate.isSame(this.oldStartDate) || !this.endDate.isSame(this.oldEndDate))
                this.notify();

            this.oldStartDate = this.startDate.clone();
            this.oldEndDate = this.endDate.clone();

            $(document).off('mousedown', this.hide);
            this.element.trigger('hidden', { picker: this });
        },

        enterRange: function (e) {
            var label = e.target.innerHTML;
            if (label == this.locale.customRangeLabel) {
                this.updateView();
            } else {
                var dates = this.ranges[label];
                this.container.find('input[name=daterangepicker_start]').val(dates[0].format(this.format));
                this.container.find('input[name=daterangepicker_end]').val(dates[1].format(this.format));
            }
        },

        showCalendars: function() {
            this.container.find('.calendar').show();
            this.move();
        },

        updateInputText: function() {
            if (this.element.is('input'))
                this.element.val(this.startDate.format(this.format) + this.separator + this.endDate.format(this.format));
        },

        clickRange: function (e) {
            var label = e.target.innerHTML;
            if (label == this.locale.customRangeLabel) {
                this.showCalendars();
            } else {
                var dates = this.ranges[label];

                this.startDate = dates[0];
                this.endDate = dates[1];

                if (!this.timePicker) {
                    this.startDate.startOf('day');
                    this.endDate.startOf('day');
                }

                this.leftCalendar.month.month(this.startDate.month()).year(this.startDate.year()).hour(this.startDate.hour()).minute(this.startDate.minute());
                this.rightCalendar.month.month(this.endDate.month()).year(this.endDate.year()).hour(this.endDate.hour()).minute(this.endDate.minute());
                this.updateCalendars();

                this.updateInputText();

                this.container.find('.calendar').hide();
                this.hide();
            }
        },

        clickPrev: function (e) {
            var cal = $(e.target).parents('.calendar');
            if (cal.hasClass('left')) {
                this.leftCalendar.month.subtract('month', 1);
            } else {
                this.rightCalendar.month.subtract('month', 1);
            }
            this.updateCalendars();
        },

        clickNext: function (e) {
            var cal = $(e.target).parents('.calendar');
            if (cal.hasClass('left')) {
                this.leftCalendar.month.add('month', 1);
            } else {
                this.rightCalendar.month.add('month', 1);
            }
            this.updateCalendars();
        },

        enterDate: function (e) {

            var title = $(e.target).attr('data-title');
            var row = title.substr(1, 1);
            var col = title.substr(3, 1);
            var cal = $(e.target).parents('.calendar');

            if (cal.hasClass('left')) {
                this.container.find('input[name=daterangepicker_start]').val(this.leftCalendar.calendar[row][col].format(this.format));
            } else {
                this.container.find('input[name=daterangepicker_end]').val(this.rightCalendar.calendar[row][col].format(this.format));
            }

        },

        clickDate: function (e) {
            var title = $(e.target).attr('data-title');
            var row = title.substr(1, 1);
            var col = title.substr(3, 1);
            var cal = $(e.target).parents('.calendar');

            if (cal.hasClass('left')) {
                var startDate = this.leftCalendar.calendar[row][col];
                var endDate = this.endDate;
                if (typeof this.dateLimit == 'object') {
                    var maxDate = moment(startDate).add(this.dateLimit).startOf('day');
                    if (endDate.isAfter(maxDate)) {
                        endDate = maxDate;
                    }
                }
            } else {
                var startDate = this.startDate;
                var endDate = this.rightCalendar.calendar[row][col];
                if (typeof this.dateLimit == 'object') {
                    var minDate = moment(endDate).subtract(this.dateLimit).startOf('day');
                    if (startDate.isBefore(minDate)) {
                        startDate = minDate;
                    }
                }
            }

            cal.find('td').removeClass('active');

            if (startDate.isSame(endDate) || startDate.isBefore(endDate)) {
                $(e.target).addClass('active');
                this.startDate = startDate;
                this.endDate = endDate;
            } else if (startDate.isAfter(endDate)) {
                $(e.target).addClass('active');
                this.startDate = startDate;
                this.endDate = moment(startDate).add('day', 1).startOf('day');
            }

            this.leftCalendar.month.month(this.startDate.month()).year(this.startDate.year());
            this.rightCalendar.month.month(this.endDate.month()).year(this.endDate.year());
            this.updateCalendars();
        },

        clickApply: function (e) {
            this.updateInputText();
            this.hide();
        },

        clickCancel: function (e) {
            this.startDate = this.oldStartDate;
            this.endDate = this.oldEndDate;
            this.updateView();
            this.updateCalendars();
            this.hide();
        },

        updateMonthYear: function (e) {

            var isLeft = $(e.target).closest('.calendar').hasClass('left');
            var cal = this.container.find('.calendar.left');
            if (!isLeft)
                cal = this.container.find('.calendar.right');

            var month = parseInt(cal.find('.monthselect').val());
            var year = cal.find('.yearselect').val();

            if (isLeft) {
                this.leftCalendar.month.month(month).year(year);
            } else {
                this.rightCalendar.month.month(month).year(year);
            }

            this.updateCalendars();

        },

        updateTime: function(e) {

            var isLeft = $(e.target).closest('.calendar').hasClass('left');
            var cal = this.container.find('.calendar.left');
            if (!isLeft)
                cal = this.container.find('.calendar.right');

            var hour = parseInt(cal.find('.hourselect').val());
            var minute = parseInt(cal.find('.minuteselect').val());

            if (this.timePicker12Hour) {
                var ampm = cal.find('.ampmselect').val();
                if (ampm == 'PM' && hour < 12)
                    hour += 12;
                if (ampm == 'AM' && hour == 12)
                    hour = 0;
            }

            if (isLeft) {
                var start = this.startDate.clone();
                start.hour(hour);
                start.minute(minute);
                this.startDate = start;
                this.leftCalendar.month.hour(hour).minute(minute);
            } else {
                var end = this.endDate.clone();
                end.hour(hour);
                end.minute(minute);
                this.endDate = end;
                this.rightCalendar.month.hour(hour).minute(minute);
            }

            this.updateCalendars();

        },

        updateCalendars: function () {
            this.leftCalendar.calendar = this.buildCalendar(this.leftCalendar.month.month(), this.leftCalendar.month.year(), this.leftCalendar.month.hour(), this.leftCalendar.month.minute(), 'left');
            this.rightCalendar.calendar = this.buildCalendar(this.rightCalendar.month.month(), this.rightCalendar.month.year(), this.rightCalendar.month.hour(), this.rightCalendar.month.minute(), 'right');
            this.container.find('.calendar.left').html(this.renderCalendar(this.leftCalendar.calendar, this.startDate, this.minDate, this.maxDate));
            this.container.find('.calendar.right').html(this.renderCalendar(this.rightCalendar.calendar, this.endDate, this.startDate, this.maxDate));

            this.container.find('.ranges li').removeClass('active');
            var customRange = true;
            var i = 0;
            for (var range in this.ranges) {
                if (this.timePicker) {
                    if (this.startDate.isSame(this.ranges[range][0]) && this.endDate.isSame(this.ranges[range][1])) {
                        customRange = false;
                        this.container.find('.ranges li:eq(' + i + ')').addClass('active');
                    }
                } else {
                    //ignore times when comparing dates if time picker is not enabled
                    if (this.startDate.format('YYYY-MM-DD') == this.ranges[range][0].format('YYYY-MM-DD') && this.endDate.format('YYYY-MM-DD') == this.ranges[range][1].format('YYYY-MM-DD')) {
                        customRange = false;
                        this.container.find('.ranges li:eq(' + i + ')').addClass('active');
                    }
                }
                i++;
            }
            if (customRange)
                this.container.find('.ranges li:last').addClass('active');
        },

        buildCalendar: function (month, year, hour, minute, side) {

            var firstDay = moment([year, month, 1]);
            var lastMonth = moment(firstDay).subtract('month', 1).month();
            var lastYear = moment(firstDay).subtract('month', 1).year();

            var daysInLastMonth = moment([lastYear, lastMonth]).daysInMonth();

            var dayOfWeek = firstDay.day();

            //initialize a 6 rows x 7 columns array for the calendar
            var calendar = [];
            for (var i = 0; i < 6; i++) {
                calendar[i] = [];
            }

            //populate the calendar with date objects
            var startDay = daysInLastMonth - dayOfWeek + this.locale.firstDay + 1;
            if (startDay > daysInLastMonth)
                startDay -= 7;

            if (dayOfWeek == this.locale.firstDay)
                startDay = daysInLastMonth - 6;

            var curDate = moment([lastYear, lastMonth, startDay, 12, minute]);
            for (var i = 0, col = 0, row = 0; i < 42; i++, col++, curDate = moment(curDate).add('hour', 24)) {
                if (i > 0 && col % 7 == 0) {
                    col = 0;
                    row++;
                }
                calendar[row][col] = curDate.clone().hour(hour);
                curDate.hour(12);
            }

            return calendar;

        },

        renderDropdowns: function (selected, minDate, maxDate) {
            var currentMonth = selected.month();
            var monthHtml = '<select class="monthselect">';
            var inMinYear = false;

            var inMaxYear = false;

            for (var m = 0; m < 12; m++) {
                if ((!inMinYear || m >= minDate.month()) && (!inMaxYear || m <= maxDate.month())) {
                    monthHtml += "<option value='" + m + "'" +
                        (m === currentMonth ? " selected='selected'" : "") +
                        ">" + this.locale.monthNames[m] + "</option>";
                }
            }
            monthHtml += "</select>";

            var currentYear = selected.year();
            var maxYear = (maxDate && maxDate.year()) || (currentYear + 5);
            var minYear = (minDate && minDate.year()) || (currentYear - 50);
            var yearHtml = '<select class="yearselect">';

            for (var y = minYear; y <= maxYear; y++) {
                yearHtml += '<option value="' + y + '"' +
                    (y === currentYear ? ' selected="selected"' : '') +
                    '>' + y + '</option>';
            }

            yearHtml += '</select>';

            return monthHtml + yearHtml;
        },

        renderCalendar: function (calendar, selected, minDate, maxDate) {

            var html = '<div class="calendar-date">';
            html += '<table class="table-condensed">';
            html += '<thead>';
            html += '<tr>';

            // add empty cell for week number
            if (this.showWeekNumbers)
                html += '<th></th>';

            if (!minDate || minDate.isBefore(calendar[1][1])) {
                html += '<th class="prev available"><i class="icon-angle-left glyphicon glyphicon-chevron-left"></i></th>';
            } else {
                html += '<th></th>';
            }

            var dateHtml = this.locale.monthNames[calendar[1][1].month()] + calendar[1][1].format(" YYYY");

            if (this.showDropdowns) {
                dateHtml = this.renderDropdowns(calendar[1][1], minDate, maxDate);
            }

            html += '<th colspan="5" style="width: auto">' + dateHtml + '</th>';
            if (!maxDate || maxDate.isAfter(calendar[1][1])) {
                html += '<th class="next available"><i class="icon-angle-right glyphicon glyphicon-chevron-right"></i></th>';
            } else {
                html += '<th></th>';
            }

            html += '</tr>';
            html += '<tr>';

            // add week number label
            if (this.showWeekNumbers)
                html += '<th class="week">' + this.locale.weekLabel + '</th>';

            $.each(this.locale.daysOfWeek, function (index, dayOfWeek) {
                html += '<th>' + dayOfWeek + '</th>';
            });

            html += '</tr>';
            html += '</thead>';
            html += '<tbody>';

            for (var row = 0; row < 6; row++) {
                html += '<tr>';

                // add week number
                if (this.showWeekNumbers)
                    html += '<td class="week">' + calendar[row][0].week() + '</td>';

                for (var col = 0; col < 7; col++) {
                    var cname = 'available ';
                    cname += (calendar[row][col].month() == calendar[1][1].month()) ? '' : 'off';

                    if ((minDate && calendar[row][col].isBefore(minDate)) || (maxDate && calendar[row][col].isAfter(maxDate))) {
                        cname = ' off disabled ';
                    } else if (calendar[row][col].format('YYYY-MM-DD') == selected.format('YYYY-MM-DD')) {
                        cname += ' active ';
                        if (calendar[row][col].format('YYYY-MM-DD') == this.startDate.format('YYYY-MM-DD')) {
                            cname += ' start-date ';
                        }
                        if (calendar[row][col].format('YYYY-MM-DD') == this.endDate.format('YYYY-MM-DD')) {
                            cname += ' end-date ';
                        }
                    } else if (calendar[row][col] >= this.startDate && calendar[row][col] <= this.endDate) {
                        cname += ' in-range ';
                        if (calendar[row][col].isSame(this.startDate)) { cname += ' start-date '; }
                        if (calendar[row][col].isSame(this.endDate)) { cname += ' end-date '; }
                    }

                    var title = 'r' + row + 'c' + col;
                    html += '<td class="' + cname.replace(/\s+/g, ' ').replace(/^\s?(.*?)\s?$/, '$1') + '" data-title="' + title + '">' + calendar[row][col].date() + '</td>';
                }
                html += '</tr>';
            }

            html += '</tbody>';
            html += '</table>';
            html += '</div>';

            if (this.timePicker) {

                html += '<div class="calendar-time">';
                html += '<select class="hourselect">';
                var start = 0;
                var end = 23;
                var selected_hour = selected.hour();
                if (this.timePicker12Hour) {
                    start = 1;
                    end = 12;
                    if (selected_hour >= 12)
                        selected_hour -= 12;
                    if (selected_hour == 0)
                        selected_hour = 12;
                }

                for (var i = start; i <= end; i++) {
                    if (i == selected_hour) {
                        html += '<option value="' + i + '" selected="selected">' + i + '</option>';
                    } else {
                        html += '<option value="' + i + '">' + i + '</option>';
                    }
                }

                html += '</select> : ';

                html += '<select class="minuteselect">';

                for (var i = 0; i < 60; i += this.timePickerIncrement) {
                    var num = i;
                    if (num < 10)
                        num = '0' + num;
                    if (i == selected.minute()) {
                        html += '<option value="' + i + '" selected="selected">' + num + '</option>';
                    } else {
                        html += '<option value="' + i + '">' + num + '</option>';
                    }
                }

                html += '</select> ';

                if (this.timePicker12Hour) {
                    html += '<select class="ampmselect">';
                    if (selected.hour() >= 12) {
                        html += '<option value="AM">AM</option><option value="PM" selected="selected">PM</option>';
                    } else {
                        html += '<option value="AM" selected="selected">AM</option><option value="PM">PM</option>';
                    }
                    html += '</select>';
                }

                html += '</div>';

            }

            return html;

        }

    };

    $.fn.daterangepicker = function (options, cb) {
        this.each(function () {
            var el = $(this);
            if (!el.data('daterangepicker'))
                el.data('daterangepicker', new DateRangePicker(el, options, cb));
        });
        return this;
    };

}(window.jQuery);













/**
 * Timeago is a jQuery plugin that makes it easy to support automatically
 * updating fuzzy timestamps (e.g. "4 minutes ago" or "about 1 day ago").
 *
 * @name timeago
 * @version 1.3.0
 * @requires jQuery v1.2.3+
 * @author Ryan McGeary
 * @license MIT License - http://www.opensource.org/licenses/mit-license.php
 *
 * For usage and examples, visit:
 * http://timeago.yarp.com/
 *
 * Copyright (c) 2008-2013, Ryan McGeary (ryan -[at]- mcgeary [*dot*] org)
 */

(function(factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function($) {
    $.timeago = function(timestamp) {
        if (timestamp instanceof Date) {
            return inWords(timestamp);
        } else if (typeof timestamp === "string") {
            return inWords($.timeago.parse(timestamp));
        } else if (typeof timestamp === "number") {
            return inWords(new Date(timestamp));
        } else {
            return inWords($.timeago.datetime(timestamp));
        }
    };
    var $t = $.timeago;

    $.extend($.timeago, {
        settings: {
            refreshMillis: 60000,
            allowFuture: false,
            localeTitle: false,
            cutoff: 0,
            strings: {
                prefixAgo: null,
                prefixFromNow: null,
                suffixAgo: "ago",
                suffixFromNow: "from now",
                seconds: "less than a minute",
                minute: "about a minute",
                minutes: "%d minutes",
                hour: "about an hour",
                hours: "about %d hours",
                day: "a day",
                days: "%d days",
                month: "about a month",
                months: "%d months",
                year: "about a year",
                years: "%d years",
                wordSeparator: " ",
                numbers: []
            }
        },
        inWords: function(distanceMillis) {
            var $l = this.settings.strings;
            var prefix = $l.prefixAgo;
            var suffix = $l.suffixAgo;
            if (this.settings.allowFuture) {
                if (distanceMillis < 0) {
                    prefix = $l.prefixFromNow;
                    suffix = $l.suffixFromNow;
                }
            }

            var seconds = Math.abs(distanceMillis) / 1000;
            var minutes = seconds / 60;
            var hours = minutes / 60;
            var days = hours / 24;
            var years = days / 365;

            function substitute(stringOrFunction, number) {
                var string = $.isFunction(stringOrFunction) ? stringOrFunction(number, distanceMillis) : stringOrFunction;
                var value = ($l.numbers && $l.numbers[number]) || number;
                return string.replace(/%d/i, value);
            }

            var words = seconds < 45 && substitute($l.seconds, Math.round(seconds)) ||
                seconds < 90 && substitute($l.minute, 1) ||
                minutes < 45 && substitute($l.minutes, Math.round(minutes)) ||
                minutes < 90 && substitute($l.hour, 1) ||
                hours < 24 && substitute($l.hours, Math.round(hours)) ||
                hours < 42 && substitute($l.day, 1) ||
                days < 30 && substitute($l.days, Math.round(days)) ||
                days < 45 && substitute($l.month, 1) ||
                days < 365 && substitute($l.months, Math.round(days / 30)) ||
                years < 1.5 && substitute($l.year, 1) ||
                substitute($l.years, Math.round(years));

            var separator = $l.wordSeparator || "";
            if ($l.wordSeparator === undefined) {
                separator = " ";
            }
            return $.trim([prefix, words, suffix].join(separator));
        },
        parse: function(iso8601) {
            var s = $.trim(iso8601);
            s = s.replace(/\.\d+/, ""); // remove milliseconds
            s = s.replace(/-/, "/").replace(/-/, "/");
            s = s.replace(/T/, " ").replace(/Z/, " UTC");
            s = s.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"); // -04:00 -> -0400
            return new Date(s);
        },
        datetime: function(elem) {
            var iso8601 = $t.isTime(elem) ? $(elem).attr("datetime") : $(elem).attr("title");
            return $t.parse(iso8601);
        },
        isTime: function(elem) {
            // jQuery's `is()` doesn't play well with HTML5 in IE
            return $(elem).get(0).tagName.toLowerCase() === "time"; // $(elem).is("time");
        }
    });

    // functions that can be called via $(el).timeago('action')
    // init is default when no action is given
    // functions are called with context of a single element
    var functions = {
        init: function() {
            var refresh_el = $.proxy(refresh, this);
            refresh_el();
            var $s = $t.settings;
            if ($s.refreshMillis > 0) {
                setInterval(refresh_el, $s.refreshMillis);
            }
        },
        update: function(time) {
            $(this).data('timeago', {
                datetime: $t.parse(time)
            });
            refresh.apply(this);
        },
        updateFromDOM: function() {
            $(this).data('timeago', {
                datetime: $t.parse($t.isTime(this) ? $(this).attr("datetime") : $(this).attr("title"))
            });
            refresh.apply(this);
        }
    };

    $.fn.timeago = function(action, options) {
        var fn = action ? functions[action] : functions.init;
        if (!fn) {
            throw new Error("Unknown function name '" + action + "' for timeago");
        }
        // each over objects here and call the requested function
        this.each(function() {
            fn.call(this, options);
        });
        return this;
    };

    function refresh() {
        var data = prepareData(this);
        var $s = $t.settings;

        if (!isNaN(data.datetime)) {
            if ($s.cutoff == 0 || distance(data.datetime) < $s.cutoff) {
                $(this).text(inWords(data.datetime));
            }
        }
        return this;
    }

    function prepareData(element) {
        element = $(element);
        if (!element.data("timeago")) {
            element.data("timeago", {
                datetime: $t.datetime(element)
            });
            var text = $.trim(element.text());
            if ($t.settings.localeTitle) {
                element.attr("title", element.data('timeago').datetime.toLocaleString());
            } else if (text.length > 0 && !($t.isTime(element) && element.attr("title"))) {
                element.attr("title", text);
            }
        }
        return element.data("timeago");
    }

    function inWords(date) {
        return $t.inWords(distance(date));
    }

    function distance(date) {
        return (new Date().getTime() - date.getTime());
    }

    // fix for IE6 suckage
    document.createElement("abbr");
    document.createElement("time");
}));















// moment.js
// version : 2.1.0
// author : Tim Wood
// license : MIT
// momentjs.com
!function(t){function e(t,e){return function(n){return u(t.call(this,n),e)}}function n(t,e){return function(n){return this.lang().ordinal(t.call(this,n),e)}}function s(){}function i(t){a(this,t)}function r(t){var e=t.years||t.year||t.y||0,n=t.months||t.month||t.M||0,s=t.weeks||t.week||t.w||0,i=t.days||t.day||t.d||0,r=t.hours||t.hour||t.h||0,a=t.minutes||t.minute||t.m||0,o=t.seconds||t.second||t.s||0,u=t.milliseconds||t.millisecond||t.ms||0;this._input=t,this._milliseconds=u+1e3*o+6e4*a+36e5*r,this._days=i+7*s,this._months=n+12*e,this._data={},this._bubble()}function a(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function o(t){return 0>t?Math.ceil(t):Math.floor(t)}function u(t,e){for(var n=t+"";n.length<e;)n="0"+n;return n}function h(t,e,n,s){var i,r,a=e._milliseconds,o=e._days,u=e._months;a&&t._d.setTime(+t._d+a*n),(o||u)&&(i=t.minute(),r=t.hour()),o&&t.date(t.date()+o*n),u&&t.month(t.month()+u*n),a&&!s&&H.updateOffset(t),(o||u)&&(t.minute(i),t.hour(r))}function d(t){return"[object Array]"===Object.prototype.toString.call(t)}function c(t,e){var n,s=Math.min(t.length,e.length),i=Math.abs(t.length-e.length),r=0;for(n=0;s>n;n++)~~t[n]!==~~e[n]&&r++;return r+i}function f(t){return t?ie[t]||t.toLowerCase().replace(/(.)s$/,"$1"):t}function l(t,e){return e.abbr=t,x[t]||(x[t]=new s),x[t].set(e),x[t]}function _(t){if(!t)return H.fn._lang;if(!x[t]&&A)try{require("./lang/"+t)}catch(e){return H.fn._lang}return x[t]}function m(t){return t.match(/\[.*\]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"")}function y(t){var e,n,s=t.match(E);for(e=0,n=s.length;n>e;e++)s[e]=ue[s[e]]?ue[s[e]]:m(s[e]);return function(i){var r="";for(e=0;n>e;e++)r+=s[e]instanceof Function?s[e].call(i,t):s[e];return r}}function M(t,e){function n(e){return t.lang().longDateFormat(e)||e}for(var s=5;s--&&N.test(e);)e=e.replace(N,n);return re[e]||(re[e]=y(e)),re[e](t)}function g(t,e){switch(t){case"DDDD":return V;case"YYYY":return X;case"YYYYY":return $;case"S":case"SS":case"SSS":case"DDD":return I;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return R;case"a":case"A":return _(e._l)._meridiemParse;case"X":return B;case"Z":case"ZZ":return j;case"T":return q;case"MM":case"DD":case"YY":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":return J;default:return new RegExp(t.replace("\\",""))}}function p(t){var e=(j.exec(t)||[])[0],n=(e+"").match(ee)||["-",0,0],s=+(60*n[1])+~~n[2];return"+"===n[0]?-s:s}function D(t,e,n){var s,i=n._a;switch(t){case"M":case"MM":i[1]=null==e?0:~~e-1;break;case"MMM":case"MMMM":s=_(n._l).monthsParse(e),null!=s?i[1]=s:n._isValid=!1;break;case"D":case"DD":case"DDD":case"DDDD":null!=e&&(i[2]=~~e);break;case"YY":i[0]=~~e+(~~e>68?1900:2e3);break;case"YYYY":case"YYYYY":i[0]=~~e;break;case"a":case"A":n._isPm=_(n._l).isPM(e);break;case"H":case"HH":case"h":case"hh":i[3]=~~e;break;case"m":case"mm":i[4]=~~e;break;case"s":case"ss":i[5]=~~e;break;case"S":case"SS":case"SSS":i[6]=~~(1e3*("0."+e));break;case"X":n._d=new Date(1e3*parseFloat(e));break;case"Z":case"ZZ":n._useUTC=!0,n._tzm=p(e)}null==e&&(n._isValid=!1)}function Y(t){var e,n,s=[];if(!t._d){for(e=0;7>e;e++)t._a[e]=s[e]=null==t._a[e]?2===e?1:0:t._a[e];s[3]+=~~((t._tzm||0)/60),s[4]+=~~((t._tzm||0)%60),n=new Date(0),t._useUTC?(n.setUTCFullYear(s[0],s[1],s[2]),n.setUTCHours(s[3],s[4],s[5],s[6])):(n.setFullYear(s[0],s[1],s[2]),n.setHours(s[3],s[4],s[5],s[6])),t._d=n}}function w(t){var e,n,s=t._f.match(E),i=t._i;for(t._a=[],e=0;e<s.length;e++)n=(g(s[e],t).exec(i)||[])[0],n&&(i=i.slice(i.indexOf(n)+n.length)),ue[s[e]]&&D(s[e],n,t);i&&(t._il=i),t._isPm&&t._a[3]<12&&(t._a[3]+=12),t._isPm===!1&&12===t._a[3]&&(t._a[3]=0),Y(t)}function k(t){var e,n,s,r,o,u=99;for(r=0;r<t._f.length;r++)e=a({},t),e._f=t._f[r],w(e),n=new i(e),o=c(e._a,n.toArray()),n._il&&(o+=n._il.length),u>o&&(u=o,s=n);a(t,s)}function v(t){var e,n=t._i,s=K.exec(n);if(s){for(t._f="YYYY-MM-DD"+(s[2]||" "),e=0;4>e;e++)if(te[e][1].exec(n)){t._f+=te[e][0];break}j.exec(n)&&(t._f+=" Z"),w(t)}else t._d=new Date(n)}function T(e){var n=e._i,s=G.exec(n);n===t?e._d=new Date:s?e._d=new Date(+s[1]):"string"==typeof n?v(e):d(n)?(e._a=n.slice(0),Y(e)):e._d=n instanceof Date?new Date(+n):new Date(n)}function b(t,e,n,s,i){return i.relativeTime(e||1,!!n,t,s)}function S(t,e,n){var s=W(Math.abs(t)/1e3),i=W(s/60),r=W(i/60),a=W(r/24),o=W(a/365),u=45>s&&["s",s]||1===i&&["m"]||45>i&&["mm",i]||1===r&&["h"]||22>r&&["hh",r]||1===a&&["d"]||25>=a&&["dd",a]||45>=a&&["M"]||345>a&&["MM",W(a/30)]||1===o&&["y"]||["yy",o];return u[2]=e,u[3]=t>0,u[4]=n,b.apply({},u)}function F(t,e,n){var s,i=n-e,r=n-t.day();return r>i&&(r-=7),i-7>r&&(r+=7),s=H(t).add("d",r),{week:Math.ceil(s.dayOfYear()/7),year:s.year()}}function O(t){var e=t._i,n=t._f;return null===e||""===e?null:("string"==typeof e&&(t._i=e=_().preparse(e)),H.isMoment(e)?(t=a({},e),t._d=new Date(+e._d)):n?d(n)?k(t):w(t):T(t),new i(t))}function z(t,e){H.fn[t]=H.fn[t+"s"]=function(t){var n=this._isUTC?"UTC":"";return null!=t?(this._d["set"+n+e](t),H.updateOffset(this),this):this._d["get"+n+e]()}}function C(t){H.duration.fn[t]=function(){return this._data[t]}}function L(t,e){H.duration.fn["as"+t]=function(){return+this/e}}for(var H,P,U="2.1.0",W=Math.round,x={},A="undefined"!=typeof module&&module.exports,G=/^\/?Date\((\-?\d+)/i,Z=/(\-)?(\d*)?\.?(\d+)\:(\d+)\:(\d+)\.?(\d{3})?/,E=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,N=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,J=/\d\d?/,I=/\d{1,3}/,V=/\d{3}/,X=/\d{1,4}/,$=/[+\-]?\d{1,6}/,R=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,j=/Z|[\+\-]\d\d:?\d\d/i,q=/T/i,B=/[\+\-]?\d+(\.\d{1,3})?/,K=/^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,Q="YYYY-MM-DDTHH:mm:ssZ",te=[["HH:mm:ss.S",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],ee=/([\+\-]|\d\d)/gi,ne="Date|Hours|Minutes|Seconds|Milliseconds".split("|"),se={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},ie={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",w:"week",M:"month",y:"year"},re={},ae="DDD w W M D d".split(" "),oe="M D H h m s w W".split(" "),ue={M:function(){return this.month()+1},MMM:function(t){return this.lang().monthsShort(this,t)},MMMM:function(t){return this.lang().months(this,t)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(t){return this.lang().weekdaysMin(this,t)},ddd:function(t){return this.lang().weekdaysShort(this,t)},dddd:function(t){return this.lang().weekdays(this,t)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return u(this.year()%100,2)},YYYY:function(){return u(this.year(),4)},YYYYY:function(){return u(this.year(),5)},gg:function(){return u(this.weekYear()%100,2)},gggg:function(){return this.weekYear()},ggggg:function(){return u(this.weekYear(),5)},GG:function(){return u(this.isoWeekYear()%100,2)},GGGG:function(){return this.isoWeekYear()},GGGGG:function(){return u(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return~~(this.milliseconds()/100)},SS:function(){return u(~~(this.milliseconds()/10),2)},SSS:function(){return u(this.milliseconds(),3)},Z:function(){var t=-this.zone(),e="+";return 0>t&&(t=-t,e="-"),e+u(~~(t/60),2)+":"+u(~~t%60,2)},ZZ:function(){var t=-this.zone(),e="+";return 0>t&&(t=-t,e="-"),e+u(~~(10*t/6),4)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()}};ae.length;)P=ae.pop(),ue[P+"o"]=n(ue[P],P);for(;oe.length;)P=oe.pop(),ue[P+P]=e(ue[P],2);for(ue.DDDD=e(ue.DDD,3),s.prototype={set:function(t){var e,n;for(n in t)e=t[n],"function"==typeof e?this[n]=e:this["_"+n]=e},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(t){return this._months[t.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(t){return this._monthsShort[t.month()]},monthsParse:function(t){var e,n,s;for(this._monthsParse||(this._monthsParse=[]),e=0;12>e;e++)if(this._monthsParse[e]||(n=H([2e3,e]),s="^"+this.months(n,"")+"|^"+this.monthsShort(n,""),this._monthsParse[e]=new RegExp(s.replace(".",""),"i")),this._monthsParse[e].test(t))return e},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(t){return this._weekdays[t.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(t){return this._weekdaysShort[t.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(t){return this._weekdaysMin[t.day()]},weekdaysParse:function(t){var e,n,s;for(this._weekdaysParse||(this._weekdaysParse=[]),e=0;7>e;e++)if(this._weekdaysParse[e]||(n=H([2e3,1]).day(e),s="^"+this.weekdays(n,"")+"|^"+this.weekdaysShort(n,"")+"|^"+this.weekdaysMin(n,""),this._weekdaysParse[e]=new RegExp(s.replace(".",""),"i")),this._weekdaysParse[e].test(t))return e},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(t){var e=this._longDateFormat[t];return!e&&this._longDateFormat[t.toUpperCase()]&&(e=this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(t){return t.slice(1)}),this._longDateFormat[t]=e),e},isPM:function(t){return"p"===(t+"").toLowerCase()[0]},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(t,e,n){return t>11?n?"pm":"PM":n?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(t,e){var n=this._calendar[t];return"function"==typeof n?n.apply(e):n},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(t,e,n,s){var i=this._relativeTime[n];return"function"==typeof i?i(t,e,n,s):i.replace(/%d/i,t)},pastFuture:function(t,e){var n=this._relativeTime[t>0?"future":"past"];return"function"==typeof n?n(e):n.replace(/%s/i,e)},ordinal:function(t){return this._ordinal.replace("%d",t)},_ordinal:"%d",preparse:function(t){return t},postformat:function(t){return t},week:function(t){return F(t,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6}},H=function(t,e,n){return O({_i:t,_f:e,_l:n,_isUTC:!1})},H.utc=function(t,e,n){return O({_useUTC:!0,_isUTC:!0,_l:n,_i:t,_f:e})},H.unix=function(t){return H(1e3*t)},H.duration=function(t,e){var n,s,i=H.isDuration(t),a="number"==typeof t,o=i?t._input:a?{}:t,u=Z.exec(t);return a?e?o[e]=t:o.milliseconds=t:u&&(n="-"===u[1]?-1:1,o={y:0,d:~~u[2]*n,h:~~u[3]*n,m:~~u[4]*n,s:~~u[5]*n,ms:~~u[6]*n}),s=new r(o),i&&t.hasOwnProperty("_lang")&&(s._lang=t._lang),s},H.version=U,H.defaultFormat=Q,H.updateOffset=function(){},H.lang=function(t,e){return t?(e?l(t,e):x[t]||_(t),H.duration.fn._lang=H.fn._lang=_(t),void 0):H.fn._lang._abbr},H.langData=function(t){return t&&t._lang&&t._lang._abbr&&(t=t._lang._abbr),_(t)},H.isMoment=function(t){return t instanceof i},H.isDuration=function(t){return t instanceof r},H.fn=i.prototype={clone:function(){return H(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){return M(H(this).utc(),"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var t=this;return[t.year(),t.month(),t.date(),t.hours(),t.minutes(),t.seconds(),t.milliseconds()]},isValid:function(){return null==this._isValid&&(this._isValid=this._a?!c(this._a,(this._isUTC?H.utc(this._a):H(this._a)).toArray()):!isNaN(this._d.getTime())),!!this._isValid},utc:function(){return this.zone(0)},local:function(){return this.zone(0),this._isUTC=!1,this},format:function(t){var e=M(this,t||H.defaultFormat);return this.lang().postformat(e)},add:function(t,e){var n;return n="string"==typeof t?H.duration(+e,t):H.duration(t,e),h(this,n,1),this},subtract:function(t,e){var n;return n="string"==typeof t?H.duration(+e,t):H.duration(t,e),h(this,n,-1),this},diff:function(t,e,n){var s,i,r=this._isUTC?H(t).zone(this._offset||0):H(t).local(),a=6e4*(this.zone()-r.zone());return e=f(e),"year"===e||"month"===e?(s=432e5*(this.daysInMonth()+r.daysInMonth()),i=12*(this.year()-r.year())+(this.month()-r.month()),i+=(this-H(this).startOf("month")-(r-H(r).startOf("month")))/s,i-=6e4*(this.zone()-H(this).startOf("month").zone()-(r.zone()-H(r).startOf("month").zone()))/s,"year"===e&&(i/=12)):(s=this-r,i="second"===e?s/1e3:"minute"===e?s/6e4:"hour"===e?s/36e5:"day"===e?(s-a)/864e5:"week"===e?(s-a)/6048e5:s),n?i:o(i)},from:function(t,e){return H.duration(this.diff(t)).lang(this.lang()._abbr).humanize(!e)},fromNow:function(t){return this.from(H(),t)},calendar:function(){var t=this.diff(H().startOf("day"),"days",!0),e=-6>t?"sameElse":-1>t?"lastWeek":0>t?"lastDay":1>t?"sameDay":2>t?"nextDay":7>t?"nextWeek":"sameElse";return this.format(this.lang().calendar(e,this))},isLeapYear:function(){var t=this.year();return 0===t%4&&0!==t%100||0===t%400},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(t){var e=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=t?"string"==typeof t&&(t=this.lang().weekdaysParse(t),"number"!=typeof t)?this:this.add({d:t-e}):e},month:function(t){var e,n=this._isUTC?"UTC":"";return null!=t?"string"==typeof t&&(t=this.lang().monthsParse(t),"number"!=typeof t)?this:(e=this.date(),this.date(1),this._d["set"+n+"Month"](t),this.date(Math.min(e,this.daysInMonth())),H.updateOffset(this),this):this._d["get"+n+"Month"]()},startOf:function(t){switch(t=f(t)){case"year":this.month(0);case"month":this.date(1);case"week":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===t&&this.weekday(0),this},endOf:function(t){return this.startOf(t).add(t,1).subtract("ms",1)},isAfter:function(t,e){return e="undefined"!=typeof e?e:"millisecond",+this.clone().startOf(e)>+H(t).startOf(e)},isBefore:function(t,e){return e="undefined"!=typeof e?e:"millisecond",+this.clone().startOf(e)<+H(t).startOf(e)},isSame:function(t,e){return e="undefined"!=typeof e?e:"millisecond",+this.clone().startOf(e)===+H(t).startOf(e)},min:function(t){return t=H.apply(null,arguments),this>t?this:t},max:function(t){return t=H.apply(null,arguments),t>this?this:t},zone:function(t){var e=this._offset||0;return null==t?this._isUTC?e:this._d.getTimezoneOffset():("string"==typeof t&&(t=p(t)),Math.abs(t)<16&&(t=60*t),this._offset=t,this._isUTC=!0,e!==t&&h(this,H.duration(e-t,"m"),1,!0),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},daysInMonth:function(){return H.utc([this.year(),this.month()+1,0]).date()},dayOfYear:function(t){var e=W((H(this).startOf("day")-H(this).startOf("year"))/864e5)+1;return null==t?e:this.add("d",t-e)},weekYear:function(t){var e=F(this,this.lang()._week.dow,this.lang()._week.doy).year;return null==t?e:this.add("y",t-e)},isoWeekYear:function(t){var e=F(this,1,4).year;return null==t?e:this.add("y",t-e)},week:function(t){var e=this.lang().week(this);return null==t?e:this.add("d",7*(t-e))},isoWeek:function(t){var e=F(this,1,4).week;return null==t?e:this.add("d",7*(t-e))},weekday:function(t){var e=(this._d.getDay()+7-this.lang()._week.dow)%7;return null==t?e:this.add("d",t-e)},isoWeekday:function(t){return null==t?this.day()||7:this.day(this.day()%7?t:t-7)},lang:function(e){return e===t?this._lang:(this._lang=_(e),this)}},P=0;P<ne.length;P++)z(ne[P].toLowerCase().replace(/s$/,""),ne[P]);z("year","FullYear"),H.fn.days=H.fn.day,H.fn.months=H.fn.month,H.fn.weeks=H.fn.week,H.fn.isoWeeks=H.fn.isoWeek,H.fn.toJSON=H.fn.toISOString,H.duration.fn=r.prototype={_bubble:function(){var t,e,n,s,i=this._milliseconds,r=this._days,a=this._months,u=this._data;u.milliseconds=i%1e3,t=o(i/1e3),u.seconds=t%60,e=o(t/60),u.minutes=e%60,n=o(e/60),u.hours=n%24,r+=o(n/24),u.days=r%30,a+=o(r/30),u.months=a%12,s=o(a/12),u.years=s},weeks:function(){return o(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+2592e6*(this._months%12)+31536e6*~~(this._months/12)},humanize:function(t){var e=+this,n=S(e,!t,this.lang());return t&&(n=this.lang().pastFuture(e,n)),this.lang().postformat(n)},add:function(t,e){var n=H.duration(t,e);return this._milliseconds+=n._milliseconds,this._days+=n._days,this._months+=n._months,this._bubble(),this},subtract:function(t,e){var n=H.duration(t,e);return this._milliseconds-=n._milliseconds,this._days-=n._days,this._months-=n._months,this._bubble(),this},get:function(t){return t=f(t),this[t.toLowerCase()+"s"]()},as:function(t){return t=f(t),this["as"+t.charAt(0).toUpperCase()+t.slice(1)+"s"]()},lang:H.fn.lang};for(P in se)se.hasOwnProperty(P)&&(L(P,se[P]),C(P.toLowerCase()));L("Weeks",6048e5),H.duration.fn.asMonths=function(){return(+this-31536e6*this.years())/2592e6+12*this.years()},H.lang("en",{ordinal:function(t){var e=t%10,n=1===~~(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th";return t+n}}),A&&(module.exports=H),"undefined"==typeof ender&&(this.moment=H),"function"==typeof define&&define.amd&&define("moment",[],function(){return H})}.call(this);
/*! Hammer.JS - v1.0.6dev - 2013-11-05
 * http://eightmedia.github.com/hammer.js
 *
 * Copyright (c) 2013 Jorik Tangelder <j.tangelder@gmail.com>;
 * Licensed under the MIT license */

!function(a,b){"use strict";function c(){if(!d.READY){d.event.determineEventTypes();for(var a in d.gestures)d.gestures.hasOwnProperty(a)&&d.detection.register(d.gestures[a]);d.event.onTouch(d.DOCUMENT,d.EVENT_MOVE,d.detection.detect),d.event.onTouch(d.DOCUMENT,d.EVENT_END,d.detection.detect),d.READY=!0}}var d=function(a,b){return new d.Instance(a,b||{})};d.defaults={stop_browser_behavior:{userSelect:"none",touchAction:"none",touchCallout:"none",contentZooming:"none",userDrag:"",tapHighlightColor:"rgba(0,0,0,0)"}},d.HAS_POINTEREVENTS=a.navigator.pointerEnabled||a.navigator.msPointerEnabled,d.HAS_TOUCHEVENTS="ontouchstart"in a,d.MOBILE_REGEX=/mobile|tablet|ip(ad|hone|od)|android|silk/i,d.NO_MOUSEEVENTS=d.HAS_TOUCHEVENTS&&a.navigator.userAgent.match(d.MOBILE_REGEX),d.EVENT_TYPES={},d.DIRECTION_DOWN="down",d.DIRECTION_LEFT="left",d.DIRECTION_UP="up",d.DIRECTION_RIGHT="right",d.POINTER_MOUSE="mouse",d.POINTER_TOUCH="touch",d.POINTER_PEN="pen",d.EVENT_START="start",d.EVENT_MOVE="move",d.EVENT_END="end",d.DOCUMENT=a.document,d.plugins=d.plugins||{},d.gestures=d.gestures||{},d.READY=!1,d.Instance=function(a,b){var e=this;return c(),this.element=a,this.enabled=!0,this.options=d.utils.extend(d.utils.extend({},d.defaults),b||{}),this.options.stop_browser_behavior&&d.utils.stopDefaultBrowserBehavior(this.element,this.options.stop_browser_behavior),d.event.onTouch(a,d.EVENT_START,function(a){e.enabled&&d.detection.startDetect(e,a)}),this},d.Instance.prototype={on:function(a,b){for(var c=a.split(" "),d=0;d<c.length;d++)this.element.addEventListener(c[d],b,!1);return this},off:function(a,b){for(var c=a.split(" "),d=0;d<c.length;d++)this.element.removeEventListener(c[d],b,!1);return this},trigger:function(a,b){b||(b={});var c=d.DOCUMENT.createEvent("Event");c.initEvent(a,!0,!0),c.gesture=b;var e=this.element;return d.utils.hasParent(b.target,e)&&(e=b.target),e.dispatchEvent(c),this},enable:function(a){return this.enabled=a,this}};var e=null,f=!1,g=!1;d.event={bindDom:function(a,b,c){for(var d=b.split(" "),e=0;e<d.length;e++)a.addEventListener(d[e],c,!1)},onTouch:function(a,b,c){var h=this;this.bindDom(a,d.EVENT_TYPES[b],function(i){var j=i.type.toLowerCase();if(!j.match(/mouse/)||!g){j.match(/touch/)||j.match(/pointerdown/)||j.match(/mouse/)&&1===i.which?f=!0:j.match(/mouse/)&&1!==i.which&&(f=!1),j.match(/touch|pointer/)&&(g=!0);var k=0;f&&(d.HAS_POINTEREVENTS&&b!=d.EVENT_END?k=d.PointerEvent.updatePointer(b,i):j.match(/touch/)?k=i.touches.length:g||(k=j.match(/up/)?0:1),k>0&&b==d.EVENT_END?b=d.EVENT_MOVE:k||(b=d.EVENT_END),(k||null===e)&&(e=i),c.call(d.detection,h.collectEventData(a,b,h.getTouchList(e,b),i)),d.HAS_POINTEREVENTS&&b==d.EVENT_END&&(k=d.PointerEvent.updatePointer(b,i))),k||(e=null,f=!1,g=!1,d.PointerEvent.reset())}})},determineEventTypes:function(){var a;a=d.HAS_POINTEREVENTS?d.PointerEvent.getEvents():d.NO_MOUSEEVENTS?["touchstart","touchmove","touchend touchcancel"]:["touchstart mousedown","touchmove mousemove","touchend touchcancel mouseup"],d.EVENT_TYPES[d.EVENT_START]=a[0],d.EVENT_TYPES[d.EVENT_MOVE]=a[1],d.EVENT_TYPES[d.EVENT_END]=a[2]},getTouchList:function(a){return d.HAS_POINTEREVENTS?d.PointerEvent.getTouchList():a.touches?a.touches:(a.indentifier=1,[a])},collectEventData:function(a,b,c,e){var f=d.POINTER_TOUCH;return(e.type.match(/mouse/)||d.PointerEvent.matchType(d.POINTER_MOUSE,e))&&(f=d.POINTER_MOUSE),{center:d.utils.getCenter(c),timeStamp:(new Date).getTime(),target:e.target,touches:c,eventType:b,pointerType:f,srcEvent:e,preventDefault:function(){this.srcEvent.preventManipulation&&this.srcEvent.preventManipulation(),this.srcEvent.preventDefault&&this.srcEvent.preventDefault()},stopPropagation:function(){this.srcEvent.stopPropagation()},stopDetect:function(){return d.detection.stopDetect()}}}},d.PointerEvent={pointers:{},getTouchList:function(){var a=this,b=[];return Object.keys(a.pointers).sort().forEach(function(c){b.push(a.pointers[c])}),b},updatePointer:function(a,b){return a==d.EVENT_END?this.pointers={}:(b.identifier=b.pointerId,this.pointers[b.pointerId]=b),Object.keys(this.pointers).length},matchType:function(a,b){if(!b.pointerType)return!1;var c={};return c[d.POINTER_MOUSE]=b.pointerType==b.MSPOINTER_TYPE_MOUSE||b.pointerType==d.POINTER_MOUSE,c[d.POINTER_TOUCH]=b.pointerType==b.MSPOINTER_TYPE_TOUCH||b.pointerType==d.POINTER_TOUCH,c[d.POINTER_PEN]=b.pointerType==b.MSPOINTER_TYPE_PEN||b.pointerType==d.POINTER_PEN,c[a]},getEvents:function(){return["pointerdown MSPointerDown","pointermove MSPointerMove","pointerup pointercancel MSPointerUp MSPointerCancel"]},reset:function(){this.pointers={}}},d.utils={extend:function(a,c,d){for(var e in c)a[e]!==b&&d||(a[e]=c[e]);return a},hasParent:function(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1},getCenter:function(a){for(var b,c=[],d=[],e=0,f=a.length;f>e;e++)b=a[e],c.push("undefined"!=typeof b.clientX?b.clientX:b.pageX),d.push("undefined"!=typeof b.clientY?b.clientY:b.pageY);return{pageX:(Math.min.apply(Math,c)+Math.max.apply(Math,c))/2,pageY:(Math.min.apply(Math,d)+Math.max.apply(Math,d))/2}},getVelocity:function(a,b,c){return{x:Math.abs(b/a)||0,y:Math.abs(c/a)||0}},getAngle:function(a,b){var c=b.pageY-a.pageY,d=b.pageX-a.pageX;return 180*Math.atan2(c,d)/Math.PI},getDirection:function(a,b){var c=Math.abs(a.pageX-b.pageX),e=Math.abs(a.pageY-b.pageY);return c>=e?a.pageX-b.pageX>0?d.DIRECTION_LEFT:d.DIRECTION_RIGHT:a.pageY-b.pageY>0?d.DIRECTION_UP:d.DIRECTION_DOWN},getDistance:function(a,b){var c=b.pageX-a.pageX,d=b.pageY-a.pageY;return Math.sqrt(c*c+d*d)},getScale:function(a,b){return a.length>=2&&b.length>=2?this.getDistance(b[0],b[1])/this.getDistance(a[0],a[1]):1},getRotation:function(a,b){return a.length>=2&&b.length>=2?this.getAngle(b[1],b[0])-this.getAngle(a[1],a[0]):0},isVertical:function(a){return a==d.DIRECTION_UP||a==d.DIRECTION_DOWN},stopDefaultBrowserBehavior:function(a,b){var c,d=["webkit","khtml","moz","Moz","ms","o",""];if(b&&a.style){for(var e=0;e<d.length;e++)for(var f in b)b.hasOwnProperty(f)&&(c=f,d[e]&&(c=d[e]+c.substring(0,1).toUpperCase()+c.substring(1)),a.style[c]=b[f]);"none"==b.userSelect&&(a.onselectstart=function(){return!1}),"none"==b.userDrag&&(a.ondragstart=function(){return!1})}}},d.detection={gestures:[],current:null,previous:null,stopped:!1,startDetect:function(a,b){this.current||(this.stopped=!1,this.current={inst:a,startEvent:d.utils.extend({},b),lastEvent:!1,name:""},this.detect(b))},detect:function(a){if(this.current&&!this.stopped){a=this.extendEventData(a);for(var b=this.current.inst.options,c=0,e=this.gestures.length;e>c;c++){var f=this.gestures[c];if(!this.stopped&&b[f.name]!==!1&&f.handler.call(f,a,this.current.inst)===!1){this.stopDetect();break}}return this.current&&(this.current.lastEvent=a),a.eventType==d.EVENT_END&&!a.touches.length-1&&this.stopDetect(),a}},stopDetect:function(){this.previous=d.utils.extend({},this.current),this.current=null,this.stopped=!0},extendEventData:function(a){var b=this.current.startEvent;if(b&&(a.touches.length!=b.touches.length||a.touches===b.touches)){b.touches=[];for(var c=0,e=a.touches.length;e>c;c++)b.touches.push(d.utils.extend({},a.touches[c]))}var f,g,h=a.timeStamp-b.timeStamp,i=a.center.pageX-b.center.pageX,j=a.center.pageY-b.center.pageY,k=d.utils.getVelocity(h,i,j);return"end"===a.eventType?(f=this.current.lastEvent&&this.current.lastEvent.interimAngle,g=this.current.lastEvent&&this.current.lastEvent.interimDirection):(f=this.current.lastEvent&&d.utils.getAngle(this.current.lastEvent.center,a.center),g=this.current.lastEvent&&d.utils.getDirection(this.current.lastEvent.center,a.center)),d.utils.extend(a,{deltaTime:h,deltaX:i,deltaY:j,velocityX:k.x,velocityY:k.y,distance:d.utils.getDistance(b.center,a.center),angle:d.utils.getAngle(b.center,a.center),interimAngle:f,direction:d.utils.getDirection(b.center,a.center),interimDirection:g,scale:d.utils.getScale(b.touches,a.touches),rotation:d.utils.getRotation(b.touches,a.touches),startEvent:b}),a},register:function(a){var c=a.defaults||{};return c[a.name]===b&&(c[a.name]=!0),d.utils.extend(d.defaults,c,!0),a.index=a.index||1e3,this.gestures.push(a),this.gestures.sort(function(a,b){return a.index<b.index?-1:a.index>b.index?1:0}),this.gestures}},d.gestures.Drag={name:"drag",index:50,defaults:{drag_min_distance:10,correct_for_drag_min_distance:!0,drag_max_touches:1,drag_block_horizontal:!1,drag_block_vertical:!1,drag_lock_to_axis:!1,drag_lock_min_distance:25},triggered:!1,handler:function(a,b){if(d.detection.current.name!=this.name&&this.triggered)return b.trigger(this.name+"end",a),this.triggered=!1,void 0;if(!(b.options.drag_max_touches>0&&a.touches.length>b.options.drag_max_touches))switch(a.eventType){case d.EVENT_START:this.triggered=!1;break;case d.EVENT_MOVE:if(a.distance<b.options.drag_min_distance&&d.detection.current.name!=this.name)return;if(d.detection.current.name!=this.name&&(d.detection.current.name=this.name,b.options.correct_for_drag_min_distance&&a.distance>0)){var c=Math.abs(b.options.drag_min_distance/a.distance);d.detection.current.startEvent.center.pageX+=a.deltaX*c,d.detection.current.startEvent.center.pageY+=a.deltaY*c,a=d.detection.extendEventData(a)}(d.detection.current.lastEvent.drag_locked_to_axis||b.options.drag_lock_to_axis&&b.options.drag_lock_min_distance<=a.distance)&&(a.drag_locked_to_axis=!0);var e=d.detection.current.lastEvent.direction;a.drag_locked_to_axis&&e!==a.direction&&(a.direction=d.utils.isVertical(e)?a.deltaY<0?d.DIRECTION_UP:d.DIRECTION_DOWN:a.deltaX<0?d.DIRECTION_LEFT:d.DIRECTION_RIGHT),this.triggered||(b.trigger(this.name+"start",a),this.triggered=!0),b.trigger(this.name,a),b.trigger(this.name+a.direction,a),(b.options.drag_block_vertical&&d.utils.isVertical(a.direction)||b.options.drag_block_horizontal&&!d.utils.isVertical(a.direction))&&a.preventDefault();break;case d.EVENT_END:this.triggered&&b.trigger(this.name+"end",a),this.triggered=!1}}},d.gestures.Hold={name:"hold",index:10,defaults:{hold_timeout:500,hold_threshold:1},timer:null,handler:function(a,b){switch(a.eventType){case d.EVENT_START:clearTimeout(this.timer),d.detection.current.name=this.name,this.timer=setTimeout(function(){"hold"==d.detection.current.name&&b.trigger("hold",a)},b.options.hold_timeout);break;case d.EVENT_MOVE:a.distance>b.options.hold_threshold&&clearTimeout(this.timer);break;case d.EVENT_END:clearTimeout(this.timer)}}},d.gestures.Release={name:"release",index:1/0,handler:function(a,b){a.eventType==d.EVENT_END&&b.trigger(this.name,a)}},d.gestures.Swipe={name:"swipe",index:40,defaults:{swipe_min_touches:1,swipe_max_touches:1,swipe_velocity:.7},handler:function(a,b){if(a.eventType==d.EVENT_END){if(b.options.swipe_max_touches>0&&a.touches.length<b.options.swipe_min_touches&&a.touches.length>b.options.swipe_max_touches)return;(a.velocityX>b.options.swipe_velocity||a.velocityY>b.options.swipe_velocity)&&(b.trigger(this.name,a),b.trigger(this.name+a.direction,a))}}},d.gestures.Tap={name:"tap",index:100,defaults:{tap_max_touchtime:250,tap_max_distance:10,tap_always:!0,doubletap_distance:20,doubletap_interval:300},handler:function(a,b){if(a.eventType==d.EVENT_END&&"touchcancel"!=a.srcEvent.type){var c=d.detection.previous,e=!1;if(a.deltaTime>b.options.tap_max_touchtime||a.distance>b.options.tap_max_distance)return;c&&"tap"==c.name&&a.timeStamp-c.lastEvent.timeStamp<b.options.doubletap_interval&&a.distance<b.options.doubletap_distance&&(b.trigger("doubletap",a),e=!0),(!e||b.options.tap_always)&&(d.detection.current.name="tap",b.trigger(d.detection.current.name,a))}}},d.gestures.Touch={name:"touch",index:-1/0,defaults:{prevent_default:!1,prevent_mouseevents:!1},handler:function(a,b){return b.options.prevent_mouseevents&&a.pointerType==d.POINTER_MOUSE?(a.stopDetect(),void 0):(b.options.prevent_default&&a.preventDefault(),a.eventType==d.EVENT_START&&b.trigger(this.name,a),void 0)}},d.gestures.Transform={name:"transform",index:45,defaults:{transform_min_scale:.01,transform_min_rotation:1,transform_always_block:!1},triggered:!1,handler:function(a,b){if(d.detection.current.name!=this.name&&this.triggered)return b.trigger(this.name+"end",a),this.triggered=!1,void 0;if(!(a.touches.length<2))switch(b.options.transform_always_block&&a.preventDefault(),a.eventType){case d.EVENT_START:this.triggered=!1;break;case d.EVENT_MOVE:var c=Math.abs(1-a.scale),e=Math.abs(a.rotation);if(c<b.options.transform_min_scale&&e<b.options.transform_min_rotation)return;d.detection.current.name=this.name,this.triggered||(b.trigger(this.name+"start",a),this.triggered=!0),b.trigger(this.name,a),e>b.options.transform_min_rotation&&b.trigger("rotate",a),c>b.options.transform_min_scale&&(b.trigger("pinch",a),b.trigger("pinch"+(a.scale<1?"in":"out"),a));break;case d.EVENT_END:this.triggered&&b.trigger(this.name+"end",a),this.triggered=!1}}},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return d}):"object"==typeof module&&"object"==typeof module.exports?module.exports=d:a.Hammer=d}(this);
/*
 * Project: Twitter Bootstrap Hover Dropdown
 * Author: Cameron Spear
 * Contributors: Mattia Larentis
 *
 * Dependencies: Bootstrap's Dropdown plugin, jQuery
 *
 * A simple plugin to enable Bootstrap dropdowns to active on hover and provide a nice user experience.
 *
 * License: MIT
 *
 * http://cameronspear.com/blog/twitter-bootstrap-dropdown-on-hover-plugin/
 */(function(e,t,n){if("ontouchstart"in document)return;var r=e();e.fn.dropdownHover=function(n){r=r.add(this.parent());return this.each(function(){var i=e(this),s=i.parent(),o={delay:100,instantlyCloseOthers:!0},u={delay:e(this).data("delay"),instantlyCloseOthers:e(this).data("close-others")},a=e.extend(!0,{},o,n,u),f;s.hover(function(n){if(!s.hasClass("open")&&!i.is(n.target))return!0;a.instantlyCloseOthers===!0&&r.removeClass("open");t.clearTimeout(f);s.addClass("open");s.trigger(e.Event("show.bs.dropdown"))},function(){f=t.setTimeout(function(){s.removeClass("open");s.trigger("hide.bs.dropdown")},a.delay)});i.hover(function(){a.instantlyCloseOthers===!0&&r.removeClass("open");t.clearTimeout(f);s.addClass("open");s.trigger(e.Event("show.bs.dropdown"))});s.find(".dropdown-submenu").each(function(){var n=e(this),r;n.hover(function(){t.clearTimeout(r);n.children(".dropdown-menu").show();n.siblings().children(".dropdown-menu").hide()},function(){var e=n.children(".dropdown-menu");r=t.setTimeout(function(){e.hide()},a.delay)})})})};e(document).ready(function(){e('[data-hover="dropdown"]').dropdownHover()})})(jQuery,this);
/*!
 * bootstrap-progressbar v0.6.0 by @minddust
 * Copyright (c) 2012-2013 Stephan Gross
 *
 * https://www.minddust.com/bootstrap-progressbar
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
!function(t){"use strict";var e=function(n,s){this.$element=t(n),this.options=t.extend({},e.defaults,s)};e.defaults={transition_delay:300,refresh_speed:50,display_text:"none",use_percentage:!0,percent_format:function(t){return t+"%"},amount_format:function(t,e){return t+" / "+e},update:t.noop,done:t.noop,fail:t.noop},e.prototype.transition=function(){var n=this.$element,s=n.parent(),a=t('<div class="progress-tooltip"/>'),i=this.$back_text,r=this.$front_text,o=this.options,h=n.attr("aria-valuetransitiongoal"),p=n.attr("aria-valuemin")||0,f=n.attr("aria-valuemax")||100,c=s.hasClass("vertical"),d=o.update&&"function"==typeof o.update?o.update:e.defaults.update,u=o.done&&"function"==typeof o.done?o.done:e.defaults.done,l=o.fail&&"function"==typeof o.fail?o.fail:e.defaults.fail;if(!h)return l("aria-valuetransitiongoal not set"),void 0;var g=Math.round(100*(h-p)/(f-p));if("center"===o.display_text&&!i&&!r){this.$back_text=i=t("<span>",{"class":"progressbar-back-text"}).prependTo(s),this.$front_text=r=t("<span>",{"class":"progressbar-front-text"}).prependTo(n);var _;c?(_=s.css("height"),i.css({height:_,"line-height":_}),r.css({height:_,"line-height":_}),t(window).resize(function(){_=s.css("height"),i.css({height:_,"line-height":_}),r.css({height:_,"line-height":_})})):(_=s.css("width"),r.css({width:_}),t(window).resize(function(){_=s.css("width"),r.css({width:_})}))}setTimeout(function(){var t,e,l,_,v;c?n.css("height",g+"%"):n.css("width",g+"%");var x=setInterval(function(){c?(l=n.height(),_=s.height()):(l=n.width(),_=s.width()),t=Math.round(100*l/_),e=Math.round(l/_*(f-p)),t>=g&&(t=g,e=h,u(),clearInterval(x)),"none"!==o.display_text&&(v=o.use_percentage?o.percent_format(t):o.amount_format(e,f),"fill"===o.display_text?n.text(v):"tooltip"===o.display_text?(a.prependTo(n),a.text(v)):"center"===o.display_text&&(i.text(v),r.text(v))),n.attr("aria-valuenow",e),d(t)},o.refresh_speed)},o.transition_delay)};var n=t.fn.progressbar;t.fn.progressbar=function(n){return this.each(function(){var s=t(this),a=s.data("bs.progressbar"),i="object"==typeof n&&n;a||s.data("bs.progressbar",a=new e(this,i)),a.transition()})},t.fn.progressbar.Constructor=e,t.fn.progressbar.noConflict=function(){return t.fn.progressbar=n,this}}(window.jQuery);
/* ===========================================================
 * bootstrap-modalmanager.js v2.2.0
 * ===========================================================
 * Copyright 2012 Jordan Schroter.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

!function(e){"use strict";function t(e){return function(t){return this===t.target?e.apply(this,arguments):void 0}}var n=function(e,t){this.init(e,t)};n.prototype={constructor:n,init:function(t,n){if(this.$element=e(t),this.options=e.extend({},e.fn.modalmanager.defaults,this.$element.data(),"object"==typeof n&&n),this.stack=[],this.backdropCount=0,this.options.resize){var o,a=this;e(window).on("resize.modal",function(){o&&clearTimeout(o),o=setTimeout(function(){for(var e=0;e<a.stack.length;e++)a.stack[e].isShown&&a.stack[e].layout()},10)})}},createModal:function(t,n){e(t).modal(e.extend({manager:this},n))},appendModal:function(n){this.stack.push(n);var o=this;n.$element.on("show.modalmanager",t(function(){var t=function(){n.isShown=!0;var t=e.support.transition&&n.$element.hasClass("fade");o.$element.toggleClass("modal-open",o.hasOpenModal()).toggleClass("page-overflow",e(window).height()<o.$element.height()),n.$parent=n.$element.parent(),n.$container=o.createContainer(n),n.$element.appendTo(n.$container),o.backdrop(n,function(){n.$element.show(),t&&n.$element[0].offsetWidth,n.layout(),n.$element.addClass("in").attr("aria-hidden",!1);var a=function(){o.setFocus(),n.$element.trigger("shown")};t?n.$element.one(e.support.transition.end,a):a()})};n.options.replace?o.replace(t):t()})),n.$element.on("hidden.modalmanager",t(function(){if(o.backdrop(n),n.$backdrop){var t=e.support.transition&&n.$element.hasClass("fade");t&&n.$element[0].offsetWidth,e.support.transition&&n.$element.hasClass("fade")?n.$backdrop.one(e.support.transition.end,function(){o.destroyModal(n)}):o.destroyModal(n)}else o.destroyModal(n)})),n.$element.on("destroy.modalmanager",t(function(){o.removeModal(n)}))},destroyModal:function(e){e.destroy();var t=this.hasOpenModal();this.$element.toggleClass("modal-open",t),t||this.$element.removeClass("page-overflow"),this.removeContainer(e),this.setFocus()},getOpenModals:function(){for(var e=[],t=0;t<this.stack.length;t++)this.stack[t].isShown&&e.push(this.stack[t]);return e},hasOpenModal:function(){return this.getOpenModals().length>0},setFocus:function(){for(var e,t=0;t<this.stack.length;t++)this.stack[t].isShown&&(e=this.stack[t]);e&&e.focus()},removeModal:function(e){e.$element.off(".modalmanager"),e.$backdrop&&this.removeBackdrop(e),this.stack.splice(this.getIndexOfModal(e),1)},getModalAt:function(e){return this.stack[e]},getIndexOfModal:function(e){for(var t=0;t<this.stack.length;t++)if(e===this.stack[t])return t},replace:function(n){for(var o,a=0;a<this.stack.length;a++)this.stack[a].isShown&&(o=this.stack[a]);o?(this.$backdropHandle=o.$backdrop,o.$backdrop=null,n&&o.$element.one("hidden",t(e.proxy(n,this))),o.hide()):n&&n()},removeBackdrop:function(e){e.$backdrop.remove(),e.$backdrop=null},createBackdrop:function(t,n){var o;return this.$backdropHandle?(o=this.$backdropHandle,o.off(".modalmanager"),this.$backdropHandle=null,this.isLoading&&this.removeSpinner()):o=e(n).addClass(t).appendTo(this.$element),o},removeContainer:function(e){e.$container.remove(),e.$container=null},createContainer:function(n){var a;return a=e('<div class="modal-scrollable">').css("z-index",o("modal",this.getOpenModals().length)).appendTo(this.$element),n&&"static"!=n.options.backdrop?a.on("click.modal",t(function(){n.hide()})):n&&a.on("click.modal",t(function(){n.attention()})),a},backdrop:function(t,n){var a=t.$element.hasClass("fade")?"fade":"",s=t.options.backdrop&&this.backdropCount<this.options.backdropLimit;if(t.isShown&&s){var i=e.support.transition&&a&&!this.$backdropHandle;t.$backdrop=this.createBackdrop(a,t.options.backdropTemplate),t.$backdrop.css("z-index",o("backdrop",this.getOpenModals().length)),i&&t.$backdrop[0].offsetWidth,t.$backdrop.addClass("in"),this.backdropCount+=1,i?t.$backdrop.one(e.support.transition.end,n):n()}else if(!t.isShown&&t.$backdrop){t.$backdrop.removeClass("in"),this.backdropCount-=1;var r=this;e.support.transition&&t.$element.hasClass("fade")?t.$backdrop.one(e.support.transition.end,function(){r.removeBackdrop(t)}):r.removeBackdrop(t)}else n&&n()},removeSpinner:function(){this.$spinner&&this.$spinner.remove(),this.$spinner=null,this.isLoading=!1},removeLoading:function(){this.$backdropHandle&&this.$backdropHandle.remove(),this.$backdropHandle=null,this.removeSpinner()},loading:function(t){if(t=t||function(){},this.$element.toggleClass("modal-open",!this.isLoading||this.hasOpenModal()).toggleClass("page-overflow",e(window).height()<this.$element.height()),this.isLoading)if(this.isLoading&&this.$backdropHandle){this.$backdropHandle.removeClass("in");var n=this;e.support.transition?this.$backdropHandle.one(e.support.transition.end,function(){n.removeLoading()}):n.removeLoading()}else t&&t(this.isLoading);else{this.$backdropHandle=this.createBackdrop("fade",this.options.backdropTemplate),this.$backdropHandle[0].offsetWidth;var a=this.getOpenModals();this.$backdropHandle.css("z-index",o("backdrop",a.length+1)).addClass("in");var s=e(this.options.spinner).css("z-index",o("modal",a.length+1)).appendTo(this.$element).addClass("in");this.$spinner=e(this.createContainer()).append(s).on("click.modalmanager",e.proxy(this.loading,this)),this.isLoading=!0,e.support.transition?this.$backdropHandle.one(e.support.transition.end,t):t()}}};var o=function(){var t,n={};return function(o,a){if("undefined"==typeof t){var s=e('<div class="modal hide" />').appendTo("body"),i=e('<div class="modal-backdrop hide" />').appendTo("body");n.modal=+s.css("z-index"),n.backdrop=+i.css("z-index"),t=n.modal-n.backdrop,s.remove(),i.remove(),i=s=null}return n[o]+t*a}}();e.fn.modalmanager=function(t,o){return this.each(function(){var a=e(this),s=a.data("modalmanager");s||a.data("modalmanager",s=new n(this,t)),"string"==typeof t&&s[t].apply(s,[].concat(o))})},e.fn.modalmanager.defaults={backdropLimit:999,resize:!0,spinner:'<div class="loading-spinner fade" style="width: 200px; margin-left: -100px;"><div class="progress progress-striped active"><div class="progress-bar progress-bar-theme" role="progressbar" aria-valuenow="100" style="width: 100%"></div></div><div class="txtLoad">Loading...</div></div>',backdropTemplate:'<div class="modal-backdrop " />'},e.fn.modalmanager.Constructor=n}(jQuery);


/* ===========================================================
 * bootstrap-modal.js v2.2.0
 * ===========================================================
 * Copyright 2012 Jordan Schroter
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function(t){"use strict";var i=function(t,i){this.init(t,i)};i.prototype={constructor:i,init:function(i,e){var n=this;this.options=e,this.$element=t(i).delegate('[data-dismiss="modal"]',"click.dismiss.modal",t.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote,function(){var i=t.Event("loaded");n.$element.trigger(i)});var s="function"==typeof this.options.manager?this.options.manager.call(this):this.options.manager;s=s.appendModal?s:t(s).modalmanager().data("modalmanager"),s.appendModal(this)},toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var i=t.Event("show");this.isShown||(this.$element.trigger(i),i.isDefaultPrevented()||(this.escape(),this.tab(),this.options.loading&&this.loading()))},hide:function(i){return i&&i.preventDefault(),i=t.Event("hide"),this.$element.trigger(i),!this.isShown||i.isDefaultPrevented()?this.isShown=!1:(this.isShown=!1,this.escape(),this.tab(),this.isLoading&&this.loading(),t(document).off("focusin.modal"),this.$element.removeClass("in").removeClass("animated").removeClass(this.options.attentionAnimation).removeClass("modal-overflow").attr("aria-hidden",!0),t.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal(),void 0)},layout:function(){var i=this.options.height?"height":"max-height",e=this.options.height||this.options.maxHeight;if(this.options.width){this.$element.css("width",this.options.width);var n=this;this.$element.css("margin-left",function(){return/%/gi.test(n.options.width)?-(parseInt(n.options.width)/2)+"%":-(t(this).width()/2)+"px"})}else this.$element.css("width",""),this.$element.css("margin-left","");this.$element.find(".modal-body").css("overflow","").css(i,""),e&&this.$element.find(".modal-body").css("overflow","auto").css(i,e);var s=t(window).height()-10<this.$element.height();s||this.options.modalOverflow?this.$element.css("margin-top",0).addClass("modal-overflow"):this.$element.css("margin-top",0-this.$element.height()/2).removeClass("modal-overflow")},tab:function(){var i=this;this.isShown&&this.options.consumeTab?this.$element.on("keydown.tabindex.modal","[data-tabindex]",function(e){if(e.keyCode&&9==e.keyCode){var n=t(this),s=t(this);i.$element.find("[data-tabindex]:enabled:not([readonly])").each(function(i){n=i.shiftKey?n.data("tabindex")>t(this).data("tabindex")?n=t(this):s=t(this):n.data("tabindex")<t(this).data("tabindex")?n=t(this):s=t(this)}),n[0]!==t(this)[0]?n.focus():s.focus(),e.preventDefault()}}):this.isShown||this.$element.off("keydown.tabindex.modal")},escape:function(){var t=this;this.isShown&&this.options.keyboard?(this.$element.attr("tabindex")||this.$element.attr("tabindex",-1),this.$element.on("keyup.dismiss.modal",function(i){27==i.which&&t.hide()})):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var i=this,e=setTimeout(function(){i.$element.off(t.support.transition.end),i.hideModal()},500);this.$element.one(t.support.transition.end,function(){clearTimeout(e),i.hideModal()})},hideModal:function(){var t=this.options.height?"height":"max-height",i=this.options.height||this.options.maxHeight;i&&this.$element.find(".modal-body").css("overflow","").css(t,""),this.$element.hide().trigger("hidden")},removeLoading:function(){this.$loading.remove(),this.$loading=null,this.isLoading=!1},loading:function(i){i=i||function(){};var e=this.$element.hasClass("fade")?"fade":"";if(this.isLoading)if(this.isLoading&&this.$loading){this.$loading.removeClass("in");var n=this;t.support.transition&&this.$element.hasClass("fade")?this.$loading.one(t.support.transition.end,function(){n.removeLoading()}):n.removeLoading()}else i&&i(this.isLoading);else{var s=t.support.transition&&e;this.$loading=t('<div class="loading-mask '+e+'">').append(this.options.spinner).appendTo(this.$element),s&&this.$loading[0].offsetWidth,this.$loading.addClass("in"),this.isLoading=!0,s?this.$loading.one(t.support.transition.end,i):i()}},focus:function(){var t=this.$element.find(this.options.focusOn);t=t.length?t:this.$element,t.focus()},attention:function(){if(this.options.attentionAnimation){this.$element.removeClass("animated").removeClass(this.options.attentionAnimation);var t=this;setTimeout(function(){t.$element.addClass("animated").addClass(t.options.attentionAnimation)},0)}this.focus()},destroy:function(){var i=t.Event("destroy");this.$element.trigger(i),i.isDefaultPrevented()||this.teardown()},teardown:function(){return this.$parent.length?(this.$parent!==this.$element.parent()&&this.$element.appendTo(this.$parent),this.$element.off(".modal"),this.$element.removeData("modal"),this.$element.removeClass("in").attr("aria-hidden",!0),void 0):(this.$element.remove(),this.$element=null,void 0)}},t.fn.modal=function(e,n){return this.each(function(){var s=t(this),o=s.data("modal"),a=t.extend({},t.fn.modal.defaults,s.data(),"object"==typeof e&&e);o||s.data("modal",o=new i(this,a)),"string"==typeof e?o[e].apply(o,[].concat(n)):a.show&&o.show()})},t.fn.modal.defaults={keyboard:!0,backdrop:!0,loading:!1,show:!0,width:null,height:null,maxHeight:null,modalOverflow:!1,consumeTab:!0,focusOn:null,replace:!1,resize:!1,attentionAnimation:"shake",manager:"body",spinner:'<div class="loading-spinner" style="width: 200px; margin-left: -100px;"><div class="progress progress-striped active"><div class="bar" style="width: 100%;"></div></div></div>',backdropTemplate:'<div class="modal-backdrop" />'},t.fn.modal.Constructor=i,t(function(){t(document).off("click.modal").on("click.modal.data-api",'[data-toggle="modal"]',function(i){var e=t(this),n=e.attr("href"),s=t(e.attr("data-target")||n&&n.replace(/.*(?=#[^\s]+$)/,"")),o=s.data("modal")?"toggle":t.extend({remote:!/#/.test(n)&&n},s.data(),e.data());i.preventDefault(),s.modal(o).one("hide",function(){e.focus()})})})}(window.jQuery);



/* =========================================================
 * bootstrap-tabdrop.js 
 * http://www.eyecon.ro/bootstrap-tabdrop
 * =========================================================
 * Copyright 2012 Stefan Petre
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */
 
!function(t){var n=function(){var n,e=[],o=!1,d=function(){clearTimeout(n),n=setTimeout(i,100)},i=function(){for(var t=0,n=e.length;n>t;t++)e[t].apply()};return{register:function(n){e.push(n),o===!1&&(t(window).bind("resize",d),o=!0)},unregister:function(t){for(var n=0,o=e.length;o>n;n++)if(e[n]==t){delete e[n];break}}}}(),e=function(e,o){this.element=t(e),this.padding=parseInt(this.element.css("padding-top")),this.dropdown=t('<li class="dropdown hide pull-right tabdrop"><a class="dropdown-toggle" data-toggle="dropdown" href="#">'+o.text+' <span class="badge"></span></a><ul class="dropdown-menu"></ul></li>').prependTo(this.element),this.element.parent().is(".tabs-below")&&this.dropdown.addClass("dropup"),n.register(t.proxy(this.layout,this)),this.layout()};e.prototype={constructor:e,layout:function(){var n=[],e=this.padding;this.dropdown.removeClass("hide"),this.element.append(this.dropdown.find("li")).find(">li").not(".tabdrop").each(function(){this.offsetTop>e&&n.push(this)}),n.length>0?(n=t(n),this.dropdown.find("ul").empty().append(n),console.log(n.length),this.dropdown.find(".badge").text(n.length),1==this.dropdown.find(".active").length?this.dropdown.addClass("active"):this.dropdown.removeClass("active")):this.dropdown.addClass("hide")}},t.fn.tabdrop=function(n){return this.each(function(){var o=t(this),d=o.data("tabdrop"),i="object"==typeof n&&n;d||o.data("tabdrop",d=new e(this,t.extend({},t.fn.tabdrop.defaults,i))),"string"==typeof n&&d[n]()})},t.fn.tabdrop.defaults={text:'<i class="fa fa-align-right"></i>'},t.fn.tabdrop.Constructor=e}(window.jQuery);


/*
 jQuery paging plugin v1.8 06/21/2010
 http://www.xarg.org/project/jquery-color-plugin-xcolor/

 Copyright (c) 2010, Robert Eisele (robert@xarg.org)
 Dual licensed under the MIT or GPL Version 2 licenses.
*/
(function(i,k){function e(a){function d(a,b){var d;k!==a&&(a=parseFloat(a));if(k===b)d=b=255;else if(1===b){if(k===a||1===a)return 1;b=100;d=1}else d=b;return isNaN(a)||a<=0?0:b<a?d:a<1||1===b?1===d?a:a*d|0:a*d/b}function b(a,b,c){function e(a,b,d){d=++d%1;return 6*d<1?a+(b-a)*6*d:2*d<1?b:3*d<2?a+(b-a)*(4-6*d):a}a=d(a,360)/360;b=d(b,1);c=d(c,1);if(0===b)return c=Math.round(255*c),[c,c,c];b=c<0.5?c+c*b:c+b-c*b;c=c+c-b;return[Math.round(255*e(c,b,a+1/3)),Math.round(255*e(c,b,a)),Math.round(255*e(c,
b,a-1/3))]}function c(a,b,c){var a=d(a,360)/60,b=d(b,1),c=d(c,1),e=a|0,m=a-e,a=Math.round(255*c*(1-b)),j=Math.round(255*c*(1-b*m)),b=Math.round(255*c*(1-b*(1-m))),c=Math.round(255*c);switch(e){case 1:return[j,c,a];case 2:return[a,c,b];case 3:return[a,j,c];case 4:return[b,a,c];case 5:return[c,a,j]}return[c,b,a]}this.setColor=function(a){this.c=true;if("number"===typeof a)this.a=(a>>24&255)/255,this.r=a>>16&255,this.g=a>>8&255,this.b=a&255;else{for(;"object"===typeof a;){if(0 in a&&1 in a&&2 in a){this.a=
d(a[3],1);this.r=d(a[0]);this.g=d(a[1]);this.b=d(a[2]);return}else if("r"in a&&"g"in a&&"b"in a){this.a=d(a.a,1);this.r=d(a.r);this.g=d(a.g);this.b=d(a.b);return}else if("h"in a&&"s"in a){var f;if("l"in a)f=b(a.h,a.s,a.l);else if("v"in a)f=c(a.h,a.s,a.v);else if("b"in a)f=c(a.h,a.s,a.b);else break;this.a=d(a.a,1);this.r=f[0];this.g=f[1];this.b=f[2];return}break}if("string"===typeof a){a=a.toLowerCase().replace(/[^a-z0-9,.()#%]/g,"");if("transparent"===a){this.a=this.r=this.g=this.b=0;return}if("rand"===
a){a=Math.random()*16777215|0;this.a=1;this.r=a>>16&255;this.g=a>>8&255;this.b=a&255;return}k!==o[a]&&(a="#"+o[a]);if(f=/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/.exec(a)){this.a=1;this.r=parseInt(f[1],16);this.g=parseInt(f[2],16);this.b=parseInt(f[3],16);return}if(f=/^#?([0-9a-f])([0-9a-f])([0-9a-f])$/.exec(a)){this.a=1;this.r=parseInt(f[1]+f[1],16);this.g=parseInt(f[2]+f[2],16);this.b=parseInt(f[3]+f[3],16);return}if(f=/^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3})(,([0-9.]+))?\)$/.exec(a)){this.a=d(f[5],
1);this.r=d(f[1]);this.g=d(f[2]);this.b=d(f[3]);return}if(f=/^rgba?\(([0-9.]+\%),([0-9.]+\%),([0-9.]+\%)(,([0-9.]+)\%?)?\)$/.exec(a)){this.a=d(f[5],1);this.r=Math.round(2.55*d(f[1],100));this.g=Math.round(2.55*d(f[2],100));this.b=Math.round(2.55*d(f[3],100));return}if(f=/^hs([bvl])a?\((\d{1,3}),(\d{1,3}),(\d{1,3})(,([0-9.]+))?\)$/.exec(a)){a=("l"===f[1]?b:c)(parseInt(f[2],10),parseInt(f[3],10),parseInt(f[4],10));this.a=d(f[6],1);this.r=a[0];this.g=a[1];this.b=a[2];return}if(f=/^(\d{1,3}),(\d{1,3}),(\d{1,3})(,([0-9.]+))?$/.exec(a)){this.a=
d(f[5],1);this.r=d(f[1]);this.g=d(f[2]);this.b=d(f[3]);return}}this.c=false}};this.getColor=function(a){if(k!==a)switch(a.toLowerCase()){case "rgb":return this.getRGB();case "hsv":case "hsb":return this.getHSV();case "hsl":return this.getHSL();case "int":return this.getInt();case "array":return this.getArray();case "fraction":return this.getFraction();case "css":case "style":return this.getCSS();case "name":return this.getName()}return this.getHex()};this.getRGB=function(){return this.c?{r:this.r,
g:this.g,b:this.b,a:this.a}:null};this.getCSS=function(){return this.c?0===this.a?"transparent":1===this.a?"rgb("+this.r+","+this.g+","+this.b+")":p(this.r,this.g,this.b,this.a):null};this.getArray=function(){return this.c?[this.r,this.g,this.b,100*this.a|0]:null};this.getName=function(){if(this.c){var a=null,b,d=o,c=this.getHSL(),m;for(m in d){var j=(new e(d[m])).getHSL(),j=Math.sqrt(0.5*(c.h-j.h)*(c.h-j.h)+0.5*(c.s-j.s)*(c.s-j.s)+(c.l-j.l)*(c.l-j.l));if(null===a||j<a)a=j,b=m}return b}return null};this.getFraction=
function(){return this.c?{r:this.r/255,g:this.g/255,b:this.b/255,a:this.a}:null};this.getHSL=function(){if(this.c){var a=this.r/255,b=this.g/255,d=this.b/255,c=Math.min(a,b,d),e=Math.max(a,b,d),j=e-c,i=(e+c)/2;0===j?c=a=0:(a=a===e?(b-d)/j:b===e?2+(d-a)/j:4+(a-b)/j,c=j/(i<0.5?e+c:2-e-c));return{h:Math.round(60*((6+a)%6)),s:Math.round(100*c),l:Math.round(100*i),a:this.a}}return null};this.getHSV=function(){if(this.c){var a=this.r/255,b=this.g/255,d=this.b/255,c=Math.min(a,b,d),e=Math.max(a,b,d),c=e-c;return{h:Math.round(60*
((6+(0===c?0:a===e?(b-d)/c:b===e?2+(d-a)/c:4+(a-b)/c))%6)),s:Math.round(100*(0===e?0:c/e)),v:Math.round(100*e),a:this.a}}return null};this.getHex=function(){if(this.c){var a=this.r>>4,b=this.g>>4,c=this.b>>4,d=this.r&15,e=this.g&15,j=this.b&15;return "#"+"0123456789abcdef".charAt(a)+"0123456789abcdef".charAt(d)+"0123456789abcdef".charAt(b)+"0123456789abcdef".charAt(e)+"0123456789abcdef".charAt(c)+
"0123456789abcdef".charAt(j)}return null};this.getInt=function(a){return this.c?k!==a?(100*this.a|0)<<24^this.r<<16^this.g<<8^this.b:(this.r<<16^this.g<<8^this.b)&16777215:null};this.toString=function(){return this.getHex()};this.setColor(a)}function q(a,d){var b="";do if(b=i.css(a,d),""!==b&&"transparent"!==b&&"rgba(0, 0, 0, 0)"!==b||i.nodeName(a,"body"))break;while(a=a.parentNode);""===b&&(b=i.support.rgba?"transparent":"backgroundColor"===d?"white":"black");return new e(b)}var o={aliceblue:"f0f8ff",
antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",
darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",
greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",
lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",
orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",
steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},p;i.each("color,backgroundColor,borderColor,borderTopColor,borderBottomColor,borderLeftColor,borderRightColor,outlineColor".split(","),function(a,d){i.cssHooks[d]={set:function(a,c){a.style[d]=(new e(c)).getCSS()}};i.fx.step[d]=function(a){if(k===a.xinit){if("string"===typeof a.end&&-1!==a.end.indexOf(";")){var c,
h=a.end.split(";");if(h.length>2){for(c in h)h[c]=-1===h[c].indexOf("native")?new e(h[c]):q(a.elem,d);a.start=null;a.end=h}else a.start=new e(h[0]),a.end=new e(h[1])}else a.start=q(a.elem,d),a.end=new e(a.end);a.xinit=1}c=a.start;var h=a.end,f=a.pos;if(null===c){var i=f*(h.length-1),f=f<1?i|0:h.length-2;c=h[f];h=h[f+1];f=i-f}a.elem.style[d]=p(c.r+f*(h.r-c.r)|0,c.g+f*(h.g-c.g)|0,c.b+f*(h.b-c.b)|0,c.a+f*(h.a-c.a))}});i(function(){var a=document.createElement("div").style;p=function(a,b,c,e){return"rgba("+
a+","+b+","+c+","+e+")"};a.cssText="background-color:rgba(1,1,1,.5)";if(!(i.support.rgba=a.backgroundColor.indexOf("rgba")>-1))p=function(a,b,c){return"rgb("+a+","+b+","+c+")"}});i.xcolor=new function(){this.test=function(a){a=new e(a);return a.c?a:null};this.red=function(a){a=new e(a);return a.c?(a.g=255,a.b=255,a):null};this.blue=function(a){a=new e(a);return a.c?(a.r=255,a.g=255,a):null};this.green=function(a){a=new e(a);return a.c?(a.r=255,a.b=255,a):null};this.sepia=function(a){a=new e(a);if(a.c){var d=
a.r,b=a.g,c=a.b;a.r=Math.round(d*0.393+b*0.769+c*0.189);a.g=Math.round(d*0.349+b*0.686+c*0.168);a.b=Math.round(d*0.272+b*0.534+c*0.131);return a}return null};this.random=function(){return new e([255*Math.random()|0,255*Math.random()|0,255*Math.random()|0])};this.inverse=function(a){a=new e(a);return a.c?(a.r^=255,a.g^=255,a.b^=255,a):null};this.opacity=function(a,d,b){a=new e(a);d=new e(d);return a.c&d.c?(b>1&&(b/=100),b=Math.max(b-1+d.a,0),a.r=Math.round((d.r-a.r)*b+a.r),a.g=Math.round((d.g-a.g)*b+a.g),
a.b=Math.round((d.b-a.b)*b+a.b),a):null};this.greyfilter=function(a,d){var b,c=new e(a);if(c.c){switch(d){case 1:b=0.35+13*(c.r+c.g+c.b)/60;break;case 2:b=(13*(c.r+c.g+c.b)+5355)/60;break;default:b=c.r*0.3+c.g*0.59+c.b*0.11}c.r=c.g=c.b=Math.min(b|0,255);return c}return null};this.webround=function(a){a=new e(a);if(a.c){if((a.r+=51-a.r%51)>255)a.r=255;if((a.g+=51-a.g%51)>255)a.g=255;if((a.b+=51-a.b%51)>255)a.b=255;return a}return null};this.distance=function(a,d){var b=new e(a),c=new e(d);return b.c&c.c?Math.sqrt(3*
(c.r-b.r)*(c.r-b.r)+4*(c.g-b.g)*(c.g-b.g)+2*(c.b-b.b)*(c.b-b.b)):null};this.readable=function(a,d,b){d=new e(d);a=new e(a);b=b||10;return d.c&a.c?(a=a.r*0.299+a.g*0.587+a.b*0.114-d.r*0.299-d.g*0.587-d.b*0.114,!(a<1.5+141.162*Math.pow(0.975,b)&&a>-0.5-154.709*Math.pow(0.99,b))):null};this.combine=function(a,d){var b=new e(a),c=new e(d);return b.c&c.c?(b.r^=c.r,b.g^=c.g,b.b^=c.b,b):null};this.breed=function(a,d){var b=new e(a),c=new e(d),h=0,f=6;if(b.c&c.c){for(;f--;)Math.random()<0.5&&(h|=15<<(f<<2));b.r=b.r&
h>>16&255|c.r&(h>>16&255^255);b.g=b.g&h>>8&255|c.g&(h>>8&255^255);b.b=b.b&h>>0&255|c.b&(h>>0&255^255);return b}return null};this.additive=function(a,d){var b=new e(a),c=new e(d);if(b.c&c.c){if((b.r+=c.r)>255)b.r=255;if((b.g+=c.g)>255)b.g=255;if((b.b+=c.b)>255)b.b=255;return b}return null};this.subtractive=function(a,d){var b=new e(a),c=new e(d);if(b.c&c.c){if((b.r+=c.r-255)<0)b.r=0;if((b.g+=c.g-255)<0)b.g=0;if((b.b+=c.b-255)<0)b.b=0;return b}return null};this.subtract=function(a,d){var b=new e(a),c=new e(d);
if(b.c&c.c){if((b.r-=c.r)<0)b.r=0;if((b.g-=c.g)<0)b.g=0;if((b.b-=c.b)<0)b.b=0;return b}return null};this.multiply=function(a,d){var b=new e(a),c=new e(d);return b.c&c.c?(b.r=b.r/255*c.r|0,b.g=b.g/255*c.g|0,b.b=b.b/255*c.b|0,b):null};this.average=function(a,d){var b=new e(a),c=new e(d);return b.c&c.c?(b.r=b.r+c.r>>1,b.g=b.g+c.g>>1,b.b=b.b+c.b>>1,b):null};this.triad=function(a){a=new e(a);return a.c?[a,new e([a.b,a.r,a.g]),new e([a.g,a.b,a.r])]:null};this.tetrad=function(a){a=new e(a);return a.c?[a,new e([a.b,
a.r,a.b]),new e([a.b,a.g,a.r]),new e([a.r,a.b,a.r])]:null};this.gradientlevel=function(a,d,b,c){k===c&&(c=1);if(b>c)return null;a=new e(a);d=new e(d);return a.c&d.c?(a.r=a.r+(d.r-a.r)/c*b|0,a.g=a.g+(d.g-a.g)/c*b|0,a.b=a.b+(d.b-a.b)/c*b|0,a):null};this.gradientarray=function(a,d,b){if(d>b)return null;var c=d*(a.length-1)/b|0,d=(d-b*c/(a.length-1))/b,b=new e(a[c]),c=new e(a[c+1]);return b.c&c.c?(b.r=b.r+a.length*(c.r-b.r)*d|0,b.g=b.g+a.length*(c.g-b.g)*d|0,b.b=b.b+a.length*(c.b-b.b)*d|0,b):null};this.nearestname=
function(a){a=new e(a);return a.c?a.getName():null};this.darken=function(a,d,b){if(k===d)d=1;else if(d<0)return this.lighten(a,-d,b);k===b&&(b=32);a=new e(a);if(a.c){if((a.r-=b*d)<0)a.r=0;if((a.g-=b*d)<0)a.g=0;if((a.b-=b*d)<0)a.b=0;return a}return null};this.lighten=function(a,d,b){if(k===d)d=1;else if(d<0)return this.darken(a,-d,b);k===b&&(b=32);a=new e(a);if(a.c){if((a.r+=b*d)>255)a.r=255;if((a.g+=b*d)>255)a.g=255;if((a.b+=b*d)>255)a.b=255;return a}return null};this.analogous=function(a,d,b){k===d&&(d=8);
k===b&&(b=30);var c=new e(a);if(c.c){a=c.getHSV();b=360/b;c=[c];for(a.h=(a.h-(b*d>>1)+720)%360;--d;)a.h+=b,a.h%=360,c.push(new e(a));return c}return null};this.complementary=function(a){a=new e(a);return a.c?(a=a.getHSL(),a.h=(a.h+180)%360,new e(a)):null};this.splitcomplement=function(a){var d=new e(a);return d.c?(a=d.getHSV(),d=[d],a.h+=72,a.h%=360,d.push(new e(a)),a.h+=144,a.h%=360,d.push(new e(a)),d):null};this.monochromatic=function(a,d){k===d&&(d=6);var b=new e(a);if(b.c){for(var c=b.getHSV(),b=[b];--d;)c.v+=
20,c.v%=100,b.push(new e(c));return b}return null}};i.fn.readable=function(){var a=this[0],d="",b="";do{if(""===d&&("transparent"===(d=i.css(a,"color"))||"rgba(0, 0, 0, 0)"===d))d="";if(""===b&&("transparent"===(b=i.css(a,"backgroundColor"))||"rgba(0, 0, 0, 0)"===b))b="";if(""!==d&&""!==b||i.nodeName(a,"body"))break}while(a=a.parentNode);""===d&&(d="black");""===b&&(b="white");return i.xcolor.readable(b,d)};i.fn.colorize=function(a,d,b){var c={gradient:function(a,b){return a/b},flip:function(a,
b,c,d){return" "===d?c:!c},pillow:function(a,b){a*=2;return a<=b?a/b:2-a/b}};if("function"!==typeof b)if(void 0===c[b])return;else b=c[b];a=new e(a);d=new e(d);this.each(function(){var c=this.childNodes,e=0,i=0;if(a.c&d.c){for(var k=c.length;k--;e+=c[k].textContent.length);(function j(c){var h=0,k;if(3===c.nodeType){var l=a,r=d,o=e,s,t,n=0,u,q=b;k=c.nodeValue.length;t=document.createElement("span");for(h=0;h<k;++h)s=document.createElement("span"),u=c.nodeValue.charAt(h),n=q(i,o,n,u),s.style.color=
p(l.r+n*(r.r-l.r)|0,l.g+n*(r.g-l.g)|0,l.b+n*(r.b-l.b)|0,l.a+n*(r.a-l.a)),s.appendChild(document.createTextNode(u)),t.appendChild(s),++i;c.parentNode.replaceChild(t,c)}else for(k=c.childNodes.length;h<k;++h)j(c.childNodes[h])})(this)}})}})(jQuery);



/*//Prettify*/
var q=null;window.PR_SHOULD_USE_CONTINUATION=!0;
(function(){function L(a){function m(a){var f=a.charCodeAt(0);if(f!==92)return f;var b=a.charAt(1);return(f=r[b])?f:"0"<=b&&b<="7"?parseInt(a.substring(1),8):b==="u"||b==="x"?parseInt(a.substring(2),16):a.charCodeAt(1)}function e(a){if(a<32)return(a<16?"\\x0":"\\x")+a.toString(16);a=String.fromCharCode(a);if(a==="\\"||a==="-"||a==="["||a==="]")a="\\"+a;return a}function h(a){for(var f=a.substring(1,a.length-1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g),a=
[],b=[],o=f[0]==="^",c=o?1:0,i=f.length;c<i;++c){var j=f[c];if(/\\[bdsw]/i.test(j))a.push(j);else{var j=m(j),d;c+2<i&&"-"===f[c+1]?(d=m(f[c+2]),c+=2):d=j;b.push([j,d]);d<65||j>122||(d<65||j>90||b.push([Math.max(65,j)|32,Math.min(d,90)|32]),d<97||j>122||b.push([Math.max(97,j)&-33,Math.min(d,122)&-33]))}}b.sort(function(a,f){return a[0]-f[0]||f[1]-a[1]});f=[];j=[NaN,NaN];for(c=0;c<b.length;++c)i=b[c],i[0]<=j[1]+1?j[1]=Math.max(j[1],i[1]):f.push(j=i);b=["["];o&&b.push("^");b.push.apply(b,a);for(c=0;c<
f.length;++c)i=f[c],b.push(e(i[0])),i[1]>i[0]&&(i[1]+1>i[0]&&b.push("-"),b.push(e(i[1])));b.push("]");return b.join("")}function y(a){for(var f=a.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g),b=f.length,d=[],c=0,i=0;c<b;++c){var j=f[c];j==="("?++i:"\\"===j.charAt(0)&&(j=+j.substring(1))&&j<=i&&(d[j]=-1)}for(c=1;c<d.length;++c)-1===d[c]&&(d[c]=++t);for(i=c=0;c<b;++c)j=f[c],j==="("?(++i,d[i]===void 0&&(f[c]="(?:")):"\\"===j.charAt(0)&&
(j=+j.substring(1))&&j<=i&&(f[c]="\\"+d[i]);for(i=c=0;c<b;++c)"^"===f[c]&&"^"!==f[c+1]&&(f[c]="");if(a.ignoreCase&&s)for(c=0;c<b;++c)j=f[c],a=j.charAt(0),j.length>=2&&a==="["?f[c]=h(j):a!=="\\"&&(f[c]=j.replace(/[A-Za-z]/g,function(a){a=a.charCodeAt(0);return"["+String.fromCharCode(a&-33,a|32)+"]"}));return f.join("")}for(var t=0,s=!1,l=!1,p=0,d=a.length;p<d;++p){var g=a[p];if(g.ignoreCase)l=!0;else if(/[a-z]/i.test(g.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi,""))){s=!0;l=!1;break}}for(var r=
{b:8,t:9,n:10,v:11,f:12,r:13},n=[],p=0,d=a.length;p<d;++p){g=a[p];if(g.global||g.multiline)throw Error(""+g);n.push("(?:"+y(g)+")")}return RegExp(n.join("|"),l?"gi":"g")}function M(a){function m(a){switch(a.nodeType){case 1:if(e.test(a.className))break;for(var g=a.firstChild;g;g=g.nextSibling)m(g);g=a.nodeName;if("BR"===g||"LI"===g)h[s]="\n",t[s<<1]=y++,t[s++<<1|1]=a;break;case 3:case 4:g=a.nodeValue,g.length&&(g=p?g.replace(/\r\n?/g,"\n"):g.replace(/[\t\n\r ]+/g," "),h[s]=g,t[s<<1]=y,y+=g.length,
t[s++<<1|1]=a)}}var e=/(?:^|\s)nocode(?:\s|$)/,h=[],y=0,t=[],s=0,l;a.currentStyle?l=a.currentStyle.whiteSpace:window.getComputedStyle&&(l=document.defaultView.getComputedStyle(a,q).getPropertyValue("white-space"));var p=l&&"pre"===l.substring(0,3);m(a);return{a:h.join("").replace(/\n$/,""),c:t}}function B(a,m,e,h){m&&(a={a:m,d:a},e(a),h.push.apply(h,a.e))}function x(a,m){function e(a){for(var l=a.d,p=[l,"pln"],d=0,g=a.a.match(y)||[],r={},n=0,z=g.length;n<z;++n){var f=g[n],b=r[f],o=void 0,c;if(typeof b===
"string")c=!1;else{var i=h[f.charAt(0)];if(i)o=f.match(i[1]),b=i[0];else{for(c=0;c<t;++c)if(i=m[c],o=f.match(i[1])){b=i[0];break}o||(b="pln")}if((c=b.length>=5&&"lang-"===b.substring(0,5))&&!(o&&typeof o[1]==="string"))c=!1,b="src";c||(r[f]=b)}i=d;d+=f.length;if(c){c=o[1];var j=f.indexOf(c),k=j+c.length;o[2]&&(k=f.length-o[2].length,j=k-c.length);b=b.substring(5);B(l+i,f.substring(0,j),e,p);B(l+i+j,c,C(b,c),p);B(l+i+k,f.substring(k),e,p)}else p.push(l+i,b)}a.e=p}var h={},y;(function(){for(var e=a.concat(m),
l=[],p={},d=0,g=e.length;d<g;++d){var r=e[d],n=r[3];if(n)for(var k=n.length;--k>=0;)h[n.charAt(k)]=r;r=r[1];n=""+r;p.hasOwnProperty(n)||(l.push(r),p[n]=q)}l.push(/[\S\s]/);y=L(l)})();var t=m.length;return e}function u(a){var m=[],e=[];a.tripleQuotedStrings?m.push(["str",/^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/,q,"'\""]):a.multiLineStrings?m.push(["str",/^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/,
q,"'\"`"]):m.push(["str",/^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/,q,"\"'"]);a.verbatimStrings&&e.push(["str",/^@"(?:[^"]|"")*(?:"|$)/,q]);var h=a.hashComments;h&&(a.cStyleComments?(h>1?m.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,q,"#"]):m.push(["com",/^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\n\r]*)/,q,"#"]),e.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/,q])):m.push(["com",/^#[^\n\r]*/,
q,"#"]));a.cStyleComments&&(e.push(["com",/^\/\/[^\n\r]*/,q]),e.push(["com",/^\/\*[\S\s]*?(?:\*\/|$)/,q]));a.regexLiterals&&e.push(["lang-regex",/^(?:^^\.?|[!+-]|!=|!==|#|%|%=|&|&&|&&=|&=|\(|\*|\*=|\+=|,|-=|->|\/|\/=|:|::|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|[?@[^]|\^=|\^\^|\^\^=|{|\||\|=|\|\||\|\|=|~|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\s*(\/(?=[^*/])(?:[^/[\\]|\\[\S\s]|\[(?:[^\\\]]|\\[\S\s])*(?:]|$))+\/)/]);(h=a.types)&&e.push(["typ",h]);a=(""+a.keywords).replace(/^ | $/g,
"");a.length&&e.push(["kwd",RegExp("^(?:"+a.replace(/[\s,]+/g,"|")+")\\b"),q]);m.push(["pln",/^\s+/,q," \r\n\t\xa0"]);e.push(["lit",/^@[$_a-z][\w$@]*/i,q],["typ",/^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/,q],["pln",/^[$_a-z][\w$@]*/i,q],["lit",/^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i,q,"0123456789"],["pln",/^\\[\S\s]?/,q],["pun",/^.[^\s\w"-$'./@\\`]*/,q]);return x(m,e)}function D(a,m){function e(a){switch(a.nodeType){case 1:if(k.test(a.className))break;if("BR"===a.nodeName)h(a),
a.parentNode&&a.parentNode.removeChild(a);else for(a=a.firstChild;a;a=a.nextSibling)e(a);break;case 3:case 4:if(p){var b=a.nodeValue,d=b.match(t);if(d){var c=b.substring(0,d.index);a.nodeValue=c;(b=b.substring(d.index+d[0].length))&&a.parentNode.insertBefore(s.createTextNode(b),a.nextSibling);h(a);c||a.parentNode.removeChild(a)}}}}function h(a){function b(a,d){var e=d?a.cloneNode(!1):a,f=a.parentNode;if(f){var f=b(f,1),g=a.nextSibling;f.appendChild(e);for(var h=g;h;h=g)g=h.nextSibling,f.appendChild(h)}return e}
for(;!a.nextSibling;)if(a=a.parentNode,!a)return;for(var a=b(a.nextSibling,0),e;(e=a.parentNode)&&e.nodeType===1;)a=e;d.push(a)}var k=/(?:^|\s)nocode(?:\s|$)/,t=/\r\n?|\n/,s=a.ownerDocument,l;a.currentStyle?l=a.currentStyle.whiteSpace:window.getComputedStyle&&(l=s.defaultView.getComputedStyle(a,q).getPropertyValue("white-space"));var p=l&&"pre"===l.substring(0,3);for(l=s.createElement("LI");a.firstChild;)l.appendChild(a.firstChild);for(var d=[l],g=0;g<d.length;++g)e(d[g]);m===(m|0)&&d[0].setAttribute("value",
m);var r=s.createElement("OL");r.className="linenums";for(var n=Math.max(0,m-1|0)||0,g=0,z=d.length;g<z;++g)l=d[g],l.className="L"+(g+n)%10,l.firstChild||l.appendChild(s.createTextNode("\xa0")),r.appendChild(l);a.appendChild(r)}function k(a,m){for(var e=m.length;--e>=0;){var h=m[e];A.hasOwnProperty(h)?window.console&&console.warn("cannot override language handler %s",h):A[h]=a}}function C(a,m){if(!a||!A.hasOwnProperty(a))a=/^\s*</.test(m)?"default-markup":"default-code";return A[a]}function E(a){var m=
a.g;try{var e=M(a.h),h=e.a;a.a=h;a.c=e.c;a.d=0;C(m,h)(a);var k=/\bMSIE\b/.test(navigator.userAgent),m=/\n/g,t=a.a,s=t.length,e=0,l=a.c,p=l.length,h=0,d=a.e,g=d.length,a=0;d[g]=s;var r,n;for(n=r=0;n<g;)d[n]!==d[n+2]?(d[r++]=d[n++],d[r++]=d[n++]):n+=2;g=r;for(n=r=0;n<g;){for(var z=d[n],f=d[n+1],b=n+2;b+2<=g&&d[b+1]===f;)b+=2;d[r++]=z;d[r++]=f;n=b}for(d.length=r;h<p;){var o=l[h+2]||s,c=d[a+2]||s,b=Math.min(o,c),i=l[h+1],j;if(i.nodeType!==1&&(j=t.substring(e,b))){k&&(j=j.replace(m,"\r"));i.nodeValue=
j;var u=i.ownerDocument,v=u.createElement("SPAN");v.className=d[a+1];var x=i.parentNode;x.replaceChild(v,i);v.appendChild(i);e<o&&(l[h+1]=i=u.createTextNode(t.substring(b,o)),x.insertBefore(i,v.nextSibling))}e=b;e>=o&&(h+=2);e>=c&&(a+=2)}}catch(w){"console"in window&&console.log(w&&w.stack?w.stack:w)}}var v=["break,continue,do,else,for,if,return,while"],w=[[v,"auto,case,char,const,default,double,enum,extern,float,goto,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],
"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],F=[w,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,dynamic_cast,explicit,export,friend,inline,late_check,mutable,namespace,nullptr,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],G=[w,"abstract,boolean,byte,extends,final,finally,implements,import,instanceof,null,native,package,strictfp,super,synchronized,throws,transient"],
H=[G,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,interface,internal,into,is,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var"],w=[w,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],I=[v,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],
J=[v,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],v=[v,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],K=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)/,N=/\S/,O=u({keywords:[F,H,w,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END"+
I,J,v],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),A={};k(O,["default-code"]);k(x([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\S\s]*?(?:--\>|$)/],["lang-",/^<\?([\S\s]+?)(?:\?>|$)/],["lang-",/^<%([\S\s]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),
["default-markup","htm","html","mxml","xhtml","xml","xsl"]);k(x([["pln",/^\s+/,q," \t\r\n"],["atv",/^(?:"[^"]*"?|'[^']*'?)/,q,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/],["pun",/^[/<->]+/],["lang-js",/^on\w+\s*=\s*"([^"]+)"/i],["lang-js",/^on\w+\s*=\s*'([^']+)'/i],["lang-js",/^on\w+\s*=\s*([^\s"'>]+)/i],["lang-css",/^style\s*=\s*"([^"]+)"/i],["lang-css",/^style\s*=\s*'([^']+)'/i],["lang-css",
/^style\s*=\s*([^\s"'>]+)/i]]),["in.tag"]);k(x([],[["atv",/^[\S\s]+/]]),["uq.val"]);k(u({keywords:F,hashComments:!0,cStyleComments:!0,types:K}),["c","cc","cpp","cxx","cyc","m"]);k(u({keywords:"null,true,false"}),["json"]);k(u({keywords:H,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:K}),["cs"]);k(u({keywords:G,cStyleComments:!0}),["java"]);k(u({keywords:v,hashComments:!0,multiLineStrings:!0}),["bsh","csh","sh"]);k(u({keywords:I,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),
["cv","py"]);k(u({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["perl","pl","pm"]);k(u({keywords:J,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb"]);k(u({keywords:w,cStyleComments:!0,regexLiterals:!0}),["js"]);k(u({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,true,try,unless,until,when,while,yes",
hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]);k(x([],[["str",/^[\S\s]+/]]),["regex"]);window.prettyPrintOne=function(a,m,e){var h=document.createElement("PRE");h.innerHTML=a;e&&D(h,e);E({g:m,i:e,h:h});return h.innerHTML};window.prettyPrint=function(a){function m(){for(var e=window.PR_SHOULD_USE_CONTINUATION?l.now()+250:Infinity;p<h.length&&l.now()<e;p++){var n=h[p],k=n.className;if(k.indexOf("prettyprint")>=0){var k=k.match(g),f,b;if(b=
!k){b=n;for(var o=void 0,c=b.firstChild;c;c=c.nextSibling)var i=c.nodeType,o=i===1?o?b:c:i===3?N.test(c.nodeValue)?b:o:o;b=(f=o===b?void 0:o)&&"CODE"===f.tagName}b&&(k=f.className.match(g));k&&(k=k[1]);b=!1;for(o=n.parentNode;o;o=o.parentNode)if((o.tagName==="pre"||o.tagName==="code"||o.tagName==="xmp")&&o.className&&o.className.indexOf("prettyprint")>=0){b=!0;break}b||((b=(b=n.className.match(/\blinenums\b(?::(\d+))?/))?b[1]&&b[1].length?+b[1]:!0:!1)&&D(n,b),d={g:k,h:n,i:b},E(d))}}p<h.length?setTimeout(m,
250):a&&a()}for(var e=[document.getElementsByTagName("pre"),document.getElementsByTagName("code"),document.getElementsByTagName("xmp")],h=[],k=0;k<e.length;++k)for(var t=0,s=e[k].length;t<s;++t)h.push(e[k][t]);var e=q,l=Date;l.now||(l={now:function(){return+new Date}});var p=0,d,g=/\blang(?:uage)?-([\w.]+)(?!\S)/;m()};window.PR={createSimpleLexer:x,registerLangHandler:k,sourceDecorator:u,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",
PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ"}})();


/**
 * @author Will Steinmetz
 * 
 * jQuery notification plug-in inspired by the notification style of Windows 8
 * 
 * Copyright (c)2013, Will Steinmetz
 * Licensed under the BSD license.
 * http://opensource.org/licenses/BSD-3-Clause
 */
!function(t){var i={life:1e4,theme:"default",iconClose:"fa fa-times",sticky:!1,verticalEdge:"right",horizontalEdge:"top",zindex:1100},e={init:function(n,a){return this.each(function(){var s=t(this),o=s.data("notific8");s.data("notific8",{target:s,settings:{},message:""}),o=s.data("notific8"),o.message=n,t.extend(o.settings,i,a),e._buildNotification(s)})},destroy:function(i){i.data("notific8");t(window).unbind(".notific8"),i.removeData("notific8")},_buildNotification:function(i){var e=i.data("notific8"),n=t("<div />"),a=Number(t("body").attr("data-notific8s"));a++;var s="default"!=e.settings.theme?e.settings.fColor||"#FFF":"";if(n.addClass("jquery-notific8-notification"),n.attr("data-color",e.settings.theme),n.css({"background-color":t.fillColor(n),color:s}),n.attr("id","jquery-notific8-notification-"+a),t("body").attr("data-notific8s",a),e.settings.hasOwnProperty("heading")&&"string"==typeof e.settings.heading&&n.append(t("<div />").addClass("jquery-notific8-heading").html(e.settings.heading)),e.settings.sticky){var o=t("<div />").addClass("jquery-notific8-close-sticky").append(t("<span />").html("close x"));o.click(function(){n.removeClass("in"),setTimeout(function(){n.remove()},500)}),n.append(o),n.addClass("sticky"),n.find(".jquery-notific8-close-sticky").css({"background-color":t.xcolor.darken(t.fillColor(n),1,13)})}else{var o=t("<div />").addClass("jquery-notific8-close").append(t("<i />").addClass(e.settings.iconClose));o.click(function(){n.removeClass("in"),setTimeout(function(){n.remove()},500)}),n.append(o)}n.append(t("<div />").addClass("jquery-notific8-message").html(e.message)),t(".jquery-notific8-container."+e.settings.verticalEdge+"."+e.settings.horizontalEdge).append(n),setTimeout(function(){n.addClass("in")},10),e.settings.sticky||!function(t,i){setTimeout(function(){n.removeClass("in"),setTimeout(function(){n.remove()},500)},i)}(n,e.settings.life),e.settings={}},configure:function(e){t.extend(i,e)},zindex:function(t){i.zindex=t}};t.notific8=function(n,a){switch(n){case"configure":case"config":return e.configure.apply(this,[a]);case"zindex":return e.zindex.apply(this,[a]);default:if("undefined"==typeof a&&(a={}),0===t(".jquery-notific8-container").size()){var s=t("body");s.attr("data-notific8s",0),s.append(t("<div />").addClass("jquery-notific8-container").addClass("top").addClass("right")),s.append(t("<div />").addClass("jquery-notific8-container").addClass("top").addClass("left")),s.append(t("<div />").addClass("jquery-notific8-container").addClass("bottom").addClass("right")),s.append(t("<div />").addClass("jquery-notific8-container").addClass("bottom").addClass("left")),t(".jquery-notific8-container").css("z-index",i.zindex)}(!a.hasOwnProperty("verticalEdge")||"right"!=a.verticalEdge.toLowerCase()&&"left"!=a.verticalEdge.toLowerCase())&&(a.verticalEdge=i.verticalEdge),(!a.hasOwnProperty("horizontalEdge")||"top"!=a.horizontalEdge.toLowerCase()&&"bottom"!=a.horizontalEdge.toLowerCase())&&(a.horizontalEdge=i.horizontalEdge),a.verticalEdge=a.verticalEdge.toLowerCase(),a.horizontalEdge=a.horizontalEdge.toLowerCase(),t(".jquery-notific8-container."+a.verticalEdge+"."+a.horizontalEdge).notific8(n,a)}},t.fn.notific8=function(i){return"string"==typeof i?e.init.apply(this,arguments):(t.error("jQuery.notific8 takes a string message as the first parameter"),void 0)}}(jQuery),function(t){t.baseClass=function(i){return i=t(i),i.get(0).className.match(/([^ ]+)/)[1]},t.fn.addDependClass=function(i,e){var n={delimiter:e?e:"-"};return this.each(function(){var e=t.baseClass(this);e&&t(this).addClass(e+n.delimiter+i)})},t.fn.removeDependClass=function(i,e){var n={delimiter:e?e:"-"};return this.each(function(){var e=t.baseClass(this);e&&t(this).removeClass(e+n.delimiter+i)})},t.fn.toggleDependClass=function(i,e){var n={delimiter:e?e:"-"};return this.each(function(){var e=t.baseClass(this);e&&(t(this).is("."+e+n.delimiter+i)?t(this).removeClass(e+n.delimiter+i):t(this).addClass(e+n.delimiter+i))})}}(jQuery);


/**
 * @name        jQuery FullScreen Plugin
 * @author      Martin Angelov, Morten Sj�gren
 * @version     1.2
 * @url         http://tutorialzine.com/2012/02/enhance-your-website-fullscreen-api/
 * @license     MIT License
 */
/*jshint browser: true, jquery: true */
!function(e){"use strict";function n(){var e=document.documentElement;return"requestFullscreen"in e||"mozRequestFullScreen"in e&&document.mozFullScreenEnabled||"webkitRequestFullScreen"in e}function l(e){e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullScreen&&e.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)}function c(){return document.fullscreen||document.mozFullScreen||document.webkitIsFullScreen||!1}function u(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}function t(n){e(document).on("fullscreenchange mozfullscreenchange webkitfullscreenchange",function(){n(c())})}e.support.fullscreen=n(),e.fn.fullScreen=function(n){if(!e.support.fullscreen||1!==this.length)return this;if(c())return u(),this;var r=e.extend({background:"#111",callback:e.noop(),fullscreenClass:"fullScreen"},n),o=this,s=e("<div>",{css:{"overflow-y":"auto",background:r.background,width:"100%",height:"100%"}}).insertBefore(o).append(o);return o.addClass(r.fullscreenClass),l(s.get(0)),s.click(function(e){e.target==this&&u()}),o.cancel=function(){return u(),o},t(function(n){n||(e(document).off("fullscreenchange mozfullscreenchange webkitfullscreenchange"),o.removeClass(r.fullscreenClass).insertBefore(s),s.remove()),r.callback&&r.callback(n)}),o},e.fn.cancelFullScreen=function(){return u(),this}}(jQuery);


/*
Loading canvas
 throbber.js v 0.1 2011-09-18
 http://aino.com

 Copyright (c) 2011, Aino
 Licensed under the MIT license.
*/
/*global Image, module, define, window */

(function(global, factory) {

    if ( typeof module === "object" && typeof module.exports === "object" ) {
        module.exports = factory( global );
    } else if ( typeof define == 'function' && define.amd ) {
        define( "throbber", [], function() {
            return factory( global );
        });
    } else {
        global.Throbber = factory( global );
    }

}(window || this, function( window ) {

    var document = window.document,

        M = Math,
        setTimeout = window.setTimeout,

        support = ( 'getContext' in document.createElement('canvas') ),

        _extend = function( defaults, obj ) {
            defaults = defaults || {};
            for (var i in obj) {
                defaults[i] = obj[i];
            }
            return defaults;
        },

        _animate = (function() {

            var loops = [];
            var animating = false;

            var requestFrame = (function(){
              var r = 'RequestAnimationFrame';
              return window.requestAnimationFrame || 
                window['webkit'+r] || 
                window['moz'+r] || 
                window['o'+r] || 
                window['ms'+r] || 
                function( callback ) {
                  window.setTimeout(callback, 1000 / 60);
                };
            }());

            function tick() {

                requestFrame(tick);
                var now = +(new Date());

                for(var i=0; i<loops.length; i++) {
                    var loop = loops[i];
                    loop.elapsed = now - loop.then;
                    if (loop.elapsed > loop.fpsInterval) {
                        loop.then = now - (loop.elapsed % loop.fpsInterval);
                        loop.fn();
                    }
                }
            }

            return function animate(fps, draw) {

                var now = +(new Date());
                loops.push({
                    fpsInterval: 1000/fps,
                    then: now,
                    startTime: now,
                    elapsed: 0,
                    fn: draw
                });
                if ( !animating ) {
                    animating = true;
                    tick();
                }
            };
        }()),

        // convert any color to RGB array
        _getRGB = function( color ) {
            if ( !support ) { return { rgb:false, alpha:1 }; }

            var t = document.createElement( 'i' ), rgb;

            t.style.display = 'none';
            t.style.color = color;
            document.body.appendChild( t );

            rgb = window.getComputedStyle( t, null )
                .getPropertyValue( 'color' )
                .replace( /^rgba?\(([^\)]+)\)/,'$1' ).replace( /\s/g, '' ).split(',').splice( 0, 4 );

            document.body.removeChild( t );
            t = null;

            return {
                alpha: rgb.length == 4 ? rgb.pop() : 1,
                rgb: rgb
            };
        },

        // used when rotating
        _restore = function( ctx, size, back ) {
            var n = back ? -2 : 2;
            ctx.translate( size/n, size/n );
        },

        // locar vars
        fade, i, l, ad, rd,

        // draw the frame
        _draw = function( alpha, o, ctx, step ) {

            fade = 1-alpha || 0;
            ad = 1; rd = -1;

            var size = o.size;

            if ( o.clockwise === false ) {
                ad = -1;
                rd = 1;
            }

            ctx.clearRect(0, 0, size, size);
            ctx.globalAlpha = o.alpha;
            ctx.lineWidth = o.strokewidth;

            for (i=0; i < o.lines; i++) {

                l = i+step >= o.lines ? i-o.lines+step : i+step;

                ctx.strokeStyle = 'rgba(' + o.color.join(',') + ',' + M.max(0, ((l/o.lines) - fade) ).toFixed(2) + ')';
                ctx.beginPath();

                ctx.moveTo( size/2, size/2-o.padding/2 );
                ctx.lineTo( size/2, 0 );
                ctx.lineWidth = o.strokewidth;
                ctx.stroke();
                _restore( ctx, size, false );
                ctx.rotate( ad * ( 360/o.lines ) * M.PI/180 );
                _restore( ctx, size, true );
            }

            if ( o.rotationspeed ) {
                ctx.save();
                _restore( ctx, size, false );

                ctx.rotate( rd * ( 360/o.lines/( 20-o.rotationspeed*2 ) ) * M.PI/180 ); //rotate in origin
                _restore( ctx, size, true );
            }
        };


    // Throbber constructor
    function Throbber( options ) {

        if ( !(this instanceof Throbber )) {
            return new Throbber( options );
        }

        var elem = this.elem = document.createElement('canvas'),
            scope = this;

        if ( !isNaN( options ) ) {
            options = { size: options };
        }

        // default options
        // note that some of these are placeholder and calculated against size if not defined
        this.o = {
            size: 34,           // diameter of loader
            rotationspeed: 6,   // rotation speed (1-10)
            clockwise: true,    // direction, set to false for counter clockwise
            color: '#fff',      // color of the spinner, can be any CSS compatible value
            fade: 300,          // duration of fadein/out when calling .start() and .stop()
            fallback: false,    // a gif fallback for non-supported browsers
            alpha: 1            // global alpha, can be defined using rgba as color or separatly
        };

        /*
        // more options, but these are calculated from size if not defined:

        fps                     // frames per second (~size)
        padding                 // diameter of clipped inner area (~size/2)
        strokewidth             // width of the lines (~size/30)
        lines                   // number of lines (~size/2+4)

        */

        // _extend options
        this.configure( options );

        // fade phase
        // 0 = idle
        // 1 = fadein
        // 2 = running
        // 3 = fadeout
        this.phase = -1;

        // references
        if ( support ) {
            this.ctx = elem.getContext('2d');
            elem.width = elem.height = this.o.size;
        } else if ( this.o.fallback ) {
            elem = this.elem = new Image();
            elem.src = this.o.fallback;
        }

        ///////////////////
        // the loop

        this.loop = (function() {

            var o = scope.o,
                alpha = 0,
                fade = 1000/o.fade/o.fps,
                interval = 1000/o.fps,
                step = scope.step,

                style = elem.style,
                currentStyle = elem.currentStyle,
                filter = currentStyle && currentStyle.filter || style.filter,
                ie = 'filter' in style && o.fallback && !support;

            // the canvas loop
            return function() {

                if ( scope.phase == 3 ) {

                    // fadeout
                    alpha -= fade;
                    if ( alpha <= 0 ) {
                        scope.phase = 0;
                    }

                }

                if ( scope.phase == 1 ) {

                    // fadein
                    alpha += fade;
                    if ( alpha >= 1 ) {
                        scope.phase = 2;
                    }
                }

                if ( ie ) {
                    style.filter = 'alpha(opacity=' + M.min( o.alpha*100, M.max(0, Math.round( alpha*100 ) ) ) + ')';
                } else if ( !support && o.fallback ) {
                    style.opacity = alpha;
                } else if ( support ) {
                    _draw( alpha, o, scope.ctx, step );
                    step = step === 0 ? scope.o.lines : step-1;
                }
            };
        }());

        _animate(this.o.fps, this.loop);

    }

    // Throbber prototypes
    Throbber.prototype = {

        constructor: Throbber,

        // append the loader to a HTML element
        appendTo: function( elem ) {

            this.elem.style.display = 'none';
            elem.appendChild( this.elem );

            return this;
        },

        // _extend options and apply calculate meassures
        configure: function( options ) {

            var o = this.o, color;

            _extend(o, options || {});

            color = _getRGB( o.color );

            // do some sensible calculations if not defined
            _extend( o, _extend({
                padding: o.size/2,
                strokewidth: M.max( 1, M.min( o.size/30, 3 ) ),
                lines: M.min( 30, o.size/2+4 ),
                alpha: color.alpha || 1,
                fps: M.min( 30, o.size+4 )
            }, options ));

            // grab the rgba array
            o.color = color.rgb;

            // copy the amount of lines into steps
            this.step = o.lines;
            
            // double-up for retina screens
            if (!!window.devicePixelRatio) {
                // lock element into desired end size
                this.elem.style.width = o.size + 'px';
                this.elem.style.height = o.size + 'px';

                o.size *= window.devicePixelRatio;
                o.padding *= window.devicePixelRatio;
                o.strokewidth *= window.devicePixelRatio;
            }

            return this;
        },

        // starts the animation
        start: function() {

            this.elem.style.display = 'block';
            if ( this.phase == -1 ) {
                this.loop();
            }
            this.phase = 1;

            return this;
        },

        // stops the animation
        stop: function() {
            this.phase = 3;
            return this;
        },

        toggle: function() {
            if ( this.phase == 2 ) {
                this.stop();
            } else {
                this.start();
            }
        }
    };

    return Throbber;

}));


/*
 * Treeview 1.5pre - jQuery plugin to hide and show branches of a tree
 * 
 * http://bassistance.de/jquery-plugins/jquery-plugin-treeview/
 * http://docs.jquery.com/Plugins/Treeview
 *
 * Copyright (c) 2007 J�rn Zaefferer
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Revision: $Id: jquery.treeview.js 5759 2008-07-01 07:50:28Z joern.zaefferer $
 *
 */
!function(a){a.extend(a.fn,{swapClass:function(a,e){var l=this.filter("."+a);return this.filter("."+e).removeClass(e).addClass(a),l.removeClass(a).addClass(e),this},replaceClass:function(a,e){return this.filter("."+a).removeClass(a).addClass(e).end()},hoverClass:function(e){return e=e||"hover",this.hover(function(){a(this).addClass(e)},function(){a(this).removeClass(e)})},heightToggle:function(a,e){a?this.animate({height:"toggle"},a,e):this.each(function(){jQuery(this)[jQuery(this).is(":hidden")?"show":"hide"](),e&&e.apply(this,arguments)})},heightHide:function(a,e){a?this.animate({height:"hide"},a,e):(this.hide(),e&&this.each(e))},prepareBranches:function(a){return a.prerendered||(this.filter(":last-child:not(ul)").addClass(e.last),this.filter((a.collapsed?"":"."+e.closed)+":not(."+e.open+")").find(">ul").hide()),this.filter(":has(>ul)")},applyClasses:function(l,s){if(this.filter(":has(>ul):not(:has(>a))").find(">span").unbind("click.treeview").bind("click.treeview",function(e){this==e.target&&s.apply(a(this).next())}).add(a("a",this)).hoverClass(),!l.prerendered){this.filter(":has(>ul:hidden)").addClass(e.expandable).replaceClass(e.last,e.lastExpandable),this.not(":has(>ul:hidden)").addClass(e.collapsable).replaceClass(e.last,e.lastCollapsable);var t=this.find("div."+e.hitarea);t.length||(t=this.prepend('<div class="'+e.hitarea+'"/>').find("div."+e.hitarea)),t.removeClass().addClass(e.hitarea).each(function(){var e="";a.each(a(this).parent().attr("class").split(" "),function(){e+=this+"-hitarea "}),a(this).addClass(e)})}this.find("div."+e.hitarea).click(s)},treeview:function(l){function s(l,s){function i(s){return function(){return t.apply(a("div."+e.hitarea,l).filter(function(){return s?a(this).parent("."+s).length:!0})),!1}}a("a:eq(0)",s).click(i(e.collapsable)),a("a:eq(1)",s).click(i(e.expandable)),a("a:eq(2)",s).click(i())}function t(){a(this).parent().find(">.hitarea").swapClass(e.collapsableHitarea,e.expandableHitarea).swapClass(e.lastCollapsableHitarea,e.lastExpandableHitarea).end().swapClass(e.collapsable,e.expandable).swapClass(e.lastCollapsable,e.lastExpandable).find(">ul").heightToggle(l.animated,l.toggle),l.unique&&a(this).parent().siblings().find(">.hitarea").replaceClass(e.collapsableHitarea,e.expandableHitarea).replaceClass(e.lastCollapsableHitarea,e.lastExpandableHitarea).end().replaceClass(e.collapsable,e.expandable).replaceClass(e.lastCollapsable,e.lastExpandable).find(">ul").heightHide(l.animated,l.toggle)}function i(){var e=[];o.each(function(l,s){e[l]=a(s).is(":has(>ul:visible)")?1:0}),a.cookie(l.cookieId,e.join(""),l.cookieOptions)}function n(){var e=a.cookie(l.cookieId);if(e){var s=e.split("");o.each(function(e,l){a(l).find(">ul")[parseInt(s[e])?"show":"hide"]()})}}if(l=a.extend({cookieId:"treeview"},l),l.toggle){var r=l.toggle;l.toggle=function(){return r.apply(a(this).parent()[0],arguments)}}this.data("toggler",t),this.addClass("treeview");var o=this.find("li").prepareBranches(l);switch(l.persist){case"cookie":var h=l.toggle;l.toggle=function(){i(),h&&h.apply(this,arguments)},n();break;case"location":var d=this.find("a").filter(function(){return this.href.toLowerCase()==location.href.toLowerCase()});if(d.length){var p=d.addClass("selected").parents("ul, li").add(d.next()).show();l.prerendered&&p.filter("li").swapClass(e.collapsable,e.expandable).swapClass(e.lastCollapsable,e.lastExpandable).find(">.hitarea").swapClass(e.collapsableHitarea,e.expandableHitarea).swapClass(e.lastCollapsableHitarea,e.lastExpandableHitarea)}}return o.applyClasses(l,t),l.control&&(s(this,l.control),a(l.control).show()),this}}),a.treeview={};var e=a.treeview.classes={open:"open",closed:"closed",expandable:"expandable",expandableHitarea:"expandable-hitarea",lastExpandableHitarea:"lastExpandable-hitarea",collapsable:"collapsable",collapsableHitarea:"collapsable-hitarea",lastCollapsableHitarea:"lastCollapsable-hitarea",lastCollapsable:"lastCollapsable",lastExpandable:"lastExpandable",last:"last",hitarea:"hitarea"}}(jQuery);


/**
 * jquery.Jcrop.min.js v0.9.12 (build:20130202)
 * jQuery Image Cropping Plugin - released under MIT License
 * Copyright (c) 2008-2013 Tapmodo Interactive LLC
 * https://github.com/tapmodo/Jcrop
 */
(function(a){a.Jcrop=function(b,c){function i(a){return Math.round(a)+"px"}function j(a){return d.baseClass+"-"+a}function k(){return a.fx.step.hasOwnProperty("backgroundColor")}function l(b){var c=a(b).offset();return[c.left,c.top]}function m(a){return[a.pageX-e[0],a.pageY-e[1]]}function n(b){typeof b!="object"&&(b={}),d=a.extend(d,b),a.each(["onChange","onSelect","onRelease","onDblClick"],function(a,b){typeof d[b]!="function"&&(d[b]=function(){})})}function o(a,b,c){e=l(D),bc.setCursor(a==="move"?a:a+"-resize");if(a==="move")return bc.activateHandlers(q(b),v,c);var d=_.getFixed(),f=r(a),g=_.getCorner(r(f));_.setPressed(_.getCorner(f)),_.setCurrent(g),bc.activateHandlers(p(a,d),v,c)}function p(a,b){return function(c){if(!d.aspectRatio)switch(a){case"e":c[1]=b.y2;break;case"w":c[1]=b.y2;break;case"n":c[0]=b.x2;break;case"s":c[0]=b.x2}else switch(a){case"e":c[1]=b.y+1;break;case"w":c[1]=b.y+1;break;case"n":c[0]=b.x+1;break;case"s":c[0]=b.x+1}_.setCurrent(c),bb.update()}}function q(a){var b=a;return bd.watchKeys
(),function(a){_.moveOffset([a[0]-b[0],a[1]-b[1]]),b=a,bb.update()}}function r(a){switch(a){case"n":return"sw";case"s":return"nw";case"e":return"nw";case"w":return"ne";case"ne":return"sw";case"nw":return"se";case"se":return"nw";case"sw":return"ne"}}function s(a){return function(b){return d.disabled?!1:a==="move"&&!d.allowMove?!1:(e=l(D),W=!0,o(a,m(b)),b.stopPropagation(),b.preventDefault(),!1)}}function t(a,b,c){var d=a.width(),e=a.height();d>b&&b>0&&(d=b,e=b/a.width()*a.height()),e>c&&c>0&&(e=c,d=c/a.height()*a.width()),T=a.width()/d,U=a.height()/e,a.width(d).height(e)}function u(a){return{x:a.x*T,y:a.y*U,x2:a.x2*T,y2:a.y2*U,w:a.w*T,h:a.h*U}}function v(a){var b=_.getFixed();b.w>d.minSelect[0]&&b.h>d.minSelect[1]?(bb.enableHandles(),bb.done()):bb.release(),bc.setCursor(d.allowSelect?"crosshair":"default")}function w(a){if(d.disabled)return!1;if(!d.allowSelect)return!1;W=!0,e=l(D),bb.disableHandles(),bc.setCursor("crosshair");var b=m(a);return _.setPressed(b),bb.update(),bc.activateHandlers(x,v,a.type.substring
(0,5)==="touch"),bd.watchKeys(),a.stopPropagation(),a.preventDefault(),!1}function x(a){_.setCurrent(a),bb.update()}function y(){var b=a("<div></div>").addClass(j("tracker"));return g&&b.css({opacity:0,backgroundColor:"white"}),b}function be(a){G.removeClass().addClass(j("holder")).addClass(a)}function bf(a,b){function t(){window.setTimeout(u,l)}var c=a[0]/T,e=a[1]/U,f=a[2]/T,g=a[3]/U;if(X)return;var h=_.flipCoords(c,e,f,g),i=_.getFixed(),j=[i.x,i.y,i.x2,i.y2],k=j,l=d.animationDelay,m=h[0]-j[0],n=h[1]-j[1],o=h[2]-j[2],p=h[3]-j[3],q=0,r=d.swingSpeed;c=k[0],e=k[1],f=k[2],g=k[3],bb.animMode(!0);var s,u=function(){return function(){q+=(100-q)/r,k[0]=Math.round(c+q/100*m),k[1]=Math.round(e+q/100*n),k[2]=Math.round(f+q/100*o),k[3]=Math.round(g+q/100*p),q>=99.8&&(q=100),q<100?(bh(k),t()):(bb.done(),bb.animMode(!1),typeof b=="function"&&b.call(bs))}}();t()}function bg(a){bh([a[0]/T,a[1]/U,a[2]/T,a[3]/U]),d.onSelect.call(bs,u(_.getFixed())),bb.enableHandles()}function bh(a){_.setPressed([a[0],a[1]]),_.setCurrent([a[2],
a[3]]),bb.update()}function bi(){return u(_.getFixed())}function bj(){return _.getFixed()}function bk(a){n(a),br()}function bl(){d.disabled=!0,bb.disableHandles(),bb.setCursor("default"),bc.setCursor("default")}function bm(){d.disabled=!1,br()}function bn(){bb.done(),bc.activateHandlers(null,null)}function bo(){G.remove(),A.show(),A.css("visibility","visible"),a(b).removeData("Jcrop")}function bp(a,b){bb.release(),bl();var c=new Image;c.onload=function(){var e=c.width,f=c.height,g=d.boxWidth,h=d.boxHeight;D.width(e).height(f),D.attr("src",a),H.attr("src",a),t(D,g,h),E=D.width(),F=D.height(),H.width(E).height(F),M.width(E+L*2).height(F+L*2),G.width(E).height(F),ba.resize(E,F),bm(),typeof b=="function"&&b.call(bs)},c.src=a}function bq(a,b,c){var e=b||d.bgColor;d.bgFade&&k()&&d.fadeTime&&!c?a.animate({backgroundColor:e},{queue:!1,duration:d.fadeTime}):a.css("backgroundColor",e)}function br(a){d.allowResize?a?bb.enableOnly():bb.enableHandles():bb.disableHandles(),bc.setCursor(d.allowSelect?"crosshair":"default"),bb
.setCursor(d.allowMove?"move":"default"),d.hasOwnProperty("trueSize")&&(T=d.trueSize[0]/E,U=d.trueSize[1]/F),d.hasOwnProperty("setSelect")&&(bg(d.setSelect),bb.done(),delete d.setSelect),ba.refresh(),d.bgColor!=N&&(bq(d.shade?ba.getShades():G,d.shade?d.shadeColor||d.bgColor:d.bgColor),N=d.bgColor),O!=d.bgOpacity&&(O=d.bgOpacity,d.shade?ba.refresh():bb.setBgOpacity(O)),P=d.maxSize[0]||0,Q=d.maxSize[1]||0,R=d.minSize[0]||0,S=d.minSize[1]||0,d.hasOwnProperty("outerImage")&&(D.attr("src",d.outerImage),delete d.outerImage),bb.refresh()}var d=a.extend({},a.Jcrop.defaults),e,f=navigator.userAgent.toLowerCase(),g=/msie/.test(f),h=/msie [1-6]\./.test(f);typeof b!="object"&&(b=a(b)[0]),typeof c!="object"&&(c={}),n(c);var z={border:"none",visibility:"visible",margin:0,padding:0,position:"absolute",top:0,left:0},A=a(b),B=!0;if(b.tagName=="IMG"){if(A[0].width!=0&&A[0].height!=0)A.width(A[0].width),A.height(A[0].height);else{var C=new Image;C.src=A[0].src,A.width(C.width),A.height(C.height)}var D=A.clone().removeAttr("id").
css(z).show();D.width(A.width()),D.height(A.height()),A.after(D).hide()}else D=A.css(z).show(),B=!1,d.shade===null&&(d.shade=!0);t(D,d.boxWidth,d.boxHeight);var E=D.width(),F=D.height(),G=a("<div />").width(E).height(F).addClass(j("holder")).css({position:"relative",backgroundColor:d.bgColor}).insertAfter(A).append(D);d.addClass&&G.addClass(d.addClass);var H=a("<div />"),I=a("<div />").width("100%").height("100%").css({zIndex:310,position:"absolute",overflow:"hidden"}),J=a("<div />").width("100%").height("100%").css("zIndex",320),K=a("<div />").css({position:"absolute",zIndex:600}).dblclick(function(){var a=_.getFixed();d.onDblClick.call(bs,a)}).insertBefore(D).append(I,J);B&&(H=a("<img />").attr("src",D.attr("src")).css(z).width(E).height(F),I.append(H)),h&&K.css({overflowY:"hidden"});var L=d.boundary,M=y().width(E+L*2).height(F+L*2).css({position:"absolute",top:i(-L),left:i(-L),zIndex:290}).mousedown(w),N=d.bgColor,O=d.bgOpacity,P,Q,R,S,T,U,V=!0,W,X,Y;e=l(D);var Z=function(){function a(){var a={},b=["touchstart"
,"touchmove","touchend"],c=document.createElement("div"),d;try{for(d=0;d<b.length;d++){var e=b[d];e="on"+e;var f=e in c;f||(c.setAttribute(e,"return;"),f=typeof c[e]=="function"),a[b[d]]=f}return a.touchstart&&a.touchend&&a.touchmove}catch(g){return!1}}function b(){return d.touchSupport===!0||d.touchSupport===!1?d.touchSupport:a()}return{createDragger:function(a){return function(b){return d.disabled?!1:a==="move"&&!d.allowMove?!1:(e=l(D),W=!0,o(a,m(Z.cfilter(b)),!0),b.stopPropagation(),b.preventDefault(),!1)}},newSelection:function(a){return w(Z.cfilter(a))},cfilter:function(a){return a.pageX=a.originalEvent.changedTouches[0].pageX,a.pageY=a.originalEvent.changedTouches[0].pageY,a},isSupported:a,support:b()}}(),_=function(){function h(d){d=n(d),c=a=d[0],e=b=d[1]}function i(a){a=n(a),f=a[0]-c,g=a[1]-e,c=a[0],e=a[1]}function j(){return[f,g]}function k(d){var f=d[0],g=d[1];0>a+f&&(f-=f+a),0>b+g&&(g-=g+b),F<e+g&&(g+=F-(e+g)),E<c+f&&(f+=E-(c+f)),a+=f,c+=f,b+=g,e+=g}function l(a){var b=m();switch(a){case"ne":return[
b.x2,b.y];case"nw":return[b.x,b.y];case"se":return[b.x2,b.y2];case"sw":return[b.x,b.y2]}}function m(){if(!d.aspectRatio)return p();var f=d.aspectRatio,g=d.minSize[0]/T,h=d.maxSize[0]/T,i=d.maxSize[1]/U,j=c-a,k=e-b,l=Math.abs(j),m=Math.abs(k),n=l/m,r,s,t,u;return h===0&&(h=E*10),i===0&&(i=F*10),n<f?(s=e,t=m*f,r=j<0?a-t:t+a,r<0?(r=0,u=Math.abs((r-a)/f),s=k<0?b-u:u+b):r>E&&(r=E,u=Math.abs((r-a)/f),s=k<0?b-u:u+b)):(r=c,u=l/f,s=k<0?b-u:b+u,s<0?(s=0,t=Math.abs((s-b)*f),r=j<0?a-t:t+a):s>F&&(s=F,t=Math.abs(s-b)*f,r=j<0?a-t:t+a)),r>a?(r-a<g?r=a+g:r-a>h&&(r=a+h),s>b?s=b+(r-a)/f:s=b-(r-a)/f):r<a&&(a-r<g?r=a-g:a-r>h&&(r=a-h),s>b?s=b+(a-r)/f:s=b-(a-r)/f),r<0?(a-=r,r=0):r>E&&(a-=r-E,r=E),s<0?(b-=s,s=0):s>F&&(b-=s-F,s=F),q(o(a,b,r,s))}function n(a){return a[0]<0&&(a[0]=0),a[1]<0&&(a[1]=0),a[0]>E&&(a[0]=E),a[1]>F&&(a[1]=F),[Math.round(a[0]),Math.round(a[1])]}function o(a,b,c,d){var e=a,f=c,g=b,h=d;return c<a&&(e=c,f=a),d<b&&(g=d,h=b),[e,g,f,h]}function p(){var d=c-a,f=e-b,g;return P&&Math.abs(d)>P&&(c=d>0?a+P:a-P),Q&&Math.abs
(f)>Q&&(e=f>0?b+Q:b-Q),S/U&&Math.abs(f)<S/U&&(e=f>0?b+S/U:b-S/U),R/T&&Math.abs(d)<R/T&&(c=d>0?a+R/T:a-R/T),a<0&&(c-=a,a-=a),b<0&&(e-=b,b-=b),c<0&&(a-=c,c-=c),e<0&&(b-=e,e-=e),c>E&&(g=c-E,a-=g,c-=g),e>F&&(g=e-F,b-=g,e-=g),a>E&&(g=a-F,e-=g,b-=g),b>F&&(g=b-F,e-=g,b-=g),q(o(a,b,c,e))}function q(a){return{x:a[0],y:a[1],x2:a[2],y2:a[3],w:a[2]-a[0],h:a[3]-a[1]}}var a=0,b=0,c=0,e=0,f,g;return{flipCoords:o,setPressed:h,setCurrent:i,getOffset:j,moveOffset:k,getCorner:l,getFixed:m}}(),ba=function(){function f(a,b){e.left.css({height:i(b)}),e.right.css({height:i(b)})}function g(){return h(_.getFixed())}function h(a){e.top.css({left:i(a.x),width:i(a.w),height:i(a.y)}),e.bottom.css({top:i(a.y2),left:i(a.x),width:i(a.w),height:i(F-a.y2)}),e.right.css({left:i(a.x2),width:i(E-a.x2)}),e.left.css({width:i(a.x)})}function j(){return a("<div />").css({position:"absolute",backgroundColor:d.shadeColor||d.bgColor}).appendTo(c)}function k(){b||(b=!0,c.insertBefore(D),g(),bb.setBgOpacity(1,0,1),H.hide(),l(d.shadeColor||d.bgColor,1),bb.
isAwake()?n(d.bgOpacity,1):n(1,1))}function l(a,b){bq(p(),a,b)}function m(){b&&(c.remove(),H.show(),b=!1,bb.isAwake()?bb.setBgOpacity(d.bgOpacity,1,1):(bb.setBgOpacity(1,1,1),bb.disableHandles()),bq(G,0,1))}function n(a,e){b&&(d.bgFade&&!e?c.animate({opacity:1-a},{queue:!1,duration:d.fadeTime}):c.css({opacity:1-a}))}function o(){d.shade?k():m(),bb.isAwake()&&n(d.bgOpacity)}function p(){return c.children()}var b=!1,c=a("<div />").css({position:"absolute",zIndex:240,opacity:0}),e={top:j(),left:j().height(F),right:j().height(F),bottom:j()};return{update:g,updateRaw:h,getShades:p,setBgColor:l,enable:k,disable:m,resize:f,refresh:o,opacity:n}}(),bb=function(){function k(b){var c=a("<div />").css({position:"absolute",opacity:d.borderOpacity}).addClass(j(b));return I.append(c),c}function l(b,c){var d=a("<div />").mousedown(s(b)).css({cursor:b+"-resize",position:"absolute",zIndex:c}).addClass("ord-"+b);return Z.support&&d.bind("touchstart.jcrop",Z.createDragger(b)),J.append(d),d}function m(a){var b=d.handleSize,e=l(a,c++
).css({opacity:d.handleOpacity}).addClass(j("handle"));return b&&e.width(b).height(b),e}function n(a){return l(a,c++).addClass("jcrop-dragbar")}function o(a){var b;for(b=0;b<a.length;b++)g[a[b]]=n(a[b])}function p(a){var b,c;for(c=0;c<a.length;c++){switch(a[c]){case"n":b="hline";break;case"s":b="hline bottom";break;case"e":b="vline right";break;case"w":b="vline"}e[a[c]]=k(b)}}function q(a){var b;for(b=0;b<a.length;b++)f[a[b]]=m(a[b])}function r(a,b){d.shade||H.css({top:i(-b),left:i(-a)}),K.css({top:i(b),left:i(a)})}function t(a,b){K.width(Math.round(a)).height(Math.round(b))}function v(){var a=_.getFixed();_.setPressed([a.x,a.y]),_.setCurrent([a.x2,a.y2]),w()}function w(a){if(b)return x(a)}function x(a){var c=_.getFixed();t(c.w,c.h),r(c.x,c.y),d.shade&&ba.updateRaw(c),b||A(),a?d.onSelect.call(bs,u(c)):d.onChange.call(bs,u(c))}function z(a,c,e){if(!b&&!c)return;d.bgFade&&!e?D.animate({opacity:a},{queue:!1,duration:d.fadeTime}):D.css("opacity",a)}function A(){K.show(),d.shade?ba.opacity(O):z(O,!0),b=!0}function B
(){F(),K.hide(),d.shade?ba.opacity(1):z(1),b=!1,d.onRelease.call(bs)}function C(){h&&J.show()}function E(){h=!0;if(d.allowResize)return J.show(),!0}function F(){h=!1,J.hide()}function G(a){a?(X=!0,F()):(X=!1,E())}function L(){G(!1),v()}var b,c=370,e={},f={},g={},h=!1;d.dragEdges&&a.isArray(d.createDragbars)&&o(d.createDragbars),a.isArray(d.createHandles)&&q(d.createHandles),d.drawBorders&&a.isArray(d.createBorders)&&p(d.createBorders),a(document).bind("touchstart.jcrop-ios",function(b){a(b.currentTarget).hasClass("jcrop-tracker")&&b.stopPropagation()});var M=y().mousedown(s("move")).css({cursor:"move",position:"absolute",zIndex:360});return Z.support&&M.bind("touchstart.jcrop",Z.createDragger("move")),I.append(M),F(),{updateVisible:w,update:x,release:B,refresh:v,isAwake:function(){return b},setCursor:function(a){M.css("cursor",a)},enableHandles:E,enableOnly:function(){h=!0},showHandles:C,disableHandles:F,animMode:G,setBgOpacity:z,done:L}}(),bc=function(){function f(b){M.css({zIndex:450}),b?a(document).bind("touchmove.jcrop"
,k).bind("touchend.jcrop",l):e&&a(document).bind("mousemove.jcrop",h).bind("mouseup.jcrop",i)}function g(){M.css({zIndex:290}),a(document).unbind(".jcrop")}function h(a){return b(m(a)),!1}function i(a){return a.preventDefault(),a.stopPropagation(),W&&(W=!1,c(m(a)),bb.isAwake()&&d.onSelect.call(bs,u(_.getFixed())),g(),b=function(){},c=function(){}),!1}function j(a,d,e){return W=!0,b=a,c=d,f(e),!1}function k(a){return b(m(Z.cfilter(a))),!1}function l(a){return i(Z.cfilter(a))}function n(a){M.css("cursor",a)}var b=function(){},c=function(){},e=d.trackDocument;return e||M.mousemove(h).mouseup(i).mouseout(i),D.before(M),{activateHandlers:j,setCursor:n}}(),bd=function(){function e(){d.keySupport&&(b.show(),b.focus())}function f(a){b.hide()}function g(a,b,c){d.allowMove&&(_.moveOffset([b,c]),bb.updateVisible(!0)),a.preventDefault(),a.stopPropagation()}function i(a){if(a.ctrlKey||a.metaKey)return!0;Y=a.shiftKey?!0:!1;var b=Y?10:1;switch(a.keyCode){case 37:g(a,-b,0);break;case 39:g(a,b,0);break;case 38:g(a,0,-b);break;
case 40:g(a,0,b);break;case 27:d.allowSelect&&bb.release();break;case 9:return!0}return!1}var b=a('<input type="radio" />').css({position:"fixed",left:"-120px",width:"12px"}).addClass("jcrop-keymgr"),c=a("<div />").css({position:"absolute",overflow:"hidden"}).append(b);return d.keySupport&&(b.keydown(i).blur(f),h||!d.fixedSupport?(b.css({position:"absolute",left:"-20px"}),c.append(b).insertBefore(D)):b.insertBefore(D)),{watchKeys:e}}();Z.support&&M.bind("touchstart.jcrop",Z.newSelection),J.hide(),br(!0);var bs={setImage:bp,animateTo:bf,setSelect:bg,setOptions:bk,tellSelect:bi,tellScaled:bj,setClass:be,disable:bl,enable:bm,cancel:bn,release:bb.release,destroy:bo,focus:bd.watchKeys,getBounds:function(){return[E*T,F*U]},getWidgetSize:function(){return[E,F]},getScaleFactor:function(){return[T,U]},getOptions:function(){return d},ui:{holder:G,selection:K}};return g&&G.bind("selectstart",function(){return!1}),A.data("Jcrop",bs),bs},a.fn.Jcrop=function(b,c){var d;return this.each(function(){if(a(this).data("Jcrop")){if(
b==="api")return a(this).data("Jcrop");a(this).data("Jcrop").setOptions(b)}else this.tagName=="IMG"?a.Jcrop.Loader(this,function(){a(this).css({display:"block",visibility:"hidden"}),d=a.Jcrop(this,b),a.isFunction(c)&&c.call(d)}):(a(this).css({display:"block",visibility:"hidden"}),d=a.Jcrop(this,b),a.isFunction(c)&&c.call(d))}),this},a.Jcrop.Loader=function(b,c,d){function g(){f.complete?(e.unbind(".jcloader"),a.isFunction(c)&&c.call(f)):window.setTimeout(g,50)}var e=a(b),f=e[0];e.bind("load.jcloader",g).bind("error.jcloader",function(b){e.unbind(".jcloader"),a.isFunction(d)&&d.call(f)}),f.complete&&a.isFunction(c)&&(e.unbind(".jcloader"),c.call(f))},a.Jcrop.defaults={allowSelect:!0,allowMove:!0,allowResize:!0,trackDocument:!0,baseClass:"jcrop",addClass:null,bgColor:"black",bgOpacity:.6,bgFade:1,borderOpacity:.4,handleOpacity:1,handleSize:null,aspectRatio:0,keySupport:!0,createHandles:["n","s","e","w","nw","ne","se","sw"],createDragbars:["n","s","e","w"],createBorders:["n","s","e","w"],drawBorders:!0,dragEdges
:!0,fixedSupport:!0,touchSupport:null,shade:null,boxWidth:0,boxHeight:0,boundary:2,fadeTime:400,animationDelay:20,swingSpeed:3,minSelect:[0,0],maxSize:[0,0],minSize:[0,0],onChange:function(){},onSelect:function(){},onDblClick:function(){},onRelease:function(){}}})(jQuery);




/**
 * Isotope v1.5.14
 * An exquisite jQuery plugin for magical layouts
 * http://isotope.metafizzy.co
 *
 * Commercial use requires one-time license fee
 * http://metafizzy.co/#licenses
 *
 * Copyright 2012 David DeSandro / Metafizzy
 */
(function(a,b,c){"use strict";var d=a.document,e=a.Modernizr,f=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},g="Moz Webkit O Ms".split(" "),h=function(a){var b=d.documentElement.style,c;if(typeof b[a]=="string")return a;a=f(a);for(var e=0,h=g.length;e<h;e++){c=g[e]+a;if(typeof b[c]=="string")return c}},i=h("transform"),j=h("transitionProperty"),k={csstransforms:function(){return!!i},csstransforms3d:function(){var a=!!h("perspective");if(a){var c=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),d="@media ("+c.join("transform-3d),(")+"modernizr)",e=b("<style>"+d+"{#modernizr{height:3px}}"+"</style>").appendTo("head"),f=b('<div id="modernizr" />').appendTo("html");a=f.height()===3,f.remove(),e.remove()}return a},csstransitions:function(){return!!j}},l;if(e)for(l in k)e.hasOwnProperty(l)||e.addTest(l,k[l]);else{e=a.Modernizr={_version:"1.6ish: miniModernizr for Isotope"};var m=" ",n;for(l in k)n=k[l](),e[l]=n,m+=" "+(n?"":"no-")+l;b("html").addClass(m)}if(e.csstransforms){var o=e.csstransforms3d?{translate:function(a){return"translate3d("+a[0]+"px, "+a[1]+"px, 0) "},scale:function(a){return"scale3d("+a+", "+a+", 1) "}}:{translate:function(a){return"translate("+a[0]+"px, "+a[1]+"px) "},scale:function(a){return"scale("+a+") "}},p=function(a,c,d){var e=b.data(a,"isoTransform")||{},f={},g,h={},j;f[c]=d,b.extend(e,f);for(g in e)j=e[g],h[g]=o[g](j);var k=h.translate||"",l=h.scale||"",m=k+l;b.data(a,"isoTransform",e),a.style[i]=m};b.cssNumber.scale=!0,b.cssHooks.scale={set:function(a,b){p(a,"scale",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.scale?d.scale:1}},b.fx.step.scale=function(a){b.cssHooks.scale.set(a.elem,a.now+a.unit)},b.cssNumber.translate=!0,b.cssHooks.translate={set:function(a,b){p(a,"translate",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.translate?d.translate:[0,0]}}}var q,r;e.csstransitions&&(q={WebkitTransitionProperty:"webkitTransitionEnd",MozTransitionProperty:"transitionend",OTransitionProperty:"oTransitionEnd",transitionProperty:"transitionEnd"}[j],r=h("transitionDuration"));var s=b.event,t;s.special.smartresize={setup:function(){b(this).bind("resize",s.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",s.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",t&&clearTimeout(t),t=setTimeout(function(){jQuery.event.handle.apply(c,d)},b==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Isotope=function(a,c,d){this.element=b(c),this._create(a),this._init(d)};var u=["width","height"],v=b(a);b.Isotope.settings={resizable:!0,layoutMode:"masonry",containerClass:"isotope",itemClass:"isotope-item",hiddenClass:"isotope-hidden",hiddenStyle:{opacity:0,scale:.001},visibleStyle:{opacity:1,scale:1},containerStyle:{position:"relative",overflow:"hidden"},animationEngine:"best-available",animationOptions:{queue:!1,duration:800},sortBy:"original-order",sortAscending:!0,resizesContainer:!0,transformsEnabled:!b.browser.opera,itemPositionDataEnabled:!1},b.Isotope.prototype={_create:function(a){this.options=b.extend({},b.Isotope.settings,a),this.styleQueue=[],this.elemCount=0;var c=this.element[0].style;this.originalStyle={};var d=u.slice(0);for(var e in this.options.containerStyle)d.push(e);for(var f=0,g=d.length;f<g;f++)e=d[f],this.originalStyle[e]=c[e]||"";this.element.css(this.options.containerStyle),this._updateAnimationEngine(),this._updateUsingTransforms();var h={"original-order":function(a,b){b.elemCount++;return b.elemCount},random:function(){return Math.random()}};this.options.getSortData=b.extend(this.options.getSortData,h),this.reloadItems(),this.offset={left:parseInt(this.element.css("padding-left"),10),top:parseInt(this.element.css("padding-top"),10)};var i=this;setTimeout(function(){i.element.addClass(i.options.containerClass)},0),this.options.resizable&&v.bind("smartresize.isotope",function(){i.resize()}),this.element.delegate("."+this.options.hiddenClass,"click",function(){return!1})},_getAtoms:function(a){var b=this.options.itemSelector,c=b?a.filter(b).add(a.find(b)):a,d={position:"absolute"};this.usingTransforms&&(d.left=0,d.top=0),c.css(d).addClass(this.options.itemClass),this.updateSortData(c,!0);return c},_init:function(a){this.$filteredAtoms=this._filter(this.$allAtoms),this._sort(),this.reLayout(a)},option:function(a){if(b.isPlainObject(a)){this.options=b.extend(!0,this.options,a);var c;for(var d in a)c="_update"+f(d),this[c]&&this[c]()}},_updateAnimationEngine:function(){var a=this.options.animationEngine.toLowerCase().replace(/[ _\-]/g,""),b;switch(a){case"css":case"none":b=!1;break;case"jquery":b=!0;break;default:b=!e.csstransitions}this.isUsingJQueryAnimation=b,this._updateUsingTransforms()},_updateTransformsEnabled:function(){this._updateUsingTransforms()},_updateUsingTransforms:function(){var a=this.usingTransforms=this.options.transformsEnabled&&e.csstransforms&&e.csstransitions&&!this.isUsingJQueryAnimation;a||(delete this.options.hiddenStyle.scale,delete this.options.visibleStyle.scale),this.getPositionStyles=a?this._translate:this._positionAbs},_filter:function(a){var b=this.options.filter===""?"*":this.options.filter;if(!b)return a;var c=this.options.hiddenClass,d="."+c,e=a.filter(d),f=e;if(b!=="*"){f=e.filter(b);var g=a.not(d).not(b).addClass(c);this.styleQueue.push({$el:g,style:this.options.hiddenStyle})}this.styleQueue.push({$el:f,style:this.options.visibleStyle}),f.removeClass(c);return a.filter(b)},updateSortData:function(a,c){var d=this,e=this.options.getSortData,f,g;a.each(function(){f=b(this),g={};for(var a in e)!c&&a==="original-order"?g[a]=b.data(this,"isotope-sort-data")[a]:g[a]=e[a](f,d);b.data(this,"isotope-sort-data",g)})},_sort:function(){var a=this.options.sortBy,b=this._getSorter,c=this.options.sortAscending?1:-1,d=function(d,e){var f=b(d,a),g=b(e,a);f===g&&a!=="original-order"&&(f=b(d,"original-order"),g=b(e,"original-order"));return(f>g?1:f<g?-1:0)*c};this.$filteredAtoms.sort(d)},_getSorter:function(a,c){return b.data(a,"isotope-sort-data")[c]},_translate:function(a,b){return{translate:[a,b]}},_positionAbs:function(a,b){return{left:a,top:b}},_pushPosition:function(a,b,c){b=Math.round(b+this.offset.left),c=Math.round(c+this.offset.top);var d=this.getPositionStyles(b,c);this.styleQueue.push({$el:a,style:d}),this.options.itemPositionDataEnabled&&a.data("isotope-item-position",{x:b,y:c})},layout:function(a,b){var c=this.options.layoutMode;this["_"+c+"Layout"](a);if(this.options.resizesContainer){var d=this["_"+c+"GetContainerSize"]();this.styleQueue.push({$el:this.element,style:d})}this._processStyleQueue(a,b),this.isLaidOut=!0},_processStyleQueue:function(a,c){var d=this.isLaidOut?this.isUsingJQueryAnimation?"animate":"css":"css",f=this.options.animationOptions,g=this.options.onLayout,h,i,j,k;i=function(a,b){b.$el[d](b.style,f)};if(this._isInserting&&this.isUsingJQueryAnimation)i=function(a,b){h=b.$el.hasClass("no-transition")?"css":d,b.$el[h](b.style,f)};else if(c||g||f.complete){var l=!1,m=[c,g,f.complete],n=this;j=!0,k=function(){if(!l){var b;for(var c=0,d=m.length;c<d;c++)b=m[c],typeof b=="function"&&b.call(n.element,a);l=!0}};if(this.isUsingJQueryAnimation&&d==="animate")f.complete=k,j=!1;else if(e.csstransitions){var o=0,p=this.styleQueue[0].$el,s;while(!p.length){s=this.styleQueue[o++];if(!s)return;p=s.$el}var t=parseFloat(getComputedStyle(p[0])[r]);t>0&&(i=function(a,b){b.$el[d](b.style,f).one(q,k)},j=!1)}}b.each(this.styleQueue,i),j&&k(),this.styleQueue=[]},resize:function(){this["_"+this.options.layoutMode+"ResizeChanged"]()&&this.reLayout()},reLayout:function(a){this["_"+this.options.layoutMode+"Reset"](),this.layout(this.$filteredAtoms,a)},addItems:function(a,b){var c=this._getAtoms(a);this.$allAtoms=this.$allAtoms.add(c),b&&b(c)},insert:function(a,b){this.element.append(a);var c=this;this.addItems(a,function(a){var d=c._filter(a);c._addHideAppended(d),c._sort(),c.reLayout(),c._revealAppended(d,b)})},appended:function(a,b){var c=this;this.addItems(a,function(a){c._addHideAppended(a),c.layout(a),c._revealAppended(a,b)})},_addHideAppended:function(a){this.$filteredAtoms=this.$filteredAtoms.add(a),a.addClass("no-transition"),this._isInserting=!0,this.styleQueue.push({$el:a,style:this.options.hiddenStyle})},_revealAppended:function(a,b){var c=this;setTimeout(function(){a.removeClass("no-transition"),c.styleQueue.push({$el:a,style:c.options.visibleStyle}),c._isInserting=!1,c._processStyleQueue(a,b)},10)},reloadItems:function(){this.$allAtoms=this._getAtoms(this.element.children())},remove:function(a,b){var c=this,d=function(){c.$allAtoms=c.$allAtoms.not(a),a.remove()};a.filter(":not(."+this.options.hiddenClass+")").length?(this.styleQueue.push({$el:a,style:this.options.hiddenStyle}),this.$filteredAtoms=this.$filteredAtoms.not(a),this._sort(),this.reLayout(d,b)):(d(),b&&b.call(this.element))},shuffle:function(a){this.updateSortData(this.$allAtoms),this.options.sortBy="random",this._sort(),this.reLayout(a)},destroy:function(){var a=this.usingTransforms,b=this.options;this.$allAtoms.removeClass(b.hiddenClass+" "+b.itemClass).each(function(){var b=this.style;b.position="",b.top="",b.left="",b.opacity="",a&&(b[i]="")});var c=this.element[0].style;for(var d in this.originalStyle)c[d]=this.originalStyle[d];this.element.unbind(".isotope").undelegate("."+b.hiddenClass,"click").removeClass(b.containerClass).removeData("isotope"),v.unbind(".isotope")},_getSegments:function(a){var b=this.options.layoutMode,c=a?"rowHeight":"columnWidth",d=a?"height":"width",e=a?"rows":"cols",g=this.element[d](),h,i=this.options[b]&&this.options[b][c]||this.$filteredAtoms["outer"+f(d)](!0)||g;h=Math.floor(g/i),h=Math.max(h,1),this[b][e]=h,this[b][c]=i},_checkIfSegmentsChanged:function(a){var b=this.options.layoutMode,c=a?"rows":"cols",d=this[b][c];this._getSegments(a);return this[b][c]!==d},_masonryReset:function(){this.masonry={},this._getSegments();var a=this.masonry.cols;this.masonry.colYs=[];while(a--)this.masonry.colYs.push(0)},_masonryLayout:function(a){var c=this,d=c.masonry;a.each(function(){var a=b(this),e=Math.ceil(a.outerWidth(!0)/d.columnWidth);e=Math.min(e,d.cols);if(e===1)c._masonryPlaceBrick(a,d.colYs);else{var f=d.cols+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.colYs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryPlaceBrick(a,g)}})},_masonryPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=this.masonry.columnWidth*d,h=c;this._pushPosition(a,g,h);var i=c+a.outerHeight(!0),j=this.masonry.cols+1-f;for(e=0;e<j;e++)this.masonry.colYs[d+e]=i},_masonryGetContainerSize:function(){var a=Math.max.apply(Math,this.masonry.colYs);return{height:a}},_masonryResizeChanged:function(){return this._checkIfSegmentsChanged()},_fitRowsReset:function(){this.fitRows={x:0,y:0,height:0}},_fitRowsLayout:function(a){var c=this,d=this.element.width(),e=this.fitRows;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.x!==0&&f+e.x>d&&(e.x=0,e.y=e.height),c._pushPosition(a,e.x,e.y),e.height=Math.max(e.y+g,e.height),e.x+=f})},_fitRowsGetContainerSize:function(){return{height:this.fitRows.height}},_fitRowsResizeChanged:function(){return!0},_cellsByRowReset:function(){this.cellsByRow={index:0},this._getSegments(),this._getSegments(!0)},_cellsByRowLayout:function(a){var c=this,d=this.cellsByRow;a.each(function(){var a=b(this),e=d.index%d.cols,f=Math.floor(d.index/d.cols),g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByRowGetContainerSize:function(){return{height:Math.ceil(this.$filteredAtoms.length/this.cellsByRow.cols)*this.cellsByRow.rowHeight+this.offset.top}},_cellsByRowResizeChanged:function(){return this._checkIfSegmentsChanged()},_straightDownReset:function(){this.straightDown={y:0}},_straightDownLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,0,c.straightDown.y),c.straightDown.y+=d.outerHeight(!0)})},_straightDownGetContainerSize:function(){return{height:this.straightDown.y}},_straightDownResizeChanged:function(){return!0},_masonryHorizontalReset:function(){this.masonryHorizontal={},this._getSegments(!0);var a=this.masonryHorizontal.rows;this.masonryHorizontal.rowXs=[];while(a--)this.masonryHorizontal.rowXs.push(0)},_masonryHorizontalLayout:function(a){var c=this,d=c.masonryHorizontal;a.each(function(){var a=b(this),e=Math.ceil(a.outerHeight(!0)/d.rowHeight);e=Math.min(e,d.rows);if(e===1)c._masonryHorizontalPlaceBrick(a,d.rowXs);else{var f=d.rows+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.rowXs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryHorizontalPlaceBrick(a,g)}})},_masonryHorizontalPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=c,h=this.masonryHorizontal.rowHeight*d;this._pushPosition(a,g,h);var i=c+a.outerWidth(!0),j=this.masonryHorizontal.rows+1-f;for(e=0;e<j;e++)this.masonryHorizontal.rowXs[d+e]=i},_masonryHorizontalGetContainerSize:function(){var a=Math.max.apply(Math,this.masonryHorizontal.rowXs);return{width:a}},_masonryHorizontalResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_fitColumnsReset:function(){this.fitColumns={x:0,y:0,width:0}},_fitColumnsLayout:function(a){var c=this,d=this.element.height(),e=this.fitColumns;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.y!==0&&g+e.y>d&&(e.x=e.width,e.y=0),c._pushPosition(a,e.x,e.y),e.width=Math.max(e.x+f,e.width),e.y+=g})},_fitColumnsGetContainerSize:function(){return{width:this.fitColumns.width}},_fitColumnsResizeChanged:function(){return!0},_cellsByColumnReset:function(){this.cellsByColumn={index:0},this._getSegments(),this._getSegments(!0)},_cellsByColumnLayout:function(a){var c=this,d=this.cellsByColumn;a.each(function(){var a=b(this),e=Math.floor(d.index/d.rows),f=d.index%d.rows,g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByColumnGetContainerSize:function(){return{width:Math.ceil(this.$filteredAtoms.length/this.cellsByColumn.rows)*this.cellsByColumn.columnWidth}},_cellsByColumnResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_straightAcrossReset:function(){this.straightAcross={x:0}},_straightAcrossLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,c.straightAcross.x,0),c.straightAcross.x+=d.outerWidth(!0)})},_straightAcrossGetContainerSize:function(){return{width:this.straightAcross.x}},_straightAcrossResizeChanged:function(){return!0}},b.fn.imagesLoaded=function(a){function i(a){var c=a.target;c.src!==f&&b.inArray(c,g)===-1&&(g.push(c),--e<=0&&(setTimeout(h),d.unbind(".imagesLoaded",i)))}function h(){a.call(c,d)}var c=this,d=c.find("img").add(c.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",g=[];e||h(),d.bind("load.imagesLoaded error.imagesLoaded",i).each(function(){var a=this.src;this.src=f,this.src=a});return c};var w=function(b){a.console&&a.console.error(b)};b.fn.isotope=function(a,c){if(typeof a=="string"){var d=Array.prototype.slice.call(arguments,1);this.each(function(){var c=b.data(this,"isotope");if(!c)w("cannot call methods on isotope prior to initialization; attempted to call method '"+a+"'");else{if(!b.isFunction(c[a])||a.charAt(0)==="_"){w("no such method '"+a+"' for isotope instance");return}c[a].apply(c,d)}})}else this.each(function(){var d=b.data(this,"isotope");d?(d.option(a),d._init(c)):b.data(this,"isotope",new b.Isotope(a,this,c))});return this}})(window,jQuery);


/*!
 * Nestable jQuery Plugin - Copyright (c) 2012 David Bushell - http://dbushell.com/
 * Dual-licensed under the BSD or MIT licenses
 */
!function(t,e,s,i){function a(s,i){this.w=t(e),this.el=t(s),this.options=t.extend({},h,i),this.init()}var o="ontouchstart"in e,n=function(){var t=s.createElement("div"),i=s.documentElement;if(!("pointerEvents"in t.style))return!1;t.style.pointerEvents="auto",t.style.pointerEvents="x",i.appendChild(t);var a=e.getComputedStyle&&"auto"===e.getComputedStyle(t,"").pointerEvents;return i.removeChild(t),!!a}(),l=o?"touchstart":"mousedown",d=o?"touchmove":"mousemove",r=o?"touchend":"mouseup";eCancel=o?"touchcancel":"mouseup";var h={listNodeName:"ol",itemNodeName:"li",rootClass:"dd",listClass:"dd-list",itemClass:"dd-item",dragClass:"dd-dragel",handleClass:"dd-handle",collapsedClass:"dd-collapsed",placeClass:"dd-placeholder",noDragClass:"dd-nodrag",emptyClass:"dd-empty",expandBtnHTML:'<button data-action="expand" type="button">Expand</button>',collapseBtnHTML:'<button data-action="collapse" type="button">Collapse</button>',group:0,maxDepth:5,threshold:20};a.prototype={init:function(){var s=this;s.reset(),s.el.data("nestable-group",this.options.group),s.placeEl=t('<div class="'+s.options.placeClass+'"/>'),t.each(this.el.find(s.options.itemNodeName),function(e,i){s.setParent(t(i))}),s.el.on("click","button",function(e){if(!s.dragEl&&(o||0===e.button)){var i=t(e.currentTarget),a=i.data("action"),n=i.parent(s.options.itemNodeName);"collapse"===a&&s.collapseItem(n),"expand"===a&&s.expandItem(n)}});var i=function(e){var i=t(e.target);if(!i.hasClass(s.options.handleClass)){if(i.closest("."+s.options.noDragClass).length)return;i=i.closest("."+s.options.handleClass)}!i.length||s.dragEl||!o&&0!==e.button||o&&1!==e.touches.length||(e.preventDefault(),s.dragStart(o?e.touches[0]:e))},a=function(t){s.dragEl&&(t.preventDefault(),s.dragMove(o?t.touches[0]:t))},n=function(t){s.dragEl&&(t.preventDefault(),s.dragStop(o?t.touches[0]:t))};o?(s.el[0].addEventListener(l,i,!1),e.addEventListener(d,a,!1),e.addEventListener(r,n,!1),e.addEventListener(eCancel,n,!1)):(s.el.on(l,i),s.w.on(d,a),s.w.on(r,n))},serialize:function(){var e,s=0,i=this;return step=function(e,s){var a=[],o=e.children(i.options.itemNodeName);return o.each(function(){var e=t(this),o=t.extend({},e.data()),n=e.children(i.options.listNodeName);n.length&&(o.children=step(n,s+1)),a.push(o)}),a},e=step(i.el.find(i.options.listNodeName).first(),s)},serialise:function(){return this.serialize()},reset:function(){this.mouse={offsetX:0,offsetY:0,startX:0,startY:0,lastX:0,lastY:0,nowX:0,nowY:0,distX:0,distY:0,dirAx:0,dirX:0,dirY:0,lastDirX:0,lastDirY:0,distAxX:0,distAxY:0},this.moving=!1,this.dragEl=null,this.dragRootEl=null,this.dragDepth=0,this.hasNewRoot=!1,this.pointEl=null},expandItem:function(t){t.removeClass(this.options.collapsedClass),t.children('[data-action="expand"]').hide(),t.children('[data-action="collapse"]').show(),t.children(this.options.listNodeName).show()},collapseItem:function(t){var e=t.children(this.options.listNodeName);e.length&&(t.addClass(this.options.collapsedClass),t.children('[data-action="collapse"]').hide(),t.children('[data-action="expand"]').show(),t.children(this.options.listNodeName).hide())},expandAll:function(){var e=this;e.el.find(e.options.itemNodeName).each(function(){e.expandItem(t(this))})},collapseAll:function(){var e=this;e.el.find(e.options.itemNodeName).each(function(){e.collapseItem(t(this))})},setParent:function(e){e.children(this.options.listNodeName).length&&(e.prepend(t(this.options.expandBtnHTML)),e.prepend(t(this.options.collapseBtnHTML))),e.children('[data-action="expand"]').hide()},unsetParent:function(t){t.removeClass(this.options.collapsedClass),t.children("[data-action]").remove(),t.children(this.options.listNodeName).remove()},dragStart:function(e){var a=this.mouse,o=t(e.target),n=o.closest(this.options.itemNodeName);this.placeEl.css("height",n.height()),a.offsetX=e.offsetX!==i?e.offsetX:e.pageX-o.offset().left,a.offsetY=e.offsetY!==i?e.offsetY:e.pageY-o.offset().top,a.startX=a.lastX=e.pageX,a.startY=a.lastY=e.pageY,this.dragRootEl=this.el,this.dragEl=t(s.createElement(this.options.listNodeName)).addClass(this.options.listClass+" "+this.options.dragClass),this.dragEl.css("width",n.width()),n.after(this.placeEl),n[0].parentNode.removeChild(n[0]),n.appendTo(this.dragEl),t(s.body).append(this.dragEl),this.dragEl.css({left:e.pageX-a.offsetX,top:e.pageY-a.offsetY});var l,d,r=this.dragEl.find(this.options.itemNodeName);for(l=0;l<r.length;l++)d=t(r[l]).parents(this.options.listNodeName).length,d>this.dragDepth&&(this.dragDepth=d)},dragStop:function(){var t=this.dragEl.children(this.options.itemNodeName).first();t[0].parentNode.removeChild(t[0]),this.placeEl.replaceWith(t),this.dragEl.remove(),this.el.trigger("change"),this.hasNewRoot&&this.dragRootEl.trigger("change"),this.reset()},dragMove:function(i){var a,o,l,d,r,h=this.options,p=this.mouse;this.dragEl.css({left:i.pageX-p.offsetX,top:i.pageY-p.offsetY}),p.lastX=p.nowX,p.lastY=p.nowY,p.nowX=i.pageX,p.nowY=i.pageY,p.distX=p.nowX-p.lastX,p.distY=p.nowY-p.lastY,p.lastDirX=p.dirX,p.lastDirY=p.dirY,p.dirX=0===p.distX?0:p.distX>0?1:-1,p.dirY=0===p.distY?0:p.distY>0?1:-1;var c=Math.abs(p.distX)>Math.abs(p.distY)?1:0;if(!p.moving)return p.dirAx=c,p.moving=!0,void 0;p.dirAx!==c?(p.distAxX=0,p.distAxY=0):(p.distAxX+=Math.abs(p.distX),0!==p.dirX&&p.dirX!==p.lastDirX&&(p.distAxX=0),p.distAxY+=Math.abs(p.distY),0!==p.dirY&&p.dirY!==p.lastDirY&&(p.distAxY=0)),p.dirAx=c,p.dirAx&&p.distAxX>=h.threshold&&(p.distAxX=0,l=this.placeEl.prev(h.itemNodeName),p.distX>0&&l.length&&!l.hasClass(h.collapsedClass)&&(a=l.find(h.listNodeName).last(),r=this.placeEl.parents(h.listNodeName).length,r+this.dragDepth<=h.maxDepth&&(a.length?(a=l.children(h.listNodeName).last(),a.append(this.placeEl)):(a=t("<"+h.listNodeName+"/>").addClass(h.listClass),a.append(this.placeEl),l.append(a),this.setParent(l)))),p.distX<0&&(d=this.placeEl.next(h.itemNodeName),d.length||(o=this.placeEl.parent(),this.placeEl.closest(h.itemNodeName).after(this.placeEl),o.children().length||this.unsetParent(o.parent()))));var g=!1;if(n||(this.dragEl[0].style.visibility="hidden"),this.pointEl=t(s.elementFromPoint(i.pageX-s.body.scrollLeft,i.pageY-(e.pageYOffset||s.documentElement.scrollTop))),n||(this.dragEl[0].style.visibility="visible"),this.pointEl.hasClass(h.handleClass)&&(this.pointEl=this.pointEl.parent(h.itemNodeName)),this.pointEl.hasClass(h.emptyClass))g=!0;else if(!this.pointEl.length||!this.pointEl.hasClass(h.itemClass))return;var f=this.pointEl.closest("."+h.rootClass),m=this.dragRootEl.data("nestable-id")!==f.data("nestable-id");if(!p.dirAx||m||g){if(m&&h.group!==f.data("nestable-group"))return;if(r=this.dragDepth-1+this.pointEl.parents(h.listNodeName).length,r>h.maxDepth)return;var u=i.pageY<this.pointEl.offset().top+this.pointEl.height()/2;o=this.placeEl.parent(),g?(a=t(s.createElement(h.listNodeName)).addClass(h.listClass),a.append(this.placeEl),this.pointEl.replaceWith(a)):u?this.pointEl.before(this.placeEl):this.pointEl.after(this.placeEl),o.children().length||this.unsetParent(o.parent()),this.dragRootEl.find(h.itemNodeName).length||this.dragRootEl.append('<div class="'+h.emptyClass+'"/>'),m&&(this.dragRootEl=f,this.hasNewRoot=this.el[0]!==this.dragRootEl[0])}}},t.fn.nestable=function(e){var s=this,i=this;return s.each(function(){var s=t(this).data("nestable");s?"string"==typeof e&&"function"==typeof s[e]&&(i=s[e]()):(t(this).data("nestable",new a(this,e)),t(this).data("nestable-id",(new Date).getTime()))}),i||s}}(window.jQuery||window.Zepto,window,document);
    $(function() {
			   
		//////////     MOBILE CHECK    //////////   
		var iOS = /(iPad|iPhone|iPod)/g.test( navigator.userAgent );
		var android = /mobile|android/i.test (navigator.userAgent);
		
		if(iOS || android){
			$("html").addClass("isMobile");
			if(iOS) { $(".form-control").css("-webkit-appearance","caret"); }
			$("select.input-sm,select.input-lg ").css("line-height","1.3");
		 }
		 
		 
		//////////     CAPLET COLOR    //////////
		var cepletColor=({ 
			"primary":"#0090d9",
			"info":"#B5D1D8",
			"success":"#2ECC71",
			"warning":"#FFCC33",
			"danger":"#E15258",
			"inverse":"#62707D",
			"theme":"#f35958",
			"theme-inverse":"#0aa699",
			"palevioletred":"#372b32" ,
			"green":"#99CC00",
			"lightseagreen":"#1ABC9B",
			"purple":"#736086",
			"darkorange":"#f9ba46",
			"pink":"#d13a7a"
		});
		$.inColor= function(value, obj) {
			var foundVal;
				$.each(obj, function(key, val) {
					if (value === key) {
						foundVal =  val;
						return;
					}
				});
			return foundVal;
		};
		$.fillColor= function(obj) {
			var inColor=$.inColor(obj.data("color") || obj.data("toolscolor") || obj.data("counter-color") , cepletColor);
			var codeColor= inColor || obj.data("color") || obj.data("toolscolor") || obj.data("counter-color") ;
			return codeColor;
		};
		$.rgbaColor=function( hex, opacity) {
		    var bigint = parseInt(hex.replace("#",""), 16),
				r = (bigint >> 16) & 255,
				g = (bigint >> 8) & 255,
				b = bigint & 255;
				if(opacity || opacity<=1){
		    			return "rgba("+r + "," + g + "," + b+","+ ( opacity || 1 )+")";
				}else{
					return "rgb("+r + "," + g + "," + b+")";
				}
		}
		
		var capletOverlay=$('<div id="caplet-overlay" />');
		$.overlay=function(opacity){
			capletOverlay.appendTo("#wrapper");
			capletOverlay.fadeTo( "slow" , opacity || 0.2 );
		}
		$.clearOverlay=function(){
			capletOverlay.fadeTo( "slow" , 0 ,function(){
				capletOverlay.remove();
			});
		}
		



		//////////     TIME AGO  FUNCTION   //////////
		var zeropad = function(num) {
			return ((num < 10) ? '0' : '') + num;
		};
		var iso8601 = function(date) {
			return date.getUTCFullYear() + "-" + zeropad(date.getUTCMonth() + 1) + "-" + zeropad(date.getUTCDate()) + "T" + zeropad(date.getUTCHours()) + ":" + zeropad(date.getUTCMinutes()) + ":" + zeropad(date.getUTCSeconds()) + "Z";
		};
		function prepareDynamicDates() {
			$('time.timeago.lasted').attr("datetime", iso8601(new Date()));
		}
		//////////     TIME AGO    //////////
		prepareDynamicDates();	
		$('time.timeago').timeago();
		
		
		
		//////////     CAPLET CLOCK    //////////
		$('div#clock').capletClock();
		
		//////////     TEXTAREA  AUTO SIZE    //////////
		$('textarea[data-height="auto"]').autosize();
		 $(".widget-write-post textarea").limit({  limit: 20 });
		 
		//////////     SELETE PICKER    //////////
		$('.selectpicker').selectpicker();
		
		//////////     INPUT MAXLENGTH    //////////
		$("input[maxlength] , textarea[maxlength] ").each(function() {
			$(this).maxlength({ bornIn:"#main" }); 
		});
		
		//////////     PRETTY PRINT CODE    //////////
		addEventListener('load', function (event) { prettyPrint() }, false);
		
		
		//////////     TAB DROP    //////////
		$('[data-provide="tabdrop"]').tabdrop();
		
		//////////     TAB NEXT    //////////
		var $tabs = $('.tabbable li');
		$('#prevtab').on('click', function() {
			$tabs.filter('.active').prev('li').find('a[data-toggle="tab"]').tab('show');
		});
		$('#nexttab').on('click', function() {
			$tabs.filter('.active').next('li').find('a[data-toggle="tab"]').tab('show');
		});
		
		
		$('#flot_view a').click(function (e) {
		  e.preventDefault()
		  $(this).tab('show')
		})


		//////////     TOP SEARCH     //////////
		$(".btn-header-search , .close-header-search").on('click',function(){
				var navSearch=$(".widget-top-search");
				navSearch.toggleClass("nav-top-search");
				if($(this).hasClass("close-header-search")){
					$.clearOverlay();
					return true;
				}
				navSearch.find("input").focus();
				$.overlay(0.4);
		});
		 
		 
		//////////     NAV AND MAIN  COLLAPSE     //////////
		 $("a.nav-collapse").on('click',function(){
				var body=$("body");
					body.toggleClass( "nav-collapse-in" );
		});
		 
		 
		//////////     MAIL  COLLAPSE     //////////
		 $(".mail-collapse").on('click',function(){
				$("#main").toggleClass( "in" );  							
		});
		//////////     MAIL FAVOURITE      //////////
		$("a.mail-favourite").click(function(){
			$(this).toggleClass( "active" );
			var star=$(this).find(".fa");
		});
		 
		 
		 
		//////////     CHAT  COLLAPSE     //////////
		$('.widget-chat .chat-collapse').on('click', function () {
            var btn=$(this), chatBody=btn.closest(".widget-chat").find(".chat-body");
			btn.find("i").toggleClass( "fa-minus" );
			btn.find("i").toggleClass( "fa-plus" );
			chatBody.slideToggle(500);
       	});	



		//////////     FULLSCREEN  TOGGLE     //////////
		$('.fullscreen').click(function() {
			toggleFullScreen();
			$(this).find("i").toggleClass( "fa-expand" );
			$(this).find("i").toggleClass( "fa-compress" );
		});
		function toggleFullScreen() {
			if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen) || (document.msRequestFullscreen !== null)) {
				if (document.documentElement.requestFullScreen) {
					document.documentElement.requestFullScreen();
				} else if (document.documentElement.mozRequestFullScreen) {
					document.documentElement.mozRequestFullScreen();
				} else if (document.documentElement.webkitRequestFullScreen) {
					document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
				}else if (document.documentElement.msRequestFullscreen) {
               			document.documentElement.msRequestFullscreen();
           			}
			} else {
				if (document.cancelFullScreen) {
					document.cancelFullScreen();
				} else if (document.mozCancelFullScreen) {
					document.mozCancelFullScreen();
				} else if (document.webkitCancelFullScreen) {
					document.webkitCancelFullScreen();
				}else if(document.msExitFullscreen){
					document.msExitFullscreen();
				}
			}
		}
		

		!(function($) {
		$.fn.capletBtn = function(options) {
				    var defaults = { };
				    var options = $.extend(defaults, options);
				    return this.each(function() {
						objBtn = $(this);
						if(objBtn.data("btn-group")=="monochromatic"){
								objBtn.each(function(i) {
									var group=$(this),
									fontColor, 
									btn=$(this).find(".btn"),
									color=$.inColor($(this).data("btn-color"), cepletColor);
									btn.each(function(i) {
										if(group.data("btn-step")==="lighten"){
											btncolor=$.xcolor.lighten( color || group.data("btn-color") || "#CCC", i == 0 ? i :  i+1 , group.data("btn-color-step") || 9);
										}else{
											btncolor= $.xcolor.darken( color || group.data("btn-color") || "#AAA",  i == 0 ? i :  i+1  ,group.data("btn-color-step") || 13) ;
										}
										$(this).css({"background-color": btncolor,"border-color":btncolor ,"color": group.data("btn-fcolor") || "#FFF" });
							
									});							   
								});
						}
						
				    });
		}
		})(jQuery)
		$('[data-btn-group="monochromatic"]').capletBtn();
		
		
		//////////     WIDGET IM      //////////
		$("a.im-delete , a.im-action").click(function(){
				imClose($(this),$(this).closest('section'));
				$(this).closest('section').toggleClass( "push-in" );
		});
		$("a.im-confirm").click(function(){
				var aClick=$(this), confirm=aClick.data("confirm"), parents=aClick.closest('li');		
				var imWrapper=aClick.closest("ul");
				var confirmClose=function(){
						parents.fadeOut(400,function(){
							$(this).remove();
							setTimeout(function () { imClose(aClick,imWrapper) }, 200); 
						});
					}
				if(confirm=="yes" || confirm=="accept"){
					confirmClose();
				}
				if(confirm=="actionNow"){
					alert("Your Action Complete !!")
					confirmClose();
				}
				if(confirm=="no" ){
					parents.find("section").toggleClass( "push-in" );
				}
		});
		var imClose=(function (el , wrapper) {
				if(el.hasClass("im-delete") || el.hasClass("im-action") ){
					el.parents('ul').find('li section').not(wrapper).removeClass("push-in");
				}
				if(el.hasClass("im-confirm")){
					var  nLi=wrapper.find('li').length;
					if(!nLi){
						wrapper.append('<li class="empty"><i class="fa fa-inbox fa-4x"></i><h5>No Result.</h5></li>');
					}
				}
		});

		
		
		
		//////////     MAP GOOGLE      //////////
		$(".mapTools").click(function(){
			$("#mapSetting").toggleClass( "active" );
		});
		$(".map-control-min").click(function(){
			$("#mapControl").toggleClass( "active" );
			$(this).find("i").toggleClass( "fa-chevron-down" );
			$(this).find("i").toggleClass( "fa-chevron-up" );
		});
		//Map Collapse
		$('a[data-toggle="collapse"]').click(function(){
				var caret=$(this).find(".collapse-caret");
				caret.toggleClass( "fa-angle-down" );
				caret.toggleClass( "fa-angle-up" );
		}); 
		
		$(".slide-trash").click(function(){
			$("#slide-trash").toggleClass( "active" );
		});
		
		

		//////////     PROGRESS BAR      //////////
		$('.progress-tooltip .progress-bar').progressbar({ display_text: 'tooltip' });
		$('.progress-bar').progressbar();
		
		
		//////////     TOOLTIP AND POPOVER     //////////
		$('.tooltip-area .btn').tooltip();
		$('.tooltip-area a[data-toggle="tooltip"]').tooltip();
		$('.popover-area [data-toggle="popover"]').popover();
		$('.popover-area-hover [data-toggle="popover"]').popover({ trigger:"hover" });
		
		

		//////////     OFF CANVAS MENU      //////////
		// Menu right
		var navRight=$('nav#menu-right');
		navRight.mmenu({
			position	: 'right',
			counters	: true,
			searchfield	: {
				add					: true,
				search				: true,
				showLinksOnly		: false,
			}
		});
		// Menu Left
		var navMenu=$("nav#menu");
		navMenu.each(function(i) {
				var nav=$(this), data=nav.data();
				nav.mmenu({
					searchfield   :  data.search ? false : true,	
					slidingSubmenus	: true
				}).on( "closing.mm", function(){
					var highest=$(this).find("ul.mm-highest");
					highest.find(".mm-subclose").trigger('click');
					setTimeout(function () { closeSub() }, 200);
				});
		});
		
		$(".nav-mini").on('click',function(){
			$("body").toggleClass( "in" );  	
			closeSub();
			if($(window).width() < 991 ){
				navMenu.trigger( 'open.mm' );
			}
		});
		
		// function Auto close sub menu
		function closeSub(){
			if(navMenu.hasClass("mm-vertical")){
				navMenu.find("li").each(function(i) {
					$(this).removeClass("mm-opened");	
				});
			}else{
				navMenu.find("ul").each(function(i) {
					if(i==0){
						$(this).removeClass("mm-subopened , mm-hidden").addClass("mm-current");	
					}else{
						$(this).removeClass("mm-opened , mm-subopened , mm-current  , mm-highest").addClass("mm-hidden");						
					}	
				});
			}
		}
		
		//////////     TOGGLE  OPEN LEFT CANVAS MENU      //////////
		$("body").append('<div class="toggle-menu"/>');
		$('body').on("click",".toggle-menu",function( e ) {
				e.stopImmediatePropagation();
				e.preventDefault();
				$('nav#menu').trigger( 'open.mm' );
		});
		
		
		//////////     TOUCH TO OPEN CANVAS MENU      //////////
		$('li[data-counter-color]').each(function(i) {
			var counter=$(this).find("em.mm-counter");
			counter.css({"background-color":$.fillColor($(this)),"color":"#FFF" });
		});
		
		
		//////////     TOUCH TO OPEN CANVAS MENU      //////////
		var nav=document.getElementById("nav");
		if(nav){
			var wrapper= Hammer( nav );
			 wrapper.on("dragright", function(event) {	// hold , tap, doubletap ,dragright ,swipe, swipeup, swipedown, swipeleft, swiperight
				if((event.gesture.deltaY<=7 && event.gesture.deltaY>=-7) && event.gesture.deltaX >100){
					$('nav#menu').trigger( 'open.mm' );
				}
			 });
			 wrapper.on("dragleft", function(event) {
				if((event.gesture.deltaY<=5 && event.gesture.deltaY>=-5) && event.gesture.deltaX <-100){
					$('nav#contact-right').trigger( 'open.mm' );
				}
			 });
		}
		
		//////////     TIME LINE    //////////
		$(".widget-timeline").capletTimeline();
	
	
		//////////     CORNER FLIP    //////////
		$(".corner-flip").each(function(i) {
			$(this).append('<div class="flip" />');
		}); 
	


		//////////     HORIZONTAL FORM  AUTO GENERENT COLUMN       //////////
		$(".form-horizontal").each(function() {
			var form=$(this) ,data=$(this).data(), colClass= "col-"+( data.col || "md" ), coldiv="" ,
			colOffset=colClass+"-offset-", labelClass=colClass +"-"+( data.collabel || "2" );
			 if(data.collabel){
				 coldiv=12-parseInt(data.collabel);
			}
			var divClass=colClass +"-"+( coldiv || "10" );
			$(this).find(".form-group").each(function(i) {
				$div=$(this).find("div").eq(0);
				$label=$(this).find("label.control-label");
				if($(this).hasClass("offset")){
					$div.addClass(colOffset+(data.collabel || "2"));
				}
				 if(data.alignlabel){
					 $label.css("text-align",data.alignlabel);
				}
				 if(data.label){
					 form.addClass('labelcustomize');
					 $text=$label.html();
					 $label.html("").append('<span class="'+data.label+'">'+$text+'</span>');
					 $label.find("span.icon").css({"border-color": data.colorlabel || "#EEE" });
				}
				if(!$(this).hasClass("none")){
					$label.addClass(labelClass);
					$div.addClass(divClass);
				}
			});
			if(data.label=="icon"){
				form.append('<div class="icon '+labelClass+' '+data.alignlabel+'" />')
				form.find("div.icon").css({"border-color": data.colorlabel || "#EEE" });
			}
		});



		//////////     ICHECK     //////////
		  var createiCheck = (function() {
		  $('.iCheck').each(function(i) {
				var  data=$(this).data() , 
				 input=$(this).find("input") , 
				 li=$(this).find("li") ,
				 index="cp"+i , 
				 insert_text,
				 iCheckColor = [ "black", "red","green","blue","aero","grey","orange","yellow","pink","purple"],
				 callCheck=data.style || "flat";
			 if(data.color && data.style !=="polaris" && data.style !=="futurico" ){
					hasColor= jQuery.inArray(data.color, iCheckColor);
					if(hasColor !=-1 && hasColor < iCheckColor.length){
						callCheck=callCheck+"-"+data.color;
					}
			}
			input.each(function(i) {
				var self = $(this), label=$(this).next(), label_text=label.html();
				self.attr("id","iCheck-"+index+"-"+i);
				if(data.style=="line"){
					insert_text='<div class="icheck_line-icon"></div><span>'+label_text+'</span>';
					label.remove();
					self.iCheck({ checkboxClass: 'icheckbox_'+callCheck, radioClass: 'iradio_'+callCheck, insert:insert_text  });
				}else{
					label.attr("for","iCheck-"+index+"-"+i);
				}
			});
			if(data.style!=="line"){
				input.iCheck({ checkboxClass: 'icheckbox_'+callCheck, radioClass: 'iradio_'+callCheck });
			}else{
				li.addClass("line");
			}
		  });
		});
		createiCheck();
	
		  $('.iCheckColor li').click(function() {
		    var self = $(this);
		    if (!self.hasClass('active')) {
			 self.siblings().removeClass('active');
			 var color = self.attr('class');
			$('.iCheck').each(function(i) {
				$(this).data("color",color)		  
			});
			$('.iCheck input').iCheck('destroy');
				createiCheck();
				self.addClass('active');
		    };
		  });
	
		 $('.ios-switch .switch').each(function(i) {
				$(this).addClass("ios");
		});
		$('.ios').bootstrapSwitch('setOnLabel', '');
		$('.ios').bootstrapSwitch('setOffLabel', '');
	
	
		//////////     ICHECK     //////////
		$(".ios-switch input:checkbox").change(function(){
			var targetLabel=$(this).parents('li').find("label span")		;	
			if( $(this).is(':checked')){
				targetLabel.text("ON");
			}else{
				targetLabel.text("OFF");
			}
		});	  
	
		//////////     AJAX RECALL ICHECK     //////////
		$(".load-ajax-form").on('click', function () {
			$.ajax({
			    url: "data/icheckForm.php",
			    cache: false,
			    type: "POST",
			    dataType: 'html',
			    success: function (data) {
				    $("#showForm").html(data);
				    createiCheck();
			    }
			});
		});
	
		//////////     COLOR PICKER     //////////
		$('[data-provide="colorpicker"]').each(function(i) {
			var id="color_"+i, $this=$(this).attr("id",id), data=$(this).data(),
			submit_btn=data.inline ? 0:1;
			if(data.addon && $this.is("input")){
				$('#'+id).next().css("width",$(this).outerHeight());
			}
			$this.colpick({
				bornIn:"#main",
				flat: data.inline || false,
				submit: submit_btn,
				layout: data.layout || 'hex',
				color: $this.val() || $.xcolor.random(),
				colorScheme: data.theme || "gray",
				onChange:function(hsb,hex,rgb) {
					$('#'+id).val('#'+hex);
					if(data.addon){
						$('#'+id).css({'border-color':'#'+hex });
						$('#'+id).next().css({'background-color':'#'+hex , 'border-color':'#'+hex });
					}
				},
				onSubmit:function(hsb,hex,rgb,el) {
					$(el).val('#'+hex); 
					$(el).colpickHide();
				}
			});
		});
	
	
		//////////     COLOR PALET     //////////
		$('#colorpalette1').colorPalette().on('selectColor', function(e) {
			$('#selected-color1').val(e.color);
			$('#selected-color1').parent().find(".ico").css("color", e.color );
		});
	
		//////////     COLOR PALET  IN  ADD EVENT CALENDAR    //////////
		var cc_color= new Array();
		$.each(cepletColor, function(key,val) {
				cc_color.push(val) //put color for ceplet color
		}); 		
		$('#colorpalette_events').colorPalette({ colors:[cc_color] }).on('selectColor', function(e) {
				var data=$(this).data();
				$(data.returnColor).val(e.color);
				$(this).parents(".input-group").find(".ico").css("color", e.color );
		});
		

		//////////     DATE TIME PICKER     //////////
		$('.form_datetime').datetimepicker({
			bornIn:"#main",
			weekStart: 1,
			todayBtn:  1,
			autoclose: 1,
			todayHighlight: 1,
			startView: 2,
			forceParse: 0,
			showMeridian: 2,
			//minView: 2,
			format: "dd MM yyyy"
		});
		
		//////////     DATE TIME RANG      //////////
		$('#daterange').daterangepicker();
		$('#reportrange').daterangepicker({
				startDate: moment().subtract('days', 29),
				endDate: moment(),
				minDate: '01/01/2012',
				maxDate: '12/31/2014',
				dateLimit: { days: 60 },
				/*parentEl:"#main",*/
				timePicker: false,
				timePickerIncrement: 1,
				timePicker12Hour: true,
				ranges: {
				   'Today': [moment(), moment()],
				   'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
				   'Last 7 Days': [moment().subtract('days', 6), moment()],
				   'This Month': [moment().startOf('month'), moment().endOf('month')],
				   'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
				},
				opens: 'left',
				buttonClasses: ['btn-sm'],
				applyClass: 'btn-inverse',
				cancelClass: 'btn-inverse',
				format: 'MM/DD/YYYY',
				separator: ' to ',
				locale: {
					fromLabel: 'From',
					toLabel: 'To',
					customRangeLabel: 'Custom Range',
					daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr','Sa'],
					monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
					firstDay: 1
				}
			 },
			 function(start, end) {
			  console.log("Callback has been called!");
			  $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
			 }
		  );
		  $('#reportrange span').html(moment().subtract('days', 29).format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));
			   
		
		
		//////////     PANEL  TOOLS     //////////
/*		$(".panel-tools[data-toolscolor]").each(function(i) {
			var tools=$(this), 
				data=$(this).data(), 
				btn=$(this).find(".btn"),
				step="";
				data.colorStep  = data.colorStep || true;
				if(tools.prev().hasClass("panel-heading") && !tools.hasClass("panel-tools-mini") ){
					tools.prev().css("border","none");
				}
				if(data.toolscolor){ 
					tools.css({"background-color":$.fillColor(tools) }) ;
					tools.parent().find(".panel-body .table thead > tr > th").css("border-bottom-color", $.fillColor(tools) );
				}
				btn.each(function(i) {
					$(this).css("background-color",$.xcolor.darken( $.fillColor(tools) , data.colorStep==false? 1:i+1 ,15))	;
				});
		});*/
		$('.panel-tools .btn-collapse').on('click', function () {
            var btn=$(this), panelBody=btn.closest(".panel").find(".panel-body");
			btn.toggleClass("in");
			btn.find("i").toggleClass( "fa-sort-amount-desc" );
			btn.find("i").toggleClass( "fa-sort-amount-asc" );
			if ($(this).hasClass("in")) {
				panelBody.slideUp();
			} else {
				panelBody.slideDown();
			}
        	});	
		$('.panel-tools .btn-reload').click(function (e) {
			var  btn=$(this), panelBody=btn.closest(".panel").find(".panel-body"),
			overlay=$('<div class="load-overlay"><div><div class="c1"></div><div class="c2"></div><div class="c3"></div><div class="c4"></div></div><span>Loading...</span></div>');
			btn.removeClass("btn-panel-reload").addClass("disabled")
			panelBody.append(overlay);
			overlay.css('opacity',1).fadeIn();
			setTimeout(function () {  
				btn.removeClass("disabled").addClass("btn-panel-reload") ;
				panelBody.find(overlay).fadeOut("slow",function(){ $(this).remove() });
			}, 5000);
		});
		$(".panel-tools").on('click',".btn-close",function(){
				var panel=$(this).closest('.panel'), tools=$(this).closest('.panel-tools');
				console.log(tools)
				var confirmGroup=$('<div class="pt-confirm-group">'+'<div class=" btn-group btn-group-justified">'+'<a class="btn btn-inverse close-confirm" href="javascript:void(0)" data-confirm="accept">Yes</a>'+'<a class="btn btn-theme btn-close" href="javascript:void(0)">No.</a>'+'</div>'+'</div>');
				var blockClose=$('<div class="blockerClose">');
				tools.toggleClass( "push-in");
				if(tools.hasClass("push-in")){
					tools.append(confirmGroup);
					panel.toggleClass( "push-in");
					blockClose.appendTo("#content");
					blockClose.css({ "height":$("#content").outerHeight() }).fadeTo(400,0.5);
					console.log($("#content").outerHeight())
				}else{
					$(".blockerClose").fadeOut(200,function(){ $(this).remove() }); 
					setTimeout(function () {
						 tools.find(".pt-confirm-group").remove(); 
						 panel.toggleClass( "push-in") ;
					}, 500);  
				}	  
		});
		$(".panel-tools").on('click','.close-confirm',function(){
			$(this).closest('.panel').fadeOut(500,function(){
					$(this).remove();
					$(".blockerClose").fadeOut(200,function(){ $(this).remove() }); 
			});
		});
		 $('#content').on('click' ,'.blockerClose', function() {
			var el=$(this); 
			el.fadeOut(200,function(){ $(this).remove() }); 
			$(".panel-tools.push-in").toggleClass("push-in",function(){
				var tools=$(this);
				setTimeout(function () { 
					tools.find(".pt-confirm-group").remove();
					tools.closest('.panel').removeClass("push-in");
				}, 500);  
			});	
		 });
			
			
			
		//////////     FLOT  CHART     //////////
		var 	bars = false,
				lines = true,
				pie=false;
		var  	createFlot=function($chageType , $change){ 
					var el=$("table"+($change ? $change:".flot-chart"));
					el.each(function() {	  
							var colors = [], data = $(this).data(),
							gridColor=data.tickColor || "rgba(0,0,0,0.2)";
							$(this).find("thead th:not(:first)").each(function() {
							  colors.push($(this).css("color"));
							});
							if($chageType){
								bars = $chageType.indexOf("bars") != -1;
								lines = $chageType.indexOf("lines") != -1;
								pie = $chageType.indexOf("pie") != -1;
								$(this).next(".chart_flot").hide();
							}else{
								if(data.type){
									bars = data.type.indexOf("bars") != -1;
									lines = data.type.indexOf("lines") != -1;
									pie = data.type.indexOf("pie") != -1;
								}
							}
							$(this).graphTable({ series: 'columns', position: data.position || 'after',  width: data.width, height: data.height, colors: colors },
							{
									series: { stack: data.stack ,    pie: { show: pie , innerRadius: data.innerRadius || 0,  stroke: {  shadow: data.pieStyle=="shadow" ? true:false } , label:{ show:data.pieLabel } }, bars: { show: bars , barWidth: data.barWidth || 0.5, fill: data.fill || 1, align: "center"  } ,lines: { show: lines  , fill:0.1 , steps: data.steps } },
									xaxis: { mode:  data.mode || "categories", tickLength: 0 },
									yaxis: { tickColor: gridColor ,max:data.yaxisMax,
										tickFormatter: function number(x) {  var num; if (x >= 1000) { num=(x/1000)+"k"; }else{ num=x; } return num; }
									},  
									grid: { borderWidth: {top: 0, right: 0, bottom: 1, left: 1},color : gridColor },
									tooltip: data.toolTip=="show" ? true:false  ,
									tooltipOpts: { content: (pie ? "%p.0%, %s":"<b>%s</b> :  %y")  }
							});
					});
		}
		// Create Flot Chart
		createFlot();
		
		$(".chart-change a").click(function (e) {
				var el=$(this),data=el.data();
				el.closest(".chart-change").find("a").toggleClass("active");
				el.closest(".chart-change").find("li").toggleClass("active");
				createFlot(data.changeType,data.forId);
		});
		
		$(".label-flot-custom").each(function () {
			var el=$(this), data=el.data() ,colors = [] ,lable=[] , li="";
				$(data.flotId).find("thead th:not(:first)").each(function() {
							  colors.push($(this).css("color"));
							  lable.push($(this).text());
				});			
				for(var i=0;i<lable.length;i++){
					li += '<li><span style="background-color:'+ colors[i] +'"></span>'+ lable[i] +" ( "+$(data.flotId).find("tbody td").eq(i).text()+' ) </li> ';
				}
				el.append("<ul>"+li+"</ul>");
				if($(data.flotId).prev(".label-flot-custom-title")){
					var height=$(data.flotId).next(".chart_flot").css("height");
					$(data.flotId).prev(".label-flot-custom-title").css({"height":height, "line-height":height });
				}
		});
		


		//////////     KNOB  CHART     //////////
		$('.knob').each(function () {
			var thisKnob = $(this) , $data = $(this).data();
			$data.fgColor=$.fillColor( thisKnob ) || "#F37864";
			thisKnob.knob($data);
			if ( $data.animate ) {
				$({  value: 0 }).animate({   value: this.value }, {
					duration: 1000, easing: 'swing',
					step: function () { thisKnob.val(Math.ceil(this.value)).trigger('change'); }
				});
			}
		});
		$('.knob_save').on('click', function() {
			alert("Save  "+$("#add_item").val()+" Item");
		});
		$(".showcase-chart-knob").each(function () {
			var color='', ico=$(this).find("h5 i"),  $label=$(this).find("span"), $knob=$(this).find("input");
			$label.each(function (i) {
				if (i == 0) {
					color = $knob.attr("data-color")  || '#87CEEB' ;
				}else{
					color=$knob.attr("data-bgColor")  || '#CCC';
				}
				$(this).find("i").css("color", color );
				$(this).find("a small").css("color", color );
			});
			ico.css("margin-left",Math.ceil(-1*(ico.width()/2)));
		});
		
		
		
		//////////     SPARKLINE CHART     //////////
		$('.sparkline[data-type="bar"]').each(function () {
				var thisSpark=$(this) , $data = $(this).data();
				$data.barColor = $.fillColor( thisSpark ) || "#6CC3A0";
				$data.minSpotColor = false;
				thisSpark.sparkline($data.data || "html", $data);
		});	
		$('.sparkline[data-type="pie"]').each(function () {
				var thisSpark=$(this) , $data = $(this).data();
				$data.barColor = $.fillColor( thisSpark ) || "#6CC3A0";
				$data.minSpotColor = false;
				thisSpark.sparkline($data.data || "html", $data);
		});	
		var sparklineCreate = function($resize) {
			$('.sparkline[data-type="line"]').each(function () {
					var thisSpark=$(this) , $data = $(this).data();
					$data.lineColor = $.fillColor( thisSpark ) || "#F37864";
					$data.fillColor = $.rgbaColor( ($.fillColor( thisSpark ) || "#F37864") , 0.1 );
					$data.width = $data.width || "100%";
					$data.lineWidth = $data.lineWidth || 3;
					$(this).sparkline($data.data || "html", $data);
					if($data.compositeForm){
						var thisComposite=$($data.compositeForm);
						$comData=thisComposite.data();
						$comData.composite = true;
						$comData.lineWidth = $data.lineWidth || 3;
						$comData.lineColor = $.fillColor( thisComposite ) || "#F37864";
						$comData.fillColor = $.rgbaColor( ($.fillColor( thisComposite ) || "#6CC3A0") , 0.1 );
						$(this).sparkline($comData.data , $comData);
					}
			});
		}
		var sparkResize;
		$(window).resize(function(e) {
			clearTimeout(sparkResize);
			sparkResize = setTimeout(sparklineCreate(true), 500);
		});
		sparklineCreate();
		$('.label-sparkline span[data-color]').each(function(i) {
			var label=$(this);
			label.css("background-color", $.fillColor(label) );
		});
		
		
		
		//////////     EASY PIE CHART     //////////
		$('.easy-c').easyPieChart({
			lineCap: "butt",
			trackColor:'#EEE',
			barColor: "#F19F34",
			scaleColor:false,
			size:138,
			lineWidth:15
			,onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});
		$('.easy-chart').each(function () {
				var thisEasy=$(this) , $data = $(this).data();
				$data.barColor = $.fillColor( thisEasy ) || "#6CC3A0";
				$data.size = $data.size || 119;
				$data.trackColor = $data.trackColor  || "#EEE";
				$data.lineCap = $data.lineCap  || "butt";
				$data.lineWidth = $data.lineWidth  || 20;
				$data.scaleColor = $data.scaleColor || false,
				$data.onStep = function(from, to, percent) {
						$(this.el).find('.percent').text(Math.round(percent));
					}
				thisEasy.find('.percent').css({"line-height": $data.size+"px"});
				thisEasy.easyPieChart($data);
		});	
		$('.js_update').on('click', function() {
			$('.easy-chart').each(function () {
				var chart = window.chart = $(this).data('easyPieChart');			  
				chart.update(Math.random()*100);			  
			});
		});


		// Slider right Flot Chart Real Time 
		var IDrealtimeChart=document.getElementById("realtimeChart");
		if(IDrealtimeChart){
				var livedata = [] , totalPoints = 12;
				function getRealtimeData() {
					if (livedata.length > 0)
						livedata = livedata.slice(1);
						while (livedata.length < totalPoints) {
							var prev = livedata.length > 0 ? livedata[livedata.length - 1] : 20,
								y = prev + Math.random() * 10 - 5;
								if (y < 0) {  y = 0; }else if (y > 30) { 	y = 30; }
							$("#realtimeChartCount  span").text(Math.ceil( y));
							livedata.push(y);
						}
						var res = [];
						for (var i = 0; i < livedata.length; ++i) {
							res.push([i, livedata[i]])
						}
					return res;
				}

				var updateInterval = 1000;
				var realtimePlot = $.plot("#realtimeChart", [ getRealtimeData() ], {
					colors: ["#F37864"],
					series: { lines: { show: true  , fill:0.1 } ,shadowSize: 0 },
					yaxis: { tickColor: "rgba(255,255,255,0.2)" ,min: 0, max: 30,},  
					grid: { borderWidth: { top: 0, right: 0, bottom: 1, left: 1 },color :  "rgba(255,255,255,0.2)" },
					tooltip: true,
					tooltipOpts: { content: ("%y")  },
					xaxis: { show: false}
				});
				function realtimeChart() {
					realtimePlot.setData( [getRealtimeData()] );
					realtimePlot.draw();
					setTimeout(realtimeChart, updateInterval);
				}
				realtimeChart();
		}
		
		$(".color-themes").click( function() {
				var colors=$(this).attr('id');
				chooseStyle(colors, 60);
				setTimeout(function () { 
					navRight.trigger( 'close.mm' );
				}, 500);  
				
		 });
    });
    
    
//# sourceMappingURL=_libs.js.map
