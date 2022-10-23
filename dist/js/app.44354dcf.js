(function(e){function t(t){for(var a,i,c=t[0],s=t[1],l=t[2],u=0,d=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var p=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("7a23");const r=Object(a["createElementVNode"])("link",{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css",rel:"stylesheet",integrity:"sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi",crossorigin:"anonymous"},null,-1),o={id:"app",class:"container-fluid"},i={class:"row"},c={class:"col-12 pt-3 text-center"},s=Object(a["createElementVNode"])("h3",{class:"pb-3"},"Vue Laravel Pagination",-1),l={class:"row justify-content-center"},p={class:"col-10 pt-3 pb-4"},u=["value"],d=Object(a["createStaticVNode"])('<option value="2">PerPage - 2</option><option value="4">PerPage - 4</option><option value="6">PerPage - 6</option><option value="8">PerPage - 8</option><option value="10">PerPage - 10</option>',5),g=[d],h={class:"card shadow"},b={class:"card-body",style:{"min-height":"130px"}},v={class:"card-title"},m={class:"card-subtitle mb-2 text-muted"},f={class:"card-text"};function j(e,t,n,d,j,O){const P=Object(a["resolveComponent"])("vue-pagination");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[r,Object(a["createElementVNode"])("div",o,[Object(a["createElementVNode"])("div",i,[Object(a["createElementVNode"])("div",c,[s,Object(a["createVNode"])(P,{class:"mb-2",onEvent:e.vuePaginate,"meta-data":e.paginations,onSides:1},null,8,["onEvent","meta-data"])]),Object(a["createElementVNode"])("div",l,[Object(a["createElementVNode"])("div",p,[Object(a["createElementVNode"])("select",{class:"form-select form-select-sm",name:"",onChange:t[0]||(t[0]=(...t)=>e.onChange&&e.onChange(...t)),id:"",value:e.perPage[0]},g,40,u)])]),(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.userData,(t,n)=>Object(a["withDirectives"])((Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{key:n,class:"col-12 col-md-6 mt-2"},[Object(a["createElementVNode"])("div",h,[Object(a["createElementVNode"])("div",b,[Object(a["createElementVNode"])("h5",v,Object(a["toDisplayString"])(t.id+" - "+t.title),1),Object(a["createElementVNode"])("h6",m,Object(a["toDisplayString"])(t.created_at),1),Object(a["createElementVNode"])("p",f,Object(a["toDisplayString"])(t.slug),1)])])])),[[a["vShow"],e.userData]])),128))])])],64)}var O=n("5a22"),P=Object(a["defineComponent"])({name:"ServeDev",data(){return{endpoint:"http://developers.zakerxa.com/api/paginations?page=",perPage:[2,"&per_page="],userData:[],paginations:{}}},components:{VuePagination:O["VuePagination"]},created(){this.startInit()},methods:{vuePaginate(e){this.currentPage=e,this.startInit(e[0]+e[1])},startInit(e){var t;this.getPaginateWithUsers(null!==e&&void 0!==e?e:(null!==(t=this.perPage[1])&&void 0!==t?t:"&per_page=")+this.perPage[0]).then(e=>this.insertData(e))},insertData(e){this.userData=e.data,this.paginations={current_page:e.current_page,last_page:e.last_page,prev_page_url:e.prev_page_url,next_page_url:e.next_page_url,per_page:this.perPage}},getPaginateWithUsers(e){return fetch(this.endpoint+e,{method:"GET",headers:{"Content-Type":"Application/json"}}).then(e=>e.json()).then(e=>e).catch(e=>e)},onChange(e){var t,n;this.perPage[0]=e.target.value;let a=(null!==(t=this.perPage[1])&&void 0!==t?t:"&per_page=")+this.perPage[0];this.currentPage?this.startInit((null!==(n=this.currentPage[0])&&void 0!==n?n:"")+a):this.startInit()}}}),y=(n("92d0"),n("6b0d")),_=n.n(y);const E=_()(P,[["render",j]]);var V=E;Object(a["createApp"])(V).mount("#app")},"92d0":function(e,t,n){"use strict";n("b539")},b539:function(e,t,n){}});
//# sourceMappingURL=app.44354dcf.js.map