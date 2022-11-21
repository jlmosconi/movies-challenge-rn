import {AppText} from '@components';
import {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {MovieDetailsSectionTitle} from '../MovieDetailsSectionTitle/movie-details-section-title.component';

interface MovieDetailsAboutProps {
  status: string;
  budget: string;
  revenue: string;
}

export const MovieDetailsAbout: FC<MovieDetailsAboutProps> = ({status, budget, revenue}) => {
  return (
    <View style={styles.container}>
      <MovieDetailsSectionTitle title="Información" />
      <View style={styles.item}>
        <AppText style={styles.itemTitle}>Estado: </AppText>
        <AppText textType="bold" style={styles.itemValue}>
          {status}
        </AppText>
      </View>
      <View style={styles.item}>
        <AppText style={styles.itemTitle}>Presupuesto: </AppText>
        <AppText textType="bold" style={styles.itemValue}>
          {budget}
        </AppText>
      </View>
      <View style={styles.item}>
        <AppText style={styles.itemTitle}>Ingresos: </AppText>
        <AppText textType="bold" style={styles.itemValue}>
          {revenue}
        </AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 4,
  },
  itemTitle: {
    fontSize: 12,
    opacity: 0.5,
  },
  itemValue: {
    fontSize: 12,
    opacity: 0.8,
  },
});
