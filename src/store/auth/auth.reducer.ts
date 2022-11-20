import {createReducer, isAnyOf} from '@reduxjs/toolkit';
import {login, loginFail, loginSuccess, logout} from './auth.actions';
import {AuthEmptyState} from './auth.state';

export const authReducer = createReducer(AuthEmptyState, builder => {
  builder.addCase(login, state => {
    state.loading = true;
  });
  builder.addCase(logout, () => AuthEmptyState);

  builder.addMatcher(isAnyOf(loginSuccess, loginFail), state => {
    state.loading = false;
  });
});
