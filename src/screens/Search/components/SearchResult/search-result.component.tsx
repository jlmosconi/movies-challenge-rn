import {AppText} from '@components';
import {useAppSelector} from '@hooks';
import {FC} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
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

  return <>{movies && movies.map(movie => <SearchResultCard key={movie.id} movie={movie} />)}</>;
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
