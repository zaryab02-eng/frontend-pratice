import Tag6 from "../../Cards/Tag6";

const QuickLink = () => {
  return (
    <div className="w-full py-2 h-min bottom-4.5 right-0.5 relative lg:h-[36rem] sm:-mt-8 font-semibold tracking-wider md:ml-[-0.7rem] md:pr-2 md:relative sm:relative sm:top-8 md:bottom-100 lg:relative lg:bottom-80 lg:mt-40 2xl:relative 2xl:left-12">
      <h2 className="text-[1.3125rem] font-semibold md:text-[1.4rem] md:font-normal ml-6 lg:text-[1.9rem] xl:bottom-28  lg:tracking-tight lg:left-2.5 lg:bottom-0.5 lg:relative font-[SFProDisplay]  xl:font-semibold xl:text-[1.8rem] md:tracking-normal leading-7 xl:relative xl:left-20 xl:tracking-wide">
        Quick Links
      </h2>
      <div
        id="card1"
        className="w-full h-min py-2 overflow-x-auto gap-x-2 top-3 flex relative"
      >
        <Tag6 />
      </div>
    </div>
  );
};

export default QuickLink;
