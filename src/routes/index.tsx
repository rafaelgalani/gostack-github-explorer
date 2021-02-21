import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Dashboard, RepositoryDetail } from '../pages';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard}/>
      <Route path="/repository/:repository+" exact component={RepositoryDetail}/>
    </Switch>
  );
}

export default Router;