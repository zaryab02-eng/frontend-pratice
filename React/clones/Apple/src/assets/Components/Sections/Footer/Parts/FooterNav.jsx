import { FaApple } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const FooterNav = () => {
  return (
    <div className="h-[3.5625rem] bg-amber-400 w-full mt-2 flex items-center gap-x-2 pl-2.5 pt-1">
      <div className="flex p-1 gap-x-1 items-center justify-center">
        <span className="-translate-y-0.5 text-[1.1rem] ">
          <FaApple />
        </span>
        <IoIosArrowForward className="text-gray-500" />
      </div>
      <span className="text-[0.8rem] translate-y-0.5 -translate-x-0.5 text-gray-700 tracking-tight">
        Apple Store Online
      </span>
    </div>
  );
};

export default FooterNav;
