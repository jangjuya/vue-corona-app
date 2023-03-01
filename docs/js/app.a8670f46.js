(function(){var e={4305:function(e,n,t){"use strict";var r=t(9963),o=t(6252);function a(e,n,t,r,a,u){const i=(0,o.up)("MainContent"),l=(0,o.up)("BasicLayout");return(0,o.wg)(),(0,o.j4)(l,{onMenuSelect:n[0]||(n[0]=e=>{a.content=e})},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{content:a.content},null,8,["content"])])),_:1})}var u=t(2001),i=t(3577);const l={class:"content-title"};function c(e,n,t,r,a,u){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("h2",l,(0,i.zw)(t.content.label),1),((0,o.wg)(),(0,o.j4)((0,o.LL)(a.targetComponent)))],64)}var s={name:"mainContent",props:{content:{type:Object,default(){return{label:"TEST Menu",path:"Test",index:"TestMenu"}}}},data(){return{targetComponent:null}},watch:{content:{deep:!0,handler:function(e){this.targetComponent=(0,o.RC)((()=>t(8660)(`./${e.path}/${e.index}`)))}}}},d=t(3744);const f=(0,d.Z)(s,[["render",c]]);var p=f,m={name:"App",components:{BasicLayout:u["default"],MainContent:p},data(){return{content:{label:"대시보드",index:"Dashboard",path:"main"}}}};const v=(0,d.Z)(m,[["render",a]]);var h=v,b=t(7737);t(4415);const w=(0,r.ri)(h);w.use(b.Z),w.mount("#app")},8784:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var r=t(6252);const o=e=>((0,r.dD)("data-v-32b4d480"),e=e(),(0,r.Cn)(),e),a=o((()=>(0,r._)("h1",null,"Corona Information",-1))),u=[a];function i(e,n,t,o,a,i){return(0,r.wg)(),(0,r.iD)("div",null,u)}var l={name:"BasicHeader"},c=t(3744);const s=(0,c.Z)(l,[["render",i],["__scopeId","data-v-32b4d480"]]);var d=s},2001:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var r=t(6252);function o(e,n,t,o,a,u){const i=(0,r.up)("BasicHeader"),l=(0,r.up)("el-header"),c=(0,r.up)("SideMenu"),s=(0,r.up)("el-aside"),d=(0,r.up)("el-main"),f=(0,r.up)("el-container");return(0,r.wg)(),(0,r.j4)(f,{class:"main2"},{default:(0,r.w5)((()=>[(0,r.Wm)(l,null,{default:(0,r.w5)((()=>[(0,r.Wm)(i)])),_:1}),(0,r.Wm)(f,null,{default:(0,r.w5)((()=>[(0,r.Wm)(s,{width:o.menuWidth},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{isCollapse:o.isCollapse,onMenuSelect:n[0]||(n[0]=n=>{e.$emit("menuSelect",n)})},null,8,["isCollapse"])])),_:1},8,["width"]),(0,r.Wm)(f,null,{default:(0,r.w5)((()=>[(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.WI)(e.$slots,"default")])),_:3})])),_:3})])),_:3})])),_:3})}var a=t(8784),u=t(2571),i=t(2262);function l(){let e=(0,i.iH)(window.innerWidth);const n=()=>e.value=window.innerWidth;(0,r.bv)((()=>window.addEventListener("resize",n))),(0,r.Ah)((()=>window.removeEventListener("resize",n)));const t=(0,r.Fl)((()=>{let n="sm";return e.value>549&&e.value<1200&&(n="md"),e.value>1199&&(n="lg"),n}));return{type:t}}var c={name:"basicLayout",components:{BasicHeader:a["default"],SideMenu:u["default"]},setup(){const{type:e}=l(),n=(0,r.Fl)((()=>"sm"===e.value)),t=(0,r.Fl)((()=>n.value?"65px":"200px"));return{isCollapse:n,menuWidth:t}}},s=t(3744);const d=(0,s.Z)(c,[["render",o]]);var f=d},2571:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var r=t(6252),o=t(3577);function a(e,n,t,a,u,i){const l=(0,r.up)("el-icon"),c=(0,r.up)("el-menu-item"),s=(0,r.up)("el-sub-menu"),d=(0,r.up)("el-menu"),f=(0,r.up)("el-col"),p=(0,r.up)("el-row");return(0,r.wg)(),(0,r.j4)(p,{class:"tac"},{default:(0,r.w5)((()=>[(0,r.Wm)(f,null,{default:(0,r.w5)((()=>[(0,r.Wm)(d,{collapse:t.isCollapse},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.menuItem,(e=>((0,r.wg)(),(0,r.j4)(s,{key:e.index,index:e.index},{title:(0,r.w5)((()=>[(0,r.Wm)(l,null,{default:(0,r.w5)((()=>[((0,r.wg)(),(0,r.j4)((0,r.LL)(e.icon)))])),_:2},1024),(0,r._)("span",null,(0,o.zw)(e.label),1)])),default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.submenus,(e=>((0,r.wg)(),(0,r.j4)(c,{onClick:n=>a.handSelect(e),key:e.index,index:e.index},{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)(e.label),1)])),_:2},1032,["onClick","index"])))),128))])),_:2},1032,["index"])))),128))])),_:1},8,["collapse"])])),_:1})])),_:1})}var u=t(2262),i=t(5781),l={name:"sideMenu",components:{Location:i.YeX,Setting:i.pEs},props:{isCollapse:Boolean},setup(e,n){const t=(0,u.qj)({menuItem:[{label:"코로나 현황 요약",index:"corona-briefing",icon:"location",submenus:[{label:"국가별 요약",index:"InternationalCases",path:"corona"},{label:"국내 요약",index:"DomesticCases",path:"corona"}]},{label:"코로나 분석",index:"corona-analysis",icon:"setting",submenus:[{label:"샘플메뉴1",index:"sample1",path:"corona"},{label:"샘플메뉴2",index:"sample2",path:"corona"}]}]}),r=e=>{n.emit("menuSelect",e)};return{...(0,u.BK)(t),handSelect:r}}},c=t(3744);const s=(0,c.Z)(l,[["render",a]]);var d=s},8660:function(e,n,t){var r={"./charts/ChartGraph":[1206,206],"./charts/ChartGraph.vue":[1206,206],"./corona/DomesticCases":[9988,206,26,988],"./corona/DomesticCases.vue":[9988,206,26,988],"./corona/InternationalCases":[7989,26,989],"./corona/InternationalCases.vue":[7989,26,989],"./layouts/BasicHeader":[8784],"./layouts/BasicHeader.vue":[8784],"./layouts/BasicLayout":[2001],"./layouts/BasicLayout.vue":[2001],"./layouts/SideMenu":[2571],"./layouts/SideMenu.vue":[2571]};function o(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],o=n[0];return Promise.all(n.slice(1).map(t.e)).then((function(){return t(o)}))}o.keys=function(){return Object.keys(r)},o.id=8660,e.exports=o}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,loaded:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,a){if(!r){var u=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],a=e[s][2];for(var i=!0,l=0;l<r.length;l++)(!1&a||u>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[l])}))?r.splice(l--,1):(i=!1,a<u&&(u=a));if(i){e.splice(s--,1);var c=o();void 0!==c&&(n=c)}}return n}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[r,o,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{26:"4a97ecb6",206:"8b456301",988:"31910c21",989:"a6fcedb4"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{988:"bcd227fc",989:"e3b9456b"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="vue-corona-app:";t.l=function(r,o,a,u){if(e[r])e[r].push(o);else{var i,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var d=c[s];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==n+a){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,t.nc&&i.setAttribute("nonce",t.nc),i.setAttribute("data-webpack",n+a),i.src=r),e[r]=[o];var f=function(n,t){i.onerror=i.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.p="/vue-corona-app/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,r,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var u=function(t){if(a.onerror=a.onload=null,"load"===t.type)r();else{var u=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.href||n,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=u,l.request=i,a.parentNode.removeChild(a),o(l)}};return a.onerror=a.onload=u,a.href=n,t?t.parentNode.insertBefore(a,t.nextSibling):document.head.appendChild(a),a},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===n))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],a=o.getAttribute("data-href");if(a===e||a===n)return o}},r=function(r){return new Promise((function(o,a){var u=t.miniCssF(r),i=t.p+u;if(n(u,i))return o();e(r,i,null,o,a)}))},o={143:0};t.f.miniCss=function(e,n){var t={988:1,989:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=a);var u=t.p+t.u(n),i=new Error,l=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;i.message="Loading chunk "+n+" failed.\n("+a+": "+u+")",i.name="ChunkLoadError",i.type=a,i.request=u,o[1](i)}};t.l(u,l,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,a,u=r[0],i=r[1],l=r[2],c=0;if(u.some((function(n){return 0!==e[n]}))){for(o in i)t.o(i,o)&&(t.m[o]=i[o]);if(l)var s=l(t)}for(n&&n(r);c<u.length;c++)a=u[c],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(s)},r=self["webpackChunkvue_corona_app"]=self["webpackChunkvue_corona_app"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(4305)}));r=t.O(r)})();
//# sourceMappingURL=app.a8670f46.js.map