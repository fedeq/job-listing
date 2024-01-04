import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    activeFilters: [],
  },
  reducers: {
    add: (state, action) => {
      state.activeFilters = !hasFilter(state.activeFilters, action.payload)
        ? state.activeFilters.concat([
            { type: action.payload.type, name: action.payload.name },
          ])
        : state.activeFilters;
    },
    remove: (state, action) => {
      state.activeFilters = state.activeFilters.filter(
        (filter) => filter.name !== action.payload.name
      );
    },
    clear: (state) => {
      state.activeFilters = [];
    },
  },
});

const hasFilter = (activeFilters, newFilter) => {
  for (let filter of activeFilters) {
    if (filter.type === newFilter.type && filter.name === newFilter.name)
      return true;
  }
  return false;
};

export const { add, remove, clear } = filtersSlice.actions;

export default filtersSlice.reducer;
