export const SCREEN_NAMES = {
  SignIn: 'SignIn',
  SignUp: 'SignUp',
  ResetPassword: 'ResetPassword',
  Dashboard: 'Dashboard',
  Setting: 'Setting',
  AccountSetting: 'AccountSetting',
} as const;

export type screenNames = keyof typeof SCREEN_NAMES;
