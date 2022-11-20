import {Movie} from '@models';
import {createAction} from '@reduxjs/toolkit';

const GET_UPCOMING_MOVIES = '[Movies] Get Upcoming Movies';
const GET_UPCOMING_MOVIES_SUCCESS = '[Movies] Get Upcoming Movies Success';
const GET_UPCOMING_MOVIES_FAILURE = '[Movies] Get Upcoming Movies Failure';

export const getUpcomingMovies = createAction(GET_UPCOMING_MOVIES);
export const getUpcomingMoviesSuccess = createAction<Movie[]>(GET_UPCOMING_MOVIES_SUCCESS);
export const getUpcomingMoviesFailure = createAction(GET_UPCOMING_MOVIES_FAILURE);
