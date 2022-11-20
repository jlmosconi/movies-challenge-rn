import {ROUTE_NAMES} from '@constants';
import {authService, navigateService} from '@services';

export const ActiveLoginGuard = async (): Promise<boolean> => {
  const isLoggedIn = await authService.isLoggedIn();

  if (!isLoggedIn) {
    navigateService.navigateRoot(ROUTE_NAMES.login);
  }

  return isLoggedIn;
};
