import {createReducer} from '@reduxjs/toolkit';
import {
  getMovieCast,
  getMovieCastFailure,
  getMovieCastSuccess,
  getMovieDetails,
  getMovieDetailsFailure,
  getMovieDetailsSuccess,
  getNowPlayingMovies,
  getNowPlayingMoviesFailure,
  getNowPlayingMoviesSuccess,
  getPopularMovies,
  getPopularMoviesFailure,
  getPopularMoviesSuccess,
  getSimilarMovies,
  getSimilarMoviesFailure,
  getSimilarMoviesSuccess,
  getTopRatedMovies,
  getTopRatedMoviesFailure,
  getTopRatedMoviesSuccess,
  getUpcomingMovies,
  getUpcomingMoviesFailure,
  getUpcomingMoviesSuccess,
  searchMovies,
  searchMoviesFailure,
  searchMoviesSuccess,
} from './movies.actions';
import {MoviesEmptyState} from './movies.state';

export const moviesReducer = createReducer(MoviesEmptyState, builder => {
  // Upcoming Movies
  builder.addCase(getUpcomingMovies, state => {
    state.upcomingMovies.loading = true;
  });
  builder.addCase(getUpcomingMoviesSuccess, (state, {payload: movies}) => {
    state.upcomingMovies.loading = false;
    state.upcomingMovies.movies = movies;
  });
  builder.addCase(getUpcomingMoviesFailure, state => {
    state.upcomingMovies.loading = false;
  });
  // Now Playing Movies
  builder.addCase(getNowPlayingMovies, state => {
    state.nowPlayingMovies.loading = true;
  });
  builder.addCase(getNowPlayingMoviesSuccess, (state, {payload: movies}) => {
    state.nowPlayingMovies.loading = false;
    state.nowPlayingMovies.movies = movies;
  });
  builder.addCase(getNowPlayingMoviesFailure, state => {
    state.nowPlayingMovies.loading = false;
  });
  // Popular Movies
  builder.addCase(getPopularMovies, state => {
    state.popularMovies.loading = true;
  });
  builder.addCase(getPopularMoviesSuccess, (state, {payload: movies}) => {
    state.popularMovies.loading = false;
    state.popularMovies.movies = movies;
  });
  builder.addCase(getPopularMoviesFailure, state => {
    state.popularMovies.loading = false;
  });
  // Top Rated Movies
  builder.addCase(getTopRatedMovies, state => {
    state.topRatedMovies.loading = true;
  });
  builder.addCase(getTopRatedMoviesSuccess, (state, {payload: movies}) => {
    state.topRatedMovies.loading = false;
    state.topRatedMovies.movies = movies;
  });
  builder.addCase(getTopRatedMoviesFailure, state => {
    state.topRatedMovies.loading = false;
  });
  // Details Movie
  builder.addCase(getMovieDetails, state => {
    state.movieDetails.loading = true;
  });
  builder.addCase(getMovieDetailsSuccess, (state, {payload: movie}) => {
    state.movieDetails.loading = false;
    state.movieDetails.movie = movie;
  });
  builder.addCase(getMovieDetailsFailure, state => {
    state.movieDetails.loading = false;
  });
  // Similar Movies
  builder.addCase(getSimilarMovies, state => {
    state.similarMovies.loading = true;
  });
  builder.addCase(getSimilarMoviesSuccess, (state, {payload: movies}) => {
    state.similarMovies.loading = false;
    state.similarMovies.movies = movies;
  });
  builder.addCase(getSimilarMoviesFailure, state => {
    state.similarMovies.loading = false;
  });
  // Cast Movie
  builder.addCase(getMovieCast, state => {
    state.movieCast.loading = true;
  });
  builder.addCase(getMovieCastSuccess, (state, {payload: cast}) => {
    state.movieCast.loading = false;
    state.movieCast.cast = cast;
  });
  builder.addCase(getMovieCastFailure, state => {
    state.movieCast.loading = false;
  });
  // Search Movies
  builder.addCase(searchMovies, state => {
    state.searchMovies.loading = true;
  });
  builder.addCase(searchMoviesSuccess, (state, {payload: movies}) => {
    state.searchMovies.loading = false;
    state.searchMovies.movies = movies;
  });
  builder.addCase(searchMoviesFailure, state => {
    state.searchMovies.loading = false;
  });
});
