import {
  HOURLY_FORECAST_URL,
  HOURLY_REQUEST_LOCAL_STORAGE_KEY,
} from "../constants";

import { cacheRequestDecorator } from "./cache/cacheRequestDecorator.ts";
import { request } from "./request.ts";
import type { HourlyForecastResponse } from "./types/api.types.ts";
import type { HourlyForecast } from "./types/data.types.ts";

/** Request hourly forecast for 12 hours, transform response to simplified state and cache it */
export const requestHourlyForecast = async (
  locationKey: string,
  signal?: AbortSignal,
) =>
  cacheRequestDecorator(
    () =>
      request<HourlyForecast, HourlyForecastResponse>(
        `${HOURLY_FORECAST_URL}${locationKey}?language=en-us&metric=true`,
        {
          signal,
          transformResponse: (data) =>
            data.map((item) => ({
              dateTime: item.DateTime,
              iconIndex: item.WeatherIcon,
              conditions: item.IconPhrase,
              temperature: item.Temperature.Value,
            })),
        },
      ),
    "Hourly",
    locationKey,
    HOURLY_REQUEST_LOCAL_STORAGE_KEY,
  );
