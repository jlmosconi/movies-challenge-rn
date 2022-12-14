export interface Movie {
  id: number;
  title: string;
  original_title: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  overview: string;
}

export interface MovieDetails extends Movie {
  overview: string;
  genres: Genre[];
  budget: string;
  imdb_id: string;
  status: string;
  revenue: string;
  runtime: string;
  vote_average: number;
  vote_count: number;
}

export interface ApiMovieResponse {
  page: number;
  results: ApiMovie[];
  total_pages: number;
  total_results: number;
  dates: {
    maximum: string;
    minimum: string;
  };
}

export interface ApiMovie {
  adult: boolean;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface ApiMovieDetails extends Omit<ApiMovie, 'genre_ids'> {
  belongs_to_collection: BelongsToCollection;
  budget: number;
  genres: Genre[];
  homepage: string;
  imdb_id: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
}

interface BelongsToCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export interface Genre {
  id: number;
  name: string;
}

interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

// CREDITS
export interface ApiCreditsResponse {
  id: number;
  cast: CastApi[];
  crew: CrewApi[];
}

export interface Cast {
  id: number;
  gender: number;
  name: string;
  profile_path: string | null;
  character: string;
  order: number;
}

export interface CastApi {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

interface CrewApi extends Omit<CastApi, 'character' | 'order'> {
  department: string;
  job: string;
}

// POSTERS
export const enum PosterSize {
  w45 = 'w45',
  w92 = 'w92',
  w154 = 'w154',
  w185 = 'w185',
  w300 = 'w300',
  w342 = 'w342',
  w500 = 'w500',
  w780 = 'w780',
  w1280 = 'w1280',
  original = 'original',
}

export type PosterSizes = `${PosterSize}`;
