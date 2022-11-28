import {Platform} from 'react-native';
import {hex2rgba} from '@utils';

export const COLORS = {
  primary: '#2196F3',
  success: '#2dd36f',
  warning: '#ffc409',
  danger: hex2rgba('#eb445a', 0.8),
  dark: '#121212',
  darkLight: hex2rgba('#343434', 0.7),
  medium: '#999',
  light: hex2rgba('#f4f5f8', 0.5),
  gray: hex2rgba('#f4f5f8', 0.4),
  gray2: '#dbdbdb',
  white: '#ffffff',

  skeletonBackgroundColor: '#282828',
  skeletonHighlightColor: '#181818',
};

export const FONTS = {
  regular: 'Inter-Regular',
  bold: 'Inter-Bold',
};

export const MOVIES_LIST = {
  itemHeight: 140,
  itemWidth: 100,
  itemMarginRight: 8,
  itemBorderRadius: 5,
};

export const safeAreaSpace = Platform.OS === 'ios' ? 10 : 60;
