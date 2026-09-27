import { createSlice } from '@reduxjs/toolkit';

const emiScheduleSlice = createSlice({
  name: 'emiSchedules',
  initialState: { schedule: [] },
  reducers: {
    setSchedule: (state, action) => { state.schedule = action.payload; },
  },
});

export const { setSchedule } = emiScheduleSlice.actions;
export default emiScheduleSlice.reducer;
