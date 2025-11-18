import Card2 from "../../Cards/Card2";

const Latest = () => {
  return (
    <div className="w-full h-[34.625rem] lg:h-[36rem] mb-7 font-semibold tracking-wider pl-6 md:pl-4 md:relative md:bottom-42 sm:relative sm:bottom-5 lg:relative lg:bottom-44 lg:mt-40 2xl:relative 2xl:left-13 2xl:bottom-40">
      <h2 className="text-2xl md:text-[1.4rem] lg:text-[1.8rem] md:mt-[0.35rem] 2xl:bottom-4 lg:relative lg:pb-3 font-[SFProDisplay] xl:tracking-wide leading-7 xl:top-1 xl:left-19 2xl:relative">
        The latest.&nbsp;
        <span className="text-[#76767B]">
          Take a look at <br className="sm:hidden" /> what's new right now.
        </span>
      </h2>
      <div className="xl:bottom-1 xl:relative">
        <Card2 />
      </div>
    </div>
  );
};

export default Latest;
