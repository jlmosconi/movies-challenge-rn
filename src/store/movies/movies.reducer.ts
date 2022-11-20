import {createReducer} from '@reduxjs/toolkit';
import {getUpcomingMovies, getUpcomingMoviesFailure, getUpcomingMoviesSuccess} from './movies.actions';
import {MoviesEmptyState} from './movies.state';

export const moviesReducer = createReducer(MoviesEmptyState, builder => {
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

  //   builder.addMatcher(isAnyOf(getUpcomingMoviesFailure), state => {
  //     state.loading = false;
  //   });
});
