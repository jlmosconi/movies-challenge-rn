import {ApiMovie, ApiMovieDetails, Cast, CastApi, Movie, MovieDetails} from '@models';
import {parseDate, parseDuration, parseMoney, parseStatus} from '@utils';

export const MovieAdapter = (movie: ApiMovie): Movie => {
  return {
    id: movie.id,
    title: movie.title,
    original_title: movie.original_title,
    poster_path: movie.poster_path,
    backdrop_path: movie.backdrop_path,
    release_date: parseDate(movie.release_date),
    overview: movie.overview,
  };
};

export const MovieDetailsAdapter = (movie: ApiMovieDetails): MovieDetails => {
  return {
    id: movie.id,
    title: movie.title,
    original_title: movie.original_title,
    poster_path: movie.poster_path,
    backdrop_path: movie.backdrop_path,
    release_date: parseDate(movie.release_date),
    overview: movie.overview,
    genres: movie.genres.filter((_, i) => i < 3),
    budget: parseMoney(movie.budget),
    imdb_id: movie.imdb_id,
    status: parseStatus(movie.status),
    revenue: parseMoney(movie.revenue),
    runtime: parseDuration(movie.runtime),
    vote_average: movie.vote_average,
    vote_count: movie.vote_count,
  };
};

export const CastAdapter = (cast: CastApi): Cast => {
  return {
    id: cast.id,
    gender: cast.gender,
    name: cast.name,
    profile_path: cast.profile_path,
    character: cast.character,
    order: cast.order,
  };
};
