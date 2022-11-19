import {DEFAULT_HTTP_ERRORS} from '@constants';
import {HttpMethods, HttpRequest, QueryParams} from '@models';
import {catchError, map, Observable, throwError} from 'rxjs';
import {ajax, AjaxError} from 'rxjs/ajax';

class HttpClientService {
  private static instance: HttpClientService;

  static getInstance(): HttpClientService {
    HttpClientService.instance = HttpClientService.instance || new HttpClientService();
    return HttpClientService.instance;
  }

  public get<T>(url: string, queryParams?: QueryParams): Observable<T> {
    return this.request({url, method: HttpMethods.GET, queryParams});
  }

  private request<T>({url, method, body, queryParams}: HttpRequest): Observable<T> {
    return ajax({
      url,
      method,
      queryParams,
      body,
      headers: this.getHeaders(),
      crossDomain: true,
    }).pipe(
      map(({response}) => response as unknown as T),
      catchError((error: AjaxError) => throwError(() => this.getAjaxError(error))),
    );
  }

  private getHeaders(): Readonly<Record<string, string>> {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
  }

  private getAjaxError = (error: AjaxError): string => {
    return DEFAULT_HTTP_ERRORS[error.status];
  };
}

export const httpClientService = HttpClientService.getInstance();
