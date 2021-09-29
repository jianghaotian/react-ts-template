import { lazy } from 'react';

const routes = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('@/pages/Root')),
    routes: [],
  },
  {
    path: '/login',
    exact: true,
    component: lazy(() => import('@/pages/Login')),
    routes: [],
  },
];

export default routes;
