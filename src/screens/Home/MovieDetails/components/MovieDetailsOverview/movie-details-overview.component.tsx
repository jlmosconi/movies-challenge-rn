import {AppText} from '@components';
import {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {MovieDetailsSectionTitle} from '../MovieDetailsSectionTitle/movie-details-section-title.component';

interface MovieDetailsOverviewProps {
  overview: string;
}

export const MovieDetailsOverview: FC<MovieDetailsOverviewProps> = ({overview}) => {
  return (
    <View style={styles.container}>
      <MovieDetailsSectionTitle title="Sinopsis" />
      <AppText style={styles.overview}>{overview}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  overview: {
    fontSize: 12,
    lineHeight: 17,
  },
});
