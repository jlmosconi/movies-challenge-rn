import {COLORS} from '@constants';
import {FC} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export const MoviesDetailsSkeleton: FC = () => {
  return (
    <FlatList
      horizontal={true}
      data={Array.from(Array(5).keys())}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      renderItem={() => {
        return (
          <SkeletonPlaceholder backgroundColor={COLORS.skeletonBackgroundColor} highlightColor={COLORS.skeletonHighlightColor}>
            <SkeletonPlaceholder.Item style={[styles.imageBackground]} width={80} height={110} borderRadius={5} />
          </SkeletonPlaceholder>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    height: 110,
    width: 80,
    marginRight: 8,
  },
});
