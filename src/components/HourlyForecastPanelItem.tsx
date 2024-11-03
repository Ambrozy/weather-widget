import { memo } from "react";
import styled from "styled-components";

import type { HourlyForecastItem } from "../service/api/types/data.types.ts";

import { AccuWeatherIcon } from "./AccuWeatherIcon.tsx";
import { formatHour } from "./utils/formatHour.ts";
import { formatTemperature } from "./utils/formatTemperature.ts";

interface HourlyForecastPanelItemProps
  extends Pick<HourlyForecastItem, "dateTime" | "iconIndex" | "temperature"> {
  /** Display Now instead of hour */
  isNow: boolean;
}

const HourlyForecastItemS = styled.div`
  display: flex;
  flex-direction: column;
  width: 45px;
  min-width: 45px;
  text-align: center;
  gap: 15px;
`;

export const HourlyForecastPanelItem = memo(
  ({
    dateTime,
    isNow,
    iconIndex,
    temperature,
  }: HourlyForecastPanelItemProps) => (
    <HourlyForecastItemS>
      <span>{isNow ? "Now" : formatHour(dateTime)}</span>
      <span>
        <AccuWeatherIcon iconIndex={iconIndex} />
      </span>
      <span>{formatTemperature(temperature)}</span>
    </HourlyForecastItemS>
  ),
);
