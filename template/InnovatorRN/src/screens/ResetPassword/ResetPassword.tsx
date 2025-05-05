import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
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
import {validateEmail} from 'utilities/misc';
import {ResetPasswordScreenProps} from 'navigation/types';
import {SCREEN_NAMES} from 'navigation/constants';
import styles from './styles';

const {alert} = Alert;

type ResetPasswordProps = {
  navigation: ResetPasswordScreenProps['navigation'];
  style: StyleSheet.NamedStyles<ReturnType<typeof styles>>;
};

function useResetPassword() {
  return useMutation({
    mutationFn: (data: {email: string}) => {
      return axios.post(`${config.API_BASE_URL}/reset-password`, data);
    },
  });
}

const ResetPassword: React.FC<ResetPasswordProps> = ({style, navigation}) => {
  const resetPassword = useResetPassword();

  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      return alert(strings('resetPassword.emailRequired'));
    }
    if (!validateEmail(trimmedEmail)) {
      return alert(strings('resetPassword.emailInvalid'));
    }

    resetPassword.mutate(
      {
        email: trimmedEmail,
      },
      {
        onSuccess: () => {
          alert(strings('resetPassword.success'));
        },
        onError: () => {
          alert(strings('common.something_went_wrong'));
        },
      },
    );
  };

  const handleContactSupport = () => {
    navigation.navigate(SCREEN_NAMES.SignIn);
  };

  return (
    <SafeAreaView style={style.safeArea}>
      <View style={style.container}>
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps={'handled'}
          showsVerticalScrollIndicator={false}>
          <CLabel style={style.heading}>{strings('resetPassword.heading')}</CLabel>
          <CLabel style={style.subHeading}>{strings('resetPassword.subHeading')}</CLabel>

          <View style={style.separator} />
          <FormInput
            label={strings('resetPassword.email')}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <CButton
            onPress={handleResetPassword}
            text={strings('resetPassword.sendEmail')}
            buttonContainerStyle={style.buttonContainer}
            textStyle={style.buttonTextStyle}
          />

          <CLabel suppressHighlighting onPress={handleContactSupport} style={style.footer}>
            <CLabel style={style.didNotReceive}>{strings('resetPassword.didNotReceive')} </CLabel>
            <CLabel style={style.contactSupport}>{strings('resetPassword.contactSupport')}</CLabel>
          </CLabel>
          <View style={style.separator} />
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default injectStyled(styles)(ResetPassword);
