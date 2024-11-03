export function getStorageKey<T>(key: string): T | undefined;
export function getStorageKey<T>(key: string, defaultValue: T): T;

/** Get value from localStorage and replace it with default one if it doesn't exist */
export function getStorageKey<T>(key: string, defaultValue?: T): T | undefined {
  try {
    const cache = localStorage.getItem(key);

    return cache ? JSON.parse(cache) : defaultValue;
  } catch {
    return defaultValue;
  }
}
