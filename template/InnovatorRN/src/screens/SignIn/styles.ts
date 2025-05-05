import {StyleSheet} from 'react-native';
import {ThemeTypes} from 'theme/types';

const styles = ({
  colors: {white, black3, grey2, grey5, red2},
  fonts: {Regular},
  scaleMethods: {scale},
}: ThemeTypes) =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: white,
    },
    container: {
      alignItems: 'center',
      paddingTop: scale(50),
      paddingHorizontal: scale(24),
    },
    formContainer: {
      paddingTop: scale(40),
    },
    heading: {
      fontSize: scale(24),
      lineHeight: scale(32),
      fontWeight: '600',
      fontFamily: Regular,
      marginTop: scale(30),
      color: black3,
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
      fontWeight: '600',
      lineHeight: scale(20),
      color: white,
      fontFamily: Regular,
    },
    forgotPassword: {
      marginTop: scale(24),
      alignSelf: 'center',
      color: red2,
      fontSize: scale(14),
      lineHeight: scale(20),
      fontWeight: '500',
      fontFamily: Regular,
    },
    notMember: {
      alignSelf: 'center',
      color: grey2,
      fontSize: scale(14),
      lineHeight: scale(20),
      fontWeight: '400',
      fontFamily: Regular,
    },
    createAccount: {
      color: red2,
      fontSize: scale(14),
      lineHeight: scale(20),
      fontWeight: '500',
      fontFamily: Regular,
    },
    footer: {
      marginTop: scale(32),
      alignSelf: 'center',
    },
    signUpContainer: {
      alignItems: 'center',
      paddingHorizontal: scale(24),
    },
    separator: {
      height: scale(20),
    },
  });

export default styles;
