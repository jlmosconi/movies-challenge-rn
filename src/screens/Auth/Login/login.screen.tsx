import {safeAreaSpace} from '@constants';
import {useAppDispatch, useAppSelector} from '@hooks';
import {LoginProps} from '@models';
import {login} from '@store/auth/auth.actions';
import {FC} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {LoginForm} from './components/login-form.component';

export const LoginScreen: FC = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(state => state.auth.loading);

  const onSubmit = (loginProps: LoginProps) => {
    dispatch(login(loginProps));
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View style={style.container}>
        {/* <AppText>Login</AppText> */}
        <LoginForm onSubmit={onSubmit} loading={loading} />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    paddingTop: safeAreaSpace,
    paddingHorizontal: 20,
  },
});
