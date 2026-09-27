import { createSlice } from '@reduxjs/toolkit';

const disbursementSlice = createSlice({
  name: 'disbursement',
  initialState: { history: [] },
  reducers: {
    setDisbursements: (state, action) => { state.history = action.payload; },
  },
});

export const { setDisbursements } = disbursementSlice.actions;
export default disbursementSlice.reducer;
