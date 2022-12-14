import {Cast, Movie, MovieDetails} from '@models';
import {createAction} from '@reduxjs/toolkit';

const GET_UPCOMING_MOVIES = '[Movies] Get Upcoming Movies';
const GET_UPCOMING_MOVIES_SUCCESS = '[Movies] Get Upcoming Movies Success';
const GET_UPCOMING_MOVIES_FAILURE = '[Movies] Get Upcoming Movies Failure';

const GET_NOW_PLAYING_MOVIES = '[Movies] Get Now Playing Movies';
const GET_NOW_PLAYING_MOVIES_SUCCESS = '[Movies] Get Now Playing Movies Success';
const GET_NOW_PLAYING_MOVIES_FAILURE = '[Movies] Get Now Playing Movies Failure';

const GET_POPULAR_MOVIES = '[Movies] Get Popular Movies';
const GET_POPULAR_MOVIES_SUCCESS = '[Movies] Get Popular Movies Success';
const GET_POPULAR_MOVIES_FAILURE = '[Movies] Get Popular Movies Failure';

const GET_TOP_RATED_MOVIES = '[Movies] Get Top Rated Movies';
const GET_TOP_RATED_MOVIES_SUCCESS = '[Movies] Get Top Rated Movies Success';
const GET_TOP_RATED_MOVIES_FAILURE = '[Movies] Get Top Rated Movies Failure';

const GET_MOVIE_DETAILS = '[Movies] Get Movie Details';
const GET_MOVIE_DETAILS_SUCCESS = '[Movies] Get Movie Details Success';
const GET_MOVIE_DETAILS_FAILURE = '[Movies] Get Movie Details Failure';

const GET_SIMILAR_MOVIES = '[Movies] Get Similar Movies';
const GET_SIMILAR_MOVIES_SUCCESS = '[Movies] Get Similar Movies Success';
const GET_SIMILAR_MOVIES_FAILURE = '[Movies] Get Similar Movies Failure';

const GET_MOVIE_CAST = '[Movies] Get Movie Cast';
const GET_MOVIE_CAST_SUCCESS = '[Movies] Get Movie Cast Success';
const GET_MOVIE_CAST_FAILURE = '[Movies] Get Movie Cast Failure';

const SEARCH_MOVIES = '[Movies] Search Movies';
const SEARCH_MOVIES_SUCCESS = '[Movies] Search Movies Success';
const SEARCH_MOVIES_FAILURE = '[Movies] Search Movies Failure';
const CLEAR_SEARCH_MOVIES = '[Movies] Clear Search Movies';

export const getUpcomingMovies = createAction(GET_UPCOMING_MOVIES);
export const getUpcomingMoviesSuccess = createAction<Movie[]>(GET_UPCOMING_MOVIES_SUCCESS);
export const getUpcomingMoviesFailure = createAction(GET_UPCOMING_MOVIES_FAILURE);

export const getNowPlayingMovies = createAction(GET_NOW_PLAYING_MOVIES);
export const getNowPlayingMoviesSuccess = createAction<Movie[]>(GET_NOW_PLAYING_MOVIES_SUCCESS);
export const getNowPlayingMoviesFailure = createAction(GET_NOW_PLAYING_MOVIES_FAILURE);

export const getPopularMovies = createAction(GET_POPULAR_MOVIES);
export const getPopularMoviesSuccess = createAction<Movie[]>(GET_POPULAR_MOVIES_SUCCESS);
export const getPopularMoviesFailure = createAction(GET_POPULAR_MOVIES_FAILURE);

export const getTopRatedMovies = createAction(GET_TOP_RATED_MOVIES);
export const getTopRatedMoviesSuccess = createAction<Movie[]>(GET_TOP_RATED_MOVIES_SUCCESS);
export const getTopRatedMoviesFailure = createAction(GET_TOP_RATED_MOVIES_FAILURE);

export const getMovieDetails = createAction<{movieId: number}>(GET_MOVIE_DETAILS);
export const getMovieDetailsSuccess = createAction<MovieDetails>(GET_MOVIE_DETAILS_SUCCESS);
export const getMovieDetailsFailure = createAction(GET_MOVIE_DETAILS_FAILURE);

export const getSimilarMovies = createAction<{movieId: number}>(GET_SIMILAR_MOVIES);
export const getSimilarMoviesSuccess = createAction<Movie[]>(GET_SIMILAR_MOVIES_SUCCESS);
export const getSimilarMoviesFailure = createAction(GET_SIMILAR_MOVIES_FAILURE);

export const getMovieCast = createAction<{movieId: number}>(GET_MOVIE_CAST);
export const getMovieCastSuccess = createAction<Cast[]>(GET_MOVIE_CAST_SUCCESS);
export const getMovieCastFailure = createAction(GET_MOVIE_CAST_FAILURE);

export const searchMovies = createAction<{query: string}>(SEARCH_MOVIES);
export const searchMoviesSuccess = createAction<Movie[]>(SEARCH_MOVIES_SUCCESS);
export const searchMoviesFailure = createAction(SEARCH_MOVIES_FAILURE);
export const clearSearchMovies = createAction(CLEAR_SEARCH_MOVIES);
