import {AppText} from '@components';
import {MoviesPoster} from '@screens/Home/components/MoviesList/MoviesPoster/movies-poster.component';
import {FC} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';

interface MoviesDetailsPosterInfoProps {
  title: string;
  originalTitle: string;
  releaseDate: string;
  posterPath: string;
}

export const MoviesDetailsPosterInfo: FC<MoviesDetailsPosterInfoProps> = ({posterPath, title, originalTitle, releaseDate}) => {
  return (
    <View style={styles.container}>
      <MoviesPoster poster={posterPath} style={styles.image} progresive={true} />
      <View>
        <AppText textType="bold" style={styles.title}>
          {title}
        </AppText>
        {title !== originalTitle ? (
          <>
            <AppText numberOfLines={2} textType="bold" style={styles.originalTitle}>
              {originalTitle}
            </AppText>
          </>
        ) : null}
        <AppText textType="bold" style={styles.releaseDate}>
          {releaseDate}
        </AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: Dimensions.get('window').width - 130,
    marginTop: -110,
    marginBottom: 24,
  },
  image: {
    width: 100,
    height: 140,
    borderRadius: 5,
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 4,
  },
  originalTitle: {
    fontSize: 14,
    marginBottom: 4,
    opacity: 0.8,
  },
  releaseDate: {
    fontSize: 11,
    opacity: 0.6,
  },
});
