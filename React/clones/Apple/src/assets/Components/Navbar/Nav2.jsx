import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const Nav2 = () => {
  return (
    <div className="flex text-[1.3rem] lg:text-[1.1rem] gap-x-7 lg:gap-x-10">
      <IoIosSearch />
      <IoBagOutline />
      <HiOutlineMenuAlt4 className="lg:hidden" />
    </div>
  );
};

export default Nav2;
