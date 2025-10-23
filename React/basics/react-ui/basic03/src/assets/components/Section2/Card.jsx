const Card = ({ id, title, description, color }) => {
  return (
    <div className="py-3">
      <div
        className="h-[14.8544rem] w-[20.795rem] rounded-2xl text-white py-10 px-8 flex flex-col justify-around "
        style={{ backgroundColor: color }}
      >
        <h4 className="text-[1.1418rem] font-semibold pb-16">{id}</h4>
        <div className="w-56 relative bottom-7">
          <h2 className="text-[1.1418rem] font-bold">{title}</h2>
          <p className="text-[0.78125rem] pt-3">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
