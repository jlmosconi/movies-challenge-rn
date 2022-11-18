import {combineReducers} from 'redux';
import {combineEpics} from 'redux-observable';
import {authEpics} from './auth/auth.epics';
import {authReducer} from './auth/auth.reducer';
import {AUTH_STATE_NAME} from './auth/auth.state';
import {userEpics} from './user/user.epics';
import {userReducer} from './user/user.reducer';
import {USER_STATE_NAME} from './user/user.state';

export const rootEpic = combineEpics(authEpics, userEpics);
export const rootReducer = combineReducers({
  [AUTH_STATE_NAME]: authReducer,
  [USER_STATE_NAME]: userReducer,
});
