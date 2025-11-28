import Card5 from "../../Cards/Card5";

const Special = () => {
  return (
    <div className="w-full bg-[#F5F5F7] h-[34.625rem] bottom-16 relative lg:h-[36rem] sm:-mt-8 font-semibold tracking-wider md:ml-[-0.7rem] md:pr-2 md:relative sm:relative sm:bottom-5 md:bottom-100 2xl:relative 2xl:left-12 lg:translate-y-68 lg:translate-x-2.5 xl:-translate-x-0">
      <h2 className="text-2xl md:text-[1.4rem] md:font-normal ml-6 lg:text-[1.9rem] xl:bottom-28 md:translate-1.5 lg:tracking-tight font-[SFProDisplay]  xl:font-semibold xl:text-[1.7rem] md:tracking-normal leading-7 xl:relative xl:left-20 lg:-translate-y-1.5 lg:-translate-x-0.5 xl:translate-y-1.5 xl:tracking-wider xl:translate-x-1">
        Special stores.&nbsp;
        <span className="text-[#76767B]">
          Exclusive savings for students and educators.
        </span>
      </h2>
      <div className="xl:bottom-1 xl:relative">
        <Card5 />
      </div>
    </div>
  );
};

export default Special;
