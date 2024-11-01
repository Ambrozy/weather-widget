import type { ApiResponse, ErrorResponse } from "../api/types/basic.types.ts";

/** TypeGuard return true if request was aborted */
export const isRequestAborted = <T>(
  response: ApiResponse<T>,
): response is ErrorResponse<Error> =>
  "error" in response && (response.error as Error)?.name === "AbortError";
