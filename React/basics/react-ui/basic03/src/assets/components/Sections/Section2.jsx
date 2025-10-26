import Card from "../Section2/Card";
import SectionTexts from "../Section2/SectionTexts";

const Section2 = (props) => {
  return (
    <>
      <div className="bg-white z-20 h-max w-full top-[31rem] sm:top-[51rem] absolute rounded-t-3xl py-4 px-5 sm:px-11 ">
        <SectionTexts />
        {props.cardData.map((card) => {
          return (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              description={card.description}
              color={card.color}
            />
          );
        })}
      </div>
    </>
  );
};

export default Section2;
