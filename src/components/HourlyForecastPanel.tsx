import { memo } from "react";
import styled from "styled-components";

import type { HourlyForecast } from "../service/api/types/data.types.ts";

import { ForecastPanel } from "./ForecastPanel.tsx";
import { HourlyForecastPanelItem } from "./HourlyForecastPanelItem.tsx";

interface HourlyForecastProps {
  hourlyForecast: HourlyForecast;
}

const ListS = styled.div`
  display: flex;
  overflow: auto;
  padding: 10px 0 10px;
  margin-bottom: -10px;
  gap: 10px;
`;

export const HourlyForecastPanel = memo(
  ({ hourlyForecast }: HourlyForecastProps) => (
    <ForecastPanel title="Hourly Forecast">
      <ListS>
        {hourlyForecast.map(({ dateTime, temperature, iconIndex }, index) => (
          <HourlyForecastPanelItem
            isNow={index === 0}
            dateTime={dateTime}
            temperature={temperature}
            iconIndex={iconIndex}
            key={dateTime}
          />
        ))}
      </ListS>
    </ForecastPanel>
  ),
);
