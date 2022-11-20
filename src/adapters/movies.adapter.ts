import {Movie, ApiMovie} from '@models';

export const MovieAdapter = (movie: ApiMovie): Movie => {
  return {
    id: movie.id,
  };
};
