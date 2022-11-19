import {ROUTE_NAMES, STORAGE} from '@constants';
import {authService, localStorageService, navigateService, toastService} from '@services';
import {combineEpics, Epic} from 'redux-observable';
import {from, of, tap} from 'rxjs';
import {catchError, exhaustMap, filter, first, ignoreElements, map, switchMap} from 'rxjs/operators';
import {login, loginFail, loginSuccess, logout} from './auth.actions';

const loginEpic: Epic = action$ =>
  action$.pipe(
    filter(login.match),
    exhaustMap(({payload}) =>
      from(authService.login(payload)).pipe(
        first(),
        map(user => loginSuccess(user)),
        catchError(error => of(loginFail({errorCode: error.code}))),
      ),
    ),
  );

const loginSuccessEpic: Epic = action$ =>
  action$.pipe(
    filter(loginSuccess.match),
    switchMap(({payload}) =>
      from(localStorageService.setItem(STORAGE.USER, payload)).pipe(tap(() => navigateService.navigate(ROUTE_NAMES.home))),
    ),
    ignoreElements(),
  );

const loginFailEpic: Epic = action$ =>
  action$.pipe(
    filter(loginFail.match),
    map(({payload: {errorCode}}) => authService.getErrorMessage(errorCode)),
    tap(message => {
      toastService.show({
        type: 'error',
        message,
      });
    }),
    ignoreElements(),
  );

const logoutEpic: Epic = action$ =>
  action$.pipe(
    filter(logout.match),
    switchMap(() => from(authService.logout())),
    switchMap(() => from(localStorageService.clear())),
    tap(() => navigateService.navigateRoot(ROUTE_NAMES.login)),
    ignoreElements(),
  );

export const authEpics = combineEpics(loginEpic, loginSuccessEpic, loginFailEpic, logoutEpic);
