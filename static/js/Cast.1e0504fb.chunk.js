(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[1],{68:function(t,a,c){t.exports={casting_container:"Cast_casting_container__32iS_",casting_list:"Cast_casting_list__Xoa-0",casting_items_list:"Cast_casting_items_list__1eAOD",casting_image:"Cast_casting_image__1ebwx",casting_character:"Cast_casting_character__MbcPp"}},73:function(t,a,c){"use strict";c.r(a);var e=c(32),s=c(3),i=c(0),n=c(1),_=c(31),r=c(68),g=c.n(r);a.default=function(){var t=Object(n.h)().movieId,a=Object(i.useState)(null),c=Object(e.a)(a,2),r=c[0],l=c[1];return Object(i.useEffect)((function(){Object(_.a)(t).then(l)}),[t]),Object(s.jsx)("div",{className:g.a.casting_container,children:Object(s.jsx)("ul",{className:g.a.casting_list,children:r&&r.cast.map((function(t){return Object(s.jsxs)("li",{className:g.a.casting_items_list,children:[Object(s.jsx)("p",{children:t.name}),Object(s.jsx)("img",{className:g.a.casting_image,src:"https://image.tmdb.org/t/p/w200/".concat(t.profile_path),alt:t.name}),Object(s.jsxs)("p",{className:g.a.casting_character,children:["Character : ",t.character]})]},t.id)}))})})}}}]);
//# sourceMappingURL=Cast.1e0504fb.chunk.js.map