/** Format hour number  with AM/PM notation. Replace with https://day.js.org/docs/en/display/format in case of localization */
export const formatHour = (dateTime: string) => {
  const hour = new Date(dateTime).getHours();

  switch (true) {
    case hour === 0:
      return "12AM";
    case hour < 12:
      return `${hour}AM`;
    case hour === 12:
      return "12PM";
    default:
      return `${hour - 12}PM`;
  }
};
