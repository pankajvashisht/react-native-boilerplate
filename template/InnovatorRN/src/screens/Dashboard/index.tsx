import React from 'react';
import {View} from 'react-native';
import injectStyled from 'theme/InjectStyled';
import CLabel from 'components/CLabel';
import {DashboardScreenProps} from 'navigation/types';
import {TColors, ThemeMode} from 'theme/types';
import Styles, {StyleProps} from './style';
import {strings} from 'locales/i18n';

type DashboardProps = {
  navigation: DashboardScreenProps['navigation'];
  style: StyleProps;
  onChangeColorScheme: (colorScheme: ThemeMode) => void;
  colors: TColors;
};

const Dashboard: React.FC<DashboardProps> = ({style}) => {
  return (
    <View style={style.container}>
      <View style={style.subContainer}>
        <CLabel style={style.titleTextStyle}>{strings('dashboard.desc')}</CLabel>
      </View>
    </View>
  );
};

export default injectStyled(Styles)(Dashboard);
