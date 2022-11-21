import {AppText} from '@components';
import {Movie} from '@models';
import {FC} from 'react';
import {Dimensions, Platform, StyleSheet, View} from 'react-native';
import {ParallaxImage} from 'react-native-new-snap-carousel';
import {EdgeInsets} from 'react-native-safe-area-context';

const {width: screenWidth} = Dimensions.get('window');
const height = screenWidth * 1.45;

interface UpcomingMoviesItemComponentProps {
  item: Movie;
  parallaxProps: AdditionalParallaxProps | undefined;
  insets: EdgeInsets;
}

export const UpcomingMoviesItem: FC<UpcomingMoviesItemComponentProps> = ({item, parallaxProps, insets}) => {
  return (
    <View style={styles.item}>
      <ParallaxImage
        source={{uri: 'https://www.themoviedb.org/t/p/original' + item.poster_path || ''}}
        containerStyle={styles.imageContainer}
        style={styles.image}
        parallaxFactor={0.05}
        spinnerColor="rgba(255,255,255,0.25)"
        fadeDuration={2000}
        {...parallaxProps}
      />
      <View style={[styles.releaseTextWrapper, {marginTop: insets.top}]}>
        <AppText style={styles.releaseText}>Fecha de lanzamiento</AppText>
        <AppText style={styles.releaseText} textType="bold">
          {item.release_date}
        </AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: screenWidth,
    height,
  },
  releaseTextWrapper: {
    position: 'absolute',
    paddingHorizontal: 10,
    width: '100%',
    alignItems: 'flex-end',
  },
  releaseText: {
    fontSize: 12,
    opacity: 0.9,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});
