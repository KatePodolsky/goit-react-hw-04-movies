import React, { Suspense, lazy } from "react";
import { Route, Switch } from 'react-router-dom';

import AppBar from './components/AppBar';
import Container from './components/Container';
import routes from './routes';
import LoaderData from "./components/Loader";

const HomePage = lazy(() =>
  import('./views/HomePage/HomePage' /*webpackChunkName: "home-view" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage/MoviesPage' /*webpackChunkName: "movies-view" */),
);
const MovieDetailesPage = lazy(() =>
  import(
    './views/MovieDetailesPage/MovieDetailesPage' /*webpackChunkName: "movie-detailes-view" */
  ),
);

const App =() => (
  <>
    <AppBar />
    <Container />
    <Suspense fallback={<LoaderData />}>
    <Switch>
      <Route exact path={routes.home} component={HomePage} />
      <Route exact path={routes.movies} component={MoviesPage} />
      <Route path={routes.movieDetailes} component={MovieDetailesPage} />
      <Route component={HomePage} />
    </Switch>
    </Suspense>
  </>
 
)

export default App;