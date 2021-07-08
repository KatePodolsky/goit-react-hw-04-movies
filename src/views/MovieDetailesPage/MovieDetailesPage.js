import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import movieApi from '../../services/movieApi';
import MovieCard from '../../components/MovieCard';
import MovieDetailsPageBar from '../../components/MovieDetailsPageBar';
import Cast from '../../components/Cast';
import Reviews from '../../components/Reviews';
import routes from '../../routes';


class MovieDetailsPage extends Component {
    state = {
        poster_path: '',
        title: '',
        release_date:0,
        vote_average: 0.0,
        overview: '',
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

    handleGoBack = () => {
        const { history, location } = this.props;

        if (location.state && location.state.from) {
            return  history.push(location.state.from)
        }
        history.push(routes.home)
        localStorage.getItem('searchQuery')
    }

    render() {
        const { match} = this.props;
        const { poster_path, title, release_date, vote_average, overview, genres} = this.state;

        return (
            <div>
                <button type="button" onClick={this.handleGoBack}>
                    Go back
                </button>
                <MovieCard posterImg={poster_path} title={title} releaseDate={release_date} voteAverage={vote_average} overview={overview} genres={genres} />
                <MovieDetailsPageBar />
                <Switch>
                    <Route exact path={`${match.path}/cast`} component={Cast} />
                    <Route path={`${match.path}/reviews`} component={Reviews} /> 
                </Switch>
            </div>)
      
    }
}

export default MovieDetailsPage