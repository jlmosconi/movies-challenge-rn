import {createRef, RefObject} from 'react';
import {NavigationContainerRef} from '@react-navigation/core';
import {ROUTE_NAMES} from '@constants';

class NavigateService {
  private static instance: NavigateService;

  static getInstance(): NavigateService {
    NavigateService.instance = NavigateService.instance || new NavigateService();
    return NavigateService.instance;
  }

  public navigate(url: string, params = {}): void {
    navigationRef?.current?.navigate(url as never, params as never);
  }

  public push(url: string, params = {}, key = Math.random()): void {
    navigationRef?.current?.dispatch({
      type: 'PUSH',
      payload: {
        name: url,
        params,
        key: `${url}-${key}`,
      },
    });

    // navigationRef?.current?

    // navigationRef?.current?.reset({
    //   routes: [
    //     // {name: ROUTE_NAMES.home},
    //     // {name: ROUTE_NAMES.movieDetails, params},
    //   ],
    // });
  }

  public getParams(): any {
    return navigationRef?.current?.getCurrentRoute()?.params;
  }

  public navigateRoot(url: string, params = {}): void {
    navigateService.navigate(url, params);
    navigateService.reset(url);
  }

  private reset(routeName: string): void {
    navigationRef?.current?.reset({
      index: 0,
      routes: [{name: routeName}],
    });
  }

  public goBack(): void {
    navigationRef?.current?.goBack();
  }
}

export const navigationRef: RefObject<NavigationContainerRef<ReactNavigation.RootParamList>> | undefined = createRef();
export const navigateService = NavigateService.getInstance();
