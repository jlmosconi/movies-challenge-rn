import {COLORS, FONTS} from '@constants';
import {FC} from 'react';
import {StyleSheet} from 'react-native';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';

export const ToastCustom: FC = () => {
  const toastConfig = {
    success: (props: any) => (
      <BaseToast
        {...props}
        style={[style.noBorder, {backgroundColor: COLORS.success}]}
        text1Style={style.text1Style}
        text2Style={style.text2Style}
      />
    ),
    error: (props: any) => (
      <ErrorToast
        {...props}
        style={[style.noBorder, {backgroundColor: COLORS.danger}]}
        text1Style={style.text1Style}
        text2Style={style.text2Style}
      />
    ),
  };

  return <Toast config={toastConfig} />;
};

const style = StyleSheet.create({
  success: {
    paddingHorizontal: 20,
  },
  noBorder: {
    borderLeftWidth: 0,
  },
  text1Style: {
    fontSize: 13,
    color: COLORS.white,
    fontFamily: FONTS.bold,
  },
  text2Style: {
    fontSize: 12,
    color: COLORS.white,
    fontFamily: FONTS.regular,
  },
});
