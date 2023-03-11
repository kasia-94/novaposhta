import { createSlice } from '@reduxjs/toolkit';
import { fetchAddress } from './operations';

const addressSlice = createSlice({
  name: 'address',
  initialState: {
    items: [],
    isLoadind: false,
    error: null,
  },

  extraReducers: {
    [fetchAddress.pending](state) {
      state.isLoading = true;
    },
    [fetchAddress.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchAddress.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const addressReducer = addressSlice.reducer;
