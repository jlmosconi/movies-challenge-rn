import {NavigationProp} from '@react-navigation/native';

export const applyGuards = async (
  guards: () => Promise<boolean>[],
  navigation: NavigationProp<ReactNavigation.RootParamList>,
): Promise<boolean> => {
  if (guards && Array.isArray(guards) && guards.length > 0) {
    try {
      const results = [];
      for (const guard of guards) {
        results.push(await guard(navigation));
      }
      return results.reduce((a, b) => a && b, true);
    } catch (e) {
      return false;
    }
  } else {
    return true;
  }
};
