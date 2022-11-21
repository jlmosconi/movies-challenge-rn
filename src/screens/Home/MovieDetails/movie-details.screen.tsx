import {AppText} from '@components';
import {useAppDispatch, useAppSelector} from '@hooks';
import {Genre} from '@models';
import {navigateService} from '@services';
import {getMovieDetails} from '@store/movies/movies.actions';
import {FC, useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MovieDetailsBackdrop} from './components/MovieDetailsBackdrop/movie-details-backdrop.component';
import {MovieDetailInfo} from './components/MovieDetailsInfo/movie-details-info.component';
import {MovieDetailsOverview} from './components/MovieDetailsOverview/movie-details-overview.component';
import {MoviesDetailsPosterInfo} from './components/MovieDetailsPosterInfo/movies-details-poster-info.component';

export const MovieDetailsScreen: FC = () => {
  const dispatch = useAppDispatch();
  const {loading, movie} = useAppSelector(state => state.movies.movieDetails);

  useEffect(() => {
    const {movieId} = navigateService.getParams();
    dispatch(getMovieDetails({movieId}));
  }, [dispatch]);

  return (
    <SafeAreaView edges={['bottom']}>
      <ScrollView>
        <MovieDetailsBackdrop backdropPath={movie?.backdrop_path as string} />
        <View style={style.container}>
          <MoviesDetailsPosterInfo
            title={movie?.title as string}
            releaseDate={movie?.release_date as string}
            posterPath={movie?.poster_path as string}
          />
          <MovieDetailInfo runtime={movie?.runtime as string} genres={movie?.genres as Genre[]} />
          <MovieDetailsOverview overview={movie?.overview as string} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    position: 'relative',
    paddingHorizontal: 10,
  },
});
