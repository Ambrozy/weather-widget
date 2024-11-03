import { dayTheme } from "./constants/dayTheme.ts";
import { eveningTheme } from "./constants/eveningTheme.ts";
import { morningTheme } from "./constants/morningTheme.ts";
import { nightTheme } from "./constants/nightTheme.ts";

export const getTheme = () => {
  const hour = new Date().getHours();

  switch (true) {
    case hour >= 5 && hour < 11:
      return morningTheme;
    case hour >= 11 && hour < 17:
      return dayTheme;
    case hour >= 17 && hour < 21:
      return eveningTheme;
    default:
      return nightTheme;
  }
};
