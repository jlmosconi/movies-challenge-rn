import {LazyImage} from '@components';
import {IMAGE_BASE_URL} from '@constants';
import {PosterSize, PosterSizes} from '@models';
import {FC, useState} from 'react';
import {Image, ImageProps} from 'react-native';
const filmUri = Image.resolveAssetSource(require('@assets/images/film.png')).uri;

interface MoviesPosterProps extends ImageProps {
  progresive?: boolean;
  poster: string | null;
  posterSize?: PosterSizes;
}

export const MoviesPoster: FC<MoviesPosterProps> = ({poster, progresive, posterSize = PosterSize.w342, ...props}) => {
  const [loadError, setLoadError] = useState<boolean>(false);
  return (
    <LazyImage
      progresive={progresive}
      thumbnailSource={{uri: `${IMAGE_BASE_URL}${PosterSize.w45}${poster}`}}
      source={{uri: loadError ? filmUri : `${IMAGE_BASE_URL}${posterSize}${poster}`}}
      style={props.style}
      resizeMode={loadError ? 'center' : 'cover'}
      onError={() => setLoadError(true)}
    />
  );
};
