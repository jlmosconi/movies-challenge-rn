import {ROUTE_NAMES} from '@constants';
import {navigateService} from '@services';
import {combineEpics, Epic} from 'redux-observable';
import {tap} from 'rxjs';
import {delay, filter, ignoreElements, map} from 'rxjs/operators';
import {login, loginFail, loginSuccess, logout} from './auth.actions';

const loginEpic: Epic = action$ =>
  action$.pipe(
    filter(login.match),
    delay(2000),
    map(() => loginSuccess('uuid')),
  );

const loginSuccessEpic: Epic = action$ =>
  action$.pipe(
    filter(loginSuccess.match),
    tap(() => navigateService.navigateRoot(ROUTE_NAMES.home)),
    ignoreElements(),
  );

const loginFailEpic: Epic = action$ =>
  action$.pipe(
    filter(loginFail.match),
    tap(() => {
      console.warn('login fail');
    }),
    ignoreElements(),
  );

const logoutEpic: Epic = action$ =>
  action$.pipe(
    filter(logout.match),
    tap(() => navigateService.navigateRoot(ROUTE_NAMES.login)),
    ignoreElements(),
    // switchMap(() => from(authService.signOut()).pipe(first())),
    // tap(() => localStorageService.clear()),
    // tap(() => navigateService.navigate(ROUTE_NAMES.login, {direction: RouterDirections.FORWARD})),
    // map(() => clearUserData()),
  );

export const authEpics = combineEpics(loginEpic, loginSuccessEpic, loginFailEpic, logoutEpic);
