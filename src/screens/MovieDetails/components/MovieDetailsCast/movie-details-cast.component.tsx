import {useAppDispatch, useAppSelector} from '@hooks';
import {getMovieCast} from '@store/movies/movies.actions';
import {FC, useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {MovieDetailsSectionTitle} from '../MovieDetailsSectionTitle/movie-details-section-title.component';
import {MovieDetailsCastItem} from './MovieDetailsCastItem/movie-details-cast-item.component';
import {MoviesDetailsSkeleton} from './MovieDetailsSkeleton/movies-details-skeleton.component';

interface MovieDetailsCastProps {
  movieId: number;
}

export const MovieDetailsCast: FC<MovieDetailsCastProps> = ({movieId}) => {
  const dispatch = useAppDispatch();
  const {loading, cast} = useAppSelector(state => state.movies.movieCast);

  useEffect(() => {
    if (movieId) {
      dispatch(getMovieCast({movieId}));
    }
  }, [dispatch, movieId]);

  return (
    <View style={styles.container}>
      <MovieDetailsSectionTitle title="Elenco" />
      {loading ? (
        <MoviesDetailsSkeleton />
      ) : (
        <FlatList
          horizontal={true}
          data={cast}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <MovieDetailsCastItem cast={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
});
