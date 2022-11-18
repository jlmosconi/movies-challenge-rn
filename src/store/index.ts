import {configureStore} from '@reduxjs/toolkit';
// import { persistStore } from 'redux-persist';
import {rootEpic, rootReducer} from './root-reducer';
// import {environment} from '@environment';
import {createEpicMiddleware} from 'redux-observable';

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({}).concat(epicMiddleware),
  // devTools: environment.env !== 'production',
  preloadedState: {},
});

epicMiddleware.run(rootEpic);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
