import {Button, InputText} from '@components';
import {PATTERNS_GLOBAL} from '@constants';
import {yupResolver} from '@hookform/resolvers/yup';
import {LoginProps} from '@models';
import {FC} from 'react';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';

interface LoginFormProps {
  loading: boolean;
  onSubmit: (formData: LoginProps) => void;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .required()
    .test('emailPattern', '', value => PATTERNS_GLOBAL.email.test(value as string)),
  password: yup.string().min(8).required(),
});

export const LoginForm: FC<LoginFormProps> = ({loading, onSubmit}) => {
  const {
    handleSubmit,
    control,
    formState: {errors, isValid},
  } = useForm<LoginProps>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  return (
    <>
      <InputText
        label="Email"
        control={control}
        placeholder="Ingresa tu Email"
        name={'email'}
        iconName={'email-outline'}
        keyboardType={'email-address'}
        errors={errors.email}
      />
      <InputText
        label="Contraseña"
        control={control}
        placeholder="Ingresa tu Contraseña"
        name={'password'}
        iconName={'lock-outline'}
        isPassword={true}
        errors={errors.password}
      />
      <Button title="Ingresar" loading={loading} disabled={!isValid} onPress={handleSubmit(formData => onSubmit(formData))} />
    </>
  );
};
