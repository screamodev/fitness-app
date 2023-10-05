import type { Media } from '@/shared/api/media';
import { getMediaBlob } from '@/shared/lib/form-data';

export const generateExerciseMediaFiles = async (
  images: Media[] | [],
  video: Media | null,
  primaryImage?: Media,
) => {
  try {
    const primaryImageBlob = primaryImage ? await getMediaBlob(primaryImage) : primaryImage;

    const imagesBlobs = await Promise.all(images.map(getMediaBlob));

    const videoBlob = video ? await getMediaBlob(video) : null;

    return {
      primaryImage: primaryImageBlob,
      images: imagesBlobs,
      video: videoBlob,
    };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error();
    }
  }
};
