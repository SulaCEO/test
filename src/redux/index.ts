import { configureStore } from '@reduxjs/toolkit';
import MainSlice from './reducers/MainSlice';

export const store = configureStore({
  reducer: {
    MainSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
