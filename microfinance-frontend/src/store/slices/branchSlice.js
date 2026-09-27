import { createSlice } from '@reduxjs/toolkit';

const branchSlice = createSlice({
  name: 'branch',
  initialState: { branches: [] },
  reducers: {
    setBranches: (state, action) => { state.branches = action.payload; },
  },
});

export const { setBranches } = branchSlice.actions;
export default branchSlice.reducer;
