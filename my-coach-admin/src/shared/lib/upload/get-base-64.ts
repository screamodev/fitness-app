import type { UploadRawFile } from 'element-plus';

export const getBase64 = (file: UploadRawFile): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.result) {
        resolve(reader.result as string);
      }

      reject(new Error());
    };
    reader.onerror = (error) => reject(error);
  });
};
