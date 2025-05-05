/* eslint-disable no-void */
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {View, Pressable, Switch, Alert, Image} from 'react-native';
import {changeLanguage, strings} from 'locales/i18n';
import injectStyled from 'theme/InjectStyled';
import {Bell, MenuIcon, Profile} from 'assets';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {ParamListBase} from '@react-navigation/native';
import {Menu, MenuOptions, MenuOption, MenuTrigger} from 'react-native-popup-menu';

import {useLang, useSetLang} from 'context';
import {colorScheme} from 'theme/colors';
import {themeType} from 'theme/ThemeProvider';
import {ThemeMode} from 'theme/types';
import LanguageModal from 'components/Modal/Language';
import {removeSecureStorageItem, setUnsecureStorageItem, storageKeys} from 'utilities/storageUtils';
import {SCREEN_NAMES} from 'navigation/constants';
import CLabel from 'components/CLabel';
import Styles, {StyleProps} from './style';

type DrawerHeaderProps = {
  style: StyleProps;
  isLeft: boolean;
  navigation: DrawerNavigationProp<ParamListBase>;
  onChangeColorScheme: (colorScheme: ThemeMode) => void;
  isDark: boolean;
};

type SwitchComponentProps = {
  isEnabled: boolean;
  onToggleSwitch: (state: boolean) => void;
  style: StyleProps;
};

const SwitchComponent: React.FC<SwitchComponentProps> = ({isEnabled, onToggleSwitch, style}) => {
  const toggleSwitch = () => {
    onToggleSwitch(!isEnabled);
  };

  return (
    <Switch
      style={style.switchStyle}
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

const DrawerHeader: React.FC<DrawerHeaderProps> = ({
  isLeft,
  style,
  navigation,
  onChangeColorScheme,
  isDark,
}: DrawerHeaderProps) => {
  const language = useLang();
  const updateLang = useSetLang();
  const menu = useRef<Menu | null>(null);

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
    Alert.alert('', strings('common.logout_warning'), [
      {
        text: strings('common.no'),
        style: 'cancel',
      },
      {
        text: strings('common.yes'),
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

  const handleDeleteAccount = useCallback(() => {
    Alert.alert('', strings('common.delete_Account_message'), [
      {
        text: strings('common.no'),
        style: 'cancel',
      },
      {
        text: strings('common.yes'),
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

  return isLeft ? (
    <View style={style.leftViewContainerStyle}>
      <Pressable
        style={style.menuButtonStyle}
        onPress={() => {
          navigation.toggleDrawer();
        }}>
        <MenuIcon />
      </Pressable>
      <CLabel style={style.leftHeaderTextStyle}>{strings('drawer.designTeam')}</CLabel>
    </View>
  ) : (
    <>
      <View style={style.rightContainerViewStyle}>
        <Pressable>
          <Bell style={style.notificationImageStyle} />
        </Pressable>
        <Pressable
          style={style.profileImageStyle}
          onPress={() => {
            void (async () => {
              await menu.current?.open();
            })();
          }}>
          <Profile />
        </Pressable>
      </View>
      <Menu
        style={style.menuStyle}
        ref={ref => {
          menu.current = ref;
        }}>
        <MenuTrigger />
        <MenuOptions customStyles={{optionsContainer: style.menuViewStyle}}>
          <MenuOption style={style.menuOptionsStyle}>
            <CLabel style={style.menuTextStyle}>{strings('setting.darkMode')}</CLabel>
            <SwitchComponent isEnabled={isEnabled} onToggleSwitch={toggleSwitch} style={style} />
          </MenuOption>
          <MenuOption
            style={style.menuOptionsStyle}
            onSelect={() => {
              navigation.navigate(SCREEN_NAMES.AccountSetting);
            }}>
            <CLabel style={style.menuTextStyle}>{strings('setting.accountSetting')}</CLabel>
          </MenuOption>
          <MenuOption
            style={style.menuOptionsStyle}
            onSelect={() => {
              handleLanguage();
            }}>
            <CLabel style={style.menuRightTextStyle}>{selectedLanguage.name}</CLabel>
            <Image style={style.flagStyle} source={{uri: selectedLanguage.image}} />
          </MenuOption>
          <MenuOption
            style={style.menuOptionsStyle}
            onSelect={() => {
              handleLogout();
            }}>
            <CLabel style={style.menuTextStyle}>{strings('setting.logout')}</CLabel>
          </MenuOption>
          <MenuOption
            style={style.menuOptionsStyle}
            onSelect={() => {
              handleDeleteAccount();
            }}>
            <CLabel style={style.menuTextStyle}>{strings('setting.deleteAccount')}</CLabel>
          </MenuOption>
        </MenuOptions>
      </Menu>
      {showLanguage && (
        <LanguageModal
          onClose={handleLanguage}
          selectedLanguage={selectedLanguage}
          onLanguageSelect={({code, image, name}) => {
            void (async () => {
              await handleLanguageSelection({code, image, name});
            })();
          }}
        />
      )}
    </>
  );
};

export default injectStyled(Styles)(DrawerHeader);
