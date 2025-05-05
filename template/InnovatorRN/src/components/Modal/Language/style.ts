import {ThemeTypes} from 'theme/types';
import {ViewStyle, TextStyle, ImageStyle} from 'react-native';

export interface StyleProps {
  currencyContainer: ViewStyle;
  crossIcon: ViewStyle;
  flexEnd: ViewStyle;
  currencyView: ViewStyle;
  flexRowCenter: ViewStyle;
  scrollView: ViewStyle;
  selectedCurrency: ViewStyle;
  symbol: TextStyle;
  marginRight10: TextStyle;
  textSmall: TextStyle;
  heading: TextStyle;
  flag: ImageStyle;
}

const styles = ({
  colors: {black1, PrimaryColor, white, grey1},
  scaleMethods: {scale, scaleFont},
}: ThemeTypes): StyleProps => ({
  currencyContainer: {
    backgroundColor: white,
    top: scale(100),
    height: '100%',
    padding: scale(20),
    borderTopRightRadius: scale(30),
    borderTopLeftRadius: scale(30),
    shadowColor: grey1,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: scale(0.3),
    shadowRadius: scale(2),
    elevation: 5,
  },
  crossIcon: {
    backgroundColor: black1,
    borderRadius: scale(50),
    height: scale(25),
    justifyContent: 'center',
    alignItems: 'center',
    width: scale(25),
    marginBottom: scale(10),
  },
  flexEnd: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  currencyView: {
    backgroundColor: white,
    shadowColor: black1,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: scale(0.2),
    shadowRadius: scale(2),
    elevation: 5,
    borderRadius: scale(5),
    marginBottom: scale(4),
    marginTop: scale(3),
    height: scale(60),
    marginHorizontal: scale(10),
    padding: scale(10),
  },
  flexRowCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: scale(4),
  },
  textSmall: {
    color: black1,
    fontSize: scaleFont(12),
  },
  scrollView: {
    paddingBottom: scale(90),
  },
  selectedCurrency: {
    borderWidth: 2,
    borderColor: PrimaryColor,
  },
  symbol: {
    fontSize: scaleFont(15),
    fontWeight: '600',
    textAlign: 'center',
    marginLeft: scale(5),
  },
  marginRight10: {
    marginLeft: scale(20),
    textAlign: 'center',
  },
  flag: {
    height: scale(25),
    width: scale(35),
  },
  heading: {
    fontSize: scaleFont(12),
    fontWeight: '500',
  },
});

export default styles;
