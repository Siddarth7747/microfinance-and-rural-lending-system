import { createSlice } from '@reduxjs/toolkit';

const reportSlice = createSlice({
  name: 'reports',
  initialState: { reportsData: {} },
  reducers: {
    setReportData: (state, action) => { state.reportsData[action.payload.key] = action.payload.data; },
  },
});

export const { setReportData } = reportSlice.actions;
export default reportSlice.reducer;
