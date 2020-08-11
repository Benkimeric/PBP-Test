import React, { lazy } from 'react';

// const Orders = lazy(() => import('../views/Orders'));
import { Orders } from '../views/Orders';
import RoutesInterface from './typed';

const routes: RoutesInterface[] = [
  {
    path: '/',
    component: Orders,
    id: 'orders',
    authenticated: true,
  },
];

export default routes;
