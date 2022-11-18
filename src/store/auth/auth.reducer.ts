import {createReducer, isAnyOf} from '@reduxjs/toolkit';
import {
  login,
  loginFail,
  loginSuccess,
  // signInWithPhoneNumber,
  // signInWithPhoneNumberFail,
  // signInWithPhoneNumberSuccess,
  // verifyCode,
  // verifyCodeFail,
  // signInSuccess,
  logout,
} from './auth.actions';
import {AuthEmptyState} from './auth.state';

export const authReducer = createReducer(AuthEmptyState, builder => {
  builder.addCase(login, state => {
    state.loading = true;
  });
  // builder.addCase(signInWithPhoneNumber, (state, {payload}) => {
  //   state.phoneNumber = payload.phoneNumber;
  //   state.loading = true;
  // });
  // builder.addCase(signInWithPhoneNumberSuccess, (state, {payload}) => {
  //   state.verificationId = payload.verificationId;
  //   state.loading = false;
  // });
  // builder.addCase(signInWithPhoneNumberFail, state => {
  //   state.verificationId = undefined;
  //   state.loading = false;
  // });
  // builder.addCase(verifyCode, state => {
  //   state.loading = true;
  // });
  builder.addCase(logout, () => AuthEmptyState);

  builder.addMatcher(isAnyOf(loginSuccess, loginFail), state => {
    state.loading = false;
  });
});
