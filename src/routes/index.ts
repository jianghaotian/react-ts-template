import { lazy } from 'react';
import { RouteConfig } from 'react-router-config';

const routes: RouteConfig[] = [
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
