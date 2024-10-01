import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './GlobalStyles';
import styledMedia from './Media';

interface ITheme {
  children: React.ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const colors = {
  main: '#689ee4',
  subMain: '#1b64d1',
  yellow: '#FAFF00',
  black: '#000000',
  modernBlack: '#434343',
  gray: '#A9A9A9',
  white: '#FFFFFF',
  green: '#3bb957',
  red: '#ff3333',
  deepSkyblue: '#adc1d9',
};

export type ColorsTypes = typeof colors;

export default function Theme({ children }: ITheme) {
  return (
    <ThemeProvider
      theme={{
        colors,
        ...styledMedia,
      }}
    >
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
