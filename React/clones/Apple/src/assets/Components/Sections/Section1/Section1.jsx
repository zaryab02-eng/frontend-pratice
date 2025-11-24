import CardSection1 from "./CardSection1";
import Latest from "./Latest";
import NavHeading from "./NavHeading";
import StoreBox from "./StoreBox";
import HelpIsHere from "./HelpIsHere";
import Apple from "./AppleStore";
import Special from "./Special";
import Quick from "./QuickLinks";

const Section1 = () => {
  return (
    <div>
      <NavHeading />
      <StoreBox />
      <CardSection1 />
      <Latest />
      <HelpIsHere />
      <Apple />
      <Special />
      <Quick />
    </div>
  );
};

export default Section1;
