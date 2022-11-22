import {ROUTE_NAMES, COLORS} from '@constants';
import {ActiveLoginGuard} from '@guards';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginBasedView} from '@routes';
import {LoginScreen} from '@screens/Auth/Login/login.screen';
import {MovieDetailsScreen} from '@screens/MovieDetails/movie-details.screen';
import {FC} from 'react';
import {TabNavigator} from './tab.navigator';
import {HeaderBackButton} from '@react-navigation/elements';
import {navigateService} from '@services';

const Stack = createNativeStackNavigator();

export const StackNavigator: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTE_NAMES.home}
      screenOptions={{
        headerShown: true,
        headerTransparent: true,
        headerShadowVisible: false,
        statusBarStyle: 'inverted',
        headerBackTitle: '',
        contentStyle: {
          backgroundColor: COLORS.dark,
        },
        headerTintColor: COLORS.white,
      }}>
      <Stack.Screen
        name={ROUTE_NAMES.login}
        component={LoginScreen}
        options={{
          title: '',
        }}
      />
      <Stack.Screen options={{title: ''}} name={ROUTE_NAMES.home}>
        {_ => <LoginBasedView guards={[() => ActiveLoginGuard]} component={TabNavigator} />}
      </Stack.Screen>
      <Stack.Screen
        name={ROUTE_NAMES.movieDetails}
        options={{
          title: '',
          headerLeft: props => <HeaderBackButton {...props} onPress={() => navigateService.navigate(ROUTE_NAMES.home)} />,
        }}>
        {_ => <LoginBasedView guards={[() => ActiveLoginGuard]} component={MovieDetailsScreen} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
