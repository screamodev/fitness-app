import type { UploadUserFile } from 'element-plus';

import type { Media } from '@/shared/api/media';
import { getBase64 } from './get-base-64';

export const getMedia = async (file: UploadUserFile): Promise<Media | undefined> => {
  try {
    if (!file.raw) {
      throw new Error();
    }

    const mediaUrl = await getBase64(file.raw);

    return { name: file.name, url: mediaUrl };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error();
    }
  }
};
