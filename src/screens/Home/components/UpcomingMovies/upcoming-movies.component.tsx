import {AppText} from '@components';
import {useAppDispatch, useAppSelector} from '@hooks';
import {Movie} from '@models';
import {getUpcomingMovies} from '@store/movies/movies.actions';
import {FC, useEffect, useRef} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Carousel from 'react-native-new-snap-carousel';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {UpcomingMoviesItem} from './UpcomingMoviesItem/upcoming-movies-item.component';

const {width: screenWidth} = Dimensions.get('window');
const height = screenWidth * 1.45;

export const UpcomingMovies: FC = () => {
  const dispatch = useAppDispatch();
  const insets = useSafeAreaInsets();
  const {loading, movies} = useAppSelector(state => state.movies.upcomingMovies);
  const carouselRef = useRef(null);

  useEffect(() => {
    dispatch(getUpcomingMovies());
  }, [dispatch]);

  return loading ? (
    <SkeletonPlaceholder borderRadius={4} backgroundColor="#282828" highlightColor="#181818">
      <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" width={screenWidth} height={height}>
        <SkeletonPlaceholder.Item width={screenWidth} height={height} />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  ) : (
    <View>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth}
        data={movies}
        renderItem={({item}: {item: Movie}, parallaxProps: AdditionalParallaxProps | undefined) =>
          UpcomingMoviesItem({item, parallaxProps, insets})
        }
        hasParallaxImages={true}
      />
      <View style={[styles.upcomingTitleContainer, {paddingTop: insets.top + 4}]}>
        <AppText textType="bold" style={styles.upcomingTitle}>
          Próximos estrenos
        </AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  upcomingTitleContainer: {
    position: 'absolute',
    paddingHorizontal: 10,
    zIndex: 1,
  },
  upcomingTitle: {
    fontSize: 14,
    opacity: 0.8,
  },
});
