import type { ResponseCache } from "../types/basic.types.ts";

/** Response is up to date only if it requested in the same hour or day according to `cachePeriod` */
export const isCacheUpToDate = <T>(
  cache: ResponseCache<T>,
  cachePeriod: "Daily" | "Hourly",
  locationKey: string,
) => {
  const now = new Date();
  const requested = new Date(cache.requested);

  return (
    ((cachePeriod === "Daily" && now.getHours() - requested.getHours() < 1) ||
      (cachePeriod === "Hourly" && now.getDate() - requested.getDate() < 1)) &&
    locationKey === cache.locationKey
  );
};
