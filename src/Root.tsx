import React from 'react';
//styled-components setup
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>SIEMA COP TAM</div>
    </ThemeProvider>
  );
}

export { Root };
