import styled from "styled-components";

import { DailyForecastItem } from "../service/api/types/data.types.ts";

import { AccuWeatherIcon } from "./AccuWeatherIcon.tsx";
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

const DailyForecastRowS = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
  height: 55px;
  border-bottom: ${(props) => props.theme.divider};

  &:last-child {
    border-bottom: 0;
  }
`;
const DailyForecastTimeS = styled.div`
  flex: 1;
`;
const DailyForecastConditionsS = styled.div`
  width: 40px;
  text-align: center;
  line-height: 16px;
  margin: 0 10px;
`;
const DailyForecastConditionsWithPrecipitationS = styled(
  DailyForecastConditionsS,
)`
  width: 40px;
  text-align: center;

  & svg {
    max-height: 24px;
  }
`;
const DailyForecastProbabilityS = styled.div`
  font-size: 15px;
  color: #81cffa;
`;

export const DailyForecastPanelItem = ({
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
);
