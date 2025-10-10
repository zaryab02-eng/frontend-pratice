import { useState } from "react";

const App = () => {
  const [prices, setPrices] = useState([50, 30, 80, 120]);
  const [clickIndex, setClickIndex] = useState(null);
  const [editPrice, setEditPrice] = useState("");

  const saveEdit = () => {
    const newPrices = prices.map((price, index) => {
      if (clickIndex === index) {
        return editPrice;
      }
      return price;
    });
    setPrices(newPrices);
    setClickIndex(null);
  };

  return (
    <>
      {prices.map((price, index) => (
        <div
          className="bg-amber-600 w-[10rem] h-[3rem] flex p-5 justify-between items-center"
          key={index}
        >
          {clickIndex === index ? (
            <>
              <input
                className="bg-white text-black w-[3.5rem] px-2 py-1 outline-none"
                type="number"
                value={editPrice}
                onChange={(e) => setEditPrice(e.target.value)}
              />
              <button
                className="bg-blue-600 text-white font-bold px-2.5 py-1.5 rounded"
                onClick={saveEdit}
              >
                Save
              </button>
              <button
                className="bg-red-600 text-white font-bold px-2.5 py-1.5 rounded"
                onClick={() => setClickIndex(null)}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <p className="bg-black px-2 py-1 text-white">₹{price}</p>
              <button
                className="bg-green-600 text-white font-bold px-2.5 py-1.5 rounded"
                onClick={() => {
                  setClickIndex(index);
                  setEditPrice(price);
                }}
              >
                Edit
              </button>
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default App;
