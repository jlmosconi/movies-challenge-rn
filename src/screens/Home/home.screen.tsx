import {Button} from '@components';
import {useAppDispatch} from '@hooks';
import {logout} from '@store/auth/auth.actions';
import {FC} from 'react';
import {RefreshControl, ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NowPlayingMovies} from './components/NowPlayingMovies/now-playing-movies.component';
import {PopularMovies} from './components/PopularMovies/popular-movies.component';
import {TopRatedMovies} from './components/TopRatedMovies/top-rated-movies.component';
import {UpcomingMovies} from './components/UpcomingMovies/upcoming-movies.component';

export const HomeScreen: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <SafeAreaView edges={['bottom']}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {
              // dispatch(getNowPlayingMovies());
              // dispatch(getUpcomingMovies());
            }}
          />
        }>
        <UpcomingMovies />
        <View style={style.container}>
          <NowPlayingMovies />
          <PopularMovies />
          <TopRatedMovies />
          <Button title="Logout" onPress={() => dispatch(logout())} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});
