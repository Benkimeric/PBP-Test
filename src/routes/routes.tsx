import React, { lazy } from 'react';

import RoutesInterface from './typed';

import ExceptionTemplate from '../views/Exceptions/Template';
const Orders = lazy(() => import('../views/Orders'));

const routes: RoutesInterface[] = [
  {
    path: '/',
    component: Orders,
    id: 'orders',
    authenticated: true,
  },
  {
    path: '/orders',
    component: Orders,
    id: 'orders',
    authenticated: true,
  },
  {
    path: '',
    component: () => <ExceptionTemplate message="Page not found" statusCode={404} />,
    id: '404',
    authenticated: false,
  },
];

export default routes;
