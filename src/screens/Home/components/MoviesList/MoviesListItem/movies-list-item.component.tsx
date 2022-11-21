import {Movie} from '@models';
import {FC} from 'react';
import {View, Image, StyleSheet} from 'react-native';

interface MoviesListItemProps {
  item: Movie;
  itemWidth: number;
}

export const MoviesListItem: FC<MoviesListItemProps> = ({item, itemWidth}) => {
  return (
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
    height: 140,
    borderRadius: 5,
  },
});
