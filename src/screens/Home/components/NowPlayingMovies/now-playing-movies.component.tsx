import {useAppDispatch, useAppSelector} from '@hooks';
import {getNowPlayingMovies} from '@store/movies/movies.actions';
import {FC, useEffect, useRef} from 'react';
import {Dimensions, View, Image, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-new-snap-carousel';
import {Movie} from '@models';
import {MoviesListTitle} from '../MoviesListTitle/movies-list-title.component';

const {width: viewportWidth} = Dimensions.get('window');
const SLIDE_WIDTH = Math.round(viewportWidth / 5.5);
const ITEM_HORIZONTAL_MARGIN = 15;
const ITEM_WIDTH = SLIDE_WIDTH + ITEM_HORIZONTAL_MARGIN * 2;
const SLIDER_WIDTH = viewportWidth;

export const NowPlayingMovies: FC = () => {
  const dispatch = useAppDispatch();
  const insets = useSafeAreaInsets();
  const {loading, movies} = useAppSelector(state => state.movies.nowPlayingMovies);
  const carouselRef = useRef(null);

  useEffect(() => {
    dispatch(getNowPlayingMovies());
  }, [dispatch]);

  const _renderItem = ({item}: {item: Movie}) => {
    return (
      <View>
        <Image
          source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
          style={{height: 150, width: ITEM_WIDTH, borderRadius: 5}}
        />
      </View>
    );
  };

  return (
    <View>
      <View style={styles.container}>
        <MoviesListTitle title="Proyectándose ahora" />
      </View>
      <Carousel
        ref={carouselRef}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH + 8}
        activeSlideAlignment={'start'}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        margin={10}
        enableSnap={false}
        data={movies}
        renderItem={({item}: {item: Movie}) => _renderItem({item})}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});
