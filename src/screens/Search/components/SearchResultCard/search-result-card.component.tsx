import {AppText} from '@components';
import {COLORS, MOVIES_LIST, ROUTE_NAMES} from '@constants';
import {Movie} from '@models';
import {navigateService} from '@services';
import {FC, useState} from 'react';
import {Dimensions, StyleSheet, TouchableOpacity, View, Image, ImageBackground} from 'react-native';
const filmUri = Image.resolveAssetSource(require('@assets/images/film.png')).uri;

export const SearchResultCard: FC<{movie: Movie}> = ({movie}) => {
  const [loadError, setLoadError] = useState<boolean>(false);
  return (
    <TouchableOpacity onPress={() => navigateService.push(ROUTE_NAMES.movieDetails, {movieId: movie.id}, movie.id)} style={styles.card}>
      <ImageBackground
        style={styles.imageBackground}
        borderRadius={MOVIES_LIST.itemBorderRadius}
        resizeMode={loadError ? 'center' : 'cover'}
        imageStyle={loadError ? styles.imageOverlayError : null}
        onError={() => setLoadError(true)}
        source={{
          uri: loadError ? filmUri : `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        }}
      />
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
