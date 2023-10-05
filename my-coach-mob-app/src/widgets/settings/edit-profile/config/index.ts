import { ReactNativeFile } from 'apollo-upload-client';

export type UserFormProfile = {
  fullName: string;
  username: string;
  email: string;
  height?: number | null;
  weight?: number | null;
};

export interface UserProfile extends UserFormProfile {
  avatar?: ReactNativeFile | Blob;
}
