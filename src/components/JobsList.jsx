import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import data from "../data.json";
import JobItem from "./JobItem";

const useFilters = () => {
  const filters = useSelector((state) => state.filters.activeFilters);

  return { filters };
};

const useJobs = () => {
  const { filters } = useFilters();

  const jobs = useMemo(() => {
    let jobs = data;
    for (let filter of filters) {
      console.log(filter);
      if (filter.type === "role") {
        jobs = jobs.filter((job) => job.role === filter.name);
      }
      if (filter.type === "level") {
        jobs = jobs.filter((job) => job.level === filter.name);
      }
      if (filter.type === "language") {
        jobs = jobs.filter((job) => job.languages.includes(filter.name));
      }
    }
    return jobs;
  }, [filters]);

  return { jobs };
};

function JobsList() {
  const { jobs } = useJobs();

  return (
    <div className="mt-10">
      {jobs.map((job) => (
        <JobItem key={job.id} data={job} />
      ))}
    </div>
  );
}

export default JobsList;
