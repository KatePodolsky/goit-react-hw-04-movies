import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import movieApi from '../../services/movieApi';
import MovieCard from '../../components/MovieCard';
import MovieDetailsPageBar from '../../components/MovieDetailsPageBar';
import Cast from '../../components/Cast'



class MovieDetailsPage extends Component {
    state = {
        poster_path: null,
        title: null,
        release_date:null,
        vote_average: null,
        overview: null,
        genres:[],

    };

    componentDidMount() {
        const { movieId } = this.props.match.params;
        
        movieApi.fetchMovieDetails(movieId)
            .then(response =>
                this.setState({
                    ...response.data,
                    poster_path: `https://image.tmdb.org/t/p/w300${
                    response.data.poster_path && response.data.poster_path
                    }`,
                    release_date: response.data.release_date.slice(0, 4),
                }),
            )
            .catch(error => this.setState({ error }));
    }

    render() {
        const { poster_path, title, release_date, vote_average, overview, genres} = this.state;

        return (
            <>
                <MovieCard posterImg={poster_path} title={title} releaseDate={release_date} voteAverage={vote_average} overview={overview} genres={genres} />
                <MovieDetailsPageBar />
                <Switch>
                    <Route exact path="/movies/:movieId/cast" component={Cast} />
                    {/* <Route path="/movies/:movieId/reviews" component={Reviews} />  */}
                </Switch>
            </>)
      
    }
}

export default MovieDetailsPage