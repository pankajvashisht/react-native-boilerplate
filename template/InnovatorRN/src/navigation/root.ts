import {
  createNavigationContainerRef,
  StackActions,
  StackActionType,
} from '@react-navigation/native';
import {screenNames} from './constants';
import {HomeStackParamList, AuthStackParamList} from './types';

type StackReturnType = StackActionType | void;

export const navigationRef = createNavigationContainerRef<
  HomeStackParamList | AuthStackParamList
>();

export const isReady = (callback = () => {}) => {
  if (navigationRef.isReady()) {
    return callback();
  }
};

export const navigate = (name: string, params?: object) =>
  isReady(() => navigationRef.navigate(name, params));

export const replace = (name: screenNames, params?: object): StackReturnType =>
  isReady(() => navigationRef.dispatch(StackActions.replace(name, params)));

export const push = (name: screenNames, params?: object): StackReturnType =>
  isReady(() => navigationRef.dispatch(StackActions.push(name, params)));

export const pop = (screenCount = 1): StackReturnType =>
  isReady(() => navigationRef.dispatch(StackActions.pop(screenCount)));

export const popToTop = (): StackReturnType =>
  isReady(() => navigationRef.dispatch(StackActions.popToTop()));

export const goBack = () => {
  if (navigationRef.canGoBack()) {
    navigationRef.goBack();
  }
};
