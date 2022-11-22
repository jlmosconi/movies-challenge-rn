import {COLORS} from '@constants';
import {FC} from 'react';
import {RefreshControl, ScrollView, StyleSheet, View} from 'react-native';
import {NowPlayingMovies} from './components/NowPlayingMovies/now-playing-movies.component';
import {PopularMovies} from './components/PopularMovies/popular-movies.component';
import {TopRatedMovies} from './components/TopRatedMovies/top-rated-movies.component';
import {UpcomingMovies} from './components/UpcomingMovies/upcoming-movies.component';

export const HomeScreen: FC = () => {
  return (
    <ScrollView refreshControl={<RefreshControl refreshing={false} onRefresh={() => {}} />} style={styles.bg}>
      <UpcomingMovies />
      <View style={styles.container}>
        <NowPlayingMovies />
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
