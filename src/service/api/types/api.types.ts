export type AccuTemperature = {
  Value: number;
  Unit: string;
  UnitType: number;
};
export type HourlyForecastResponseItem = {
  DateTime: string;
  EpochDateTime: number;
  WeatherIcon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
  IsDaylight: boolean;
  Temperature: AccuTemperature;
  PrecipitationProbability: number;
  MobileLink: string;
  Link: string;
};
export type HourlyForecastResponse = HourlyForecastResponseItem[];

export type DailyForecastResponseHeadline = {
  EffectiveDate: string;
  EffectiveEpochDate: number;
  Severity: number;
  Text: string;
  Category: string;
  EndDate: string;
  EndEpochDate: number;
  MobileLink: string;
  Link: string;
};
export type DailyForecastResponseItem = {
  Date: string;
  EpochDate: number;
  Temperature: {
    Minimum: AccuTemperature;
    Maximum: AccuTemperature;
  };
  DegreeDaySummary: {
    Heating: AccuTemperature;
    Cooling: AccuTemperature;
  };
  Day: {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: boolean;
    PrecipitationProbability: number;
  };
  Night: {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: boolean;
    PrecipitationProbability: number;
  };
  Sources: string[];
  MobileLink: string;
  Link: string;
};
export type DailyForecastResponse = {
  Headline: DailyForecastResponseHeadline;
  DailyForecasts: DailyForecastResponseItem[];
};

export type GeoPositionResponse = {
  Key: string;
  Type: string;
  LocalizedName: string;
  EnglishName: string;
  PrimaryPostalCode: string;
};
