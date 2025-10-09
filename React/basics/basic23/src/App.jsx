import { useState } from "react";

const App = () => {
  const [names] = useState(["Arshad", "Sabiha", "Zaryab", "Altamash"]);
  const [clickedIndex, setClickedIndex] = useState(null);

  return (
    <>
      {names.map((name, index) => (
        <div
          className="flex bg-amber-200 w-[12srem] h-[4rem] p-3 justify-between"
          key={index}
        >
          {clickedIndex === index ? (
            <input className="bg-white text-black px-2 py-1" type="text" />
          ) : (
            <p className="bg-white text-black px-2 py-1">{name}</p>
          )}
          <button
            className="bg-red-600 px-2 py-1"
            onClick={() => setClickedIndex(index)}
          >
            Edit
          </button>
        </div>
      ))}
    </>
  );
};

export default App;
