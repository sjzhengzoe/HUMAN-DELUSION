(function(){"use strict";var t={14637:function(t,e,n){n(28831);var r=n(1660),a=(n(66992),n(88674),n(19601),n(17727),n(28935)),o=(n(41539),n(78783),n(33948),n(12809));a["default"].config.productionTip=!1,a["default"].use(o.Z);var i=[{path:"/",component:function(){return Promise.all([n.e(331),n.e(107)]).then(n.bind(n,57802))}},{path:"/home",component:function(){return Promise.all([n.e(331),n.e(107)]).then(n.bind(n,57802))}},{path:"/book",component:function(){return Promise.all([n.e(331),n.e(308)]).then(n.bind(n,50409))}},{path:"/pay",component:function(){return Promise.all([n.e(331),n.e(665)]).then(n.bind(n,14690))}},{path:"/result",component:function(){return Promise.all([n.e(331),n.e(183)]).then(n.bind(n,46806))}}],u=new o.Z({routes:i,base:"hycsb",mode:"history",scrollBehavior:function(){return{y:0}}}),s=u,c=n(93019),l=n(16198),f=(n(78975),n(38862),n(34665)),d=n(26166),h=n.n(d),p=n(83672);a["default"].use(f.ZP);var m=new f.ZP.Store({state:{loading:!0,payData:{},baseData:null,resultData:{},adsData:{},DOMAIN:"https://a.xymlcs.com",DOMAIN_PAY:"https://p2.xyzscs.com",TAG:"hycsb"},mutations:{setPayData:function(t,e){t.payData=e},setResultData:function(t,e){t.resultData=e},setLoading:function(t,e){t.loading=e},setBaseData:function(t,e){t.baseData=e},setAdsData:function(t,e){t.adsData=e}},actions:{getConfigData:function(t,e){return(0,l.Z)(regeneratorRuntime.mark((function n(){var r,a,o,i,u,s,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.state,o=e.type,i=void 0===o?"home":o,u=e.channel,n.next=4,h().get("".concat(a.DOMAIN,"/product/config"),{params:{tag:a.TAG,channel:"home"==i?p.Z.getPChan():u}});case 4:return s=n.sent,c=null===(r=s.data)||void 0===r?void 0:r.business,p.Z.setLocal("product",JSON.stringify(s.data)),p.Z.setLocal("business",JSON.stringify(c)),p.Z.setLocal("tag",a.TAG),n.abrupt("return",s.data);case 10:case"end":return n.stop()}}),n)})))()},postOrder:function(t,e){return(0,l.Z)(regeneratorRuntime.mark((function n(){var r,a,o,i,u,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.state,o=e.data,i=e.cb,n.next=4,h().post("".concat(a.DOMAIN,"/order/order"),(0,c.Z)((0,c.Z)({},o),{},{tag:a.TAG}));case 4:u=n.sent,s=null===(r=u.data)||void 0===r?void 0:r.oid,i(s);case 7:case"end":return n.stop()}}),n)})))()},getBaseData:function(t,e){return(0,l.Z)(regeneratorRuntime.mark((function n(){var r,a,o,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.state,a=t.commit,o=e.oid,n.next=4,h().get("".concat(r.DOMAIN,"/algorithm/base"),{params:{oid:o,tag:r.TAG}});case 4:i=n.sent,a("setBaseData",i.data);case 6:case"end":return n.stop()}}),n)})))()},getAdsData:function(t){return(0,l.Z)(regeneratorRuntime.mark((function e(){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.state,r=t.commit,e.next=3,h().get("".concat(n.DOMAIN,"/product/recommend"));case 3:a=e.sent,r("setAdsData",a.data);case 5:case"end":return e.stop()}}),e)})))()},getPayData:function(t,e){return(0,l.Z)(regeneratorRuntime.mark((function n(){var r,a,o,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.state,a=t.commit,o=e.oid,n.next=4,h().get("".concat(r.DOMAIN,"/order/find"),{params:{oid:o,tag:r.TAG}});case 4:return i=n.sent,a("setPayData",i.data),n.abrupt("return",i.data);case 7:case"end":return n.stop()}}),n)})))()},postMobile:function(t,e){return(0,l.Z)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.state,n.next=3,h().post("".concat(r.DOMAIN,"/order/bind"),(0,c.Z)({tag:r.TAG},e));case 3:case"end":return n.stop()}}),n)})))()},getResultData:function(t,e){return(0,l.Z)(regeneratorRuntime.mark((function n(){var r,a,o,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.state,a=t.commit,o=e.oid,n.next=4,h().get("".concat(r.DOMAIN,"/algorithm/result"),{params:{oid:o,tag:r.TAG}});case 4:return i=n.sent,a("setResultData",i.data),n.abrupt("return",i.data);case 7:case"end":return n.stop()}}),n)})))()}}}),g=m,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.loading?n("Loading",{staticClass:"loading",attrs:{color:"#fff",size:"30"}}):t._e(),n("router-view")],1)},y=[],b=(n(10567),n(52665)),w={name:"App",components:{Loading:b.Z},computed:{loading:function(){return this.$store.state.loading}},created:function(){}},D=w,O=n(1001),P=(0,O.Z)(D,v,y,!1,null,null,null),C=P.exports,A=n(31327),x=n.n(A);a["default"].config.productionTip=!1,a["default"].use(x()),a["default"].use(r.Z,{lazyComponent:!0}),new a["default"]({el:"#app",router:s,store:g,render:function(t){return t(C)}})},83672:function(t,e,n){n(47941),n(38862),n(74916),n(64765),n(82772),n(23123),n(96647),n(41539),n(39714),n(9653),n(29254);var r={debug:!1,query:{},eventList:{DP:"purchase",RP:"repurchase"},define:["PChan","traceCode","eventCode"],enableDebug:function(){return this.debug=!0,this},dump:function(){var t;this.debug&&(t=console).log.apply(t,arguments)},initParams:function(){this.parseParams(),0!==Object.keys(this.query).length&&this.setLocal("queryParams",JSON.stringify(this.query))},parseParams:function(){var t=window.location.search;if(-1!==t.indexOf("?")){var e=t.substring(1),n=this.formatParam(e);this.dump("urlQuery数据初始化",n)}else this.dump("urlQuery无数据，不需要初始化");var r=window.location.hash;if(-1!==r.indexOf("?")){var a=r.substring(r.indexOf("?")+1),o=this.formatParam(a);this.dump("urlFragment数据初始化",o)}else this.dump("urlFragment无数据，不需要初始化");this.dump(JSON.stringify(this.query)),this.dump("query参数初始化完成",this.query)},formatParam:function(t){var e={},n=t.split("&");if(n.length>0)for(var r=0;r<n.length;r++){var a=n[r].split("=");e[a[0]]=a[1],-1===this.define.indexOf(a[0])?this.query[a[0]]=a[1]:this.setLocal(a[0],a[1])}return e},getQuery:function(t){return this.query[t]||null},getPChan:function(){var t=this.getLocal("PChan");return null===t?"":t},getEventCode:function(){var t=this.getLocal("eventCode");return null===t?this.eventList.DP:t},getFormattedParams:function(){var t=localStorage.getItem("queryParams");return null===t?"":t},getTraceCode:function(){var t="";return null===(t=this.getLocal("traceCode"))&&(t=Number(Math.random().toString().substr(2,10)+Date.now()).toString(36),this.setLocal("traceCode",t)),t},setLocal:function(t,e){""!==e&&localStorage.setItem(t,e)},getLocal:function(t){var e=localStorage.getItem(t);if(null!==e)try{return JSON.parse(e)}catch(n){return e}return null},transBirthday:function(t,e){var n={"-1":"未知时",0:"子时",1:"丑时",2:"丑时",3:"寅时",4:"寅时",5:"卯时",6:"卯时",7:"辰时",8:"辰时",9:"巳时",10:"巳时",11:"午时",12:"午时",13:"未时",14:"未时",15:"申时",16:"申时",17:"酉时",18:"酉时",19:"戌时",20:"戌时",21:"亥时",22:"亥时",23:"子时"},r=t.split("-");return r[0]+"年"+r[1]+"月"+r[2]+"日 "+n[e]},link:function(t){return-1===t.indexOf("?")?t+="?":t+="&",t+="eventCode="+this.getEventCode()+"&traceCode="+this.getTraceCode()+"&PChan="+this.getPChan(),this.dump("link",t),t},linkTo:function(t){window.location.href=this.link(t)}};e["Z"]=r}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,loaded:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=t,function(){var t=[];n.O=function(e,r,a,o){if(!r){var i=1/0;for(l=0;l<t.length;l++){r=t[l][0],a=t[l][1],o=t[l][2];for(var u=!0,s=0;s<r.length;s++)(!1&o||i>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[s])}))?r.splice(s--,1):(u=!1,o<i&&(i=o));if(u){t.splice(l--,1);var c=a();void 0!==c&&(e=c)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[r,a,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"-legacy.js"}}(),function(){n.miniCssF=function(t){return"css/"+t+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="project:";n.l=function(r,a,o,i){if(t[r])t[r].push(a);else{var u,s;if(void 0!==o)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+o){u=f;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",e+o),u.src=r),t[r]=[a];var d=function(e,n){u.onerror=u.onload=null,clearTimeout(h);var a=t[r];if(delete t[r],u.parentNode&&u.parentNode.removeChild(u),a&&a.forEach((function(t){return t(n)})),e)return e(n)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){n.j=143}(),function(){n.p="https://s.xymlcs.com/hycsb/"}(),function(){var t=function(t,e,n,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var o=function(o){if(a.onerror=a.onload=null,"load"===o.type)n();else{var i=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.href||e,s=new Error("Loading CSS chunk "+t+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=u,a.parentNode.removeChild(a),r(s)}};return a.onerror=a.onload=o,a.href=e,document.head.appendChild(a),a},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=n[r],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===t||o===e))return a}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){a=i[r],o=a.getAttribute("data-href");if(o===t||o===e)return a}},r=function(r){return new Promise((function(a,o){var i=n.miniCssF(r),u=n.p+i;if(e(i,u))return a();t(r,u,a,o)}))},a={143:0};n.f.miniCss=function(t,e){var n={107:1,183:1,308:1,665:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=r(t).then((function(){a[t]=0}),(function(e){throw delete a[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,r){var a=n.o(t,e)?t[e]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise((function(n,r){a=t[e]=[n,r]}));r.push(a[2]=o);var i=n.p+n.u(e),u=new Error,s=function(r){if(n.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,a[1](u)}};n.l(i,s,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,o,i=r[0],u=r[1],s=r[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(a in u)n.o(u,a)&&(n.m[a]=u[a]);if(s)var l=s(n)}for(e&&e(r);c<i.length;c++)o=i[c],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(l)},r=self["webpackChunkproject"]=self["webpackChunkproject"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(14637)}));r=n.O(r)})();