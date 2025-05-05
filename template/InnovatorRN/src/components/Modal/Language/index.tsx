import {useThemeStyle} from 'hooks';
import React, {memo} from 'react';
import {Modal, View, ScrollView, TouchableOpacity, Image} from 'react-native';

import {Cross} from 'assets/icons';
import {appLanguages} from 'constants/appConstant';
import Typography from 'components/CLabel';

import Styles from './style';

type ILanguage = {
  onClose: () => void;
  selectedLanguage: {
    code: string;
    name: string;
    image: string;
  };
  onLanguageSelect: ({code, name, image}: {code: string; name: string; image: string}) => void;
};

const Language = ({
  onClose = () => {},
  selectedLanguage,
  onLanguageSelect = () => {},
}: ILanguage) => {
  const {
    style,
    colors: {white},
  } = useThemeStyle(Styles);

  return (
    <Modal animationType="slide" transparent visible onRequestClose={onClose}>
      <View style={style.currencyContainer}>
        <View style={style.flexEnd}>
          <View />
          <TouchableOpacity style={style.crossIcon} onPress={onClose}>
            <Cross height={20} width={20} fill={white} />
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={style.scrollView} showsVerticalScrollIndicator={false}>
          {appLanguages
            .sort((a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0))
            .map(({name, code, image}, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  style.currencyView,
                  selectedLanguage.code === code && style.selectedCurrency,
                ]}
                onPress={() => onLanguageSelect({code, image, name})}>
                <View style={style.flexRowCenter}>
                  <View>
                    <Typography numberOfLines={1}>{name}</Typography>
                    <Typography style={style.textSmall} numberOfLines={1}>
                      {code}
                    </Typography>
                  </View>
                  <Image style={style.flag} source={{uri: image}} />
                </View>
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
    </Modal>
  );
};

export default memo(Language);
