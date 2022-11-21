import {AppText} from '@components';
import {COLORS} from '@constants';
import {Genre} from '@models';
import {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface MovieDetailInfoProps {
  genres: Genre[];
  runtime: string;
}

export const MovieDetailInfo: FC<MovieDetailInfoProps> = ({genres, runtime}) => {
  return (
    <View style={styles.container}>
      <View style={styles.runtimeContainer}>
        <Icon name={'clock-time-three-outline'} style={styles.runtimeIcon} size={14} />
        <AppText textType="bold" style={styles.runtimeText}>
          {runtime}
        </AppText>
      </View>
      <View style={styles.genresContainer}>
        {genres &&
          genres.map(genre => (
            <View key={genre.id} style={styles.genre}>
              <AppText textType="bold" style={styles.genreText}>
                {genre.name}
              </AppText>
            </View>
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  runtimeContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  runtimeIcon: {
    marginRight: 5,
    color: COLORS.white,
  },
  runtimeText: {
    fontSize: 12,
  },
  genresContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  genre: {
    backgroundColor: COLORS.skeletonBackgroundColor,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 8,
    marginRight: 5,
  },
  genreText: {
    fontSize: 11,
    color: COLORS.white,
  },
});
