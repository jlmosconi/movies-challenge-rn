import {Fallback, ToastCustom} from '@components';
import {StackNavigator} from '@navigator/stack.navigator';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '@services';
import {store} from '@store/index';
import {FC, Suspense} from 'react';
import {Provider} from 'react-redux';

const App: FC = () => {
  return (
    <>
      <Provider store={store}>
        <Suspense fallback={<Fallback />}>
          <NavigationContainer ref={navigationRef}>
            <StackNavigator />
          </NavigationContainer>
        </Suspense>
      </Provider>
      <ToastCustom />
    </>
  );
};

export default App;
