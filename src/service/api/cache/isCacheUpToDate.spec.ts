import { it, describe, expect, vi, beforeAll, afterAll } from "vitest";

import { isCacheUpToDate } from "./isCacheUpToDate.ts";

const cache = {
  data: null,
  requested: "2024-11-04T00:00:00+01:00",
  locationKey: "123456",
};

describe("isCacheUpToDate", () => {
  beforeAll(() => {
    vi.useFakeTimers();
  });
  afterAll(() => {
    vi.useRealTimers();
  });

  it("should return true for the same location key in the same hour for Hourly cache", () => {
    vi.setSystemTime("2024-11-04T00:59:00+01:00");
    expect(isCacheUpToDate(cache, "Hourly", cache.locationKey)).toBe(true);
  });

  it("should return true for the same location key in the same day for Daily cache", () => {
    vi.setSystemTime("2024-11-04T10:59:00+01:00");
    expect(isCacheUpToDate(cache, "Daily", cache.locationKey)).toBe(true);
  });

  it("should return false for the same location key, but different hour for Hourly cache", () => {
    vi.setSystemTime("2024-11-04T01:59:00+01:00");
    expect(isCacheUpToDate(cache, "Hourly", cache.locationKey)).toBe(false);
  });

  it("should return false for the same location key, but different day for Daily cache", () => {
    vi.setSystemTime("2024-11-05T10:59:00+01:00");
    expect(isCacheUpToDate(cache, "Daily", cache.locationKey)).toBe(false);
  });

  it("should return false for a different location key in the same hour for Hourly cache", () => {
    vi.setSystemTime(cache.requested);
    expect(isCacheUpToDate(cache, "Hourly", "234567")).toBe(false);
  });

  it("should return false for a different location key in the same day for Daily cache", () => {
    vi.setSystemTime(cache.requested);
    expect(isCacheUpToDate(cache, "Daily", "234567")).toBe(false);
  });
});
