const Quick = () => {
  return (
    <div className="sm:translate-y-5">
      <h2 className="text-black text-[1.3rem] font-[SFProDisplay] font-semibold tracking-wider sm:tracking-wide -translate-y-4.5 translate-x-5.5">
        Quick Links
      </h2>
      <div className="-translate-y-3.5 -translate-x-0.5">
        <div
          id="card1"
          className="w-full h-min py-3 pl-6 pr-5.5 flex items-center gap-2 overflow-x-auto"
        >
          <span className="text-[0.9rem] font-[SFProDisplay] px-4 py-2 border-1 border-black w-max h-max rounded-full tracking-wide whitespace-nowrap">
            Find a Store
          </span>
          <span className="text-[0.9rem] font-[SFProDisplay] px-4 py-2 border-1 border-black w-max h-max rounded-full tracking-wide whitespace-nowrap">
            Order Status
          </span>
          <span className="text-[0.9rem] font-[SFProDisplay] px-4 py-2 border-1 border-black w-max h-max rounded-full tracking-wide whitespace-nowrap">
            Shopping Help
          </span>
          <span className="text-[0.9rem] font-[SFProDisplay] px-4 py-2 border-1 border-black w-max h-max rounded-full tracking-wide whitespace-nowrap">
            Your Saves
          </span>
        </div>
      </div>
    </div>
  );
};

export default Quick;
