import Nav from "../Navbar/Nav";
import Bg from "../../gallery/hero.jpg";
import HeroText from "../HeroComp/HeroText";
import HeroButton from "../HeroComp/HeroButton";
import HeroPara from "../HeroComp/HeroPara";

const Section = () => {
  return (
    <div
      className="relative w-full h-screen  bg-cover bg-center"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <Nav />
      <HeroText />
      <HeroButton />
      <HeroPara />
    </div>
  );
};

export default Section;
