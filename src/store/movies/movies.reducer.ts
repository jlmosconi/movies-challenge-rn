import {createReducer} from '@reduxjs/toolkit';
import {
  getNowPlayingMovies,
  getNowPlayingMoviesFailure,
  getNowPlayingMoviesSuccess,
  getPopularMovies,
  getPopularMoviesFailure,
  getPopularMoviesSuccess,
  getTopRatedMovies,
  getTopRatedMoviesFailure,
  getTopRatedMoviesSuccess,
  getUpcomingMovies,
  getUpcomingMoviesFailure,
  getUpcomingMoviesSuccess,
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
});
