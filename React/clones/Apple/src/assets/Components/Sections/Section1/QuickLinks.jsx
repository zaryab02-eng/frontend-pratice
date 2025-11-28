const Quick = () => {
  return (
    <div className="md:-translate-120 md:-translate-x-1">
      {/* Only translate the heading container */}
      <div className="sm:translate-y-5">
        <h2 className="text-black text-[1.3rem] font-[SFProDisplay] font-semibold tracking-wider sm:tracking-wide -translate-y-4.5 translate-x-5.5">
          Quick Links
        </h2>
      </div>
      <div className="mt-1 sm:mt-1.5 md:mt-[0rem] md:ml-[-0.2rem]">
        <div
          id="card1"
          className="w-full py-3 pl-6 pr-5.5 flex items-center gap-2 overflow-x-auto whitespace-nowrap will-change-transform sm:tracking-wide"
        >
          <span className="text-[0.9rem] md:text-[0.7rem] font-[SFProDisplay] px-4 py-2 md:py-1.5 md:px-3 border-1 border-black rounded-full">
            Find a Store
          </span>
          <span className="text-[0.9rem] md:text-[0.7rem] font-[SFProDisplay] px-4 py-2 md:py-1.5 md:px-3 border-1 border-black rounded-full">
            Order Status
          </span>
          <span className="text-[0.9rem] md:text-[0.7rem] font-[SFProDisplay] px-4 py-2 md:py-1.5 md:px-3 border-1 border-black rounded-full">
            Shopping Help
          </span>
          <span className="text-[0.9rem] md:text-[0.7rem] font-[SFProDisplay] px-4 py-2 md:py-1.5 md:px-3 border-1 border-black rounded-full">
            Your Saves
          </span>
        </div>
      </div>
    </div>
  );
};

export default Quick;
