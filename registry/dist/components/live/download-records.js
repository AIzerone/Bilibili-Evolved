!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports["live/download-records"]=o():e["live/download-records"]=o()}(self,(function(){return function(){"use strict";var e={65:function(e,o,t){t.r(o),t.d(o,{default:function(){return c}});var n=function(){var e=this,o=e.$createElement;return(e._self._c||o)("DefaultWidget",{staticClass:"download-live-records",attrs:{disabled:e.disabled,name:"下载录像",icon:"mdi-download"},on:{click:function(o){return e.download()}}})};n._withStripped=!0;var r=coreApis.ui,i=coreApis.ajax,s=coreApis.toast,d=coreApis.utils.log;var a=function(e,o,t,n,r,i,s,d){var a,c="function"==typeof e?e.options:e;if(o&&(c.render=o,c.staticRenderFns=t,c._compiled=!0),n&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),s?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=a):r&&(a=d?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),a)if(c.functional){c._injectStyles=a;var l=c.render;c.render=function(e,o){return a.call(o),l(e,o)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,a):[a]}return{exports:e,options:c}}(Vue.extend({components:{DefaultWidget:r.DefaultWidget},data:()=>({disabled:!1}),methods:{async download(){try{this.disabled=!0;const e=document.URL.replace(window.location.search,"").match(/^https:\/\/live\.bilibili\.com\/record\/(.+)/);if(!e)return void(0,d.logError)(new Error(`获取录像ID失败: ${document.URL}`));const o=e[1],t=await(0,i.getJson)(`https://api.live.bilibili.com/xlive/web-room/v1/record/getLiveRecordUrl?rid=${o}&platform=html5`);if(0!==t.code)return void(0,d.logError)(new Error(`获取录像链接失败: ${t.message}`));const n=t.data.list.map((e=>e.url));s.Toast.success(n.map((e=>`<a class="download-link" target="_blank" href="${e}">${e}</a>`)).join("\n"),"下载录像")}finally{this.disabled=!1}}}}),n,[],!1,null,null,null);a.options.__file="registry/lib/components/live/download-records/DownloadRecords.vue";var c=a.exports}},o={};function t(n){var r=o[n];if(void 0!==r)return r.exports;var i=o[n]={exports:{}};return e[n](i,i.exports,t),i.exports}t.d=function(e,o){for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return function(){t.d(n,{component:function(){return e}});const e={name:"downloadLiveRecords",displayName:"直播录像下载",description:{"zh-CN":"在直播录像页面 `live.bilibili.com/record/` 中添加下载支持."},tags:[componentsTags.live],entry:none,widget:{component:()=>Promise.resolve().then(t.bind(t,65)).then((e=>e.default))},urlInclude:[/^https:\/\/live\.bilibili\.com\/record\/(.+)/],commitHash:"54b2c9bf1cc508572c8394464fe14988e105c734",coreVersion:"2.2.0"}}(),n=n.component}()}));