import { it, describe, expect, vi, beforeEach } from "vitest";

import { dailyForecastMock } from "../__mocks__/dailyForecast.mock.ts";
import {
  getGetSuccessHandler,
  startMockServer,
} from "../__mocks__/mswServer.ts";
import { DAILY_FORECAST_URL } from "../constants";

import { requestDailyForecast } from "./requestDailyForecast.ts";

const server = startMockServer();
const locationKey = "123456";
const testUrl = `${DAILY_FORECAST_URL}${locationKey}`;

vi.stubGlobal("localStorage", {
  getItem: vi.fn(),
  setItem: vi.fn(),
});

describe("requestDailyForecast", () => {
  beforeEach(() => {
    vi.stubEnv("VITE_ACCUWEATHER_API_KEY", "apiKey");
  });

  it("should return transformed data", async () => {
    server.use(getGetSuccessHandler(testUrl, dailyForecastMock));
    expect(await requestDailyForecast(locationKey)).toEqual({
      data: [
        {
          dateTime: "2024-11-03T07:00:00+01:00",
          hasPrecipitation: true,
          iconIndex: 14,
          maxTemperature: 13,
          minTemperature: 1.3,
          precipitationProbability: 10,
        },
        {
          dateTime: "2024-11-04T07:00:00+01:00",
          hasPrecipitation: false,
          iconIndex: 3,
          maxTemperature: 6.5,
          minTemperature: 3.5,
          precipitationProbability: 20,
        },
        {
          dateTime: "2024-11-05T07:00:00+01:00",
          hasPrecipitation: false,
          iconIndex: 3,
          maxTemperature: 9.2,
          minTemperature: 3.7,
          precipitationProbability: 10,
        },
        {
          dateTime: "2024-11-06T07:00:00+01:00",
          hasPrecipitation: false,
          iconIndex: 8,
          maxTemperature: 7.5,
          minTemperature: 3.2,
          precipitationProbability: 10,
        },
        {
          dateTime: "2024-11-07T07:00:00+01:00",
          hasPrecipitation: false,
          iconIndex: 4,
          maxTemperature: 8.2,
          minTemperature: 4.9,
          precipitationProbability: 10,
        },
      ],
    });
  });
});
