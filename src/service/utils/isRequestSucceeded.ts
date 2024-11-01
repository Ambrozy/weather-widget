import type { ApiResponse, SuccessResponse } from "../api/types/basic.types.ts";

/** TypeGuard return true if request responses with data */
export const isRequestSucceeded = <T>(
  response: ApiResponse<T>,
): response is SuccessResponse<T> => "data" in response;
