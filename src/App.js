import React from "react";
import { Route, Switch } from 'react-router-dom';

import HomePage from './views/HomePage/HomePage';
import AppBar from './components/AppBar';
import Container from './components/Container';
import MovieDetailsPage from './views/MovieDetailsPage/MovieDetailsPage'

const App =()=> (
  <>
    <AppBar />
    <Container />
    <Switch>
      <Route exact path="/" component={HomePage} />
      {/* <Route path="/movies" component={MoviesPage} /> */}
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
      <Route component={HomePage} />

    </Switch>
  </>
 
)

export default App;