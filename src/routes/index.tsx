import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainLayout from '../components/HOC';
import AllRoutes from './routes';
import RoutesInterface from './typed';

const Routes: React.FC = () => (
  <Switch>
    <MainLayout>
      <Switch>
        {AllRoutes.map((route: RoutesInterface) => (
          <Route key={route.id} path={route.path} component={route.component} exact />
        ))}
      </Switch>
    </MainLayout>
  </Switch>
);

export default Routes;
