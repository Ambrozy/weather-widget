import { memo } from "react";
import styled, { css, keyframes } from "styled-components";

import Sunny from "../assets/Sunny.svg";

interface AppWelcomeScreenProps {
  isError: boolean;
}

const showUp = keyframes`
  from {
    transform: scale(.5);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;
const AppWelcomeScreenS = styled.div<{ $isError: boolean }>`
  text-align: center;
  ${({ $isError }) =>
    $isError
      ? ""
      : css`
          animation: ${showUp} 2s linear;
        `};

  & > svg {
    width: 200px;
    height: 80px;
    margin-bottom: 20px;
  }
`;

export const AppWelcomeScreen = memo(({ isError }: AppWelcomeScreenProps) => (
  <AppWelcomeScreenS $isError={isError}>
    <Sunny />
    {isError && (
      <div>
        Failed to load data, <br /> try again later
      </div>
    )}
  </AppWelcomeScreenS>
));
