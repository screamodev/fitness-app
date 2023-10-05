import type { UploadUserFile } from 'element-plus';

import type { ExtendedMedia } from '@/shared/api/exercises';
import { getBase64 } from './get-base-64';

export const getExtendedMedia = async (
  file: UploadUserFile,
): Promise<ExtendedMedia | undefined> => {
  try {
    if (!file.raw) {
      throw new Error();
    }

    const id = file.raw.uid;

    const mediaUrl = await getBase64(file.raw);

    return { id, name: file.name, url: mediaUrl };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error();
    }
  }
};
