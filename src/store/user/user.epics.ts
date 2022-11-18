import {combineEpics} from 'redux-observable';

// const setUserDataEpic: Epic<Action> = action$ =>
//   action$.pipe(
//     filter(setUserData.match),
//     tap(({payload: user}) => localStorageService.setItem(STORAGE.user, user)),
//     ignoreElements(),
//   );

// const getUserInRealtimeEpic: Epic<Action> = action$ =>
//   action$.pipe(
//     filter(getUserInRealtime.match),
//     map(() => localStorageService.getItem<UserApp>(STORAGE.user).uid),
//     switchMap(uid => userService.getUserInRealTime(uid)),
//     filter(user => !!user.uid),
//     map(user => setUserData(user)),
//   );

// const clearUserDataEpic: Epic<Action> = action$ =>
//   // onLogout
//   action$.pipe(
//     filter(clearUserData.match),
//     tap(() => userService.unsubscribeUser()),
//     ignoreElements(),
//   );

export const userEpics = combineEpics();
// setUserDataEpic, getUserInRealtimeEpic, clearUserDataEpic
