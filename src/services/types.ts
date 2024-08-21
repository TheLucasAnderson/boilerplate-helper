/**
 * Interface representing an HTTP response.
 */
export interface HttpResponse<T> {
  status: number;
  data: T;
}
