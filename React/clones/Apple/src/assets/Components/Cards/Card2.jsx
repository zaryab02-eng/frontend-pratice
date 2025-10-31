import { Card2Data } from "../../../data/Card2Data.js";

const Card2 = () => {
  return (
    <div className="flex overflow-scroll gap-x-4 sm:gap-x-5 relative pr-6">
      {Card2Data.map((product) => (
        <div
          key={product.id}
          className="h-[28.125rem] w-[19.3125rem] md:w-[19rem] lg:w-[25rem] lg:h-[31.25rem] md:h-[23rem] shrink-0 rounded-2xl relative mt-6 pl-7 lg:pl-8 lg:pt-11 md:pl-5 md:pt-9 pt-12 flex flex-col justify-start bg-cover bg-center"
          style={{ backgroundImage: `url('${product.image}')` }}
        >
          <div
            className={`${
              product.theme === "light" ? "text-black" : "text-white"
            }`}
          >
            <a
              href="#"
              className="text-[1.3125rem] font-semibold lg:tracking-wider tracking-tight md:text-[1.4rem] lg:text-[1.8rem] md:tracking-tighter font-[SFProDisplay]"
            >
              {product.name}
            </a>
            <div className="flex flex-col gap-y-0.5 font-[SFProDisplay]">
              <span className="text-[1.0625rem] md:text-[0.9em] lg:text-[1.1rem] tracking-normal lg:tracking-wider">
                {product.highlight}
              </span>
              <span className="text-[0.875rem] md:text-[0.7em] lg:text-[0.8rem] tracking-wide font-[SFProDisplay] lg:tracking-wider">
                {product.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card2;
