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
  /** Current marker */
  temperature?: number;
  /** 10-days minimum temperature */
  totalMinTemperature: number;
  /** 10-days maximum temperature */
  totalMaxTemperature: number;
}

export const DailyForecastPanelItem = memo(
  ({
    dateTime,
    iconIndex,
    temperature,
    totalMinTemperature,
    totalMaxTemperature,
    minTemperature,
    maxTemperature,
    hasPrecipitation,
    precipitationProbability,
    isToday,
  }: DailyForecastPanelItemProps) => (
    <DailyForecastRowS>
      <DailyForecastTimeS>
        {isToday ? "Today" : formatDay(dateTime)}
      </DailyForecastTimeS>

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
        temperature={temperature}
        totalMinTemperature={totalMinTemperature}
        totalMaxTemperature={totalMaxTemperature}
        minTemperature={minTemperature}
        maxTemperature={maxTemperature}
      />
    </DailyForecastRowS>
  ),
);
