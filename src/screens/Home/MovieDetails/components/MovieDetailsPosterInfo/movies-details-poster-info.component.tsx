import {AppText} from '@components';
import {FC} from 'react';
import {Image, StyleSheet, View} from 'react-native';

interface MoviesDetailsPosterInfoProps {
  title: string;
  releaseDate: string;
  posterPath: string;
}

export const MoviesDetailsPosterInfo: FC<MoviesDetailsPosterInfoProps> = ({posterPath, title, releaseDate}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: `https://image.tmdb.org/t/p/w370_and_h556_bestv2${posterPath}`}} style={styles.image} />
      <View>
        <AppText textType="bold" style={styles.title}>
          {title}
        </AppText>
        <AppText textType="bold" style={styles.releaseDate}>
          Lanzamiento: {releaseDate}
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
    marginBottom: 26,
  },
  image: {
    width: 100,
    height: 140,
    borderRadius: 5,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 4,
  },
  releaseDate: {
    fontSize: 11,
    opacity: 0.7,
  },
});
