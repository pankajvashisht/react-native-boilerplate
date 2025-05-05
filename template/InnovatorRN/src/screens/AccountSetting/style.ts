import {TextStyle, ViewStyle, ImageStyle} from 'react-native';
import {ThemeTypes} from 'theme/types';
import Font from '../../theme/fonts';

export interface StyleProps {
  container: ViewStyle;
  titleTextStyle: TextStyle;
  subContainer: ViewStyle;
  segmentContainer: ViewStyle;
  selectedSegmentStyle: ViewStyle;
  segmentStyle: ViewStyle;
  buttonContainer: ViewStyle;
  buttonTextStyle: TextStyle;
  profileImageTextStyle: TextStyle;
  profileImageSubTextStyle: TextStyle;
  profileDefaultImageStyle: ImageStyle;
  profileViewStyle: ViewStyle;
  profileSubContainerViewStyle: ViewStyle;
  separatorViewStyle: ViewStyle;
  userInformationViewStyle: ViewStyle;
  userInformationTextStyle: TextStyle;
  userInformationSubTextStyle: TextStyle;
  textInputLabelStyle: TextStyle;
  emailDescTextStyle: TextStyle;
  saveButtonContainer: ViewStyle;
  deleteAccountViewStyle: ViewStyle;
  containerDropDown: ViewStyle;
  dropdown: ViewStyle;
  placeholderStyle: TextStyle;
  selectedTextStyle: TextStyle;
  inputSearchStyle: TextStyle;
  iconStyle: ImageStyle;
  item: ViewStyle;
  flag: ImageStyle;
  textItem: TextStyle;
  borderColorStyle: ViewStyle;
}

const styles = ({
  colors: {BackgroundColor, labelColor, white, graySelected, grey2, segmentSelected, darkButton},

  scaleMethods: {scaleFont, scale},
}: ThemeTypes): StyleProps => ({
  container: {
    flex: 1,
    backgroundColor: BackgroundColor,
  },
  subContainer: {
    flex: 1,
    backgroundColor: BackgroundColor,
    marginTop: scale(32),
    marginLeft: scale(16),
  },
  titleTextStyle: {
    color: labelColor,
    fontSize: scaleFont(16),
    fontFamily: Font.bold,
    fontWeight: '600',
  },
  segmentContainer: {
    backgroundColor: BackgroundColor,
    flexDirection: 'row',
    marginTop: scale(32),
    height: scale(36),
  },
  selectedSegmentStyle: {
    marginRight: scale(18),
    backgroundColor: segmentSelected,
    borderRadius: scale(6),
    justifyContent: 'center',
    padding: scale(6),
  },
  segmentStyle: {
    marginRight: scale(18),
    borderRadius: scale(6),
    justifyContent: 'center',
    padding: scale(6),
  },
  buttonContainer: {
    height: scale(32),
    borderRadius: scale(6),
    backgroundColor: grey2,
    width: scale(74),
    marginLeft: scale(32),
    marginTop: scale(16),
    marginBottom: scale(16),
  },
  buttonTextStyle: {
    fontSize: scale(14),
    fontWeight: '600',
    lineHeight: scale(20),
    color: white,
    fontFamily: Font.bold,
  },
  profileViewStyle: {
    marginTop: scale(32),
    marginRight: scale(16),
    borderRadius: scale(12),
    borderWidth: 1,
    borderColor: graySelected,
  },
  profileImageTextStyle: {
    fontFamily: Font.bold,
    fontSize: scale(16),
    fontWeight: '600',
  },
  profileImageSubTextStyle: {
    fontFamily: Font.Regular,
    fontSize: scale(14),
    fontWeight: '400',
    marginTop: scale(8),
    color: grey2,
  },
  profileDefaultImageStyle: {
    marginTop: scale(32),
  },
  profileSubContainerViewStyle: {padding: scale(32)},
  separatorViewStyle: {height: 1, backgroundColor: graySelected},
  userInformationViewStyle: {
    marginTop: scale(32),
    marginRight: scale(16),
    borderRadius: scale(12),
    borderWidth: 1,
    borderColor: graySelected,
  },
  userInformationTextStyle: {
    fontFamily: Font.bold,
    fontSize: scale(16),
    fontWeight: '600',
  },
  userInformationSubTextStyle: {
    fontFamily: Font.Regular,
    fontSize: scale(14),
    fontWeight: '400',
    marginTop: scale(8),
    color: grey2,
  },
  textInputLabelStyle: {marginTop: scale(32)},
  emailDescTextStyle: {
    fontFamily: Font.Regular,
    fontSize: scale(14),
    fontWeight: '400',
    marginTop: scale(32),
    color: grey2,
    lineHeight: 20,
  },
  saveButtonContainer: {
    height: scale(32),
    borderRadius: scale(6),
    backgroundColor: darkButton,
    width: scale(74),
    marginLeft: scale(32),
    marginTop: scale(16),
    marginBottom: scale(16),
  },
  deleteAccountViewStyle: {
    marginTop: scale(32),
    marginRight: scale(16),
    marginBottom: scale(32),
    borderRadius: scale(12),
    borderWidth: 1,
    borderColor: graySelected,
  },
  containerDropDown: {
    backgroundColor: 'white',
    marginTop: 32,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  item: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 14,
    marginLeft: 8,
  },
  flag: {
    height: scale(12),
    width: scale(20),
  },
  borderColorStyle: {borderColor: 'blue'},
});

export default styles;
