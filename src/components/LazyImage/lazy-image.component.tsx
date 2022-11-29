import {COLORS} from '@constants';
import {FC} from 'react';
import {Animated, ImageProps, StyleSheet, View} from 'react-native';

interface LazyImageProps extends ImageProps {
  source: {uri: string};
  progresive?: boolean;
  thumbnailSource?: {uri: string};
}

export const LazyImage: FC<LazyImageProps> = ({thumbnailSource, source, progresive, ...props}) => {
  const thumbnailAnimated = new Animated.Value(0);
  const imageAnimated = new Animated.Value(0);

  const handleThumbnailLoad = () => {
    Animated.timing(thumbnailAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const onImageLoad = () => {
    Animated.timing(imageAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View style={[styles.container, props.style]}>
      {progresive ? (
        <Animated.Image
          {...props}
          source={thumbnailSource}
          style={[props.style, {opacity: thumbnailAnimated}]}
          onLoad={handleThumbnailLoad}
          blurRadius={1}
        />
      ) : null}
      <Animated.Image
        {...props}
        source={source}
        style={[styles.imageOverlay, {opacity: imageAnimated}, props.style]}
        onLoad={onImageLoad}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  container: {
    backgroundColor: COLORS.skeletonBackgroundColor,
    overflow: 'hidden',
  },
});
