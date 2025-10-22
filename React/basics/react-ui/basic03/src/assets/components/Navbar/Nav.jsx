import { IoMenuSharp } from "react-icons/io5";

const Nav = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-14 lg:h-[4.6875rem] sm:h-[3.125rem] md:h-[4.0625rem] bg-transparent flex items-center lg:items-center justify-between  px-6 lg:px-7 sm:px-7 sm:py-7 md:px-10 md:py-2 z-50 text-white md:bg-gray-800/20 md:backdrop-blur-sm">
      <h2 className="font-bold sm:text-[1.125rem] md:text-2xl lg:text-[1.375rem] cursor-pointer">
        LUMINU
      </h2>
      <ul className="hidden lg:flex lg:gap-x-9 lg:text-[1rem] lg:relative lg:right-[12rem] xl:right-[17.4rem]">
        <li className="hover:text-purple-400 cursor-pointer">Home</li>
        <li className="hover:text-purple-400 cursor-pointer">About</li>
        <li className="hover:text-purple-400 cursor-pointer">Solutions</li>
        <li className="hover:text-purple-400 cursor-pointer">Contact</li>
      </ul>
      <div>
        <span className="text-3xl cursor-pointer sm:text-4xl md:text-4xl">
          <IoMenuSharp className="lg:hidden" />
        </span>
        <div className="hidden lg:flex lg:bg-amber-50 lg:text-black lg:mr-2.5 lg:px-8 xl:px-9 lg:py-2.5 lg:rounded-full">
          <button className="hidden lg:flex lg:text-[1rem]">Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
