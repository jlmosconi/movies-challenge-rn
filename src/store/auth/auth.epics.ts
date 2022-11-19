import {ROUTE_NAMES} from '@constants';
import {authService, navigateService} from '@services';
import {combineEpics, Epic} from 'redux-observable';
import {from, of, tap} from 'rxjs';
import {catchError, exhaustMap, filter, first, ignoreElements, map} from 'rxjs/operators';
import {login, loginFail, loginSuccess, logout} from './auth.actions';

const loginEpic: Epic = action$ =>
  action$.pipe(
    filter(login.match),
    exhaustMap(({payload}) =>
      from(authService.login(payload)).pipe(
        first(),
        map((verificationId: string) => loginSuccess({verificationId})),
        catchError(error => of(loginFail({errorCode: error.code}))),
      ),
    ),
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
    map(({payload: {errorCode}}) => authService.getErrorMessage(errorCode)),
    tap(errorMessage => {
      console.warn(errorMessage);
    }),
    ignoreElements(),
  );

const logoutEpic: Epic = action$ =>
  action$.pipe(
    filter(logout.match),
    exhaustMap(() => from(authService.logout())),
    tap(() => navigateService.navigateRoot(ROUTE_NAMES.login)),
    ignoreElements(),
  );

export const authEpics = combineEpics(loginEpic, loginSuccessEpic, loginFailEpic, logoutEpic);
