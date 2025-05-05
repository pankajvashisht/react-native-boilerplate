import React, {useState} from 'react';
import {View, Alert, SafeAreaView} from 'react-native';
import {useMutation} from '@tanstack/react-query';
import axios from 'axios';

import {Logo} from 'assets/icons';
import injectStyled from 'theme/InjectStyled';
import CButton from 'components/CButton';
import CLabel from 'components/CLabel';
import Loader from 'components/Loader';
import {FormInput} from 'components/FormInput';
import {strings} from 'locales/i18n';
import {SCREEN_NAMES} from 'navigation/constants';
import {validateEmail} from 'utilities/misc';
import {setSecureStorageItem, storageKeys} from 'utilities/storageUtils';
import {SignInScreenProps} from 'navigation/types';
import config from 'constants/config';
import TestIds from 'constants/testIds';
import {IUser, useSetUser} from 'context';
import styles from './styles';

const {signIn: signInTestId} = TestIds;

export type SignInProps = {
  navigation: SignInScreenProps['navigation'];
  style: ReturnType<typeof styles>;
};

export function useSignIn() {
  return useMutation({
    mutationFn: (data: {email: string; password: string}) => {
      return axios.post(`${config.API_BASE_URL}/login`, data);
    },
  });
}

const SignIn: React.FC<SignInProps> = ({navigation, style}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = useSignIn();
  const saveUserDetails = useSetUser();

  const handleSignIn = () => {
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!trimmedEmail || !trimmedPassword) {
      return Alert.alert('Email and password is required');
    }
    if (!validateEmail(trimmedEmail)) {
      return Alert.alert('Please enter valid Email');
    }

    signIn.mutate(
      {
        email: trimmedEmail,
        password: trimmedPassword,
      },
      {
        onSuccess: data => {
          setSecureStorageItem(storageKeys.userData, data).catch(() => {});
          saveUserDetails(data.data as IUser);
        },
        onError: () => {
          Alert.alert(strings('common.something_went_wrong'));
        },
      },
    );
  };

  const onSignUpPress = () => {
    navigation.navigate(SCREEN_NAMES.SignUp);
  };

  const onForgotPasswordPress = () => {
    navigation.navigate(SCREEN_NAMES.ResetPassword);
  };

  return (
    <SafeAreaView style={style.safeArea}>
      <View style={style.container}>
        <Logo />
        <CLabel accessibilityRole="header" style={style.heading}>
          {strings('signIn.heading')}
        </CLabel>
        <View style={style.formContainer}>
          <FormInput
            testID={signInTestId.emailInput}
            label={strings('signIn.email')}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <View style={style.separator} />
          <FormInput
            testID={signInTestId.passwordInput}
            label={strings('signIn.password')}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <CButton
            testID={signInTestId.signInButton}
            onPress={handleSignIn}
            text={strings('signIn.signIn')}
            buttonContainerStyle={style.buttonContainer}
            textStyle={style.buttonTextStyle}
          />

          <CLabel
            testID={signInTestId.forgotPassButton}
            suppressHighlighting
            onPress={onForgotPasswordPress}
            style={style.forgotPassword}>
            {strings('signIn.forgotPassword')}
          </CLabel>

          <CLabel
            testID={signInTestId.createAccountButton}
            suppressHighlighting
            onPress={onSignUpPress}
            style={style.footer}>
            <CLabel style={style.notMember}>{strings('signIn.notMember')} </CLabel>
            <CLabel style={style.createAccount}>{strings('signIn.createAccount')}</CLabel>
          </CLabel>
        </View>
      </View>
      <Loader loading={signIn.isPending} absolute />
    </SafeAreaView>
  );
};

export default injectStyled(styles)(SignIn);
