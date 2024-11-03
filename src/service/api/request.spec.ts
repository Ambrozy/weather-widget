import { it, describe, expect, vi, beforeEach } from "vitest";

import {
  getGetErrorHandler,
  getGetSuccessHandler,
  startMockServer,
} from "../__mocks__/mswServer.ts";

import { request } from "./request.ts";

const server = startMockServer();
const testUrl = "https://test.com";
const testUrlWithQuery = `${testUrl}?q=query`;
const successData = { value: "key" };

describe("request", () => {
  beforeEach(() => {
    vi.stubEnv("VITE_ACCUWEATHER_API_KEY", "apiKey");
  });

  it("should return data", async () => {
    server.use(getGetSuccessHandler(testUrl, successData));
    expect(await request(testUrlWithQuery)).toEqual({ data: successData });
  });

  it("should return transformed data", async () => {
    server.use(getGetSuccessHandler(testUrl, successData));
    expect(
      await request(testUrlWithQuery, {
        transformResponse: (data: typeof successData) => ({
          value: data.value + " transformed",
        }),
      }),
    ).toEqual({ data: { value: "key transformed" } });
  });

  it("should return error", async () => {
    server.use(getGetErrorHandler(testUrl));
    expect(await request(testUrlWithQuery)).toEqual({
      error: expect.anything(),
    });
  });
});
