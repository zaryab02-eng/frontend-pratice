import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex px-4 py-3 bg-gray-900 justify-between">
      <h2 className="text-2xl font-bold">SAMSUNG</h2>
      <div className="space-x-4 flex items-center">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact Us</Link>
        <Link to={"/product"}>Product</Link>
      </div>
    </div>
  );
};

export default Navbar;
