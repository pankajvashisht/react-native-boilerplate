import {StyleSheet} from 'react-native';
import {ThemeTypes} from 'theme/types';

export default ({scaleMethods: {scale, scaleFont}, colors: {black1}}: ThemeTypes) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: scale(16),
    },
    iconRight: {
      marginLeft: scale(4),
      marginRight: scale(8),
    },
    iconLeft: {
      transform: [{rotate: '180deg'}],
      marginRight: scale(4),
      marginLeft: scale(8),
    },
    label: {
      color: black1,
      lineHeight: scale(24),
      height: scale(24),
      fontSize: scaleFont(18),
      textAlign: 'center',
    },
    halfOpacity: {
      opacity: 0.5,
    },
    nameStyle: {
      color: black1,
      fontSize: scale(13),
      letterSpacing: 0.2,
      textAlign: 'left',
    },
    burgerButton: {
      padding: scale(8),
      marginRight: scale(16),
    },
  });
