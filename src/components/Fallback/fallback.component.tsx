import {COLORS} from '@constants';
import {FC} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export const Fallback: FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.dark,
  },
});
