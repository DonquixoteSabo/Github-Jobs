import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
//styled-components setup
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

export const renderWithProviders = (children: ReactNode | ReactNode[]) =>
  render(
    <ThemeProvider theme={theme}>
      <Router>{children}</Router>
    </ThemeProvider>
  );
