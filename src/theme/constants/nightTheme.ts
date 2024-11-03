import type { Theme } from "../theme";

export const nightTheme: Theme = {
  background: "fixed linear-gradient(to bottom, #011E33, #3D3551CC)",
  color: "#fff",
  fadedColor: "#ffffff80",
  divider: "1px solid #ffffff40",
  precipitationProbabilityColor: "#81cffa",
  panel: {
    background: "rgba(255, 255, 255, 0.03)",
  },
  range: {
    markerBorderColor: "rgba(0, 0, 0, 0.7)",
    meterBackground: "linear-gradient(to right, #96d0a7, #ef8734)",
  },
};
