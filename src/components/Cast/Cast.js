import React, { Component } from 'react';
import movieApi from '../../services/movieApi';

class Cast extends Component{
    state = {
        cast: [],
    }

    componentDidMount() {
        const { movieId } = this.props.match.params;
        
        movieApi.fetchMovieCastDetails(movieId)
            .then(response =>
                this.setState({
                    cast: response.data.cast,
                }),
            )
            .catch(error => this.setState({ error }));
    }
    
    render() {
        const { cast } = this.state;

        return (
            <>
                <ul>
                    {cast.map(({ cast_id, character, name, profile_path }) => (
                        <li key={cast_id}>
                            {profile_path && (
                                <img
                                    src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                                    alt={name}
                                />
                            )}
                            <h2>{name}</h2>
                            <p>Character: {character}</p>
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}

export default Cast