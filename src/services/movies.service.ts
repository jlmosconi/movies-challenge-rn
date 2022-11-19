import {httpClientService} from '@services';
import {APP_ENV_TMDB_APIKEY} from '@env';
import {Observable} from 'rxjs';
import {ENDPOINTS} from '@constants';

class MoviesService {
  private language = 'es-MX';
  private api_key = APP_ENV_TMDB_APIKEY;
  private tmdbUrl = 'https://api.themoviedb.org/3';
  private static instance: MoviesService;

  static getInstance(): MoviesService {
    MoviesService.instance = MoviesService.instance || new MoviesService();
    return MoviesService.instance;
  }

  public getUpcomingMovies = (): Observable<any> => {
    return httpClientService.get(`${this.tmdbUrl}${ENDPOINTS.upcomingMovies}`, {api_key: this.api_key, language: this.language, page: 1});
  };
}

export const moviesService = MoviesService.getInstance();
