import { defaultTheme } from "./defaultTheme.ts";
import type { Theme } from "./theme";

export const eveningTheme: Theme = {
  ...defaultTheme,
  background: "linear-gradient(to bottom, #6F6D8C, #BC615A80)",
};
