import { configureStore } from '@reduxjs/toolkit';
import sidebarStatusReducer from './sidebar/sidebarStatusSlice';
export const store = configureStore({
  reducer: {
    sidebarStatus: sidebarStatusReducer,
  },
});
