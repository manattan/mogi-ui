import React from "react";
import type { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../theme";

export interface MogiProviderProps {
  children: ReactNode;
}

const MogiProvider: React.FC<MogiProviderProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MogiProvider;
