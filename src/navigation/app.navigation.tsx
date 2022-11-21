import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '@screens/Home/home.screen';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
}
