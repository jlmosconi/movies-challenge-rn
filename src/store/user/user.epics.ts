import {STORAGE} from '@constants';
import {User} from '@models';
import {Action} from '@reduxjs/toolkit';
import {localStorageService, userService} from '@services';
import {combineEpics, Epic} from 'redux-observable';
import {from, tap} from 'rxjs';
import {delay, filter, first, ignoreElements, map, switchMap} from 'rxjs/operators';
import {clearUserData, getUserInRealtime, setUserData} from './user.actions';

const setUserDataEpic: Epic<Action> = action$ =>
  action$.pipe(
    filter(setUserData.match),
    switchMap(({payload: user}) => from(localStorageService.setItem(STORAGE.USER, user)).pipe(first())),
    ignoreElements(),
  );

const getUserInRealtimeEpic: Epic<Action> = action$ =>
  action$.pipe(
    filter(getUserInRealtime.match),
    delay(500),
    filter(() => !userService.getUserUnsubscribe()),
    switchMap(() => localStorageService.getItem<User>(STORAGE.USER)),
    filter(user => !!user),
    switchMap(user => userService.getUserInRealTime(user.uid)),
    map(user => setUserData(user)),
  );

const clearUserDataEpic: Epic<Action> = action$ =>
  action$.pipe(
    filter(clearUserData.match),
    tap(() => userService.unsubscribeUser()),
    ignoreElements(),
  );

export const userEpics = combineEpics(setUserDataEpic, getUserInRealtimeEpic, clearUserDataEpic);
