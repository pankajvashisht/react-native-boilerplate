import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps, TextStyle, ViewStyle} from 'react-native';

import {useThemeStyle} from 'hooks';

import Style from './style';

type ICButton = {
  textStyle?: TextStyle;
  buttonContainerStyle?: ViewStyle;
  onPress: () => void;
  text: string;
} & TouchableOpacityProps;

function CButton({textStyle, buttonContainerStyle, onPress, text, ...props}: ICButton) {
  const {style} = useThemeStyle(Style);
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[style.buttonContainerStyle, buttonContainerStyle]}
      {...props}>
      <Text style={[style.buttonTextStyle, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
}

export default CButton;
