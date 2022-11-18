import {AppText} from '@components';
import {safeAreaSpace} from '@constants';
import {FC} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {LoginForm, LoginFormInput} from './components/login-form.component';

export const LoginScreen: FC = () => {
  // const dispatch = useAppDispatch();
  // const loading = useAppSelector(state => state.auth.loading);
  const loading = false;

  const onSubmit = ({email, password}: LoginFormInput) => {
    console.log(email, password);
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View style={style.container}>
        <AppText>Login</AppText>
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
