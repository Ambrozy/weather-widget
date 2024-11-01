export type SuccessResponse<T> = {
  /** Data from request */
  data: T;
};
export type ErrorResponse<T> = { error: T };
export type ApiResponse<T, E = unknown> = SuccessResponse<T> | ErrorResponse<E>;
export type RequestOptions<Return, Response = Return> = {
  /**
   * Function to transform response data after it received.
   * @default identity
   */
  transformResponse?: (data: Response) => Return;
  /** Abort signal for the fetch */
  signal?: AbortSignal;
};
export type ResponseCache<T> = SuccessResponse<T> & {
  /** Date of response received in ISO format */
  requested: string;
  /** Location key of response */
  locationKey: string;
}
