import {combineReducers} from 'redux';
import {authReducer} from './auth/auth.reducer';
import {AUTH_STATE_NAME} from './auth/auth.state';
import {moviesReducer} from './movies/movies.reducer';
import {MOVIES_STATE_NAME} from './movies/movies.state';
import {userReducer} from './user/user.reducer';
import {USER_STATE_NAME} from './user/user.state';

export const rootReducer = combineReducers({
  [AUTH_STATE_NAME]: authReducer,
  [USER_STATE_NAME]: userReducer,
  [MOVIES_STATE_NAME]: moviesReducer,
});
