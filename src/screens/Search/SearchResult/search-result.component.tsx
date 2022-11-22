import {AppText} from '@components';
import {COLORS, ROUTE_NAMES} from '@constants';
import {useAppSelector} from '@hooks';
import {Movie} from '@models';
import {navigateService} from '@services';
import {FC} from 'react';
import {FlatList, StyleSheet, View, Image, Dimensions, Text, TouchableOpacity} from 'react-native';

export const SearchResult: FC = () => {
  const {movies, loading} = useAppSelector(state => state.movies.searchMovies);

  return loading ? (
    <AppText>Cargando...</AppText>
  ) : movies && movies.length > 0 ? (
    <FlatList data={movies} keyExtractor={item => item.id.toString()} renderItem={({item}) => <MovieCard movie={item} />} />
  ) : (
    <AppText>No se encontraron resultados</AppText>
  );
};

export const MovieCard: FC<{movie: Movie}> = ({movie}) => {
  return (
    <TouchableOpacity onPress={() => navigateService.push(ROUTE_NAMES.movieDetails, {movieId: movie.id}, movie.id)} style={style.card}>
      <Image source={{uri: `https://image.tmdb.org/t/p/w370_and_h556_bestv2${movie.poster_path}`}} style={style.image} />
      <View style={style.info}>
        <AppText style={style.title} textType="bold">
          {movie.title}
        </AppText>
        <AppText style={style.originalTitle} textType="bold">
          {movie.original_title}
        </AppText>
        <AppText style={style.releaseDate} textType="bold">
          {movie.release_date}
        </AppText>
        <AppText style={style.year} numberOfLines={4} ellipsizeMode={'tail'}>
          {movie.overview}
        </AppText>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
    backgroundColor: COLORS.darkLight,
    borderRadius: 5,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 5,
  },
  info: {
    marginLeft: 10,
    width: Dimensions.get('window').width - 150,
  },
  title: {
    fontSize: 16,
    marginBottom: 4,
  },
  originalTitle: {
    fontSize: 13,
    marginBottom: 4,
    opacity: 0.8,
  },
  releaseDate: {
    fontSize: 11,
    opacity: 0.6,
    marginBottom: 10,
  },
  year: {
    fontSize: 12,
    lineHeight: 17,
  },
});
