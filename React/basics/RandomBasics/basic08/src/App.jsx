import { useState } from "react";

const App = () => {
  const [temp, setTemp] = useState(20);

  return (
    <>
      <div className="flex flex-col gap-y-2">
        <p className="px-2.5 py-2 bg-white rounded text-black">
          Temperature {temp}°
        </p>
        <div className="flex gap-x-0.5">
          <button
            className="px-1.5 py-1 bg-green-600 hover:cursor-pointer hover:bg-green-400"
            onClick={() => setTemp(temp + 1)}
          >
            Increase
          </button>
          <button
            className="px-1.5 py-1 bg-red-600 hover:cursor-pointer hover:bg-red-400"
            onClick={() => setTemp(temp - 1)}
          >
            Decrease
          </button>
        </div>
        {temp < 0 && (
          <p className="text-blue-500 font-semibold text-lg">Freezing!🥶</p>
        )}
        {temp >= 0 && temp < 15 && (
          <p className="text-cyan-600 font-semibold text-lg">Cold!🧥</p>
        )}
        {temp >= 15 && temp < 25 && (
          <p className="text-green-600 font-semibold text-lg">Nice!😊</p>
        )}
        {temp >= 25 && (
          <p className="text-red-500 font-semibold text-lg">Hot!🔥</p>
        )}
      </div>
    </>
  );
};

export default App;
