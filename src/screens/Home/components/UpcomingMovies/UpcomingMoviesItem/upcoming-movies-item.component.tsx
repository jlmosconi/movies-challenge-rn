import {AppText} from '@components';
import {ROUTE_NAMES} from '@constants';
import {Movie} from '@models';
import {navigateService} from '@services';
import {FC} from 'react';
import {Dimensions, Platform, Pressable, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
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
    <Pressable style={styles.item} onPress={() => navigateService.push(ROUTE_NAMES.movieDetails, {movieId: item.id})}>
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
      <LinearGradient
        colors={['rgba(18, 18, 18, .5)', 'rgba(18, 18, 18, .4)', 'rgba(18, 18, 18, .5)', 'rgba(18, 18, 18, 0)']}
        style={[styles.linearGradientTop, {height: insets.top + insets.top * 1.05}]}
      />
      <LinearGradient
        colors={['rgba(18, 18, 18, 0)', 'rgba(18, 18, 18, .6)', 'rgba(18, 18, 18, 1)', 'rgba(18, 18, 18, 1)']}
        style={styles.linearGradient}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    width: screenWidth,
    height,
  },
  releaseTextWrapper: {
    position: 'absolute',
    // bottom: 30,
    paddingHorizontal: 10,
    width: '100%',
    alignItems: 'flex-end',
    zIndex: 2,
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
  linearGradientTop: {
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 1,
  },
  linearGradient: {
    position: 'absolute',
    height: 100,
    bottom: 0,
    width: '100%',
    zIndex: 1,
  },
});
