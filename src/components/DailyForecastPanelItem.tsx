import { memo } from "react";

import { DailyForecastItem } from "../service/api/types/data.types.ts";

import { AccuWeatherIcon } from "./AccuWeatherIcon.tsx";
import {
  DailyForecastConditionsS,
  DailyForecastConditionsWithPrecipitationS,
  DailyForecastProbabilityS,
  DailyForecastRowS,
  DailyForecastTimeS,
} from "./DailyForecastPanelItem.styles.ts";
import { DailyRange } from "./DailyRange.tsx";
import { formatDay } from "./utils/formatDay.ts";

interface DailyForecastPanelItemProps extends DailyForecastItem {
  /** Display Today instead of hour */
  isToday: boolean;
  /** If `true` show average temperature marker */
  hasAverageTemperature?: boolean;
  /** 10-days minimum temperature */
  totalMinTemperature: number;
  /** 10-days maximum temperature */
  totalMaxTemperature: number;
}

export const DailyForecastPanelItem = memo(
  ({
    dateTime,
    iconIndex,
    hasAverageTemperature,
    totalMinTemperature,
    totalMaxTemperature,
    minTemperature,
    maxTemperature,
    hasPrecipitation,
    precipitationProbability,
    isToday,
  }: DailyForecastPanelItemProps) => {
    const dayTitle = isToday ? "Today" : formatDay(dateTime);
    const dayText = isToday ? "Today" : formatDay(dateTime)?.slice(0, 3);

    return (
      <DailyForecastRowS>
        <DailyForecastTimeS title={dayTitle}>{dayText}</DailyForecastTimeS>

        {hasPrecipitation ? (
          <DailyForecastConditionsWithPrecipitationS>
            <AccuWeatherIcon iconIndex={iconIndex} />
            <DailyForecastProbabilityS>
              {precipitationProbability}%
            </DailyForecastProbabilityS>
          </DailyForecastConditionsWithPrecipitationS>
        ) : (
          <DailyForecastConditionsS>
            <AccuWeatherIcon iconIndex={iconIndex} />
          </DailyForecastConditionsS>
        )}

        <DailyRange
          temperature={
            hasAverageTemperature
              ? (minTemperature + maxTemperature) / 2
              : undefined
          }
          totalMinTemperature={totalMinTemperature}
          totalMaxTemperature={totalMaxTemperature}
          minTemperature={minTemperature}
          maxTemperature={maxTemperature}
        />
      </DailyForecastRowS>
    );
  },
);
