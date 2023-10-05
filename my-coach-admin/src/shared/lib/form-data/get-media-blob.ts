import type { Media } from '@/shared/api/media';

export const getMediaBlob = async (media: Media) => {
  const response = await fetch(media.url);

  if (!response.ok) {
    throw new Error();
  }

  return response.blob();
};
