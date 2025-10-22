import Card from "../Section2/Card";
import SectionTexts from "../Section2/SectionTexts";

const Section2 = () => {
  return (
    <>
      <div className="bg-white z-20 h-max w-full top-[31rem] absolute rounded-t-3xl py-4 px-5">
        <SectionTexts />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Section2;
