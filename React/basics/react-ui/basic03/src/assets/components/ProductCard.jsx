const ProductCard = () => {
  return (
    <div className="p-6">
      <div className="h-[21rem] w-64 bg-white rounded-2xl shadow-2xl flex flex-col justify-between p-5 py-[20px] ">
        <div className="relative">
          <div className="w-[216px] rounded-2xl h-[145px] bg-black "></div>
          <div className="bg-[#E53431] absolute top-0 right-0 p-2 h-min w-min rounded-tr-2xl text-[15px] rounded-bl-[4rem] flex justify-end items-start">
            <span>-20%</span>
          </div>
        </div>
        <div className="text-black">
          <div className="flex justify-end relative top-[-1rem]">
            <span className="text-[12px] font-semibold">4.5⭐</span>
          </div>
          <div className="flex text-[18px] w-max justify-center">
            <h1 className="font-bold">AcoustiX Pro Headphones</h1>
          </div>
          <div className="flex justify-start items-center gap-1.5 relative left-2 top-2">
            <span className="text-[13px] line-through text-[#ACACAC] decoration-[#ACACAC]">
              $199.99
            </span>
            <span className="text-[#0D452C] font-bold text-[20px]">
              $159.99
            </span>
          </div>
        </div>
        <div className="absolute"></div>
        <button className="text-white bg-gradient-to-r from-blue-400 to-blue-500 font-bold py-1 rounded-full relative bottom-0">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
