import {Button, InputText} from '@components';
import {FC} from 'react';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {PATTERNS_GLOBAL} from '@constants';

interface LoginFormProps {
  loading: boolean;
  onSubmit: (formData: LoginFormInput) => void;
}

export interface LoginFormInput {
  email: string;
  password: string;
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
  } = useForm<LoginFormInput>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  return (
    <>
      <InputText control={control} placeholder="Email" name={'email'} keyboardType={'email-address'} errors={errors.email} />
      <InputText control={control} placeholder="Contraseña" name={'password'} errors={errors.password} />
      <Button title="Ingresar" loading={loading} disabled={!isValid} onPress={handleSubmit(formData => onSubmit(formData))} />
    </>
  );
};
