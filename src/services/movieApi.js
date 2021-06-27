import axios from 'axios';

//https://newsuperserver.herokuapp.com/
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '14e8b908038de65f12cfd2170a086156';

const fetchTrendingMovies = () => {
    return axios
        .get(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`)
        .then(response => response.data.results);
}

const fetchMovieDetails = (movieId) => {
    return axios
        .get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
}

const fetchMovieCastDetails = (movieId) => {
    const add =  axios
        .get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`)
    console.log(add);
    return add
}

const fetchMovieReviews = (movieId) => {
    return axios
        .get(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`)
}

// eslint-disable-next-line
export default {
    fetchTrendingMovies,
    fetchMovieDetails,
    fetchMovieCastDetails,
    fetchMovieReviews
}