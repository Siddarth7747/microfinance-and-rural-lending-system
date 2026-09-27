import { createSlice } from '@reduxjs/toolkit';

const loanSlice = createSlice({
  name: 'loans',
  initialState: { list: [], activeLoan: null },
  reducers: {
    setLoans: (state, action) => { state.list = action.payload; },
    setActiveLoan: (state, action) => { state.activeLoan = action.payload; },
  },
});

export const { setLoans, setActiveLoan } = loanSlice.actions;
export default loanSlice.reducer;
