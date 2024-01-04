import { useAppSelector } from "./store";

export const useFilters = () => {
  const filters = useAppSelector((state) => state.filters);

  return { filters };
};
