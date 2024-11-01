import { defaultTheme } from "./defaultTheme.ts";
import type { Theme } from "./theme";

export const nightTheme: Theme = {
  ...defaultTheme,
  background: "linear-gradient(to bottom, #011E33, #3D3551CC)",
};
