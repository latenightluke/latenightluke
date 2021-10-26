import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "../slices/settings/settingsSlice";

export function createStore() {
  return configureStore({
    reducer: {
      settings: settingsReducer,
    },
  });
}

const store = createStore();

export default store;
