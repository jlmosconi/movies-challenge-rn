import {Platform} from 'react-native';

export const COLORS = {
  primary: '#2196F3',
  success: '#2dd36f',
  warning: '#ffc409',
  danger: '#eb445a',
  dark: '#242E42',
  medium: '#92949c',
  light: '#f4f5f8',
  white: '#ffffff',
  gray: '#D5DDE0',
  grey2: '#97ADB6',
  grey3: '#F7F8F9',
};

export const FONTS = {
  regular: 'Inter-Regular',
  bold: 'Inter-Bold',
};

export const safeAreaSpace = Platform.OS === 'ios' ? 10 : 60;
