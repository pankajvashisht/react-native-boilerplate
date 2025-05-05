import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {ThemeTypes} from 'theme/types';
import Font from '../../theme/fonts';

export interface StyleProps {
  containerStyle: ViewStyle;
  headerViewStyle: ViewStyle;
  profileViewStyle: ViewStyle;
  profileTextStyle: TextStyle;
  headerTextStyle: TextStyle;
  headerDescStyle: TextStyle;
  buttonStyle: ViewStyle;
  selectedButtonStyle: ViewStyle;
  normalButtonStyle: ViewStyle;
  logoViewStyle: ViewStyle;
  normalTextStyle: TextStyle;
  normalTextColorStyle: TextStyle;
  selectedTextColorStyle: TextStyle;
  termAndConditionStyle: TextStyle;
  separatorViewStyle: ViewStyle;
}

const Styles = ({
  colors: {white, selectedTextColor, graySelected, black1, labelLightColor},
  scaleMethods: {scale},
}: ThemeTypes): StyleProps =>
  StyleSheet.create({
    containerStyle: {flex: 1},
    headerViewStyle: {marginTop: 48, margin: 8, flexDirection: 'row', marginBottom: 12},
    profileViewStyle: {
      marginLeft: scale(8),
      width: scale(24),
      height: scale(24),
      borderRadius: 24 / 2,
      backgroundColor: selectedTextColor,
      justifyContent: 'center',
      alignItems: 'center',
    },
    profileTextStyle: {color: white, fontSize: 10, fontFamily: Font.bold, fontWeight: '600'},
    headerTextStyle: {
      marginLeft: scale(8),
      marginTop: scale(2),
      fontSize: 14,
      fontFamily: Font.bold,
      fontWeight: '600',
    },
    headerDescStyle: {
      marginLeft: scale(8),
      marginTop: scale(2),
      fontSize: 12,
      color: labelLightColor,
      fontFamily: Font.regular,
      fontWeight: '400',
    },
    buttonStyle: {
      flexDirection: 'row',
      paddingLeft: scale(16),
      height: scale(36),
      alignItems: 'center',
    },
    selectedButtonStyle: {backgroundColor: graySelected},
    normalButtonStyle: {backgroundColor: white},
    logoViewStyle: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingLeft: scale(32),
      paddingBottom: scale(32),
    },
    normalTextStyle: {marginLeft: scale(12), fontFamily: Font.bold, fontWeight: '600'},
    normalTextColorStyle: {color: black1},
    selectedTextColorStyle: {color: selectedTextColor},
    termAndConditionStyle: {
      margin: scale(16),
      fontFamily: Font.regular,
      fontWeight: '400',
      color: '#6B7280',
    },
    separatorViewStyle: {height: scale(1), backgroundColor: '#E2E8F0', marginTop: scale(16)},
  });

export default Styles;
