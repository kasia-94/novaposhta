const { createSlice } = require('@reduxjs/toolkit');
const { fetchStatus } = require('./operations');

const statusSlice = createSlice({
  name: 'status',
  initialState: {
    status: {
      items: '',
      isLoading: false,
      error: null,
    },
  },
  extraReducers: {
    [fetchStatus.pending](action, state) {
      state.isLoading = true;
    },
    [fetchStatus.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchStatus.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const statusReducer = statusSlice.reducer;
