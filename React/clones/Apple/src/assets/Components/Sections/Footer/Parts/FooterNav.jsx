import { FaApple } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const FooterNav = () => {
  return (
    <div className="h-[3.5625rem] w-full mt-2 flex items-center md:-translate-y-120 lg:-translate-y-20 xl:-translate-y-44 xl:pl-35 gap-x-2 pl-2.5 pt-1">
      <div className="flex p-1 gap-x-1 items-center justify-center lg:pl-2 lg:gap-x-1.5">
        <span className="-translate-y-0.5 sm:translate-y-0 md:-translate-y-1.5 text-[1.1rem] md:text-[0.7rem] lg:text-[1rem] lg:translate-y-0 xl:-translate-y-0.5">
          <FaApple />
        </span>
        <IoIosArrowForward className="text-gray-500 sm:translate-y-0.5 md:-translate-y-1 text-[0.5rem] lg:text-[0.8rem] lg:translate-y-0" />
      </div>
      <span className="text-[0.8rem] lg:text-[0.7rem] translate-y-0.5 md:-translate-y-1 -translate-x-0.5 text-gray-700 tracking-tight md:text-[0.5rem] lg:translate-y-0.5 md:tracking-wide xl:-translate-y-0.5">
        Apple Store Online
      </span>
    </div>
  );
};

export default FooterNav;
