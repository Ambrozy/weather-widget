import type { DailyForecastResponse } from "../api/types/api.types.ts";

export const dailyForecastMock: DailyForecastResponse = {
  Headline: {
    EffectiveDate: "2024-11-03T13:00:00+01:00",
    EffectiveEpochDate: 1730635200,
    Severity: 5,
    Text: "Expect showers Sunday afternoon",
    Category: "rain",
    EndDate: "2024-11-03T19:00:00+01:00",
    EndEpochDate: 1730656800,
    MobileLink:
      "http://www.accuweather.com/en/se/stockholm/314929/daily-weather-forecast/314929?unit=c&lang=en-us",
    Link: "http://www.accuweather.com/en/se/stockholm/314929/daily-weather-forecast/314929?unit=c&lang=en-us",
  },
  DailyForecasts: [
    {
      Date: "2024-11-03T07:00:00+01:00",
      EpochDate: 1730613600,
      Temperature: {
        Minimum: {
          Value: 1.3,
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 13,
          Unit: "C",
          UnitType: 17,
        },
      },
      DegreeDaySummary: {
        Heating: {
          Value: 11,
          Unit: "C",
          UnitType: 17,
        },
        Cooling: {
          Value: 0,
          Unit: "C",
          UnitType: 17,
        },
      },
      Day: {
        Icon: 14,
        IconPhrase: "Partly sunny w/ showers",
        HasPrecipitation: true,
        PrecipitationProbability: 10,
      },
      Night: {
        Icon: 35,
        IconPhrase: "Partly cloudy",
        HasPrecipitation: false,
        PrecipitationProbability: 10,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/se/stockholm/314929/daily-weather-forecast/314929?day=1&unit=c&lang=en-us",
      Link: "http://www.accuweather.com/en/se/stockholm/314929/daily-weather-forecast/314929?day=1&unit=c&lang=en-us",
    },
    {
      Date: "2024-11-04T07:00:00+01:00",
      EpochDate: 1730700000,
      Temperature: {
        Minimum: {
          Value: 3.5,
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 6.5,
          Unit: "C",
          UnitType: 17,
        },
      },
      DegreeDaySummary: {
        Heating: {
          Value: 11,
          Unit: "C",
          UnitType: 17,
        },
        Cooling: {
          Value: 0,
          Unit: "C",
          UnitType: 17,
        },
      },
      Day: {
        Icon: 3,
        IconPhrase: "Partly sunny",
        HasPrecipitation: false,
        PrecipitationProbability: 20,
      },
      Night: {
        Icon: 38,
        IconPhrase: "Mostly cloudy",
        HasPrecipitation: false,
        PrecipitationProbability: 20,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/se/stockholm/314929/daily-weather-forecast/314929?day=2&unit=c&lang=en-us",
      Link: "http://www.accuweather.com/en/se/stockholm/314929/daily-weather-forecast/314929?day=2&unit=c&lang=en-us",
    },
    {
      Date: "2024-11-05T07:00:00+01:00",
      EpochDate: 1730786400,
      Temperature: {
        Minimum: {
          Value: 3.7,
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 9.2,
          Unit: "C",
          UnitType: 17,
        },
      },
      DegreeDaySummary: {
        Heating: {
          Value: 11,
          Unit: "C",
          UnitType: 17,
        },
        Cooling: {
          Value: 0,
          Unit: "C",
          UnitType: 17,
        },
      },
      Day: {
        Icon: 3,
        IconPhrase: "Partly sunny",
        HasPrecipitation: false,
        PrecipitationProbability: 10,
      },
      Night: {
        Icon: 38,
        IconPhrase: "Mostly cloudy",
        HasPrecipitation: false,
        PrecipitationProbability: 10,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/se/stockholm/314929/daily-weather-forecast/314929?day=3&unit=c&lang=en-us",
      Link: "http://www.accuweather.com/en/se/stockholm/314929/daily-weather-forecast/314929?day=3&unit=c&lang=en-us",
    },
    {
      Date: "2024-11-06T07:00:00+01:00",
      EpochDate: 1730872800,
      Temperature: {
        Minimum: {
          Value: 3.2,
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 7.5,
          Unit: "C",
          UnitType: 17,
        },
      },
      DegreeDaySummary: {
        Heating: {
          Value: 11,
          Unit: "C",
          UnitType: 17,
        },
        Cooling: {
          Value: 0,
          Unit: "C",
          UnitType: 17,
        },
      },
      Day: {
        Icon: 8,
        IconPhrase: "Dreary",
        HasPrecipitation: false,
        PrecipitationProbability: 10,
      },
      Night: {
        Icon: 8,
        IconPhrase: "Dreary",
        HasPrecipitation: false,
        PrecipitationProbability: 10,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/se/stockholm/314929/daily-weather-forecast/314929?day=4&unit=c&lang=en-us",
      Link: "http://www.accuweather.com/en/se/stockholm/314929/daily-weather-forecast/314929?day=4&unit=c&lang=en-us",
    },
    {
      Date: "2024-11-07T07:00:00+01:00",
      EpochDate: 1730959200,
      Temperature: {
        Minimum: {
          Value: 4.9,
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 8.2,
          Unit: "C",
          UnitType: 17,
        },
      },
      DegreeDaySummary: {
        Heating: {
          Value: 11,
          Unit: "C",
          UnitType: 17,
        },
        Cooling: {
          Value: 0,
          Unit: "C",
          UnitType: 17,
        },
      },
      Day: {
        Icon: 4,
        IconPhrase: "Intermittent clouds",
        HasPrecipitation: false,
        PrecipitationProbability: 10,
      },
      Night: {
        Icon: 8,
        IconPhrase: "Dreary",
        HasPrecipitation: false,
        PrecipitationProbability: 10,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/se/stockholm/314929/daily-weather-forecast/314929?day=5&unit=c&lang=en-us",
      Link: "http://www.accuweather.com/en/se/stockholm/314929/daily-weather-forecast/314929?day=5&unit=c&lang=en-us",
    },
  ],
};
