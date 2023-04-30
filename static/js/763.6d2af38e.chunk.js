"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[763],{3524:function(n,e,r){r.d(e,{AG:function(){return i},MH:function(){return t},si:function(){return a}});var t="https://image.tmdb.org/t/p/w500",a="https://via.placeholder.com/100x150",i="https://placehold.jp/200x300.png"},2763:function(n,e,r){r.r(e),r.d(e,{default:function(){return H}});var t,a,i,s,c,o,u,p,l,d=r(5861),h=r(9439),f=r(7757),x=r.n(f),v=r(2791),g=r(7689),m=r(4390),b=r(3524),w=r(168),y=r(6444),Z=r(1087),j=y.ZP.div(t||(t=(0,w.Z)(["\n  display: flex;\n  padding: 0 0 16px 0;\n  border-bottom: 1px solid black;\n"]))),k=y.ZP.img(a||(a=(0,w.Z)(["\n  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), \n  0px 4px 4px rgb(0 0 0 / 6%), \n  1px 4px 6px rgb(0 0 0 / 16%);\n"]))),P=y.ZP.div(i||(i=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 20px;\n  padding: 20px;\n"]))),M=y.ZP.ul(s||(s=(0,w.Z)(["\n  display: flex;\n  gap: 8px;\n"]))),_=y.ZP.div(c||(c=(0,w.Z)(["\n  padding: 16px 0;\n  border-bottom: 1px solid black;\n  text-align: center;\n"]))),S=y.ZP.h2(o||(o=(0,w.Z)(["\n  margin-bottom: 12px;\n"]))),z=y.ZP.ul(u||(u=(0,w.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 12px;\n"]))),U=(0,y.ZP)(Z.OL)(p||(p=(0,w.Z)(["\n  padding: 8px 16px;\n  border-radius: 4px;\n  color: black;\n  font-weight: 500;\n  font-size: 16px;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  \n  &.active {\n    color: white;\n    background-color: gray;\n  }\n  :hover:not(.active),\n  :focus-visible:not(.active){\n    color: gray;\n  }\n"]))),A=r(9126),C=(0,y.ZP)(Z.rU)(l||(l=(0,w.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 16px 0 8px 0;\n  text-decoration: none;\n  font-weight: 500;\n  font-size: 16px;\n  text-transform: uppercase;\n  color: black;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n          \n:hover{\n  color: gray;\n}\n"]))),E=r(184),G=function(n){var e,r,t=n.children,a=null!==(e=null===(r=(0,g.TH)().state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/";return(0,E.jsxs)(C,{to:a,children:[(0,E.jsx)(A.And,{size:16}),t]})},H=function(){var n=(0,g.UO)().movieId,e=(0,v.useState)([]),r=(0,h.Z)(e,2),t=r[0],a=r[1],i=(0,g.TH)(),s=i.pathname,c=i.search,o="".concat(s).concat(c);if((0,v.useEffect)((function(){function e(){return(e=(0,d.Z)(x().mark((function e(){var r;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.Z.fetchMovieById(Number(n));case 3:r=e.sent,console.log(r),a(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),!t)return null;var u=t.poster_path,p=t.title,l=t.vote_average,f=t.overview,w=t.genres,y=t.release_date,Z=u?b.MH+u:b.AG,A=y?y.slice(0,4):"No year";return(0,E.jsxs)("main",{children:[(0,E.jsx)(G,{children:"Go back"}),(0,E.jsxs)(j,{children:[(0,E.jsx)(k,{src:Z,alt:p,width:"200"}),(0,E.jsxs)(P,{children:[(0,E.jsxs)("h2",{children:[p,(0,E.jsxs)("span",{children:[" (",A,")"]})]}),(0,E.jsxs)("p",{children:["User Score ",Math.round(10*l),"%"]}),(0,E.jsx)("h3",{children:"Overview"}),(0,E.jsx)("p",{children:f}),(0,E.jsx)("h4",{children:"Genres"}),(0,E.jsx)(M,{children:null===w||void 0===w?void 0:w.map((function(n){var e=n.id,r=n.name;return(0,E.jsx)("li",{children:r},e)}))})]})]}),(0,E.jsxs)(_,{children:[(0,E.jsx)(S,{children:"Additional infomation"}),(0,E.jsxs)(z,{children:[(0,E.jsx)("li",{children:(0,E.jsx)(U,{to:"cast",state:{from:o},children:"Cast"})}),(0,E.jsx)("li",{children:(0,E.jsx)(U,{to:"reviews",state:{from:o},children:"Reviews"})})]})]}),(0,E.jsx)(v.Suspense,{fallback:null,children:(0,E.jsx)(g.j3,{})})]})}},4390:function(n,e,r){var t=r(5861),a=r(7757),i=r.n(a),s=r(1243).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"157ba8f88df5d741a5271cb474478bff",language:"en-US"}});function c(){return(c=(0,t.Z)(i().mark((function n(){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("trending/movie/day");case 2:if(e=n.sent,(r=e.data.results).length){n.next=6;break}throw new Error("Sorry, there are no movies.");case 6:return n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function o(){return(o=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("movie/".concat(e));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function u(){return(u=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("search/movie?query=".concat(e));case 2:if(r=n.sent,(t=r.data.results).length){n.next=6;break}throw new Error("Sorry, there are no movies matching your search query. Please try again.");case 6:return n.abrupt("return",t);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(){return(p=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("movie/".concat(e,"/credits"));case 2:if(r=n.sent,(t=r.data.cast).length){n.next=6;break}throw new Error("Not found cast...");case 6:return n.abrupt("return",t);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(){return(l=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("movie/".concat(e,"/reviews"));case 2:return r=n.sent,t=r.data.results,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var d={fetchTrendingMovies:function(){return c.apply(this,arguments)},fetchMovieById:function(n){return o.apply(this,arguments)},fetchSearchMovies:function(n){return u.apply(this,arguments)},fetchMovieCredits:function(n){return p.apply(this,arguments)},fetchMovieReviews:function(n){return l.apply(this,arguments)}};e.Z=d}}]);
//# sourceMappingURL=763.6d2af38e.chunk.js.map