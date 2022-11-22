import {useAppDispatch, useAppSelector} from '@hooks';
import {Genre} from '@models';
import {navigateService} from '@services';
import {getMovieDetails} from '@store/movies/movies.actions';
import {FC, useEffect} from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MovieDetailsAbout} from './components/MovieDetailsAbout/movie-details-about.component';
import {MovieDetailsBackdrop} from './components/MovieDetailsBackdrop/movie-details-backdrop.component';
import {MovieDetailsCast} from './components/MovieDetailsCast/movie-details-cast.component';
import {MovieDetailInfo} from './components/MovieDetailsInfo/movie-details-info.component';
import {MovieDetailsOverview} from './components/MovieDetailsOverview/movie-details-overview.component';
import {MoviesDetailsPosterInfo} from './components/MovieDetailsPosterInfo/movies-details-poster-info.component';
import {MovieDetailsSimilarMovies} from './components/MovieDetailsSimilarMovies/movie-details-similar-movies.component';

export const MovieDetailsScreen: FC = () => {
  const dispatch = useAppDispatch();
  const {loading, movie} = useAppSelector(state => state.movies.movieDetails);

  useEffect(() => {
    const {movieId} = navigateService.getParams();
    dispatch(getMovieDetails({movieId}));
  }, [dispatch]);

  return (
    <SafeAreaView edges={['bottom']}>
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      ) : (
        <ScrollView>
          <MovieDetailsBackdrop backdropPath={movie?.backdrop_path as string} />
          <View style={styles.container}>
            <MoviesDetailsPosterInfo
              title={movie?.title as string}
              originalTitle={movie?.original_title as string}
              releaseDate={movie?.release_date as string}
              posterPath={movie?.poster_path as string}
            />
            <MovieDetailInfo runtime={movie?.runtime as string} genres={movie?.genres as Genre[]} />
            <MovieDetailsOverview overview={movie?.overview as string} />
            <MovieDetailsCast movieId={movie?.id as number} />
            <MovieDetailsAbout status={movie?.status as string} budget={movie?.budget as string} revenue={movie?.revenue as string} />
            <MovieDetailsSimilarMovies movieId={movie?.id as number} />
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    paddingHorizontal: 10,
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});
