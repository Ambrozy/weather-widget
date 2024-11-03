import { it, describe, expect, vi, afterEach } from "vitest";
import { cacheRequestDecorator } from "./cacheRequestDecorator.ts";

const { isCacheUpToDateMock, getStorageKeyMock, setStorageKeyMock } =
  vi.hoisted(() => ({
    isCacheUpToDateMock: vi.fn(),
    getStorageKeyMock: vi.fn(),
    setStorageKeyMock: vi.fn(),
  }));

vi.mock("./isCacheUpToDate.ts", () => ({
  isCacheUpToDate: isCacheUpToDateMock,
}));
vi.mock("../../storage/getStorageKey.ts", () => ({
  getStorageKey: getStorageKeyMock,
}));
vi.mock("../../storage/setStorageKey.ts", () => ({
  setStorageKey: setStorageKeyMock,
}));

describe("cacheRequestDecorator", () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  it("should return api response and save result if there is no cache", async () => {
    const request = vi.fn().mockReturnValue({ data: "ApiResponse" });

    expect(
      await cacheRequestDecorator(
        request,
        "Hourly",
        "123456",
        "notExistedCacheKey",
      ),
    ).toEqual({ data: "ApiResponse" });
    expect(request).toHaveBeenCalledOnce();
    expect(setStorageKeyMock).toHaveBeenCalledOnce();
  });

  it("should return api response and don't save result on error if there is no cache", async () => {
    const request = vi.fn().mockReturnValue({ error: "ApiError" });

    expect(
      await cacheRequestDecorator(
        request,
        "Hourly",
        "123456",
        "notExistedCacheKey",
      ),
    ).toEqual({ error: "ApiError" });
    expect(request).toHaveBeenCalledOnce();
    expect(setStorageKeyMock).toBeCalledTimes(0);
  });

  it("should return api response if cache is not up to date", async () => {
    const request = vi.fn().mockReturnValue({ data: "ApiResponse" });

    getStorageKeyMock.mockReturnValue({ data: "CacheResponse" });
    isCacheUpToDateMock.mockReturnValue(false);

    expect(
      await cacheRequestDecorator(
        request,
        "Hourly",
        "123456",
        "existedCacheKey",
      ),
    ).toEqual({ data: "ApiResponse" });
    expect(request).toHaveBeenCalledOnce();
    expect(isCacheUpToDateMock).toHaveBeenCalledOnce();
    expect(setStorageKeyMock).toHaveBeenCalledOnce();
  });

  it("should return cache if cache is up to date", async () => {
    const request = vi.fn().mockReturnValue({ data: "ApiResponse" });

    getStorageKeyMock.mockReturnValue({ data: "CacheResponse" });
    isCacheUpToDateMock.mockReturnValue(true);

    expect(
      await cacheRequestDecorator(
        request,
        "Hourly",
        "123456",
        "existedCacheKey",
      ),
    ).toEqual({ data: "CacheResponse" });
    expect(request).toBeCalledTimes(0);
    expect(setStorageKeyMock).toBeCalledTimes(0);
  });
});
