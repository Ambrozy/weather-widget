import { it, describe, expect } from "vitest";

import { formatDay } from "./formatDay.ts";

describe("formatDay", () => {
  it("should return Monday", () => {
    expect(formatDay("2024-11-04T00:00:00+01:00")).toBe("Monday");
  });
  it("should return Tuesday", () => {
    expect(formatDay("2024-11-05T00:00:00+01:00")).toBe("Tuesday");
  });
  it("should return Wednesday", () => {
    expect(formatDay("2024-11-06T00:00:00+01:00")).toBe("Wednesday");
  });
  it("should return Thursday", () => {
    expect(formatDay("2024-11-07T00:00:00+01:00")).toBe("Thursday");
  });
  it("should return Friday", () => {
    expect(formatDay("2024-11-08T00:00:00+01:00")).toBe("Friday");
  });
  it("should return Saturday", () => {
    expect(formatDay("2024-11-09T00:00:00+01:00")).toBe("Saturday");
  });
  it("should return Sunday", () => {
    expect(formatDay("2024-11-10T00:00:00+01:00")).toBe("Sunday");
  });
});
