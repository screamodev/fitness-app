import { ref } from 'vue';
import type { UploadUserFile } from 'element-plus';

export const usePreviewImage = () => {
  const isVisible = ref<boolean>(false);

  const imageSrc = ref<string>('');

  const preview = (uploadFile: UploadUserFile) => {
    imageSrc.value = uploadFile.url!;
    isVisible.value = true;
  };

  return {
    isVisible,
    imageSrc,
    preview,
  };
};
