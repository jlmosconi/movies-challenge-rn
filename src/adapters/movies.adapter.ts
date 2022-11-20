import {Movie, ApiMovie} from '@models';

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
