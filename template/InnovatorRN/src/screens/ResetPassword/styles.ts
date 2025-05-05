import {ThemeTypes} from 'theme/types';

const styles = ({
  colors: {white, black3, grey2, grey5, red2},
  fonts: {Regular},
  scaleMethods: {scale},
}: ThemeTypes) => ({
  safeArea: {
    flex: 1,
    backgroundColor: white,
  },
  container: {
    alignItems: 'center',
    paddingTop: scale(40),
    paddingHorizontal: scale(24),
  },
  heading: {
    fontSize: scale(24),
    lineHeight: scale(32),
    fontWeight: 600,
    fontFamily: Regular,
    marginTop: scale(30),
    color: black3,
    textAlign: 'center',
  },
  subHeading: {
    fontSize: scale(14),
    lineHeight: scale(20),
    fontWeight: 500,
    fontFamily: Regular,
    marginVertical: scale(20),
    color: grey2,
    textAlign: 'center',
  },
  buttonContainer: {
    height: scale(32),
    borderRadius: scale(6),
    backgroundColor: red2,
    elevation: 2,
    shadowColor: grey5,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  buttonTextStyle: {
    fontSize: scale(14),
    fontWeight: 600,
    lineHeight: scale(20),
    color: white,
    fontFamily: Regular,
  },
  didNotReceive: {
    alignSelf: 'center',
    color: grey2,
    fontSize: scale(14),
    lineHeight: scale(20),
    fontWeight: 400,
    fontFamily: Regular,
  },
  contactSupport: {
    color: red2,
    fontSize: scale(14),
    lineHeight: scale(20),
    fontWeight: 500,
    fontFamily: Regular,
  },
  footer: {
    marginTop: scale(32),
    alignSelf: 'center',
  },
  separator: {
    height: scale(20),
  },
});

export default styles;
