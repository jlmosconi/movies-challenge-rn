import {AppText} from '@components';
import {COLORS} from '@constants';
import {FC} from 'react';
import {ActivityIndicator, Pressable, StyleSheet} from 'react-native';
import DropShadow from 'react-native-drop-shadow';

type ButtonColor = 'primary' | 'success' | 'dark';

interface ButtonProps {
  onPress: () => void;
  title: string;
  color?: ButtonColor;
  disabled?: boolean;
  loading?: boolean;
}

export const Button: FC<ButtonProps> = ({title, color = 'primary', disabled, loading, onPress}): JSX.Element => {
  return (
    <DropShadow style={styles.shadowProp}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => [styles[color], styles.button, disabled || loading || pressed ? styles.disabled : null]}
        disabled={disabled || loading}>
        {!loading ? (
          <AppText textType="bold" style={styles.title}>
            {title}
          </AppText>
        ) : (
          <ActivityIndicator color={COLORS.white} />
        )}
      </Pressable>
    </DropShadow>
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    height: 55,
    borderRadius: 16,
  },
  shadowProp: {
    shadowColor: '#1069e3',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.29,
    shadowRadius: 8,
  },
  disabled: {
    opacity: 0.5,
  },
  primary: {
    backgroundColor: COLORS.primary,
  },
  success: {
    backgroundColor: COLORS.success,
  },
  dark: {
    backgroundColor: COLORS.dark,
  },
  title: {
    color: COLORS.white,
    fontSize: 18,
    letterSpacing: 0.2,
  },
});
