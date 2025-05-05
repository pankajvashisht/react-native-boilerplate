import {StyleProp, TextStyle, ViewStyle, ImageStyle} from 'react-native';
import fonts from './fonts';

export type ColorTheme = {
  PrimaryColor: string;
  SecondaryColor: string;
  BackgroundColor: string;
  PrimaryText: string;
  SecondaryText: string;
  BorderLine: string;
  InputBorderBottom: string;
  transparent: string;
  redColor: string;
  red2: string;
  white: string;
  black1: string;
  black2: string;
  black3: string;
  grey1: string;
  grey2: string;
  grey3: string;
  grey4: string;
  grey5: string;
  blue1: string;
  error: string;
  textColor: string;
  labelColor: string;
  labelLightColor: string;
  selectedTextColor: string;
  graySelected: string;
  segmentSelected: string;
  darkButton: string;
};

export type TColors = ColorTheme;

export type ColorPalettes = {
  light: TColors;
  dark: TColors;
};

export type ThemeMode = 'light' | 'dark';

export type TScaleMethods = {
  scale: (size: number) => number;
  scaleFont: (size: number) => number;
  scaleModerate: (size: number) => number;
  scaleVertical: (size: number) => number;
};

export type ThemeTypes = {
  colors: TColors;
  themeColorMode: ThemeMode;
  isDark: boolean;
  fonts: typeof fonts;
  scaleMethods: TScaleMethods;
  style?: StyleProp<TextStyle | ViewStyle | ImageStyle>;
};
