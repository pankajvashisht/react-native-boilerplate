import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {Home, Logo, Setting} from 'assets';
import {strings} from 'locales/i18n';
import {SCREEN_NAMES} from 'navigation/constants';
import injectStyled from 'theme/InjectStyled';
import CLabel from 'components/CLabel';
import Styles, {StyleProps} from './style';

type StateProps = {
  index: number;
};

type CustomDrawerContentProps = {
  style: StyleProps;
  navigation: NavigationProp<ParamListBase>;
  state: StateProps;
};

const CustomDrawerContent: React.FC<CustomDrawerContentProps> = ({
  navigation,
  style,
  state,
  colors: {grey2, red2},
}) => {
  const isHomeSelected = state.index === 0;
  const isSettingSelected = state.index === 1;
  return (
    <View style={style.containerStyle}>
      <View style={style.headerViewStyle}>
        <View style={style.profileViewStyle}>
          <CLabel style={style.profileTextStyle}>DT</CLabel>
        </View>
        <View>
          <CLabel style={style.headerTextStyle}>{strings('drawer.designTeam')}</CLabel>
          <CLabel style={style.headerDescStyle}>{strings('drawer.member')}</CLabel>
        </View>
      </View>
      <TouchableOpacity
        style={[
          style.buttonStyle,
          isHomeSelected ? style.selectedButtonStyle : style.normalButtonStyle,
        ]}
        onPress={() => {
          navigation.navigate(SCREEN_NAMES.Dashboard);
        }}>
        <Home fill={isHomeSelected ? red2 : grey2} />
        <CLabel
          style={[
            style.normalTextStyle,
            isHomeSelected ? style.selectedTextColorStyle : style.normalTextColorStyle,
          ]}>
          {strings('drawer.home')}
        </CLabel>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          style.buttonStyle,
          isSettingSelected ? style.selectedButtonStyle : style.normalButtonStyle,
        ]}
        onPress={() => {
          navigation.navigate(SCREEN_NAMES.Setting);
        }}>
        <Setting fill={isSettingSelected ? red2 : grey2} />
        <CLabel
          style={[
            style.normalTextStyle,
            isSettingSelected ? style.selectedTextColorStyle : style.normalTextColorStyle,
          ]}>
          {strings('drawer.setting')}
        </CLabel>
      </TouchableOpacity>
      <View style={style.separatorViewStyle} />
      <CLabel style={style.termAndConditionStyle}> {strings('drawer.termAndPrivacy')}</CLabel>
      <View style={style.logoViewStyle}>
        <Logo />
      </View>
    </View>
  );
};

export default injectStyled(Styles)(CustomDrawerContent);
