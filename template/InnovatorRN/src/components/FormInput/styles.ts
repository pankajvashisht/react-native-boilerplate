import {StyleSheet} from 'react-native';
import {ThemeTypes} from 'theme/types';

const styles = ({colors: {black3, grey3, grey5}, scaleMethods: {scale}}: ThemeTypes) =>
  StyleSheet.create({
    inputStyle: {
      height: '100%',
      width: '100%',
    },
    inputContainer: {
      margin: 0,
      marginTop: scale(10),
      padding: scale(12),
      height: scale(44),
      borderRadius: scale(6),
      borderWidth: 1,
      borderBottomWidth: 1,
      borderColor: grey3,
      borderBottomColor: grey3,
      shadowColor: grey5,
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 1,
      shadowRadius: 1,
      elevation: 2,
    },
    inputLabel: {
      fontSize: scale(14),
      lineHeight: scale(20),
      fontWeight: '500',
      fontFamily: 'Inter',
      color: black3,
    },
  });

export default styles;
