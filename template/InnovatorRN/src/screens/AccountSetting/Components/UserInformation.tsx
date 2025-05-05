import React, {useState} from 'react';
import CButton from 'components/CButton';
import CLabel from 'components/CLabel';
import {FormInput} from 'components/FormInput';
import {strings} from 'locales/i18n';
import {View} from 'react-native';
import Styles from '../style';
import injectStyled from 'theme/InjectStyled';
import {AccountSettingProps} from '..';

const UserInformationSection: React.FC<AccountSettingProps> = ({style}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={style.userInformationViewStyle}>
      <View style={style.profileSubContainerViewStyle}>
        <CLabel style={style.userInformationTextStyle}>
          {strings('accountSetting.userInformation')}
        </CLabel>
        <CLabel style={style.userInformationSubTextStyle}>
          {strings('accountSetting.userInformationDesc')}
        </CLabel>
        <FormInput
          value={firstName}
          labelStyle={style.textInputLabelStyle}
          onChangeText={setFirstName}
          label={strings('accountSetting.firstName')}
        />
        <FormInput
          value={lastName}
          labelStyle={style.textInputLabelStyle}
          onChangeText={setLastName}
          label={strings('accountSetting.lastName')}
        />
        <FormInput
          value={email}
          labelStyle={style.textInputLabelStyle}
          onChangeText={setEmail}
          label={strings('accountSetting.email')}
        />
        <FormInput
          value={email}
          labelStyle={style.textInputLabelStyle}
          onChangeText={setEmail}
          label={strings('accountSetting.newEmail')}
        />
        <FormInput
          value={email}
          labelStyle={style.textInputLabelStyle}
          onChangeText={setEmail}
          label={strings('accountSetting.reEnterEmail')}
        />
        <CLabel style={style.emailDescTextStyle}>{strings('accountSetting.emailDeclaimer')}</CLabel>
      </View>
      <View style={style.separatorViewStyle} />
      <CButton
        onPress={() => {}}
        buttonContainerStyle={style.saveButtonContainer}
        textStyle={style.buttonTextStyle}
        text={strings('accountSetting.save')}
      />
    </View>
  );
};

export default injectStyled(Styles)(UserInformationSection);
