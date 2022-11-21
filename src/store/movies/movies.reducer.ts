import {createReducer} from '@reduxjs/toolkit';
import {
  getNowPlayingMovies,
  getNowPlayingMoviesFailure,
  getNowPlayingMoviesSuccess,
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
    state.upcomingMovies.loading = true;
  });
  builder.addCase(getNowPlayingMoviesSuccess, (state, {payload: movies}) => {
    state.upcomingMovies.loading = false;
    state.upcomingMovies.movies = movies;
  });
  builder.addCase(getNowPlayingMoviesFailure, state => {
    state.upcomingMovies.loading = false;
  });
  // Popular Movies
  builder.addCase(getNowPlayingMovies, state => {
    state.upcomingMovies.loading = true;
  });
  builder.addCase(getNowPlayingMoviesSuccess, (state, {payload: movies}) => {
    state.upcomingMovies.loading = false;
    state.upcomingMovies.movies = movies;
  });
  builder.addCase(getNowPlayingMoviesFailure, state => {
    state.upcomingMovies.loading = false;
  });
  // Top Rated Movies
  builder.addCase(getNowPlayingMovies, state => {
    state.upcomingMovies.loading = true;
  });
  builder.addCase(getNowPlayingMoviesSuccess, (state, {payload: movies}) => {
    state.upcomingMovies.loading = false;
    state.upcomingMovies.movies = movies;
  });
  builder.addCase(getNowPlayingMoviesFailure, state => {
    state.upcomingMovies.loading = false;
  });
});
