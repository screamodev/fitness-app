import { ElNotification } from 'element-plus';
import { storeToRefs } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';

import { useSessionStore } from '@/entities/session';
import { Routes } from '@/shared/config/routes';
import { routes } from '@/pages';

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to, from) => {
  if (router.currentRoute.value.path !== from.path) {
    ElNotification.closeAll();
  }
});

router.beforeEach(async (to, from, next) => {
  const sessionStore = useSessionStore();

  const { isSignedIn } = storeToRefs(sessionStore);

  if (to.meta.isAuthorized) {
    if (!isSignedIn.value) {
      next(Routes.login);
      return;
    }
  } else {
    if (isSignedIn.value) {
      next('/');
      return;
    }
  }

  next();
});
