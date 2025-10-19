import { IoMenuSharp } from "react-icons/io5";

const Nav = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-14 bg-transparent flex items-center justify-between px-6 z-50 text-white">
      <h2 className="font-bold cursor-pointer">LUMINU</h2>
      <div className="hidden">Menu</div>
      <span className="text-3xl cursor-pointer">
        <IoMenuSharp />
      </span>
    </div>
  );
};

export default Nav;
