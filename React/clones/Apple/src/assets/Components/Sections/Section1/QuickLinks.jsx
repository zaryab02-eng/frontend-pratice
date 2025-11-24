const Quick = () => {
  return (
    <div className="relative md:bottom-117 md:right-1">
      <h2 className="relative bottom-3 left-5.5 text-black text-[1.3125rem] font-[SFProDisplay] font-semibold tracking-wide">
        Quick Links
      </h2>
      <div
        id="card1"
        className="w-full h-min py-3 pl-6 pr-5.5 flex items-center gap-2 overflow-auto relative md:bottom-1 md:right-1"
      >
        <span className="text-[0.67rem] font-[SFProDisplay] px-4 md:px-3.5 py-1.5 md:py-1 border-1 border-black w-max h-max rounded-full bottom-2 relative tracking-wide whitespace-nowrap">
          Find a Store
        </span>
        <span className="text-[0.7rem] font-[SFProDisplay] px-4 md:px-3.5 py-1.5 md:py-1 border-1 border-black w-max h-max rounded-full bottom-2 relative tracking-wide whitespace-nowrap">
          Order Status
        </span>
        <span className="text-[0.7rem] font-[SFProDisplay] px-4 md:px-3.5 md:py-1 py-1.5 border-1 border-black w-max h-max rounded-full bottom-2 relative tracking-wide whitespace-nowrap">
          Shopping Help
        </span>
        <span className="text-[0.7rem] font-[SFProDisplay] px-4 md:px-3.5 md:py-1 py-1.5 border-1 border-black w-max h-max rounded-full bottom-2 relative tracking-wide whitespace-nowrap">
          You Saves
        </span>
      </div>
    </div>
  );
};

export default Quick;
