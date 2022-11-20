import {Action} from '@reduxjs/toolkit';
import {moviesService} from '@services';
import {combineEpics, Epic} from 'redux-observable';
import {of} from 'rxjs';
import {catchError, filter, first, ignoreElements, map, switchMap, tap} from 'rxjs/operators';
import {getUpcomingMovies, getUpcomingMoviesFailure, getUpcomingMoviesSuccess} from './movies.actions';

const getUpcomingMoviesEpic: Epic<Action> = action$ =>
  action$.pipe(
    filter(getUpcomingMovies.match),
    switchMap(() =>
      moviesService.getUpcomingMovies().pipe(
        first(),
        tap(() => {
          console.log('getUpcomingMoviesEpic');
        }),
        map(getUpcomingMoviesSuccess),
        catchError(() => of(getUpcomingMoviesFailure())),
      ),
    ),
  );

const getUpcomingMoviesSuccessEpic: Epic<Action> = action$ => action$.pipe(filter(getUpcomingMoviesSuccess.match), ignoreElements());
const getUpcomingMoviesFailureEpic: Epic<Action> = action$ =>
  action$.pipe(
    filter(getUpcomingMoviesFailure.match),
    tap(() => console.log('error!')),
    ignoreElements(),
  );

export const moviesEpics = combineEpics(getUpcomingMoviesEpic, getUpcomingMoviesSuccessEpic, getUpcomingMoviesFailureEpic);
