import { ReactNativeFile } from 'apollo-upload-client';

import { Gender, Role } from 'shared/config/user';
import { UserWithAccessToken } from '../auth';

export type Avatar = {
  url: string;
};

export type User = {
  fullName: string;
  email: string;
  gender: Gender;
  role: Role;
  height?: number;
  weight?: number;
  username: string;
  avatar: Avatar;
};

export type AddUserInfoMutationVariables = {
  gender: Gender;
  role: Role;
  height?: number;
  weight?: number;
  username: string;
  avatar?: ReactNativeFile | Blob;
};

export type AddUserInfoMutationResponse = {
  addUserInfo: User;
};

export type EditUserProfileMutationVariables = {
  email?: string;
  fullName?: string;
  username?: string;
  height?: number | null;
  weight?: number | null;
  avatar?: ReactNativeFile | Blob;
};

export type EditUserProfileMutationResponse = {
  updateUserInfo: UserWithAccessToken;
};

export type ChangePasswordMutationVariables = {
  currentPassword: string;
  newPassword: string;
};

export type ChangePasswordMutationResponse = {
  changePassword: User;
};

export type CheckUsernameAvailabilityMutationVariables = {
  username: string;
};

export type CheckUsernameAvailabilityMutationResponse = {
  checkUsernameAvailability: boolean;
};

export type DeleteAccountResponse = {
  deleteAccount: boolean;
};

export type DeleteAvatarResponse = {
  deleteUserAvatar: boolean;
};
