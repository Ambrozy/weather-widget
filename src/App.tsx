import { AppHeader } from "./components/AppHeader.tsx";
import { AppWelcomeScreen } from "./components/AppWelcomeScreen.tsx";
import { AppWrapper } from "./components/AppWrapper.tsx";
import { DailyForecastPanel } from "./components/DailyForecastPanel.tsx";
import { HourlyForecastPanel } from "./components/HourlyForecastPanel.tsx";
import { useApplicationState } from "./service/state/useApplicationState.ts";

export default function App() {
  const { isError, isLoading, hourlyForecast, dailyForecast, geoPosition } =
    useApplicationState();

  // first render there is no fetched data
  if (!hourlyForecast || !dailyForecast) {
    return (
      <AppWrapper>
        <AppWelcomeScreen isError={isError} />
      </AppWrapper>
    );
  }

  // hourly and daily forecast always starts with now, because we request data each hour and day correspondingly
  const currentHourlyForecast = hourlyForecast[0];
  const currentDailyForecast = dailyForecast[0];

  return (
    <AppWrapper>
      <AppHeader
        isError={isError}
        isLoading={isLoading}
        locationName={geoPosition.locationName}
        temperature={currentHourlyForecast.temperature}
        conditions={currentHourlyForecast.conditions}
        minTemperature={currentDailyForecast.minTemperature}
        maxTemperature={currentDailyForecast.maxTemperature}
      />
      <HourlyForecastPanel hourlyForecast={hourlyForecast} />
      <DailyForecastPanel
        temperature={currentHourlyForecast.temperature}
        dailyForecast={dailyForecast}
      />
    </AppWrapper>
  );
}
