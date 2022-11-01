!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},n.parcelRequired7c6=a),a.register("f3hJk",(function(t,n){e(t.exports,"renderContentLibrary",(function(){return c}));var r=a("8m5ad"),o=a("5h39L"),l=a("fUUFm"),i=a("aZ3rV");const s=new(0,r.MovieApiService),u=new(0,l.MovieService);if("/library.html"===location.pathname){let e=JSON.parse(u.getWatchedMovieIds),t=JSON.parse(u.getQueuedMovieIds);const n=document.querySelector("#watched"),r=document.querySelector("#queue");n.classList.add("clicks"),n.addEventListener("click",(t=>{history.pushState(null,null,"/library.html/watched"),e=JSON.parse(u.getWatchedMovieIds),c(e),r.classList.remove("clicks"),n.classList.add("clicks")})),r.addEventListener("click",(e=>{history.pushState(null,null,"/library.html/queue"),t=JSON.parse(u.getQueuedMovieIds),c(t),n.classList.remove("clicks"),r.classList.add("clicks")})),c(e),history.pushState(null,null,"/library.html/watched")}function c(e){const t=document.querySelector(".film-list");t.innerHTML="",null==e||e.map((async e=>{const n=await s.getMoviesById(e),r=new Date(n.release_date);n.year=r.getFullYear();const o=(0,i.default)({getObjectsMovies:n});t.insertAdjacentHTML("beforeend",o)}))}(0,o.modalShow)(),(0,o.modalHidden)()})),a.register("8m5ad",(function(t,n){e(t.exports,"MovieApiService",(function(){return r}));class r{async getMoviesById(e){try{const t=await fetch(`${this.url}movie/${e}?api_key=${this.keyAPI}&language=en-US`);if(!0!==t.ok)throw new Error;return await t.json()}catch(e){console.error(e.message)}}async getMoviesGenres(){try{const e=await fetch(`${this.url}genre/movie/list?api_key=${this.keyAPI}&language=en-US`);if(!0===e.ok){return e.json()}}catch(e){console.log("Error")}}async getTrendingMovies(e){try{this.page=e;const t=await fetch(`${this.url}trending/movie/week?api_key=${this.keyAPI}&page=${e}`);if(!0!==t.ok)throw new Error;return await t.json()}catch(e){alert("Упс ошибка сервер не отвечает")}}async getMoviesByQuery(e){try{this.page=e;const t=await fetch(`${this.url}search/movie?api_key=${this.keyAPI}&language=en-US&page=${e}&include_adult=false&query=${this.query}`);if(!0!==t.ok)throw new Error;return t.json()}catch(e){alert("Упс ошибка сервер не отвечает")}}set querySearch(e){this.query=e}get querySearch(){return this.query}constructor(){this.query="",this.url="https://api.themoviedb.org/3/",this.keyAPI="b32f977d148061c9ab22a471ff2c7792"}}})),a.register("5h39L",(function(t,n){e(t.exports,"modalShow",(function(){return u})),e(t.exports,"modalHidden",(function(){return c}));var r=a("8m5ad"),o=a("bTsTA"),l=a("bIz5P");const i=new(0,r.MovieApiService),s=document.querySelector("body");function u(){const e=document.querySelector(".film-list"),t=document.querySelector(".modalWindow");e.addEventListener("click",(async e=>{if(e.target.closest("li")){const n=e.target.closest("li").id,r=await i.getMoviesById(n);r.popularity=r.popularity.toFixed(1);const a=(0,o.default)(r);t.parentElement.classList.add("backdrop"),s.classList.add("bodyIsHidden"),t.innerHTML=a,(0,l.popupButtons)(n)}}))}function c(){const e=document.querySelector(".modalWindow");e.parentElement.addEventListener("click",(t=>{"backdrop"!==t.target.className&&"close"!==t.target.className||(e.parentElement.classList.remove("backdrop"),s.classList.remove("bodyIsHidden"),e.innerHTML="")}))}})),a.register("bTsTA",(function(n,r){e(n.exports,"default",(function(){return o}));var o=t(a("7jKnM")).template({1:function(e,t,n,r,o){var a,l=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'            <li class="item">'+e.escapeExpression("function"==typeof(a=null!=(a=l(n,"name")||(null!=t?l(t,"name"):t))?a:e.hooks.helperMissing)?a.call(null!=t?t:e.nullContext||{},{name:"name",hash:{},data:o,loc:{start:{line:20,column:29},end:{line:20,column:37}}}):a)+"</li>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,r,o){var a,l,i=null!=t?t:e.nullContext||{},s=e.hooks.helperMissing,u="function",c=e.escapeExpression,d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<button class="close"></button>\n  <img src="https://image.tmdb.org/t/p/w500'+c(typeof(l=null!=(l=d(n,"poster_path")||(null!=t?d(t,"poster_path"):t))?l:s)===u?l.call(i,{name:"poster_path",hash:{},data:o,loc:{start:{line:2,column:43},end:{line:2,column:58}}}):l)+'">\n  <div class="description-card-film">\n    <h1 class="title">'+c(typeof(l=null!=(l=d(n,"title")||(null!=t?d(t,"title"):t))?l:s)===u?l.call(i,{name:"title",hash:{},data:o,loc:{start:{line:4,column:22},end:{line:4,column:31}}}):l)+'</h1>\n    <div class="description-movie">\n      <ul class="description">\n        <li class="item">Vote / Votes</li>\n        <li class="item">Popularity</li>\n        <li class="item"></li>\n        <li class="item">Original Title</li>\n        <li class="item">Genre</li>\n      </ul>\n      <ul>\n        <li class="item"><span class="vote">'+c(typeof(l=null!=(l=d(n,"vote_average")||(null!=t?d(t,"vote_average"):t))?l:s)===u?l.call(i,{name:"vote_average",hash:{},data:o,loc:{start:{line:14,column:44},end:{line:14,column:60}}}):l)+"</span>/ "+c(typeof(l=null!=(l=d(n,"vote_count")||(null!=t?d(t,"vote_count"):t))?l:s)===u?l.call(i,{name:"vote_count",hash:{},data:o,loc:{start:{line:14,column:69},end:{line:14,column:83}}}):l)+'</li>\n        <li class="item">'+c(typeof(l=null!=(l=d(n,"popularity")||(null!=t?d(t,"popularity"):t))?l:s)===u?l.call(i,{name:"popularity",hash:{},data:o,loc:{start:{line:15,column:25},end:{line:15,column:39}}}):l)+'</li>\n        <li class="item">'+c(typeof(l=null!=(l=d(n,"original_title")||(null!=t?d(t,"original_title"):t))?l:s)===u?l.call(i,{name:"original_title",hash:{},data:o,loc:{start:{line:16,column:25},end:{line:16,column:43}}}):l)+'</li>\n        <li class="item">\n          <ul class="geners">\n'+(null!=(a=d(n,"each").call(i,null!=t?d(t,"genres"):t,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:19,column:12},end:{line:21,column:21}}}))?a:"")+"          </ul>\n        </li>\n      </ul>\n    </div>\n    <h2>About</h2>\n    <p class='movie-discripsh-content'>"+c(typeof(l=null!=(l=d(n,"overview")||(null!=t?d(t,"overview"):t))?l:s)===u?l.call(i,{name:"overview",hash:{},data:o,loc:{start:{line:27,column:39},end:{line:27,column:51}}}):l)+'</p>\n    <ul class="button">\n      <li class="item"><button class="watched">add to Watched</button></li>\n      <li class="item"><button class="queue">add to queue</button></li>\n    </ul>\n    </ul>\n  </div>'},useData:!0})})),a.register("7jKnM",(function(e,t){
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

*/
var n;e.exports,n=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}return n.m=e,n.c=t,n.p="",n(0)}([function(e,t,n){"use strict";var r=n(1).default,o=n(2).default;t.__esModule=!0;var a=r(n(3)),l=o(n(36)),i=o(n(5)),s=r(n(4)),u=r(n(37)),c=o(n(43));function d(){var e=new a.HandlebarsEnvironment;return s.extend(e,a),e.SafeString=l.default,e.Exception=i.default,e.Utils=s,e.escapeExpression=s.escapeExpression,e.VM=u,e.template=function(t){return u.template(t,e)},e}var f=d();f.create=d,c.default(f),f.default=f,t.default=f,e.exports=t.default},function(e,t){"use strict";t.default=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},t.__esModule=!0},function(e,t){"use strict";t.default=function(e){return e&&e.__esModule?e:{default:e}},t.__esModule=!0},function(e,t,n){"use strict";var r=n(2).default;t.__esModule=!0,t.HandlebarsEnvironment=d;var o=n(4),a=r(n(5)),l=n(9),i=n(29),s=r(n(31)),u=n(32);t.VERSION="4.7.7",t.COMPILER_REVISION=8,t.LAST_COMPATIBLE_COMPILER_REVISION=7,t.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};var c="[object Object]";function d(e,t,n){this.helpers=e||{},this.partials=t||{},this.decorators=n||{},l.registerDefaultHelpers(this),i.registerDefaultDecorators(this)}d.prototype={constructor:d,logger:s.default,log:s.default.log,registerHelper:function(e,t){if(o.toString.call(e)===c){if(t)throw new a.default("Arg not supported with multiple helpers");o.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if(o.toString.call(e)===c)o.extend(this.partials,e);else{if(void 0===t)throw new a.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if(o.toString.call(e)===c){if(t)throw new a.default("Arg not supported with multiple decorators");o.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]},resetLoggedPropertyAccesses:function(){u.resetLoggedProperties()}};var f=s.default.log;t.log=f,t.createFrame=o.createFrame,t.logger=s.default},function(e,t){"use strict";t.__esModule=!0,t.extend=l,t.indexOf=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},t.escapeExpression=function(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}return o.test(e)?e.replace(r,a):e},t.isEmpty=function(e){return!e&&0!==e||!(!u(e)||0!==e.length)},t.createFrame=function(e){var t=l({},e);return t._parent=e,t},t.blockParams=function(e,t){return e.path=t,e},t.appendContextPath=function(e,t){return(e?e+".":"")+t};var n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},r=/[&<>"'`=]/g,o=/[&<>"'`=]/;function a(e){return n[e]}function l(e){for(var t=1;t<arguments.length;t++)for(var n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],n)&&(e[n]=arguments[t][n]);return e}var i=Object.prototype.toString;t.toString=i;var s=function(e){return"function"==typeof e};s(/x/)&&(t.isFunction=s=function(e){return"function"==typeof e&&"[object Function]"===i.call(e)}),t.isFunction=s;var u=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===i.call(e)};t.isArray=u},function(e,t,n){"use strict";var r=n(6).default;t.__esModule=!0;var o=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function a(e,t){var n=t&&t.loc,l=void 0,i=void 0,s=void 0,u=void 0;n&&(l=n.start.line,i=n.end.line,s=n.start.column,u=n.end.column,e+=" - "+l+":"+s);for(var c=Error.prototype.constructor.call(this,e),d=0;d<o.length;d++)this[o[d]]=c[o[d]];Error.captureStackTrace&&Error.captureStackTrace(this,a);try{n&&(this.lineNumber=l,this.endLineNumber=i,r?(Object.defineProperty(this,"column",{value:s,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:u,enumerable:!0})):(this.column=s,this.endColumn=u))}catch(e){}}a.prototype=new Error,t.default=a,e.exports=t.default},function(e,t,n){e.exports={default:n(7),__esModule:!0}},function(e,t,n){var r=n(8);e.exports=function(e,t,n){return r.setDesc(e,t,n)}},function(e,t){var n=Object;e.exports={create:n.create,getProto:n.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:n.getOwnPropertyDescriptor,setDesc:n.defineProperty,setDescs:n.defineProperties,getKeys:n.keys,getNames:n.getOwnPropertyNames,getSymbols:n.getOwnPropertySymbols,each:[].forEach}},function(e,t,n){"use strict";var r=n(2).default;t.__esModule=!0,t.registerDefaultHelpers=function(e){o.default(e),a.default(e),l.default(e),i.default(e),s.default(e),u.default(e),c.default(e)},t.moveHelperToHooks=function(e,t,n){e.helpers[t]&&(e.hooks[t]=e.helpers[t],n||delete e.helpers[t])};var o=r(n(10)),a=r(n(11)),l=r(n(24)),i=r(n(25)),s=r(n(26)),u=r(n(27)),c=r(n(28))},function(e,t,n){"use strict";t.__esModule=!0;var r=n(4);t.default=function(e){e.registerHelper("blockHelperMissing",(function(t,n){var o=n.inverse,a=n.fn;if(!0===t)return a(this);if(!1===t||null==t)return o(this);if(r.isArray(t))return t.length>0?(n.ids&&(n.ids=[n.name]),e.helpers.each(t,n)):o(this);if(n.data&&n.ids){var l=r.createFrame(n.data);l.contextPath=r.appendContextPath(n.data.contextPath,n.name),n={data:l}}return a(t,n)}))},e.exports=t.default},function(e,t,n){(function(r){"use strict";var o=n(12).default,a=n(2).default;t.__esModule=!0;var l=n(4),i=a(n(5));t.default=function(e){e.registerHelper("each",(function(e,t){if(!t)throw new i.default("Must pass iterator to #each");var n,a=t.fn,s=t.inverse,u=0,c="",d=void 0,f=void 0;function p(t,n,r){d&&(d.key=t,d.index=n,d.first=0===n,d.last=!!r,f&&(d.contextPath=f+t)),c+=a(e[t],{data:d,blockParams:l.blockParams([e[t],t],[f+t,null])})}if(t.data&&t.ids&&(f=l.appendContextPath(t.data.contextPath,t.ids[0])+"."),l.isFunction(e)&&(e=e.call(this)),t.data&&(d=l.createFrame(t.data)),e&&"object"==typeof e)if(l.isArray(e))for(var h=e.length;u<h;u++)u in e&&p(u,u,u===e.length-1);else if(r.Symbol&&e[r.Symbol.iterator]){for(var m=[],v=e[r.Symbol.iterator](),g=v.next();!g.done;g=v.next())m.push(g.value);for(h=(e=m).length;u<h;u++)p(u,u,u===e.length-1)}else n=void 0,o(e).forEach((function(e){void 0!==n&&p(n,u-1),n=e,u++})),void 0!==n&&p(n,u-1,!0);return 0===u&&(c=s(this)),c}))},e.exports=t.default}).call(t,function(){return this}())},function(e,t,n){e.exports={default:n(13),__esModule:!0}},function(e,t,n){n(14),e.exports=n(20).Object.keys},function(e,t,n){var r=n(15);n(17)("keys",(function(e){return function(t){return e(r(t))}}))},function(e,t,n){var r=n(16);e.exports=function(e){return Object(r(e))}},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,n){var r=n(18),o=n(20),a=n(23);e.exports=function(e,t){var n=(o.Object||{})[e]||Object[e],l={};l[e]=t(n),r(r.S+r.F*a((function(){n(1)})),"Object",l)}},function(e,t,n){var r=n(19),o=n(20),a=n(21),l=function(e,t,n){var i,s,u,c=e&l.F,d=e&l.G,f=e&l.S,p=e&l.P,h=e&l.B,m=e&l.W,v=d?o:o[t]||(o[t]={}),g=d?r:f?r[t]:(r[t]||{}).prototype;for(i in d&&(n=t),n)(s=!c&&g&&i in g)&&i in v||(u=s?g[i]:n[i],v[i]=d&&"function"!=typeof g[i]?n[i]:h&&s?a(u,r):m&&g[i]==u?function(e){var t=function(t){return this instanceof e?new e(t):e(t)};return t.prototype=e.prototype,t}(u):p&&"function"==typeof u?a(Function.call,u):u,p&&((v.prototype||(v.prototype={}))[i]=u))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,e.exports=l},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t){var n=e.exports={version:"1.2.6"};"number"==typeof __e&&(__e=n)},function(e,t,n){var r=n(22);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,n){"use strict";var r=n(2).default;t.__esModule=!0;var o=r(n(5));t.default=function(e){e.registerHelper("helperMissing",(function(){if(1!==arguments.length)throw new o.default('Missing helper: "'+arguments[arguments.length-1].name+'"')}))},e.exports=t.default},function(e,t,n){"use strict";var r=n(2).default;t.__esModule=!0;var o=n(4),a=r(n(5));t.default=function(e){e.registerHelper("if",(function(e,t){if(2!=arguments.length)throw new a.default("#if requires exactly one argument");return o.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||o.isEmpty(e)?t.inverse(this):t.fn(this)})),e.registerHelper("unless",(function(t,n){if(2!=arguments.length)throw new a.default("#unless requires exactly one argument");return e.helpers.if.call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})}))},e.exports=t.default},function(e,t){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("log",(function(){for(var t=[void 0],n=arguments[arguments.length-1],r=0;r<arguments.length-1;r++)t.push(arguments[r]);var o=1;null!=n.hash.level?o=n.hash.level:n.data&&null!=n.data.level&&(o=n.data.level),t[0]=o,e.log.apply(e,t)}))},e.exports=t.default},function(e,t){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("lookup",(function(e,t,n){return e?n.lookupProperty(e,t):e}))},e.exports=t.default},function(e,t,n){"use strict";var r=n(2).default;t.__esModule=!0;var o=n(4),a=r(n(5));t.default=function(e){e.registerHelper("with",(function(e,t){if(2!=arguments.length)throw new a.default("#with requires exactly one argument");o.isFunction(e)&&(e=e.call(this));var n=t.fn;if(o.isEmpty(e))return t.inverse(this);var r=t.data;return t.data&&t.ids&&((r=o.createFrame(t.data)).contextPath=o.appendContextPath(t.data.contextPath,t.ids[0])),n(e,{data:r,blockParams:o.blockParams([e],[r&&r.contextPath])})}))},e.exports=t.default},function(e,t,n){"use strict";var r=n(2).default;t.__esModule=!0,t.registerDefaultDecorators=function(e){o.default(e)};var o=r(n(30))},function(e,t,n){"use strict";t.__esModule=!0;var r=n(4);t.default=function(e){e.registerDecorator("inline",(function(e,t,n,o){var a=e;return t.partials||(t.partials={},a=function(o,a){var l=n.partials;n.partials=r.extend({},l,t.partials);var i=e(o,a);return n.partials=l,i}),t.partials[o.args[0]]=o.fn,a}))},e.exports=t.default},function(e,t,n){"use strict";t.__esModule=!0;var r=n(4),o={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=r.indexOf(o.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=o.lookupLevel(e),"undefined"!=typeof console&&o.lookupLevel(o.level)<=e){var t=o.methodMap[e];console[t]||(t="log");for(var n=arguments.length,r=Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];console[t].apply(console,r)}}};t.default=o,e.exports=t.default},function(e,t,n){"use strict";var r=n(33).default,o=n(12).default,a=n(1).default;t.__esModule=!0,t.createProtoAccessControl=function(e){var t=r(null);t.constructor=!1,t.__defineGetter__=!1,t.__defineSetter__=!1,t.__lookupGetter__=!1;var n=r(null);return n.__proto__=!1,{properties:{whitelist:l.createNewLookupObject(n,e.allowedProtoProperties),defaultValue:e.allowProtoPropertiesByDefault},methods:{whitelist:l.createNewLookupObject(t,e.allowedProtoMethods),defaultValue:e.allowProtoMethodsByDefault}}},t.resultIsAllowed=function(e,t,n){return u("function"==typeof e?t.methods:t.properties,n)},t.resetLoggedProperties=function(){o(s).forEach((function(e){delete s[e]}))};var l=n(35),i=a(n(31)),s=r(null);function u(e,t){return void 0!==e.whitelist[t]?!0===e.whitelist[t]:void 0!==e.defaultValue?e.defaultValue:(function(e){!0!==s[e]&&(s[e]=!0,i.log("error",'Handlebars: Access has been denied to resolve the property "'+e+'" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'))}(t),!1)}},function(e,t,n){e.exports={default:n(34),__esModule:!0}},function(e,t,n){var r=n(8);e.exports=function(e,t){return r.create(e,t)}},function(e,t,n){"use strict";var r=n(33).default;t.__esModule=!0,t.createNewLookupObject=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return o.extend.apply(void 0,[r(null)].concat(t))};var o=n(4)},function(e,t){"use strict";function n(e){this.string=e}t.__esModule=!0,n.prototype.toString=n.prototype.toHTML=function(){return""+this.string},t.default=n,e.exports=t.default},function(e,t,n){"use strict";var r=n(38).default,o=n(12).default,a=n(1).default,l=n(2).default;t.__esModule=!0,t.checkRevision=function(e){var t=e&&e[0]||1,n=u.COMPILER_REVISION;if(!(t>=u.LAST_COMPATIBLE_COMPILER_REVISION&&t<=u.COMPILER_REVISION)){if(t<u.LAST_COMPATIBLE_COMPILER_REVISION){var r=u.REVISION_CHANGES[n],o=u.REVISION_CHANGES[t];throw new s.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+o+").")}throw new s.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}},t.template=function(e,t){if(!t)throw new s.default("No environment passed to template");if(!e||!e.main)throw new s.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var n=e.compiler&&7===e.compiler[0],a={strict:function(e,t,n){if(!e||!(t in e))throw new s.default('"'+t+'" not defined in '+e,{loc:n});return a.lookupProperty(e,t)},lookupProperty:function(e,t){var n=e[t];return null==n||Object.prototype.hasOwnProperty.call(e,t)||f.resultIsAllowed(n,a.protoAccessControl,t)?n:void 0},lookup:function(e,t){for(var n=e.length,r=0;r<n;r++)if(null!=(e[r]&&a.lookupProperty(e[r],t)))return e[r][t]},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:i.escapeExpression,invokePartial:function(n,r,o){o.hash&&(r=i.extend({},r,o.hash),o.ids&&(o.ids[0]=!0)),n=t.VM.resolvePartial.call(this,n,r,o);var a=i.extend({},o,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),l=t.VM.invokePartial.call(this,n,r,a);if(null==l&&t.compile&&(o.partials[o.name]=t.compile(n,e.compilerOptions,t),l=o.partials[o.name](r,a)),null!=l){if(o.indent){for(var u=l.split("\n"),c=0,d=u.length;c<d&&(u[c]||c+1!==d);c++)u[c]=o.indent+u[c];l=u.join("\n")}return l}throw new s.default("The partial "+o.name+" could not be compiled when running in runtime-only mode")},fn:function(t){var n=e[t];return n.decorator=e[t+"_d"],n},programs:[],program:function(e,t,n,r,o){var a=this.programs[e],l=this.fn(e);return t||o||r||n?a=p(this,e,l,t,n,r,o):a||(a=this.programs[e]=p(this,e,l)),a},data:function(e,t){for(;e&&t--;)e=e._parent;return e},mergeIfNeeded:function(e,t){var n=e||t;return e&&t&&e!==t&&(n=i.extend({},t,e)),n},nullContext:r({}),noop:t.VM.noop,compilerInfo:e.compiler};function l(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],r=n.data;l._setup(n),!n.partial&&e.useData&&(r=m(t,r));var o=void 0,i=e.useBlockParams?[]:void 0;function s(t){return""+e.main(a,t,a.helpers,a.partials,r,i,o)}return e.useDepths&&(o=n.depths?t!=n.depths[0]?[t].concat(n.depths):n.depths:[t]),(s=v(e.main,s,a,n.depths||[],r,i))(t,n)}return l.isTop=!0,l._setup=function(r){if(r.partial)a.protoAccessControl=r.protoAccessControl,a.helpers=r.helpers,a.partials=r.partials,a.decorators=r.decorators,a.hooks=r.hooks;else{var l=i.extend({},t.helpers,r.helpers);!function(e,t){o(e).forEach((function(n){var r=e[n];e[n]=function(e,t){var n=t.lookupProperty;return d.wrapHelper(e,(function(e){return i.extend({lookupProperty:n},e)}))}(r,t)}))}(l,a),a.helpers=l,e.usePartial&&(a.partials=a.mergeIfNeeded(r.partials,t.partials)),(e.usePartial||e.useDecorators)&&(a.decorators=i.extend({},t.decorators,r.decorators)),a.hooks={},a.protoAccessControl=f.createProtoAccessControl(r);var s=r.allowCallsToHelperMissing||n;c.moveHelperToHooks(a,"helperMissing",s),c.moveHelperToHooks(a,"blockHelperMissing",s)}},l._child=function(t,n,r,o){if(e.useBlockParams&&!r)throw new s.default("must pass block params");if(e.useDepths&&!o)throw new s.default("must pass parent depths");return p(a,t,e[t],n,0,r,o)},l},t.wrapProgram=p,t.resolvePartial=function(e,t,n){return e?e.call||n.name||(n.name=e,e=n.partials[e]):e="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name],e},t.invokePartial=function(e,t,n){var r=n.data&&n.data["partial-block"];n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath);var o=void 0;if(n.fn&&n.fn!==h&&function(){n.data=u.createFrame(n.data);var e=n.fn;o=n.data["partial-block"]=function(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return n.data=u.createFrame(n.data),n.data["partial-block"]=r,e(t,n)},e.partials&&(n.partials=i.extend({},n.partials,e.partials))}(),void 0===e&&o&&(e=o),void 0===e)throw new s.default("The partial "+n.name+" could not be found");if(e instanceof Function)return e(t,n)},t.noop=h;var i=a(n(4)),s=l(n(5)),u=n(3),c=n(9),d=n(42),f=n(32);function p(e,t,n,r,o,a,l){function i(t){var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=l;return!l||t==l[0]||t===e.nullContext&&null===l[0]||(i=[t].concat(l)),n(e,t,e.helpers,e.partials,o.data||r,a&&[o.blockParams].concat(a),i)}return(i=v(n,i,e,l,r,a)).program=t,i.depth=l?l.length:0,i.blockParams=o||0,i}function h(){return""}function m(e,t){return t&&"root"in t||((t=t?u.createFrame(t):{}).root=e),t}function v(e,t,n,r,o,a){if(e.decorator){var l={};t=e.decorator(t,l,n,r&&r[0],o,a,r),i.extend(t,l)}return t}},function(e,t,n){e.exports={default:n(39),__esModule:!0}},function(e,t,n){n(40),e.exports=n(20).Object.seal},function(e,t,n){var r=n(41);n(17)("seal",(function(e){return function(t){return e&&r(t)?e(t):t}}))},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t){"use strict";t.__esModule=!0,t.wrapHelper=function(e,t){return"function"!=typeof e?e:function(){return arguments[arguments.length-1]=t(arguments[arguments.length-1]),e.apply(this,arguments)}}},function(e,t){(function(n){"use strict";t.__esModule=!0,t.default=function(e){var t=void 0!==n?n:window,r=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=r),e}},e.exports=t.default}).call(t,function(){return this}())}])},e.exports=n()})),a.register("bIz5P",(function(t,n){e(t.exports,"popupButtons",(function(){return i}));var r=a("fUUFm"),o=a("f3hJk");const l=new(0,r.MovieService);function i(e){let t=[],n=[];const r=document.querySelector(".queue"),a=document.querySelector(".watched");l.getQueuedMovieIds&&(n=JSON.parse(l.getQueuedMovieIds)),n.includes(e)&&(r.classList.add("clicks"),r.textContent="REMOVE FROM QUEUE"),l.getWatchedMovieIds&&(t=JSON.parse(l.getWatchedMovieIds)),t.includes(e)&&(a.classList.add("clicks"),a.textContent="REMOVE FROM WATCHED"),a.addEventListener("click",(()=>{!function(e,t,n,r,a){if(e.includes(n)){a.textContent="ADD TO WATCHED";const t=e.indexOf(n);e.splice(t,1)}else e.push(n),a.textContent="REMOVE FROM WATCHED";t.map((e=>{if(e===n){const n=t.indexOf(e);t.splice(n,1),l.setMovieToQueue=t,r.classList.toggle("clicks"),r.textContent="ADD TO QUEUE"}})),a.classList.toggle("clicks"),l.setMovieToWatched=e,"/library.html/watched"===location.pathname?(0,o.renderContentLibrary)(e):"/library.html/queue"===location.pathname&&(0,o.renderContentLibrary)(t)}(t,n,e,r,a)})),r.addEventListener("click",(()=>{!function(e,t,n,r,a){if(t.includes(n)){r.textContent="ADD TO QUEUE";const e=t.indexOf(n);t.splice(e,1)}else t.push(n),r.textContent="REMOVE FROM QUEUE";e.map((t=>{if(t===n){const t=e.indexOf(n);e.splice(t,1),l.setMovieToWatched=e,a.classList.toggle("clicks"),a.textContent="ADD TO WATCHED"}})),r.classList.toggle("clicks"),l.setMovieToQueue=t,"/library.html/watched"===location.pathname?(0,o.renderContentLibrary)(e):"/library.html/queue"===location.pathname&&(0,o.renderContentLibrary)(t)}(t,n,e,r,a)}))}})),a.register("fUUFm",(function(t,n){e(t.exports,"MovieService",(function(){return r}));class r{get getWatchedMovieIds(){return localStorage.getItem("watchedMoviesIds")}set setMovieToWatched(e){localStorage.setItem("watchedMoviesIds",JSON.stringify(e))}get getQueuedMovieIds(){return localStorage.getItem("queueMoviesIds")}set setMovieToQueue(e){localStorage.setItem("queueMoviesIds",JSON.stringify(e))}}})),a.register("aZ3rV",(function(n,r){e(n.exports,"default",(function(){return o}));var o=t(a("7jKnM")).template({1:function(e,t,n,r,o){var a,l,i=null!=t?t:e.nullContext||{},s=e.hooks.helperMissing,u="function",c=e.escapeExpression,d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"<li id="+c(typeof(l=null!=(l=d(n,"id")||(null!=t?d(t,"id"):t))?l:s)===u?l.call(i,{name:"id",hash:{},data:o,loc:{start:{line:2,column:7},end:{line:2,column:13}}}):l)+" class='film-gallery'>\n"+(null!=(a=d(n,"if").call(i,null!=t?d(t,"poster_path"):t,{name:"if",hash:{},fn:e.program(2,o,0),inverse:e.program(4,o,0),data:o,loc:{start:{line:3,column:4},end:{line:7,column:11}}}))?a:"")+"    <div class='film-card'>\n        <h3 class='film-title'>"+c(typeof(l=null!=(l=d(n,"original_title")||(null!=t?d(t,"original_title"):t))?l:s)===u?l.call(i,{name:"original_title",hash:{},data:o,loc:{start:{line:9,column:31},end:{line:9,column:49}}}):l)+"</h3>\n        <p class='film-genres'>\n"+(null!=(a=d(n,"each").call(i,null!=t?d(t,"genres"):t,{name:"each",hash:{},fn:e.program(6,o,0),inverse:e.noop,data:o,loc:{start:{line:11,column:12},end:{line:13,column:21}}}))?a:"")+"            <span class='release_date'> "+c(typeof(l=null!=(l=d(n,"year")||(null!=t?d(t,"year"):t))?l:s)===u?l.call(i,{name:"year",hash:{},data:o,loc:{start:{line:14,column:40},end:{line:14,column:48}}}):l)+"</span>\n            |\n            <span class='vote-average'>"+c(typeof(l=null!=(l=d(n,"vote_average")||(null!=t?d(t,"vote_average"):t))?l:s)===u?l.call(i,{name:"vote_average",hash:{},data:o,loc:{start:{line:16,column:39},end:{line:16,column:55}}}):l)+"</span>\n        </p>\n    </div>\n</li>\n"},2:function(e,t,n,r,o){var a,l=null!=t?t:e.nullContext||{},i=e.hooks.helperMissing,s="function",u=e.escapeExpression,c=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"    <img src='https://image.tmdb.org/t/p/w500"+u(typeof(a=null!=(a=c(n,"poster_path")||(null!=t?c(t,"poster_path"):t))?a:i)===s?a.call(l,{name:"poster_path",hash:{},data:o,loc:{start:{line:4,column:45},end:{line:4,column:60}}}):a)+"' alt='"+u(typeof(a=null!=(a=c(n,"title")||(null!=t?c(t,"title"):t))?a:i)===s?a.call(l,{name:"title",hash:{},data:o,loc:{start:{line:4,column:67},end:{line:4,column:76}}}):a)+"' data-action="+u(typeof(a=null!=(a=c(n,"id")||(null!=t?c(t,"id"):t))?a:i)===s?a.call(l,{name:"id",hash:{},data:o,loc:{start:{line:4,column:90},end:{line:4,column:96}}}):a)+" class='img-card' />\n"},4:function(e,t,n,r,o){return"    <img src='https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg' class='img-card' />\n"},6:function(e,t,n,r,o){var a=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"            <span class='film-text genre'> "+e.escapeExpression(e.lambda(null!=t?a(t,"name"):t,t))+"</span>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,r,o){var a;return null!=(a=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:1,column:0},end:{line:20,column:9}}}))?a:""},useData:!0})}))}();
//# sourceMappingURL=library.16544a4c.js.map
