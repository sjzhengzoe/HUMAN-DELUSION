(function(){"use strict";var t={14637:function(t,e,n){n(28831);var a=n(1660),r=(n(66992),n(88674),n(17727),n(28935)),o=(n(33948),n(12809));r["default"].config.productionTip=!1,r["default"].use(o.Z);const i=[{path:"/",component:()=>Promise.all([n.e(331),n.e(107)]).then(n.bind(n,57802))},{path:"/home",component:()=>Promise.all([n.e(331),n.e(107)]).then(n.bind(n,57802))},{path:"/book",component:()=>Promise.all([n.e(331),n.e(308)]).then(n.bind(n,50409))},{path:"/pay",component:()=>Promise.all([n.e(331),n.e(665)]).then(n.bind(n,14690))},{path:"/result",component:()=>Promise.all([n.e(331),n.e(183)]).then(n.bind(n,46806))}],s=new o.Z({routes:i,base:"hycsb",mode:"history",scrollBehavior:()=>({y:0})});var u=s,l=(n(38862),n(34665)),c=n(26166),d=n.n(c),f=n(83672);r["default"].use(l.ZP);const h=new l.ZP.Store({state:{loading:!0,payData:{},baseData:null,resultData:{},adsData:{},DOMAIN:"https://a.xymlcs.com",DOMAIN_PAY:"https://p2.xyzscs.com",TAG:"hycsb"},mutations:{setPayData(t,e){t.payData=e},setResultData(t,e){t.resultData=e},setLoading(t,e){t.loading=e},setBaseData(t,e){t.baseData=e},setAdsData(t,e){t.adsData=e}},actions:{async getConfigData({state:t},{type:e="home",channel:n}){var a;const r=await d().get(`${t.DOMAIN}/product/config`,{params:{tag:t.TAG,channel:"home"==e?f.Z.getPChan():n}}),o=null===(a=r.data)||void 0===a?void 0:a.business;return f.Z.setLocal("product",JSON.stringify(r.data)),f.Z.setLocal("business",JSON.stringify(o)),f.Z.setLocal("tag",t.TAG),r.data},async postOrder({state:t},{data:e,cb:n}){var a;const r=await d().post(`${t.DOMAIN}/order/order`,{...e,tag:t.TAG}),o=null===(a=r.data)||void 0===a?void 0:a.oid;n(o)},async getBaseData({state:t,commit:e},{oid:n}){const a=await d().get(`${t.DOMAIN}/algorithm/base`,{params:{oid:n,tag:t.TAG}});e("setBaseData",a.data)},async getAdsData({state:t,commit:e}){const n=await d().get(`${t.DOMAIN}/product/recommend`);e("setAdsData",n.data)},async getPayData({state:t,commit:e},{oid:n}){const a=await d().get(`${t.DOMAIN}/order/find`,{params:{oid:n,tag:t.TAG}});return e("setPayData",a.data),a.data},async postMobile({state:t},e){await d().post(`${t.DOMAIN}/order/bind`,{tag:t.TAG,...e})},async getResultData({state:t,commit:e},{oid:n}){const a=await d().get(`${t.DOMAIN}/algorithm/result`,{params:{oid:n,tag:t.TAG}});return e("setResultData",a.data),a.data}}});var p=h,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.loading?n("Loading",{staticClass:"loading",attrs:{color:"#fff",size:"30"}}):t._e(),n("router-view")],1)},g=[],y=(n(10567),n(52665)),v={name:"App",components:{Loading:y.Z},computed:{loading(){return this.$store.state.loading}},created(){}},b=v,D=n(1001),O=(0,D.Z)(b,m,g,!1,null,null,null),P=O.exports,w=n(31327),C=n.n(w);r["default"].config.productionTip=!1,r["default"].use(C()),r["default"].use(a.Z,{lazyComponent:!0}),new r["default"]({el:"#app",router:u,store:p,render:t=>t(P)})},83672:function(t,e,n){n(33948),n(38862),n(74916);const a={debug:!1,query:{},eventList:{DP:"purchase",RP:"repurchase"},define:["PChan","traceCode","eventCode"],enableDebug:function(){return this.debug=!0,this},dump:function(...t){this.debug&&console.log(...t)},initParams:function(){this.parseParams(),0!==Object.keys(this.query).length&&this.setLocal("queryParams",JSON.stringify(this.query))},parseParams:function(){let t=window.location.search;if(-1!==t.indexOf("?")){let e=t.substring(1),n=this.formatParam(e);this.dump("urlQuery数据初始化",n)}else this.dump("urlQuery无数据，不需要初始化");let e=window.location.hash;if(-1!==e.indexOf("?")){let t=e.substring(e.indexOf("?")+1),n=this.formatParam(t);this.dump("urlFragment数据初始化",n)}else this.dump("urlFragment无数据，不需要初始化");this.dump(JSON.stringify(this.query)),this.dump("query参数初始化完成",this.query)},formatParam:function(t){let e={},n=t.split("&");if(n.length>0)for(let a=0;a<n.length;a++){let t=n[a].split("=");e[t[0]]=t[1],-1===this.define.indexOf(t[0])?this.query[t[0]]=t[1]:this.setLocal(t[0],t[1])}return e},getQuery:function(t){return this.query[t]||null},getPChan:function(){let t=this.getLocal("PChan");return null===t?"":t},getEventCode:function(){let t=this.getLocal("eventCode");return null===t?this.eventList.DP:t},getFormattedParams:function(){let t=localStorage.getItem("queryParams");return null===t?"":t},getTraceCode:function(){let t="";return null===(t=this.getLocal("traceCode"))&&(t=Number(Math.random().toString().substr(2,10)+Date.now()).toString(36),this.setLocal("traceCode",t)),t},setLocal:function(t,e){""!==e&&localStorage.setItem(t,e)},getLocal:function(t){let e=localStorage.getItem(t);if(null!==e)try{return JSON.parse(e)}catch(n){return e}return null},transBirthday(t,e){let n={"-1":"未知时",0:"子时",1:"丑时",2:"丑时",3:"寅时",4:"寅时",5:"卯时",6:"卯时",7:"辰时",8:"辰时",9:"巳时",10:"巳时",11:"午时",12:"午时",13:"未时",14:"未时",15:"申时",16:"申时",17:"酉时",18:"酉时",19:"戌时",20:"戌时",21:"亥时",22:"亥时",23:"子时"},a=t.split("-");return a[0]+"年"+a[1]+"月"+a[2]+"日 "+n[e]},link:function(t){return-1===t.indexOf("?")?t+="?":t+="&",t+="eventCode="+this.getEventCode()+"&traceCode="+this.getTraceCode()+"&PChan="+this.getPChan(),this.dump("link",t),t},linkTo:function(t){window.location.href=this.link(t)}};e["Z"]=a}},e={};function n(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={exports:{}};return t[a].call(o.exports,o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,a,r,o){if(!a){var i=1/0;for(c=0;c<t.length;c++){a=t[c][0],r=t[c][1],o=t[c][2];for(var s=!0,u=0;u<a.length;u++)(!1&o||i>=o)&&Object.keys(n.O).every((function(t){return n.O[t](a[u])}))?a.splice(u--,1):(s=!1,o<i&&(i=o));if(s){t.splice(c--,1);var l=r();void 0!==l&&(e=l)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[a,r,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,a){return n.f[a](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="project:";n.l=function(a,r,o,i){if(t[a])t[a].push(r);else{var s,u;if(void 0!==o)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==e+o){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+o),s.src=a),t[a]=[r];var f=function(e,n){s.onerror=s.onload=null,clearTimeout(h);var r=t[a];if(delete t[a],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(t){return t(n)})),e)return e(n)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.j=143}(),function(){n.p="https://s.xymlcs.com/hycsb/"}(),function(){var t=function(t,e,n,a){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var o=function(o){if(r.onerror=r.onload=null,"load"===o.type)n();else{var i=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=s,r.parentNode.removeChild(r),a(u)}};return r.onerror=r.onload=o,r.href=e,document.head.appendChild(r),r},e=function(t,e){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var r=n[a],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===t||o===e))return r}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){r=i[a],o=r.getAttribute("data-href");if(o===t||o===e)return r}},a=function(a){return new Promise((function(r,o){var i=n.miniCssF(a),s=n.p+i;if(e(i,s))return r();t(a,s,r,o)}))},r={143:0};n.f.miniCss=function(t,e){var n={107:1,183:1,308:1,665:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=a(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,a){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)a.push(r[2]);else{var o=new Promise((function(n,a){r=t[e]=[n,a]}));a.push(r[2]=o);var i=n.p+n.u(e),s=new Error,u=function(a){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,r[1](s)}};n.l(i,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,a){var r,o,i=a[0],s=a[1],u=a[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(u)var c=u(n)}for(e&&e(a);l<i.length;l++)o=i[l],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(c)},a=self["webpackChunkproject"]=self["webpackChunkproject"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(14637)}));a=n.O(a)})();