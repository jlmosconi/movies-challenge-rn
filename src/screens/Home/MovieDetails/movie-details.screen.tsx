import {AppText} from '@components';
import {useAppDispatch} from '@hooks';
import {navigateService} from '@services';
import {getMovieDetails} from '@store/movies/movies.actions';
import {FC, useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const MovieDetailsScreen: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const {movieId} = navigateService.getParams();
    dispatch(getMovieDetails({movieId}));
  }, [dispatch]);

  return (
    <SafeAreaView edges={['bottom']}>
      <ScrollView>
        <View style={style.container}>
          <AppText>asdasd</AppText>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});
