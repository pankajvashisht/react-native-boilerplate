import {Platform, Dimensions} from 'react-native';
import {ILayout, I_LAYOUT_CONSTRAINTS} from './types';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');
const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');

export const layout: ILayout = {
  size: {width: windowWidth, height: windowHeight},
  isiOS: Platform.OS === 'ios',
};

export const LAYOUT_CONSTRAINTS: I_LAYOUT_CONSTRAINTS = {
  SCREEN_WIDTH: screenWidth,
  SCREEN_HEIGHT: screenHeight,
  WINDOW_WIDTH: windowWidth,
  WINDOW_HEIGHT: windowHeight,
};

export const screenContainerTopPadding: number = LAYOUT_CONSTRAINTS.WINDOW_HEIGHT * 0.12;
