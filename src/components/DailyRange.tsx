import { memo } from "react";
import styled from "styled-components";

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

const DailyRangeS = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const DailyMaxTemperatureS = styled.span`
  width: 30px;
  text-align: center;
`;
const DailyMinTemperatureS = styled(DailyMaxTemperatureS)`
  opacity: 0.5;
`;

/* Shows the range of lowest and highest 
   temperatures of the 10-day period */
const RangeS = styled.span`
  position: relative;
  flex: 1;
  background-color: #404254;
  height: 4px;
  border-radius: 5px;
  width: 100px;
  overflow: hidden;
`;
const CurrentMarkS = styled.span<{ $left: number }>`
  position: absolute;
  top: -3px;
  left: ${({$left}) => `${$left}%`};
  height: 4px;
  width: 4px;
  border-radius: 50%;
  border: 3px solid #404254;
  box-sizing: content-box;
  background: #fff;
`;
/* Shows the range of lowest and highest 
   temperatures of each day in comparison 
   to the range of the whole period */
const RangeMeterS = styled.span<{ $left: number; $right: number }>`
  display: block;
  position: absolute;

  top: 0;
  bottom: 0;
  left: ${({ $left }) => `${$left}%`};
  right: ${({ $right }) => `${$right}%`};

  background: linear-gradient(to right, #96d0a7, #ef8734);
  border-radius: 5px;
`;

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
