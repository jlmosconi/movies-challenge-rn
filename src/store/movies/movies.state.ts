import {Cast, Movie, MovieDetails} from '@models';
export const MOVIES_STATE_NAME = 'movies';

interface InitMovieState {
  loading: boolean;
  movies: Movie[];
}

interface InitMovieDetailsState {
  loading: boolean;
  movie: MovieDetails | null;
}

interface InitMovieCastState {
  loading: boolean;
  cast: Cast[] | null;
}

interface InitSearchMoviesState {
  loading: boolean;
  movies: Movie[] | null;
}

const initMoviesState = {
  movies: [],
  loading: false,
};

const initMovieDetailState = {
  movie: null,
  loading: false,
};

const initMovieCastState = {
  cast: null,
  loading: false,
};

const initSearchMoviesState = {
  movies: null,
  loading: false,
};

export interface MoviesState {
  upcomingMovies: InitMovieState;
  nowPlayingMovies: InitMovieState;
  popularMovies: InitMovieState;
  topRatedMovies: InitMovieState;
  movieDetails: InitMovieDetailsState;
  similarMovies: InitMovieState;
  movieCast: InitMovieCastState;
  searchMovies: InitSearchMoviesState;
}

export const MoviesEmptyState: MoviesState = {
  upcomingMovies: initMoviesState,
  nowPlayingMovies: initMoviesState,
  popularMovies: initMoviesState,
  topRatedMovies: initMoviesState,
  movieDetails: initMovieDetailState,
  similarMovies: initMoviesState,
  movieCast: initMovieCastState,
  searchMovies: initSearchMoviesState,
};
