import React from "react";
import { useFiltersActions } from "../hooks/useFiltersActions";

function getImgUrl(name) {
  return new URL(`${name}`, import.meta.url).href;
}

function JobItem({
  data: {
    company,
    contract,
    featured,
    languages,
    level,
    location,
    new: isNew,
    logo,
    position,
    postedAt,
    role,
    tools,
  },
}) {
  const { addNewFilter } = useFiltersActions();

  return (
    <div className="border-l-4 border-sky-600 rounded  flex shadow-lg justify-between p-6 mb-10 bg-white">
      <div className="flex">
        <img className="mr-6" src={getImgUrl(logo)} alt="logo" />
        <div className="flex flex-col justify-between">
          <div className="flex">
            <span className="mr-2 flex flex-col justify-center items-center leading-6 text-cyan-600 font-bold">
              {company}
            </span>
            {isNew ? <span className="badge-primary ml-1">NEW!</span> : ""}
            {featured ? <span className="badge-bold ml-1">FEATURED</span> : ""}
          </div>
          <div className="text-left font-bold text-slate-700">{position}</div>
          <ul className="flex flex-row justify-between text-slate-500 font-semibold space-x-3">
            <li>{postedAt}</li>
            <li>{contract}</li>
            <li>{location}</li>
          </ul>
        </div>
      </div>
      <div className="grow flex justify-end items-center">
        <div className="flex justify-center items-center">
          <span
            onClick={() => addNewFilter({ type: "role", name: role })}
            className="badge-square ml-3 cursor-pointer"
          >
            {role}
          </span>
          <span
            onClick={() => addNewFilter({ type: "level", name: level })}
            className="badge-square ml-3 cursor-pointer"
          >
            {level}
          </span>
          {languages.map((language) => (
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
