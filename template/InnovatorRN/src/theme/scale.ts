import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const scale = (size: number): number => (width / guidelineBaseWidth) * size;
const scaleVertical = (size: number): number => (height / guidelineBaseHeight) * size;
const scaleModerate = (size: number, factor = 0.5): number => size + (scale(size) - size) * factor;
const scaleFont = (size: number): number => (width / guidelineBaseWidth) * size;

export {scale, scaleVertical, scaleModerate, scaleFont};
