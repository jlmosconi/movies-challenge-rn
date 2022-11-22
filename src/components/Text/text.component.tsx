import {COLORS, FONTS} from '@constants';
import {FC} from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';

interface AppTextProps extends TextProps {
  textType?: 'regular' | 'bold';
}

export const AppText: FC<AppTextProps> = ({children, style, textType = 'regular', ...props}): JSX.Element => {
  return (
    <Text style={[styles[textType], styles.color, style]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  color: {
    color: COLORS.white,
  },
  regular: {
    fontFamily: FONTS.regular,
  },
  bold: {
    fontFamily: FONTS.bold,
  },
});
