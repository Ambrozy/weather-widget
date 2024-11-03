import { memo } from "react";

import {
  CurrentMarkS,
  DailyMaxTemperatureS,
  DailyMinTemperatureS,
  DailyRangeS,
  RangeMeterS,
  RangeS,
} from "./DailyRange.styles.ts";
import { formatTemperature } from "./utils/formatTemperature.ts";

interface DailyRangeProps {
  /** current marker */
  temperature?: number;
  /** 10-days minimum temperature */
  totalMinTemperature: number;
  /** 10-days maximum temperature */
  totalMaxTemperature: number;
  /** minimum temperature */
  minTemperature: number;
  /** maximum temperature */
  maxTemperature: number;
}

export const DailyRange = memo(
  ({
    temperature,
    totalMinTemperature,
    totalMaxTemperature,
    minTemperature,
    maxTemperature,
  }: DailyRangeProps) => {
    const range = totalMaxTemperature - totalMinTemperature;
    const rangeLeft = Math.round(
      ((minTemperature - totalMinTemperature) / range) * 100,
    );
    const rangeRight = Math.round(
      ((totalMaxTemperature - maxTemperature) / range) * 100,
    );
    const markerLeft = temperature
      ? Math.round(((temperature - totalMinTemperature) / range) * 100)
      : 0;

    return (
      <DailyRangeS>
        <DailyMinTemperatureS>
          {formatTemperature(minTemperature)}
        </DailyMinTemperatureS>
        <RangeS>
          <RangeMeterS $left={rangeLeft} $right={rangeRight} />
          {temperature !== undefined && <CurrentMarkS $left={markerLeft} />}
        </RangeS>
        <DailyMaxTemperatureS>
          {formatTemperature(maxTemperature)}
        </DailyMaxTemperatureS>
      </DailyRangeS>
    );
  },
);
