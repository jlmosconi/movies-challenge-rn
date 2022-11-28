import {COLORS} from '@constants';
import {useAppDispatch} from '@hooks';
import {IsPreRelease} from '@rbac';
import {getUserInRealtime} from '@store/user/user.actions';
import {FC, useEffect} from 'react';
import {RefreshControl, ScrollView, StyleSheet, View} from 'react-native';
import {NowPlayingMovies} from './components/NowPlayingMovies/now-playing-movies.component';
import {PopularMovies} from './components/PopularMovies/popular-movies.component';
import {TopRatedMovies} from './components/TopRatedMovies/top-rated-movies.component';
import {UpcomingMovies} from './components/UpcomingMovies/upcoming-movies.component';

export const HomeScreen: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUserInRealtime());
  }, [dispatch]);

  return (
    <ScrollView refreshControl={<RefreshControl refreshing={false} onRefresh={() => {}} />} style={styles.bg}>
      <UpcomingMovies />
      <View style={styles.container}>
        {IsPreRelease() ? <NowPlayingMovies /> : null}
        <PopularMovies />
        <TopRatedMovies />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: COLORS.dark,
  },
  container: {
    paddingHorizontal: 10,
  },
});
