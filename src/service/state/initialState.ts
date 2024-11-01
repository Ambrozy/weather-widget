import type { ResponseCache } from "../api/types/basic.types.ts";
import type {
  DailyForecast,
  GeoPosition,
  HourlyForecast,
  RequestState,
} from "../api/types/data.types.ts";
import {
  DAILY_REQUEST_LOCAL_STORAGE_KEY,
  DEFAULT_GEO_POSITION,
  GEO_POSITION_REQUEST_LOCAL_STORAGE_KEY,
  HOURLY_REQUEST_LOCAL_STORAGE_KEY,
} from "../constants";
import { getStorageKey } from "../storage/getStorageKey.ts";

export const initialState: RequestState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  hourlyForecast: getStorageKey<ResponseCache<HourlyForecast>>(
    HOURLY_REQUEST_LOCAL_STORAGE_KEY,
  )?.data,
  dailyForecast: getStorageKey<ResponseCache<DailyForecast>>(
    DAILY_REQUEST_LOCAL_STORAGE_KEY,
  )?.data,
  geoPosition:
    getStorageKey<ResponseCache<GeoPosition>>(
      GEO_POSITION_REQUEST_LOCAL_STORAGE_KEY,
    )?.data ?? DEFAULT_GEO_POSITION,
};
