import {AppText} from '@components';
import {COLORS} from '@constants';
import {FC} from 'react';
import {RefreshControl, ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SearchInput} from './SearchInput/search-input.component';
import {SearchResult} from './SearchResult/search-result.component';

export const SearchScreen: FC = () => {
  return (
    <SafeAreaView edges={['top']} style={styles.bg}>
      <ScrollView refreshControl={<RefreshControl refreshing={false} onRefresh={() => {}} needsOffscreenAlphaCompositing={true} />}>
        <View style={styles.container}>
          <AppText style={styles.title} textType="bold">
            Buscar
          </AppText>
          <AppText style={styles.subtitle} textType="bold">
            Buscar películas por nombre, por género, por año, por director, por actores, etc.
          </AppText>

          <SearchInput />
          <SearchResult />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: COLORS.dark,
    flex: 1,
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
    marginBottom: 20,
  },
});
