import {LazyImage} from '@components';
import {IMAGE_BASE_URL} from '@constants';
import {PosterSize} from '@models';
import {FC, useState} from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const filmUri = Image.resolveAssetSource(require('@assets/images/film.png')).uri;

interface MovieDetailsBackdropProps {
  backdropPath: string;
}

const {width: screenWidth} = Dimensions.get('window');
const height = screenWidth * 0.7;

export const MovieDetailsBackdrop: FC<MovieDetailsBackdropProps> = ({backdropPath}) => {
  const [loadError, setLoadError] = useState<boolean>(false);
  return (
    <View style={styles.backdropContainer}>
      <LazyImage
        source={{uri: loadError ? filmUri : `${IMAGE_BASE_URL}${PosterSize.w1280}${backdropPath}`}}
        style={[{height}]}
        resizeMode={loadError ? 'center' : 'cover'}
        onError={() => setLoadError(true)}
      />
      <LinearGradient colors={['rgba(18, 18, 18, 0)', 'rgba(18, 18, 18, .6)', 'rgba(18, 18, 18, 1)']} style={styles.linearGradient} />
    </View>
  );
};

const styles = StyleSheet.create({
  backdropContainer: {
    position: 'relative',
  },
  imageOverlay: {
    opacity: 0.5,
    backgroundColor: '#000000',
  },
  linearGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: height * 0.3,
  },
});
