import {Movie, MovieDetails} from '@models';
export const MOVIES_STATE_NAME = 'movies';

interface InitMovieState {
  loading: boolean;
  movies: Movie[];
}

interface InitMovieDetailsState {
  loading: boolean;
  movie: MovieDetails | null;
}

const initMoviesState = {
  movies: [],
  loading: false,
};

const initMovieDetailState = {
  movie: null,
  loading: false,
};

export interface MoviesState {
  upcomingMovies: InitMovieState;
  nowPlayingMovies: InitMovieState;
  popularMovies: InitMovieState;
  topRatedMovies: InitMovieState;
  movieDetails: InitMovieDetailsState;
  similarMovies: InitMovieState;
}

export const MoviesEmptyState: MoviesState = {
  upcomingMovies: initMoviesState,
  nowPlayingMovies: initMoviesState,
  popularMovies: initMoviesState,
  topRatedMovies: initMoviesState,
  movieDetails: initMovieDetailState,
  similarMovies: initMoviesState,
};
