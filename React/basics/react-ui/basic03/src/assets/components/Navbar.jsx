import { FaShoppingCart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import Logo from "../gallery/logo.png";

const Navbar = () => {
  return (
    <div className="h-14 bg-white flex justify-between items-center px-5 sticky top-0 z-10">
      <div>
        <img src={Logo} alt="logo" className="h-36" />
      </div>
      <div className="text-black flex gap-x-9 font-semibold">
        <a
          href="#"
          className="relative text-gray-700 hover:text-blue-600 transition-all duration-300
                     after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-blue-600 after:w-0 
                     hover:after:w-full after:transition-all after:duration-300"
        >
          Home
        </a>
        <a
          href="#"
          className="relative text-gray-700 hover:text-blue-600 transition-all duration-300
                     after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-blue-600 after:w-0 
                     hover:after:w-full after:transition-all after:duration-300"
        >
          Products
        </a>
        <a
          href="#"
          className="relative text-gray-700 hover:text-blue-600 transition-all duration-300
                     after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-blue-600 after:w-0 
                     hover:after:w-full after:transition-all after:duration-300"
        >
          About
        </a>
        <a
          href="#"
          className="relative text-gray-700 hover:text-blue-600 transition-all duration-300
                     after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-blue-600 after:w-0 
                     hover:after:w-full after:transition-all after:duration-300"
        >
          Contact
        </a>
      </div>
      <div className="text-black flex text-2xl gap-x-2">
        <IoMdSearch />
        <FaShoppingCart />
      </div>
    </div>
  );
};

export default Navbar;
