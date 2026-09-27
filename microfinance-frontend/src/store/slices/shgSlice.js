import { createSlice } from '@reduxjs/toolkit';

const shgSlice = createSlice({
  name: 'shg',
  initialState: { groups: [], savingsLedger: [] },
  reducers: {
    setShgGroups: (state, action) => { state.groups = action.payload; },
  },
});

export const { setShgGroups } = shgSlice.actions;
export default shgSlice.reducer;
