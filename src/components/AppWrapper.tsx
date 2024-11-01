import type { PropsWithChildren } from "react";
import styled from "styled-components";

const WrapperS = styled.div`
  display: grid;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;
const ContentS = styled.div`
  min-width: 320px;
  max-width: 460px;
  padding: 10px;
`;

export const AppWrapper = ({ children }: PropsWithChildren) => (
  <WrapperS>
    <ContentS>{children}</ContentS>
  </WrapperS>
);
