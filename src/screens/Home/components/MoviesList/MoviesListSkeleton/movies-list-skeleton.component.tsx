import {COLORS, MOVIES_LIST} from '@constants';
import {FC} from 'react';
import {FlatList} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export const MoviesListSkeleton: FC = () => {
  return (
    <FlatList
      horizontal={true}
      data={Array.from(Array(4).keys())}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      renderItem={() => (
        <SkeletonPlaceholder backgroundColor={COLORS.skeletonBackgroundColor} highlightColor={COLORS.skeletonHighlightColor}>
          <SkeletonPlaceholder.Item
            width={MOVIES_LIST.itemWidth}
            height={MOVIES_LIST.itemHeight}
            marginRight={MOVIES_LIST.itemMarginRight}
            borderRadius={MOVIES_LIST.itemBorderRadius}
          />
        </SkeletonPlaceholder>
      )}
    />
  );
};
