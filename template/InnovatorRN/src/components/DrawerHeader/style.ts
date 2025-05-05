import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';
import {ThemeTypes} from 'theme/types';
import Font from '../../theme/fonts';

export interface StyleProps {
  leftViewContainerStyle: ViewStyle;
  menuButtonStyle: ViewStyle;
  leftHeaderTextStyle: TextStyle;
  rightContainerViewStyle: ViewStyle;
  notificationImageStyle: ViewStyle;
  profileImageStyle: ViewStyle;
  menuOptionsStyle: ViewStyle;
  menuOptionStyle: ViewStyle;
  menuTextStyle: TextStyle;
  menuStyle: ViewStyle;
  menuViewStyle: ViewStyle;
  switchStyle: ViewStyle;
  menuRightTextStyle: TextStyle;
  flagStyle: ImageStyle;
}

const Styles = ({
  scaleMethods: {scale},
  colors: {BackgroundColor, labelColor},
}: ThemeTypes): StyleProps =>
  StyleSheet.create({
    leftViewContainerStyle: {flexDirection: 'row'},
    menuButtonStyle: {marginLeft: scale(12)},
    leftHeaderTextStyle: {
      marginLeft: scale(16),
      fontFamily: Font.bold,
      fontSize: scale(14),
      fontWeight: '500',
    },
    rightContainerViewStyle: {flexDirection: 'row', marginBottom: scale(16)},
    notificationImageStyle: {marginTop: scale(5), marginRight: scale(16)},
    profileImageStyle: {width: scale(24), height: scale(24), marginRight: scale(16)},
    menuOptionsStyle: {
      flexDirection: 'row',
      height: scale(44),
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 0,
      backgroundColor: BackgroundColor,
    },
    menuOptionStyle: {height: scale(44), justifyContent: 'center', padding: 0},
    menuTextStyle: {
      marginLeft: scale(12),
      fontFamily: Font.regular,
      fontWeight: '400',
      color: labelColor,
      padding: 0,
      backgroundColor: BackgroundColor,
    },
    menuStyle: {
      width: scale(200),
      right: scale(10),
      backgroundColor: BackgroundColor,
    },
    menuViewStyle: {width: scale(250)},
    switchStyle: {marginRight: scale(12)},
    menuRightTextStyle: {
      marginLeft: scale(12),
      fontFamily: Font.regular,
      fontWeight: '400',
      color: labelColor,
      marginRight: scale(15),
      backgroundColor: BackgroundColor,
    },
    flagStyle: {
      width: scale(24),
      height: scale(18),
      marginRight: scale(10),
    },
  });

export default Styles;
