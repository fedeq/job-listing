import { useMemo } from "react";
import data from "../data.json";
import JobItem from "./JobItem";
import { useFilters } from "../hooks/useFilters";

const useJobs = () => {
  const { filters } = useFilters();

  const jobs: Job[] = useMemo(() => {
    let jobs = data;
    for (let filter of filters) {
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

export function JobsList() {
  const { jobs } = useJobs();
  return (
    <div className="container mx-auto p-8">
      {jobs.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </div>
  );
}

export interface Job {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: Role;
  level: Level;
  postedAt: string;
  contract: Contract;
  location: string;
  languages: string[];
  tools: string[];
}

export enum Contract {
  Contract = "Contract",
  FullTime = "Full Time",
  PartTime = "Part Time",
}

export enum Level {
  Junior = "Junior",
  Midweight = "Midweight",
  Senior = "Senior",
}

export enum Role {
  Backend = "Backend",
  Frontend = "Frontend",
  Fullstack = "Fullstack",
}
