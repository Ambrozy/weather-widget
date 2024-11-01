import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";

import "./index.css";

import App from "./App";
import { nightTheme } from "./theme/nightTheme.ts";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <ThemeProvider theme={nightTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
