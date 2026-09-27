import { createSlice } from '@reduxjs/toolkit';

const delinquencySlice = createSlice({
  name: 'delinquency',
  initialState: { parReport: null },
  reducers: {
    setParReport: (state, action) => { state.parReport = action.payload; },
  },
});

export const { setParReport } = delinquencySlice.actions;
export default delinquencySlice.reducer;
