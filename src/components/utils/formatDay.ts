/** Format date as week day. Replace with https://day.js.org/docs/en/display/format in case of localization */
export const formatDay = (dateTime: string) => {
  const weekDay = new Date(dateTime).getDay();

  return {
    0: "Sun",
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thu",
    5: "Fri",
    6: "Sat",
  }[weekDay];
};
