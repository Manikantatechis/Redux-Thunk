import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: true,
      serializableCheck: false,
    }),
});