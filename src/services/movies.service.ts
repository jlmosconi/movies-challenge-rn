import {MovieAdapter} from '@adapters';
import {ENDPOINTS} from '@constants';
import {APP_ENV_TMDB_APIKEY} from '@env';
import {ApiMovie, ApiMovieResponse, Movie} from '@models';
import {map, Observable} from 'rxjs';
import {httpClientService} from './http-client.service';

class MoviesService {
  private language = 'es-MX';
  private api_key = APP_ENV_TMDB_APIKEY;
  private region = 'AR';
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
    console.log('nowPlayingMovies', `${this.tmdbUrl}${ENDPOINTS.nowPlayingMovies}`);
    return httpClientService
      .get<ApiMovieResponse>(`${this.tmdbUrl}${ENDPOINTS.nowPlayingMovies}`, this.getQueryParamsList())
      .pipe(map(response => this.adaptMovies(response.results)));
  };

  public getPopularMovies = (): Observable<Movie[]> => {
    console.log('getPopularMovies', `${this.tmdbUrl}${ENDPOINTS.popularMovies}`);
    return httpClientService
      .get<ApiMovieResponse>(`${this.tmdbUrl}${ENDPOINTS.popularMovies}`, this.getQueryParamsList())
      .pipe(map(response => this.adaptMovies(response.results)));
  };

  public getTopRatedMovies = (): Observable<Movie[]> => {
    console.log('getTopRatedMovies', `${this.tmdbUrl}${ENDPOINTS.topRatedMovies}`);
    return httpClientService
      .get<ApiMovieResponse>(`${this.tmdbUrl}${ENDPOINTS.topRatedMovies}`, this.getQueryParamsList())
      .pipe(map(response => this.adaptMovies(response.results)));
  };

  private getQueryParamsList = () => ({api_key: this.api_key, language: this.language, page: 1});
  private adaptMovies = (movies: ApiMovie[]): Movie[] => movies.map(movie => MovieAdapter(movie));
}

export const moviesService = MoviesService.getInstance();
