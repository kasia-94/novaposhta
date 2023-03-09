import { configureStore } from '@reduxjs/toolkit';
import { addressReducer } from './address/slice';

export const store = configureStore({
  reducer: {
    address: addressReducer,
  },
});
