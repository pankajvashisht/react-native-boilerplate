import React, {useCallback, useEffect, useState} from 'react';
import {View, Switch, TouchableOpacity, Alert, Image} from 'react-native';

import injectStyled from 'theme/InjectStyled';
import {themeType} from 'theme/ThemeProvider';
import {colorScheme} from 'theme/colors';
import {storageKeys, removeSecureStorageItem, setUnsecureStorageItem} from 'utilities/storageUtils';
import CLabel from 'components/CLabel';
import {SettingScreenProps} from 'navigation/types';
import {Radiation} from 'assets';
import {TColors, TScaleMethods, ThemeMode} from 'theme/types';
import {ICON_SIZE_15, openLink} from 'utilities/helper';
import {changeLanguage, strings} from 'locales/i18n';
import {privacyPolice, termAndConditionUrl} from 'constants/appConstant';
import {ArrowRight, Logout, Theme} from 'assets/icons';
import LanguageModal from 'components/Modal/Language';
import {useLang, useSetLang} from 'context';
import Styles, {StyleProps} from './style';

type SettingProps = {
  navigation: SettingScreenProps['navigation'];
  style: StyleProps;
  onChangeColorScheme: (colorScheme: ThemeMode) => void;
  scaleMethods: TScaleMethods;
  colors: TColors;
  isDark: boolean;
};

type SwitchComponentProps = {
  isEnabled: boolean;
  onToggleSwitch: (state: boolean) => void;
};

const {alert} = Alert;

const SwitchComponent: React.FC<SwitchComponentProps> = ({isEnabled, onToggleSwitch}) => {
  const toggleSwitch = () => {
    onToggleSwitch(!isEnabled);
  };

  return (
    <Switch
      trackColor={{
        false: colorScheme.dark.SecondaryColor,
        true: colorScheme.light.SecondaryColor,
      }}
      thumbColor={isEnabled ? colorScheme.dark.PrimaryColor : colorScheme.light.PrimaryColor}
      ios_backgroundColor={colorScheme.light.BackgroundColor}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

const Settings: React.FC<SettingProps> = ({
  style,
  onChangeColorScheme,
  scaleMethods: {scale},
  colors: {textColor},
  isDark,
}) => {
  const updateLang = useSetLang();
  const language = useLang();

  const [isEnabled, setIsEnabled] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(language);

  useEffect(() => {
    setIsEnabled(isDark);
  }, [isDark]);

  const toggleSwitch = (state: boolean | ((prevState: boolean) => boolean)) => {
    const theme = (isEnabled ? themeType.light : themeType.dark) as ThemeMode;
    onChangeColorScheme(theme);
    setIsEnabled(state);
  };

  const handleLogout = useCallback(() => {
    alert('', strings('common.areYouSure'), [
      {
        text: 'No',
        style: 'cancel',
      },
      {
        text: 'Yes',
        style: 'cancel',
        onPress: () => {
          removeSecureStorageItem(storageKeys.userData)
            .then(() => {
              // remove user local data
            })
            .catch(() => {});
        },
      },
    ]);
  }, []);

  const handleLanguage = useCallback(() => {
    setShowLanguage(curr => !curr);
  }, []);

  const handleLanguageSelection = useCallback(
    async ({code, image, name}: {code: string; image: string; name: string}) => {
      handleLanguage();
      changeLanguage(code);
      setSelectedLanguage({code, image, name});
      await setUnsecureStorageItem('language', {code, image, name});
      updateLang({code, image, name});
    },
    [handleLanguage, updateLang],
  );

  return (
    <View style={style.mainViewStyle}>
      {showLanguage && (
        <LanguageModal
          onClose={handleLanguage}
          selectedLanguage={selectedLanguage}
          onLanguageSelect={handleLanguageSelection}
        />
      )}
      <View style={style.container}>
        <TouchableOpacity style={style.menuItem} onPress={handleLanguage}>
          <View style={style.textContainer}>
            <Image source={{uri: selectedLanguage.image}} style={style.flag} />
            <CLabel style={style.menuText}>{selectedLanguage.name}</CLabel>
          </View>
          <View style={style.rightIconView}>
            <ArrowRight height={ICON_SIZE_15} width={ICON_SIZE_15} fill={textColor} />
          </View>
        </TouchableOpacity>
        <View style={style.menuItem}>
          <View style={style.textContainer}>
            <Theme height={ICON_SIZE_15} width={ICON_SIZE_15} fill={textColor} />
            <CLabel style={style.menuText}>{strings('setting.changeTheme')}</CLabel>
          </View>
          <View style={style.rightIconView}>
            <SwitchComponent isEnabled={isEnabled} onToggleSwitch={toggleSwitch} />
          </View>
        </View>

        <TouchableOpacity style={style.menuItem} onPress={handleLogout}>
          <View style={style.textContainer}>
            <Logout height={ICON_SIZE_15} width={ICON_SIZE_15} fill={textColor} />
            <CLabel style={style.menuText}>{strings('setting.logout')}</CLabel>
          </View>
          <View style={style.rightIconView}>
            <ArrowRight height={ICON_SIZE_15} width={ICON_SIZE_15} fill={textColor} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={style.menuItem} onPress={handleLogout}>
          <View style={style.textContainer}>
            {/* <Delete height={ICON_SIZE_15} width={ICON_SIZE_15} fill={error} /> */}
            <CLabel style={[style.menuText, style.colorRed]}>
              {strings('setting.deleteAccount')}
            </CLabel>
          </View>
          <View style={style.rightIconView}>
            <ArrowRight height={scale(15)} width={scale(15)} fill={textColor} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={style.bottomSection}>
        <View style={style.logo}>
          <Radiation height={50} width={40} />
        </View>
        <View style={style.termView}>
          <TouchableOpacity onPress={() => openLink(termAndConditionUrl)}>
            <CLabel style={style.termText}>{strings('setting.termUse')}</CLabel>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink(privacyPolice)}>
            <CLabel style={style.termText}>{strings('setting.privacy')}</CLabel>
          </TouchableOpacity>
        </View>
        <CLabel style={style.copyRight}>{strings('setting.copyRight')}</CLabel>
      </View>
    </View>
  );
};

export default injectStyled(Styles)(Settings);
