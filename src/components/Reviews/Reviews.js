import React, { Component } from 'react';
import movieApi from '../../services/movieApi';

class Reviews extends Component{
    state = {
        reviews: [],
    }

    componentDidMount() {
        const { movieId } = this.props.match.params;
        
        movieApi.fetchMovieReviews(movieId)
            .then(response =>
                this.setState({
                    reviews: response.data.results
                }),
            )
            .catch(error => this.setState({ error }));
    }
    
    render() {
        const { reviews } = this.state;

        return (
            <>
                {reviews.length !== 0 ? (
                    <ul>
                        {reviews.map(({ id, author, content }) => (
                            <li key={id}>
                                <h3> Author: {author}</h3>
                                <p> {content}</p>
                            </li>
                        ))}
                    </ul> ):(
                    <p> We don't have any reviews for this movie </p>
                    )}
            < />
        );
    }
}

export default Reviews