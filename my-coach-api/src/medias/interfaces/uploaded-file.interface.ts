import { Stream } from 'stream';

export interface UploadedFile {
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: () => Stream;
}
