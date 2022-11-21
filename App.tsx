import {AppText, ToastCustom} from '@components';
import {COLORS, ROUTE_NAMES} from '@constants';
import {ActiveLoginGuard} from '@guards';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginBasedView} from '@routes';
import {LoginScreen} from '@screens/Auth/Login/login.screen';
import {HomeScreen} from '@screens/Home/home.screen';
import {MovieDetailsScreen} from '@screens/Home/MovieDetails/movie-details.screen';
import {SearchScreen} from '@screens/Search/search-screen.component';
import {navigationRef} from '@services';
import {store} from '@store/index';
import {FC} from 'react';
import {Provider} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {GenresScreen} from '@screens/Genres/genres-screen.component';
import {ProfileScreen} from '@screens/Profile/genres-screen.component';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={ROUTE_NAMES.home}
      screenOptions={{
        headerShown: true,
        headerTransparent: true,
        headerShadowVisible: false,
        headerTintColor: COLORS.dark,
        // tabBarStyle: {backgroundColor: COLORS.dark, paddingBottom: 10},
        tabBarInactiveTintColor: 'rgba(255, 255, 255, .6)',
        tabBarActiveTintColor: COLORS.white,
        tabBarStyle: {
          backgroundColor: COLORS.dark,
          borderTopColor: 'rgba(255, 255, 255, .1)',
          borderTopWidth: 1,
        },
      }}>
      <Tab.Screen
        name={ROUTE_NAMES.home}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color, size}) => <Icon name={focused ? 'home' : 'home-outline'} color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name={ROUTE_NAMES.genres}
        component={GenresScreen}
        options={{
          tabBarLabel: 'Géneros',
          tabBarIcon: ({focused, color, size}) => (
            <Icon name={focused ? 'layers-triple' : 'layers-triple-outline'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTE_NAMES.search}
        component={SearchScreen}
        options={{
          tabBarLabel: 'Buscar',
          tabBarIcon: ({color, size}) => <Icon name="magnify" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name={ROUTE_NAMES.profile}
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({focused, color, size}) => (
            <Icon name={focused ? 'account-circle' : 'account-circle-outline'} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

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
            {/* <Stack.Screen name={ROUTE_NAMES.home} component={TabNavigator}></Stack.Screen> */}
            {/* <Stack.Screen options={{title: ''}} name={ROUTE_NAMES.home}>
              {_ => <LoginBasedView guards={[() => ActiveLoginGuard]} component={HomeScreen} />}
            </Stack.Screen>
            <Stack.Screen options={{title: ''}} name={ROUTE_NAMES.movieDetails}>
            
              {_ => <LoginBasedView guards={[() => ActiveLoginGuard]} component={MovieDetailsScreen} />}
            </Stack.Screen> */}
            <Stack.Screen options={{title: ''}} name={ROUTE_NAMES.movieDetails}>
              {_ => <LoginBasedView guards={[() => ActiveLoginGuard]} component={MovieDetailsScreen} />}
            </Stack.Screen>
          </Stack.Navigator>
          {/* <Tab.Navigator>
            <Tab.Screen name={ROUTE_NAMES.home} component={HomeScreen} />
            <Tab.Screen name={ROUTE_NAMES.movieDetails} component={MovieDetailsScreen} />
          </Tab.Navigator> */}
        </NavigationContainer>
      </Provider>
      <ToastCustom />
    </>
  );
};

export default App;
