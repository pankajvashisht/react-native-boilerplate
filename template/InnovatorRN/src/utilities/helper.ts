import {Linking, Platform} from 'react-native';
import {scale} from 'theme/scale';

export const openLink = (link: string) => {
  Linking.openURL(link).catch(() => {});
};

export const IS_ANDROID = Platform.OS === 'android';

export const IS_IOS = Platform.OS === 'ios';

export const ICON_SIZE_15 = scale(15);

export const ICON_SIZE = (size: number = 15): number => scale(size);
