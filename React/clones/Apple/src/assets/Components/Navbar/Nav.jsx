import Nav1 from "./Nav1";
import Nav2 from "./Nav2";

const Nav = () => {
  return (
    <div className="h-[3rem] bg-amber-400 flex justify-between py-3 px-3 lg:px-5">
      <Nav1 />
      <Nav2 />
    </div>
  );
};

export default Nav;
