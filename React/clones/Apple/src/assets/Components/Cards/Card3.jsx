import { Card3Data } from "../../../data/Carrd3Data.jsx";
const Card2 = () => {
  return (
    <div
      id="card1"
      className="flex overflow-x-auto -ml-6 gap-x-5 md:gap-x-4 sm:gap-x-5 relative pr-6 xl:relative xl:pl-18 xl:pr-24 xl:bottom-1 snap-x snap-mandatory snap-smooth sm:snap-x sm:snap-mandatory sm:snap-smooth"
    >
      {Card3Data.map((product) => (
        <div
          key={product.id}
          className={`h-[28.125rem] w-[19.3125rem] md:font-light snap-center sm:snap-end md:w-[22rem] lg:w-[25rem] lg:h-[31.25rem] md:h-[23rem] shrink-0 rounded-2xl relative mt-6 pl-7 lg:pl-8 lg:pt-11 md:pl-5 md:pt-9 pt-12 flex flex-col justify-start bg-cover bg-center ${
            product.id === 1 ? "relative pt-17 ml-12 sm:relative sm:pt-10" : ""
          } `}
          style={{ backgroundImage: `url('${product.image}')` }}
        >
          <div
            className={`${
              product.theme === "light" ? "text-black" : "text-white"
            }  flex flex-col relative bottom-6 font-medium`}
          >
            <a href="#" className="text-[0.7rem] md:mt-5 ">
              {product.tag}
            </a>
            <a
              href="#"
              className={`text-[1.3000rem] leading-6 relative top-2.5 tracking-wider font-semibold lg:tracking-wider md:text-[1.4rem] lg:text-[1.8rem] md:tracking-normal font-[SFProDisplay] ${
                product.id === 1 ? "md:relative md:mt-4 md:ml-1 " : ""
              }`}
            >
              {product.name}
            </a>
            <div className="flex flex-col gap-y-0.5 font-[SFProDisplay]">
              <span
                className={`text-[1.0525rem] md:text-[0.9rem] md:tracking-tight md:leading-4 leading-5 relative top-4 font-medium text-gray-900 lg:text-[0.8rem] tracking-wide font-[SFProDisplay] lg:tracking-wider ${
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

export default Card2;
