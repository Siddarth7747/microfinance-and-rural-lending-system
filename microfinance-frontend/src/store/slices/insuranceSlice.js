import { createSlice } from '@reduxjs/toolkit';

const insuranceSlice = createSlice({
  name: 'insurance',
  initialState: { claims: [] },
  reducers: {
    setClaims: (state, action) => { state.claims = action.payload; },
  },
});

export const { setClaims } = insuranceSlice.actions;
export default insuranceSlice.reducer;
