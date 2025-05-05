import {StyleSheet} from 'react-native';

import {ThemeTypes} from 'theme/types';

const styles = ({colors: {BackgroundColor}, scaleMethods: {scale}}: ThemeTypes) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    subContainer: {
      flex: 1,
      paddingHorizontal: scale(5),
      backgroundColor: BackgroundColor,
    },
  });

export default styles;
