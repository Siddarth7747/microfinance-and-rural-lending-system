import { createSlice } from '@reduxjs/toolkit';

const collectionSlice = createSlice({
  name: 'collections',
  initialState: { currentSheet: null },
  reducers: {
    setSheet: (state, action) => { state.currentSheet = action.payload; },
  },
});

export const { setSheet } = collectionSlice.actions;
export default collectionSlice.reducer;
