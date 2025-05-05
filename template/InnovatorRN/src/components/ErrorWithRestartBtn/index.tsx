import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import CButton from '../CButton';
import {strings} from '../../locales/i18n';
import styles from './style';
import RNRestart from 'react-native-restart';
import {FallbackComponentProps} from 'react-native-error-boundary';

function ErrorWithRestartBtn(props: FallbackComponentProps) {
  const handleOnPress = () => RNRestart.restart();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentView}>
        <Text style={styles.titleStyle}>{strings('errorScreen.somethingWrong')}</Text>
        <Text>{strings('errorScreen.appInProblem')}</Text>
        <Text>
          {'\n'}
          {props.error.message}
        </Text>
        <CButton onPress={handleOnPress} text={strings('errorScreen.back')} />
      </View>
    </SafeAreaView>
  );
}

export default ErrorWithRestartBtn;
