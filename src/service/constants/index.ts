import type { GeoPosition } from "../api/types/data.types.ts";

export const HOURLY_REQUEST_LOCAL_STORAGE_KEY =
  "HOURLY_REQUEST_LOCAL_STORAGE_KEY";
export const DAILY_REQUEST_LOCAL_STORAGE_KEY =
  "DAILY_REQUEST_LOCAL_STORAGE_KEY";
export const GEO_POSITION_REQUEST_LOCAL_STORAGE_KEY =
  "GEO_POSITION_REQUEST_LOCAL_STORAGE_KEY";
export const LOCATION_LOCAL_STORAGE_KEY = "LOCATION_LOCAL_STORAGE_KEY";
/** Default location in case of user doesn't allow geolocation api */
export const DEFAULT_LOCATION_KEY = "314929"; // Stockholm
/** Use it as default name for undetected location */
export const UNKNOWN_LOCATION_TEXT = "Unknown Location";
/** Used as default geoPosition if user doesn't allow geolocation api */
export const DEFAULT_GEO_POSITION: GeoPosition = {
  locationKey: DEFAULT_LOCATION_KEY,
  locationName: "Stockholm",
};
