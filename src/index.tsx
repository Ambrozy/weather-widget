import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";

import App from "./App";
import { GlobalStyleS } from "./components/GlobalStyle.styles.ts";
import { getTheme } from "./theme/getTheme.ts";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <ThemeProvider theme={getTheme()}>
      <GlobalStyleS />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
