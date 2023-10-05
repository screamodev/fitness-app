import { onBeforeMount, onUnmounted } from 'vue';
import { ElMessageBox } from 'element-plus';
import { onBeforeRouteLeave } from 'vue-router';

import { useTranslation } from '@/shared/lib/localization';

export const useLeavePage = (resetState?: () => void, title?: string, content?: string) => {
  const { t } = useTranslation();

  onBeforeMount(() => {
    window.onbeforeunload = function () {
      // need to return a string  for enables a web page to trigger a confirmation dialog
      return '';
    };
  });

  onUnmounted(() => {
    window.onbeforeunload = null;
  });

  return onBeforeRouteLeave((to, from, next) => {
    ElMessageBox.confirm(
      content || t('confirms.leavePage.content'),
      title || t('confirms.leavePage.title'),
      {
        cancelButtonText: t('buttons.cancel'),
        type: 'warning',
      },
    )
      .then(() => {
        if (resetState) {
          resetState();
        }

        next();
      })
      .catch(() => {
        next(false);
      });
  });
};
