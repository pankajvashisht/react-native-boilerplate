import React from 'react';
import CButton from 'components/CButton';
import CLabel from 'components/CLabel';
import {strings} from 'locales/i18n';
import {View} from 'react-native';
import injectStyled from 'theme/InjectStyled';
import Styles from '../style';
import {AccountSettingProps} from '..';

const DeleteAccount: React.FC<AccountSettingProps> = ({style}) => {
  return (
    <View style={style.deleteAccountViewStyle}>
      <View style={style.profileSubContainerViewStyle}>
        <CLabel style={style.userInformationTextStyle}>
          {strings('accountSetting.deleteAccount')}
        </CLabel>
        <CLabel style={style.userInformationSubTextStyle}>
          {strings('accountSetting.deleteAccountDesc')}
        </CLabel>
      </View>
      <View style={style.separatorViewStyle} />
      <CButton
        onPress={() => {}}
        buttonContainerStyle={style.saveButtonContainer}
        textStyle={style.buttonTextStyle}
        text={strings('accountSetting.delete')}
      />
    </View>
  );
};

export default injectStyled(Styles)(DeleteAccount);
