import { memo, type PropsWithChildren } from "react";
import styled from "styled-components";

import Calendar from "../assets/Calendar.svg";

interface ForecastPanelProps extends PropsWithChildren {
  title: string;
}

const ForecastS = styled.div`
  border-radius: 15px;
  background-color: ${(props) => props.theme.panel.background};
  border: 1px solid ${(props) => props.theme.panel.background};
  padding: 15px 15px;

  & + & {
    margin-top: 10px;
  }
`;
const ForecastTitleS = styled.div`
  border-bottom: ${(props) => props.theme.divider};
  letter-spacing: 0.05em;
  padding-bottom: 8px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ForecastPanel = memo(({ title, children }: ForecastPanelProps) => (
  <ForecastS>
    <ForecastTitleS>
      <Calendar /> {title}
    </ForecastTitleS>
    {children}
  </ForecastS>
));
