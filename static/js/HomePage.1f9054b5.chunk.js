(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[2],{31:function(t,e,a){"use strict";a.d(e,"d",(function(){return o})),a.d(e,"e",(function(){return l})),a.d(e,"b",(function(){return f})),a.d(e,"a",(function(){return h})),a.d(e,"c",(function(){return m}));var n=a(33),r=a.n(n),c=a(34),i=a(35),s=a.n(i),u="9188dc7af85ddfe1314f5060338d54ff";function o(){return p.apply(this,arguments)}function p(){return(p=Object(c.a)(r.a.mark((function t(){var e,a,n=arguments;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:1,t.next=3,s.a.get("/trending/all/day?api_key=".concat(u,"&page=").concat(e));case 3:return a=t.sent,console.log(a.data),t.abrupt("return",a.data);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=Object(c.a)(r.a.mark((function t(e){var a,n,c=arguments;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=c.length>1&&void 0!==c[1]?c[1]:1,t.next=3,s.a.get("/search/movie?api_key=".concat(u,"&query=").concat(e,"&language=en-US&page=").concat(a,"&include_adult=false"));case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return g.apply(this,arguments)}function g(){return(g=Object(c.a)(r.a.mark((function t(e){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/movie/".concat(e,"?api_key=").concat(u,"&language=en-US"));case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return b.apply(this,arguments)}function b(){return(b=Object(c.a)(r.a.mark((function t(e){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/movie/".concat(e,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return _.apply(this,arguments)}function _(){return(_=Object(c.a)(r.a.mark((function t(e){var a,n,c=arguments;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=c.length>1&&void 0!==c[1]?c[1]:1,t.next=3,s.a.get("/movie/".concat(e,"/reviews?api_key=").concat(u,"&language=en-US&page=").concat(a));case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}s.a.defaults.baseURL="https://api.themoviedb.org/3"},63:function(t,e,a){t.exports={page_title_wrapper:"HomePage_page_title_wrapper__RHqOG",image:"HomePage_image__2eF3w",list:"HomePage_list__1lka8",list_item:"HomePage_list_item__KeKN1"}},70:function(t,e,a){"use strict";a.r(e);var n=a(32),r=a(3),c=a(0),i=a(9),s=a(31),u=a(63),o=a.n(u);e.default=function(){var t=Object(c.useState)(null),e=Object(n.a)(t,2),a=e[0],u=e[1];return Object(c.useEffect)((function(){Object(s.d)().then(u)}),[]),console.log(a),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:o.a.page_title_wrapper,children:Object(r.jsx)("h2",{className:o.a.page_title,children:"Tranding today"})}),Object(r.jsx)("ul",{className:o.a.list,children:a&&a.results.map((function(t){return Object(r.jsx)("li",{children:Object(r.jsx)(i.b,{to:"movies/".concat(t.id),className:o.a.list_item,children:Object(r.jsx)("img",{className:o.a.image,src:"https://image.tmdb.org/t/p/w300/".concat(t.poster_path),alt:t.original_title})})},t.id)}))})]})}}}]);
//# sourceMappingURL=HomePage.1f9054b5.chunk.js.map