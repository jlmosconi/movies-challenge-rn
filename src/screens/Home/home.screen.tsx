import {AppText, Button} from '@components';
import {safeAreaSpace} from '@constants';
import {useAppDispatch} from '@hooks';
import {logout} from '@store/auth/auth.actions';
import {FC} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

export const HomeScreen: FC = () => {
  const dispatch = useAppDispatch();
  const getMovies = () => {
    console.log('getMovies');
  };
  return (
    <SafeAreaView>
      <View style={style.container}>
        <AppText>Home Screen</AppText>
        <Button title="Get movies" onPress={() => getMovies()} />
        <Button title="Logout" onPress={() => dispatch(logout())} />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    paddingTop: safeAreaSpace,
  },
});
