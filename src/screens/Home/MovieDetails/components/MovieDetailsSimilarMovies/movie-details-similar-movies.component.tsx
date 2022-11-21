import {useAppDispatch, useAppSelector} from '@hooks';
import {MoviesList} from '@screens/Home/components/MoviesList/movies-list.component';
import {getSimilarMovies} from '@store/movies/movies.actions';
import {FC, useEffect} from 'react';
import {View} from 'react-native';
import {MovieDetailsSectionTitle} from '../MovieDetailsSectionTitle/movie-details-section-title.component';

interface MovieDetailsSimilarMoviesProps {
  movieId: number;
}

export const MovieDetailsSimilarMovies: FC<MovieDetailsSimilarMoviesProps> = ({movieId}) => {
  const dispatch = useAppDispatch();
  const {loading, movies} = useAppSelector(state => state.movies.similarMovies);

  useEffect(() => {
    dispatch(getSimilarMovies({movieId}));
  }, [dispatch, movieId]);

  return (
    <View>
      <MovieDetailsSectionTitle title="Similares" />
      <MoviesList movies={movies} loading={loading} />
      {/* <FlatList
        horizontal={true}
        data={movies}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <Image
              style={{height: 140, width: 90, marginRight: 10}}
              source={{
                uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
              }}
            />
          );
        }}
      /> */}
      {/* {movies.map(movie => (
        <View key={movie.id}>
          <AppText>{movie.title}</AppText>
        </View>
      ))} */}
    </View>
  );
};
