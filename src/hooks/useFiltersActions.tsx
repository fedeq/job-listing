import { useDispatch, useSelector } from "react-redux";
import {
  addFilter,
  removeFilter,
  clearFilters,
  Filter,
} from "../store/filters/filtersSlice";
import { useAppDispatch } from "./store";

export const useFiltersActions = () => {
  const dispatch = useAppDispatch();

  const addNewFilter = (filter: Filter) => {
    console.log(`addNewFilter: ${JSON.stringify(filter)}`);
    dispatch(addFilter(filter));
  };

  const removeExistingFilter = (filter: Filter) => {
    dispatch(removeFilter(filter));
  };

  const clearExistingFilters = () => {
    dispatch(clearFilters());
  };

  return {
    addNewFilter,
    removeExistingFilter,
    clearExistingFilters,
  };
};
