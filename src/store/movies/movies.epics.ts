import {Action} from '@reduxjs/toolkit';
import {moviesService} from '@services';
import {combineEpics, Epic} from 'redux-observable';
import {of} from 'rxjs';
import {catchError, filter, first, ignoreElements, map, switchMap, tap} from 'rxjs/operators';
import {
  getNowPlayingMovies,
  getNowPlayingMoviesFailure,
  getNowPlayingMoviesSuccess,
  getPopularMovies,
  getPopularMoviesFailure,
  getPopularMoviesSuccess,
  getTopRatedMovies,
  getTopRatedMoviesFailure,
  getTopRatedMoviesSuccess,
  getUpcomingMovies,
  getUpcomingMoviesFailure,
  getUpcomingMoviesSuccess,
} from './movies.actions';

const getUpcomingMoviesEpic: Epic<Action> = action$ =>
  action$.pipe(
    filter(getUpcomingMovies.match),
    switchMap(() =>
      moviesService.getUpcomingMovies().pipe(
        first(),
        map(getUpcomingMoviesSuccess),
        catchError(() => of(getUpcomingMoviesFailure())),
      ),
    ),
  );

const getUpcomingMoviesSuccessEpic: Epic<Action> = action$ => action$.pipe(filter(getUpcomingMoviesSuccess.match), ignoreElements());
const getUpcomingMoviesFailureEpic: Epic<Action> = action$ => action$.pipe(filter(getUpcomingMoviesFailure.match), ignoreElements());

const getNowPlayingMoviesEpic: Epic<Action> = action$ =>
  action$.pipe(
    filter(getNowPlayingMovies.match),
    switchMap(() =>
      moviesService.getNowPlayingMovies().pipe(
        first(),
        map(getNowPlayingMoviesSuccess),
        catchError(() => of(getUpcomingMoviesFailure())),
      ),
    ),
  );

const getNowPlayingMoviesSuccessEpic: Epic<Action> = action$ => action$.pipe(filter(getNowPlayingMoviesSuccess.match), ignoreElements());
const getNowPlayingMoviesFailureEpic: Epic<Action> = action$ => action$.pipe(filter(getNowPlayingMoviesFailure.match), ignoreElements());

export const getPopularMoviesEpic: Epic<Action> = action$ =>
  action$.pipe(
    filter(getPopularMovies.match),
    switchMap(() =>
      moviesService.getPopularMovies().pipe(
        first(),
        map(getPopularMoviesSuccess),
        catchError(() => of(getPopularMoviesFailure())),
      ),
    ),
  );

const getPopularMoviesSuccessEpic: Epic<Action> = action$ => action$.pipe(filter(getPopularMoviesSuccess.match), ignoreElements());
const getPopularMoviesFailureEpic: Epic<Action> = action$ => action$.pipe(filter(getPopularMoviesFailure.match), ignoreElements());

const getTopRatedMoviesEpic: Epic<Action> = action$ =>
  action$.pipe(
    filter(getTopRatedMovies.match),
    switchMap(() =>
      moviesService.getTopRatedMovies().pipe(
        first(),
        map(getTopRatedMoviesSuccess),
        catchError(() => of(getTopRatedMoviesFailure())),
      ),
    ),
  );

const getTopRatedMoviesSuccessEpic: Epic<Action> = action$ => action$.pipe(filter(getTopRatedMoviesSuccess.match), ignoreElements());
const getTopRatedMoviesFailureEpic: Epic<Action> = action$ => action$.pipe(filter(getTopRatedMoviesFailure.match), ignoreElements());

export const moviesEpics = combineEpics(
  getUpcomingMoviesEpic,
  getUpcomingMoviesSuccessEpic,
  getUpcomingMoviesFailureEpic,
  getNowPlayingMoviesEpic,
  getNowPlayingMoviesSuccessEpic,
  getNowPlayingMoviesFailureEpic,
  getPopularMoviesEpic,
  getPopularMoviesSuccessEpic,
  getPopularMoviesFailureEpic,
  getTopRatedMoviesEpic,
  getTopRatedMoviesSuccessEpic,
  getTopRatedMoviesFailureEpic,
);
