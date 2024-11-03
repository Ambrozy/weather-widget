import { it, describe, expect, vi, beforeEach } from "vitest";

import { geoPositionMock } from "../__mocks__/geoPosition.mock.ts";
import {
  getGetSuccessHandler,
  startMockServer,
} from "../__mocks__/mswServer.ts";
import { GEO_POSITION_URL, UNKNOWN_LOCATION_TEXT } from "../constants";

import { requestGeoPosition } from "./requestGeoPosition.ts";

const server = startMockServer();
const locationQuery = "44,20";

vi.stubGlobal("localStorage", {
  getItem: vi.fn(),
  setItem: vi.fn(),
});

describe("requestGeoPosition", () => {
  beforeEach(() => {
    vi.stubEnv("VITE_ACCUWEATHER_API_KEY", "apiKey");
  });

  it("should return transformed data", async () => {
    server.use(getGetSuccessHandler(GEO_POSITION_URL, geoPositionMock));
    expect(await requestGeoPosition(locationQuery)).toEqual({
      data: {
        locationKey: geoPositionMock.Key,
        locationName: geoPositionMock.LocalizedName,
      },
    });
  });

  it("should return unknown location name", async () => {
    server.use(
      getGetSuccessHandler(GEO_POSITION_URL, {
        ...geoPositionMock,
        LocalizedName: "",
      }),
    );
    expect(await requestGeoPosition(locationQuery)).toEqual({
      data: {
        locationKey: geoPositionMock.Key,
        locationName: UNKNOWN_LOCATION_TEXT,
      },
    });
  });
});
