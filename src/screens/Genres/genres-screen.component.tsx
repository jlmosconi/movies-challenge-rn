import {COLORS} from '@constants';
import {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GenresList} from './GenresList/genres-list.component';

export const GenresScreen: FC = () => {
  return (
    <SafeAreaView edges={['top']} style={styles.bg}>
      <View style={styles.container}>
        <GenresList />
      </View>
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
});
