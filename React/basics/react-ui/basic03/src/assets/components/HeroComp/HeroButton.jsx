import { MdArrowForwardIos } from "react-icons/md";

const HeroButton = () => {
  return (
    <div className="z-50 bg-white w-max py-0.5 md:p-1.5 sm:py-1 sm:px-5 md:px-2.5 md:py-1 px-3.5 flex items-center rounded-full sm:text-[0.75rem] md:text-[1.2rem] text-[0.8rem] gap-x-3.5 mt-3 ml-6 sm:mt-4 sm:ml-9 lg:ml-12 cursor-pointer hover:bg-blue-200 transition-colors duration-200 ">
      <button className="relative left-2 cursor-pointer">Get Started</button>
      <div className="bg-black text-white text-[1rem] p-2 rounded-full relative left-[0.50rem]">
        <MdArrowForwardIos />
      </div>
    </div>
  );
};

export default HeroButton;
