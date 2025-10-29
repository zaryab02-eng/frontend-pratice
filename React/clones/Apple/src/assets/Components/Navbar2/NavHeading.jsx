import { CiCirclePlus } from "react-icons/ci";
const NavHeading = () => {
  return (
    <div className="h-[6.125rem] flex justify-center items-center px-6 sm:px-10 ">
      <div className="w-max leading-5 text-[0.850rem] flex text-center">
        <p>
          Get up to 6 months of No Cost EMI plus up to ₹10000.00 instant
          cashback on selected products with eligible cards.
          <span className="text-blue-700 font-semibold inline-flex items-center gap-1 relative left-0.5">
            See offers <CiCirclePlus />
          </span>
        </p>
      </div>
    </div>
  );
};

export default NavHeading;
