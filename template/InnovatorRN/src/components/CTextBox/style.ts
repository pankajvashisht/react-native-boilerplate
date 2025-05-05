import {StyleSheet} from 'react-native';
import {ThemeTypes} from 'theme/types';

const style = ({colors: {black1}, scaleMethods: {scale}}: ThemeTypes) =>
  StyleSheet.create({
    container: {
      backgroundColor: 'transparent',
      margin: scale(5),
      borderBottomColor: black1,
      borderBottomWidth: scale(2),
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: scale(40),
      maxHeight: scale(60),
    },
    input: {
      flex: 0.9,
      height: scale(37),
      paddingLeft: scale(10),
      marginTop: scale(12),
      marginBottom: scale(12),
      paddingTop: scale(4),
      paddingBottom: scale(4),
      backgroundColor: 'transparent',
      color: black1,
      fontSize: 14,
    },
    iconContainer: {
      flex: 0.1,
      paddingLeft: scale(10),
    },
    icon: {
      color: '#4A4A4A',
    },
  });

export default style;
