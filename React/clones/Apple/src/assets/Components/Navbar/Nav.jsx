import Nav1 from "./Nav1";
import Nav2 from "./Nav2";
import Nav3 from "./Nav3";
const Nav = () => {
  return (
    <div className="h-12 bg-amber-300 w-full flex justify-between lg:flex lg:justify-center lg:gap-x-[2.5rem] pt-3 px-3  text-[1.3rem]  xl:flex xl:justify-center xl:gap-x-[2.5rem]">
      <Nav1 />
      <Nav3 />
      <Nav2 />
    </div>
  );
};

export default Nav;
