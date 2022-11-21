import {useAppDispatch, useAppSelector} from '@hooks';
import {getNowPlayingMovies} from '@store/movies/movies.actions';
import {FC, useEffect} from 'react';
import {View} from 'react-native';
import {MoviesList} from '../MoviesList/movies-list.component';
import {MoviesListTitle} from '../MoviesList/MoviesListTitle/movies-list-title.component';

export const NowPlayingMovies: FC = () => {
  const dispatch = useAppDispatch();
  const {loading, movies} = useAppSelector(state => state.movies.nowPlayingMovies);

  useEffect(() => {
    dispatch(getNowPlayingMovies());
  }, [dispatch]);

  return (
    <View>
      <MoviesListTitle title="Proyectándose Ahora" />
      <MoviesList movies={movies} loading={loading} />
    </View>
  );
};
