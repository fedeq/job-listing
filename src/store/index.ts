import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "./filters/filtersSlice";

export const store = configureStore({
  reducer: {
    filters: filtersSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
