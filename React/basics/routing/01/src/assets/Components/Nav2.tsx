import { Link } from "react-router-dom";
const Nav2 = () => {
  return (
    <div className="flex justify-center py-2 bg-gray-950">
      <div className=" flex gap-x-2">
        <Link
          className="bg-white text-black font-semibold px-3 py-1 active:scale-95"
          to={"/Men"}
        >
          Men
        </Link>
        <Link
          className="bg-white text-black font-semibold px-3 py-1 active:scale-95"
          to={"/Women"}
        >
          Women
        </Link>
        <Link
          className="bg-white text-black font-semibold px-3 py-1 active:scale-95"
          to={"/Kids"}
        >
          Kids
        </Link>
      </div>
    </div>
  );
};

export default Nav2;
