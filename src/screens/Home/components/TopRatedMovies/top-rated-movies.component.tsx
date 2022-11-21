import {useAppDispatch, useAppSelector} from '@hooks';
import {getTopRatedMovies} from '@store/movies/movies.actions';
import {FC, useEffect} from 'react';
import {View} from 'react-native';
import {MoviesList} from '../MoviesList/movies-list.component';
import {MoviesListTitle} from '../MoviesList/MoviesListTitle/movies-list-title.component';

export const TopRatedMovies: FC = () => {
  const dispatch = useAppDispatch();
  const {loading, movies} = useAppSelector(state => state.movies.topRatedMovies);

  useEffect(() => {
    dispatch(getTopRatedMovies());
  }, [dispatch]);

  return (
    <View>
      <MoviesListTitle title="Películas Mejores puntuadas" />
      <MoviesList movies={movies} loading={loading} />
    </View>
  );
};
