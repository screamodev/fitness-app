import { Routes, RoutesNames } from '@/shared/config/routes';
import Routing from './index.vue';
import Layout from './Layout.vue';

export const routes = [
  {
    path: '/',
    redirect: Routes.exercises,
    component: Layout,
    meta: {
      isAuthorized: true,
    },
    children: [
      {
        path: Routes.exercises,
        component: () => import('./exercises'),
        name: RoutesNames.exercises,
      },
      {
        path: Routes.createExercise,
        component: () => import('./create-exercise'),
        name: RoutesNames.createExercise,
      },
      {
        path: `${Routes.exercises}/:id`,
        component: () => import('./exercise'),
        name: RoutesNames.exercise,
      },
      { path: Routes.workouts, component: () => import('./workouts'), name: RoutesNames.workouts },
      { path: Routes.users, component: () => import('./users'), name: RoutesNames.users },
    ],
  },
  {
    path: Routes.login,
    component: () => import('./login'),
    meta: {
      isAuthorized: false,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: RoutesNames.notFound,
    component: () => import('./not-found'),
    meta: {
      isAuthorized: true,
    },
  },
  {
    path: Routes.logout,
    component: () => import('./logout'),
    meta: {
      isAuthorized: true,
    },
  },
];

export { Routing };
