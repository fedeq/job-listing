import { useDispatch, useSelector } from "react-redux";
import {
  addFilter,
  removeFilter,
  clearFilters,
} from "../store/filters/filtersSlice";
import { useAppDispatch } from "./store";

export const useFiltersActions = () => {
  const dispatch = useAppDispatch();

  const addNewFilter = (filter: string) => {
    dispatch(addFilter(filter));
  };

  const removeExistingFilter = (filter: string) => {
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
