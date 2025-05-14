import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  toggleSidebar: false,
  uploadCount: 0, // count of active uploads
};

const rootReducer = createSlice({
  name: "reducer",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.toggleSidebar = !state.toggleSidebar;
    },
    startImageUpload: (state) => {
      state.uploadCount += 1;
    },
    finishImageUpload: (state) => {
      state.uploadCount = Math.max(state.uploadCount - 1, 0);
    },
  },
});
export default rootReducer.reducer;
export const { toggleSidebar, startImageUpload, finishImageUpload } =
  rootReducer.actions;
