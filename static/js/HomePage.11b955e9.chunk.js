(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[2],{31:function(e,t,a){"use strict";a.d(t,"d",(function(){return o})),a.d(t,"e",(function(){return l})),a.d(t,"b",(function(){return f})),a.d(t,"a",(function(){return g})),a.d(t,"c",(function(){return h}));var n=a(33),r=a.n(n),c=a(34),i=a(35),s=a.n(i),u="9188dc7af85ddfe1314f5060338d54ff";function o(){return p.apply(this,arguments)}function p(){return(p=Object(c.a)(r.a.mark((function e(){var t,a,n=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:1,e.next=3,s.a.get("/trending/all/day?api_key=".concat(u,"&page=").concat(t));case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return(d=Object(c.a)(r.a.mark((function e(t){var a,n,c=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>1&&void 0!==c[1]?c[1]:1,e.next=3,s.a.get("/search/movie?api_key=".concat(u,"&query=").concat(t,"&language=en-US&page=").concat(a,"&include_adult=false"));case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return _.apply(this,arguments)}function _(){return(_=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return m.apply(this,arguments)}function m(){return(m=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return b.apply(this,arguments)}function b(){return(b=Object(c.a)(r.a.mark((function e(t){var a,n,c=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>1&&void 0!==c[1]?c[1]:1,e.next=3,s.a.get("/movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=").concat(a));case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s.a.defaults.baseURL="https://api.themoviedb.org/3"},63:function(e,t,a){e.exports={page_title_wrapper:"HomePage_page_title_wrapper__RHqOG",image:"HomePage_image__2eF3w",list:"HomePage_list__1lka8",list_item:"HomePage_list_item__KeKN1",movie_list_item:"HomePage_movie_list_item__3SWNZ",vote:"HomePage_vote__3YmCb"}},69:function(e,t,a){"use strict";a.r(t);var n=a(32),r=a(3),c=a(0),i=a(1),s=a(9),u=a(31),o=a(63),p=a.n(o);t.default=function(){var e=Object(c.useState)(null),t=Object(n.a)(e,2),a=t[0],o=t[1],l=Object(i.i)().url;return Object(c.useEffect)((function(){Object(u.d)().then(o)}),[]),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:p.a.page_title_wrapper,children:Object(r.jsx)("h2",{className:p.a.page_title,children:"Tranding today"})}),Object(r.jsx)("ul",{className:p.a.list,children:a&&a.results.map((function(e){return Object(r.jsxs)("li",{className:p.a.movie_list_item,children:[Object(r.jsx)("p",{className:p.a.vote,children:e.vote_average}),Object(r.jsx)(s.b,{to:{pathname:"movies/".concat(e.id),state:{url:l}},className:p.a.list_item,children:Object(r.jsx)("img",{className:p.a.image,src:"https://image.tmdb.org/t/p/w300/".concat(e.poster_path),alt:e.original_title})})]},e.id)}))})]})}}}]);
//# sourceMappingURL=HomePage.11b955e9.chunk.js.map