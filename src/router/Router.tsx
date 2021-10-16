import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Page404 } from '../pages/Page404';
import { TodoPage } from '../pages/TodoPage';

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/todopage">
        <TodoPage />
      </Route>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};
