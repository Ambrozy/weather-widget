/** Format date as week day. Replace with https://day.js.org/docs/en/display/format in case of localization */
export const formatDay = (dateTime: string) => {
  const weekDay = new Date(dateTime).getDay();

  return {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  }[weekDay];
};
