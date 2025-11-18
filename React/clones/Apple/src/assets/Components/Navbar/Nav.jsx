import Nav1 from "./Nav1";
import Nav2 from "./Nav2";
import Nav3 from "./Nav3";
const Nav = () => {
  return (
    <div className="h-12 bg-[#F5F5F7] z-50 w-full flex justify-between lg:flex xl:left-4 lg:justify-center lg:gap-x-[2.5rem] pt-3 px-3  text-[1.3rem] xl:flex xl:justify-center xl:gap-x-[2.5rem] relative">
      <Nav1 />
      <Nav3 />
      <Nav2 />
    </div>
  );
};

export default Nav;
