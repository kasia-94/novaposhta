import { configureStore } from '@reduxjs/toolkit';
import { addressReducer } from './address/slice';
import { statusReducer } from './delivery/slice';

export const store = configureStore({
  reducer: {
    address: addressReducer,
    status: statusReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
