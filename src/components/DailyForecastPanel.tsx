import { memo } from "react";

import type { DailyForecast } from "../service/api/types/data.types.ts";

import { ForecastPanel } from "./ForecastPanel.tsx";
import { DailyForecastPanelItem } from "./DailyForecastPanelItem.tsx";

interface DailyForecastPanelProps {
  dailyForecast: DailyForecast;
}

export const DailyForecastPanel = memo(
  ({ dailyForecast }: DailyForecastPanelProps) => {
    const totalMinTemperature = Math.min(
      ...dailyForecast.map((item) => item.minTemperature),
    );
    const totalMaxTemperature = Math.max(
      ...dailyForecast.map((item) => item.maxTemperature),
    );
    /**
     * TODO: remove it
     * free plan of accuWeather API has only 5 days forecast. To demonstrate screen of 10 days, let's duplicate it
     */
    const tenDaysForecast = [...dailyForecast, ...dailyForecast];

    return (
      <ForecastPanel title="10-day Forecast">
        <div>
          {tenDaysForecast.map(
            (
              {
                dateTime,
                iconIndex,
                minTemperature,
                maxTemperature,
                hasPrecipitation,
                precipitationProbability,
              },
              index,
            ) => (
              <DailyForecastPanelItem
                isToday={index === 0}
                dateTime={dateTime}
                iconIndex={iconIndex}
                hasAverageTemperature={index === 0}
                totalMinTemperature={totalMinTemperature}
                totalMaxTemperature={totalMaxTemperature}
                minTemperature={minTemperature}
                maxTemperature={maxTemperature}
                hasPrecipitation={hasPrecipitation}
                precipitationProbability={precipitationProbability}
                key={`${dateTime}${index}`}
              />
            ),
          )}
        </div>
      </ForecastPanel>
    );
  },
);
