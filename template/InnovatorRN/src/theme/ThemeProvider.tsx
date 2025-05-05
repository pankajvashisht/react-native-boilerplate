import React, {createContext, useState, useMemo, useContext, useEffect, useCallback} from 'react';
import {Appearance, NativeEventSubscription} from 'react-native';
import {setUnsecureStorageItem, getUnsecureStorageItem} from 'utilities/storageUtils';
import {themeConstant} from 'constants/appConstant';
import {colorScheme} from './colors';
import {scale, scaleFont, scaleModerate, scaleVertical} from './scale';
import Fonts from './fonts';
import {ThemeTypes, ThemeMode} from './types';

export const themeType = {
  light: 'light',
  dark: 'dark',
  default: 'default',
};

const systemColorScheme = (Appearance.getColorScheme() ?? themeType.light) as ThemeMode;

export const getColorScheme = (themeColorMode: ThemeMode): ThemeTypes => ({
  colors: colorScheme[themeColorMode],
  scaleMethods: {scale, scaleFont, scaleModerate, scaleVertical},
  fonts: Fonts,
  isDark: themeColorMode === themeType.dark,
  themeColorMode,
});

const ThemeContext = createContext(getColorScheme(systemColorScheme));

export const useThemeScheme = () => useContext(ThemeContext);

let themeListener: NativeEventSubscription | null = null;

const ThemeProvider = ({children}: {children: React.ReactElement}) => {
  const [themeColorMode, setThemeColorMode] = useState<ThemeMode>(systemColorScheme);
  const [currentThemeType, setCurrentThemeType] = useState(themeType.default);

  const changeThemeMode = (value: ThemeMode) => {
    const currentMode = Appearance.getColorScheme() ?? themeType.light;
    const themeMode = value === themeType.default ? currentMode : value;
    setThemeColorMode(themeMode as ThemeMode);
    setCurrentThemeType(value);
  };

  const changeColorTheme = useCallback((value: ThemeMode): void => {
    changeThemeMode(value);
    setUnsecureStorageItem(themeConstant.theme, value).catch(() => {});
  }, []);

  useEffect(() => {
    const getColorTheme = async () => {
      const currentThemeMode =
        ((await getUnsecureStorageItem(themeConstant.theme)) as ThemeMode) ?? themeType.default;
      changeThemeMode(currentThemeMode as ThemeMode);
      themeListener = Appearance.addChangeListener(theme => {
        if (theme.colorScheme) {
          setCurrentThemeType(currentState => {
            if (currentState === themeType.default) {
              setThemeColorMode(theme.colorScheme as ThemeMode);
            }
            return currentState;
          });
        }
      });
    };
    getColorTheme().catch(() => {});
    return () => themeListener?.remove();
  }, []);

  const theme = useMemo(
    () => ({
      ...getColorScheme(themeColorMode),
      onChangeColorScheme: changeColorTheme,
      currentThemeMode: currentThemeType,
    }),
    [themeColorMode, changeColorTheme, currentThemeType],
  );

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
