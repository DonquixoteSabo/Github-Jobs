import React from 'react';
//styled-components setup
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
//react-router-dom setup
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MainTemplate } from 'templates/MainTemplate';
import { Job } from 'components/Job/Job';
function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <MainTemplate>
          <Switch>
            <Route path="/job">
              <Job />
            </Route>
            <Route path="/">
              <h1>siema</h1>
            </Route>
          </Switch>
        </MainTemplate>
      </Router>
    </ThemeProvider>
  );
}

export { Root };
