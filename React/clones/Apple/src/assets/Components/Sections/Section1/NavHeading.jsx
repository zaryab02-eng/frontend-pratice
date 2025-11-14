import { motion as Motion } from "framer-motion";
import { CiCirclePlus } from "react-icons/ci";

const NavHeading = () => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="h-[6.125rem] flex justify-center items-center px-8 sm:px-10 sm:pb-3.5 md:relative md:bottom-7 lg:relative lg:pt-3.5 xl:relative xl:pt-6 xl:right-6"
    >
      <div className="w-max leading-5 text-[0.9rem] md:text-[0.7rem] lg:text-[0.9rem] flex text-center">
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
