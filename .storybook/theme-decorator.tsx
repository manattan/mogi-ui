import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../packages/src/theme";

export default (Story) => (
  <ThemeProvider theme={theme}>
    <Story />
  </ThemeProvider>
);
