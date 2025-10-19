import { MdArrowForwardIos } from "react-icons/md";

const HeroButton = () => {
  return (
    <div className="z-50 bg-white w-max py-1 md:p-1.5 md:px-5 px-3.5 flex items-center rounded-full md:text-[1.2rem] text-[0.9rem] gap-x-3.5 mt-3 ml-7 cursor-pointer hover:bg-blue-200 transition-colors duration-200 ">
      <button className="relative left-2 cursor-pointer">Get Started</button>
      <div className="bg-black text-white text-[1rem] p-2 rounded-full relative left-[0.50rem]">
        <MdArrowForwardIos />
      </div>
    </div>
  );
};

export default HeroButton;
