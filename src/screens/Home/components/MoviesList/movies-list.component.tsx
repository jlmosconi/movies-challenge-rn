import {Movie} from '@models';
import {FC} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {MoviesListItem} from './MoviesListItem/movies-list-item.component';
import {MoviesListSkeleton} from './MoviesListSkeleton/movies-list-skeleton.component';

interface MoviesListProps {
  movies: Movie[];
  loading: boolean;
}

export const MoviesList: FC<MoviesListProps> = ({movies, loading}) => {
  return (
    <View style={styles.list}>
      {loading ? (
        <MoviesListSkeleton />
      ) : (
        <FlatList
          horizontal={true}
          data={movies}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}: {item: Movie}) => <MoviesListItem id={item.id} poster_path={item.poster_path} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 10,
    marginBottom: 20,
  },
});
