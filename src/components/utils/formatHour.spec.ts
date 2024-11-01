import { formatHour } from "./formatHour.ts";

describe("formatHour", () => {
  it("should return 12AM for 0", () => {
    expect(formatHour("2024-11-02T00:00:00+01:00")).toBe("12AM");
  });
  it("should return 8AM for 8", () => {
    expect(formatHour("2024-11-01T08:00:00+01:00")).toBe("8AM");
  });
  it("should return 12PM for 12", () => {
    expect(formatHour("2024-11-01T12:00:00+01:00")).toBe("12PM");
  });
  it("should return 8PM for 20", () => {
    expect(formatHour("2024-11-01T20:00:00+01:00")).toBe("8PM");
  });
});
