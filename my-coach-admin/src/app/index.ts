import { createApp, h, provide, watch, watchEffect } from 'vue';
import { DefaultApolloClient } from '@vue/apollo-composable';
import ElementPlus from 'element-plus';

import { storeUser } from '@/entities/session';
import { Routes } from '@/shared/config/routes';
import { i18n } from '@/shared/lib/localization';
import App from './index.vue';
import { apolloClient, has401Error, router, store } from './providers';

export const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
})
  .use(i18n)
  .use(router)
  .use(store)
  .use(ElementPlus);

watch(
  store.state,
  (state) => {
    storeUser(state.session.user);
  },
  { deep: true },
);

watchEffect(() => {
  if (has401Error.value) {
    router.push({ path: Routes.logout });
  }
});
