import { it, describe, expect } from "vitest";

import { formatTemperature } from "./formatTemperature.ts";

describe("formatTemperature", () => {
  it("should round down temperature and add Celsius sign", () => {
    expect(formatTemperature(23.1)).toBe("23°");
  });

  it("should round up temperature and add Celsius sign", () => {
    expect(formatTemperature(23.9)).toBe("24°");
  });
});
