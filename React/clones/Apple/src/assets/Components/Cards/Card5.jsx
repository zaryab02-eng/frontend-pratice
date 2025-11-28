import { Card5Data } from "../../../data/Card5Data";
const Card5 = () => {
  return (
    <div
      id="card1"
      className="flex overflow-x-auto -ml-6 relative pr-6 xl:relative xl:pl-20 xl:pr-24 xl:bottom-25 "
    >
      {Card5Data.map((product) => (
        <div
          key={product.id}
          className={`h-[28.125rem] w-[19.3125rem] md:font-light shadow-2xl lg:h-[31.25rem] md:h-[23.5rem] lg:w-[25rem] md:w-[19rem] shrink-0 rounded-2xl relative mt-6 pl-7 lg:pl-8 md:pl-5 md:pt-9 pt-12 flex flex-col justify-start bg-cover bg-center ${
            product.id === 1 ? "relative pt-17 ml-12 sm:relative sm:pt-18" : ""
          }`}
          style={{ backgroundImage: `url('${product.image}')` }}
        >
          <div
            className={`${
              product.theme === "light" ? "text-black" : "text-white"
            }  flex flex-col relative bottom-11 font-medium lg:translate-y-4 lg:-translate-x-1.5 `}
          >
            <a
              href="#"
              className="text-[0.7rem] md:text-[0.6rem] lg:text-[0.7rem] md:relative md:top-6 md:left-1 md:tracking-tight lg:tracking-wider"
            >
              {product.tag}
            </a>
            <a
              href="#"
              className={`text-[1.3000rem] leading-6 relative top-2.5 tracking-wider font-semibold md:text-[1.4rem] lg:text-[1.77rem] lg:tracking-wide lg:leading-8 md:tracking-normal font-[SFProDisplay] md:relative md:mt-4 md:ml-1 md:font-normal`}
            >
              {product.name}
            </a>
            <div className="flex flex-col gap-y-0.5 font-[SFProDisplay]">
              <span
                className={`text-[1.0525rem] md:text-[0.9rem] lg:text-[1.2rem] md:tracking-tight md:leading-4 leading-5 relative top-4 font-medium text-gray-900 lg:leading-6 tracking-wide font-[SFProDisplay] lg:tracking-normal ${
                  product.id === 3
                    ? "leading-5 tracking-wide text-[1.0625rem]"
                    : ""
                } ${
                  product.id === 1
                    ? "md:text-[0.9rem] md:tracking-tight md:relatives md:ml-1 md:leading-4"
                    : ""
                } `}
              >
                {product.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card5;
