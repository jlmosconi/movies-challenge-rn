import {Action} from '@reduxjs/toolkit';
import {moviesService} from '@services';
import {combineEpics, Epic} from 'redux-observable';
import {of} from 'rxjs';
import {catchError, filter, first, ignoreElements, map, switchMap} from 'rxjs/operators';
import {
  getMovieCast,
  getMovieCastFailure,
  getMovieCastSuccess,
  getMovieDetails,
  getMovieDetailsFailure,
  getMovieDetailsSuccess,
  getNowPlayingMovies,
  getNowPlayingMoviesFailure,
  getNowPlayingMoviesSuccess,
  getPopularMovies,
  getPopularMoviesFailure,
  getPopularMoviesSuccess,
  getSimilarMovies,
  getSimilarMoviesFailure,
  getSimilarMoviesSuccess,
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
        catchError(() => of(getNowPlayingMoviesFailure())),
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

const getMovieDetailsEpic: Epic<Action> = action$ =>
  action$.pipe(
    filter(getMovieDetails.match),
    switchMap(({payload: {movieId}}) =>
      moviesService.getMovieDetails(movieId).pipe(
        first(),
        map(getMovieDetailsSuccess),
        catchError(() => of(getMovieDetailsFailure())),
      ),
    ),
  );

const getMovieDetailsSuccessEpic: Epic<Action> = action$ => action$.pipe(filter(getMovieDetailsSuccess.match), ignoreElements());
const getMovieDetailsFailureEpic: Epic<Action> = action$ => action$.pipe(filter(getMovieDetailsFailure.match), ignoreElements());

const getSimilarMoviesEpic: Epic<Action> = action$ =>
  action$.pipe(
    filter(getSimilarMovies.match),
    switchMap(({payload: {movieId}}) =>
      moviesService.getSimilarMovies(movieId).pipe(
        first(),
        map(getSimilarMoviesSuccess),
        catchError(() => of(getSimilarMoviesFailure())),
      ),
    ),
  );

const getSimilarMoviesSuccessEpic: Epic<Action> = action$ => action$.pipe(filter(getSimilarMoviesSuccess.match), ignoreElements());
const getSimilarMoviesFailureEpic: Epic<Action> = action$ => action$.pipe(filter(getSimilarMoviesFailure.match), ignoreElements());

const getMovieCastEpic: Epic<Action> = action$ =>
  action$.pipe(
    filter(getMovieCast.match),
    switchMap(({payload: {movieId}}) =>
      moviesService.getCast(movieId).pipe(
        first(),
        map(getMovieCastSuccess),
        catchError(() => of(getMovieCastFailure())),
      ),
    ),
  );

const getMovieCastSuccessEpic: Epic<Action> = action$ => action$.pipe(filter(getMovieCastSuccess.match), ignoreElements());
const getMovieCastFailureEpic: Epic<Action> = action$ => action$.pipe(filter(getMovieCastFailure.match), ignoreElements());

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
  getMovieDetailsEpic,
  getMovieDetailsSuccessEpic,
  getMovieDetailsFailureEpic,
  getSimilarMoviesEpic,
  getSimilarMoviesSuccessEpic,
  getSimilarMoviesFailureEpic,
  getMovieCastEpic,
  getMovieCastSuccessEpic,
  getMovieCastFailureEpic,
);
