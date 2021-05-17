import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import MarketingApp from './components/MarketingApp';
import AuthApp from './components/AuthApp';
import Header from './components/Header';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router>
        <Header />
        <Switch>
          <Route path='/auth' component={AuthApp} />
          <Route path='/' component={MarketingApp} />
        </Switch>
      </Router>
    </StylesProvider>
  );
};
