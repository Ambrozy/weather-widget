import { it, describe, expect, vi, beforeEach } from "vitest";

import { hourlyForecastMock } from "../__mocks__/hourlyForecast.mock.ts";
import {
  getGetSuccessHandler,
  startMockServer,
} from "../__mocks__/mswServer.ts";
import { HOURLY_FORECAST_URL } from "../constants";

import { requestHourlyForecast } from "./requestHourlyForecast.ts";

const server = startMockServer();
const locationKey = "123456";
const testUrl = `${HOURLY_FORECAST_URL}${locationKey}`;

vi.stubGlobal("localStorage", {
  getItem: vi.fn(),
  setItem: vi.fn(),
});

describe("requestHourlyForecast", () => {
  beforeEach(() => {
    vi.stubEnv("VITE_ACCUWEATHER_API_KEY", "apiKey");
  });

  it("should return transformed data", async () => {
    server.use(getGetSuccessHandler(testUrl, hourlyForecastMock));
    expect(await requestHourlyForecast(locationKey)).toEqual({
      data: [
        {
          conditions: "Showers",
          dateTime: "2024-11-03T16:00:00+01:00",
          iconIndex: 12,
          temperature: 13,
        },
        {
          conditions: "Cloudy",
          dateTime: "2024-11-03T17:00:00+01:00",
          iconIndex: 7,
          temperature: 11.7,
        },
        {
          conditions: "Cloudy",
          dateTime: "2024-11-03T18:00:00+01:00",
          iconIndex: 7,
          temperature: 9.6,
        },
        {
          conditions: "Cloudy",
          dateTime: "2024-11-03T19:00:00+01:00",
          iconIndex: 7,
          temperature: 8.5,
        },
        {
          conditions: "Cloudy",
          dateTime: "2024-11-03T20:00:00+01:00",
          iconIndex: 7,
          temperature: 7,
        },
        {
          conditions: "Cloudy",
          dateTime: "2024-11-03T21:00:00+01:00",
          iconIndex: 7,
          temperature: 6.1,
        },
        {
          conditions: "Cloudy",
          dateTime: "2024-11-03T22:00:00+01:00",
          iconIndex: 7,
          temperature: 5.4,
        },
        {
          conditions: "Cloudy",
          dateTime: "2024-11-03T23:00:00+01:00",
          iconIndex: 7,
          temperature: 4.9,
        },
        {
          conditions: "Cloudy",
          dateTime: "2024-11-04T00:00:00+01:00",
          iconIndex: 7,
          temperature: 4.4,
        },
        {
          conditions: "Cloudy",
          dateTime: "2024-11-04T01:00:00+01:00",
          iconIndex: 7,
          temperature: 4,
        },
        {
          conditions: "Intermittent clouds",
          dateTime: "2024-11-04T02:00:00+01:00",
          iconIndex: 36,
          temperature: 3.8,
        },
        {
          conditions: "Partly cloudy",
          dateTime: "2024-11-04T03:00:00+01:00",
          iconIndex: 35,
          temperature: 3.4,
        },
      ],
    });
  });
});
