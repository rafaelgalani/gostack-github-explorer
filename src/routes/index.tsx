import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Dashboard, Repository } from '../pages';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard}/>
      <Route path="/repository" exact component={Repository}/>
    </Switch>
  );
}

export default Router;