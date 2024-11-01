/** Format temperature, round to digit and add Celsius sign */
export const formatTemperature = (temperature: number) =>
  `${Math.round(temperature)}°`;
