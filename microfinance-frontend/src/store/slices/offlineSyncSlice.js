import { createSlice } from '@reduxjs/toolkit';

const offlineSyncSlice = createSlice({
  name: 'offlineSync',
  initialState: { pendingQueue: [], isOnline: navigator.onLine },
  reducers: {
    setOnlineStatus: (state, action) => { state.isOnline = action.payload; },
    addToSyncQueue: (state, action) => { state.pendingQueue.push(action.payload); },
    clearSyncQueue: (state) => { state.pendingQueue = []; },
  },
});

export const { setOnlineStatus, addToSyncQueue, clearSyncQueue } = offlineSyncSlice.actions;
export default offlineSyncSlice.reducer;
