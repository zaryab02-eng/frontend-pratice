import { Card4Data } from "../../../data/Card4Data.jsx";

const Card4 = () => {
  return (
    <div
      id="card1"
      className="h-[18.5rem] w-full relative md:bottom-2.5 lg:top-2 flex overflow-x-scroll lg:gap-x-5 md:gap-x-3 gap-x-5 lg:pl-[1.20rem] pl-[1.40rem] pr-5 py-5"
    >
      {Card4Data.map((card) => {
        return (
          <div
            key={card.id}
            className="h-[13.5rem] md:h-[11.3rem] md:w-[14.8rem] w-[19.3125rem] lg:w-[19.5950rem] lg:h-[15.2rem] shadow-[0_0_40px_rgba(0,0,0,0.1)]
 flex-shrink-0 rounded-2xl pl-6 pt-4.5 md:py-0.5"
          >
            <div
              className={`h-12 flex items-start md:relative md:top-4 ${
                card.id === 3 ? "md:relative right-3 bottom-1" : ""
              } `}
            >
              <span className=" md:text-[2rem] text-green-700 md:top-1 lg:top-2.5 lg:text-[3rem]  text-[2.3rem] relative top-3 sm:text-[2.6rem] sm:relative sm:left-1.5 sm:top-1">
                {card.logo}
              </span>
            </div>
            <a
              href="#"
              className={`text-[1.3rem] md:text-[1.1rem] md:font-semibold leading-5 sm:tracking-normal md:top-[0.7rem] lg:top-6 lg:text-[1.4rem] lg:font-semibold lg:left-1 lg:leading-6 lg:tracking-wide md:left-[-0.1rem] top-4.5 left-0.5 relative tracking-tight ${
                card.id === 4 ? "md:tracking-tight" : ""
              }`}
            >
              {card.text}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Card4;
