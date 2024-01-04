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
        filters.length === 0 ? "h-0 p-0 hidden" : "h-auto flex"
      } container mx-auto shadow-lg p-8 justify-between bg-white -mt-10 rounded-md transition-all`}
    >
      <div className="flex">
        {filters?.map((filter) => (
          <React.Fragment key={filter.name}>
            <div className="badge-square ml-5 font-bold">{filter.name}</div>
            <button
              className="bg-desaturated_dark_cyan h-full w-6 flex items-center justify-center text-white rounded-r-sm hover:bg-very_dark_grayish_cyan"
              onClick={() =>
                removeExistingFilter({ type: filter.type, name: filter.name })
              }
            >
              <RemoveIcon />
            </button>
          </React.Fragment>
        ))}
      </div>
      <div
        className="text-dark_grayish_cyan cursor-pointer"
        onClick={clearExistingFilters}
      >
        <strong>Clear</strong>
      </div>
    </div>
  );
}
