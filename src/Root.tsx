import React from 'react';
//styled-components setup
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
//react-router-dom setup
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//templates
import { MainTemplate } from 'templates/MainTemplate';
//pages
import { JobPage } from 'pages/JobPage';
import { MainPage } from 'pages/MainPage';

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <MainTemplate>
          <Switch>
            <Route path="/job">
              <JobPage />
            </Route>
            <Route path="/">
              <MainPage />
            </Route>
          </Switch>
        </MainTemplate>
      </Router>
    </ThemeProvider>
  );
}

export { Root };
