import {AppText, InputErrorMessage} from '@components';
import {COLORS, GENERIC_ERRORS} from '@constants';
import {InputValidator} from '@models';
import {FC, useState} from 'react';
import {Control, Controller, FieldError} from 'react-hook-form';
import {KeyboardType, StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface InputTextProps {
  label: string;
  name?: string;
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

  return (
    <>
      <View style={style.inputWrapper}>
        <AppText style={style.label}>{label}</AppText>
        <View
          style={[
            style.inputContainer,
            {
              borderColor: errors ? COLORS.danger : isFocused ? COLORS.dark : COLORS.light,
            },
          ]}>
          <Controller
            render={({field: {onChange, value}}) => (
              <TextInput
                defaultValue={value}
                placeholder={placeholder}
                onChangeText={onChange}
                autoCorrect={autoCorrect}
                autoCapitalize={autoCapitalize}
                keyboardType={keyboardType}
                autoComplete="off"
                onFocus={() => setIsFocused(true)}
              />
            )}
            control={control}
            name={name}
          />
          {isPassword ? (
            <Icon
              onPress={() => setHidePassword(!hidePassword)}
              name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
              style={{color: COLORS.dark, fontSize: 22}}
            />
          ) : null}
        </View>

        <InputErrorMessage errors={errors} errorsMessages={errorsMessages} />
      </View>
    </>
  );
};

const style = StyleSheet.create({
  inputWrapper: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    marginVertical: 5,
    fontSize: 14,
    // color: COLORS.grey,
  },
  inputContainer: {
    height: 55,
    // backgroundColor: COLORS.light,
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.5,
  },
});
