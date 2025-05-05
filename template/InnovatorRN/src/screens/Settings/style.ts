import {ImageStyle, TextStyle, ViewStyle} from 'react-native';
import {IS_ANDROID} from 'utilities/helper';
import {ThemeTypes} from 'theme/types';

export interface StyleProps {
  mainViewStyle: ViewStyle;
  container: ViewStyle;
  bottomSection: ViewStyle;
  textContainer: ViewStyle;
  rightIconView: ViewStyle;
  termView: ViewStyle;
  menuItem: ViewStyle;
  textStyle: TextStyle;
  svgTextStyle: TextStyle;
  termText: TextStyle;
  menuText: TextStyle;
  copyRight: TextStyle;
  imageStyle: ImageStyle;
  logo: ImageStyle;
  flag: ImageStyle;
  colorRed: TextStyle;
}

const styles = ({
  colors: {PrimaryText, error, textColor, BackgroundColor},
  scaleMethods: {scaleFont, scale, scaleVertical},
}: ThemeTypes): StyleProps => ({
  mainViewStyle: {
    flex: 1,
    backgroundColor: BackgroundColor,
  },
  container: {
    flex: 1,
    marginHorizontal: scale(20),
    paddingVertical: scaleVertical(30),
    backgroundColor: BackgroundColor,
  },
  textStyle: {
    color: PrimaryText,
    fontSize: scaleFont(25),
  },
  svgTextStyle: {
    color: PrimaryText,
    fontSize: scaleFont(25),
    marginVertical: scaleVertical(25),
  },
  imageStyle: {
    marginBottom: scale(25),
  },
  bottomSection: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    marginTop: scale(IS_ANDROID ? 20 : 0),
  },
  termView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: scale(15),
  },
  termText: {
    fontSize: scaleFont(14),
    color: PrimaryText,
    fontWeight: '500',
  },
  copyRight: {
    textAlign: 'center',
    fontSize: scaleFont(12),
    color: PrimaryText,
    marginBottom: scale(20),
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: scale(20),
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: scale(20),
  },
  menuText: {
    fontSize: scaleFont(13),
    fontWeight: '500',
    marginLeft: scale(15),
    color: textColor,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rightIconView: {
    alignItems: 'flex-end',
  },
  colorRed: {
    color: error,
  },
  flag: {
    height: scale(15),
    width: scale(20),
  },
});

export default styles;
