import type {StackScreenProps} from '@react-navigation/stack';
import {SCREEN_NAMES} from './constants';

export type HomeStackParamList = {
  [SCREEN_NAMES.Dashboard]: undefined;
  [SCREEN_NAMES.Setting]: undefined;
};

export type AuthStackParamList = {
  [SCREEN_NAMES.SignIn]: undefined;
  [SCREEN_NAMES.SignUp]: undefined;
  [SCREEN_NAMES.ResetPassword]: undefined;
};

export type DashboardScreenProps = StackScreenProps<HomeStackParamList, 'Dashboard'>;
export type SignInScreenProps = StackScreenProps<AuthStackParamList, 'SignIn'>;
export type SignUpScreenProps = StackScreenProps<AuthStackParamList, 'SignUp'>;
export type ResetPasswordScreenProps = StackScreenProps<AuthStackParamList, 'ResetPassword'>;
export type SettingScreenProps = StackScreenProps<HomeStackParamList, 'Setting'>;

// export type ExampleRouteProps = RouteProp<HomeStackParamList, "Dashboard">;

// export type ExampleCompositeProps = CompositeNavigationProp<
//   NativeStackNavigationProp<HomeStackNavigatorParamList, 'Child'>, // child navigator
//   BottomTabNavigationProp<BottomTabNavigatorParamList, 'Parent'> // parent navigator
// >;
