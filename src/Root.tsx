import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//styled-components setup
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
//templates
import { MainTemplate } from 'templates/MainTemplate';
//pages
import { JobPage } from 'pages/JobPage';
import { MainPage } from 'pages/MainPage';
//redux
import { store } from 'store';
import { Provider } from 'react-redux';

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyle />
        <Router>
          <MainTemplate>
            <Switch>
              <Route path="/job/:id">
                <JobPage />
              </Route>
              <Route path="/">
                <MainPage />
              </Route>
            </Switch>
          </MainTemplate>
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export { Root };
