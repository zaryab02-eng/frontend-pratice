import Herobg from "../gallery/hero.png";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Hero = () => {
  return (
    <div className="h-dvh">
      <img src={Herobg} alt="Hero" className="h-screen" />
      <button className="bg-gradient-to-r from-blue-400 to-blue-600 px-14 py-4.5 text-4xl rounded-full font-semibold absolute top-[82.15%] left-[5.85%] ">
        SHOP NOW
      </button>
      <MdOutlineArrowForwardIos />
    </div>
  );
};

export default Hero;
