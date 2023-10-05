import { RootScreens, RootTabParamList } from 'shared/config/navigation';

export const isRootScreen = (screen: string): screen is keyof RootTabParamList => {
  return RootScreens.includes(screen as keyof RootTabParamList);
};
