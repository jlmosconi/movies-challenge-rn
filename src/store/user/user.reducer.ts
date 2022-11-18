import {createReducer} from '@reduxjs/toolkit';
import {clearUserData, setUserData} from './user.actions';
import {UserEmptyState} from './user.state';

export const userReducer = createReducer(UserEmptyState, builder => {
  builder.addCase(setUserData, (state, {payload: userData}) => {
    state.userData = userData;
  });
  builder.addCase(clearUserData, state => {
    state.userData = UserEmptyState.userData;
  });
});
