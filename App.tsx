import {ToastCustom} from '@components';
import {COLORS} from '@constants';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '@screens/Auth/Login/login.screen';
import {HomeScreen} from '@screens/Home/home.screen';
import {navigationRef} from '@services';
import {store} from '@store/index';
import {FC} from 'react';
import {Provider} from 'react-redux';
// import Toast from 'react-native-toast-message';

const Stack = createNativeStackNavigator();

const App: FC = () => {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerShown: true,
              headerTransparent: true,
              headerShadowVisible: false,
              statusBarStyle: 'inverted',
              contentStyle: {
                backgroundColor: COLORS.dark,
              },
            }}>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                title: '',
              }}
            />
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: 'Home',
                // headerLeft: () => <BackButton />,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      <ToastCustom />
    </>
  );
};

export default App;
