import {LoginProps} from '@models';
import {createAction} from '@reduxjs/toolkit';

const LOGIN = '[Auth] Login';
const LOGIN_SUCCESS = '[Auth] Login Success';
const LOGIN_FAIL = '[Auth] Login Fail';

const LOGOUT = '[Auth] Logout';

export const login = createAction<LoginProps>(LOGIN);
export const loginSuccess = createAction<any>(LOGIN_SUCCESS);
export const loginFail = createAction<{errorCode: string}>(LOGIN_FAIL);

export const logout = createAction(LOGOUT);
