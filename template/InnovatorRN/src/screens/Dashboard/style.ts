import {ImageStyle, TextStyle, ViewStyle} from 'react-native';
import {ThemeTypes} from 'theme/types';
import Font from '../../theme/fonts';

export interface StyleProps {
  container: ViewStyle;
  titleTextStyle: TextStyle;
  menuBar: ViewStyle;
  svgTextStyle: TextStyle;
  imageStyle: ImageStyle;
  descTextStyle: TextStyle;
  subContainer: ViewStyle;
}

const styles = ({
  colors: {BackgroundColor, PrimaryText, labelColor, labelLightColor},
  scaleMethods: {scaleFont, scale, scaleVertical},
}: ThemeTypes): StyleProps => ({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: BackgroundColor,
  },
  subContainer: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BackgroundColor,
    marginTop: scale(128),
  },
  titleTextStyle: {
    color: labelColor,
    fontSize: scaleFont(24),
    fontFamily: Font.bold,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: scale(16),
    marginBottom: scale(10),
  },
  descTextStyle: {
    color: labelLightColor,
    fontSize: scaleFont(14),
    textAlign: 'center',
    lineHeight: scale(20),
  },
  svgTextStyle: {
    color: PrimaryText,
    fontSize: scaleFont(25),
    marginVertical: scaleVertical(25),
  },
  imageStyle: {
    marginBottom: scale(25),
  },
  menuBar: {
    marginLeft: scale(10),
  },
});

export default styles;
