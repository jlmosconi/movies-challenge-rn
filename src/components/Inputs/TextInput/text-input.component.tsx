import {AppText} from '../../Text/text.component';
import {InputErrorMessage} from '../InputErrorMessage/input-error-message.component';
import {COLORS, GENERIC_ERRORS} from '@constants';
import {InputValidator} from '@models';
import {FC, useRef, useState} from 'react';
import {Control, Controller, FieldError} from 'react-hook-form';
import {KeyboardType, Pressable, StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface InputTextProps {
  label: string;
  name?: string;
  iconName?: string;
  isPassword?: boolean;
  control: Control<any, any>;
  placeholder?: string;
  keyboardType?: KeyboardType;
  autoCorrect?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  errors: FieldError | undefined;
  errorsMessages?: Array<{tipo: InputValidator; mensaje: string}>;
}

export const InputText: FC<InputTextProps> = ({
  label,
  name = 'input',
  iconName,
  isPassword = false,
  control,
  placeholder = 'Ingrese un valor',
  keyboardType = 'default',
  autoCorrect = false,
  autoCapitalize = 'none',
  errors,
  errorsMessages = GENERIC_ERRORS,
}) => {
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const textInput = useRef<TextInput>(null);

  return (
    <View style={style.inputWrapper}>
      <AppText style={style.label}>{label}</AppText>
      <Pressable
        onPress={() => textInput?.current?.focus()}
        style={[
          style.inputContainer,
          {
            borderColor: errors ? COLORS.danger : isFocused ? COLORS.light : COLORS.dark,
          },
        ]}>
        {iconName ? <Icon name={iconName} style={style.leadingIcon} /> : null}

        <Controller
          render={({field: {onChange, value}}) => (
            <TextInput
              ref={textInput}
              style={style.input}
              defaultValue={value}
              placeholder={placeholder}
              placeholderTextColor={COLORS.gray}
              onChangeText={onChange}
              autoCorrect={autoCorrect}
              autoCapitalize={autoCapitalize}
              keyboardType={keyboardType}
              autoComplete="off"
              secureTextEntry={isPassword && hidePassword}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          )}
          control={control}
          name={name}
        />
        {isPassword ? (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            style={style.trailingIcon}
          />
        ) : null}
      </Pressable>

      <InputErrorMessage errors={errors} errorsMessages={errorsMessages} />
    </View>
  );
};

const style = StyleSheet.create({
  inputWrapper: {
    width: '100%',
    marginBottom: 16,
  },
  label: {
    marginVertical: 5,
    fontSize: 14,
  },
  inputContainer: {
    alignItems: 'center',
    height: 55,
    backgroundColor: COLORS.darkLight,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.5,
    borderRadius: 12,
  },
  input: {
    color: COLORS.gray2,
    flex: 1,
  },
  leadingIcon: {
    color: COLORS.medium,
    fontSize: 22,
    marginRight: 10,
  },
  trailingIcon: {
    color: COLORS.medium,
    fontSize: 22,
  },
});
