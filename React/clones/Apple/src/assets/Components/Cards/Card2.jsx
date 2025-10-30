import { Card2Data } from "../../../data/Card2Data.js";

const Card2 = () => {
  return (
    <div>
      {Card2Data.map((product) => (
        <div
          key={product.id}
          className="h-[28.125rem] w-[19.3125rem] rounded-2xl relative mt-6 pl-7 pt-12 flex flex-col justify-start bg-cover bg-center"
          style={{ backgroundImage: `url('${product.image}')` }}
        >
          <div className="text-white">
            <a
              href="#"
              className="text-[1.3125rem] font-semibold tracking-tight"
            >
              {product.name}
            </a>
            <div className="flex flex-col gap-y-0.5">
              <span className="text-[1.0625rem] tracking-normal">
                All out Pro.
              </span>
              <span className="text-[0.875rem] tracking-wide">
                From ₹134900.00
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card2;
