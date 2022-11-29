import {AppText, LazyImage} from '@components';
import {COLORS, IMAGE_BASE_URL} from '@constants';
import {Cast, PosterSize} from '@models';
import {FC, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';

const maleUri = Image.resolveAssetSource(require('@assets/images/male.png')).uri;
const femaleUri = Image.resolveAssetSource(require('@assets/images/female.png')).uri;

interface MovieDetailsCastItemProps {
  cast: Cast;
}

export const MovieDetailsCastItem: FC<MovieDetailsCastItemProps> = ({cast}) => {
  const [loadError, setLoadError] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <LazyImage
        progresive={true}
        thumbnailSource={{uri: `${IMAGE_BASE_URL}${PosterSize.w45}${cast.profile_path}`}}
        source={{uri: loadError ? (cast.gender === 1 ? maleUri : femaleUri) : `${IMAGE_BASE_URL}${PosterSize.w300}${cast.profile_path}`}}
        style={styles.imageBackground}
        resizeMode={loadError ? 'center' : 'cover'}
        onError={() => setLoadError(true)}
      />
      <View style={styles.textContainer}>
        <AppText textType="bold" style={styles.name}>
          {cast.name}
        </AppText>
        <AppText textType="bold" style={styles.character}>
          {cast.character}
        </AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 110,
    width: 80,
    marginRight: 8,
    backgroundColor: COLORS.skeletonBackgroundColor,
    borderRadius: 5,
    overflow: 'hidden',
  },
  imageBackground: {
    height: 110,
    width: 80,
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 5,
    zIndex: 1,
  },
  textContainer: {
    display: 'flex',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 5,
    zIndex: 2,
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
