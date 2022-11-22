import {FC} from 'react';
import {Dimensions, ImageBackground, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface MovieDetailsBackdropProps {
  backdropPath: string;
}

const {width: screenWidth} = Dimensions.get('window');
const height = screenWidth * 0.7;

export const MovieDetailsBackdrop: FC<MovieDetailsBackdropProps> = ({backdropPath}) => {
  return (
    <View style={styles.backdropContainer}>
      <ImageBackground
        style={[styles.image, {height}]}
        source={{
          uri: `https://image.tmdb.org/t/p/w1000_and_h563_face${backdropPath}`,
        }}
        resizeMode="cover"
        imageStyle={styles.imageOverlay}
      />
      <LinearGradient colors={['rgba(18, 18, 18, 0)', 'rgba(18, 18, 18, .6)', 'rgba(18, 18, 18, 1)']} style={styles.linearGradient} />
    </View>
  );
};

const styles = StyleSheet.create({
  backdropContainer: {
    position: 'relative',
  },
  image: {
    flex: 1,
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
