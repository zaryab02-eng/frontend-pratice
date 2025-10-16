import { FaShoppingCart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import Logo from "../gallery/logo.png";

const Navbar = () => {
  return (
    <div className="h-14 bg-white flex justify-between items-center px-5 sticky top-0 z-10">
      <div>
        <img src={Logo} alt="logo" className="h-14" />
      </div>
      <div className="text-black flex gap-x-9 font-semibold">
        <a href="#" className="nav-link">
          Home
        </a>
        <a href="#" className="nav-link">
          Products
        </a>
        <a href="#" className="nav-link">
          About
        </a>
        <a href="#" className="nav-link">
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
