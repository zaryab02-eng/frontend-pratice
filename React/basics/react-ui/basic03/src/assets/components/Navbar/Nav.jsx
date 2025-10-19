import { IoMenuSharp } from "react-icons/io5";

const Nav = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-14 md:h-20 bg-transparent flex items-center justify-between px-6 md:px-12 z-50 text-white md:bg-gray-800/20 md:backdrop-blur-sm">
      <h2 className="font-bold cursor-pointer md:text-3xl">LUMINU</h2>
      <div className="hidden">Menu</div>
      <span className="text-3xl cursor-pointer md:text-4xl">
        <IoMenuSharp />
      </span>
    </div>
  );
};

export default Nav;
