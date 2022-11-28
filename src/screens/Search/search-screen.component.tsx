import {AppText} from '@components';
import {COLORS} from '@constants';
import {FC} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SearchInput} from './components/SearchInput/search-input.component';
import {SearchResult} from './components/SearchResult/search-result.component';

export const SearchScreen: FC = () => {
  return (
    <SafeAreaView edges={['top']} style={styles.bg}>
      <ScrollView stickyHeaderIndices={[2]} showsVerticalScrollIndicator={false}>
        <AppText style={styles.title} textType="bold">
          Buscar
        </AppText>
        <AppText style={styles.subtitle} textType="bold">
          Buscar películas por nombre, por género, por año, por director, por actores, etc.
        </AppText>
        <SearchInput />
        <SearchResult />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: COLORS.dark,
    flex: 1,
    paddingHorizontal: 10,
  },
  container: {
    paddingHorizontal: 10,
  },
  title: {
    marginTop: 20,
    marginBottom: 5,
    fontSize: 35,
  },
  subtitle: {
    fontSize: 13,
    lineHeight: 20,
  },
});
