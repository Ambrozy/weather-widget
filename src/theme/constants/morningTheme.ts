import type { Theme } from "../theme";

import { nightTheme } from "./nightTheme.ts";

export const morningTheme: Theme = {
  ...nightTheme,
  background: "linear-gradient(to bottom, #81C5E5, #DC927F)",
};
