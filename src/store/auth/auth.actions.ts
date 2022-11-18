import {LoginProps} from '@models';
import {createAction} from '@reduxjs/toolkit';
// import {LoginProps, LoginSuccess, UserApp} from '@models';
// import {User} from '@capacitor-firebase/authentication';

// const SIGN_IN_WITH_PHONE_NUMBER = '[Auth] Sign In With Phone Number';
// const SIGN_IN_WITH_PHONE_NUMBER_SUCCESS = '[Auth] Sign In With Phone Number Success';
// const SIGN_IN_WITH_PHONE_NUMBER_FAIL = '[Auth] Sign In With Phone Number Fail';

// const VERIFY_CODE = '[Auth] Verify Code';
// const VERIFY_CODE_SUCCESS = '[Auth] Verify Code Success';
// const VERIFY_CODE_FAIL = '[Auth] Verify Code Fail';

// const SIGN_IN_SUCCESS = '[Auth] Sign In Success';

const LOGIN = '[Auth] Login';
const LOGIN_SUCCESS = '[Auth] Login Success';
const LOGIN_FAIL = '[Auth] Login Fail';

const LOGOUT = '[Auth] Logout';

// export const signInWithPhoneNumber = createAction<LoginProps>(SIGN_IN_WITH_PHONE_NUMBER);
// export const signInWithPhoneNumberSuccess = createAction<LoginSuccess>(SIGN_IN_WITH_PHONE_NUMBER_SUCCESS);
// export const signInWithPhoneNumberFail = createAction<any>(SIGN_IN_WITH_PHONE_NUMBER_FAIL);

// export const verifyCode = createAction<{verificationCode: string}>(VERIFY_CODE);
// export const verifyCodeSuccess = createAction<any | null>(VERIFY_CODE_SUCCESS);
// export const verifyCodeFail = createAction<any>(VERIFY_CODE_FAIL);

// export const signInSuccess = createAction<UserApp>(SIGN_IN_SUCCESS);

export const login = createAction<LoginProps>(LOGIN);
export const loginSuccess = createAction<any>(LOGIN_SUCCESS);
export const loginFail = createAction<any>(LOGIN_FAIL);

export const logout = createAction(LOGOUT);
