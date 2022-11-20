import {AppText} from '@components';
import {Movie} from '@models';
import {FC} from 'react';
import {Dimensions, Platform, StyleSheet, View} from 'react-native';
import {AdditionalParallaxProps, ParallaxImage} from 'react-native-new-snap-carousel';
import {EdgeInsets} from 'react-native-safe-area-context';

const {width: screenWidth} = Dimensions.get('window');

interface UpcomingMoviesItemComponentProps {
  item: Movie;
  index: number;
  parallaxProps: AdditionalParallaxProps | undefined;
  insets: EdgeInsets;
}

export const UpcomingMoviesItem: FC<UpcomingMoviesItemComponentProps> = ({item, index, parallaxProps, insets}) => {
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
        <View style={styles.releaseTextContainer}>
          <AppText style={styles.releaseText}>Fecha de lanzamiento</AppText>
          <AppText style={styles.releaseText} textType="bold">
            {item.release_date}
          </AppText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    position: 'relative',
    width: screenWidth,
    height: screenWidth * 1.45,
  },
  releaseTextWrapper: {
    position: 'absolute',
    paddingHorizontal: 10,
    width: '100%',
  },
  releaseTextContainer: {
    position: 'absolute',
    right: 10,
    alignItems: 'flex-end',
  },
  releaseText: {
    fontSize: 12,
    opacity: 0.8,
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
