"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[219],{219:function(n,t,e){e.r(t),e.d(t,{default:function(){return k}});var r,c,a,o,i,u,s=e(885),p=e(791),f=e(871),l=e(840),x=e(168),h=e(444),g=h.ZP.img(r||(r=(0,x.Z)(["\n  max-height: 250px;\n"]))),d=h.ZP.div(c||(c=(0,x.Z)(["\n  padding: 20px;\n  font-size: 14px;\n  text-align: center;\n  color: brown;\n  background-color: rgb(243, 231, 231);\n"]))),m=h.ZP.h2(a||(a=(0,x.Z)(["\n  font-size: 12px;\n  text-transform: uppercase;\n  text-align: center;\n  color: #fff;\n"]))),b=h.ZP.div(o||(o=(0,x.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50px;\n  background-color: #aa9595;\n"]))),v=h.ZP.ul(i||(i=(0,x.Z)(["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  padding: 20px 100px;\n  margin: 0;\n\n  background-color: rgb(243, 231, 231);\n"]))),w=h.ZP.li(u||(u=(0,x.Z)(["\n  margin-bottom: 15px;\n  margin-right: 15px;\n  -webkit-box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.3);\n  -moz-box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.3);\n  box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.3);\n"]))),_=e(184);function k(){var n=(0,p.useState)([]),t=(0,s.Z)(n,2),e=t[0],r=t[1],c=(0,f.UO)().id;return(0,p.useEffect)((function(){(0,l.zv)(c).then(r)}),[c]),(0,_.jsxs)(_.Fragment,{children:[0===e.length&&(0,_.jsx)(d,{children:"We have no information about the cast"}),(0,_.jsx)(v,{children:e.map((function(n){return n.profile_path&&(0,_.jsxs)(w,{children:[(0,_.jsx)(g,{src:"https://image.tmdb.org/t/p/w300/"+n.profile_path,alt:n.name}),(0,_.jsx)(b,{children:(0,_.jsx)(m,{children:n.name})})]},n.id)}))})]})}},840:function(n,t,e){e.d(t,{Hg:function(){return p},TP:function(){return l},XK:function(){return f},tx:function(){return g},zv:function(){return x}});var r=e(861),c=e(757),a=e.n(c),o="https://api.themoviedb.org/3",i="0acbef793912116e8168b05c9b24e1e7",u="".concat(o,"/trending/all/day?api_key=").concat(i),s="".concat(o,"/search/movie?api_key=").concat(i,"&language=en-US&include_adult=false");function p(n){var t="".concat(u,"&page=").concat(n);return fetch(t).then((function(n){return n.json()}))}function f(n,t){return fetch("".concat(s,"&query=").concat(n,"&page=").concat(t)).then((function(n){return n.json()}))}function l(n){return console.log(n),fetch("".concat(o,"/movie/").concat(n,"?api_key=").concat(i,"&language=en-US")).then((function(n){return n.json()}))}function x(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r.cast);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r.results);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=219.106a8f37.chunk.js.map