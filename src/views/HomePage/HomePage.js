import React, { Component } from 'react';
import movieApi from '../../services/movieApi';
import MovieList from '../../components/MovieList';


class HomePage extends Component {
  state = {
    movies: [],
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = () => {
    
    movieApi.fetchTrendingMovies()
      .then(results => {
        this.setState({movies:results})
      })
      .catch(error => this.setState({ error }))
  }
  render() {
    return (
      <>
        <h1>Trending today</h1>
        <MovieList movies={this.state.movies} />
      </>
    )
  }
}


export default HomePage;