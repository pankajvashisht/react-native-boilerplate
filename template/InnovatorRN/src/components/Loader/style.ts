import {StyleSheet} from 'react-native';
import {ThemeTypes} from 'theme/types';

const styles = ({colors: {white}, scaleMethods: {scale}}: ThemeTypes) =>
  StyleSheet.create({
    flexCenterStyle: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    absoluteLoaderSubContainer: {
      backgroundColor: white,
      height: scale(100),
      width: scale(100),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: scale(10),
    },
  });
export default styles;
