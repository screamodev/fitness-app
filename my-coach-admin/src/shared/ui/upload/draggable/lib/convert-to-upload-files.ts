import type { UploadUserFile } from 'element-plus';

import type { ExtendedMedia } from '@/shared/api/exercises';

export const convertToUploadFiles = (medias: ExtendedMedia[]): UploadUserFile[] =>
  medias.map((media: ExtendedMedia) => ({
    uid: media.id,
    name: media.name,
    url: media.url,
  }));
