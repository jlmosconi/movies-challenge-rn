import {ToastCustom} from '@components';
import {COLORS, ROUTE_NAMES} from '@constants';
import {ActiveLoginGuard} from '@guards';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginBasedView} from '@routes';
import {LoginScreen} from '@screens/Auth/Login/login.screen';
import {HomeScreen} from '@screens/Home/home.screen';
import {MovieDetailsScreen} from '@screens/Home/MovieDetails/movie-details.screen';
import {navigationRef} from '@services';
import {store} from '@store/index';
import {FC} from 'react';
import {Provider} from 'react-redux';

const Stack = createNativeStackNavigator();

const App: FC = () => {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator
            initialRouteName={ROUTE_NAMES.home}
            screenOptions={{
              headerShown: true,
              headerTransparent: true,
              headerShadowVisible: false,
              statusBarStyle: 'inverted',
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
              {_ => <LoginBasedView guards={[() => ActiveLoginGuard]} component={HomeScreen} />}
            </Stack.Screen>
            <Stack.Screen options={{title: ''}} name={ROUTE_NAMES.movieDetails}>
              {_ => <LoginBasedView guards={[() => ActiveLoginGuard]} component={MovieDetailsScreen} />}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      <ToastCustom />
    </>
  );
};

export default App;
