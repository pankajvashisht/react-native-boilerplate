import React from 'react';
import {View, TextInput, TextInputProps, ViewStyle} from 'react-native';

import {useThemeStyle} from 'hooks';

import Style from './style';

export interface ICTextBox extends TextInputProps {
  hidePassword?: boolean;
  containerStyle?: ViewStyle;
}

function CTextBox({hidePassword, containerStyle, ...inputProps}: ICTextBox) {
  const {
    style,
    colors: {black1},
  } = useThemeStyle(Style);

  return (
    <View style={[style.container, containerStyle]} testID="textbox-container">
      <TextInput
        testID="textbox-input"
        style={[style.input]}
        underlineColorAndroid="transparent"
        secureTextEntry={hidePassword}
        placeholderTextColor={black1}
        selectionColor={black1}
        {...inputProps}
      />
    </View>
  );
}

export default CTextBox;
