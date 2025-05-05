import React from 'react';
import {TextStyle} from 'react-native';

import {useThemeStyle} from 'hooks';
import CLabel from 'components/CLabel';
import CTextBox, {ICTextBox} from 'components/CTextBox';
import styles from './styles';

export type IFormInput = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  labelStyle?: TextStyle;
  inputStyle?: TextStyle;
} & ICTextBox;

export default function FormInput({
  label,
  value,
  onChangeText,
  labelStyle,
  inputStyle,
  containerStyle,
  ...rest
}: IFormInput) {
  const {style} = useThemeStyle(styles);
  return (
    <>
      <CLabel style={[style.inputLabel, labelStyle]}>{label}</CLabel>
      <CTextBox
        value={value}
        onChangeText={onChangeText}
        style={[style.inputStyle, inputStyle]}
        containerStyle={{...style.inputContainer, ...containerStyle}}
        {...rest}
      />
    </>
  );
}
