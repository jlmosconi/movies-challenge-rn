export const enum HttpMethods {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export type HttpMethod = `${HttpMethods}`;
export type QueryParams =
  | string
  | URLSearchParams
  | Record<string, string | number | boolean | string[] | number[] | boolean[]>
  | [string, string | number | boolean | string[] | number[] | boolean[]][];
export interface HttpRequest {
  url: string;
  method: HttpMethod;
  headers?: any;
  body?: any;
  queryParams?: QueryParams;
}
