import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { sidebarOpen: true, activeLanguage: 'en', themeMode: 'dark' },
  reducers: {
    toggleSidebar: (state) => { state.sidebarOpen = !state.sidebarOpen; },
    setLanguage: (state, action) => { state.activeLanguage = action.payload; },
  },
});

export const { toggleSidebar, setLanguage } = uiSlice.actions;
export default uiSlice.reducer;
