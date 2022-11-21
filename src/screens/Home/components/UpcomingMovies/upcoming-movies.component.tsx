import {AppText} from '@components';
import {useAppDispatch, useAppSelector} from '@hooks';
import {Movie} from '@models';
import {getUpcomingMovies} from '@store/movies/movies.actions';
import {FC, useEffect, useRef} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
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
      <LinearGradient
        colors={['rgba(18, 18, 18, .5)', 'rgba(18, 18, 18, .4)', 'rgba(18, 18, 18, 0)']}
        style={[styles.linearGradientTop, {height: insets.top + 30}]}
      />
      <LinearGradient
        colors={['rgba(18, 18, 18, 0)', 'rgba(18, 18, 18, .6)', 'rgba(18, 18, 18, 1)', 'rgba(18, 18, 18, 1)']}
        style={[styles.linearGradient]}
      />
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
  linearGradientTop: {
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 1,
  },
  linearGradient: {
    position: 'absolute',
    height: 50,
    bottom: 0,
    width: '100%',
    zIndex: 1,
  },
});
