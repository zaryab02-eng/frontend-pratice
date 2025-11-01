import Card3 from "../../Cards/Card3";

const Latest = () => {
  return (
    <div className="w-full h-[34.625rem] lg:h-[36rem] font-semibold tracking-wider pl-6 md:pl-5 md:relative md:bottom-42 lg:relative lg:bottom-44 lg:mt-40">
      <h2 className="text-2xl md:text-[1.4rem] lg:text-[1.8rem] md:mt-1 lg:relative lg:pb-3 font-[SFProDisplay] xl:tracking-wide leading-7 xl:top-1 xl:left-19">
        Help is here.&nbsp;
        <span className="text-[#76767B]">
          Whenever and <br className="sm:hidden" /> however you need it.
        </span>
      </h2>
      <div className="xl:bottom-1 xl:relative">
        <Card3 />
      </div>
    </div>
  );
};

export default Latest;
