import { useFiltersActions } from "../hooks/useFiltersActions";
import { Job } from "./JobsList";

function getImgUrl(name: string) {
  return new URL(`${name}`, import.meta.url).href;
}

function JobItem({ job }: { job: Job }) {
  const { addNewFilter } = useFiltersActions();

  return (
    <div
      className={`${
        job.featured ? "border-l-4 border-desaturated_dark_cyan rounded" : ""
      } flex flex-col xl:flex-row shadow-lg justify-between p-6 pt-8 md:pt-6 mb-10 bg-white w-full hover:shadow-2xl transition-all animate-reveal animation-timeline-view animation-range-entry relative`}
    >
      <div className="flex">
        <img
          className="mr-6 size-12 absolute -top-6 md:static md:size-20"
          src={getImgUrl(job.logo)}
          alt="logo"
        />
        <div className="flex flex-col justify-between gap-2 md:gap-0">
          <div className="flex">
            <span className="mr-2 flex flex-col justify-center items-center leading-6 text-desaturated_dark_cyan font-bold text-sm md:text-base">
              {job.company}
            </span>
            {job.new && <span className="badge-primary ml-1">NEW!</span>}
            {job.featured && <span className="badge-bold ml-1">FEATURED</span>}
          </div>
          <div className="text-left font-bold text-very_dark_grayish_cyan cursor-pointer hover:text-desaturated_dark_cyan text-sm md:text-base">
            {job.position}
          </div>
          <ul className="flex flex-row justify-between text-slate-500 font-semibold space-x-3 text-sm md:text-base">
            <li>{job.postedAt}</li>
            <li>{job.contract}</li>
            <li>{job.location}</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-start items-center flex-wrap gap-4 mt-4">
        <JobItemBadge
          onClick={() => addNewFilter({ type: "role", name: job.role })}
        >
          {job.role}
        </JobItemBadge>
        <JobItemBadge
          onClick={() => addNewFilter({ type: "level", name: job.level })}
        >
          {job.level}
        </JobItemBadge>
        {job.languages.map((language) => (
          <JobItemBadge
            key={language}
            onClick={() => addNewFilter({ type: "language", name: language })}
          >
            {language}
          </JobItemBadge>
        ))}
        {job.tools.map((tool) => (
          <JobItemBadge
            key={tool}
            onClick={() => addNewFilter({ type: "tool", name: tool })}
          >
            {tool}
          </JobItemBadge>
        ))}
      </div>
    </div>
  );
}

function JobItemBadge({
  children,
  onClick,
}: {
  children: string;
  onClick: () => void;
}) {
  return (
    <span
      onClick={onClick}
      className="badge-square cursor-pointer font-bold hover:bg-desaturated_dark_cyan hover:text-white"
    >
      {children}
    </span>
  );
}

export default JobItem;
