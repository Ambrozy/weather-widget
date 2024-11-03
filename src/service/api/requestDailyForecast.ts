import {
  DAILY_FORECAST_URL,
  DAILY_REQUEST_LOCAL_STORAGE_KEY,
} from "../constants";

import { cacheRequestDecorator } from "./cache/cacheRequestDecorator.ts";
import { request } from "./request.ts";
import type { DailyForecastResponse } from "./types/api.types.ts";
import type { DailyForecast } from "./types/data.types.ts";

/** Request daily forecast for 5 days, transform response to simplified state and cache it */
export const requestDailyForecast = async (
  locationKey: string,
  signal?: AbortSignal,
) =>
  cacheRequestDecorator(
    () =>
      request<DailyForecast, DailyForecastResponse>(
        `${DAILY_FORECAST_URL}${locationKey}?language=en-us&details=true&metric=true`,
        {
          signal,
          transformResponse: (data) =>
            data.DailyForecasts.map((item) => ({
              dateTime: item.Date,
              iconIndex: item.Day.Icon,
              minTemperature: item.Temperature.Minimum.Value,
              maxTemperature: item.Temperature.Maximum.Value,
              hasPrecipitation: item.Day.HasPrecipitation,
              precipitationProbability: item.Day.PrecipitationProbability,
            })),
        },
      ),
    "Daily",
    locationKey,
    DAILY_REQUEST_LOCAL_STORAGE_KEY,
  );
