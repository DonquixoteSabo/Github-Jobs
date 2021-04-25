import React from 'react';
//styled-components setup
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <div>SIEMA COP TAM</div>
    </ThemeProvider>
  );
}

export { Root };
