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
    
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }, 500);
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