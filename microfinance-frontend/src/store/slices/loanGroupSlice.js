import { createSlice } from '@reduxjs/toolkit';

const loanGroupSlice = createSlice({
  name: 'loanGroups',
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    setGroups: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setGroups } = loanGroupSlice.actions;
export default loanGroupSlice.reducer;
