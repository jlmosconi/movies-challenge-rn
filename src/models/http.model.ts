export const enum HttpMethods {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export type HttpMethod = `${HttpMethods}`;

export interface HttpRequest {
  url: string;
  method: HttpMethod;
  headers?: any;
  body?: any;
}
