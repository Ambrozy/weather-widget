import type { Theme } from "../theme";

import { nightTheme } from "./nightTheme.ts";

export const morningTheme: Theme = {
  ...nightTheme,
  background: "fixed linear-gradient(to bottom, #81C5E5, #DC927F)",
  fadedColor: "#00000040",
  precipitationProbabilityColor: "#f4fa81",
  panel: {
    background: "rgba(255, 255, 255, 0.2)",
  },
  range: {
    markerBorderColor: "rgba(0, 0, 0, 0.45)",
    meterBackground: "linear-gradient(to right, #c1f5d1, #ef8734)",
  },
};
