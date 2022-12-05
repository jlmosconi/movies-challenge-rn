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
    if (movieId) {
      dispatch(getSimilarMovies({movieId}));
    }
  }, [dispatch, movieId]);

  return (
    <View>
      <MovieDetailsSectionTitle title="Similares" />
      <MoviesList movies={movies} loading={loading} />
    </View>
  );
};
