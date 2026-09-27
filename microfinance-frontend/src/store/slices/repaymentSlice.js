import { createSlice } from '@reduxjs/toolkit';

const repaymentSlice = createSlice({
  name: 'repayments',
  initialState: { history: [] },
  reducers: {
    setHistory: (state, action) => { state.history = action.payload; },
  },
});

export const { setHistory } = repaymentSlice.actions;
export default repaymentSlice.reducer;
