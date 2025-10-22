import { MdArrowForwardIos } from "react-icons/md";

const HeroButton = () => {
  return (
    <div className="z-50 bg-white w-max py-0.5 lg:w-[12.3rem] lg:h-[2.9375rem] lg:items-center lg:justify-between lg:text-[1rem] md:p-1.5 sm:py-1 sm:px-5 md:px-2.5 md:py-1 px-3.5 flex items-center rounded-full sm:text-[0.75rem] md:text-[1.2rem] text-[0.8rem] gap-x-3.5 mt-3 ml-6 sm:mt-4 sm:ml-9 lg:mt-5 lg:ml-9 cursor-pointer hover:bg-blue-200 transition-colors duration-200 ">
      <button className="relative left-2 cursor-pointer lg:ml-2">
        Get Started
      </button>
      <div className="bg-black text-white text-[1rem] p-3 rounded-full relative left-[0.50rem]">
        <MdArrowForwardIos />
      </div>
    </div>
  );
};

export default HeroButton;
