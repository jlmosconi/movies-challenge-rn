import {AppText} from '@components';
import {FC} from 'react';
import {Image, StyleSheet, View} from 'react-native';

interface MoviesDetailsPosterInfoProps {
  title: string;
  originalTitle: string;
  releaseDate: string;
  posterPath: string;
}

export const MoviesDetailsPosterInfo: FC<MoviesDetailsPosterInfoProps> = ({posterPath, title, originalTitle, releaseDate}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: `https://image.tmdb.org/t/p/w370_and_h556_bestv2${posterPath}`}} style={styles.image} />
      <View>
        <AppText textType="bold" style={styles.title}>
          {title}
        </AppText>
        {title !== originalTitle ? (
          <>
            <AppText textType="bold" style={styles.oroginalTitle}>
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
    width: 300,
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
  oroginalTitle: {
    fontSize: 14,
    marginBottom: 4,
    opacity: 0.8,
  },
  releaseDate: {
    fontSize: 11,
    opacity: 0.6,
  },
});
