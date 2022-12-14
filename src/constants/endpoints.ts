export const ENDPOINTS = {
  upcomingMovies: '/movie/upcoming',
  nowPlayingMovies: '/movie/now_playing',
  popularMovies: '/movie/popular',
  topRatedMovies: '/movie/top_rated',
  movieDetails: (movieId: number) => `/movie/${movieId}`,
  similarMovies: (movieId: number) => `/movie/${movieId}/similar`,
  credits: (movieId: number) => `/movie/${movieId}/credits`,
  searchMovies: '/search/movie',
};
