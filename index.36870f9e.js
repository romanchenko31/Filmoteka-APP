!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}}));var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return i.default(e)||u.default(e)||c.default(e)||l.default()};var i=s(o("kMC0W")),u=s(o("7AJDX")),l=s(o("8CtQK")),c=s(o("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}var f={};function d(e,t,r,n,o,a,i){try{var u=e[a](i),l=u.value}catch(e){return void r(e)}u.done?t(l):Promise.resolve(l).then(n,o)}Object.defineProperty(f,"__esModule",{value:!0}),f.default=function(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){d(a,n,o,i,u,"next",e)}function u(e){d(a,n,o,i,u,"throw",e)}i(void 0)}))}};var p={};Object.defineProperty(p,"__esModule",{value:!0}),p.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var h={};function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(h,"__esModule",{value:!0}),h.default=function(e,t,r){t&&v(e.prototype,t);r&&v(e,r);return e};var m={},g=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var o=t&&t.prototype instanceof m?t:m,a=Object.create(o.prototype),i=new O(n||[]);return a._invoke=function(e,t,r){var n=f;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw a;return S()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var u=M(i,r);if(u){if(u===v)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var l=s(e,t,r);if("normal"===l.type){if(n=r.done?h:d,l.arg===v)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=h,r.method="throw",r.arg=l.arg)}}}(e,r,i),a}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var f="suspendedStart",d="suspendedYield",p="executing",h="completed",v={};function m(){}function g(){}function y(){}var b={};l(b,a,(function(){return this}));var w=Object.getPrototypeOf,_=w&&w(w(j([])));_&&_!==r&&n.call(_,a)&&(b=_);var x=y.prototype=m.prototype=Object.create(b);function P(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function r(o,a,i,u){var l=s(e[o],e,a);if("throw"!==l.type){var c=l.arg,f=c.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,i,u)}),(function(e){r("throw",e,i,u)})):t.resolve(f).then((function(e){c.value=e,i(c)}),(function(e){return r("throw",e,i,u)}))}u(l.arg)}var o;this._invoke=function(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}}function M(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,M(e,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=s(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function j(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:S}}function S(){return{value:t,done:!0}}return g.prototype=y,l(x,"constructor",y),l(y,"constructor",g),g.displayName=l(y,u,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,l(e,u,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},P(k.prototype),l(k.prototype,i,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new k(c(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},P(x),l(x,u,"Generator"),l(x,a,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return u.type="throw",u.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:j(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}(m);try{regeneratorRuntime=g}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=g:Function("r","regeneratorRuntime = r")(g)}var y=function(){"use strict";function t(){e(p)(this,t),this.url=" https://api.themoviedb.org/3/",this.keyAPI="b32f977d148061c9ab22a471ff2c7792"}return e(h)(t,[{key:"trendMovies",value:function(t){var r=this;return e(f)(e(m).mark((function n(){var o,a;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r.page=t,e.next=4,fetch("".concat(r.url,"trending/movie/week?api_key=").concat(r.keyAPI,"&page=").concat(t));case 4:if(!0===(o=e.sent).ok){e.next=7;break}throw new Error;case 7:return e.next=9,o.json();case 9:return a=e.sent,e.abrupt("return",a);case 13:e.prev=13,e.t0=e.catch(0),alert("Упс ошибка сервер не отвечает");case 16:case"end":return e.stop()}}),n,null,[[0,13]])})))()}}]),t}(),b="https://api.themoviedb.org/3/genre/movie/list?api_key=b32f977d148061c9ab22a471ff2c7792&language=en-US";function w(){return(w=e(f)(e(m).mark((function t(){var r,n;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(b);case 3:if(!0!==(r=e.sent).ok){e.next=7;break}return n=r.json(),e.abrupt("return",n);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Error");case 12:case"end":return e.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}var _=function(){return w.apply(this,arguments)},x={};Object.defineProperty(x,"__esModule",{value:!0}),x.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var P;
/**!

 @license
 handlebars v4.7.7

Copyright (C) 2011-2019 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/P=function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}return r.m=e,r.c=t,r.p="",r(0)}([function(e,t,r){"use strict";var n=r(1).default,o=r(2).default;t.__esModule=!0;var a=n(r(3)),i=o(r(36)),u=o(r(5)),l=n(r(4)),c=n(r(37)),s=o(r(43));function f(){var e=new a.HandlebarsEnvironment;return l.extend(e,a),e.SafeString=i.default,e.Exception=u.default,e.Utils=l,e.escapeExpression=l.escapeExpression,e.VM=c,e.template=function(t){return c.template(t,e)},e}var d=f();d.create=f,s.default(d),d.default=d,t.default=d,e.exports=t.default},function(e,t){"use strict";t.default=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},t.__esModule=!0},function(e,t){"use strict";t.default=function(e){return e&&e.__esModule?e:{default:e}},t.__esModule=!0},function(e,t,r){"use strict";var n=r(2).default;t.__esModule=!0,t.HandlebarsEnvironment=f;var o=r(4),a=n(r(5)),i=r(9),u=r(29),l=n(r(31)),c=r(32);t.VERSION="4.7.7",t.COMPILER_REVISION=8,t.LAST_COMPATIBLE_COMPILER_REVISION=7,t.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};var s="[object Object]";function f(e,t,r){this.helpers=e||{},this.partials=t||{},this.decorators=r||{},i.registerDefaultHelpers(this),u.registerDefaultDecorators(this)}f.prototype={constructor:f,logger:l.default,log:l.default.log,registerHelper:function(e,t){if(o.toString.call(e)===s){if(t)throw new a.default("Arg not supported with multiple helpers");o.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if(o.toString.call(e)===s)o.extend(this.partials,e);else{if(void 0===t)throw new a.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if(o.toString.call(e)===s){if(t)throw new a.default("Arg not supported with multiple decorators");o.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]},resetLoggedPropertyAccesses:function(){c.resetLoggedProperties()}};var d=l.default.log;t.log=d,t.createFrame=o.createFrame,t.logger=l.default},function(e,t){"use strict";t.__esModule=!0,t.extend=i,t.indexOf=function(e,t){for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return-1},t.escapeExpression=function(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}return o.test(e)?e.replace(n,a):e},t.isEmpty=function(e){return!e&&0!==e||!(!c(e)||0!==e.length)},t.createFrame=function(e){var t=i({},e);return t._parent=e,t},t.blockParams=function(e,t){return e.path=t,e},t.appendContextPath=function(e,t){return(e?e+".":"")+t};var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},n=/[&<>"'`=]/g,o=/[&<>"'`=]/;function a(e){return r[e]}function i(e){for(var t=1;t<arguments.length;t++)for(var r in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],r)&&(e[r]=arguments[t][r]);return e}var u=Object.prototype.toString;t.toString=u;var l=function(e){return"function"==typeof e};l(/x/)&&(t.isFunction=l=function(e){return"function"==typeof e&&"[object Function]"===u.call(e)}),t.isFunction=l;var c=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===u.call(e)};t.isArray=c},function(e,t,r){"use strict";var n=r(6).default;t.__esModule=!0;var o=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function a(e,t){var r=t&&t.loc,i=void 0,u=void 0,l=void 0,c=void 0;r&&(i=r.start.line,u=r.end.line,l=r.start.column,c=r.end.column,e+=" - "+i+":"+l);for(var s=Error.prototype.constructor.call(this,e),f=0;f<o.length;f++)this[o[f]]=s[o[f]];Error.captureStackTrace&&Error.captureStackTrace(this,a);try{r&&(this.lineNumber=i,this.endLineNumber=u,n?(Object.defineProperty(this,"column",{value:l,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:c,enumerable:!0})):(this.column=l,this.endColumn=c))}catch(e){}}a.prototype=new Error,t.default=a,e.exports=t.default},function(e,t,r){e.exports={default:r(7),__esModule:!0}},function(e,t,r){var n=r(8);e.exports=function(e,t,r){return n.setDesc(e,t,r)}},function(e,t){var r=Object;e.exports={create:r.create,getProto:r.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:r.getOwnPropertyDescriptor,setDesc:r.defineProperty,setDescs:r.defineProperties,getKeys:r.keys,getNames:r.getOwnPropertyNames,getSymbols:r.getOwnPropertySymbols,each:[].forEach}},function(e,t,r){"use strict";var n=r(2).default;t.__esModule=!0,t.registerDefaultHelpers=function(e){o.default(e),a.default(e),i.default(e),u.default(e),l.default(e),c.default(e),s.default(e)},t.moveHelperToHooks=function(e,t,r){e.helpers[t]&&(e.hooks[t]=e.helpers[t],r||delete e.helpers[t])};var o=n(r(10)),a=n(r(11)),i=n(r(24)),u=n(r(25)),l=n(r(26)),c=n(r(27)),s=n(r(28))},function(e,t,r){"use strict";t.__esModule=!0;var n=r(4);t.default=function(e){e.registerHelper("blockHelperMissing",(function(t,r){var o=r.inverse,a=r.fn;if(!0===t)return a(this);if(!1===t||null==t)return o(this);if(n.isArray(t))return t.length>0?(r.ids&&(r.ids=[r.name]),e.helpers.each(t,r)):o(this);if(r.data&&r.ids){var i=n.createFrame(r.data);i.contextPath=n.appendContextPath(r.data.contextPath,r.name),r={data:i}}return a(t,r)}))},e.exports=t.default},function(e,t,r){(function(n){"use strict";var o=r(12).default,a=r(2).default;t.__esModule=!0;var i=r(4),u=a(r(5));t.default=function(e){e.registerHelper("each",(function(e,t){if(!t)throw new u.default("Must pass iterator to #each");var r,a=t.fn,l=t.inverse,c=0,s="",f=void 0,d=void 0;function p(t,r,n){f&&(f.key=t,f.index=r,f.first=0===r,f.last=!!n,d&&(f.contextPath=d+t)),s+=a(e[t],{data:f,blockParams:i.blockParams([e[t],t],[d+t,null])})}if(t.data&&t.ids&&(d=i.appendContextPath(t.data.contextPath,t.ids[0])+"."),i.isFunction(e)&&(e=e.call(this)),t.data&&(f=i.createFrame(t.data)),e&&"object"==typeof e)if(i.isArray(e))for(var h=e.length;c<h;c++)c in e&&p(c,c,c===e.length-1);else if(n.Symbol&&e[n.Symbol.iterator]){for(var v=[],m=e[n.Symbol.iterator](),g=m.next();!g.done;g=m.next())v.push(g.value);for(h=(e=v).length;c<h;c++)p(c,c,c===e.length-1)}else r=void 0,o(e).forEach((function(e){void 0!==r&&p(r,c-1),r=e,c++})),void 0!==r&&p(r,c-1,!0);return 0===c&&(s=l(this)),s}))},e.exports=t.default}).call(t,function(){return this}())},function(e,t,r){e.exports={default:r(13),__esModule:!0}},function(e,t,r){r(14),e.exports=r(20).Object.keys},function(e,t,r){var n=r(15);r(17)("keys",(function(e){return function(t){return e(n(t))}}))},function(e,t,r){var n=r(16);e.exports=function(e){return Object(n(e))}},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,r){var n=r(18),o=r(20),a=r(23);e.exports=function(e,t){var r=(o.Object||{})[e]||Object[e],i={};i[e]=t(r),n(n.S+n.F*a((function(){r(1)})),"Object",i)}},function(e,t,r){var n=r(19),o=r(20),a=r(21),i=function(e,t,r){var u,l,c,s=e&i.F,f=e&i.G,d=e&i.S,p=e&i.P,h=e&i.B,v=e&i.W,m=f?o:o[t]||(o[t]={}),g=f?n:d?n[t]:(n[t]||{}).prototype;for(u in f&&(r=t),r)(l=!s&&g&&u in g)&&u in m||(c=l?g[u]:r[u],m[u]=f&&"function"!=typeof g[u]?r[u]:h&&l?a(c,n):v&&g[u]==c?function(e){var t=function(t){return this instanceof e?new e(t):e(t)};return t.prototype=e.prototype,t}(c):p&&"function"==typeof c?a(Function.call,c):c,p&&((m.prototype||(m.prototype={}))[u]=c))};i.F=1,i.G=2,i.S=4,i.P=8,i.B=16,i.W=32,e.exports=i},function(e,t){var r=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(e,t){var r=e.exports={version:"1.2.6"};"number"==typeof __e&&(__e=r)},function(e,t,r){var n=r(22);e.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,o){return e.call(t,r,n,o)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,r){"use strict";var n=r(2).default;t.__esModule=!0;var o=n(r(5));t.default=function(e){e.registerHelper("helperMissing",(function(){if(1!==arguments.length)throw new o.default('Missing helper: "'+arguments[arguments.length-1].name+'"')}))},e.exports=t.default},function(e,t,r){"use strict";var n=r(2).default;t.__esModule=!0;var o=r(4),a=n(r(5));t.default=function(e){e.registerHelper("if",(function(e,t){if(2!=arguments.length)throw new a.default("#if requires exactly one argument");return o.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||o.isEmpty(e)?t.inverse(this):t.fn(this)})),e.registerHelper("unless",(function(t,r){if(2!=arguments.length)throw new a.default("#unless requires exactly one argument");return e.helpers.if.call(this,t,{fn:r.inverse,inverse:r.fn,hash:r.hash})}))},e.exports=t.default},function(e,t){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("log",(function(){for(var t=[void 0],r=arguments[arguments.length-1],n=0;n<arguments.length-1;n++)t.push(arguments[n]);var o=1;null!=r.hash.level?o=r.hash.level:r.data&&null!=r.data.level&&(o=r.data.level),t[0]=o,e.log.apply(e,t)}))},e.exports=t.default},function(e,t){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("lookup",(function(e,t,r){return e?r.lookupProperty(e,t):e}))},e.exports=t.default},function(e,t,r){"use strict";var n=r(2).default;t.__esModule=!0;var o=r(4),a=n(r(5));t.default=function(e){e.registerHelper("with",(function(e,t){if(2!=arguments.length)throw new a.default("#with requires exactly one argument");o.isFunction(e)&&(e=e.call(this));var r=t.fn;if(o.isEmpty(e))return t.inverse(this);var n=t.data;return t.data&&t.ids&&((n=o.createFrame(t.data)).contextPath=o.appendContextPath(t.data.contextPath,t.ids[0])),r(e,{data:n,blockParams:o.blockParams([e],[n&&n.contextPath])})}))},e.exports=t.default},function(e,t,r){"use strict";var n=r(2).default;t.__esModule=!0,t.registerDefaultDecorators=function(e){o.default(e)};var o=n(r(30))},function(e,t,r){"use strict";t.__esModule=!0;var n=r(4);t.default=function(e){e.registerDecorator("inline",(function(e,t,r,o){var a=e;return t.partials||(t.partials={},a=function(o,a){var i=r.partials;r.partials=n.extend({},i,t.partials);var u=e(o,a);return r.partials=i,u}),t.partials[o.args[0]]=o.fn,a}))},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var n=r(4),o={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=n.indexOf(o.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=o.lookupLevel(e),"undefined"!=typeof console&&o.lookupLevel(o.level)<=e){var t=o.methodMap[e];console[t]||(t="log");for(var r=arguments.length,n=Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];console[t].apply(console,n)}}};t.default=o,e.exports=t.default},function(e,t,r){"use strict";var n=r(33).default,o=r(12).default,a=r(1).default;t.__esModule=!0,t.createProtoAccessControl=function(e){var t=n(null);t.constructor=!1,t.__defineGetter__=!1,t.__defineSetter__=!1,t.__lookupGetter__=!1;var r=n(null);return r.__proto__=!1,{properties:{whitelist:i.createNewLookupObject(r,e.allowedProtoProperties),defaultValue:e.allowProtoPropertiesByDefault},methods:{whitelist:i.createNewLookupObject(t,e.allowedProtoMethods),defaultValue:e.allowProtoMethodsByDefault}}},t.resultIsAllowed=function(e,t,r){return c("function"==typeof e?t.methods:t.properties,r)},t.resetLoggedProperties=function(){o(l).forEach((function(e){delete l[e]}))};var i=r(35),u=a(r(31)),l=n(null);function c(e,t){return void 0!==e.whitelist[t]?!0===e.whitelist[t]:void 0!==e.defaultValue?e.defaultValue:(function(e){!0!==l[e]&&(l[e]=!0,u.log("error",'Handlebars: Access has been denied to resolve the property "'+e+'" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'))}(t),!1)}},function(e,t,r){e.exports={default:r(34),__esModule:!0}},function(e,t,r){var n=r(8);e.exports=function(e,t){return n.create(e,t)}},function(e,t,r){"use strict";var n=r(33).default;t.__esModule=!0,t.createNewLookupObject=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return o.extend.apply(void 0,[n(null)].concat(t))};var o=r(4)},function(e,t){"use strict";function r(e){this.string=e}t.__esModule=!0,r.prototype.toString=r.prototype.toHTML=function(){return""+this.string},t.default=r,e.exports=t.default},function(t,r,n){"use strict";var o=n(38).default,a=n(12).default,i=n(1).default,u=n(2).default;r.__esModule=!0,r.checkRevision=function(e){var t=e&&e[0]||1,r=s.COMPILER_REVISION;if(!(t>=s.LAST_COMPATIBLE_COMPILER_REVISION&&t<=s.COMPILER_REVISION)){if(t<s.LAST_COMPATIBLE_COMPILER_REVISION){var n=s.REVISION_CHANGES[r],o=s.REVISION_CHANGES[t];throw new c.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+n+") or downgrade your runtime to an older version ("+o+").")}throw new c.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}},r.template=function(t,r){if(!r)throw new c.default("No environment passed to template");if(!t||!t.main)throw new c.default("Unknown template object: "+(void 0===t?"undefined":e(x)(t)));t.main.decorator=t.main_d,r.VM.checkRevision(t.compiler);var n=t.compiler&&7===t.compiler[0],i={strict:function(e,t,r){if(!e||!(t in e))throw new c.default('"'+t+'" not defined in '+e,{loc:r});return i.lookupProperty(e,t)},lookupProperty:function(e,t){var r=e[t];return null==r||Object.prototype.hasOwnProperty.call(e,t)||p.resultIsAllowed(r,i.protoAccessControl,t)?r:void 0},lookup:function(e,t){for(var r=e.length,n=0;n<r;n++)if(null!=(e[n]&&i.lookupProperty(e[n],t)))return e[n][t]},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:l.escapeExpression,invokePartial:function(e,n,o){o.hash&&(n=l.extend({},n,o.hash),o.ids&&(o.ids[0]=!0)),e=r.VM.resolvePartial.call(this,e,n,o);var a=l.extend({},o,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),i=r.VM.invokePartial.call(this,e,n,a);if(null==i&&r.compile&&(o.partials[o.name]=r.compile(e,t.compilerOptions,r),i=o.partials[o.name](n,a)),null!=i){if(o.indent){for(var u=i.split("\n"),s=0,f=u.length;s<f&&(u[s]||s+1!==f);s++)u[s]=o.indent+u[s];i=u.join("\n")}return i}throw new c.default("The partial "+o.name+" could not be compiled when running in runtime-only mode")},fn:function(e){var r=t[e];return r.decorator=t[e+"_d"],r},programs:[],program:function(e,t,r,n,o){var a=this.programs[e],i=this.fn(e);return t||o||n||r?a=h(this,e,i,t,r,n,o):a||(a=this.programs[e]=h(this,e,i)),a},data:function(e,t){for(;e&&t--;)e=e._parent;return e},mergeIfNeeded:function(e,t){var r=e||t;return e&&t&&e!==t&&(r=l.extend({},t,e)),r},nullContext:o({}),noop:r.VM.noop,compilerInfo:t.compiler};function u(e){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n=r.data;u._setup(r),!r.partial&&t.useData&&(n=m(e,n));var o=void 0,a=t.useBlockParams?[]:void 0;function l(e){return""+t.main(i,e,i.helpers,i.partials,n,a,o)}return t.useDepths&&(o=r.depths?e!=r.depths[0]?[e].concat(r.depths):r.depths:[e]),(l=g(t.main,l,i,r.depths||[],n,a))(e,r)}return u.isTop=!0,u._setup=function(e){if(e.partial)i.protoAccessControl=e.protoAccessControl,i.helpers=e.helpers,i.partials=e.partials,i.decorators=e.decorators,i.hooks=e.hooks;else{var o=l.extend({},r.helpers,e.helpers);!function(e,t){a(e).forEach((function(r){var n=e[r];e[r]=function(e,t){var r=t.lookupProperty;return d.wrapHelper(e,(function(e){return l.extend({lookupProperty:r},e)}))}(n,t)}))}(o,i),i.helpers=o,t.usePartial&&(i.partials=i.mergeIfNeeded(e.partials,r.partials)),(t.usePartial||t.useDecorators)&&(i.decorators=l.extend({},r.decorators,e.decorators)),i.hooks={},i.protoAccessControl=p.createProtoAccessControl(e);var u=e.allowCallsToHelperMissing||n;f.moveHelperToHooks(i,"helperMissing",u),f.moveHelperToHooks(i,"blockHelperMissing",u)}},u._child=function(e,r,n,o){if(t.useBlockParams&&!n)throw new c.default("must pass block params");if(t.useDepths&&!o)throw new c.default("must pass parent depths");return h(i,e,t[e],r,0,n,o)},u},r.wrapProgram=h,r.resolvePartial=function(e,t,r){return e?e.call||r.name||(r.name=e,e=r.partials[e]):e="@partial-block"===r.name?r.data["partial-block"]:r.partials[r.name],e},r.invokePartial=function(e,t,r){var n=r.data&&r.data["partial-block"];r.partial=!0,r.ids&&(r.data.contextPath=r.ids[0]||r.data.contextPath);var o=void 0;if(r.fn&&r.fn!==v&&function(){r.data=s.createFrame(r.data);var e=r.fn;o=r.data["partial-block"]=function(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return r.data=s.createFrame(r.data),r.data["partial-block"]=n,e(t,r)},e.partials&&(r.partials=l.extend({},r.partials,e.partials))}(),void 0===e&&o&&(e=o),void 0===e)throw new c.default("The partial "+r.name+" could not be found");if(e instanceof Function)return e(t,r)},r.noop=v;var l=i(n(4)),c=u(n(5)),s=n(3),f=n(9),d=n(42),p=n(32);function h(e,t,r,n,o,a,i){function u(t){var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],u=i;return!i||t==i[0]||t===e.nullContext&&null===i[0]||(u=[t].concat(i)),r(e,t,e.helpers,e.partials,o.data||n,a&&[o.blockParams].concat(a),u)}return(u=g(r,u,e,i,n,a)).program=t,u.depth=i?i.length:0,u.blockParams=o||0,u}function v(){return""}function m(e,t){return t&&"root"in t||((t=t?s.createFrame(t):{}).root=e),t}function g(e,t,r,n,o,a){if(e.decorator){var i={};t=e.decorator(t,i,r,n&&n[0],o,a,n),l.extend(t,i)}return t}},function(e,t,r){e.exports={default:r(39),__esModule:!0}},function(e,t,r){r(40),e.exports=r(20).Object.seal},function(e,t,r){var n=r(41);r(17)("seal",(function(e){return function(t){return e&&n(t)?e(t):t}}))},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t){"use strict";t.__esModule=!0,t.wrapHelper=function(e,t){return"function"!=typeof e?e:function(){return arguments[arguments.length-1]=t(arguments[arguments.length-1]),e.apply(this,arguments)}}},function(e,t){(function(r){"use strict";t.__esModule=!0,t.default=function(e){var t=void 0!==r?r:window,n=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=n),e}},e.exports=t.default}).call(t,function(){return this}())}])};var k=e(P()).template({1:function(t,r,n,o,a){var i,u,l=null!=r?r:t.nullContext||{},c=t.hooks.helperMissing,s="function",f=t.escapeExpression,d=t.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"<li class='film-gallery'>\n"+(null!=(i=d(n,"if").call(l,null!=r?d(r,"poster_path"):r,{name:"if",hash:{},fn:t.program(2,a,0),inverse:t.program(4,a,0),data:a,loc:{start:{line:3,column:4},end:{line:7,column:11}}}))?i:"")+"    <div class='film-card'>\n        <h3 class='film-title'>"+f((void 0===(u=null!=(u=d(n,"original_title")||(null!=r?d(r,"original_title"):r))?u:c)?"undefined":e(x)(u))===s?u.call(l,{name:"original_title",hash:{},data:a,loc:{start:{line:9,column:31},end:{line:9,column:49}}}):u)+"</h3>\n        <p class='film-genres'>\n            <span class='film-text genre'> "+f((void 0===(u=null!=(u=d(n,"genres")||(null!=r?d(r,"genres"):r))?u:c)?"undefined":e(x)(u))===s?u.call(l,{name:"genres",hash:{},data:a,loc:{start:{line:11,column:43},end:{line:11,column:53}}}):u)+"</span>\n            <span class='release_date'> "+f((void 0===(u=null!=(u=d(n,"year")||(null!=r?d(r,"year"):r))?u:c)?"undefined":e(x)(u))===s?u.call(l,{name:"year",hash:{},data:a,loc:{start:{line:12,column:40},end:{line:12,column:48}}}):u)+"</span>    \n            |\n            <span class='vote-average'>"+f((void 0===(u=null!=(u=d(n,"vote_average")||(null!=r?d(r,"vote_average"):r))?u:c)?"undefined":e(x)(u))===s?u.call(l,{name:"vote_average",hash:{},data:a,loc:{start:{line:14,column:39},end:{line:14,column:55}}}):u)+"</span>\n        </p>\n    </div>\n</li>\n"},2:function(t,r,n,o,a){var i,u=null!=r?r:t.nullContext||{},l=t.hooks.helperMissing,c="function",s=t.escapeExpression,f=t.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"    <img src='https://image.tmdb.org/t/p/w500"+s((void 0===(i=null!=(i=f(n,"poster_path")||(null!=r?f(r,"poster_path"):r))?i:l)?"undefined":e(x)(i))===c?i.call(u,{name:"poster_path",hash:{},data:a,loc:{start:{line:4,column:45},end:{line:4,column:60}}}):i)+"' alt='"+s((void 0===(i=null!=(i=f(n,"title")||(null!=r?f(r,"title"):r))?i:l)?"undefined":e(x)(i))===c?i.call(u,{name:"title",hash:{},data:a,loc:{start:{line:4,column:67},end:{line:4,column:76}}}):i)+"' data-action="+s((void 0===(i=null!=(i=f(n,"id")||(null!=r?f(r,"id"):r))?i:l)?"undefined":e(x)(i))===c?i.call(u,{name:"id",hash:{},data:a,loc:{start:{line:4,column:90},end:{line:4,column:96}}}):i)+" class='img-card' />\n"},4:function(e,t,r,n,o){return"    <img src='https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg' class='img-card' />\n"},compiler:[8,">= 4.3.0"],main:function(e,t,r,n,o){var a;return null!=(a=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(r,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:1,column:0},end:{line:18,column:9}}}))?a:""},useData:!0}),M=new y,E=document.querySelector(".film-list"),L=[],O=[];function j(t){M.trendMovies(t).then((function(t){S(e(a)(t.results))}))}function S(t){_().then((function(r){var n;L=e(a)(r.genres),t.map((function(t){L.map((function(e){t.genre_ids.includes(e.id)&&O.push(e.name)})),function(t){t.genres=e(a)(O).join(", ")}(t),function(e){var t=new Date(e.release_date);e.year="".concat(t.getFullYear())}(t),O=[]})),n=k(t),E.innerHTML="",E.insertAdjacentHTML("beforeend",n)}))}j(1);var A,T,H,C,I,N=document.querySelector(".form-button"),D=1,F=0,R=[],q=[],V=1;function G(){(A=N.firstChild.nextElementSibling).classList.add("buttonChecked")}function B(){1===V&&1===D&&(N.firstChild.disabled=!0,N.firstChild.classList.add("arrowLeftDisabled"))}function U(){N.insertAdjacentHTML("afterbegin","<button id='left' class='arrowLeft' value='button' type=\"button\"></button>"),N.insertAdjacentHTML("beforeend","<button class='arrowRight' id='right' value='button' type=\"button\"></button>")}function W(){for(var e=1;e<=5;e+=1)F+=1,N.insertAdjacentHTML("beforeend","<button id=".concat(F,' type="button" value="button">').concat(F,"</button>"));U()}function Y(){N.innerHTML="",window.innerWidth<768?(F=0,W(),D=1,B()):K(V=1)}function K(e){T=e,N.insertAdjacentHTML("beforeend","<button value='button' id=".concat(T,">").concat(T,"</button>")),N.insertAdjacentHTML("beforeend","<button class='moreOne'>...</button>");var t=N.querySelector(".moreOne");R=[];for(var r=1;r<=11;r+=1)T+=1,R.push(T);N.addEventListener("click",(function(r){R.sort((function(e,t){return t-e})),T=e,"moreOne"===r.target.className&&(r.preventDefault(),t.remove(),R.map((function(e){N.firstElementChild.nextElementSibling.insertAdjacentHTML("afterEnd","<button value='button' id=".concat(e,">").concat(e,"</button>"))})),R=[])})),H=T;for(var n=1;n<=5;n+=1)H+=1,N.insertAdjacentHTML("beforeend","<button value='button' id=".concat(H,">").concat(H,"</button>"));C=H,N.insertAdjacentHTML("beforeend","<button class='secondMore'>...</button>");var o=N.querySelector(".secondMore");q=[];for(var a=0;a<2;a+=1)C+=1,q.push(C);N.addEventListener("click",(function(e){"secondMore"===e.target.className&&(e.preventDefault(),o.remove(),q.map((function(e){N.lastElementChild.previousElementSibling.insertAdjacentHTML("beforeBegin","<button value='button' id=".concat(e,">").concat(e,"</button>"))})),q=[])})),I=C+1,N.insertAdjacentHTML("beforeend","<button value='button' id=".concat(I,">").concat(I,"</button>")),U(),G(),B()}window.innerWidth<768?(W(),B(),G(),N.addEventListener("click",(function(e){if("button"===e.target.value){var t=e.target.id;A.classList.remove("buttonChecked"),A=e.target,e.target.classList.add("buttonChecked"),"right"===e.target.id&&(N.innerHTML="",W(),t=D=F-4,G()),"left"===e.target.id&&(N.innerHTML="",function(){for(var e=1;e<=5;e+=1)D-=1,N.insertAdjacentHTML("afterbegin","<button id=".concat(D,' type="button" value="button">').concat(D,"</button>"));U(),B()}(),F=D+4,t=D,G()),""===X.querySearch?j(t):z(t)}}))):(K(V),N.addEventListener("click",(function(e){if(e.preventDefault(),"button"===e.target.value){var t=e.target.id;A.classList.remove("buttonChecked"),A=e.target,e.target.classList.add("buttonChecked"),"right"===e.target.id&&(V=I+1,N.innerHTML="",K(V),t=V),"left"===e.target.id&&(V-=20,N.innerHTML="",K(V),t=V),""===X.querySearch&&"secondMore"!==e.target.className&&"moreOne"!==e.target.className?j(t):"secondMore"!==e.target.className&&"moreOne"!==e.target.className&&z(t)}})));var J=function(){"use strict";function t(){e(p)(this,t),this.query="",this.url=" https://api.themoviedb.org/3/",this.keyAPI="b32f977d148061c9ab22a471ff2c7792"}return e(h)(t,[{key:"generalAPI",value:function(t){var r=this;return e(f)(e(m).mark((function n(){var o,a;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r.page=t,e.next=4,fetch("".concat(r.url,"search/movie?api_key=").concat(r.keyAPI,"&language=en-US&page=").concat(t,"&include_adult=false&query=").concat(r.query));case 4:if(!0===(o=e.sent).ok){e.next=7;break}throw new Error;case 7:return a=o.json(),e.abrupt("return",a);case 11:e.prev=11,e.t0=e.catch(0),alert("Упс ошибка сервер не отвечает");case 14:case"end":return e.stop()}}),n,null,[[0,11]])})))()}},{key:"querySearch",get:function(){return this.query},set:function(e){this.query=e}}]),t}(),Q=document.querySelector("#search"),X=new J,Z={};function $(e,t,r){var n,o,a,i,u;function l(){var c=Date.now()-i;c<t&&c>=0?n=setTimeout(l,t-c):(n=null,r||(u=e.apply(a,o),a=o=null))}null==t&&(t=100);var c=function(){a=this,o=arguments,i=Date.now();var c=r&&!n;return n||(n=setTimeout(l,t)),c&&(u=e.apply(a,o),a=o=null),u};return c.clear=function(){n&&(clearTimeout(n),n=null)},c.flush=function(){n&&(u=e.apply(a,o),a=o=null,clearTimeout(n),n=null)},c}function z(e){X.generalAPI(e).then((function(e){results=e.results,S(results)}))}$.debounce=$,Z=$,Q.addEventListener("input",Z((function(e){X.querySearch=e.target.value,""!==X.querySearch?1!==X.page?(z(1),Y(),G()):z():(currentPage=1,j(currentPage),Y(),G())}),1e3))}();
//# sourceMappingURL=index.36870f9e.js.map
