import React from 'react';
import CButton from 'components/CButton';
import CLabel from 'components/CLabel';
import {strings} from 'locales/i18n';
import {View} from 'react-native';
import injectStyled from 'theme/InjectStyled';
import {ProfileUpload} from 'assets';
import Styles from '../style';
import {AccountSettingProps} from '..';

const ProfileInformation: React.FC<AccountSettingProps> = ({style}) => {
  return (
    <View style={style.profileViewStyle}>
      <View style={style.profileSubContainerViewStyle}>
        <CLabel style={style.profileImageTextStyle}>
          {strings('accountSetting.profileImage')}
        </CLabel>
        <CLabel style={style.profileImageSubTextStyle}>
          {strings('accountSetting.profileImageDesc')}
        </CLabel>
        <ProfileUpload style={style.profileDefaultImageStyle} />
      </View>
      <View style={style.separatorViewStyle} />
      <CButton
        onPress={() => {}}
        buttonContainerStyle={style.buttonContainer}
        textStyle={style.buttonTextStyle}
        text={strings('accountSetting.update')}
      />
    </View>
  );
};

export default injectStyled(Styles)(ProfileInformation);
