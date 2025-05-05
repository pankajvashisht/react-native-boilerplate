import React from 'react';
import {View, KeyboardAvoidingView, Pressable, Keyboard, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {scale} from 'react-native-size-matters';
import {useThemeStyle} from 'hooks';
import {layout} from '../../utilities/Layout';
import styles from './style';

type Props = {
  isScrollViewEnable?: boolean;
  children: React.ReactNode;
  statusBarColor?: string;
  translucent?: boolean;
  header: boolean;
  bottomFixedPadding?: number;
  topFixedPadding?: number;
  keyboardOffset?: number;
};
export default function KeyboardWrapperView({
  isScrollViewEnable = false,
  header,
  children,
  bottomFixedPadding = 20,
  topFixedPadding = 20,
  keyboardOffset = 50,
}: Props) {
  const {style} = useThemeStyle(styles);
  const insets = useSafeAreaInsets();
  const renderChilden = () => {
    return (
      <KeyboardAvoidingView
        keyboardVerticalOffset={insets.top + scale(keyboardOffset)}
        {...(layout.isiOS
          ? {
              behavior: 'padding',
            }
          : {android: undefined})}
        style={style.container}>
        <Pressable onPress={Keyboard.dismiss} style={style.container}>
          <View style={style.container}>{children}</View>
        </Pressable>
      </KeyboardAvoidingView>
    );
  };

  const paddingStyle = function () {
    return {
      paddingBottom: Math.max(scale(bottomFixedPadding), insets.bottom),
      paddingTop:
        header === true ? scale(topFixedPadding) : Math.max(scale(topFixedPadding), insets.top),
    };
  };
  return isScrollViewEnable ? (
    <ScrollView
      style={[style.subContainer, paddingStyle()]}
      contentContainerStyle={style.container}>
      {renderChilden()}
    </ScrollView>
  ) : (
    <View style={[style.subContainer, paddingStyle()]}>{renderChilden()}</View>
  );
}
