import {Button} from '@components';
import {COLORS, ROUTE_NAMES} from '@constants';
import {useAppDispatch} from '@hooks';
import {navigateService} from '@services';
import {logout} from '@store/auth/auth.actions';
import {FC} from 'react';
import {RefreshControl, ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const ProfileScreen: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <SafeAreaView edges={['top']} style={styles.bg}>
      <ScrollView refreshControl={<RefreshControl refreshing={false} onRefresh={() => {}} />}>
        <View style={styles.container}>
          <Button title="Logout" onPress={() => dispatch(logout())} />
          <Button title="Ir a Generos" onPress={() => navigateService.navigate(ROUTE_NAMES.genres)} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: COLORS.dark,
    flex: 1,
  },
  container: {
    paddingHorizontal: 10,
  },
});
