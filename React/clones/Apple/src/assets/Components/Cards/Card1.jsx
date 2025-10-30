// src/Cards/Card1.jsx
import { Card1Data } from "../../../data/Card1Data.js";

const Card1 = () => {
  return (
    <div
      id="card1"
      className="flex gap-x-5 overflow-x-auto relative pl-[1.65rem] pb-11 pr-7 sm:relative sm:bottom-6 sm:left-0.5 md:relative md:bottom-40 md:pl-5 lg:relative lg:pb-10 xl:relative xl:ml-18 xl:mr-18 "
    >
      {Card1Data.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center gap-y-2 lg:gap-y-4 min-w-[6rem] lg:min-w-[8rem]"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-[6.25rem] lg:w-[7.25rem] h-auto rounded-lg"
          />
          <a
            href="#"
            className="text-sm lg:text-[1rem] font-medium hover:underline font-[SFProDisplay]"
          >
            {item.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Card1;
