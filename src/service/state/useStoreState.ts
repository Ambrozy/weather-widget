import { useCallback, useEffect, useState } from "react";

import type { GeoPosition, RequestState } from "../api/types/data.types.ts";
import { LOCATION_LOCAL_STORAGE_KEY } from "../constants";
import { setStorageKey } from "../storage/setStorageKey.ts";

import { requestGeoPosition } from "../api/requestGeoPosition.ts";

import { initialState } from "./initialState.ts";
import { reducer } from "./reducer.ts";
import { requestHourlyForecast } from "../api/requestHourlyForecast.ts";
import { requestDailyForecast } from "../api/requestDailyForecast.ts";
import { isRequestAborted } from "../utils/isRequestAborted.ts";
import { isRequestFailed } from "../utils/isRequestFailed.ts";

/**
 * Request forecast according to user location on start of the application
 * Default location is Stockholm in case of user doesn't allow geolocation api
 * Previous location saves into localStorage and uses as default in next application open
 */
export const useStoreState = () => {
  const [forecast, dispatch] = useState<RequestState>(initialState);
  const fetchForecast = useCallback(
    async (geoPosition: GeoPosition, signal?: AbortSignal) => {
      dispatch(reducer.onStart());

      const [hourlyForecast, dailyForecast] = await Promise.all([
        requestHourlyForecast(geoPosition.locationKey, signal),
        requestDailyForecast(geoPosition.locationKey, signal),
      ]);

      // request was aborted -> do nothing
      if (isRequestAborted(hourlyForecast) || isRequestAborted(dailyForecast)) {
        dispatch(reducer.onAbort());
      } else if (
        isRequestFailed(hourlyForecast) ||
        isRequestFailed(dailyForecast)
      ) {
        // one of the request return error -> set error state
        dispatch(reducer.onError());
      } else {
        // data fetched -> set success state and new data
        dispatch(
          reducer.onSuccess(
            hourlyForecast.data,
            dailyForecast.data,
            geoPosition,
          ),
        );
      }
    },
    [],
  );
  const fetchForecastByLocationQuery = useCallback(
    async (locationQuery: string) => {
      dispatch(reducer.onStart());

      const response = await requestGeoPosition(locationQuery);

      if (isRequestFailed(response)) {
        dispatch(reducer.onError());
      } else {
        setStorageKey(LOCATION_LOCAL_STORAGE_KEY, response.data);
        await fetchForecast(response.data);
      }
    },
    [fetchForecast],
  );

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchForecast(forecast.geoPosition, signal);

    // use `watchPosition` with 1 hour timeout in case of user can hold application opened a long time
    navigator.geolocation.getCurrentPosition(async (pos) => {
      controller.abort();
      await fetchForecastByLocationQuery(
        `${pos.coords.latitude.toFixed(2)},${pos.coords.longitude.toFixed(2)}`,
      );
    });

    return () => controller.abort();
  }, [fetchForecast]);

  return forecast;
};
