import { memo } from "react";

import Cloudy from "../assets/Cloudy.svg";
import HeavyRain from "../assets/HeavyRain.svg";
import LightRain from "../assets/LightRain.svg";
import NightCloudy from "../assets/NightCloudy.svg";
import Rain from "../assets/Rain.svg";
import Sunny from "../assets/Sunny.svg";
import Thunder from "../assets/Thunder.svg";

interface HourlyForecastItemProps {
  /** Icon number from request https://developer.accuweather.com/weather-icons */
  iconIndex: number;
}

export const AccuWeatherIcon = memo(
  ({ iconIndex }: HourlyForecastItemProps) => {
    switch (iconIndex) {
      case 1:
      case 2:
      case 3:
        return <Sunny role="img" title="Sunny" />;
      case 4:
      case 5:
      case 6:
      case 20:
      case 21:
      case 23:
        return <Cloudy role="img" title="Cloudy" />;
      case 7:
      case 8:
      case 11:
      case 19:
      case 24:
      case 30:
      case 31:
      case 32:
      case 33:
      case 34:
      case 35:
      case 36:
      case 37:
      case 38:
        return <NightCloudy role="img" title="Night Cloudy" />;
      case 12:
      case 13:
      case 14:
        return <LightRain role="img" title="Light Rain" />;
      case 15:
      case 16:
      case 17:
        return <Thunder role="img" title="Thunder" />;
      case 18:
      case 22:
      case 25:
      case 26:
      case 29:
        return <Rain role="img" title="Rain" />;
      case 39:
      case 40:
      case 41:
      case 42:
      case 43:
      case 44:
        return <HeavyRain role="img" title="Heavy Rain" />;
      default:
        return null;
    }
  },
);
