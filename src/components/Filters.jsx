import React from "react";
import { RemoveIcon } from "./RemoveIcon";
import { useFiltersActions } from "../hooks/useFiltersActions";
import { useFilters } from "../hooks/useFilters";

export function Filters() {
  const { clearExistingFilters, removeExistingFilter } = useFiltersActions();
  const { filters } = useFilters();

  return (
    <div
      className={`${
        filters.length === 0 ? "h-0 p-0 hidden" : "h-auto"
      } container mx-auto px-8 -mt-10`}
    >
      <div
        className={`gap-4 h-auto flex container mx-auto shadow-lg p-6 justify-between bg-white rounded-md`}
      >
        <div className="flex flex-wrap gap-4">
          {filters?.map((filter) => (
            <div key={filter.name} className="flex">
              <div className="badge-square font-bold">{filter.name}</div>
              <button
                className="bg-desaturated_dark_cyan h-auto w-6 flex items-center justify-center text-white rounded-r-sm hover:bg-very_dark_grayish_cyan"
                onClick={() =>
                  removeExistingFilter({ type: filter.type, name: filter.name })
                }
              >
                <RemoveIcon />
              </button>
            </div>
          ))}
        </div>
        <div
          className="text-dark_grayish_cyan cursor-pointer"
          onClick={clearExistingFilters}
        >
          <strong>Clear</strong>
        </div>
      </div>
    </div>
  );
}
