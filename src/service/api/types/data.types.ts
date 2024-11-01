export type HourlyForecastItem = {
  /** Date of forecast */
  dateTime: string;
  /** Icon number from https://developer.accuweather.com/weather-icons */
  iconIndex: number;
  /** String in English describes current weather condition */
  conditions: string;
  /** Temperature in Celsius */
  temperature: number;
};
export type HourlyForecast = HourlyForecastItem[];

export type DailyForecastItem = {
  /** Date of forecast */
  dateTime: string;
  /** Icon number from https://developer.accuweather.com/weather-icons */
  iconIndex: number;
  /** Minimum daily Temperature in Celsius */
  minTemperature: number;
  /** Maximum daily Temperature in Celsius */
  maxTemperature: number;
  /** Daily precipitation is possible flag */
  hasPrecipitation: boolean;
  /** Daily precipitation probability */
  precipitationProbability: number;
};
export type DailyForecast = DailyForecastItem[];

export type GeoPosition = {
  locationKey: string;
  locationName: string;
};

export type RequestState = {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  hourlyForecast?: HourlyForecast;
  dailyForecast?: DailyForecast;
  geoPosition: GeoPosition;
}
