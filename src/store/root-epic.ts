import {Action} from '@reduxjs/toolkit';
import {combineEpics, StateObservable} from 'redux-observable';
import {BehaviorSubject, mergeMap, Observable} from 'rxjs';
import {authEpics} from './auth/auth.epics';
import {moviesEpics} from './movies/movies.epics';
import {userEpics} from './user/user.epics';

export const epic$ = new BehaviorSubject(combineEpics(authEpics, userEpics, moviesEpics));
export const rootEpic = (action$: Observable<Action<any>>, state$: StateObservable<any>, dependencies: any) =>
  epic$.pipe(mergeMap(epic => epic(action$, state$, dependencies)));
