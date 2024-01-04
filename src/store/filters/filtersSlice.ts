import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Filter = {
  type: "language" | "role" | "level" | "tool";
  name: string;
};

const initialState: Filter[] = [];

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    addFilter: (state, action: PayloadAction<Filter>) => {
      if (!hasFilter(state, action.payload)) {
        state.push(action.payload);
      }
      return state;
    },
    removeFilter: (state, action) => {
      return state.filter((filter) => filter.name !== action.payload.name);
    },
    clearFilters: (state) => {
      return [];
    },
  },
});

const hasFilter = (activeFilters: Filter[], newFilter: Filter) => {
  return activeFilters.some(
    (filter) => filter.type === newFilter.type && filter.name === newFilter.name
  );
};

export const { addFilter, removeFilter, clearFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
