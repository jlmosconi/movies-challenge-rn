import {AppText} from '@components';
import {COLORS, MOVIES_LIST, ROUTE_NAMES} from '@constants';
import {Movie} from '@models';
import {MoviesPoster} from '@screens/Home/components/MoviesList/MoviesPoster/movies-poster.component';
import {navigateService} from '@services';
import {FC} from 'react';
import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';

export const SearchResultCard: FC<{movie: Movie}> = ({movie}) => {
  return (
    <TouchableOpacity onPress={() => navigateService.push(ROUTE_NAMES.movieDetails, {movieId: movie.id}, movie.id)} style={styles.card}>
      <MoviesPoster poster={movie.poster_path} style={styles.imageBackground} progresive={true} />
      <View style={styles.info}>
        <AppText style={styles.title} textType="bold">
          {movie.title}
        </AppText>
        <AppText style={styles.originalTitle} textType="bold">
          {movie.original_title}
        </AppText>
        <AppText style={styles.releaseDate} textType="bold">
          {movie.release_date}
        </AppText>
        <AppText style={styles.year} numberOfLines={4} ellipsizeMode={'tail'}>
          {movie.overview}
        </AppText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
    backgroundColor: COLORS.darkLight,
    borderRadius: 5,
    marginBottom: 10,
  },
  imageBackground: {
    height: MOVIES_LIST.itemHeight + 10,
    width: MOVIES_LIST.itemWidth,
    borderRadius: MOVIES_LIST.itemBorderRadius,
  },
  imageOverlayError: {
    opacity: 0.7,
    backgroundColor: COLORS.white,
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
