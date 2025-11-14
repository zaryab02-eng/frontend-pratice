import { motion as Motion } from "framer-motion";
import { CiCirclePlus } from "react-icons/ci";

const NavHeading = () => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="h-min w-full bg-[#FFFFFF] z-0 flex justify-center items-center py-5 relative bottom-4.5 mt-4.5 px-8 sm:px-10 sm:py-5 md:relative md:bottom-7 lg:relative lg:pt-3.5 xl:relative xl:pt-6 xl:right-6"
    >
      <div className="w-max leading-5 text-[0.9rem] md:text-[0.7rem] lg:text-[0.9rem] flex text-center font-[SFProDisplay] sm:tracking-widest">
        <p className="font-[SFProDisplay] tracking-wide">
          Get up to 6 months of No Cost EMI plus up to ₹10000.00 instant
          cashback on{" "}
          <br className="hidden xl:hidden md:hidden lg:hidden sm:flex" />{" "}
          selected products with eligible cards.
          <span className="text-[#3997E3] font-semibold inline-flex items-center gap-1 relative left-0.5">
            See offers <CiCirclePlus />
          </span>
        </p>
      </div>
    </Motion.div>
  );
};

export default NavHeading;
