const Quick = () => {
  return (
    <div className=" md:-translate-x-1 md:-translate-y-120 lg:-translate-y-23 lg:-translate-x-0 xl:-translate-y-48.5 xl:translate-x-18">
      <div className="sm:-translate-y-1 md:translate-y-0.5">
        <h2 className="text-black text-[1.3rem] lg:text-[1.8rem] xl:text-[1.7rem] font-[SFProDisplay] font-semibold tracking-wider sm:tracking-wide translate-y-0.5 translate-x-5.5">
          Quick Links
        </h2>
      </div>
      <div className="mt-1.5 -translate-x-0.5 sm:mt-1.5 md:mt-[-0.1rem] md:ml-[-0.2rem] lg:mt-2 xl:mt-1">
        <div
          id="card1"
          className="w-full py-3 pl-6 pr-5.5 flex items-center gap-2 xl:gap-x-3 overflow-x-auto whitespace-nowrap will-change-transform sm:tracking-wide"
        >
          <span className="text-[0.9rem] lg:text-[0.95rem] md:text-[0.7rem] font-[SFProDisplay] px-[1.1rem] py-[0.45rem] md:py-1.5 md:px-3 lg:px-3.5 border-1 border-black rounded-full">
            Find a Store
          </span>
          <span className="text-[0.9rem] md:text-[0.7rem] lg:text-[0.95rem] font-[SFProDisplay] px-[1.1rem] py-[0.45rem] md:py-1.5 md:px-3 lg:px-3.5 border-1 border-black rounded-full">
            Order Status
          </span>
          <span className="text-[0.9rem] md:text-[0.7rem] lg:text-[0.95rem] font-[SFProDisplay] px-[1.1rem] py-[0.45rem] md:py-1.5 md:px-3 lg:px-3.5 border-1 border-black rounded-full">
            Shopping Help
          </span>
          <span className="text-[0.9rem] md:text-[0.7rem] lg:text-[0.95rem] font-[SFProDisplay] px-[1.1rem] py-[0.45rem] md:py-1.5 md:px-3 lg:px-3.5 border-1 border-black rounded-full">
            Your Saves
          </span>
        </div>
      </div>
    </div>
  );
};

export default Quick;
