import React, {useMemo} from 'react';

import {useThemeScheme} from 'theme/ThemeProvider';
import {ThemeTypes} from './types';
import {StyleSheet} from 'react-native';

const injectStyled = (styleCallback: (props: ThemeTypes) => ReturnType<typeof StyleSheet.create>) =>
  function <T>(Component: React.ComponentType<T>) {
    return (props: T) => {
      const appTheme = useThemeScheme();

      const theme = useMemo(() => ({style: styleCallback(appTheme), ...appTheme}), [appTheme]);

      return <Component {...theme} {...props} />;
    };
  };

export default injectStyled;
