import React from 'react';
import {TouchableOpacity, View, ScrollView} from 'react-native';
import injectStyled from 'theme/InjectStyled';
import CLabel from 'components/CLabel';
import {DashboardScreenProps} from 'navigation/types';
import {TColors, ThemeMode} from 'theme/types';
import UserInformation from './Components/UserInformation';
import ProfileInformation from './Components/ProfileInformation';
import DeleteAccount from './Components/DeleteAccount';
import LanguageSelection from './Components/LanguageSelection';
import {strings} from 'locales/i18n';
import Styles, {StyleProps} from './style';

export type AccountSettingProps = {
  navigation: DashboardScreenProps['navigation'];
  style: StyleProps;
  onChangeColorScheme: (colorScheme: ThemeMode) => void;
  colors: TColors;
};

const AccountSetting: React.FC<AccountSettingProps> = ({style}) => {
  return (
    <ScrollView style={style.container}>
      <View style={style.subContainer}>
        <CLabel style={style.titleTextStyle}>
          {strings('accountSetting.accountSettingTitle')}
        </CLabel>
        <View style={style.segmentContainer}>
          <TouchableOpacity style={style.selectedSegmentStyle} onPress={() => {}}>
            <CLabel> {strings('accountSetting.account')}</CLabel>
          </TouchableOpacity>
          <TouchableOpacity style={style.segmentStyle} onPress={() => {}}>
            <CLabel> {strings('accountSetting.notifications')}</CLabel>
          </TouchableOpacity>
        </View>
        <ProfileInformation />
        <UserInformation />
        <LanguageSelection />
        <DeleteAccount />
      </View>
    </ScrollView>
  );
};

export default injectStyled(Styles)(AccountSetting);
