import type {
  DailyForecast,
  GeoPosition,
  HourlyForecast,
  RequestState,
} from "../api/types/data.types.ts";

export const reducer = {
  onStart:
    () =>
    (state: RequestState): RequestState => ({
      ...state,
      isLoading: true,
      isError: false,
      isSuccess: false,
    }),
  onAbort:
    () =>
    (state: RequestState): RequestState => ({
      ...state,
      isLoading: false,
      isError: false,
      isSuccess: false,
    }),
  onError:
    () =>
    (state: RequestState): RequestState => ({
      ...state,
      isLoading: false,
      isError: true,
      isSuccess: false,
    }),
  onSuccess:
    (
      hourlyForecast: HourlyForecast | undefined,
      dailyForecast: DailyForecast | undefined,
      geoPosition: GeoPosition,
    ) =>
    (state: RequestState): RequestState => ({
      ...state,
      isLoading: false,
      isError: false,
      isSuccess: true,
      hourlyForecast: hourlyForecast ?? state.hourlyForecast,
      dailyForecast: dailyForecast ?? state.dailyForecast,
      geoPosition,
    }),
};
