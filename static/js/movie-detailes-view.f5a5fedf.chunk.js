(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[3],{57:function(e,t,r){"use strict";var a=r(62),n=r.n(a),c="https://api.themoviedb.org/3",i="14e8b908038de65f12cfd2170a086156";t.a={fetchTrendingMovies:function(){return n.a.get("".concat(c,"/trending/all/day?api_key=").concat(i)).then((function(e){return e.data.results}))},fetchMovieByQuery:function(e){return n.a.get("".concat(c,"/search/movie?query=").concat(e,"&api_key=").concat(i)).then((function(e){return e.data.results}))},fetchMovieDetails:function(e){return n.a.get("".concat(c,"/movie/").concat(e,"?api_key=").concat(i))},fetchMovieCastDetails:function(e){return n.a.get("".concat(c,"/movie/").concat(e,"/credits?api_key=").concat(i,"&language=en-US"))},fetchMovieReviews:function(e){return n.a.get("".concat(c,"/movie/").concat(e,"/reviews?api_key=").concat(i,"&language=en-US"))}}},91:function(e,t,r){e.exports={MovieCard:"MovieCard_MovieCard__k8nR0",PosterImg:"MovieCard_PosterImg__3RxIx",Descr:"MovieCard_Descr__2as-2"}},92:function(e,t,r){},94:function(e,t,r){"use strict";function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.r(t);var i=r(58),s=r(59),o=r(61),l=r(60),u=r(0),h=r(3),v=r(57),j=r(91),p=r.n(j),d=r(1),b=function(e){var t=e.posterImg,r=e.title,a=e.releaseDate,n=e.voteAverage,c=e.overview,i=e.genres;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:p.a.MovieCard,children:[Object(d.jsx)("div",{className:p.a.PosterImg,children:Object(d.jsx)("img",{src:t,alt:r})}),Object(d.jsxs)("div",{className:p.a.Descr,children:[Object(d.jsx)("h2",{children:"".concat(r," (").concat(a,")")}),Object(d.jsxs)("p",{children:["User Score: ",10*n,"%"]}),Object(d.jsx)("h3",{children:"Overview"}),Object(d.jsx)("p",{children:c}),i&&Object(d.jsx)("h3",{children:"Genres"}),i.map((function(e){return e.name})).join(" ")]})]})})},f=r(9),O=r(92),m=r.n(O),g=Object(h.f)((function(e){var t=e.match;return Object(d.jsxs)("section",{children:[Object(d.jsx)("h3",{children:"Additional information"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(f.b,{exact:!0,to:"".concat(t.url,"/cast"),className:m.a.NavLink,activeClassName:"NavLink--active",children:"Cast"})}),Object(d.jsx)("li",{children:Object(d.jsx)(f.b,{to:"".concat(t.url,"/reviews"),className:m.a.NavLink,activeClassName:"NavLink--active",children:"Reviews"})})]})]})})),x=function(e){Object(o.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(i.a)(this,r);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={cast:[]},e}return Object(s.a)(r,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.movieId;v.a.fetchMovieCastDetails(t).then((function(t){return e.setState({cast:t.data.cast})})).catch((function(t){return e.setState({error:t})}))}},{key:"render",value:function(){var e=this.state.cast;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("ul",{children:e.map((function(e){var t=e.id,r=e.character,a=e.name,n=e.profile_path;return Object(d.jsxs)("li",{children:[n&&Object(d.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(n),alt:a}),Object(d.jsx)("h2",{children:a}),Object(d.jsxs)("p",{children:["Character: ",r]})]},t)}))})})}}]),r}(u.Component),y=function(e){Object(o.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(i.a)(this,r);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={reviews:[]},e}return Object(s.a)(r,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.movieId;v.a.fetchMovieReviews(t).then((function(t){return e.setState({reviews:t.data.results})})).catch((function(t){return e.setState({error:t})}))}},{key:"render",value:function(){var e=this.state.reviews;return Object(d.jsx)(d.Fragment,{children:0!==e.length?Object(d.jsx)("ul",{children:e.map((function(e){var t=e.id,r=e.author,a=e.content;return Object(d.jsxs)("li",{children:[Object(d.jsxs)("h3",{children:[" Author: ",r]}),Object(d.jsxs)("p",{children:[" ",a]})]},t)}))}):Object(d.jsx)("p",{children:" We don't have any reviews for this movie "})})}}]),r}(u.Component),w=r(11),_=function(e){Object(o.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(i.a)(this,r);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={poster_path:null,title:null,release_date:null,vote_average:null,overview:null,genres:[]},e.handleGoBack=function(){var t=e.props,r=t.history,a=t.location;if(a.state&&a.state.from)return r.push(a.state.from);r.push(w.a.home)},e}return Object(s.a)(r,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.movieId;v.a.fetchMovieDetails(t).then((function(t){return e.setState(c(c({},t.data),{},{poster_path:"https://image.tmdb.org/t/p/w300".concat(t.data.poster_path&&t.data.poster_path),release_date:t.data.release_date.slice(0,4)}))})).catch((function(t){return e.setState({error:t})}))}},{key:"render",value:function(){var e=this.props.match,t=this.state,r=t.poster_path,a=t.title,n=t.release_date,c=t.vote_average,i=t.overview,s=t.genres;return Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{type:"button",onClick:this.handleGoBack,children:"Go back"}),Object(d.jsx)(b,{posterImg:r,title:a,releaseDate:n,voteAverage:c,overview:i,genres:s}),Object(d.jsx)(g,{}),Object(d.jsxs)(h.c,{children:[Object(d.jsx)(h.a,{exact:!0,path:"".concat(e.path,"/cast"),component:x}),Object(d.jsx)(h.a,{path:"".concat(e.path,"/reviews"),component:y})]})]})}}]),r}(u.Component);t.default=_}}]);
//# sourceMappingURL=movie-detailes-view.f5a5fedf.chunk.js.map