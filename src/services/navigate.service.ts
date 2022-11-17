import {createRef, RefObject} from 'react';
import {NavigationContainerRef} from '@react-navigation/core';

class NavigateService {
  private static instance: NavigateService;

  static getInstance(): NavigateService {
    NavigateService.instance = NavigateService.instance || new NavigateService();
    return NavigateService.instance;
  }

  public navigate(url: string, params = {}): void {
    navigationRef?.current?.navigate(url as never, params as never);
  }

  public goBack(): void {
    navigationRef?.current?.goBack();
  }
}

export const navigationRef: RefObject<NavigationContainerRef<ReactNavigation.RootParamList>> | undefined = createRef();
export const navigateService = NavigateService.getInstance();
