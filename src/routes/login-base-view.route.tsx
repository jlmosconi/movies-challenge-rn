import {useNavigation} from '@react-navigation/native';
import {applyGuards} from '@utils';
import {FC, useCallback, useEffect, useState} from 'react';

interface RouteBasedViewProps {
  guards: () => Promise<boolean>[];
  component: FC;
}

export const LoginBasedView = ({component, guards}: RouteBasedViewProps) => {
  const navigation = useNavigation();
  const [, setRba] = useState(false);

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

  return (
    <>
      {/* {!rba ? (
        <View style={styles.loader}>
          <AppText>Loading...</AppText>
        </View>
      ) : (
        component({navigation})
      )} */}
      {component({navigation})}
    </>
  );
};

// const styles = StyleSheet.create({
//   loader: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%',
//     height: '100%',
//   },
// });
