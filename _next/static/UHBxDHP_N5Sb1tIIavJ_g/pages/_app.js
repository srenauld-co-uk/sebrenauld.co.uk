(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"1TCz":function(t,e,n){"use strict";n.r(e);var r=n("0iUn"),o=n("sLSF"),s=n("MI3g"),a=n("a7VT"),i=n("Tit0"),u=n("vYYK"),c=n("q1tI"),f=n.n(c),p=n("8Bbg"),l=n.n(p),h=n("e5UO"),d=n("ln6h"),m=n.n(d),v=n("O40h"),y=n("XXOK"),w=n.n(y),x=function(){function t(){Object(r.a)(this,t),this.modules=[]}return Object(o.a)(t,[{key:"with",value:function(t){return this.modules.push(t),this}},{key:"build",value:function(t){var e={settings:{},client:function(t){throw Error("A client generator was not defined")},lazy:function(){return!1},prompt:function(){var t=Object(v.a)(m.a.mark(function t(e,n){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:throw Error("A prompt method was not defined.");case 1:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}(),authenticate:function(){var t=Object(v.a)(m.a.mark(function t(){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:throw Error("An authentication mechanism was not defined.");case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),session:function(){var t=Object(v.a)(m.a.mark(function t(e){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:throw Error("A session validation function was not defined.");case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},n=!0,r=!1,o=void 0;try{for(var s,a=w()(this.modules);!(n=(s=a.next()).done);n=!0){s.value.bind(e)(e)}}catch(i){r=!0,o=i}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}return e}}]),t}(),b=function(){return function(t){var e=this;this.authenticate=Object(v.a)(m.a.mark(function t(){var n;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.discover){t.next=3;break}return t.next=3,e.discover();case 3:return t.next=5,e.prompt(e.settings.authorizeUrl,function(t,e){if(e&&e.access_token)return e.access_token});case 5:return n=t.sent,t.next=8,e.session(n);case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}},t)}))}.apply(this,[function(){var t=Object(v.a)(m.a.mark(function t(e,n){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.access_token){t.next=2;break}throw new Error("No access token was returned by the remote server.");case 2:return t.abrupt("return",n.access_token);case 3:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()])},g=n("eVuF"),k=n.n(g),O=function(t){t.prompt=function(){var t=Object(v.a)(m.a.mark(function t(e,n){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new k.a(function(){var t=Object(v.a)(m.a.mark(function t(r,o){var s;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:(s=window.open(e)).addEventListener("load",function(){var t=Object(v.a)(m.a.mark(function t(e){var a,i,u;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.target.location.hash.substr(1),i=a.split("&").reduce(function(t,e){var n=e.split("=");return t[n[0]]=n[1],t},{}),t.prev=2,t.t0=n,!t.t0){t.next=8;break}return t.next=7,n(s,i);case 7:t.t0=t.sent;case 8:if(!(u=t.t0)){t.next=12;break}return s.close(),t.abrupt("return",r(u));case 12:t.next=18;break;case 14:return t.prev=14,t.t1=t.catch(2),s.close(),t.abrupt("return",o(t.t1));case 18:case"end":return t.stop()}},t,null,[[2,14]])}));return function(e){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()));case 1:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()},T=n("vDqi"),j=n.n(T),E=function(){function t(e,n){Object(r.a)(this,t),this.key=e,this.token=n}return Object(o.a)(t,[{key:"get",value:function(){var t=Object(v.a)(m.a.mark(function t(e){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.request({url:e,method:"GET"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"post",value:function(){var t=Object(v.a)(m.a.mark(function t(e,n){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.request({url:e,method:"POST",data:n});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()},{key:"put",value:function(){var t=Object(v.a)(m.a.mark(function t(e,n){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.request({url:e,method:"POST",data:n});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()},{key:"delete",value:function(){var t=Object(v.a)(m.a.mark(function t(e){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.request({url:e,method:"DELETE"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"request",value:function(){var t=Object(v.a)(m.a.mark(function t(e){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.url=e.url.indexOf("?")>=0?e.url+"&key=".concat(this.key,"&access_token=").concat(this.token):e.url+"?key=".concat(this.key,"&access_token=").concat(this.token),t.next=3,j.a.request(e);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}]),t}();n("KNk5"),n("nYsX");n.d(e,"default",function(){return R});var S,C=f.a.createElement,A={stackoverflow:(S=Object(u.a)({clientId:"",site:"stackoverflow",scopes:"id_token email profile",redirectUri:"http://localhost:3000/test",key:"1mGh80)hm8HlpUlULpnUoQ(("},"clientId",16164),(new x).with(b).with(O).with(function(t){var e=this,n=this.settings.wrapRequest;this.settings.wrapRequest=function(t,e){return n&&(t=n(t,e)),t.url=t.url.indexOf("?")>=0?t.url+"&access_token="+e:t.url+"?access_token="+e,t},this.settings.authorizeUrl="https://stackoverflow.com/oauth/dialog?scopes=".concat(S.scopes,"&client_id=").concat(S.clientId,"&redirect_uri=").concat(S.redirectUri),this.client=function(t){return new E(S.key,t)},this.session=function(){var t=Object(v.a)(m.a.mark(function t(n){var r,o;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.client(n).get("https://api.stackexchange.com/2.2/me?site=".concat(S.site,"&order=desc&sort=reputation&filter=default"));case 2:if((r=t.sent)&&r.data&&r.data.items&&r.data.items.length){t.next=5;break}throw Error("Authentication failure - no profile retrieved");case 5:return(r=r.data).items[0].sub=r.items[0].account_id,o={sub:r.items[0].account_id,name:r.items[0].display_name,picture:r.items[0].profile_image},t.abrupt("return",{profile:o,client:function(){return new E(S.key,n)}});case 9:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}).build())},R=function(t){function e(){return Object(r.a)(this,e),Object(s.a)(this,Object(a.a)(e).apply(this,arguments))}return Object(i.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps;return C(h.b,{sources:A,sessionStore:{}},C(e,n))}}]),e}(l.a)},"2SVd":function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},"5oMp":function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},"8Bbg":function(t,e,n){t.exports=n("B5Ud")},"8oxB":function(t,e){var n,r,o=t.exports={};function s(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function i(t){if(n===setTimeout)return setTimeout(t,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:s}catch(t){n=s}try{r="function"===typeof clearTimeout?clearTimeout:a}catch(t){r=a}}();var u,c=[],f=!1,p=-1;function l(){f&&u&&(f=!1,u.length?c=u.concat(c):p=-1,c.length&&h())}function h(){if(!f){var t=i(l);f=!0;for(var e=c.length;e;){for(u=c,c=[];++p<e;)u&&u[p].run();p=-1,e=c.length}u=null,f=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function m(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new d(t,e)),1!==c.length||f||i(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"9rSQ":function(t,e,n){"use strict";var r=n("xTJ+");function o(){this.handlers=[]}o.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},o.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},o.prototype.forEach=function(t){r.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=o},B5Ud:function(t,e,n){"use strict";var r=n("/HRN"),o=n("WaGi"),s=n("ZDA2"),a=n("/+P4"),i=n("N9n2"),u=n("ln6h"),c=n("KI45");e.__esModule=!0,e.Container=function(t){0;return t.children},e.createUrl=x,e.default=void 0;var f=c(n("htGi")),p=c(n("+oT+")),l=c(n("q1tI")),h=c(n("17x9")),d=n("g/15");e.AppInitialProps=d.AppInitialProps;var m=n("nOHt");function v(t){return y.apply(this,arguments)}function y(){return(y=(0,p.default)(u.mark(function t(e){var n,r,o;return u.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.Component,r=e.ctx,t.next=3,(0,d.loadGetInitialProps)(n,r);case 3:return o=t.sent,t.abrupt("return",{pageProps:o});case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}var w=function(t){function e(){return r(this,e),s(this,a(e).apply(this,arguments))}return i(e,t),o(e,[{key:"getChildContext",value:function(){return{router:(0,m.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(t,e){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,r=t.pageProps,o=x(e);return l.default.createElement(n,(0,f.default)({},r,{url:o}))}}]),e}(l.default.Component);function x(t){var e=t.pathname,n=t.asPath,r=t.query;return{get query(){return r},get pathname(){return e},get asPath(){return n},back:function(){t.back()},push:function(e,n){return t.push(e,n)},pushTo:function(e,n){var r=n?e:"",o=n||e;return t.push(r,o)},replace:function(e,n){return t.replace(e,n)},replaceTo:function(e,n){var r=n?e:"",o=n||e;return t.replace(r,o)}}}e.default=w,w.childContextTypes={router:h.default.object},w.origGetInitialProps=v,w.getInitialProps=v},CgaS:function(t,e,n){"use strict";var r=n("xTJ+"),o=n("MLWZ"),s=n("9rSQ"),a=n("UnBK"),i=n("SntB");function u(t){this.defaults=t,this.interceptors={request:new s,response:new s}}u.prototype.request=function(t){"string"===typeof t?(t=arguments[1]||{}).url=arguments[0]:t=t||{},(t=i(this.defaults,t)).method=t.method?t.method.toLowerCase():"get";var e=[a,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},u.prototype.getUri=function(t){return t=i(this.defaults,t),o(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],function(t){u.prototype[t]=function(e,n){return this.request(r.merge(n||{},{method:t,url:e}))}}),r.forEach(["post","put","patch"],function(t){u.prototype[t]=function(e,n,o){return this.request(r.merge(o||{},{method:t,url:e,data:n}))}}),t.exports=u},DfZB:function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},E8gZ:function(t,e,n){var r=n("jmDH"),o=n("w6GO"),s=n("NsO/"),a=n("NV0k").f;t.exports=function(t){return function(e){for(var n,i=s(e),u=o(i),c=u.length,f=0,p=[];c>f;)n=u[f++],r&&!a.call(i,n)||p.push(t?[n,i[n]]:i[n]);return p}}},GcxT:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},HSsa:function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},JEQr:function(t,e,n){"use strict";(function(e){var r=n("xTJ+"),o=n("yK9s"),s={"Content-Type":"application/x-www-form-urlencoded"};function a(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var i={adapter:function(){var t;return"undefined"!==typeof e&&"[object process]"===Object.prototype.toString.call(e)?t=n("tQ2B"):"undefined"!==typeof XMLHttpRequest&&(t=n("tQ2B")),t}(),transformRequest:[function(t,e){return o(e,"Accept"),o(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t)?t:r.isArrayBufferView(t)?t.buffer:r.isURLSearchParams(t)?(a(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):r.isObject(t)?(a(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"===typeof t)try{t=JSON.parse(t)}catch(e){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],function(t){i.headers[t]={}}),r.forEach(["post","put","patch"],function(t){i.headers[t]=r.merge(s)}),t.exports=i}).call(this,n("8oxB"))},"LR/J":function(t,e,n){t.exports=n("tgZa")},LYNF:function(t,e,n){"use strict";var r=n("OH9c");t.exports=function(t,e,n,o,s){var a=new Error(t);return r(a,e,n,o,s)}},Lmem:function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},MLWZ:function(t,e,n){"use strict";var r=n("xTJ+");function o(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var s;if(n)s=n(e);else if(r.isURLSearchParams(e))s=e.toString();else{var a=[];r.forEach(e,function(t,e){null!==t&&"undefined"!==typeof t&&(r.isArray(t)?e+="[]":t=[t],r.forEach(t,function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),a.push(o(e)+"="+o(t))}))}),s=a.join("&")}if(s){var i=t.indexOf("#");-1!==i&&(t=t.slice(0,i)),t+=(-1===t.indexOf("?")?"?":"&")+s}return t}},O40h:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n("eVuF"),o=n.n(r);function s(t,e,n,r,s,a,i){try{var u=t[a](i),c=u.value}catch(f){return void n(f)}u.done?e(c):o.a.resolve(c).then(r,s)}function a(t){return function(){var e=this,n=arguments;return new o.a(function(r,o){var a=t.apply(e,n);function i(t){s(a,r,o,i,u,"next",t)}function u(t){s(a,r,o,i,u,"throw",t)}i(void 0)})}}},OH9c:function(t,e,n){"use strict";t.exports=function(t,e,n,r,o){return t.config=e,n&&(t.code=n),t.request=r,t.response=o,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t}},OTTw:function(t,e,n){"use strict";var r=n("xTJ+");t.exports=r.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=o(window.location.href),function(e){var n=r.isString(e)?o(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0}},"Rn+g":function(t,e,n){"use strict";var r=n("LYNF");t.exports=function(t,e,n){var o=n.config.validateStatus;!o||o(n.status)?t(n):e(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},SntB:function(t,e,n){"use strict";var r=n("xTJ+");t.exports=function(t,e){e=e||{};var n={};return r.forEach(["url","method","params","data"],function(t){"undefined"!==typeof e[t]&&(n[t]=e[t])}),r.forEach(["headers","auth","proxy"],function(o){r.isObject(e[o])?n[o]=r.deepMerge(t[o],e[o]):"undefined"!==typeof e[o]?n[o]=e[o]:r.isObject(t[o])?n[o]=r.deepMerge(t[o]):"undefined"!==typeof t[o]&&(n[o]=t[o])}),r.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],function(r){"undefined"!==typeof e[r]?n[r]=e[r]:"undefined"!==typeof t[r]&&(n[r]=t[r])}),n}},UnBK:function(t,e,n){"use strict";var r=n("xTJ+"),o=n("xAGQ"),s=n("Lmem"),a=n("JEQr"),i=n("2SVd"),u=n("5oMp");function c(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){return c(t),t.baseURL&&!i(t.url)&&(t.url=u(t.baseURL,t.url)),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||a.adapter)(t).then(function(e){return c(t),e.data=o(e.data,e.headers,t.transformResponse),e},function(e){return s(e)||(c(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},doui:function(t,e,n){"use strict";var r=n("p0XB"),o=n.n(r);var s=n("XXOK"),a=n.n(s);function i(t,e){return function(t){if(o()(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,s=void 0;try{for(var i,u=a()(t);!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(c){o=!0,s=c}finally{try{r||null==u.return||u.return()}finally{if(o)throw s}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(e,"a",function(){return i})},e5UO:function(t,e,n){"use strict";var r=n("ln6h"),o=n.n(r),s=n("O40h"),a=n("q1tI"),i=n.n(a),u=n("doui"),c=n("LR/J"),f=n.n(c),p=n("vYYK"),l=n("0iUn"),h=n("sLSF"),d=n("MI3g"),m=n("a7VT"),v=n("AT/M"),y=n("Tit0"),w=i.a.createElement,x=function(t){return w("p",null,"Test")},b=i.a.createElement;n.d(e,"b",function(){return j}),n.d(e,"a",function(){return S});var g,k=i.a.createElement,O=i.a.createContext(),T=(g=O.Provider,{setSessionStore:function(t){t,resumeAll()},Consumer:O.Consumer,Element:function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(d.a)(this,Object(m.a)(e).call(this,t))).state={sessions:{},initiating:!0,methods:{start:function(){var t=Object(s.a)(o.a.mark(function t(e){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",n.startSession.bind(Object(v.a)(n))(e));case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},inPageAuthentication:null},n}return Object(y.a)(e,t),Object(h.a)(e,[{key:"componentDidMount",value:function(){var t=Object(s.a)(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.resumeAll();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"resume",value:function(){var t=Object(s.a)(o.a.mark(function t(e){var n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.props.sources[e]){t.next=2;break}return t.abrupt("return",null);case 2:return t.next=4,this.props.sessionStore.resume({source:this.props.sources[e]});case 4:if(n=t.sent){t.next=7;break}return t.abrupt("return",{});case 7:return this.setState({sessions:Object(p.a)({},e,n[e]),initiating:!1}),t.abrupt("return",n[e]);case 9:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"resumeAll",value:function(){var t=Object(s.a)(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.resume(f()(this.props.sources).filter(function(t){var e=Object(u.a)(t,2);return e[0],!e[1].lazy()}));case 2:t.sent,this.setState({initiating:!1});case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"startSession",value:function(){var t=Object(s.a)(o.a.mark(function t(e){var n,r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.state.sessions[e]){t.next=9;break}return t.next=3,this.authenticateWith(e);case 3:return n=t.sent,console.log(n),this.setState({sessions:Object(p.a)({},e,n)}),t.next=8,n.client();case 8:return t.abrupt("return",t.sent);case 9:return t.prev=9,t.next=12,this.props.sessionStore.resume({source:this.props.sources[e]});case 12:if(!(r=t.sent)){t.next=15;break}return t.abrupt("return",r.client());case 15:return t.next=17,this.state.sessions[e].client();case 17:return t.abrupt("return",t.sent);case 20:return t.prev=20,t.t0=t.catch(9),t.next=24,this.authenticateWith(e,t.t0);case 24:return t.abrupt("return",t.sent);case 25:case"end":return t.stop()}},t,this,[[9,20]])}));return function(e){return t.apply(this,arguments)}}()},{key:"authenticateWith",value:function(){var t=Object(s.a)(o.a.mark(function t(e){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.props.sources[e]){t.next=2;break}throw new Error("Source not defined");case 2:return t.next=4,this.props.sources[e].authenticate();case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){return b(i.a.Fragment,null,this.state.inPageAuthentication&&b(x,{source:this.state.inPageAuthentication,sessionCallback:this.startSession}),b(g,{value:this.state},this.props.children))}}]),e}(i.a.Component)}),j=T.Element,E=T.Consumer,S=function(t){var e=t.item;return k(E,null,function(n){return n&&!n.initiating?t.site?k(e,{session:n&&n.sessions&&n.sessions[t.site],initiate:Object(s.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.methods.start(t.site));case 1:case"end":return e.stop()}},e)}))}):k(e,{session:n&&n.sessions,initiate:function(){var t=Object(s.a)(o.a.mark(function t(e){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",n.methods.start(e));case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}):null})}},endd:function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},eqyj:function(t,e,n){"use strict";var r=n("xTJ+");t.exports=r.isStandardBrowserEnv()?{write:function(t,e,n,o,s,a){var i=[];i.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),r.isString(o)&&i.push("path="+o),r.isString(s)&&i.push("domain="+s),!0===a&&i.push("secure"),document.cookie=i.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},"jfS+":function(t,e,n){"use strict";var r=n("endd");function o(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new r(t),e(n.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var t;return{token:new o(function(e){t=e}),cancel:t}},t.exports=o},nGDx:function(t,e,n){var r=n("Y7ZC"),o=n("E8gZ")(!0);r(r.S,"Object",{entries:function(t){return o(t)}})},tQ2B:function(t,e,n){"use strict";var r=n("xTJ+"),o=n("Rn+g"),s=n("MLWZ"),a=n("w0Vi"),i=n("OTTw"),u=n("LYNF");t.exports=function(t){return new Promise(function(e,c){var f=t.data,p=t.headers;r.isFormData(f)&&delete p["Content-Type"];var l=new XMLHttpRequest;if(t.auth){var h=t.auth.username||"",d=t.auth.password||"";p.Authorization="Basic "+btoa(h+":"+d)}if(l.open(t.method.toUpperCase(),s(t.url,t.params,t.paramsSerializer),!0),l.timeout=t.timeout,l.onreadystatechange=function(){if(l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in l?a(l.getAllResponseHeaders()):null,r={data:t.responseType&&"text"!==t.responseType?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:n,config:t,request:l};o(e,c,r),l=null}},l.onabort=function(){l&&(c(u("Request aborted",t,"ECONNABORTED",l)),l=null)},l.onerror=function(){c(u("Network Error",t,null,l)),l=null},l.ontimeout=function(){c(u("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",l)),l=null},r.isStandardBrowserEnv()){var m=n("eqyj"),v=(t.withCredentials||i(t.url))&&t.xsrfCookieName?m.read(t.xsrfCookieName):void 0;v&&(p[t.xsrfHeaderName]=v)}if("setRequestHeader"in l&&r.forEach(p,function(t,e){"undefined"===typeof f&&"content-type"===e.toLowerCase()?delete p[e]:l.setRequestHeader(e,t)}),t.withCredentials&&(l.withCredentials=!0),t.responseType)try{l.responseType=t.responseType}catch(y){if("json"!==t.responseType)throw y}"function"===typeof t.onDownloadProgress&&l.addEventListener("progress",t.onDownloadProgress),"function"===typeof t.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){l&&(l.abort(),c(t),l=null)}),void 0===f&&(f=null),l.send(f)})}},tgZa:function(t,e,n){n("nGDx"),t.exports=n("WEpk").Object.entries},vDqi:function(t,e,n){t.exports=n("zuR4")},w0Vi:function(t,e,n){"use strict";var r=n("xTJ+"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,s,a={};return t?(r.forEach(t.split("\n"),function(t){if(s=t.indexOf(":"),e=r.trim(t.substr(0,s)).toLowerCase(),n=r.trim(t.substr(s+1)),e){if(a[e]&&o.indexOf(e)>=0)return;a[e]="set-cookie"===e?(a[e]?a[e]:[]).concat([n]):a[e]?a[e]+", "+n:n}}),a):a}},x86X:function(t,e){t.exports=function(t){return null!=t&&null!=t.constructor&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}},xAGQ:function(t,e,n){"use strict";var r=n("xTJ+");t.exports=function(t,e,n){return r.forEach(n,function(n){t=n(t,e)}),t}},"xTJ+":function(t,e,n){"use strict";var r=n("HSsa"),o=n("x86X"),s=Object.prototype.toString;function a(t){return"[object Array]"===s.call(t)}function i(t){return null!==t&&"object"===typeof t}function u(t){return"[object Function]"===s.call(t)}function c(t,e){if(null!==t&&"undefined"!==typeof t)if("object"!==typeof t&&(t=[t]),a(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}t.exports={isArray:a,isArrayBuffer:function(t){return"[object ArrayBuffer]"===s.call(t)},isBuffer:o,isFormData:function(t){return"undefined"!==typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"===typeof t},isNumber:function(t){return"number"===typeof t},isObject:i,isUndefined:function(t){return"undefined"===typeof t},isDate:function(t){return"[object Date]"===s.call(t)},isFile:function(t){return"[object File]"===s.call(t)},isBlob:function(t){return"[object Blob]"===s.call(t)},isFunction:u,isStream:function(t){return i(t)&&u(t.pipe)},isURLSearchParams:function(t){return"undefined"!==typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!==typeof window&&"undefined"!==typeof document},forEach:c,merge:function t(){var e={};function n(n,r){"object"===typeof e[r]&&"object"===typeof n?e[r]=t(e[r],n):e[r]=n}for(var r=0,o=arguments.length;r<o;r++)c(arguments[r],n);return e},deepMerge:function t(){var e={};function n(n,r){"object"===typeof e[r]&&"object"===typeof n?e[r]=t(e[r],n):e[r]="object"===typeof n?t({},n):n}for(var r=0,o=arguments.length;r<o;r++)c(arguments[r],n);return e},extend:function(t,e,n){return c(e,function(e,o){t[o]=n&&"function"===typeof e?r(e,n):e}),t},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}}},yK9s:function(t,e,n){"use strict";var r=n("xTJ+");t.exports=function(t,e){r.forEach(t,function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])})}},zuR4:function(t,e,n){"use strict";var r=n("xTJ+"),o=n("HSsa"),s=n("CgaS"),a=n("SntB");function i(t){var e=new s(t),n=o(s.prototype.request,e);return r.extend(n,s.prototype,e),r.extend(n,e),n}var u=i(n("JEQr"));u.Axios=s,u.create=function(t){return i(a(u.defaults,t))},u.Cancel=n("endd"),u.CancelToken=n("jfS+"),u.isCancel=n("Lmem"),u.all=function(t){return Promise.all(t)},u.spread=n("DfZB"),t.exports=u,t.exports.default=u}},[["GcxT",1,0,12]]]);