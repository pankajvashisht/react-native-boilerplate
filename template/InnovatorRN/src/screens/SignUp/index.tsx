import React, {useState} from 'react';
import {Alert, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
import {useMutation} from '@tanstack/react-query';
import axios from 'axios';

import config from 'constants/config';
import CLabel from 'components/CLabel';
import CButton from 'components/CButton';
import {FormInput} from 'components/FormInput';
import injectStyled from 'theme/InjectStyled';
import {strings} from 'locales/i18n';
import {setSecureStorageItem, storageKeys} from 'utilities/storageUtils';
import {validateEmail} from 'utilities/misc';
import {SignUpScreenProps} from 'navigation/types';
import {SCREEN_NAMES} from 'navigation/constants';
import {useSetUser} from 'context';
import styles from 'screens/SignIn/styles';

const {alert} = Alert;

type SignUpProps = {
  navigation: SignUpScreenProps['navigation'];
  style: ReturnType<typeof styles>;
};

function useSignUp() {
  return useMutation({
    mutationFn: (data: {email: string; password: string}) => {
      return axios.post(`${config.API_BASE_URL}/register`, data);
    },
  });
}

const SignUp: React.FC<SignUpProps> = ({style, navigation}) => {
  const signUp = useSignUp();
  const saveUserDetails = useSetUser();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const trimmedConfirmPassword = confirmPassword.trim();

    if (!trimmedEmail) {
      return alert('Email is required');
    }
    if (!validateEmail(trimmedEmail)) {
      return alert('Please enter valid Email');
    }
    if (!trimmedPassword) {
      return alert('Password is required');
    }
    if (!trimmedConfirmPassword) {
      return alert('Confirm Password is required');
    }
    if (trimmedPassword !== trimmedConfirmPassword) {
      return alert('Password & Confirm Password do not match');
    }

    signUp.mutate(
      {
        email: trimmedEmail,
        password: trimmedPassword,
      },
      {
        onSuccess: onSuccessSignUp,
        onError: () => {
          alert(strings('common.something_went_wrong'));
        },
      },
    );
  };

  const onSuccessSignUp = async data => {
    await setSecureStorageItem(storageKeys.userData, data);
    saveUserDetails(data);
  };

  const onSignInPress = () => {
    navigation.navigate(SCREEN_NAMES.SignIn);
  };

  return (
    <SafeAreaView style={style.safeArea}>
      <View style={style.signUpContainer}>
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps={'handled'}
          showsVerticalScrollIndicator={false}>
          <CLabel style={style.heading}>{strings('signUp.heading')}</CLabel>
          <View style={style.separator} />
          <FormInput
            label={strings('signUp.firstName')}
            value={firstName}
            onChangeText={setFirstName}
          />
          <View style={style.separator} />
          <FormInput
            label={strings('signUp.lastName')}
            value={lastName}
            onChangeText={setLastName}
          />
          <View style={style.separator} />
          <FormInput
            label={strings('signUp.email')}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <View style={style.separator} />
          <FormInput
            label={strings('signUp.password')}
            value={password}
            onChangeText={setPassword}
          />
          <View style={style.separator} />
          <FormInput
            label={strings('signUp.confirmPassword')}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            returnKeyType={'done'}
          />
          <View style={style.separator} />
          <CButton
            onPress={handleSignUp}
            text={strings('signUp.signUp')}
            buttonContainerStyle={style.buttonContainer}
            textStyle={style.buttonTextStyle}
          />

          <CLabel suppressHighlighting onPress={onSignInPress} style={style.footer}>
            <CLabel style={style.notMember}>{strings('signUp.alreadyMember')} </CLabel>
            <CLabel style={style.createAccount}>{strings('signIn.signIn')}</CLabel>
          </CLabel>
          <View style={style.separator} />
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default injectStyled(styles)(SignUp);
