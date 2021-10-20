import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
//styled-components setup
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
//redux
import { store } from 'store';
import { Provider } from 'react-redux';

export const renderWithProviders = (children: ReactNode | ReactNode[]) =>
  render(
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>{children}</Router>
      </Provider>
    </ThemeProvider>
  );
