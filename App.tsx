import {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from '@services';
import {LoginScreen} from '@screens/Auth/Login/login.screen';

const Stack = createNativeStackNavigator();

const App: FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: true,
          headerTransparent: true,
          headerShadowVisible: false,
        }}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: '',
          }}
        />
        {/* <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '',
            headerLeft: () => <BackButton />,
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
