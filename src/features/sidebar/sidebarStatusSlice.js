import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: false,
};

export const sidebarStatusSlice = createSlice({
  name: 'sidebarStatus',
  initialState,
  reducers: {
    handleSidebarStatus: (state) => {
      state.status = !state.status;
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleSidebarStatus } = sidebarStatusSlice.actions;

export default sidebarStatusSlice.reducer;
