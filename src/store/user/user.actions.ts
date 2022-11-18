// import {UserApp} from '@models';
import {createAction} from '@reduxjs/toolkit';

const SET_USER_DATA = '[User] Set User Data';
const GET_USER_IN_REALTIME = '[User] Get User In Realtime';
const CLEAR_USER_DATA = '[User] Clear User Data';

export const setUserData = createAction<any>(SET_USER_DATA);
export const getUserInRealtime = createAction(GET_USER_IN_REALTIME);
export const clearUserData = createAction(CLEAR_USER_DATA);
