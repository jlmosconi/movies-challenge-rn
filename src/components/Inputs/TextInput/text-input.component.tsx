import {InputErrorMessage} from '@components';
import {GENERIC_ERRORS} from '@constants';
import {InputValidator} from '@models';
import {FC} from 'react';
import {Control, Controller, FieldError} from 'react-hook-form';
import {KeyboardType, TextInput} from 'react-native';

interface InputTextProps {
  name?: string;
  control: Control<any, any>;
  placeholder?: string;
  keyboardType?: KeyboardType;
  errors: FieldError | undefined;
  errorsMessages?: Array<{tipo: InputValidator; mensaje: string}>;
}

export const InputText: FC<InputTextProps> = ({
  name = 'input',
  control,
  placeholder = 'Ingrese un valor',
  errors,
  errorsMessages = GENERIC_ERRORS,
  keyboardType = 'default',
}) => {
  // const [, setNumberValue] = useState('');

  return (
    <>
      <Controller
        // rules={{
        //   required: InputValidators.REQUIRED,
        //   validate: {
        //     phoneInvalid: value => !!phoneInput.current?.isValidNumber(value) || InputValidators.,
        //   },
        // }}
        render={({field: {onChange, value}}) => (
          <TextInput placeholder={placeholder} keyboardType={keyboardType} onChangeText={onChange} defaultValue={value} />
          // <PhoneNumberInput
          //   containerStyle={styles.containerStyle}
          //   ref={phoneInput}
          //   defaultValue={value}
          //   defaultCode={defaultCode}
          //   placeholder={placeholder}
          //   onChangeText={setNumberValue}
          //   onChangeFormattedText={onChange}
          //   withDarkTheme
          //   autoFocus
          // />
        )}
        control={control}
        name={name}
      />
      {/* <TextInput placeholder={placeholder} keyboardType={keyboardType} /> */}
      <InputErrorMessage errors={errors} errorsMessages={errorsMessages} />
    </>
  );
};
