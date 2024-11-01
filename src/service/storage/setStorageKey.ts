/** Save data in localStorage */
export const setStorageKey = <T>(key: string, value: T) =>
  localStorage.setItem(key, JSON.stringify(value));
