import {AppText} from '@components';
import {safeAreaSpace} from '@constants';
import {FC} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

export const LoginScreen: FC = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View style={style.container}>
        <AppText>Login</AppText>
        {/* <LoginForm onSubmit={onSubmit} loading={loading} /> */}
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
