import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

import Header from './components/Header';
import Progress from './components/Progress';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router>
        <Header />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path='/auth' component={AuthLazy} />
            <Route path='/' component={MarketingLazy} />
          </Switch>
        </Suspense>
      </Router>
    </StylesProvider>
  );
};
