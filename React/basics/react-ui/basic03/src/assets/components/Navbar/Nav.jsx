import { useEffect, useState } from "react";
import { IoMenuSharp } from "react-icons/io5";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-14 lg:h-[4.6875rem] sm:h-[3.125rem] md:h-[4.0625rem] 
      flex justify-between py-2.5 px-5 sm:px-7 md:py-3 lg:py-5 lg:px-5 xl:px-8 xl:py-7 z-50 text-white transition-all duration-300
      ${isScrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"}`}
    >
      <h2 className="font-bold text-[1.125rem] sm:text-[1.125rem] md:text-2xl lg:text-[1.375rem] xl:text-[1.200rem] cursor-pointer sm:relative sm:left-2">
        LUMINU
      </h2>

      <ul className="hidden lg:flex lg:text-[1rem] xl:right-[17.6rem] lg:gap-x-8 lg:relative lg:right-48 lg:top-1">
        <li className="hover:text-purple-400 cursor-pointer">Home</li>
        <li className="hover:text-purple-400 cursor-pointer">About</li>
        <li className="hover:text-purple-400 cursor-pointer">Solutions</li>
        <li className="hover:text-purple-400 cursor-pointer">Contact</li>
      </ul>

      <div>
        <span className="text-3xl relative right-2 md:right-5 bottom-0.5 cursor-pointer sm:text-[2rem] sm:relative sm:right-7 md:text-4xl">
          <IoMenuSharp className="lg:hidden xl:hidden" />
        </span>
        <div className="hidden lg:flex lg:bg-amber-50 lg:text-black lg:mr-2.5 lg:px-8 xl:px-8 lg:py-2.5 xl:py-3 xl:bottom-3 lg:relative lg:bottom-2 lg:right-3 xl:justify-center xl:items-center lg:rounded-full">
          <button className="hidden lg:flex lg:text-[1rem]">Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
