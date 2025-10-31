import Card2 from "../../Cards/Card2";

const Latest = () => {
  return (
    <div className="w-full h-[34.625rem] lg:h-[36rem] font-semibold tracking-wider pl-6 md:pl-5 bg-amber-400 md:relative md:bottom-42 lg:relative lg:bottom-44 lg:mt-40">
      <h2 className="text-2xl md:text-[1.4rem] lg:text-[1.8rem] md:mt-1 lg:relative lg:pb-3 font-[SFProDisplay] lg:tracking-wide leading-7">
        The latest.&nbsp;
        <span className="text-[#76767B]">
          Take a look at <br className="sm:hidden" /> what's new right now.
        </span>
      </h2>
      <Card2 />
    </div>
  );
};

export default Latest;
