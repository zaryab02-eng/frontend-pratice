import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-900 py-1.5 flex justify-center gap-x-2 w-full fixed bottom-0">
      <Link
        to={"-1"}
        className="bg-red-600 px-3 py-1 rounded-2xl active:scale-95"
      >
        Previous
      </Link>
      <Link
        to={"+1"}
        className="bg-red-600 px-3 py-1 rounded-2xl active:scale-95"
      >
        Forward
      </Link>
    </div>
  );
};

export default Footer;
