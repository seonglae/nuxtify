(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(t,n,e){"use strict";(function(t){var r=e(0);n.a=function(n){var e=n.$axios,o=window.location.origin;e.defaults.baseURL=o,r.default.mixin({data:function(){return{title:"Nuxt TS Template",version:t.env.version}}})}}).call(this,e(123))},157:function(t,n,e){},185:function(t,n,e){e(186),t.exports=e(187)},213:function(t,n,e){"use strict";e(157)},228:function(t,n,e){"use strict";e.r(n),e.d(n,"state",(function(){return r})),e.d(n,"mutations",(function(){return o}));var r=function(){return{loading:!1}},o={setLoading:function(t,n){t.loading=n}}},53:function(t,n,e){"use strict";e(55);var r=e(1),o=Object(r.defineComponent)({props:{error:{type:Object,default:String,statusCode:Number}},setup:function(t,n){var e=t.error;return{header:Object(r.computed)((function(){switch(e.statusCode){case 404:return"404 Not Found";case 500:return"Internal Server Error";default:return"An error occurred"}}))}},head:function(){return{title:this.header}}}),c=(e(213),e(97)),d=e(136),l=e.n(d),f=e(264),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("div",[e("h1",{staticClass:"title"},[t._v("\n      "+t._s(t.error.statusCode)+"\n    ")]),t._v(" "),e("h2",{staticClass:"subtitle pb-3"},[t._v("\n      "+t._s(t.error.message)+"\n    ")]),t._v(" "),e("v-btn",{attrs:{to:"/"}},[t._v(" Home ")]),t._v(" "),e("br"),t._v(" "),e("br")],1)])}),[],!1,null,"00db73d5",null);n.a=component.exports;l()(component,{VBtn:f.a})}},[[185,4,1,5]]]);