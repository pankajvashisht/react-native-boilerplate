import {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {useThemeScheme} from 'theme/ThemeProvider';
import {ThemeTypes} from 'theme/types';

function useThemeStyle(styleCallback: (props: ThemeTypes) => ReturnType<typeof StyleSheet.create>) {
  const pathTheme = useThemeScheme();
  return useMemo(
    () => ({
      ...pathTheme,
      style: styleCallback(pathTheme),
    }),
    [pathTheme, styleCallback],
  );
}

export default useThemeStyle;
