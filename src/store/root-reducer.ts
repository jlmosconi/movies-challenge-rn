import {combineReducers} from 'redux';
import {combineEpics} from 'redux-observable';
import {authEpics} from './auth/auth.epics';
import {authReducer} from './auth/auth.reducer';
import {AUTH_STATE_NAME} from './auth/auth.state';
import {moviesEpics} from './movies/movies.epics';
import {moviesReducer} from './movies/movies.reducer';
import {MOVIES_STATE_NAME} from './movies/movies.state';
import {userEpics} from './user/user.epics';
import {userReducer} from './user/user.reducer';
import {USER_STATE_NAME} from './user/user.state';

export const rootEpic = combineEpics(authEpics, userEpics, moviesEpics);
export const rootReducer = combineReducers({
  [AUTH_STATE_NAME]: authReducer,
  [USER_STATE_NAME]: userReducer,
  [MOVIES_STATE_NAME]: moviesReducer,
});
