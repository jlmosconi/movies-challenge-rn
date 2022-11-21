import {useAppDispatch, useAppSelector} from '@hooks';
import {getPopularMovies} from '@store/movies/movies.actions';
import {FC, useEffect} from 'react';
import {View} from 'react-native';
import {MoviesList} from '../MoviesList/movies-list.component';
import {MoviesListTitle} from '../MoviesList/MoviesListTitle/movies-list-title.component';

export const PopularMovies: FC = () => {
  const dispatch = useAppDispatch();
  const {loading, movies} = useAppSelector(state => state.movies.popularMovies);

  useEffect(() => {
    dispatch(getPopularMovies());
  }, [dispatch]);

  return (
    <View>
      <MoviesListTitle title="Películas Populares" />
      <MoviesList movies={movies} loading={loading} />
    </View>
  );
};
