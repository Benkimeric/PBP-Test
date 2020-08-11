import { lazy } from 'react';

import RoutesInterface from './typed';

const Orders = lazy(() => import('../views/Orders'));

const routes: RoutesInterface[] = [
  {
    path: '/',
    component: Orders,
    id: 'orders',
    authenticated: true,
  },
];

export default routes;
