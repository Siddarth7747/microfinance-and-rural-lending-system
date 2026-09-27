import { createSlice } from '@reduxjs/toolkit';

const loanApplicationSlice = createSlice({
  name: 'loanApplications',
  initialState: { list: [], pendingApprovals: [] },
  reducers: {
    setApplications: (state, action) => { state.list = action.payload; },
  },
});

export const { setApplications } = loanApplicationSlice.actions;
export default loanApplicationSlice.reducer;
