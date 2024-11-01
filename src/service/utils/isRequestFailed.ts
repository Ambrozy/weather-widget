import type { ApiResponse, ErrorResponse } from "../api/types/basic.types.ts";

/** TypeGuard return true if request responses with error */
export const isRequestFailed = <T>(
  response: ApiResponse<T>,
): response is ErrorResponse<unknown> => "error" in response;
