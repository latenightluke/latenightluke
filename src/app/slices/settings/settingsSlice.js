import { createSlice } from "@reduxjs/toolkit";

let darkMode = false;
if (typeof window !== "undefined") {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    darkMode = true;
  }
}

const initialState = {
  darkMode,
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
