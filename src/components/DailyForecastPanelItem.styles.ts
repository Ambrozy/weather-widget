import styled from "styled-components";

export const DailyForecastRowS = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2.2rem;
  height: 55px;
  border-bottom: ${(props) => props.theme.divider};

  &:last-child {
    border-bottom: 0;
  }
`;
export const DailyForecastTimeS = styled.div`
  flex: 1;
`;
export const DailyForecastConditionsS = styled.div`
  width: 40px;
  text-align: center;
  line-height: 16px;
  margin: 0 10px;
`;
export const DailyForecastConditionsWithPrecipitationS = styled(
  DailyForecastConditionsS,
)`
  width: 40px;
  text-align: center;

  & svg {
    max-height: 24px;
  }
`;
export const DailyForecastProbabilityS = styled.div`
  font-size: 1.5rem;
  color: ${(props) => props.theme.precipitationProbabilityColor};
`;
