import {ROUTE_NAMES} from '@constants';
import {authService, localStorageService, navigateService, toastService} from '@services';
import {getUserInRealtime, setUserData} from '@store/user/user.actions';
import {combineEpics, Epic} from 'redux-observable';
import {from, merge, of, tap} from 'rxjs';
import {catchError, exhaustMap, filter, first, ignoreElements, map, mergeMap, switchMap} from 'rxjs/operators';
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
    tap(() => navigateService.navigateRoot(ROUTE_NAMES.home)),
    mergeMap(({payload: user}) => merge(of(setUserData(user)), of(getUserInRealtime()))),
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
