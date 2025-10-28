// Nav2.jsx
import { IoIosSearch } from "react-icons/io";
import { BiShoppingBag } from "react-icons/bi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const Nav2 = () => {
  return (
    <div className="flex gap-x-7 xl:text-[1.2rem] xl:gap-[2.3rem] xl:relative xl:pr-3.5">
      <IoIosSearch />
      <BiShoppingBag />
      <HiOutlineMenuAlt4 className="lg:hidden xl:hidden" />
    </div>
  );
};

export default Nav2;
