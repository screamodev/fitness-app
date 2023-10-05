import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  LinkingOptions,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { Theme } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as Linking from 'expo-linking';

import { Colors } from './colors';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootTabParamList = {
  Diary: undefined;
  Coaches: undefined;
  Community: undefined;
  Settings: undefined;
};

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  EditProfile: undefined;
  AddTraining: undefined;
  AddExercises: undefined;
  Exercise: { id: string };
  ChangePassword: undefined;
  ChangeTheme: undefined;
  ChangeLanguage: undefined;
  Intro: undefined;
  SignIn: undefined;
  SignUp: undefined;
  AddUserInfo: undefined;
  RecoverPassword: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Diary: 'diary',
          Coaches: 'coaches',
          Community: 'community',
          Settings: 'settings',
        },
      },
      AddTraining: 'add-training',
      AddExercises: 'add-exercises',
      Exercise: 'exercise',
      EditProfile: 'edit-profile',
      ChangePassword: 'change-password',
      ChangeTheme: 'change-theme',
      ChangeLanguage: 'change-language',
      Intro: 'intro',
      SignIn: 'sign-in',
      SignUp: 'sign-up',
      AddUserInfo: 'add-user-info',
      RecoverPassword: 'recover-password',
      NotFound: '*',
    },
  },
};

export enum Screen {
  Root = 'Root',
  Diary = 'Diary',
  Coaches = 'Coaches',
  Community = 'Community',
  Settings = 'Settings',
  AddTraining = 'AddTraining',
  AddExercises = 'AddExercises',
  Exercise = 'Exercise',
  EditProfile = 'EditProfile',
  ChangePassword = 'ChangePassword',
  ChangeTheme = 'ChangeTheme',
  ChangeLanguage = 'ChangeLanguage',
  Intro = 'Intro',
  SignIn = 'SignIn',
  SignUp = 'SignUp',
  AddUserInfo = 'AddUserInfo',
  RecoverPassword = 'RecoverPassword',
  NotFound = 'NotFound',
}

export const RootScreens: Array<keyof RootTabParamList> = [
  Screen.Diary,
  Screen.Coaches,
  Screen.Community,
  Screen.Settings,
];

export const LightTheme: Theme = {
  dark: false,
  colors: {
    primary: Colors.light.primary,
    background: Colors.light.background,
    card: Colors.light.background,
    text: Colors.light.text,
    border: 'transparent',
    notification: Colors.light.danger,
  },
};

export const DarkTheme: Theme = {
  dark: true,
  colors: {
    primary: Colors.dark.primary,
    background: Colors.dark.background,
    card: Colors.dark.background,
    text: Colors.dark.text,
    border: 'transparent',
    notification: Colors.dark.danger,
  },
};
