import axios from 'axios';

const API_KEY = '4653c612bbffa5cea61462e900463d6a';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getTopRatedMovies = (page = 1) => {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
};

export const searchMovies = (query, page = 1) => {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&page=${page}`);
};

export const getMovieDetail = (movieId) => {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`);
};
