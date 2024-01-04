import React from "react";
import { RemoveIcon } from "./RemoveIcon";
import { useFiltersActions } from "../hooks/useFiltersActions";
import { useAppSelector } from "../hooks/store";

function Filters() {
  const { clearExistingFilters, removeExistingFilter } = useFiltersActions();
  const filters = useAppSelector((state) => state.filters.activeFilters);

  if (filters.length === 0) return;
  return (
    <div className="shadow-lg mb-10 flex p-8 justify-between bg-white">
      <div className="flex">
        {filters?.map((filter) => (
          <>
            <div className="badge-square ml-5">{filter.name}</div>
            <button
              className="bg-cyan-800 h-full w-5 flex items-center justify-center"
              onClick={() =>
                removeExistingFilter({ type: filter.type, name: filter.name })
              }
            >
              <RemoveIcon />
            </button>
          </>
        ))}
      </div>
      <div
        className="badge-square cursor-pointer"
        onClick={clearExistingFilters}
      >
        Clear
      </div>
    </div>
  );
}

export default Filters;
