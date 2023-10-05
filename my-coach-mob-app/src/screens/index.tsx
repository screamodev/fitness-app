import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useSession } from 'entities/session';
import { Colors } from 'shared/config/colors';
import {
  DarkTheme,
  LightTheme,
  linking,
  RootStackParamList,
  RootTabParamList,
  Screen,
} from 'shared/config/navigation';
import { Theme } from 'shared/config/theme';
import { useLanguage } from 'shared/lib/localization';
import { useTheme } from 'shared/lib/theme';
import { CalendarIcon, CommunityIcon, MuscleIcon, SettingsIcon } from 'shared/ui/icons';
import { HeaderBackButton } from 'shared/ui/navigation';
import AddExercisesScreen from './add-exercises';
import AddTrainingScreen from './add-training';
import AddUserInfoScreen from './add-user-info';
import SignInScreen from './auth/sign-in';
import SignUpScreen from './auth/sign-up';
import ChangeLanguageScreen from './change-language';
import ChangePasswordScreen from './change-password';
import ChangeThemeScreen from './change-theme';
import CoachesScreen from './coaches';
import CommunityScreen from './community';
import DiaryScreen from './diary';
import EditProfileScreen from './edit-profile';
import ExerciseScreen from './exercise';
import IntroScreen from './intro';
import NotFoundScreen from './not-found';
import SettingsScreen from './settings';
import { styles } from './styles';

export default function Navigation() {
  const { theme } = useTheme();

  return (
    <NavigationContainer
      linking={linking}
      theme={theme.color === Theme.dark ? DarkTheme : LightTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const RootStack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const { t } = useLanguage();

  const { isSignedIn, isProfileIncomplete } = useSession();

  return (
    <RootStack.Navigator>
      {isSignedIn ? (
        <>
          {isProfileIncomplete && (
            <RootStack.Screen
              name={Screen.AddUserInfo}
              component={AddUserInfoScreen}
              options={{ headerShown: false }}
            />
          )}
          <RootStack.Screen
            name={Screen.Root}
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
          <RootStack.Group
            screenOptions={{
              headerTitleStyle: styles.headerTitle,
              headerTitleAlign: 'center',
              presentation: 'card',
              headerLeft: () => <HeaderBackButton parentScreen={Screen.Diary} />,
            }}
          >
            <RootStack.Screen
              name={Screen.AddTraining}
              component={AddTrainingScreen}
              options={{ headerTitle: t('training.title') }}
            />
            <RootStack.Group
              screenOptions={{
                headerTitleStyle: styles.headerTitle,
                headerTitleAlign: 'center',
                presentation: 'card',
                headerLeft: () => <HeaderBackButton parentScreen={Screen.AddTraining} />,
              }}
            >
              <RootStack.Screen
                name={Screen.AddExercises}
                component={AddExercisesScreen}
                options={{
                  headerTitle: t('training.title'),
                }}
              />
            </RootStack.Group>
            <RootStack.Screen
              name={Screen.Exercise}
              component={ExerciseScreen}
              options={{
                headerTransparent: true,
                headerTitle: '',
                headerLeft: () => (
                  <HeaderBackButton
                    parentScreen={Screen.AddExercises}
                    buttonStyle={styles.buttonBack}
                  />
                ),
              }}
            />
          </RootStack.Group>
          <RootStack.Group
            screenOptions={{
              presentation: 'modal',
              headerTitleStyle: styles.headerTitle,
              headerTitleAlign: 'center',
              headerShadowVisible: false,
            }}
          >
            <RootStack.Group
              screenOptions={{
                headerLeft: () => <HeaderBackButton parentScreen={Screen.Settings} />,
              }}
            >
              <RootStack.Screen
                name={Screen.EditProfile}
                component={EditProfileScreen}
                options={{ headerTitle: t('settings.editProfile.title') }}
              />
              <RootStack.Screen
                name={Screen.ChangePassword}
                component={ChangePasswordScreen}
                options={{ headerTitle: t('settings.changePassword.title') }}
              />
              <RootStack.Screen
                name={Screen.ChangeTheme}
                component={ChangeThemeScreen}
                options={{ headerTitle: t('settings.theme.title') }}
              />
              <RootStack.Screen
                name={Screen.ChangeLanguage}
                component={ChangeLanguageScreen}
                options={{ headerTitle: t('settings.language.title') }}
              />
            </RootStack.Group>
          </RootStack.Group>
          <RootStack.Screen
            name={Screen.NotFound}
            component={NotFoundScreen}
            options={{ title: t('notFound.title') }}
          />
        </>
      ) : (
        <>
          <RootStack.Screen
            name={Screen.Intro}
            component={IntroScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name={Screen.SignIn}
            component={SignInScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name={Screen.SignUp}
            component={SignUpScreen}
            options={{ headerShown: false }}
          />
        </>
      )}
    </RootStack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const { theme } = useTheme();

  const { t } = useLanguage();

  return (
    <BottomTab.Navigator
      initialRouteName={Screen.Diary}
      screenOptions={{
        headerTitleStyle: styles.headerTitle,
        headerTitleAlign: 'center',
        headerShadowVisible: false,
        tabBarActiveTintColor: Colors[theme.color].primary,
        tabBarInactiveTintColor: Colors[theme.color].button,
        tabBarStyle: [styles.tabBar, { backgroundColor: Colors[theme.color].backgroundSecondary }],
        tabBarLabelStyle: styles.tabBarLabel,
      }}
    >
      <BottomTab.Screen
        name={Screen.Diary}
        component={DiaryScreen}
        options={() => ({
          title: t('diary.title'),
          tabBarIcon: CalendarIcon,
        })}
      />
      <BottomTab.Screen
        name={Screen.Coaches}
        component={CoachesScreen}
        options={() => ({
          title: t('coaches.title'),
          tabBarIcon: MuscleIcon,
        })}
      />
      <BottomTab.Screen
        name={Screen.Community}
        component={CommunityScreen}
        options={() => ({
          title: t('community.title'),
          tabBarIcon: CommunityIcon,
        })}
      />
      <BottomTab.Screen
        name={Screen.Settings}
        component={SettingsScreen}
        options={() => ({
          title: t('settings.title'),
          tabBarIcon: SettingsIcon,
        })}
      />
    </BottomTab.Navigator>
  );
}
