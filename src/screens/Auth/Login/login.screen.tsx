import {AppText} from '@components';
import {COLORS} from '@constants';
import {useAppDispatch, useAppSelector} from '@hooks';
import {LoginProps} from '@models';
import {login} from '@store/auth/auth.actions';
import {FC} from 'react';
import {Dimensions, SafeAreaView, StyleSheet, View} from 'react-native';
import {LoginForm} from './components/login-form.component';

const LoginScreen: FC = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(state => state.auth.loading);

  const onSubmit = (loginProps: LoginProps) => {
    dispatch(login(loginProps));
  };

  return (
    <SafeAreaView>
      <View style={style.container}>
        <AppText style={style.title} textType="bold">
          ANTERUX
        </AppText>
        <AppText style={style.loginText} textType="bold">
          Ingresar
        </AppText>
        <LoginForm onSubmit={onSubmit} loading={loading} />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: Dimensions.get('window').width * 0.12,
    letterSpacing: 2,
    color: COLORS.primary,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 50,
  },
  loginText: {
    fontSize: 26,
    marginBottom: 16,
  },
});
