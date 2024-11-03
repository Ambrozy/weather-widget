import { it, describe, expect } from "vitest";

import { formatDay } from "./formatDay.ts";

describe("formatDay", () => {
  it("should return Mon", () => {
    expect(formatDay("2024-11-04T00:00:00+01:00")).toBe("Mon");
  });
  it("should return Tue", () => {
    expect(formatDay("2024-11-05T00:00:00+01:00")).toBe("Tue");
  });
  it("should return Wed", () => {
    expect(formatDay("2024-11-06T00:00:00+01:00")).toBe("Wed");
  });
  it("should return Thu", () => {
    expect(formatDay("2024-11-07T00:00:00+01:00")).toBe("Thu");
  });
  it("should return Fri", () => {
    expect(formatDay("2024-11-08T00:00:00+01:00")).toBe("Fri");
  });
  it("should return Sat", () => {
    expect(formatDay("2024-11-09T00:00:00+01:00")).toBe("Sat");
  });
  it("should return Sun", () => {
    expect(formatDay("2024-11-10T00:00:00+01:00")).toBe("Sun");
  });
});
