import React from 'react';
import {View, StyleSheet, ActivityIndicator, ViewStyle} from 'react-native';

import {useThemeStyle} from 'hooks';

import styles from './style';

interface ILoader {
  loading: boolean;
  absolute?: boolean;
  backgroundColor?: string;
  containerStyle?: ViewStyle;
  loaderColor?: string;
  loaderSize?: number | 'small' | 'large';
  whiteSubContainerStyle?: ViewStyle;
}

function Loader({
  loading,
  absolute,
  backgroundColor,
  containerStyle,
  loaderColor,
  loaderSize = 'large',
  whiteSubContainerStyle,
}: ILoader) {
  const {
    style,
    colors: {black2},
  } = useThemeStyle(styles);
  if (!loading) {
    return null;
  }

  if (absolute) {
    return (
      <View
        style={[
          StyleSheet.absoluteFill,
          style.flexCenterStyle,
          {backgroundColor: black2},
          containerStyle,
        ]}
        testID="loader-container">
        <View
          style={[style.absoluteLoaderSubContainer, whiteSubContainerStyle]}
          testID="absolute-loader-subcontainer">
          <ActivityIndicator color={loaderColor} size={loaderSize} testID="activity-indicator" />
        </View>
      </View>
    );
  }

  const parentContainerStyle = [
    style.flexCenterStyle,
    {
      backgroundColor: backgroundColor || 'transparent',
      flex: 1,
    },
    containerStyle,
  ];

  return (
    <View style={parentContainerStyle} testID="loader-container">
      <ActivityIndicator color={loaderColor} size={loaderSize} testID="activity-indicator" />
    </View>
  );
}

export default Loader;
