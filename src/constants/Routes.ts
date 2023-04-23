import { type ParamListBase, type RouteProp } from '@react-navigation/native';
import { type NativeStackNavigationProp } from '@react-navigation/native-stack';

export enum Routes {
  ROOT_TAB = 'Root Tab',
  HOME_TAB = 'Home Tab',
  CREATE_PIN_TAB = 'Create tap',
  PROFILE_TAB = 'Profile Tab',

  PIN_SCREEN = 'Pin screen',
  SETTINGS_SCREEN = 'Settings screen',
}

export interface RootStackParamList extends ParamListBase {
  AuthStack: undefined;
  AppStack: undefined;
}

export interface AuthStackParamList extends ParamListBase {
  SignIn: undefined;
  SignUp: undefined;
}

export interface AppStackParamList extends ParamListBase {
  [Routes.HOME_TAB]: undefined;
  [Routes.CREATE_PIN_TAB]: undefined;
  [Routes.PROFILE_TAB]: undefined;

  [Routes.PIN_SCREEN]: { id: string };
  [Routes.SETTINGS_SCREEN]: undefined;
}

export type AuthScreenNavigationProp =
  NativeStackNavigationProp<AuthStackParamList>;
export type AuthScreenRouteProp = RouteProp<
  AuthStackParamList,
  'SignIn' | 'SignUp'
>;

export type HomeScreenNavigationProp =
  NativeStackNavigationProp<AppStackParamList>;

export type HomeScreenRouteProp = RouteProp<AppStackParamList, 'Home'>;

export type PinScreenNavigationProp =
  NativeStackNavigationProp<AppStackParamList>;

export type PinScreenRouteProp = RouteProp<
  AppStackParamList,
  Routes.PIN_SCREEN
>;

export type SettingsScreenNavigationProp =
  NativeStackNavigationProp<AppStackParamList>;

export default Routes;
