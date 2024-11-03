import type { Theme } from "../theme";

import { nightTheme } from "./nightTheme.ts";

export const eveningTheme: Theme = {
  ...nightTheme,
  background: "fixed linear-gradient(to bottom, #6F6D8C, #BC615A80)",
  fadedColor: "#00000040",
  precipitationProbabilityColor: "#f4fa81",
  panel: {
    background: "rgba(255, 255, 255, 0.2)",
  },
  range: {
    markerBorderColor: "rgba(0, 0, 0, 0.45)",
    meterBackground: "linear-gradient(to right, #96d0a7, #ef8734)",
  },
};
