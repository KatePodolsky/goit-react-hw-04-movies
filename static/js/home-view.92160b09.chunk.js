(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[1],{57:function(t,e,n){"use strict";var c=n(62),a=n.n(c),i="https://api.themoviedb.org/3",o="14e8b908038de65f12cfd2170a086156";e.a={fetchTrendingMovies:function(){return a.a.get("".concat(i,"/trending/all/day?api_key=").concat(o)).then((function(t){return t.data.results}))},fetchMovieByQuery:function(t){return a.a.get("".concat(i,"/search/movie?query=").concat(t,"&api_key=").concat(o)).then((function(t){return t.data.results}))},fetchMovieDetails:function(t){return a.a.get("".concat(i,"/movie/").concat(t,"?api_key=").concat(o))},fetchMovieCastDetails:function(t){return a.a.get("".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(o,"&language=en-US"))},fetchMovieReviews:function(t){return a.a.get("".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(o,"&language=en-US"))}}},63:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(0);var c=n(9),a=n(3),i=n(1),o=Object(a.f)((function(t){var e=t.movies,n=t.location;return Object(i.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.title,o=t.name;return Object(i.jsx)("li",{children:Object(i.jsx)(c.b,{to:{pathname:"/movies/".concat(e),state:{from:n}},children:a||o})},e)}))})}))},93:function(t,e,n){"use strict";n.r(e);var c=n(58),a=n(59),i=n(61),o=n(60),r=n(0),s=n(57),u=n(63),f=n(1),v=function(t){Object(i.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))).state={movies:[]},t.fetchMovies=function(){s.a.fetchTrendingMovies().then((function(e){t.setState({movies:e})})).catch((function(e){return t.setState({error:e})}))},t}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.fetchMovies()}},{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:"Trending today"}),Object(f.jsx)(u.a,{movies:this.state.movies})]})}}]),n}(r.Component);e.default=v}}]);
//# sourceMappingURL=home-view.92160b09.chunk.js.map