import {Movie, ApiMovie, MovieDetails, ApiMovieDetails} from '@models';

export const MovieAdapter = (movie: ApiMovie): Movie => {
  return {
    id: movie.id,
    title: movie.title,
    original_title: movie.original_title,
    poster_path: movie.poster_path,
    backdrop_path: movie.backdrop_path,
    release_date: movie.release_date,
  };
};

export const MovieDetailsAdapter = (movie: ApiMovieDetails): MovieDetails => {
  return {
    id: movie.id,
    title: movie.title,
    original_title: movie.original_title,
    poster_path: movie.poster_path,
    backdrop_path: movie.backdrop_path,
    release_date: movie.release_date,
    overview: movie.overview,
    genres: movie.genres,
    budget: movie.budget,
    imdb_id: movie.imdb_id,
    status: movie.status,
    revenue: movie.revenue,
    runtime: movie.runtime,
    vote_average: movie.vote_average,
    vote_count: movie.vote_count,
  };
};
