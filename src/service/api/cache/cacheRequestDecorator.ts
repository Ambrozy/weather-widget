import { getStorageKey } from "../../storage/getStorageKey.ts";
import { setStorageKey } from "../../storage/setStorageKey.ts";
import { isRequestSucceeded } from "../../utils/isRequestSucceeded.ts";

import type { ApiResponse, ResponseCache } from "../types/basic.types.ts";

import { isCacheUpToDate } from "./isCacheUpToDate.ts";

/**
 * Add caching functionality to api request and invalidate data according to `cachePeriod` and `locationKey`
 * @param request - cached request
 * @param cachePeriod - the period during which the cache is valid (during an hour or a day)
 * @param locationKey - cache location
 * @param localStorageKey - local storage key to save request cache
 */
export const cacheRequestDecorator = async <T>(
  request: () => Promise<ApiResponse<T>>,
  cachePeriod: "Daily" | "Hourly",
  locationKey: string,
  localStorageKey: string,
) => {
  const responseCache = getStorageKey<ResponseCache<T>>(localStorageKey);

  // return saved cache only if location is same and `cachePeriod` has not expired
  if (
    responseCache &&
    isCacheUpToDate(responseCache, cachePeriod, locationKey)
  ) {
    return responseCache;
  }

  const response = await request();

  // save request only if it was successful
  if (isRequestSucceeded(response)) {
    const cache: ResponseCache<T> = {
      data: response.data,
      requested: new Date().toISOString(),
      locationKey,
    };

    setStorageKey(localStorageKey, cache);
  }

  return response;
};
