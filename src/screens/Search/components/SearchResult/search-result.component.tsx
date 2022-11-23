import {AppText} from '@components';
import {useAppSelector} from '@hooks';
import {FC} from 'react';
import {StyleSheet, ActivityIndicator, FlatList, View} from 'react-native';
import {SearchResultCard} from '../SearchResultCard/search-result-card.component';

export const SearchResult: FC = () => {
  const {movies, loading} = useAppSelector(state => state.movies.searchMovies);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator />
      </View>
    );
  }

  if (movies && movies.length === 0) {
    return <AppText style={styles.notResults}>No se encontraron resultados.</AppText>;
  }

  return <FlatList data={movies} keyExtractor={item => item.id.toString()} renderItem={({item}) => <SearchResultCard movie={item} />} />;
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  notResults: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
  },
});
