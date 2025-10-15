import { FaBookmark } from "react-icons/fa";

const Card = () => {
  return (
    <div className="p-6">
      <div className="bg-white text-black h-72 w-64 rounded-2xl relative">
        <div className="flex justify-between p-6">
          <div className="w-max h-max">
            <img
              className="w-8"
              src="https://img.favpng.com/11/1/15/google-logo-png-favpng-sdEUHqixZ3JpmUxbr41KhEU5g.jpg"
              alt="Google"
            />
          </div>
          <div className="px-2.5 py-1 bg-[#EAEAEA] space-x-1 rounded w-min h-min flex items-center justify-between">
            <h4 className="text-[13px]">Saved</h4>
            <FaBookmark className="text-[12px]" />
          </div>
        </div>
        <div className="flex flex-col px-6 space-y-3 items-start">
          <div className="flex items-center space-x-1">
            <h5 className="text-[13px] font-arial">Google</h5>
            <span className="text-[9px] text-gray-400">30 days ago</span>
          </div>
          <h1 className="font-semibold text-[20px]">Graphic Designer</h1>
          <div className="flex space-x-2">
            <div className="text-[12px] py-1 px-2 rounded-lg bg-[#EAEAEA]">
              <p>Full-time</p>
            </div>
            <div className="text-[12px] py-1 px-2 rounded-lg bg-[#EAEAEA]">
              <p>Flexible schedule</p>
            </div>
          </div>
        </div>
        <div className="px-6 flex justify-between absolute bottom-6 space-x-11">
          <div className="leading-4.5">
            <h1 className="text-[15px] font-semibold">$150-220k</h1>
            <span className="text-[9px] text-gray-400">Mountain View CA</span>
          </div>
          <button className="bg-[#000000] text-white px-3 py-1.5 rounded-lg text-[13px]">
            Apply now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
