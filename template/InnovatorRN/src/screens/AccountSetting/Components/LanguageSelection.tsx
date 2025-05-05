import React, {useCallback, useState} from 'react';
import {Image, View} from 'react-native';
import injectStyled from 'theme/InjectStyled';
import {Dropdown} from 'react-native-element-dropdown';
import {AccountSettingProps} from '..';
import {appLanguages} from 'constants/appConstant';
import {setUnsecureStorageItem} from 'utilities/storageUtils';
import CButton from 'components/CButton';
import CLabel from 'components/CLabel';
import {useSetLang} from 'context';
import {changeLanguage, strings} from 'locales/i18n';
import Styles from '../style';

const data = [
  {label: 'English', value: appLanguages[0]},
  {label: 'Hindi', value: appLanguages[1]},
];

interface LanguageSelection {
  name: string;
  code: string;
  image: string;
}

interface LanguageData {
  label: string;
  value: LanguageSelection;
}

const LanguageSelection: React.FC<AccountSettingProps> = ({style}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState<LanguageSelection | null>(null);
  const updateLang = useSetLang();

  const handleLanguageSelection = useCallback(
    async ({code, image, name}: {code: string; image: string; name: string}) => {
      changeLanguage(code);
      try {
        await setUnsecureStorageItem('language', {code, image, name});
      } catch (error) {
        return error;
      }
      updateLang({code, image, name});
    },
    [updateLang],
  );

  const renderItem = (item: LanguageData) => {
    return (
      <View style={style.item}>
        <Image style={style.flag} source={{uri: item.value.image}} />
        <CLabel style={style.textItem}>{item.label}</CLabel>
      </View>
    );
  };

  const onChange = async (item: LanguageData) => {
    setValue({...item.value});
    try {
      await handleLanguageSelection(item.value);
    } catch (error) {
      return error;
    }
    setIsFocus(false);
  };

  return (
    <View style={style.userInformationViewStyle}>
      <View style={style.profileSubContainerViewStyle}>
        <CLabel style={style.userInformationTextStyle}>{strings('accountSetting.language')}</CLabel>
        <CLabel style={style.userInformationSubTextStyle}>
          {strings('accountSetting.languageDesc')}
        </CLabel>
        <View style={style.containerDropDown}>
          <Dropdown
            style={[style.dropdown, isFocus && style.borderColorStyle]}
            placeholderStyle={style.placeholderStyle}
            selectedTextStyle={style.selectedTextStyle}
            inputSearchStyle={style.inputSearchStyle}
            iconStyle={style.iconStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={value?.name}
            value={value?.name}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={onChange}
            renderItem={renderItem}
          />
        </View>
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

export default injectStyled(Styles)(LanguageSelection);
