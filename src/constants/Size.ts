import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 350;

const scale = (size: number) => (width / guidelineBaseWidth) * size;

export const rs = (size: number, factor = 0.5) => size + (scale(size) - size) * factor;

export const Size = {
  width,
  height,
  gutter: 10
};