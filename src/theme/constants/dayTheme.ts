import type { Theme } from "../theme";

import { nightTheme } from "./nightTheme.ts";

export const dayTheme: Theme = {
  ...nightTheme,
  background: "linear-gradient(to bottom, #4982AD, #90BBD880)",
};
