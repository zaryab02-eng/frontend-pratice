import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 py-1.5 flex justify-center gap-x-2 w-full fixed bottom-0">
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="bg-red-600 px-3 py-1 rounded-2xl active:scale-95 cursor-pointer"
      >
        Previous
      </button>
      <button
        onClick={() => {
          navigate(+1);
        }}
        className="bg-red-600 px-3 py-1 rounded-2xl active:scale-95 cursor-pointer"
      >
        Forward
      </button>
    </div>
  );
};

export default Footer;
