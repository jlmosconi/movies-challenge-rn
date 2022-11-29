import {PosterSize} from '@models';
import {MoviesPoster} from '@screens/Home/components/MoviesList/MoviesPoster/movies-poster.component';
import {FC} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface MovieDetailsBackdropProps {
  backdropPath: string;
}

const {width: screenWidth} = Dimensions.get('window');
const height = screenWidth * 0.7;

export const MovieDetailsBackdrop: FC<MovieDetailsBackdropProps> = ({backdropPath}) => {
  return (
    <View style={styles.backdropContainer}>
      <MoviesPoster poster={backdropPath} progresive={true} posterSize={PosterSize.w1280} style={[{height}]} />
      <LinearGradient colors={['rgba(18, 18, 18, .5)', 'rgba(18, 18, 18, .6)', 'rgba(18, 18, 18, 1)']} style={styles.linearGradient} />
    </View>
  );
};

const styles = StyleSheet.create({
  backdropContainer: {
    position: 'relative',
  },
  linearGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: height,
  },
});
