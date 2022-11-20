export interface Movie {
  id: number;
  title: string;
  original_title: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
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
