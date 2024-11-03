import type { Theme } from "../theme";

import { nightTheme } from "./nightTheme.ts";

export const eveningTheme: Theme = {
  ...nightTheme,
  background: "linear-gradient(to bottom, #6F6D8C, #BC615A80)",
};
