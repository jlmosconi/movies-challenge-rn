import {COLORS, ROUTE_NAMES} from '@constants';
import {Movie} from '@models';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {navigateService} from '@services';
import {FC} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

interface MoviesListItemProps {
  item: Movie;
  itemWidth: number;
  loading: boolean;
}

const height = 140;
const borderRadius = 5;

export const MoviesListItem: FC<MoviesListItemProps> = ({item, itemWidth, loading}) => {
  return loading ? (
    <SkeletonPlaceholder backgroundColor={COLORS.skeletonBackgroundColor} highlightColor={COLORS.skeletonHighlightColor}>
      <SkeletonPlaceholder.Item style={[styles.image, {width: itemWidth}]} width={itemWidth} height={height} borderRadius={borderRadius} />
    </SkeletonPlaceholder>
  ) : (
    <TouchableOpacity onPress={() => navigateService.push(ROUTE_NAMES.movieDetails, {movieId: item.id}, item.id)}>
      <Image
        source={{uri: `https://image.tmdb.org/t/p/w370_and_h556_bestv2${item.poster_path}`}}
        style={[styles.image, {width: itemWidth}]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    height,
    borderRadius,
  },
});
