import { IoMenuSharp } from "react-icons/io5";

const Nav = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-14 sm:h-[3.125rem] md:h-[4.0625rem] lg:h-[4.9rem] bg-transparent flex items-center justify-between px-6 sm:px-7 sm:py-7 md:px-10 md:py-2 z-50 text-white md:bg-gray-800/20 md:backdrop-blur-sm">
      <h2 className="font-bold cursor-pointer sm:text-[1.125rem] md:text-2xl lg:text-[1.7rem]">
        LUMINU
      </h2>
      <ul className="hidden lg:flex lg:gap-x-9 lg:text-[1.2rem] lg:relative lg:right-[17rem]">
        <li>Home</li>
        <li>About</li>
        <li>Solutions</li>
        <li>Contact</li>
      </ul>
      <div>
        <span className="text-3xl cursor-pointer sm:text-4xl md:text-4xl">
          <IoMenuSharp className="lg:hidden" />
        </span>
        <div className="hidden lg:flex lg:bg-amber-50 lg:text-black lg:px-9 lg:py-2.5 lg:rounded-full">
          <button className="hidden lg:flex lg:text-[1.2rem]">Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
