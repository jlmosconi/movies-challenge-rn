import {AppText} from '@components';
import {COLORS} from '@constants';
import {AppGenre} from '@models';
import {FC} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface GenresItemComponentProps {
  item: AppGenre;
}

export const GenresItemComponent: FC<GenresItemComponentProps> = ({item}) => {
  return (
    <View style={styles.box}>
      <Icon name={item.icon || 'movie'} size={50} color={COLORS.white} style={styles.icon} />
      <AppText textType="bold" style={styles.name}>
        {item.name}
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').width / 3,
    backgroundColor: COLORS.skeletonBackgroundColor,
    borderRadius: 5,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  icon: {
    opacity: 0.5,
    marginBottom: 10,
  },
  name: {
    opacity: 0.9,
  },
});
