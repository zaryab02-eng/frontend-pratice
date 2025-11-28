const Quick = () => {
  return (
    <div>
      <h2 className="text-black text-[1.3rem] font-[SFProDisplay] font-semibold tracking-wider -translate-y-4.5 translate-x-5.5">
        Quick Links
      </h2>
      <div
        id="card1"
        className="w-full h-min py-3 pl-6 pr-5.5 flex items-center gap-2 overflow-auto -translate-y-3.5 -translate-x-0.5"
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
  );
};

export default Quick;
