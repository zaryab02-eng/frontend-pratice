import { GoArrowUpRight } from "react-icons/go";
const StoreBox = () => {
  return (
    <div className="h-max w-full px-6 xl:px-24">
      <div className="h-[16.25rem] w-full font-[SFProDisplay] pt-12 sm:relative sm:bottom-4 md:flex md:justify-between md:relative md:bottom-14 lg:relative lg:bottom-5">
        <h1 className="text-[3rem] md:text-[3.7rem] lg:text-[4.8rem] font-semibold md:relative md:bottom-1.5 ">
          Store
        </h1>
        <div>
          <div className="text-[1.3125rem] md:text-[1.4rem] lg:text-[1.9rem] font-semibold leading-6 lg:leading-8 xl:leading-8 md:text-end lg:font-semibold">
            The best way to buy the <br /> product you love
          </div>
          <div className="mt-8 lg:mt-10 md:flex md:justify-end">
            <a
              href="#"
              className="text-[#0066cc] text-[0.9rem] md:text-[0.7rem] md:font-semibold lg:text-[0.875rem] md:relative md:bottom-2.5 flex items-center gap-0.5"
            >
              Find an Apple Store
              <GoArrowUpRight className="font-semibold relative top-[1px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreBox;
