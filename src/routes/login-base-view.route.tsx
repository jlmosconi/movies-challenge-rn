import {useNavigation} from '@react-navigation/native';
import {FC, useCallback, useEffect, useState} from 'react';
import {applyGuards} from '@utils';
// import {LoadingComponent} from './loading.component';
import {StyleSheet, View} from 'react-native';
import {AppText} from '@components';

interface RouteBasedViewProps {
  guards: Promise<boolean>[];
  component: FC;
}

export const LoginBasedView = ({component, guards}: RouteBasedViewProps) => {
  // TODO: pasar llamadas a HOOK
  const navigation = useNavigation();
  const [rba, setRba] = useState(false);

  const getGuards = useCallback(
    async (isMounted: boolean) => {
      const value = await applyGuards(guards, navigation);
      if (isMounted) {
        setRba(value);
      }
    },
    [guards, navigation],
  );

  useEffect(() => {
    let isMounted = true;
    getGuards(isMounted).catch(() => {
      if (isMounted) {
        setRba(false);
        if (navigation.canGoBack()) {
          navigation.goBack();
        }
      }
    });

    return () => {
      isMounted = false;
    };
  }, [getGuards, navigation]);

  if (!rba) {
    return <AppText>Loading...</AppText>;
  }

  return <>{component({navigation})}</>;
};

const styles = StyleSheet.create({
  loader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});
