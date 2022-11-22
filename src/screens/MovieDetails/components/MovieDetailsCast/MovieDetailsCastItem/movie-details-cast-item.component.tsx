import {AppText} from '@components';
import {Cast} from '@models';
import {useState} from 'react';
import {FC} from 'react';
import {StyleSheet, ImageBackground, View, Image} from 'react-native';
const maleUri = Image.resolveAssetSource(require('@assets/images/male.png')).uri;
const femaleUri = Image.resolveAssetSource(require('@assets/images/female.png')).uri;

interface MovieDetailsCastItemProps {
  cast: Cast;
}

export const MovieDetailsCastItem: FC<MovieDetailsCastItemProps> = ({cast}) => {
  const [loadError, setLoadError] = useState<boolean>(false);

  return (
    <ImageBackground
      style={styles.imageBackground}
      borderRadius={5}
      resizeMode={loadError ? 'center' : 'cover'}
      imageStyle={loadError ? styles.imageOverlayError : styles.imageOverlay}
      onError={() => {
        setLoadError(true);
      }}
      source={{
        uri: loadError ? (cast.gender === 1 ? maleUri : femaleUri) : `https://image.tmdb.org/t/p/w500${cast.profile_path}`,
      }}>
      <View style={styles.textContainer}>
        <AppText textType="bold" style={styles.name}>
          {cast.name}
        </AppText>
        <AppText textType="bold" style={styles.character}>
          {cast.character}
        </AppText>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    height: 110,
    width: 80,
    marginRight: 8,
  },
  imageOverlay: {
    opacity: 0.5,
    backgroundColor: '#000000',
  },
  imageOverlayError: {
    opacity: 0.4,
    backgroundColor: '#ffffff',
  },
  textContainer: {
    display: 'flex',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: 5,
  },
  name: {
    fontSize: 11,
    opacity: 0.9,
    marginBottom: 2,
  },
  character: {
    fontSize: 10,
    opacity: 0.65,
  },
});
