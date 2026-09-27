import { createSlice } from '@reduxjs/toolkit';

const borrowerSlice = createSlice({
  name: 'borrowers',
  initialState: {
    list: [],
    selectedBorrower: null,
    loading: false,
    error: null,
  },
  reducers: {
    setBorrowers: (state, action) => {
      state.list = action.payload;
    },
    setSelectedBorrower: (state, action) => {
      state.selectedBorrower = action.payload;
    },
  },
});

export const { setBorrowers, setSelectedBorrower } = borrowerSlice.actions;
export default borrowerSlice.reducer;
