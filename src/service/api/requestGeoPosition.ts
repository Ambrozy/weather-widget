import {
  GEO_POSITION_REQUEST_LOCAL_STORAGE_KEY,
  GEO_POSITION_URL,
  UNKNOWN_LOCATION_TEXT,
} from "../constants";

import { cacheRequestDecorator } from "./cache/cacheRequestDecorator.ts";
import { request } from "./request.ts";
import type { GeoPositionResponse } from "./types/api.types.ts";
import type { GeoPosition } from "./types/data.types.ts";

/** Request user location name by geo position, transform response to simplified state and cache it */
export const requestGeoPosition = async (
  locationQuery: string,
  signal?: AbortSignal,
) =>
  cacheRequestDecorator(
    () =>
      request<GeoPosition, GeoPositionResponse>(
        `${GEO_POSITION_URL}?q=${locationQuery}&language=en-us`,
        {
          signal,
          transformResponse: (data) => ({
            locationKey: data.Key,
            locationName: data.LocalizedName || UNKNOWN_LOCATION_TEXT,
          }),
        },
      ),
    "Hourly",
    locationQuery,
    GEO_POSITION_REQUEST_LOCAL_STORAGE_KEY,
  );
