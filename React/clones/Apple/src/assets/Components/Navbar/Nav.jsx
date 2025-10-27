import Nav1 from "./Nav1";
import Nav2 from "./Nav2";

const Nav = () => {
  return (
    <div className="h-[3rem] bg-amber-400 flex justify-between">
      <Nav1 />
      <Nav2 />
    </div>
  );
};

export default Nav;
