import {COLORS} from '@constants';
import {Movie} from '@models';
import {FC} from 'react';
import {View, Image, StyleSheet} from 'react-native';
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
    <View>
      <Image
        source={{uri: `https://image.tmdb.org/t/p/w370_and_h556_bestv2${item.poster_path}`}}
        style={[styles.image, {width: itemWidth}]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height,
    borderRadius,
  },
});
