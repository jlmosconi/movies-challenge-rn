import {AppText, Button} from '@components';
import {safeAreaSpace} from '@constants';
import {useAppDispatch, useAppSelector} from '@hooks';
import {logout} from '@store/auth/auth.actions';
import {getUpcomingMovies} from '@store/movies/movies.actions';
import {FC} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

export const HomeScreen: FC = () => {
  const dispatch = useAppDispatch();
  const upcomingMovies = useAppSelector(state => state.movies.upcomingMovies.movies);
  const upcomingMoviesLoading = useAppSelector(state => state.movies.upcomingMovies.loading);
  const getMovies = () => {
    dispatch(getUpcomingMovies());
  };
  return (
    <SafeAreaView>
      <View style={style.container}>
        <AppText>Home Screen</AppText>
        <Button title="Get movies" onPress={() => getMovies()} />
        <Button title="Logout" onPress={() => dispatch(logout())} />
        <AppText>asdasdasd</AppText>
        {upcomingMoviesLoading ? <AppText>Loading...</AppText> : upcomingMovies.map(movie => <AppText key={movie.id}>{movie.id}</AppText>)}
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    paddingTop: safeAreaSpace,
  },
});
