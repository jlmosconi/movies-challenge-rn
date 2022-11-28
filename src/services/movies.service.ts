import {CastAdapter, MovieAdapter, MovieDetailsAdapter} from '@adapters';
import {ENDPOINTS} from '@constants';
import {APP_ENV_TMDB_APIKEY} from '@env';
import {ApiCreditsResponse, ApiMovie, ApiMovieDetails, ApiMovieResponse, Cast, CastApi, Movie, MovieDetails} from '@models';
import {map, Observable} from 'rxjs';
import {httpClientService} from './http-client.service';

class MoviesService {
  private language = 'es-MX';
  private api_key = APP_ENV_TMDB_APIKEY;
  // private region = 'AR';
  private tmdbUrl = 'https://api.themoviedb.org/3';
  private static instance: MoviesService;

  static getInstance(): MoviesService {
    MoviesService.instance = MoviesService.instance || new MoviesService();
    return MoviesService.instance;
  }

  public getUpcomingMovies = (): Observable<Movie[]> => {
    return httpClientService
      .get<ApiMovieResponse>(`${this.tmdbUrl}${ENDPOINTS.upcomingMovies}`, this.getQueryParamsList())
      .pipe(map(response => this.adaptMovies(response.results)));
  };

  public getNowPlayingMovies = (): Observable<Movie[]> => {
    return httpClientService
      .get<ApiMovieResponse>(`${this.tmdbUrl}${ENDPOINTS.nowPlayingMovies}`, this.getQueryParamsList())
      .pipe(map(response => this.adaptMovies(response.results)));
  };

  public getPopularMovies = (): Observable<Movie[]> => {
    return httpClientService
      .get<ApiMovieResponse>(`${this.tmdbUrl}${ENDPOINTS.popularMovies}`, this.getQueryParamsList())
      .pipe(map(response => this.adaptMovies(response.results)));
  };

  public getTopRatedMovies = (): Observable<Movie[]> => {
    return httpClientService
      .get<ApiMovieResponse>(`${this.tmdbUrl}${ENDPOINTS.topRatedMovies}`, this.getQueryParamsList())
      .pipe(map(response => this.adaptMovies(response.results)));
  };

  public getMovieDetails = (id: number): Observable<MovieDetails> => {
    return httpClientService
      .get<ApiMovieDetails>(`${this.tmdbUrl}${ENDPOINTS.movieDetails(id)}`, this.getQueryParamsDetails())
      .pipe(map(response => this.adaptMovie(response)));
  };

  public getSimilarMovies = (id: number): Observable<Movie[]> => {
    return httpClientService
      .get<ApiMovieResponse>(`${this.tmdbUrl}${ENDPOINTS.similarMovies(id)}`, this.getQueryParamsList())
      .pipe(map(response => this.adaptMovies(response.results).filter(movie => movie.id !== id)));
  };

  public getCast = (id: number): Observable<Cast[]> => {
    return httpClientService
      .get<ApiCreditsResponse>(`${this.tmdbUrl}${ENDPOINTS.credits(id)}`, this.getQueryParamsDetails())
      .pipe(map(response => this.adaptCast(response.cast)));
  };

  public searchMovies = (query: string): Observable<Movie[]> => {
    return httpClientService
      .get<ApiMovieResponse>(`${this.tmdbUrl}${ENDPOINTS.searchMovies}`, this.getQueryParamsSearch(query))
      .pipe(map(response => this.adaptMovies(response.results)));
  };

  private getQueryParamsList = () => ({api_key: this.api_key, language: this.language, page: 1});
  private getQueryParamsDetails = () => ({api_key: this.api_key, language: this.language});
  private getQueryParamsSearch = (query: string) => ({api_key: this.api_key, language: this.language, query});

  private adaptMovies = (movies: ApiMovie[]): Movie[] => movies.map(movie => MovieAdapter(movie));
  private adaptMovie = (movie: ApiMovieDetails): MovieDetails => MovieDetailsAdapter(movie);
  private adaptCast = (cast: CastApi[]): Cast[] => cast.map(c => CastAdapter(c));
}

export const moviesService = MoviesService.getInstance();
