import {StyleSheet} from 'react-native';

import {ThemeTypes} from 'theme/types';

const style = ({colors: {white}, scaleMethods: {scale}}: ThemeTypes) =>
  StyleSheet.create({
    buttonTextStyle: {
      color: white,
      fontSize: scale(16),
      alignSelf: 'center',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    buttonContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: scale(20),
    },
    disabled: {
      opacity: 0.4,
    },
  });
export default style;
