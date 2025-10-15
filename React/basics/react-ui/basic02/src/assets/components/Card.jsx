import { FaBookmark } from "react-icons/fa";

const Card = ({ job }) => {
  return (
    <div className="p-6">
      <div className="bg-white text-black h-72 w-64 rounded-2xl relative">
        <div className="flex justify-between p-6">
          <div className="w-max h-max">
            <img className="w-8" src={job.logo} alt={job.company} />
          </div>
          <div className="px-2.5 py-1 bg-[#EAEAEA] space-x-1 rounded w-min h-min flex items-center justify-between">
            <h4 className="text-[13px]">{job.saved ? "Saved" : "Save"}</h4>
            <FaBookmark className="text-[12px]" />
          </div>
        </div>
        <div className="flex flex-col px-6 space-y-3 items-start">
          <div className="flex items-center space-x-1">
            <h5 className="text-[13px] font-arial">{job.company}</h5>
            <span className="text-[9px] text-gray-400">{job.posted}</span>
          </div>
          <h1 className="font-semibold text-[20px]">{job.title}</h1>
          <div className="flex space-x-2">
            <div className="text-[12px] py-1 px-2 rounded-lg bg-[#EAEAEA]">
              <p>{job.type[0]}</p>
            </div>
            <div className="text-[12px] py-1 px-2 rounded-lg bg-[#EAEAEA]">
              <p>{job.type[1]}</p>
            </div>
          </div>
        </div>
        <div className="px-6 flex justify-between absolute bottom-6 space-x-11">
          <div className="leading-4.5">
            <h1 className="text-[15px] font-semibold">{job.salary}</h1>
            <span className="text-[9px] text-gray-400">{job.location}</span>
          </div>
          <button className="bg-[#000000] text-white px-3 py-1.5 rounded-lg text-[13px] cursor-pointer">
            Apply now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
