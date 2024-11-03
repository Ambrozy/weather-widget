import styled from "styled-components";

export const DailyRangeS = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const DailyMaxTemperatureS = styled.span`
  width: 30px;
  text-align: center;
`;
export const DailyMinTemperatureS = styled(DailyMaxTemperatureS)`
  color: ${(props) => props.theme.fadedColor};
`;

/* Shows the range of lowest and highest 
   temperatures of the 10-day period */
export const RangeS = styled.span`
  position: relative;
  flex: 1;
  background-color: rgba(0, 0, 0, 0.15);
  height: 4px;
  border-radius: 5px;
  width: 100px;
  overflow: hidden;
`;
export const CurrentMarkS = styled.span<{ $left: number }>`
  position: absolute;
  top: -2px;
  left: ${({$left}) => `max(calc(${$left}% - 8px), 0px)`}; // limit marker to fits it in
  height: 4px;
  width: 4px;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.range.markerBorderColor};
  box-sizing: content-box;
  background: #fff;
`;
/* Shows the range of lowest and highest 
   temperatures of each day in comparison 
   to the range of the whole period */
export const RangeMeterS = styled.span<{ $left: number; $right: number }>`
  display: block;
  position: absolute;

  top: 0;
  bottom: 0;
  left: ${({ $left }) => `${$left}%`};
  right: ${({ $right }) => `${$right}%`};

  background: ${(props) => props.theme.range.meterBackground};
  border-radius: 5px;
`;
