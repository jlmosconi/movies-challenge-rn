import {Movie} from '@models';
export const MOVIES_STATE_NAME = 'movies';

interface InitMovieState {
  loading: boolean;
  movies: Movie[];
}

const initMoviesState = {
  movies: [],
  loading: false,
};
export interface MoviesState {
  upcomingMovies: InitMovieState;
  nowPlayingMovies: InitMovieState;
  popularMovies: InitMovieState;
  topRatedMovies: InitMovieState;
}

export const MoviesEmptyState: MoviesState = {
  upcomingMovies: initMoviesState,
  nowPlayingMovies: initMoviesState,
  popularMovies: initMoviesState,
  topRatedMovies: initMoviesState,
};
