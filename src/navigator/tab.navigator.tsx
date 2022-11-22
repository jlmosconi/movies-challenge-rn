import {COLORS, ROUTE_NAMES} from '@constants';
import {useAppSelector} from '@hooks';
import {UserRoles} from '@models';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {GenresScreen} from '@screens/Genres/genres-screen.component';
import {HomeScreen} from '@screens/Home/home.screen';
import {ProfileScreen} from '@screens/Profile/genres-screen.component';
import {SearchScreen} from '@screens/Search/search-screen.component';
import {FC} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export const TabNavigator: FC = () => {
  const {userData} = useAppSelector(state => state.user);

  return (
    <Tab.Navigator
      initialRouteName={ROUTE_NAMES.home}
      screenOptions={{
        headerShown: true,
        headerTransparent: true,
        headerShadowVisible: false,
        headerTintColor: COLORS.dark,
        tabBarInactiveTintColor: 'rgba(255, 255, 255, .6)',
        tabBarActiveTintColor: COLORS.white,
        tabBarStyle: {
          backgroundColor: COLORS.dark,
          borderTopColor: 'rgba(255, 255, 255, .1)',
          borderTopWidth: 1,
        },
      }}>
      <Tab.Screen
        name={ROUTE_NAMES.homeScreen}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color, size}) => <Icon name={focused ? 'home' : 'home-outline'} color={color} size={size} />,
        }}
      />
      {userData?.role === UserRoles.PRE_RELEASE ? (
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
      ) : null}

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
};
