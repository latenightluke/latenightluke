import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleDarkMode } = settingsSlice.actions;

export default settingsSlice.reducer;
