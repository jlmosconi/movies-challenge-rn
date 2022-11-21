import {AppText} from '@components';
import {COLORS} from '@constants';
import {FC} from 'react';
import {RefreshControl, ScrollView, StyleSheet} from 'react-native';

export const SearchScreen: FC = () => {
  // const dispatch = useAppDispatch();
  return (
    <ScrollView refreshControl={<RefreshControl refreshing={false} onRefresh={() => {}} />} style={styles.bg}>
      <AppText>Search</AppText>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: COLORS.dark,
  },
  container: {
    paddingHorizontal: 10,
  },
});
