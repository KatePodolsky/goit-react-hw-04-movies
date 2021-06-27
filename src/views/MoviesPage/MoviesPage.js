import React, { Component } from "react";

import SearchMovies from "../../components/SearchMovies";
import MovieList from '../../components/MovieList';
import movieApi from '../../services/movieApi';
import LoaderData from "../../components/Loader";


class MoviesPage extends Component {
    state = {
        movies: [],
        searchQuery: '',
        isLoading: false,
        error:null,
    };
  
    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchQuery !== this.state.searchQuery) {
            this.fetchMovies();
        }
    }
  
    onChangeQuery = query => {
        const { history, location } = this.props;

        history.push({
            pathname: location.pathname,
            search: `query=${this.state.searchQuery.trim()}`,
    });
        this.setState({
            searchQuery: query,
            isLoading: false,
            error:null,
        });
    
    }

    fetchMovies = () => {
       
        const { searchQuery } = this.state;
        this.setState({ isLoading: true });

        movieApi.fetchMovieByQuery(searchQuery)
            .then(results => {
                this.setState(prevState => ({
                    movies: [...prevState.movies, ...results],
                }))
            })
            .catch(error => this.setState({ error }))
            .finally(() => this.setState({ isLoading: false }));
    }
  
    render() {
        const { movies, isLoading, error } = this.state;
        return (
            <>
                <SearchMovies onSubmit={this.onChangeQuery} />
                {error&&<p>There was a problem with your request! Please, try again</p>}
                <MovieList movies={movies} />
                {isLoading && <LoaderData />}
            </>
        )
    }
}

export default MoviesPage;

