import {MOVIES_LIST, ROUTE_NAMES} from '@constants';
import {navigateService} from '@services';
import {FC} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {MoviesPoster} from '../MoviesPoster/movies-poster.component';

interface MoviesListItemProps {
  id: number;
  poster: string | null;
}

export const MoviesListItem: FC<MoviesListItemProps> = ({id, poster}) => {
  return (
    <TouchableOpacity onPress={() => navigateService.push(ROUTE_NAMES.movieDetails, {movieId: id}, id)}>
      <MoviesPoster poster={poster} style={styles.imageBackground} progresive={true} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    height: MOVIES_LIST.itemHeight,
    width: MOVIES_LIST.itemWidth,
    marginRight: MOVIES_LIST.itemMarginRight,
    borderRadius: MOVIES_LIST.itemBorderRadius,
  },
});
