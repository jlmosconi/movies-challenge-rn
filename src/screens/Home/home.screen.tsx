import {Button} from '@components';
import {useAppDispatch} from '@hooks';
import {logout} from '@store/auth/auth.actions';
import {FC} from 'react';
import {View} from 'react-native';
import {UpcomingMovies} from './components/UpcomingMovies/upcoming-movies.component';

export const HomeScreen: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <View>
      <UpcomingMovies />
      <Button title="Logout" onPress={() => dispatch(logout())} />
    </View>
  );
};
