import React, {useEffect} from 'react';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import type {StackNavigationOptions} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {Dashboard, ResetPassword, Settings, SignIn, SignUp} from 'screens';
import {SCREEN_NAMES} from './constants';
import {getSecureStorageItem, storageKeys} from '../utilities/storageUtils';
import {AuthStackParamList} from './types';
import {IUserApiResponse} from 'store/types';
import CustomDrawerContent from 'components/DrawerComponent';
import DrawerHeader from 'components/DrawerHeader';
import {MenuProvider} from 'react-native-popup-menu';
import AccountSetting from 'screens/AccountSetting';
import {IUser, useSetUser, useUser} from 'context';

const AuthStack = createStackNavigator<AuthStackParamList>();

const Drawer = createDrawerNavigator();

const noOptions: StackNavigationOptions = {
  headerShown: false,
};

function AuthNavigator() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <AuthStack.Screen name={SCREEN_NAMES.SignIn} component={SignIn} options={noOptions} />
      <AuthStack.Screen name={SCREEN_NAMES.SignUp} component={SignUp} options={noOptions} />
      <AuthStack.Screen
        name={SCREEN_NAMES.ResetPassword}
        component={ResetPassword}
        options={noOptions}
      />
    </AuthStack.Navigator>
  );
}

function HomeNavigator() {
  return (
    <MenuProvider>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={props => ({
          headerTitle: '',
          headerLeft: () => <DrawerHeader isLeft={true} {...props} />,
          headerRight: () => <DrawerHeader isLeft={false} {...props} />,
        })}
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name={SCREEN_NAMES.Dashboard} component={Dashboard} />
        <Drawer.Screen name={SCREEN_NAMES.Setting} component={Settings} />
        <Drawer.Screen name={SCREEN_NAMES.AccountSetting} component={AccountSetting} />
      </Drawer.Navigator>
    </MenuProvider>
  );
}

function MainNavigator() {
  const userData = useUser();
  const saveUserDetails = useSetUser();

  useEffect(() => {
    getSecureStorageItem(storageKeys.userData)
      .then((localUserData: IUserApiResponse) => {
        if (localUserData) {
          saveUserDetails(localUserData as IUser);
        }
      })
      .catch(() => {});
  }, [saveUserDetails]);

  return userData?.email ? <HomeNavigator /> : <AuthNavigator />;
}

export default MainNavigator;
