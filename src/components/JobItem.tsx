import React from "react";
import { useFiltersActions } from "../hooks/useFiltersActions";
import { Job } from "./JobsList";

function getImgUrl(name: string) {
  return new URL(`${name}`, import.meta.url).href;
}

function JobItem({ job }: { job: Job }) {
  const { addNewFilter } = useFiltersActions();

  return (
    <div className="border-l-4 border-sky-600 rounded  flex shadow-lg justify-between p-6 mb-10 bg-white">
      <div className="flex">
        <img className="mr-6" src={getImgUrl(job.logo)} alt="logo" />
        <div className="flex flex-col justify-between">
          <div className="flex">
            <span className="mr-2 flex flex-col justify-center items-center leading-6 text-cyan-600 font-bold">
              {job.company}
            </span>
            {job.new ? <span className="badge-primary ml-1">NEW!</span> : ""}
            {job.featured ? (
              <span className="badge-bold ml-1">FEATURED</span>
            ) : (
              ""
            )}
          </div>
          <div className="text-left font-bold text-slate-700">
            {job.position}
          </div>
          <ul className="flex flex-row justify-between text-slate-500 font-semibold space-x-3">
            <li>{job.postedAt}</li>
            <li>{job.contract}</li>
            <li>{job.location}</li>
          </ul>
        </div>
      </div>
      <div className="grow flex justify-end items-center">
        <div className="flex justify-center items-center">
          <span
            onClick={() => addNewFilter({ type: "role", name: job.role })}
            className="badge-square ml-3 cursor-pointer"
          >
            {job.role}
          </span>
          <span
            onClick={() => addNewFilter({ type: "level", name: job.level })}
            className="badge-square ml-3 cursor-pointer"
          >
            {job.level}
          </span>
          {job.languages.map((language) => (
            <span
              key={language}
              onClick={() => addNewFilter({ type: "language", name: language })}
              className="badge-square ml-3 cursor-pointer"
            >
              {language}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JobItem;
