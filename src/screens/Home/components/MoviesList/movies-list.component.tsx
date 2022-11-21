import {Movie} from '@models';
import {FC} from 'react';
import {Dimensions} from 'react-native';
import Carousel from 'react-native-new-snap-carousel';
import {MoviesListItem} from './MoviesListItem/movies-list-item.component';

interface MoviesListProps {
  movies: Movie[];
  loading: boolean;
}

const {width: viewportWidth} = Dimensions.get('window');
const SLIDE_WIDTH = Math.round(viewportWidth / 5.5);
const ITEM_HORIZONTAL_MARGIN = 15;
const ITEM_WIDTH = SLIDE_WIDTH + ITEM_HORIZONTAL_MARGIN * 2;
const SLIDER_WIDTH = viewportWidth;

export const MoviesList: FC<MoviesListProps> = ({movies, loading}) => {
  return (
    <Carousel
      sliderWidth={SLIDER_WIDTH}
      itemWidth={ITEM_WIDTH + 8}
      activeSlideAlignment={'start'}
      inactiveSlideScale={1}
      inactiveSlideOpacity={1}
      marginTop={10}
      marginBottom={20}
      enableSnap={false}
      data={!loading ? movies : Array.from(Array(5).keys())}
      renderItem={({item}: {item: Movie}) => MoviesListItem({item, itemWidth: ITEM_WIDTH, loading})}
    />
  );
};
