import {COLORS, MOVIES_LIST, ROUTE_NAMES} from '@constants';
import {navigateService} from '@services';
import {FC, useState} from 'react';
import {Image, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
const filmUri = Image.resolveAssetSource(require('@assets/images/film.png')).uri;

interface MoviesListItemProps {
  id: number;
  poster_path: string | null;
}

export const MoviesListItem: FC<MoviesListItemProps> = ({id, poster_path}) => {
  const [loadError, setLoadError] = useState<boolean>(false);

  return (
    <TouchableOpacity onPress={() => navigateService.push(ROUTE_NAMES.movieDetails, {movieId: id}, id)}>
      <ImageBackground
        style={styles.imageBackground}
        borderRadius={MOVIES_LIST.itemBorderRadius}
        resizeMode={loadError ? 'center' : 'cover'}
        imageStyle={loadError ? styles.imageOverlayError : null}
        onError={() => setLoadError(true)}
        source={{
          uri: loadError ? filmUri : `https://image.tmdb.org/t/p/w500${poster_path}`,
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    height: MOVIES_LIST.itemHeight,
    width: MOVIES_LIST.itemWidth,
    marginRight: MOVIES_LIST.itemMarginRight,
  },
  imageOverlayError: {
    opacity: 0.7,
    backgroundColor: COLORS.white,
  },
});
