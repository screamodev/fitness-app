import { Gender, Role } from 'shared/config/user';

export enum UserInfoKeys {
  gender = 'gender',
  role = 'role',
  height = 'height',
  weight = 'weight',
  username = 'username',
  avatar = 'avatar',
}

export type UserInfo = {
  gender: Gender;
  role: Role;
  height?: number;
  weight?: number;
  username: string;
  avatar: string;
};

export type StepComponentProps<K extends UserInfoKeys> = {
  value: UserInfo[K];
  isLoading?: boolean;
  setValue: (value?: UserInfo[K]) => void;
  onSubmit: () => void | Promise<void>;
};

export type StepComponent<K extends UserInfoKeys> = (props: StepComponentProps<K>) => JSX.Element;

export type Step<K extends UserInfoKeys = UserInfoKeys> = K extends K
  ? {
      key: K;
      component: StepComponent<K>;
    }
  : never;
