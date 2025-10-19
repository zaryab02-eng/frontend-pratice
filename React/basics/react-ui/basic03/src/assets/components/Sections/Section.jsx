import Nav from "../Navbar/Nav";
import Bg from "../../gallery/hero.jpg";

const Section = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Navbar always on top */}
      <Nav />

      {/* Hero background */}
      <div
        className="w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${Bg})` }}
      ></div>
    </div>
  );
};

export default Section;
